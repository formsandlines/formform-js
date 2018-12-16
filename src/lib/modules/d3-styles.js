import * as d3 from 'd3';
import { getRealDepth } from '../../common/d3-helper';

// d3.tree styles:

export const tree = {
    default: {
        fontSize: 10,
    }
};
tree.basic = {
    ...tree.default,
};
tree.gestalt = {
    ...tree.default,
};


// d3.pack styles:

export const pack = {
    default: {
        radius: 15,
        padding: 12,
        fontSize: 14,
    }
};

pack.basic = {
    ...pack.default,
    color: {base: 'black',
            indef: 'red',
            light: '#ddd'}
};
pack.basic.applyAttr = function(nodePartitions) {
    const [leaves, sets, forms, reEntries, rePoints, elements, vars, consts, unclear] = nodePartitions;

    // forms.select('circle').filter(d => !d.data.unmarked)
    //     .attr('stroke', 'none')
    //     .attr('fill', 'black');
    forms.select('circle').filter(d => d.data.unmarked)
        .style('stroke','none');
    reEntries.select('circle').filter(d => d.data.lastOpen)
        .style('stroke','none');

    elements.selectAll('text')
        .attr('dominant-baseline','middle')
        .attr('text-anchor', 'middle');

    unclear.select('rect')
        .attr('fill',this.color.light);

    rePoints.select('circle')
        .attr('fill',this.color.indef)
        .attr('stroke','none');
}

pack.gestalt = {
    ...pack.default,
    color: {pos: 'white', 
            neg: 'black',
            indef: 'red',
            light: '#ddd'},
};
pack.gestalt.invertFill = function(d) {
    return getRealDepth(d)%2 ? this.color.pos : this.color.neg;
};
pack.gestalt.applyAttr = function(nodePartitions) {
    const [leaves, sets, forms, reEntries, rePoints, elements, vars, consts, unclear] = nodePartitions;

    forms.select('circle').filter(d => !d.data.unmarked)
        .attr('stroke', 'none')
        .attr('fill', d => this.invertFill(d));

    reEntries.select('circle').filter(d => !d.data.lastOpen)
        .attr('stroke', 'none')
        .attr('fill', this.color.indef);

    elements.selectAll('text')
        .attr('stroke', 'none')
        .attr('fill', d => this.invertFill(d))
        .attr('dominant-baseline','middle')
        .attr('text-anchor', 'middle');

    unclear.select('rect')
        .attr('fill',this.color.light);
        
    rePoints.select('circle')
        .attr('fill',this.color.indef)
        .attr('stroke','none');
    // elements.filter(d => (type === 'var' || type === 'const' || type === 'unclear') )

}





// pack.gestalt.applyAttr = function(type) {
//     return (selection) => {
//         if (type === 'circle') {
//             selection.filter(d => (d.data.type === 'form' && !d.data.unmarked))
//                 .attr('fill', d => this.invertFill(d));
//             selection.filter(d => )
//         }
//         else if (type === 'text') {
//             selection
//                 .attr('fill', d => this.invertFill(d));
//         }
//     };
// };//.bind(pack.gestalt);

// pack.gestalt = {
//     ...pack.default,
//     color: {pos: 'white', 
//             neg: 'black',
//             indef: 'red'},
// };
// pack.gestalt.fill = function(d,i) {
//     const type = d.data.type;
//     if (type === 'form' && !d.data.unmarked) 
//         return getRealDepth(d)%2 ? this.color.pos : this.color.neg;
//     if (type === 'reEntry' && !d.data.lastOpen)
//         return this.color.indef;
//     if (type === 'var' || type === 'const' || type === 'unclear') 
//         return getRealDepth(d)%2 ? this.color.pos : this.color.neg;
//     return 'none';
    
//     }.bind(pack.gestalt);
// pack.gestalt.stroke = function(d,i) {
//     const type = d.data.type;
//     // if (type === 'form' && !d.data.unmarked) 
//     //     return getRealDepth(d)%2 ? this.color.neg : this.color.pos;
//     return 'none';
//     }.bind(pack.gestalt);