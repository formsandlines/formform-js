import 'bootstrap';

let ClipboardJS = require('clipboard');
let clipboard = new ClipboardJS('.clipboard-btn');

import './scss/index.scss';
import {show, hide, hideAll, toggle, isVisible, saveText, getTimestamp} from './common/helper';

import * as d3 from 'd3';
import formform from './lib/main';
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
}

document.addEventListener('DOMContentLoaded', function() {
	const explSwitch = document.getElementById('toggle_explanations');
	const explanations = document.getElementById('explanations');

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

	let keys = Object.keys(vals);
	let table = '';

	if (keys.length === 1 && keys[0] === 'Result') {

		table = `<p>${keys[0]}: <span class="result">${vals['Result']}</span></p>`;

		hide('#output-vals-csv');
	}
	else {

		keys.sort();

		const header = ['Variables','Interpretation','Result'];
		const varLblClass = 'varLabels-data';
		const varValClass = 'varValues-data';
		table = `
		<table class="table table-sm table-hover w-auto">
			<thead>
				<tr>
					<th scope="col">${header[0]}</th>
					<th scope="col">${header[1]}</th>
					<th scope="col">${header[2]}</th>
				</tr>
			</thead>
			<tbody>`;
		let csv = header.join(';') + '\n';
		for (let i = 0; i < keys.length; i++) {
			const k = keys[i];
			const kSplit = k.split(';');
			
			const varLabels = kSplit[0].split(',').join(`</span>,<span class="${varLblClass}">`).concat(`</span>`).addBefore(0,`<span class="${varLblClass}">`);
			const varValues = kSplit[1].split('').join(`</span><span class="${varValClass}">`).concat(`</span>`).addBefore(0,`<span class="${varValClass}">`);
			
			table += `
				<tr>
					<td class="varLabels">${varLabels}</td>
					<td class="varValues">${varValues}</td>
					<td class="result">${vals[k]}</td>
				</tr>`;
			csv += k + ';' + vals[k] + (i < keys.length-1 ? '\n' : '');
		}
		table += `
			</tbody>
		</table>`;

		show('#output-vals-csv');
		tempData.csv = csv;
	}

	hide('#output-wrapper-json');
	show('#output-wrapper-vals');
	hideAll(`#${graphTreeID}, #${graphPackID}, #${graphGsbID}`);
	document.getElementById('output-vals').innerHTML = table;

	window.location.href = encodeURI('#'+txtbox.value+'#calc');
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
			return formform.graph.createGraph('tree', formula,
				{parentId: graphTreeID, width: window.innerWidth, height: 800, ...{...options, drawBackground: drawBg} });
		case 'pack':
			document.querySelectorAll(`#${graphPackID} > svg`).forEach(elem => elem.remove());
			drawBg = document.querySelector(`#${graphPackID} .bgCheckbox`).checked;
			return formform.graph.createGraph('pack', formula, 
				{parentId: graphPackID, ...{...options, drawBackground: drawBg} });
		case 'gsbhooks':
			document.querySelectorAll(`#${graphGsbID} > svg`).forEach(elem => elem.remove());
			drawBg = document.querySelector(`#${graphGsbID} .bgCheckbox`).checked;
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
	if(type === 'tree') {
		svg = [...document.querySelectorAll(`#${graphTreeID} > svg`)].pop();
		filename = 'formform-export_tree';
	}
	else if(type === 'pack') {
		svg = [...document.querySelectorAll(`#${graphPackID} > svg`)].pop();
		filename = 'formform-export_graph';
	}
	else if(type === 'gsbhooks') {
		svg = [...document.querySelectorAll(`#${graphGsbID} > svg`)].pop();
		filename = 'formform-export_gsbhooks';
	}

	formform.graph.saveGraph(format, svg, filename);
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