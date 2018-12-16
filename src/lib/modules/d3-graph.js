import * as d3 from 'd3';

import { textSize, saveSvg, pad } from '../../common/helper';
import chartFactory, { textSubscript } from '../../common/d3-helper';

import './d3-styles.scss';
import * as styles from './d3-styles.js';


function resolveNodes(root, nodes) {
  // resolves descendant nodes into filtered selections
  const leaves = nodes.filter(d => root.leaves().filter(l => l === d).pop() )
      .classed('leaf', true);

  const sets = nodes.filter(d => d.data.type === 'form' || d.data.type === 'reEntry')
      .classed('form', true)
  const forms = sets.filter(d => d.data.type === 'form')
      .classed('form', true);
  const reEntries = sets.filter(d => d.data.type === 'reEntry')
      .classed('reEntry', true);

  const elements = nodes.filter(d => !(d.data.type === 'form' || d.data.type === 'reEntry'))
      .classed('element', true);
  const vars = elements.filter(d => d.data.type === 'var')
      .classed('var', true);
  let consts = elements.filter(d => d.data.type === 'const')
      .classed('const', true);
  consts.unmarked = elements.filter(d => d.data.value == 0).classed('unmarked', true);
  consts.marked = elements.filter(d => d.data.value == 1).classed('marked', true);
  consts.indef = elements.filter(d => d.data.value == 2).classed('indef', true);
  consts.imag = elements.filter(d => d.data.value == 3).classed('imag', true);

  const unclear = elements.filter(d => d.data.type === 'unclear')
      .classed('unclear', true);

  const rePoints = elements.filter(d => d.data.type === 'reEntryPoint')
      .classed('reEntryPoint', true);

  return [leaves, sets, forms, reEntries, rePoints, elements, vars, consts, unclear];
}

function resolveLinks(root, links) {
  return [];
}


const graph = {};

graph.init = function init(graphType, data, opts, ...args) {
  // create basic svg-structure from chartFactory and merge options with configuration
  const proto = chartFactory( { 
    ...{ margin: { left: 50, right: 50, top: 50, bottom: 50 }, 
         padding: { left: 10, right: 10, top: 10, bottom: 10 },
         styleClass: 'basic' },
    ...opts
  } );

  // merge this graph with the chart structure
  Object.assign(this, proto);
  // calculate inner dimensions of the svg-chart
  this.innerHeight = this.height - this.margin.top - this.margin.bottom - this.padding.top - this.padding.bottom;
  this.innerWidth = this.width - this.margin.left - this.margin.right - this.padding.left - this.padding.right;

  // call the appropriate method to build the graph
  this[graphType].call(this, data, ...args);
}

graph.tree = function Tree(data) {
  const chart = this.container;
  // create a d3-hierarchy from our form-json
  const root = d3.hierarchy(data, d => d.space);
  // define tree layout
  const layout = d3.tree()
    .size([
      this.innerWidth,
      this.innerHeight,
    ]);
  const tree = layout(root);

  const design = styles.tree[this.styleClass];
  const [fontSize] = 
      [design.fontSize];

  const line = d3.line().curve(d3.curveBasis);
  chart.attr('class', 'graph-tree');

  chart.selectAll('.link')
      .data(tree.descendants().slice(1))
          .enter().append('path')
          .attr('class', 'link')
          .attr('d', d => line([
              [d.x, d.y],
              [d.x, (d.y + d.parent.y) / 2],
              [d.parent.x, (d.y + d.parent.y) / 2],
              [d.parent.x, d.parent.y]],
  ));
  // const [] = resolveLinks(tree, links);

  const nodes = chart.selectAll('.node')
      .data(tree.descendants())
      .enter().append('g')
          .attr('transform', d => `translate(${d.x},${d.y})`);
  const [leaves, sets, forms, reEntries, elements, vars, consts, unclear] = resolveNodes(tree, nodes);

  nodes.append('circle')
      .attr('class', 'node')
      .attr('r', 4.5);
      // .attr('cx', d => d.x)
      // .attr('cy', d => d.y);

  nodes.append('text')
      .attr('x', 10)
      .attr('y', 5)
      .style('font-size', fontSize)
      .text(d => `${d.data.type}: ${d.data.symbol}`);

console.log(root);
  [this.root, this.layout, this.chart, this.tree, this.design] = 
    [root, layout, chart, tree, design];
}

graph.pack = function Pack(data) {
  const chart = this.container;
  // create a d3-hierarchy from our form-json
  const root = d3.hierarchy(data, d => d.space)
    .sum(d => d.children ? 0 : 1);

  // set up design variables
  const design = styles.pack[this.styleClass];
  const [radius, padding, fontSize] = 
      [design.radius, design.padding, design.fontSize];

  // define pack layout
  const layout = d3.pack()
    .padding(d => {
      let pad = padding;
      if (d.data.unmarked && d.children.length === 1) pad = 0;
      return pad;
    })
    .radius(d => {
      let rad = radius;
      if(typeof(d.data.symbol) === 'string') {
        rad = textSize(d.data.symbol, fontSize).width /2;
        if(d.data.type === 'unclear') rad += padding*2;
      }
      else if(d.data.children || d.data.type === 'reEntryPoint') rad = 0;
      return rad;
    });
  const pack = layout(root);

  chart.attr('class', 'graph-pack')
      .attr('transform', `translate(${pack.r + this.padding.left},${pack.r + this.padding.top})`);

  const nodes = chart.selectAll('.node')
      .data(pack.descendants())
      .enter().append('g')
      .classed('node', true)
      .attr('transform', d => `translate(${d.x},${d.y})`);

  const nodePartitions = resolveNodes(pack, nodes);
  const [leaves, sets, forms, reEntries, rePoints, elements, vars, consts, unclear] = nodePartitions;

  sets.append('circle')
      .attr('r', d => d.r);
  // forms //.filter(d => !d.data.unmarked)
  //     // .filter(d => d.data.reChild)
  // reEntries //.filter(d => !d.data.lastOpen)
  vars.append('text')
      .call(textSubscript(d => d.data.symbol));

  consts.append('text')
      .text(d => d.data.value);

  unclear.append('rect')
      .attr('transform', d => 
        `skewX(-30) translate(${-(d.r - padding)},
        ${-(textSize('x',fontSize).height + padding*2)/2})`)
      .attr('width', d => d.r*2 - padding*2)
      .attr('height', d => (textSize('x',fontSize).height + padding*2))
  unclear.append('text')
      .text(d => d.data.symbol);

  rePoints
      .append('circle')
      .attr('r', 1.5);
      // .attr('cx', -5)

  design.applyAttr(nodePartitions);

  [this.root, this.layout, this.chart, this.pack, this.design] = 
    [root, layout, chart, pack, design];
}

graph.treemap = function Pack(data) {

}

graph.force = function Pack(data) {

}

export function save(format, svg, name) {
  console.log(name);
  
  name = name || d3.select(svg.parentNode).attr('id');
  const date = new Date();
  let timestamp = (''
  + date.getUTCFullYear()).substr(2) 
  + (pad((date.getUTCMonth()+1),2)) 
  + (pad(date.getUTCDate(),2)) + '-'
  + (pad((date.getHours()),2))
  + (pad((date.getMinutes()),2))
  + (pad((date.getSeconds()),2));

	try {
    switch(format) {
      case 'svg':
        saveSvg(svg, timestamp+'_'+name+'.svg');
        break;
    }
	} catch(e) {
		console.log(e);
	}
}

export default graph;