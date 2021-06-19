import * as FForm from './fform';
import { permuteArray, pad, createValidation, equalArrays, getRandomBigInt } from 'formsandlines-utils';

import * as bigInt from 'big-integer'; // obsolete with better BigInt support in browsers
    
// ===================================================================
//     formform core module 'dna'
//     -- since 2019/20, by Peter Hofmann (formsandlines.eu)
// ===================================================================

// ----------------------------------------------------
// Extensions of FFORM
// ----------------------------------------------------

/**
 * extension to represent formDNA as FORM calculation
 */
export function calcAll(input) {

    if (input.includes('::') && isValidDNA(input)) {

        const dna = input.split(':').pop();
        const results = dna.split('').reverse();

        const vnum = totalVarsFromDNA(dna);
        const vars = Array.from({length: vnum}, (_, i) => `"x_${i}"` );
        const vals = {};

        if (vnum < 1) {
            vals['Result'] = parseInt(results[0]);
            return vals;
        }

        const interKey = ''+vars.join()+';';

        for (let i=0; i < results.length; i++) {
            const interprVals = pad(i.toString(4), vnum);
            // const interpr = interprVals.split('').map((val,n) => ({var: vars[n], value: parseInt(val)}));

            vals[interKey+interprVals] = results[i];
        }

        return vals;
    }

    return FForm.calcAll(input);
}

/**
 * extension to get variables from formDNA
 */
export function getVariables(input) {
    if (typeof(input) === 'string' && input.includes('::')) {
        const { dna, formula, varList } = getDNAparts(input);

        if (varList !== undefined) return varList;
        else if (formula !== undefined) return FForm.getVariables(formula);

        const vnum = totalVarsFromDNA(dna);
        return Array.from({length: vnum}, (_, i) => `x_${i}` );
    }

    return FForm.getVariables(input);
}

// ----------------------------------------------------
// Conversions
// ----------------------------------------------------

/**
 * Encodes a FORM as a dna string
 */
export function encode (_form, varorder=undefined) {
    const form = varorder ? FForm.reOrderVars(_form, varorder) : _form;

    return Object.values(calcAll(form)).reverse().join('');
}

/**
 * Decodes dna into (one of its) simplest corresponding FORM model(s) as a json-representation
 * 
 * ! EXPERIMENTAL
 */
export function decode (dna, varList=undefined) {
    // ? -> remove 0-terms and groupings?

    if (varList && varList.length !== totalVarsFromDNA(dna)) throw new Error('Number of variables in given variable list doesn\'t match formDNA code length');
    if (!varList) varList = generateVarNames(totalVarsFromDNA(dna)); //.map(str => `"${str}"`);
    
    const univ = universe_n(varList);
    const vals = dna.split('').reverse();

    return univ.map((term, i) => {
        return `((${vals[i]})(${term}))`;
    }).join('');
}

/**
 * Takes an integer (usually BigInt) and a desired variable number and returns the corresponding formDNA 
 * 
 * * Note: variable number is needed because the intended number of leading zeros cannot be infered from the integer alone. If no variable number is given, the smallest variable number possible for the quaternion is assumed to generate valid formDNA.
 */
export function intToDNA (int, vnum) {
    const quat = int.toString(4);
    if (quat.substr(0,1) === '-') throw new Error('Negative integers cannot be converted to formDNA.');
    if (quat.includes('.')) throw new Error('Fractional numbers cannot be converted to formDNA.');

    const dnaLen = vnum ? 4**vnum : (function minDnaLen(strLen, n=0) { 
        return 4**n >= strLen ? 4**n : minDnaLen(strLen, n+1);
    })(quat.length);

    if (quat.length > dnaLen) throw new Error('Integer size exceeds desired DNA length.');
    return pad(quat, dnaLen);
}

// ----------------------------------------------------
// Output
// ----------------------------------------------------

/**
 * converts a form into its formDNA representation in HTML
 */
