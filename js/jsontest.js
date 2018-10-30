var myJSON = `[
	{
		"type" : "form",
		"depth" : 0,
		"order" : 1,
		"content" : [
			{
				"type" : "var",
				"depth" : 1,
				"order" : 1,
				"value" : "c"
			}
		]
	}, 
	{
		"type" : "form",
		"depth" : 0,
		"order" : 2,
		"content" : [
			{
				"type" : "form",
				"depth" : 1,
				"order" : 2,
				"content" : [
					{
						"type" : "var",
						"depth" : 2,
						"order" : 1,
						"value" : "b"
					},
					{ 
						"type" : "form",
						"depth" : 2,
						"order" : 2,
						"content" : [
							{
								"type" : "var",
								"depth" : 3,
								"order" : 1,
								"value" : "a"
							}
						]
					}
				]
			}
		]
	}
]`;

var formEx;

$(document).ready(function(){

	formEx = JSON.parse(myJSON);

	
	

/*
	jQuery.get('js/formtest-neu2.json', function(data) {

		console.log(data);
		// formEx = JSON.parse(data);

	    alert(data);
	});
*/

});



function parseFormulaData(formula) {
	/* Parses a formula and converts it into a JSON-object */

	// convert the formula to a JSON string
	var str = formulaToJSON(formula);

	// try parsing the string as a JSON object
	var json = null;
	try {
		var json = $.parseJSON(str);
	} catch(e) {
		console.log(e);
	}

	return json;
}

