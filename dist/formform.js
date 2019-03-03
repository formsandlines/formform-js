(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("d3"));
	else if(typeof define === 'function' && define.amd)
		define(["d3"], factory);
	else if(typeof exports === 'object')
		exports["formform"] = factory(require("d3"));
	else
		root["formform"] = factory(root["d3"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_d3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/lib/modules/d3-styles.scss":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/lib/modules/d3-styles.scss ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/common/d3-helper.js":
/*!*********************************!*\
  !*** ./src/common/d3-helper.js ***!
  \*********************************/
/*! exports provided: default, fitChart, getRealDepth, textSubscript, textSize, opacity, reduceRemainder, calcCircleDash, circleDashArray, circleLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chartFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fitChart", function() { return fitChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRealDepth", function() { return getRealDepth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textSubscript", function() { return textSubscript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textSize", function() { return textSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opacity", function() { return opacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceRemainder", function() { return reduceRemainder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcCircleDash", function() { return calcCircleDash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleDashArray", function() { return circleDashArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleLabel", function() { return circleLabel; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);


const protoChart = {
    width: window.innerWidth,
    height: window.innerHeight,
    margin: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
    },
  };
  
function chartFactory(opts, proto = protoChart) {

  const chart = Object.assign({}, proto, opts);
  if(opts.parentId) chart.parent = d3__WEBPACK_IMPORTED_MODULE_0__["select"](`#${opts.parentId}`);
  else d3__WEBPACK_IMPORTED_MODULE_0__["select"]('body');

  chart.svg = chart.parent
    .append('svg').lower()
    .attr('id', chart.id || 'chart')
    .attr('width', chart.width - chart.margin.right)
    .attr('height', chart.height - chart.margin.bottom);

  if (opts.styleClass) chart.svg.attr('class', opts.styleClass);

  chart.container = chart.svg.append('g')
    .attr('id', 'container')
    .attr('transform', `translate(${chart.margin.left}, ${chart.margin.top})`);

  return chart;
}

function fitChart(chart, padding) {
  // calculate real dimensions of a chart (assumes chart is a g-element wrapped inside an svg)
  d3__WEBPACK_IMPORTED_MODULE_0__["select"](chart.node().parentElement)
      .attr('width', chart.node().getBBox().width + padding.left + padding.right)
      .attr('height', chart.node().getBBox().height + padding.top + padding.bottom);
}

function getRealDepth(d) {
  // calculates the real depth of a FORM by subtracting unmarked and open reEntry FORMs
  const ghosts = d.ancestors()
      .filter(e => (e.data.type === 'form' && e.data.unmarked || 
                e.data.type === 'reEntry' && e.data.lastOpen)).length;
  return d.depth - ghosts;
}

function textSubscript(text) {
  // selection module to split text into parts for subscripts (e.g. "x_n")
  return (selection) => {
    selection.each(function(d) {

        const split = text(d).split('_');
        if (split.length === 2) {

          d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).append('tspan')
            .text(d => split[0]);

          d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).append('tspan')
            .text(d => split[1])
            .attr('dx', 1)
            .attr('dy', 6)
            .attr('font-size', '.8em');
        }
        else {
          d3__WEBPACK_IMPORTED_MODULE_0__["select"](this)
            .text(text(d));
        }

    })
  };
}

function textSize(text, fontSize='inherit', fontFamily='inherit', fontStyle='normal') {
  /* Source: https://gist.github.com/huytd/327e453c95ca3edadb32d0c867e2561b 
  Credits to: Huy Tr. */
  if (!d3__WEBPACK_IMPORTED_MODULE_0__) return;
  var container = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('body').append('svg');
  container.append('text').style('font',`${fontStyle} ${fontSize} ${fontFamily}`)
      .attr('x','-9999').attr('y','-9999').text(text);
  var size = container.node().getBBox();
  container.remove();
  return { width: size.width, height: size.height };
}

function opacity(color, alpha) {
  const colorCopy = d3__WEBPACK_IMPORTED_MODULE_0__["color"](color);
colorCopy.opacity = alpha;
return colorCopy;
}

function reduceRemainder(num, _den) {
  let count = 0;
  let sign = 1;
  let den = Math.round(_den);
  let candidate = den;
  while (num % den > 0.3) {
      candidate += sign * 0.001;
      if (num%candidate < num%den) den = candidate;

      if(count >= 5000) {
          candidate = Math.round(_den);
          sign = -1;
      }
      if(count >= 10000) break;
      count++;
  }
  // console.log(num%den);
  return den;
}
function calcCircleDash(r, unit, fraction) {
  const circ = Math.PI*2 * r;
  return reduceRemainder(circ, unit) * fraction;
}
function circleDashArray(r, unit, fractions) {
  let str = '';
  for (let i in fractions) {
      str = str.concat(`${ calcCircleDash(r, unit, fractions[i]) }px `);
  }
  return str;
}

// export function dashArray(r, unit, fractions) {
//   let str = '';
//   for (let i in fractions) {
//       str = str.concat(`${ calcCircleDash(r, unit, fractions[i]) }px `);
//   }
//   return str;
// }

function circleLabel(text, fontSize='inherit', fontFamily='inherit') {
  // selection module to split text into parts for subscripts (e.g. "x_n")
  return (selection) => {

      selection.each(function(d) {

          const textSz = textSize(text(d), fontSize, fontFamily);
          const margin = 50;

          d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).append('text')
              .style('font', `normal ${fontSize} ${fontFamily}`)
              .style('text-anchor', 'middle')
              .raise()
              .text(d => text(d));

          d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).filter(d => d.r*2 >= textSz.width + margin).select('text')
              .classed('label inside', true)
              .attr('y', d => d.r - textSz.height*0.5 )
              .attr('dominant-baseline','baseline');

          d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).filter(d => d.r*2 < textSz.width + margin).select('text')
              .classed('label outside', true)
              .attr('y', d => d.r + 4)
              .attr('dominant-baseline','hanging');

      });
  };
}

/***/ }),

/***/ "./src/common/helper.js":
/*!******************************!*\
  !*** ./src/common/helper.js ***!
  \******************************/
/*! exports provided: showAll, show, hideAll, hide, toggleAll, toggle, isVisible, pad, saveSvg, flatten, include, traverse, escapeRegExp, map, arrayMoveItem, getTimestamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAll", function() { return showAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideAll", function() { return hideAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleAll", function() { return toggleAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle", function() { return toggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad", function() { return pad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSvg", function() { return saveSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "include", function() { return include; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverse", function() { return traverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeRegExp", function() { return escapeRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayMoveItem", function() { return arrayMoveItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimestamp", function() { return getTimestamp; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);


// ------------------------
// jQuery replacements:

function showAll(elems) {
    if(typeof(elems) === 'string') elems = document.querySelectorAll(elems);
    elems.forEach( (e,i) => {
        show(e);
    });
}
function show(elem) {
    if(typeof(elem) === 'string') elem = document.querySelector(elem);
    elem.classList.remove('d-none');
    // elem.classList.add('is-visible');
};

function hideAll(elems) {
    if(typeof(elems) === 'string') elems = document.querySelectorAll(elems);
    elems.forEach( (e,i) => {
        hide(e);
    });
}
function hide(elem) {
    if(typeof(elem) === 'string') elem = document.querySelector(elem);
    elem.classList.add('d-none');
	// elem.classList.remove('is-visible');
};

function toggleAll(elems) {
    if(typeof(elems) === 'string') elems = document.querySelectorAll(elems);
    elems.forEach( (e,i) => {
        toggle(e);
    });
}
function toggle(elem) {
    if(typeof(elem) === 'string') elem = document.querySelector(elem);
    elem.classList.toggle('d-none');
	// elem.classList.toggle('is-visible');
};

function isVisible(elem) {
    if(typeof(elem) === 'string') elem = document.querySelector(elem);
    return ( !elem.classList.contains('d-none') );
}
// ------------------------

function pad(num, size) {
    /* Source: https://stackoverflow.com/a/2998822
    Credits to: InfinitiesLoop */
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function saveSvg(svgEl, name) {
    /* Source: https://stackoverflow.com/a/46403589
    Credits to: defghi1977, DaveTheScientist, senz */
    svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    var svgData = svgEl.outerHTML;
    var preface = '<?xml version="1.0" standalone="no"?>\r\n';
    var svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

function flatten(arr) {
    /* Source: https://stackoverflow.com/a/15030117 
    Credits to: Noah Freitas */
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

function include(arr,obj) {
    /*  Source: https://stackoverflow.com/a/143863
    Credits to: Vinko Vrsalovic */
    return (arr.indexOf(obj) != -1);
}

function traverse(o,func) {
    /*  Source: https://stackoverflow.com/questions/722668/traverse-all-the-nodes-of-a-json-object-tree-with-javascript 
    Credits to: TheHippo */
    for (var i in o) {
        func.apply(null,[i,o[i]]);  // null or this?
        if (o[i] !== null && typeof(o[i])=="object") {
            //going one step down in the object tree!!
            traverse(o[i],func);
        }
    }
}
String.prototype.replaceAll = function(find, replace, escapeMeta) {
    /*  Modified from: https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript 
    Credits to: Sean Bright */
    if(escapeMeta) find = escapeRegExp(find);
    return this.replace(new RegExp(find, 'g'), replace);
};
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
String.prototype.addBefore=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index);
}

function map(value, start1, stop1, start2, stop2) {
    // Processing-like map function
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}

function arrayMoveItem(arr, from, to) {
  arr.splice(to, 0, arr.splice(from, 1)[0]);
}

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

function getTimestamp() {
    const date = new Date();

    return (''
    + date.getUTCFullYear()).substr(2) 
    + (pad((date.getUTCMonth()+1),2)) 
    + (pad(date.getUTCDate(),2)) + '-'
    + (pad((date.getHours()),2))
    + (pad((date.getMinutes()),2))
    + (pad((date.getSeconds()),2));
}

/***/ }),

/***/ "./src/lib/core/fcalc.js":
/*!*******************************!*\
  !*** ./src/lib/core/fcalc.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FCalc; });
class FCalc {
    /*
    =======================================================
       'calc' module for formform (c) 2018 Peter Hofmann
    =======================================================
    */
   
    constructor() {
    };

    static rel_logic(fx, fy) { // verified
        /* FORM arithmetic for commutative relation: x y */
        if ( fx > 3 || fx < 0 || fy > 3 || fy < 0 ) return -98;
        else if ( fx === 0 || fy === 1 ) { 
            return fy; // C3 /Theorem 2
        } 
        else if ( fy === 0 || fx === 1 ) { 
            return fx; // C3 /Theorem 2
        }
        else if ( fx === fy ) { 
            return fx; // C5 /Theorem 5
        }
        else if ( (fx === 2 && fy === 3) || (fx === 3 && fy === 2) ) { 
            return 1; // C2 /Theorem 13 + C3 /Theorem 2
        }
        return -99; // error code
    };
    static rel(...fVals) { // verified
        /* Shortcut for relation with n variables: x_1 ... x_n */
        // var fVals = Array.prototype.slice.call(arguments);
        if (fVals.length > 1) {
            var val = 0;
            for (var i in fVals) {
                val = this.rel_logic( val,fVals[i] );
            }
            return val;
        }
        return -97; // error code
    };

    static inv_logic(fx) { // verified
        /* FORM arithmetic for inversion/negation: (x) */
        switch (fx) {
        case 0:
            return 1;
        case 1:
            return 0;
        case 2:
            return 3;
        case 3:
            return 2;
        }
        return -99; // error code
    };
    static inv(fx, n) { // verified
        /* Shortcut for n inversions/negations: (x) */
        if (n > 0) {
            var val = fx;
            for (var i=0; i<n; i++) {
                val = this.inv_logic(val);
            }
            return val;
        }
        else return this.inv_logic(fx);
        return -97; // error code
    };


    // ---------------------------
    //  RE-ENTRY FORM CALCULATION
    // ---------------------------

    static uForm2(fA, fB, altInterpr=false) { // calculation verified (both interpr.)
        return this.reEntry(false, false, altInterpr, fA, fB);
    };
    static iForm2(fA, fB, altInterpr=false) { // calculation verified (both interpr.)
        return this.reEntry(false, true, altInterpr, fA, fB);
    };
    static uForm3(lastOpen, fA, fB, fC, altInterpr=false) { // calculation verified closed & open (both interpr.)
        return this.reEntry(true, lastOpen, altInterpr, fA, fB, fC);
    };
    static iForm3(lastOpen, fA, fB, fC, altInterpr=false) { // calculation verified closed & open (both interpr.)
        return this.reEntry(false, lastOpen, altInterpr, fA, fB, fC);
    };
    static uForm4(fA, fB, fC, fD, altInterpr=false) {
        return this.reEntry(false, false, altInterpr, fA, fB, fC, fD);
    };
    static iForm4(fA, fB, fC, fD, altInterpr=false) {
        return this.reEntry(false, true, altInterpr, fA, fB, fC, fD);
    };
    static uForm5(lastOpen, fA, fB, fC, fD, fE, altInterpr=false) {
        return this.reEntry(true, lastOpen, altInterpr, fA, fB, fC, fD, fE);
    };
    static iForm5(lastOpen, fA, fB, fC, fD, fE, altInterpr=false) {
        return this.reEntry(false, lastOpen, altInterpr, fA, fB, fC, fD, fE);
    };

    // static reEntry(... vars) {
    //     return this.reEntry(false, false, vars);
    // }
    // static reEntry(reEven, ... vars) {
    //     return this.reEntry(reEven, false, vars);
    // }

    static reEntry(reEven, lastOpen, altInterpr, ...fVals) {
        /* FORM arithmetic for different self-equivalent re-entry FORMs
         [Arguments] reEven: even re-entry-number? | lastOpen: last variable not crossed? | fVals: variables (0/1/2/3)

         Note: calculation manually verified for… 
         - (uFORM a1, res2) ƒ=((ƒx)y)
         - (iFORM a2, res2) ƒ(ƒ)=(a1x)y
         - (iFORM b1, res3) [2|r|+1] ƒ(ƒ)=(((ƒx)y)z) ƒ=((((((ƒx)y)z)x)y)z)
         - (iFORM b2, res3) [2|r|+1] ƒ(ƒ)=((b1x)y)z
         - (uFORM c1, res3) [2|r|] ƒ=((((((ƒx)y)z)x)y)z)
         - (uFORM c2, res3) [2|r|] ƒ(ƒ)=((c1x)y)z
         Should work with resolutions of 4, 5, … but needs verification.

         My basic observations about self-equivalent re-entry FORMs:
         - Every re-entry FORM needs to have an even number of crosses to be self-equivalent (uFORM): ƒ = ((ƒ1)2) .
           So with uneven resolutions, we always need to have an even re-entry number: ƒ = ((((((ƒ1)2)3)1)2)3) .
         - To be able to also have uneven re-entry numbers, either the resolution needs to be even
           or we have to embed the re-entry FORM into a normal FORM that is one re-entry of that FORM:
           ƒ(ƒ) = (((ƒ1)2)3) <-> ((( ƒ = ((((((ƒ1)2)3)1)2)3) 1)2)3) .
           These compositional re-entry FORMs are iFORMs, since they resolve to: ( ƒ = ((ƒ)) ) .
         - If the outmost cross of the FORM should be left out (open FORMs), this can only be done if we embed
           a corresponding closed FORM of itself that either is or embeds its re-entry FORM (cases described above).
           I believe the outmost (open) FORM is not being counted as a re-entry at all, since it's missing a cross.

         This algorithm is based on the following rules/patterns/observations derived from "uFORM iFORM":
         [1] If 1 is somewhere in the FORM, it will dominate all values in spaces deeper than m,
             so the re-entry is obsolete and we can start calculate from this space. 
         [2] If there are 3/2 or 2/3 pairs in the FORM, the first term can be turned into 1, since
             through C2 the second term can always be generated into its space, where 23 = 1.
             Then we can proceed as in (1).
         [3] If all variables are 0, we will have either a uFORM or iFORM, hence the value of the
             FORM will be either 2 or 3, depending on the following cases:
             - 2: closed,      resolution even, re-entry-number even/odd (a1)
             - 2: closed/open, resolution odd,  re-entry-number even     (c1, c2)
             - 3: open,        resolution even, re-entry-number even/odd (a2)
             - 3: closed/open, resolution odd,  re-entry-number odd      (b1, b2)
         Since [1][2][3] eliminate all other cases, all variables are now either 2 or 3 (and maybe 0s),
         so using C2 as described above, only the last occasion of these variables need to be considered:
         [4] If we use uFORM iFORM interpretation 2 (p.167) recursive identity ( mn <-> ((ƒ))=ƒ ), C2 and C1
             ƒ can be separated from 2/3 if there is an even number of crosses (or none) after the variable.
             Then, depending on the FORM, we have either:
             iFORM: (ƒ=((ƒ))) 2/3 <-> (2) 2/3  or
             uFORM:  ƒ=((ƒ)) 2/3  <->  2 2/3
         [5] If [4] does not apply or we decide for uFORM iFORM interpretation 1 (p.167): recursion instruction 
             ( mn -> ƒ=((ƒ)) ), we will have either variables of 2 or 3 which we cannot relate to ƒ, since
             they need not be the same undetermined value. Using case distinction, we interpret the
             last occasion of 2 or 3 as 0 and as 1, calculate everything with ƒ=2 and relate the results 
             using contravalence: ((x)y)((y)x) which yields the final result.
        */
        // check if arguments are actually defined
        if (reEven === undefined) {
            reEven = false;
        }
        if (lastOpen === undefined) {
            lastOpen = false;
        }

        var resEven = (fVals.length%2 == 0); // even resolution?
        var zeros = 0; // zero counter
        var firstUndef = -1; // catches first mn/(mn)

        // [3] determine if uFORM or iFORM
        var uFORM = false;
        var iFORM = false;
        if (resEven) {
            if (lastOpen) iFORM = true;
            else uFORM = true;
        }
        else {
            if (reEven) uFORM = true;
            else iFORM = true;
        }
      
        // check if there is 1/m somewhere in x_1 … x_n
        var calcfrom = -1;
        for(var i=0; i<fVals.length; i++) {
            var fx = fVals[i]; 

            if (fx == 1) {
                calcfrom = i; // [1] if m is somewhere, set calculation start from there
                break;
            }
            else if (fx == 0) zeros++; // [3] keep track of how many zeros there are
            else if (fx == 2 || fx == 3) { // [2]
                if(firstUndef == -1) firstUndef = i; // if there is a first 2/u or 3/i, remember
                else if(fx != fVals[firstUndef]) {
                    calcfrom = firstUndef; // if 3/2 or 2/3 pairs, set calculation form first undef. value
                    break;
                }
            }
        }
      
        if (zeros == fVals.length) {
            // [3] in case all variables are n, just return the undefined/imaginary value of the FORM
            if (iFORM) return 3;
            else return 2;
        }
        if (calcfrom >= 0) {
            // [1|2] if there is a 1/m somewhere in the form, we can easily calculate the rest from this point
            var val = 1;
            for(var i=calcfrom; i<fVals.length; i++) {      
                if (lastOpen && i == fVals.length-1) {
                    val = this.rel(val,fVals[i]); // if no cross on last var, don't invert
                }
                else val = this.inv( this.rel(val,fVals[i]) );
            }
            return val;
        }
      
        // what remains, will only be either
        // - (1) all variables are n/0 or mn/2   or
        // - (2) all variables are n/0 or (mn)/3
        // So we calculate from the last occasion of 2 or 3, because with C2 (degenerate) all else can be ignored

        // for even closed re-entry-FORMs with uneven resolution (uFORM c1), we need to do the calculation twice
        var repeat = (reEven && !resEven && !lastOpen)? 2:1;
      
        for(var i=(fVals.length*repeat)-1; i>=0; i--) {
            var index = i%fVals.length; // repeated variable index

            if (fVals[index] == 2 || fVals[index] == 3) {
                var iRev = (fVals.length*repeat)-1 - i; // reverse index to easier check for interpretation 2 (see next)

                if (altInterpr && ((lastOpen && iRev%2==0) || (!lastOpen && iRev%2==1))) {
                    // uFORM iFORM interpretation 2: recursive identity ( ƒ=((ƒ)) <-> mn )
                    // ƒ=((ƒ)) can be separated if there is an even number of crosses (or none) after the variable; this is the case if either:
                    // - (1) the FORM is open and the backwards variable index is even      or
                    // - (2) the FORM is closed and the backwards variable index is odd

                    // to determine if the number of crosses between ƒ and our var is even, we distinguish two cases:
                    if (iFORM) return this.rel(3,fVals[index]); // iFORM: (ƒ=((ƒ)))x <-> (mn) x
                    else return this.rel(2,fVals[index]);       // uFORM:  ƒ=((ƒ))x  <->  mn x
                }
                else {
                    // [5] if everything else fails, use case distinction: uFORM iFORM (p.94); also according to:
                    // uFORM iFORM (p.167) interpretation 1: recursion instruction ( ƒ=((ƒ)) and mn need to be differentiated)

                    var case0 = 2; // re-entry ƒ=mn, because other mn=0
                    if (lastOpen && !resEven && !reEven) case0 = this.inv(case0); // cross for integrated FORMs with uneven res. inside open FORMs (iFORM b2)
                    for(var j=0; j<(fVals.length*repeat); j++) {
                        var fx = 0; // all other values will be (degenerated to) zero
                        if (j == i) {
                            if(fVals[index] == 2) fx = 0; // last occasion of mn/2 will be interpreted as 0
                            else fx = this.inv(0); // last occasion of (mn)/3 will be interpreted as (0)
                        }
                        if (lastOpen && j == fVals.length-1) case0 = this.rel(case0,fx); // if no cross on last var, don't invert
                        else case0 = this.inv( this.rel(case0,fx) );
                    }
                    var case1 = 2; // re-entry ƒ=mn, because other mn=1
                    if (lastOpen && !resEven && !reEven) case1 = this.inv(case1); // cross for integrated FORMs with uneven res. inside open FORMs (iFORM b2)
                    for(var j=0; j<(fVals.length*repeat); j++) {
                        var fx = 0; // all other values will be (degenerated to) zero
                        if (j == i) {
                            if(fVals[index] == 2) fx = 1; // last occasion of mn/2 will be interpreted as 1
                            else fx = this.inv(1); // last occasion of (mn)/3 will be interpreted as (1)
                        }
                        if (lastOpen && j == fVals.length-1) case1 = this.rel(case1,fx); // if no cross on last var, don't invert
                        else case1 = this.inv( this.rel(case1,fx) );
                    }

                    return this.cont( case0,case1 ); // contravalence of both cases
                }

            }
        }
      return -99; // error code
    }; // end reEntry()


    // ---------------------------
    //  COMPLEX FORM CALCULATIONS
    // ---------------------------

    // - 2 VARIABLES

    static implL(fx, fy) { // verified
        /* FORM arithmetic for "implication": (x)y */
        return this.rel( this.inv(fx),fy );
    };
    static implR(fx, fy) {
        /* FORM arithmetic for "implication": x(y) */
        return this.rel( fx,this.inv(fy) );
    };

    static pre(fx, fy) { // verified
        /* FORM arithmetic for "presection"/"decision": ((x)y) */
        return this.inv( this.implL(fx,fy) );
    };
    static post(fx, fy) { // verified
        /* FORM arithmetic for "postsection"/"decision": (x(y)) */
        return this.inv( this.implR(fx,fy) );
    };

    static cont(fx, fy) { // verified
        /* FORM arithmetic for "contravalence"/"either-or": ((x)y) (x(y)) */
        return this.rel( this.pre(fx,fy), this.post(fx,fy) );
    };
    static equiv(fx, fy) {
        /* FORM arithmetic for "equivalence"/?: ( ((x)y) (x(y)) ) */
        return this.inv( this.cont(fx,fy) );
    };

}

/***/ }),

/***/ "./src/lib/core/fform.js":
/*!*******************************!*\
  !*** ./src/lib/core/fform.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FForm; });
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/helper */ "./src/common/helper.js");
/* harmony import */ var _fcalc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fcalc */ "./src/lib/core/fcalc.js");



