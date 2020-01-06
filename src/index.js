import 'bootstrap';

let ClipboardJS = require('clipboard');
let clipboard = new ClipboardJS('.clipboard-btn');

import './scss/index.scss';
import {show, hide, hideAll, toggle, isVisible, saveText, getTimestamp, scaleSVG} from './common/helper';

import * as d3 from 'd3';
import formform from './lib/main';
import {valueTableWizard, classnames_DEF as tableClasses} from './common/ff-tables';
// import * as formform from './lib/main';

const txtboxID = 'form_entry';
const vmapID = {cont: 'vmap-output', render: 'vmap-render'};
const graphTreeID = {cont: 'graph-tree', render: 'graph-tree-render'};
const graphPackID = {cont: 'graph-pack', render: 'graph-pack-render'};
const graphGsbID = {cont: 'graph-gsbhooks', render: 'graph-gsbhooks-render'};

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
const valFilter = {
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

document.addEventListener('DOMContentLoaded', function() {
	const explSwitch = document.getElementById('toggle_explanations');
	const explanations = document.getElementById('explanations');

	hideAll(`#${valFilter.ID}, #${resultFilter.ID}`);
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
	document.querySelectorAll(`#${valFilter.ID} input`).forEach(input => input.addEventListener('click', e => { 
		if (!valFilter.search0.checked && !valFilter.search1.checked && !valFilter.search2.checked && !valFilter.search3.checked) {

			valFilter.neg.disabled = valFilter.logOR.disabled = valFilter.logAND.disabled = valFilter.logDISJUNCT.disabled = valFilter.reflexAND.disabled = true;
		} else {
			valFilter.neg.disabled = valFilter.logOR.disabled = valFilter.logAND.disabled = valFilter.logDISJUNCT.disabled = valFilter.reflexAND.disabled = false;
		}
		btnCalc(); 
	}) );

	interpretURIHashParams( decodeURI(window.location.hash) );
});

function interpretURIHashParams(hash) {
	
	if (hash.length > 1) {
		hash = hash.substr(1,hash.length);

		const hashParts = hash.split('#');
		document.getElementById(txtboxID).value = hashParts[0];

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


window.btnCalc = function() {
    const txtbox = document.getElementById(txtboxID);
    const json = formform.graph.parseLinear(txtbox.value)
    const vals = formform.graph.calcAll(json);

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
	if (!document.getElementById(valFilter.ID).disabled) {
		tableOpt.filterVal.search = [];
		if (valFilter.search0.checked) tableOpt.filterVal.search = tableOpt.filterVal.search.concat(0);
		if (valFilter.search1.checked) tableOpt.filterVal.search = tableOpt.filterVal.search.concat(1);
		if (valFilter.search2.checked) tableOpt.filterVal.search = tableOpt.filterVal.search.concat(2);
		if (valFilter.search3.checked) tableOpt.filterVal.search = tableOpt.filterVal.search.concat(3);

		if (valFilter.neg.checked) tableOpt.filterVal.exclude = true;

		if (valFilter.logOR.checked) tableOpt.filterVal.combine = false;
		else if (valFilter.logAND.checked) tableOpt.filterVal.combine = true;
		else if (valFilter.logDISJUNCT.checked) tableOpt.filterVal.unique = true;
		else if (valFilter.reflexAND.checked) tableOpt.filterVal.only = true;
	}

    tableClasses.table = 'table table-sm table-hover w-auto';
    const table = valueTableWizard(vals, true, tableOpt.filterRes, tableOpt.filterVal);


    show('#output-vals-csv');
	tempData.csv = table.csv;

	hide('#output-wrapper-data');
	show('#output-wrapper-vals');
	hide(`#${vmapID.cont}`);
	hideAll(`#${graphTreeID.cont}, #${graphPackID.cont}, #${graphGsbID.cont}`);
	document.getElementById('output-vals').innerHTML = table.html;

	window.location.href = encodeURI('#'+txtbox.value+'#calc');

}

window.filter = function(filterResults=false) {

	if (filterResults) {
		toggle(`#${resultFilter.ID}`);
		const options = document.getElementById(resultFilter.ID);
		options.disabled = !options.disabled;
	}
	else {
		toggle(`#${valFilter.ID}`);
		const options = document.getElementById(valFilter.ID);
		options.disabled = !options.disabled;
	}

	btnCalc();
}

window.btnViewJSON = function() {
	const txtbox = document.getElementById(txtboxID);

	hide('#output-wrapper-vals');
		show('#output-wrapper-data');
		hide(`#${vmapID.cont}`);
		hideAll(`#${graphTreeID.cont}, #${graphPackID.cont}, #${graphGsbID.cont}`);
		document.getElementById('output-data').innerHTML = `<code>${formform.graph.jsonString(txtbox.value)}</code>`;

	window.location.href = encodeURI('#'+txtbox.value+'#json');
}

window.btnViewDNA = function() {
	const txtbox = document.getElementById(txtboxID);

	hide('#output-wrapper-vals');
		show('#output-wrapper-data');
		hide(`#${vmapID.cont}`);
		hideAll(`#${graphTreeID.cont}, #${graphPackID.cont}, #${graphGsbID.cont}`);
		document.getElementById('output-data').innerHTML = `<code>${txtbox.value}::${formform.dna.formToDNA(txtbox.value)}</code>`;

	window.location.href = encodeURI('#'+txtbox.value+'#dna');
}

window.btnVmap = function() {
	const txtbox = document.getElementById(txtboxID);

	hide('#output-wrapper-vals');
	hide('#output-wrapper-data');
	hideAll(`#${graphTreeID.cont}, #${graphPackID.cont}, #${graphGsbID.cont}`);

	show(`#${vmapID.cont}`);

	document.querySelector(`#${vmapID.cont} > .error-msg`).innerHTML = '';

	if (formform.form.getTotalVars(txtbox.value) > 0) {
		const vmap = formform.dna.vmap(txtbox.value);

		document.querySelector(`#${vmapID.render}`).innerHTML = vmap;
	}
	else {
		document.querySelector(`#${vmapID.cont} > .error-msg`).innerHTML = 'You need to have at least one variable in your FORM to generate a vmap.';
	}

	window.location.href = encodeURI('#'+txtbox.value+'#vmap');
}

window.btnRender = function(type) {
	const txtbox = document.getElementById(txtboxID);

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

	let style = 'basic';
	try {
		style = [...styleSwitcher[type].getElementsByTagName('input')].filter(d => d.checked).pop().getAttribute('value');
	}
	catch (error) {
	}

	const graph = renderGraph(type, txtbox.value, {styleClass: style});

	if (graph && window.graphs.length > 0) window.graphs.shift();

	window.location.href = encodeURI('#'+txtbox.value+'#graph-'+type);
	window.graphs.push(graph);
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

	let clipboardBtn = $('#exportValsModal .clipboard-btn');

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