import 'bootstrap';

let ClipboardJS = require('clipboard');
let clipboard = new ClipboardJS('.clipboard-btn');

import './scss/index.scss';
import {show, hide, hideAll, toggle, isVisible, saveText, getTimestamp, scaleSVG, permuteArray, equalArrays} from './common/helper';

import * as d3 from 'd3';
import formform from './lib/main';
import {valueTableWizard, classnames_DEF as tableClasses} from './common/ff-tables';

const txtboxID = 'form_entry';
const vmapID = {cont: 'vmap-output', render: 'vmap-render'};
const graphTreeID = {cont: 'graph-tree', render: 'graph-tree-render'};
const graphPackID = {cont: 'graph-pack', render: 'graph-pack-render'};
const graphGsbID = {cont: 'graph-gsbhooks', render: 'graph-gsbhooks-render'};

const varOrderSel = {cont: 'input-varorder', input: undefined, ctrId: 'varOrderSelect', delim: '¶'};

const tempData = { csv: null };

window.graphs = [];
window.formform = formform;

const transformCtrl = {
	zoomSlider: { pack: document.getElementById('pack-zoomSlider') },
	fitSwitch: { pack: document.getElementById('pack-fitSwitch') }
}
const styleSwitcher = {
	tree: document.querySelector('#graph-tree > #style-switch'),
	pack: document.querySelector('#graph-pack > #style-switch')
};
const resultFilter = {
	ID: 'filterResultsOptions',
	neg: document.getElementById('negResultCheckbox'),
	search0: document.getElementById('resultSearchCheckbox0'),
	search1: document.getElementById('resultSearchCheckbox1'),
	search2: document.getElementById('resultSearchCheckbox2'),
	search3: document.getElementById('resultSearchCheckbox3')
}
const valueFilter = {
	ID: 'filterValsOptions',
	neg: document.getElementById('negValCheckbox'),
	search0: document.getElementById('valSearchCheckbox0'),
	search1: document.getElementById('valSearchCheckbox1'),
	search2: document.getElementById('valSearchCheckbox2'),
	search3: document.getElementById('valSearchCheckbox3'),
	logOR: document.getElementById('logORRadio'),
	logAND: document.getElementById('logANDRadio'),
	logDISJUNCT: document.getElementById('logDISJUNCTRadio'),
	reflexAND: document.getElementById('reflexANDRadio')
};
const resultCheckbox = {
	ID: 'filterResultsCheckbox',
}
const valueCheckbox = {
	ID: 'filterValsCheckbox',
}
const renderBtns = {
	pack: document.getElementById('btn-pack'),
	gsbhooks: document.getElementById('btn-gsbhooks'),
}

const errorMsgBox = document.getElementById('error-msg-box');

const clearErrorMsg = () => {
	errorMsgBox.innerHTML = '';
};
const showErrorMsg = (e) => {
	errorMsgBox.innerHTML = `<div class="alert alert-danger" role="alert"><strong>Error:</strong> ${e.message}</div>`;
};


// var debug = formform.dna.vmap('::1012');
// document.getElementById('testarea').innerHTML = debug;