class FForm extends _fcalc__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /*
    =======================================================
       'form' module for formform (c) 2018 Peter Hofmann
    =======================================================
    */

    constructor() {
    };

    // ----------------------------------------------------
    // Form Calculation
    // ----------------------------------------------------

    static calc(form) {
        /* recursive form calculation */
        var fx = 0;
        // make sure to have a json form, if not: try to convert
        if(typeof(form) === 'string') form = this.parseLinear(form);

        for (var i in form.space) {
            if (form.space[i].type === 'form') {
                fx = this.rel( fx,this.calc(form.space[i]) );
            }
            else if (form.space[i].type === 'const') {
                fx = this.rel( fx,form.space[i].value );
            }
            else if (form.space[i].type === 'var') {
                if(!isNaN(form.space[i].value)) fx = this.rel( fx,form.space[i].value );
            }
            else if (form.space[i].type === 'unclear') {
                fx = this.rel( fx,form.space[i].value );
            }
            else if (form.space[i].type === 'reEntry') {
                var nestedVals = [];
                var fReEntry = form.space[i];

                for (var j in fReEntry.nested) {
                    nestedVals.push( this.calc(fReEntry.nested[j]) );
                }
                
                // notation reading: {deepest, ..., shallowest}  use nestedVals.reverse() to reverse variables
                fx = this.rel( fx,this.reEntry(fReEntry.reEven, fReEntry.lastOpen, fReEntry.altInterpretation, ...nestedVals) );
            }
        }
        if(form.unmarked) return fx;
        else return this.inv( fx );
    };

    static calcAll(form) {
        /* Interpret and calculate all possible values for the form */

        // make sure to have a json form, if not: try to convert
        if(typeof(form) === 'string') form = this.parseLinear(form);

        var vars = this.getVariables(form);
        var vals = {};

        var interKey = ''+vars.join()+';';

        switch (vars.length) {
            case 0:
                vals['Result'] = this.calc(form);
                break;
            case 1:
                var interpr = [ {var: vars[0], value: null} ];
                for (var a=0; a<4; a++) {
                    interpr[0].value = a;
                    vals[interKey+a] = this.interCalc(form, interpr);//[a]);
                }
                break;
            case 2:
                var interpr = [ {var: vars[0], value: null}, 
                                {var: vars[1], value: null} ];
                for (var a=0; a<4; a++) {
                    interpr[0].value = a;
                    for (var b=0; b<4; b++) {
                        interpr[1].value = b;
                        vals[interKey+a+''+b] = this.interCalc(form, interpr);//[a,b]);
                    }
                }
                break;
            case 3:
                var interpr = [ {var: vars[0], value: null}, 
                                {var: vars[1], value: null},
                                {var: vars[2], value: null} ];
                for (var a=0; a<4; a++) {
                    interpr[0].value = a;
                    for (var b=0; b<4; b++) {
                        interpr[1].value = b;
                        for (var c=0; c<4; c++) {
                            interpr[2].value = c;
                            vals[interKey+a+''+b+''+c] = this.interCalc(form, interpr);//[a,b,c]);
                        }
                    }
                }
                break;
            case 4:
                var interpr = [ {var: vars[0], value: null}, 
                                {var: vars[1], value: null},
                                {var: vars[2], value: null},
                                {var: vars[3], value: null} ];
                for (var a=0; a<4; a++) {
                    interpr[0].value = a;
                    for (var b=0; b<4; b++) {
                        interpr[1].value = b;
                        for (var c=0; c<4; c++) {
                            interpr[2].value = c;
                            for (var d=0; d<4; d++) {
                                interpr[3].value = d;
                                vals[interKey+a+''+b+''+c+''+d] = this.interCalc(form, interpr);//[a,b,c,d]);
                            }
                        }
                    }
                }
                break;
            case 5:
                var interpr = [ {var: vars[0], value: null}, 
                                {var: vars[1], value: null},
                                {var: vars[2], value: null},
                                {var: vars[3], value: null},
                                {var: vars[4], value: null} ];
                for (var a=0; a<4; a++) {
                    interpr[0].value = a;
                    for (var b=0; b<4; b++) {
                        interpr[1].value = b;
                        for (var c=0; c<4; c++) {
                            interpr[2].value = c;
                            for (var d=0; d<4; d++) {
                                interpr[3].value = d;
                                for (var e=0; e<4; e++) {
                                    interpr[4].value = e;
                                    vals[interKey+a+''+b+''+c+''+d+''+e] = this.interCalc(form, interpr);//[a,b,c,d,e]);
                                }
                            }
                        }
                    }
                }
                break;
            case 6:
                var interpr = [ {var: vars[0], value: null}, 
                                {var: vars[1], value: null},
                                {var: vars[2], value: null},
                                {var: vars[3], value: null},
                                {var: vars[4], value: null},
                                {var: vars[5], value: null} ];
                for (var a=0; a<4; a++) {
                    interpr[0].value = a;
                    for (var b=0; b<4; b++) {
                        interpr[1].value = b;
                        for (var c=0; c<4; c++) {
                            interpr[2].value = c;
                            for (var d=0; d<4; d++) {
                                interpr[3].value = d;
                                for (var e=0; e<4; e++) {
                                    interpr[4].value = e;
                                    for (var f=0; f<4; f++) {
                                        interpr[5].value = f;
                                        vals[interKey+a+''+b+''+c+''+d+''+e+''+f] = this.interCalc(form, interpr);//[a,b,c,d,e,f]);
                                    }
                                }
                            }
                        }
                    }
                }
                break;
        }
        return vals;
    };

    static interCalc(form, interpr) {
        return this.calc( this.interpret(form, interpr) );
    };

    static interpret(form, interpr) {
        // make sure to have a json form, if not: try to convert
        if(typeof(form) === 'string') form = this.parseLinear(form);

        var interprForm = JSON.parse(JSON.stringify(form)); // clone form

        this.traverseForm(interprForm, function(fBranch,depth,space) {

            for (var i in space) {
                if (space[i].type === 'var') {
                    for (var v in interpr) {
                        if (space[i].symbol === interpr[v].var) {

                            space[i].value = interpr[v].value;
                            break;
                        }
                    }
                    // if(!isNaN(space[i].value)) {
                    //     space[i].type = 'const';
                    // }
                }
            }
        });

        return interprForm;
    };

    // ----------------------------------------------------
    // Extensions of FCalc
    // ----------------------------------------------------

    static rel_logic(fx, fy) {
        if(typeof(fx) === Array || typeof(fy) === Array) {
            return null;
        }
        return super.rel_logic(fx, fy);
    };
    static rel(...fVals) {
        return super.rel(...fVals);
    };

    static inv_logic(fx) {
        if(typeof(fx) === Array) {
            return null;
        }
        return super.inv_logic(fx);
    };
    static inv(fx, n) {
        return super.inv(fx, n);
    };

    // ----------------------------------------------------
    // Conversions
    // ----------------------------------------------------

    static parseLinear(formula) {
        /* Converts from paranthesis notation into JSON string and parses as JSON object */

        // convert the formula into a JSON string
        var jsonStr = this.convFromLinear(formula);

        // console.log(jsonStr);

        // try parsing the string as a JSON object
        var json = null;
        try {
            var json = JSON.parse(jsonStr); // $.parseJSON(jsonStr);
        } catch(e) {
            console.log(e);
        }

        return json;
    }

    static convFromLinear(formula) {
        // clean formula string from whitespace
        var cleanFormula = this.cleanLinear(formula);
        var arr = this.constructFromLinear(cleanFormula);
        return Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["flatten"])(arr).join('');
    }

    static cleanLinear(formula) {
        var cleanFormula = '';
        var inQuote = false;
        var inSlash = false;

        for (var i in formula) {
            var char = formula[i];
            if(typeof(char) !== "string") break; // prototype hacks

            if (char === '"' && !inSlash) inQuote = !inQuote;
            if (char === '/' && !inQuote) inSlash = !inSlash;

            // omit whitespace outside of quotes
            if (char === ' ') {
                if (inQuote || inSlash) cleanFormula += char;
            }
            else cleanFormula += char;
        }
        return cleanFormula;
    }

    static constructFromLinear(formula) {
        /* Converts from paranthesis notation to JSON-form */

        var compAll = [];
        var unmarked = true;

        // check for all enclosing outer form
        var countDepth = 0;
        var inQuote = false;
        var inSlash = false;
        var outerMarkCount = 0;
        for (var i in formula) {
            var char = formula[i];
            if(typeof(char) !== "string") break; // prototype hacks
            // console.log(char);
            if (!inQuote && !inSlash) {
                if (char === '(') {
                    if ((countDepth == 0) && (i != 0)) break;
                    countDepth++;
                }
                else if (char === ')') {
                    countDepth--;
                    if (countDepth == 0) {
                        if (i == formula.length-1) {
                            unmarked = false;
                            break;
                        }
                        else break;
                    }
                }
            }
            if (char === '"' && !inSlash) inQuote = !inQuote;
            if (char === '/' && !inQuote) inSlash = !inSlash;
        }

        compAll.push('  {');
        compAll.push('"type":"form",');

        if (unmarked) compAll.push('"unmarked":true,');
        else formula = formula.slice(1,formula.length-1);

        compAll.push('"space":[');   


        var parts = [];
        parts.push('');

        var countDepth = 0;
        var inQuote = false;
        var inSlash = false;

        var optChar = '⤴';
        var nestChar = '⤵';

        for (var i in formula) {
            var char = formula[i];
            var prevChar = formula[i-1];
            if(typeof(char) !== "string") break; // prototype hacks
            // console.log(char);
            if (!inQuote && !inSlash) {
                if (char === ')' || char === '}') countDepth--;
                if (char === '(' || char === '{') {
                    // console.log(countDepth);
                    if (countDepth === 0) {
                        // first (x) doesn't need to be separated
                        if (i > 0) parts.push('');
                    }
                    countDepth++;
                }
                else if ( (prevChar === ')' || prevChar === '}') && !(char === ')' || char === '}') ) {
                    // console.log(countDepth);
                    // if char follows (x), separate; but not if it is another ')'
                    if (countDepth === 0) parts.push('');
                }
                // unique separation chars for re-entry forms for easy splitting
                if (countDepth === 1 && char === ',') char = nestChar;
                else if (countDepth === 1 && char === '|') char = optChar;
                // console.log(countDepth + ': ' + char);
            }
            if (char === '"' && !inSlash) inQuote = !inQuote;
            if (char === '/' && !inQuote) inSlash = !inSlash;
            // console.log(countDepth);
            // add char to the latest pushed part
            parts[parts.length-1] += char;
        }


        
        for (var i in parts) {

            if (parts[i][0] === '(') { 
                // if part is form
                // parts[i] = this.constructFromLinear( parts[i].slice(1,parts[i].length-1) );
                var comp = [];
                // comp.push('{');
                comp.push( this.constructFromLinear(parts[i]) );
                // comp.push('}');

                parts[i] = comp.slice();
            }
            else if (parts[i][0] === '{') {
                // else if part is re-entry form

                var comp = [];
                comp.push('  {');
                comp.push('"type":"reEntry",');

                var content = parts[i].slice(1,parts[i].length-1);

                var reParts = content.split(optChar);

                if (reParts[0] === '2r' || reParts[1] === '2r' || reParts[2] === '2r') comp.push('"reEven":true,');
                else comp.push('"reEven":false,');

                if (reParts[0] === 'open' || reParts[1] === 'open' || reParts[2] === 'open') comp.push('"lastOpen":true,');
                else comp.push('"lastOpen":false,');

                if (reParts[0] === 'alt' || reParts[1] === 'alt' || reParts[2] === 'alt') comp.push('"altInterpretation":true,');
                else comp.push('"altInterpretation":false,');

                var reNested = reParts[reParts.length-1].split(nestChar);

                // console.log(reParts[reParts.length-1]);
                // console.log(reNested);

                comp.push('"nested":[');

                for (var n in reNested) {
                    comp.push( this.constructFromLinear(reNested[n]) );
                    if (n < reNested.length-1) comp.push(',');
                    // reNested[n] = this.constructFromLinear( reNested[n] );
                }

                comp.push(']}  ');

                parts[i] = comp.slice();
            }
            else {
                // else we have variables/constants

                var comp = [];

                var vars = [];
                var inQuote = false;
                var inSlash = false;

                for (var j in parts[i]) {
                    var char = parts[i][j];
                    if(typeof(char) !== "string") break; // prototype hacks

                    if (char === '"' && !inSlash) {
                        inQuote = !inQuote;
                        // mark quoted string with a '‖' for identification
                        if (inQuote) vars.push('‖');
                    }
                    else if (char === '/' && !inQuote) {
                        inSlash = !inSlash;
                        // mark unclear form with a '‽' for identification
                        if (inSlash) vars.push('‽');
                    }
                    else {
                        if (!inQuote && !inSlash) vars.push('');
                        // quote chars inside slashes will be escaped to not interfere with JSON syntax
                        if (char === '"' && inSlash) vars[vars.length-1] += '\\' + char;
                        else vars[vars.length-1] += char;
                    }
                }

                for (var v in vars) {
                    if(typeof(vars[v]) !== "string") break; // prototype hacks

                    comp.push('  {');
                    if (!isNaN(vars[v]) && vars[v].length > 0 
                        && vars[v][0] !== '‽' && vars[v][0] !== '‖') {
                        comp.push('"type":"const",'); 
                        comp.push('"value":');
                        comp.push(vars[v]);
                    }
                    else if (vars[v][0] === '‽') {
                        comp.push('"type":"unclear",');
                        comp.push('"value":2,');
                        comp.push('"symbol":');
                        comp.push('"'+vars[v].slice(1)+'"');
                    }
                    else {
                        comp.push('"type":"var",');
                        comp.push('"value":"*",');
                        comp.push('"symbol":');
                        if(vars[v][0] === '‖') comp.push('"'+vars[v].slice(1)+'"');
                        else comp.push('"'+vars[v]+'"');
                    }
                    comp.push('}  ');
                    if (v < vars.length-1) comp.push(',');
                }

                parts[i] = comp.slice();
            } // end else

            compAll.push(parts[i]);
            if (i < parts.length-1) compAll.push(',');
        }

        compAll.push(']}  ');

        return compAll;
    }

    // ----------------------------------------------------
    // Representation
    // ----------------------------------------------------

    static jsonString(form) {
        /* return json-representation of the specified FORM */
        if(typeof(form) === 'string') form = this.parseLinear(form);
    
        return JSON.stringify(form, undefined, 2);
    }

    // ----------------------------------------------------
    // Helper
    // ----------------------------------------------------

    static getVariables(form) {
        if(typeof(form) === 'string') form = this.parseLinear(form);

        var vars = [];
        this.traverseForm(form, function(fBranch,depth,space) {

            for (var i in space) {
                if (space[i].type === 'var') {
                    if (!Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["include"])(vars, space[i].symbol)) {
                        vars.push(space[i].symbol);
                    }
                }
            }
        });
        return vars.sort();
    };

    static traverseForm(form,func) {
        /* traverses only form-types in a json tree */
        let breakTrav = func.apply(this,[form,form.depth,form.space]);

        if (form.space) { // form.type === 'form'
            if (form.space.length > 0) {
                for (var i in form.space) {
                    if (form.space[i].type === 'form' || form.space[i].type === 'reEntry') {
                        let breakLoop = this.traverseForm(form.space[i],func);
                        if (breakLoop) break;
                    }
                }
            }
        }
        else if (form.nested) { // form.type === 'reEntry'
            if (form.nested.length > 0) {
                for (var i in form.nested) {
                    let breakLoop = this.traverseForm(form.nested[i],func);
                    if (breakLoop) break;
                }
            }
        }
        else console.log('ERROR: Not a form!');

        return breakTrav;
    };

}

/***/ }),

/***/ "./src/lib/core/fgraph.js":
/*!********************************!*\
  !*** ./src/lib/core/fgraph.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FGraph; });
/* harmony import */ var _fform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fform */ "./src/lib/core/fform.js");
/* harmony import */ var _modules_d3_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/d3-graph */ "./src/lib/modules/d3-graph.js");



let g1 = {}; let g2 = {};

class FGraph extends _fform__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /*
    =======================================================
      'graph' module for formform (c) 2018 Peter Hofmann
    =======================================================
    */

  constructor() {
    // this.graphs = [];
  };

  // ----------------------------------------------------
  // Extensions of FForm
  // ----------------------------------------------------

  static jsonString(form) {
    const expandedForm = this.expand_reEntry(form);
    return super.jsonString(expandedForm);
  }

  // static jsonString(form) {
  //   // if(typeof(_form) === 'string') _form = this.parseLinear(_form);

  //   const expandedForm = this.expand_reEntry(form);
  //   return JSON.stringify(expandedForm, undefined, 2);
  // }

  // ----------------------------------------------------
  // Graph representation
  // ----------------------------------------------------

  static createGraph(graphType, _form, options) {
    // expand re-entry structure to be usable for graphs
    const form = this.expand_reEntry(_form);
    // initialize the graph

    const graph = new _modules_d3_graph__WEBPACK_IMPORTED_MODULE_1__["default"](graphType, form, options);
    graph.formula = _form;
    // graphs.push( new D3Graph(graphType, form, options) );

    return graph;
  }

  static saveGraph(format, svg, name) {
    Object(_modules_d3_graph__WEBPACK_IMPORTED_MODULE_1__["save"])(format, svg, name);
  }

  static constructNested(reForm) {
    /* Constructs a (real) nested form structure from the .nested array of the original re-entry json */
    let space = reForm.space = [];
    reForm.nested.reverse(); // MUST be reversed, because notation: {deepest, ..., shallowest}

    for(let i in reForm.nested) {
      if (i > 0) {
        // prepend the reEntry nesting before everything else in the space
        space.unshift( {type: 'form', reChild: true, space: []} ); // space.push <- order last
        const nestedForm = space[0]; // space[space.length-1] <- order last
        
        if(!reForm.nested[i].unmarked) nestedForm.space.push(reForm.nested[i]);
        // else nestedForm.space.push(reForm.nested[i]);
        else nestedForm.space.push(...reForm.nested[i].space); // push(reForm.nested[i]) for grouping

        space = nestedForm.space;
      }
      else {
        if(!reForm.nested[i].unmarked) space.push(reForm.nested[i]);
        // else space.push(reForm.nested[i]);
        else space.push(...reForm.nested[i].space); // push(reForm.nested[i]) for grouping
      }
    }    

    // we need to add a point of re-entry to the last nested form
    // first, lets assume this is the form itself
    let lastNested = reForm;
    
    if(reForm.space.length > 0) {
      // then loop until the last reChild is found and make this our last nested form
      
      while (lastNested.space[0].hasOwnProperty('reChild')) {        
        lastNested = lastNested.space[0];
        if (lastNested.space.length < 1) break; // prevent errors when nothing is found
      }
    }
    // for open re-entries, we need to add another nesting (see uFORM iFORM for reference)
    if(reForm.lastOpen) {
      lastNested.space.unshift( {type: 'form', reChild: true, space: []} );
      // then add the re-entry point to either space
      lastNested.space[0].space.unshift( {type: 'reEntryPoint'} );
    }
    else lastNested.space.unshift( {type: 'reEntryPoint'} );

    // last, delete the nested structure, we don't need it anymore
    delete reForm.nested;
    return reForm;
  }

  static expand_reEntry(_form) {
    if(typeof(_form) !== 'string') _form = JSON.stringify(_form);
    const refForm = this.parseLinear(_form);
    let targetForm = this.parseLinear(_form);

    this.traverseForm(refForm, function(refBranch) {

      if(refBranch.type === 'reEntry') {
        
        this.traverseForm(targetForm, function(targetBranch) {

          if(JSON.stringify(refBranch) === JSON.stringify(targetBranch)) {
            
            targetBranch = this.constructNested(targetBranch);
            return true;
          }
        });

      }
    });

    return targetForm;
  }


}

/***/ }),

/***/ "./src/lib/main.js":
/*!*************************!*\
  !*** ./src/lib/main.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_fcalc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/fcalc */ "./src/lib/core/fcalc.js");
/* harmony import */ var _core_fform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/fform */ "./src/lib/core/fform.js");
/* harmony import */ var _core_fgraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/fgraph */ "./src/lib/core/fgraph.js");




// export {FCalc as FCalc};
// export {FForm as FForm};
// export {FGraph as FGraph};

// export default FGraph;
/* harmony default export */ __webpack_exports__["default"] = ({ calc: _core_fcalc__WEBPACK_IMPORTED_MODULE_0__["default"], form: _core_fform__WEBPACK_IMPORTED_MODULE_1__["default"], graph: _core_fgraph__WEBPACK_IMPORTED_MODULE_2__["default"] });

/***/ }),

/***/ "./src/lib/modules/d3-graph.js":
/*!*************************************!*\
  !*** ./src/lib/modules/d3-graph.js ***!
  \*************************************/
/*! exports provided: default, save */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return D3Graph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/helper */ "./src/common/helper.js");
/* harmony import */ var _common_d3_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/d3-helper */ "./src/common/d3-helper.js");
/* harmony import */ var _d3_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./d3-styles.scss */ "./src/lib/modules/d3-styles.scss");
/* harmony import */ var _d3_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_d3_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _d3_styles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./d3-styles.js */ "./src/lib/modules/d3-styles.js");









function resolveNodes(root, nodes) {
    // resolves descendant nodes into filtered selections
    const leaves = nodes.filter(d => root.leaves().filter(l => l === d).pop() )
        .classed('leaf', true);

    const sets = nodes.filter(d => d.data.type === 'form' || d.data.type === 'reEntry')
        .classed('form', true)
    const forms = sets.filter(d => d.data.type === 'form')
        .classed('form', true);
    const reEntries = sets.filter(d => d.data.type === 'reEntry')
        .classed('reEntry', true);

    const elements = nodes.filter(d => !(d.data.type === 'form' || d.data.type === 'reEntry'))
        .classed('element', true);
    const vars = elements.filter(d => d.data.type === 'var')
        .classed('var', true);
    let consts = elements.filter(d => d.data.type === 'const')
        .classed('const', true);
    consts.unmarked = elements.filter(d => d.data.value == 0).classed('unmarked', true);
    consts.marked = elements.filter(d => d.data.value == 1).classed('marked', true);
    consts.indef = elements.filter(d => d.data.value == 2).classed('indef', true);
    consts.imag = elements.filter(d => d.data.value == 3).classed('imag', true);

    const unclear = elements.filter(d => d.data.type === 'unclear')
        .classed('unclear', true);

    const reChilds = forms.filter(d => d.data.reChild)
        .classed('reChild', true);

    const rePoints = elements.filter(d => d.data.type === 'reEntryPoint')
        .classed('reEntryPoint', true);

    return [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear];
}

function resolveLinks(root, links) {
    // resolves links between descendant nodes into filtered selections
    const reChildLink = links.filter(d => d.target.data.reChild)
        .classed('reChildLink', true);

    const rePointLink = links.filter(d => d.target.data.type === 'reEntryPoint')
        .classed('rePointLink', true);

    return [reChildLink, rePointLink];
}

class D3Graph {

    constructor(graphType, data, opts, ...args) {
        // create basic svg-structure from chartFactory and merge options with configuration
        const proto = Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["default"])( { 
            ...{ margin: { left: 50, right: 50, top: 50, bottom: 50 }, 
                padding: { left: 10, right: 10, top: 10, bottom: 10 },
                styleClass: 'gestalt' },
            ...opts
        } );

        // merge this graph with the chart structure
        Object.assign(this, proto);
        // calculate inner dimensions of the svg-chart
        this.innerHeight = this.height - this.margin.top - this.margin.bottom - this.padding.top - this.padding.bottom;
        this.innerWidth = this.width - this.margin.left - this.margin.right - this.padding.left - this.padding.right;

        // call the appropriate method to build the graph
        this.constructor[graphType].call(this, data, ...args);
        //   this[graphType](data);
        //   this[graphType].call(this, data, ...args);
    }
// (()())((()))((()))
// (((c)(a)b))()()
    static tree(data) {
        const chart = this.container;
        // create a d3-hierarchy from our form-json
        const root = d3__WEBPACK_IMPORTED_MODULE_0__["hierarchy"](data, d => d.space);

        // set up design variables
        const design = _d3_styles_js__WEBPACK_IMPORTED_MODULE_4__["tree"][this.styleClass];
        const [nodeSize, nodeSep] = [design.nodeSize, design.nodeSeparation];
        const [fontSize, font] = [design.font.size, design.font.family];

        root.dx = nodeSize.w + nodeSep.hz;
        root.dy = this.width / (root.height + 1);

        // define tree layout
        const layout = d3__WEBPACK_IMPORTED_MODULE_0__["tree"]()
            // .size([ this.innerWidth, // - this.padding.left , 
            //         this.innerHeight //- this.padding.top
            //       ]);
            .nodeSize([
                root.dx,
                root.dy
            ]) // ([nodeSize.w + nodeSep.hz, nodeSize.h + nodeSep.vt])
            .separation((a,b) => {
                return a.parent == b.parent ? 1 : 2;
            });
        const tree = layout(root);

        // compute min/max x-values
        let x0 = Infinity;
        let x1 = -x0;
        tree.each(d => {
            if (d.x > x1) x1 = d.x;
            if (d.x < x0) x0 = d.x;
        });
        // compute new height based on the difference of min/max x-values of tree nodes + twice the padding
        const rootUnmarked = root.data.unmarked;
        const axisHeight = 30;
        this.height = x1 - x0 + this.padding.top*2 + axisHeight;

        // setup svg container
        this.svg
            .attr('width', this.width)
            .attr('height', this.height); // + root.dx*2)
            // .style('width', '100%')
            // .style('height', 'auto');
        _d3_styles_js__WEBPACK_IMPORTED_MODULE_4__["clearDefaults"](this.svg); // clear default styles for svg export

        // setup basic chart structure
        chart
            .classed('graph-tree', true)
                .attr('transform', `translate(${this.padding.left + (root.data.unmarked ? -root.dy : 0)},${this.padding.top - x0})`);
                // .attr('transform', `translate(${(root.data.unmarked ? -root.dy : 0)},${0})`);
                // .attr('transform', () => {
                //     if (root.data.unmarked) return `translate(${-root.dy},${0})`
                // }); 
                // root.dy / 3
                // .attr('transform', `translate(${0},${0})`);
            // .attr('transform', `translate(${this.innerWidth/2},${0})`);
            // .attr('transform', `translate(${this.padding.left},${this.padding.top})`);
        
        // add vertical axis lines for depth

        const rootHeights = d3__WEBPACK_IMPORTED_MODULE_0__["range"](root.height + (rootUnmarked ? 0:1));

        this.depthScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleOrdinal"]()
            .domain( rootHeights )
            .range( rootHeights.map(i => (i+(rootUnmarked ? 1:0))*root.dy) );
        
        const depthAxis = d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"]()
            .scale(this.depthScale)
            .tickSizeInner(-this.height)
            .tickSizeOuter(0)
            .tickPadding(8)
            .tickValues( this.depthScale.domain().map(i => 
                (this.depthScale.domain().length < 15) ? 'Depth '+i : i
            ) );

        const axis = chart.append('g')
            .classed('depthAxis', true)
            .attr('transform', `translate(0, ${x1 + this.padding.bottom})`)
            .call(depthAxis);
        axis.select('.domain').remove();
        

        // add groups for links and nodes

        const links = chart.selectAll('.link')
            .data(tree.links()) // tree.descendants().slice(1))
            .enter().append('g')
                .classed('link', true)

        const nodes = chart.selectAll('.node')
            .data(tree.descendants())
            .enter().append('g')
                .classed('node', true)
                .attr('transform', d => `translate(${d.y},${d.x})`);

        if (rootUnmarked) {
            links.filter(d => d.source.depth === 0)
                .remove();

            nodes.filter(d => d.depth === 0)
                .remove();
        }

        // generate link partition selections
        const linkPartitions = resolveLinks(tree, links);
        const [reChildLink, rePointLink] = linkPartitions;

        // generate node partition selections
        const nodePartitions = resolveNodes(tree, nodes);
        const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

        // curved line generator
        const line = d3__WEBPACK_IMPORTED_MODULE_0__["line"]().curve(d3__WEBPACK_IMPORTED_MODULE_0__["curveBasis"]);

        links
            .append('path')
                .attr('d', d3__WEBPACK_IMPORTED_MODULE_0__["linkHorizontal"]()
                    .x(d => d.y)
                    .y(d => d.x));
            // .attr('d', d => line([
            //     [d.target.x, d.target.y],
            //     [d.target.x, (d.target.y + d.source.y) / 2],
            //     [d.source.x, (d.target.y + d.source.y) / 2],
            //     [d.source.x, d.source.y]],
            //     ));

        // nodes.filter(d => !d.data.unmarked)
        //     // .filter(d => d.data.reChild)
        nodes.filter(d => !d.data.unmarked)
            .append('circle')
            .attr('r', nodeSize.w/2)
            // .attr('cx', d => d.x)
            // .attr('cy', d => d.y);
        // rePoints.selectAll('circle')
        rePoints.append('text')
            .attr('x', nodeSize.w/2 + 2)
            .text(d => {
                let p = d.parent;
                let counter = 0;
                while(p.data.type !== 'reEntry') {
                    p = p.parent;
                    if (counter > 1000) return null; // security
                    counter++;
                }
                // const reEven = p.data.reEven ? 'even' : 'odd';
                // return `${reEven} re-entry №`;
                return p.data.reEven ? '2|r|' : '2|r|+1';
            });
            // .attr('r', design.radiusSml);

        elements.selectAll('circle')
            .attr('r', (nodeSize.w/2)/2);

        nodes
            .append('text')
            .attr('x', nodeSize.w/2 + 2)
            // .attr('y', 5)
        
        vars.selectAll('text')
            .call(Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["textSubscript"])(d => d.data.symbol));
            //.text(d => `${d.data.symbol}`);
        consts.selectAll('text')
            .text(d => `= ${d.data.value}`);
        unclear.selectAll('text')
            .text(d => `/${d.data.symbol}/`);

        sets.filter(d => d.children)
            .append('circle')
            .classed('inner',true)
            .attr('r', (nodeSize.w/2)/2);


        // apply all style-related attributes to the selections
        design.applyAxisStyles(axis);
        design.applyLinkStyles(links, linkPartitions);
        design.applyNodeStyles(nodes, nodePartitions);

        // fitChart(chart, this.padding);

        // chart.attr('transform', `translate(${chart.node().getBBox().width/2},${0})`);

        // debugging:
        [this.root, this.layout, this.chart, this.tree, this.design] = 
            [root, layout, chart, tree, design];
    }

    static pack(data) {
        const chart = this.container;
        // create a d3-hierarchy from our form-json
        // data.forEach()
        _d3_styles_js__WEBPACK_IMPORTED_MODULE_4__["clearDefaults"](this.svg); // clear default styles for svg export

        const root = d3__WEBPACK_IMPORTED_MODULE_0__["hierarchy"](data, d => d.space)
            .sum(d => d.children ? 0 : 1);

        // set up design variables
        const design = _d3_styles_js__WEBPACK_IMPORTED_MODULE_4__["pack"][this.styleClass];
        const [radius, padding] = [design.radius, design.padding];
        const [fontSize, font] = [design.font.size, design.font.family];

        // define pack layout
        const layout = d3__WEBPACK_IMPORTED_MODULE_0__["pack"]()
        .padding(d => {
            let pad = padding;
            if (d.data.type === 'form' && d.children.length === 1) {
                if (d.children[0].data.type === 'form')
                    pad = pad * 0.4;
            }
            if (d.data.unmarked && d.children.length === 1) pad = 0;
            return pad;
        })
        .radius(d => {
            let rad = radius;
            if(typeof(d.data.symbol) === 'string') {
                rad = Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["textSize"])(d.data.symbol, fontSize, font).width /2;
                if(d.data.type === 'unclear') rad += padding*2;
            }
            else if(d.data.value) {
                rad = Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["textSize"])(d.data.value+'', fontSize, font).width /2;
            }
            else if(d.data.children || d.data.type === 'reEntryPoint') rad = 0;
            return rad;
        });
        // .size([ this.innerWidth, this.innerHeight ]);
        const pack = layout(root);

        // d3.select(chart.node().parentElement)
        //     .attr('width', pack.r*2 + this.padding.left)
        //     .attr('height', pack.r*2 + this.padding.top);


        // setup basic chart structure
        chart.attr('class', 'graph-pack')
            .attr('transform', `translate(${pack.r + this.padding.left},${pack.r + this.padding.top})`);

        const nodes = chart.selectAll('.node')
            .data(pack.descendants())
            .enter().append('g')
                .classed('node', true)
                .attr('transform', d => `translate(${d.x},${d.y})`);

        // generate node partition selections
        const nodePartitions = resolveNodes(pack, nodes);
        const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

        // define detailled structure/logic

        sets.append('circle')
            .attr('r', d => d.r);
        // forms //.filter(d => !d.data.unmarked)
        //     // .filter(d => d.data.reChild)
        // reEntries //.filter(d => !d.data.lastOpen)
        vars.append('text')
            .call(Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["textSubscript"])(d => d.data.symbol));

        consts.append('text')
            .text(d => d.data.value);

        unclear.append('rect')
            .attr('transform', d => 
            `skewX(-30) translate(${-(d.r - padding)},
            ${-(Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["textSize"])('x',fontSize, font).height + padding*2)/2})`)
            .attr('width', d => d.r*2 - padding*2)
            .attr('height', d => (Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["textSize"])('x',fontSize, font).height + padding*2))
        unclear.append('text')
            .text(d => d.data.symbol);

        rePoints
            .append('circle')
            .attr('r', 1.5);
            // .attr('cx', -5)

        reEntries
            .call(Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["circleLabel"])( d => d.data.reEven ? '2|r|' : '2|r|+1', design.fontContext.size, design.fontContext.family ));
            // .append('text')
            // .raise()
            // .text(d => d.data.reEven ? '2|r|' : '2|r|+1');


        // apply all style-related attributes to the selections
        design.applyNodeStyles(nodes, nodePartitions, chart);

        Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["fitChart"])(chart, this.padding);

        // debugging:
        [this.root, this.layout, this.chart, this.pack, this.design] = 
            [root, layout, chart, pack, design];
    }

    static treemap(data) {

    }

    static force(data) {

    }

}

