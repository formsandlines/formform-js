
$(document).ready(function(){

	$('#output-wrapper-vals').hide();
	$('#output-wrapper-json').hide();

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

function btnCalc(id) {
    var txtbox = document.getElementById(id);

    var json = FForm.parseLinear(txtbox.value)
    var vals = FForm.calcAll(json);

	var keys = Object.keys(vals);

	keys.sort();

    var str = '<ul>';
	for (var i = 0; i < keys.length; i++) {
		var k = keys[i];
    	str += '<li>';
		str += k + ': ' + vals[k];
    	str += '</li>';
	}
    str += '</ul>'

    $('#output-wrapper-json').hide();
    $('#output-wrapper-vals').show();
    $('#output-vals').html( str );
}
function btnViewJSON(id) {
    var txtbox = document.getElementById(id);

    var json = FForm.parseLinear(txtbox.value)

    $('#output-wrapper-vals').hide();
    $('#output-wrapper-json').show();
    $('#output-json').html( '<code>'+JSON.stringify(json, undefined, 2)+'</code>' );
}