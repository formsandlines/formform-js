import * as d3 from 'd3';
import formform from './lib/main';

const txtboxID = 'form_entry';
const graphTreeID = 'graph-tree';
const graphPackID = 'graph-pack';
const graphGsbID = 'graph-gsb';

$(document).ready(function(){

	$('#output-wrapper-vals').hide();
	$('#output-wrapper-json').hide();
	$(`#${graphTreeID}, #${graphPackID}`).hide();
	
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
	// const testFormula = '{"what"("cool"),1}(a)b{a,b,c}';
	const testFormula = '( (/What/) ( ( {1,("a_n"({c})b)2,3} ) 1 "else") 0 ){}';

	$(`#${graphTreeID}`).show();
	$(`#${graphPackID}`).show();

	const graphTree = formform.createGraph('tree', testFormula,
	{parentId: graphTreeID, width: 600, height: 600});
	
	const graphPack = formform.createGraph('pack', testFormula,
	{parentId: graphPackID, width: 800, height: 800});

	[window.graphTree, window.graphPack] = [graphTree, graphPack];

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
	
	if(type === 'tree') {
		$(`#${graphTreeID}`).show();
		$(`#${graphPackID}`).hide();
		$(`#${graphGsbID}`).hide();
		$(`#${graphTreeID} > svg`).remove();

		const graph = formform.createGraph('tree', txtbox.value,
			{parentId: graphTreeID, width: 600, height: 600});

		// debugging:
		console.log(graph);
		window.graph = graph;
	}
	else if(type === 'pack') {
		$(`#${graphPackID}`).show();
		$(`#${graphTreeID}`).hide();
		$(`#${graphGsbID}`).hide();
		$(`#${graphPackID} > svg`).remove();

		const graph = formform.createGraph('pack', txtbox.value, 
			{parentId: graphPackID, width: 600, height: 600});

		// debugging:
		console.log(graph);
		window.graph = graph;
	}
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