const save = function(format, svg, name) {
    // exports graphs into svg
    
    name = name || d3__WEBPACK_IMPORTED_MODULE_0__["select"](svg.parentNode).attr('id');
    const timestamp = Object(_common_helper__WEBPACK_IMPORTED_MODULE_1__["getTimestamp"])();

	try {
    switch(format) {
      case 'svg':
        Object(_common_helper__WEBPACK_IMPORTED_MODULE_1__["saveSvg"])(svg, timestamp+'_'+name+'.svg');
        break;
    }
	} catch(e) {
		console.log(e);
	}
}
// export default graph;

/***/ }),

/***/ "./src/lib/modules/d3-styles.js":
/*!**************************************!*\
  !*** ./src/lib/modules/d3-styles.js ***!
  \**************************************/
/*! exports provided: clearDefaults, tree, pack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearDefaults", function() { return clearDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tree", function() { return tree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pack", function() { return pack; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_d3_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/d3-helper */ "./src/common/d3-helper.js");



/* Cascading D3-Styles - by Peter Hofmann, 12/2018 */

// -----------------------
// global styles

const global = {
    common: {
        font: { family: 'sans-serif', 
                size: '14px',
            },
        fontContext: { family: 'sans-serif',
                        size:  '9px',
        },
        color: {base: d3__WEBPACK_IMPORTED_MODULE_0__["color"]('black'),
                ground: d3__WEBPACK_IMPORTED_MODULE_0__["color"]('white'),
                indef: d3__WEBPACK_IMPORTED_MODULE_0__["color"]('red'),
                light: d3__WEBPACK_IMPORTED_MODULE_0__["color"]('#ddd'),
            },
        dashes: {
            },
    }
};
global.basic = {
    ...global.common,
    font: { ...global.common.font,
            family: 'georgia, serif', 
        },
};
global.gestalt = {
    ...global.common,
    font: { ...global.common.font,
            family: 'sans-serif', 
    },
    color: {...global.common.color,
            pos: d3__WEBPACK_IMPORTED_MODULE_0__["color"]('white'), 
            neg: d3__WEBPACK_IMPORTED_MODULE_0__["color"]('black')
        },
};
const [basic, gestalt] = [global.basic, global.gestalt];

function clearDefaults(svg) {
    svg.attr('stroke','none').attr('fill','none');
}

// -----------------------
// d3.tree styles:

const tree = {
    common: {
        nodeSize: {w: 10.0, h: 10.0}, // size of nodes
        nodeSeparation: {hz: 20, vt: 40}, // separation between nodes
        dashes: {link: '4px 6px'
            },
    }
};

tree.basic = {
    ...basic,
    ...tree.common,
};
tree.basic.applyAxisStyles = function(axis) {

    axis.selectAll('.tick').select('line')
        .style('stroke-width', this.nodeSize.w*1.5)
        .style('stroke', '#f4f4f4')
    axis.selectAll('.tick').select('text')
        // .attr('x', -2)
        .attr('text-anchor', 'start');

}
tree.basic.applyNodeStyles = function(nodes, nodePartitions) {
    const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

    forms.selectAll('circle')
        .style('stroke', this.color.base.toString())
        .style('fill', this.color.ground.toString());


    elements.selectAll('circle')
        .style('fill', this.color.base.toString());

    reEntries.selectAll('circle')
        .style('stroke', this.color.indef.toString())
        .style('fill', this.color.indef.toString())
        .filter(d => d.data.lastOpen)
            .style('fill', this.color.ground.toString());
    reChilds.selectAll('circle')
        .style('stroke', this.color.indef.toString())
        .style('stroke-dasharray', d => Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_1__["circleDashArray"])(d.r, 3, [1]));
    rePoints.selectAll('circle')
        .style('fill', this.color.indef.toString());

    nodes.selectAll('text')
        .style('font', `normal ${this.font.size} ${this.font.family}`)
        .style('dominant-baseline','middle')
        .style('fill', this.color.base.toString())

    sets.selectAll('circle.inner')
        // .classed('inner')
        .style('stroke', 'none')
        .style('fill', this.color.base.toString());

};
tree.basic.applyLinkStyles = function(links, linkPartitions) {
    const [reChildLink, rePointLink] = linkPartitions;

    links.selectAll('path')
        .style('stroke', this.color.base.toString());

    reChildLink.selectAll('path')
        .style('stroke', this.color.indef.toString())
        .style('stroke-dasharray', this.dashes.link);

    rePointLink.selectAll('path')
        .style('stroke', this.color.indef.toString())
        .style('stroke-dasharray', this.dashes.link);
};

tree.gestalt = {
    ...gestalt,
    ...tree.common,
};
tree.gestalt.applyAxisStyles = function(axis) {
    tree.basic.applyAxisStyles(axis);
}
tree.gestalt.applyNodeStyles = function(nodes, nodePartitions) {
    const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

    tree.basic.applyNodeStyles(nodes, nodePartitions);
};
tree.gestalt.applyLinkStyles = function(links, linkPartitions) {
    // const [reChildLink] = linkPartitions;

    tree.basic.applyLinkStyles(links, linkPartitions);
};

// -----------------------
// d3.pack styles:

const pack = {
    common: {
        radius: 14, // 15
        padding: 14, // 12
    }
};

pack.basic = {
    ...basic,
    ...pack.common,
};
pack.basic.applyNodeStyles = function(nodes, nodePartitions) {
    const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

    forms.select('circle')
        .style('stroke', this.color.base.toString())
        .filter(d => d.data.unmarked)
            .style('stroke','none');
    reEntries.select('circle')
        .style('stroke', this.color.indef.toString())
        .filter(d => d.data.lastOpen)
            .style('stroke-dasharray', d => Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_1__["circleDashArray"])(d.r, 14, [2/5, 3/5]) );
                // `${ calcCircleDash(d.r, 14, 2/5) }px
                //  ${ calcCircleDash(d.r, 14, 3/5) }px`); // this.dashes.wide
            // .style('stroke','none');

    elements.selectAll('text')
        .style('font', `normal ${this.font.size} ${this.font.family}`)
        .style('dominant-baseline','middle')
        .style('text-anchor', 'middle')
        .style('fill', this.color.base.toString());

    unclear.select('rect')
        .style('fill', this.color.light.toString());

    rePoints.select('circle')
        .style('fill', this.color.indef.toString())
        .style('stroke','none');

    const reEvenLabels = reEntries.select('.label')
        .style('stroke', 'none')
        .style('fill', this.color.indef.toString());
};

pack.gestalt = {
    ...gestalt,
    ...pack.common,
};
pack.gestalt.invertFill = function(d) {
    return Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_1__["getRealDepth"])(d)%2 ? this.color.pos.toString() : this.color.neg.toString();
};
pack.gestalt.applyNodeStyles = function(nodes, nodePartitions, chart) {
    const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

    const defs = d3__WEBPACK_IMPORTED_MODULE_0__["select"](chart.node().parentNode)
        .append('defs');
    const grad_1 = defs.append('radialGradient').attr('id', 'grad-indef-outin')
        .attr('fx','20%')
        // .attr('r','55%');
        // grad_1.append('stop')
        //     .attr('offset','60%').attr('stop-color', this.color.pos.toString() );
        // grad_1.append('stop')
        //     .attr('offset','100%').attr('stop-color', this.color.indef.toString() ); // <- new
        grad_1.append('stop')
            .attr('offset','40%').attr('stop-color', Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_1__["opacity"])(this.color.indef, 0.3).toString() );
            grad_1.append('stop')
            .attr('offset','90%').attr('stop-color', Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_1__["opacity"])(this.color.indef, 0.8).toString() );
        grad_1.append('stop')
            .attr('offset','100%').attr('stop-color', Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_1__["opacity"])(this.color.indef, 1.0).toString() );
    const grad_2 = defs.append('radialGradient').attr('id', 'grad-indef-inout')
        // .attr('spreadMethod','reflect')
        .attr('fx','20%')
        // .attr('r','55%');
        grad_2.append('stop')
            .attr('offset','10%').attr('stop-color', Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_1__["opacity"])(this.color.indef, 1.0).toString() );
        grad_2.append('stop')
            .attr('offset','50%').attr('stop-color', Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_1__["opacity"])(this.color.indef, 0.6).toString() );
        grad_2.append('stop')
            .attr('offset','60%').attr('stop-color', Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_1__["opacity"])(this.color.indef, 0.4).toString() );
        grad_2.append('stop')
            .attr('offset','100%').attr('stop-color', Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_1__["opacity"])(this.color.indef, 0.0).toString() );

    forms.select('circle').filter(d => !d.data.unmarked)
        .style('stroke', 'none')
        .style('fill', d => this.invertFill(d));

    reEntries.select('circle')
        .style('stroke', d => (d.parent.data.type === 'reEntry') ? this.color.pos.toString() : 'none' )
        .style('fill', 'url(#grad-indef-outin)');

    const openReEntries = reEntries.select('circle').filter(d => d.data.lastOpen)
        .style('fill', 'url(#grad-indef-inout)')
        .style('stroke-dasharray', d => Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_1__["circleDashArray"])(d.r, 8, [2/5, 3/5]) );

    openReEntries.filter(d => ((d.parent.data.type !== 'reEntry') || !Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_1__["getRealDepth"])(d)%2) ) //  
            .style('stroke', d => this.color.indef.toString());

    openReEntries.filter(d => (d.parent.data.type === 'reEntry') && !d.parent.data.lastOpen)
            .style('stroke', d => this.color.pos.toString());

            // .style('fill', d => {
            //     // if(d.parent.data.type === 'reEntry')
            //     return getRealDepth(d)%2 ? '#ffdddd' : '#aa0000';
            // });

    elements.selectAll('text')
        .style('font', `normal ${this.font.size} ${this.font.family}`)
        .style('dominant-baseline','middle')
        .style('text-anchor', 'middle')
        .style('stroke', 'none')
        .style('fill', d => this.invertFill(d));

    unclear.select('rect')
        .style('fill',this.color.light.toString());
    unclear.select('text')
        .style('fill',this.color.base.toString());
        
    rePoints.select('circle')
        .style('fill',this.color.indef.toString())
        .style('stroke','none')
        .filter(d => d.parent.data.type === 'reEntry')
            .style('stroke', this.color.indef.toString())
            .style('fill', this.color.pos.toString())
            .attr('transform', 'scale(1.5)');
    // elements.filter(d => (type === 'var' || type === 'const' || type === 'unclear') )

    const reEvenLabels = reEntries.select('.label')
        .style('stroke', 'none')
        .style('fill', d => (d.parent.data.type === 'reEntry' && !d.parent.data.lastOpen) ? this.color.pos.toString() : this.color.indef.toString());
    reEntries.select('.label.inside')
        .style('fill', d => (d.parent.data.type !== 'reEntry' && d.data.lastOpen) ? this.color.indef.toString() : this.color.pos.toString());

};



/***/ }),