export function formToDNA (input, varorder=undefined, options=undefined) {
    const {output} = { output: undefined, ...options };

    let dna = undefined, formula = undefined, varList = undefined;
    if (input.includes('::')) {
        // if the input contains the mark '::' for formDNA, return it if it's valid
        if (!isValidDNA(input)) throw new Error('Input is not valid formDNA');

        const parts = getDNAparts(input);

        dna = parts.dna;
        formula = parts.formula;
        varList = parts.varList;
    }
    else {
        // if not, process the input as a FORM with specified or default varorder and encode it to dna
        dna = encode( input, (varorder ? varorder : undefined) );
        formula = input;
        varList = varorder ? varorder : getVariables(formula);
    }

    switch (output) {
        // case 'html': {
        // 	return formDNA_html(formula, dna, varList);
        // }
        case 'text': {
            return (formula !== undefined ? formula : '') + (varList && dna.length > 1 ? `.[${varList.join(',')}]` : '') + '::' + dna;
        }
        case 'num': {
            return dna;
        }
        default: {
            return [formula, varList, dna];
        }
    }
}

/**
 * converts formDNA with a given variable list/order into a graph representation of (one of its) simplest corresponding FORM model(s)
 */
export function dnaToFORM (formDNA, varorder=undefined, options=undefined) {
    // ! not yet implemented!

    return decode(formDNA, varorder);
}

export function genRandomDNA (vnum) {
    /* Generates a random formDNA string for a given variable number */

    const maxN = bigInt(4).pow( bigInt(4).pow(vnum) );
    const value_bin = getRandomBigInt( maxN.subtract(1) );
    return intToDNA(value_bin, vnum);
}

export function vmap (input, varorder=undefined, options=undefined) {
    /* generates vmap HTML from form/formDNA input */

    const { limitSize, convDefaultVarorder,
            size, gapGrow, marginFunc, strokeW } = {
                limitSize: true, convDefaultVarorder: true,
                size: undefined, gapGrow: 1.5, marginFunc: undefined, strokeW: 0.5,
                // filter: '1111', <- might add later
                ...options};

    let dna = undefined;
    let formula = input;

    if (input.includes('::') && isValidDNA(input)) {
        const dnaParts = getDNAparts(input);
        dna = dnaParts.dna;
        formula = dnaParts.formula;
        const varList = dnaParts.varList ? dnaParts.varList : getVariables(input);

        if (varorder !== undefined && varList !== undefined && !equalArrays(varorder, varList)) {
            throw new Error('Variable order is specified in the formDNA input and as an argument for the vmap function and they are different. Please select only one specification to avoid conflicting results.');
        }
        else if (varList) {
            varorder = varList;
        } else if (formula) {
            varorder = getVariables(formula);
        }
    }
    else if (!varorder) {
        varorder = getVariables(formula);
        if (convDefaultVarorder) varorder = FForm.matchDefaultVarOrder(varorder);
    }

    if (!dna) dna = encode(formula, varorder);
    const vnum = totalVarsFromDNA(dna);

    if (isNaN(vnum)) throw new Error('Invalid variable number for vmaps.');
    if (limitSize && vnum > 8) throw new Error('vmaps with more than 8 variables are too computationally intensive to be rendered with this implementation. If you still want to proceed, add the option "limitSize: false" to your vmap function call (using the formform library).');


    const reversedDNA = dna.split('').reverse().join('');
    
    const cellSize = size || (vnum => {
        // reduction by 2px for each additional variable if vnum > 3
        const n = 17 - (vnum > 3 ? 2 * (vnum-3) : 0); // changed from: 14 - (vnum-1);
        return Math.max(2, n); // min size of 2px
    })(vnum);

    // margins can also be calculated through a custom function
    const margins = [strokeW, 
        ...Array.from({length:vnum-1}, marginFunc ? marginFunc : ((_,i) => (i+1) * gapGrow) )];
    const cell = {w:cellSize, h:cellSize};


    const vmapTree = constructVmap(reversedDNA, vnum, cell, margins);

    return {tree: vmapTree,
            input: input, 
            varorder: varorder, 
            options: options};
}

