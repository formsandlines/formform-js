import * as d3 from 'd3';

import { saveSvg, pad, getTimestamp } from '../../common/helper';
import chartFactory, { fitChart, textSize, textSubscript, circleLabel } from '../../common/d3-helper';

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

    const reChilds = forms.filter(d => d.data.reChild)
        .classed('reChild', true);

    const rePoints = elements.filter(d => d.data.type === 'reEntryPoint')
        .classed('reEntryPoint', true);

    return [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear];
}

function resolveLinks(root, links) {
    // resolves links between descendant nodes into filtered selections
    const reChildLink = links.filter(d => d.target.data.reChild)
        .classed('reChildLink', true);

    const rePointLink = links.filter(d => d.target.data.type === 'reEntryPoint')
        .classed('rePointLink', true);

    return [reChildLink, rePointLink];
}

export default class D3Graph {

    constructor(graphType, data, opts, ...args) {
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
        this.constructor[graphType].call(this, data, ...args);
        //   this[graphType](data);
        //   this[graphType].call(this, data, ...args);
    }
// (()())((()))((()))
// (((c)(a)b))()()
    static tree(data) {
        const chart = this.container;
        // create a d3-hierarchy from our form-json
        const root = d3.hierarchy(data, d => d.space);

        // set up design variables
        const design = styles.tree[this.styleClass];
        const [nodeSize, nodeSep] = [design.nodeSize, design.nodeSeparation];
        const [fontSize, font] = [design.font.size, design.font.family];

        root.dx = nodeSize.w + nodeSep.hz;
        root.dy = this.width / (root.height + 1);

        // define tree layout
        const layout = d3.tree()
            // .size([ this.innerWidth, // - this.padding.left , 
            //         this.innerHeight //- this.padding.top
            //       ]);
            .nodeSize([
                root.dx,
                root.dy
            ]) // ([nodeSize.w + nodeSep.hz, nodeSize.h + nodeSep.vt])
            .separation((a,b) => {
                return a.parent == b.parent ? 1 : 2;
            });
        const tree = layout(root);

        // compute min/max x-values
        let x0 = Infinity;
        let x1 = -x0;
        tree.each(d => {
            if (d.x > x1) x1 = d.x;
            if (d.x < x0) x0 = d.x;
        });
        // compute new height based on the difference of min/max x-values of tree nodes + twice the padding
        const rootUnmarked = root.data.unmarked;
        const axisHeight = 30;
        this.height = x1 - x0 + this.padding.top*2 + axisHeight;

        // setup svg container
        this.svg
            .attr('width', this.width)
            .attr('height', this.height); // + root.dx*2)
            // .style('width', '100%')
            // .style('height', 'auto');
        styles.clearDefaults(this.svg); // clear default styles for svg export

        // setup basic chart structure
        chart
            .classed('graph-tree', true)
                .attr('transform', `translate(${this.padding.left + (root.data.unmarked ? -root.dy : 0)},${this.padding.top - x0})`);
                // .attr('transform', `translate(${(root.data.unmarked ? -root.dy : 0)},${0})`);
                // .attr('transform', () => {
                //     if (root.data.unmarked) return `translate(${-root.dy},${0})`
                // }); 
                // root.dy / 3
                // .attr('transform', `translate(${0},${0})`);
            // .attr('transform', `translate(${this.innerWidth/2},${0})`);
            // .attr('transform', `translate(${this.padding.left},${this.padding.top})`);
        
        // add vertical axis lines for depth

        const rootHeights = d3.range(root.height + (rootUnmarked ? 0:1));

        this.depthScale = d3.scaleOrdinal()
            .domain( rootHeights )
            .range( rootHeights.map(i => (i+(rootUnmarked ? 1:0))*root.dy) );
        
        const depthAxis = d3.axisBottom()
            .scale(this.depthScale)
            .tickSizeInner(-this.height)
            .tickSizeOuter(0)
            .tickPadding(8)
            .tickValues( this.depthScale.domain().map(i => 
                (this.depthScale.domain().length < 15) ? 'Depth '+i : i
            ) );

        const axis = chart.append('g')
            .classed('depthAxis', true)
            .attr('transform', `translate(0, ${x1 + this.padding.bottom})`)
            .call(depthAxis);
        axis.select('.domain').remove();
        

        // add groups for links and nodes

        const links = chart.selectAll('.link')
            .data(tree.links()) // tree.descendants().slice(1))
            .enter().append('g')
                .classed('link', true)

        const nodes = chart.selectAll('.node')
            .data(tree.descendants())
            .enter().append('g')
                .classed('node', true)
                .attr('transform', d => `translate(${d.y},${d.x})`);

        if (rootUnmarked) {
            links.filter(d => d.source.depth === 0)
                .remove();

            nodes.filter(d => d.depth === 0)
                .remove();
        }

        // generate link partition selections
        const linkPartitions = resolveLinks(tree, links);
        const [reChildLink, rePointLink] = linkPartitions;

        // generate node partition selections
        const nodePartitions = resolveNodes(tree, nodes);
        const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

        // curved line generator
        const line = d3.line().curve(d3.curveBasis);

        links
            .append('path')
                .attr('d', d3.linkHorizontal()
                    .x(d => d.y)
                    .y(d => d.x));
            // .attr('d', d => line([
            //     [d.target.x, d.target.y],
            //     [d.target.x, (d.target.y + d.source.y) / 2],
            //     [d.source.x, (d.target.y + d.source.y) / 2],
            //     [d.source.x, d.source.y]],
            //     ));

        // nodes.filter(d => !d.data.unmarked)
        //     // .filter(d => d.data.reChild)
        nodes.filter(d => !d.data.unmarked)
            .append('circle')
            .attr('r', nodeSize.w/2)
            // .attr('cx', d => d.x)
            // .attr('cy', d => d.y);
        // rePoints.selectAll('circle')
        rePoints.append('text')
            .attr('x', nodeSize.w/2 + 2)
            .text(d => {
                let p = d.parent;
                let counter = 0;
                while(p.data.type !== 'reEntry') {
                    p = p.parent;
                    if (counter > 1000) return null; // security
                    counter++;
                }
                // const reEven = p.data.reEven ? 'even' : 'odd';
                // return `${reEven} re-entry №`;
                return p.data.reEven ? '2|r|' : '2|r|+1';
            });
            // .attr('r', design.radiusSml);

        elements.selectAll('circle')
            .attr('r', (nodeSize.w/2)/2);

        nodes
            .append('text')
            .attr('x', nodeSize.w/2 + 2)
            // .attr('y', 5)
        
        vars.selectAll('text')
            .call(textSubscript(d => d.data.symbol));
            //.text(d => `${d.data.symbol}`);
        consts.selectAll('text')
            .text(d => `= ${d.data.value}`);
        unclear.selectAll('text')
            .text(d => `/${d.data.symbol}/`);

        sets.filter(d => d.children)
            .append('circle')
            .classed('inner',true)
            .attr('r', (nodeSize.w/2)/2);


        // apply all style-related attributes to the selections
        design.applyAxisStyles(axis);
        design.applyLinkStyles(links, linkPartitions);
        design.applyNodeStyles(nodes, nodePartitions);

        // fitChart(chart, this.padding);

        // chart.attr('transform', `translate(${chart.node().getBBox().width/2},${0})`);

        // debugging:
        [this.root, this.layout, this.chart, this.tree, this.design] = 
            [root, layout, chart, tree, design];
    }