document.addEventListener('DOMContentLoaded', function() {
	const explSwitch = document.getElementById('toggle_explanations');
	const explanations = document.getElementById('explanations');

	updateVarOrderSel(false);

	hideAll(`#${valueFilter.ID}, #${resultFilter.ID}`);
	resultFilter.neg.disabled = true;

	hide('#output-wrapper-vals');
	hide('#output-wrapper-data');
	hide(`#${vmapID.cont}`);
	hideAll(`#${graphTreeID.cont}, #${graphPackID.cont}, #${graphGsbID.cont}`);
	
	hide(explanations);
	explSwitch.innerHTML = 'Show explanations';

	explSwitch.addEventListener('click', e => {
		toggle(explanations);
		if(isVisible(explanations)) explSwitch.innerHTML = 'Hide explanations';
		else explSwitch.innerHTML = 'Show explanations';
	});

	const bgCheckboxes = document.querySelectorAll('.bgCheckbox');
	bgCheckboxes.forEach(checkbox => checkbox.addEventListener('click', e => {
		bgCheckboxes.forEach(otherCheckbox => otherCheckbox.checked = checkbox.checked);
	}) );

	const scaleSelects = document.querySelectorAll('.scaleSelect');
	scaleSelects.forEach(select => select.addEventListener('change', e => {
		scaleSelects.forEach(otherSelect => otherSelect.value = select.value);
	}) );

	const zoomSlider = document.querySelectorAll('.zoomSlider');
	zoomSlider.forEach(slider => slider.addEventListener('input', e => {
		const container = slider.parentNode.parentNode.parentNode;
		scaleViz(container, slider.value);

	}) );

	document.querySelectorAll(`#${resultFilter.ID} input`).forEach(input => input.addEventListener('click', e => { 
		if (resultFilter.search0.checked && resultFilter.search1.checked && resultFilter.search2.checked && resultFilter.search3.checked) {
			resultFilter.neg.disabled = true;

		} else {
			resultFilter.neg.disabled = false;
		}

		btnCalc(); 
	}) );
	document.querySelectorAll(`#${valueFilter.ID} input`).forEach(input => input.addEventListener('click', e => { 
		if (!valueFilter.search0.checked && !valueFilter.search1.checked && !valueFilter.search2.checked && !valueFilter.search3.checked) {

			valueFilter.neg.disabled = valueFilter.logOR.disabled = valueFilter.logAND.disabled = valueFilter.logDISJUNCT.disabled = valueFilter.reflexAND.disabled = true;
		} else {
			valueFilter.neg.disabled = valueFilter.logOR.disabled = valueFilter.logAND.disabled = valueFilter.logDISJUNCT.disabled = valueFilter.reflexAND.disabled = false;
		}
		btnCalc(); 
	}) );

	Object.values(renderBtns).forEach(btn => {
		btn.addEventListener('focusin', function(e) {
			e.stopPropagation();
			this.parentNode.classList.add('childFocus');
		});
		btn.addEventListener('focusout', function(e) {
			e.stopPropagation();
			this.parentNode.classList.remove('childFocus');
		});
	});

	clearErrorMsg();
	interpretURIHashParams( decodeURI(window.location.hash) );
});

function interpretURIHashParams(hash) {
	
	if (hash.length > 1) {
		hash = hash.substr(1,hash.length);

		const hashParts = hash.split('#');

		const inputParts = hashParts[0].split(';');
		document.getElementById(txtboxID).value = inputParts[0];

		if (inputParts.length > 1) varOrderSel.input = inputParts[1];

		if (hashParts.length > 1) {
			const method = hashParts[1];

			const methodParts = method.split('-');
			if (methodParts.length > 1) {
				const methodOption = methodParts[1];
				btnRender(methodOption);
			}
			else {
				if (method === 'calc') btnCalc();
				else if (method === 'json') btnViewJSON();
				else if (method === 'dna')  btnViewDNA();
				else if (method === 'vmap') btnVmap();
			}
		}
	}
}

window.resetScale = function(elem) {
	const container = elem.parentNode.parentNode.parentNode;

	scaleViz(container, 1.0);
}

window.fitToWindow = function(elem) {
	const container = elem.parentNode.parentNode.parentNode;
	const renderNode = container.querySelector('.render');
	const svg = renderNode.querySelector('svg');

	// const svgScale = svg.getAttribute('transform').match(/scale\((.+?)\)/)[1];
	const svgScale = svg.style['transform'].match(/scale\((.+?)\)/)[1];
	let scaleRatio = (window.innerWidth / svg.getBBox().width) * 0.98;
	// let scaleRatio = (window.innerWidth / svg.clientWidth) * 0.98;
	scaleRatio = Math.round(scaleRatio*100)/100;

	scaleViz(container, scaleRatio);
	
}

function scaleViz(container, ratio) {
	const renderNode = container.querySelector('.render');
	const svg = renderNode.querySelector('svg');

	scaleSVG(svg, renderNode, ratio);
	refitContainer(renderNode, renderNode.parentNode);

	const zoomSlider = container.querySelector('.zoomSlider');
	container.querySelector('.zoomLevel').innerHTML = ratio;
	if (zoomSlider.value != ratio) zoomSlider.value = ratio;
}


function refitContainer(renderNode, renderContainer) {
	let renderW = parseInt(renderNode.style.width);
	let compareW = 0;

	if (renderContainer.classList.contains('container')) {
		const offX = renderNode.offsetLeft;
		renderW += offX;
		compareW = window.innerWidth * 0.98;
	} else {
		compareW = renderContainer.clientWidth * 0.86;
	}

	if (renderW > compareW) {
		if (renderContainer.classList.contains('container')) renderContainer.classList.remove('container');
	}
	else renderContainer.classList.add('container');
}