/**
 * Generates a list of vmap perspectives as permutations of a form/formDNA input
 * 
 * * Note: formDNA input not yet supported (permutation algorithm required)
 */
export function vmapPerspectives (form, varorder=undefined, globalOptions=undefined, localOptions=undefined) {
    const {limitSize} = { limitSize: true, ...globalOptions };

    if (typeof(form) === 'string' && form.includes('::')) throw new Error('formDNA input is not yet supported for vmap perspectives.');

    if (varorder === undefined) varorder = FForm.matchDefaultVarOrder( getVariables(form) );
    const vnum = varorder.length;
    if (limitSize && vnum > 5) throw new Error('Rendering all the perspectives for vmaps with more than 5 variables is too computationally intensive with this implementation. You can, however, still compute single permutations by changing the variable order of your FORM. If you still want to proceed, add the option "limitSize: false" to your vmapPerspectives function call (using the formform library).');

    const formula = form; // ? support for JSON?

    const vmapPermutations = permuteArray(varorder)
        .map(varorder => vmap(formula, varorder, {
            hideInputLabel: true, 
            customLabel: undefined,
            ...localOptions }) );

    return vmapPermutations;
}

/**
 * Generates a list of vmaps from an array of FORM inputs
 * 
 * inputList format: [['form/formDNA', [varorder]/undefined, options/undefined], ...]
 */
export function vmapList (inputList, globalOptions=undefined) {
    const vmaps = inputList.map(input => vmap(input[0], input[1], {...input[2], ...globalOptions}) );

    return vmaps;
}

// ----------------------------------------------------
// Data Structure
// ----------------------------------------------------

/**
 * Recursively constructs vmap data-structure from formDNA
 */
export function constructVmap (reversedDNA, vnum, cell, margins) {
    const calcGapSum = (v,margins) => margins.slice(1,v).reverse().reduce((acc,curr,idx) => acc + (2**idx) * curr, 0);
    const fx = (qi,n) =>  (qi%2) * (n !== undefined ? n : 0);         // xpos: 0123 -> 0101 * shift n
    const fy = (qi,n) => +(qi>0 && qi<3) * (n !== undefined ? n : 0); // ypos: 0123 -> 0110 * shift n

    const constructVmap_recursive = (dnaHolon, vcount, cell, margins, qi=0) => {
        const subTree = {};
        const gapSum = calcGapSum(vcount,margins);
        const qtn = 4**vcount;
        const len = Math.sqrt(qtn);
        dnaHolon = dnaHolon.substr(qi*qtn, qtn); // quarter of the formDNA string
    
        subTree.data = { 
            dna: '::'+dnaHolon.split('').reverse().join(''),
            vnum: vcount, cell: cell,
            margins: vnum > 0 ? margins.slice(0,vcount) : margins.slice(0,1)
        };

        subTree.height = vcount;
        subTree.depth = vnum - (Math.log(qtn) / Math.log(4)); // log base 4
        subTree.order = qi;
    
        subTree.position = [
            // base shift  =  (1) cell size * length units  +  (2) sum of all previous gaps/margins
            // real shift  =  base shift  +  (3) margins of current iteration level
            // -- qi: current value index 0/1/2/3
            // -- -- fx/fy map qi to x/y positions of a square and multiply by shift value (2. argument)
            // -- margins: [strokeW, 1 * gapGrow, 2 * gapGrow, … (vnum-1) * gapGrow]
            // -- -- if vcount == 0    -> shift (3) == strokeW
            // -- -- if vcount == vnum -> shift (3) == 0
            fx(qi, len*cell.w) + fx(qi, gapSum) + fx(qi, margins[vcount]),
            fy(qi, len*cell.h) + fy(qi, gapSum) + fy(qi, margins[vcount])];

        subTree.scale = [
            len*cell.w + gapSum, 
            len*cell.h + gapSum ];

        if (vnum === 0) { // if formDNA only has a single value, like ::3
            subTree.value = dnaHolon;
            return subTree;
        }

        subTree.children = [];
    
        for (let i=0; (vcount > 0 && i < 4) || (vcount === 0 && i < 1); i++) {
            if (vcount > 1) {
            subTree.children = 
                [...subTree.children, constructVmap_recursive(dnaHolon, vcount-1, cell, margins, i) ];
            }
            else {
            const val = dnaHolon.substr(i,1);
    
            subTree.children = [...subTree.children, ({
                // type: 'value',
                data: {
                    dna: '::'+val,
                    vnum: 0, cell: cell,
                    margins: margins.slice(0,1),
                },
                value: val,
                height: vcount-1,
                depth: subTree.depth + 1,
                order: i,
                // count: 1,
                position: [fx(i,cell.w), fy(i,cell.h)],
                scale: [cell.w, cell.h],
                // parent: subTree
            }) ];
            }
        }
        return subTree;
    };
    return constructVmap_recursive (reversedDNA, vnum, cell, margins);
}

