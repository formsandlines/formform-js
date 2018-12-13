import FForm from './fform';
import graph from '../modules/d3-graph';

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

  static createGraph(graphType, _form) {
    const data = this.expand_reEntry(_form);
    graph.init(graphType, data);

    return graph;
  }

  static jsonString(form) {
    // if(typeof(_form) === 'string') _form = this.parseLinear(_form);

    // console.log(form);
    const expandedForm = this.expand_reEntry(form);
    // console.log(expandedForm);
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
        
        nestedForm.space.push(reForm.nested[i]);
        // if (!reForm.nested[i].unmarked) {
        //   // if not unmarked, we can push the whole form to the new space
        //   nestedForm.space.push(reForm.nested[i]);
        // }
        // else {
        //   // else, just push all contents of its space to the new space
        //   for(let j in reForm.nested[i].space) {
        //     nestedForm.space.push(reForm.nested[i].space[j]);
        //   }
        // }

        // if last nesting, add the point of re-entry there
        if (i == reForm.nested.length-1) {
          nestedForm.space.unshift( {type: 'reEntryPoint'} );
        }
        space = nestedForm.space;
      }
      else {
        space.push(reForm.nested[i]);
        // for(let j in reForm.nested[i].space) {
        //   space.push(reForm.nested[i].space[j]);
        // }
      }
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
            // console.log('CLICK!!!');
            targetBranch = this.constructNested(targetBranch);
            return true;
          }
        });

      }
    });

    // targetBranch
    // delete reForm.nested;

    // this.traverseForm(targetForm, function(fBranch) {
    //   if(refBranch.type === 'reEntry') 
    // }
    return targetForm;
  }


}