function updateVarOrderSel(display, formulaInput=undefined) {
	const container = document.getElementById(varOrderSel.cont);

	if (formulaInput) {
		const vars = formform.dna.getVariables(formulaInput);
		const inputIsDNA = formulaInput.includes('::');

		if (vars.length > 0) {
			const orderInput = varOrderSel.input ? varOrderSel.input.split(varOrderSel.delim) : undefined;
		
			const ctrExists = document.getElementById(varOrderSel.ctrId) !== null && document.getElementById(varOrderSel.ctrId).value !== '';

			if (!ctrExists || inputIsDNA || !equalArrays(vars, orderInput) ) {
				createVarOrderSel(container, vars, (!ctrExists && equalArrays(vars, orderInput) ? orderInput.join(varOrderSel.delim) : undefined), !inputIsDNA);
		    }

			const varOrderCtr = document.getElementById(varOrderSel.ctrId);
			if (inputIsDNA) varOrderCtr.disabled = true;
			else varOrderCtr.disabled = false;
		}
		else {
			if (document.getElementById(varOrderSel.ctrId) !== null) document.getElementById(varOrderSel.ctrId).value = '';
			display = false;
		}
	}

	if (display) container.classList.remove('hidden');
	else container.classList.add('hidden');
}


function createVarOrderSel(container, vars, selected, setConvDefault) {
	const varPermutations = permuteArray(vars).map( (perm,i) => ({
	              label: perm.reduce( (acc,curr) => acc.concat(` ${curr.length > 1 ? '"'+curr+'"' : curr}`),'' ),
	              value: perm.join(varOrderSel.delim),
	            }));
	const permDef = selected ? selected
				: vars.join('') === 'ELR' ? varPermutations[2].value
	            : vars.join('') === '+-LR' ? varPermutations[9].value
	            : vars.join('') === '+-ELR' ? varPermutations[39].value
	            : varPermutations[0].value;

	container.innerHTML = `<label for="${varOrderSel.ctrId}">Variable interpretation order:</label><select class="form-control form-control-sm" id="${varOrderSel.ctrId}">
        ${ varPermutations.map(perm => `<option value="${perm.value}" ${setConvDefault && perm.value === permDef ? 'selected' : ''}>${perm.label}</option>`) }

      </select>`;

    const ctrSelect = container.lastElementChild;
    varOrderSel.input = ctrSelect.value;

    ctrSelect.addEventListener('change', e => {
    	varOrderSel.input = ctrSelect.value;

    	const mode = getAppMode();
    	switch (mode) {
    		case 'dna':
    			btnViewDNA();
    			break;
    		case 'calc':
    			btnCalc();
    			break;
    		case 'vmap':
    			btnVmap();
    			break;
    	}
    });
}

function getVarOrderSel() {
	if (document.getElementById(varOrderSel.ctrId) === null) return '';
	return document.getElementById(varOrderSel.ctrId).value;
}

function getAppMode() {
	const hash = decodeURI(window.location.hash);
	const hashParts = hash.split('#');
	return hashParts[hashParts.length-1];
}