function formulaToJSON(formula) {
	/* Parses a formula and returns it as a JSON string */

	// reverse the formula to be in the right order for parsing
	var revFormula = esrever.reverse(formula);

	// have strings inside quotes reversed back again
	revFormula = revFormula.replaceAll('\"(.+?)\"', function(match, p1) {
		var revStr = esrever.reverse(p1);
		revStr = '"'+revStr+'"';
		return revStr;
	});

	// fix flipped paranthesis due to reverse
	revFormula = revFormula.replaceAll('(', '#', true);
	revFormula = revFormula.replaceAll(')', '(', true);
	revFormula = revFormula.replaceAll('#', ')', true);
	revFormula = revFormula.replaceAll('{', '#', true); // re-entry paranthesis
	revFormula = revFormula.replaceAll('}', '{', true);
	revFormula = revFormula.replaceAll('#', '}', true);
	// replace ( ) with < > for easier text replacement afterwards
	var jsonStr = revFormula.replaceAll('(', '<', true);
	jsonStr = jsonStr.replaceAll(')', '>', true);
	jsonStr = jsonStr.replaceAll('{', '≤', true); // re-entry paranthesis
	jsonStr = jsonStr.replaceAll('}', '≥', true);

	// remove whitespace outside of quotes
	var quotesIn = false;
	var corrStr = '';
	for (var i = 0; i < jsonStr.length; i++) {
		var c = jsonStr[i];
	   if (!quotesIn) {
	   		if(/\s/.test(jsonStr[i])) {
		    	c = '';
	    	}
	   }
	   if(/\"/.test(jsonStr[i])) quotesIn = !quotesIn;
	   corrStr += c;
	}
	jsonStr = corrStr;

	// replace the variable strings with JSON key-value pairs
	// and have the key prepend a '√'-symbol that is easily matched later on
	var key = '√';

	jsonStr = jsonStr.replaceAll('\"(.+?)\"', function(match, p1) {
		// between every char in the variable string there should be a unique identifier
		// to make sure that the integrity of the string is retained
		var saveP1 = p1.split('').join('§%');
		saveP1 = saveP1+'§%';

		var replStr = '\"'+key+'§%'+'\": ' + '\"'+saveP1+'\"';
		return replStr;
	});
	// replace re-entry specifications with JSON key-value pairs
	var reKey = '♣';
	var openKey = '♠';
	var replStr = '\"'+reKey+'\": ' + '\"❸\"';
	jsonStr = jsonStr.replace(/(?<=\|)1\+r2(?=\≥)/g, replStr);
	replStr = '\"'+reKey+'\": ' + '\"➁\"';
	jsonStr = jsonStr.replace(/(?<=\|)r2(?=\≥)/g, replStr);
	replStr = '\"'+openKey+'\": ' + '\"➤\"';
	jsonStr = jsonStr.replace(/(?<=\|)nepo(?=\|)/g, replStr);
	// console.log("1:  "+jsonStr);
	// replace also the variable chars with JSON key-value pairs,
	// but make sure they don't have the '§%'-identifier appended
	replStr = '\"'+key+'\": ' + '\"$1\"';
	jsonStr = jsonStr.replace(/([^<>≤≥"§%: √♣♠❸➁➤,|])(?!\§\%)/g, replStr);
	// console.log("2:  "+jsonStr);
	// "√": "<""√": "b""√": "<""√": "a""√": ">""√": ">"
	// <"√": "b"<"√": "a">>
	// replace all pipes and commas with unique chars if they aren't part of a string
	// this will make sure that in re-entry forms the arguments they can be separated
	jsonStr = jsonStr.replace(/\|(?!\§\%)/g, '⤴'); // |
	jsonStr = jsonStr.replace(/\,(?!\§\%)/g, '⤵'); // ,
	jsonStr = jsonStr.replace(/\≥(?!\§\%)/g, '⤷≥');
	jsonStr = jsonStr.replace(/\≤(?!\§\%)/g, '≤⤶');
	// at last, get rid of the string identifier
	// jsonStr = jsonStr.replaceAll('\§\%', '');
	jsonStr = jsonStr.replaceAll('§%', '', true);
	// console.log("#:  "+jsonStr);

	// replace the parantheses with JSON-object notation for the forms
	// and have the key prepend a symbol that is easily matched later on
	key = 'ƒ'; // normal form
	replStr = '\"'+key+'\": ' + '$&';
	jsonStr = jsonStr.replaceAll('<', replStr);
	key = '∂'; // re-entry form
	replStr = '\"'+key+'\": ' + '$&';
	jsonStr = jsonStr.replaceAll('≤', replStr);
	// console.log("#:  "+jsonStr);

	// comma after closing paranth.: ' >" ' becomes ' >, " '
	jsonStr = jsonStr.replaceAll('([>≥]{1,})\"', '$1, \"');
	// comma between strings: ' …""… ' becomes ' …", "… '
	jsonStr = jsonStr.replaceAll('(\")(\")', '$1, $2');
	// finally, replace < > with JSONish { }
	jsonStr = jsonStr.replaceAll('<', '{', true);
	jsonStr = jsonStr.replaceAll('>', '}', true);
	jsonStr = jsonStr.replaceAll('≤', '{', true);
	jsonStr = jsonStr.replaceAll('≥', '}', true);
	// and wrap inside array brackets
	jsonStr = '['+jsonStr+']';
	// console.log(jsonStr);

	var jsonCorrStr = '';
	var countDepth = 0;
	var orderList = [];

	for(var i=0; i<jsonStr.length; i++) {
		var c = jsonStr[i];
		// create array structure for objects in first depth
		if(countDepth == 1) {
			if(c == 'ƒ' || c == '∂' || c == '√') {
				jsonCorrStr = jsonCorrStr.addBefore(jsonCorrStr.length-1, '{');
			}
			else if(c == ',' || c == ']') {
				jsonCorrStr = jsonCorrStr.addBefore(jsonCorrStr.length, '}');
			}
		}
		// add depth and order numbers to forms and labels
		if(c == 'ƒ' || c == '∂') {
			orderList[countDepth-1] += 1;
			c = c+countDepth+orderList[countDepth-1];
		}
		else if(c == '√') {
			orderList[countDepth-1] += 1;
			c = c+countDepth+orderList[countDepth-1];
		}
		// keep track of depth count for each bracket
		else if(c == '{' || c == '[') {
			countDepth++;
			if(countDepth > orderList.length) orderList.push(0);
		}
		else if(c == '}' || c == ']') {
			countDepth--;
		}
		// add extended char (now string) to the new json string
		jsonCorrStr += c;
	}
	// console.log(jsonCorrStr);

	// group variables in re-entry forms
	var index = 0;
	jsonCorrStr = jsonCorrStr.replace(/(?<=[⤶⤵])(.+?)(?=[⤵⤴⤷])/g, function(match) {
		var replStr = '"γ'+index+'": {'+match+'},';
		index++;

		return replStr;
	});
	jsonCorrStr = jsonCorrStr.replace(/(?<=⤴)(.+?)(?=[⤴⤷])/g, '$1,');
	// replace remaining commas before paranthesis

	jsonCorrStr = jsonCorrStr.replace(/[⤴⤵⤷⤶]/g, '');
	jsonCorrStr = jsonCorrStr.replace(/\,\}/g,'}');

	return jsonCorrStr;
}