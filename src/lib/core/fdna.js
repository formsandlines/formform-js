import FForm from './fform';
import { formDNA_html, vmap_html, vmapPerspectives_html, vmapList_html } from '../modules/dna-html';
import { permuteArray, pad, createValidation, equalArrays } from '../../common/helper';
import { getRandomBigInt } from '../../common/bigint-helper';

const bigInt = require('big-integer'); // obsolete with better BigInt support in browsers

export default class FDna extends FForm {
    /*
    =======================================================
      'dna' module for formform (c) 2019/20 Peter Hofmann
    =======================================================
    */
   
    constructor() {
    };

    // ----------------------------------------------------
    // Extensions of FFORM
    // ----------------------------------------------------

    static calcAll(input) {
    	/* extension to represent formDNA as FORM calculation */

    	if (input.includes('::') && this.isValidDNA(input)) {

    		const dna = input.split(':').pop();
    		const results = dna.split('').reverse();

    		const vnum = this.totalVarsFromDNA(dna);
    		const vars = Array.from({length: vnum}, (_, i) => `"x_${i}"` );
    		const vals = {};

	        if (vnum < 1) {
	            vals['Result'] = parseInt(results[0]);
	            return vals;
	        }

    		const interKey = ''+vars.join()+';';

	        for (let i=0; i < results.length; i++) {
	            const interprVals = pad(i.toString(4), vnum);
	            const interpr = interprVals.split('').map((val,n) => ({var: vars[n], value: parseInt(val)}));

	            vals[interKey+interprVals] = results[i];
	        }

	        return vals;
    	}

    	return super.calcAll(input);
    }

    static getVariables(input) {
    	/* extension to get variables from formDNA */

    	if (typeof(input) === 'string' && input.includes('::')) {
    		const { dna, formula, varList } = this.getDNAparts(input);

    		if (varList !== undefined) return varList;
    		else if (formula !== undefined) return super.getVariables(formula);

	    	const vnum = this.totalVarsFromDNA(dna);
    		return Array.from({length: vnum}, (_, i) => `x_${i}` );
    	}

		return super.getVariables(input);
    }

    // ----------------------------------------------------
    // Conversions
    // ----------------------------------------------------

    static encode (_form, varorder=undefined) {
    	/* Encodes a FORM as a dna string */

    	const form = varorder ? this.reOrderVars(_form, varorder) : _form;

    	return Object.values(this.calcAll(form)).reverse().join('');
 	};

 	static decode (dna) {
		/* Decodes dna into (one of its) simplest corresponding FORM model(s) as a json-representation */
		// >>> not yet implemented!

		return null;
 	}

	static intToDNA (int, vnum) {
		/* Takes an integer (usually BigInt) and a desired variable number and returns the corresponding formDNA 

		Note: variable number is needed because the intended number of leading zeros cannot be infered from the integer alone. If no variable number is given, the smallest variable number possible for the quaternion is assumed to generate valid formDNA. */

		const quat = int.toString(4);
		if (quat.substr(0,1) === '-') throw new Error('Negative integers cannot be converted to formDNA.');
		if (quat.includes('.')) throw new Error('Fractional numbers cannot be converted to formDNA.')

		const dnaLen = vnum ? 4**vnum : (function minDnaLen(strLen, n=0) { 
			return 4**n >= strLen ? 4**n : minDnaLen(strLen, n+1);
		})(quat.length);

		if (quat.length > dnaLen) throw new Error('Integer size exceeds desired DNA length.');
		return pad(quat, dnaLen);
	}

    // ----------------------------------------------------
    // Output
    // ----------------------------------------------------