window.btnCalc = function() {
	clearErrorMsg();
    const txtbox = document.getElementById(txtboxID);

	try {
		updateVarOrderSel(true, txtbox.value);

		const formula = txtbox.value;
		const tableOpt = {filterRes: {}, filterVal: {}}

		if (!document.getElementById(resultFilter.ID).disabled) {
			tableOpt.filterRes.filterByVals = true;
			tableOpt.filterRes.search = [];
			if (resultFilter.search0.checked) tableOpt.filterRes.search = tableOpt.filterRes.search.concat(0);
			if (resultFilter.search1.checked) tableOpt.filterRes.search = tableOpt.filterRes.search.concat(1);
			if (resultFilter.search2.checked) tableOpt.filterRes.search = tableOpt.filterRes.search.concat(2);
			if (resultFilter.search3.checked) tableOpt.filterRes.search = tableOpt.filterRes.search.concat(3);

			if (resultFilter.neg.checked) tableOpt.filterRes.exclude = true;
		}
		if (!document.getElementById(valueFilter.ID).disabled) {
			tableOpt.filterVal.search = [];
			if (valueFilter.search0.checked) tableOpt.filterVal.search = tableOpt.filterVal.search.concat(0);
			if (valueFilter.search1.checked) tableOpt.filterVal.search = tableOpt.filterVal.search.concat(1);
			if (valueFilter.search2.checked) tableOpt.filterVal.search = tableOpt.filterVal.search.concat(2);
			if (valueFilter.search3.checked) tableOpt.filterVal.search = tableOpt.filterVal.search.concat(3);

			if (valueFilter.neg.checked) tableOpt.filterVal.exclude = true;

			if (valueFilter.logOR.checked) tableOpt.filterVal.combine = false;
			else if (valueFilter.logAND.checked) tableOpt.filterVal.combine = true;
			else if (valueFilter.logDISJUNCT.checked) tableOpt.filterVal.unique = true;
			else if (valueFilter.reflexAND.checked) tableOpt.filterVal.only = true;
		}

		const options = {
			outputCSV: true,
		};
		if (varOrderSel.input) options.varOrder = varOrderSel.input.split(varOrderSel.delim);

	    tableClasses.table = 'table table-sm table-hover w-auto';
	    const table = valueTableWizard(formula, options, tableOpt.filterRes, tableOpt.filterVal);


	    show('#output-vals-csv');
		tempData.csv = table.csv;

		hide('#output-wrapper-data');
		show('#output-wrapper-vals');
		hide(`#${vmapID.cont}`);
		hideAll(`#${graphTreeID.cont}, #${graphPackID.cont}, #${graphGsbID.cont}`);
		document.getElementById('output-vals').innerHTML = table.html;

		window.location.href = encodeURI('#'+txtbox.value+';'+getVarOrderSel()+'#calc');

		if (getVarOrderSel() === '') {
			document.getElementById(resultCheckbox.ID).disabled = true;
			document.getElementById(valueCheckbox.ID).disabled = true;
		} else {
			document.getElementById(resultCheckbox.ID).disabled = false;
			document.getElementById(valueCheckbox.ID).disabled = false;
		}

	} catch (e) {
		showErrorMsg(e);
	}
}

window.filter = function(filterResults=false) {

	if (filterResults) {
		toggle(`#${resultFilter.ID}`);
		const options = document.getElementById(resultFilter.ID);
		options.disabled = !options.disabled;
	}
	else {
		toggle(`#${valueFilter.ID}`);
		const options = document.getElementById(valueFilter.ID);
		options.disabled = !options.disabled;
	}

	btnCalc();
}

window.btnViewJSON = function() {
	clearErrorMsg();

	try {
		const txtbox = document.getElementById(txtboxID);

		const inputIsDNA = txtbox.value.includes('::');
		if (inputIsDNA) throw new Error('formDNA cannot (yet) be decoded into FORMs.');

		updateVarOrderSel(false);

		hide('#output-wrapper-vals');
		show('#output-wrapper-data');
		hide(`#${vmapID.cont}`);
		hideAll(`#${graphTreeID.cont}, #${graphPackID.cont}, #${graphGsbID.cont}`);

		document.getElementById('output-data').innerHTML = `<pre><code>${formform.graph.jsonString(txtbox.value)}</code></pre>`;

		window.location.href = encodeURI('#'+txtbox.value+';'+getVarOrderSel()+'#json');
	} catch (e) {
		showErrorMsg(e);
	}
}

window.btnViewDNA = function() {
	clearErrorMsg();

	try {
		const txtbox = document.getElementById(txtboxID);

		updateVarOrderSel(true, txtbox.value);

		hide('#output-wrapper-vals');
		show('#output-wrapper-data');
		hide(`#${vmapID.cont}`);
		hideAll(`#${graphTreeID.cont}, #${graphPackID.cont}, #${graphGsbID.cont}`);

		const formula = txtbox.value;
		const varorder = varOrderSel.input ? varOrderSel.input.split(varOrderSel.delim) : undefined;

		formform.form.getValidForm(formula);
		const formDNA = formform.dna.formToDNA(formula, varorder, {output: 'html'});
		document.getElementById('output-data').innerHTML = formDNA;

		window.location.href = encodeURI('#'+txtbox.value+';'+getVarOrderSel()+'#dna');
	} catch (e) {
		showErrorMsg(e);
	}
}

