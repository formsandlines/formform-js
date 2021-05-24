import { pad, flatten, include, VARCODE, VARCODE_REV, createValidation, checkBracketMatching, collapseLiterals, getBracketUnits } from '../../common/helper';
import FCalc from './fcalc';

export default class FForm extends FCalc {

    // ===================================================================
    //     formform core module 'form'
    //     -- since 2018, by Peter Hofmann (formsandlines.eu)
    // ===================================================================

    constructor() {
    };

    // ----------------------------------------------------
    // Form Calculation
    // ----------------------------------------------------

    static calc(_form) {
        /* Calculates a given form recursively 

        Note: Do NOT use this function for formulas with variables!
              Assumes x=0 for all variables. Use interCalc() instead.
        */

        let fx = 0;
        // make sure to have a json form, if not: try to convert
        const form = this.getValidForm(_form);

        for (let i in form.space) {
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
                let nestedVals = [];
                const fReEntry = form.space[i];

                for (let j in fReEntry.nested) {
                    nestedVals = [...nestedVals, this.calc(fReEntry.nested[j])];
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

    static calcAll(_form) {
        /* Interpret and calculate all possible values for the form
           (refactored: 10.10.2020)
        */
        const form = this.getValidForm(_form);

        const vars = this.getVariables(form);
        const vnum = vars.length;
        const vals = {};

        if (vnum < 1) {
            vals['Result'] = this.calc(form);
            return vals;
        }

        const interKey = ''+vars.join()+';';
        
        for (let i=0; i < 4**vnum; i++) {
            const interprVals = pad(i.toString(4), vnum);
            const interpr = interprVals.split('').map((val,n) => ({var: vars[n], value: parseInt(val)}));

            vals[interKey+interprVals] = this.interCalc(form, interpr);
        }

        return vals;
    };

    static interCalc(form, interpr) {
        /* Interprets a form and calculates the result of the interpretation */

        return this.calc( this.interpret(form, interpr) );
    };

    static interpret(_form, interpr) {
        /* Interprets a form with specified values for each variable

        interpr: [{var: 'x', value: n}, …]
        */
        const form = this.getValidForm(_form);

        const interprForm = JSON.parse(JSON.stringify(form)); // clone form

        this.traverseForm(interprForm, function(fBranch) {
            const space = fBranch.space;

            for (let i in space) {
                if (space[i].type === 'var') {
                    for (let v in interpr) {
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
        const jsonStr = this.convFromLinear(formula);

        // try parsing the string as a JSON object
        let json = null;
        try {
            json = JSON.parse(jsonStr);
        } catch(e) {
            console.log(e);
        }

        return json;
    }

    static convFromLinear(formula) {
        // clean formula string from whitespace
        const cleanFormula = this.cleanLinear(formula);
        const arr = this.constructFromLinear(cleanFormula);
        return flatten(arr).join('');
    }

    static cleanLinear(formula) {
        let cleanFormula = '';
        let inQuote = false;
        let inSlash = false;

        for (let i in formula) {
            const char = formula[i];
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

        let compAll = [];
        let unmarked = true;

        // check for all enclosing outer form
        let countDepth = 0;
        let inQuote = false;
        let inSlash = false;
        for (let i in formula) {
            const char = formula[i];
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

        compAll = [...compAll, '  {'];
        compAll = [...compAll, '"type":"form",'];

        if (unmarked) compAll = [...compAll, '"unmarked":true,'];
        else formula = formula.slice(1,formula.length-1);

        compAll = [...compAll, '"space":['];


        let parts = [''];

        countDepth = 0;
        inQuote = false;
        inSlash = false;

        const reChar = '↻';
        const optChar = '⤴';
        const nestChar = '⤵';

        for (let i in formula) {
            let char = formula[i];
            const prevChar = formula[i-1];
            if(typeof(char) !== "string") break; // prototype hacks
            
            if (!inQuote && !inSlash) {
                if (char === ')' || char === '}') countDepth--;
                if (char === '(' || char === '{') {
                    
                    if (countDepth === 0) {
                        // first (x) doesn't need to be separated
                        if (i > 0) parts = [...parts, ''];
                    }
                    countDepth++;
                }
                else if ( (prevChar === ')' || prevChar === '}') && !(char === ')' || char === '}') ) {
                    // if char follows (x), separate; but not if it is another ')'
                    if (countDepth === 0) parts = [...parts, ''];
                }
                // unique separation chars for re-entry forms for easy splitting
                if (countDepth === 1 && char === ',') char = nestChar;
                else if (countDepth === 1 && char === '|') char = optChar;
                else if (countDepth === 1 && char === '@') char = reChar;
            }
            if (char === '"' && !inSlash) inQuote = !inQuote;
            if (char === '/' && !inQuote) inSlash = !inSlash;
            // add char to the latest pushed part
            parts[parts.length-1] += char;
        }
        
        for (let i in parts) {

            if (parts[i][0] === '(') { 
                // if part is form
                let comp = [this.constructFromLinear(parts[i])];

                parts[i] = comp.slice();
            }
            else if (parts[i][0] === '{') {
                // else if part is re-entry form

                let comp = ['  {'];
                comp = [...comp, '"type":"reEntry",'];

                const content = parts[i].slice(1,parts[i].length-1);
                let reNested = undefined;

                if (content.includes(reChar)) {
                    // new re-entry syntax
                    const altInterpr = content.startsWith(`alt${optChar}`);
                    const _content = altInterpr ? content.slice(4,) : content.slice();

                    let type = [-1,-1];
                    if (_content.startsWith(`..${reChar}._`)) type = [3,1]
                    else if (_content.startsWith(`..${reChar}.`)) type = [3,0]
                    else if (_content.startsWith(`..${reChar}_`)) type = [2,1]
                    else if (_content.startsWith(`..${reChar}`)) type = [2,0]
                    else if (_content.startsWith(`${reChar}_`)) type = [0,1]
                    else if (_content.startsWith(reChar)) type = [0,0]

                    const typeCharSum = type[0] + type[1] + 1;
                    reNested = _content.slice(typeCharSum,).split(nestChar);

                    if (reNested.length % 2 === 0) {
                        comp = [...comp, '"reEven":"undefined",'];
                    }
                    else if (type[0] === 2) comp = [...comp, '"reEven":true,'];
                    else comp = [...comp, '"reEven":false,'];

                    if (type[1] > 0) comp = [...comp, '"lastOpen":true,'];
                    else comp = [...comp, '"lastOpen":false,'];

                    if (altInterpr) comp = [...comp, '"altInterpretation":true,'];
                    else comp = [...comp, '"altInterpretation":false,'];
                }
                else {
                    // old re-entry syntax
                    const reParts = content.split(optChar);

                    reNested = reParts[reParts.length-1].split(nestChar);

                    if (reNested.length % 2 === 0) {
                        comp = [...comp, '"reEven":"undefined",'];
                    } 
                    else {
                        if (reParts[0] === '2r' || reParts[1] === '2r' || reParts[2] === '2r') comp = [...comp, '"reEven":true,'];
                        else comp = [...comp, '"reEven":false,'];
                    }

                    if (reParts[0] === 'open' || reParts[1] === 'open' || reParts[2] === 'open') comp = [...comp, '"lastOpen":true,'];
                    else comp = [...comp, '"lastOpen":false,'];

                    if (reParts[0] === 'alt' || reParts[1] === 'alt' || reParts[2] === 'alt') comp = [...comp, '"altInterpretation":true,'];
                    else comp = [...comp, '"altInterpretation":false,'];
                }

                comp = [...comp, '"nested":['];

                for (let n in reNested) {
                    comp = [...comp, this.constructFromLinear(reNested[n]) ];
                    if (n < reNested.length-1) comp = [...comp, ','];
                    // reNested[n] = this.constructFromLinear( reNested[n] );
                }

                comp = [...comp, ']}  '];

                parts[i] = comp.slice();
            }
            else {
                // else we have variables/constants

                let comp = [];

                let vars = [];
                let inQuote = false;
                let inSlash = false;

                for (let j in parts[i]) {
                    const char = parts[i][j];
                    if(typeof(char) !== "string") break; // prototype hacks

                    if (char === '"' && !inSlash) {
                        inQuote = !inQuote;
                        // mark quoted string with a '‖' for identification
                        if (inQuote) vars = [...vars, '‖'];
                    }
                    else if (char === '/' && !inQuote) {
                        inSlash = !inSlash;
                        // mark unclear form with a '‽' for identification
                        if (inSlash) vars = [...vars, '‽'];
                    }
                    else {
                        if (!inQuote && !inSlash) vars = [...vars, ''];
                        // quote chars inside slashes will be escaped to not interfere with JSON syntax
                        if (char === '"' && inSlash) vars[vars.length-1] += '\\' + char;
                        else vars[vars.length-1] += char;
                    }
                }

                for (let v in vars) {
                    if(typeof(vars[v]) !== "string") break; // prototype hacks

                    comp = [...comp, '  {'];
                    if (!isNaN(vars[v]) && vars[v].length > 0 
                        && vars[v][0] !== '‽' && vars[v][0] !== '‖') {
                        comp = [...comp, '"type":"const",']; 
                        comp = [...comp, '"value":'];
                        comp = [...comp, vars[v]];
                    }
                    else if (vars[v][0] === '‽') {
                        comp = [...comp, '"type":"unclear",'];
                        comp = [...comp, '"value":2,'];
                        comp = [...comp, '"symbol":'];
                        comp = [...comp, '"'+vars[v].slice(1)+'"'];
                    }
                    else {
                        comp = [...comp, '"type":"var",'];
                        comp = [...comp, '"value":"*",'];
                        comp = [...comp, '"symbol":'];
                        if(vars[v][0] === '‖') comp = [...comp, '"'+vars[v].slice(1)+'"'];
                        else comp = [...comp, '"'+vars[v]+'"'];
                    }
                    comp = [...comp, '}  '];
                    if (v < vars.length-1) comp = [...comp, ','];
                }

                parts[i] = comp.slice();
            } // end else

            compAll = [...compAll, parts[i]];
            if (i < parts.length-1) compAll = [...compAll, ','];
        }

        compAll = [...compAll, ']}  '];

        return compAll;
    }


    static constructNested(reForm, options={}) {
        /* Constructs a (real) nested form structure from the .nested array of the original re-entry json */

        // >>> should be rewritten completely to get rid of all the mutation!
        
        let space = reForm.space = [];
        reForm.nested.reverse(); // MUST be reversed, because notation: {deepest, ..., shallowest}

        for(let i in reForm.nested) {
            if (i > 0) {
                // prepend the reEntry nesting before everything else in the space
                space.unshift( {type: 'form', reChild: true, space: []} ); // space.push <- order last
                const nestedForm = space[0]; // space[space.length-1] <- order last
                
                if(!reForm.nested[i].unmarked) nestedForm.space.push(reForm.nested[i]);
                else {
                    // nestedForm.space.push(reForm.nested[i]);
                    nestedForm.space.push(...reForm.nested[i].space); // push(reForm.nested[i]) for grouping
                }

                space = nestedForm.space;
            }
            else {
                if(!reForm.nested[i].unmarked) space.push(reForm.nested[i]);
                // else space.push(reForm.nested[i]);
                else space.push(...reForm.nested[i].space); // push(reForm.nested[i]) for grouping
            }

            if (options.addEmptyReChildSpace && (space.length === 0)) {
                space.push( {type: 'space'} );
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

    static expand_reEntry(_form, options={}) {
        // >>> should be rewritten completely to get rid of all the mutation!
        const refForm = this.getValidForm(_form);
        const targetForm = JSON.parse(JSON.stringify(refForm)); // copy json object without identifying it

        // we must keep a running index to not confuse identical forms while reconstructing the reEntries
        // Note: this should be done more efficiently in the future
        let runningIndex = 0;
        this.traverseForm(refForm, function(branch) { branch.runningIndex = runningIndex, runningIndex++; });
        runningIndex = 0;
        this.traverseForm(targetForm, function(branch) { branch.runningIndex = runningIndex, runningIndex++; });

        this.traverseForm(refForm, function(refBranch) {

            if(refBranch.type === 'reEntry') {
                this.traverseForm(targetForm, function(targetBranch) {

                    if( (JSON.stringify(refBranch) === JSON.stringify(targetBranch)) && 
                            (refBranch.runningIndex === (targetBranch.hasOwnProperty('runningIndex') ? targetBranch.runningIndex : null)) ) {
                        targetBranch = this.constructNested(targetBranch, options);
                        return true;
                    }
                });

            }
        });
        // delete running index property
        this.traverseForm(targetForm, function(branch) { delete branch.runningIndex; });

        return targetForm;
    }


    // ----------------------------------------------------
    // Representation
    // ----------------------------------------------------

    static jsonString(_form, expandRE=false) {
        /* returns json-representation of the specified FORM */
        const form = this.getValidForm(expandRE ? this.expand_reEntry(_form) : _form);
    
        return JSON.stringify(form, undefined, 2);
    }

    // ----------------------------------------------------
    // Helper
    // ----------------------------------------------------

    static getVariables(_form) {
        /* parses a FORM to get all of its variables and sorts them using the JS Array.sort() method
        which sorts by comparing UTF-16 code unit values.
        Note: By convention, the process of deriving formDNA from a given FORM involves ordering of the extracted variables by this same sorting method, if no special ordering is specified. */
        const form = this.getValidForm(_form);

        let vars = [];
        this.traverseForm(form, function(fBranch) {
            const space = fBranch.space;

            for (let i in space) {
                if (space[i].type === 'var') {
                    if (!include(vars, space[i].symbol)) {
                        vars = [...vars, space[i].symbol];
                    }
                }
            }
        });
        return vars.sort();
    };

    static traverseForm(form,func) {
        /* traverses only form-types in a json tree */
        const breakTrav = func.apply(this,[form]);

        if (form.space) { // form.type: 'form'
            if (form.space.length > 0) {
                for (let i in form.space) {
                    if (form.space[i].type === 'form' || form.space[i].type === 'reEntry') {
                        const breakLoop = this.traverseForm(form.space[i],func);
                        if (breakLoop) break;
                    }
                }
            }
        }
        else if (form.nested) { // form.type: 'reEntry'
            if (form.nested.length > 0) {
                for (let i in form.nested) {
                    const breakLoop = this.traverseForm(form.nested[i],func);
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


    /*  --------------------------------------------------------
        New Additions 01/2020:
    */

    static matchDefaultVarOrder (varList) {
        /* Helper to match default orderings for calculation and vmaps */
        if (varList.join('') === 'ELR') return ['L','E','R'];
        if (varList.join('') === '+-LR') return ['-','L','R','+'];
        if (varList.join('') === '+-ELR') return ['-','L','E','R','+'];
        return varList;
    }

    /*  --------------------------------------------------------
        New Additions 10/2020:
    */

    static isValidForm (input, options) {
        /* Checks if an input is a valid formula or JSON-FORM */

        return typeof(input) === 'string' ? 
            isValidFormula(input, options) : isValidJSONForm(input, options);
    }

    static isValidFormula (input, options) {
        /* Checks if an input is a valid formula */
        // const { } = { ...options };

        let validations1 = [
            createValidation(() => typeof(input) === 'string',
                'Formula input is not of type ‘string’'),
        ];
        if (input.length > 0) validations1 = [...validations1,
            createValidation(
                () => {
                    return !!collapseLiterals(input, '"') && !!collapseLiterals(input, '/');
                    // const sansLiterals = collapseLiterals(input, '"');
                    // return sansLiterals ? checkLiteralMatching(sansLiterals, '/') : false;
                },
                'Number of quotes for literal variables (e.g.: "x") or number of slashes for unclear FORMs (e.g.: /x/) don\'t match'),
            // createValidation(
            //     () => {
                    // let openSep = '⁅', closeSep = '⁆';
                    // const dirUnclForms = input.split('/').reduce((acc,curr,idx) => {
                    //     return acc + (idx % 2 === 1 ? openSep : closeSep) + curr
                    // });
                    // const unclFormUnits = getBracketUnits(dirUnclForms, {open: openSep, close: closeSep});

                    // return unclFormUnits.every(unclForm => unclForm.split('"').length < 2); 

                    // let openSep = '⁌', closeSep = '⁍';
                    // const dirLiterals = input.split('"').reduce((acc,curr,idx) => {
                    //     return acc + (idx % 2 === 1 ? openSep : closeSep) + curr
                    // });
                    // const literalUnits = getBracketUnits(dirLiterals, {open: openSep, close: closeSep});

                    // literalUnits.every(literal => )
                // },
                // 'Number of quotes for literal variables (e.g.: "x") don\'t match'),
        ];
        validations1.every(validation => validation().cata({
            error: e => { throw new Error(e); },
            success: data => data,
        }) );

        if (input.length > 0) {
            const cleanInput = collapseLiterals( collapseLiterals(input, '"'), '/');

            const validations2 = [
                createValidation(
                    () => checkBracketMatching(cleanInput, '(', ')'),
                    'Number or opening/closing order of parantheses in formula don\'t match'),
                createValidation(
                    () => checkBracketMatching(cleanInput, '{', '}'),
                    'Number or opening/closing order of curly brackets in formula don\'t match'),
            ];

            validations2.every(validation => validation().cata({
                error: e => { throw new Error(e); },
                success: data => data,
            }) );

            const roundBrUnits = getBracketUnits(cleanInput, {open: '(', close: ')'});
            const curlyBrUnits = getBracketUnits(cleanInput, {open: '{', close: '}'});

            const validations3 = [
                createValidation(
                    () => roundBrUnits.every(subForm => checkBracketMatching(subForm, '{', '}'))
                       && curlyBrUnits.every(subForm => checkBracketMatching(subForm, '(', ')')),
                    'Opening/closing of parantheses overlaps with opening/closing of curly brackets in formula (e.g.: ({a)b})'),
                createValidation(
                    () => curlyBrUnits.every(reEntry => this.isValidReEntry(reEntry)),
                    'Option part of one or more re-entry constructions is not well-formed'),
            ];

            validations3.every(validation => validation().cata({
                error: e => { throw new Error(e); },
                success: data => data,
            }) );
        }

        return true;
    }

    static isValidReEntry (input, options) {
        /* Checks if an input is a valid re-entry construction */
        // const { } = { ...options };

        const parts = input.slice(1,-1).split('|');

        if (parts.length > 1) {
            const entries = parts.filter((p,i,arr) => i < arr.length-1);
            const optList = ['alt','open','2r','2r+1'];

            const selList = entries.reduce((acc,str) => [...acc, optList.filter(opt => str === opt)[0]],[] ).filter(opt => opt);

            const selList_unique = [...new Set(selList)];

            const validations = [
                createValidation(
                    () => selList_unique.length === entries.length,
                    'One or more re-entry constructions have invalid or duplicate options'),
                createValidation(
                    () => selList_unique.filter(str => str === optList[2] || str === optList[3]).length < 2,
                    'One or more re-entry constructions have both options ‘2r’ and ‘2r+1’ set at the same time'),
            ];

            return validations.every(validation => validation().cata({
                error: e => { throw new Error(e); },
                success: data => data,
            }) );
        }

        return true;
    }

    static isValidJSONForm (input, options) {
        /* Checks if an input is a valid JSON-FORM */
        // const { } = { ...options };

        const validations = [
            createValidation(
                () => true,
                ''),
        ];

        return validations.every(validation => validation().cata({
            error: e => { throw new Error(e); },
            success: data => data,
        }) );

        return true;
    }

    static formMatchesVarList (form, varList) {
        /* Checks if a given FORM matches a given variable list */
        const varsForm = this.getVariables(form);

        const match = varList.length === varsForm.length
            && varsForm.every(v_a => varList.some(v_b => v_a === v_b));
        if (!match) throw new Error('FORM doesn\'t match the given variable list');

        return true;
    }

    static getValidForm(input) {
        if(typeof(input) === 'string') {
            if (!this.isValidFormula(input)) throw new Error('Input is not a valid formula');
            return this.parseLinear(input);
        } else {
            // >>> need to check json input too
            return input;
        }
    }

}