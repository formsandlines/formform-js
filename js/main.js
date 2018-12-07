txtboxID = 'form_entry';
svgTreeID = 'svg-tree';
svgPackID = 'svg-pack';

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

function btnCalc() {
	// const alt_interpr = document.getElementById('check-interpr2').checked;
    const txtbox = document.getElementById(txtboxID);
    const json = FForm.parseLinear(txtbox.value)
    const vals = FForm.calcAll(json);

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
function btnViewJSON() {
    var txtbox = document.getElementById(txtboxID);
    // var json = FForm.parseLinear(txtbox.value)

    $('#output-wrapper-vals').hide();
	$('#output-wrapper-json').show();
	$('#graph-tree, #graph-pack').hide();
    $('#output-json').html( '<code>'+FGraph.jsonString(txtbox.value)+'</code>' );
}

function btnRender(type) {
	var txtbox = document.getElementById(txtboxID);
	// var json = FForm.parseLinear(txtbox.value);

	$('#output-wrapper-vals').hide();
	$('#output-wrapper-json').hide();
	
	if(type === 'tree') {
		$('#graph-tree').show();
		$('#graph-pack').hide();
		FGraph.tree(txtbox.value);
	}
	else if(type === 'pack') {
		$('#graph-pack').show();
		$('#graph-tree').hide();
		FGraph.pack(txtbox.value);
	}
}

function exportRender(type) {
	let svg = '';
	let name = '';
	if(type === 'tree') {
		svg = document.getElementById(svgTreeID);
		name = 'FForm-export_tree';
	}
	else if(type === 'pack') {
		svg = document.getElementById(svgPackID);
		name = 'FForm-export_graph';
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