window.btnVmap = function() {
	clearErrorMsg();
	try {
		const txtbox = document.getElementById(txtboxID);

		updateVarOrderSel(true, txtbox.value);

		hide('#output-wrapper-vals');
		hide('#output-wrapper-data');
		hideAll(`#${graphTreeID.cont}, #${graphPackID.cont}, #${graphGsbID.cont}`);

		show(`#${vmapID.cont}`);

		const varorder = varOrderSel.input ? varOrderSel.input.split(varOrderSel.delim) : undefined;
		const vmap = formform.dna.vmap(txtbox.value, varorder);

		document.querySelector(`#${vmapID.render}`).innerHTML = vmap;


		if (varorder && varorder.length > 1) createVmapPerspBtn(txtbox.value);


		window.location.href = encodeURI('#'+txtbox.value+';'+getVarOrderSel()+'#vmap');

	} catch (e) {
		showErrorMsg(e);
	}
}

function createVmapPerspBtn(formula) {
	const vmapDiam = parseInt(document.querySelector(`#${vmapID.render} svg`).getAttribute('width'));
	const btnDiam = 30;
	const btnId = 'perspBtn';

	const perspBtn = document.createElement('button');
	perspBtn.setAttribute('id', btnId);
	perspBtn.style['margin-left'] = (vmapDiam+10)+'px';
	perspBtn.style['margin-top'] = (vmapDiam*0.5 - btnDiam*0.5)+'px';
	perspBtn.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" width="${btnDiam}" height="${btnDiam}">
		<path class="st0" d="M20,0L0,20l20,20l20-20L20,0z M30,21h-9v9c0,0.6-0.4,1-1,1s-1-0.4-1-1v-9h-9c-0.6,0-1-0.4-1-1s0.4-1,1-1h9v-9
	c0-0.6,0.4-1,1-1s1,0.4,1,1v9h9c0.6,0,1,0.4,1,1S30.6,21,30,21z"/>
	</svg>`;

	document.querySelector(`#${vmapID.render}`).append(perspBtn);

	perspBtn.addEventListener('click', e => {
		try {
			const vmapPersp = formform.dna.vmapPerspectives(formula, varOrderSel.input ? varOrderSel.input.split(varOrderSel.delim) : undefined);
			document.querySelector(`#${vmapID.render} > figure.vmap`).remove();
			document.querySelector(`#${vmapID.render}`).innerHTML = vmapPersp;
		} catch (e) {
			showErrorMsg(e);
		}
	});
}

window.btnRender = function(type) {
	clearErrorMsg();
	try {
		const txtbox = document.getElementById(txtboxID);

		const inputIsDNA = txtbox.value.includes('::');
		if (inputIsDNA) throw new Error('formDNA cannot (yet) be decoded into FORMs.');

		updateVarOrderSel(false);

		hide('#output-wrapper-vals');
		hide('#output-wrapper-data');
		
		switch(type) {
			case 'tree':
				show(`#${graphTreeID.cont}`);
				hide(`#${graphPackID.cont}`);
				hide(`#${graphGsbID.cont}`);
				hide(`#${vmapID.cont}`);
				break;
			case 'pack':
				show(`#${graphPackID.cont}`);
				hide(`#${graphTreeID.cont}`);
				hide(`#${graphGsbID.cont}`);
				hide(`#${vmapID.cont}`);
				break;
			case 'gsbhooks':
				show(`#${graphGsbID.cont}`);
				hide(`#${graphPackID.cont}`);
				hide(`#${graphTreeID.cont}`);
				hide(`#${vmapID.cont}`);
				break;
		}

		const style = styleSwitcher[type] ? [...styleSwitcher[type].getElementsByTagName('input')].filter(d => d.checked).pop().getAttribute('value') : 'basic';

		const graph = renderGraph(type, txtbox.value, {styleClass: style});

		if (graph && window.graphs.length > 0) window.graphs.shift();

		window.location.href = encodeURI('#'+txtbox.value+';'+getVarOrderSel()+'#graph-'+type);
		window.graphs.push(graph);

	} catch (e) {
		showErrorMsg(e);
	}
}

