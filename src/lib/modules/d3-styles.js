import * as d3 from 'd3';
import { getRealDepth, opacity, circleDashArray } from '../../common/d3-helper';

/* Cascading D3-Styles - by Peter Hofmann, 12/2018 */

// -----------------------
// global styles

const global = {
    common: {
        font: { family: 'sans-serif', 
                size: '14px',
            },
        fontContext: { family: 'sans-serif',
                        size:  '9px',
        },
        color: {base: d3.color('black'),
                ground: d3.color('white'),
                indef: d3.color('red'),
                light: d3.color('#ddd'),
            },
        dashes: {
            },
    }
};
global.basic = {
    ...global.common,
    font: { ...global.common.font,
            family: 'georgia, serif', 
        },
};
global.gestalt = {
    ...global.common,
    font: { ...global.common.font,
            family: 'sans-serif', 
    },
    color: {...global.common.color,
            pos: d3.color('white'), 
            neg: d3.color('black')
        },
};
const [basic, gestalt] = [global.basic, global.gestalt];

export function clearDefaults(svg) {
    svg.attr('stroke','none').attr('fill','none');
}

// -----------------------
// d3.tree styles:

export const tree = {
    common: {
        nodeSize: {w: 10.0, h: 10.0}, // size of nodes
        nodeSeparation: {hz: 20, vt: 40}, // separation between nodes
        dashes: {link: '4px 6px'
            },
    }
};

tree.basic = {
    ...basic,
    ...tree.common,
};
tree.basic.applyAxisStyles = function(axis) {

    axis.selectAll('.tick').select('line')
        .style('stroke-width', this.nodeSize.w*1.5)
        .style('stroke', '#f4f4f4')
    axis.selectAll('.tick').select('text')
        // .attr('x', -2)
        .attr('text-anchor', 'start');

}
tree.basic.applyNodeStyles = function(nodes, nodePartitions) {
    const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

    forms.selectAll('circle')
        .style('stroke', this.color.base.toString())
        .style('fill', this.color.ground.toString());


    elements.selectAll('circle')
        .style('fill', this.color.base.toString());

    reEntries.selectAll('circle')
        .style('stroke', this.color.indef.toString())
        .style('fill', this.color.indef.toString())
        .filter(d => d.data.lastOpen)
            .style('fill', this.color.ground.toString());
    reChilds.selectAll('circle')
        .style('stroke', this.color.indef.toString())
        .style('stroke-dasharray', d => circleDashArray(d.r, 3, [1]));
    rePoints.selectAll('circle')
        .style('fill', this.color.indef.toString());

    nodes.selectAll('text')
        .style('font', `normal ${this.font.size} ${this.font.family}`)
        .style('dominant-baseline','middle')
        .style('fill', this.color.base.toString())

    sets.selectAll('circle.inner')
        // .classed('inner')
        .style('stroke', 'none')
        .style('fill', this.color.base.toString());

};
tree.basic.applyLinkStyles = function(links, linkPartitions) {
    const [reChildLink, rePointLink] = linkPartitions;

    links.selectAll('path')
        .style('stroke', this.color.base.toString());

    reChildLink.selectAll('path')
        .style('stroke', this.color.indef.toString())
        .style('stroke-dasharray', this.dashes.link);

    rePointLink.selectAll('path')
        .style('stroke', this.color.indef.toString())
        .style('stroke-dasharray', this.dashes.link);
};

tree.gestalt = {
    ...gestalt,
    ...tree.common,
};
tree.gestalt.applyAxisStyles = function(axis) {
    tree.basic.applyAxisStyles(axis);
}
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
        radius: 14, // 15
        padding: 14, // 12
    }
};

pack.basic = {
    ...basic,
    ...pack.common,
};
pack.basic.applyNodeStyles = function(nodes, nodePartitions) {
    const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

    forms.select('circle')
        .style('stroke', this.color.base.toString())
        .filter(d => d.data.unmarked)
            .style('stroke','none');
    reEntries.select('circle')
        .style('stroke', this.color.indef.toString())
        .filter(d => d.data.lastOpen)
            .style('stroke-dasharray', d => circleDashArray(d.r, 14, [2/5, 3/5]) );
                // `${ calcCircleDash(d.r, 14, 2/5) }px
                //  ${ calcCircleDash(d.r, 14, 3/5) }px`); // this.dashes.wide
            // .style('stroke','none');

    elements.selectAll('text')
        .style('font', `normal ${this.font.size} ${this.font.family}`)
        .style('dominant-baseline','middle')
        .style('text-anchor', 'middle')
        .style('fill', this.color.base.toString());

    unclear.select('rect')
        .style('fill', this.color.light.toString());

    rePoints.select('circle')
        .style('fill', this.color.indef.toString())
        .style('stroke','none');

    const reEvenLabels = reEntries.select('.label')
        .style('stroke', 'none')
        .style('fill', this.color.indef.toString());
};