    static formToDNA (input, varorder=undefined, options=undefined) {
    	/* converts a form into its formDNA representation in HTML */

    	const {output} = { output: 'text', ...options };

    	let dna = undefined, formula = undefined, varList = undefined;
    	if (input.includes('::')) {
    		// if the input contains the mark '::' for formDNA, return it if it's valid
			if (!this.isValidDNA(input)) throw new Error('Input is not valid formDNA');

    		const parts = this.getDNAparts(input);

    		dna = parts.dna;
    		formula = parts.formula;
    		varList = parts.varList;
	    }
	    else {
		    // if not, process the input as a FORM with specified or default varorder and encode it to dna
			dna = this.encode( input, (varorder ? varorder : undefined) );
			formula = input;
			varList = varorder ? varorder : this.getVariables(formula);
	    }

		switch (output) {
			case 'html': {
				return formDNA_html(formula, dna, varList);
			}
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

    static dnaToFORM (formDNA, varorder=undefined, options=undefined) {
    	/* converts formDNA with a given variable list/order into a graph representation of (one of its) simplest corresponding FORM model(s) */

    	// >>> not yet implemented!

    	return this.decode(formDNA, varorder);
    }

	static genRandomDNA (vnum) {
		/* Generates a random formDNA string for a given variable number */

		const maxN = bigInt(4).pow( bigInt(4).pow(vnum) );
		const value_bin = getRandomBigInt( maxN.subtract(1) );
		return this.intToDNA(value_bin, vnum);
	}

    static vmap (input, varorder=undefined, options=undefined) {
    	/* generates vmap HTML from form/formDNA input */

    	const {limitSize, convDefaultVarorder} = { limitSize: true, convDefaultVarorder: true, ...options };
    	let dna = undefined;
    	let formula = input;

    	if (input.includes('::') && this.isValidDNA(input)) {
			const dnaParts = this.getDNAparts(input);
			dna = dnaParts.dna;
			formula = dnaParts.formula;
			const varList = dnaParts.varList ? dnaParts.varList : this.getVariables(input);

			if (varorder !== undefined && varList !== undefined && !equalArrays(varorder, varList)) {
				throw new Error('Variable order is specified in the formDNA input and as an argument for the vmap function and they are different. Please select only one specification to avoid conflicting results.');
			}
			else if (varList) {
				varorder = varList;
			} else if (formula) {
				varorder = this.getVariables(formula);
			}
    	}
		else if (!varorder) {
			varorder = this.getVariables(formula);
			if (convDefaultVarorder) varorder = this.matchDefaultVarOrder(varorder);
		}

		if (!dna) dna = this.encode(formula, varorder);
		const vnum = this.totalVarsFromDNA(dna);

		if (vnum === NaN) throw new Error('Invalid variable number for vmaps.');
		if (limitSize && vnum > 8) throw new Error('vmaps with more than 8 variables are too computationally intensive to be rendered with this implementation. If you still want to proceed, add the option "limitSize: false" to your vmap function call (using the formform library).');

    	return vmap_html(input, varorder, dna, vnum, options);
    }

	static vmapPerspectives (form, varorder=undefined, globalOptions=undefined) {
		/* Generates a list of vmap perspectives as permutations of a form/formDNA input */
		// Note: formDNA input not yet supported (permutation algorithm required)

		const {limitSize} = { limitSize: true, ...globalOptions };

		if (typeof(form) === 'string' && form.includes('::')) throw new Error('formDNA input is not yet supported for vmap perspectives.');

		if (varorder === undefined) varorder = this.matchDefaultVarOrder( this.getVariables(form) );
		const vnum = varorder.length;
		if (limitSize && vnum > 5) throw new Error('Rendering all the perspectives for vmaps with more than 5 variables is too computationally intensive with this implementation. You can, however, still compute single permutations by changing the variable order of your FORM. If you still want to proceed, add the option "limitSize: false" to your vmapPerspectives function call (using the formform library).');

		const formula = form; // <<< support for JSON?

		const vmapPerms_html = permuteArray(varorder)
			.map(varorder => this.vmap(formula, varorder, {
				hideInputLabel: true, 
				customLabel: undefined,
				...globalOptions}) );

		return vmapPerspectives_html(vmapPerms_html, formula, globalOptions);
	}

	static vmapList (inputList, globalOptions=undefined) {
		/* Generates a list of vmaps from an array of FORM inputs */
		// inputList format: [['form/formDNA', [varorder]/undefined, options/undefined], ...]

		const vmaps_html = inputList.map(input => this.vmap(input[0], input[1], {...input[2], ...globalOptions}) );

		return vmapList_html (vmaps_html, globalOptions);
	}

    // ----------------------------------------------------
    // Validation
    // ----------------------------------------------------

	static dnaMatchesForm (dna, form, _varList=undefined, options) {
		/* Checks if a given DNA code matches a given FORM (+ optional variable list) */
		// const { } = { ...options };
		const varList = _varList ? _varList : super.getVariables(form);

		const validations = _varList ? [
			createValidation(
				() => this.formMatchesVarList(form, varList),
				'FORM doesn\'t match the given variable list'),
			createValidation(
				() => varList.length === this.totalVarsFromDNA(dna),
				'Number of variables in given variable list doesn\'t match formDNA code length'),
			createValidation(
				() => this.encode(form, varList) === dna,
				'formDNA code is inconsistent with FORM interpretation results (respecting specified variable order)'),
		] : [
			createValidation(
				() => varList && varList.length === this.totalVarsFromDNA(dna),
				'Number of FORM variables doesn\'t match formDNA code length'),
			createValidation(
				() => this.encode(form) === dna,
				'formDNA code is inconsistent with FORM interpretation results'),
		];

		return validations.every(validation => validation().cata({
			error: e => { throw new Error(e); },
			success: data => data,
		}) );

		return true;
	}

    static isValidDNA (_input, options) {
    	/* Checks if an input is in formDNA format (has to be marked with '::' to not confuse it with a FORM out of constants) */
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

    	const { dna, formula, varList } = this.getDNAparts(input);
    	const validations2 = [
    		createValidation(() => this.totalVarsFromDNA(dna) >= 0,
    			'formDNA code length is not in the range 4^x'),
    		createValidation(() => !dna.split('').some(n => isNaN(parseInt(n)) || parseInt(n) < 0 || parseInt(n) > 3),
    			'formDNA code is not in quaternion format (consisting only of the numbers 0/1/2/3)'),
    		compareForm && formula !== undefined
    		? createValidation(() => this.dnaMatchesForm(dna, formula, varList),
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

	static totalVarsFromDNA (formDNA) { 
		/* Calculates variable number from formDNA */

		// detach from formDNA mark '::'
		const dna = formDNA.split(':').pop();

		// calculate the number of variables from the lenght of the string
		const n = Math.log(dna.length)/Math.log(4); // log_4(dna length) = variable number
		return n % 1 === 0 ? n : NaN;
	};

    static repairDNA (input) {
    	/* Repairs a given string that is not in a valid formDNA form to pass as formDNA */

    	// if the input contains the mark '::' for formDNA, distinguish two cases
    	if (input.includes('::')) {
    		// Case 1: input is of form f.[x]::n or f::n -> f will be encoded as a FORM (with [x] as variable order, if it matches the FORMs variables in number and labels)
    		// - If the formDNA has been well formed in the first place, the output will be equivalent
    		// - If the dna part doesn't match the FORM part, the dna part will be corrected
    		// - If the variable order doesn't match the FORM variables, it will also be corrected
    		// Note that this case effectively interprets the input as FORM input and makes sure that the formDNA is consistent, because it is impossible to infer a FORM from its DNA.
    		const parts = this.getDNAparts(input);
    		if (parts.formula) {
		    	// if there is a [x]-part, extract variable order and check if its valid for the FORM
		    	let varList = undefined;
		    	try { // try...catch avoids interruption by Error
	    			if (parts.varList && this.formMatchesVarList(parts.formula, parts.varList)) varList = parts.varList;
		    	} catch (e) {
		    		console.error(e.message);
		    	}
	    		// re-encode to return correct formDNA for the given formula
	    		return this.formToDNA(parts.formula, varList);
	    	}
	    	// Case 2: input is of form ::n -> the output will be the same
	    	// Note that a FORM will not be decoded from the dna alone, since this FORM would be opinionated
	    	if (!this.isValidDNA(input)) return null;

	    	return input;
	    }
	    // if the input is not marked as formDNA, it will just be encoded as a FORM
	    return this.formToDNA(input);
    }

	static getDNAparts (formDNA) {
		/* Decomposes a formDNA string into its 3/2/1 parts */
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

}