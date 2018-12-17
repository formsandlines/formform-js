import * as d3 from 'd3';
import { getRealDepth } from '../../common/d3-helper';

/* Cascading D3-Styles - by Peter Hofmann, 12/2018 */

// -----------------------
// global styles

const global = {
    common: {
        color: {base: 'black',
                ground: 'white',
                indef: 'red',
                light: '#ddd',},
        dashes: '0.5%, 0.5%',
    }
};
global.basic = {
    ...global.common,
};
global.gestalt = {
    ...global.common,
    color: {...global.common.color,
            pos: 'white', 
            neg: 'black'},
};
const [basic, gestalt] = [global.basic, global.gestalt];

// -----------------------
// d3.tree styles:

export const tree = {
    common: {
        nodeSize: {w: 10.0, h: 10.0}, // size of nodes
        nodeSeparation: {hz: 20, vt: 40}, // separation between nodes
        fontSize: 14,
    }
};

tree.basic = {
    ...basic,
    ...tree.common,
};
tree.basic.applyNodeStyles = function(nodes, nodePartitions) {
    const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

    forms.selectAll('circle')
        .style('stroke', this.color.base)
        .style('fill', this.color.ground);


    elements.selectAll('circle')
        .style('fill', this.color.base);

    reEntries.selectAll('circle')
        .style('stroke', this.color.indef)
        .style('fill', this.color.ground);
    reChilds.selectAll('circle')
        .style('stroke', this.color.indef)
        .style('stroke-dasharray', this.dashes);
    rePoints.selectAll('circle')
        .style('fill', this.color.indef);

    nodes.selectAll('text')
        .style('font-size', this.fontSize)
        .style('dominant-baseline','middle')
        .style('fill', this.color.base)

    sets.selectAll('circle.inner')
        // .classed('inner')
        .style('stroke', 'none')
        .style('fill', this.color.base);

};
tree.basic.applyLinkStyles = function(links, linkPartitions) {
    const [reChildLink] = linkPartitions;

    links.selectAll('path')
        .style('stroke', this.color.base);

    reChildLink.selectAll('path')
        .style('stroke', this.color.indef)
        .style('stroke-dasharray', this.dashes);
};

tree.gestalt = {
    ...gestalt,
    ...tree.common,
};
tree.gestalt.applyNodeStyles = function(nodes, nodePartitions) {
    const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

    tree.basic.applyNodeStyles(nodes, nodePartitions);
};
tree.gestalt.applyLinkStyles = function(links, linkPartitions) {
    // const [reChildLink] = linkPartitions;

    tree.basic.applyLinkStyles(links, linkPartitions);
};

// -----------------------
// d3.pack styles:

export const pack = {
    common: {
        radius: 15,
        padding: 12,
        fontSize: 14,
    }
};

pack.basic = {
    ...basic,
    ...pack.common,
};
pack.basic.applyNodeStyles = function(nodes, nodePartitions) {
    const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

    forms.select('circle')
        .style('stroke', this.color.base)
        .filter(d => d.data.unmarked)
            .style('stroke','none');
    reEntries.select('circle')
        .style('stroke', this.color.indef)
        .filter(d => d.data.lastOpen)
            .style('stroke','none');

    elements.selectAll('text')
        .style('fill', this.color.base)
        .style('dominant-baseline','middle')
        .style('text-anchor', 'middle');

    unclear.select('rect')
        .style('fill', this.color.light);

    rePoints.select('circle')
        .style('fill', this.color.indef)
        .style('stroke','none');
};

pack.gestalt = {
    ...gestalt,
    ...pack.common,
};
pack.gestalt.invertFill = function(d) {
    return getRealDepth(d)%2 ? this.color.pos : this.color.neg;
};
pack.gestalt.applyNodeStyles = function(nodes, nodePartitions) {
    const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

    forms.select('circle').filter(d => !d.data.unmarked)
        .style('stroke', 'none')
        .attr('fill', d => this.invertFill(d));

    reEntries.select('circle').filter(d => !d.data.lastOpen)
        .style('stroke', 'none')
        .attr('fill', this.color.indef);

    elements.selectAll('text')
        .style('stroke', 'none')
        .attr('fill', d => this.invertFill(d))
        .style('dominant-baseline','middle')
        .style('text-anchor', 'middle');

    unclear.select('rect')
        .style('fill',this.color.light);
    unclear.select('text')
        .style('fill',this.color.base);
        
    rePoints.select('circle')
        .style('fill',this.color.indef)
        .style('stroke','none');
    // elements.filter(d => (type === 'var' || type === 'const' || type === 'unclear') )

};