import * as d3 from 'd3';
import formform from './lib/main';

const txtboxID = 'form_entry';
const graphTreeID = 'graph-tree';
const graphPackID = 'graph-pack';
const graphGsbID = 'graph-gsb';

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

	keys.sort();

    let str = '<ul>';
	for (let i = 0; i < keys.length; i++) {
		const k = keys[i];
    	str += '<li>';
		str += k + ': ' + vals[k];
    	str += '</li>';
	}
    str += '</ul>'

    $('#output-wrapper-json').hide();
	$('#output-wrapper-vals').show();
	$(`#${graphTreeID}, #${graphPackID}`).hide();
    $('#output-vals').html( str );
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



// debugging:

window.d3 = d3;
window.formform = formform;