function renderGraph(type, formula, options={}) {
	let graph;
	let drawBg = '';

	switch(type) {
		case 'tree':
			document.querySelectorAll(`#${graphTreeID.render} > svg`).forEach(elem => elem.remove());
			drawBg = document.querySelector(`#${graphTreeID.cont} .bgCheckbox`).checked;
			graph = formform.graph.createGraph('tree', formula,
				{parentId: graphTreeID.render, width: window.innerWidth, height: 800, ...{...options, drawBackground: drawBg} });
			break;
		case 'pack':
			document.querySelectorAll(`#${graphPackID.render} > svg`).forEach(elem => elem.remove());
			drawBg = document.querySelector(`#${graphPackID.cont} .bgCheckbox`).checked;
			graph = formform.graph.createGraph('pack', formula, 
				{parentId: graphPackID.render, ...{...options, drawBackground: drawBg} });
			break;
		case 'gsbhooks':
			document.querySelectorAll(`#${graphGsbID.render} > svg`).forEach(elem => elem.remove());
			drawBg = document.querySelector(`#${graphGsbID.cont} .bgCheckbox`).checked;
			const compactReEntries = document.querySelector(`#${graphGsbID.cont} #compactCheckbox`).checked;
			graph = formform.graph.createGraph('gsbhooks', formula, 
				{parentId: graphGsbID.render, ...{...options, drawBackground: drawBg, compactChecked: compactReEntries} });
			break;
	}

	const svg = graph.svg.node();
	const renderNode = graph.parent.node();
	const container = renderNode.parentNode.parentNode;
	const zoomSlider = container.querySelector('.zoomSlider');

	scaleViz(container, zoomSlider.value);

	return graph;
}

window.graphStyle = function(type, style) {
	const graphsNext = [];
	window.graphs.forEach(g => {
		
		graphsNext.push( renderGraph(type, g.formula, {styleClass: style}) );
	});
	window.graphs = graphsNext;
}

window.exportRender = function(type, format='svg') {
	let svg = '';
	let filename = '';
	let scale = 1;
	if(type === 'tree') {
		svg = [...document.querySelectorAll(`#${graphTreeID.render} > svg`)].pop();
		filename = 'formform-export_tree';
		scale = document.querySelector(`#${graphTreeID.cont} .scaleSelect`).value;
	}
	else if(type === 'pack') {
		svg = [...document.querySelectorAll(`#${graphPackID.render} > svg`)].pop();
		filename = 'formform-export_graph';
		scale = document.querySelector(`#${graphPackID.cont} .scaleSelect`).value;
	}
	else if(type === 'gsbhooks') {
		svg = [...document.querySelectorAll(`#${graphGsbID.render} > svg`)].pop();
		filename = 'formform-export_gsbhooks';
		scale = document.querySelector(`#${graphGsbID.cont} .scaleSelect`).value;
	}

	const container = svg.parentNode.parentNode.parentNode;
	// const svgScale = svg.getAttribute('transform').match(/scale\((.+?)\)/)[1];
	const svgScale = svg.style['transform'].match(/scale\((.+?)\)/)[1];
	scaleViz(container, 1.0); // normalize zoom ratio

	formform.graph.saveGraph(format, svg, filename, scale);

	scaleViz(container, svgScale); // restore zoom ratio
}

window.exportValsCopy = function() {
	if(tempData.csv) {
		const data = tempData.csv;
		
		document.execCommand(data);
	}
}

window.exportVals = function(filetype) {
	let data = null;

	if(filetype === 'csv' && tempData.csv) {
		data = tempData.csv;

		const timestamp = getTimestamp();
	}

	if (data !== null) {

		document.getElementById('exportValsData').innerHTML = data;

		const exportValsModal = $('#exportValsModal');
		exportValsModal.modal();

	}
	
}

clipboard.on('success', function(e) {
	let clipboardBtn = $(`#${e.trigger.id}`);

	clipboardBtn.tooltip('show');
	setTimeout(function(){
		clipboardBtn.tooltip('hide');
}, 2000);

	e.clearSelection();
});


function insertParam(key, value)
{
    key = encodeURI(key); value = encodeURI(value);

    var kvp = document.location.search.substr(1).split('&');

    var i=kvp.length; var x; while(i--) 
    {
        x = kvp[i].split('=');

        if (x[0]==key)
        {
            x[1] = value;
            kvp[i] = x.join('=');
            break;
        }
    }

    if(i<0) {kvp[kvp.length] = [key,value].join('=');}

    //this will reload the page, it's likely better to store this until finished
    document.location.search = kvp.join('&'); 
}


// debugging:

// window.d3 = d3;
// window.formform = formform;