// ----------------------------------------------------
// Validation
// ----------------------------------------------------

/**
 * Checks if a given DNA code matches a given FORM (+ optional variable list)
 */
export function dnaMatchesForm (dna, form, _varList=undefined, options) {
    // const { } = { ...options };
    const varList = _varList ? _varList : FForm.getVariables(form);

    const validations = _varList ? [
        createValidation(
            () => FForm.formMatchesVarList(form, varList),
            'FORM doesn\'t match the given variable list'),
        createValidation(
            () => varList.length === totalVarsFromDNA(dna),
            'Number of variables in given variable list doesn\'t match formDNA code length'),
        createValidation(
            () => encode(form, varList) === dna,
            'formDNA code is inconsistent with FORM interpretation results (respecting specified variable order)'),
    ] : [
        createValidation(
            () => varList && varList.length === totalVarsFromDNA(dna),
            'Number of FORM variables doesn\'t match formDNA code length'),
        createValidation(
            () => encode(form) === dna,
            'formDNA code is inconsistent with FORM interpretation results'),
    ];

    return validations.every(validation => validation().cata({
        error: e => { throw new Error(e); },
        success: data => data,
    }) );

    return true;
}

/**
 * Checks if an input is in formDNA format
 * (has to be marked with '::' to not confuse it with a FORM out of constants)
 */
export function isValidDNA (_input, options) {
    const {compareForm, requireMark} = { compareForm: true, requireMark: true, ...options };

    const input = requireMark ? _input : '::'+_input;

    const validations1 = [
        createValidation(() => typeof(input) === 'string',
            'formDNA input is not of type ‘string’'),
        createValidation(() => input.includes('::'),
            'Input does not include the mark ‘::’ for formDNA'),
        createValidation(() => input.length >= 3,
            'formDNA input is too short'),
    ];
    validations1.every(validation => validation().cata({
        error: e => { throw new Error(e); },
        success: data => data,
    }) );

    const { dna, formula, varList } = getDNAparts(input);
    const validations2 = [
        createValidation(() => totalVarsFromDNA(dna) >= 0,
            'formDNA code length is not in the range 4^x'),
        createValidation(() => !dna.split('').some(n => isNaN(parseInt(n)) || parseInt(n) < 0 || parseInt(n) > 3),
            'formDNA code is not in quaternion format (consisting only of the numbers 0/1/2/3)'),
        compareForm && formula !== undefined
        ? createValidation(() => dnaMatchesForm(dna, formula, varList),
            'formDNA code part doesn\'t match formula part or formula part doesn\'t match its specified variable order') : null,
    ].filter(fn => fn);

    validations2.every(validation => validation().cata({
        error: e => { throw new Error(e); },
        success: data => data,
    }) );

    return true;
}

// ----------------------------------------------------
// Helper
// ----------------------------------------------------

