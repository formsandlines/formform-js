// var json, jsonStr;

$(document).ready(function(){

	$('#output-wrapper-vals').hide();
	$('#output-wrapper-json').hide();

	// var show_explanations = false;

	// if (show_explanations) 
	// $('#toggle_explanations').prop('value', 'Hide explanations');
	$('#explanations').hide();
	$('#toggle_explanations').html('Show explanations');



	// jsonStr = sampleForm(8);
	// json = JSON.parse(jsonStr);
	

	// var form_entry = document.getElementById('form_entry').value;

	// var form_entry = retrieve('form_entry');

	$('#toggle_explanations').click(function() {
	  $('#explanations').toggle( 'fast', function() {
	    // Animation complete.
	    if($('#explanations').is( ":visible" )) $('#toggle_explanations').html('Hide explanations');
	    else if($('#explanations').is( ":hidden" )) $('#toggle_explanations').html('Show explanations');
	  });
	});

});

// function btnToggleExplanations(id) {
// 	$('#'+id).toggle();
// 	$('#toggle_explanations').prop('value', 'Hide explanations');
// }

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


function sampleForm(id) {

	switch (id) {
		case 8: // uFORM2 nesting
			return `{
	"type" : "form",
	"unmarked" : true,
	"depth" : 0,
	"space" : [
		{
			"type" : "form",
			"depth" : 1,
			"space" : [
				{
					"type" : "reEntry",
					"reEven" : true,
					"lastOpen" : false,
					"depth" : 2,
					"nested" : [
						{
							"type" : "form",
							"unmarked" : true,
							"space" : [
								{
									"type" : "form",
									"space" : [
										{
											"type" : "var",
											"value" : "c"
										}
									]
								},
								{
									"type" : "var",
									"value" : "a"
								}
							]
						},
						{
							"type" : "form",
							"unmarked" : true,
							"space" : [
								{
									"type" : "var",
									"value" : "b"
								}
							]
						}
					]
				},
				{
					"type" : "var",
					"value" : "c"
				}
			]
		},
		{
			"type" : "form",
			"depth" : 1,
			"space" : [
				{
					"type" : "var",
					"value" : "a"
				}
			]
		}
	]
}`;
		case 7: // iFORM3
			return `{
	"type" : "form",
	"unmarked" : true,
	"depth" : 0,
	"space" : [
		{
			"type" : "reEntry",
			"reEven" : false,
			"lastOpen" : false,
			"depth" : 1,
			"nested" : [
				{
					"type" : "form",
					"unmarked" : true,
					"space" : [
						{
							"type" : "var",
							"value" : "a"
						}
					]
				},
				{
					"type" : "form",
					"unmarked" : true,
					"space" : [
						{
							"type" : "var",
							"value" : "b"
						}
					]
				},
				{
					"type" : "form",
					"unmarked" : true,
					"space" : [
						{
							"type" : "var",
							"value" : "c"
						}
					]
				}
			]
		}
	]
}`;
		case 6: // uFORM2
			return `{
	"type" : "form",
	"unmarked" : true,
	"depth" : 0,
	"space" : [
		{
			"type" : "reEntry",
			"reEven" : true,
			"lastOpen" : false,
			"depth" : 1,
			"nested" : [
				{
					"type" : "form",
					"unmarked" : true,
					"space" : [
						{
							"type" : "var",
							"value" : "a"
						}
					]
				},
				{
					"type" : "form",
					"unmarked" : true,
					"space" : [
						{
							"type" : "var",
							"value" : "b"
						}
					]
				}
			]
		}
	]
}`;
		case 5:
			return `{
	"type" : "form",
	"unmarked" : true,
	"depth" : 0,
	"space" : [
		{
			"type" : "form",
			"depth" : 1,
			"space" : [
				{
					"type" : "form",
					"depth" : 2,
					"space" : [
						{
							"type" : "var",
							"depth" : 3,
							"value" : "a"
						}
					]
				},
				{
					"type" : "var",
					"depth" : 2,
					"value" : "b"
				}
			]
		},
		{
			"type" : "form",
			"depth" : 1,
			"space" : [
				{
					"type" : "form",
					"depth" : 2,
					"space" : [
						{
							"type" : "var",
							"depth" : 3,
							"value" : "b"
						}
					]
				},
				{
					"type" : "var",
					"depth" : 2,
					"value" : "a"
				}
			]
		}
	]
}`;
		case 4:
			return `{
	"type" : "form",
	"unmarked" : true,
	"depth" : 0,
	"space" : [
		{
			"type" : "form",
			"depth" : 1,
			"space" : [
				{
					"type" : "form",
					"depth" : 2,
					"space" : [
						{
							"type" : "var",
							"depth" : 3,
							"value" : "a"
						}
					]
				},
				{
					"type" : "var",
					"depth" : 2,
					"value" : "b"
				}
			]
		}
	]
}`;
		case 3:
			return `{
	"type" : "form",
	"unmarked" : true,
	"depth" : 0,
	"space" : [
		{
			"type" : "form",
			"depth" : 1,
			"space" : [
				{
					"type" : "form",
					"depth" : 2,
					"space" : [
						{
							"type" : "var",
							"depth" : 3,
							"value" : "a"
						}
					]
				},
				{
					"type" : "var",
					"depth" : 2,
					"value" : "b"
				}
			]
		}
	]
}`;
		case 2:
			return `{
				"type" : "form",
				"unmarked" : true,
				"depth" : 0,
				"space" :	[
					{
						"type" : "form",
						"depth" : 1,
						"space" : [
							{
								"type" : "const",
								"depth" : 2,
								"value" : 0
							}
						]
					}, 
					{
						"type" : "form",
						"depth" : 1,
						"space" : [
							{
								"type" : "form",
								"depth" : 2,
								"space" : [
									{
										"type" : "const",
										"depth" : 3,
										"value" : 1
									},
									{ 
										"type" : "form",
										"depth" : 3,
										"space" : [
											{
												"type" : "const",
												"depth" : 4,
												"value" : 1
											}
										]
									}
								]
							}
						]
					}
				]
			}`;
		case 1:
			return `[
				{
					"type" : "form",
					"space" : [
						{
							"type" : "var",
							"value" : "c"
						}
					]
				}, 
				{
					"type" : "form",
					"space" : [
						{
							"type" : "form",
							"space" : [
								{
									"type" : "var",
									"value" : "b"
								},
								{ 
									"type" : "form",
									"space" : [
										{
											"type" : "var",
											"value" : "a"
										}
									]
								}
							]
						}
					]
				}
			]`;
		case 0:
			return `[
				{
					"type" : "form",
					"space" : [
						{
							"type" : "var",
							"value" : "c"
						},
						{
							"type" : "reentry",
							"reven" : true,
							"open" : true,
							"nested" : [
								{
									"type" : "group",
									"content" : [
										{
											"type" : "form",
											"space" : [
												{
													"type" : "var",
													"value" : "z"
												}
											]
										},
										{
											"type" : "var",
											"value" : "y"
										}
									]
								},
								{
									"type" : "group",
									"content" : [
										{
											"type" : "var",
											"value" : "x"
										}
									]
								}
							]
						}
					]
				}, 
				{
					"type" : "form",
					"space" : [
						{
							"type" : "form",
							"space" : [
								{
									"type" : "var",
									"value" : "b"
								},
								{ 
									"type" : "form",
									"space" : [
										{
											"type" : "var",
											"value" : "a"
										}
									]
								}
							]
						}
					]
				}
			]`;
	}

}