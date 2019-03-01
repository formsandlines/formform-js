import 'bootstrap';
import './scss/index.scss';
import {show, hide, hideAll, toggle, isVisible} from './common/helper';

import * as d3 from 'd3';

// import {FGraph as formform} from './lib/main';
import formform from './lib/main';
// import {FGraph} from './lib/main';
// let formform = {graph: FGraph};

const txtboxID = 'form_entry';
const graphTreeID = 'graph-tree';
const graphPackID = 'graph-pack';
const graphGsbID = 'graph-gsb';

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
	  // $('#explanations').toggle( 'fast', function() {
			// Animation complete.
			if(isVisible(explanations)) explSwitch.innerHTML = 'Hide explanations';
			else explSwitch.innerHTML = 'Show explanations';
	  // });
	});

	// debugging:

	// const testFormula = '(("vaa20"("vaaa30"{}{1,2})"va21")"va10"("vab20"())) (((()())()())())';
	//{open|{/meinen/,/mitteilen/,/verstehen/},/meinen/,/mitteilen/,/verstehen/}
	// const testFormula = '{}{open|}({}{open|}){c,b,a}{open|c,b,a}({c,b,a}{open|c,b,a})';
	// const testFormula = '{open|{}{open|}({}{open|}){c,b,a}{open|2r|c,b,a}({c,b,a{open|a,b}}{open|c,b,{open|a}a}),a}';

	// show(`#${graphTreeID}`);
	// show(`#${graphPackID}`);

	// // const graphTree = {};
	// const graphTree = formform.graph.createGraph('tree', testFormula,
	// 	{parentId: graphTreeID, width: 800, height: 800, styleClass: 'basic'});
	
	// const graphPack = formform.graph.createGraph('pack', testFormula,
	// 	{parentId: graphPackID, styleClass: 'basic'});

	// [window.graphTree, window.graphPack] = [graphTree, graphPack];

});

window.btnCalc = function() {
    const txtbox = document.getElementById(txtboxID);
    const json = formform.graph.parseLinear(txtbox.value)
    const vals = formform.graph.calcAll(json);

	let keys = Object.keys(vals);
	let table = '';

	// console.log(vals);
	// console.log(keys);

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
			csv += k + ';' + vals[k] + (i < keys.length-1 ? '\n' : ''); // kSplit.join(';')
		}
		table += `
			</tbody>
		</table>`;

		show('#output-vals-csv');
		tempData.csv = csv;
	}

	hide('#output-wrapper-json');
	show('#output-wrapper-vals');
	hideAll(`#${graphTreeID}, #${graphPackID}`);
	document.getElementById('output-vals').innerHTML = table;
}
window.btnViewJSON = function() {
  const txtbox = document.getElementById(txtboxID);

  hide('#output-wrapper-vals');
	show('#output-wrapper-json');
	hideAll(`#${graphTreeID}, #${graphPackID}`);
	document.getElementById('output-json').innerHTML = '<code>'+formform.graph.jsonString(txtbox.value)+'</code>';
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
	}

	let style = 'basic';
	try {
		style = [...styleSwitcher[type].getElementsByTagName('input')].filter(d => d.checked).pop().getAttribute('value');
	}
	catch (error) {
	}

	const graph = renderGraph(type, txtbox.value, {styleClass: style});

	if (graph && window.graphs.length > 0) window.graphs.shift();

	// debugging:
	// console.log(graph);
	window.graphs.push(graph);
}

function renderGraph(type, formula, options={}) {
	switch(type) {
		case 'tree':
			document.querySelectorAll(`#${graphTreeID} > svg`).forEach(elem => elem.remove());
			return formform.graph.createGraph('tree', formula,
				{parentId: graphTreeID, width: window.innerWidth, height: 800, ...options});
		case 'pack':
			document.querySelectorAll(`#${graphPackID} > svg`).forEach(elem => elem.remove());
			return formform.graph.createGraph('pack', formula, 
				{parentId: graphPackID, ...options});
	}
}

window.graphStyle = function(type, style) {
	const graphsNext = [];
	window.graphs.forEach(g => {
		
		graphsNext.push( renderGraph(type, g.formula, {styleClass: style}) );
	});
	window.graphs = graphsNext;
}

window.exportRender = function(type) {
	let svg = '';
	let name = '';
	if(type === 'tree') {
		svg = [...document.querySelectorAll(`#${graphTreeID} > svg`)].pop();
		name = 'formform-export_tree';
	}
	else if(type === 'pack') {
		svg = [...document.querySelectorAll(`#${graphPackID} > svg`)].pop();
		name = 'formform-export_graph';
	}
	else if(type === 'gsb') {
		svg = [...document.querySelectorAll(`#${graphGsbID} > svg`)].pop();
		name = 'formform-export_gsb';
	}

	formform.graph.saveGraph('svg', svg, name);
}

window.exportVals = function(filetype) {

	if(filetype === 'csv' && tempData.csv) {
		// tempData.csv;
	}
	else if(filetype === 'txt') {
		
	}

	
}



// debugging:

window.d3 = d3;
window.formform = formform;