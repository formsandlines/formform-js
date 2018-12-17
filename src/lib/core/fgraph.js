import FForm from './fform';
import D3Graph, { save } from '../modules/d3-graph';

let g1 = {}; let g2 = {};

export default class FGraph extends FForm {
  /*
  =======================================================
        FORM GRAPH alpha 0.1 by Peter Hofmann, 2018
  =======================================================
   Extension of FORM FORM for graph representation and
   manipulation of json FORMs, using the D3.js library
  */

  constructor() {
  };

  // ----------------------------------------------------
  // Graph representation
  // ----------------------------------------------------

  static createGraph(graphType, _form, options) {
    // expand re-entry structure to be usable for graphs
    const form = this.expand_reEntry(_form);
    // initialize the graph

    let graph = new D3Graph(graphType, form, options);
    // graph.init(graphType, form, options);

    return graph;
  }

  static saveGraph(format, svg, name) {
    save(format, svg, name);
  }

  static jsonString(form) {
    // if(typeof(_form) === 'string') _form = this.parseLinear(_form);

    const expandedForm = this.expand_reEntry(form);
    return JSON.stringify(expandedForm, undefined, 2);
  }

  static constructNested(reForm) {
    let space = reForm.space = [];
    reForm.nested.reverse(); // MUST be reversed, because notation: {deepest, ..., shallowest}

    for(let i in reForm.nested) {
      if (i > 0) {
        // prepend the reEntry nesting before everything else in the space
        space.unshift( {type: 'form', reChild: true, space: []} ); // space.push <- order last
        const nestedForm = space[0]; // space[space.length-1] <- order last
        
        if(!reForm.nested[i].unmarked) nestedForm.space.push(reForm.nested[i]);
        else nestedForm.space.push(...reForm.nested[i].space);

        // if last nesting, add the point of re-entry there
        if (i == reForm.nested.length-1) {
          nestedForm.space.unshift( {type: 'reEntryPoint'} );
        }
        space = nestedForm.space;
      }
      else {
        if(!reForm.nested[i].unmarked) space.push(reForm.nested[i]);
        else space.push(...reForm.nested[i].space);
        // for(let j in reForm.nested[i].space) {
        //   space.push(reForm.nested[i].space[j]);
        // }
      }
    }

    if (reForm.space.findIndex(f => f.reChild) < 0) {
      // if there is no reEntry nesting at all, prepend the point of re-entry there
      // because it will not have been set in the loop
      reForm.space.unshift( {type: 'reEntryPoint'} );
    }

    // reForm.test = Array.from(reForm.nested);
    delete reForm.nested;
    return reForm;
  }

  static expand_reEntry(_form) {
    if(typeof(_form) !== 'string') _form = JSON.stringify(_form);
    const refForm = this.parseLinear(_form);
    let targetForm = this.parseLinear(_form);

    this.traverseForm(refForm, function(refBranch) {

      if(refBranch.type === 'reEntry') {
        
        this.traverseForm(targetForm, function(targetBranch) {

          if(JSON.stringify(refBranch) === JSON.stringify(targetBranch)) {
            
            targetBranch = this.constructNested(targetBranch);
            return true;
          }
        });

      }
    });

    return targetForm;
  }


}