pack.gestalt = {
    ...gestalt,
    ...pack.common,
};
pack.gestalt.invertFill = function(d) {
    return getRealDepth(d)%2 ? this.color.pos.toString() : this.color.neg.toString();
};
pack.gestalt.applyNodeStyles = function(nodes, nodePartitions, chart) {
    const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

    const defs = d3.select(chart.node().parentNode)
        .append('defs');
    const grad_1 = defs.append('radialGradient').attr('id', 'grad-indef-outin')
        .attr('fx','20%')
        // .attr('r','55%');
        // grad_1.append('stop')
        //     .attr('offset','60%').attr('stop-color', this.color.pos.toString() );
        // grad_1.append('stop')
        //     .attr('offset','100%').attr('stop-color', this.color.indef.toString() ); // <- new
        grad_1.append('stop')
            .attr('offset','40%').attr('stop-color', opacity(this.color.indef, 0.3).toString() );
            grad_1.append('stop')
            .attr('offset','90%').attr('stop-color', opacity(this.color.indef, 0.8).toString() );
        grad_1.append('stop')
            .attr('offset','100%').attr('stop-color', opacity(this.color.indef, 1.0).toString() );
    const grad_2 = defs.append('radialGradient').attr('id', 'grad-indef-inout')
        // .attr('spreadMethod','reflect')
        .attr('fx','20%')
        // .attr('r','55%');
        grad_2.append('stop')
            .attr('offset','10%').attr('stop-color', opacity(this.color.indef, 1.0).toString() );
        grad_2.append('stop')
            .attr('offset','50%').attr('stop-color', opacity(this.color.indef, 0.6).toString() );
        grad_2.append('stop')
            .attr('offset','60%').attr('stop-color', opacity(this.color.indef, 0.4).toString() );
        grad_2.append('stop')
            .attr('offset','100%').attr('stop-color', opacity(this.color.indef, 0.0).toString() );

    forms.select('circle').filter(d => !d.data.unmarked)
        .style('stroke', 'none')
        .style('fill', d => this.invertFill(d));

    reEntries.select('circle')
        .style('stroke', d => (d.parent.data.type === 'reEntry') ? this.color.pos.toString() : 'none' )
        .style('fill', 'url(#grad-indef-outin)');

    const openReEntries = reEntries.select('circle').filter(d => d.data.lastOpen)
        .style('fill', 'url(#grad-indef-inout)')
        .style('stroke-dasharray', d => circleDashArray(d.r, 8, [2/5, 3/5]) );

    openReEntries.filter(d => ((d.parent.data.type !== 'reEntry') || !getRealDepth(d)%2) ) //  
            .style('stroke', d => this.color.indef.toString());

    openReEntries.filter(d => (d.parent.data.type === 'reEntry') && !d.parent.data.lastOpen)
            .style('stroke', d => this.color.pos.toString());

            // .style('fill', d => {
            //     // if(d.parent.data.type === 'reEntry')
            //     return getRealDepth(d)%2 ? '#ffdddd' : '#aa0000';
            // });

    elements.selectAll('text')
        .style('font', `normal ${this.font.size} ${this.font.family}`)
        .style('dominant-baseline','middle')
        .style('text-anchor', 'middle')
        .style('stroke', 'none')
        .style('fill', d => this.invertFill(d));

    unclear.select('rect')
        .style('fill',this.color.light.toString());
    unclear.select('text')
        .style('fill',this.color.base.toString());
        
    rePoints.select('circle')
        .style('fill',this.color.indef.toString())
        .style('stroke','none')
        .filter(d => d.parent.data.type === 'reEntry')
            .style('stroke', this.color.indef.toString())
            .style('fill', this.color.pos.toString())
            .attr('transform', 'scale(1.5)');
    // elements.filter(d => (type === 'var' || type === 'const' || type === 'unclear') )

    const reEvenLabels = reEntries.select('.label')
        .style('stroke', 'none')
        .style('fill', d => (d.parent.data.type === 'reEntry' && !d.parent.data.lastOpen) ? this.color.pos.toString() : this.color.indef.toString());
    reEntries.select('.label.inside')
        .style('fill', d => (d.parent.data.type !== 'reEntry' && d.data.lastOpen) ? this.color.indef.toString() : this.color.pos.toString());

};