    static pack(data) {
        const chart = this.container;
        // create a d3-hierarchy from our form-json
        // data.forEach()
        styles.clearDefaults(this.svg); // clear default styles for svg export

        const root = d3.hierarchy(data, d => d.space)
            .sum(d => d.children ? 0 : 1);

        // set up design variables
        const design = styles.pack[this.styleClass];
        const [radius, padding] = [design.radius, design.padding];
        const [fontSize, font] = [design.font.size, design.font.family];

        // define pack layout
        const layout = d3.pack()
        .padding(d => {
            let pad = padding;
            if (d.data.type === 'form' && d.children.length === 1) {
                if (d.children[0].data.type === 'form')
                    pad = pad * 0.4;
            }
            if (d.data.unmarked && d.children.length === 1) pad = 0;
            return pad;
        })
        .radius(d => {
            let rad = radius;
            if(typeof(d.data.symbol) === 'string') {
                rad = textSize(d.data.symbol, fontSize, font).width /2;
                if(d.data.type === 'unclear') rad += padding*2;
            }
            else if(d.data.value) {
                rad = textSize(d.data.value+'', fontSize, font).width /2;
            }
            else if(d.data.children || d.data.type === 'reEntryPoint') rad = 0;
            return rad;
        });
        // .size([ this.innerWidth, this.innerHeight ]);
        const pack = layout(root);

        // d3.select(chart.node().parentElement)
        //     .attr('width', pack.r*2 + this.padding.left)
        //     .attr('height', pack.r*2 + this.padding.top);


        // setup basic chart structure
        chart.attr('class', 'graph-pack')
            .attr('transform', `translate(${pack.r + this.padding.left},${pack.r + this.padding.top})`);

        const nodes = chart.selectAll('.node')
            .data(pack.descendants())
            .enter().append('g')
                .classed('node', true)
                .attr('transform', d => `translate(${d.x},${d.y})`);

        // generate node partition selections
        const nodePartitions = resolveNodes(pack, nodes);
        const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

        // define detailled structure/logic

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
            ${-(textSize('x',fontSize, font).height + padding*2)/2})`)
            .attr('width', d => d.r*2 - padding*2)
            .attr('height', d => (textSize('x',fontSize, font).height + padding*2))
        unclear.append('text')
            .text(d => d.data.symbol);

        rePoints
            .append('circle')
            .attr('r', 1.5);
            // .attr('cx', -5)

        reEntries
            .call(circleLabel( d => d.data.reEven ? '2|r|' : '2|r|+1', design.fontContext.size, design.fontContext.family ));
            // .append('text')
            // .raise()
            // .text(d => d.data.reEven ? '2|r|' : '2|r|+1');


        // apply all style-related attributes to the selections
        design.applyNodeStyles(nodes, nodePartitions, chart);

        fitChart(chart, this.padding);

        // debugging:
        [this.root, this.layout, this.chart, this.pack, this.design] = 
            [root, layout, chart, pack, design];
    }

    static treemap(data) {

    }

    static force(data) {

    }

}

export const save = function(format, svg, name) {
    // exports graphs into svg
    
    name = name || d3.select(svg.parentNode).attr('id');
    const timestamp = getTimestamp();

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
// export default graph;