/**
 * ! EXPERIMENTAL
 */
export function generateVarNames (vnum, excludeList = undefined) {
return Array.from({length: vnum}, (_, i) => {
    let candidate = `x_${i}`;
    if (excludeList !== undefined) {
        while (excludeList.includes(candidate)) {
            candidate = candidate+'′';
        }
    }
    return candidate;
});
}

/**
 * Returns the constituents of the 4-valued universe of 1 terms from a variable name
 * 
 * ! EXPERIMENTAL
 */
export function universe_1 (x) {
if (x.length > 1) x = `"${x}"`;
return [ 
    `({(${x})}{2r|(${x})})`, 
    `({${x}}{2r|${x}})`, 
    `(({(${x})}${x})({2r|${x}}(${x})))`, 
    `(({${x}}(${x}))({2r|(${x})}${x}))`];
}

/**
 * Returns the constituents of the 4-valued universe of n terms from a list of n variable names
 * 
 * ! EXPERIMENTAL
 */
export function universe_n (vars) {
const vnum = vars.length;
const univ1s = vars.map(v => universe_1(v));
return Array.from({length: 4**vnum}, (_, i) => {
    const iq = pad(i.toString(4), vnum).split('');
    const univN = univ1s.reduce((formula, univ1, j, arr) => 
                        formula+`(${univ1[iq[j]]})`
                        +(j === arr.length-1 ? ')' : ''), '(');
    return vnum > 1 ? univN : univN.slice(2,-2);
});
}

/**
 * Calculates variable number from formDNA
 */
export function totalVarsFromDNA (formDNA) { 
    // detach from formDNA mark '::'
    const dna = formDNA.split(':').pop();

    // calculate the number of variables from the lenght of the string
    const n = Math.log(dna.length)/Math.log(4); // log_4(dna length) = variable number
    return n % 1 === 0 ? n : NaN;
}

/**
 * Repairs a given string that is not in a valid formDNA form to pass as formDNA
 */
export function repairDNA (input) {
    // if the input contains the mark '::' for formDNA, distinguish two cases
    if (input.includes('::')) {
        // Case 1: input is of form f.[x]::n or f::n -> f will be encoded as a FORM (with [x] as variable order, if it matches the FORMs variables in number and labels)
        // - If the formDNA has been well formed in the first place, the output will be equivalent
        // - If the dna part doesn't match the FORM part, the dna part will be corrected
        // - If the variable order doesn't match the FORM variables, it will also be corrected
        // Note that this case effectively interprets the input as FORM input and makes sure that the formDNA is consistent, because it is impossible to infer a FORM from its DNA.
        const parts = getDNAparts(input);
        if (parts.formula) {
            // if there is a [x]-part, extract variable order and check if its valid for the FORM
            let varList = undefined;
            try { // try...catch avoids interruption by Error
                if (parts.varList && FForm.formMatchesVarList(parts.formula, parts.varList)) varList = parts.varList;
            } catch (e) {
                console.error(e.message);
            }
            // re-encode to return correct formDNA for the given formula
            return formToDNA(parts.formula, varList);
        }
        // Case 2: input is of form ::n -> the output will be the same
        // Note that a FORM will not be decoded from the dna alone, since this FORM would be opinionated
        if (!isValidDNA(input)) return null;

        return input;
    }
    // if the input is not marked as formDNA, it will just be encoded as a FORM
    return formToDNA(input);
}

/**
 * Decomposes a formDNA string into its 3/2/1 parts
 */
export function getDNAparts (formDNA) {
    let dna = undefined, formula = undefined, varList = undefined;

    const parts = formDNA.split(':');
    dna = parts.pop();

    if (parts[0].length > 0) {
        const form_parts = parts[0].split('.');
        formula = form_parts[0];
        varList = form_parts.length > 1 ? form_parts[1].slice(1,-1).split(',') : varList;
    }

    return ({ dna: dna, formula: formula, varList: varList });
}