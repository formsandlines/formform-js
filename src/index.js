import { pad, saveSvg } from './lib/helper';
import formform from './lib/main';

window.formform = formform;
// console.log(formform);
// import { FCalc } from './lib/core/fcalc';

// console.log(FCalc);
// import FForm from './lib/core/fform';
// console.log('is: '+FForm.calc('(0)1'));

const txtboxID = 'form_entry';
const svgTreeID = 'svg-tree';
const svgPackID = 'svg-pack';

$(document).ready(function(){

	$('#output-wrapper-vals').hide();
	$('#output-wrapper-json').hide();
	$('#graph-tree, #graph-pack').hide();
	
	$('#explanations').hide();
	$('#toggle_explanations').html('Show explanations');

	$('#toggle_explanations').click(function() {
	  $('#explanations').toggle( 'fast', function() {
	    // Animation complete.
	    if($('#explanations').is( ":visible" )) $('#toggle_explanations').html('Hide explanations');
	    else if($('#explanations').is( ":hidden" )) $('#toggle_explanations').html('Show explanations');
	  });
	});

});

window.btnCalc = function() {
	// const alt_interpr = document.getElementById('check-interpr2').checked;
    const txtbox = document.getElementById(txtboxID);
    const json = formform.parseLinear(txtbox.value)
    const vals = formform.calcAll(json);

	let keys = Object.keys(vals);

	keys.sort();

    let str = '<ul>';
	for (let i = 0; i < keys.length; i++) {
		var k = keys[i];
    	str += '<li>';
		str += k + ': ' + vals[k];
    	str += '</li>';
	}
    str += '</ul>'

    $('#output-wrapper-json').hide();
	$('#output-wrapper-vals').show();
	$('#graph-tree, #graph-pack').hide();
    $('#output-vals').html( str );
}
window.btnViewJSON = function() {
    var txtbox = document.getElementById(txtboxID);
    // var json = formform.parseLinear(txtbox.value)

    $('#output-wrapper-vals').hide();
	$('#output-wrapper-json').show();
	$('#graph-tree, #graph-pack').hide();
    $('#output-json').html( '<code>'+formform.jsonString(txtbox.value)+'</code>' );
}

window.btnRender = function(type) {
	var txtbox = document.getElementById(txtboxID);
	// var json = formform.parseLinear(txtbox.value);

	$('#output-wrapper-vals').hide();
	$('#output-wrapper-json').hide();
	
	if(type === 'tree') {
		$('#graph-tree').show();
		$('#graph-pack').hide();
		formform.tree(txtbox.value);
	}
	else if(type === 'pack') {
		$('#graph-pack').show();
		$('#graph-tree').hide();
		formform.pack(txtbox.value);
	}
}

window.exportRender = function(type) {
	let svg = '';
	let name = '';
	if(type === 'tree') {
		svg = document.getElementById(svgTreeID);
		name = 'formform-export_tree';
	}
	else if(type === 'pack') {
		svg = document.getElementById(svgPackID);
		name = 'formform-export_graph';
	}

	try {
		const date = new Date();
		let timestamp = (''
		+ date.getUTCFullYear()).substr(2) 
		+ (pad((date.getUTCMonth()+1),2)) 
		+ (pad(date.getUTCDate(),2)) + '-'
		+ (pad((date.getHours()),2))
		+ (pad((date.getMinutes()),2))
		+ (pad((date.getSeconds()),2));

		saveSvg(svg, timestamp+'_'+name+'.svg');
	} catch(e) {
		console.log(e);
	}
}