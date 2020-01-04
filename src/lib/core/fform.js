import { flatten, include, VARCODE, VARCODE_REV } from '../../common/helper';
import FCalc from './fcalc';

export default class FForm extends FCalc {
    /*
    =======================================================
       'form' module for formform (c) 2018 Peter Hofmann
    =======================================================
    */

    constructor() {
    };

    // ----------------------------------------------------
    // Form Calculation
    // ----------------------------------------------------

    static calc(form) {
        /* recursive form calculation */
        var fx = 0;
        // make sure to have a json form, if not: try to convert
        if(typeof(form) === 'string') form = this.parseLinear(form);

        for (var i in form.space) {
            if (form.space[i].type === 'form') {
                fx = this.rel( fx,this.calc(form.space[i]) );
            }
            else if (form.space[i].type === 'const') {
                fx = this.rel( fx,form.space[i].value );
            }
            else if (form.space[i].type === 'var') {
                if(!isNaN(form.space[i].value)) fx = this.rel( fx,form.space[i].value );
            }
            else if (form.space[i].type === 'unclear') {
                fx = this.rel( fx,form.space[i].value );
            }
            else if (form.space[i].type === 'reEntry') {
                var nestedVals = [];
                var fReEntry = form.space[i];

                for (var j in fReEntry.nested) {
                    nestedVals.push( this.calc(fReEntry.nested[j]) );
                }
                // for even resolutions (total nested arguments), reEntry number will be undefined
                // since it doesn't matter if its even or odd
                const reEntryNumber = (fReEntry.nested.length % 2 === 0) ? undefined : fReEntry.reEven;
                
                // notation reading: {deepest, ..., shallowest}  use nestedVals.reverse() to reverse variables
                fx = this.rel( fx,this.reEntry(reEntryNumber, fReEntry.lastOpen, fReEntry.altInterpretation, ...nestedVals) );
            }
        }
        if(form.unmarked) return fx;
        else return this.inv( fx );
    };

