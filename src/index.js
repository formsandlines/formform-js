import 'bootstrap';
import './scss/index.scss';

import * as $ from 'jquery';

import * as d3 from 'd3';
import formform from './lib/main';

const txtboxID = 'form_entry';
const graphTreeID = 'graph-tree';
const graphPackID = 'graph-pack';
const graphGsbID = 'graph-gsb';

const tempData = { csv: null };

window.graphs = [];

const styleSwitcher = {
	tree: $('#graph-tree > #style-switch'),
	pack: $('#graph-pack > #style-switch')
}

$(document).ready(function(){
	$('#output-wrapper-vals').hide();
	$('#output-wrapper-json').hide();
	$(`#${graphTreeID}, #${graphPackID}, #${graphGsbID}`).hide();
	
	$('#explanations').hide();
	$('#toggle_explanations').html('Show explanations');

	$('#toggle_explanations').click(function() {
	  $('#explanations').toggle( 'fast', function() {
	    // Animation complete.
	    if($('#explanations').is( ":visible" )) $('#toggle_explanations').html('Hide explanations');
	    else if($('#explanations').is( ":hidden" )) $('#toggle_explanations').html('Show explanations');
	  });
	});

	// debugging:

	// const testFormula = '(("vaa20"("vaaa30"{}{1,2})"va21")"va10"("vab20"())) (((()())()())())';
	//{open|{/meinen/,/mitteilen/,/verstehen/},/meinen/,/mitteilen/,/verstehen/}
	// const testFormula = '{}{open|}({}{open|}){c,b,a}{open|c,b,a}({c,b,a}{open|c,b,a})';
	// const testFormula = '{open|{}{open|}({}{open|}){c,b,a}{open|2r|c,b,a}({c,b,a{open|a,b}}{open|c,b,{open|a}a}),a}';

	// $(`#${graphTreeID}`).show();
	// $(`#${graphPackID}`).show();

	// // const graphTree = {};
	// const graphTree = formform.createGraph('tree', testFormula,
	// 	{parentId: graphTreeID, width: 800, height: 800, styleClass: 'basic'});
	
	// const graphPack = formform.createGraph('pack', testFormula,
	// 	{parentId: graphPackID, styleClass: 'basic'});

	// [window.graphTree, window.graphPack] = [graphTree, graphPack];

});

window.btnCalc = function() {
    const txtbox = document.getElementById(txtboxID);
    const json = formform.parseLinear(txtbox.value)
    const vals = formform.calcAll(json);

	let keys = Object.keys(vals);
	let table = '';

	// console.log(vals);
	// console.log(keys);

	if (keys.length === 1 && keys[0] === 'Result') {

		table = `<p>${keys[0]}: <span class="result">${vals['Result']}</span></p>`;

		$('#output-vals-csv').hide();
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

		$('#output-vals-csv').show();
		tempData.csv = csv;
	}

	$('#output-wrapper-json').hide();
	$('#output-wrapper-vals').show();
	$(`#${graphTreeID}, #${graphPackID}`).hide();
	$('#output-vals').html( table );
}
window.btnViewJSON = function() {
    const txtbox = document.getElementById(txtboxID);

    $('#output-wrapper-vals').hide();
	$('#output-wrapper-json').show();
	$(`#${graphTreeID}, #${graphPackID}`).hide();
    $('#output-json').html( '<code>'+formform.jsonString(txtbox.value)+'</code>' );
}

window.btnRender = function(type) {
	const txtbox = document.getElementById(txtboxID);

	$('#output-wrapper-vals').hide();
	$('#output-wrapper-json').hide();
	
	switch(type) {
		case 'tree':
			$(`#${graphTreeID}`).show();
			$(`#${graphPackID}`).hide();
			$(`#${graphGsbID}`).hide();
			break;
		case 'pack':
			$(`#${graphPackID}`).show();
			$(`#${graphTreeID}`).hide();
			$(`#${graphGsbID}`).hide();
			break;
	}

	let style = styleSwitcher[type].children().filter((i,d) => d.checked).attr('value');
	if (!style) style = 'basic';

	const graph = renderGraph(type, txtbox.value, {styleClass: style});

	if (graph && window.graphs.length > 0) window.graphs.shift();

	// debugging:
	// console.log(graph);
	window.graphs.push(graph);
}

function renderGraph(type, formula, options={}) {
	switch(type) {
		case 'tree':
			$(`#${graphTreeID} > svg`).remove();
			return formform.createGraph('tree', formula,
				{parentId: graphTreeID, width: window.innerWidth, height: 800, ...options});
		case 'pack':
			$(`#${graphPackID} > svg`).remove();
			return formform.createGraph('pack', formula, 
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
		svg = $(`#${graphTreeID} > svg`).get().pop();
		name = 'formform-export_tree';
	}
	else if(type === 'pack') {
		svg = $(`#${graphPackID} > svg`).get().pop();
		name = 'formform-export_graph';
	}
	else if(type === 'gsb') {
		svg = $(`#${graphGsbID} > svg`).get().pop();
		name = 'formform-export_gsb';
	}

	formform.saveGraph('svg', svg, name);
}

window.exportVals = function(filetype) {

	if(type === 'csv' && tempData.csv) {
		// tempData.csv;
	}
	else if(type === 'txt') {
		
	}

	
}



// debugging:

window.d3 = d3;
window.formform = formform;