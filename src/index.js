import 'bootstrap';

let ClipboardJS = require('clipboard');
let clipboard = new ClipboardJS('.clipboard-btn');

import './scss/index.scss';
import {show, hide, hideAll, toggle, isVisible, saveText, getTimestamp} from './common/helper';

import * as d3 from 'd3';
import formform from './lib/main';
import {valueTableWizard, classnames_DEF as tableClasses} from './common/ff-tables';
// import * as formform from './lib/main';

const txtboxID = 'form_entry';
const graphTreeID = 'graph-tree';
const graphPackID = 'graph-pack';
const graphGsbID = 'graph-gsbhooks';

const tempData = { csv: null };

window.graphs = [];

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
	hide('#output-wrapper-json');
	hideAll(`#${graphTreeID}, #${graphPackID}, #${graphGsbID}`);
	
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
			}
		}
	}
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

	hide('#output-wrapper-json');
	show('#output-wrapper-vals');
	hideAll(`#${graphTreeID}, #${graphPackID}, #${graphGsbID}`);
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
		show('#output-wrapper-json');
		hideAll(`#${graphTreeID}, #${graphPackID}, #${graphGsbID}`);
		document.getElementById('output-json').innerHTML = '<code>'+formform.graph.jsonString(txtbox.value)+'</code>';

	window.location.href = encodeURI('#'+txtbox.value+'#json');
}

window.btnRender = function(type) {
	const txtbox = document.getElementById(txtboxID);

	hide('#output-wrapper-vals');
	hide('#output-wrapper-json');
	
	switch(type) {
		case 'tree':
			show(`#${graphTreeID}`);
			hide(`#${graphPackID}`);
			hide(`#${graphGsbID}`);
			break;
		case 'pack':
			show(`#${graphPackID}`);
			hide(`#${graphTreeID}`);
			hide(`#${graphGsbID}`);
			break;
		case 'gsbhooks':
			show(`#${graphGsbID}`);
			hide(`#${graphPackID}`);
			hide(`#${graphTreeID}`);
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
	let drawBg = '';
	switch(type) {
		case 'tree':
			document.querySelectorAll(`#${graphTreeID} > svg`).forEach(elem => elem.remove());
			drawBg = document.querySelector(`#${graphTreeID} .bgCheckbox`).checked;
			// scaleSel = document.querySelector(`#${graphTreeID} .scaleSelect`).value;
			return formform.graph.createGraph('tree', formula,
				{parentId: graphTreeID, width: window.innerWidth, height: 800, ...{...options, drawBackground: drawBg} });
		case 'pack':
			document.querySelectorAll(`#${graphPackID} > svg`).forEach(elem => elem.remove());
			drawBg = document.querySelector(`#${graphPackID} .bgCheckbox`).checked;
			// scaleSel = document.querySelector(`#${graphPackID} .scaleSelect`).value;
			return formform.graph.createGraph('pack', formula, 
				{parentId: graphPackID, ...{...options, drawBackground: drawBg} });
		case 'gsbhooks':
			document.querySelectorAll(`#${graphGsbID} > svg`).forEach(elem => elem.remove());
			drawBg = document.querySelector(`#${graphGsbID} .bgCheckbox`).checked;
			// scaleSel = document.querySelector(`#${graphPackID} .scaleSelect`).value;
			const compactReEntries = document.querySelector(`#${graphGsbID} #compactCheckbox`).checked;
			return formform.graph.createGraph('gsbhooks', formula, 
				{parentId: graphGsbID, ...{...options, drawBackground: drawBg, compactChecked: compactReEntries} });
	}
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
		svg = [...document.querySelectorAll(`#${graphTreeID} > svg`)].pop();
		filename = 'formform-export_tree';
		scale = document.querySelector(`#${graphTreeID} .scaleSelect`).value;
	}
	else if(type === 'pack') {
		svg = [...document.querySelectorAll(`#${graphPackID} > svg`)].pop();
		filename = 'formform-export_graph';
		scale = document.querySelector(`#${graphPackID} .scaleSelect`).value;
	}
	else if(type === 'gsbhooks') {
		svg = [...document.querySelectorAll(`#${graphGsbID} > svg`)].pop();
		filename = 'formform-export_gsbhooks';
		scale = document.querySelector(`#${graphGsbID} .scaleSelect`).value;
	}

	formform.graph.saveGraph(format, svg, filename, scale);
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