    static calcAll(form) {
        /* Interpret and calculate all possible values for the form 
           -> needs refactoring to avoid redundancy; suggestions welcome. */

        // make sure to have a json form, if not: try to convert
        if(typeof(form) === 'string') form = this.parseLinear(form);

        var vars = this.getVariables(form);
        var vals = {};

        var interKey = ''+vars.join()+';';

        switch (vars.length) {
            case 0:
                vals['Result'] = this.calc(form);
                break;
            case 1:
                var interpr = [ {var: vars[0], value: null} ];
                for (var a=0; a<4; a++) {
                    interpr[0].value = a;
                    vals[interKey+a] = this.interCalc(form, interpr);//[a]);
                }
                break;
            case 2:
                var interpr = [ {var: vars[0], value: null}, 
                                {var: vars[1], value: null} ];
                for (var a=0; a<4; a++) {
                    interpr[0].value = a;
                    for (var b=0; b<4; b++) {
                        interpr[1].value = b;
                        vals[interKey+a+''+b] = this.interCalc(form, interpr);//[a,b]);
                    }
                }
                break;
            case 3:
                var interpr = [ {var: vars[0], value: null}, 
                                {var: vars[1], value: null},
                                {var: vars[2], value: null} ];
                for (var a=0; a<4; a++) {
                    interpr[0].value = a;
                    for (var b=0; b<4; b++) {
                        interpr[1].value = b;
                        for (var c=0; c<4; c++) {
                            interpr[2].value = c;
                            vals[interKey+a+''+b+''+c] = this.interCalc(form, interpr);//[a,b,c]);
                        }
                    }
                }
                break;
            case 4:
                var interpr = [ {var: vars[0], value: null}, 
                                {var: vars[1], value: null},
                                {var: vars[2], value: null},
                                {var: vars[3], value: null} ];
                for (var a=0; a<4; a++) {
                    interpr[0].value = a;
                    for (var b=0; b<4; b++) {
                        interpr[1].value = b;
                        for (var c=0; c<4; c++) {
                            interpr[2].value = c;
                            for (var d=0; d<4; d++) {
                                interpr[3].value = d;
                                vals[interKey+a+''+b+''+c+''+d] = this.interCalc(form, interpr);//[a,b,c,d]);
                            }
                        }
                    }
                }
                break;
            case 5:
                var interpr = [ {var: vars[0], value: null}, 
                                {var: vars[1], value: null},
                                {var: vars[2], value: null},
                                {var: vars[3], value: null},
                                {var: vars[4], value: null} ];
                for (var a=0; a<4; a++) {
                    interpr[0].value = a;
                    for (var b=0; b<4; b++) {
                        interpr[1].value = b;
                        for (var c=0; c<4; c++) {
                            interpr[2].value = c;
                            for (var d=0; d<4; d++) {
                                interpr[3].value = d;
                                for (var e=0; e<4; e++) {
                                    interpr[4].value = e;
                                    vals[interKey+a+''+b+''+c+''+d+''+e] = this.interCalc(form, interpr);//[a,b,c,d,e]);
                                }
                            }
                        }
                    }
                }
                break;
            case 6:
                var interpr = [ {var: vars[0], value: null}, 
                                {var: vars[1], value: null},
                                {var: vars[2], value: null},
                                {var: vars[3], value: null},
                                {var: vars[4], value: null},
                                {var: vars[5], value: null} ];
                for (var a=0; a<4; a++) {
                    interpr[0].value = a;
                    for (var b=0; b<4; b++) {
                        interpr[1].value = b;
                        for (var c=0; c<4; c++) {
                            interpr[2].value = c;
                            for (var d=0; d<4; d++) {
                                interpr[3].value = d;
                                for (var e=0; e<4; e++) {
                                    interpr[4].value = e;
                                    for (var f=0; f<4; f++) {
                                        interpr[5].value = f;
                                        vals[interKey+a+''+b+''+c+''+d+''+e+''+f] = this.interCalc(form, interpr);//[a,b,c,d,e,f]);
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 7:
                var interpr = [ {var: vars[0], value: null}, 
                                {var: vars[1], value: null},
                                {var: vars[2], value: null},
                                {var: vars[3], value: null},
                                {var: vars[4], value: null},
                                {var: vars[5], value: null},
                                {var: vars[6], value: null} ];
                for (var a=0; a<4; a++) {
                    interpr[0].value = a;
                    for (var b=0; b<4; b++) {
                        interpr[1].value = b;
                        for (var c=0; c<4; c++) {
                            interpr[2].value = c;
                            for (var d=0; d<4; d++) {
                                interpr[3].value = d;
                                for (var e=0; e<4; e++) {
                                    interpr[4].value = e;
                                    for (var f=0; f<4; f++) {
                                        interpr[5].value = f;
                                        for (var g=0; g<4; g++) {
                                            interpr[6].value = g;
                                            vals[interKey+a+''+b+''+c+''+d+''+e+''+f+''+g] = this.interCalc(form, interpr);//[a,b,c,d,e,f,g]);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 8:
                var interpr = [ {var: vars[0], value: null}, 
                                {var: vars[1], value: null},
                                {var: vars[2], value: null},
                                {var: vars[3], value: null},
                                {var: vars[4], value: null},
                                {var: vars[5], value: null},
                                {var: vars[6], value: null},
                                {var: vars[7], value: null} ];
                for (var a=0; a<4; a++) {
                    interpr[0].value = a;
                    for (var b=0; b<4; b++) {
                        interpr[1].value = b;
                        for (var c=0; c<4; c++) {
                            interpr[2].value = c;
                            for (var d=0; d<4; d++) {
                                interpr[3].value = d;
                                for (var e=0; e<4; e++) {
                                    interpr[4].value = e;
                                    for (var f=0; f<4; f++) {
                                        interpr[5].value = f;
                                        for (var g=0; g<4; g++) {
                                            interpr[6].value = g;
                                            for (var h=0; h<4; h++) {
                                                interpr[7].value = h;
                                                vals[interKey+a+''+b+''+c+''+d+''+e+''+f+''+g+''+h] = this.interCalc(form, interpr);//[a,b,c,d,e,f,g,h]);
                                                }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
        }
        return vals;
    };

    static interCalc(form, interpr) {
        return this.calc( this.interpret(form, interpr) );
    };

    static interpret(form, interpr) {
        // make sure to have a json form, if not: try to convert
        if(typeof(form) === 'string') form = this.parseLinear(form);

        var interprForm = JSON.parse(JSON.stringify(form)); // clone form

        this.traverseForm(interprForm, function(fBranch) {
            const space = fBranch.space;

            for (var i in space) {
                if (space[i].type === 'var') {
                    for (var v in interpr) {
                        if (space[i].symbol === interpr[v].var) {

                            space[i].value = interpr[v].value;
                            break;
                        }
                    }
                }
            }
        });

        return interprForm;
    };

    // ----------------------------------------------------
    // Extensions of FCalc
    // ----------------------------------------------------

    static rel_logic(fx, fy) {
        if(typeof(fx) === Array || typeof(fy) === Array) {
            return null;
        }
        return super.rel_logic(fx, fy);
    };
    static rel(...fVals) {
        return super.rel(...fVals);
    };

    static inv_logic(fx) {
        if(typeof(fx) === Array) {
            return null;
        }
        return super.inv_logic(fx);
    };
    static inv(fx, n) {
        return super.inv(fx, n);
    };

    // ----------------------------------------------------
    // Conversions
    // ----------------------------------------------------

    static parseLinear(formula) {
        /* Converts from paranthesis notation into JSON string and parses as JSON object */

        // convert the formula into a JSON string
        var jsonStr = this.convFromLinear(formula);

        // try parsing the string as a JSON object
        var json = null;
        try {
            var json = JSON.parse(jsonStr);
        } catch(e) {
            console.log(e);
        }

        return json;
    }

    static convFromLinear(formula) {
        // clean formula string from whitespace
        var cleanFormula = this.cleanLinear(formula);
        var arr = this.constructFromLinear(cleanFormula);
        return flatten(arr).join('');
    }

    static cleanLinear(formula) {
        var cleanFormula = '';
        var inQuote = false;
        var inSlash = false;

        for (var i in formula) {
            var char = formula[i];
            if(typeof(char) !== "string") break; // prototype hacks

            if (char === '"' && !inSlash) inQuote = !inQuote;
            if (char === '/' && !inQuote) inSlash = !inSlash;

            // omit whitespace outside of quotes
            if (char === ' ') {
                if (inQuote || inSlash) cleanFormula += char;
            }
            else cleanFormula += char;
        }
        return cleanFormula;
    }

    static constructFromLinear(formula) {
        /* Converts from paranthesis notation to JSON-form */

        var compAll = [];
        var unmarked = true;

        // check for all enclosing outer form
        var countDepth = 0;
        var inQuote = false;
        var inSlash = false;
        var outerMarkCount = 0;
        for (var i in formula) {
            var char = formula[i];
            if(typeof(char) !== "string") break; // prototype hacks

            if (!inQuote && !inSlash) {
                if (char === '(') {
                    if ((countDepth == 0) && (i != 0)) break;
                    countDepth++;
                }
                else if (char === ')') {
                    countDepth--;
                    if (countDepth == 0) {
                        if (i == formula.length-1) {
                            unmarked = false;
                            break;
                        }
                        else break;
                    }
                }
            }
            if (char === '"' && !inSlash) inQuote = !inQuote;
            if (char === '/' && !inQuote) inSlash = !inSlash;
        }

        compAll.push('  {');
        compAll.push('"type":"form",');

        if (unmarked) compAll.push('"unmarked":true,');
        else formula = formula.slice(1,formula.length-1);

        compAll.push('"space":[');   


        var parts = [];
        parts.push('');

        var countDepth = 0;
        var inQuote = false;
        var inSlash = false;

        var optChar = '⤴';
        var nestChar = '⤵';

        for (var i in formula) {
            var char = formula[i];
            var prevChar = formula[i-1];
            if(typeof(char) !== "string") break; // prototype hacks
            
            if (!inQuote && !inSlash) {
                if (char === ')' || char === '}') countDepth--;
                if (char === '(' || char === '{') {
                    
                    if (countDepth === 0) {
                        // first (x) doesn't need to be separated
                        if (i > 0) parts.push('');
                    }
                    countDepth++;
                }
                else if ( (prevChar === ')' || prevChar === '}') && !(char === ')' || char === '}') ) {
                    // if char follows (x), separate; but not if it is another ')'
                    if (countDepth === 0) parts.push('');
                }
                // unique separation chars for re-entry forms for easy splitting
                if (countDepth === 1 && char === ',') char = nestChar;
                else if (countDepth === 1 && char === '|') char = optChar;
            }
            if (char === '"' && !inSlash) inQuote = !inQuote;
            if (char === '/' && !inQuote) inSlash = !inSlash;
            // add char to the latest pushed part
            parts[parts.length-1] += char;
        }


        
        for (var i in parts) {

            if (parts[i][0] === '(') { 
                // if part is form
                // parts[i] = this.constructFromLinear( parts[i].slice(1,parts[i].length-1) );
                var comp = [];
                // comp.push('{');
                comp.push( this.constructFromLinear(parts[i]) );
                // comp.push('}');

                parts[i] = comp.slice();
            }
            else if (parts[i][0] === '{') {
                // else if part is re-entry form

                var comp = [];
                comp.push('  {');
                comp.push('"type":"reEntry",');

                var content = parts[i].slice(1,parts[i].length-1);

                var reParts = content.split(optChar);
                var reNested = reParts[reParts.length-1].split(nestChar);

                if (reNested.length % 2 === 0) {
                    comp.push('"reEven":"undefined",');
                } 
                else {
                    if (reParts[0] === '2r' || reParts[1] === '2r' || reParts[2] === '2r') comp.push('"reEven":true,');
                    else comp.push('"reEven":false,');
                }

                if (reParts[0] === 'open' || reParts[1] === 'open' || reParts[2] === 'open') comp.push('"lastOpen":true,');
                else comp.push('"lastOpen":false,');

                if (reParts[0] === 'alt' || reParts[1] === 'alt' || reParts[2] === 'alt') comp.push('"altInterpretation":true,');
                else comp.push('"altInterpretation":false,');

                comp.push('"nested":[');

                for (var n in reNested) {
                    comp.push( this.constructFromLinear(reNested[n]) );
                    if (n < reNested.length-1) comp.push(',');
                    // reNested[n] = this.constructFromLinear( reNested[n] );
                }

                comp.push(']}  ');

                parts[i] = comp.slice();
            }
            else {
                // else we have variables/constants

                var comp = [];

                var vars = [];
                var inQuote = false;
                var inSlash = false;

                for (var j in parts[i]) {
                    var char = parts[i][j];
                    if(typeof(char) !== "string") break; // prototype hacks

                    if (char === '"' && !inSlash) {
                        inQuote = !inQuote;
                        // mark quoted string with a '‖' for identification
                        if (inQuote) vars.push('‖');
                    }
                    else if (char === '/' && !inQuote) {
                        inSlash = !inSlash;
                        // mark unclear form with a '‽' for identification
                        if (inSlash) vars.push('‽');
                    }
                    else {
                        if (!inQuote && !inSlash) vars.push('');
                        // quote chars inside slashes will be escaped to not interfere with JSON syntax
                        if (char === '"' && inSlash) vars[vars.length-1] += '\\' + char;
                        else vars[vars.length-1] += char;
                    }
                }

                for (var v in vars) {
                    if(typeof(vars[v]) !== "string") break; // prototype hacks

                    comp.push('  {');
                    if (!isNaN(vars[v]) && vars[v].length > 0 
                        && vars[v][0] !== '‽' && vars[v][0] !== '‖') {
                        comp.push('"type":"const",'); 
                        comp.push('"value":');
                        comp.push(vars[v]);
                    }
                    else if (vars[v][0] === '‽') {
                        comp.push('"type":"unclear",');
                        comp.push('"value":2,');
                        comp.push('"symbol":');
                        comp.push('"'+vars[v].slice(1)+'"');
                    }
                    else {
                        comp.push('"type":"var",');
                        comp.push('"value":"*",');
                        comp.push('"symbol":');
                        if(vars[v][0] === '‖') comp.push('"'+vars[v].slice(1)+'"');
                        else comp.push('"'+vars[v]+'"');
                    }
                    comp.push('}  ');
                    if (v < vars.length-1) comp.push(',');
                }

                parts[i] = comp.slice();
            } // end else

            compAll.push(parts[i]);
            if (i < parts.length-1) compAll.push(',');
        }

        compAll.push(']}  ');

        return compAll;
    }

    // ----------------------------------------------------
    // Representation
    // ----------------------------------------------------

    static jsonString(form) {
        /* return json-representation of the specified FORM */
        if(typeof(form) === 'string') form = this.parseLinear(form);
    
        return JSON.stringify(form, undefined, 2);
    }

    // ----------------------------------------------------
    // Helper
    // ----------------------------------------------------

    static getVariables(form) {
        if(typeof(form) === 'string') form = this.parseLinear(form);

        var vars = [];
        this.traverseForm(form, function(fBranch) {
            const space = fBranch.space;

            for (var i in space) {
                if (space[i].type === 'var') {
                    if (!include(vars, space[i].symbol)) {
                        vars.push(space[i].symbol);
                    }
                }
            }
        });
        return vars.sort();
    };

    static traverseForm(form,func) {
        /* traverses only form-types in a json tree */
        let breakTrav = func.apply(this,[form]);

        if (form.space) { // form.type: 'form'
            if (form.space.length > 0) {
                for (var i in form.space) {
                    if (form.space[i].type === 'form' || form.space[i].type === 'reEntry') {
                        let breakLoop = this.traverseForm(form.space[i],func);
                        if (breakLoop) break;
                    }
                }
            }
        }
        else if (form.nested) { // form.type: 'reEntry'
            if (form.nested.length > 0) {
                for (var i in form.nested) {
                    let breakLoop = this.traverseForm(form.nested[i],func);
                    if (breakLoop) break;
                }
            }
        }
        else console.log('ERROR: Not a form!');

        return breakTrav;
    };

    /*  --------------------------------------------------------
        Additions 01/2020 from:
        https://observablehq.com/@formsandlines/formform-toolbox 
    */

    static getTotalVars (formStr) {
        /* gets total variable number of a FORM */
        return this.getVariables(formStr.substr()).length;
    };

    static reOrderVars (formula, varorder) {
        /* re-orders variables in a formula to match an ordering pattern */
        return this.decodeVars( this.encodeVars(formula, varorder) );
    };

    static decodeVars (encStr, decodePattern=undefined) {
      /* decodes variables in an encoded formula string with an optional decode pattern */
      let revCode = VARCODE_REV;
      if (decodePattern) {
        const keys = Object.keys(VARCODE_REV);
        const varPart = keys.slice(0,decodePattern.length);
        const modPart = keys.slice(-3);
        
        revCode = varPart.concat(modPart).reduce( (code,key,i) => ({...code, 
            [key]: i < decodePattern.length ? decodePattern[i] : VARCODE_REV[key], }),{});
      }

      return encStr.split('')
                .map(c => Object.keys(revCode).indexOf(c) > -1 ? revCode[c] : c).join('');
    };

    static encodeVars (formula, varorder=undefined) {
      /* encodes variables in a formula string according to a given variable order (array) */
      if (!varorder) varorder = this.getVariables(formula);
      
      function escapeRegExp(string) { // thx to CoolAJ86: https://stackoverflow.com/a/6969486
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
      }
      
      const fixPtn = {alt: 'alt(?=\|)', rEven: '2r(?=\|)', rOdd: '2r+1(?=\|)'};
      const ptn = v => {
        if (v.length > 1) return `\"${escapeRegExp(v)}\"`; // (?<=\")(${v})(?=\")
        return `${escapeRegExp(v)}`;
      };
      
      return varorder
        .reduce((encStr,v,i) => encStr
                .replace(new RegExp(fixPtn.alt, 'g'),VARCODE['alt'] )
                .replace(new RegExp(fixPtn.rEven, 'g'),VARCODE['2r'])
                .replace(new RegExp(fixPtn.rOdd, 'g'),VARCODE['2r+1'])
                .replace(new RegExp(ptn(v), 'g'),(Object.keys(VARCODE_REV)[i]) )
                         , formula );
    };

}