/***/ "./src/lib/modules/d3-styles.scss":
/*!****************************************!*\
  !*** ./src/lib/modules/d3-styles.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./d3-styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/lib/modules/d3-styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "d3":
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL21vZHVsZXMvZDMtc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9jb21tb24vZDMtaGVscGVyLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2NvbW1vbi9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL2NvcmUvZmNhbGMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL2NvcmUvZmZvcm0uanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL2NvcmUvZmdyYXBoLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2xpYi9tYWluLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2xpYi9tb2R1bGVzL2QzLWdyYXBoLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2xpYi9tb2R1bGVzL2QzLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9saWIvbW9kdWxlcy9kMy1zdHlsZXMuc2Nzcz8xNTlhIiwid2VicGFjazovL2Zvcm1mb3JtL2V4dGVybmFsIFwiZDNcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGQUF1RjtBQUN2RjtBQUNBLHFEQUFxRCxpRUFBTztBQUM1RDtBQUNBLHFEQUFxRCxpRUFBTztBQUM1RDtBQUNBLHNEQUFzRCxpRUFBTztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGlFQUFPO0FBQzVEO0FBQ0EscURBQXFELGlFQUFPO0FBQzVEO0FBQ0EscURBQXFELGlFQUFPO0FBQzVEO0FBQ0Esc0RBQXNELGlFQUFPOztBQUU3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MseUVBQWU7O0FBRXZELHNFQUFzRSxzRUFBWTtBQUNsRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQSxpQ0FBaUMsZUFBZSxHQUFHLGlCQUFpQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDalJBLGNBQWMsbUJBQU8sQ0FBQyxzVUFBNks7O0FBRW5NLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyx5R0FBc0Q7O0FBRTNFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDbkJmLGdEIiwiZmlsZSI6ImZvcm1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiZDNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiZDNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZm9ybWZvcm1cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJkM1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiZm9ybWZvcm1cIl0gPSBmYWN0b3J5KHJvb3RbXCJkM1wiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xpYi9tYWluLmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuXG5jb25zdCBwcm90b0NoYXJ0ID0ge1xuICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICBtYXJnaW46IHtcbiAgICAgIGxlZnQ6IDEwLFxuICAgICAgcmlnaHQ6IDEwLFxuICAgICAgdG9wOiAxMCxcbiAgICAgIGJvdHRvbTogMTAsXG4gICAgfSxcbiAgfTtcbiAgXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFydEZhY3Rvcnkob3B0cywgcHJvdG8gPSBwcm90b0NoYXJ0KSB7XG5cbiAgY29uc3QgY2hhcnQgPSBPYmplY3QuYXNzaWduKHt9LCBwcm90bywgb3B0cyk7XG4gIGlmKG9wdHMucGFyZW50SWQpIGNoYXJ0LnBhcmVudCA9IGQzLnNlbGVjdChgIyR7b3B0cy5wYXJlbnRJZH1gKTtcbiAgZWxzZSBkMy5zZWxlY3QoJ2JvZHknKTtcblxuICBjaGFydC5zdmcgPSBjaGFydC5wYXJlbnRcbiAgICAuYXBwZW5kKCdzdmcnKS5sb3dlcigpXG4gICAgLmF0dHIoJ2lkJywgY2hhcnQuaWQgfHwgJ2NoYXJ0JylcbiAgICAuYXR0cignd2lkdGgnLCBjaGFydC53aWR0aCAtIGNoYXJ0Lm1hcmdpbi5yaWdodClcbiAgICAuYXR0cignaGVpZ2h0JywgY2hhcnQuaGVpZ2h0IC0gY2hhcnQubWFyZ2luLmJvdHRvbSk7XG5cbiAgaWYgKG9wdHMuc3R5bGVDbGFzcykgY2hhcnQuc3ZnLmF0dHIoJ2NsYXNzJywgb3B0cy5zdHlsZUNsYXNzKTtcblxuICBjaGFydC5jb250YWluZXIgPSBjaGFydC5zdmcuYXBwZW5kKCdnJylcbiAgICAuYXR0cignaWQnLCAnY29udGFpbmVyJylcbiAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke2NoYXJ0Lm1hcmdpbi5sZWZ0fSwgJHtjaGFydC5tYXJnaW4udG9wfSlgKTtcblxuICByZXR1cm4gY2hhcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXRDaGFydChjaGFydCwgcGFkZGluZykge1xuICAvLyBjYWxjdWxhdGUgcmVhbCBkaW1lbnNpb25zIG9mIGEgY2hhcnQgKGFzc3VtZXMgY2hhcnQgaXMgYSBnLWVsZW1lbnQgd3JhcHBlZCBpbnNpZGUgYW4gc3ZnKVxuICBkMy5zZWxlY3QoY2hhcnQubm9kZSgpLnBhcmVudEVsZW1lbnQpXG4gICAgICAuYXR0cignd2lkdGgnLCBjaGFydC5ub2RlKCkuZ2V0QkJveCgpLndpZHRoICsgcGFkZGluZy5sZWZ0ICsgcGFkZGluZy5yaWdodClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBjaGFydC5ub2RlKCkuZ2V0QkJveCgpLmhlaWdodCArIHBhZGRpbmcudG9wICsgcGFkZGluZy5ib3R0b20pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVhbERlcHRoKGQpIHtcbiAgLy8gY2FsY3VsYXRlcyB0aGUgcmVhbCBkZXB0aCBvZiBhIEZPUk0gYnkgc3VidHJhY3RpbmcgdW5tYXJrZWQgYW5kIG9wZW4gcmVFbnRyeSBGT1JNc1xuICBjb25zdCBnaG9zdHMgPSBkLmFuY2VzdG9ycygpXG4gICAgICAuZmlsdGVyKGUgPT4gKGUuZGF0YS50eXBlID09PSAnZm9ybScgJiYgZS5kYXRhLnVubWFya2VkIHx8IFxuICAgICAgICAgICAgICAgIGUuZGF0YS50eXBlID09PSAncmVFbnRyeScgJiYgZS5kYXRhLmxhc3RPcGVuKSkubGVuZ3RoO1xuICByZXR1cm4gZC5kZXB0aCAtIGdob3N0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRleHRTdWJzY3JpcHQodGV4dCkge1xuICAvLyBzZWxlY3Rpb24gbW9kdWxlIHRvIHNwbGl0IHRleHQgaW50byBwYXJ0cyBmb3Igc3Vic2NyaXB0cyAoZS5nLiBcInhfblwiKVxuICByZXR1cm4gKHNlbGVjdGlvbikgPT4ge1xuICAgIHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uKGQpIHtcblxuICAgICAgICBjb25zdCBzcGxpdCA9IHRleHQoZCkuc3BsaXQoJ18nKTtcbiAgICAgICAgaWYgKHNwbGl0Lmxlbmd0aCA9PT0gMikge1xuXG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmFwcGVuZCgndHNwYW4nKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBzcGxpdFswXSk7XG5cbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykuYXBwZW5kKCd0c3BhbicpXG4gICAgICAgICAgICAudGV4dChkID0+IHNwbGl0WzFdKVxuICAgICAgICAgICAgLmF0dHIoJ2R4JywgMSlcbiAgICAgICAgICAgIC5hdHRyKCdkeScsIDYpXG4gICAgICAgICAgICAuYXR0cignZm9udC1zaXplJywgJy44ZW0nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIC50ZXh0KHRleHQoZCkpO1xuICAgICAgICB9XG5cbiAgICB9KVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGV4dFNpemUodGV4dCwgZm9udFNpemU9J2luaGVyaXQnLCBmb250RmFtaWx5PSdpbmhlcml0JywgZm9udFN0eWxlPSdub3JtYWwnKSB7XG4gIC8qIFNvdXJjZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vaHV5dGQvMzI3ZTQ1M2M5NWNhM2VkYWRiMzJkMGM4NjdlMjU2MWIgXG4gIENyZWRpdHMgdG86IEh1eSBUci4gKi9cbiAgaWYgKCFkMykgcmV0dXJuO1xuICB2YXIgY29udGFpbmVyID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdzdmcnKTtcbiAgY29udGFpbmVyLmFwcGVuZCgndGV4dCcpLnN0eWxlKCdmb250JyxgJHtmb250U3R5bGV9ICR7Zm9udFNpemV9ICR7Zm9udEZhbWlseX1gKVxuICAgICAgLmF0dHIoJ3gnLCctOTk5OScpLmF0dHIoJ3knLCctOTk5OScpLnRleHQodGV4dCk7XG4gIHZhciBzaXplID0gY29udGFpbmVyLm5vZGUoKS5nZXRCQm94KCk7XG4gIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgcmV0dXJuIHsgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHQgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wYWNpdHkoY29sb3IsIGFscGhhKSB7XG4gIGNvbnN0IGNvbG9yQ29weSA9IGQzLmNvbG9yKGNvbG9yKTtcbmNvbG9yQ29weS5vcGFjaXR5ID0gYWxwaGE7XG5yZXR1cm4gY29sb3JDb3B5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlUmVtYWluZGVyKG51bSwgX2Rlbikge1xuICBsZXQgY291bnQgPSAwO1xuICBsZXQgc2lnbiA9IDE7XG4gIGxldCBkZW4gPSBNYXRoLnJvdW5kKF9kZW4pO1xuICBsZXQgY2FuZGlkYXRlID0gZGVuO1xuICB3aGlsZSAobnVtICUgZGVuID4gMC4zKSB7XG4gICAgICBjYW5kaWRhdGUgKz0gc2lnbiAqIDAuMDAxO1xuICAgICAgaWYgKG51bSVjYW5kaWRhdGUgPCBudW0lZGVuKSBkZW4gPSBjYW5kaWRhdGU7XG5cbiAgICAgIGlmKGNvdW50ID49IDUwMDApIHtcbiAgICAgICAgICBjYW5kaWRhdGUgPSBNYXRoLnJvdW5kKF9kZW4pO1xuICAgICAgICAgIHNpZ24gPSAtMTtcbiAgICAgIH1cbiAgICAgIGlmKGNvdW50ID49IDEwMDAwKSBicmVhaztcbiAgICAgIGNvdW50Kys7XG4gIH1cbiAgLy8gY29uc29sZS5sb2cobnVtJWRlbik7XG4gIHJldHVybiBkZW47XG59XG5leHBvcnQgZnVuY3Rpb24gY2FsY0NpcmNsZURhc2gociwgdW5pdCwgZnJhY3Rpb24pIHtcbiAgY29uc3QgY2lyYyA9IE1hdGguUEkqMiAqIHI7XG4gIHJldHVybiByZWR1Y2VSZW1haW5kZXIoY2lyYywgdW5pdCkgKiBmcmFjdGlvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaXJjbGVEYXNoQXJyYXkociwgdW5pdCwgZnJhY3Rpb25zKSB7XG4gIGxldCBzdHIgPSAnJztcbiAgZm9yIChsZXQgaSBpbiBmcmFjdGlvbnMpIHtcbiAgICAgIHN0ciA9IHN0ci5jb25jYXQoYCR7IGNhbGNDaXJjbGVEYXNoKHIsIHVuaXQsIGZyYWN0aW9uc1tpXSkgfXB4IGApO1xuICB9XG4gIHJldHVybiBzdHI7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBkYXNoQXJyYXkociwgdW5pdCwgZnJhY3Rpb25zKSB7XG4vLyAgIGxldCBzdHIgPSAnJztcbi8vICAgZm9yIChsZXQgaSBpbiBmcmFjdGlvbnMpIHtcbi8vICAgICAgIHN0ciA9IHN0ci5jb25jYXQoYCR7IGNhbGNDaXJjbGVEYXNoKHIsIHVuaXQsIGZyYWN0aW9uc1tpXSkgfXB4IGApO1xuLy8gICB9XG4vLyAgIHJldHVybiBzdHI7XG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjaXJjbGVMYWJlbCh0ZXh0LCBmb250U2l6ZT0naW5oZXJpdCcsIGZvbnRGYW1pbHk9J2luaGVyaXQnKSB7XG4gIC8vIHNlbGVjdGlvbiBtb2R1bGUgdG8gc3BsaXQgdGV4dCBpbnRvIHBhcnRzIGZvciBzdWJzY3JpcHRzIChlLmcuIFwieF9uXCIpXG4gIHJldHVybiAoc2VsZWN0aW9uKSA9PiB7XG5cbiAgICAgIHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uKGQpIHtcblxuICAgICAgICAgIGNvbnN0IHRleHRTeiA9IHRleHRTaXplKHRleHQoZCksIGZvbnRTaXplLCBmb250RmFtaWx5KTtcbiAgICAgICAgICBjb25zdCBtYXJnaW4gPSA1MDtcblxuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgICAuc3R5bGUoJ2ZvbnQnLCBgbm9ybWFsICR7Zm9udFNpemV9ICR7Zm9udEZhbWlseX1gKVxuICAgICAgICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgICAgICAgIC5yYWlzZSgpXG4gICAgICAgICAgICAgIC50ZXh0KGQgPT4gdGV4dChkKSk7XG5cbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykuZmlsdGVyKGQgPT4gZC5yKjIgPj0gdGV4dFN6LndpZHRoICsgbWFyZ2luKS5zZWxlY3QoJ3RleHQnKVxuICAgICAgICAgICAgICAuY2xhc3NlZCgnbGFiZWwgaW5zaWRlJywgdHJ1ZSlcbiAgICAgICAgICAgICAgLmF0dHIoJ3knLCBkID0+IGQuciAtIHRleHRTei5oZWlnaHQqMC41IClcbiAgICAgICAgICAgICAgLmF0dHIoJ2RvbWluYW50LWJhc2VsaW5lJywnYmFzZWxpbmUnKTtcblxuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5maWx0ZXIoZCA9PiBkLnIqMiA8IHRleHRTei53aWR0aCArIG1hcmdpbikuc2VsZWN0KCd0ZXh0JylcbiAgICAgICAgICAgICAgLmNsYXNzZWQoJ2xhYmVsIG91dHNpZGUnLCB0cnVlKVxuICAgICAgICAgICAgICAuYXR0cigneScsIGQgPT4gZC5yICsgNClcbiAgICAgICAgICAgICAgLmF0dHIoJ2RvbWluYW50LWJhc2VsaW5lJywnaGFuZ2luZycpO1xuXG4gICAgICB9KTtcbiAgfTtcbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8galF1ZXJ5IHJlcGxhY2VtZW50czpcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dBbGwoZWxlbXMpIHtcbiAgICBpZih0eXBlb2YoZWxlbXMpID09PSAnc3RyaW5nJykgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1zKTtcbiAgICBlbGVtcy5mb3JFYWNoKCAoZSxpKSA9PiB7XG4gICAgICAgIHNob3coZSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvdyhlbGVtKSB7XG4gICAgaWYodHlwZW9mKGVsZW0pID09PSAnc3RyaW5nJykgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG4gICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAvLyBlbGVtLmNsYXNzTGlzdC5hZGQoJ2lzLXZpc2libGUnKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlQWxsKGVsZW1zKSB7XG4gICAgaWYodHlwZW9mKGVsZW1zKSA9PT0gJ3N0cmluZycpIGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtcyk7XG4gICAgZWxlbXMuZm9yRWFjaCggKGUsaSkgPT4ge1xuICAgICAgICBoaWRlKGUpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGhpZGUoZWxlbSkge1xuICAgIGlmKHR5cGVvZihlbGVtKSA9PT0gJ3N0cmluZycpIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG5cdC8vIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtdmlzaWJsZScpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUFsbChlbGVtcykge1xuICAgIGlmKHR5cGVvZihlbGVtcykgPT09ICdzdHJpbmcnKSBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbXMpO1xuICAgIGVsZW1zLmZvckVhY2goIChlLGkpID0+IHtcbiAgICAgICAgdG9nZ2xlKGUpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZShlbGVtKSB7XG4gICAgaWYodHlwZW9mKGVsZW0pID09PSAnc3RyaW5nJykgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG4gICAgZWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcblx0Ly8gZWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdpcy12aXNpYmxlJyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaXNWaXNpYmxlKGVsZW0pIHtcbiAgICBpZih0eXBlb2YoZWxlbSkgPT09ICdzdHJpbmcnKSBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbiAgICByZXR1cm4gKCAhZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2Qtbm9uZScpICk7XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZChudW0sIHNpemUpIHtcbiAgICAvKiBTb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yOTk4ODIyXG4gICAgQ3JlZGl0cyB0bzogSW5maW5pdGllc0xvb3AgKi9cbiAgICB2YXIgcyA9IG51bStcIlwiO1xuICAgIHdoaWxlIChzLmxlbmd0aCA8IHNpemUpIHMgPSBcIjBcIiArIHM7XG4gICAgcmV0dXJuIHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3ZnKHN2Z0VsLCBuYW1lKSB7XG4gICAgLyogU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDY0MDM1ODlcbiAgICBDcmVkaXRzIHRvOiBkZWZnaGkxOTc3LCBEYXZlVGhlU2NpZW50aXN0LCBzZW56ICovXG4gICAgc3ZnRWwuc2V0QXR0cmlidXRlKFwieG1sbnNcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiKTtcbiAgICB2YXIgc3ZnRGF0YSA9IHN2Z0VsLm91dGVySFRNTDtcbiAgICB2YXIgcHJlZmFjZSA9ICc8P3htbCB2ZXJzaW9uPVwiMS4wXCIgc3RhbmRhbG9uZT1cIm5vXCI/Plxcclxcbic7XG4gICAgdmFyIHN2Z0Jsb2IgPSBuZXcgQmxvYihbcHJlZmFjZSwgc3ZnRGF0YV0sIHt0eXBlOlwiaW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04XCJ9KTtcbiAgICB2YXIgc3ZnVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChzdmdCbG9iKTtcbiAgICB2YXIgZG93bmxvYWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZG93bmxvYWRMaW5rLmhyZWYgPSBzdmdVcmw7XG4gICAgZG93bmxvYWRMaW5rLmRvd25sb2FkID0gbmFtZTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvd25sb2FkTGluayk7XG4gICAgZG93bmxvYWRMaW5rLmNsaWNrKCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb3dubG9hZExpbmspO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnIpIHtcbiAgICAvKiBTb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNTAzMDExNyBcbiAgICBDcmVkaXRzIHRvOiBOb2FoIEZyZWl0YXMgKi9cbiAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24gKGZsYXQsIHRvRmxhdHRlbikge1xuICAgIHJldHVybiBmbGF0LmNvbmNhdChBcnJheS5pc0FycmF5KHRvRmxhdHRlbikgPyBmbGF0dGVuKHRvRmxhdHRlbikgOiB0b0ZsYXR0ZW4pO1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlKGFycixvYmopIHtcbiAgICAvKiAgU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTQzODYzXG4gICAgQ3JlZGl0cyB0bzogVmlua28gVnJzYWxvdmljICovXG4gICAgcmV0dXJuIChhcnIuaW5kZXhPZihvYmopICE9IC0xKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlKG8sZnVuYykge1xuICAgIC8qICBTb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzcyMjY2OC90cmF2ZXJzZS1hbGwtdGhlLW5vZGVzLW9mLWEtanNvbi1vYmplY3QtdHJlZS13aXRoLWphdmFzY3JpcHQgXG4gICAgQ3JlZGl0cyB0bzogVGhlSGlwcG8gKi9cbiAgICBmb3IgKHZhciBpIGluIG8pIHtcbiAgICAgICAgZnVuYy5hcHBseShudWxsLFtpLG9baV1dKTsgIC8vIG51bGwgb3IgdGhpcz9cbiAgICAgICAgaWYgKG9baV0gIT09IG51bGwgJiYgdHlwZW9mKG9baV0pPT1cIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAvL2dvaW5nIG9uZSBzdGVwIGRvd24gaW4gdGhlIG9iamVjdCB0cmVlISFcbiAgICAgICAgICAgIHRyYXZlcnNlKG9baV0sZnVuYyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5TdHJpbmcucHJvdG90eXBlLnJlcGxhY2VBbGwgPSBmdW5jdGlvbihmaW5kLCByZXBsYWNlLCBlc2NhcGVNZXRhKSB7XG4gICAgLyogIE1vZGlmaWVkIGZyb206IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzExNDQ3ODMvaG93LXRvLXJlcGxhY2UtYWxsLW9jY3VycmVuY2VzLW9mLWEtc3RyaW5nLWluLWphdmFzY3JpcHQgXG4gICAgQ3JlZGl0cyB0bzogU2VhbiBCcmlnaHQgKi9cbiAgICBpZihlc2NhcGVNZXRhKSBmaW5kID0gZXNjYXBlUmVnRXhwKGZpbmQpO1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2UobmV3IFJlZ0V4cChmaW5kLCAnZycpLCByZXBsYWNlKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFxcW1xcXVxcL1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cblN0cmluZy5wcm90b3R5cGUuYWRkQmVmb3JlPWZ1bmN0aW9uKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0cigwLCBpbmRleCkgKyByZXBsYWNlbWVudCsgdGhpcy5zdWJzdHIoaW5kZXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwKHZhbHVlLCBzdGFydDEsIHN0b3AxLCBzdGFydDIsIHN0b3AyKSB7XG4gICAgLy8gUHJvY2Vzc2luZy1saWtlIG1hcCBmdW5jdGlvblxuICAgIHJldHVybiBzdGFydDIgKyAoc3RvcDIgLSBzdGFydDIpICogKCh2YWx1ZSAtIHN0YXJ0MSkgLyAoc3RvcDEgLSBzdGFydDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5TW92ZUl0ZW0oYXJyLCBmcm9tLCB0bykge1xuICBhcnIuc3BsaWNlKHRvLCAwLCBhcnIuc3BsaWNlKGZyb20sIDEpWzBdKTtcbn1cblxuU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlQXQ9ZnVuY3Rpb24oaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RyKDAsIGluZGV4KSArIHJlcGxhY2VtZW50KyB0aGlzLnN1YnN0cihpbmRleCArIHJlcGxhY2VtZW50Lmxlbmd0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lc3RhbXAoKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICByZXR1cm4gKCcnXG4gICAgKyBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkpLnN1YnN0cigyKSBcbiAgICArIChwYWQoKGRhdGUuZ2V0VVRDTW9udGgoKSsxKSwyKSkgXG4gICAgKyAocGFkKGRhdGUuZ2V0VVRDRGF0ZSgpLDIpKSArICctJ1xuICAgICsgKHBhZCgoZGF0ZS5nZXRIb3VycygpKSwyKSlcbiAgICArIChwYWQoKGRhdGUuZ2V0TWludXRlcygpKSwyKSlcbiAgICArIChwYWQoKGRhdGUuZ2V0U2Vjb25kcygpKSwyKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkNhbGMge1xuICAgIC8qXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICdjYWxjJyBtb2R1bGUgZm9yIGZvcm1mb3JtIChjKSAyMDE4IFBldGVyIEhvZm1hbm5cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKi9cbiAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH07XG5cbiAgICBzdGF0aWMgcmVsX2xvZ2ljKGZ4LCBmeSkgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIGNvbW11dGF0aXZlIHJlbGF0aW9uOiB4IHkgKi9cbiAgICAgICAgaWYgKCBmeCA+IDMgfHwgZnggPCAwIHx8IGZ5ID4gMyB8fCBmeSA8IDAgKSByZXR1cm4gLTk4O1xuICAgICAgICBlbHNlIGlmICggZnggPT09IDAgfHwgZnkgPT09IDEgKSB7IFxuICAgICAgICAgICAgcmV0dXJuIGZ5OyAvLyBDMyAvVGhlb3JlbSAyXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2UgaWYgKCBmeSA9PT0gMCB8fCBmeCA9PT0gMSApIHsgXG4gICAgICAgICAgICByZXR1cm4gZng7IC8vIEMzIC9UaGVvcmVtIDJcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggZnggPT09IGZ5ICkgeyBcbiAgICAgICAgICAgIHJldHVybiBmeDsgLy8gQzUgL1RoZW9yZW0gNVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCAoZnggPT09IDIgJiYgZnkgPT09IDMpIHx8IChmeCA9PT0gMyAmJiBmeSA9PT0gMikgKSB7IFxuICAgICAgICAgICAgcmV0dXJuIDE7IC8vIEMyIC9UaGVvcmVtIDEzICsgQzMgL1RoZW9yZW0gMlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtOTk7IC8vIGVycm9yIGNvZGVcbiAgICB9O1xuICAgIHN0YXRpYyByZWwoLi4uZlZhbHMpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogU2hvcnRjdXQgZm9yIHJlbGF0aW9uIHdpdGggbiB2YXJpYWJsZXM6IHhfMSAuLi4geF9uICovXG4gICAgICAgIC8vIHZhciBmVmFscyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgIGlmIChmVmFscy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2YXIgdmFsID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gZlZhbHMpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSB0aGlzLnJlbF9sb2dpYyggdmFsLGZWYWxzW2ldICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtOTc7IC8vIGVycm9yIGNvZGVcbiAgICB9O1xuXG4gICAgc3RhdGljIGludl9sb2dpYyhmeCkgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIGludmVyc2lvbi9uZWdhdGlvbjogKHgpICovXG4gICAgICAgIHN3aXRjaCAoZngpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gMztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC05OTsgLy8gZXJyb3IgY29kZVxuICAgIH07XG4gICAgc3RhdGljIGludihmeCwgbikgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBTaG9ydGN1dCBmb3IgbiBpbnZlcnNpb25zL25lZ2F0aW9uczogKHgpICovXG4gICAgICAgIGlmIChuID4gMCkge1xuICAgICAgICAgICAgdmFyIHZhbCA9IGZ4O1xuICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPG47IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbCA9IHRoaXMuaW52X2xvZ2ljKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXMuaW52X2xvZ2ljKGZ4KTtcbiAgICAgICAgcmV0dXJuIC05NzsgLy8gZXJyb3IgY29kZVxuICAgIH07XG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBSRS1FTlRSWSBGT1JNIENBTENVTEFUSU9OXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgdUZvcm0yKGZBLCBmQiwgYWx0SW50ZXJwcj1mYWxzZSkgeyAvLyBjYWxjdWxhdGlvbiB2ZXJpZmllZCAoYm90aCBpbnRlcnByLilcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeShmYWxzZSwgZmFsc2UsIGFsdEludGVycHIsIGZBLCBmQik7XG4gICAgfTtcbiAgICBzdGF0aWMgaUZvcm0yKGZBLCBmQiwgYWx0SW50ZXJwcj1mYWxzZSkgeyAvLyBjYWxjdWxhdGlvbiB2ZXJpZmllZCAoYm90aCBpbnRlcnByLilcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeShmYWxzZSwgdHJ1ZSwgYWx0SW50ZXJwciwgZkEsIGZCKTtcbiAgICB9O1xuICAgIHN0YXRpYyB1Rm9ybTMobGFzdE9wZW4sIGZBLCBmQiwgZkMsIGFsdEludGVycHI9ZmFsc2UpIHsgLy8gY2FsY3VsYXRpb24gdmVyaWZpZWQgY2xvc2VkICYgb3BlbiAoYm90aCBpbnRlcnByLilcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeSh0cnVlLCBsYXN0T3BlbiwgYWx0SW50ZXJwciwgZkEsIGZCLCBmQyk7XG4gICAgfTtcbiAgICBzdGF0aWMgaUZvcm0zKGxhc3RPcGVuLCBmQSwgZkIsIGZDLCBhbHRJbnRlcnByPWZhbHNlKSB7IC8vIGNhbGN1bGF0aW9uIHZlcmlmaWVkIGNsb3NlZCAmIG9wZW4gKGJvdGggaW50ZXJwci4pXG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkoZmFsc2UsIGxhc3RPcGVuLCBhbHRJbnRlcnByLCBmQSwgZkIsIGZDKTtcbiAgICB9O1xuICAgIHN0YXRpYyB1Rm9ybTQoZkEsIGZCLCBmQywgZkQsIGFsdEludGVycHI9ZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeShmYWxzZSwgZmFsc2UsIGFsdEludGVycHIsIGZBLCBmQiwgZkMsIGZEKTtcbiAgICB9O1xuICAgIHN0YXRpYyBpRm9ybTQoZkEsIGZCLCBmQywgZkQsIGFsdEludGVycHI9ZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeShmYWxzZSwgdHJ1ZSwgYWx0SW50ZXJwciwgZkEsIGZCLCBmQywgZkQpO1xuICAgIH07XG4gICAgc3RhdGljIHVGb3JtNShsYXN0T3BlbiwgZkEsIGZCLCBmQywgZkQsIGZFLCBhbHRJbnRlcnByPWZhbHNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkodHJ1ZSwgbGFzdE9wZW4sIGFsdEludGVycHIsIGZBLCBmQiwgZkMsIGZELCBmRSk7XG4gICAgfTtcbiAgICBzdGF0aWMgaUZvcm01KGxhc3RPcGVuLCBmQSwgZkIsIGZDLCBmRCwgZkUsIGFsdEludGVycHI9ZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeShmYWxzZSwgbGFzdE9wZW4sIGFsdEludGVycHIsIGZBLCBmQiwgZkMsIGZELCBmRSk7XG4gICAgfTtcblxuICAgIC8vIHN0YXRpYyByZUVudHJ5KC4uLiB2YXJzKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLnJlRW50cnkoZmFsc2UsIGZhbHNlLCB2YXJzKTtcbiAgICAvLyB9XG4gICAgLy8gc3RhdGljIHJlRW50cnkocmVFdmVuLCAuLi4gdmFycykge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KHJlRXZlbiwgZmFsc2UsIHZhcnMpO1xuICAgIC8vIH1cblxuICAgIHN0YXRpYyByZUVudHJ5KHJlRXZlbiwgbGFzdE9wZW4sIGFsdEludGVycHIsIC4uLmZWYWxzKSB7XG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgZGlmZmVyZW50IHNlbGYtZXF1aXZhbGVudCByZS1lbnRyeSBGT1JNc1xuICAgICAgICAgW0FyZ3VtZW50c10gcmVFdmVuOiBldmVuIHJlLWVudHJ5LW51bWJlcj8gfCBsYXN0T3BlbjogbGFzdCB2YXJpYWJsZSBub3QgY3Jvc3NlZD8gfCBmVmFsczogdmFyaWFibGVzICgwLzEvMi8zKVxuXG4gICAgICAgICBOb3RlOiBjYWxjdWxhdGlvbiBtYW51YWxseSB2ZXJpZmllZCBmb3LigKYgXG4gICAgICAgICAtICh1Rk9STSBhMSwgcmVzMikgxpI9KCjGkngpeSlcbiAgICAgICAgIC0gKGlGT1JNIGEyLCByZXMyKSDGkijGkik9KGExeCl5XG4gICAgICAgICAtIChpRk9STSBiMSwgcmVzMykgWzJ8cnwrMV0gxpIoxpIpPSgoKMaSeCl5KXopIMaSPSgoKCgoKMaSeCl5KXopeCl5KXopXG4gICAgICAgICAtIChpRk9STSBiMiwgcmVzMykgWzJ8cnwrMV0gxpIoxpIpPSgoYjF4KXkpelxuICAgICAgICAgLSAodUZPUk0gYzEsIHJlczMpIFsyfHJ8XSDGkj0oKCgoKCjGkngpeSl6KXgpeSl6KVxuICAgICAgICAgLSAodUZPUk0gYzIsIHJlczMpIFsyfHJ8XSDGkijGkik9KChjMXgpeSl6XG4gICAgICAgICBTaG91bGQgd29yayB3aXRoIHJlc29sdXRpb25zIG9mIDQsIDUsIOKApiBidXQgbmVlZHMgdmVyaWZpY2F0aW9uLlxuXG4gICAgICAgICBNeSBiYXNpYyBvYnNlcnZhdGlvbnMgYWJvdXQgc2VsZi1lcXVpdmFsZW50IHJlLWVudHJ5IEZPUk1zOlxuICAgICAgICAgLSBFdmVyeSByZS1lbnRyeSBGT1JNIG5lZWRzIHRvIGhhdmUgYW4gZXZlbiBudW1iZXIgb2YgY3Jvc3NlcyB0byBiZSBzZWxmLWVxdWl2YWxlbnQgKHVGT1JNKTogxpIgPSAoKMaSMSkyKSAuXG4gICAgICAgICAgIFNvIHdpdGggdW5ldmVuIHJlc29sdXRpb25zLCB3ZSBhbHdheXMgbmVlZCB0byBoYXZlIGFuIGV2ZW4gcmUtZW50cnkgbnVtYmVyOiDGkiA9ICgoKCgoKMaSMSkyKTMpMSkyKTMpIC5cbiAgICAgICAgIC0gVG8gYmUgYWJsZSB0byBhbHNvIGhhdmUgdW5ldmVuIHJlLWVudHJ5IG51bWJlcnMsIGVpdGhlciB0aGUgcmVzb2x1dGlvbiBuZWVkcyB0byBiZSBldmVuXG4gICAgICAgICAgIG9yIHdlIGhhdmUgdG8gZW1iZWQgdGhlIHJlLWVudHJ5IEZPUk0gaW50byBhIG5vcm1hbCBGT1JNIHRoYXQgaXMgb25lIHJlLWVudHJ5IG9mIHRoYXQgRk9STTpcbiAgICAgICAgICAgxpIoxpIpID0gKCgoxpIxKTIpMykgPC0+ICgoKCDGkiA9ICgoKCgoKMaSMSkyKTMpMSkyKTMpIDEpMikzKSAuXG4gICAgICAgICAgIFRoZXNlIGNvbXBvc2l0aW9uYWwgcmUtZW50cnkgRk9STXMgYXJlIGlGT1JNcywgc2luY2UgdGhleSByZXNvbHZlIHRvOiAoIMaSID0gKCjGkikpICkgLlxuICAgICAgICAgLSBJZiB0aGUgb3V0bW9zdCBjcm9zcyBvZiB0aGUgRk9STSBzaG91bGQgYmUgbGVmdCBvdXQgKG9wZW4gRk9STXMpLCB0aGlzIGNhbiBvbmx5IGJlIGRvbmUgaWYgd2UgZW1iZWRcbiAgICAgICAgICAgYSBjb3JyZXNwb25kaW5nIGNsb3NlZCBGT1JNIG9mIGl0c2VsZiB0aGF0IGVpdGhlciBpcyBvciBlbWJlZHMgaXRzIHJlLWVudHJ5IEZPUk0gKGNhc2VzIGRlc2NyaWJlZCBhYm92ZSkuXG4gICAgICAgICAgIEkgYmVsaWV2ZSB0aGUgb3V0bW9zdCAob3BlbikgRk9STSBpcyBub3QgYmVpbmcgY291bnRlZCBhcyBhIHJlLWVudHJ5IGF0IGFsbCwgc2luY2UgaXQncyBtaXNzaW5nIGEgY3Jvc3MuXG5cbiAgICAgICAgIFRoaXMgYWxnb3JpdGhtIGlzIGJhc2VkIG9uIHRoZSBmb2xsb3dpbmcgcnVsZXMvcGF0dGVybnMvb2JzZXJ2YXRpb25zIGRlcml2ZWQgZnJvbSBcInVGT1JNIGlGT1JNXCI6XG4gICAgICAgICBbMV0gSWYgMSBpcyBzb21ld2hlcmUgaW4gdGhlIEZPUk0sIGl0IHdpbGwgZG9taW5hdGUgYWxsIHZhbHVlcyBpbiBzcGFjZXMgZGVlcGVyIHRoYW4gbSxcbiAgICAgICAgICAgICBzbyB0aGUgcmUtZW50cnkgaXMgb2Jzb2xldGUgYW5kIHdlIGNhbiBzdGFydCBjYWxjdWxhdGUgZnJvbSB0aGlzIHNwYWNlLiBcbiAgICAgICAgIFsyXSBJZiB0aGVyZSBhcmUgMy8yIG9yIDIvMyBwYWlycyBpbiB0aGUgRk9STSwgdGhlIGZpcnN0IHRlcm0gY2FuIGJlIHR1cm5lZCBpbnRvIDEsIHNpbmNlXG4gICAgICAgICAgICAgdGhyb3VnaCBDMiB0aGUgc2Vjb25kIHRlcm0gY2FuIGFsd2F5cyBiZSBnZW5lcmF0ZWQgaW50byBpdHMgc3BhY2UsIHdoZXJlIDIzID0gMS5cbiAgICAgICAgICAgICBUaGVuIHdlIGNhbiBwcm9jZWVkIGFzIGluICgxKS5cbiAgICAgICAgIFszXSBJZiBhbGwgdmFyaWFibGVzIGFyZSAwLCB3ZSB3aWxsIGhhdmUgZWl0aGVyIGEgdUZPUk0gb3IgaUZPUk0sIGhlbmNlIHRoZSB2YWx1ZSBvZiB0aGVcbiAgICAgICAgICAgICBGT1JNIHdpbGwgYmUgZWl0aGVyIDIgb3IgMywgZGVwZW5kaW5nIG9uIHRoZSBmb2xsb3dpbmcgY2FzZXM6XG4gICAgICAgICAgICAgLSAyOiBjbG9zZWQsICAgICAgcmVzb2x1dGlvbiBldmVuLCByZS1lbnRyeS1udW1iZXIgZXZlbi9vZGQgKGExKVxuICAgICAgICAgICAgIC0gMjogY2xvc2VkL29wZW4sIHJlc29sdXRpb24gb2RkLCAgcmUtZW50cnktbnVtYmVyIGV2ZW4gICAgIChjMSwgYzIpXG4gICAgICAgICAgICAgLSAzOiBvcGVuLCAgICAgICAgcmVzb2x1dGlvbiBldmVuLCByZS1lbnRyeS1udW1iZXIgZXZlbi9vZGQgKGEyKVxuICAgICAgICAgICAgIC0gMzogY2xvc2VkL29wZW4sIHJlc29sdXRpb24gb2RkLCAgcmUtZW50cnktbnVtYmVyIG9kZCAgICAgIChiMSwgYjIpXG4gICAgICAgICBTaW5jZSBbMV1bMl1bM10gZWxpbWluYXRlIGFsbCBvdGhlciBjYXNlcywgYWxsIHZhcmlhYmxlcyBhcmUgbm93IGVpdGhlciAyIG9yIDMgKGFuZCBtYXliZSAwcyksXG4gICAgICAgICBzbyB1c2luZyBDMiBhcyBkZXNjcmliZWQgYWJvdmUsIG9ubHkgdGhlIGxhc3Qgb2NjYXNpb24gb2YgdGhlc2UgdmFyaWFibGVzIG5lZWQgdG8gYmUgY29uc2lkZXJlZDpcbiAgICAgICAgIFs0XSBJZiB3ZSB1c2UgdUZPUk0gaUZPUk0gaW50ZXJwcmV0YXRpb24gMiAocC4xNjcpIHJlY3Vyc2l2ZSBpZGVudGl0eSAoIG1uIDwtPiAoKMaSKSk9xpIgKSwgQzIgYW5kIEMxXG4gICAgICAgICAgICAgxpIgY2FuIGJlIHNlcGFyYXRlZCBmcm9tIDIvMyBpZiB0aGVyZSBpcyBhbiBldmVuIG51bWJlciBvZiBjcm9zc2VzIChvciBub25lKSBhZnRlciB0aGUgdmFyaWFibGUuXG4gICAgICAgICAgICAgVGhlbiwgZGVwZW5kaW5nIG9uIHRoZSBGT1JNLCB3ZSBoYXZlIGVpdGhlcjpcbiAgICAgICAgICAgICBpRk9STTogKMaSPSgoxpIpKSkgMi8zIDwtPiAoMikgMi8zICBvclxuICAgICAgICAgICAgIHVGT1JNOiAgxpI9KCjGkikpIDIvMyAgPC0+ICAyIDIvM1xuICAgICAgICAgWzVdIElmIFs0XSBkb2VzIG5vdCBhcHBseSBvciB3ZSBkZWNpZGUgZm9yIHVGT1JNIGlGT1JNIGludGVycHJldGF0aW9uIDEgKHAuMTY3KTogcmVjdXJzaW9uIGluc3RydWN0aW9uIFxuICAgICAgICAgICAgICggbW4gLT4gxpI9KCjGkikpICksIHdlIHdpbGwgaGF2ZSBlaXRoZXIgdmFyaWFibGVzIG9mIDIgb3IgMyB3aGljaCB3ZSBjYW5ub3QgcmVsYXRlIHRvIMaSLCBzaW5jZVxuICAgICAgICAgICAgIHRoZXkgbmVlZCBub3QgYmUgdGhlIHNhbWUgdW5kZXRlcm1pbmVkIHZhbHVlLiBVc2luZyBjYXNlIGRpc3RpbmN0aW9uLCB3ZSBpbnRlcnByZXQgdGhlXG4gICAgICAgICAgICAgbGFzdCBvY2Nhc2lvbiBvZiAyIG9yIDMgYXMgMCBhbmQgYXMgMSwgY2FsY3VsYXRlIGV2ZXJ5dGhpbmcgd2l0aCDGkj0yIGFuZCByZWxhdGUgdGhlIHJlc3VsdHMgXG4gICAgICAgICAgICAgdXNpbmcgY29udHJhdmFsZW5jZTogKCh4KXkpKCh5KXgpIHdoaWNoIHlpZWxkcyB0aGUgZmluYWwgcmVzdWx0LlxuICAgICAgICAqL1xuICAgICAgICAvLyBjaGVjayBpZiBhcmd1bWVudHMgYXJlIGFjdHVhbGx5IGRlZmluZWRcbiAgICAgICAgaWYgKHJlRXZlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZUV2ZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGFzdE9wZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGFzdE9wZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXNFdmVuID0gKGZWYWxzLmxlbmd0aCUyID09IDApOyAvLyBldmVuIHJlc29sdXRpb24/XG4gICAgICAgIHZhciB6ZXJvcyA9IDA7IC8vIHplcm8gY291bnRlclxuICAgICAgICB2YXIgZmlyc3RVbmRlZiA9IC0xOyAvLyBjYXRjaGVzIGZpcnN0IG1uLyhtbilcblxuICAgICAgICAvLyBbM10gZGV0ZXJtaW5lIGlmIHVGT1JNIG9yIGlGT1JNXG4gICAgICAgIHZhciB1Rk9STSA9IGZhbHNlO1xuICAgICAgICB2YXIgaUZPUk0gPSBmYWxzZTtcbiAgICAgICAgaWYgKHJlc0V2ZW4pIHtcbiAgICAgICAgICAgIGlmIChsYXN0T3BlbikgaUZPUk0gPSB0cnVlO1xuICAgICAgICAgICAgZWxzZSB1Rk9STSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocmVFdmVuKSB1Rk9STSA9IHRydWU7XG4gICAgICAgICAgICBlbHNlIGlGT1JNID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGlzIDEvbSBzb21ld2hlcmUgaW4geF8xIOKApiB4X25cbiAgICAgICAgdmFyIGNhbGNmcm9tID0gLTE7XG4gICAgICAgIGZvcih2YXIgaT0wOyBpPGZWYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZnggPSBmVmFsc1tpXTsgXG5cbiAgICAgICAgICAgIGlmIChmeCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgY2FsY2Zyb20gPSBpOyAvLyBbMV0gaWYgbSBpcyBzb21ld2hlcmUsIHNldCBjYWxjdWxhdGlvbiBzdGFydCBmcm9tIHRoZXJlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmeCA9PSAwKSB6ZXJvcysrOyAvLyBbM10ga2VlcCB0cmFjayBvZiBob3cgbWFueSB6ZXJvcyB0aGVyZSBhcmVcbiAgICAgICAgICAgIGVsc2UgaWYgKGZ4ID09IDIgfHwgZnggPT0gMykgeyAvLyBbMl1cbiAgICAgICAgICAgICAgICBpZihmaXJzdFVuZGVmID09IC0xKSBmaXJzdFVuZGVmID0gaTsgLy8gaWYgdGhlcmUgaXMgYSBmaXJzdCAyL3Ugb3IgMy9pLCByZW1lbWJlclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoZnggIT0gZlZhbHNbZmlyc3RVbmRlZl0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsY2Zyb20gPSBmaXJzdFVuZGVmOyAvLyBpZiAzLzIgb3IgMi8zIHBhaXJzLCBzZXQgY2FsY3VsYXRpb24gZm9ybSBmaXJzdCB1bmRlZi4gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgaWYgKHplcm9zID09IGZWYWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gWzNdIGluIGNhc2UgYWxsIHZhcmlhYmxlcyBhcmUgbiwganVzdCByZXR1cm4gdGhlIHVuZGVmaW5lZC9pbWFnaW5hcnkgdmFsdWUgb2YgdGhlIEZPUk1cbiAgICAgICAgICAgIGlmIChpRk9STSkgcmV0dXJuIDM7XG4gICAgICAgICAgICBlbHNlIHJldHVybiAyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxjZnJvbSA+PSAwKSB7XG4gICAgICAgICAgICAvLyBbMXwyXSBpZiB0aGVyZSBpcyBhIDEvbSBzb21ld2hlcmUgaW4gdGhlIGZvcm0sIHdlIGNhbiBlYXNpbHkgY2FsY3VsYXRlIHRoZSByZXN0IGZyb20gdGhpcyBwb2ludFxuICAgICAgICAgICAgdmFyIHZhbCA9IDE7XG4gICAgICAgICAgICBmb3IodmFyIGk9Y2FsY2Zyb207IGk8ZlZhbHMubGVuZ3RoOyBpKyspIHsgICAgICBcbiAgICAgICAgICAgICAgICBpZiAobGFzdE9wZW4gJiYgaSA9PSBmVmFscy5sZW5ndGgtMSkge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSB0aGlzLnJlbCh2YWwsZlZhbHNbaV0pOyAvLyBpZiBubyBjcm9zcyBvbiBsYXN0IHZhciwgZG9uJ3QgaW52ZXJ0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgdmFsID0gdGhpcy5pbnYoIHRoaXMucmVsKHZhbCxmVmFsc1tpXSkgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAvLyB3aGF0IHJlbWFpbnMsIHdpbGwgb25seSBiZSBlaXRoZXJcbiAgICAgICAgLy8gLSAoMSkgYWxsIHZhcmlhYmxlcyBhcmUgbi8wIG9yIG1uLzIgICBvclxuICAgICAgICAvLyAtICgyKSBhbGwgdmFyaWFibGVzIGFyZSBuLzAgb3IgKG1uKS8zXG4gICAgICAgIC8vIFNvIHdlIGNhbGN1bGF0ZSBmcm9tIHRoZSBsYXN0IG9jY2FzaW9uIG9mIDIgb3IgMywgYmVjYXVzZSB3aXRoIEMyIChkZWdlbmVyYXRlKSBhbGwgZWxzZSBjYW4gYmUgaWdub3JlZFxuXG4gICAgICAgIC8vIGZvciBldmVuIGNsb3NlZCByZS1lbnRyeS1GT1JNcyB3aXRoIHVuZXZlbiByZXNvbHV0aW9uICh1Rk9STSBjMSksIHdlIG5lZWQgdG8gZG8gdGhlIGNhbGN1bGF0aW9uIHR3aWNlXG4gICAgICAgIHZhciByZXBlYXQgPSAocmVFdmVuICYmICFyZXNFdmVuICYmICFsYXN0T3Blbik/IDI6MTtcbiAgICAgIFxuICAgICAgICBmb3IodmFyIGk9KGZWYWxzLmxlbmd0aCpyZXBlYXQpLTE7IGk+PTA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gaSVmVmFscy5sZW5ndGg7IC8vIHJlcGVhdGVkIHZhcmlhYmxlIGluZGV4XG5cbiAgICAgICAgICAgIGlmIChmVmFsc1tpbmRleF0gPT0gMiB8fCBmVmFsc1tpbmRleF0gPT0gMykge1xuICAgICAgICAgICAgICAgIHZhciBpUmV2ID0gKGZWYWxzLmxlbmd0aCpyZXBlYXQpLTEgLSBpOyAvLyByZXZlcnNlIGluZGV4IHRvIGVhc2llciBjaGVjayBmb3IgaW50ZXJwcmV0YXRpb24gMiAoc2VlIG5leHQpXG5cbiAgICAgICAgICAgICAgICBpZiAoYWx0SW50ZXJwciAmJiAoKGxhc3RPcGVuICYmIGlSZXYlMj09MCkgfHwgKCFsYXN0T3BlbiAmJiBpUmV2JTI9PTEpKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1Rk9STSBpRk9STSBpbnRlcnByZXRhdGlvbiAyOiByZWN1cnNpdmUgaWRlbnRpdHkgKCDGkj0oKMaSKSkgPC0+IG1uIClcbiAgICAgICAgICAgICAgICAgICAgLy8gxpI9KCjGkikpIGNhbiBiZSBzZXBhcmF0ZWQgaWYgdGhlcmUgaXMgYW4gZXZlbiBudW1iZXIgb2YgY3Jvc3NlcyAob3Igbm9uZSkgYWZ0ZXIgdGhlIHZhcmlhYmxlOyB0aGlzIGlzIHRoZSBjYXNlIGlmIGVpdGhlcjpcbiAgICAgICAgICAgICAgICAgICAgLy8gLSAoMSkgdGhlIEZPUk0gaXMgb3BlbiBhbmQgdGhlIGJhY2t3YXJkcyB2YXJpYWJsZSBpbmRleCBpcyBldmVuICAgICAgb3JcbiAgICAgICAgICAgICAgICAgICAgLy8gLSAoMikgdGhlIEZPUk0gaXMgY2xvc2VkIGFuZCB0aGUgYmFja3dhcmRzIHZhcmlhYmxlIGluZGV4IGlzIG9kZFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIGRldGVybWluZSBpZiB0aGUgbnVtYmVyIG9mIGNyb3NzZXMgYmV0d2VlbiDGkiBhbmQgb3VyIHZhciBpcyBldmVuLCB3ZSBkaXN0aW5ndWlzaCB0d28gY2FzZXM6XG4gICAgICAgICAgICAgICAgICAgIGlmIChpRk9STSkgcmV0dXJuIHRoaXMucmVsKDMsZlZhbHNbaW5kZXhdKTsgLy8gaUZPUk06ICjGkj0oKMaSKSkpeCA8LT4gKG1uKSB4XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHRoaXMucmVsKDIsZlZhbHNbaW5kZXhdKTsgICAgICAgLy8gdUZPUk06ICDGkj0oKMaSKSl4ICA8LT4gIG1uIHhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFs1XSBpZiBldmVyeXRoaW5nIGVsc2UgZmFpbHMsIHVzZSBjYXNlIGRpc3RpbmN0aW9uOiB1Rk9STSBpRk9STSAocC45NCk7IGFsc28gYWNjb3JkaW5nIHRvOlxuICAgICAgICAgICAgICAgICAgICAvLyB1Rk9STSBpRk9STSAocC4xNjcpIGludGVycHJldGF0aW9uIDE6IHJlY3Vyc2lvbiBpbnN0cnVjdGlvbiAoIMaSPSgoxpIpKSBhbmQgbW4gbmVlZCB0byBiZSBkaWZmZXJlbnRpYXRlZClcblxuICAgICAgICAgICAgICAgICAgICB2YXIgY2FzZTAgPSAyOyAvLyByZS1lbnRyeSDGkj1tbiwgYmVjYXVzZSBvdGhlciBtbj0wXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0T3BlbiAmJiAhcmVzRXZlbiAmJiAhcmVFdmVuKSBjYXNlMCA9IHRoaXMuaW52KGNhc2UwKTsgLy8gY3Jvc3MgZm9yIGludGVncmF0ZWQgRk9STXMgd2l0aCB1bmV2ZW4gcmVzLiBpbnNpZGUgb3BlbiBGT1JNcyAoaUZPUk0gYjIpXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaj0wOyBqPChmVmFscy5sZW5ndGgqcmVwZWF0KTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZnggPSAwOyAvLyBhbGwgb3RoZXIgdmFsdWVzIHdpbGwgYmUgKGRlZ2VuZXJhdGVkIHRvKSB6ZXJvXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZlZhbHNbaW5kZXhdID09IDIpIGZ4ID0gMDsgLy8gbGFzdCBvY2Nhc2lvbiBvZiBtbi8yIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgZnggPSB0aGlzLmludigwKTsgLy8gbGFzdCBvY2Nhc2lvbiBvZiAobW4pLzMgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyAoMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0T3BlbiAmJiBqID09IGZWYWxzLmxlbmd0aC0xKSBjYXNlMCA9IHRoaXMucmVsKGNhc2UwLGZ4KTsgLy8gaWYgbm8gY3Jvc3Mgb24gbGFzdCB2YXIsIGRvbid0IGludmVydFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBjYXNlMCA9IHRoaXMuaW52KCB0aGlzLnJlbChjYXNlMCxmeCkgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgY2FzZTEgPSAyOyAvLyByZS1lbnRyeSDGkj1tbiwgYmVjYXVzZSBvdGhlciBtbj0xXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0T3BlbiAmJiAhcmVzRXZlbiAmJiAhcmVFdmVuKSBjYXNlMSA9IHRoaXMuaW52KGNhc2UxKTsgLy8gY3Jvc3MgZm9yIGludGVncmF0ZWQgRk9STXMgd2l0aCB1bmV2ZW4gcmVzLiBpbnNpZGUgb3BlbiBGT1JNcyAoaUZPUk0gYjIpXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaj0wOyBqPChmVmFscy5sZW5ndGgqcmVwZWF0KTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZnggPSAwOyAvLyBhbGwgb3RoZXIgdmFsdWVzIHdpbGwgYmUgKGRlZ2VuZXJhdGVkIHRvKSB6ZXJvXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZlZhbHNbaW5kZXhdID09IDIpIGZ4ID0gMTsgLy8gbGFzdCBvY2Nhc2lvbiBvZiBtbi8yIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgZnggPSB0aGlzLmludigxKTsgLy8gbGFzdCBvY2Nhc2lvbiBvZiAobW4pLzMgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyAoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0T3BlbiAmJiBqID09IGZWYWxzLmxlbmd0aC0xKSBjYXNlMSA9IHRoaXMucmVsKGNhc2UxLGZ4KTsgLy8gaWYgbm8gY3Jvc3Mgb24gbGFzdCB2YXIsIGRvbid0IGludmVydFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBjYXNlMSA9IHRoaXMuaW52KCB0aGlzLnJlbChjYXNlMSxmeCkgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnQoIGNhc2UwLGNhc2UxICk7IC8vIGNvbnRyYXZhbGVuY2Ugb2YgYm90aCBjYXNlc1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICByZXR1cm4gLTk5OyAvLyBlcnJvciBjb2RlXG4gICAgfTsgLy8gZW5kIHJlRW50cnkoKVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgQ09NUExFWCBGT1JNIENBTENVTEFUSU9OU1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gLSAyIFZBUklBQkxFU1xuXG4gICAgc3RhdGljIGltcGxMKGZ4LCBmeSkgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIFwiaW1wbGljYXRpb25cIjogKHgpeSAqL1xuICAgICAgICByZXR1cm4gdGhpcy5yZWwoIHRoaXMuaW52KGZ4KSxmeSApO1xuICAgIH07XG4gICAgc3RhdGljIGltcGxSKGZ4LCBmeSkge1xuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIFwiaW1wbGljYXRpb25cIjogeCh5KSAqL1xuICAgICAgICByZXR1cm4gdGhpcy5yZWwoIGZ4LHRoaXMuaW52KGZ5KSApO1xuICAgIH07XG5cbiAgICBzdGF0aWMgcHJlKGZ4LCBmeSkgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIFwicHJlc2VjdGlvblwiL1wiZGVjaXNpb25cIjogKCh4KXkpICovXG4gICAgICAgIHJldHVybiB0aGlzLmludiggdGhpcy5pbXBsTChmeCxmeSkgKTtcbiAgICB9O1xuICAgIHN0YXRpYyBwb3N0KGZ4LCBmeSkgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIFwicG9zdHNlY3Rpb25cIi9cImRlY2lzaW9uXCI6ICh4KHkpKSAqL1xuICAgICAgICByZXR1cm4gdGhpcy5pbnYoIHRoaXMuaW1wbFIoZngsZnkpICk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBjb250KGZ4LCBmeSkgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIFwiY29udHJhdmFsZW5jZVwiL1wiZWl0aGVyLW9yXCI6ICgoeCl5KSAoeCh5KSkgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMucmVsKCB0aGlzLnByZShmeCxmeSksIHRoaXMucG9zdChmeCxmeSkgKTtcbiAgICB9O1xuICAgIHN0YXRpYyBlcXVpdihmeCwgZnkpIHtcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBcImVxdWl2YWxlbmNlXCIvPzogKCAoKHgpeSkgKHgoeSkpICkgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuaW52KCB0aGlzLmNvbnQoZngsZnkpICk7XG4gICAgfTtcblxufSIsImltcG9ydCB7IGZsYXR0ZW4sIGluY2x1ZGUgfSBmcm9tICcuLi8uLi9jb21tb24vaGVscGVyJztcbmltcG9ydCBGQ2FsYyBmcm9tICcuL2ZjYWxjJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkZvcm0gZXh0ZW5kcyBGQ2FsYyB7XG4gICAgLypcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgJ2Zvcm0nIG1vZHVsZSBmb3IgZm9ybWZvcm0gKGMpIDIwMTggUGV0ZXIgSG9mbWFublxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAqL1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBGb3JtIENhbGN1bGF0aW9uXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljIGNhbGMoZm9ybSkge1xuICAgICAgICAvKiByZWN1cnNpdmUgZm9ybSBjYWxjdWxhdGlvbiAqL1xuICAgICAgICB2YXIgZnggPSAwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaGF2ZSBhIGpzb24gZm9ybSwgaWYgbm90OiB0cnkgdG8gY29udmVydFxuICAgICAgICBpZih0eXBlb2YoZm9ybSkgPT09ICdzdHJpbmcnKSBmb3JtID0gdGhpcy5wYXJzZUxpbmVhcihmb3JtKTtcblxuICAgICAgICBmb3IgKHZhciBpIGluIGZvcm0uc3BhY2UpIHtcbiAgICAgICAgICAgIGlmIChmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICdmb3JtJykge1xuICAgICAgICAgICAgICAgIGZ4ID0gdGhpcy5yZWwoIGZ4LHRoaXMuY2FsYyhmb3JtLnNwYWNlW2ldKSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZm9ybS5zcGFjZVtpXS50eXBlID09PSAnY29uc3QnKSB7XG4gICAgICAgICAgICAgICAgZnggPSB0aGlzLnJlbCggZngsZm9ybS5zcGFjZVtpXS52YWx1ZSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZm9ybS5zcGFjZVtpXS50eXBlID09PSAndmFyJykge1xuICAgICAgICAgICAgICAgIGlmKCFpc05hTihmb3JtLnNwYWNlW2ldLnZhbHVlKSkgZnggPSB0aGlzLnJlbCggZngsZm9ybS5zcGFjZVtpXS52YWx1ZSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZm9ybS5zcGFjZVtpXS50eXBlID09PSAndW5jbGVhcicpIHtcbiAgICAgICAgICAgICAgICBmeCA9IHRoaXMucmVsKCBmeCxmb3JtLnNwYWNlW2ldLnZhbHVlICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICdyZUVudHJ5Jykge1xuICAgICAgICAgICAgICAgIHZhciBuZXN0ZWRWYWxzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIGZSZUVudHJ5ID0gZm9ybS5zcGFjZVtpXTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogaW4gZlJlRW50cnkubmVzdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5lc3RlZFZhbHMucHVzaCggdGhpcy5jYWxjKGZSZUVudHJ5Lm5lc3RlZFtqXSkgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gbm90YXRpb24gcmVhZGluZzoge2RlZXBlc3QsIC4uLiwgc2hhbGxvd2VzdH0gIHVzZSBuZXN0ZWRWYWxzLnJldmVyc2UoKSB0byByZXZlcnNlIHZhcmlhYmxlc1xuICAgICAgICAgICAgICAgIGZ4ID0gdGhpcy5yZWwoIGZ4LHRoaXMucmVFbnRyeShmUmVFbnRyeS5yZUV2ZW4sIGZSZUVudHJ5Lmxhc3RPcGVuLCBmUmVFbnRyeS5hbHRJbnRlcnByZXRhdGlvbiwgLi4ubmVzdGVkVmFscykgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihmb3JtLnVubWFya2VkKSByZXR1cm4gZng7XG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXMuaW52KCBmeCApO1xuICAgIH07XG5cbiAgICBzdGF0aWMgY2FsY0FsbChmb3JtKSB7XG4gICAgICAgIC8qIEludGVycHJldCBhbmQgY2FsY3VsYXRlIGFsbCBwb3NzaWJsZSB2YWx1ZXMgZm9yIHRoZSBmb3JtICovXG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGhhdmUgYSBqc29uIGZvcm0sIGlmIG5vdDogdHJ5IHRvIGNvbnZlcnRcbiAgICAgICAgaWYodHlwZW9mKGZvcm0pID09PSAnc3RyaW5nJykgZm9ybSA9IHRoaXMucGFyc2VMaW5lYXIoZm9ybSk7XG5cbiAgICAgICAgdmFyIHZhcnMgPSB0aGlzLmdldFZhcmlhYmxlcyhmb3JtKTtcbiAgICAgICAgdmFyIHZhbHMgPSB7fTtcblxuICAgICAgICB2YXIgaW50ZXJLZXkgPSAnJyt2YXJzLmpvaW4oKSsnOyc7XG5cbiAgICAgICAgc3dpdGNoICh2YXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHZhbHNbJ1Jlc3VsdCddID0gdGhpcy5jYWxjKGZvcm0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHZhciBpbnRlcnByID0gWyB7dmFyOiB2YXJzWzBdLCB2YWx1ZTogbnVsbH0gXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhPTA7IGE8NDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGludGVycHJbMF0udmFsdWUgPSBhO1xuICAgICAgICAgICAgICAgICAgICB2YWxzW2ludGVyS2V5K2FdID0gdGhpcy5pbnRlckNhbGMoZm9ybSwgaW50ZXJwcik7Ly9bYV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJwciA9IFsge3ZhcjogdmFyc1swXSwgdmFsdWU6IG51bGx9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1sxXSwgdmFsdWU6IG51bGx9IF07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYT0wOyBhPDQ7IGErKykge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzBdLnZhbHVlID0gYTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYj0wOyBiPDQ7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclsxXS52YWx1ZSA9IGI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxzW2ludGVyS2V5K2ErJycrYl0gPSB0aGlzLmludGVyQ2FsYyhmb3JtLCBpbnRlcnByKTsvL1thLGJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJwciA9IFsge3ZhcjogdmFyc1swXSwgdmFsdWU6IG51bGx9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1sxXSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzJdLCB2YWx1ZTogbnVsbH0gXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhPTA7IGE8NDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGludGVycHJbMF0udmFsdWUgPSBhO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBiPTA7IGI8NDsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzFdLnZhbHVlID0gYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGM9MDsgYzw0OyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzJdLnZhbHVlID0gYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxzW2ludGVyS2V5K2ErJycrYisnJytjXSA9IHRoaXMuaW50ZXJDYWxjKGZvcm0sIGludGVycHIpOy8vW2EsYixjXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdmFyIGludGVycHIgPSBbIHt2YXI6IHZhcnNbMF0sIHZhbHVlOiBudWxsfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbMV0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1syXSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzNdLCB2YWx1ZTogbnVsbH0gXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhPTA7IGE8NDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGludGVycHJbMF0udmFsdWUgPSBhO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBiPTA7IGI8NDsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzFdLnZhbHVlID0gYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGM9MDsgYzw0OyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzJdLnZhbHVlID0gYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBkPTA7IGQ8NDsgZCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbM10udmFsdWUgPSBkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxzW2ludGVyS2V5K2ErJycrYisnJytjKycnK2RdID0gdGhpcy5pbnRlckNhbGMoZm9ybSwgaW50ZXJwcik7Ly9bYSxiLGMsZF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJwciA9IFsge3ZhcjogdmFyc1swXSwgdmFsdWU6IG51bGx9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1sxXSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzJdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbM10sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1s0XSwgdmFsdWU6IG51bGx9IF07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYT0wOyBhPDQ7IGErKykge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzBdLnZhbHVlID0gYTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYj0wOyBiPDQ7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclsxXS52YWx1ZSA9IGI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjPTA7IGM8NDsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclsyXS52YWx1ZSA9IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZD0wOyBkPDQ7IGQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzNdLnZhbHVlID0gZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZT0wOyBlPDQ7IGUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcls0XS52YWx1ZSA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxzW2ludGVyS2V5K2ErJycrYisnJytjKycnK2QrJycrZV0gPSB0aGlzLmludGVyQ2FsYyhmb3JtLCBpbnRlcnByKTsvL1thLGIsYyxkLGVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJwciA9IFsge3ZhcjogdmFyc1swXSwgdmFsdWU6IG51bGx9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1sxXSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzJdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbM10sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1s0XSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzVdLCB2YWx1ZTogbnVsbH0gXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhPTA7IGE8NDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGludGVycHJbMF0udmFsdWUgPSBhO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBiPTA7IGI8NDsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzFdLnZhbHVlID0gYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGM9MDsgYzw0OyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzJdLnZhbHVlID0gYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBkPTA7IGQ8NDsgZCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbM10udmFsdWUgPSBkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBlPTA7IGU8NDsgZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzRdLnZhbHVlID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGY9MDsgZjw0OyBmKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzVdLnZhbHVlID0gZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxzW2ludGVyS2V5K2ErJycrYisnJytjKycnK2QrJycrZSsnJytmXSA9IHRoaXMuaW50ZXJDYWxjKGZvcm0sIGludGVycHIpOy8vW2EsYixjLGQsZSxmXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHM7XG4gICAgfTtcblxuICAgIHN0YXRpYyBpbnRlckNhbGMoZm9ybSwgaW50ZXJwcikge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWxjKCB0aGlzLmludGVycHJldChmb3JtLCBpbnRlcnByKSApO1xuICAgIH07XG5cbiAgICBzdGF0aWMgaW50ZXJwcmV0KGZvcm0sIGludGVycHIpIHtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGhhdmUgYSBqc29uIGZvcm0sIGlmIG5vdDogdHJ5IHRvIGNvbnZlcnRcbiAgICAgICAgaWYodHlwZW9mKGZvcm0pID09PSAnc3RyaW5nJykgZm9ybSA9IHRoaXMucGFyc2VMaW5lYXIoZm9ybSk7XG5cbiAgICAgICAgdmFyIGludGVycHJGb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmb3JtKSk7IC8vIGNsb25lIGZvcm1cblxuICAgICAgICB0aGlzLnRyYXZlcnNlRm9ybShpbnRlcnByRm9ybSwgZnVuY3Rpb24oZkJyYW5jaCxkZXB0aCxzcGFjZSkge1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIHNwYWNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNwYWNlW2ldLnR5cGUgPT09ICd2YXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHYgaW4gaW50ZXJwcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwYWNlW2ldLnN5bWJvbCA9PT0gaW50ZXJwclt2XS52YXIpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNlW2ldLnZhbHVlID0gaW50ZXJwclt2XS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBpZighaXNOYU4oc3BhY2VbaV0udmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBzcGFjZVtpXS50eXBlID0gJ2NvbnN0JztcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGludGVycHJGb3JtO1xuICAgIH07XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gRXh0ZW5zaW9ucyBvZiBGQ2FsY1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHN0YXRpYyByZWxfbG9naWMoZngsIGZ5KSB7XG4gICAgICAgIGlmKHR5cGVvZihmeCkgPT09IEFycmF5IHx8IHR5cGVvZihmeSkgPT09IEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwZXIucmVsX2xvZ2ljKGZ4LCBmeSk7XG4gICAgfTtcbiAgICBzdGF0aWMgcmVsKC4uLmZWYWxzKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5yZWwoLi4uZlZhbHMpO1xuICAgIH07XG5cbiAgICBzdGF0aWMgaW52X2xvZ2ljKGZ4KSB7XG4gICAgICAgIGlmKHR5cGVvZihmeCkgPT09IEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwZXIuaW52X2xvZ2ljKGZ4KTtcbiAgICB9O1xuICAgIHN0YXRpYyBpbnYoZngsIG4pIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmludihmeCwgbik7XG4gICAgfTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBDb252ZXJzaW9uc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHN0YXRpYyBwYXJzZUxpbmVhcihmb3JtdWxhKSB7XG4gICAgICAgIC8qIENvbnZlcnRzIGZyb20gcGFyYW50aGVzaXMgbm90YXRpb24gaW50byBKU09OIHN0cmluZyBhbmQgcGFyc2VzIGFzIEpTT04gb2JqZWN0ICovXG5cbiAgICAgICAgLy8gY29udmVydCB0aGUgZm9ybXVsYSBpbnRvIGEgSlNPTiBzdHJpbmdcbiAgICAgICAgdmFyIGpzb25TdHIgPSB0aGlzLmNvbnZGcm9tTGluZWFyKGZvcm11bGEpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGpzb25TdHIpO1xuXG4gICAgICAgIC8vIHRyeSBwYXJzaW5nIHRoZSBzdHJpbmcgYXMgYSBKU09OIG9iamVjdFxuICAgICAgICB2YXIganNvbiA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UoanNvblN0cik7IC8vICQucGFyc2VKU09OKGpzb25TdHIpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnZGcm9tTGluZWFyKGZvcm11bGEpIHtcbiAgICAgICAgLy8gY2xlYW4gZm9ybXVsYSBzdHJpbmcgZnJvbSB3aGl0ZXNwYWNlXG4gICAgICAgIHZhciBjbGVhbkZvcm11bGEgPSB0aGlzLmNsZWFuTGluZWFyKGZvcm11bGEpO1xuICAgICAgICB2YXIgYXJyID0gdGhpcy5jb25zdHJ1Y3RGcm9tTGluZWFyKGNsZWFuRm9ybXVsYSk7XG4gICAgICAgIHJldHVybiBmbGF0dGVuKGFycikuam9pbignJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsZWFuTGluZWFyKGZvcm11bGEpIHtcbiAgICAgICAgdmFyIGNsZWFuRm9ybXVsYSA9ICcnO1xuICAgICAgICB2YXIgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgaW5TbGFzaCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGkgaW4gZm9ybXVsYSkge1xuICAgICAgICAgICAgdmFyIGNoYXIgPSBmb3JtdWxhW2ldO1xuICAgICAgICAgICAgaWYodHlwZW9mKGNoYXIpICE9PSBcInN0cmluZ1wiKSBicmVhazsgLy8gcHJvdG90eXBlIGhhY2tzXG5cbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnXCInICYmICFpblNsYXNoKSBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJy8nICYmICFpblF1b3RlKSBpblNsYXNoID0gIWluU2xhc2g7XG5cbiAgICAgICAgICAgIC8vIG9taXQgd2hpdGVzcGFjZSBvdXRzaWRlIG9mIHF1b3Rlc1xuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcgJykge1xuICAgICAgICAgICAgICAgIGlmIChpblF1b3RlIHx8wqBpblNsYXNoKSBjbGVhbkZvcm11bGEgKz0gY2hhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgY2xlYW5Gb3JtdWxhICs9IGNoYXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsZWFuRm9ybXVsYTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29uc3RydWN0RnJvbUxpbmVhcihmb3JtdWxhKSB7XG4gICAgICAgIC8qIENvbnZlcnRzIGZyb20gcGFyYW50aGVzaXMgbm90YXRpb24gdG8gSlNPTi1mb3JtICovXG5cbiAgICAgICAgdmFyIGNvbXBBbGwgPSBbXTtcbiAgICAgICAgdmFyIHVubWFya2VkID0gdHJ1ZTtcblxuICAgICAgICAvLyBjaGVjayBmb3IgYWxsIGVuY2xvc2luZyBvdXRlciBmb3JtXG4gICAgICAgIHZhciBjb3VudERlcHRoID0gMDtcbiAgICAgICAgdmFyIGluUXVvdGUgPSBmYWxzZTtcbiAgICAgICAgdmFyIGluU2xhc2ggPSBmYWxzZTtcbiAgICAgICAgdmFyIG91dGVyTWFya0NvdW50ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBmb3JtdWxhKSB7XG4gICAgICAgICAgICB2YXIgY2hhciA9IGZvcm11bGFbaV07XG4gICAgICAgICAgICBpZih0eXBlb2YoY2hhcikgIT09IFwic3RyaW5nXCIpIGJyZWFrOyAvLyBwcm90b3R5cGUgaGFja3NcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNoYXIpO1xuICAgICAgICAgICAgaWYgKCFpblF1b3RlICYmICFpblNsYXNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcoJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGNvdW50RGVwdGggPT0gMCkgJiYgKGkgIT0gMCkpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjb3VudERlcHRoKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09ICcpJykge1xuICAgICAgICAgICAgICAgICAgICBjb3VudERlcHRoLS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudERlcHRoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IGZvcm11bGEubGVuZ3RoLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnXCInICYmICFpblNsYXNoKSBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJy8nICYmICFpblF1b3RlKSBpblNsYXNoID0gIWluU2xhc2g7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wQWxsLnB1c2goJyAgeycpO1xuICAgICAgICBjb21wQWxsLnB1c2goJ1widHlwZVwiOlwiZm9ybVwiLCcpO1xuXG4gICAgICAgIGlmICh1bm1hcmtlZCkgY29tcEFsbC5wdXNoKCdcInVubWFya2VkXCI6dHJ1ZSwnKTtcbiAgICAgICAgZWxzZSBmb3JtdWxhID0gZm9ybXVsYS5zbGljZSgxLGZvcm11bGEubGVuZ3RoLTEpO1xuXG4gICAgICAgIGNvbXBBbGwucHVzaCgnXCJzcGFjZVwiOlsnKTsgICBcblxuXG4gICAgICAgIHZhciBwYXJ0cyA9IFtdO1xuICAgICAgICBwYXJ0cy5wdXNoKCcnKTtcblxuICAgICAgICB2YXIgY291bnREZXB0aCA9IDA7XG4gICAgICAgIHZhciBpblF1b3RlID0gZmFsc2U7XG4gICAgICAgIHZhciBpblNsYXNoID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIG9wdENoYXIgPSAn4qS0JztcbiAgICAgICAgdmFyIG5lc3RDaGFyID0gJ+KktSc7XG5cbiAgICAgICAgZm9yICh2YXIgaSBpbiBmb3JtdWxhKSB7XG4gICAgICAgICAgICB2YXIgY2hhciA9IGZvcm11bGFbaV07XG4gICAgICAgICAgICB2YXIgcHJldkNoYXIgPSBmb3JtdWxhW2ktMV07XG4gICAgICAgICAgICBpZih0eXBlb2YoY2hhcikgIT09IFwic3RyaW5nXCIpIGJyZWFrOyAvLyBwcm90b3R5cGUgaGFja3NcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNoYXIpO1xuICAgICAgICAgICAgaWYgKCFpblF1b3RlICYmICFpblNsYXNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcpJyB8fMKgY2hhciA9PT0gJ30nKSBjb3VudERlcHRoLS07XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcoJyB8fMKgY2hhciA9PT0gJ3snKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvdW50RGVwdGgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnREZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmlyc3QgKHgpIGRvZXNuJ3QgbmVlZCB0byBiZSBzZXBhcmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID4gMCkgcGFydHMucHVzaCgnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY291bnREZXB0aCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggKHByZXZDaGFyID09PSAnKScgfHzCoHByZXZDaGFyID09PSAnfScpICYmICEoY2hhciA9PT0gJyknIHx8wqBjaGFyID09PSAnfScpICkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb3VudERlcHRoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgY2hhciBmb2xsb3dzICh4KSwgc2VwYXJhdGU7IGJ1dCBub3QgaWYgaXQgaXMgYW5vdGhlciAnKSdcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50RGVwdGggPT09IDApIHBhcnRzLnB1c2goJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB1bmlxdWUgc2VwYXJhdGlvbiBjaGFycyBmb3IgcmUtZW50cnkgZm9ybXMgZm9yIGVhc3kgc3BsaXR0aW5nXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50RGVwdGggPT09IDEgJiYgY2hhciA9PT0gJywnKSBjaGFyID0gbmVzdENoYXI7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY291bnREZXB0aCA9PT0gMSAmJiBjaGFyID09PSAnfCcpIGNoYXIgPSBvcHRDaGFyO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvdW50RGVwdGggKyAnOiAnICsgY2hhcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJ1wiJyAmJiAhaW5TbGFzaCkgaW5RdW90ZSA9ICFpblF1b3RlO1xuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcvJyAmJiAhaW5RdW90ZSkgaW5TbGFzaCA9ICFpblNsYXNoO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY291bnREZXB0aCk7XG4gICAgICAgICAgICAvLyBhZGQgY2hhciB0byB0aGUgbGF0ZXN0IHB1c2hlZCBwYXJ0XG4gICAgICAgICAgICBwYXJ0c1twYXJ0cy5sZW5ndGgtMV0gKz0gY2hhcjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIGkgaW4gcGFydHMpIHtcblxuICAgICAgICAgICAgaWYgKHBhcnRzW2ldWzBdID09PSAnKCcpIHsgXG4gICAgICAgICAgICAgICAgLy8gaWYgcGFydCBpcyBmb3JtXG4gICAgICAgICAgICAgICAgLy8gcGFydHNbaV0gPSB0aGlzLmNvbnN0cnVjdEZyb21MaW5lYXIoIHBhcnRzW2ldLnNsaWNlKDEscGFydHNbaV0ubGVuZ3RoLTEpICk7XG4gICAgICAgICAgICAgICAgdmFyIGNvbXAgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyBjb21wLnB1c2goJ3snKTtcbiAgICAgICAgICAgICAgICBjb21wLnB1c2goIHRoaXMuY29uc3RydWN0RnJvbUxpbmVhcihwYXJ0c1tpXSkgKTtcbiAgICAgICAgICAgICAgICAvLyBjb21wLnB1c2goJ30nKTtcblxuICAgICAgICAgICAgICAgIHBhcnRzW2ldID0gY29tcC5zbGljZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGFydHNbaV1bMF0gPT09ICd7Jykge1xuICAgICAgICAgICAgICAgIC8vIGVsc2UgaWYgcGFydCBpcyByZS1lbnRyeSBmb3JtXG5cbiAgICAgICAgICAgICAgICB2YXIgY29tcCA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnICB7Jyk7XG4gICAgICAgICAgICAgICAgY29tcC5wdXNoKCdcInR5cGVcIjpcInJlRW50cnlcIiwnKTtcblxuICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gcGFydHNbaV0uc2xpY2UoMSxwYXJ0c1tpXS5sZW5ndGgtMSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcmVQYXJ0cyA9IGNvbnRlbnQuc3BsaXQob3B0Q2hhcik7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVQYXJ0c1swXSA9PT0gJzJyJyB8fCByZVBhcnRzWzFdID09PSAnMnInIHx8IHJlUGFydHNbMl0gPT09ICcycicpIGNvbXAucHVzaCgnXCJyZUV2ZW5cIjp0cnVlLCcpO1xuICAgICAgICAgICAgICAgIGVsc2UgY29tcC5wdXNoKCdcInJlRXZlblwiOmZhbHNlLCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlUGFydHNbMF0gPT09ICdvcGVuJyB8fCByZVBhcnRzWzFdID09PSAnb3BlbicgfHwgcmVQYXJ0c1syXSA9PT0gJ29wZW4nKSBjb21wLnB1c2goJ1wibGFzdE9wZW5cIjp0cnVlLCcpO1xuICAgICAgICAgICAgICAgIGVsc2UgY29tcC5wdXNoKCdcImxhc3RPcGVuXCI6ZmFsc2UsJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVQYXJ0c1swXSA9PT0gJ2FsdCcgfHwgcmVQYXJ0c1sxXSA9PT0gJ2FsdCcgfHwgcmVQYXJ0c1syXSA9PT0gJ2FsdCcpIGNvbXAucHVzaCgnXCJhbHRJbnRlcnByZXRhdGlvblwiOnRydWUsJyk7XG4gICAgICAgICAgICAgICAgZWxzZSBjb21wLnB1c2goJ1wiYWx0SW50ZXJwcmV0YXRpb25cIjpmYWxzZSwnKTtcblxuICAgICAgICAgICAgICAgIHZhciByZU5lc3RlZCA9IHJlUGFydHNbcmVQYXJ0cy5sZW5ndGgtMV0uc3BsaXQobmVzdENoYXIpO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVQYXJ0c1tyZVBhcnRzLmxlbmd0aC0xXSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVOZXN0ZWQpO1xuXG4gICAgICAgICAgICAgICAgY29tcC5wdXNoKCdcIm5lc3RlZFwiOlsnKTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIG4gaW4gcmVOZXN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKCB0aGlzLmNvbnN0cnVjdEZyb21MaW5lYXIocmVOZXN0ZWRbbl0pICk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuIDwgcmVOZXN0ZWQubGVuZ3RoLTEpIGNvbXAucHVzaCgnLCcpO1xuICAgICAgICAgICAgICAgICAgICAvLyByZU5lc3RlZFtuXSA9IHRoaXMuY29uc3RydWN0RnJvbUxpbmVhciggcmVOZXN0ZWRbbl0gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb21wLnB1c2goJ119ICAnKTtcblxuICAgICAgICAgICAgICAgIHBhcnRzW2ldID0gY29tcC5zbGljZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZWxzZSB3ZSBoYXZlIHZhcmlhYmxlcy9jb25zdGFudHNcblxuICAgICAgICAgICAgICAgIHZhciBjb21wID0gW107XG5cbiAgICAgICAgICAgICAgICB2YXIgdmFycyA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBpblF1b3RlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFyIGluU2xhc2ggPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogaW4gcGFydHNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoYXIgPSBwYXJ0c1tpXVtqXTtcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mKGNoYXIpICE9PSBcInN0cmluZ1wiKSBicmVhazsgLy8gcHJvdG90eXBlIGhhY2tzXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICdcIicgJiYgIWluU2xhc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluUXVvdGUgPSAhaW5RdW90ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hcmsgcXVvdGVkIHN0cmluZyB3aXRoIGEgJ+KAlicgZm9yIGlkZW50aWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5RdW90ZSkgdmFycy5wdXNoKCfigJYnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyID09PSAnLycgJiYgIWluUXVvdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluU2xhc2ggPSAhaW5TbGFzaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hcmsgdW5jbGVhciBmb3JtIHdpdGggYSAn4oC9JyBmb3IgaWRlbnRpZmljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpblNsYXNoKSB2YXJzLnB1c2goJ+KAvScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpblF1b3RlICYmICFpblNsYXNoKSB2YXJzLnB1c2goJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcXVvdGUgY2hhcnMgaW5zaWRlIHNsYXNoZXMgd2lsbCBiZSBlc2NhcGVkIHRvIG5vdCBpbnRlcmZlcmUgd2l0aCBKU09OIHN5bnRheFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICdcIicgJiYgaW5TbGFzaCkgdmFyc1t2YXJzLmxlbmd0aC0xXSArPSAnXFxcXCcgKyBjaGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB2YXJzW3ZhcnMubGVuZ3RoLTFdICs9IGNoYXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciB2IGluIHZhcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mKHZhcnNbdl0pICE9PSBcInN0cmluZ1wiKSBicmVhazsgLy8gcHJvdG90eXBlIGhhY2tzXG5cbiAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKCcgIHsnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTih2YXJzW3ZdKSAmJiB2YXJzW3ZdLmxlbmd0aCA+IDAgXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YXJzW3ZdWzBdICE9PSAn4oC9JyAmJiB2YXJzW3ZdWzBdICE9PSAn4oCWJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKCdcInR5cGVcIjpcImNvbnN0XCIsJyk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKCdcInZhbHVlXCI6Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wLnB1c2godmFyc1t2XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodmFyc1t2XVswXSA9PT0gJ+KAvScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnXCJ0eXBlXCI6XCJ1bmNsZWFyXCIsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wLnB1c2goJ1widmFsdWVcIjoyLCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKCdcInN5bWJvbFwiOicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKCdcIicrdmFyc1t2XS5zbGljZSgxKSsnXCInKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnXCJ0eXBlXCI6XCJ2YXJcIiwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnXCJ2YWx1ZVwiOlwiKlwiLCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKCdcInN5bWJvbFwiOicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodmFyc1t2XVswXSA9PT0gJ+KAlicpIGNvbXAucHVzaCgnXCInK3ZhcnNbdl0uc2xpY2UoMSkrJ1wiJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNvbXAucHVzaCgnXCInK3ZhcnNbdl0rJ1wiJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKCd9ICAnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYgPCB2YXJzLmxlbmd0aC0xKSBjb21wLnB1c2goJywnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwYXJ0c1tpXSA9IGNvbXAuc2xpY2UoKTtcbiAgICAgICAgICAgIH0gLy8gZW5kIGVsc2VcblxuICAgICAgICAgICAgY29tcEFsbC5wdXNoKHBhcnRzW2ldKTtcbiAgICAgICAgICAgIGlmIChpIDwgcGFydHMubGVuZ3RoLTEpIGNvbXBBbGwucHVzaCgnLCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcEFsbC5wdXNoKCddfSAgJyk7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBBbGw7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFJlcHJlc2VudGF0aW9uXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljIGpzb25TdHJpbmcoZm9ybSkge1xuICAgICAgICAvKiByZXR1cm4ganNvbi1yZXByZXNlbnRhdGlvbiBvZiB0aGUgc3BlY2lmaWVkIEZPUk0gKi9cbiAgICAgICAgaWYodHlwZW9mKGZvcm0pID09PSAnc3RyaW5nJykgZm9ybSA9IHRoaXMucGFyc2VMaW5lYXIoZm9ybSk7XG4gICAgXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShmb3JtLCB1bmRlZmluZWQsIDIpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBIZWxwZXJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgZ2V0VmFyaWFibGVzKGZvcm0pIHtcbiAgICAgICAgaWYodHlwZW9mKGZvcm0pID09PSAnc3RyaW5nJykgZm9ybSA9IHRoaXMucGFyc2VMaW5lYXIoZm9ybSk7XG5cbiAgICAgICAgdmFyIHZhcnMgPSBbXTtcbiAgICAgICAgdGhpcy50cmF2ZXJzZUZvcm0oZm9ybSwgZnVuY3Rpb24oZkJyYW5jaCxkZXB0aCxzcGFjZSkge1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIHNwYWNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNwYWNlW2ldLnR5cGUgPT09ICd2YXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5jbHVkZSh2YXJzLCBzcGFjZVtpXS5zeW1ib2wpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJzLnB1c2goc3BhY2VbaV0uc3ltYm9sKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YXJzLnNvcnQoKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIHRyYXZlcnNlRm9ybShmb3JtLGZ1bmMpIHtcbiAgICAgICAgLyogdHJhdmVyc2VzIG9ubHkgZm9ybS10eXBlcyBpbiBhIGpzb24gdHJlZSAqL1xuICAgICAgICBsZXQgYnJlYWtUcmF2ID0gZnVuYy5hcHBseSh0aGlzLFtmb3JtLGZvcm0uZGVwdGgsZm9ybS5zcGFjZV0pO1xuXG4gICAgICAgIGlmIChmb3JtLnNwYWNlKSB7IC8vIGZvcm0udHlwZSA9PT0gJ2Zvcm0nXG4gICAgICAgICAgICBpZiAoZm9ybS5zcGFjZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBmb3JtLnNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICdmb3JtJyB8fCBmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICdyZUVudHJ5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJyZWFrTG9vcCA9IHRoaXMudHJhdmVyc2VGb3JtKGZvcm0uc3BhY2VbaV0sZnVuYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnJlYWtMb29wKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmb3JtLm5lc3RlZCkgeyAvLyBmb3JtLnR5cGUgPT09ICdyZUVudHJ5J1xuICAgICAgICAgICAgaWYgKGZvcm0ubmVzdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIGZvcm0ubmVzdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBicmVha0xvb3AgPSB0aGlzLnRyYXZlcnNlRm9ybShmb3JtLm5lc3RlZFtpXSxmdW5jKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJyZWFrTG9vcCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgY29uc29sZS5sb2coJ0VSUk9SOiBOb3QgYSBmb3JtIScpO1xuXG4gICAgICAgIHJldHVybiBicmVha1RyYXY7XG4gICAgfTtcblxufSIsImltcG9ydCBGRm9ybSBmcm9tICcuL2Zmb3JtJztcbmltcG9ydCBEM0dyYXBoLCB7IHNhdmUgfSBmcm9tICcuLi9tb2R1bGVzL2QzLWdyYXBoJztcblxubGV0IGcxID0ge307IGxldCBnMiA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR3JhcGggZXh0ZW5kcyBGRm9ybSB7XG4gICAgLypcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAnZ3JhcGgnIG1vZHVsZSBmb3IgZm9ybWZvcm0gKGMpIDIwMTggUGV0ZXIgSG9mbWFublxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAqL1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIHRoaXMuZ3JhcGhzID0gW107XG4gIH07XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBFeHRlbnNpb25zIG9mIEZGb3JtXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBzdGF0aWMganNvblN0cmluZyhmb3JtKSB7XG4gICAgY29uc3QgZXhwYW5kZWRGb3JtID0gdGhpcy5leHBhbmRfcmVFbnRyeShmb3JtKTtcbiAgICByZXR1cm4gc3VwZXIuanNvblN0cmluZyhleHBhbmRlZEZvcm0pO1xuICB9XG5cbiAgLy8gc3RhdGljIGpzb25TdHJpbmcoZm9ybSkge1xuICAvLyAgIC8vIGlmKHR5cGVvZihfZm9ybSkgPT09ICdzdHJpbmcnKSBfZm9ybSA9IHRoaXMucGFyc2VMaW5lYXIoX2Zvcm0pO1xuXG4gIC8vICAgY29uc3QgZXhwYW5kZWRGb3JtID0gdGhpcy5leHBhbmRfcmVFbnRyeShmb3JtKTtcbiAgLy8gICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZXhwYW5kZWRGb3JtLCB1bmRlZmluZWQsIDIpO1xuICAvLyB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBHcmFwaCByZXByZXNlbnRhdGlvblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgc3RhdGljIGNyZWF0ZUdyYXBoKGdyYXBoVHlwZSwgX2Zvcm0sIG9wdGlvbnMpIHtcbiAgICAvLyBleHBhbmQgcmUtZW50cnkgc3RydWN0dXJlIHRvIGJlIHVzYWJsZSBmb3IgZ3JhcGhzXG4gICAgY29uc3QgZm9ybSA9IHRoaXMuZXhwYW5kX3JlRW50cnkoX2Zvcm0pO1xuICAgIC8vIGluaXRpYWxpemUgdGhlIGdyYXBoXG5cbiAgICBjb25zdCBncmFwaCA9IG5ldyBEM0dyYXBoKGdyYXBoVHlwZSwgZm9ybSwgb3B0aW9ucyk7XG4gICAgZ3JhcGguZm9ybXVsYSA9IF9mb3JtO1xuICAgIC8vIGdyYXBocy5wdXNoKCBuZXcgRDNHcmFwaChncmFwaFR5cGUsIGZvcm0sIG9wdGlvbnMpICk7XG5cbiAgICByZXR1cm4gZ3JhcGg7XG4gIH1cblxuICBzdGF0aWMgc2F2ZUdyYXBoKGZvcm1hdCwgc3ZnLCBuYW1lKSB7XG4gICAgc2F2ZShmb3JtYXQsIHN2ZywgbmFtZSk7XG4gIH1cblxuICBzdGF0aWMgY29uc3RydWN0TmVzdGVkKHJlRm9ybSkge1xuICAgIC8qIENvbnN0cnVjdHMgYSAocmVhbCkgbmVzdGVkIGZvcm0gc3RydWN0dXJlIGZyb20gdGhlIC5uZXN0ZWQgYXJyYXkgb2YgdGhlIG9yaWdpbmFsIHJlLWVudHJ5IGpzb24gKi9cbiAgICBsZXQgc3BhY2UgPSByZUZvcm0uc3BhY2UgPSBbXTtcbiAgICByZUZvcm0ubmVzdGVkLnJldmVyc2UoKTsgLy8gTVVTVCBiZSByZXZlcnNlZCwgYmVjYXVzZSBub3RhdGlvbjoge2RlZXBlc3QsIC4uLiwgc2hhbGxvd2VzdH1cblxuICAgIGZvcihsZXQgaSBpbiByZUZvcm0ubmVzdGVkKSB7XG4gICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgLy8gcHJlcGVuZCB0aGUgcmVFbnRyeSBuZXN0aW5nIGJlZm9yZSBldmVyeXRoaW5nIGVsc2UgaW4gdGhlIHNwYWNlXG4gICAgICAgIHNwYWNlLnVuc2hpZnQoIHt0eXBlOiAnZm9ybScsIHJlQ2hpbGQ6IHRydWUsIHNwYWNlOiBbXX0gKTsgLy8gc3BhY2UucHVzaCA8LSBvcmRlciBsYXN0XG4gICAgICAgIGNvbnN0IG5lc3RlZEZvcm0gPSBzcGFjZVswXTsgLy8gc3BhY2Vbc3BhY2UubGVuZ3RoLTFdIDwtIG9yZGVyIGxhc3RcbiAgICAgICAgXG4gICAgICAgIGlmKCFyZUZvcm0ubmVzdGVkW2ldLnVubWFya2VkKSBuZXN0ZWRGb3JtLnNwYWNlLnB1c2gocmVGb3JtLm5lc3RlZFtpXSk7XG4gICAgICAgIC8vIGVsc2UgbmVzdGVkRm9ybS5zcGFjZS5wdXNoKHJlRm9ybS5uZXN0ZWRbaV0pO1xuICAgICAgICBlbHNlIG5lc3RlZEZvcm0uc3BhY2UucHVzaCguLi5yZUZvcm0ubmVzdGVkW2ldLnNwYWNlKTsgLy8gcHVzaChyZUZvcm0ubmVzdGVkW2ldKSBmb3IgZ3JvdXBpbmdcblxuICAgICAgICBzcGFjZSA9IG5lc3RlZEZvcm0uc3BhY2U7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYoIXJlRm9ybS5uZXN0ZWRbaV0udW5tYXJrZWQpIHNwYWNlLnB1c2gocmVGb3JtLm5lc3RlZFtpXSk7XG4gICAgICAgIC8vIGVsc2Ugc3BhY2UucHVzaChyZUZvcm0ubmVzdGVkW2ldKTtcbiAgICAgICAgZWxzZSBzcGFjZS5wdXNoKC4uLnJlRm9ybS5uZXN0ZWRbaV0uc3BhY2UpOyAvLyBwdXNoKHJlRm9ybS5uZXN0ZWRbaV0pIGZvciBncm91cGluZ1xuICAgICAgfVxuICAgIH0gICAgXG5cbiAgICAvLyB3ZSBuZWVkIHRvIGFkZCBhIHBvaW50IG9mIHJlLWVudHJ5IHRvIHRoZSBsYXN0IG5lc3RlZCBmb3JtXG4gICAgLy8gZmlyc3QsIGxldHMgYXNzdW1lIHRoaXMgaXMgdGhlIGZvcm0gaXRzZWxmXG4gICAgbGV0IGxhc3ROZXN0ZWQgPSByZUZvcm07XG4gICAgXG4gICAgaWYocmVGb3JtLnNwYWNlLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIHRoZW4gbG9vcCB1bnRpbCB0aGUgbGFzdCByZUNoaWxkIGlzIGZvdW5kIGFuZCBtYWtlIHRoaXMgb3VyIGxhc3QgbmVzdGVkIGZvcm1cbiAgICAgIFxuICAgICAgd2hpbGUgKGxhc3ROZXN0ZWQuc3BhY2VbMF0uaGFzT3duUHJvcGVydHkoJ3JlQ2hpbGQnKSkgeyAgICAgICAgXG4gICAgICAgIGxhc3ROZXN0ZWQgPSBsYXN0TmVzdGVkLnNwYWNlWzBdO1xuICAgICAgICBpZiAobGFzdE5lc3RlZC5zcGFjZS5sZW5ndGggPCAxKSBicmVhazsgLy8gcHJldmVudCBlcnJvcnMgd2hlbiBub3RoaW5nIGlzIGZvdW5kXG4gICAgICB9XG4gICAgfVxuICAgIC8vIGZvciBvcGVuIHJlLWVudHJpZXMsIHdlIG5lZWQgdG8gYWRkIGFub3RoZXIgbmVzdGluZyAoc2VlIHVGT1JNIGlGT1JNIGZvciByZWZlcmVuY2UpXG4gICAgaWYocmVGb3JtLmxhc3RPcGVuKSB7XG4gICAgICBsYXN0TmVzdGVkLnNwYWNlLnVuc2hpZnQoIHt0eXBlOiAnZm9ybScsIHJlQ2hpbGQ6IHRydWUsIHNwYWNlOiBbXX0gKTtcbiAgICAgIC8vIHRoZW4gYWRkIHRoZSByZS1lbnRyeSBwb2ludCB0byBlaXRoZXIgc3BhY2VcbiAgICAgIGxhc3ROZXN0ZWQuc3BhY2VbMF0uc3BhY2UudW5zaGlmdCgge3R5cGU6ICdyZUVudHJ5UG9pbnQnfSApO1xuICAgIH1cbiAgICBlbHNlIGxhc3ROZXN0ZWQuc3BhY2UudW5zaGlmdCgge3R5cGU6ICdyZUVudHJ5UG9pbnQnfSApO1xuXG4gICAgLy8gbGFzdCwgZGVsZXRlIHRoZSBuZXN0ZWQgc3RydWN0dXJlLCB3ZSBkb24ndCBuZWVkIGl0IGFueW1vcmVcbiAgICBkZWxldGUgcmVGb3JtLm5lc3RlZDtcbiAgICByZXR1cm4gcmVGb3JtO1xuICB9XG5cbiAgc3RhdGljIGV4cGFuZF9yZUVudHJ5KF9mb3JtKSB7XG4gICAgaWYodHlwZW9mKF9mb3JtKSAhPT0gJ3N0cmluZycpIF9mb3JtID0gSlNPTi5zdHJpbmdpZnkoX2Zvcm0pO1xuICAgIGNvbnN0IHJlZkZvcm0gPSB0aGlzLnBhcnNlTGluZWFyKF9mb3JtKTtcbiAgICBsZXQgdGFyZ2V0Rm9ybSA9IHRoaXMucGFyc2VMaW5lYXIoX2Zvcm0pO1xuXG4gICAgdGhpcy50cmF2ZXJzZUZvcm0ocmVmRm9ybSwgZnVuY3Rpb24ocmVmQnJhbmNoKSB7XG5cbiAgICAgIGlmKHJlZkJyYW5jaC50eXBlID09PSAncmVFbnRyeScpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudHJhdmVyc2VGb3JtKHRhcmdldEZvcm0sIGZ1bmN0aW9uKHRhcmdldEJyYW5jaCkge1xuXG4gICAgICAgICAgaWYoSlNPTi5zdHJpbmdpZnkocmVmQnJhbmNoKSA9PT0gSlNPTi5zdHJpbmdpZnkodGFyZ2V0QnJhbmNoKSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0YXJnZXRCcmFuY2ggPSB0aGlzLmNvbnN0cnVjdE5lc3RlZCh0YXJnZXRCcmFuY2gpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRhcmdldEZvcm07XG4gIH1cblxuXG59IiwiaW1wb3J0IGNhbGMgZnJvbSAnLi9jb3JlL2ZjYWxjJztcbmltcG9ydCBmb3JtIGZyb20gJy4vY29yZS9mZm9ybSc7XG5pbXBvcnQgZ3JhcGggZnJvbSAnLi9jb3JlL2ZncmFwaCc7XG5cbi8vIGV4cG9ydCB7RkNhbGMgYXMgRkNhbGN9O1xuLy8gZXhwb3J0IHtGRm9ybSBhcyBGRm9ybX07XG4vLyBleHBvcnQge0ZHcmFwaCBhcyBGR3JhcGh9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBGR3JhcGg7XG5leHBvcnQgZGVmYXVsdCB7IGNhbGMsIGZvcm0sIGdyYXBoIH07IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuXG5pbXBvcnQgeyBzYXZlU3ZnLCBwYWQsIGdldFRpbWVzdGFtcCB9IGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXInO1xuaW1wb3J0IGNoYXJ0RmFjdG9yeSwgeyBmaXRDaGFydCwgdGV4dFNpemUsIHRleHRTdWJzY3JpcHQsIGNpcmNsZUxhYmVsIH0gZnJvbSAnLi4vLi4vY29tbW9uL2QzLWhlbHBlcic7XG5cbmltcG9ydCAnLi9kMy1zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSAnLi9kMy1zdHlsZXMuanMnO1xuXG5cbmZ1bmN0aW9uIHJlc29sdmVOb2Rlcyhyb290LCBub2Rlcykge1xuICAgIC8vIHJlc29sdmVzIGRlc2NlbmRhbnQgbm9kZXMgaW50byBmaWx0ZXJlZCBzZWxlY3Rpb25zXG4gICAgY29uc3QgbGVhdmVzID0gbm9kZXMuZmlsdGVyKGQgPT4gcm9vdC5sZWF2ZXMoKS5maWx0ZXIobCA9PiBsID09PSBkKS5wb3AoKSApXG4gICAgICAgIC5jbGFzc2VkKCdsZWFmJywgdHJ1ZSk7XG5cbiAgICBjb25zdCBzZXRzID0gbm9kZXMuZmlsdGVyKGQgPT4gZC5kYXRhLnR5cGUgPT09ICdmb3JtJyB8fMKgZC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JylcbiAgICAgICAgLmNsYXNzZWQoJ2Zvcm0nLCB0cnVlKVxuICAgIGNvbnN0IGZvcm1zID0gc2V0cy5maWx0ZXIoZCA9PiBkLmRhdGEudHlwZSA9PT0gJ2Zvcm0nKVxuICAgICAgICAuY2xhc3NlZCgnZm9ybScsIHRydWUpO1xuICAgIGNvbnN0IHJlRW50cmllcyA9IHNldHMuZmlsdGVyKGQgPT4gZC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JylcbiAgICAgICAgLmNsYXNzZWQoJ3JlRW50cnknLCB0cnVlKTtcblxuICAgIGNvbnN0IGVsZW1lbnRzID0gbm9kZXMuZmlsdGVyKGQgPT4gIShkLmRhdGEudHlwZSA9PT0gJ2Zvcm0nIHx8wqBkLmRhdGEudHlwZSA9PT0gJ3JlRW50cnknKSlcbiAgICAgICAgLmNsYXNzZWQoJ2VsZW1lbnQnLCB0cnVlKTtcbiAgICBjb25zdCB2YXJzID0gZWxlbWVudHMuZmlsdGVyKGQgPT4gZC5kYXRhLnR5cGUgPT09ICd2YXInKVxuICAgICAgICAuY2xhc3NlZCgndmFyJywgdHJ1ZSk7XG4gICAgbGV0IGNvbnN0cyA9IGVsZW1lbnRzLmZpbHRlcihkID0+IGQuZGF0YS50eXBlID09PSAnY29uc3QnKVxuICAgICAgICAuY2xhc3NlZCgnY29uc3QnLCB0cnVlKTtcbiAgICBjb25zdHMudW5tYXJrZWQgPSBlbGVtZW50cy5maWx0ZXIoZCA9PiBkLmRhdGEudmFsdWUgPT0gMCkuY2xhc3NlZCgndW5tYXJrZWQnLCB0cnVlKTtcbiAgICBjb25zdHMubWFya2VkID0gZWxlbWVudHMuZmlsdGVyKGQgPT4gZC5kYXRhLnZhbHVlID09IDEpLmNsYXNzZWQoJ21hcmtlZCcsIHRydWUpO1xuICAgIGNvbnN0cy5pbmRlZiA9IGVsZW1lbnRzLmZpbHRlcihkID0+IGQuZGF0YS52YWx1ZSA9PSAyKS5jbGFzc2VkKCdpbmRlZicsIHRydWUpO1xuICAgIGNvbnN0cy5pbWFnID0gZWxlbWVudHMuZmlsdGVyKGQgPT4gZC5kYXRhLnZhbHVlID09IDMpLmNsYXNzZWQoJ2ltYWcnLCB0cnVlKTtcblxuICAgIGNvbnN0IHVuY2xlYXIgPSBlbGVtZW50cy5maWx0ZXIoZCA9PiBkLmRhdGEudHlwZSA9PT0gJ3VuY2xlYXInKVxuICAgICAgICAuY2xhc3NlZCgndW5jbGVhcicsIHRydWUpO1xuXG4gICAgY29uc3QgcmVDaGlsZHMgPSBmb3Jtcy5maWx0ZXIoZCA9PiBkLmRhdGEucmVDaGlsZClcbiAgICAgICAgLmNsYXNzZWQoJ3JlQ2hpbGQnLCB0cnVlKTtcblxuICAgIGNvbnN0IHJlUG9pbnRzID0gZWxlbWVudHMuZmlsdGVyKGQgPT4gZC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5UG9pbnQnKVxuICAgICAgICAuY2xhc3NlZCgncmVFbnRyeVBvaW50JywgdHJ1ZSk7XG5cbiAgICByZXR1cm4gW2xlYXZlcywgc2V0cywgZm9ybXMsIHJlRW50cmllcywgcmVDaGlsZHMsIHJlUG9pbnRzLCBlbGVtZW50cywgdmFycywgY29uc3RzLCB1bmNsZWFyXTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUxpbmtzKHJvb3QsIGxpbmtzKSB7XG4gICAgLy8gcmVzb2x2ZXMgbGlua3MgYmV0d2VlbiBkZXNjZW5kYW50IG5vZGVzIGludG8gZmlsdGVyZWQgc2VsZWN0aW9uc1xuICAgIGNvbnN0IHJlQ2hpbGRMaW5rID0gbGlua3MuZmlsdGVyKGQgPT4gZC50YXJnZXQuZGF0YS5yZUNoaWxkKVxuICAgICAgICAuY2xhc3NlZCgncmVDaGlsZExpbmsnLCB0cnVlKTtcblxuICAgIGNvbnN0IHJlUG9pbnRMaW5rID0gbGlua3MuZmlsdGVyKGQgPT4gZC50YXJnZXQuZGF0YS50eXBlID09PSAncmVFbnRyeVBvaW50JylcbiAgICAgICAgLmNsYXNzZWQoJ3JlUG9pbnRMaW5rJywgdHJ1ZSk7XG5cbiAgICByZXR1cm4gW3JlQ2hpbGRMaW5rLCByZVBvaW50TGlua107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEQzR3JhcGgge1xuXG4gICAgY29uc3RydWN0b3IoZ3JhcGhUeXBlLCBkYXRhLCBvcHRzLCAuLi5hcmdzKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBiYXNpYyBzdmctc3RydWN0dXJlIGZyb20gY2hhcnRGYWN0b3J5IGFuZCBtZXJnZSBvcHRpb25zIHdpdGggY29uZmlndXJhdGlvblxuICAgICAgICBjb25zdCBwcm90byA9IGNoYXJ0RmFjdG9yeSggeyBcbiAgICAgICAgICAgIC4uLnsgbWFyZ2luOiB7IGxlZnQ6IDUwLCByaWdodDogNTAsIHRvcDogNTAsIGJvdHRvbTogNTAgfSwgXG4gICAgICAgICAgICAgICAgcGFkZGluZzogeyBsZWZ0OiAxMCwgcmlnaHQ6IDEwLCB0b3A6IDEwLCBib3R0b206IDEwIH0sXG4gICAgICAgICAgICAgICAgc3R5bGVDbGFzczogJ2dlc3RhbHQnIH0sXG4gICAgICAgICAgICAuLi5vcHRzXG4gICAgICAgIH0gKTtcblxuICAgICAgICAvLyBtZXJnZSB0aGlzIGdyYXBoIHdpdGggdGhlIGNoYXJ0IHN0cnVjdHVyZVxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHByb3RvKTtcbiAgICAgICAgLy8gY2FsY3VsYXRlIGlubmVyIGRpbWVuc2lvbnMgb2YgdGhlIHN2Zy1jaGFydFxuICAgICAgICB0aGlzLmlubmVySGVpZ2h0ID0gdGhpcy5oZWlnaHQgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b20gLSB0aGlzLnBhZGRpbmcudG9wIC0gdGhpcy5wYWRkaW5nLmJvdHRvbTtcbiAgICAgICAgdGhpcy5pbm5lcldpZHRoID0gdGhpcy53aWR0aCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodCAtIHRoaXMucGFkZGluZy5sZWZ0IC0gdGhpcy5wYWRkaW5nLnJpZ2h0O1xuXG4gICAgICAgIC8vIGNhbGwgdGhlIGFwcHJvcHJpYXRlIG1ldGhvZCB0byBidWlsZCB0aGUgZ3JhcGhcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RvcltncmFwaFR5cGVdLmNhbGwodGhpcywgZGF0YSwgLi4uYXJncyk7XG4gICAgICAgIC8vICAgdGhpc1tncmFwaFR5cGVdKGRhdGEpO1xuICAgICAgICAvLyAgIHRoaXNbZ3JhcGhUeXBlXS5jYWxsKHRoaXMsIGRhdGEsIC4uLmFyZ3MpO1xuICAgIH1cbi8vICgoKSgpKSgoKCkpKSgoKCkpKVxuLy8gKCgoYykoYSliKSkoKSgpXG4gICAgc3RhdGljIHRyZWUoZGF0YSkge1xuICAgICAgICBjb25zdCBjaGFydCA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICAvLyBjcmVhdGUgYSBkMy1oaWVyYXJjaHkgZnJvbSBvdXIgZm9ybS1qc29uXG4gICAgICAgIGNvbnN0IHJvb3QgPSBkMy5oaWVyYXJjaHkoZGF0YSwgZCA9PiBkLnNwYWNlKTtcblxuICAgICAgICAvLyBzZXQgdXAgZGVzaWduIHZhcmlhYmxlc1xuICAgICAgICBjb25zdCBkZXNpZ24gPSBzdHlsZXMudHJlZVt0aGlzLnN0eWxlQ2xhc3NdO1xuICAgICAgICBjb25zdCBbbm9kZVNpemUsIG5vZGVTZXBdID0gW2Rlc2lnbi5ub2RlU2l6ZSwgZGVzaWduLm5vZGVTZXBhcmF0aW9uXTtcbiAgICAgICAgY29uc3QgW2ZvbnRTaXplLCBmb250XSA9IFtkZXNpZ24uZm9udC5zaXplLCBkZXNpZ24uZm9udC5mYW1pbHldO1xuXG4gICAgICAgIHJvb3QuZHggPSBub2RlU2l6ZS53ICsgbm9kZVNlcC5oejtcbiAgICAgICAgcm9vdC5keSA9IHRoaXMud2lkdGggLyAocm9vdC5oZWlnaHQgKyAxKTtcblxuICAgICAgICAvLyBkZWZpbmUgdHJlZSBsYXlvdXRcbiAgICAgICAgY29uc3QgbGF5b3V0ID0gZDMudHJlZSgpXG4gICAgICAgICAgICAvLyAuc2l6ZShbIHRoaXMuaW5uZXJXaWR0aCwgLy8gLSB0aGlzLnBhZGRpbmcubGVmdCAsIFxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmlubmVySGVpZ2h0IC8vLSB0aGlzLnBhZGRpbmcudG9wXG4gICAgICAgICAgICAvLyAgICAgICBdKTtcbiAgICAgICAgICAgIC5ub2RlU2l6ZShbXG4gICAgICAgICAgICAgICAgcm9vdC5keCxcbiAgICAgICAgICAgICAgICByb290LmR5XG4gICAgICAgICAgICBdKSAvLyAoW25vZGVTaXplLncgKyBub2RlU2VwLmh6LCBub2RlU2l6ZS5oICsgbm9kZVNlcC52dF0pXG4gICAgICAgICAgICAuc2VwYXJhdGlvbigoYSxiKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEucGFyZW50ID09IGIucGFyZW50ID8gMSA6IDI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdHJlZSA9IGxheW91dChyb290KTtcblxuICAgICAgICAvLyBjb21wdXRlIG1pbi9tYXggeC12YWx1ZXNcbiAgICAgICAgbGV0IHgwID0gSW5maW5pdHk7XG4gICAgICAgIGxldCB4MSA9IC14MDtcbiAgICAgICAgdHJlZS5lYWNoKGQgPT4ge1xuICAgICAgICAgICAgaWYgKGQueCA+IHgxKSB4MSA9IGQueDtcbiAgICAgICAgICAgIGlmIChkLnggPCB4MCkgeDAgPSBkLng7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjb21wdXRlIG5ldyBoZWlnaHQgYmFzZWQgb24gdGhlIGRpZmZlcmVuY2Ugb2YgbWluL21heCB4LXZhbHVlcyBvZiB0cmVlIG5vZGVzICsgdHdpY2UgdGhlIHBhZGRpbmdcbiAgICAgICAgY29uc3Qgcm9vdFVubWFya2VkID0gcm9vdC5kYXRhLnVubWFya2VkO1xuICAgICAgICBjb25zdCBheGlzSGVpZ2h0ID0gMzA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0geDEgLSB4MCArIHRoaXMucGFkZGluZy50b3AqMiArIGF4aXNIZWlnaHQ7XG5cbiAgICAgICAgLy8gc2V0dXAgc3ZnIGNvbnRhaW5lclxuICAgICAgICB0aGlzLnN2Z1xuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy53aWR0aClcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLmhlaWdodCk7IC8vICsgcm9vdC5keCoyKVxuICAgICAgICAgICAgLy8gLnN0eWxlKCd3aWR0aCcsICcxMDAlJylcbiAgICAgICAgICAgIC8vIC5zdHlsZSgnaGVpZ2h0JywgJ2F1dG8nKTtcbiAgICAgICAgc3R5bGVzLmNsZWFyRGVmYXVsdHModGhpcy5zdmcpOyAvLyBjbGVhciBkZWZhdWx0IHN0eWxlcyBmb3Igc3ZnIGV4cG9ydFxuXG4gICAgICAgIC8vIHNldHVwIGJhc2ljIGNoYXJ0IHN0cnVjdHVyZVxuICAgICAgICBjaGFydFxuICAgICAgICAgICAgLmNsYXNzZWQoJ2dyYXBoLXRyZWUnLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dGhpcy5wYWRkaW5nLmxlZnQgKyAocm9vdC5kYXRhLnVubWFya2VkID8gLXJvb3QuZHkgOiAwKX0sJHt0aGlzLnBhZGRpbmcudG9wIC0geDB9KWApO1xuICAgICAgICAgICAgICAgIC8vIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7KHJvb3QuZGF0YS51bm1hcmtlZCA/IC1yb290LmR5IDogMCl9LCR7MH0pYCk7XG4gICAgICAgICAgICAgICAgLy8gLmF0dHIoJ3RyYW5zZm9ybScsICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHJvb3QuZGF0YS51bm1hcmtlZCkgcmV0dXJuIGB0cmFuc2xhdGUoJHstcm9vdC5keX0sJHswfSlgXG4gICAgICAgICAgICAgICAgLy8gfSk7IFxuICAgICAgICAgICAgICAgIC8vIHJvb3QuZHkgLyAzXG4gICAgICAgICAgICAgICAgLy8gLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHswfSwkezB9KWApO1xuICAgICAgICAgICAgLy8gLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0aGlzLmlubmVyV2lkdGgvMn0sJHswfSlgKTtcbiAgICAgICAgICAgIC8vIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dGhpcy5wYWRkaW5nLmxlZnR9LCR7dGhpcy5wYWRkaW5nLnRvcH0pYCk7XG4gICAgICAgIFxuICAgICAgICAvLyBhZGQgdmVydGljYWwgYXhpcyBsaW5lcyBmb3IgZGVwdGhcblxuICAgICAgICBjb25zdCByb290SGVpZ2h0cyA9IGQzLnJhbmdlKHJvb3QuaGVpZ2h0ICsgKHJvb3RVbm1hcmtlZCA/IDA6MSkpO1xuXG4gICAgICAgIHRoaXMuZGVwdGhTY2FsZSA9IGQzLnNjYWxlT3JkaW5hbCgpXG4gICAgICAgICAgICAuZG9tYWluKCByb290SGVpZ2h0cyApXG4gICAgICAgICAgICAucmFuZ2UoIHJvb3RIZWlnaHRzLm1hcChpID0+IChpKyhyb290VW5tYXJrZWQgPyAxOjApKSpyb290LmR5KSApO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGVwdGhBeGlzID0gZDMuYXhpc0JvdHRvbSgpXG4gICAgICAgICAgICAuc2NhbGUodGhpcy5kZXB0aFNjYWxlKVxuICAgICAgICAgICAgLnRpY2tTaXplSW5uZXIoLXRoaXMuaGVpZ2h0KVxuICAgICAgICAgICAgLnRpY2tTaXplT3V0ZXIoMClcbiAgICAgICAgICAgIC50aWNrUGFkZGluZyg4KVxuICAgICAgICAgICAgLnRpY2tWYWx1ZXMoIHRoaXMuZGVwdGhTY2FsZS5kb21haW4oKS5tYXAoaSA9PiBcbiAgICAgICAgICAgICAgICAodGhpcy5kZXB0aFNjYWxlLmRvbWFpbigpLmxlbmd0aCA8IDE1KSA/ICdEZXB0aCAnK2kgOiBpXG4gICAgICAgICAgICApICk7XG5cbiAgICAgICAgY29uc3QgYXhpcyA9IGNoYXJ0LmFwcGVuZCgnZycpXG4gICAgICAgICAgICAuY2xhc3NlZCgnZGVwdGhBeGlzJywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsICR7eDEgKyB0aGlzLnBhZGRpbmcuYm90dG9tfSlgKVxuICAgICAgICAgICAgLmNhbGwoZGVwdGhBeGlzKTtcbiAgICAgICAgYXhpcy5zZWxlY3QoJy5kb21haW4nKS5yZW1vdmUoKTtcbiAgICAgICAgXG5cbiAgICAgICAgLy8gYWRkIGdyb3VwcyBmb3IgbGlua3MgYW5kIG5vZGVzXG5cbiAgICAgICAgY29uc3QgbGlua3MgPSBjaGFydC5zZWxlY3RBbGwoJy5saW5rJylcbiAgICAgICAgICAgIC5kYXRhKHRyZWUubGlua3MoKSkgLy8gdHJlZS5kZXNjZW5kYW50cygpLnNsaWNlKDEpKVxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnbGluaycsIHRydWUpXG5cbiAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGFydC5zZWxlY3RBbGwoJy5ub2RlJylcbiAgICAgICAgICAgIC5kYXRhKHRyZWUuZGVzY2VuZGFudHMoKSlcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoJ25vZGUnLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnl9LCR7ZC54fSlgKTtcblxuICAgICAgICBpZiAocm9vdFVubWFya2VkKSB7XG4gICAgICAgICAgICBsaW5rcy5maWx0ZXIoZCA9PiBkLnNvdXJjZS5kZXB0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIG5vZGVzLmZpbHRlcihkID0+IGQuZGVwdGggPT09IDApXG4gICAgICAgICAgICAgICAgLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2VuZXJhdGUgbGluayBwYXJ0aXRpb24gc2VsZWN0aW9uc1xuICAgICAgICBjb25zdCBsaW5rUGFydGl0aW9ucyA9IHJlc29sdmVMaW5rcyh0cmVlLCBsaW5rcyk7XG4gICAgICAgIGNvbnN0IFtyZUNoaWxkTGluaywgcmVQb2ludExpbmtdID0gbGlua1BhcnRpdGlvbnM7XG5cbiAgICAgICAgLy8gZ2VuZXJhdGUgbm9kZSBwYXJ0aXRpb24gc2VsZWN0aW9uc1xuICAgICAgICBjb25zdCBub2RlUGFydGl0aW9ucyA9IHJlc29sdmVOb2Rlcyh0cmVlLCBub2Rlcyk7XG4gICAgICAgIGNvbnN0IFtsZWF2ZXMsIHNldHMsIGZvcm1zLCByZUVudHJpZXMsIHJlQ2hpbGRzLCByZVBvaW50cywgZWxlbWVudHMsIHZhcnMsIGNvbnN0cywgdW5jbGVhcl0gPSBub2RlUGFydGl0aW9ucztcblxuICAgICAgICAvLyBjdXJ2ZWQgbGluZSBnZW5lcmF0b3JcbiAgICAgICAgY29uc3QgbGluZSA9IGQzLmxpbmUoKS5jdXJ2ZShkMy5jdXJ2ZUJhc2lzKTtcblxuICAgICAgICBsaW5rc1xuICAgICAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2QnLCBkMy5saW5rSG9yaXpvbnRhbCgpXG4gICAgICAgICAgICAgICAgICAgIC54KGQgPT4gZC55KVxuICAgICAgICAgICAgICAgICAgICAueShkID0+IGQueCkpO1xuICAgICAgICAgICAgLy8gLmF0dHIoJ2QnLCBkID0+IGxpbmUoW1xuICAgICAgICAgICAgLy8gICAgIFtkLnRhcmdldC54LCBkLnRhcmdldC55XSxcbiAgICAgICAgICAgIC8vICAgICBbZC50YXJnZXQueCwgKGQudGFyZ2V0LnkgKyBkLnNvdXJjZS55KSAvIDJdLFxuICAgICAgICAgICAgLy8gICAgIFtkLnNvdXJjZS54LCAoZC50YXJnZXQueSArIGQuc291cmNlLnkpIC8gMl0sXG4gICAgICAgICAgICAvLyAgICAgW2Quc291cmNlLngsIGQuc291cmNlLnldXSxcbiAgICAgICAgICAgIC8vICAgICApKTtcblxuICAgICAgICAvLyBub2Rlcy5maWx0ZXIoZCA9PiAhZC5kYXRhLnVubWFya2VkKVxuICAgICAgICAvLyAgICAgLy8gLmZpbHRlcihkID0+IGQuZGF0YS5yZUNoaWxkKVxuICAgICAgICBub2Rlcy5maWx0ZXIoZCA9PiAhZC5kYXRhLnVubWFya2VkKVxuICAgICAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgICAgIC5hdHRyKCdyJywgbm9kZVNpemUudy8yKVxuICAgICAgICAgICAgLy8gLmF0dHIoJ2N4JywgZCA9PiBkLngpXG4gICAgICAgICAgICAvLyAuYXR0cignY3knLCBkID0+IGQueSk7XG4gICAgICAgIC8vIHJlUG9pbnRzLnNlbGVjdEFsbCgnY2lyY2xlJylcbiAgICAgICAgcmVQb2ludHMuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCd4Jywgbm9kZVNpemUudy8yICsgMilcbiAgICAgICAgICAgIC50ZXh0KGQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwID0gZC5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgIHdoaWxlKHAuZGF0YS50eXBlICE9PSAncmVFbnRyeScpIHtcbiAgICAgICAgICAgICAgICAgICAgcCA9IHAucGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRlciA+IDEwMDApIHJldHVybiBudWxsOyAvLyBzZWN1cml0eVxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHJlRXZlbiA9IHAuZGF0YS5yZUV2ZW4gPyAnZXZlbicgOiAnb2RkJztcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gYCR7cmVFdmVufSByZS1lbnRyeSDihJZgO1xuICAgICAgICAgICAgICAgIHJldHVybiBwLmRhdGEucmVFdmVuID8gJzJ8cnwnIDogJzJ8cnwrMSc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIC5hdHRyKCdyJywgZGVzaWduLnJhZGl1c1NtbCk7XG5cbiAgICAgICAgZWxlbWVudHMuc2VsZWN0QWxsKCdjaXJjbGUnKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCAobm9kZVNpemUudy8yKS8yKTtcblxuICAgICAgICBub2Rlc1xuICAgICAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneCcsIG5vZGVTaXplLncvMiArIDIpXG4gICAgICAgICAgICAvLyAuYXR0cigneScsIDUpXG4gICAgICAgIFxuICAgICAgICB2YXJzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgICAgICAuY2FsbCh0ZXh0U3Vic2NyaXB0KGQgPT4gZC5kYXRhLnN5bWJvbCkpO1xuICAgICAgICAgICAgLy8udGV4dChkID0+IGAke2QuZGF0YS5zeW1ib2x9YCk7XG4gICAgICAgIGNvbnN0cy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBgPSAke2QuZGF0YS52YWx1ZX1gKTtcbiAgICAgICAgdW5jbGVhci5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBgLyR7ZC5kYXRhLnN5bWJvbH0vYCk7XG5cbiAgICAgICAgc2V0cy5maWx0ZXIoZCA9PiBkLmNoaWxkcmVuKVxuICAgICAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdpbm5lcicsdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCdyJywgKG5vZGVTaXplLncvMikvMik7XG5cblxuICAgICAgICAvLyBhcHBseSBhbGwgc3R5bGUtcmVsYXRlZCBhdHRyaWJ1dGVzIHRvIHRoZSBzZWxlY3Rpb25zXG4gICAgICAgIGRlc2lnbi5hcHBseUF4aXNTdHlsZXMoYXhpcyk7XG4gICAgICAgIGRlc2lnbi5hcHBseUxpbmtTdHlsZXMobGlua3MsIGxpbmtQYXJ0aXRpb25zKTtcbiAgICAgICAgZGVzaWduLmFwcGx5Tm9kZVN0eWxlcyhub2Rlcywgbm9kZVBhcnRpdGlvbnMpO1xuXG4gICAgICAgIC8vIGZpdENoYXJ0KGNoYXJ0LCB0aGlzLnBhZGRpbmcpO1xuXG4gICAgICAgIC8vIGNoYXJ0LmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtjaGFydC5ub2RlKCkuZ2V0QkJveCgpLndpZHRoLzJ9LCR7MH0pYCk7XG5cbiAgICAgICAgLy8gZGVidWdnaW5nOlxuICAgICAgICBbdGhpcy5yb290LCB0aGlzLmxheW91dCwgdGhpcy5jaGFydCwgdGhpcy50cmVlLCB0aGlzLmRlc2lnbl0gPSBcbiAgICAgICAgICAgIFtyb290LCBsYXlvdXQsIGNoYXJ0LCB0cmVlLCBkZXNpZ25dO1xuICAgIH1cblxuICAgIHN0YXRpYyBwYWNrKGRhdGEpIHtcbiAgICAgICAgY29uc3QgY2hhcnQgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgLy8gY3JlYXRlIGEgZDMtaGllcmFyY2h5IGZyb20gb3VyIGZvcm0tanNvblxuICAgICAgICAvLyBkYXRhLmZvckVhY2goKVxuICAgICAgICBzdHlsZXMuY2xlYXJEZWZhdWx0cyh0aGlzLnN2Zyk7IC8vIGNsZWFyIGRlZmF1bHQgc3R5bGVzIGZvciBzdmcgZXhwb3J0XG5cbiAgICAgICAgY29uc3Qgcm9vdCA9IGQzLmhpZXJhcmNoeShkYXRhLCBkID0+IGQuc3BhY2UpXG4gICAgICAgICAgICAuc3VtKGQgPT4gZC5jaGlsZHJlbiA/IDAgOiAxKTtcblxuICAgICAgICAvLyBzZXQgdXAgZGVzaWduIHZhcmlhYmxlc1xuICAgICAgICBjb25zdCBkZXNpZ24gPSBzdHlsZXMucGFja1t0aGlzLnN0eWxlQ2xhc3NdO1xuICAgICAgICBjb25zdCBbcmFkaXVzLCBwYWRkaW5nXSA9IFtkZXNpZ24ucmFkaXVzLCBkZXNpZ24ucGFkZGluZ107XG4gICAgICAgIGNvbnN0IFtmb250U2l6ZSwgZm9udF0gPSBbZGVzaWduLmZvbnQuc2l6ZSwgZGVzaWduLmZvbnQuZmFtaWx5XTtcblxuICAgICAgICAvLyBkZWZpbmUgcGFjayBsYXlvdXRcbiAgICAgICAgY29uc3QgbGF5b3V0ID0gZDMucGFjaygpXG4gICAgICAgIC5wYWRkaW5nKGQgPT4ge1xuICAgICAgICAgICAgbGV0IHBhZCA9IHBhZGRpbmc7XG4gICAgICAgICAgICBpZiAoZC5kYXRhLnR5cGUgPT09ICdmb3JtJyAmJiBkLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChkLmNoaWxkcmVuWzBdLmRhdGEudHlwZSA9PT0gJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICBwYWQgPSBwYWQgKiAwLjQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZC5kYXRhLnVubWFya2VkICYmIGQuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSBwYWQgPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHBhZDtcbiAgICAgICAgfSlcbiAgICAgICAgLnJhZGl1cyhkID0+IHtcbiAgICAgICAgICAgIGxldCByYWQgPSByYWRpdXM7XG4gICAgICAgICAgICBpZih0eXBlb2YoZC5kYXRhLnN5bWJvbCkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmFkID0gdGV4dFNpemUoZC5kYXRhLnN5bWJvbCwgZm9udFNpemUsIGZvbnQpLndpZHRoIC8yO1xuICAgICAgICAgICAgICAgIGlmKGQuZGF0YS50eXBlID09PSAndW5jbGVhcicpIHJhZCArPSBwYWRkaW5nKjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGQuZGF0YS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJhZCA9IHRleHRTaXplKGQuZGF0YS52YWx1ZSsnJywgZm9udFNpemUsIGZvbnQpLndpZHRoIC8yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihkLmRhdGEuY2hpbGRyZW4gfHwgZC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5UG9pbnQnKSByYWQgPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHJhZDtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIC5zaXplKFsgdGhpcy5pbm5lcldpZHRoLCB0aGlzLmlubmVySGVpZ2h0IF0pO1xuICAgICAgICBjb25zdCBwYWNrID0gbGF5b3V0KHJvb3QpO1xuXG4gICAgICAgIC8vIGQzLnNlbGVjdChjaGFydC5ub2RlKCkucGFyZW50RWxlbWVudClcbiAgICAgICAgLy8gICAgIC5hdHRyKCd3aWR0aCcsIHBhY2sucioyICsgdGhpcy5wYWRkaW5nLmxlZnQpXG4gICAgICAgIC8vICAgICAuYXR0cignaGVpZ2h0JywgcGFjay5yKjIgKyB0aGlzLnBhZGRpbmcudG9wKTtcblxuXG4gICAgICAgIC8vIHNldHVwIGJhc2ljIGNoYXJ0IHN0cnVjdHVyZVxuICAgICAgICBjaGFydC5hdHRyKCdjbGFzcycsICdncmFwaC1wYWNrJylcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7cGFjay5yICsgdGhpcy5wYWRkaW5nLmxlZnR9LCR7cGFjay5yICsgdGhpcy5wYWRkaW5nLnRvcH0pYCk7XG5cbiAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGFydC5zZWxlY3RBbGwoJy5ub2RlJylcbiAgICAgICAgICAgIC5kYXRhKHBhY2suZGVzY2VuZGFudHMoKSlcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoJ25vZGUnLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnh9LCR7ZC55fSlgKTtcblxuICAgICAgICAvLyBnZW5lcmF0ZSBub2RlIHBhcnRpdGlvbiBzZWxlY3Rpb25zXG4gICAgICAgIGNvbnN0IG5vZGVQYXJ0aXRpb25zID0gcmVzb2x2ZU5vZGVzKHBhY2ssIG5vZGVzKTtcbiAgICAgICAgY29uc3QgW2xlYXZlcywgc2V0cywgZm9ybXMsIHJlRW50cmllcywgcmVDaGlsZHMsIHJlUG9pbnRzLCBlbGVtZW50cywgdmFycywgY29uc3RzLCB1bmNsZWFyXSA9IG5vZGVQYXJ0aXRpb25zO1xuXG4gICAgICAgIC8vIGRlZmluZSBkZXRhaWxsZWQgc3RydWN0dXJlL2xvZ2ljXG5cbiAgICAgICAgc2V0cy5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgICAgICAuYXR0cigncicsIGQgPT4gZC5yKTtcbiAgICAgICAgLy8gZm9ybXMgLy8uZmlsdGVyKGQgPT4gIWQuZGF0YS51bm1hcmtlZClcbiAgICAgICAgLy8gICAgIC8vIC5maWx0ZXIoZCA9PiBkLmRhdGEucmVDaGlsZClcbiAgICAgICAgLy8gcmVFbnRyaWVzIC8vLmZpbHRlcihkID0+ICFkLmRhdGEubGFzdE9wZW4pXG4gICAgICAgIHZhcnMuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5jYWxsKHRleHRTdWJzY3JpcHQoZCA9PiBkLmRhdGEuc3ltYm9sKSk7XG5cbiAgICAgICAgY29uc3RzLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAudGV4dChkID0+IGQuZGF0YS52YWx1ZSk7XG5cbiAgICAgICAgdW5jbGVhci5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gXG4gICAgICAgICAgICBgc2tld1goLTMwKSB0cmFuc2xhdGUoJHstKGQuciAtIHBhZGRpbmcpfSxcbiAgICAgICAgICAgICR7LSh0ZXh0U2l6ZSgneCcsZm9udFNpemUsIGZvbnQpLmhlaWdodCArIHBhZGRpbmcqMikvMn0pYClcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIGQgPT4gZC5yKjIgLSBwYWRkaW5nKjIpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgZCA9PiAodGV4dFNpemUoJ3gnLGZvbnRTaXplLCBmb250KS5oZWlnaHQgKyBwYWRkaW5nKjIpKVxuICAgICAgICB1bmNsZWFyLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAudGV4dChkID0+IGQuZGF0YS5zeW1ib2wpO1xuXG4gICAgICAgIHJlUG9pbnRzXG4gICAgICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCAxLjUpO1xuICAgICAgICAgICAgLy8gLmF0dHIoJ2N4JywgLTUpXG5cbiAgICAgICAgcmVFbnRyaWVzXG4gICAgICAgICAgICAuY2FsbChjaXJjbGVMYWJlbCggZCA9PiBkLmRhdGEucmVFdmVuID8gJzJ8cnwnIDogJzJ8cnwrMScsIGRlc2lnbi5mb250Q29udGV4dC5zaXplLCBkZXNpZ24uZm9udENvbnRleHQuZmFtaWx5ICkpO1xuICAgICAgICAgICAgLy8gLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAvLyAucmFpc2UoKVxuICAgICAgICAgICAgLy8gLnRleHQoZCA9PiBkLmRhdGEucmVFdmVuID8gJzJ8cnwnIDogJzJ8cnwrMScpO1xuXG5cbiAgICAgICAgLy8gYXBwbHkgYWxsIHN0eWxlLXJlbGF0ZWQgYXR0cmlidXRlcyB0byB0aGUgc2VsZWN0aW9uc1xuICAgICAgICBkZXNpZ24uYXBwbHlOb2RlU3R5bGVzKG5vZGVzLCBub2RlUGFydGl0aW9ucywgY2hhcnQpO1xuXG4gICAgICAgIGZpdENoYXJ0KGNoYXJ0LCB0aGlzLnBhZGRpbmcpO1xuXG4gICAgICAgIC8vIGRlYnVnZ2luZzpcbiAgICAgICAgW3RoaXMucm9vdCwgdGhpcy5sYXlvdXQsIHRoaXMuY2hhcnQsIHRoaXMucGFjaywgdGhpcy5kZXNpZ25dID0gXG4gICAgICAgICAgICBbcm9vdCwgbGF5b3V0LCBjaGFydCwgcGFjaywgZGVzaWduXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdHJlZW1hcChkYXRhKSB7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgZm9yY2UoZGF0YSkge1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjb25zdCBzYXZlID0gZnVuY3Rpb24oZm9ybWF0LCBzdmcsIG5hbWUpIHtcbiAgICAvLyBleHBvcnRzIGdyYXBocyBpbnRvIHN2Z1xuICAgIFxuICAgIG5hbWUgPSBuYW1lIHx8wqBkMy5zZWxlY3Qoc3ZnLnBhcmVudE5vZGUpLmF0dHIoJ2lkJyk7XG4gICAgY29uc3QgdGltZXN0YW1wID0gZ2V0VGltZXN0YW1wKCk7XG5cblx0dHJ5IHtcbiAgICBzd2l0Y2goZm9ybWF0KSB7XG4gICAgICBjYXNlICdzdmcnOlxuICAgICAgICBzYXZlU3ZnKHN2ZywgdGltZXN0YW1wKydfJytuYW1lKycuc3ZnJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblx0fSBjYXRjaChlKSB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdH1cbn1cbi8vIGV4cG9ydCBkZWZhdWx0IGdyYXBoOyIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCB7IGdldFJlYWxEZXB0aCwgb3BhY2l0eSwgY2lyY2xlRGFzaEFycmF5IH0gZnJvbSAnLi4vLi4vY29tbW9uL2QzLWhlbHBlcic7XG5cbi8qIENhc2NhZGluZyBEMy1TdHlsZXMgLSBieSBQZXRlciBIb2ZtYW5uLCAxMi8yMDE4ICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBnbG9iYWwgc3R5bGVzXG5cbmNvbnN0IGdsb2JhbCA9IHtcbiAgICBjb21tb246IHtcbiAgICAgICAgZm9udDogeyBmYW1pbHk6ICdzYW5zLXNlcmlmJywgXG4gICAgICAgICAgICAgICAgc2l6ZTogJzE0cHgnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgZm9udENvbnRleHQ6IHsgZmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAgJzlweCcsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yOiB7YmFzZTogZDMuY29sb3IoJ2JsYWNrJyksXG4gICAgICAgICAgICAgICAgZ3JvdW5kOiBkMy5jb2xvcignd2hpdGUnKSxcbiAgICAgICAgICAgICAgICBpbmRlZjogZDMuY29sb3IoJ3JlZCcpLFxuICAgICAgICAgICAgICAgIGxpZ2h0OiBkMy5jb2xvcignI2RkZCcpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgZGFzaGVzOiB7XG4gICAgICAgICAgICB9LFxuICAgIH1cbn07XG5nbG9iYWwuYmFzaWMgPSB7XG4gICAgLi4uZ2xvYmFsLmNvbW1vbixcbiAgICBmb250OiB7IC4uLmdsb2JhbC5jb21tb24uZm9udCxcbiAgICAgICAgICAgIGZhbWlseTogJ2dlb3JnaWEsIHNlcmlmJywgXG4gICAgICAgIH0sXG59O1xuZ2xvYmFsLmdlc3RhbHQgPSB7XG4gICAgLi4uZ2xvYmFsLmNvbW1vbixcbiAgICBmb250OiB7IC4uLmdsb2JhbC5jb21tb24uZm9udCxcbiAgICAgICAgICAgIGZhbWlseTogJ3NhbnMtc2VyaWYnLCBcbiAgICB9LFxuICAgIGNvbG9yOiB7Li4uZ2xvYmFsLmNvbW1vbi5jb2xvcixcbiAgICAgICAgICAgIHBvczogZDMuY29sb3IoJ3doaXRlJyksIFxuICAgICAgICAgICAgbmVnOiBkMy5jb2xvcignYmxhY2snKVxuICAgICAgICB9LFxufTtcbmNvbnN0IFtiYXNpYywgZ2VzdGFsdF0gPSBbZ2xvYmFsLmJhc2ljLCBnbG9iYWwuZ2VzdGFsdF07XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckRlZmF1bHRzKHN2Zykge1xuICAgIHN2Zy5hdHRyKCdzdHJva2UnLCdub25lJykuYXR0cignZmlsbCcsJ25vbmUnKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGQzLnRyZWUgc3R5bGVzOlxuXG5leHBvcnQgY29uc3QgdHJlZSA9IHtcbiAgICBjb21tb246IHtcbiAgICAgICAgbm9kZVNpemU6IHt3OiAxMC4wLCBoOiAxMC4wfSwgLy8gc2l6ZSBvZiBub2Rlc1xuICAgICAgICBub2RlU2VwYXJhdGlvbjoge2h6OiAyMCwgdnQ6IDQwfSwgLy8gc2VwYXJhdGlvbiBiZXR3ZWVuIG5vZGVzXG4gICAgICAgIGRhc2hlczoge2xpbms6ICc0cHggNnB4J1xuICAgICAgICAgICAgfSxcbiAgICB9XG59O1xuXG50cmVlLmJhc2ljID0ge1xuICAgIC4uLmJhc2ljLFxuICAgIC4uLnRyZWUuY29tbW9uLFxufTtcbnRyZWUuYmFzaWMuYXBwbHlBeGlzU3R5bGVzID0gZnVuY3Rpb24oYXhpcykge1xuXG4gICAgYXhpcy5zZWxlY3RBbGwoJy50aWNrJykuc2VsZWN0KCdsaW5lJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCB0aGlzLm5vZGVTaXplLncqMS41KVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICcjZjRmNGY0JylcbiAgICBheGlzLnNlbGVjdEFsbCgnLnRpY2snKS5zZWxlY3QoJ3RleHQnKVxuICAgICAgICAvLyAuYXR0cigneCcsIC0yKVxuICAgICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnc3RhcnQnKTtcblxufVxudHJlZS5iYXNpYy5hcHBseU5vZGVTdHlsZXMgPSBmdW5jdGlvbihub2Rlcywgbm9kZVBhcnRpdGlvbnMpIHtcbiAgICBjb25zdCBbbGVhdmVzLCBzZXRzLCBmb3JtcywgcmVFbnRyaWVzLCByZUNoaWxkcywgcmVQb2ludHMsIGVsZW1lbnRzLCB2YXJzLCBjb25zdHMsIHVuY2xlYXJdID0gbm9kZVBhcnRpdGlvbnM7XG5cbiAgICBmb3Jtcy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuZ3JvdW5kLnRvU3RyaW5nKCkpO1xuXG5cbiAgICBlbGVtZW50cy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKTtcblxuICAgIHJlRW50cmllcy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpXG4gICAgICAgIC5maWx0ZXIoZCA9PiBkLmRhdGEubGFzdE9wZW4pXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmdyb3VuZC50b1N0cmluZygpKTtcbiAgICByZUNoaWxkcy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBkID0+IGNpcmNsZURhc2hBcnJheShkLnIsIDMsIFsxXSkpO1xuICAgIHJlUG9pbnRzLnNlbGVjdEFsbCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKTtcblxuICAgIG5vZGVzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udCcsIGBub3JtYWwgJHt0aGlzLmZvbnQuc2l6ZX0gJHt0aGlzLmZvbnQuZmFtaWx5fWApXG4gICAgICAgIC5zdHlsZSgnZG9taW5hbnQtYmFzZWxpbmUnLCdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSlcblxuICAgIHNldHMuc2VsZWN0QWxsKCdjaXJjbGUuaW5uZXInKVxuICAgICAgICAvLyAuY2xhc3NlZCgnaW5uZXInKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpO1xuXG59O1xudHJlZS5iYXNpYy5hcHBseUxpbmtTdHlsZXMgPSBmdW5jdGlvbihsaW5rcywgbGlua1BhcnRpdGlvbnMpIHtcbiAgICBjb25zdCBbcmVDaGlsZExpbmssIHJlUG9pbnRMaW5rXSA9IGxpbmtQYXJ0aXRpb25zO1xuXG4gICAgbGlua3Muc2VsZWN0QWxsKCdwYXRoJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSk7XG5cbiAgICByZUNoaWxkTGluay5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UtZGFzaGFycmF5JywgdGhpcy5kYXNoZXMubGluayk7XG5cbiAgICByZVBvaW50TGluay5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UtZGFzaGFycmF5JywgdGhpcy5kYXNoZXMubGluayk7XG59O1xuXG50cmVlLmdlc3RhbHQgPSB7XG4gICAgLi4uZ2VzdGFsdCxcbiAgICAuLi50cmVlLmNvbW1vbixcbn07XG50cmVlLmdlc3RhbHQuYXBwbHlBeGlzU3R5bGVzID0gZnVuY3Rpb24oYXhpcykge1xuICAgIHRyZWUuYmFzaWMuYXBwbHlBeGlzU3R5bGVzKGF4aXMpO1xufVxudHJlZS5nZXN0YWx0LmFwcGx5Tm9kZVN0eWxlcyA9IGZ1bmN0aW9uKG5vZGVzLCBub2RlUGFydGl0aW9ucykge1xuICAgIGNvbnN0IFtsZWF2ZXMsIHNldHMsIGZvcm1zLCByZUVudHJpZXMsIHJlQ2hpbGRzLCByZVBvaW50cywgZWxlbWVudHMsIHZhcnMsIGNvbnN0cywgdW5jbGVhcl0gPSBub2RlUGFydGl0aW9ucztcblxuICAgIHRyZWUuYmFzaWMuYXBwbHlOb2RlU3R5bGVzKG5vZGVzLCBub2RlUGFydGl0aW9ucyk7XG59O1xudHJlZS5nZXN0YWx0LmFwcGx5TGlua1N0eWxlcyA9IGZ1bmN0aW9uKGxpbmtzLCBsaW5rUGFydGl0aW9ucykge1xuICAgIC8vIGNvbnN0IFtyZUNoaWxkTGlua10gPSBsaW5rUGFydGl0aW9ucztcblxuICAgIHRyZWUuYmFzaWMuYXBwbHlMaW5rU3R5bGVzKGxpbmtzLCBsaW5rUGFydGl0aW9ucyk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZDMucGFjayBzdHlsZXM6XG5cbmV4cG9ydCBjb25zdCBwYWNrID0ge1xuICAgIGNvbW1vbjoge1xuICAgICAgICByYWRpdXM6IDE0LCAvLyAxNVxuICAgICAgICBwYWRkaW5nOiAxNCwgLy8gMTJcbiAgICB9XG59O1xuXG5wYWNrLmJhc2ljID0ge1xuICAgIC4uLmJhc2ljLFxuICAgIC4uLnBhY2suY29tbW9uLFxufTtcbnBhY2suYmFzaWMuYXBwbHlOb2RlU3R5bGVzID0gZnVuY3Rpb24obm9kZXMsIG5vZGVQYXJ0aXRpb25zKSB7XG4gICAgY29uc3QgW2xlYXZlcywgc2V0cywgZm9ybXMsIHJlRW50cmllcywgcmVDaGlsZHMsIHJlUG9pbnRzLCBlbGVtZW50cywgdmFycywgY29uc3RzLCB1bmNsZWFyXSA9IG5vZGVQYXJ0aXRpb25zO1xuXG4gICAgZm9ybXMuc2VsZWN0KCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKVxuICAgICAgICAuZmlsdGVyKGQgPT4gZC5kYXRhLnVubWFya2VkKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2UnLCdub25lJyk7XG4gICAgcmVFbnRyaWVzLnNlbGVjdCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpXG4gICAgICAgIC5maWx0ZXIoZCA9PiBkLmRhdGEubGFzdE9wZW4pXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBkID0+IGNpcmNsZURhc2hBcnJheShkLnIsIDE0LCBbMi81LCAzLzVdKSApO1xuICAgICAgICAgICAgICAgIC8vIGAkeyBjYWxjQ2lyY2xlRGFzaChkLnIsIDE0LCAyLzUpIH1weFxuICAgICAgICAgICAgICAgIC8vICAkeyBjYWxjQ2lyY2xlRGFzaChkLnIsIDE0LCAzLzUpIH1weGApOyAvLyB0aGlzLmRhc2hlcy53aWRlXG4gICAgICAgICAgICAvLyAuc3R5bGUoJ3N0cm9rZScsJ25vbmUnKTtcblxuICAgIGVsZW1lbnRzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udCcsIGBub3JtYWwgJHt0aGlzLmZvbnQuc2l6ZX0gJHt0aGlzLmZvbnQuZmFtaWx5fWApXG4gICAgICAgIC5zdHlsZSgnZG9taW5hbnQtYmFzZWxpbmUnLCdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKTtcblxuICAgIHVuY2xlYXIuc2VsZWN0KCdyZWN0JylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5saWdodC50b1N0cmluZygpKTtcblxuICAgIHJlUG9pbnRzLnNlbGVjdCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsJ25vbmUnKTtcblxuICAgIGNvbnN0IHJlRXZlbkxhYmVscyA9IHJlRW50cmllcy5zZWxlY3QoJy5sYWJlbCcpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpO1xufTtcblxucGFjay5nZXN0YWx0ID0ge1xuICAgIC4uLmdlc3RhbHQsXG4gICAgLi4ucGFjay5jb21tb24sXG59O1xucGFjay5nZXN0YWx0LmludmVydEZpbGwgPSBmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuIGdldFJlYWxEZXB0aChkKSUyID8gdGhpcy5jb2xvci5wb3MudG9TdHJpbmcoKSA6IHRoaXMuY29sb3IubmVnLnRvU3RyaW5nKCk7XG59O1xucGFjay5nZXN0YWx0LmFwcGx5Tm9kZVN0eWxlcyA9IGZ1bmN0aW9uKG5vZGVzLCBub2RlUGFydGl0aW9ucywgY2hhcnQpIHtcbiAgICBjb25zdCBbbGVhdmVzLCBzZXRzLCBmb3JtcywgcmVFbnRyaWVzLCByZUNoaWxkcywgcmVQb2ludHMsIGVsZW1lbnRzLCB2YXJzLCBjb25zdHMsIHVuY2xlYXJdID0gbm9kZVBhcnRpdGlvbnM7XG5cbiAgICBjb25zdCBkZWZzID0gZDMuc2VsZWN0KGNoYXJ0Lm5vZGUoKS5wYXJlbnROb2RlKVxuICAgICAgICAuYXBwZW5kKCdkZWZzJyk7XG4gICAgY29uc3QgZ3JhZF8xID0gZGVmcy5hcHBlbmQoJ3JhZGlhbEdyYWRpZW50JykuYXR0cignaWQnLCAnZ3JhZC1pbmRlZi1vdXRpbicpXG4gICAgICAgIC5hdHRyKCdmeCcsJzIwJScpXG4gICAgICAgIC8vIC5hdHRyKCdyJywnNTUlJyk7XG4gICAgICAgIC8vIGdyYWRfMS5hcHBlbmQoJ3N0b3AnKVxuICAgICAgICAvLyAgICAgLmF0dHIoJ29mZnNldCcsJzYwJScpLmF0dHIoJ3N0b3AtY29sb3InLCB0aGlzLmNvbG9yLnBvcy50b1N0cmluZygpICk7XG4gICAgICAgIC8vIGdyYWRfMS5hcHBlbmQoJ3N0b3AnKVxuICAgICAgICAvLyAgICAgLmF0dHIoJ29mZnNldCcsJzEwMCUnKS5hdHRyKCdzdG9wLWNvbG9yJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpICk7IC8vIDwtIG5ld1xuICAgICAgICBncmFkXzEuYXBwZW5kKCdzdG9wJylcbiAgICAgICAgICAgIC5hdHRyKCdvZmZzZXQnLCc0MCUnKS5hdHRyKCdzdG9wLWNvbG9yJywgb3BhY2l0eSh0aGlzLmNvbG9yLmluZGVmLCAwLjMpLnRvU3RyaW5nKCkgKTtcbiAgICAgICAgICAgIGdyYWRfMS5hcHBlbmQoJ3N0b3AnKVxuICAgICAgICAgICAgLmF0dHIoJ29mZnNldCcsJzkwJScpLmF0dHIoJ3N0b3AtY29sb3InLCBvcGFjaXR5KHRoaXMuY29sb3IuaW5kZWYsIDAuOCkudG9TdHJpbmcoKSApO1xuICAgICAgICBncmFkXzEuYXBwZW5kKCdzdG9wJylcbiAgICAgICAgICAgIC5hdHRyKCdvZmZzZXQnLCcxMDAlJykuYXR0cignc3RvcC1jb2xvcicsIG9wYWNpdHkodGhpcy5jb2xvci5pbmRlZiwgMS4wKS50b1N0cmluZygpICk7XG4gICAgY29uc3QgZ3JhZF8yID0gZGVmcy5hcHBlbmQoJ3JhZGlhbEdyYWRpZW50JykuYXR0cignaWQnLCAnZ3JhZC1pbmRlZi1pbm91dCcpXG4gICAgICAgIC8vIC5hdHRyKCdzcHJlYWRNZXRob2QnLCdyZWZsZWN0JylcbiAgICAgICAgLmF0dHIoJ2Z4JywnMjAlJylcbiAgICAgICAgLy8gLmF0dHIoJ3InLCc1NSUnKTtcbiAgICAgICAgZ3JhZF8yLmFwcGVuZCgnc3RvcCcpXG4gICAgICAgICAgICAuYXR0cignb2Zmc2V0JywnMTAlJykuYXR0cignc3RvcC1jb2xvcicsIG9wYWNpdHkodGhpcy5jb2xvci5pbmRlZiwgMS4wKS50b1N0cmluZygpICk7XG4gICAgICAgIGdyYWRfMi5hcHBlbmQoJ3N0b3AnKVxuICAgICAgICAgICAgLmF0dHIoJ29mZnNldCcsJzUwJScpLmF0dHIoJ3N0b3AtY29sb3InLCBvcGFjaXR5KHRoaXMuY29sb3IuaW5kZWYsIDAuNikudG9TdHJpbmcoKSApO1xuICAgICAgICBncmFkXzIuYXBwZW5kKCdzdG9wJylcbiAgICAgICAgICAgIC5hdHRyKCdvZmZzZXQnLCc2MCUnKS5hdHRyKCdzdG9wLWNvbG9yJywgb3BhY2l0eSh0aGlzLmNvbG9yLmluZGVmLCAwLjQpLnRvU3RyaW5nKCkgKTtcbiAgICAgICAgZ3JhZF8yLmFwcGVuZCgnc3RvcCcpXG4gICAgICAgICAgICAuYXR0cignb2Zmc2V0JywnMTAwJScpLmF0dHIoJ3N0b3AtY29sb3InLCBvcGFjaXR5KHRoaXMuY29sb3IuaW5kZWYsIDAuMCkudG9TdHJpbmcoKSApO1xuXG4gICAgZm9ybXMuc2VsZWN0KCdjaXJjbGUnKS5maWx0ZXIoZCA9PiAhZC5kYXRhLnVubWFya2VkKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiB0aGlzLmludmVydEZpbGwoZCkpO1xuXG4gICAgcmVFbnRyaWVzLnNlbGVjdCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCBkID0+IChkLnBhcmVudC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JykgPyB0aGlzLmNvbG9yLnBvcy50b1N0cmluZygpIDogJ25vbmUnIClcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgJ3VybCgjZ3JhZC1pbmRlZi1vdXRpbiknKTtcblxuICAgIGNvbnN0IG9wZW5SZUVudHJpZXMgPSByZUVudHJpZXMuc2VsZWN0KCdjaXJjbGUnKS5maWx0ZXIoZCA9PiBkLmRhdGEubGFzdE9wZW4pXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICd1cmwoI2dyYWQtaW5kZWYtaW5vdXQpJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UtZGFzaGFycmF5JywgZCA9PiBjaXJjbGVEYXNoQXJyYXkoZC5yLCA4LCBbMi81LCAzLzVdKSApO1xuXG4gICAgb3BlblJlRW50cmllcy5maWx0ZXIoZCA9PiAoKGQucGFyZW50LmRhdGEudHlwZSAhPT0gJ3JlRW50cnknKSB8fMKgIWdldFJlYWxEZXB0aChkKSUyKSApIC8vICBcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZCA9PiB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpO1xuXG4gICAgb3BlblJlRW50cmllcy5maWx0ZXIoZCA9PiAoZC5wYXJlbnQuZGF0YS50eXBlID09PSAncmVFbnRyeScpICYmICFkLnBhcmVudC5kYXRhLmxhc3RPcGVuKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2UnLCBkID0+IHRoaXMuY29sb3IucG9zLnRvU3RyaW5nKCkpO1xuXG4gICAgICAgICAgICAvLyAuc3R5bGUoJ2ZpbGwnLCBkID0+IHtcbiAgICAgICAgICAgIC8vICAgICAvLyBpZihkLnBhcmVudC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JylcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gZ2V0UmVhbERlcHRoKGQpJTIgPyAnI2ZmZGRkZCcgOiAnI2FhMDAwMCc7XG4gICAgICAgICAgICAvLyB9KTtcblxuICAgIGVsZW1lbnRzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udCcsIGBub3JtYWwgJHt0aGlzLmZvbnQuc2l6ZX0gJHt0aGlzLmZvbnQuZmFtaWx5fWApXG4gICAgICAgIC5zdHlsZSgnZG9taW5hbnQtYmFzZWxpbmUnLCdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IHRoaXMuaW52ZXJ0RmlsbChkKSk7XG5cbiAgICB1bmNsZWFyLnNlbGVjdCgncmVjdCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsdGhpcy5jb2xvci5saWdodC50b1N0cmluZygpKTtcbiAgICB1bmNsZWFyLnNlbGVjdCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpO1xuICAgICAgICBcbiAgICByZVBvaW50cy5zZWxlY3QoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsJ25vbmUnKVxuICAgICAgICAuZmlsdGVyKGQgPT4gZC5wYXJlbnQuZGF0YS50eXBlID09PSAncmVFbnRyeScpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IucG9zLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3NjYWxlKDEuNSknKTtcbiAgICAvLyBlbGVtZW50cy5maWx0ZXIoZCA9PiAodHlwZSA9PT0gJ3ZhcicgfHwgdHlwZSA9PT0gJ2NvbnN0JyB8fCB0eXBlID09PSAndW5jbGVhcicpIClcblxuICAgIGNvbnN0IHJlRXZlbkxhYmVscyA9IHJlRW50cmllcy5zZWxlY3QoJy5sYWJlbCcpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IChkLnBhcmVudC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JyAmJiAhZC5wYXJlbnQuZGF0YS5sYXN0T3BlbikgPyB0aGlzLmNvbG9yLnBvcy50b1N0cmluZygpIDogdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKTtcbiAgICByZUVudHJpZXMuc2VsZWN0KCcubGFiZWwuaW5zaWRlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiAoZC5wYXJlbnQuZGF0YS50eXBlICE9PSAncmVFbnRyeScgJiYgZC5kYXRhLmxhc3RPcGVuKSA/IHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSA6IHRoaXMuY29sb3IucG9zLnRvU3RyaW5nKCkpO1xuXG59O1xuXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9kMy1zdHlsZXMuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9kMy1zdHlsZXMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZDMtc3R5bGVzLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfXzsiXSwic291cmNlUm9vdCI6IiJ9