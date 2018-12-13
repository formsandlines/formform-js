import * as d3 from 'd3';

import { textSize } from '../../common/helper';
import chartFactory from '../../common/d3-helper';
import './d3-graph.scss';

const graph = chartFactory({
  margin: { left: 50, right: 50, top: 50, bottom: 50 }, 
  padding: { left: 10, right: 10, top: 10, bottom: 10 }, 
});

graph.init = function init(graphType, data, ...args) {
  this[graphType].call(this, data, ...args);
  this.innerHeight = this.height - this.margin.top - this.margin.bottom - this.padding.top - this.padding.bottom;
  this.innerWidth = this.width - this.margin.left - this.margin.right - this.padding.left - this.padding.right;

}

graph.tree = function Tree(data) {
  const hr = d3.hierarchy(data, d => d.space)
    .sum(d => d.children ? 0 : 1);


  [this.hr] = [hr];
}

graph.pack = function Pack(data) {
  const hr = d3.hierarchy(data, d => d.space)
    .sum(d => d.children ? 0 : 1);

  // const layout = d3.pack()
  //   .padding(d => {
  //     let pad = padding;
  //     if (d.data.unmarked && d.children.length === 1) pad = 0;
  //     return pad;
  //   })
  //   .radius(d => {
  //     let rad = 15;
  //     if(typeof(d.data.symbol) === 'string') {
  //       rad = textSize(d.data.symbol, fontSize).width /2;
  //       if(d.data.type === 'unclear') rad += padding*2;
  //     }
  //     else if(d.data.children || d.data.type === 'reEntryPoint') rad = 0;
  //     return rad;
  //   });
  // const root = layout(hr);

  [this.hr] = [hr];
}

export default graph;