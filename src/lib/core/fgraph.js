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
    // this.graphs = [];
  };

  // ----------------------------------------------------
  // Graph representation
  // ----------------------------------------------------

  static createGraph(graphType, _form, options) {
    // expand re-entry structure to be usable for graphs
    const form = this.expand_reEntry(_form);
    // initialize the graph

    const graph = new D3Graph(graphType, form, options);
    graph.formula = _form;
    // graphs.push( new D3Graph(graphType, form, options) );

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
    /* Constructs a (real) nested form structure from the .nested array of the original re-entry json */
    let space = reForm.space = [];
    reForm.nested.reverse(); // MUST be reversed, because notation: {deepest, ..., shallowest}

    for(let i in reForm.nested) {
      if (i > 0) {
        // prepend the reEntry nesting before everything else in the space
        space.unshift( {type: 'form', reChild: true, space: []} ); // space.push <- order last
        const nestedForm = space[0]; // space[space.length-1] <- order last
        
        if(!reForm.nested[i].unmarked) nestedForm.space.push(reForm.nested[i]);
        // else nestedForm.space.push(reForm.nested[i]);
        else nestedForm.space.push(...reForm.nested[i].space); // push(reForm.nested[i]) for grouping

        space = nestedForm.space;
      }
      else {
        if(!reForm.nested[i].unmarked) space.push(reForm.nested[i]);
        // else space.push(reForm.nested[i]);
        else space.push(...reForm.nested[i].space); // push(reForm.nested[i]) for grouping
      }
    }    

    // we need to add a point of re-entry to the last nested form
    // first, lets assume this is the form itself
    let lastNested = reForm;
    
    if(reForm.space.length > 0) {
      // then loop until the last reChild is found and make this our last nested form
      
      while (lastNested.space[0].hasOwnProperty('reChild')) {        
        lastNested = lastNested.space[0];
        if (lastNested.space.length < 1) break; // prevent errors when nothing is found
      }
    }
    // for open re-entries, we need to add another nesting (see uFORM iFORM for reference)
    if(reForm.lastOpen) {
      lastNested.space.unshift( {type: 'form', reChild: true, space: []} );
      // then add the re-entry point to either space
      lastNested.space[0].space.unshift( {type: 'reEntryPoint'} );
    }
    else lastNested.space.unshift( {type: 'reEntryPoint'} );

    // last, delete the nested structure, we don't need it anymore
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