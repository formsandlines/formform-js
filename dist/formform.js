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

/***/ "./node_modules/boxmodel-layout-for-d3/dist/boxmodel-d3.min.js":
/*!*********************************************************************!*\
  !*** ./node_modules/boxmodel-layout-for-d3/dist/boxmodel-d3.min.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n(__webpack_require__(/*! d3 */ "d3")):undefined}(window,function(t){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=1)}([function(n,e){n.exports=t},function(t,n,e){"use strict";e.r(n),e.d(n,"default",function(){return o});var r=e(0);function o(){var t,n,e,o,i,u,f,a,c,l=[];function h(t){return t.eachAfter(d),t.eachBefore(p),t.eachBefore(y),t}function d(o){var h=c(o).width,d=c(o).height;if(t(o)){if(h=d=0,o.children){for(var p=function(t){var r=[],o=0,i=!1,f=0,c=!0;return t.children.forEach(function(l,h){n(l)&&!i&&(i=!0),o+=l.x1-l.x0,o+=c?e(l)?u(l).left:0:Math.max(u(l).left,u(t.children[h-1]).right);var d=e(l)?u(l).right:0;(o+d>a(t)||h===t.children.length-1)&&(o+=d),o>a(t)||h===t.children.length-1?(r.push({from:f,to:h,width:o,flexHeight:i}),h<t.children.length-1&&(f=h+1,o=0,i=!1,c=!0)):c=!1}),r}(o),y=0;y<p.length;y++)p[y].height=g(o,p,y);l.push({box:o,lines:p}),h+=r.max(p,function(t){return t.width}),d+=r.sum(p,function(t){return t.height})}h+=i(o).left+i(o).right,d+=i(o).top+i(o).bottom,h=Math.max(h,f(o).width),d=Math.max(d,f(o).height)}o.x0=o.y0=0,o.x1=h,o.y1=d}function p(r){var o=r.y1;if(r.parent&&n(r)){o=m(r).height;var i=x(r.parent),f=s(r,i);o-=e(r)||0!==f?u(r).top:0;var a=(o-=e(r)||f!==i.length-1?u(r).bottom:0)-r.y1;if(t(r)&&r.children&&a>0){var c=x(r),l=a/c.length,h=!0,d=!1,p=void 0;try{for(var y,g=c[Symbol.iterator]();!(h=(y=g.next()).done);h=!0){y.value.height+=l}}catch(t){d=!0,p=t}finally{try{h||null==g.return||g.return()}finally{if(d)throw p}}}}r.y1=o}function y(t){var n=t.x1-t.x0,r=t.y1-t.y0;if(t.parent){t.y0=t.parent.y0+i(t.parent).top;var f=t.parent.children.indexOf(t);if(0===f||function(t){if(t.parent){var n=t.parent.children.indexOf(t),e=x(t.parent),r=e[s(t,e)];return r.from===n}return null}(t))t.x0+=t.parent.x0+i(t.parent).left,e(t)&&(t.x0+=u(t).left);else{var a=t.parent.children[f-1];t.x0=a.x1,t.x0+=Math.max(u(a).right,u(t).left)}}else switch(o){case"top":t.y0=0;break;case"middle":t.y0=r/2;break;case"bottom":t.y0=r}switch(o){case"top":if(t.parent){var c=s(t);t.y0+=e(t)||0!==c?u(t).top:0,t.y0+=v(t)}break;case"middle":t.parent&&(t.y0+=v(t)+m(t).height/2),t.y0-=r/2;break;case"bottom":if(t.parent){var l=x(t.parent),h=s(t,l);t.y0-=e(t)||h!==l.length-1?u(t).bottom:0,t.y0+=v(t,!0)}t.y0-=r}t.x1=t.x0+n,t.y1=t.y0+r}function g(t,n,r){for(var o=n[r],i=0,a=o.from;a<=o.to;a++){var c=t.children[a],l=c.y1-c.y0,h=(e(c)||0!==r?u(c).top:0)+(e(c)||r!==n.length-1?u(c).bottom:0);l+h>i&&(i=l+h)}return Math.max(i,f(t).height)}function x(t){return l[l.findIndex(function(n){return n.box===t})].lines}function s(t,n){if(t.parent){var e=arguments.length>1?n:x(t.parent),r=t.parent.children.indexOf(t);return e.findIndex(function(t){return r>=t.from&&r<=t.to})}return null}function m(t){var n=x(t.parent);return n[s(t,n)]}function v(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t.parent){var e=x(t.parent),o=s(t,e),i=n?o:o-1;return r.sum(e.filter(function(t,n){return n<=i}),function(t){return t.height})}return null}function b(t){return function(){return t}}return h.vAlign=function(t){return arguments.length?(o=t,h):o},h.edgeMargins=function(t){return arguments.length?(e="function"==typeof t?t:b(+t),h):e},h.isContainer=function(n){return arguments.length?(t="function"==typeof n?n:b(+n),h):t},h.spanHeight=function(t){return arguments.length?(n="function"==typeof t?t:b(+t),h):n},h.padding=function(t){return arguments.length?(i="function"==typeof t?t:b(+t),h):i},h.margin=function(t){return arguments.length?(u="function"==typeof t?t:b(+t),h):u},h.nodeSize=function(t){return arguments.length?(c="function"==typeof t?t:b(+t),h):c},h.minContainerSize=function(t){return arguments.length?(f="function"==typeof t?t:b(+t),h):f},h.maxLineWidth=function(t){return arguments.length?(a="function"==typeof t?t:b(+t),h):a},h}}]).default});
//# sourceMappingURL=boxmodel-d3.min.js.map

/***/ }),

/***/ "./node_modules/canvg/dist/browser/canvg.min.js":
/*!******************************************************!*\
  !*** ./node_modules/canvg/dist/browser/canvg.min.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! rgbcolor */ "./node_modules/rgbcolor/index.js"),__webpack_require__(/*! stackblur-canvas */ "./node_modules/stackblur-canvas/src/stackblur.js")):undefined}(this,function(m,d){"use strict";var t;return m=m&&m.hasOwnProperty("default")?m.default:m,d=d&&d.hasOwnProperty("default")?d.default:d,function(t){var u;t.exports;(u=window).DOMParser=window.DOMParser;function p(){return document.createElement("canvas")}var f,c=function(t,e,i){if(null!=t||null!=e||null!=i){var n=function(s){var A={opts:s,FRAMERATE:30,MAX_VIRTUAL_PIXELS:3e4,rootEmSize:12,emSize:12,log:function(t){}};1==A.opts.log&&"undefined"!=typeof console&&(A.log=function(t){console.log(t)});A.init=function(t){var e=0;A.UniqueId=function(){return"canvg"+ ++e},A.Definitions={},A.Styles={},A.StylesSpecificity={},A.Animations=[],A.Images=[],A.ctx=t,A.ViewPort=new function(){this.viewPorts=[],this.Clear=function(){this.viewPorts=[]},this.SetCurrent=function(t,e){this.viewPorts.push({width:t,height:e})},this.RemoveCurrent=function(){this.viewPorts.pop()},this.Current=function(){return this.viewPorts[this.viewPorts.length-1]},this.width=function(){return this.Current().width},this.height=function(){return this.Current().height},this.ComputeSize=function(t){return null!=t&&"number"==typeof t?t:"x"==t?this.width():"y"==t?this.height():Math.sqrt(Math.pow(this.width(),2)+Math.pow(this.height(),2))/Math.sqrt(2)}}},A.init(),A.ImagesLoaded=function(){for(var t=0;t<A.Images.length;t++)if(!A.Images[t].loaded)return!1;return!0},A.trim=function(t){return t.replace(/^\s+|\s+$/g,"")},A.compressSpaces=function(t){return t.replace(/(?!\u3000)\s+/gm," ")},A.ajax=function(t){var e;return(e=u.XMLHttpRequest?new u.XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"))?(e.open("GET",t,!1),e.send(null),e.responseText):null},A.parseXml=function(e){if("undefined"!=typeof Windows&&void 0!==Windows.Data&&void 0!==Windows.Data.Xml){var t=new Windows.Data.Xml.Dom.XmlDocument,i=new Windows.Data.Xml.Dom.XmlLoadSettings;return i.prohibitDtd=!1,t.loadXml(e,i),t}if(!u.DOMParser){e=e.replace(/<!DOCTYPE svg[^>]*>/,"");var t=new ActiveXObject("Microsoft.XMLDOM");return t.async="false",t.loadXML(e),t}try{var n=s.xmldom?new u.DOMParser(s.xmldom):new u.DOMParser;return n.parseFromString(e,"image/svg+xml")}catch(t){return(n=s.xmldom?new u.DOMParser(s.xmldom):new u.DOMParser).parseFromString(e,"text/xml")}},A.Property=function(t,e){this.name=t,this.value=e},A.Property.prototype.getValue=function(){return this.value},A.Property.prototype.hasValue=function(){return null!=this.value&&""!==this.value},A.Property.prototype.numValue=function(){if(!this.hasValue())return 0;var t=parseFloat(this.value);return(this.value+"").match(/%$/)&&(t/=100),t},A.Property.prototype.valueOrDefault=function(t){return this.hasValue()?this.value:t},A.Property.prototype.numValueOrDefault=function(t){return this.hasValue()?this.numValue():t},A.Property.prototype.addOpacity=function(t){var e=this.value;if(null!=t.value&&""!=t.value&&"string"==typeof this.value){var i=new m(this.value);i.ok&&(e="rgba("+i.r+", "+i.g+", "+i.b+", "+t.numValue()+")")}return new A.Property(this.name,e)},A.Property.prototype.getDefinition=function(){var t=this.value.match(/#([^\)'"]+)/);return t&&(t=t[1]),t||(t=this.value),A.Definitions[t]},A.Property.prototype.isUrlDefinition=function(){return 0==this.value.indexOf("url(")},A.Property.prototype.getFillStyleDefinition=function(t,e){var i=this.getDefinition();if(null!=i&&i.createGradient)return i.createGradient(A.ctx,t,e);if(null!=i&&i.createPattern){if(i.getHrefAttribute().hasValue()){var n=i.attribute("patternTransform");i=i.getHrefAttribute().getDefinition(),n.hasValue()&&(i.attribute("patternTransform",!0).value=n.value)}return i.createPattern(A.ctx,t)}return null},A.Property.prototype.getDPI=function(t){return 96},A.Property.prototype.getREM=function(t){return A.rootEmSize},A.Property.prototype.getEM=function(t){return A.emSize},A.Property.prototype.getUnits=function(){var t=this.value+"";return t.replace(/[0-9\.\-]/g,"")},A.Property.prototype.isPixels=function(){if(!this.hasValue())return!1;var t=this.value+"";return!!t.match(/px$/)||!!t.match(/^[0-9]+$/)},A.Property.prototype.toPixels=function(t,e){if(!this.hasValue())return 0;var i=this.value+"";if(i.match(/rem$/))return this.numValue()*this.getREM(t);if(i.match(/em$/))return this.numValue()*this.getEM(t);if(i.match(/ex$/))return this.numValue()*this.getEM(t)/2;if(i.match(/px$/))return this.numValue();if(i.match(/pt$/))return this.numValue()*this.getDPI(t)*(1/72);if(i.match(/pc$/))return 15*this.numValue();if(i.match(/cm$/))return this.numValue()*this.getDPI(t)/2.54;if(i.match(/mm$/))return this.numValue()*this.getDPI(t)/25.4;if(i.match(/in$/))return this.numValue()*this.getDPI(t);if(i.match(/%$/))return this.numValue()*A.ViewPort.ComputeSize(t);var n=this.numValue();return e&&n<1?n*A.ViewPort.ComputeSize(t):n},A.Property.prototype.toMilliseconds=function(){if(!this.hasValue())return 0;var t=this.value+"";return t.match(/s$/)?1e3*this.numValue():(t.match(/ms$/),this.numValue())},A.Property.prototype.toRadians=function(){if(!this.hasValue())return 0;var t=this.value+"";return t.match(/deg$/)?this.numValue()*(Math.PI/180):t.match(/grad$/)?this.numValue()*(Math.PI/200):t.match(/rad$/)?this.numValue():this.numValue()*(Math.PI/180)};var t={baseline:"alphabetic","before-edge":"top","text-before-edge":"top",middle:"middle",central:"middle","after-edge":"bottom","text-after-edge":"bottom",ideographic:"ideographic",alphabetic:"alphabetic",hanging:"hanging",mathematical:"alphabetic"};return A.Property.prototype.toTextBaseline=function(){return this.hasValue()?t[this.value]:null},A.Font=new function(){this.Styles="normal|italic|oblique|inherit",this.Variants="normal|small-caps|inherit",this.Weights="normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit",this.CreateFont=function(t,e,i,n,s,a){var r=null!=a?this.Parse(a):this.CreateFont("","","","","",A.ctx.font);return{fontFamily:s=s||r.fontFamily,fontSize:n||r.fontSize,fontStyle:t||r.fontStyle,fontWeight:i||r.fontWeight,fontVariant:e||r.fontVariant,toString:function(){return[this.fontStyle,this.fontVariant,this.fontWeight,this.fontSize,this.fontFamily].join(" ")}}};var r=this;this.Parse=function(t){for(var e={},i=A.trim(A.compressSpaces(t||"")).split(" "),n={fontSize:!1,fontStyle:!1,fontWeight:!1,fontVariant:!1},s="",a=0;a<i.length;a++)n.fontStyle||-1==r.Styles.indexOf(i[a])?n.fontVariant||-1==r.Variants.indexOf(i[a])?n.fontWeight||-1==r.Weights.indexOf(i[a])?n.fontSize?"inherit"!=i[a]&&(s+=i[a]):("inherit"!=i[a]&&(e.fontSize=i[a].split("/")[0]),n.fontStyle=n.fontVariant=n.fontWeight=n.fontSize=!0):("inherit"!=i[a]&&(e.fontWeight=i[a]),n.fontStyle=n.fontVariant=n.fontWeight=!0):("inherit"!=i[a]&&(e.fontVariant=i[a]),n.fontStyle=n.fontVariant=!0):("inherit"!=i[a]&&(e.fontStyle=i[a]),n.fontStyle=!0);return""!=s&&(e.fontFamily=s),e}},A.ToNumberArray=function(t){for(var e=A.trim(A.compressSpaces((t||"").replace(/,/g," "))).split(" "),i=0;i<e.length;i++)e[i]=parseFloat(e[i]);return e},A.Point=function(t,e){this.x=t,this.y=e},A.Point.prototype.angleTo=function(t){return Math.atan2(t.y-this.y,t.x-this.x)},A.Point.prototype.applyTransform=function(t){var e=this.x*t[0]+this.y*t[2]+t[4],i=this.x*t[1]+this.y*t[3]+t[5];this.x=e,this.y=i},A.CreatePoint=function(t){var e=A.ToNumberArray(t);return new A.Point(e[0],e[1])},A.CreatePath=function(t){for(var e=A.ToNumberArray(t),i=[],n=0;n<e.length;n+=2)i.push(new A.Point(e[n],e[n+1]));return i},A.BoundingBox=function(t,e,i,n){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN,this.x=function(){return this.x1},this.y=function(){return this.y1},this.width=function(){return this.x2-this.x1},this.height=function(){return this.y2-this.y1},this.addPoint=function(t,e){null!=t&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=t,this.x2=t),t<this.x1&&(this.x1=t),t>this.x2&&(this.x2=t)),null!=e&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=e,this.y2=e),e<this.y1&&(this.y1=e),e>this.y2&&(this.y2=e))},this.addX=function(t){this.addPoint(t,null)},this.addY=function(t){this.addPoint(null,t)},this.addBoundingBox=function(t){this.addPoint(t.x1,t.y1),this.addPoint(t.x2,t.y2)},this.addQuadraticCurve=function(t,e,i,n,s,a){var r=t+2/3*(i-t),o=e+2/3*(n-e),l=r+1/3*(s-t),h=o+1/3*(a-e);this.addBezierCurve(t,e,r,l,o,h,s,a)},this.addBezierCurve=function(t,e,i,n,s,a,r,o){var l=[t,e],h=[i,n],u=[s,a],c=[r,o];this.addPoint(l[0],l[1]),this.addPoint(c[0],c[1]);for(var f=0;f<=1;f++){var m=function(t){return Math.pow(1-t,3)*l[f]+3*Math.pow(1-t,2)*t*h[f]+3*(1-t)*Math.pow(t,2)*u[f]+Math.pow(t,3)*c[f]},p=6*l[f]-12*h[f]+6*u[f],d=-3*l[f]+9*h[f]-9*u[f]+3*c[f],y=3*h[f]-3*l[f];if(0!=d){var v=Math.pow(p,2)-4*y*d;if(!(v<0)){var g=(-p+Math.sqrt(v))/(2*d);0<g&&g<1&&(0==f&&this.addX(m(g)),1==f&&this.addY(m(g)));var x=(-p-Math.sqrt(v))/(2*d);0<x&&x<1&&(0==f&&this.addX(m(x)),1==f&&this.addY(m(x)))}}else{if(0==p)continue;var b=-y/p;0<b&&b<1&&(0==f&&this.addX(m(b)),1==f&&this.addY(m(b)))}}},this.isPointInBox=function(t,e){return this.x1<=t&&t<=this.x2&&this.y1<=e&&e<=this.y2},this.addPoint(t,e),this.addPoint(i,n)},A.Transform=function(t){var e=this;this.Type={},this.Type.translate=function(t){this.p=A.CreatePoint(t),this.apply=function(t){t.translate(this.p.x||0,this.p.y||0)},this.unapply=function(t){t.translate(-1*this.p.x||0,-1*this.p.y||0)},this.applyToPoint=function(t){t.applyTransform([1,0,0,1,this.p.x||0,this.p.y||0])}},this.Type.rotate=function(t){var e=A.ToNumberArray(t);this.angle=new A.Property("angle",e[0]),this.cx=e[1]||0,this.cy=e[2]||0,this.apply=function(t){t.translate(this.cx,this.cy),t.rotate(this.angle.toRadians()),t.translate(-this.cx,-this.cy)},this.unapply=function(t){t.translate(this.cx,this.cy),t.rotate(-1*this.angle.toRadians()),t.translate(-this.cx,-this.cy)},this.applyToPoint=function(t){var e=this.angle.toRadians();t.applyTransform([1,0,0,1,this.p.x||0,this.p.y||0]),t.applyTransform([Math.cos(e),Math.sin(e),-Math.sin(e),Math.cos(e),0,0]),t.applyTransform([1,0,0,1,-this.p.x||0,-this.p.y||0])}},this.Type.scale=function(t){this.p=A.CreatePoint(t),this.apply=function(t){t.scale(this.p.x||1,this.p.y||this.p.x||1)},this.unapply=function(t){t.scale(1/this.p.x||1,1/this.p.y||this.p.x||1)},this.applyToPoint=function(t){t.applyTransform([this.p.x||0,0,0,this.p.y||0,0,0])}},this.Type.matrix=function(t){this.m=A.ToNumberArray(t),this.apply=function(t){t.transform(this.m[0],this.m[1],this.m[2],this.m[3],this.m[4],this.m[5])},this.unapply=function(t){var e=this.m[0],i=this.m[2],n=this.m[4],s=this.m[1],a=this.m[3],r=this.m[5],o=1/(e*(1*a-0*r)-i*(1*s-0*r)+n*(0*s-0*a));t.transform(o*(1*a-0*r),o*(0*r-1*s),o*(0*n-1*i),o*(1*e-0*n),o*(i*r-n*a),o*(n*s-e*r))},this.applyToPoint=function(t){t.applyTransform(this.m)}},this.Type.SkewBase=function(t){this.base=e.Type.matrix,this.base(t),this.angle=new A.Property("angle",t)},this.Type.SkewBase.prototype=new this.Type.matrix,this.Type.skewX=function(t){this.base=e.Type.SkewBase,this.base(t),this.m=[1,0,Math.tan(this.angle.toRadians()),1,0,0]},this.Type.skewX.prototype=new this.Type.SkewBase,this.Type.skewY=function(t){this.base=e.Type.SkewBase,this.base(t),this.m=[1,Math.tan(this.angle.toRadians()),0,1,0,0]},this.Type.skewY.prototype=new this.Type.SkewBase,this.transforms=[],this.apply=function(t){for(var e=0;e<this.transforms.length;e++)this.transforms[e].apply(t)},this.unapply=function(t){for(var e=this.transforms.length-1;0<=e;e--)this.transforms[e].unapply(t)},this.applyToPoint=function(t){for(var e=0;e<this.transforms.length;e++)this.transforms[e].applyToPoint(t)};for(var i=A.trim(A.compressSpaces(t)).replace(/\)([a-zA-Z])/g,") $1").replace(/\)(\s?,\s?)/g,") ").split(/\s(?=[a-z])/),n=0;n<i.length;n++)if("none"!==i[n]){var s=A.trim(i[n].split("(")[0]),a=i[n].split("(")[1].replace(")",""),r=this.Type[s];if(void 0!==r){var o=new r(a);o.type=s,this.transforms.push(o)}}},A.AspectRatio=function(t,e,i,n,s,a,r,o,l,h){var u=(e=(e=A.compressSpaces(e)).replace(/^defer\s/,"")).split(" ")[0]||"xMidYMid",c=e.split(" ")[1]||"meet",f=i/n,m=s/a,p=Math.min(f,m),d=Math.max(f,m);"meet"==c&&(n*=p,a*=p),"slice"==c&&(n*=d,a*=d),l=new A.Property("refX",l),h=new A.Property("refY",h),l.hasValue()&&h.hasValue()?t.translate(-p*l.toPixels("x"),-p*h.toPixels("y")):(u.match(/^xMid/)&&("meet"==c&&p==m||"slice"==c&&d==m)&&t.translate(i/2-n/2,0),u.match(/YMid$/)&&("meet"==c&&p==f||"slice"==c&&d==f)&&t.translate(0,s/2-a/2),u.match(/^xMax/)&&("meet"==c&&p==m||"slice"==c&&d==m)&&t.translate(i-n,0),u.match(/YMax$/)&&("meet"==c&&p==f||"slice"==c&&d==f)&&t.translate(0,s-a)),"none"==u?t.scale(f,m):"meet"==c?t.scale(p,p):"slice"==c&&t.scale(d,d),t.translate(null==r?0:-r,null==o?0:-o)},A.Element={},A.EmptyProperty=new A.Property("EMPTY",""),A.Element.ElementBase=function(a){this.attributes={},this.styles={},this.stylesSpecificity={},this.children=[],this.attribute=function(t,e){var i=this.attributes[t];return null!=i?i:(1==e&&(i=new A.Property(t,""),this.attributes[t]=i),i||A.EmptyProperty)},this.getHrefAttribute=function(){for(var t in this.attributes)if("href"==t||t.match(/:href$/))return this.attributes[t];return A.EmptyProperty},this.style=function(t,e,i){var n=this.styles[t];if(null!=n)return n;var s=this.attribute(t);if(null!=s&&s.hasValue())return this.styles[t]=s;if(1!=i){var a=this.parent;if(null!=a){var r=a.style(t);if(null!=r&&r.hasValue())return r}}return 1==e&&(n=new A.Property(t,""),this.styles[t]=n),n||A.EmptyProperty},this.render=function(t){if("none"!=this.style("display").value&&"hidden"!=this.style("visibility").value){if(t.save(),this.style("mask").hasValue()){var e=this.style("mask").getDefinition();null!=e&&e.apply(t,this)}else if(this.style("filter").hasValue()){var i=this.style("filter").getDefinition();null!=i&&i.apply(t,this)}else this.setContext(t),this.renderChildren(t),this.clearContext(t);t.restore()}},this.setContext=function(t){},this.clearContext=function(t){},this.renderChildren=function(t){for(var e=0;e<this.children.length;e++)this.children[e].render(t)},this.addChild=function(t,e){var i=t;e&&(i=A.CreateElement(t)),i.parent=this,"title"!=i.type&&this.children.push(i)},this.addStylesFromStyleDefinition=function(){for(var t in A.Styles)if("@"!=t[0]&&f(a,t)){var e=A.Styles[t],i=A.StylesSpecificity[t];if(null!=e)for(var n in e){var s=this.stylesSpecificity[n];void 0===s&&(s="000"),s<i&&(this.styles[n]=e[n],this.stylesSpecificity[n]=i)}}};var t,e=new RegExp("^[A-Z-]+$");if(null!=a&&1==a.nodeType){for(var i=0;i<a.attributes.length;i++){var n=a.attributes[i],s=(t=n.nodeName,e.test(t)?t.toLowerCase():t);this.attributes[s]=new A.Property(s,n.value)}if(this.addStylesFromStyleDefinition(),this.attribute("style").hasValue()){var r=this.attribute("style").value.split(";");for(i=0;i<r.length;i++)if(""!=A.trim(r[i])){var o=r[i].split(":"),l=A.trim(o[0]),h=A.trim(o[1]);this.styles[l]=new A.Property(l,h)}}for(this.attribute("id").hasValue()&&null==A.Definitions[this.attribute("id").value]&&(A.Definitions[this.attribute("id").value]=this),i=0;i<a.childNodes.length;i++){var u=a.childNodes[i];if(1==u.nodeType&&this.addChild(u,!0),this.captureTextNodes&&(3==u.nodeType||4==u.nodeType)){var c=u.value||u.text||u.textContent||"";""!=A.compressSpaces(c)&&this.addChild(new A.Element.tspan(u),!1)}}}},A.Element.RenderedElementBase=function(t){this.base=A.Element.ElementBase,this.base(t),this.calculateOpacity=function(){for(var t=1,e=this;null!=e;){var i=e.style("opacity",!1,!0);i.hasValue()&&(t*=i.numValue()),e=e.parent}return t},this.setContext=function(t,e){if(!e){var i;if(this.style("fill").isUrlDefinition())null!=(i=this.style("fill").getFillStyleDefinition(this,this.style("fill-opacity")))&&(t.fillStyle=i);else if(this.style("fill").hasValue()){var n;"currentColor"==(n=this.style("fill")).value&&(n.value=this.style("color").value),"inherit"!=n.value&&(t.fillStyle="none"==n.value?"rgba(0,0,0,0)":n.value)}if(this.style("fill-opacity").hasValue()&&(n=(n=new A.Property("fill",t.fillStyle)).addOpacity(this.style("fill-opacity")),t.fillStyle=n.value),this.style("stroke").isUrlDefinition())null!=(i=this.style("stroke").getFillStyleDefinition(this,this.style("stroke-opacity")))&&(t.strokeStyle=i);else if(this.style("stroke").hasValue()){var s;"currentColor"==(s=this.style("stroke")).value&&(s.value=this.style("color").value),"inherit"!=s.value&&(t.strokeStyle="none"==s.value?"rgba(0,0,0,0)":s.value)}if(this.style("stroke-opacity").hasValue()&&(s=(s=new A.Property("stroke",t.strokeStyle)).addOpacity(this.style("stroke-opacity")),t.strokeStyle=s.value),this.style("stroke-width").hasValue()){var a=this.style("stroke-width").toPixels();t.lineWidth=0==a?.001:a}if(this.style("stroke-linecap").hasValue()&&(t.lineCap=this.style("stroke-linecap").value),this.style("stroke-linejoin").hasValue()&&(t.lineJoin=this.style("stroke-linejoin").value),this.style("stroke-miterlimit").hasValue()&&(t.miterLimit=this.style("stroke-miterlimit").value),this.style("paint-order").hasValue()&&(t.paintOrder=this.style("paint-order").value),this.style("stroke-dasharray").hasValue()&&"none"!=this.style("stroke-dasharray").value){var r=A.ToNumberArray(this.style("stroke-dasharray").value);void 0!==t.setLineDash?t.setLineDash(r):void 0!==t.webkitLineDash?t.webkitLineDash=r:void 0===t.mozDash||1==r.length&&0==r[0]||(t.mozDash=r);var o=this.style("stroke-dashoffset").toPixels();void 0!==t.lineDashOffset?t.lineDashOffset=o:void 0!==t.webkitLineDashOffset?t.webkitLineDashOffset=o:void 0!==t.mozDashOffset&&(t.mozDashOffset=o)}}if(void 0!==t.font){t.font=A.Font.CreateFont(this.style("font-style").value,this.style("font-variant").value,this.style("font-weight").value,this.style("font-size").hasValue()?this.style("font-size").toPixels()+"px":"",this.style("font-family").value).toString();var l=this.style("font-size",!1,!1);l.isPixels()&&(A.emSize=l.toPixels())}if(this.style("transform",!1,!0).hasValue()&&new A.Transform(this.style("transform",!1,!0).value).apply(t),this.style("clip-path",!1,!0).hasValue()){var h=this.style("clip-path",!1,!0).getDefinition();null!=h&&h.apply(t)}t.globalAlpha=this.calculateOpacity()}},A.Element.RenderedElementBase.prototype=new A.Element.ElementBase,A.Element.PathElementBase=function(t){this.base=A.Element.RenderedElementBase,this.base(t),this.path=function(t){return null!=t&&t.beginPath(),new A.BoundingBox},this.renderChildren=function(t){this.path(t),A.Mouse.checkPath(this,t),""!=t.fillStyle&&("inherit"!=this.style("fill-rule").valueOrDefault("inherit")?t.fill(this.style("fill-rule").value):t.fill()),""!=t.strokeStyle&&t.stroke();var e=this.getMarkers();if(null!=e){if(this.style("marker-start").isUrlDefinition()&&(i=this.style("marker-start").getDefinition()).render(t,e[0][0],e[0][1]),this.style("marker-mid").isUrlDefinition())for(var i=this.style("marker-mid").getDefinition(),n=1;n<e.length-1;n++)i.render(t,e[n][0],e[n][1]);this.style("marker-end").isUrlDefinition()&&(i=this.style("marker-end").getDefinition()).render(t,e[e.length-1][0],e[e.length-1][1])}},this.getBoundingBox=function(){return this.path()},this.getMarkers=function(){return null}},A.Element.PathElementBase.prototype=new A.Element.RenderedElementBase,A.Element.svg=function(t){this.base=A.Element.RenderedElementBase,this.base(t),this.baseClearContext=this.clearContext,this.clearContext=function(t){this.baseClearContext(t),A.ViewPort.RemoveCurrent()},this.baseSetContext=this.setContext,this.setContext=function(t){if(t.strokeStyle="rgba(0,0,0,0)",t.lineCap="butt",t.lineJoin="miter",t.miterLimit=4,t.canvas.style&&void 0!==t.font&&void 0!==u.getComputedStyle){t.font=u.getComputedStyle(t.canvas).getPropertyValue("font");var e=new A.Property("fontSize",A.Font.Parse(t.font).fontSize);e.hasValue()&&(A.rootEmSize=A.emSize=e.toPixels("y"))}this.baseSetContext(t),this.attribute("x").hasValue()||(this.attribute("x",!0).value=0),this.attribute("y").hasValue()||(this.attribute("y",!0).value=0),t.translate(this.attribute("x").toPixels("x"),this.attribute("y").toPixels("y"));var i=A.ViewPort.width(),n=A.ViewPort.height();if(this.attribute("width").hasValue()||(this.attribute("width",!0).value="100%"),this.attribute("height").hasValue()||(this.attribute("height",!0).value="100%"),void 0===this.root){i=this.attribute("width").toPixels("x"),n=this.attribute("height").toPixels("y");var s=0,a=0;this.attribute("refX").hasValue()&&this.attribute("refY").hasValue()&&(s=-this.attribute("refX").toPixels("x"),a=-this.attribute("refY").toPixels("y")),"visible"!=this.attribute("overflow").valueOrDefault("hidden")&&(t.beginPath(),t.moveTo(s,a),t.lineTo(i,a),t.lineTo(i,n),t.lineTo(s,n),t.closePath(),t.clip())}if(A.ViewPort.SetCurrent(i,n),this.attribute("viewBox").hasValue()){var r=A.ToNumberArray(this.attribute("viewBox").value),o=r[0],l=r[1];i=r[2],n=r[3],A.AspectRatio(t,this.attribute("preserveAspectRatio").value,A.ViewPort.width(),i,A.ViewPort.height(),n,o,l,this.attribute("refX").value,this.attribute("refY").value),A.ViewPort.RemoveCurrent(),A.ViewPort.SetCurrent(r[2],r[3])}}},A.Element.svg.prototype=new A.Element.RenderedElementBase,A.Element.rect=function(t){this.base=A.Element.PathElementBase,this.base(t),this.path=function(t){var e=this.attribute("x").toPixels("x"),i=this.attribute("y").toPixels("y"),n=this.attribute("width").toPixels("x"),s=this.attribute("height").toPixels("y"),a=this.attribute("rx").toPixels("x"),r=this.attribute("ry").toPixels("y");if(this.attribute("rx").hasValue()&&!this.attribute("ry").hasValue()&&(r=a),this.attribute("ry").hasValue()&&!this.attribute("rx").hasValue()&&(a=r),a=Math.min(a,n/2),r=Math.min(r,s/2),null!=t){var o=(Math.sqrt(2)-1)/3*4;t.beginPath(),t.moveTo(e+a,i),t.lineTo(e+n-a,i),t.bezierCurveTo(e+n-a+o*a,i,e+n,i+r-o*r,e+n,i+r),t.lineTo(e+n,i+s-r),t.bezierCurveTo(e+n,i+s-r+o*r,e+n-a+o*a,i+s,e+n-a,i+s),t.lineTo(e+a,i+s),t.bezierCurveTo(e+a-o*a,i+s,e,i+s-r+o*r,e,i+s-r),t.lineTo(e,i+r),t.bezierCurveTo(e,i+r-o*r,e+a-o*a,i,e+a,i),t.closePath()}return new A.BoundingBox(e,i,e+n,i+s)}},A.Element.rect.prototype=new A.Element.PathElementBase,A.Element.circle=function(t){this.base=A.Element.PathElementBase,this.base(t),this.path=function(t){var e=this.attribute("cx").toPixels("x"),i=this.attribute("cy").toPixels("y"),n=this.attribute("r").toPixels();return null!=t&&(t.beginPath(),t.arc(e,i,n,0,2*Math.PI,!1),t.closePath()),new A.BoundingBox(e-n,i-n,e+n,i+n)}},A.Element.circle.prototype=new A.Element.PathElementBase,A.Element.ellipse=function(t){this.base=A.Element.PathElementBase,this.base(t),this.path=function(t){var e=(Math.sqrt(2)-1)/3*4,i=this.attribute("rx").toPixels("x"),n=this.attribute("ry").toPixels("y"),s=this.attribute("cx").toPixels("x"),a=this.attribute("cy").toPixels("y");return null!=t&&(t.beginPath(),t.moveTo(s+i,a),t.bezierCurveTo(s+i,a+e*n,s+e*i,a+n,s,a+n),t.bezierCurveTo(s-e*i,a+n,s-i,a+e*n,s-i,a),t.bezierCurveTo(s-i,a-e*n,s-e*i,a-n,s,a-n),t.bezierCurveTo(s+e*i,a-n,s+i,a-e*n,s+i,a),t.closePath()),new A.BoundingBox(s-i,a-n,s+i,a+n)}},A.Element.ellipse.prototype=new A.Element.PathElementBase,A.Element.line=function(t){this.base=A.Element.PathElementBase,this.base(t),this.getPoints=function(){return[new A.Point(this.attribute("x1").toPixels("x"),this.attribute("y1").toPixels("y")),new A.Point(this.attribute("x2").toPixels("x"),this.attribute("y2").toPixels("y"))]},this.path=function(t){var e=this.getPoints();return null!=t&&(t.beginPath(),t.moveTo(e[0].x,e[0].y),t.lineTo(e[1].x,e[1].y)),new A.BoundingBox(e[0].x,e[0].y,e[1].x,e[1].y)},this.getMarkers=function(){var t=this.getPoints(),e=t[0].angleTo(t[1]);return[[t[0],e],[t[1],e]]}},A.Element.line.prototype=new A.Element.PathElementBase,A.Element.polyline=function(t){this.base=A.Element.PathElementBase,this.base(t),this.points=A.CreatePath(this.attribute("points").value),this.path=function(t){var e=new A.BoundingBox(this.points[0].x,this.points[0].y);null!=t&&(t.beginPath(),t.moveTo(this.points[0].x,this.points[0].y));for(var i=1;i<this.points.length;i++)e.addPoint(this.points[i].x,this.points[i].y),null!=t&&t.lineTo(this.points[i].x,this.points[i].y);return e},this.getMarkers=function(){for(var t=[],e=0;e<this.points.length-1;e++)t.push([this.points[e],this.points[e].angleTo(this.points[e+1])]);return 0<t.length&&t.push([this.points[this.points.length-1],t[t.length-1][1]]),t}},A.Element.polyline.prototype=new A.Element.PathElementBase,A.Element.polygon=function(t){this.base=A.Element.polyline,this.base(t),this.basePath=this.path,this.path=function(t){var e=this.basePath(t);return null!=t&&(t.lineTo(this.points[0].x,this.points[0].y),t.closePath()),e}},A.Element.polygon.prototype=new A.Element.polyline,A.Element.path=function(t){this.base=A.Element.PathElementBase,this.base(t);var e=this.attribute("d").value;e=e.replace(/,/gm," ");for(var i=0;i<2;i++)e=e.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm,"$1 $2");for(e=(e=e.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2")).replace(/([0-9])([+\-])/gm,"$1 $2"),i=0;i<2;i++)e=e.replace(/(\.[0-9]*)(\.)/gm,"$1 $2");e=e.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm,"$1 $3 $4 "),e=A.compressSpaces(e),e=A.trim(e),this.PathParser=new function(t){this.tokens=t.split(" "),this.reset=function(){this.i=-1,this.command="",this.previousCommand="",this.start=new A.Point(0,0),this.control=new A.Point(0,0),this.current=new A.Point(0,0),this.points=[],this.angles=[]},this.isEnd=function(){return this.i>=this.tokens.length-1},this.isCommandOrEnd=function(){return!!this.isEnd()||null!=this.tokens[this.i+1].match(/^[A-Za-z]$/)},this.isRelativeCommand=function(){switch(this.command){case"m":case"l":case"h":case"v":case"c":case"s":case"q":case"t":case"a":case"z":return!0}return!1},this.getToken=function(){return this.i++,this.tokens[this.i]},this.getScalar=function(){return parseFloat(this.getToken())},this.nextCommand=function(){this.previousCommand=this.command,this.command=this.getToken()},this.getPoint=function(){var t=new A.Point(this.getScalar(),this.getScalar());return this.makeAbsolute(t)},this.getAsControlPoint=function(){var t=this.getPoint();return this.control=t},this.getAsCurrentPoint=function(){var t=this.getPoint();return this.current=t},this.getReflectedControlPoint=function(){return"c"!=this.previousCommand.toLowerCase()&&"s"!=this.previousCommand.toLowerCase()&&"q"!=this.previousCommand.toLowerCase()&&"t"!=this.previousCommand.toLowerCase()?this.current:new A.Point(2*this.current.x-this.control.x,2*this.current.y-this.control.y)},this.makeAbsolute=function(t){return this.isRelativeCommand()&&(t.x+=this.current.x,t.y+=this.current.y),t},this.addMarker=function(t,e,i){null!=i&&0<this.angles.length&&null==this.angles[this.angles.length-1]&&(this.angles[this.angles.length-1]=this.points[this.points.length-1].angleTo(i)),this.addMarkerAngle(t,null==e?null:e.angleTo(t))},this.addMarkerAngle=function(t,e){this.points.push(t),this.angles.push(e)},this.getMarkerPoints=function(){return this.points},this.getMarkerAngles=function(){for(var t=0;t<this.angles.length;t++)if(null==this.angles[t])for(var e=t+1;e<this.angles.length;e++)if(null!=this.angles[e]){this.angles[t]=this.angles[e];break}return this.angles}}(e),this.path=function(t){var e=this.PathParser;e.reset();var i=new A.BoundingBox;for(null!=t&&t.beginPath();!e.isEnd();)switch(e.nextCommand(),e.command){case"M":case"m":var n=e.getAsCurrentPoint();for(e.addMarker(n),i.addPoint(n.x,n.y),null!=t&&t.moveTo(n.x,n.y),e.start=e.current;!e.isCommandOrEnd();)n=e.getAsCurrentPoint(),e.addMarker(n,e.start),i.addPoint(n.x,n.y),null!=t&&t.lineTo(n.x,n.y);break;case"L":case"l":for(;!e.isCommandOrEnd();){var s=e.current;n=e.getAsCurrentPoint(),e.addMarker(n,s),i.addPoint(n.x,n.y),null!=t&&t.lineTo(n.x,n.y)}break;case"H":case"h":for(;!e.isCommandOrEnd();){var a=new A.Point((e.isRelativeCommand()?e.current.x:0)+e.getScalar(),e.current.y);e.addMarker(a,e.current),e.current=a,i.addPoint(e.current.x,e.current.y),null!=t&&t.lineTo(e.current.x,e.current.y)}break;case"V":case"v":for(;!e.isCommandOrEnd();)a=new A.Point(e.current.x,(e.isRelativeCommand()?e.current.y:0)+e.getScalar()),e.addMarker(a,e.current),e.current=a,i.addPoint(e.current.x,e.current.y),null!=t&&t.lineTo(e.current.x,e.current.y);break;case"C":case"c":for(;!e.isCommandOrEnd();){var r=e.current,o=e.getPoint(),l=e.getAsControlPoint(),h=e.getAsCurrentPoint();e.addMarker(h,l,o),i.addBezierCurve(r.x,r.y,o.x,o.y,l.x,l.y,h.x,h.y),null!=t&&t.bezierCurveTo(o.x,o.y,l.x,l.y,h.x,h.y)}break;case"S":case"s":for(;!e.isCommandOrEnd();)r=e.current,o=e.getReflectedControlPoint(),l=e.getAsControlPoint(),h=e.getAsCurrentPoint(),e.addMarker(h,l,o),i.addBezierCurve(r.x,r.y,o.x,o.y,l.x,l.y,h.x,h.y),null!=t&&t.bezierCurveTo(o.x,o.y,l.x,l.y,h.x,h.y);break;case"Q":case"q":for(;!e.isCommandOrEnd();)r=e.current,l=e.getAsControlPoint(),h=e.getAsCurrentPoint(),e.addMarker(h,l,l),i.addQuadraticCurve(r.x,r.y,l.x,l.y,h.x,h.y),null!=t&&t.quadraticCurveTo(l.x,l.y,h.x,h.y);break;case"T":case"t":for(;!e.isCommandOrEnd();)r=e.current,l=e.getReflectedControlPoint(),e.control=l,h=e.getAsCurrentPoint(),e.addMarker(h,l,l),i.addQuadraticCurve(r.x,r.y,l.x,l.y,h.x,h.y),null!=t&&t.quadraticCurveTo(l.x,l.y,h.x,h.y);break;case"A":case"a":for(;!e.isCommandOrEnd();){r=e.current;var u=e.getScalar(),c=e.getScalar(),f=e.getScalar()*(Math.PI/180),m=e.getScalar(),p=e.getScalar(),d=(h=e.getAsCurrentPoint(),new A.Point(Math.cos(f)*(r.x-h.x)/2+Math.sin(f)*(r.y-h.y)/2,-Math.sin(f)*(r.x-h.x)/2+Math.cos(f)*(r.y-h.y)/2)),y=Math.pow(d.x,2)/Math.pow(u,2)+Math.pow(d.y,2)/Math.pow(c,2);1<y&&(u*=Math.sqrt(y),c*=Math.sqrt(y));var v=(m==p?-1:1)*Math.sqrt((Math.pow(u,2)*Math.pow(c,2)-Math.pow(u,2)*Math.pow(d.y,2)-Math.pow(c,2)*Math.pow(d.x,2))/(Math.pow(u,2)*Math.pow(d.y,2)+Math.pow(c,2)*Math.pow(d.x,2)));isNaN(v)&&(v=0);var g=new A.Point(v*u*d.y/c,v*-c*d.x/u),x=new A.Point((r.x+h.x)/2+Math.cos(f)*g.x-Math.sin(f)*g.y,(r.y+h.y)/2+Math.sin(f)*g.x+Math.cos(f)*g.y),b=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2))},P=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(b(t)*b(e))},E=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(P(t,e))},w=E([1,0],[(d.x-g.x)/u,(d.y-g.y)/c]),B=[(d.x-g.x)/u,(d.y-g.y)/c],C=[(-d.x-g.x)/u,(-d.y-g.y)/c],T=E(B,C);P(B,C)<=-1&&(T=Math.PI),1<=P(B,C)&&(T=0);var V=1-p?1:-1,M=w+V*(T/2),S=new A.Point(x.x+u*Math.cos(M),x.y+c*Math.sin(M));if(e.addMarkerAngle(S,M-V*Math.PI/2),e.addMarkerAngle(h,M-V*Math.PI),i.addPoint(h.x,h.y),null!=t){P=c<u?u:c;var k=c<u?1:u/c,D=c<u?c/u:1;t.translate(x.x,x.y),t.rotate(f),t.scale(k,D),t.arc(0,0,P,w,w+T,1-p),t.scale(1/k,1/D),t.rotate(-f),t.translate(-x.x,-x.y)}}break;case"Z":case"z":null!=t&&i.x1!==i.x2&&i.y1!==i.y2&&t.closePath(),e.current=e.start}return i},this.getMarkers=function(){for(var t=this.PathParser.getMarkerPoints(),e=this.PathParser.getMarkerAngles(),i=[],n=0;n<t.length;n++)i.push([t[n],e[n]]);return i}},A.Element.path.prototype=new A.Element.PathElementBase,A.Element.pattern=function(t){this.base=A.Element.ElementBase,this.base(t),this.createPattern=function(t,e){var i=this.attribute("width").toPixels("x",!0),n=this.attribute("height").toPixels("y",!0),s=new A.Element.svg;s.attributes.viewBox=new A.Property("viewBox",this.attribute("viewBox").value),s.attributes.width=new A.Property("width",i+"px"),s.attributes.height=new A.Property("height",n+"px"),s.attributes.transform=new A.Property("transform",this.attribute("patternTransform").value),s.children=this.children;var a=p();a.width=i,a.height=n;var r=a.getContext("2d");this.attribute("x").hasValue()&&this.attribute("y").hasValue()&&r.translate(this.attribute("x").toPixels("x",!0),this.attribute("y").toPixels("y",!0));for(var o=-1;o<=1;o++)for(var l=-1;l<=1;l++)r.save(),s.attributes.x=new A.Property("x",o*a.width),s.attributes.y=new A.Property("y",l*a.height),s.render(r),r.restore();return t.createPattern(a,"repeat")}},A.Element.pattern.prototype=new A.Element.ElementBase,A.Element.marker=function(t){this.base=A.Element.ElementBase,this.base(t),this.baseRender=this.render,this.render=function(t,e,i){if(e){t.translate(e.x,e.y),"auto"==this.attribute("orient").valueOrDefault("auto")&&t.rotate(i),"strokeWidth"==this.attribute("markerUnits").valueOrDefault("strokeWidth")&&t.scale(t.lineWidth,t.lineWidth),t.save();var n=new A.Element.svg;n.attributes.viewBox=new A.Property("viewBox",this.attribute("viewBox").value),n.attributes.refX=new A.Property("refX",this.attribute("refX").value),n.attributes.refY=new A.Property("refY",this.attribute("refY").value),n.attributes.width=new A.Property("width",this.attribute("markerWidth").value),n.attributes.height=new A.Property("height",this.attribute("markerHeight").value),n.attributes.fill=new A.Property("fill",this.attribute("fill").valueOrDefault("black")),n.attributes.stroke=new A.Property("stroke",this.attribute("stroke").valueOrDefault("none")),n.children=this.children,n.render(t),t.restore(),"strokeWidth"==this.attribute("markerUnits").valueOrDefault("strokeWidth")&&t.scale(1/t.lineWidth,1/t.lineWidth),"auto"==this.attribute("orient").valueOrDefault("auto")&&t.rotate(-i),t.translate(-e.x,-e.y)}}},A.Element.marker.prototype=new A.Element.ElementBase,A.Element.defs=function(t){this.base=A.Element.ElementBase,this.base(t),this.render=function(t){}},A.Element.defs.prototype=new A.Element.ElementBase,A.Element.GradientBase=function(t){this.base=A.Element.ElementBase,this.base(t),this.stops=[];for(var e=0;e<this.children.length;e++){var i=this.children[e];"stop"==i.type&&this.stops.push(i)}this.getGradient=function(){},this.gradientUnits=function(){return this.attribute("gradientUnits").valueOrDefault("objectBoundingBox")},this.attributesToInherit=["gradientUnits"],this.inheritStopContainer=function(t){for(var e=0;e<this.attributesToInherit.length;e++){var i=this.attributesToInherit[e];!this.attribute(i).hasValue()&&t.attribute(i).hasValue()&&(this.attribute(i,!0).value=t.attribute(i).value)}},this.createGradient=function(t,e,i){var n=this;this.getHrefAttribute().hasValue()&&(n=this.getHrefAttribute().getDefinition(),this.inheritStopContainer(n));var s=function(t){return i.hasValue()?new A.Property("color",t).addOpacity(i).value:t},a=this.getGradient(t,e);if(null==a)return s(n.stops[n.stops.length-1].color);for(var r=0;r<n.stops.length;r++)a.addColorStop(n.stops[r].offset,s(n.stops[r].color));if(this.attribute("gradientTransform").hasValue()){var o=A.ViewPort.viewPorts[0],l=new A.Element.rect;l.attributes.x=new A.Property("x",-A.MAX_VIRTUAL_PIXELS/3),l.attributes.y=new A.Property("y",-A.MAX_VIRTUAL_PIXELS/3),l.attributes.width=new A.Property("width",A.MAX_VIRTUAL_PIXELS),l.attributes.height=new A.Property("height",A.MAX_VIRTUAL_PIXELS);var h=new A.Element.g;h.attributes.transform=new A.Property("transform",this.attribute("gradientTransform").value),h.children=[l];var u=new A.Element.svg;u.attributes.x=new A.Property("x",0),u.attributes.y=new A.Property("y",0),u.attributes.width=new A.Property("width",o.width),u.attributes.height=new A.Property("height",o.height),u.children=[h];var c=p();c.width=o.width,c.height=o.height;var f=c.getContext("2d");return f.fillStyle=a,u.render(f),f.createPattern(c,"no-repeat")}return a}},A.Element.GradientBase.prototype=new A.Element.ElementBase,A.Element.linearGradient=function(t){this.base=A.Element.GradientBase,this.base(t),this.attributesToInherit.push("x1"),this.attributesToInherit.push("y1"),this.attributesToInherit.push("x2"),this.attributesToInherit.push("y2"),this.getGradient=function(t,e){var i="objectBoundingBox"==this.gradientUnits()?e.getBoundingBox(t):null;this.attribute("x1").hasValue()||this.attribute("y1").hasValue()||this.attribute("x2").hasValue()||this.attribute("y2").hasValue()||(this.attribute("x1",!0).value=0,this.attribute("y1",!0).value=0,this.attribute("x2",!0).value=1,this.attribute("y2",!0).value=0);var n="objectBoundingBox"==this.gradientUnits()?i.x()+i.width()*this.attribute("x1").numValue():this.attribute("x1").toPixels("x"),s="objectBoundingBox"==this.gradientUnits()?i.y()+i.height()*this.attribute("y1").numValue():this.attribute("y1").toPixels("y"),a="objectBoundingBox"==this.gradientUnits()?i.x()+i.width()*this.attribute("x2").numValue():this.attribute("x2").toPixels("x"),r="objectBoundingBox"==this.gradientUnits()?i.y()+i.height()*this.attribute("y2").numValue():this.attribute("y2").toPixels("y");return n==a&&s==r?null:t.createLinearGradient(n,s,a,r)}},A.Element.linearGradient.prototype=new A.Element.GradientBase,A.Element.radialGradient=function(t){this.base=A.Element.GradientBase,this.base(t),this.attributesToInherit.push("cx"),this.attributesToInherit.push("cy"),this.attributesToInherit.push("r"),this.attributesToInherit.push("fx"),this.attributesToInherit.push("fy"),this.getGradient=function(t,e){var i=e.getBoundingBox(t);this.attribute("cx").hasValue()||(this.attribute("cx",!0).value="50%"),this.attribute("cy").hasValue()||(this.attribute("cy",!0).value="50%"),this.attribute("r").hasValue()||(this.attribute("r",!0).value="50%");var n="objectBoundingBox"==this.gradientUnits()?i.x()+i.width()*this.attribute("cx").numValue():this.attribute("cx").toPixels("x"),s="objectBoundingBox"==this.gradientUnits()?i.y()+i.height()*this.attribute("cy").numValue():this.attribute("cy").toPixels("y"),a=n,r=s;this.attribute("fx").hasValue()&&(a="objectBoundingBox"==this.gradientUnits()?i.x()+i.width()*this.attribute("fx").numValue():this.attribute("fx").toPixels("x")),this.attribute("fy").hasValue()&&(r="objectBoundingBox"==this.gradientUnits()?i.y()+i.height()*this.attribute("fy").numValue():this.attribute("fy").toPixels("y"));var o="objectBoundingBox"==this.gradientUnits()?(i.width()+i.height())/2*this.attribute("r").numValue():this.attribute("r").toPixels();return t.createRadialGradient(a,r,0,n,s,o)}},A.Element.radialGradient.prototype=new A.Element.GradientBase,A.Element.stop=function(t){this.base=A.Element.ElementBase,this.base(t),this.offset=this.attribute("offset").numValue(),this.offset<0&&(this.offset=0),1<this.offset&&(this.offset=1);var e=this.style("stop-color",!0);""===e.value&&(e.value="#000"),this.style("stop-opacity").hasValue()&&(e=e.addOpacity(this.style("stop-opacity"))),this.color=e.value},A.Element.stop.prototype=new A.Element.ElementBase,A.Element.AnimateBase=function(t){this.base=A.Element.ElementBase,this.base(t),A.Animations.push(this),this.duration=0,this.begin=this.attribute("begin").toMilliseconds(),this.maxDuration=this.begin+this.attribute("dur").toMilliseconds(),this.getProperty=function(){var t=this.attribute("attributeType").value,e=this.attribute("attributeName").value;return"CSS"==t?this.parent.style(e,!0):this.parent.attribute(e,!0)},this.initialValue=null,this.initialUnits="",this.removed=!1,this.calcValue=function(){return""},this.update=function(t){if(null==this.initialValue&&(this.initialValue=this.getProperty().value,this.initialUnits=this.getProperty().getUnits()),this.duration>this.maxDuration){if("indefinite"==this.attribute("repeatCount").value||"indefinite"==this.attribute("repeatDur").value)this.duration=0;else if("freeze"!=this.attribute("fill").valueOrDefault("remove")||this.frozen){if("remove"==this.attribute("fill").valueOrDefault("remove")&&!this.removed)return this.removed=!0,this.getProperty().value=this.parent.animationFrozen?this.parent.animationFrozenValue:this.initialValue,!0}else this.frozen=!0,this.parent.animationFrozen=!0,this.parent.animationFrozenValue=this.getProperty().value;return!1}this.duration=this.duration+t;var e=!1;if(this.begin<this.duration){var i=this.calcValue();this.attribute("type").hasValue()&&(i=this.attribute("type").value+"("+i+")"),this.getProperty().value=i,e=!0}return e},this.from=this.attribute("from"),this.to=this.attribute("to"),this.values=this.attribute("values"),this.values.hasValue()&&(this.values.value=this.values.value.split(";")),this.progress=function(){var t={progress:(this.duration-this.begin)/(this.maxDuration-this.begin)};if(this.values.hasValue()){var e=t.progress*(this.values.value.length-1),i=Math.floor(e),n=Math.ceil(e);t.from=new A.Property("from",parseFloat(this.values.value[i])),t.to=new A.Property("to",parseFloat(this.values.value[n])),t.progress=(e-i)/(n-i)}else t.from=this.from,t.to=this.to;return t}},A.Element.AnimateBase.prototype=new A.Element.ElementBase,A.Element.animate=function(t){this.base=A.Element.AnimateBase,this.base(t),this.calcValue=function(){var t=this.progress();return t.from.numValue()+(t.to.numValue()-t.from.numValue())*t.progress+this.initialUnits}},A.Element.animate.prototype=new A.Element.AnimateBase,A.Element.animateColor=function(t){this.base=A.Element.AnimateBase,this.base(t),this.calcValue=function(){var t=this.progress(),e=new m(t.from.value),i=new m(t.to.value);if(e.ok&&i.ok){var n=e.r+(i.r-e.r)*t.progress,s=e.g+(i.g-e.g)*t.progress,a=e.b+(i.b-e.b)*t.progress;return"rgb("+parseInt(n,10)+","+parseInt(s,10)+","+parseInt(a,10)+")"}return this.attribute("from").value}},A.Element.animateColor.prototype=new A.Element.AnimateBase,A.Element.animateTransform=function(t){this.base=A.Element.AnimateBase,this.base(t),this.calcValue=function(){for(var t=this.progress(),e=A.ToNumberArray(t.from.value),i=A.ToNumberArray(t.to.value),n="",s=0;s<e.length;s++)n+=e[s]+(i[s]-e[s])*t.progress+" ";return n}},A.Element.animateTransform.prototype=new A.Element.animate,A.Element.font=function(t){this.base=A.Element.ElementBase,this.base(t),this.horizAdvX=this.attribute("horiz-adv-x").numValue(),this.isRTL=!1,this.isArabic=!1,this.fontFace=null,this.missingGlyph=null,this.glyphs=[];for(var e=0;e<this.children.length;e++){var i=this.children[e];"font-face"==i.type?(this.fontFace=i).style("font-family").hasValue()&&(A.Definitions[i.style("font-family").value]=this):"missing-glyph"==i.type?this.missingGlyph=i:"glyph"==i.type&&(""!=i.arabicForm?(this.isRTL=!0,this.isArabic=!0,void 0===this.glyphs[i.unicode]&&(this.glyphs[i.unicode]=[]),this.glyphs[i.unicode][i.arabicForm]=i):this.glyphs[i.unicode]=i)}},A.Element.font.prototype=new A.Element.ElementBase,A.Element.fontface=function(t){this.base=A.Element.ElementBase,this.base(t),this.ascent=this.attribute("ascent").value,this.descent=this.attribute("descent").value,this.unitsPerEm=this.attribute("units-per-em").numValue()},A.Element.fontface.prototype=new A.Element.ElementBase,A.Element.missingglyph=function(t){this.base=A.Element.path,this.base(t),this.horizAdvX=0},A.Element.missingglyph.prototype=new A.Element.path,A.Element.glyph=function(t){this.base=A.Element.path,this.base(t),this.horizAdvX=this.attribute("horiz-adv-x").numValue(),this.unicode=this.attribute("unicode").value,this.arabicForm=this.attribute("arabic-form").value},A.Element.glyph.prototype=new A.Element.path,A.Element.text=function(t){this.captureTextNodes=!0,this.base=A.Element.RenderedElementBase,this.base(t),this.baseSetContext=this.setContext,this.setContext=function(t){this.baseSetContext(t);var e=this.style("dominant-baseline").toTextBaseline();null==e&&(e=this.style("alignment-baseline").toTextBaseline()),null!=e&&(t.textBaseline=e)},this.initializeCoordinates=function(t){this.x=this.attribute("x").toPixels("x"),this.y=this.attribute("y").toPixels("y"),this.attribute("dx").hasValue()&&(this.x+=this.attribute("dx").toPixels("x")),this.attribute("dy").hasValue()&&(this.y+=this.attribute("dy").toPixels("y")),this.x+=this.getAnchorDelta(t,this,0)},this.getBoundingBox=function(t){this.initializeCoordinates(t);for(var e=null,i=0;i<this.children.length;i++){var n=this.getChildBoundingBox(t,this,this,i);null==e?e=n:e.addBoundingBox(n)}return e},this.renderChildren=function(t){this.initializeCoordinates(t);for(var e=0;e<this.children.length;e++)this.renderChild(t,this,this,e)},this.getAnchorDelta=function(t,e,i){var n=this.style("text-anchor").valueOrDefault("start");if("start"!=n){for(var s=0,a=i;a<e.children.length;a++){var r=e.children[a];if(i<a&&r.attribute("x").hasValue())break;s+=r.measureTextRecursive(t)}return-1*("end"==n?s:s/2)}return 0},this.adjustChildCoordinates=function(t,e,i,n){var s=i.children[n];return s.attribute("x").hasValue()?(s.x=s.attribute("x").toPixels("x")+e.getAnchorDelta(t,i,n),s.attribute("dx").hasValue()&&(s.x+=s.attribute("dx").toPixels("x"))):(s.attribute("dx").hasValue()&&(e.x+=s.attribute("dx").toPixels("x")),s.x=e.x),e.x=s.x+s.measureText(t),s.attribute("y").hasValue()?(s.y=s.attribute("y").toPixels("y"),s.attribute("dy").hasValue()&&(s.y+=s.attribute("dy").toPixels("y"))):(s.attribute("dy").hasValue()&&(e.y+=s.attribute("dy").toPixels("y")),s.y=e.y),e.y=s.y,s},this.getChildBoundingBox=function(t,e,i,n){var s=this.adjustChildCoordinates(t,e,i,n),a=s.getBoundingBox(t);for(n=0;n<s.children.length;n++){var r=e.getChildBoundingBox(t,e,s,n);a.addBoundingBox(r)}return a},this.renderChild=function(t,e,i,n){var s=this.adjustChildCoordinates(t,e,i,n);for(s.render(t),n=0;n<s.children.length;n++)e.renderChild(t,e,s,n)}},A.Element.text.prototype=new A.Element.RenderedElementBase,A.Element.TextElementBase=function(t){this.base=A.Element.RenderedElementBase,this.base(t),this.getGlyph=function(t,e,i){var n=e[i],s=null;if(t.isArabic){var a="isolated";(0==i||" "==e[i-1])&&i<e.length-2&&" "!=e[i+1]&&(a="terminal"),0<i&&" "!=e[i-1]&&i<e.length-2&&" "!=e[i+1]&&(a="medial"),0<i&&" "!=e[i-1]&&(i==e.length-1||" "==e[i+1])&&(a="initial"),void 0!==t.glyphs[n]&&null==(s=t.glyphs[n][a])&&"glyph"==t.glyphs[n].type&&(s=t.glyphs[n])}else s=t.glyphs[n];return null==s&&(s=t.missingGlyph),s},this.renderChildren=function(t){var e=this.parent.style("font-family").getDefinition();if(null==e)"stroke"==t.paintOrder?(""!=t.strokeStyle&&t.strokeText(A.compressSpaces(this.getText()),this.x,this.y),""!=t.fillStyle&&t.fillText(A.compressSpaces(this.getText()),this.x,this.y)):(""!=t.fillStyle&&t.fillText(A.compressSpaces(this.getText()),this.x,this.y),""!=t.strokeStyle&&t.strokeText(A.compressSpaces(this.getText()),this.x,this.y));else{var i=this.parent.style("font-size").numValueOrDefault(A.Font.Parse(A.ctx.font).fontSize),n=this.parent.style("font-style").valueOrDefault(A.Font.Parse(A.ctx.font).fontStyle),s=this.getText();e.isRTL&&(s=s.split("").reverse().join(""));for(var a=A.ToNumberArray(this.parent.attribute("dx").value),r=0;r<s.length;r++){var o=this.getGlyph(e,s,r),l=i/e.fontFace.unitsPerEm;t.translate(this.x,this.y),t.scale(l,-l);var h=t.lineWidth;t.lineWidth=t.lineWidth*e.fontFace.unitsPerEm/i,"italic"==n&&t.transform(1,0,.4,1,0,0),o.render(t),"italic"==n&&t.transform(1,0,-.4,1,0,0),t.lineWidth=h,t.scale(1/l,-1/l),t.translate(-this.x,-this.y),this.x+=i*(o.horizAdvX||e.horizAdvX)/e.fontFace.unitsPerEm,void 0===a[r]||isNaN(a[r])||(this.x+=a[r])}}},this.getText=function(){},this.measureTextRecursive=function(t){for(var e=this.measureText(t),i=0;i<this.children.length;i++)e+=this.children[i].measureTextRecursive(t);return e},this.measureText=function(t){var e=this.parent.style("font-family").getDefinition();if(null!=e){var i=this.parent.style("font-size").numValueOrDefault(A.Font.Parse(A.ctx.font).fontSize),n=0,s=this.getText();e.isRTL&&(s=s.split("").reverse().join(""));for(var a=A.ToNumberArray(this.parent.attribute("dx").value),r=0;r<s.length;r++)n+=(this.getGlyph(e,s,r).horizAdvX||e.horizAdvX)*i/e.fontFace.unitsPerEm,void 0===a[r]||isNaN(a[r])||(n+=a[r]);return n}var o=A.compressSpaces(this.getText());if(!t.measureText)return 10*o.length;t.save(),this.setContext(t,!0);var l=t.measureText(o).width;return t.restore(),l},this.getBoundingBox=function(t){var e=this.parent.style("font-size").numValueOrDefault(A.Font.Parse(A.ctx.font).fontSize);return new A.BoundingBox(this.x,this.y-e,this.x+this.measureText(t),this.y)}},A.Element.TextElementBase.prototype=new A.Element.RenderedElementBase,A.Element.tspan=function(t){this.captureTextNodes=!0,this.base=A.Element.TextElementBase,this.base(t),this.text=A.compressSpaces(t.value||t.text||t.textContent||""),this.getText=function(){return 0<this.children.length?"":this.text}},A.Element.tspan.prototype=new A.Element.TextElementBase,A.Element.tref=function(t){this.base=A.Element.TextElementBase,this.base(t),this.getText=function(){var t=this.getHrefAttribute().getDefinition();if(null!=t)return t.children[0].getText()}},A.Element.tref.prototype=new A.Element.TextElementBase,A.Element.a=function(t){this.base=A.Element.TextElementBase,this.base(t),this.hasText=0<t.childNodes.length;for(var e=0;e<t.childNodes.length;e++)3!=t.childNodes[e].nodeType&&(this.hasText=!1);this.text=this.hasText?t.childNodes[0].value||t.childNodes[0].data:"",this.getText=function(){return this.text},this.baseRenderChildren=this.renderChildren,this.renderChildren=function(t){if(this.hasText){this.baseRenderChildren(t);var e=new A.Property("fontSize",A.Font.Parse(A.ctx.font).fontSize);A.Mouse.checkBoundingBox(this,new A.BoundingBox(this.x,this.y-e.toPixels("y"),this.x+this.measureText(t),this.y))}else if(0<this.children.length){var i=new A.Element.g;i.children=this.children,i.parent=this,i.render(t)}},this.onclick=function(){u.open(this.getHrefAttribute().value)},this.onmousemove=function(){A.ctx.canvas.style.cursor="pointer"}},A.Element.a.prototype=new A.Element.TextElementBase,A.Element.image=function(t){this.base=A.Element.RenderedElementBase,this.base(t);var e=this.getHrefAttribute().value;if(""!=e){var a=e.match(/\.svg$/);if(A.Images.push(this),this.loaded=!1,a)this.img=A.ajax(e),this.loaded=!0;else{this.img=document.createElement("img"),1==A.opts.useCORS&&(this.img.crossOrigin="Anonymous");var r=this;this.img.onload=function(){r.loaded=!0},this.img.onerror=function(){A.log('ERROR: image "'+e+'" not found'),r.loaded=!0},this.img.src=e}this.renderChildren=function(t){var e=this.attribute("x").toPixels("x"),i=this.attribute("y").toPixels("y"),n=this.attribute("width").toPixels("x"),s=this.attribute("height").toPixels("y");0!=n&&0!=s&&(t.save(),a?t.drawSvg(this.img,e,i,n,s):(t.translate(e,i),A.AspectRatio(t,this.attribute("preserveAspectRatio").value,n,this.img.width,s,this.img.height,0,0),r.loaded&&(void 0===this.img.complete||this.img.complete)&&t.drawImage(this.img,0,0)),t.restore())},this.getBoundingBox=function(){var t=this.attribute("x").toPixels("x"),e=this.attribute("y").toPixels("y"),i=this.attribute("width").toPixels("x"),n=this.attribute("height").toPixels("y");return new A.BoundingBox(t,e,t+i,e+n)}}},A.Element.image.prototype=new A.Element.RenderedElementBase,A.Element.g=function(t){this.base=A.Element.RenderedElementBase,this.base(t),this.getBoundingBox=function(t){for(var e=new A.BoundingBox,i=0;i<this.children.length;i++)e.addBoundingBox(this.children[i].getBoundingBox(t));return e}},A.Element.g.prototype=new A.Element.RenderedElementBase,A.Element.symbol=function(t){this.base=A.Element.RenderedElementBase,this.base(t),this.render=function(t){}},A.Element.symbol.prototype=new A.Element.RenderedElementBase,A.Element.style=function(t){this.base=A.Element.ElementBase,this.base(t);for(var e="",i=0;i<t.childNodes.length;i++)e+=t.childNodes[i].data;e=e.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm,"");var n=(e=A.compressSpaces(e)).split("}");for(i=0;i<n.length;i++)if(""!=A.trim(n[i]))for(var s=n[i].split("{"),a=s[0].split(","),r=s[1].split(";"),o=0;o<a.length;o++){var l=A.trim(a[o]);if(""!=l){for(var h=A.Styles[l]||{},u=0;u<r.length;u++){var c=r[u].indexOf(":"),f=r[u].substr(0,c),m=r[u].substr(c+1,r[u].length-c);null!=f&&null!=m&&(h[A.trim(f)]=new A.Property(A.trim(f),A.trim(m)))}if(A.Styles[l]=h,A.StylesSpecificity[l]=w(l),"@font-face"==l)for(var p=h["font-family"].value.replace(/"/g,""),d=h.src.value.split(","),y=0;y<d.length;y++)if(0<d[y].indexOf('format("svg")'))for(var v=d[y].indexOf("url"),g=d[y].indexOf(")",v),x=d[y].substr(v+5,g-v-6),b=A.parseXml(A.ajax(x)).getElementsByTagName("font"),P=0;P<b.length;P++){var E=A.CreateElement(b[P]);A.Definitions[p]=E}}}},A.Element.style.prototype=new A.Element.ElementBase,A.Element.use=function(t){this.base=A.Element.RenderedElementBase,this.base(t),this.baseSetContext=this.setContext,this.setContext=function(t){this.baseSetContext(t),this.attribute("x").hasValue()&&t.translate(this.attribute("x").toPixels("x"),0),this.attribute("y").hasValue()&&t.translate(0,this.attribute("y").toPixels("y"))};var n=this.getHrefAttribute().getDefinition();this.path=function(t){null!=n&&n.path(t)},this.elementTransform=function(){if(null!=n&&n.style("transform",!1,!0).hasValue())return new A.Transform(n.style("transform",!1,!0).value)},this.getBoundingBox=function(t){if(null!=n)return n.getBoundingBox(t)},this.renderChildren=function(t){if(null!=n){var e=n;"symbol"==n.type&&((e=new A.Element.svg).type="svg",e.attributes.viewBox=new A.Property("viewBox",n.attribute("viewBox").value),e.attributes.preserveAspectRatio=new A.Property("preserveAspectRatio",n.attribute("preserveAspectRatio").value),e.attributes.overflow=new A.Property("overflow",n.attribute("overflow").value),e.children=n.children),"svg"==e.type&&(this.attribute("width").hasValue()&&(e.attributes.width=new A.Property("width",this.attribute("width").value)),this.attribute("height").hasValue()&&(e.attributes.height=new A.Property("height",this.attribute("height").value)));var i=e.parent;e.parent=null,e.render(t),e.parent=i}}},A.Element.use.prototype=new A.Element.RenderedElementBase,A.Element.mask=function(t){this.base=A.Element.ElementBase,this.base(t),this.apply=function(t,e){var i=this.attribute("x").toPixels("x"),n=this.attribute("y").toPixels("y"),s=this.attribute("width").toPixels("x"),a=this.attribute("height").toPixels("y");if(0==s&&0==a){for(var r=new A.BoundingBox,o=0;o<this.children.length;o++)r.addBoundingBox(this.children[o].getBoundingBox(t));i=Math.floor(r.x1),n=Math.floor(r.y1),s=Math.floor(r.width()),a=Math.floor(r.height())}var l=e.attribute("mask").value;e.attribute("mask").value="";var h=p();h.width=i+s,h.height=n+a;var u=h.getContext("2d");this.renderChildren(u);var c=p();c.width=i+s,c.height=n+a;var f=c.getContext("2d");e.render(f),f.globalCompositeOperation="destination-in",f.fillStyle=u.createPattern(h,"no-repeat"),f.fillRect(0,0,i+s,n+a),t.fillStyle=f.createPattern(c,"no-repeat"),t.fillRect(0,0,i+s,n+a),e.attribute("mask").value=l},this.render=function(t){}},A.Element.mask.prototype=new A.Element.ElementBase,A.Element.clipPath=function(t){this.base=A.Element.ElementBase,this.base(t),this.apply=function(t){var e="undefined"!=typeof CanvasRenderingContext2D,i=t.beginPath,n=t.closePath;e&&(CanvasRenderingContext2D.prototype.beginPath=function(){},CanvasRenderingContext2D.prototype.closePath=function(){}),i.call(t);for(var s=0;s<this.children.length;s++){var a=this.children[s];if(void 0!==a.path){var r=void 0!==a.elementTransform&&a.elementTransform();!r&&a.style("transform",!1,!0).hasValue()&&(r=new A.Transform(a.style("transform",!1,!0).value)),r&&r.apply(t),a.path(t),e&&(CanvasRenderingContext2D.prototype.closePath=n),r&&r.unapply(t)}}n.call(t),t.clip(),e&&(CanvasRenderingContext2D.prototype.beginPath=i,CanvasRenderingContext2D.prototype.closePath=n)},this.render=function(t){}},A.Element.clipPath.prototype=new A.Element.ElementBase,A.Element.filter=function(t){this.base=A.Element.ElementBase,this.base(t),this.apply=function(t,e){var i=e.getBoundingBox(t),n=Math.floor(i.x1),s=Math.floor(i.y1),a=Math.floor(i.width()),r=Math.floor(i.height()),o=e.style("filter").value;e.style("filter").value="";for(var l=0,h=0,u=0;u<this.children.length;u++){var c=this.children[u].extraFilterDistance||0;l=Math.max(l,c),h=Math.max(h,c)}var f=p();f.width=a+2*l,f.height=r+2*h;var m=f.getContext("2d");for(m.translate(-n+l,-s+h),e.render(m),u=0;u<this.children.length;u++)"function"==typeof this.children[u].apply&&this.children[u].apply(m,0,0,a+2*l,r+2*h);t.drawImage(f,0,0,a+2*l,r+2*h,n-l,s-h,a+2*l,r+2*h),e.style("filter",!0).value=o},this.render=function(t){}},A.Element.filter.prototype=new A.Element.ElementBase,A.Element.feMorphology=function(t){this.base=A.Element.ElementBase,this.base(t),this.apply=function(t,e,i,n,s){}},A.Element.feMorphology.prototype=new A.Element.ElementBase,A.Element.feComposite=function(t){this.base=A.Element.ElementBase,this.base(t),this.apply=function(t,e,i,n,s){}},A.Element.feComposite.prototype=new A.Element.ElementBase,A.Element.feColorMatrix=function(t){this.base=A.Element.ElementBase,this.base(t);var n=A.ToNumberArray(this.attribute("values").value);switch(this.attribute("type").valueOrDefault("matrix")){case"saturate":var e=n[0];n=[.213+.787*e,.715-.715*e,.072-.072*e,0,0,.213-.213*e,.715+.285*e,.072-.072*e,0,0,.213-.213*e,.715-.715*e,.072+.928*e,0,0,0,0,0,1,0,0,0,0,0,1];break;case"hueRotate":var s=n[0]*Math.PI/180,i=function(t,e,i){return t+Math.cos(s)*e+Math.sin(s)*i};n=[i(.213,.787,-.213),i(.715,-.715,-.715),i(.072,-.072,.928),0,0,i(.213,-.213,.143),i(.715,.285,.14),i(.072,-.072,-.283),0,0,i(.213,-.213,-.787),i(.715,-.715,.715),i(.072,.928,.072),0,0,0,0,0,1,0,0,0,0,0,1];break;case"luminanceToAlpha":n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.2125,.7154,.0721,0,0,0,0,0,0,1]}function u(t,e,i,n,s,a){return t[i*n*4+4*e+a]}function c(t,e,i,n,s,a,r){t[i*n*4+4*e+a]=r}function f(t,e){var i=n[t];return i*(i<0?e-255:e)}this.apply=function(t,e,i,n,s){var a=t.getImageData(0,0,n,s);for(i=0;i<s;i++)for(e=0;e<n;e++){var r=u(a.data,e,i,n,0,0),o=u(a.data,e,i,n,0,1),l=u(a.data,e,i,n,0,2),h=u(a.data,e,i,n,0,3);c(a.data,e,i,n,0,0,f(0,r)+f(1,o)+f(2,l)+f(3,h)+f(4,1)),c(a.data,e,i,n,0,1,f(5,r)+f(6,o)+f(7,l)+f(8,h)+f(9,1)),c(a.data,e,i,n,0,2,f(10,r)+f(11,o)+f(12,l)+f(13,h)+f(14,1)),c(a.data,e,i,n,0,3,f(15,r)+f(16,o)+f(17,l)+f(18,h)+f(19,1))}t.clearRect(0,0,n,s),t.putImageData(a,0,0)}},A.Element.feColorMatrix.prototype=new A.Element.ElementBase,A.Element.feGaussianBlur=function(t){this.base=A.Element.ElementBase,this.base(t),this.blurRadius=Math.floor(this.attribute("stdDeviation").numValue()),this.extraFilterDistance=this.blurRadius,this.apply=function(t,e,i,n,s){d&&void 0!==d.canvasRGBA?(t.canvas.id=A.UniqueId(),t.canvas.style.display="none",document.body.appendChild(t.canvas),d.canvasRGBA(t.canvas,e,i,n,s,this.blurRadius),document.body.removeChild(t.canvas)):A.log("ERROR: StackBlur.js must be included for blur to work")}},A.Element.feGaussianBlur.prototype=new A.Element.ElementBase,A.Element.title=function(t){},A.Element.title.prototype=new A.Element.ElementBase,A.Element.desc=function(t){},A.Element.desc.prototype=new A.Element.ElementBase,A.Element.MISSING=function(t){A.log("ERROR: Element '"+t.nodeName+"' not yet implemented.")},A.Element.MISSING.prototype=new A.Element.ElementBase,A.CreateElement=function(t){var e=t.nodeName.replace(/^[^:]+:/,"");e=e.replace(/\-/g,"");var i=null;return(i=void 0!==A.Element[e]?new A.Element[e](t):new A.Element.MISSING(t)).type=t.nodeName,i},A.load=function(t,e){A.loadXml(t,A.ajax(e))},A.loadXml=function(t,e){A.loadXmlDoc(t,A.parseXml(e))},A.loadXmlDoc=function(a,r){A.init(a);var i=function(t){for(var e=a.canvas;e;)t.x-=e.offsetLeft,t.y-=e.offsetTop,e=e.offsetParent;return u.scrollX&&(t.x+=u.scrollX),u.scrollY&&(t.y+=u.scrollY),t};1!=A.opts.ignoreMouse&&(a.canvas.onclick=function(t){var e=i(new A.Point(null!=t?t.clientX:event.clientX,null!=t?t.clientY:event.clientY));A.Mouse.onclick(e.x,e.y)},a.canvas.onmousemove=function(t){var e=i(new A.Point(null!=t?t.clientX:event.clientX,null!=t?t.clientY:event.clientY));A.Mouse.onmousemove(e.x,e.y)});var o=A.CreateElement(r.documentElement);o.root=!0,o.addStylesFromStyleDefinition();var l=!0,n=function(){A.ViewPort.Clear(),a.canvas.parentNode?A.ViewPort.SetCurrent(a.canvas.parentNode.clientWidth,a.canvas.parentNode.clientHeight):A.ViewPort.SetCurrent(800,600),1!=A.opts.ignoreDimensions&&(o.style("width").hasValue()&&(a.canvas.width=o.style("width").toPixels("x"),a.canvas.style&&(a.canvas.style.width=a.canvas.width+"px")),o.style("height").hasValue()&&(a.canvas.height=o.style("height").toPixels("y"),a.canvas.style&&(a.canvas.style.height=a.canvas.height+"px")));var t=a.canvas.clientWidth||a.canvas.width,e=a.canvas.clientHeight||a.canvas.height;if(1==A.opts.ignoreDimensions&&o.style("width").hasValue()&&o.style("height").hasValue()&&(t=o.style("width").toPixels("x"),e=o.style("height").toPixels("y")),A.ViewPort.SetCurrent(t,e),null!=A.opts.offsetX&&(o.attribute("x",!0).value=A.opts.offsetX),null!=A.opts.offsetY&&(o.attribute("y",!0).value=A.opts.offsetY),null!=A.opts.scaleWidth||null!=A.opts.scaleHeight){var i=null,n=null,s=A.ToNumberArray(o.attribute("viewBox").value);null!=A.opts.scaleWidth&&(o.attribute("width").hasValue()?i=o.attribute("width").toPixels("x")/A.opts.scaleWidth:isNaN(s[2])||(i=s[2]/A.opts.scaleWidth)),null!=A.opts.scaleHeight&&(o.attribute("height").hasValue()?n=o.attribute("height").toPixels("y")/A.opts.scaleHeight:isNaN(s[3])||(n=s[3]/A.opts.scaleHeight)),null==i&&(i=n),null==n&&(n=i),o.attribute("width",!0).value=A.opts.scaleWidth,o.attribute("height",!0).value=A.opts.scaleHeight,o.style("transform",!0,!0).value+=" scale("+1/i+","+1/n+")"}1!=A.opts.ignoreClear&&a.clearRect(0,0,t,e),o.render(a),l&&(l=!1,"function"==typeof A.opts.renderCallback&&A.opts.renderCallback(r))},s=!0;A.ImagesLoaded()&&(s=!1,n()),A.intervalID=setInterval(function(){var t=!1;if(s&&A.ImagesLoaded()&&(t=!(s=!1)),1!=A.opts.ignoreMouse&&(t|=A.Mouse.hasEvents()),1!=A.opts.ignoreAnimation)for(var e=0;e<A.Animations.length;e++)t|=A.Animations[e].update(1e3/A.FRAMERATE);"function"==typeof A.opts.forceRedraw&&1==A.opts.forceRedraw()&&(t=!0),t&&(n(),A.Mouse.runEvents())},1e3/A.FRAMERATE)},A.stop=function(){A.intervalID&&clearInterval(A.intervalID)},A.Mouse=new function(){this.events=[],this.hasEvents=function(){return 0!=this.events.length},this.onclick=function(t,e){this.events.push({type:"onclick",x:t,y:e,run:function(t){t.onclick&&t.onclick()}})},this.onmousemove=function(t,e){this.events.push({type:"onmousemove",x:t,y:e,run:function(t){t.onmousemove&&t.onmousemove()}})},this.eventElements=[],this.checkPath=function(t,e){for(var i=0;i<this.events.length;i++){var n=this.events[i];e.isPointInPath&&e.isPointInPath(n.x,n.y)&&(this.eventElements[i]=t)}},this.checkBoundingBox=function(t,e){for(var i=0;i<this.events.length;i++){var n=this.events[i];e.isPointInBox(n.x,n.y)&&(this.eventElements[i]=t)}},this.runEvents=function(){A.ctx.canvas.style.cursor="";for(var t=0;t<this.events.length;t++)for(var e=this.events[t],i=this.eventElements[t];i;)e.run(i),i=i.parent;this.events=[],this.eventElements=[]}},A}(i||{});"string"==typeof t&&(t=document.getElementById(t)),null!=t.svg&&t.svg.stop(),t.childNodes&&1==t.childNodes.length&&"OBJECT"==t.childNodes[0].nodeName||(t.svg=n);var s=t.getContext("2d");void 0!==e.documentElement?n.loadXmlDoc(s,e):"<"==e.substr(0,1)?n.loadXml(s,e):n.load(s,e)}else for(var a=document.querySelectorAll("svg"),r=0;r<a.length;r++){var o=a[r],l=document.createElement("canvas");l.width=o.clientWidth,l.height=o.clientHeight,o.parentNode.insertBefore(l,o),o.parentNode.removeChild(o);var h=document.createElement("div");h.appendChild(o),c(l,h.innerHTML)}};"undefined"==typeof Element||(void 0!==Element.prototype.matches?f=function(t,e){return t.matches(e)}:void 0!==Element.prototype.webkitMatchesSelector?f=function(t,e){return t.webkitMatchesSelector(e)}:void 0!==Element.prototype.mozMatchesSelector?f=function(t,e){return t.mozMatchesSelector(e)}:void 0!==Element.prototype.msMatchesSelector?f=function(t,e){return t.msMatchesSelector(e)}:void 0!==Element.prototype.oMatchesSelector?f=function(t,e){return t.oMatchesSelector(e)}:("function"!=typeof jQuery&&"function"!=typeof Zepto||(f=function(t,e){return $(t).is(e)}),void 0===f&&"undefined"!=typeof Sizzle&&(f=Sizzle.matchesSelector)));var e=/(\[[^\]]+\])/g,i=/(#[^\s\+>~\.\[:]+)/g,a=/(\.[^\s\+>~\.\[:]+)/g,r=/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,o=/(:[\w-]+\([^\)]*\))/gi,l=/(:[^\s\+>~\.\[:]+)/g,h=/([^\s\+>~\.\[:]+)/g;function w(n){var s=[0,0,0],t=function(t,e){var i=n.match(t);null!=i&&(s[e]+=i.length,n=n.replace(t," "))};return n=(n=n.replace(/:not\(([^\)]*)\)/g,"     $1 ")).replace(/{[\s\S]*/gm," "),t(e,1),t(i,0),t(a,1),t(r,2),t(o,1),t(l,1),n=(n=n.replace(/[\*\s\+>~]/g," ")).replace(/[#\.]/g," "),t(h,2),s.join("")}"undefined"!=typeof CanvasRenderingContext2D&&(CanvasRenderingContext2D.prototype.drawSvg=function(t,e,i,n,s,a){var r={ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0,ignoreClear:!0,offsetX:e,offsetY:i,scaleWidth:n,scaleHeight:s};for(var o in a)a.hasOwnProperty(o)&&(r[o]=a[o]);c(this.canvas,t,r)}),t.exports=c}(t={exports:{}},t.exports),t.exports});

/***/ }),

/***/ "./node_modules/rgbcolor/index.js":
/*!****************************************!*\
  !*** ./node_modules/rgbcolor/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	Based on rgbcolor.js by Stoyan Stefanov <sstoo@gmail.com>
	http://www.phpied.com/rgb-color-parser-in-javascript/
*/

module.exports = function(color_string) {
    this.ok = false;
    this.alpha = 1.0;

    // strip any leading #
    if (color_string.charAt(0) == '#') { // remove # if any
        color_string = color_string.substr(1,6);
    }

    color_string = color_string.replace(/ /g,'');
    color_string = color_string.toLowerCase();

    // before getting into regexps, try simple matches
    // and overwrite the input
    var simple_colors = {
        aliceblue: 'f0f8ff',
        antiquewhite: 'faebd7',
        aqua: '00ffff',
        aquamarine: '7fffd4',
        azure: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '000000',
        blanchedalmond: 'ffebcd',
        blue: '0000ff',
        blueviolet: '8a2be2',
        brown: 'a52a2a',
        burlywood: 'deb887',
        cadetblue: '5f9ea0',
        chartreuse: '7fff00',
        chocolate: 'd2691e',
        coral: 'ff7f50',
        cornflowerblue: '6495ed',
        cornsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: '00ffff',
        darkblue: '00008b',
        darkcyan: '008b8b',
        darkgoldenrod: 'b8860b',
        darkgray: 'a9a9a9',
        darkgreen: '006400',
        darkkhaki: 'bdb76b',
        darkmagenta: '8b008b',
        darkolivegreen: '556b2f',
        darkorange: 'ff8c00',
        darkorchid: '9932cc',
        darkred: '8b0000',
        darksalmon: 'e9967a',
        darkseagreen: '8fbc8f',
        darkslateblue: '483d8b',
        darkslategray: '2f4f4f',
        darkturquoise: '00ced1',
        darkviolet: '9400d3',
        deeppink: 'ff1493',
        deepskyblue: '00bfff',
        dimgray: '696969',
        dodgerblue: '1e90ff',
        feldspar: 'd19275',
        firebrick: 'b22222',
        floralwhite: 'fffaf0',
        forestgreen: '228b22',
        fuchsia: 'ff00ff',
        gainsboro: 'dcdcdc',
        ghostwhite: 'f8f8ff',
        gold: 'ffd700',
        goldenrod: 'daa520',
        gray: '808080',
        green: '008000',
        greenyellow: 'adff2f',
        honeydew: 'f0fff0',
        hotpink: 'ff69b4',
        indianred : 'cd5c5c',
        indigo : '4b0082',
        ivory: 'fffff0',
        khaki: 'f0e68c',
        lavender: 'e6e6fa',
        lavenderblush: 'fff0f5',
        lawngreen: '7cfc00',
        lemonchiffon: 'fffacd',
        lightblue: 'add8e6',
        lightcoral: 'f08080',
        lightcyan: 'e0ffff',
        lightgoldenrodyellow: 'fafad2',
        lightgrey: 'd3d3d3',
        lightgreen: '90ee90',
        lightpink: 'ffb6c1',
        lightsalmon: 'ffa07a',
        lightseagreen: '20b2aa',
        lightskyblue: '87cefa',
        lightslateblue: '8470ff',
        lightslategray: '778899',
        lightsteelblue: 'b0c4de',
        lightyellow: 'ffffe0',
        lime: '00ff00',
        limegreen: '32cd32',
        linen: 'faf0e6',
        magenta: 'ff00ff',
        maroon: '800000',
        mediumaquamarine: '66cdaa',
        mediumblue: '0000cd',
        mediumorchid: 'ba55d3',
        mediumpurple: '9370d8',
        mediumseagreen: '3cb371',
        mediumslateblue: '7b68ee',
        mediumspringgreen: '00fa9a',
        mediumturquoise: '48d1cc',
        mediumvioletred: 'c71585',
        midnightblue: '191970',
        mintcream: 'f5fffa',
        mistyrose: 'ffe4e1',
        moccasin: 'ffe4b5',
        navajowhite: 'ffdead',
        navy: '000080',
        oldlace: 'fdf5e6',
        olive: '808000',
        olivedrab: '6b8e23',
        orange: 'ffa500',
        orangered: 'ff4500',
        orchid: 'da70d6',
        palegoldenrod: 'eee8aa',
        palegreen: '98fb98',
        paleturquoise: 'afeeee',
        palevioletred: 'd87093',
        papayawhip: 'ffefd5',
        peachpuff: 'ffdab9',
        peru: 'cd853f',
        pink: 'ffc0cb',
        plum: 'dda0dd',
        powderblue: 'b0e0e6',
        purple: '800080',
        rebeccapurple: '663399',
        red: 'ff0000',
        rosybrown: 'bc8f8f',
        royalblue: '4169e1',
        saddlebrown: '8b4513',
        salmon: 'fa8072',
        sandybrown: 'f4a460',
        seagreen: '2e8b57',
        seashell: 'fff5ee',
        sienna: 'a0522d',
        silver: 'c0c0c0',
        skyblue: '87ceeb',
        slateblue: '6a5acd',
        slategray: '708090',
        snow: 'fffafa',
        springgreen: '00ff7f',
        steelblue: '4682b4',
        tan: 'd2b48c',
        teal: '008080',
        thistle: 'd8bfd8',
        tomato: 'ff6347',
        turquoise: '40e0d0',
        violet: 'ee82ee',
        violetred: 'd02090',
        wheat: 'f5deb3',
        white: 'ffffff',
        whitesmoke: 'f5f5f5',
        yellow: 'ffff00',
        yellowgreen: '9acd32'
    };
    color_string = simple_colors[color_string] || color_string;
    // emd of simple type-in colors

    // array of color definition objects
    var color_defs = [
        {
            re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
            example: ['rgba(123, 234, 45, 0.8)', 'rgba(255,234,245,1.0)'],
            process: function (bits){
                return [
                    parseInt(bits[1]),
                    parseInt(bits[2]),
                    parseInt(bits[3]),
                    parseFloat(bits[4])
                ];
            }
        },
        {
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
            process: function (bits){
                return [
                    parseInt(bits[1]),
                    parseInt(bits[2]),
                    parseInt(bits[3])
                ];
            }
        },
        {
            re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            example: ['#00ff00', '336699'],
            process: function (bits){
                return [
                    parseInt(bits[1], 16),
                    parseInt(bits[2], 16),
                    parseInt(bits[3], 16)
                ];
            }
        },
        {
            re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            example: ['#fb0', 'f0f'],
            process: function (bits){
                return [
                    parseInt(bits[1] + bits[1], 16),
                    parseInt(bits[2] + bits[2], 16),
                    parseInt(bits[3] + bits[3], 16)
                ];
            }
        }
    ];

    // search through the definitions to find a match
    for (var i = 0; i < color_defs.length; i++) {
        var re = color_defs[i].re;
        var processor = color_defs[i].process;
        var bits = re.exec(color_string);
        if (bits) {
            var channels = processor(bits);
            this.r = channels[0];
            this.g = channels[1];
            this.b = channels[2];
            if (channels.length > 3) {
                this.alpha = channels[3];
            }
            this.ok = true;
        }

    }

    // validate/cleanup values
    this.r = (this.r < 0 || isNaN(this.r)) ? 0 : ((this.r > 255) ? 255 : this.r);
    this.g = (this.g < 0 || isNaN(this.g)) ? 0 : ((this.g > 255) ? 255 : this.g);
    this.b = (this.b < 0 || isNaN(this.b)) ? 0 : ((this.b > 255) ? 255 : this.b);
    this.alpha = (this.alpha < 0) ? 0 : ((this.alpha > 1.0 || isNaN(this.alpha)) ? 1.0 : this.alpha);

    // some getters
    this.toRGB = function () {
        return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
    }
    this.toRGBA = function () {
        return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.alpha + ')';
    }
    this.toHex = function () {
        var r = this.r.toString(16);
        var g = this.g.toString(16);
        var b = this.b.toString(16);
        if (r.length == 1) r = '0' + r;
        if (g.length == 1) g = '0' + g;
        if (b.length == 1) b = '0' + b;
        return '#' + r + g + b;
    }

    // help
    this.getHelpXML = function () {

        var examples = new Array();
        // add regexps
        for (var i = 0; i < color_defs.length; i++) {
            var example = color_defs[i].example;
            for (var j = 0; j < example.length; j++) {
                examples[examples.length] = example[j];
            }
        }
        // add type-in colors
        for (var sc in simple_colors) {
            examples[examples.length] = sc;
        }

        var xml = document.createElement('ul');
        xml.setAttribute('id', 'rgbcolor-examples');
        for (var i = 0; i < examples.length; i++) {
            try {
                var list_item = document.createElement('li');
                var list_color = new RGBColor(examples[i]);
                var example_div = document.createElement('div');
                example_div.style.cssText =
                        'margin: 3px; '
                        + 'border: 1px solid black; '
                        + 'background:' + list_color.toHex() + '; '
                        + 'color:' + list_color.toHex()
                ;
                example_div.appendChild(document.createTextNode('test'));
                var list_item_value = document.createTextNode(
                    ' ' + examples[i] + ' -> ' + list_color.toRGB() + ' -> ' + list_color.toHex()
                );
                list_item.appendChild(example_div);
                list_item.appendChild(list_item_value);
                xml.appendChild(list_item);

            } catch(e){}
        }
        return xml;

    }

}


/***/ }),

/***/ "./node_modules/stackblur-canvas/src/stackblur.js":
/*!********************************************************!*\
  !*** ./node_modules/stackblur-canvas/src/stackblur.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
    StackBlur - a fast almost Gaussian Blur For Canvas

    Version:     0.5
    Author:        Mario Klingemann
    Contact:     mario@quasimondo.com
    Website:    http://www.quasimondo.com/StackBlurForCanvas
    Twitter:    @quasimondo

    In case you find this class useful - especially in commercial projects -
    I am not totally unhappy for a small donation to my PayPal account
    mario@quasimondo.de

    Or support me on flattr:
    https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript

    Copyright (c) 2010 Mario Klingemann

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
    */


var mul_table = [
    512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,
    454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,
    482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,
    437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,
    497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,
    320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,
    446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,
    329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,
    505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,
    399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,
    324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,
    268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,
    451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,
    385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,
    332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,
    289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];


var shg_table = [
    9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17,
    17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19,
    19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20,
    20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21,
    21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
    21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22,
    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24 ];


function processImage(img, canvas, radius, blurAlphaChannel)
{
    if (typeof(img) == 'string') {
        var img = document.getElementById(img);
    }
    else if (typeof HTMLImageElement !== 'undefined' && !img instanceof HTMLImageElement) {
        return;
    }
    var w = img.naturalWidth;
    var h = img.naturalHeight;

    if (typeof(canvas) == 'string') {
        var canvas = document.getElementById(canvas);
    }
    else if (typeof HTMLCanvasElement !== 'undefined' && !canvas instanceof HTMLCanvasElement) {
        return;
    }

    canvas.style.width  = w + 'px';
    canvas.style.height = h + 'px';
    canvas.width = w;
    canvas.height = h;

    var context = canvas.getContext('2d');
    context.clearRect(0, 0, w, h);
    context.drawImage(img, 0, 0);

    if (isNaN(radius) || radius < 1) return;

    if (blurAlphaChannel)
        processCanvasRGBA(canvas, 0, 0, w, h, radius);
    else
        processCanvasRGB(canvas, 0, 0, w, h, radius);
}

function getImageDataFromCanvas(canvas, top_x, top_y, width, height)
{
    if (typeof(canvas) == 'string')
        var canvas  = document.getElementById(canvas);
    else if (typeof HTMLCanvasElement !== 'undefined' && !canvas instanceof HTMLCanvasElement)
        return;

    var context = canvas.getContext('2d');
    var imageData;

    try {
        try {
            imageData = context.getImageData(top_x, top_y, width, height);
        } catch(e) {
            throw new Error("unable to access local image data: " + e);
            return;
        }
    } catch(e) {
        throw new Error("unable to access image data: " + e);
    }

    return imageData;
}

function processCanvasRGBA(canvas, top_x, top_y, width, height, radius)
{
    if (isNaN(radius) || radius < 1) return;
    radius |= 0;

    var imageData = getImageDataFromCanvas(canvas, top_x, top_y, width, height);

    imageData = processImageDataRGBA(imageData, top_x, top_y, width, height, radius);

    canvas.getContext('2d').putImageData(imageData, top_x, top_y);
}

function processImageDataRGBA(imageData, top_x, top_y, width, height, radius)
{
    var pixels = imageData.data;

    var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum,
        r_out_sum, g_out_sum, b_out_sum, a_out_sum,
        r_in_sum, g_in_sum, b_in_sum, a_in_sum,
        pr, pg, pb, pa, rbs;

    var div = radius + radius + 1;
    var w4 = width << 2;
    var widthMinus1  = width - 1;
    var heightMinus1 = height - 1;
    var radiusPlus1  = radius + 1;
    var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;

    var stackStart = new BlurStack();
    var stack = stackStart;
    for (i = 1; i < div; i++)
    {
        stack = stack.next = new BlurStack();
        if (i == radiusPlus1) var stackEnd = stack;
    }
    stack.next = stackStart;
    var stackIn = null;
    var stackOut = null;

    yw = yi = 0;

    var mul_sum = mul_table[radius];
    var shg_sum = shg_table[radius];

    for (y = 0; y < height; y++)
    {
        r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;

        r_out_sum = radiusPlus1 * (pr = pixels[yi]);
        g_out_sum = radiusPlus1 * (pg = pixels[yi+1]);
        b_out_sum = radiusPlus1 * (pb = pixels[yi+2]);
        a_out_sum = radiusPlus1 * (pa = pixels[yi+3]);

        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;
        a_sum += sumFactor * pa;

        stack = stackStart;

        for (i = 0; i < radiusPlus1; i++)
        {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack.a = pa;
            stack = stack.next;
        }

        for (i = 1; i < radiusPlus1; i++)
        {
            p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
            r_sum += (stack.r = (pr = pixels[p])) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = (pg = pixels[p+1])) * rbs;
            b_sum += (stack.b = (pb = pixels[p+2])) * rbs;
            a_sum += (stack.a = (pa = pixels[p+3])) * rbs;

            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;
            a_in_sum += pa;

            stack = stack.next;
        }


        stackIn = stackStart;
        stackOut = stackEnd;
        for (x = 0; x < width; x++)
        {
            pixels[yi+3] = pa = (a_sum * mul_sum) >> shg_sum;
            if (pa != 0)
            {
                pa = 255 / pa;
                pixels[yi]   = ((r_sum * mul_sum) >> shg_sum) * pa;
                pixels[yi+1] = ((g_sum * mul_sum) >> shg_sum) * pa;
                pixels[yi+2] = ((b_sum * mul_sum) >> shg_sum) * pa;
            } else {
                pixels[yi] = pixels[yi+1] = pixels[yi+2] = 0;
            }

            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;
            a_sum -= a_out_sum;

            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;
            a_out_sum -= stackIn.a;

            p =  (yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1)) << 2;

            r_in_sum += (stackIn.r = pixels[p]);
            g_in_sum += (stackIn.g = pixels[p+1]);
            b_in_sum += (stackIn.b = pixels[p+2]);
            a_in_sum += (stackIn.a = pixels[p+3]);

            r_sum += r_in_sum;
            g_sum += g_in_sum;
            b_sum += b_in_sum;
            a_sum += a_in_sum;

            stackIn = stackIn.next;

            r_out_sum += (pr = stackOut.r);
            g_out_sum += (pg = stackOut.g);
            b_out_sum += (pb = stackOut.b);
            a_out_sum += (pa = stackOut.a);

            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;
            a_in_sum -= pa;

            stackOut = stackOut.next;

            yi += 4;
        }
        yw += width;
    }


    for (x = 0; x < width; x++)
    {
        g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;

        yi = x << 2;
        r_out_sum = radiusPlus1 * (pr = pixels[yi]);
        g_out_sum = radiusPlus1 * (pg = pixels[yi+1]);
        b_out_sum = radiusPlus1 * (pb = pixels[yi+2]);
        a_out_sum = radiusPlus1 * (pa = pixels[yi+3]);

        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;
        a_sum += sumFactor * pa;

        stack = stackStart;

        for (i = 0; i < radiusPlus1; i++)
        {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack.a = pa;
            stack = stack.next;
        }

        yp = width;

        for (i = 1; i <= radius; i++)
        {
            yi = (yp + x) << 2;

            r_sum += (stack.r = (pr = pixels[yi])) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = (pg = pixels[yi+1])) * rbs;
            b_sum += (stack.b = (pb = pixels[yi+2])) * rbs;
            a_sum += (stack.a = (pa = pixels[yi+3])) * rbs;

            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;
            a_in_sum += pa;

            stack = stack.next;

            if(i < heightMinus1)
            {
                yp += width;
            }
        }

        yi = x;
        stackIn = stackStart;
        stackOut = stackEnd;
        for (y = 0; y < height; y++)
        {
            p = yi << 2;
            pixels[p+3] = pa = (a_sum * mul_sum) >> shg_sum;
            if (pa > 0)
            {
                pa = 255 / pa;
                pixels[p]   = ((r_sum * mul_sum) >> shg_sum) * pa;
                pixels[p+1] = ((g_sum * mul_sum) >> shg_sum) * pa;
                pixels[p+2] = ((b_sum * mul_sum) >> shg_sum) * pa;
            } else {
                pixels[p] = pixels[p+1] = pixels[p+2] = 0;
            }

            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;
            a_sum -= a_out_sum;

            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;
            a_out_sum -= stackIn.a;

            p = (x + (((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width)) << 2;

            r_sum += (r_in_sum += (stackIn.r = pixels[p]));
            g_sum += (g_in_sum += (stackIn.g = pixels[p+1]));
            b_sum += (b_in_sum += (stackIn.b = pixels[p+2]));
            a_sum += (a_in_sum += (stackIn.a = pixels[p+3]));

            stackIn = stackIn.next;

            r_out_sum += (pr = stackOut.r);
            g_out_sum += (pg = stackOut.g);
            b_out_sum += (pb = stackOut.b);
            a_out_sum += (pa = stackOut.a);

            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;
            a_in_sum -= pa;

            stackOut = stackOut.next;

            yi += width;
        }
    }
    return imageData;
}

function processCanvasRGB(canvas, top_x, top_y, width, height, radius)
{
    if (isNaN(radius) || radius < 1) return;
    radius |= 0;

    var imageData = getImageDataFromCanvas(canvas, top_x, top_y, width, height);
    imageData = processImageDataRGB(imageData, top_x, top_y, width, height, radius);

    canvas.getContext('2d').putImageData(imageData, top_x, top_y);
}

function processImageDataRGB(imageData, top_x, top_y, width, height, radius)
{
    var pixels = imageData.data;

    var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum,
        r_out_sum, g_out_sum, b_out_sum,
        r_in_sum, g_in_sum, b_in_sum,
        pr, pg, pb, rbs;

    var div = radius + radius + 1;
    var w4 = width << 2;
    var widthMinus1  = width - 1;
    var heightMinus1 = height - 1;
    var radiusPlus1  = radius + 1;
    var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;

    var stackStart = new BlurStack();
    var stack = stackStart;
    for (i = 1; i < div; i++)
    {
        stack = stack.next = new BlurStack();
        if (i == radiusPlus1) var stackEnd = stack;
    }
    stack.next = stackStart;
    var stackIn = null;
    var stackOut = null;

    yw = yi = 0;

    var mul_sum = mul_table[radius];
    var shg_sum = shg_table[radius];

    for (y = 0; y < height; y++)
    {
        r_in_sum = g_in_sum = b_in_sum = r_sum = g_sum = b_sum = 0;

        r_out_sum = radiusPlus1 * (pr = pixels[yi]);
        g_out_sum = radiusPlus1 * (pg = pixels[yi+1]);
        b_out_sum = radiusPlus1 * (pb = pixels[yi+2]);

        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;

        stack = stackStart;

        for (i = 0; i < radiusPlus1; i++)
        {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack = stack.next;
        }

        for (i = 1; i < radiusPlus1; i++)
        {
            p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
            r_sum += (stack.r = (pr = pixels[p])) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = (pg = pixels[p+1])) * rbs;
            b_sum += (stack.b = (pb = pixels[p+2])) * rbs;

            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;

            stack = stack.next;
        }


        stackIn = stackStart;
        stackOut = stackEnd;
        for (x = 0; x < width; x++)
        {
            pixels[yi]   = (r_sum * mul_sum) >> shg_sum;
            pixels[yi+1] = (g_sum * mul_sum) >> shg_sum;
            pixels[yi+2] = (b_sum * mul_sum) >> shg_sum;

            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;

            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;

            p =  (yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1)) << 2;

            r_in_sum += (stackIn.r = pixels[p]);
            g_in_sum += (stackIn.g = pixels[p+1]);
            b_in_sum += (stackIn.b = pixels[p+2]);

            r_sum += r_in_sum;
            g_sum += g_in_sum;
            b_sum += b_in_sum;

            stackIn = stackIn.next;

            r_out_sum += (pr = stackOut.r);
            g_out_sum += (pg = stackOut.g);
            b_out_sum += (pb = stackOut.b);

            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;

            stackOut = stackOut.next;

            yi += 4;
        }
        yw += width;
    }


    for (x = 0; x < width; x++)
    {
        g_in_sum = b_in_sum = r_in_sum = g_sum = b_sum = r_sum = 0;

        yi = x << 2;
        r_out_sum = radiusPlus1 * (pr = pixels[yi]);
        g_out_sum = radiusPlus1 * (pg = pixels[yi+1]);
        b_out_sum = radiusPlus1 * (pb = pixels[yi+2]);

        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;

        stack = stackStart;

        for (i = 0; i < radiusPlus1; i++)
        {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack = stack.next;
        }

        yp = width;

        for (i = 1; i <= radius; i++)
        {
            yi = (yp + x) << 2;

            r_sum += (stack.r = (pr = pixels[yi])) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = (pg = pixels[yi+1])) * rbs;
            b_sum += (stack.b = (pb = pixels[yi+2])) * rbs;

            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;

            stack = stack.next;

            if(i < heightMinus1)
            {
                yp += width;
            }
        }

        yi = x;
        stackIn = stackStart;
        stackOut = stackEnd;
        for (y = 0; y < height; y++)
        {
            p = yi << 2;
            pixels[p]   = (r_sum * mul_sum) >> shg_sum;
            pixels[p+1] = (g_sum * mul_sum) >> shg_sum;
            pixels[p+2] = (b_sum * mul_sum) >> shg_sum;

            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;

            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;

            p = (x + (((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width)) << 2;

            r_sum += (r_in_sum += (stackIn.r = pixels[p]));
            g_sum += (g_in_sum += (stackIn.g = pixels[p+1]));
            b_sum += (b_in_sum += (stackIn.b = pixels[p+2]));

            stackIn = stackIn.next;

            r_out_sum += (pr = stackOut.r);
            g_out_sum += (pg = stackOut.g);
            b_out_sum += (pb = stackOut.b);

            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;

            stackOut = stackOut.next;

            yi += width;
        }
    }

    return imageData;
}

function BlurStack()
{
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 0;
    this.next = null;
}

module.exports = {
    image: processImage,
    canvasRGBA: processCanvasRGBA,
    canvasRGB: processCanvasRGB,
    imageDataRGBA: processImageDataRGBA,
    imageDataRGB: processImageDataRGB
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

  if (opts.drawBackground) chart.svg.append('rect')
    .attr('id', 'background')
    .attr('width','100%').attr('height','100%')
    .attr('fill', '#ffffff'); 
    // .attr('fill', 'rgba(255,0,0,.2)');

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

        const split = (typeof(text(d)) === 'string') ? text(d).split('_') : '';

        // if (split.length > 1) {
        //   split.forEach((part,i) => {

        //     const elem = d3.select(this).append('tspan')
        //       .text(d => part);

        //     if (i%2===1) elem
        //       .attr('dx', 1)
        //       .attr('dy', 6)
        //       .attr('font-size', '.8em');
        //   });
        // }
        if (split.length === 2) {
          d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).append('tspan')
            .text(d => split[0]);

          d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).append('tspan')
            .text(d => split[1])
            .attr('dx', 1)
            .attr('dy', 6)
            .style('font-size', '.8em');
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
  container.append('text')
    .style('font-size', fontSize)
    .style('font-style', fontStyle)
    .style('font-family', fontFamily)
    .attr('x','-9999').attr('y','-9999')
    .call(textSubscript(() => text)); // .text(text);
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

function circleLabel(text, fontSize='inherit', fontFamily='inherit', fontStyle='normal') {
  // selection module to split text into parts for subscripts (e.g. "x_n")
  return (selection) => {

      selection.each(function(d) {

          const textSz = textSize(text(d), fontSize, fontFamily);
          const margin = 50;

          d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).append('text')
              .style('font-size', fontSize)
              .style('font-style', fontStyle)
              .style('font-family', fontFamily)
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
/*! exports provided: showAll, show, hideAll, hide, toggleAll, toggle, isVisible, pad, saveSvg, saveImg, flatten, include, traverse, escapeRegExp, map, arrayMoveItem, getTimestamp, scaleSVG */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveImg", function() { return saveImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "include", function() { return include; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverse", function() { return traverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeRegExp", function() { return escapeRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayMoveItem", function() { return arrayMoveItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimestamp", function() { return getTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleSVG", function() { return scaleSVG; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var canvg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! canvg */ "./node_modules/canvg/dist/browser/canvg.min.js");
/* harmony import */ var canvg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(canvg__WEBPACK_IMPORTED_MODULE_1__);



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
function saveImg(svg, name, scale=1) {    
    /* Using canvg lib. https://github.com/canvg/canvg and parts of the approach for saveSvg.
    Thanks to jbeard4 in: https://stackoverflow.com/a/3976034/1204047 for the suggestion */

    const w = svg.getBBox().width;
    const h = svg.getBBox().height;

    const canvas = document.createElement("canvas");
    canvas.setAttribute('id','drawingArea');
    document.body.appendChild(canvas);
    canvas.width = w * scale;
    canvas.height = h * scale;

    canvg__WEBPACK_IMPORTED_MODULE_1__(document.getElementById('drawingArea'), svg.outerHTML, { ignoreDimensions:true, ignoreMouse: true, ignoreAnimation: true,
    scaleWidth: w * scale,
    scaleHeight: h * scale });

    // console.log( document.getElementById('drawingArea') );

    const imgUrl = canvas.toDataURL("image/png");

    var downloadLink = document.createElement("a");
    downloadLink.href = imgUrl;
    downloadLink.download = name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    document.body.removeChild(canvas);
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

function scaleSVG(svg, container, ratio) {
    svg.setAttribute('transform', `scale(${ratio}) translate(0,0)`);
    container.style.width = parseInt(svg.clientWidth*ratio) + 'px';
    container.style.height = parseInt(svg.clientHeight*ratio) + 'px';

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
        return this.reEntry(undefined, false, altInterpr, fA, fB);
    };
    static iForm2(fA, fB, altInterpr=false) { // calculation verified (both interpr.)
        return this.reEntry(undefined, true, altInterpr, fA, fB);
    };
    static uForm3(lastOpen, fA, fB, fC, altInterpr=false) { // calculation verified closed & open (both interpr.)
        return this.reEntry(true, lastOpen, altInterpr, fA, fB, fC);
    };
    static iForm3(lastOpen, fA, fB, fC, altInterpr=false) { // calculation verified closed & open (both interpr.)
        return this.reEntry(false, lastOpen, altInterpr, fA, fB, fC);
    };
    static uForm4(fA, fB, fC, fD, altInterpr=false) {
        return this.reEntry(undefined, false, altInterpr, fA, fB, fC, fD);
    };
    static iForm4(fA, fB, fC, fD, altInterpr=false) {
        return this.reEntry(undefined, true, altInterpr, fA, fB, fC, fD);
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
                // for even resolutions (total nested arguments), reEntry number will be undefined
                // since it doesn't matter if its even or odd
                const reEntryNumber = (fReEntry.nested.length % 2 === 0) ? undefined : fReEntry.reEven;
                
                // notation reading: {deepest, ..., shallowest}  use nestedVals.reverse() to reverse variables
                fx = this.rel( fx,this.reEntry(reEntryNumber, fReEntry.lastOpen, fReEntry.altInterpretation, ...nestedVals) );
            }
        }
        if(form.unmarked) return fx;
        else return this.inv( fx );
    };

    static calcAll(form) {
        /* Interpret and calculate all possible values for the form 
           -> needs refactoring to avoid redundancy; suggestions welcome. */

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
            case 7:
                var interpr = [ {var: vars[0], value: null}, 
                                {var: vars[1], value: null},
                                {var: vars[2], value: null},
                                {var: vars[3], value: null},
                                {var: vars[4], value: null},
                                {var: vars[5], value: null},
                                {var: vars[6], value: null} ];
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
                                        for (var g=0; g<4; g++) {
                                            interpr[6].value = g;
                                            vals[interKey+a+''+b+''+c+''+d+''+e+''+f+''+g] = this.interCalc(form, interpr);//[a,b,c,d,e,f,g]);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 8:
                var interpr = [ {var: vars[0], value: null}, 
                                {var: vars[1], value: null},
                                {var: vars[2], value: null},
                                {var: vars[3], value: null},
                                {var: vars[4], value: null},
                                {var: vars[5], value: null},
                                {var: vars[6], value: null},
                                {var: vars[7], value: null} ];
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
                                        for (var g=0; g<4; g++) {
                                            interpr[6].value = g;
                                            for (var h=0; h<4; h++) {
                                                interpr[7].value = h;
                                                vals[interKey+a+''+b+''+c+''+d+''+e+''+f+''+g+''+h] = this.interCalc(form, interpr);//[a,b,c,d,e,f,g,h]);
                                                }
                                        }
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

        this.traverseForm(interprForm, function(fBranch) {
            const space = fBranch.space;

            for (var i in space) {
                if (space[i].type === 'var') {
                    for (var v in interpr) {
                        if (space[i].symbol === interpr[v].var) {

                            space[i].value = interpr[v].value;
                            break;
                        }
                    }
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

        // try parsing the string as a JSON object
        var json = null;
        try {
            var json = JSON.parse(jsonStr);
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
            
            if (!inQuote && !inSlash) {
                if (char === ')' || char === '}') countDepth--;
                if (char === '(' || char === '{') {
                    
                    if (countDepth === 0) {
                        // first (x) doesn't need to be separated
                        if (i > 0) parts.push('');
                    }
                    countDepth++;
                }
                else if ( (prevChar === ')' || prevChar === '}') && !(char === ')' || char === '}') ) {
                    // if char follows (x), separate; but not if it is another ')'
                    if (countDepth === 0) parts.push('');
                }
                // unique separation chars for re-entry forms for easy splitting
                if (countDepth === 1 && char === ',') char = nestChar;
                else if (countDepth === 1 && char === '|') char = optChar;
            }
            if (char === '"' && !inSlash) inQuote = !inQuote;
            if (char === '/' && !inQuote) inSlash = !inSlash;
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
                var reNested = reParts[reParts.length-1].split(nestChar);

                if (reNested.length % 2 === 0) {
                    comp.push('"reEven":"undefined",');
                } 
                else {
                    if (reParts[0] === '2r' || reParts[1] === '2r' || reParts[2] === '2r') comp.push('"reEven":true,');
                    else comp.push('"reEven":false,');
                }

                if (reParts[0] === 'open' || reParts[1] === 'open' || reParts[2] === 'open') comp.push('"lastOpen":true,');
                else comp.push('"lastOpen":false,');

                if (reParts[0] === 'alt' || reParts[1] === 'alt' || reParts[2] === 'alt') comp.push('"altInterpretation":true,');
                else comp.push('"altInterpretation":false,');

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
        this.traverseForm(form, function(fBranch) {
            const space = fBranch.space;

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
        let breakTrav = func.apply(this,[form]);

        if (form.space) { // form.type: 'form'
            if (form.space.length > 0) {
                for (var i in form.space) {
                    if (form.space[i].type === 'form' || form.space[i].type === 'reEntry') {
                        let breakLoop = this.traverseForm(form.space[i],func);
                        if (breakLoop) break;
                    }
                }
            }
        }
        else if (form.nested) { // form.type: 'reEntry'
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

  // ----------------------------------------------------
  // Graph representation
  // ----------------------------------------------------

  static createGraph(graphType, _form, options) {
    const addEmptyReChildSpace = (graphType === 'pack');

    // expand re-entry structure to be usable for graphs
    const form = this.expand_reEntry(_form, {addEmptyReChildSpace: addEmptyReChildSpace});
    // initialize the graph

    const graph = new _modules_d3_graph__WEBPACK_IMPORTED_MODULE_1__["default"](graphType, form, options);
    graph.formula = _form;
    // graphs.push( new D3Graph(graphType, form, options) );

    return graph;
  }

  static saveGraph(format, svg, name, scale) {
    Object(_modules_d3_graph__WEBPACK_IMPORTED_MODULE_1__["save"])(format, svg, name, scale);
  }

  static constructNested(reForm, options={}) {
    /* Constructs a (real) nested form structure from the .nested array of the original re-entry json */
    let space = reForm.space = [];
    reForm.nested.reverse(); // MUST be reversed, because notation: {deepest, ..., shallowest}

    for(let i in reForm.nested) {
      if (i > 0) {
        // prepend the reEntry nesting before everything else in the space
        space.unshift( {type: 'form', reChild: true, space: []} ); // space.push <- order last
        const nestedForm = space[0]; // space[space.length-1] <- order last
        
        if(!reForm.nested[i].unmarked) nestedForm.space.push(reForm.nested[i]);
        else {
          // nestedForm.space.push(reForm.nested[i]);
          nestedForm.space.push(...reForm.nested[i].space); // push(reForm.nested[i]) for grouping
        }

        space = nestedForm.space;
      }
      else {
        if(!reForm.nested[i].unmarked) space.push(reForm.nested[i]);
        // else space.push(reForm.nested[i]);
        else space.push(...reForm.nested[i].space); // push(reForm.nested[i]) for grouping
      }

      if (options.addEmptyReChildSpace && (space.length === 0)) {
        space.push( {type: 'space'} );
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

  static expand_reEntry(_form, options={}) {
    if(typeof(_form) !== 'string') _form = JSON.stringify(_form);
    const refForm = this.parseLinear(_form);
    let targetForm = this.parseLinear(_form);

    // we must keep a running index to not confuse identical forms while reconstructing the reEntries
    // Note: this should be done more efficiently in the future
    let runningIndex = 0;
    this.traverseForm(refForm, function(branch) { branch.runningIndex = runningIndex, runningIndex++; });
    runningIndex = 0;
    this.traverseForm(targetForm, function(branch) { branch.runningIndex = runningIndex, runningIndex++; });

    this.traverseForm(refForm, function(refBranch) {

      if(refBranch.type === 'reEntry') {
        this.traverseForm(targetForm, function(targetBranch) {

          if( (JSON.stringify(refBranch) === JSON.stringify(targetBranch)) && 
              (refBranch.runningIndex === (targetBranch.hasOwnProperty('runningIndex') ? targetBranch.runningIndex : null)) ) {
            targetBranch = this.constructNested(targetBranch, options);
            return true;
          }
        });

      }
    });
    // delete running index property
    this.traverseForm(targetForm, function(branch) { delete branch.runningIndex; });

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




// export {default as calc} from './core/fcalc';
// export {default as form} from './core/fform';
// export {default as graph} from './core/fgraph';

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
/* harmony import */ var boxmodel_layout_for_d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! boxmodel-layout-for-d3 */ "./node_modules/boxmodel-layout-for-d3/dist/boxmodel-d3.min.js");
/* harmony import */ var boxmodel_layout_for_d3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(boxmodel_layout_for_d3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/helper */ "./src/common/helper.js");
/* harmony import */ var _common_d3_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/d3-helper */ "./src/common/d3-helper.js");
/* harmony import */ var _d3_styles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./d3-styles.js */ "./src/lib/modules/d3-styles.js");









class D3Graph {
    // -----------------------------------------------------------
    //                    Visualization Setup
    // -----------------------------------------------------------

    constructor(graphType, data, opts, ...args) {
        // create basic svg-structure from chartFactory and merge options with configuration
        const proto = Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_3__["default"])( { 
            ...{ margin: { left: 50, right: 50, top: 50, bottom: 50 }, 
                padding: { left: 10, right: 10, top: 10, bottom: 10 },
                // padding: { left: 0, right: 0, top: 0, bottom: 0 },
                styleClass: 'basic' },
            ...opts
        } );

        // merge this graph with the chart structure
        Object.assign(this, proto);
        // calculate inner dimensions of the svg-chart
        this.innerHeight = this.height - this.margin.top - this.margin.bottom - this.padding.top - this.padding.bottom;
        this.innerWidth = this.width - this.margin.left - this.margin.right - this.padding.left - this.padding.right;

        // call the appropriate method to build the graph
        this.constructor[graphType].call(this, data, ...args);
    }


    // ===========================================================
    //                Depth Tree visualization
    // ===========================================================

    static tree(data) {
        const chart = this.container;
        // create a d3-hierarchy from our form-json
        const root = d3__WEBPACK_IMPORTED_MODULE_0__["hierarchy"](data, d => d.space);

        // set up design variables
        const design = _d3_styles_js__WEBPACK_IMPORTED_MODULE_4__["tree"][this.styleClass];
        const [nodeSize, nodeSep] = [design.nodeSize, design.nodeSeparation];
        const [fontSize, font] = [design.font.size, design.font.family];

        this.padding = { left: 10, right: 10, top: 10, bottom: 10 };

        root.dx = nodeSize.w + nodeSep.hz;
        root.dy = this.width / (root.height + 1);

        // define tree layout
        const layout = d3__WEBPACK_IMPORTED_MODULE_0__["tree"]()
            .nodeSize([
                root.dx,
                root.dy
            ])
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
        const tickpadding = nodeSize.h*1.8;
        const axisHeight = tickpadding; //30;
        this.height = (x1 - x0) + this.padding.top*2 + nodeSize.h+2 + axisHeight;

        // setup svg container
        this.svg
            .attr('width', this.width)
            .attr('height', this.height);
        _d3_styles_js__WEBPACK_IMPORTED_MODULE_4__["clearDefaults"](this.svg); // clear default styles for svg export

        // setup basic chart structure
        chart
            .classed('graph-tree', true)
                .attr('transform', `translate(${this.padding.left + nodeSize.w/2 + (root.data.unmarked ? -root.dy : 0)},${this.padding.top - x0 + nodeSize.h/2})`);
        
        // add vertical axis lines for depth

        const rootHeights = d3__WEBPACK_IMPORTED_MODULE_0__["range"](root.height + (rootUnmarked ? 0:1));

        this.depthScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleOrdinal"]()
            .domain( rootHeights )
            .range( rootHeights.map(i => (i+(rootUnmarked ? 1:0))*root.dy) );
        
        const depthAxis = d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"]()
            .scale(this.depthScale)
            .tickSizeInner(-(x1-x0))
            .tickSizeOuter(0)
            .tickPadding(tickpadding)
            .tickValues( this.depthScale.domain().map(i => 
                (this.depthScale.domain().length < 15) ? 'Depth '+i : i
            ) );

        const axis = chart.append('g')
            .classed('depthAxis', true)
            .attr('transform', `translate(0, ${x1})`)
            .call(depthAxis);
        axis.select('.domain').remove();
        

        // add groups for links and nodes

        const links = chart.selectAll('.link')
            .data(tree.links()) 
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

        nodes.filter(d => !d.data.unmarked)
            .append('circle')
            .attr('r', nodeSize.w/2)
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
                return (p.data.reEven !== 'undefined') ? (p.data.reEven ? '2|r|' : '2|r|+1') : '';
            });

        elements.selectAll('circle')
            .attr('r', (nodeSize.w/2)/2);

        nodes
            .append('text')
            .attr('x', nodeSize.w/2 + 2)
        
        vars.selectAll('text')
            .call(Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_3__["textSubscript"])(d => d.data.symbol));
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

        Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_3__["fitChart"])(chart, this.padding);

        // debugging:
        // [this.root, this.layout, this.chart, this.tree, this.design] = 
        //     [root, layout, chart, tree, design];
    }


    // ===========================================================
    //                Circle packing visualization
    // ===========================================================

    static pack(data) {
        const chart = this.container;
        // create a d3-hierarchy from our form-json
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
                rad = Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_3__["textSize"])(d.data.symbol, fontSize, font).width /2;
                if(d.data.type === 'unclear') rad += padding*2;
            }
            else if(d.data.value) {
                rad = Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_3__["textSize"])(d.data.value+'', fontSize, font).width /2;
            }
            else if(d.data.children || d.data.type === 'reEntryPoint' || d.data.type === 'space') rad = 0;
            return rad;
        });
        const pack = layout(root);

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
        vars.append('text')
            .call(Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_3__["textSubscript"])(d => d.data.symbol));

        consts.append('text')
            .text(d => d.data.value);

        unclear.append('rect')
            .attr('transform', d => 
            `skewX(-30) translate(${-(d.r - padding)},
            ${-(Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_3__["textSize"])('x',fontSize, font).height + padding*2)/2})`)
            .attr('width', d => d.r*2 - padding*2)
            .attr('height', d => (Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_3__["textSize"])('x',fontSize, font).height + padding*2))
        unclear.append('text')
            .call(Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_3__["textSubscript"])(d => d.data.symbol));

        rePoints
            .append('circle')
            .attr('r', 1.5);

        reEntries.filter(d => d.data.reEven !== 'undefined')
            .call(Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_3__["circleLabel"])( d => d.data.reEven ? '2|r|' : '2|r|+1', design.fontContext.size, design.fontContext.family ));

        // apply all style-related attributes to the selections
        design.applyNodeStyles(nodes, nodePartitions, chart);

        Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_3__["fitChart"])(chart, this.padding);

        // debugging:
        // [this.root, this.layout, this.chart, this.pack, this.design] = 
        //     [root, layout, chart, pack, design];
    }


    // ===========================================================
    // Boxmodel visualization (Spencer-Brown hook notation)
    // ===========================================================

    static gsbhooks(data) {
        const chart = this.container;
        // create a d3-hierarchy from our form-json
        _d3_styles_js__WEBPACK_IMPORTED_MODULE_4__["clearDefaults"](this.svg); // clear default styles for svg export

        const root = d3__WEBPACK_IMPORTED_MODULE_0__["hierarchy"](data, d => d.space)
            .sum(d => d.space ? 0 : 1);

        this.styleClass = 'basic';
        const compactReEntry = (this.compactChecked !== null) ? this.compactChecked : true;

        // set up design variables
        const design = _d3_styles_js__WEBPACK_IMPORTED_MODULE_4__["boxmodel"][this.styleClass];
        const {elemMargin, formMargin, formPadding, minFormSize, maxLineWidth, fontVar, fontConst, fontContext, labels} = {...design};
        const unclearPad = {hz: elemMargin.hz/2, vt: elemMargin.vt};
        const dataLabelPad = 4;

        // define boxmodel layout
        const layout = boxmodel_layout_for_d3__WEBPACK_IMPORTED_MODULE_1___default()()
            .vAlign('bottom')
            .edgeMargins(d => !(isContainer(d) && !d.parent.parent && d.parent.data.unmarked) )
            .isContainer(d => isContainer(d))
            .padding(d => {
                let p = {left: 0, right: 0, top: 0, bottom: 0};
                
                if (isContainer(d)) {
                    p.left = p.right = formPadding.hz;
                    if (d.data.type === 'reEntry') {
                        const text = d.data.reEven ? labels.reEven : labels.reOdd;
                        const txtSz = Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_3__["textSize"])(text, fontContext.size, fontContext.family, fontContext.style);
                        p.bottom = txtSz.height + elemMargin.vt/2;
                    }
                }
                return p;
                })
            .margin(d => {
                let m = {left: 0, right: 0, top: 0, bottom: 0};
                
                if (isContainer(d)) {
                    m.top = formMargin.top;
                    m.right = formMargin.right;
                    if (d.depth === 0) m.top = 0;
                    if (d.data.reChild) {
                        if (d.parent.children.length === 1) m.right = minFormSize.width;
                        if (d.parent.data.lastOpen) m.top = 0;
                        if (compactReEntry && d.parent.data.reChild) {
                            if (!(d.children[0].data.type === 'reEntryPoint' && reParentLastOpen(d))) m.top = 0;
                        }
                    }
                }
                else if (d.data.type !== 'reEntryPoint') { // all other elements
                    m.top = m.bottom = elemMargin.vt;
                    m.left = m.right = elemMargin.hz;
                    if (fontVar.style == 'italic') m.right += 1;

                    if (d.data.type === 'unclear') {
                        // m.bottom = (d.data.symbol.split('_').length > 1) ? -6 : 0;
                        m.bottom = 0;
                    }
                }
                else if (d.data.type === 'reEntryPoint') {
                    m.right = formMargin.right;
                }
                
                return m;
                })
            .spanHeight(d => {
                let span = false;
                if (compactReEntry && d.data.reChild) {
                    span = true;
                }
                return span;
                })
            .minContainerSize(d => {
                let w = minFormSize.width;
                let h = minFormSize.height;
                if (d.data.reChild) {
                    if (d.children.length === 1 && d.children[0].data.type === 'reEntryPoint') {
                        if (reParentLastOpen(d)) w = minFormSize.width/2;
                    }
                }
                if (d.data.type === 'reEntry' && d.children.length <= 2 && d.children[0].data.type === 'reEntryPoint') {
                    const text = d.data.reEven ? labels.reEven : labels.reOdd;
                    let txtSz = Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_3__["textSize"])(text, fontContext.size, fontContext.family, fontContext.style);
                    w = txtSz.width + dataLabelPad*2;
                    w = w < minFormSize.width ? minFormSize.width : w;
                }
                return {width: w, height: h};
                })
            .maxLineWidth(d => {
                let w = maxLineWidth;
                return w;
                })
            .nodeSize(d => {
                let w = 0, h = 0;
                
                if (isText(d)) {
                    let txtSz = undefined;
                    switch (d.data.type) {
                    case 'var':
                        txtSz = Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_3__["textSize"])(d.data.symbol, fontVar.size, fontVar.family, fontVar.style);
                        w = txtSz.width;
                        h = txtSz.height * 0.7;
                        break;
                    case 'unclear':
                        txtSz = Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_3__["textSize"])(d.data.symbol, fontVar.size, fontVar.family, 'normal');
                        w = txtSz.width;
                        h = txtSz.height * 0.7;

                        w += skewDiff((h + unclearPad.vt*2))*2 + unclearPad.hz*2;
                        h += unclearPad.vt*2;
                        break;
                    case 'const':
                        txtSz = Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_3__["textSize"])(d.data.value, fontConst.size, fontConst.family, fontConst.style);
                        w = txtSz.width;
                        h = txtSz.height * 0.7;
                        break;
                    }
                
                }
                return {width: w, height: h};
                });

        const boxmodel = layout(root);

        // setup basic chart structure
        chart.attr('class', 'graph-boxmodel')
            .attr('transform', `translate(${this.padding.left},${this.padding.top})`);

// chart.attr('width','100%').attr('height','100%').style('fill','rgba(255,0,0,.2)');

        const nodes = chart.selectAll('.node')
            .data(boxmodel.descendants())
            .enter().append('g')
                .classed('node', true)
                .attr('transform', d => `translate(${d.x0},${d.y0})`);

        // generate node partition selections
        const nodePartitions = resolveNodes(boxmodel, nodes);
        const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

        // define detailled structure/logic

        forms.append('polyline') //.filter(d => !d.data.unmarked).append('polyline')
            .attr('points', d => `0,0 ${d.x1-d.x0},0 ${d.x1-d.x0},${d.y1-d.y0}`);
        reEntries.append('polyline')
            .attr('points', d => {
                const w = d.x1-d.x0;
                const h = d.y1-d.y0;
                const reH = minFormSize.height;
                return `0,0 ${w},0 ${w},${h} 0,${h} 0,${h-reH}`;
            })
            .filter(d => d.data.lastOpen)
                .attr('points', d => {
                    const w = d.x1-d.x0;
                    const h = d.y1-d.y0;
                    const reH = minFormSize.height;
                    return `${w},${h-reH} ${w},${h} 0,${h} 0,${h-reH}`;
                });
        reEntries.filter(d => d.data.reEven !== 'undefined').append('text')
            .classed('label', true)
            .attr('transform', d => `translate(0,${d.y1-d.y0})`)
            .attr('x',d => dataLabelPad )
            .attr('y',d => -5 )
            .text(d => d.data.reEven ? labels.reEven : labels.reOdd);

        const unclTxtSize = d => Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_3__["textSize"])(d.data.symbol, fontVar.size, fontVar.family, 'normal');
        const unclDiff = d => skewDiff( (unclTxtSize(d).height*0.7 + unclearPad.vt*2) );

        unclear.append('rect')
            .classed('unclearMark',true)
            .attr('transform', d => `skewX(-30) translate(${unclDiff(d)},${0})`)
            .attr('width', d => ((d.x1-d.x0) - unclDiff(d) ))
            .attr('height', d => (d.y1-d.y0) )
        unclear.append('text')
            .attr('x',d => unclDiff(d) + unclearPad.hz )
            .attr('y',d => (d.y1-d.y0) -unclearPad.vt  - ((d.data.symbol.split('_').length > 1) ? 6 : 0) )
            .call(Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_3__["textSubscript"])(d => d.data.symbol));
          
        consts.append('text')
            .attr('y',d => (d.y1-d.y0) )
            .text(d => d.data.value);
        vars.append('text')
            .attr('y',d => (d.y1-d.y0) )
            .call(Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_3__["textSubscript"])(d => d.data.symbol));


        // apply all style-related attributes to the selections
        design.applyNodeStyles(nodes, nodePartitions, chart);

        Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_3__["fitChart"])(chart, this.padding);

        // debugging:
        // [this.root, this.layout, this.chart, this.boxmodel, this.design] = 
        //     [root, layout, chart, boxmodel, design];
    }

    static force(data) {

    }

}


// -----------------------------------------------------------
// Helper functions
// -----------------------------------------------------------

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

function isText(node) { return node.data.type === 'var' || node.data.type === 'const' || node.data.type === 'unclear'; }

function isContainer(node) { return node.data.type === 'form' || node.data.type === 'reEntry'; }

function reParentLastOpen(node) {
let reParent = node.ancestors().filter(d => d.data.type === 'reEntry').shift();
return reParent.data.lastOpen;
}

const save = function(format, svg, name, scale) {
    // exports graphs into svg
    
    name = name || d3__WEBPACK_IMPORTED_MODULE_0__["select"](svg.parentNode).attr('id');
    const timestamp = Object(_common_helper__WEBPACK_IMPORTED_MODULE_2__["getTimestamp"])();

	try {
    switch(format) {
        case 'svg':
            Object(_common_helper__WEBPACK_IMPORTED_MODULE_2__["saveSvg"])(svg, timestamp+'_'+name+'.svg', scale);
            break;
        case 'img':
            Object(_common_helper__WEBPACK_IMPORTED_MODULE_2__["saveImg"])(svg, timestamp+'_'+name+'.png', scale);
            break;
    }
	} catch(e) {
		console.log(e);
	}
}

function skewDiff(height,degrees=30) { return Math.tan((degrees*(Math.PI/180))) * height; };

/***/ }),

/***/ "./src/lib/modules/d3-styles.js":
/*!**************************************!*\
  !*** ./src/lib/modules/d3-styles.js ***!
  \**************************************/
/*! exports provided: clearDefaults, tree, pack, boxmodel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearDefaults", function() { return clearDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tree", function() { return tree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pack", function() { return pack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxmodel", function() { return boxmodel; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_d3_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/d3-helper */ "./src/common/d3-helper.js");



/* Cascading D3-Styles - by Peter Hofmann, 12/2018 */

// -----------------------
// global styles

const global = {
    common: {
        font: {family: 'sans-serif', size: '14px', style: 'normal'},
        fontVar: {family: 'sans-serif', size: '14px', style: 'italic'},
        fontConst: {family: 'courier, monospace', size: '14px', style: 'normal'},
        fontContext: {family: 'sans-serif', size: '10px', style: 'normal'},
        strokeWidth: 1,
        labels: {reEven: '2|r|', reOdd: '2|r|+1'},
        color: {base: d3__WEBPACK_IMPORTED_MODULE_0__["color"]('black'),
                ground: d3__WEBPACK_IMPORTED_MODULE_0__["color"]('white'),
                indef: d3__WEBPACK_IMPORTED_MODULE_0__["color"]('red'),
                light: d3__WEBPACK_IMPORTED_MODULE_0__["color"]('#ddd'),
            }
    }
};
global.basic = {
    ...global.common,
    font: { ...global.common.font,
            family: 'georgia, serif'
        },
    fontVar: { ...global.common.fontVar,
            family: 'georgia, serif', style: 'italic'
        },
    fontConst: { ...global.common.fontConst,
        family: 'georgia, serif'
    },
    fontContext: { ...global.common.fontContext,
            family: 'courier, monospace'
        }
};
global.gestalt = {
    ...global.common,
    font: { ...global.common.font,
            family: 'arial, sans-serif'
        },
    fontVar: { ...global.common.fontVar,
            family: 'arial, sans-serif'
        },
    fontConst: { ...global.common.fontConst,
        family: 'arial, sans-serif'
    },
    fontContext: { ...global.common.fontContext,
            family: 'georgia, serif'
        },
    color: {...global.common.color,
            pos: d3__WEBPACK_IMPORTED_MODULE_0__["color"]('white'), 
            neg: d3__WEBPACK_IMPORTED_MODULE_0__["color"]('black')
        }
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
        .style('stroke', 'rgba(0,0,0,.05')
        .style('stroke-linecap', 'round');
    axis.selectAll('.tick').select('text')
        .style('font-size', this.fontContext.size)
        .style('font-style', this.fontContext.style)
        .style('font-family', this.fontContext.family)
        .style('fill', this.color.base.toString())
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
        .style('font-size', this.font.size)
        .style('font-style', this.font.style)
        .style('font-family', this.font.family)
        .style('dominant-baseline','middle')
        .style('fill', this.color.base.toString())
    vars.selectAll('text')
        .style('font-size', this.fontVar.size)
        .style('font-style', this.fontVar.style)
        .style('font-family', this.fontVar.family);
    consts.selectAll('text')
        .style('font-size', this.fontConst.size)
        .style('font-style', this.fontConst.style)
        .style('font-family', this.fontConst.family);

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

// tree.gestalt = {
//     ...gestalt,
//     ...tree.common,
// };
// tree.gestalt.applyAxisStyles = function(axis) {
//     tree.basic.applyAxisStyles(axis);
// }
// tree.gestalt.applyNodeStyles = function(nodes, nodePartitions) {
//     const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

//     tree.basic.applyNodeStyles(nodes, nodePartitions);
// };
// tree.gestalt.applyLinkStyles = function(links, linkPartitions) {
//     // const [reChildLink] = linkPartitions;

//     tree.basic.applyLinkStyles(links, linkPartitions);
// };

// -----------------------
// d3.pack styles:

const pack = {
    common: {
        radius: 14,
        padding: 14,
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

    elements.selectAll('text')
        .style('font-size', this.font.size)
        .style('font-style', this.font.style)
        .style('font-family', this.font.family)
        .style('dominant-baseline','middle')
        .style('text-anchor', 'middle')
        .style('fill', this.color.base.toString());
    vars.selectAll('text')
        .style('font-size', this.fontVar.size)
        .style('font-style', this.fontVar.style)
        .style('font-family', this.fontVar.family);
    consts.selectAll('text')
        .style('font-size', this.fontConst.size)
        .style('font-style', this.fontConst.style)
        .style('font-family', this.fontConst.family);

    unclear.select('rect')
        .style('fill', this.color.light.toString());

    rePoints.select('circle')
        .style('fill', this.color.indef.toString())
        .style('stroke','none');

    const reEvenLabels = reEntries.select('.label')
        .style('font-size', this.fontContext.size)
        .style('font-style', this.fontContext.style)
        .style('font-family', this.fontContext.family)
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
        grad_1.append('stop')
            .attr('offset','40%').attr('stop-color', this.color.indef.toString() ).attr('stop-opacity', 0.3);
            grad_1.append('stop')
            .attr('offset','90%').attr('stop-color', this.color.indef.toString() ).attr('stop-opacity', 0.8);
        grad_1.append('stop')
            .attr('offset','100%').attr('stop-color', this.color.indef.toString() ).attr('stop-opacity', 1.0);
    const grad_2 = defs.append('radialGradient').attr('id', 'grad-indef-inout')
        .attr('fx','20%')
        grad_2.append('stop')
            .attr('offset','10%').attr('stop-color', this.color.indef.toString() ).attr('stop-opacity', 1.0);
        grad_2.append('stop')
            .attr('offset','50%').attr('stop-color', this.color.indef.toString() ).attr('stop-opacity', 0.6);
        grad_2.append('stop')
            .attr('offset','60%').attr('stop-color', this.color.indef.toString() ).attr('stop-opacity', 0.4);
        grad_2.append('stop')
            .attr('offset','100%').attr('stop-color', this.color.indef.toString() ).attr('stop-opacity', 0.0);

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

    elements.selectAll('text')
        .style('font-size', this.font.size)
        .style('font-style', this.font.style)
        .style('font-family', this.font.family)
        .style('dominant-baseline','middle')
        .style('text-anchor', 'middle')
        .style('stroke', 'none')
        .style('fill', d => this.invertFill(d));
    vars.selectAll('text')
        .style('font-size', this.fontVar.size)
        .style('font-style', this.fontVar.style)
        .style('font-family', this.fontVar.family);
    consts.selectAll('text')
        .style('font-size', this.fontConst.size)
        .style('font-style', this.fontConst.style)
        .style('font-family', this.fontConst.family);

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

    const reEvenLabels = reEntries.select('.label')
        .style('font-size', this.fontContext.size)
        .style('font-style', this.fontContext.style)
        .style('font-family', this.fontContext.family)
        .style('stroke', 'none')
        .style('fill', d => (d.parent.data.type === 'reEntry' && !d.parent.data.lastOpen) ? this.color.pos.toString() : this.color.indef.toString());
    reEntries.select('.label.inside')
        .style('fill', d => (d.parent.data.type !== 'reEntry' && d.data.lastOpen) ? this.color.indef.toString() : this.color.pos.toString());

};

// -----------------------
// boxmodelD3 styles:

const boxmodel = {
    common: {
        elemMargin: {hz: 12, vt: 8}, // vt: 8
        formMargin: {top: 10, right: 10},
        formPadding: {hz: 0},
        minFormSize: {width: 34, height: 34},
        maxLineWidth: 10000,
        strokeWidth: 1.1
    }
};

boxmodel.basic = {
    ...basic,
    ...boxmodel.common
    // font: {...basic.font, size: '18px'}
};
boxmodel.basic.applyNodeStyles = function(nodes, nodePartitions) {
    const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

    sets.select('polyline')
        .style('fill', 'none')
        .style('stroke', this.color.base.toString())
        .style('stroke-width', this.strokeWidth);
    forms.select('polyline')
        .filter(d => d.data.unmarked)
            .style('stroke','none');
    // reEntries.select('polyline')
    //     .style('stroke', this.color.indef.toString());

    elements.selectAll('text')
        .style('font-size', this.font.size)
        .style('font-style', this.font.style)
        .style('font-family', this.font.family)
        // .style('alignment-baseline','baseline') <-- "bug" in Safari
        .style('fill', this.color.base.toString());
    vars.select('text')
        .style('font-size', this.fontVar.size)
        .style('font-style', this.fontVar.style)
        .style('font-family', this.fontVar.family);
    consts.select('text')
        .style('font-size', this.fontConst.size)
        .style('font-style', this.fontConst.style)
        .style('font-family', this.fontConst.family);
    reEntries.select('.label')
        .style('font-size', this.fontContext.size)
        .style('font-style', this.fontContext.style)
        .style('font-family', this.fontContext.family)
        .style('stroke', 'none')
        .style('fill', this.color.base.toString());
        // .style('fill', this.color.indef.toString());

    unclear.select('.unclearMark')
        .style('fill', this.color.light.toString());

    unclear.select('text')
        .style('font-size', this.fontVar.size)
        .style('font-style', 'normal')
        .style('font-family', this.fontVar.family)
        .style('stroke', 'none')
        .style('fill', this.color.base.toString());
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvYm94bW9kZWwtbGF5b3V0LWZvci1kMy9kaXN0L2JveG1vZGVsLWQzLm1pbi5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9jYW52Zy9kaXN0L2Jyb3dzZXIvY2FudmcubWluLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3JnYmNvbG9yL2luZGV4LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3N0YWNrYmx1ci1jYW52YXMvc3JjL3N0YWNrYmx1ci5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9jb21tb24vZDMtaGVscGVyLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2NvbW1vbi9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL2NvcmUvZmNhbGMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL2NvcmUvZmZvcm0uanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL2NvcmUvZmdyYXBoLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2xpYi9tYWluLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2xpYi9tb2R1bGVzL2QzLWdyYXBoLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2xpYi9tb2R1bGVzL2QzLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS9leHRlcm5hbCBcImQzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVB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QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxtREFBbUQ7QUFDbkQsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDN1NBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQzNYQSxnRCIsImZpbGUiOiJmb3JtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImQzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImQzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZvcm1mb3JtXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiZDNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImZvcm1mb3JtXCJdID0gZmFjdG9yeShyb290W1wiZDNcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2QzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9saWIvbWFpbi5qc1wiKTtcbiIsIiFmdW5jdGlvbih0LG4pe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPW4ocmVxdWlyZShcImQzXCIpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImQzXCJdLG4pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHNbXCJib3htb2RlbC1kM1wiXT1uKHJlcXVpcmUoXCJkM1wiKSk6dFtcImJveG1vZGVsLWQzXCJdPW4odC5kMyl9KHdpbmRvdyxmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIG49e307ZnVuY3Rpb24gZShyKXtpZihuW3JdKXJldHVybiBuW3JdLmV4cG9ydHM7dmFyIG89bltyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsZSksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gZS5tPXQsZS5jPW4sZS5kPWZ1bmN0aW9uKHQsbixyKXtlLm8odCxuKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbix7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxlLnI9ZnVuY3Rpb24odCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sZS50PWZ1bmN0aW9uKHQsbil7aWYoMSZuJiYodD1lKHQpKSw4Jm4pcmV0dXJuIHQ7aWYoNCZuJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYoZS5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KSwyJm4mJlwic3RyaW5nXCIhPXR5cGVvZiB0KWZvcih2YXIgbyBpbiB0KWUuZChyLG8sZnVuY3Rpb24obil7cmV0dXJuIHRbbl19LmJpbmQobnVsbCxvKSk7cmV0dXJuIHJ9LGUubj1mdW5jdGlvbih0KXt2YXIgbj10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gZS5kKG4sXCJhXCIsbiksbn0sZS5vPWZ1bmN0aW9uKHQsbil7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LG4pfSxlLnA9XCJcIixlKGUucz0xKX0oW2Z1bmN0aW9uKG4sZSl7bi5leHBvcnRzPXR9LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjtlLnIobiksZS5kKG4sXCJkZWZhdWx0XCIsZnVuY3Rpb24oKXtyZXR1cm4gb30pO3ZhciByPWUoMCk7ZnVuY3Rpb24gbygpe3ZhciB0LG4sZSxvLGksdSxmLGEsYyxsPVtdO2Z1bmN0aW9uIGgodCl7cmV0dXJuIHQuZWFjaEFmdGVyKGQpLHQuZWFjaEJlZm9yZShwKSx0LmVhY2hCZWZvcmUoeSksdH1mdW5jdGlvbiBkKG8pe3ZhciBoPWMobykud2lkdGgsZD1jKG8pLmhlaWdodDtpZih0KG8pKXtpZihoPWQ9MCxvLmNoaWxkcmVuKXtmb3IodmFyIHA9ZnVuY3Rpb24odCl7dmFyIHI9W10sbz0wLGk9ITEsZj0wLGM9ITA7cmV0dXJuIHQuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihsLGgpe24obCkmJiFpJiYoaT0hMCksbys9bC54MS1sLngwLG8rPWM/ZShsKT91KGwpLmxlZnQ6MDpNYXRoLm1heCh1KGwpLmxlZnQsdSh0LmNoaWxkcmVuW2gtMV0pLnJpZ2h0KTt2YXIgZD1lKGwpP3UobCkucmlnaHQ6MDsobytkPmEodCl8fGg9PT10LmNoaWxkcmVuLmxlbmd0aC0xKSYmKG8rPWQpLG8+YSh0KXx8aD09PXQuY2hpbGRyZW4ubGVuZ3RoLTE/KHIucHVzaCh7ZnJvbTpmLHRvOmgsd2lkdGg6byxmbGV4SGVpZ2h0Oml9KSxoPHQuY2hpbGRyZW4ubGVuZ3RoLTEmJihmPWgrMSxvPTAsaT0hMSxjPSEwKSk6Yz0hMX0pLHJ9KG8pLHk9MDt5PHAubGVuZ3RoO3krKylwW3ldLmhlaWdodD1nKG8scCx5KTtsLnB1c2goe2JveDpvLGxpbmVzOnB9KSxoKz1yLm1heChwLGZ1bmN0aW9uKHQpe3JldHVybiB0LndpZHRofSksZCs9ci5zdW0ocCxmdW5jdGlvbih0KXtyZXR1cm4gdC5oZWlnaHR9KX1oKz1pKG8pLmxlZnQraShvKS5yaWdodCxkKz1pKG8pLnRvcCtpKG8pLmJvdHRvbSxoPU1hdGgubWF4KGgsZihvKS53aWR0aCksZD1NYXRoLm1heChkLGYobykuaGVpZ2h0KX1vLngwPW8ueTA9MCxvLngxPWgsby55MT1kfWZ1bmN0aW9uIHAocil7dmFyIG89ci55MTtpZihyLnBhcmVudCYmbihyKSl7bz1tKHIpLmhlaWdodDt2YXIgaT14KHIucGFyZW50KSxmPXMocixpKTtvLT1lKHIpfHwwIT09Zj91KHIpLnRvcDowO3ZhciBhPShvLT1lKHIpfHxmIT09aS5sZW5ndGgtMT91KHIpLmJvdHRvbTowKS1yLnkxO2lmKHQocikmJnIuY2hpbGRyZW4mJmE+MCl7dmFyIGM9eChyKSxsPWEvYy5sZW5ndGgsaD0hMCxkPSExLHA9dm9pZCAwO3RyeXtmb3IodmFyIHksZz1jW1N5bWJvbC5pdGVyYXRvcl0oKTshKGg9KHk9Zy5uZXh0KCkpLmRvbmUpO2g9ITApe3kudmFsdWUuaGVpZ2h0Kz1sfX1jYXRjaCh0KXtkPSEwLHA9dH1maW5hbGx5e3RyeXtofHxudWxsPT1nLnJldHVybnx8Zy5yZXR1cm4oKX1maW5hbGx5e2lmKGQpdGhyb3cgcH19fX1yLnkxPW99ZnVuY3Rpb24geSh0KXt2YXIgbj10LngxLXQueDAscj10LnkxLXQueTA7aWYodC5wYXJlbnQpe3QueTA9dC5wYXJlbnQueTAraSh0LnBhcmVudCkudG9wO3ZhciBmPXQucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodCk7aWYoMD09PWZ8fGZ1bmN0aW9uKHQpe2lmKHQucGFyZW50KXt2YXIgbj10LnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHQpLGU9eCh0LnBhcmVudCkscj1lW3ModCxlKV07cmV0dXJuIHIuZnJvbT09PW59cmV0dXJuIG51bGx9KHQpKXQueDArPXQucGFyZW50LngwK2kodC5wYXJlbnQpLmxlZnQsZSh0KSYmKHQueDArPXUodCkubGVmdCk7ZWxzZXt2YXIgYT10LnBhcmVudC5jaGlsZHJlbltmLTFdO3QueDA9YS54MSx0LngwKz1NYXRoLm1heCh1KGEpLnJpZ2h0LHUodCkubGVmdCl9fWVsc2Ugc3dpdGNoKG8pe2Nhc2VcInRvcFwiOnQueTA9MDticmVhaztjYXNlXCJtaWRkbGVcIjp0LnkwPXIvMjticmVhaztjYXNlXCJib3R0b21cIjp0LnkwPXJ9c3dpdGNoKG8pe2Nhc2VcInRvcFwiOmlmKHQucGFyZW50KXt2YXIgYz1zKHQpO3QueTArPWUodCl8fDAhPT1jP3UodCkudG9wOjAsdC55MCs9dih0KX1icmVhaztjYXNlXCJtaWRkbGVcIjp0LnBhcmVudCYmKHQueTArPXYodCkrbSh0KS5oZWlnaHQvMiksdC55MC09ci8yO2JyZWFrO2Nhc2VcImJvdHRvbVwiOmlmKHQucGFyZW50KXt2YXIgbD14KHQucGFyZW50KSxoPXModCxsKTt0LnkwLT1lKHQpfHxoIT09bC5sZW5ndGgtMT91KHQpLmJvdHRvbTowLHQueTArPXYodCwhMCl9dC55MC09cn10LngxPXQueDArbix0LnkxPXQueTArcn1mdW5jdGlvbiBnKHQsbixyKXtmb3IodmFyIG89bltyXSxpPTAsYT1vLmZyb207YTw9by50bzthKyspe3ZhciBjPXQuY2hpbGRyZW5bYV0sbD1jLnkxLWMueTAsaD0oZShjKXx8MCE9PXI/dShjKS50b3A6MCkrKGUoYyl8fHIhPT1uLmxlbmd0aC0xP3UoYykuYm90dG9tOjApO2wraD5pJiYoaT1sK2gpfXJldHVybiBNYXRoLm1heChpLGYodCkuaGVpZ2h0KX1mdW5jdGlvbiB4KHQpe3JldHVybiBsW2wuZmluZEluZGV4KGZ1bmN0aW9uKG4pe3JldHVybiBuLmJveD09PXR9KV0ubGluZXN9ZnVuY3Rpb24gcyh0LG4pe2lmKHQucGFyZW50KXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjE/bjp4KHQucGFyZW50KSxyPXQucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodCk7cmV0dXJuIGUuZmluZEluZGV4KGZ1bmN0aW9uKHQpe3JldHVybiByPj10LmZyb20mJnI8PXQudG99KX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBtKHQpe3ZhciBuPXgodC5wYXJlbnQpO3JldHVybiBuW3ModCxuKV19ZnVuY3Rpb24gdih0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSYmYXJndW1lbnRzWzFdO2lmKHQucGFyZW50KXt2YXIgZT14KHQucGFyZW50KSxvPXModCxlKSxpPW4/bzpvLTE7cmV0dXJuIHIuc3VtKGUuZmlsdGVyKGZ1bmN0aW9uKHQsbil7cmV0dXJuIG48PWl9KSxmdW5jdGlvbih0KXtyZXR1cm4gdC5oZWlnaHR9KX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBiKHQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0fX1yZXR1cm4gaC52QWxpZ249ZnVuY3Rpb24odCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KG89dCxoKTpvfSxoLmVkZ2VNYXJnaW5zPWZ1bmN0aW9uKHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhlPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpiKCt0KSxoKTplfSxoLmlzQ29udGFpbmVyPWZ1bmN0aW9uKG4pe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyh0PVwiZnVuY3Rpb25cIj09dHlwZW9mIG4/bjpiKCtuKSxoKTp0fSxoLnNwYW5IZWlnaHQ9ZnVuY3Rpb24odCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KG49XCJmdW5jdGlvblwiPT10eXBlb2YgdD90OmIoK3QpLGgpOm59LGgucGFkZGluZz1mdW5jdGlvbih0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8oaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6YigrdCksaCk6aX0saC5tYXJnaW49ZnVuY3Rpb24odCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KHU9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90OmIoK3QpLGgpOnV9LGgubm9kZVNpemU9ZnVuY3Rpb24odCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KGM9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90OmIoK3QpLGgpOmN9LGgubWluQ29udGFpbmVyU2l6ZT1mdW5jdGlvbih0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8oZj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6YigrdCksaCk6Zn0saC5tYXhMaW5lV2lkdGg9ZnVuY3Rpb24odCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KGE9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90OmIoK3QpLGgpOmF9LGh9fV0pLmRlZmF1bHR9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJveG1vZGVsLWQzLm1pbi5qcy5tYXAiLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKHJlcXVpcmUoXCJyZ2Jjb2xvclwiKSxyZXF1aXJlKFwic3RhY2tibHVyLWNhbnZhc1wiKSk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJyZ2Jjb2xvclwiLFwic3RhY2tibHVyLWNhbnZhc1wiXSxlKTp0LmNhbnZnPWUodC5SR0JDb2xvcix0LlN0YWNrQmx1cil9KHRoaXMsZnVuY3Rpb24obSxkKXtcInVzZSBzdHJpY3RcIjt2YXIgdDtyZXR1cm4gbT1tJiZtLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFwiKT9tLmRlZmF1bHQ6bSxkPWQmJmQuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0XCIpP2QuZGVmYXVsdDpkLGZ1bmN0aW9uKHQpe3ZhciB1O3QuZXhwb3J0czsodT13aW5kb3cpLkRPTVBhcnNlcj13aW5kb3cuRE9NUGFyc2VyO2Z1bmN0aW9uIHAoKXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKX12YXIgZixjPWZ1bmN0aW9uKHQsZSxpKXtpZihudWxsIT10fHxudWxsIT1lfHxudWxsIT1pKXt2YXIgbj1mdW5jdGlvbihzKXt2YXIgQT17b3B0czpzLEZSQU1FUkFURTozMCxNQVhfVklSVFVBTF9QSVhFTFM6M2U0LHJvb3RFbVNpemU6MTIsZW1TaXplOjEyLGxvZzpmdW5jdGlvbih0KXt9fTsxPT1BLm9wdHMubG9nJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgY29uc29sZSYmKEEubG9nPWZ1bmN0aW9uKHQpe2NvbnNvbGUubG9nKHQpfSk7QS5pbml0PWZ1bmN0aW9uKHQpe3ZhciBlPTA7QS5VbmlxdWVJZD1mdW5jdGlvbigpe3JldHVyblwiY2FudmdcIisgKytlfSxBLkRlZmluaXRpb25zPXt9LEEuU3R5bGVzPXt9LEEuU3R5bGVzU3BlY2lmaWNpdHk9e30sQS5BbmltYXRpb25zPVtdLEEuSW1hZ2VzPVtdLEEuY3R4PXQsQS5WaWV3UG9ydD1uZXcgZnVuY3Rpb24oKXt0aGlzLnZpZXdQb3J0cz1bXSx0aGlzLkNsZWFyPWZ1bmN0aW9uKCl7dGhpcy52aWV3UG9ydHM9W119LHRoaXMuU2V0Q3VycmVudD1mdW5jdGlvbih0LGUpe3RoaXMudmlld1BvcnRzLnB1c2goe3dpZHRoOnQsaGVpZ2h0OmV9KX0sdGhpcy5SZW1vdmVDdXJyZW50PWZ1bmN0aW9uKCl7dGhpcy52aWV3UG9ydHMucG9wKCl9LHRoaXMuQ3VycmVudD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnZpZXdQb3J0c1t0aGlzLnZpZXdQb3J0cy5sZW5ndGgtMV19LHRoaXMud2lkdGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5DdXJyZW50KCkud2lkdGh9LHRoaXMuaGVpZ2h0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuQ3VycmVudCgpLmhlaWdodH0sdGhpcy5Db21wdXRlU2l6ZT1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbCE9dCYmXCJudW1iZXJcIj09dHlwZW9mIHQ/dDpcInhcIj09dD90aGlzLndpZHRoKCk6XCJ5XCI9PXQ/dGhpcy5oZWlnaHQoKTpNYXRoLnNxcnQoTWF0aC5wb3codGhpcy53aWR0aCgpLDIpK01hdGgucG93KHRoaXMuaGVpZ2h0KCksMikpL01hdGguc3FydCgyKX19fSxBLmluaXQoKSxBLkltYWdlc0xvYWRlZD1mdW5jdGlvbigpe2Zvcih2YXIgdD0wO3Q8QS5JbWFnZXMubGVuZ3RoO3QrKylpZighQS5JbWFnZXNbdF0ubG9hZGVkKXJldHVybiExO3JldHVybiEwfSxBLnRyaW09ZnVuY3Rpb24odCl7cmV0dXJuIHQucmVwbGFjZSgvXlxccyt8XFxzKyQvZyxcIlwiKX0sQS5jb21wcmVzc1NwYWNlcz1mdW5jdGlvbih0KXtyZXR1cm4gdC5yZXBsYWNlKC8oPyFcXHUzMDAwKVxccysvZ20sXCIgXCIpfSxBLmFqYXg9ZnVuY3Rpb24odCl7dmFyIGU7cmV0dXJuKGU9dS5YTUxIdHRwUmVxdWVzdD9uZXcgdS5YTUxIdHRwUmVxdWVzdDpuZXcgQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpKT8oZS5vcGVuKFwiR0VUXCIsdCwhMSksZS5zZW5kKG51bGwpLGUucmVzcG9uc2VUZXh0KTpudWxsfSxBLnBhcnNlWG1sPWZ1bmN0aW9uKGUpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBXaW5kb3dzJiZ2b2lkIDAhPT1XaW5kb3dzLkRhdGEmJnZvaWQgMCE9PVdpbmRvd3MuRGF0YS5YbWwpe3ZhciB0PW5ldyBXaW5kb3dzLkRhdGEuWG1sLkRvbS5YbWxEb2N1bWVudCxpPW5ldyBXaW5kb3dzLkRhdGEuWG1sLkRvbS5YbWxMb2FkU2V0dGluZ3M7cmV0dXJuIGkucHJvaGliaXREdGQ9ITEsdC5sb2FkWG1sKGUsaSksdH1pZighdS5ET01QYXJzZXIpe2U9ZS5yZXBsYWNlKC88IURPQ1RZUEUgc3ZnW14+XSo+LyxcIlwiKTt2YXIgdD1uZXcgQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxET01cIik7cmV0dXJuIHQuYXN5bmM9XCJmYWxzZVwiLHQubG9hZFhNTChlKSx0fXRyeXt2YXIgbj1zLnhtbGRvbT9uZXcgdS5ET01QYXJzZXIocy54bWxkb20pOm5ldyB1LkRPTVBhcnNlcjtyZXR1cm4gbi5wYXJzZUZyb21TdHJpbmcoZSxcImltYWdlL3N2Zyt4bWxcIil9Y2F0Y2godCl7cmV0dXJuKG49cy54bWxkb20/bmV3IHUuRE9NUGFyc2VyKHMueG1sZG9tKTpuZXcgdS5ET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyhlLFwidGV4dC94bWxcIil9fSxBLlByb3BlcnR5PWZ1bmN0aW9uKHQsZSl7dGhpcy5uYW1lPXQsdGhpcy52YWx1ZT1lfSxBLlByb3BlcnR5LnByb3RvdHlwZS5nZXRWYWx1ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlfSxBLlByb3BlcnR5LnByb3RvdHlwZS5oYXNWYWx1ZT1mdW5jdGlvbigpe3JldHVybiBudWxsIT10aGlzLnZhbHVlJiZcIlwiIT09dGhpcy52YWx1ZX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUubnVtVmFsdWU9ZnVuY3Rpb24oKXtpZighdGhpcy5oYXNWYWx1ZSgpKXJldHVybiAwO3ZhciB0PXBhcnNlRmxvYXQodGhpcy52YWx1ZSk7cmV0dXJuKHRoaXMudmFsdWUrXCJcIikubWF0Y2goLyUkLykmJih0Lz0xMDApLHR9LEEuUHJvcGVydHkucHJvdG90eXBlLnZhbHVlT3JEZWZhdWx0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmhhc1ZhbHVlKCk/dGhpcy52YWx1ZTp0fSxBLlByb3BlcnR5LnByb3RvdHlwZS5udW1WYWx1ZU9yRGVmYXVsdD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5oYXNWYWx1ZSgpP3RoaXMubnVtVmFsdWUoKTp0fSxBLlByb3BlcnR5LnByb3RvdHlwZS5hZGRPcGFjaXR5PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMudmFsdWU7aWYobnVsbCE9dC52YWx1ZSYmXCJcIiE9dC52YWx1ZSYmXCJzdHJpbmdcIj09dHlwZW9mIHRoaXMudmFsdWUpe3ZhciBpPW5ldyBtKHRoaXMudmFsdWUpO2kub2smJihlPVwicmdiYShcIitpLnIrXCIsIFwiK2kuZytcIiwgXCIraS5iK1wiLCBcIit0Lm51bVZhbHVlKCkrXCIpXCIpfXJldHVybiBuZXcgQS5Qcm9wZXJ0eSh0aGlzLm5hbWUsZSl9LEEuUHJvcGVydHkucHJvdG90eXBlLmdldERlZmluaXRpb249ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnZhbHVlLm1hdGNoKC8jKFteXFwpJ1wiXSspLyk7cmV0dXJuIHQmJih0PXRbMV0pLHR8fCh0PXRoaXMudmFsdWUpLEEuRGVmaW5pdGlvbnNbdF19LEEuUHJvcGVydHkucHJvdG90eXBlLmlzVXJsRGVmaW5pdGlvbj1mdW5jdGlvbigpe3JldHVybiAwPT10aGlzLnZhbHVlLmluZGV4T2YoXCJ1cmwoXCIpfSxBLlByb3BlcnR5LnByb3RvdHlwZS5nZXRGaWxsU3R5bGVEZWZpbml0aW9uPWZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5nZXREZWZpbml0aW9uKCk7aWYobnVsbCE9aSYmaS5jcmVhdGVHcmFkaWVudClyZXR1cm4gaS5jcmVhdGVHcmFkaWVudChBLmN0eCx0LGUpO2lmKG51bGwhPWkmJmkuY3JlYXRlUGF0dGVybil7aWYoaS5nZXRIcmVmQXR0cmlidXRlKCkuaGFzVmFsdWUoKSl7dmFyIG49aS5hdHRyaWJ1dGUoXCJwYXR0ZXJuVHJhbnNmb3JtXCIpO2k9aS5nZXRIcmVmQXR0cmlidXRlKCkuZ2V0RGVmaW5pdGlvbigpLG4uaGFzVmFsdWUoKSYmKGkuYXR0cmlidXRlKFwicGF0dGVyblRyYW5zZm9ybVwiLCEwKS52YWx1ZT1uLnZhbHVlKX1yZXR1cm4gaS5jcmVhdGVQYXR0ZXJuKEEuY3R4LHQpfXJldHVybiBudWxsfSxBLlByb3BlcnR5LnByb3RvdHlwZS5nZXREUEk9ZnVuY3Rpb24odCl7cmV0dXJuIDk2fSxBLlByb3BlcnR5LnByb3RvdHlwZS5nZXRSRU09ZnVuY3Rpb24odCl7cmV0dXJuIEEucm9vdEVtU2l6ZX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuZ2V0RU09ZnVuY3Rpb24odCl7cmV0dXJuIEEuZW1TaXplfSxBLlByb3BlcnR5LnByb3RvdHlwZS5nZXRVbml0cz1mdW5jdGlvbigpe3ZhciB0PXRoaXMudmFsdWUrXCJcIjtyZXR1cm4gdC5yZXBsYWNlKC9bMC05XFwuXFwtXS9nLFwiXCIpfSxBLlByb3BlcnR5LnByb3RvdHlwZS5pc1BpeGVscz1mdW5jdGlvbigpe2lmKCF0aGlzLmhhc1ZhbHVlKCkpcmV0dXJuITE7dmFyIHQ9dGhpcy52YWx1ZStcIlwiO3JldHVybiEhdC5tYXRjaCgvcHgkLyl8fCEhdC5tYXRjaCgvXlswLTldKyQvKX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUudG9QaXhlbHM9ZnVuY3Rpb24odCxlKXtpZighdGhpcy5oYXNWYWx1ZSgpKXJldHVybiAwO3ZhciBpPXRoaXMudmFsdWUrXCJcIjtpZihpLm1hdGNoKC9yZW0kLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKSp0aGlzLmdldFJFTSh0KTtpZihpLm1hdGNoKC9lbSQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpKnRoaXMuZ2V0RU0odCk7aWYoaS5tYXRjaCgvZXgkLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKSp0aGlzLmdldEVNKHQpLzI7aWYoaS5tYXRjaCgvcHgkLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKTtpZihpLm1hdGNoKC9wdCQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpKnRoaXMuZ2V0RFBJKHQpKigxLzcyKTtpZihpLm1hdGNoKC9wYyQvKSlyZXR1cm4gMTUqdGhpcy5udW1WYWx1ZSgpO2lmKGkubWF0Y2goL2NtJC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqdGhpcy5nZXREUEkodCkvMi41NDtpZihpLm1hdGNoKC9tbSQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpKnRoaXMuZ2V0RFBJKHQpLzI1LjQ7aWYoaS5tYXRjaCgvaW4kLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKSp0aGlzLmdldERQSSh0KTtpZihpLm1hdGNoKC8lJC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqQS5WaWV3UG9ydC5Db21wdXRlU2l6ZSh0KTt2YXIgbj10aGlzLm51bVZhbHVlKCk7cmV0dXJuIGUmJm48MT9uKkEuVmlld1BvcnQuQ29tcHV0ZVNpemUodCk6bn0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUudG9NaWxsaXNlY29uZHM9ZnVuY3Rpb24oKXtpZighdGhpcy5oYXNWYWx1ZSgpKXJldHVybiAwO3ZhciB0PXRoaXMudmFsdWUrXCJcIjtyZXR1cm4gdC5tYXRjaCgvcyQvKT8xZTMqdGhpcy5udW1WYWx1ZSgpOih0Lm1hdGNoKC9tcyQvKSx0aGlzLm51bVZhbHVlKCkpfSxBLlByb3BlcnR5LnByb3RvdHlwZS50b1JhZGlhbnM9ZnVuY3Rpb24oKXtpZighdGhpcy5oYXNWYWx1ZSgpKXJldHVybiAwO3ZhciB0PXRoaXMudmFsdWUrXCJcIjtyZXR1cm4gdC5tYXRjaCgvZGVnJC8pP3RoaXMubnVtVmFsdWUoKSooTWF0aC5QSS8xODApOnQubWF0Y2goL2dyYWQkLyk/dGhpcy5udW1WYWx1ZSgpKihNYXRoLlBJLzIwMCk6dC5tYXRjaCgvcmFkJC8pP3RoaXMubnVtVmFsdWUoKTp0aGlzLm51bVZhbHVlKCkqKE1hdGguUEkvMTgwKX07dmFyIHQ9e2Jhc2VsaW5lOlwiYWxwaGFiZXRpY1wiLFwiYmVmb3JlLWVkZ2VcIjpcInRvcFwiLFwidGV4dC1iZWZvcmUtZWRnZVwiOlwidG9wXCIsbWlkZGxlOlwibWlkZGxlXCIsY2VudHJhbDpcIm1pZGRsZVwiLFwiYWZ0ZXItZWRnZVwiOlwiYm90dG9tXCIsXCJ0ZXh0LWFmdGVyLWVkZ2VcIjpcImJvdHRvbVwiLGlkZW9ncmFwaGljOlwiaWRlb2dyYXBoaWNcIixhbHBoYWJldGljOlwiYWxwaGFiZXRpY1wiLGhhbmdpbmc6XCJoYW5naW5nXCIsbWF0aGVtYXRpY2FsOlwiYWxwaGFiZXRpY1wifTtyZXR1cm4gQS5Qcm9wZXJ0eS5wcm90b3R5cGUudG9UZXh0QmFzZWxpbmU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5oYXNWYWx1ZSgpP3RbdGhpcy52YWx1ZV06bnVsbH0sQS5Gb250PW5ldyBmdW5jdGlvbigpe3RoaXMuU3R5bGVzPVwibm9ybWFsfGl0YWxpY3xvYmxpcXVlfGluaGVyaXRcIix0aGlzLlZhcmlhbnRzPVwibm9ybWFsfHNtYWxsLWNhcHN8aW5oZXJpdFwiLHRoaXMuV2VpZ2h0cz1cIm5vcm1hbHxib2xkfGJvbGRlcnxsaWdodGVyfDEwMHwyMDB8MzAwfDQwMHw1MDB8NjAwfDcwMHw4MDB8OTAwfGluaGVyaXRcIix0aGlzLkNyZWF0ZUZvbnQ9ZnVuY3Rpb24odCxlLGksbixzLGEpe3ZhciByPW51bGwhPWE/dGhpcy5QYXJzZShhKTp0aGlzLkNyZWF0ZUZvbnQoXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLEEuY3R4LmZvbnQpO3JldHVybntmb250RmFtaWx5OnM9c3x8ci5mb250RmFtaWx5LGZvbnRTaXplOm58fHIuZm9udFNpemUsZm9udFN0eWxlOnR8fHIuZm9udFN0eWxlLGZvbnRXZWlnaHQ6aXx8ci5mb250V2VpZ2h0LGZvbnRWYXJpYW50OmV8fHIuZm9udFZhcmlhbnQsdG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm5bdGhpcy5mb250U3R5bGUsdGhpcy5mb250VmFyaWFudCx0aGlzLmZvbnRXZWlnaHQsdGhpcy5mb250U2l6ZSx0aGlzLmZvbnRGYW1pbHldLmpvaW4oXCIgXCIpfX19O3ZhciByPXRoaXM7dGhpcy5QYXJzZT1mdW5jdGlvbih0KXtmb3IodmFyIGU9e30saT1BLnRyaW0oQS5jb21wcmVzc1NwYWNlcyh0fHxcIlwiKSkuc3BsaXQoXCIgXCIpLG49e2ZvbnRTaXplOiExLGZvbnRTdHlsZTohMSxmb250V2VpZ2h0OiExLGZvbnRWYXJpYW50OiExfSxzPVwiXCIsYT0wO2E8aS5sZW5ndGg7YSsrKW4uZm9udFN0eWxlfHwtMT09ci5TdHlsZXMuaW5kZXhPZihpW2FdKT9uLmZvbnRWYXJpYW50fHwtMT09ci5WYXJpYW50cy5pbmRleE9mKGlbYV0pP24uZm9udFdlaWdodHx8LTE9PXIuV2VpZ2h0cy5pbmRleE9mKGlbYV0pP24uZm9udFNpemU/XCJpbmhlcml0XCIhPWlbYV0mJihzKz1pW2FdKTooXCJpbmhlcml0XCIhPWlbYV0mJihlLmZvbnRTaXplPWlbYV0uc3BsaXQoXCIvXCIpWzBdKSxuLmZvbnRTdHlsZT1uLmZvbnRWYXJpYW50PW4uZm9udFdlaWdodD1uLmZvbnRTaXplPSEwKTooXCJpbmhlcml0XCIhPWlbYV0mJihlLmZvbnRXZWlnaHQ9aVthXSksbi5mb250U3R5bGU9bi5mb250VmFyaWFudD1uLmZvbnRXZWlnaHQ9ITApOihcImluaGVyaXRcIiE9aVthXSYmKGUuZm9udFZhcmlhbnQ9aVthXSksbi5mb250U3R5bGU9bi5mb250VmFyaWFudD0hMCk6KFwiaW5oZXJpdFwiIT1pW2FdJiYoZS5mb250U3R5bGU9aVthXSksbi5mb250U3R5bGU9ITApO3JldHVyblwiXCIhPXMmJihlLmZvbnRGYW1pbHk9cyksZX19LEEuVG9OdW1iZXJBcnJheT1mdW5jdGlvbih0KXtmb3IodmFyIGU9QS50cmltKEEuY29tcHJlc3NTcGFjZXMoKHR8fFwiXCIpLnJlcGxhY2UoLywvZyxcIiBcIikpKS5zcGxpdChcIiBcIiksaT0wO2k8ZS5sZW5ndGg7aSsrKWVbaV09cGFyc2VGbG9hdChlW2ldKTtyZXR1cm4gZX0sQS5Qb2ludD1mdW5jdGlvbih0LGUpe3RoaXMueD10LHRoaXMueT1lfSxBLlBvaW50LnByb3RvdHlwZS5hbmdsZVRvPWZ1bmN0aW9uKHQpe3JldHVybiBNYXRoLmF0YW4yKHQueS10aGlzLnksdC54LXRoaXMueCl9LEEuUG9pbnQucHJvdG90eXBlLmFwcGx5VHJhbnNmb3JtPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMueCp0WzBdK3RoaXMueSp0WzJdK3RbNF0saT10aGlzLngqdFsxXSt0aGlzLnkqdFszXSt0WzVdO3RoaXMueD1lLHRoaXMueT1pfSxBLkNyZWF0ZVBvaW50PWZ1bmN0aW9uKHQpe3ZhciBlPUEuVG9OdW1iZXJBcnJheSh0KTtyZXR1cm4gbmV3IEEuUG9pbnQoZVswXSxlWzFdKX0sQS5DcmVhdGVQYXRoPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1BLlRvTnVtYmVyQXJyYXkodCksaT1bXSxuPTA7bjxlLmxlbmd0aDtuKz0yKWkucHVzaChuZXcgQS5Qb2ludChlW25dLGVbbisxXSkpO3JldHVybiBpfSxBLkJvdW5kaW5nQm94PWZ1bmN0aW9uKHQsZSxpLG4pe3RoaXMueDE9TnVtYmVyLk5hTix0aGlzLnkxPU51bWJlci5OYU4sdGhpcy54Mj1OdW1iZXIuTmFOLHRoaXMueTI9TnVtYmVyLk5hTix0aGlzLng9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy54MX0sdGhpcy55PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMueTF9LHRoaXMud2lkdGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy54Mi10aGlzLngxfSx0aGlzLmhlaWdodD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnkyLXRoaXMueTF9LHRoaXMuYWRkUG9pbnQ9ZnVuY3Rpb24odCxlKXtudWxsIT10JiYoKGlzTmFOKHRoaXMueDEpfHxpc05hTih0aGlzLngyKSkmJih0aGlzLngxPXQsdGhpcy54Mj10KSx0PHRoaXMueDEmJih0aGlzLngxPXQpLHQ+dGhpcy54MiYmKHRoaXMueDI9dCkpLG51bGwhPWUmJigoaXNOYU4odGhpcy55MSl8fGlzTmFOKHRoaXMueTIpKSYmKHRoaXMueTE9ZSx0aGlzLnkyPWUpLGU8dGhpcy55MSYmKHRoaXMueTE9ZSksZT50aGlzLnkyJiYodGhpcy55Mj1lKSl9LHRoaXMuYWRkWD1mdW5jdGlvbih0KXt0aGlzLmFkZFBvaW50KHQsbnVsbCl9LHRoaXMuYWRkWT1mdW5jdGlvbih0KXt0aGlzLmFkZFBvaW50KG51bGwsdCl9LHRoaXMuYWRkQm91bmRpbmdCb3g9ZnVuY3Rpb24odCl7dGhpcy5hZGRQb2ludCh0LngxLHQueTEpLHRoaXMuYWRkUG9pbnQodC54Mix0LnkyKX0sdGhpcy5hZGRRdWFkcmF0aWNDdXJ2ZT1mdW5jdGlvbih0LGUsaSxuLHMsYSl7dmFyIHI9dCsyLzMqKGktdCksbz1lKzIvMyoobi1lKSxsPXIrMS8zKihzLXQpLGg9bysxLzMqKGEtZSk7dGhpcy5hZGRCZXppZXJDdXJ2ZSh0LGUscixsLG8saCxzLGEpfSx0aGlzLmFkZEJlemllckN1cnZlPWZ1bmN0aW9uKHQsZSxpLG4scyxhLHIsbyl7dmFyIGw9W3QsZV0saD1baSxuXSx1PVtzLGFdLGM9W3Isb107dGhpcy5hZGRQb2ludChsWzBdLGxbMV0pLHRoaXMuYWRkUG9pbnQoY1swXSxjWzFdKTtmb3IodmFyIGY9MDtmPD0xO2YrKyl7dmFyIG09ZnVuY3Rpb24odCl7cmV0dXJuIE1hdGgucG93KDEtdCwzKSpsW2ZdKzMqTWF0aC5wb3coMS10LDIpKnQqaFtmXSszKigxLXQpKk1hdGgucG93KHQsMikqdVtmXStNYXRoLnBvdyh0LDMpKmNbZl19LHA9NipsW2ZdLTEyKmhbZl0rNip1W2ZdLGQ9LTMqbFtmXSs5KmhbZl0tOSp1W2ZdKzMqY1tmXSx5PTMqaFtmXS0zKmxbZl07aWYoMCE9ZCl7dmFyIHY9TWF0aC5wb3cocCwyKS00KnkqZDtpZighKHY8MCkpe3ZhciBnPSgtcCtNYXRoLnNxcnQodikpLygyKmQpOzA8ZyYmZzwxJiYoMD09ZiYmdGhpcy5hZGRYKG0oZykpLDE9PWYmJnRoaXMuYWRkWShtKGcpKSk7dmFyIHg9KC1wLU1hdGguc3FydCh2KSkvKDIqZCk7MDx4JiZ4PDEmJigwPT1mJiZ0aGlzLmFkZFgobSh4KSksMT09ZiYmdGhpcy5hZGRZKG0oeCkpKX19ZWxzZXtpZigwPT1wKWNvbnRpbnVlO3ZhciBiPS15L3A7MDxiJiZiPDEmJigwPT1mJiZ0aGlzLmFkZFgobShiKSksMT09ZiYmdGhpcy5hZGRZKG0oYikpKX19fSx0aGlzLmlzUG9pbnRJbkJveD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLngxPD10JiZ0PD10aGlzLngyJiZ0aGlzLnkxPD1lJiZlPD10aGlzLnkyfSx0aGlzLmFkZFBvaW50KHQsZSksdGhpcy5hZGRQb2ludChpLG4pfSxBLlRyYW5zZm9ybT1mdW5jdGlvbih0KXt2YXIgZT10aGlzO3RoaXMuVHlwZT17fSx0aGlzLlR5cGUudHJhbnNsYXRlPWZ1bmN0aW9uKHQpe3RoaXMucD1BLkNyZWF0ZVBvaW50KHQpLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCl7dC50cmFuc2xhdGUodGhpcy5wLnh8fDAsdGhpcy5wLnl8fDApfSx0aGlzLnVuYXBwbHk9ZnVuY3Rpb24odCl7dC50cmFuc2xhdGUoLTEqdGhpcy5wLnh8fDAsLTEqdGhpcy5wLnl8fDApfSx0aGlzLmFwcGx5VG9Qb2ludD1mdW5jdGlvbih0KXt0LmFwcGx5VHJhbnNmb3JtKFsxLDAsMCwxLHRoaXMucC54fHwwLHRoaXMucC55fHwwXSl9fSx0aGlzLlR5cGUucm90YXRlPWZ1bmN0aW9uKHQpe3ZhciBlPUEuVG9OdW1iZXJBcnJheSh0KTt0aGlzLmFuZ2xlPW5ldyBBLlByb3BlcnR5KFwiYW5nbGVcIixlWzBdKSx0aGlzLmN4PWVbMV18fDAsdGhpcy5jeT1lWzJdfHwwLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCl7dC50cmFuc2xhdGUodGhpcy5jeCx0aGlzLmN5KSx0LnJvdGF0ZSh0aGlzLmFuZ2xlLnRvUmFkaWFucygpKSx0LnRyYW5zbGF0ZSgtdGhpcy5jeCwtdGhpcy5jeSl9LHRoaXMudW5hcHBseT1mdW5jdGlvbih0KXt0LnRyYW5zbGF0ZSh0aGlzLmN4LHRoaXMuY3kpLHQucm90YXRlKC0xKnRoaXMuYW5nbGUudG9SYWRpYW5zKCkpLHQudHJhbnNsYXRlKC10aGlzLmN4LC10aGlzLmN5KX0sdGhpcy5hcHBseVRvUG9pbnQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5hbmdsZS50b1JhZGlhbnMoKTt0LmFwcGx5VHJhbnNmb3JtKFsxLDAsMCwxLHRoaXMucC54fHwwLHRoaXMucC55fHwwXSksdC5hcHBseVRyYW5zZm9ybShbTWF0aC5jb3MoZSksTWF0aC5zaW4oZSksLU1hdGguc2luKGUpLE1hdGguY29zKGUpLDAsMF0pLHQuYXBwbHlUcmFuc2Zvcm0oWzEsMCwwLDEsLXRoaXMucC54fHwwLC10aGlzLnAueXx8MF0pfX0sdGhpcy5UeXBlLnNjYWxlPWZ1bmN0aW9uKHQpe3RoaXMucD1BLkNyZWF0ZVBvaW50KHQpLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCl7dC5zY2FsZSh0aGlzLnAueHx8MSx0aGlzLnAueXx8dGhpcy5wLnh8fDEpfSx0aGlzLnVuYXBwbHk9ZnVuY3Rpb24odCl7dC5zY2FsZSgxL3RoaXMucC54fHwxLDEvdGhpcy5wLnl8fHRoaXMucC54fHwxKX0sdGhpcy5hcHBseVRvUG9pbnQ9ZnVuY3Rpb24odCl7dC5hcHBseVRyYW5zZm9ybShbdGhpcy5wLnh8fDAsMCwwLHRoaXMucC55fHwwLDAsMF0pfX0sdGhpcy5UeXBlLm1hdHJpeD1mdW5jdGlvbih0KXt0aGlzLm09QS5Ub051bWJlckFycmF5KHQpLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCl7dC50cmFuc2Zvcm0odGhpcy5tWzBdLHRoaXMubVsxXSx0aGlzLm1bMl0sdGhpcy5tWzNdLHRoaXMubVs0XSx0aGlzLm1bNV0pfSx0aGlzLnVuYXBwbHk9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5tWzBdLGk9dGhpcy5tWzJdLG49dGhpcy5tWzRdLHM9dGhpcy5tWzFdLGE9dGhpcy5tWzNdLHI9dGhpcy5tWzVdLG89MS8oZSooMSphLTAqciktaSooMSpzLTAqcikrbiooMCpzLTAqYSkpO3QudHJhbnNmb3JtKG8qKDEqYS0wKnIpLG8qKDAqci0xKnMpLG8qKDAqbi0xKmkpLG8qKDEqZS0wKm4pLG8qKGkqci1uKmEpLG8qKG4qcy1lKnIpKX0sdGhpcy5hcHBseVRvUG9pbnQ9ZnVuY3Rpb24odCl7dC5hcHBseVRyYW5zZm9ybSh0aGlzLm0pfX0sdGhpcy5UeXBlLlNrZXdCYXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1lLlR5cGUubWF0cml4LHRoaXMuYmFzZSh0KSx0aGlzLmFuZ2xlPW5ldyBBLlByb3BlcnR5KFwiYW5nbGVcIix0KX0sdGhpcy5UeXBlLlNrZXdCYXNlLnByb3RvdHlwZT1uZXcgdGhpcy5UeXBlLm1hdHJpeCx0aGlzLlR5cGUuc2tld1g9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPWUuVHlwZS5Ta2V3QmFzZSx0aGlzLmJhc2UodCksdGhpcy5tPVsxLDAsTWF0aC50YW4odGhpcy5hbmdsZS50b1JhZGlhbnMoKSksMSwwLDBdfSx0aGlzLlR5cGUuc2tld1gucHJvdG90eXBlPW5ldyB0aGlzLlR5cGUuU2tld0Jhc2UsdGhpcy5UeXBlLnNrZXdZPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1lLlR5cGUuU2tld0Jhc2UsdGhpcy5iYXNlKHQpLHRoaXMubT1bMSxNYXRoLnRhbih0aGlzLmFuZ2xlLnRvUmFkaWFucygpKSwwLDEsMCwwXX0sdGhpcy5UeXBlLnNrZXdZLnByb3RvdHlwZT1uZXcgdGhpcy5UeXBlLlNrZXdCYXNlLHRoaXMudHJhbnNmb3Jtcz1bXSx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dGhpcy50cmFuc2Zvcm1zLmxlbmd0aDtlKyspdGhpcy50cmFuc2Zvcm1zW2VdLmFwcGx5KHQpfSx0aGlzLnVuYXBwbHk9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXRoaXMudHJhbnNmb3Jtcy5sZW5ndGgtMTswPD1lO2UtLSl0aGlzLnRyYW5zZm9ybXNbZV0udW5hcHBseSh0KX0sdGhpcy5hcHBseVRvUG9pbnQ9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTA7ZTx0aGlzLnRyYW5zZm9ybXMubGVuZ3RoO2UrKyl0aGlzLnRyYW5zZm9ybXNbZV0uYXBwbHlUb1BvaW50KHQpfTtmb3IodmFyIGk9QS50cmltKEEuY29tcHJlc3NTcGFjZXModCkpLnJlcGxhY2UoL1xcKShbYS16QS1aXSkvZyxcIikgJDFcIikucmVwbGFjZSgvXFwpKFxccz8sXFxzPykvZyxcIikgXCIpLnNwbGl0KC9cXHMoPz1bYS16XSkvKSxuPTA7bjxpLmxlbmd0aDtuKyspaWYoXCJub25lXCIhPT1pW25dKXt2YXIgcz1BLnRyaW0oaVtuXS5zcGxpdChcIihcIilbMF0pLGE9aVtuXS5zcGxpdChcIihcIilbMV0ucmVwbGFjZShcIilcIixcIlwiKSxyPXRoaXMuVHlwZVtzXTtpZih2b2lkIDAhPT1yKXt2YXIgbz1uZXcgcihhKTtvLnR5cGU9cyx0aGlzLnRyYW5zZm9ybXMucHVzaChvKX19fSxBLkFzcGVjdFJhdGlvPWZ1bmN0aW9uKHQsZSxpLG4scyxhLHIsbyxsLGgpe3ZhciB1PShlPShlPUEuY29tcHJlc3NTcGFjZXMoZSkpLnJlcGxhY2UoL15kZWZlclxccy8sXCJcIikpLnNwbGl0KFwiIFwiKVswXXx8XCJ4TWlkWU1pZFwiLGM9ZS5zcGxpdChcIiBcIilbMV18fFwibWVldFwiLGY9aS9uLG09cy9hLHA9TWF0aC5taW4oZixtKSxkPU1hdGgubWF4KGYsbSk7XCJtZWV0XCI9PWMmJihuKj1wLGEqPXApLFwic2xpY2VcIj09YyYmKG4qPWQsYSo9ZCksbD1uZXcgQS5Qcm9wZXJ0eShcInJlZlhcIixsKSxoPW5ldyBBLlByb3BlcnR5KFwicmVmWVwiLGgpLGwuaGFzVmFsdWUoKSYmaC5oYXNWYWx1ZSgpP3QudHJhbnNsYXRlKC1wKmwudG9QaXhlbHMoXCJ4XCIpLC1wKmgudG9QaXhlbHMoXCJ5XCIpKToodS5tYXRjaCgvXnhNaWQvKSYmKFwibWVldFwiPT1jJiZwPT1tfHxcInNsaWNlXCI9PWMmJmQ9PW0pJiZ0LnRyYW5zbGF0ZShpLzItbi8yLDApLHUubWF0Y2goL1lNaWQkLykmJihcIm1lZXRcIj09YyYmcD09Znx8XCJzbGljZVwiPT1jJiZkPT1mKSYmdC50cmFuc2xhdGUoMCxzLzItYS8yKSx1Lm1hdGNoKC9eeE1heC8pJiYoXCJtZWV0XCI9PWMmJnA9PW18fFwic2xpY2VcIj09YyYmZD09bSkmJnQudHJhbnNsYXRlKGktbiwwKSx1Lm1hdGNoKC9ZTWF4JC8pJiYoXCJtZWV0XCI9PWMmJnA9PWZ8fFwic2xpY2VcIj09YyYmZD09ZikmJnQudHJhbnNsYXRlKDAscy1hKSksXCJub25lXCI9PXU/dC5zY2FsZShmLG0pOlwibWVldFwiPT1jP3Quc2NhbGUocCxwKTpcInNsaWNlXCI9PWMmJnQuc2NhbGUoZCxkKSx0LnRyYW5zbGF0ZShudWxsPT1yPzA6LXIsbnVsbD09bz8wOi1vKX0sQS5FbGVtZW50PXt9LEEuRW1wdHlQcm9wZXJ0eT1uZXcgQS5Qcm9wZXJ0eShcIkVNUFRZXCIsXCJcIiksQS5FbGVtZW50LkVsZW1lbnRCYXNlPWZ1bmN0aW9uKGEpe3RoaXMuYXR0cmlidXRlcz17fSx0aGlzLnN0eWxlcz17fSx0aGlzLnN0eWxlc1NwZWNpZmljaXR5PXt9LHRoaXMuY2hpbGRyZW49W10sdGhpcy5hdHRyaWJ1dGU9ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmF0dHJpYnV0ZXNbdF07cmV0dXJuIG51bGwhPWk/aTooMT09ZSYmKGk9bmV3IEEuUHJvcGVydHkodCxcIlwiKSx0aGlzLmF0dHJpYnV0ZXNbdF09aSksaXx8QS5FbXB0eVByb3BlcnR5KX0sdGhpcy5nZXRIcmVmQXR0cmlidXRlPWZ1bmN0aW9uKCl7Zm9yKHZhciB0IGluIHRoaXMuYXR0cmlidXRlcylpZihcImhyZWZcIj09dHx8dC5tYXRjaCgvOmhyZWYkLykpcmV0dXJuIHRoaXMuYXR0cmlidXRlc1t0XTtyZXR1cm4gQS5FbXB0eVByb3BlcnR5fSx0aGlzLnN0eWxlPWZ1bmN0aW9uKHQsZSxpKXt2YXIgbj10aGlzLnN0eWxlc1t0XTtpZihudWxsIT1uKXJldHVybiBuO3ZhciBzPXRoaXMuYXR0cmlidXRlKHQpO2lmKG51bGwhPXMmJnMuaGFzVmFsdWUoKSlyZXR1cm4gdGhpcy5zdHlsZXNbdF09cztpZigxIT1pKXt2YXIgYT10aGlzLnBhcmVudDtpZihudWxsIT1hKXt2YXIgcj1hLnN0eWxlKHQpO2lmKG51bGwhPXImJnIuaGFzVmFsdWUoKSlyZXR1cm4gcn19cmV0dXJuIDE9PWUmJihuPW5ldyBBLlByb3BlcnR5KHQsXCJcIiksdGhpcy5zdHlsZXNbdF09biksbnx8QS5FbXB0eVByb3BlcnR5fSx0aGlzLnJlbmRlcj1mdW5jdGlvbih0KXtpZihcIm5vbmVcIiE9dGhpcy5zdHlsZShcImRpc3BsYXlcIikudmFsdWUmJlwiaGlkZGVuXCIhPXRoaXMuc3R5bGUoXCJ2aXNpYmlsaXR5XCIpLnZhbHVlKXtpZih0LnNhdmUoKSx0aGlzLnN0eWxlKFwibWFza1wiKS5oYXNWYWx1ZSgpKXt2YXIgZT10aGlzLnN0eWxlKFwibWFza1wiKS5nZXREZWZpbml0aW9uKCk7bnVsbCE9ZSYmZS5hcHBseSh0LHRoaXMpfWVsc2UgaWYodGhpcy5zdHlsZShcImZpbHRlclwiKS5oYXNWYWx1ZSgpKXt2YXIgaT10aGlzLnN0eWxlKFwiZmlsdGVyXCIpLmdldERlZmluaXRpb24oKTtudWxsIT1pJiZpLmFwcGx5KHQsdGhpcyl9ZWxzZSB0aGlzLnNldENvbnRleHQodCksdGhpcy5yZW5kZXJDaGlsZHJlbih0KSx0aGlzLmNsZWFyQ29udGV4dCh0KTt0LnJlc3RvcmUoKX19LHRoaXMuc2V0Q29udGV4dD1mdW5jdGlvbih0KXt9LHRoaXMuY2xlYXJDb250ZXh0PWZ1bmN0aW9uKHQpe30sdGhpcy5yZW5kZXJDaGlsZHJlbj1mdW5jdGlvbih0KXtmb3IodmFyIGU9MDtlPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO2UrKyl0aGlzLmNoaWxkcmVuW2VdLnJlbmRlcih0KX0sdGhpcy5hZGRDaGlsZD1mdW5jdGlvbih0LGUpe3ZhciBpPXQ7ZSYmKGk9QS5DcmVhdGVFbGVtZW50KHQpKSxpLnBhcmVudD10aGlzLFwidGl0bGVcIiE9aS50eXBlJiZ0aGlzLmNoaWxkcmVuLnB1c2goaSl9LHRoaXMuYWRkU3R5bGVzRnJvbVN0eWxlRGVmaW5pdGlvbj1mdW5jdGlvbigpe2Zvcih2YXIgdCBpbiBBLlN0eWxlcylpZihcIkBcIiE9dFswXSYmZihhLHQpKXt2YXIgZT1BLlN0eWxlc1t0XSxpPUEuU3R5bGVzU3BlY2lmaWNpdHlbdF07aWYobnVsbCE9ZSlmb3IodmFyIG4gaW4gZSl7dmFyIHM9dGhpcy5zdHlsZXNTcGVjaWZpY2l0eVtuXTt2b2lkIDA9PT1zJiYocz1cIjAwMFwiKSxzPGkmJih0aGlzLnN0eWxlc1tuXT1lW25dLHRoaXMuc3R5bGVzU3BlY2lmaWNpdHlbbl09aSl9fX07dmFyIHQsZT1uZXcgUmVnRXhwKFwiXltBLVotXSskXCIpO2lmKG51bGwhPWEmJjE9PWEubm9kZVR5cGUpe2Zvcih2YXIgaT0wO2k8YS5hdHRyaWJ1dGVzLmxlbmd0aDtpKyspe3ZhciBuPWEuYXR0cmlidXRlc1tpXSxzPSh0PW4ubm9kZU5hbWUsZS50ZXN0KHQpP3QudG9Mb3dlckNhc2UoKTp0KTt0aGlzLmF0dHJpYnV0ZXNbc109bmV3IEEuUHJvcGVydHkocyxuLnZhbHVlKX1pZih0aGlzLmFkZFN0eWxlc0Zyb21TdHlsZURlZmluaXRpb24oKSx0aGlzLmF0dHJpYnV0ZShcInN0eWxlXCIpLmhhc1ZhbHVlKCkpe3ZhciByPXRoaXMuYXR0cmlidXRlKFwic3R5bGVcIikudmFsdWUuc3BsaXQoXCI7XCIpO2ZvcihpPTA7aTxyLmxlbmd0aDtpKyspaWYoXCJcIiE9QS50cmltKHJbaV0pKXt2YXIgbz1yW2ldLnNwbGl0KFwiOlwiKSxsPUEudHJpbShvWzBdKSxoPUEudHJpbShvWzFdKTt0aGlzLnN0eWxlc1tsXT1uZXcgQS5Qcm9wZXJ0eShsLGgpfX1mb3IodGhpcy5hdHRyaWJ1dGUoXCJpZFwiKS5oYXNWYWx1ZSgpJiZudWxsPT1BLkRlZmluaXRpb25zW3RoaXMuYXR0cmlidXRlKFwiaWRcIikudmFsdWVdJiYoQS5EZWZpbml0aW9uc1t0aGlzLmF0dHJpYnV0ZShcImlkXCIpLnZhbHVlXT10aGlzKSxpPTA7aTxhLmNoaWxkTm9kZXMubGVuZ3RoO2krKyl7dmFyIHU9YS5jaGlsZE5vZGVzW2ldO2lmKDE9PXUubm9kZVR5cGUmJnRoaXMuYWRkQ2hpbGQodSwhMCksdGhpcy5jYXB0dXJlVGV4dE5vZGVzJiYoMz09dS5ub2RlVHlwZXx8ND09dS5ub2RlVHlwZSkpe3ZhciBjPXUudmFsdWV8fHUudGV4dHx8dS50ZXh0Q29udGVudHx8XCJcIjtcIlwiIT1BLmNvbXByZXNzU3BhY2VzKGMpJiZ0aGlzLmFkZENoaWxkKG5ldyBBLkVsZW1lbnQudHNwYW4odSksITEpfX19fSxBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmNhbGN1bGF0ZU9wYWNpdHk9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9MSxlPXRoaXM7bnVsbCE9ZTspe3ZhciBpPWUuc3R5bGUoXCJvcGFjaXR5XCIsITEsITApO2kuaGFzVmFsdWUoKSYmKHQqPWkubnVtVmFsdWUoKSksZT1lLnBhcmVudH1yZXR1cm4gdH0sdGhpcy5zZXRDb250ZXh0PWZ1bmN0aW9uKHQsZSl7aWYoIWUpe3ZhciBpO2lmKHRoaXMuc3R5bGUoXCJmaWxsXCIpLmlzVXJsRGVmaW5pdGlvbigpKW51bGwhPShpPXRoaXMuc3R5bGUoXCJmaWxsXCIpLmdldEZpbGxTdHlsZURlZmluaXRpb24odGhpcyx0aGlzLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIpKSkmJih0LmZpbGxTdHlsZT1pKTtlbHNlIGlmKHRoaXMuc3R5bGUoXCJmaWxsXCIpLmhhc1ZhbHVlKCkpe3ZhciBuO1wiY3VycmVudENvbG9yXCI9PShuPXRoaXMuc3R5bGUoXCJmaWxsXCIpKS52YWx1ZSYmKG4udmFsdWU9dGhpcy5zdHlsZShcImNvbG9yXCIpLnZhbHVlKSxcImluaGVyaXRcIiE9bi52YWx1ZSYmKHQuZmlsbFN0eWxlPVwibm9uZVwiPT1uLnZhbHVlP1wicmdiYSgwLDAsMCwwKVwiOm4udmFsdWUpfWlmKHRoaXMuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIikuaGFzVmFsdWUoKSYmKG49KG49bmV3IEEuUHJvcGVydHkoXCJmaWxsXCIsdC5maWxsU3R5bGUpKS5hZGRPcGFjaXR5KHRoaXMuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIikpLHQuZmlsbFN0eWxlPW4udmFsdWUpLHRoaXMuc3R5bGUoXCJzdHJva2VcIikuaXNVcmxEZWZpbml0aW9uKCkpbnVsbCE9KGk9dGhpcy5zdHlsZShcInN0cm9rZVwiKS5nZXRGaWxsU3R5bGVEZWZpbml0aW9uKHRoaXMsdGhpcy5zdHlsZShcInN0cm9rZS1vcGFjaXR5XCIpKSkmJih0LnN0cm9rZVN0eWxlPWkpO2Vsc2UgaWYodGhpcy5zdHlsZShcInN0cm9rZVwiKS5oYXNWYWx1ZSgpKXt2YXIgcztcImN1cnJlbnRDb2xvclwiPT0ocz10aGlzLnN0eWxlKFwic3Ryb2tlXCIpKS52YWx1ZSYmKHMudmFsdWU9dGhpcy5zdHlsZShcImNvbG9yXCIpLnZhbHVlKSxcImluaGVyaXRcIiE9cy52YWx1ZSYmKHQuc3Ryb2tlU3R5bGU9XCJub25lXCI9PXMudmFsdWU/XCJyZ2JhKDAsMCwwLDApXCI6cy52YWx1ZSl9aWYodGhpcy5zdHlsZShcInN0cm9rZS1vcGFjaXR5XCIpLmhhc1ZhbHVlKCkmJihzPShzPW5ldyBBLlByb3BlcnR5KFwic3Ryb2tlXCIsdC5zdHJva2VTdHlsZSkpLmFkZE9wYWNpdHkodGhpcy5zdHlsZShcInN0cm9rZS1vcGFjaXR5XCIpKSx0LnN0cm9rZVN0eWxlPXMudmFsdWUpLHRoaXMuc3R5bGUoXCJzdHJva2Utd2lkdGhcIikuaGFzVmFsdWUoKSl7dmFyIGE9dGhpcy5zdHlsZShcInN0cm9rZS13aWR0aFwiKS50b1BpeGVscygpO3QubGluZVdpZHRoPTA9PWE/LjAwMTphfWlmKHRoaXMuc3R5bGUoXCJzdHJva2UtbGluZWNhcFwiKS5oYXNWYWx1ZSgpJiYodC5saW5lQ2FwPXRoaXMuc3R5bGUoXCJzdHJva2UtbGluZWNhcFwiKS52YWx1ZSksdGhpcy5zdHlsZShcInN0cm9rZS1saW5lam9pblwiKS5oYXNWYWx1ZSgpJiYodC5saW5lSm9pbj10aGlzLnN0eWxlKFwic3Ryb2tlLWxpbmVqb2luXCIpLnZhbHVlKSx0aGlzLnN0eWxlKFwic3Ryb2tlLW1pdGVybGltaXRcIikuaGFzVmFsdWUoKSYmKHQubWl0ZXJMaW1pdD10aGlzLnN0eWxlKFwic3Ryb2tlLW1pdGVybGltaXRcIikudmFsdWUpLHRoaXMuc3R5bGUoXCJwYWludC1vcmRlclwiKS5oYXNWYWx1ZSgpJiYodC5wYWludE9yZGVyPXRoaXMuc3R5bGUoXCJwYWludC1vcmRlclwiKS52YWx1ZSksdGhpcy5zdHlsZShcInN0cm9rZS1kYXNoYXJyYXlcIikuaGFzVmFsdWUoKSYmXCJub25lXCIhPXRoaXMuc3R5bGUoXCJzdHJva2UtZGFzaGFycmF5XCIpLnZhbHVlKXt2YXIgcj1BLlRvTnVtYmVyQXJyYXkodGhpcy5zdHlsZShcInN0cm9rZS1kYXNoYXJyYXlcIikudmFsdWUpO3ZvaWQgMCE9PXQuc2V0TGluZURhc2g/dC5zZXRMaW5lRGFzaChyKTp2b2lkIDAhPT10LndlYmtpdExpbmVEYXNoP3Qud2Via2l0TGluZURhc2g9cjp2b2lkIDA9PT10Lm1vekRhc2h8fDE9PXIubGVuZ3RoJiYwPT1yWzBdfHwodC5tb3pEYXNoPXIpO3ZhciBvPXRoaXMuc3R5bGUoXCJzdHJva2UtZGFzaG9mZnNldFwiKS50b1BpeGVscygpO3ZvaWQgMCE9PXQubGluZURhc2hPZmZzZXQ/dC5saW5lRGFzaE9mZnNldD1vOnZvaWQgMCE9PXQud2Via2l0TGluZURhc2hPZmZzZXQ/dC53ZWJraXRMaW5lRGFzaE9mZnNldD1vOnZvaWQgMCE9PXQubW96RGFzaE9mZnNldCYmKHQubW96RGFzaE9mZnNldD1vKX19aWYodm9pZCAwIT09dC5mb250KXt0LmZvbnQ9QS5Gb250LkNyZWF0ZUZvbnQodGhpcy5zdHlsZShcImZvbnQtc3R5bGVcIikudmFsdWUsdGhpcy5zdHlsZShcImZvbnQtdmFyaWFudFwiKS52YWx1ZSx0aGlzLnN0eWxlKFwiZm9udC13ZWlnaHRcIikudmFsdWUsdGhpcy5zdHlsZShcImZvbnQtc2l6ZVwiKS5oYXNWYWx1ZSgpP3RoaXMuc3R5bGUoXCJmb250LXNpemVcIikudG9QaXhlbHMoKStcInB4XCI6XCJcIix0aGlzLnN0eWxlKFwiZm9udC1mYW1pbHlcIikudmFsdWUpLnRvU3RyaW5nKCk7dmFyIGw9dGhpcy5zdHlsZShcImZvbnQtc2l6ZVwiLCExLCExKTtsLmlzUGl4ZWxzKCkmJihBLmVtU2l6ZT1sLnRvUGl4ZWxzKCkpfWlmKHRoaXMuc3R5bGUoXCJ0cmFuc2Zvcm1cIiwhMSwhMCkuaGFzVmFsdWUoKSYmbmV3IEEuVHJhbnNmb3JtKHRoaXMuc3R5bGUoXCJ0cmFuc2Zvcm1cIiwhMSwhMCkudmFsdWUpLmFwcGx5KHQpLHRoaXMuc3R5bGUoXCJjbGlwLXBhdGhcIiwhMSwhMCkuaGFzVmFsdWUoKSl7dmFyIGg9dGhpcy5zdHlsZShcImNsaXAtcGF0aFwiLCExLCEwKS5nZXREZWZpbml0aW9uKCk7bnVsbCE9aCYmaC5hcHBseSh0KX10Lmdsb2JhbEFscGhhPXRoaXMuY2FsY3VsYXRlT3BhY2l0eSgpfX0sQS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMucGF0aD1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbCE9dCYmdC5iZWdpblBhdGgoKSxuZXcgQS5Cb3VuZGluZ0JveH0sdGhpcy5yZW5kZXJDaGlsZHJlbj1mdW5jdGlvbih0KXt0aGlzLnBhdGgodCksQS5Nb3VzZS5jaGVja1BhdGgodGhpcyx0KSxcIlwiIT10LmZpbGxTdHlsZSYmKFwiaW5oZXJpdFwiIT10aGlzLnN0eWxlKFwiZmlsbC1ydWxlXCIpLnZhbHVlT3JEZWZhdWx0KFwiaW5oZXJpdFwiKT90LmZpbGwodGhpcy5zdHlsZShcImZpbGwtcnVsZVwiKS52YWx1ZSk6dC5maWxsKCkpLFwiXCIhPXQuc3Ryb2tlU3R5bGUmJnQuc3Ryb2tlKCk7dmFyIGU9dGhpcy5nZXRNYXJrZXJzKCk7aWYobnVsbCE9ZSl7aWYodGhpcy5zdHlsZShcIm1hcmtlci1zdGFydFwiKS5pc1VybERlZmluaXRpb24oKSYmKGk9dGhpcy5zdHlsZShcIm1hcmtlci1zdGFydFwiKS5nZXREZWZpbml0aW9uKCkpLnJlbmRlcih0LGVbMF1bMF0sZVswXVsxXSksdGhpcy5zdHlsZShcIm1hcmtlci1taWRcIikuaXNVcmxEZWZpbml0aW9uKCkpZm9yKHZhciBpPXRoaXMuc3R5bGUoXCJtYXJrZXItbWlkXCIpLmdldERlZmluaXRpb24oKSxuPTE7bjxlLmxlbmd0aC0xO24rKylpLnJlbmRlcih0LGVbbl1bMF0sZVtuXVsxXSk7dGhpcy5zdHlsZShcIm1hcmtlci1lbmRcIikuaXNVcmxEZWZpbml0aW9uKCkmJihpPXRoaXMuc3R5bGUoXCJtYXJrZXItZW5kXCIpLmdldERlZmluaXRpb24oKSkucmVuZGVyKHQsZVtlLmxlbmd0aC0xXVswXSxlW2UubGVuZ3RoLTFdWzFdKX19LHRoaXMuZ2V0Qm91bmRpbmdCb3g9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wYXRoKCl9LHRoaXMuZ2V0TWFya2Vycz1mdW5jdGlvbigpe3JldHVybiBudWxsfX0sQS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLEEuRWxlbWVudC5zdmc9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmJhc2VDbGVhckNvbnRleHQ9dGhpcy5jbGVhckNvbnRleHQsdGhpcy5jbGVhckNvbnRleHQ9ZnVuY3Rpb24odCl7dGhpcy5iYXNlQ2xlYXJDb250ZXh0KHQpLEEuVmlld1BvcnQuUmVtb3ZlQ3VycmVudCgpfSx0aGlzLmJhc2VTZXRDb250ZXh0PXRoaXMuc2V0Q29udGV4dCx0aGlzLnNldENvbnRleHQ9ZnVuY3Rpb24odCl7aWYodC5zdHJva2VTdHlsZT1cInJnYmEoMCwwLDAsMClcIix0LmxpbmVDYXA9XCJidXR0XCIsdC5saW5lSm9pbj1cIm1pdGVyXCIsdC5taXRlckxpbWl0PTQsdC5jYW52YXMuc3R5bGUmJnZvaWQgMCE9PXQuZm9udCYmdm9pZCAwIT09dS5nZXRDb21wdXRlZFN0eWxlKXt0LmZvbnQ9dS5nZXRDb21wdXRlZFN0eWxlKHQuY2FudmFzKS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udFwiKTt2YXIgZT1uZXcgQS5Qcm9wZXJ0eShcImZvbnRTaXplXCIsQS5Gb250LlBhcnNlKHQuZm9udCkuZm9udFNpemUpO2UuaGFzVmFsdWUoKSYmKEEucm9vdEVtU2l6ZT1BLmVtU2l6ZT1lLnRvUGl4ZWxzKFwieVwiKSl9dGhpcy5iYXNlU2V0Q29udGV4dCh0KSx0aGlzLmF0dHJpYnV0ZShcInhcIikuaGFzVmFsdWUoKXx8KHRoaXMuYXR0cmlidXRlKFwieFwiLCEwKS52YWx1ZT0wKSx0aGlzLmF0dHJpYnV0ZShcInlcIikuaGFzVmFsdWUoKXx8KHRoaXMuYXR0cmlidXRlKFwieVwiLCEwKS52YWx1ZT0wKSx0LnRyYW5zbGF0ZSh0aGlzLmF0dHJpYnV0ZShcInhcIikudG9QaXhlbHMoXCJ4XCIpLHRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIikpO3ZhciBpPUEuVmlld1BvcnQud2lkdGgoKSxuPUEuVmlld1BvcnQuaGVpZ2h0KCk7aWYodGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS5oYXNWYWx1ZSgpfHwodGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiLCEwKS52YWx1ZT1cIjEwMCVcIiksdGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikuaGFzVmFsdWUoKXx8KHRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIsITApLnZhbHVlPVwiMTAwJVwiKSx2b2lkIDA9PT10aGlzLnJvb3Qpe2k9dGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIiksbj10aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIik7dmFyIHM9MCxhPTA7dGhpcy5hdHRyaWJ1dGUoXCJyZWZYXCIpLmhhc1ZhbHVlKCkmJnRoaXMuYXR0cmlidXRlKFwicmVmWVwiKS5oYXNWYWx1ZSgpJiYocz0tdGhpcy5hdHRyaWJ1dGUoXCJyZWZYXCIpLnRvUGl4ZWxzKFwieFwiKSxhPS10aGlzLmF0dHJpYnV0ZShcInJlZllcIikudG9QaXhlbHMoXCJ5XCIpKSxcInZpc2libGVcIiE9dGhpcy5hdHRyaWJ1dGUoXCJvdmVyZmxvd1wiKS52YWx1ZU9yRGVmYXVsdChcImhpZGRlblwiKSYmKHQuYmVnaW5QYXRoKCksdC5tb3ZlVG8ocyxhKSx0LmxpbmVUbyhpLGEpLHQubGluZVRvKGksbiksdC5saW5lVG8ocyxuKSx0LmNsb3NlUGF0aCgpLHQuY2xpcCgpKX1pZihBLlZpZXdQb3J0LlNldEN1cnJlbnQoaSxuKSx0aGlzLmF0dHJpYnV0ZShcInZpZXdCb3hcIikuaGFzVmFsdWUoKSl7dmFyIHI9QS5Ub051bWJlckFycmF5KHRoaXMuYXR0cmlidXRlKFwidmlld0JveFwiKS52YWx1ZSksbz1yWzBdLGw9clsxXTtpPXJbMl0sbj1yWzNdLEEuQXNwZWN0UmF0aW8odCx0aGlzLmF0dHJpYnV0ZShcInByZXNlcnZlQXNwZWN0UmF0aW9cIikudmFsdWUsQS5WaWV3UG9ydC53aWR0aCgpLGksQS5WaWV3UG9ydC5oZWlnaHQoKSxuLG8sbCx0aGlzLmF0dHJpYnV0ZShcInJlZlhcIikudmFsdWUsdGhpcy5hdHRyaWJ1dGUoXCJyZWZZXCIpLnZhbHVlKSxBLlZpZXdQb3J0LlJlbW92ZUN1cnJlbnQoKSxBLlZpZXdQb3J0LlNldEN1cnJlbnQoclsyXSxyWzNdKX19fSxBLkVsZW1lbnQuc3ZnLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsQS5FbGVtZW50LnJlY3Q9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMucGF0aD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmF0dHJpYnV0ZShcInhcIikudG9QaXhlbHMoXCJ4XCIpLGk9dGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLnRvUGl4ZWxzKFwieVwiKSxuPXRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIpLHM9dGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIpLGE9dGhpcy5hdHRyaWJ1dGUoXCJyeFwiKS50b1BpeGVscyhcInhcIikscj10aGlzLmF0dHJpYnV0ZShcInJ5XCIpLnRvUGl4ZWxzKFwieVwiKTtpZih0aGlzLmF0dHJpYnV0ZShcInJ4XCIpLmhhc1ZhbHVlKCkmJiF0aGlzLmF0dHJpYnV0ZShcInJ5XCIpLmhhc1ZhbHVlKCkmJihyPWEpLHRoaXMuYXR0cmlidXRlKFwicnlcIikuaGFzVmFsdWUoKSYmIXRoaXMuYXR0cmlidXRlKFwicnhcIikuaGFzVmFsdWUoKSYmKGE9ciksYT1NYXRoLm1pbihhLG4vMikscj1NYXRoLm1pbihyLHMvMiksbnVsbCE9dCl7dmFyIG89KE1hdGguc3FydCgyKS0xKS8zKjQ7dC5iZWdpblBhdGgoKSx0Lm1vdmVUbyhlK2EsaSksdC5saW5lVG8oZStuLWEsaSksdC5iZXppZXJDdXJ2ZVRvKGUrbi1hK28qYSxpLGUrbixpK3ItbypyLGUrbixpK3IpLHQubGluZVRvKGUrbixpK3MtciksdC5iZXppZXJDdXJ2ZVRvKGUrbixpK3MtcitvKnIsZStuLWErbyphLGkrcyxlK24tYSxpK3MpLHQubGluZVRvKGUrYSxpK3MpLHQuYmV6aWVyQ3VydmVUbyhlK2EtbyphLGkrcyxlLGkrcy1yK28qcixlLGkrcy1yKSx0LmxpbmVUbyhlLGkrciksdC5iZXppZXJDdXJ2ZVRvKGUsaStyLW8qcixlK2EtbyphLGksZSthLGkpLHQuY2xvc2VQYXRoKCl9cmV0dXJuIG5ldyBBLkJvdW5kaW5nQm94KGUsaSxlK24saStzKX19LEEuRWxlbWVudC5yZWN0LnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSxBLkVsZW1lbnQuY2lyY2xlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnBhdGg9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5hdHRyaWJ1dGUoXCJjeFwiKS50b1BpeGVscyhcInhcIiksaT10aGlzLmF0dHJpYnV0ZShcImN5XCIpLnRvUGl4ZWxzKFwieVwiKSxuPXRoaXMuYXR0cmlidXRlKFwiclwiKS50b1BpeGVscygpO3JldHVybiBudWxsIT10JiYodC5iZWdpblBhdGgoKSx0LmFyYyhlLGksbiwwLDIqTWF0aC5QSSwhMSksdC5jbG9zZVBhdGgoKSksbmV3IEEuQm91bmRpbmdCb3goZS1uLGktbixlK24saStuKX19LEEuRWxlbWVudC5jaXJjbGUucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLEEuRWxlbWVudC5lbGxpcHNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnBhdGg9ZnVuY3Rpb24odCl7dmFyIGU9KE1hdGguc3FydCgyKS0xKS8zKjQsaT10aGlzLmF0dHJpYnV0ZShcInJ4XCIpLnRvUGl4ZWxzKFwieFwiKSxuPXRoaXMuYXR0cmlidXRlKFwicnlcIikudG9QaXhlbHMoXCJ5XCIpLHM9dGhpcy5hdHRyaWJ1dGUoXCJjeFwiKS50b1BpeGVscyhcInhcIiksYT10aGlzLmF0dHJpYnV0ZShcImN5XCIpLnRvUGl4ZWxzKFwieVwiKTtyZXR1cm4gbnVsbCE9dCYmKHQuYmVnaW5QYXRoKCksdC5tb3ZlVG8ocytpLGEpLHQuYmV6aWVyQ3VydmVUbyhzK2ksYStlKm4scytlKmksYStuLHMsYStuKSx0LmJlemllckN1cnZlVG8ocy1lKmksYStuLHMtaSxhK2UqbixzLWksYSksdC5iZXppZXJDdXJ2ZVRvKHMtaSxhLWUqbixzLWUqaSxhLW4scyxhLW4pLHQuYmV6aWVyQ3VydmVUbyhzK2UqaSxhLW4scytpLGEtZSpuLHMraSxhKSx0LmNsb3NlUGF0aCgpKSxuZXcgQS5Cb3VuZGluZ0JveChzLWksYS1uLHMraSxhK24pfX0sQS5FbGVtZW50LmVsbGlwc2UucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLEEuRWxlbWVudC5saW5lPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmdldFBvaW50cz1mdW5jdGlvbigpe3JldHVybltuZXcgQS5Qb2ludCh0aGlzLmF0dHJpYnV0ZShcIngxXCIpLnRvUGl4ZWxzKFwieFwiKSx0aGlzLmF0dHJpYnV0ZShcInkxXCIpLnRvUGl4ZWxzKFwieVwiKSksbmV3IEEuUG9pbnQodGhpcy5hdHRyaWJ1dGUoXCJ4MlwiKS50b1BpeGVscyhcInhcIiksdGhpcy5hdHRyaWJ1dGUoXCJ5MlwiKS50b1BpeGVscyhcInlcIikpXX0sdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuZ2V0UG9pbnRzKCk7cmV0dXJuIG51bGwhPXQmJih0LmJlZ2luUGF0aCgpLHQubW92ZVRvKGVbMF0ueCxlWzBdLnkpLHQubGluZVRvKGVbMV0ueCxlWzFdLnkpKSxuZXcgQS5Cb3VuZGluZ0JveChlWzBdLngsZVswXS55LGVbMV0ueCxlWzFdLnkpfSx0aGlzLmdldE1hcmtlcnM9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmdldFBvaW50cygpLGU9dFswXS5hbmdsZVRvKHRbMV0pO3JldHVybltbdFswXSxlXSxbdFsxXSxlXV19fSxBLkVsZW1lbnQubGluZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsQS5FbGVtZW50LnBvbHlsaW5lPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnBvaW50cz1BLkNyZWF0ZVBhdGgodGhpcy5hdHRyaWJ1dGUoXCJwb2ludHNcIikudmFsdWUpLHRoaXMucGF0aD1mdW5jdGlvbih0KXt2YXIgZT1uZXcgQS5Cb3VuZGluZ0JveCh0aGlzLnBvaW50c1swXS54LHRoaXMucG9pbnRzWzBdLnkpO251bGwhPXQmJih0LmJlZ2luUGF0aCgpLHQubW92ZVRvKHRoaXMucG9pbnRzWzBdLngsdGhpcy5wb2ludHNbMF0ueSkpO2Zvcih2YXIgaT0xO2k8dGhpcy5wb2ludHMubGVuZ3RoO2krKyllLmFkZFBvaW50KHRoaXMucG9pbnRzW2ldLngsdGhpcy5wb2ludHNbaV0ueSksbnVsbCE9dCYmdC5saW5lVG8odGhpcy5wb2ludHNbaV0ueCx0aGlzLnBvaW50c1tpXS55KTtyZXR1cm4gZX0sdGhpcy5nZXRNYXJrZXJzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLGU9MDtlPHRoaXMucG9pbnRzLmxlbmd0aC0xO2UrKyl0LnB1c2goW3RoaXMucG9pbnRzW2VdLHRoaXMucG9pbnRzW2VdLmFuZ2xlVG8odGhpcy5wb2ludHNbZSsxXSldKTtyZXR1cm4gMDx0Lmxlbmd0aCYmdC5wdXNoKFt0aGlzLnBvaW50c1t0aGlzLnBvaW50cy5sZW5ndGgtMV0sdFt0Lmxlbmd0aC0xXVsxXV0pLHR9fSxBLkVsZW1lbnQucG9seWxpbmUucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLEEuRWxlbWVudC5wb2x5Z29uPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQucG9seWxpbmUsdGhpcy5iYXNlKHQpLHRoaXMuYmFzZVBhdGg9dGhpcy5wYXRoLHRoaXMucGF0aD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmJhc2VQYXRoKHQpO3JldHVybiBudWxsIT10JiYodC5saW5lVG8odGhpcy5wb2ludHNbMF0ueCx0aGlzLnBvaW50c1swXS55KSx0LmNsb3NlUGF0aCgpKSxlfX0sQS5FbGVtZW50LnBvbHlnb24ucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQucG9seWxpbmUsQS5FbGVtZW50LnBhdGg9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpO3ZhciBlPXRoaXMuYXR0cmlidXRlKFwiZFwiKS52YWx1ZTtlPWUucmVwbGFjZSgvLC9nbSxcIiBcIik7Zm9yKHZhciBpPTA7aTwyO2krKyllPWUucmVwbGFjZSgvKFtNbVp6TGxIaFZ2Q2NTc1FxVHRBYV0pKFteXFxzXSkvZ20sXCIkMSAkMlwiKTtmb3IoZT0oZT1lLnJlcGxhY2UoLyhbXlxcc10pKFtNbVp6TGxIaFZ2Q2NTc1FxVHRBYV0pL2dtLFwiJDEgJDJcIikpLnJlcGxhY2UoLyhbMC05XSkoWytcXC1dKS9nbSxcIiQxICQyXCIpLGk9MDtpPDI7aSsrKWU9ZS5yZXBsYWNlKC8oXFwuWzAtOV0qKShcXC4pL2dtLFwiJDEgJDJcIik7ZT1lLnJlcGxhY2UoLyhbQWFdKFxccytbMC05XSspezN9KVxccysoWzAxXSlcXHMqKFswMV0pL2dtLFwiJDEgJDMgJDQgXCIpLGU9QS5jb21wcmVzc1NwYWNlcyhlKSxlPUEudHJpbShlKSx0aGlzLlBhdGhQYXJzZXI9bmV3IGZ1bmN0aW9uKHQpe3RoaXMudG9rZW5zPXQuc3BsaXQoXCIgXCIpLHRoaXMucmVzZXQ9ZnVuY3Rpb24oKXt0aGlzLmk9LTEsdGhpcy5jb21tYW5kPVwiXCIsdGhpcy5wcmV2aW91c0NvbW1hbmQ9XCJcIix0aGlzLnN0YXJ0PW5ldyBBLlBvaW50KDAsMCksdGhpcy5jb250cm9sPW5ldyBBLlBvaW50KDAsMCksdGhpcy5jdXJyZW50PW5ldyBBLlBvaW50KDAsMCksdGhpcy5wb2ludHM9W10sdGhpcy5hbmdsZXM9W119LHRoaXMuaXNFbmQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pPj10aGlzLnRva2Vucy5sZW5ndGgtMX0sdGhpcy5pc0NvbW1hbmRPckVuZD1mdW5jdGlvbigpe3JldHVybiEhdGhpcy5pc0VuZCgpfHxudWxsIT10aGlzLnRva2Vuc1t0aGlzLmkrMV0ubWF0Y2goL15bQS1aYS16XSQvKX0sdGhpcy5pc1JlbGF0aXZlQ29tbWFuZD1mdW5jdGlvbigpe3N3aXRjaCh0aGlzLmNvbW1hbmQpe2Nhc2VcIm1cIjpjYXNlXCJsXCI6Y2FzZVwiaFwiOmNhc2VcInZcIjpjYXNlXCJjXCI6Y2FzZVwic1wiOmNhc2VcInFcIjpjYXNlXCJ0XCI6Y2FzZVwiYVwiOmNhc2VcInpcIjpyZXR1cm4hMH1yZXR1cm4hMX0sdGhpcy5nZXRUb2tlbj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmkrKyx0aGlzLnRva2Vuc1t0aGlzLmldfSx0aGlzLmdldFNjYWxhcj1mdW5jdGlvbigpe3JldHVybiBwYXJzZUZsb2F0KHRoaXMuZ2V0VG9rZW4oKSl9LHRoaXMubmV4dENvbW1hbmQ9ZnVuY3Rpb24oKXt0aGlzLnByZXZpb3VzQ29tbWFuZD10aGlzLmNvbW1hbmQsdGhpcy5jb21tYW5kPXRoaXMuZ2V0VG9rZW4oKX0sdGhpcy5nZXRQb2ludD1mdW5jdGlvbigpe3ZhciB0PW5ldyBBLlBvaW50KHRoaXMuZ2V0U2NhbGFyKCksdGhpcy5nZXRTY2FsYXIoKSk7cmV0dXJuIHRoaXMubWFrZUFic29sdXRlKHQpfSx0aGlzLmdldEFzQ29udHJvbFBvaW50PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5nZXRQb2ludCgpO3JldHVybiB0aGlzLmNvbnRyb2w9dH0sdGhpcy5nZXRBc0N1cnJlbnRQb2ludD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuZ2V0UG9pbnQoKTtyZXR1cm4gdGhpcy5jdXJyZW50PXR9LHRoaXMuZ2V0UmVmbGVjdGVkQ29udHJvbFBvaW50PWZ1bmN0aW9uKCl7cmV0dXJuXCJjXCIhPXRoaXMucHJldmlvdXNDb21tYW5kLnRvTG93ZXJDYXNlKCkmJlwic1wiIT10aGlzLnByZXZpb3VzQ29tbWFuZC50b0xvd2VyQ2FzZSgpJiZcInFcIiE9dGhpcy5wcmV2aW91c0NvbW1hbmQudG9Mb3dlckNhc2UoKSYmXCJ0XCIhPXRoaXMucHJldmlvdXNDb21tYW5kLnRvTG93ZXJDYXNlKCk/dGhpcy5jdXJyZW50Om5ldyBBLlBvaW50KDIqdGhpcy5jdXJyZW50LngtdGhpcy5jb250cm9sLngsMip0aGlzLmN1cnJlbnQueS10aGlzLmNvbnRyb2wueSl9LHRoaXMubWFrZUFic29sdXRlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmlzUmVsYXRpdmVDb21tYW5kKCkmJih0LngrPXRoaXMuY3VycmVudC54LHQueSs9dGhpcy5jdXJyZW50LnkpLHR9LHRoaXMuYWRkTWFya2VyPWZ1bmN0aW9uKHQsZSxpKXtudWxsIT1pJiYwPHRoaXMuYW5nbGVzLmxlbmd0aCYmbnVsbD09dGhpcy5hbmdsZXNbdGhpcy5hbmdsZXMubGVuZ3RoLTFdJiYodGhpcy5hbmdsZXNbdGhpcy5hbmdsZXMubGVuZ3RoLTFdPXRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aC0xXS5hbmdsZVRvKGkpKSx0aGlzLmFkZE1hcmtlckFuZ2xlKHQsbnVsbD09ZT9udWxsOmUuYW5nbGVUbyh0KSl9LHRoaXMuYWRkTWFya2VyQW5nbGU9ZnVuY3Rpb24odCxlKXt0aGlzLnBvaW50cy5wdXNoKHQpLHRoaXMuYW5nbGVzLnB1c2goZSl9LHRoaXMuZ2V0TWFya2VyUG9pbnRzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucG9pbnRzfSx0aGlzLmdldE1hcmtlckFuZ2xlcz1mdW5jdGlvbigpe2Zvcih2YXIgdD0wO3Q8dGhpcy5hbmdsZXMubGVuZ3RoO3QrKylpZihudWxsPT10aGlzLmFuZ2xlc1t0XSlmb3IodmFyIGU9dCsxO2U8dGhpcy5hbmdsZXMubGVuZ3RoO2UrKylpZihudWxsIT10aGlzLmFuZ2xlc1tlXSl7dGhpcy5hbmdsZXNbdF09dGhpcy5hbmdsZXNbZV07YnJlYWt9cmV0dXJuIHRoaXMuYW5nbGVzfX0oZSksdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuUGF0aFBhcnNlcjtlLnJlc2V0KCk7dmFyIGk9bmV3IEEuQm91bmRpbmdCb3g7Zm9yKG51bGwhPXQmJnQuYmVnaW5QYXRoKCk7IWUuaXNFbmQoKTspc3dpdGNoKGUubmV4dENvbW1hbmQoKSxlLmNvbW1hbmQpe2Nhc2VcIk1cIjpjYXNlXCJtXCI6dmFyIG49ZS5nZXRBc0N1cnJlbnRQb2ludCgpO2ZvcihlLmFkZE1hcmtlcihuKSxpLmFkZFBvaW50KG4ueCxuLnkpLG51bGwhPXQmJnQubW92ZVRvKG4ueCxuLnkpLGUuc3RhcnQ9ZS5jdXJyZW50OyFlLmlzQ29tbWFuZE9yRW5kKCk7KW49ZS5nZXRBc0N1cnJlbnRQb2ludCgpLGUuYWRkTWFya2VyKG4sZS5zdGFydCksaS5hZGRQb2ludChuLngsbi55KSxudWxsIT10JiZ0LmxpbmVUbyhuLngsbi55KTticmVhaztjYXNlXCJMXCI6Y2FzZVwibFwiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspe3ZhciBzPWUuY3VycmVudDtuPWUuZ2V0QXNDdXJyZW50UG9pbnQoKSxlLmFkZE1hcmtlcihuLHMpLGkuYWRkUG9pbnQobi54LG4ueSksbnVsbCE9dCYmdC5saW5lVG8obi54LG4ueSl9YnJlYWs7Y2FzZVwiSFwiOmNhc2VcImhcIjpmb3IoOyFlLmlzQ29tbWFuZE9yRW5kKCk7KXt2YXIgYT1uZXcgQS5Qb2ludCgoZS5pc1JlbGF0aXZlQ29tbWFuZCgpP2UuY3VycmVudC54OjApK2UuZ2V0U2NhbGFyKCksZS5jdXJyZW50LnkpO2UuYWRkTWFya2VyKGEsZS5jdXJyZW50KSxlLmN1cnJlbnQ9YSxpLmFkZFBvaW50KGUuY3VycmVudC54LGUuY3VycmVudC55KSxudWxsIT10JiZ0LmxpbmVUbyhlLmN1cnJlbnQueCxlLmN1cnJlbnQueSl9YnJlYWs7Y2FzZVwiVlwiOmNhc2VcInZcIjpmb3IoOyFlLmlzQ29tbWFuZE9yRW5kKCk7KWE9bmV3IEEuUG9pbnQoZS5jdXJyZW50LngsKGUuaXNSZWxhdGl2ZUNvbW1hbmQoKT9lLmN1cnJlbnQueTowKStlLmdldFNjYWxhcigpKSxlLmFkZE1hcmtlcihhLGUuY3VycmVudCksZS5jdXJyZW50PWEsaS5hZGRQb2ludChlLmN1cnJlbnQueCxlLmN1cnJlbnQueSksbnVsbCE9dCYmdC5saW5lVG8oZS5jdXJyZW50LngsZS5jdXJyZW50LnkpO2JyZWFrO2Nhc2VcIkNcIjpjYXNlXCJjXCI6Zm9yKDshZS5pc0NvbW1hbmRPckVuZCgpOyl7dmFyIHI9ZS5jdXJyZW50LG89ZS5nZXRQb2ludCgpLGw9ZS5nZXRBc0NvbnRyb2xQb2ludCgpLGg9ZS5nZXRBc0N1cnJlbnRQb2ludCgpO2UuYWRkTWFya2VyKGgsbCxvKSxpLmFkZEJlemllckN1cnZlKHIueCxyLnksby54LG8ueSxsLngsbC55LGgueCxoLnkpLG51bGwhPXQmJnQuYmV6aWVyQ3VydmVUbyhvLngsby55LGwueCxsLnksaC54LGgueSl9YnJlYWs7Y2FzZVwiU1wiOmNhc2VcInNcIjpmb3IoOyFlLmlzQ29tbWFuZE9yRW5kKCk7KXI9ZS5jdXJyZW50LG89ZS5nZXRSZWZsZWN0ZWRDb250cm9sUG9pbnQoKSxsPWUuZ2V0QXNDb250cm9sUG9pbnQoKSxoPWUuZ2V0QXNDdXJyZW50UG9pbnQoKSxlLmFkZE1hcmtlcihoLGwsbyksaS5hZGRCZXppZXJDdXJ2ZShyLngsci55LG8ueCxvLnksbC54LGwueSxoLngsaC55KSxudWxsIT10JiZ0LmJlemllckN1cnZlVG8oby54LG8ueSxsLngsbC55LGgueCxoLnkpO2JyZWFrO2Nhc2VcIlFcIjpjYXNlXCJxXCI6Zm9yKDshZS5pc0NvbW1hbmRPckVuZCgpOylyPWUuY3VycmVudCxsPWUuZ2V0QXNDb250cm9sUG9pbnQoKSxoPWUuZ2V0QXNDdXJyZW50UG9pbnQoKSxlLmFkZE1hcmtlcihoLGwsbCksaS5hZGRRdWFkcmF0aWNDdXJ2ZShyLngsci55LGwueCxsLnksaC54LGgueSksbnVsbCE9dCYmdC5xdWFkcmF0aWNDdXJ2ZVRvKGwueCxsLnksaC54LGgueSk7YnJlYWs7Y2FzZVwiVFwiOmNhc2VcInRcIjpmb3IoOyFlLmlzQ29tbWFuZE9yRW5kKCk7KXI9ZS5jdXJyZW50LGw9ZS5nZXRSZWZsZWN0ZWRDb250cm9sUG9pbnQoKSxlLmNvbnRyb2w9bCxoPWUuZ2V0QXNDdXJyZW50UG9pbnQoKSxlLmFkZE1hcmtlcihoLGwsbCksaS5hZGRRdWFkcmF0aWNDdXJ2ZShyLngsci55LGwueCxsLnksaC54LGgueSksbnVsbCE9dCYmdC5xdWFkcmF0aWNDdXJ2ZVRvKGwueCxsLnksaC54LGgueSk7YnJlYWs7Y2FzZVwiQVwiOmNhc2VcImFcIjpmb3IoOyFlLmlzQ29tbWFuZE9yRW5kKCk7KXtyPWUuY3VycmVudDt2YXIgdT1lLmdldFNjYWxhcigpLGM9ZS5nZXRTY2FsYXIoKSxmPWUuZ2V0U2NhbGFyKCkqKE1hdGguUEkvMTgwKSxtPWUuZ2V0U2NhbGFyKCkscD1lLmdldFNjYWxhcigpLGQ9KGg9ZS5nZXRBc0N1cnJlbnRQb2ludCgpLG5ldyBBLlBvaW50KE1hdGguY29zKGYpKihyLngtaC54KS8yK01hdGguc2luKGYpKihyLnktaC55KS8yLC1NYXRoLnNpbihmKSooci54LWgueCkvMitNYXRoLmNvcyhmKSooci55LWgueSkvMikpLHk9TWF0aC5wb3coZC54LDIpL01hdGgucG93KHUsMikrTWF0aC5wb3coZC55LDIpL01hdGgucG93KGMsMik7MTx5JiYodSo9TWF0aC5zcXJ0KHkpLGMqPU1hdGguc3FydCh5KSk7dmFyIHY9KG09PXA/LTE6MSkqTWF0aC5zcXJ0KChNYXRoLnBvdyh1LDIpKk1hdGgucG93KGMsMiktTWF0aC5wb3codSwyKSpNYXRoLnBvdyhkLnksMiktTWF0aC5wb3coYywyKSpNYXRoLnBvdyhkLngsMikpLyhNYXRoLnBvdyh1LDIpKk1hdGgucG93KGQueSwyKStNYXRoLnBvdyhjLDIpKk1hdGgucG93KGQueCwyKSkpO2lzTmFOKHYpJiYodj0wKTt2YXIgZz1uZXcgQS5Qb2ludCh2KnUqZC55L2MsdiotYypkLngvdSkseD1uZXcgQS5Qb2ludCgoci54K2gueCkvMitNYXRoLmNvcyhmKSpnLngtTWF0aC5zaW4oZikqZy55LChyLnkraC55KS8yK01hdGguc2luKGYpKmcueCtNYXRoLmNvcyhmKSpnLnkpLGI9ZnVuY3Rpb24odCl7cmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh0WzBdLDIpK01hdGgucG93KHRbMV0sMikpfSxQPWZ1bmN0aW9uKHQsZSl7cmV0dXJuKHRbMF0qZVswXSt0WzFdKmVbMV0pLyhiKHQpKmIoZSkpfSxFPWZ1bmN0aW9uKHQsZSl7cmV0dXJuKHRbMF0qZVsxXTx0WzFdKmVbMF0/LTE6MSkqTWF0aC5hY29zKFAodCxlKSl9LHc9RShbMSwwXSxbKGQueC1nLngpL3UsKGQueS1nLnkpL2NdKSxCPVsoZC54LWcueCkvdSwoZC55LWcueSkvY10sQz1bKC1kLngtZy54KS91LCgtZC55LWcueSkvY10sVD1FKEIsQyk7UChCLEMpPD0tMSYmKFQ9TWF0aC5QSSksMTw9UChCLEMpJiYoVD0wKTt2YXIgVj0xLXA/MTotMSxNPXcrViooVC8yKSxTPW5ldyBBLlBvaW50KHgueCt1Kk1hdGguY29zKE0pLHgueStjKk1hdGguc2luKE0pKTtpZihlLmFkZE1hcmtlckFuZ2xlKFMsTS1WKk1hdGguUEkvMiksZS5hZGRNYXJrZXJBbmdsZShoLE0tVipNYXRoLlBJKSxpLmFkZFBvaW50KGgueCxoLnkpLG51bGwhPXQpe1A9Yzx1P3U6Yzt2YXIgaz1jPHU/MTp1L2MsRD1jPHU/Yy91OjE7dC50cmFuc2xhdGUoeC54LHgueSksdC5yb3RhdGUoZiksdC5zY2FsZShrLEQpLHQuYXJjKDAsMCxQLHcsdytULDEtcCksdC5zY2FsZSgxL2ssMS9EKSx0LnJvdGF0ZSgtZiksdC50cmFuc2xhdGUoLXgueCwteC55KX19YnJlYWs7Y2FzZVwiWlwiOmNhc2VcInpcIjpudWxsIT10JiZpLngxIT09aS54MiYmaS55MSE9PWkueTImJnQuY2xvc2VQYXRoKCksZS5jdXJyZW50PWUuc3RhcnR9cmV0dXJuIGl9LHRoaXMuZ2V0TWFya2Vycz1mdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLlBhdGhQYXJzZXIuZ2V0TWFya2VyUG9pbnRzKCksZT10aGlzLlBhdGhQYXJzZXIuZ2V0TWFya2VyQW5nbGVzKCksaT1bXSxuPTA7bjx0Lmxlbmd0aDtuKyspaS5wdXNoKFt0W25dLGVbbl1dKTtyZXR1cm4gaX19LEEuRWxlbWVudC5wYXRoLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSxBLkVsZW1lbnQucGF0dGVybj1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmNyZWF0ZVBhdHRlcm49ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiLCEwKSxuPXRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLnRvUGl4ZWxzKFwieVwiLCEwKSxzPW5ldyBBLkVsZW1lbnQuc3ZnO3MuYXR0cmlidXRlcy52aWV3Qm94PW5ldyBBLlByb3BlcnR5KFwidmlld0JveFwiLHRoaXMuYXR0cmlidXRlKFwidmlld0JveFwiKS52YWx1ZSkscy5hdHRyaWJ1dGVzLndpZHRoPW5ldyBBLlByb3BlcnR5KFwid2lkdGhcIixpK1wicHhcIikscy5hdHRyaWJ1dGVzLmhlaWdodD1uZXcgQS5Qcm9wZXJ0eShcImhlaWdodFwiLG4rXCJweFwiKSxzLmF0dHJpYnV0ZXMudHJhbnNmb3JtPW5ldyBBLlByb3BlcnR5KFwidHJhbnNmb3JtXCIsdGhpcy5hdHRyaWJ1dGUoXCJwYXR0ZXJuVHJhbnNmb3JtXCIpLnZhbHVlKSxzLmNoaWxkcmVuPXRoaXMuY2hpbGRyZW47dmFyIGE9cCgpO2Eud2lkdGg9aSxhLmhlaWdodD1uO3ZhciByPWEuZ2V0Q29udGV4dChcIjJkXCIpO3RoaXMuYXR0cmlidXRlKFwieFwiKS5oYXNWYWx1ZSgpJiZ0aGlzLmF0dHJpYnV0ZShcInlcIikuaGFzVmFsdWUoKSYmci50cmFuc2xhdGUodGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLnRvUGl4ZWxzKFwieFwiLCEwKSx0aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIsITApKTtmb3IodmFyIG89LTE7bzw9MTtvKyspZm9yKHZhciBsPS0xO2w8PTE7bCsrKXIuc2F2ZSgpLHMuYXR0cmlidXRlcy54PW5ldyBBLlByb3BlcnR5KFwieFwiLG8qYS53aWR0aCkscy5hdHRyaWJ1dGVzLnk9bmV3IEEuUHJvcGVydHkoXCJ5XCIsbCphLmhlaWdodCkscy5yZW5kZXIociksci5yZXN0b3JlKCk7cmV0dXJuIHQuY3JlYXRlUGF0dGVybihhLFwicmVwZWF0XCIpfX0sQS5FbGVtZW50LnBhdHRlcm4ucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50Lm1hcmtlcj1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmJhc2VSZW5kZXI9dGhpcy5yZW5kZXIsdGhpcy5yZW5kZXI9ZnVuY3Rpb24odCxlLGkpe2lmKGUpe3QudHJhbnNsYXRlKGUueCxlLnkpLFwiYXV0b1wiPT10aGlzLmF0dHJpYnV0ZShcIm9yaWVudFwiKS52YWx1ZU9yRGVmYXVsdChcImF1dG9cIikmJnQucm90YXRlKGkpLFwic3Ryb2tlV2lkdGhcIj09dGhpcy5hdHRyaWJ1dGUoXCJtYXJrZXJVbml0c1wiKS52YWx1ZU9yRGVmYXVsdChcInN0cm9rZVdpZHRoXCIpJiZ0LnNjYWxlKHQubGluZVdpZHRoLHQubGluZVdpZHRoKSx0LnNhdmUoKTt2YXIgbj1uZXcgQS5FbGVtZW50LnN2ZztuLmF0dHJpYnV0ZXMudmlld0JveD1uZXcgQS5Qcm9wZXJ0eShcInZpZXdCb3hcIix0aGlzLmF0dHJpYnV0ZShcInZpZXdCb3hcIikudmFsdWUpLG4uYXR0cmlidXRlcy5yZWZYPW5ldyBBLlByb3BlcnR5KFwicmVmWFwiLHRoaXMuYXR0cmlidXRlKFwicmVmWFwiKS52YWx1ZSksbi5hdHRyaWJ1dGVzLnJlZlk9bmV3IEEuUHJvcGVydHkoXCJyZWZZXCIsdGhpcy5hdHRyaWJ1dGUoXCJyZWZZXCIpLnZhbHVlKSxuLmF0dHJpYnV0ZXMud2lkdGg9bmV3IEEuUHJvcGVydHkoXCJ3aWR0aFwiLHRoaXMuYXR0cmlidXRlKFwibWFya2VyV2lkdGhcIikudmFsdWUpLG4uYXR0cmlidXRlcy5oZWlnaHQ9bmV3IEEuUHJvcGVydHkoXCJoZWlnaHRcIix0aGlzLmF0dHJpYnV0ZShcIm1hcmtlckhlaWdodFwiKS52YWx1ZSksbi5hdHRyaWJ1dGVzLmZpbGw9bmV3IEEuUHJvcGVydHkoXCJmaWxsXCIsdGhpcy5hdHRyaWJ1dGUoXCJmaWxsXCIpLnZhbHVlT3JEZWZhdWx0KFwiYmxhY2tcIikpLG4uYXR0cmlidXRlcy5zdHJva2U9bmV3IEEuUHJvcGVydHkoXCJzdHJva2VcIix0aGlzLmF0dHJpYnV0ZShcInN0cm9rZVwiKS52YWx1ZU9yRGVmYXVsdChcIm5vbmVcIikpLG4uY2hpbGRyZW49dGhpcy5jaGlsZHJlbixuLnJlbmRlcih0KSx0LnJlc3RvcmUoKSxcInN0cm9rZVdpZHRoXCI9PXRoaXMuYXR0cmlidXRlKFwibWFya2VyVW5pdHNcIikudmFsdWVPckRlZmF1bHQoXCJzdHJva2VXaWR0aFwiKSYmdC5zY2FsZSgxL3QubGluZVdpZHRoLDEvdC5saW5lV2lkdGgpLFwiYXV0b1wiPT10aGlzLmF0dHJpYnV0ZShcIm9yaWVudFwiKS52YWx1ZU9yRGVmYXVsdChcImF1dG9cIikmJnQucm90YXRlKC1pKSx0LnRyYW5zbGF0ZSgtZS54LC1lLnkpfX19LEEuRWxlbWVudC5tYXJrZXIucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmRlZnM9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5yZW5kZXI9ZnVuY3Rpb24odCl7fX0sQS5FbGVtZW50LmRlZnMucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LkdyYWRpZW50QmFzZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnN0b3BzPVtdO2Zvcih2YXIgZT0wO2U8dGhpcy5jaGlsZHJlbi5sZW5ndGg7ZSsrKXt2YXIgaT10aGlzLmNoaWxkcmVuW2VdO1wic3RvcFwiPT1pLnR5cGUmJnRoaXMuc3RvcHMucHVzaChpKX10aGlzLmdldEdyYWRpZW50PWZ1bmN0aW9uKCl7fSx0aGlzLmdyYWRpZW50VW5pdHM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hdHRyaWJ1dGUoXCJncmFkaWVudFVuaXRzXCIpLnZhbHVlT3JEZWZhdWx0KFwib2JqZWN0Qm91bmRpbmdCb3hcIil9LHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdD1bXCJncmFkaWVudFVuaXRzXCJdLHRoaXMuaW5oZXJpdFN0b3BDb250YWluZXI9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTA7ZTx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQubGVuZ3RoO2UrKyl7dmFyIGk9dGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0W2VdOyF0aGlzLmF0dHJpYnV0ZShpKS5oYXNWYWx1ZSgpJiZ0LmF0dHJpYnV0ZShpKS5oYXNWYWx1ZSgpJiYodGhpcy5hdHRyaWJ1dGUoaSwhMCkudmFsdWU9dC5hdHRyaWJ1dGUoaSkudmFsdWUpfX0sdGhpcy5jcmVhdGVHcmFkaWVudD1mdW5jdGlvbih0LGUsaSl7dmFyIG49dGhpczt0aGlzLmdldEhyZWZBdHRyaWJ1dGUoKS5oYXNWYWx1ZSgpJiYobj10aGlzLmdldEhyZWZBdHRyaWJ1dGUoKS5nZXREZWZpbml0aW9uKCksdGhpcy5pbmhlcml0U3RvcENvbnRhaW5lcihuKSk7dmFyIHM9ZnVuY3Rpb24odCl7cmV0dXJuIGkuaGFzVmFsdWUoKT9uZXcgQS5Qcm9wZXJ0eShcImNvbG9yXCIsdCkuYWRkT3BhY2l0eShpKS52YWx1ZTp0fSxhPXRoaXMuZ2V0R3JhZGllbnQodCxlKTtpZihudWxsPT1hKXJldHVybiBzKG4uc3RvcHNbbi5zdG9wcy5sZW5ndGgtMV0uY29sb3IpO2Zvcih2YXIgcj0wO3I8bi5zdG9wcy5sZW5ndGg7cisrKWEuYWRkQ29sb3JTdG9wKG4uc3RvcHNbcl0ub2Zmc2V0LHMobi5zdG9wc1tyXS5jb2xvcikpO2lmKHRoaXMuYXR0cmlidXRlKFwiZ3JhZGllbnRUcmFuc2Zvcm1cIikuaGFzVmFsdWUoKSl7dmFyIG89QS5WaWV3UG9ydC52aWV3UG9ydHNbMF0sbD1uZXcgQS5FbGVtZW50LnJlY3Q7bC5hdHRyaWJ1dGVzLng9bmV3IEEuUHJvcGVydHkoXCJ4XCIsLUEuTUFYX1ZJUlRVQUxfUElYRUxTLzMpLGwuYXR0cmlidXRlcy55PW5ldyBBLlByb3BlcnR5KFwieVwiLC1BLk1BWF9WSVJUVUFMX1BJWEVMUy8zKSxsLmF0dHJpYnV0ZXMud2lkdGg9bmV3IEEuUHJvcGVydHkoXCJ3aWR0aFwiLEEuTUFYX1ZJUlRVQUxfUElYRUxTKSxsLmF0dHJpYnV0ZXMuaGVpZ2h0PW5ldyBBLlByb3BlcnR5KFwiaGVpZ2h0XCIsQS5NQVhfVklSVFVBTF9QSVhFTFMpO3ZhciBoPW5ldyBBLkVsZW1lbnQuZztoLmF0dHJpYnV0ZXMudHJhbnNmb3JtPW5ldyBBLlByb3BlcnR5KFwidHJhbnNmb3JtXCIsdGhpcy5hdHRyaWJ1dGUoXCJncmFkaWVudFRyYW5zZm9ybVwiKS52YWx1ZSksaC5jaGlsZHJlbj1bbF07dmFyIHU9bmV3IEEuRWxlbWVudC5zdmc7dS5hdHRyaWJ1dGVzLng9bmV3IEEuUHJvcGVydHkoXCJ4XCIsMCksdS5hdHRyaWJ1dGVzLnk9bmV3IEEuUHJvcGVydHkoXCJ5XCIsMCksdS5hdHRyaWJ1dGVzLndpZHRoPW5ldyBBLlByb3BlcnR5KFwid2lkdGhcIixvLndpZHRoKSx1LmF0dHJpYnV0ZXMuaGVpZ2h0PW5ldyBBLlByb3BlcnR5KFwiaGVpZ2h0XCIsby5oZWlnaHQpLHUuY2hpbGRyZW49W2hdO3ZhciBjPXAoKTtjLndpZHRoPW8ud2lkdGgsYy5oZWlnaHQ9by5oZWlnaHQ7dmFyIGY9Yy5nZXRDb250ZXh0KFwiMmRcIik7cmV0dXJuIGYuZmlsbFN0eWxlPWEsdS5yZW5kZXIoZiksZi5jcmVhdGVQYXR0ZXJuKGMsXCJuby1yZXBlYXRcIil9cmV0dXJuIGF9fSxBLkVsZW1lbnQuR3JhZGllbnRCYXNlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5saW5lYXJHcmFkaWVudD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkdyYWRpZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJ4MVwiKSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcInkxXCIpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwieDJcIiksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJ5MlwiKSx0aGlzLmdldEdyYWRpZW50PWZ1bmN0aW9uKHQsZSl7dmFyIGk9XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9lLmdldEJvdW5kaW5nQm94KHQpOm51bGw7dGhpcy5hdHRyaWJ1dGUoXCJ4MVwiKS5oYXNWYWx1ZSgpfHx0aGlzLmF0dHJpYnV0ZShcInkxXCIpLmhhc1ZhbHVlKCl8fHRoaXMuYXR0cmlidXRlKFwieDJcIikuaGFzVmFsdWUoKXx8dGhpcy5hdHRyaWJ1dGUoXCJ5MlwiKS5oYXNWYWx1ZSgpfHwodGhpcy5hdHRyaWJ1dGUoXCJ4MVwiLCEwKS52YWx1ZT0wLHRoaXMuYXR0cmlidXRlKFwieTFcIiwhMCkudmFsdWU9MCx0aGlzLmF0dHJpYnV0ZShcIngyXCIsITApLnZhbHVlPTEsdGhpcy5hdHRyaWJ1dGUoXCJ5MlwiLCEwKS52YWx1ZT0wKTt2YXIgbj1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2kueCgpK2kud2lkdGgoKSp0aGlzLmF0dHJpYnV0ZShcIngxXCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJ4MVwiKS50b1BpeGVscyhcInhcIikscz1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2kueSgpK2kuaGVpZ2h0KCkqdGhpcy5hdHRyaWJ1dGUoXCJ5MVwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwieTFcIikudG9QaXhlbHMoXCJ5XCIpLGE9XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLngoKStpLndpZHRoKCkqdGhpcy5hdHRyaWJ1dGUoXCJ4MlwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwieDJcIikudG9QaXhlbHMoXCJ4XCIpLHI9XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLnkoKStpLmhlaWdodCgpKnRoaXMuYXR0cmlidXRlKFwieTJcIikubnVtVmFsdWUoKTp0aGlzLmF0dHJpYnV0ZShcInkyXCIpLnRvUGl4ZWxzKFwieVwiKTtyZXR1cm4gbj09YSYmcz09cj9udWxsOnQuY3JlYXRlTGluZWFyR3JhZGllbnQobixzLGEscil9fSxBLkVsZW1lbnQubGluZWFyR3JhZGllbnQucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuR3JhZGllbnRCYXNlLEEuRWxlbWVudC5yYWRpYWxHcmFkaWVudD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkdyYWRpZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJjeFwiKSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcImN5XCIpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwiclwiKSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcImZ4XCIpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwiZnlcIiksdGhpcy5nZXRHcmFkaWVudD1mdW5jdGlvbih0LGUpe3ZhciBpPWUuZ2V0Qm91bmRpbmdCb3godCk7dGhpcy5hdHRyaWJ1dGUoXCJjeFwiKS5oYXNWYWx1ZSgpfHwodGhpcy5hdHRyaWJ1dGUoXCJjeFwiLCEwKS52YWx1ZT1cIjUwJVwiKSx0aGlzLmF0dHJpYnV0ZShcImN5XCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcImN5XCIsITApLnZhbHVlPVwiNTAlXCIpLHRoaXMuYXR0cmlidXRlKFwiclwiKS5oYXNWYWx1ZSgpfHwodGhpcy5hdHRyaWJ1dGUoXCJyXCIsITApLnZhbHVlPVwiNTAlXCIpO3ZhciBuPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/aS54KCkraS53aWR0aCgpKnRoaXMuYXR0cmlidXRlKFwiY3hcIikubnVtVmFsdWUoKTp0aGlzLmF0dHJpYnV0ZShcImN4XCIpLnRvUGl4ZWxzKFwieFwiKSxzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/aS55KCkraS5oZWlnaHQoKSp0aGlzLmF0dHJpYnV0ZShcImN5XCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJjeVwiKS50b1BpeGVscyhcInlcIiksYT1uLHI9czt0aGlzLmF0dHJpYnV0ZShcImZ4XCIpLmhhc1ZhbHVlKCkmJihhPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/aS54KCkraS53aWR0aCgpKnRoaXMuYXR0cmlidXRlKFwiZnhcIikubnVtVmFsdWUoKTp0aGlzLmF0dHJpYnV0ZShcImZ4XCIpLnRvUGl4ZWxzKFwieFwiKSksdGhpcy5hdHRyaWJ1dGUoXCJmeVwiKS5oYXNWYWx1ZSgpJiYocj1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2kueSgpK2kuaGVpZ2h0KCkqdGhpcy5hdHRyaWJ1dGUoXCJmeVwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwiZnlcIikudG9QaXhlbHMoXCJ5XCIpKTt2YXIgbz1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpPyhpLndpZHRoKCkraS5oZWlnaHQoKSkvMip0aGlzLmF0dHJpYnV0ZShcInJcIikubnVtVmFsdWUoKTp0aGlzLmF0dHJpYnV0ZShcInJcIikudG9QaXhlbHMoKTtyZXR1cm4gdC5jcmVhdGVSYWRpYWxHcmFkaWVudChhLHIsMCxuLHMsbyl9fSxBLkVsZW1lbnQucmFkaWFsR3JhZGllbnQucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuR3JhZGllbnRCYXNlLEEuRWxlbWVudC5zdG9wPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMub2Zmc2V0PXRoaXMuYXR0cmlidXRlKFwib2Zmc2V0XCIpLm51bVZhbHVlKCksdGhpcy5vZmZzZXQ8MCYmKHRoaXMub2Zmc2V0PTApLDE8dGhpcy5vZmZzZXQmJih0aGlzLm9mZnNldD0xKTt2YXIgZT10aGlzLnN0eWxlKFwic3RvcC1jb2xvclwiLCEwKTtcIlwiPT09ZS52YWx1ZSYmKGUudmFsdWU9XCIjMDAwXCIpLHRoaXMuc3R5bGUoXCJzdG9wLW9wYWNpdHlcIikuaGFzVmFsdWUoKSYmKGU9ZS5hZGRPcGFjaXR5KHRoaXMuc3R5bGUoXCJzdG9wLW9wYWNpdHlcIikpKSx0aGlzLmNvbG9yPWUudmFsdWV9LEEuRWxlbWVudC5zdG9wLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5BbmltYXRlQmFzZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSxBLkFuaW1hdGlvbnMucHVzaCh0aGlzKSx0aGlzLmR1cmF0aW9uPTAsdGhpcy5iZWdpbj10aGlzLmF0dHJpYnV0ZShcImJlZ2luXCIpLnRvTWlsbGlzZWNvbmRzKCksdGhpcy5tYXhEdXJhdGlvbj10aGlzLmJlZ2luK3RoaXMuYXR0cmlidXRlKFwiZHVyXCIpLnRvTWlsbGlzZWNvbmRzKCksdGhpcy5nZXRQcm9wZXJ0eT1mdW5jdGlvbigpe3ZhciB0PXRoaXMuYXR0cmlidXRlKFwiYXR0cmlidXRlVHlwZVwiKS52YWx1ZSxlPXRoaXMuYXR0cmlidXRlKFwiYXR0cmlidXRlTmFtZVwiKS52YWx1ZTtyZXR1cm5cIkNTU1wiPT10P3RoaXMucGFyZW50LnN0eWxlKGUsITApOnRoaXMucGFyZW50LmF0dHJpYnV0ZShlLCEwKX0sdGhpcy5pbml0aWFsVmFsdWU9bnVsbCx0aGlzLmluaXRpYWxVbml0cz1cIlwiLHRoaXMucmVtb3ZlZD0hMSx0aGlzLmNhbGNWYWx1ZT1mdW5jdGlvbigpe3JldHVyblwiXCJ9LHRoaXMudXBkYXRlPWZ1bmN0aW9uKHQpe2lmKG51bGw9PXRoaXMuaW5pdGlhbFZhbHVlJiYodGhpcy5pbml0aWFsVmFsdWU9dGhpcy5nZXRQcm9wZXJ0eSgpLnZhbHVlLHRoaXMuaW5pdGlhbFVuaXRzPXRoaXMuZ2V0UHJvcGVydHkoKS5nZXRVbml0cygpKSx0aGlzLmR1cmF0aW9uPnRoaXMubWF4RHVyYXRpb24pe2lmKFwiaW5kZWZpbml0ZVwiPT10aGlzLmF0dHJpYnV0ZShcInJlcGVhdENvdW50XCIpLnZhbHVlfHxcImluZGVmaW5pdGVcIj09dGhpcy5hdHRyaWJ1dGUoXCJyZXBlYXREdXJcIikudmFsdWUpdGhpcy5kdXJhdGlvbj0wO2Vsc2UgaWYoXCJmcmVlemVcIiE9dGhpcy5hdHRyaWJ1dGUoXCJmaWxsXCIpLnZhbHVlT3JEZWZhdWx0KFwicmVtb3ZlXCIpfHx0aGlzLmZyb3plbil7aWYoXCJyZW1vdmVcIj09dGhpcy5hdHRyaWJ1dGUoXCJmaWxsXCIpLnZhbHVlT3JEZWZhdWx0KFwicmVtb3ZlXCIpJiYhdGhpcy5yZW1vdmVkKXJldHVybiB0aGlzLnJlbW92ZWQ9ITAsdGhpcy5nZXRQcm9wZXJ0eSgpLnZhbHVlPXRoaXMucGFyZW50LmFuaW1hdGlvbkZyb3plbj90aGlzLnBhcmVudC5hbmltYXRpb25Gcm96ZW5WYWx1ZTp0aGlzLmluaXRpYWxWYWx1ZSwhMH1lbHNlIHRoaXMuZnJvemVuPSEwLHRoaXMucGFyZW50LmFuaW1hdGlvbkZyb3plbj0hMCx0aGlzLnBhcmVudC5hbmltYXRpb25Gcm96ZW5WYWx1ZT10aGlzLmdldFByb3BlcnR5KCkudmFsdWU7cmV0dXJuITF9dGhpcy5kdXJhdGlvbj10aGlzLmR1cmF0aW9uK3Q7dmFyIGU9ITE7aWYodGhpcy5iZWdpbjx0aGlzLmR1cmF0aW9uKXt2YXIgaT10aGlzLmNhbGNWYWx1ZSgpO3RoaXMuYXR0cmlidXRlKFwidHlwZVwiKS5oYXNWYWx1ZSgpJiYoaT10aGlzLmF0dHJpYnV0ZShcInR5cGVcIikudmFsdWUrXCIoXCIraStcIilcIiksdGhpcy5nZXRQcm9wZXJ0eSgpLnZhbHVlPWksZT0hMH1yZXR1cm4gZX0sdGhpcy5mcm9tPXRoaXMuYXR0cmlidXRlKFwiZnJvbVwiKSx0aGlzLnRvPXRoaXMuYXR0cmlidXRlKFwidG9cIiksdGhpcy52YWx1ZXM9dGhpcy5hdHRyaWJ1dGUoXCJ2YWx1ZXNcIiksdGhpcy52YWx1ZXMuaGFzVmFsdWUoKSYmKHRoaXMudmFsdWVzLnZhbHVlPXRoaXMudmFsdWVzLnZhbHVlLnNwbGl0KFwiO1wiKSksdGhpcy5wcm9ncmVzcz1mdW5jdGlvbigpe3ZhciB0PXtwcm9ncmVzczoodGhpcy5kdXJhdGlvbi10aGlzLmJlZ2luKS8odGhpcy5tYXhEdXJhdGlvbi10aGlzLmJlZ2luKX07aWYodGhpcy52YWx1ZXMuaGFzVmFsdWUoKSl7dmFyIGU9dC5wcm9ncmVzcyoodGhpcy52YWx1ZXMudmFsdWUubGVuZ3RoLTEpLGk9TWF0aC5mbG9vcihlKSxuPU1hdGguY2VpbChlKTt0LmZyb209bmV3IEEuUHJvcGVydHkoXCJmcm9tXCIscGFyc2VGbG9hdCh0aGlzLnZhbHVlcy52YWx1ZVtpXSkpLHQudG89bmV3IEEuUHJvcGVydHkoXCJ0b1wiLHBhcnNlRmxvYXQodGhpcy52YWx1ZXMudmFsdWVbbl0pKSx0LnByb2dyZXNzPShlLWkpLyhuLWkpfWVsc2UgdC5mcm9tPXRoaXMuZnJvbSx0LnRvPXRoaXMudG87cmV0dXJuIHR9fSxBLkVsZW1lbnQuQW5pbWF0ZUJhc2UucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmFuaW1hdGU9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5BbmltYXRlQmFzZSx0aGlzLmJhc2UodCksdGhpcy5jYWxjVmFsdWU9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnByb2dyZXNzKCk7cmV0dXJuIHQuZnJvbS5udW1WYWx1ZSgpKyh0LnRvLm51bVZhbHVlKCktdC5mcm9tLm51bVZhbHVlKCkpKnQucHJvZ3Jlc3MrdGhpcy5pbml0aWFsVW5pdHN9fSxBLkVsZW1lbnQuYW5pbWF0ZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5BbmltYXRlQmFzZSxBLkVsZW1lbnQuYW5pbWF0ZUNvbG9yPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuQW5pbWF0ZUJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuY2FsY1ZhbHVlPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5wcm9ncmVzcygpLGU9bmV3IG0odC5mcm9tLnZhbHVlKSxpPW5ldyBtKHQudG8udmFsdWUpO2lmKGUub2smJmkub2spe3ZhciBuPWUucisoaS5yLWUucikqdC5wcm9ncmVzcyxzPWUuZysoaS5nLWUuZykqdC5wcm9ncmVzcyxhPWUuYisoaS5iLWUuYikqdC5wcm9ncmVzcztyZXR1cm5cInJnYihcIitwYXJzZUludChuLDEwKStcIixcIitwYXJzZUludChzLDEwKStcIixcIitwYXJzZUludChhLDEwKStcIilcIn1yZXR1cm4gdGhpcy5hdHRyaWJ1dGUoXCJmcm9tXCIpLnZhbHVlfX0sQS5FbGVtZW50LmFuaW1hdGVDb2xvci5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5BbmltYXRlQmFzZSxBLkVsZW1lbnQuYW5pbWF0ZVRyYW5zZm9ybT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkFuaW1hdGVCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmNhbGNWYWx1ZT1mdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLnByb2dyZXNzKCksZT1BLlRvTnVtYmVyQXJyYXkodC5mcm9tLnZhbHVlKSxpPUEuVG9OdW1iZXJBcnJheSh0LnRvLnZhbHVlKSxuPVwiXCIscz0wO3M8ZS5sZW5ndGg7cysrKW4rPWVbc10rKGlbc10tZVtzXSkqdC5wcm9ncmVzcytcIiBcIjtyZXR1cm4gbn19LEEuRWxlbWVudC5hbmltYXRlVHJhbnNmb3JtLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LmFuaW1hdGUsQS5FbGVtZW50LmZvbnQ9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5ob3JpekFkdlg9dGhpcy5hdHRyaWJ1dGUoXCJob3Jpei1hZHYteFwiKS5udW1WYWx1ZSgpLHRoaXMuaXNSVEw9ITEsdGhpcy5pc0FyYWJpYz0hMSx0aGlzLmZvbnRGYWNlPW51bGwsdGhpcy5taXNzaW5nR2x5cGg9bnVsbCx0aGlzLmdseXBocz1bXTtmb3IodmFyIGU9MDtlPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO2UrKyl7dmFyIGk9dGhpcy5jaGlsZHJlbltlXTtcImZvbnQtZmFjZVwiPT1pLnR5cGU/KHRoaXMuZm9udEZhY2U9aSkuc3R5bGUoXCJmb250LWZhbWlseVwiKS5oYXNWYWx1ZSgpJiYoQS5EZWZpbml0aW9uc1tpLnN0eWxlKFwiZm9udC1mYW1pbHlcIikudmFsdWVdPXRoaXMpOlwibWlzc2luZy1nbHlwaFwiPT1pLnR5cGU/dGhpcy5taXNzaW5nR2x5cGg9aTpcImdseXBoXCI9PWkudHlwZSYmKFwiXCIhPWkuYXJhYmljRm9ybT8odGhpcy5pc1JUTD0hMCx0aGlzLmlzQXJhYmljPSEwLHZvaWQgMD09PXRoaXMuZ2x5cGhzW2kudW5pY29kZV0mJih0aGlzLmdseXBoc1tpLnVuaWNvZGVdPVtdKSx0aGlzLmdseXBoc1tpLnVuaWNvZGVdW2kuYXJhYmljRm9ybV09aSk6dGhpcy5nbHlwaHNbaS51bmljb2RlXT1pKX19LEEuRWxlbWVudC5mb250LnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5mb250ZmFjZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmFzY2VudD10aGlzLmF0dHJpYnV0ZShcImFzY2VudFwiKS52YWx1ZSx0aGlzLmRlc2NlbnQ9dGhpcy5hdHRyaWJ1dGUoXCJkZXNjZW50XCIpLnZhbHVlLHRoaXMudW5pdHNQZXJFbT10aGlzLmF0dHJpYnV0ZShcInVuaXRzLXBlci1lbVwiKS5udW1WYWx1ZSgpfSxBLkVsZW1lbnQuZm9udGZhY2UucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50Lm1pc3NpbmdnbHlwaD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LnBhdGgsdGhpcy5iYXNlKHQpLHRoaXMuaG9yaXpBZHZYPTB9LEEuRWxlbWVudC5taXNzaW5nZ2x5cGgucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQucGF0aCxBLkVsZW1lbnQuZ2x5cGg9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5wYXRoLHRoaXMuYmFzZSh0KSx0aGlzLmhvcml6QWR2WD10aGlzLmF0dHJpYnV0ZShcImhvcml6LWFkdi14XCIpLm51bVZhbHVlKCksdGhpcy51bmljb2RlPXRoaXMuYXR0cmlidXRlKFwidW5pY29kZVwiKS52YWx1ZSx0aGlzLmFyYWJpY0Zvcm09dGhpcy5hdHRyaWJ1dGUoXCJhcmFiaWMtZm9ybVwiKS52YWx1ZX0sQS5FbGVtZW50LmdseXBoLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LnBhdGgsQS5FbGVtZW50LnRleHQ9ZnVuY3Rpb24odCl7dGhpcy5jYXB0dXJlVGV4dE5vZGVzPSEwLHRoaXMuYmFzZT1BLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5iYXNlU2V0Q29udGV4dD10aGlzLnNldENvbnRleHQsdGhpcy5zZXRDb250ZXh0PWZ1bmN0aW9uKHQpe3RoaXMuYmFzZVNldENvbnRleHQodCk7dmFyIGU9dGhpcy5zdHlsZShcImRvbWluYW50LWJhc2VsaW5lXCIpLnRvVGV4dEJhc2VsaW5lKCk7bnVsbD09ZSYmKGU9dGhpcy5zdHlsZShcImFsaWdubWVudC1iYXNlbGluZVwiKS50b1RleHRCYXNlbGluZSgpKSxudWxsIT1lJiYodC50ZXh0QmFzZWxpbmU9ZSl9LHRoaXMuaW5pdGlhbGl6ZUNvb3JkaW5hdGVzPWZ1bmN0aW9uKHQpe3RoaXMueD10aGlzLmF0dHJpYnV0ZShcInhcIikudG9QaXhlbHMoXCJ4XCIpLHRoaXMueT10aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpLHRoaXMuYXR0cmlidXRlKFwiZHhcIikuaGFzVmFsdWUoKSYmKHRoaXMueCs9dGhpcy5hdHRyaWJ1dGUoXCJkeFwiKS50b1BpeGVscyhcInhcIikpLHRoaXMuYXR0cmlidXRlKFwiZHlcIikuaGFzVmFsdWUoKSYmKHRoaXMueSs9dGhpcy5hdHRyaWJ1dGUoXCJkeVwiKS50b1BpeGVscyhcInlcIikpLHRoaXMueCs9dGhpcy5nZXRBbmNob3JEZWx0YSh0LHRoaXMsMCl9LHRoaXMuZ2V0Qm91bmRpbmdCb3g9ZnVuY3Rpb24odCl7dGhpcy5pbml0aWFsaXplQ29vcmRpbmF0ZXModCk7Zm9yKHZhciBlPW51bGwsaT0wO2k8dGhpcy5jaGlsZHJlbi5sZW5ndGg7aSsrKXt2YXIgbj10aGlzLmdldENoaWxkQm91bmRpbmdCb3godCx0aGlzLHRoaXMsaSk7bnVsbD09ZT9lPW46ZS5hZGRCb3VuZGluZ0JveChuKX1yZXR1cm4gZX0sdGhpcy5yZW5kZXJDaGlsZHJlbj1mdW5jdGlvbih0KXt0aGlzLmluaXRpYWxpemVDb29yZGluYXRlcyh0KTtmb3IodmFyIGU9MDtlPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO2UrKyl0aGlzLnJlbmRlckNoaWxkKHQsdGhpcyx0aGlzLGUpfSx0aGlzLmdldEFuY2hvckRlbHRhPWZ1bmN0aW9uKHQsZSxpKXt2YXIgbj10aGlzLnN0eWxlKFwidGV4dC1hbmNob3JcIikudmFsdWVPckRlZmF1bHQoXCJzdGFydFwiKTtpZihcInN0YXJ0XCIhPW4pe2Zvcih2YXIgcz0wLGE9aTthPGUuY2hpbGRyZW4ubGVuZ3RoO2ErKyl7dmFyIHI9ZS5jaGlsZHJlblthXTtpZihpPGEmJnIuYXR0cmlidXRlKFwieFwiKS5oYXNWYWx1ZSgpKWJyZWFrO3MrPXIubWVhc3VyZVRleHRSZWN1cnNpdmUodCl9cmV0dXJuLTEqKFwiZW5kXCI9PW4/czpzLzIpfXJldHVybiAwfSx0aGlzLmFkanVzdENoaWxkQ29vcmRpbmF0ZXM9ZnVuY3Rpb24odCxlLGksbil7dmFyIHM9aS5jaGlsZHJlbltuXTtyZXR1cm4gcy5hdHRyaWJ1dGUoXCJ4XCIpLmhhc1ZhbHVlKCk/KHMueD1zLmF0dHJpYnV0ZShcInhcIikudG9QaXhlbHMoXCJ4XCIpK2UuZ2V0QW5jaG9yRGVsdGEodCxpLG4pLHMuYXR0cmlidXRlKFwiZHhcIikuaGFzVmFsdWUoKSYmKHMueCs9cy5hdHRyaWJ1dGUoXCJkeFwiKS50b1BpeGVscyhcInhcIikpKToocy5hdHRyaWJ1dGUoXCJkeFwiKS5oYXNWYWx1ZSgpJiYoZS54Kz1zLmF0dHJpYnV0ZShcImR4XCIpLnRvUGl4ZWxzKFwieFwiKSkscy54PWUueCksZS54PXMueCtzLm1lYXN1cmVUZXh0KHQpLHMuYXR0cmlidXRlKFwieVwiKS5oYXNWYWx1ZSgpPyhzLnk9cy5hdHRyaWJ1dGUoXCJ5XCIpLnRvUGl4ZWxzKFwieVwiKSxzLmF0dHJpYnV0ZShcImR5XCIpLmhhc1ZhbHVlKCkmJihzLnkrPXMuYXR0cmlidXRlKFwiZHlcIikudG9QaXhlbHMoXCJ5XCIpKSk6KHMuYXR0cmlidXRlKFwiZHlcIikuaGFzVmFsdWUoKSYmKGUueSs9cy5hdHRyaWJ1dGUoXCJkeVwiKS50b1BpeGVscyhcInlcIikpLHMueT1lLnkpLGUueT1zLnksc30sdGhpcy5nZXRDaGlsZEJvdW5kaW5nQm94PWZ1bmN0aW9uKHQsZSxpLG4pe3ZhciBzPXRoaXMuYWRqdXN0Q2hpbGRDb29yZGluYXRlcyh0LGUsaSxuKSxhPXMuZ2V0Qm91bmRpbmdCb3godCk7Zm9yKG49MDtuPHMuY2hpbGRyZW4ubGVuZ3RoO24rKyl7dmFyIHI9ZS5nZXRDaGlsZEJvdW5kaW5nQm94KHQsZSxzLG4pO2EuYWRkQm91bmRpbmdCb3gocil9cmV0dXJuIGF9LHRoaXMucmVuZGVyQ2hpbGQ9ZnVuY3Rpb24odCxlLGksbil7dmFyIHM9dGhpcy5hZGp1c3RDaGlsZENvb3JkaW5hdGVzKHQsZSxpLG4pO2ZvcihzLnJlbmRlcih0KSxuPTA7bjxzLmNoaWxkcmVuLmxlbmd0aDtuKyspZS5yZW5kZXJDaGlsZCh0LGUscyxuKX19LEEuRWxlbWVudC50ZXh0LnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsQS5FbGVtZW50LlRleHRFbGVtZW50QmFzZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuZ2V0R2x5cGg9ZnVuY3Rpb24odCxlLGkpe3ZhciBuPWVbaV0scz1udWxsO2lmKHQuaXNBcmFiaWMpe3ZhciBhPVwiaXNvbGF0ZWRcIjsoMD09aXx8XCIgXCI9PWVbaS0xXSkmJmk8ZS5sZW5ndGgtMiYmXCIgXCIhPWVbaSsxXSYmKGE9XCJ0ZXJtaW5hbFwiKSwwPGkmJlwiIFwiIT1lW2ktMV0mJmk8ZS5sZW5ndGgtMiYmXCIgXCIhPWVbaSsxXSYmKGE9XCJtZWRpYWxcIiksMDxpJiZcIiBcIiE9ZVtpLTFdJiYoaT09ZS5sZW5ndGgtMXx8XCIgXCI9PWVbaSsxXSkmJihhPVwiaW5pdGlhbFwiKSx2b2lkIDAhPT10LmdseXBoc1tuXSYmbnVsbD09KHM9dC5nbHlwaHNbbl1bYV0pJiZcImdseXBoXCI9PXQuZ2x5cGhzW25dLnR5cGUmJihzPXQuZ2x5cGhzW25dKX1lbHNlIHM9dC5nbHlwaHNbbl07cmV0dXJuIG51bGw9PXMmJihzPXQubWlzc2luZ0dseXBoKSxzfSx0aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMucGFyZW50LnN0eWxlKFwiZm9udC1mYW1pbHlcIikuZ2V0RGVmaW5pdGlvbigpO2lmKG51bGw9PWUpXCJzdHJva2VcIj09dC5wYWludE9yZGVyPyhcIlwiIT10LnN0cm9rZVN0eWxlJiZ0LnN0cm9rZVRleHQoQS5jb21wcmVzc1NwYWNlcyh0aGlzLmdldFRleHQoKSksdGhpcy54LHRoaXMueSksXCJcIiE9dC5maWxsU3R5bGUmJnQuZmlsbFRleHQoQS5jb21wcmVzc1NwYWNlcyh0aGlzLmdldFRleHQoKSksdGhpcy54LHRoaXMueSkpOihcIlwiIT10LmZpbGxTdHlsZSYmdC5maWxsVGV4dChBLmNvbXByZXNzU3BhY2VzKHRoaXMuZ2V0VGV4dCgpKSx0aGlzLngsdGhpcy55KSxcIlwiIT10LnN0cm9rZVN0eWxlJiZ0LnN0cm9rZVRleHQoQS5jb21wcmVzc1NwYWNlcyh0aGlzLmdldFRleHQoKSksdGhpcy54LHRoaXMueSkpO2Vsc2V7dmFyIGk9dGhpcy5wYXJlbnQuc3R5bGUoXCJmb250LXNpemVcIikubnVtVmFsdWVPckRlZmF1bHQoQS5Gb250LlBhcnNlKEEuY3R4LmZvbnQpLmZvbnRTaXplKSxuPXRoaXMucGFyZW50LnN0eWxlKFwiZm9udC1zdHlsZVwiKS52YWx1ZU9yRGVmYXVsdChBLkZvbnQuUGFyc2UoQS5jdHguZm9udCkuZm9udFN0eWxlKSxzPXRoaXMuZ2V0VGV4dCgpO2UuaXNSVEwmJihzPXMuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIikpO2Zvcih2YXIgYT1BLlRvTnVtYmVyQXJyYXkodGhpcy5wYXJlbnQuYXR0cmlidXRlKFwiZHhcIikudmFsdWUpLHI9MDtyPHMubGVuZ3RoO3IrKyl7dmFyIG89dGhpcy5nZXRHbHlwaChlLHMsciksbD1pL2UuZm9udEZhY2UudW5pdHNQZXJFbTt0LnRyYW5zbGF0ZSh0aGlzLngsdGhpcy55KSx0LnNjYWxlKGwsLWwpO3ZhciBoPXQubGluZVdpZHRoO3QubGluZVdpZHRoPXQubGluZVdpZHRoKmUuZm9udEZhY2UudW5pdHNQZXJFbS9pLFwiaXRhbGljXCI9PW4mJnQudHJhbnNmb3JtKDEsMCwuNCwxLDAsMCksby5yZW5kZXIodCksXCJpdGFsaWNcIj09biYmdC50cmFuc2Zvcm0oMSwwLC0uNCwxLDAsMCksdC5saW5lV2lkdGg9aCx0LnNjYWxlKDEvbCwtMS9sKSx0LnRyYW5zbGF0ZSgtdGhpcy54LC10aGlzLnkpLHRoaXMueCs9aSooby5ob3JpekFkdlh8fGUuaG9yaXpBZHZYKS9lLmZvbnRGYWNlLnVuaXRzUGVyRW0sdm9pZCAwPT09YVtyXXx8aXNOYU4oYVtyXSl8fCh0aGlzLngrPWFbcl0pfX19LHRoaXMuZ2V0VGV4dD1mdW5jdGlvbigpe30sdGhpcy5tZWFzdXJlVGV4dFJlY3Vyc2l2ZT1mdW5jdGlvbih0KXtmb3IodmFyIGU9dGhpcy5tZWFzdXJlVGV4dCh0KSxpPTA7aTx0aGlzLmNoaWxkcmVuLmxlbmd0aDtpKyspZSs9dGhpcy5jaGlsZHJlbltpXS5tZWFzdXJlVGV4dFJlY3Vyc2l2ZSh0KTtyZXR1cm4gZX0sdGhpcy5tZWFzdXJlVGV4dD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLnBhcmVudC5zdHlsZShcImZvbnQtZmFtaWx5XCIpLmdldERlZmluaXRpb24oKTtpZihudWxsIT1lKXt2YXIgaT10aGlzLnBhcmVudC5zdHlsZShcImZvbnQtc2l6ZVwiKS5udW1WYWx1ZU9yRGVmYXVsdChBLkZvbnQuUGFyc2UoQS5jdHguZm9udCkuZm9udFNpemUpLG49MCxzPXRoaXMuZ2V0VGV4dCgpO2UuaXNSVEwmJihzPXMuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIikpO2Zvcih2YXIgYT1BLlRvTnVtYmVyQXJyYXkodGhpcy5wYXJlbnQuYXR0cmlidXRlKFwiZHhcIikudmFsdWUpLHI9MDtyPHMubGVuZ3RoO3IrKyluKz0odGhpcy5nZXRHbHlwaChlLHMscikuaG9yaXpBZHZYfHxlLmhvcml6QWR2WCkqaS9lLmZvbnRGYWNlLnVuaXRzUGVyRW0sdm9pZCAwPT09YVtyXXx8aXNOYU4oYVtyXSl8fChuKz1hW3JdKTtyZXR1cm4gbn12YXIgbz1BLmNvbXByZXNzU3BhY2VzKHRoaXMuZ2V0VGV4dCgpKTtpZighdC5tZWFzdXJlVGV4dClyZXR1cm4gMTAqby5sZW5ndGg7dC5zYXZlKCksdGhpcy5zZXRDb250ZXh0KHQsITApO3ZhciBsPXQubWVhc3VyZVRleHQobykud2lkdGg7cmV0dXJuIHQucmVzdG9yZSgpLGx9LHRoaXMuZ2V0Qm91bmRpbmdCb3g9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5wYXJlbnQuc3R5bGUoXCJmb250LXNpemVcIikubnVtVmFsdWVPckRlZmF1bHQoQS5Gb250LlBhcnNlKEEuY3R4LmZvbnQpLmZvbnRTaXplKTtyZXR1cm4gbmV3IEEuQm91bmRpbmdCb3godGhpcy54LHRoaXMueS1lLHRoaXMueCt0aGlzLm1lYXN1cmVUZXh0KHQpLHRoaXMueSl9fSxBLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsQS5FbGVtZW50LnRzcGFuPWZ1bmN0aW9uKHQpe3RoaXMuY2FwdHVyZVRleHROb2Rlcz0hMCx0aGlzLmJhc2U9QS5FbGVtZW50LlRleHRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy50ZXh0PUEuY29tcHJlc3NTcGFjZXModC52YWx1ZXx8dC50ZXh0fHx0LnRleHRDb250ZW50fHxcIlwiKSx0aGlzLmdldFRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gMDx0aGlzLmNoaWxkcmVuLmxlbmd0aD9cIlwiOnRoaXMudGV4dH19LEEuRWxlbWVudC50c3Bhbi5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5UZXh0RWxlbWVudEJhc2UsQS5FbGVtZW50LnRyZWY9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5UZXh0RWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuZ2V0VGV4dD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLmdldERlZmluaXRpb24oKTtpZihudWxsIT10KXJldHVybiB0LmNoaWxkcmVuWzBdLmdldFRleHQoKX19LEEuRWxlbWVudC50cmVmLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlRleHRFbGVtZW50QmFzZSxBLkVsZW1lbnQuYT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlRleHRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5oYXNUZXh0PTA8dC5jaGlsZE5vZGVzLmxlbmd0aDtmb3IodmFyIGU9MDtlPHQuY2hpbGROb2Rlcy5sZW5ndGg7ZSsrKTMhPXQuY2hpbGROb2Rlc1tlXS5ub2RlVHlwZSYmKHRoaXMuaGFzVGV4dD0hMSk7dGhpcy50ZXh0PXRoaXMuaGFzVGV4dD90LmNoaWxkTm9kZXNbMF0udmFsdWV8fHQuY2hpbGROb2Rlc1swXS5kYXRhOlwiXCIsdGhpcy5nZXRUZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudGV4dH0sdGhpcy5iYXNlUmVuZGVyQ2hpbGRyZW49dGhpcy5yZW5kZXJDaGlsZHJlbix0aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe2lmKHRoaXMuaGFzVGV4dCl7dGhpcy5iYXNlUmVuZGVyQ2hpbGRyZW4odCk7dmFyIGU9bmV3IEEuUHJvcGVydHkoXCJmb250U2l6ZVwiLEEuRm9udC5QYXJzZShBLmN0eC5mb250KS5mb250U2l6ZSk7QS5Nb3VzZS5jaGVja0JvdW5kaW5nQm94KHRoaXMsbmV3IEEuQm91bmRpbmdCb3godGhpcy54LHRoaXMueS1lLnRvUGl4ZWxzKFwieVwiKSx0aGlzLngrdGhpcy5tZWFzdXJlVGV4dCh0KSx0aGlzLnkpKX1lbHNlIGlmKDA8dGhpcy5jaGlsZHJlbi5sZW5ndGgpe3ZhciBpPW5ldyBBLkVsZW1lbnQuZztpLmNoaWxkcmVuPXRoaXMuY2hpbGRyZW4saS5wYXJlbnQ9dGhpcyxpLnJlbmRlcih0KX19LHRoaXMub25jbGljaz1mdW5jdGlvbigpe3Uub3Blbih0aGlzLmdldEhyZWZBdHRyaWJ1dGUoKS52YWx1ZSl9LHRoaXMub25tb3VzZW1vdmU9ZnVuY3Rpb24oKXtBLmN0eC5jYW52YXMuc3R5bGUuY3Vyc29yPVwicG9pbnRlclwifX0sQS5FbGVtZW50LmEucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlLEEuRWxlbWVudC5pbWFnZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpO3ZhciBlPXRoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLnZhbHVlO2lmKFwiXCIhPWUpe3ZhciBhPWUubWF0Y2goL1xcLnN2ZyQvKTtpZihBLkltYWdlcy5wdXNoKHRoaXMpLHRoaXMubG9hZGVkPSExLGEpdGhpcy5pbWc9QS5hamF4KGUpLHRoaXMubG9hZGVkPSEwO2Vsc2V7dGhpcy5pbWc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSwxPT1BLm9wdHMudXNlQ09SUyYmKHRoaXMuaW1nLmNyb3NzT3JpZ2luPVwiQW5vbnltb3VzXCIpO3ZhciByPXRoaXM7dGhpcy5pbWcub25sb2FkPWZ1bmN0aW9uKCl7ci5sb2FkZWQ9ITB9LHRoaXMuaW1nLm9uZXJyb3I9ZnVuY3Rpb24oKXtBLmxvZygnRVJST1I6IGltYWdlIFwiJytlKydcIiBub3QgZm91bmQnKSxyLmxvYWRlZD0hMH0sdGhpcy5pbWcuc3JjPWV9dGhpcy5yZW5kZXJDaGlsZHJlbj1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmF0dHJpYnV0ZShcInhcIikudG9QaXhlbHMoXCJ4XCIpLGk9dGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLnRvUGl4ZWxzKFwieVwiKSxuPXRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIpLHM9dGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIpOzAhPW4mJjAhPXMmJih0LnNhdmUoKSxhP3QuZHJhd1N2Zyh0aGlzLmltZyxlLGksbixzKToodC50cmFuc2xhdGUoZSxpKSxBLkFzcGVjdFJhdGlvKHQsdGhpcy5hdHRyaWJ1dGUoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIpLnZhbHVlLG4sdGhpcy5pbWcud2lkdGgscyx0aGlzLmltZy5oZWlnaHQsMCwwKSxyLmxvYWRlZCYmKHZvaWQgMD09PXRoaXMuaW1nLmNvbXBsZXRlfHx0aGlzLmltZy5jb21wbGV0ZSkmJnQuZHJhd0ltYWdlKHRoaXMuaW1nLDAsMCkpLHQucmVzdG9yZSgpKX0sdGhpcy5nZXRCb3VuZGluZ0JveD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksZT10aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpLGk9dGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIiksbj10aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIik7cmV0dXJuIG5ldyBBLkJvdW5kaW5nQm94KHQsZSx0K2ksZStuKX19fSxBLkVsZW1lbnQuaW1hZ2UucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxBLkVsZW1lbnQuZz1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuZ2V0Qm91bmRpbmdCb3g9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPW5ldyBBLkJvdW5kaW5nQm94LGk9MDtpPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO2krKyllLmFkZEJvdW5kaW5nQm94KHRoaXMuY2hpbGRyZW5baV0uZ2V0Qm91bmRpbmdCb3godCkpO3JldHVybiBlfX0sQS5FbGVtZW50LmcucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxBLkVsZW1lbnQuc3ltYm9sPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5yZW5kZXI9ZnVuY3Rpb24odCl7fX0sQS5FbGVtZW50LnN5bWJvbC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLEEuRWxlbWVudC5zdHlsZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KTtmb3IodmFyIGU9XCJcIixpPTA7aTx0LmNoaWxkTm9kZXMubGVuZ3RoO2krKyllKz10LmNoaWxkTm9kZXNbaV0uZGF0YTtlPWUucmVwbGFjZSgvKFxcL1xcKihbXipdfFtcXHJcXG5dfChcXCorKFteKlxcL118W1xcclxcbl0pKSkqXFwqK1xcLyl8KF5bXFxzXSpcXC9cXC8uKikvZ20sXCJcIik7dmFyIG49KGU9QS5jb21wcmVzc1NwYWNlcyhlKSkuc3BsaXQoXCJ9XCIpO2ZvcihpPTA7aTxuLmxlbmd0aDtpKyspaWYoXCJcIiE9QS50cmltKG5baV0pKWZvcih2YXIgcz1uW2ldLnNwbGl0KFwie1wiKSxhPXNbMF0uc3BsaXQoXCIsXCIpLHI9c1sxXS5zcGxpdChcIjtcIiksbz0wO288YS5sZW5ndGg7bysrKXt2YXIgbD1BLnRyaW0oYVtvXSk7aWYoXCJcIiE9bCl7Zm9yKHZhciBoPUEuU3R5bGVzW2xdfHx7fSx1PTA7dTxyLmxlbmd0aDt1Kyspe3ZhciBjPXJbdV0uaW5kZXhPZihcIjpcIiksZj1yW3VdLnN1YnN0cigwLGMpLG09clt1XS5zdWJzdHIoYysxLHJbdV0ubGVuZ3RoLWMpO251bGwhPWYmJm51bGwhPW0mJihoW0EudHJpbShmKV09bmV3IEEuUHJvcGVydHkoQS50cmltKGYpLEEudHJpbShtKSkpfWlmKEEuU3R5bGVzW2xdPWgsQS5TdHlsZXNTcGVjaWZpY2l0eVtsXT13KGwpLFwiQGZvbnQtZmFjZVwiPT1sKWZvcih2YXIgcD1oW1wiZm9udC1mYW1pbHlcIl0udmFsdWUucmVwbGFjZSgvXCIvZyxcIlwiKSxkPWguc3JjLnZhbHVlLnNwbGl0KFwiLFwiKSx5PTA7eTxkLmxlbmd0aDt5KyspaWYoMDxkW3ldLmluZGV4T2YoJ2Zvcm1hdChcInN2Z1wiKScpKWZvcih2YXIgdj1kW3ldLmluZGV4T2YoXCJ1cmxcIiksZz1kW3ldLmluZGV4T2YoXCIpXCIsdikseD1kW3ldLnN1YnN0cih2KzUsZy12LTYpLGI9QS5wYXJzZVhtbChBLmFqYXgoeCkpLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9udFwiKSxQPTA7UDxiLmxlbmd0aDtQKyspe3ZhciBFPUEuQ3JlYXRlRWxlbWVudChiW1BdKTtBLkRlZmluaXRpb25zW3BdPUV9fX19LEEuRWxlbWVudC5zdHlsZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQudXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5iYXNlU2V0Q29udGV4dD10aGlzLnNldENvbnRleHQsdGhpcy5zZXRDb250ZXh0PWZ1bmN0aW9uKHQpe3RoaXMuYmFzZVNldENvbnRleHQodCksdGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLmhhc1ZhbHVlKCkmJnQudHJhbnNsYXRlKHRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksMCksdGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLmhhc1ZhbHVlKCkmJnQudHJhbnNsYXRlKDAsdGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLnRvUGl4ZWxzKFwieVwiKSl9O3ZhciBuPXRoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLmdldERlZmluaXRpb24oKTt0aGlzLnBhdGg9ZnVuY3Rpb24odCl7bnVsbCE9biYmbi5wYXRoKHQpfSx0aGlzLmVsZW1lbnRUcmFuc2Zvcm09ZnVuY3Rpb24oKXtpZihudWxsIT1uJiZuLnN0eWxlKFwidHJhbnNmb3JtXCIsITEsITApLmhhc1ZhbHVlKCkpcmV0dXJuIG5ldyBBLlRyYW5zZm9ybShuLnN0eWxlKFwidHJhbnNmb3JtXCIsITEsITApLnZhbHVlKX0sdGhpcy5nZXRCb3VuZGluZ0JveD1mdW5jdGlvbih0KXtpZihudWxsIT1uKXJldHVybiBuLmdldEJvdW5kaW5nQm94KHQpfSx0aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe2lmKG51bGwhPW4pe3ZhciBlPW47XCJzeW1ib2xcIj09bi50eXBlJiYoKGU9bmV3IEEuRWxlbWVudC5zdmcpLnR5cGU9XCJzdmdcIixlLmF0dHJpYnV0ZXMudmlld0JveD1uZXcgQS5Qcm9wZXJ0eShcInZpZXdCb3hcIixuLmF0dHJpYnV0ZShcInZpZXdCb3hcIikudmFsdWUpLGUuYXR0cmlidXRlcy5wcmVzZXJ2ZUFzcGVjdFJhdGlvPW5ldyBBLlByb3BlcnR5KFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLG4uYXR0cmlidXRlKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiKS52YWx1ZSksZS5hdHRyaWJ1dGVzLm92ZXJmbG93PW5ldyBBLlByb3BlcnR5KFwib3ZlcmZsb3dcIixuLmF0dHJpYnV0ZShcIm92ZXJmbG93XCIpLnZhbHVlKSxlLmNoaWxkcmVuPW4uY2hpbGRyZW4pLFwic3ZnXCI9PWUudHlwZSYmKHRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikuaGFzVmFsdWUoKSYmKGUuYXR0cmlidXRlcy53aWR0aD1uZXcgQS5Qcm9wZXJ0eShcIndpZHRoXCIsdGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS52YWx1ZSkpLHRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLmhhc1ZhbHVlKCkmJihlLmF0dHJpYnV0ZXMuaGVpZ2h0PW5ldyBBLlByb3BlcnR5KFwiaGVpZ2h0XCIsdGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikudmFsdWUpKSk7dmFyIGk9ZS5wYXJlbnQ7ZS5wYXJlbnQ9bnVsbCxlLnJlbmRlcih0KSxlLnBhcmVudD1pfX19LEEuRWxlbWVudC51c2UucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxBLkVsZW1lbnQubWFzaz1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLnRvUGl4ZWxzKFwieFwiKSxuPXRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIikscz10aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKSxhPXRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLnRvUGl4ZWxzKFwieVwiKTtpZigwPT1zJiYwPT1hKXtmb3IodmFyIHI9bmV3IEEuQm91bmRpbmdCb3gsbz0wO288dGhpcy5jaGlsZHJlbi5sZW5ndGg7bysrKXIuYWRkQm91bmRpbmdCb3godGhpcy5jaGlsZHJlbltvXS5nZXRCb3VuZGluZ0JveCh0KSk7aT1NYXRoLmZsb29yKHIueDEpLG49TWF0aC5mbG9vcihyLnkxKSxzPU1hdGguZmxvb3Ioci53aWR0aCgpKSxhPU1hdGguZmxvb3Ioci5oZWlnaHQoKSl9dmFyIGw9ZS5hdHRyaWJ1dGUoXCJtYXNrXCIpLnZhbHVlO2UuYXR0cmlidXRlKFwibWFza1wiKS52YWx1ZT1cIlwiO3ZhciBoPXAoKTtoLndpZHRoPWkrcyxoLmhlaWdodD1uK2E7dmFyIHU9aC5nZXRDb250ZXh0KFwiMmRcIik7dGhpcy5yZW5kZXJDaGlsZHJlbih1KTt2YXIgYz1wKCk7Yy53aWR0aD1pK3MsYy5oZWlnaHQ9bithO3ZhciBmPWMuZ2V0Q29udGV4dChcIjJkXCIpO2UucmVuZGVyKGYpLGYuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uPVwiZGVzdGluYXRpb24taW5cIixmLmZpbGxTdHlsZT11LmNyZWF0ZVBhdHRlcm4oaCxcIm5vLXJlcGVhdFwiKSxmLmZpbGxSZWN0KDAsMCxpK3MsbithKSx0LmZpbGxTdHlsZT1mLmNyZWF0ZVBhdHRlcm4oYyxcIm5vLXJlcGVhdFwiKSx0LmZpbGxSZWN0KDAsMCxpK3MsbithKSxlLmF0dHJpYnV0ZShcIm1hc2tcIikudmFsdWU9bH0sdGhpcy5yZW5kZXI9ZnVuY3Rpb24odCl7fX0sQS5FbGVtZW50Lm1hc2sucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmNsaXBQYXRoPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCl7dmFyIGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxpPXQuYmVnaW5QYXRoLG49dC5jbG9zZVBhdGg7ZSYmKENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuYmVnaW5QYXRoPWZ1bmN0aW9uKCl7fSxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmNsb3NlUGF0aD1mdW5jdGlvbigpe30pLGkuY2FsbCh0KTtmb3IodmFyIHM9MDtzPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO3MrKyl7dmFyIGE9dGhpcy5jaGlsZHJlbltzXTtpZih2b2lkIDAhPT1hLnBhdGgpe3ZhciByPXZvaWQgMCE9PWEuZWxlbWVudFRyYW5zZm9ybSYmYS5lbGVtZW50VHJhbnNmb3JtKCk7IXImJmEuc3R5bGUoXCJ0cmFuc2Zvcm1cIiwhMSwhMCkuaGFzVmFsdWUoKSYmKHI9bmV3IEEuVHJhbnNmb3JtKGEuc3R5bGUoXCJ0cmFuc2Zvcm1cIiwhMSwhMCkudmFsdWUpKSxyJiZyLmFwcGx5KHQpLGEucGF0aCh0KSxlJiYoQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5jbG9zZVBhdGg9biksciYmci51bmFwcGx5KHQpfX1uLmNhbGwodCksdC5jbGlwKCksZSYmKENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuYmVnaW5QYXRoPWksQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5jbG9zZVBhdGg9bil9LHRoaXMucmVuZGVyPWZ1bmN0aW9uKHQpe319LEEuRWxlbWVudC5jbGlwUGF0aC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuZmlsdGVyPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCxlKXt2YXIgaT1lLmdldEJvdW5kaW5nQm94KHQpLG49TWF0aC5mbG9vcihpLngxKSxzPU1hdGguZmxvb3IoaS55MSksYT1NYXRoLmZsb29yKGkud2lkdGgoKSkscj1NYXRoLmZsb29yKGkuaGVpZ2h0KCkpLG89ZS5zdHlsZShcImZpbHRlclwiKS52YWx1ZTtlLnN0eWxlKFwiZmlsdGVyXCIpLnZhbHVlPVwiXCI7Zm9yKHZhciBsPTAsaD0wLHU9MDt1PHRoaXMuY2hpbGRyZW4ubGVuZ3RoO3UrKyl7dmFyIGM9dGhpcy5jaGlsZHJlblt1XS5leHRyYUZpbHRlckRpc3RhbmNlfHwwO2w9TWF0aC5tYXgobCxjKSxoPU1hdGgubWF4KGgsYyl9dmFyIGY9cCgpO2Yud2lkdGg9YSsyKmwsZi5oZWlnaHQ9cisyKmg7dmFyIG09Zi5nZXRDb250ZXh0KFwiMmRcIik7Zm9yKG0udHJhbnNsYXRlKC1uK2wsLXMraCksZS5yZW5kZXIobSksdT0wO3U8dGhpcy5jaGlsZHJlbi5sZW5ndGg7dSsrKVwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMuY2hpbGRyZW5bdV0uYXBwbHkmJnRoaXMuY2hpbGRyZW5bdV0uYXBwbHkobSwwLDAsYSsyKmwscisyKmgpO3QuZHJhd0ltYWdlKGYsMCwwLGErMipsLHIrMipoLG4tbCxzLWgsYSsyKmwscisyKmgpLGUuc3R5bGUoXCJmaWx0ZXJcIiwhMCkudmFsdWU9b30sdGhpcy5yZW5kZXI9ZnVuY3Rpb24odCl7fX0sQS5FbGVtZW50LmZpbHRlci5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuZmVNb3JwaG9sb2d5PWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCxlLGksbixzKXt9fSxBLkVsZW1lbnQuZmVNb3JwaG9sb2d5LnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5mZUNvbXBvc2l0ZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQsZSxpLG4scyl7fX0sQS5FbGVtZW50LmZlQ29tcG9zaXRlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5mZUNvbG9yTWF0cml4PWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpO3ZhciBuPUEuVG9OdW1iZXJBcnJheSh0aGlzLmF0dHJpYnV0ZShcInZhbHVlc1wiKS52YWx1ZSk7c3dpdGNoKHRoaXMuYXR0cmlidXRlKFwidHlwZVwiKS52YWx1ZU9yRGVmYXVsdChcIm1hdHJpeFwiKSl7Y2FzZVwic2F0dXJhdGVcIjp2YXIgZT1uWzBdO249Wy4yMTMrLjc4NyplLC43MTUtLjcxNSplLC4wNzItLjA3MiplLDAsMCwuMjEzLS4yMTMqZSwuNzE1Ky4yODUqZSwuMDcyLS4wNzIqZSwwLDAsLjIxMy0uMjEzKmUsLjcxNS0uNzE1KmUsLjA3MisuOTI4KmUsMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDFdO2JyZWFrO2Nhc2VcImh1ZVJvdGF0ZVwiOnZhciBzPW5bMF0qTWF0aC5QSS8xODAsaT1mdW5jdGlvbih0LGUsaSl7cmV0dXJuIHQrTWF0aC5jb3MocykqZStNYXRoLnNpbihzKSppfTtuPVtpKC4yMTMsLjc4NywtLjIxMyksaSguNzE1LC0uNzE1LC0uNzE1KSxpKC4wNzIsLS4wNzIsLjkyOCksMCwwLGkoLjIxMywtLjIxMywuMTQzKSxpKC43MTUsLjI4NSwuMTQpLGkoLjA3MiwtLjA3MiwtLjI4MyksMCwwLGkoLjIxMywtLjIxMywtLjc4NyksaSguNzE1LC0uNzE1LC43MTUpLGkoLjA3MiwuOTI4LC4wNzIpLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxXTticmVhaztjYXNlXCJsdW1pbmFuY2VUb0FscGhhXCI6bj1bMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsLjIxMjUsLjcxNTQsLjA3MjEsMCwwLDAsMCwwLDAsMV19ZnVuY3Rpb24gdSh0LGUsaSxuLHMsYSl7cmV0dXJuIHRbaSpuKjQrNCplK2FdfWZ1bmN0aW9uIGModCxlLGksbixzLGEscil7dFtpKm4qNCs0KmUrYV09cn1mdW5jdGlvbiBmKHQsZSl7dmFyIGk9blt0XTtyZXR1cm4gaSooaTwwP2UtMjU1OmUpfXRoaXMuYXBwbHk9ZnVuY3Rpb24odCxlLGksbixzKXt2YXIgYT10LmdldEltYWdlRGF0YSgwLDAsbixzKTtmb3IoaT0wO2k8cztpKyspZm9yKGU9MDtlPG47ZSsrKXt2YXIgcj11KGEuZGF0YSxlLGksbiwwLDApLG89dShhLmRhdGEsZSxpLG4sMCwxKSxsPXUoYS5kYXRhLGUsaSxuLDAsMiksaD11KGEuZGF0YSxlLGksbiwwLDMpO2MoYS5kYXRhLGUsaSxuLDAsMCxmKDAscikrZigxLG8pK2YoMixsKStmKDMsaCkrZig0LDEpKSxjKGEuZGF0YSxlLGksbiwwLDEsZig1LHIpK2YoNixvKStmKDcsbCkrZig4LGgpK2YoOSwxKSksYyhhLmRhdGEsZSxpLG4sMCwyLGYoMTAscikrZigxMSxvKStmKDEyLGwpK2YoMTMsaCkrZigxNCwxKSksYyhhLmRhdGEsZSxpLG4sMCwzLGYoMTUscikrZigxNixvKStmKDE3LGwpK2YoMTgsaCkrZigxOSwxKSl9dC5jbGVhclJlY3QoMCwwLG4scyksdC5wdXRJbWFnZURhdGEoYSwwLDApfX0sQS5FbGVtZW50LmZlQ29sb3JNYXRyaXgucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmZlR2F1c3NpYW5CbHVyPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYmx1clJhZGl1cz1NYXRoLmZsb29yKHRoaXMuYXR0cmlidXRlKFwic3RkRGV2aWF0aW9uXCIpLm51bVZhbHVlKCkpLHRoaXMuZXh0cmFGaWx0ZXJEaXN0YW5jZT10aGlzLmJsdXJSYWRpdXMsdGhpcy5hcHBseT1mdW5jdGlvbih0LGUsaSxuLHMpe2QmJnZvaWQgMCE9PWQuY2FudmFzUkdCQT8odC5jYW52YXMuaWQ9QS5VbmlxdWVJZCgpLHQuY2FudmFzLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0LmNhbnZhcyksZC5jYW52YXNSR0JBKHQuY2FudmFzLGUsaSxuLHMsdGhpcy5ibHVyUmFkaXVzKSxkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHQuY2FudmFzKSk6QS5sb2coXCJFUlJPUjogU3RhY2tCbHVyLmpzIG11c3QgYmUgaW5jbHVkZWQgZm9yIGJsdXIgdG8gd29ya1wiKX19LEEuRWxlbWVudC5mZUdhdXNzaWFuQmx1ci5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQudGl0bGU9ZnVuY3Rpb24odCl7fSxBLkVsZW1lbnQudGl0bGUucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmRlc2M9ZnVuY3Rpb24odCl7fSxBLkVsZW1lbnQuZGVzYy5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuTUlTU0lORz1mdW5jdGlvbih0KXtBLmxvZyhcIkVSUk9SOiBFbGVtZW50ICdcIit0Lm5vZGVOYW1lK1wiJyBub3QgeWV0IGltcGxlbWVudGVkLlwiKX0sQS5FbGVtZW50Lk1JU1NJTkcucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5DcmVhdGVFbGVtZW50PWZ1bmN0aW9uKHQpe3ZhciBlPXQubm9kZU5hbWUucmVwbGFjZSgvXlteOl0rOi8sXCJcIik7ZT1lLnJlcGxhY2UoL1xcLS9nLFwiXCIpO3ZhciBpPW51bGw7cmV0dXJuKGk9dm9pZCAwIT09QS5FbGVtZW50W2VdP25ldyBBLkVsZW1lbnRbZV0odCk6bmV3IEEuRWxlbWVudC5NSVNTSU5HKHQpKS50eXBlPXQubm9kZU5hbWUsaX0sQS5sb2FkPWZ1bmN0aW9uKHQsZSl7QS5sb2FkWG1sKHQsQS5hamF4KGUpKX0sQS5sb2FkWG1sPWZ1bmN0aW9uKHQsZSl7QS5sb2FkWG1sRG9jKHQsQS5wYXJzZVhtbChlKSl9LEEubG9hZFhtbERvYz1mdW5jdGlvbihhLHIpe0EuaW5pdChhKTt2YXIgaT1mdW5jdGlvbih0KXtmb3IodmFyIGU9YS5jYW52YXM7ZTspdC54LT1lLm9mZnNldExlZnQsdC55LT1lLm9mZnNldFRvcCxlPWUub2Zmc2V0UGFyZW50O3JldHVybiB1LnNjcm9sbFgmJih0LngrPXUuc2Nyb2xsWCksdS5zY3JvbGxZJiYodC55Kz11LnNjcm9sbFkpLHR9OzEhPUEub3B0cy5pZ25vcmVNb3VzZSYmKGEuY2FudmFzLm9uY2xpY2s9ZnVuY3Rpb24odCl7dmFyIGU9aShuZXcgQS5Qb2ludChudWxsIT10P3QuY2xpZW50WDpldmVudC5jbGllbnRYLG51bGwhPXQ/dC5jbGllbnRZOmV2ZW50LmNsaWVudFkpKTtBLk1vdXNlLm9uY2xpY2soZS54LGUueSl9LGEuY2FudmFzLm9ubW91c2Vtb3ZlPWZ1bmN0aW9uKHQpe3ZhciBlPWkobmV3IEEuUG9pbnQobnVsbCE9dD90LmNsaWVudFg6ZXZlbnQuY2xpZW50WCxudWxsIT10P3QuY2xpZW50WTpldmVudC5jbGllbnRZKSk7QS5Nb3VzZS5vbm1vdXNlbW92ZShlLngsZS55KX0pO3ZhciBvPUEuQ3JlYXRlRWxlbWVudChyLmRvY3VtZW50RWxlbWVudCk7by5yb290PSEwLG8uYWRkU3R5bGVzRnJvbVN0eWxlRGVmaW5pdGlvbigpO3ZhciBsPSEwLG49ZnVuY3Rpb24oKXtBLlZpZXdQb3J0LkNsZWFyKCksYS5jYW52YXMucGFyZW50Tm9kZT9BLlZpZXdQb3J0LlNldEN1cnJlbnQoYS5jYW52YXMucGFyZW50Tm9kZS5jbGllbnRXaWR0aCxhLmNhbnZhcy5wYXJlbnROb2RlLmNsaWVudEhlaWdodCk6QS5WaWV3UG9ydC5TZXRDdXJyZW50KDgwMCw2MDApLDEhPUEub3B0cy5pZ25vcmVEaW1lbnNpb25zJiYoby5zdHlsZShcIndpZHRoXCIpLmhhc1ZhbHVlKCkmJihhLmNhbnZhcy53aWR0aD1vLnN0eWxlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIpLGEuY2FudmFzLnN0eWxlJiYoYS5jYW52YXMuc3R5bGUud2lkdGg9YS5jYW52YXMud2lkdGgrXCJweFwiKSksby5zdHlsZShcImhlaWdodFwiKS5oYXNWYWx1ZSgpJiYoYS5jYW52YXMuaGVpZ2h0PW8uc3R5bGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIpLGEuY2FudmFzLnN0eWxlJiYoYS5jYW52YXMuc3R5bGUuaGVpZ2h0PWEuY2FudmFzLmhlaWdodCtcInB4XCIpKSk7dmFyIHQ9YS5jYW52YXMuY2xpZW50V2lkdGh8fGEuY2FudmFzLndpZHRoLGU9YS5jYW52YXMuY2xpZW50SGVpZ2h0fHxhLmNhbnZhcy5oZWlnaHQ7aWYoMT09QS5vcHRzLmlnbm9yZURpbWVuc2lvbnMmJm8uc3R5bGUoXCJ3aWR0aFwiKS5oYXNWYWx1ZSgpJiZvLnN0eWxlKFwiaGVpZ2h0XCIpLmhhc1ZhbHVlKCkmJih0PW8uc3R5bGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIiksZT1vLnN0eWxlKFwiaGVpZ2h0XCIpLnRvUGl4ZWxzKFwieVwiKSksQS5WaWV3UG9ydC5TZXRDdXJyZW50KHQsZSksbnVsbCE9QS5vcHRzLm9mZnNldFgmJihvLmF0dHJpYnV0ZShcInhcIiwhMCkudmFsdWU9QS5vcHRzLm9mZnNldFgpLG51bGwhPUEub3B0cy5vZmZzZXRZJiYoby5hdHRyaWJ1dGUoXCJ5XCIsITApLnZhbHVlPUEub3B0cy5vZmZzZXRZKSxudWxsIT1BLm9wdHMuc2NhbGVXaWR0aHx8bnVsbCE9QS5vcHRzLnNjYWxlSGVpZ2h0KXt2YXIgaT1udWxsLG49bnVsbCxzPUEuVG9OdW1iZXJBcnJheShvLmF0dHJpYnV0ZShcInZpZXdCb3hcIikudmFsdWUpO251bGwhPUEub3B0cy5zY2FsZVdpZHRoJiYoby5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS5oYXNWYWx1ZSgpP2k9by5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIikvQS5vcHRzLnNjYWxlV2lkdGg6aXNOYU4oc1syXSl8fChpPXNbMl0vQS5vcHRzLnNjYWxlV2lkdGgpKSxudWxsIT1BLm9wdHMuc2NhbGVIZWlnaHQmJihvLmF0dHJpYnV0ZShcImhlaWdodFwiKS5oYXNWYWx1ZSgpP249by5hdHRyaWJ1dGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIpL0Eub3B0cy5zY2FsZUhlaWdodDppc05hTihzWzNdKXx8KG49c1szXS9BLm9wdHMuc2NhbGVIZWlnaHQpKSxudWxsPT1pJiYoaT1uKSxudWxsPT1uJiYobj1pKSxvLmF0dHJpYnV0ZShcIndpZHRoXCIsITApLnZhbHVlPUEub3B0cy5zY2FsZVdpZHRoLG8uYXR0cmlidXRlKFwiaGVpZ2h0XCIsITApLnZhbHVlPUEub3B0cy5zY2FsZUhlaWdodCxvLnN0eWxlKFwidHJhbnNmb3JtXCIsITAsITApLnZhbHVlKz1cIiBzY2FsZShcIisxL2krXCIsXCIrMS9uK1wiKVwifTEhPUEub3B0cy5pZ25vcmVDbGVhciYmYS5jbGVhclJlY3QoMCwwLHQsZSksby5yZW5kZXIoYSksbCYmKGw9ITEsXCJmdW5jdGlvblwiPT10eXBlb2YgQS5vcHRzLnJlbmRlckNhbGxiYWNrJiZBLm9wdHMucmVuZGVyQ2FsbGJhY2socikpfSxzPSEwO0EuSW1hZ2VzTG9hZGVkKCkmJihzPSExLG4oKSksQS5pbnRlcnZhbElEPXNldEludGVydmFsKGZ1bmN0aW9uKCl7dmFyIHQ9ITE7aWYocyYmQS5JbWFnZXNMb2FkZWQoKSYmKHQ9IShzPSExKSksMSE9QS5vcHRzLmlnbm9yZU1vdXNlJiYodHw9QS5Nb3VzZS5oYXNFdmVudHMoKSksMSE9QS5vcHRzLmlnbm9yZUFuaW1hdGlvbilmb3IodmFyIGU9MDtlPEEuQW5pbWF0aW9ucy5sZW5ndGg7ZSsrKXR8PUEuQW5pbWF0aW9uc1tlXS51cGRhdGUoMWUzL0EuRlJBTUVSQVRFKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBBLm9wdHMuZm9yY2VSZWRyYXcmJjE9PUEub3B0cy5mb3JjZVJlZHJhdygpJiYodD0hMCksdCYmKG4oKSxBLk1vdXNlLnJ1bkV2ZW50cygpKX0sMWUzL0EuRlJBTUVSQVRFKX0sQS5zdG9wPWZ1bmN0aW9uKCl7QS5pbnRlcnZhbElEJiZjbGVhckludGVydmFsKEEuaW50ZXJ2YWxJRCl9LEEuTW91c2U9bmV3IGZ1bmN0aW9uKCl7dGhpcy5ldmVudHM9W10sdGhpcy5oYXNFdmVudHM9ZnVuY3Rpb24oKXtyZXR1cm4gMCE9dGhpcy5ldmVudHMubGVuZ3RofSx0aGlzLm9uY2xpY2s9ZnVuY3Rpb24odCxlKXt0aGlzLmV2ZW50cy5wdXNoKHt0eXBlOlwib25jbGlja1wiLHg6dCx5OmUscnVuOmZ1bmN0aW9uKHQpe3Qub25jbGljayYmdC5vbmNsaWNrKCl9fSl9LHRoaXMub25tb3VzZW1vdmU9ZnVuY3Rpb24odCxlKXt0aGlzLmV2ZW50cy5wdXNoKHt0eXBlOlwib25tb3VzZW1vdmVcIix4OnQseTplLHJ1bjpmdW5jdGlvbih0KXt0Lm9ubW91c2Vtb3ZlJiZ0Lm9ubW91c2Vtb3ZlKCl9fSl9LHRoaXMuZXZlbnRFbGVtZW50cz1bXSx0aGlzLmNoZWNrUGF0aD1mdW5jdGlvbih0LGUpe2Zvcih2YXIgaT0wO2k8dGhpcy5ldmVudHMubGVuZ3RoO2krKyl7dmFyIG49dGhpcy5ldmVudHNbaV07ZS5pc1BvaW50SW5QYXRoJiZlLmlzUG9pbnRJblBhdGgobi54LG4ueSkmJih0aGlzLmV2ZW50RWxlbWVudHNbaV09dCl9fSx0aGlzLmNoZWNrQm91bmRpbmdCb3g9ZnVuY3Rpb24odCxlKXtmb3IodmFyIGk9MDtpPHRoaXMuZXZlbnRzLmxlbmd0aDtpKyspe3ZhciBuPXRoaXMuZXZlbnRzW2ldO2UuaXNQb2ludEluQm94KG4ueCxuLnkpJiYodGhpcy5ldmVudEVsZW1lbnRzW2ldPXQpfX0sdGhpcy5ydW5FdmVudHM9ZnVuY3Rpb24oKXtBLmN0eC5jYW52YXMuc3R5bGUuY3Vyc29yPVwiXCI7Zm9yKHZhciB0PTA7dDx0aGlzLmV2ZW50cy5sZW5ndGg7dCsrKWZvcih2YXIgZT10aGlzLmV2ZW50c1t0XSxpPXRoaXMuZXZlbnRFbGVtZW50c1t0XTtpOyllLnJ1bihpKSxpPWkucGFyZW50O3RoaXMuZXZlbnRzPVtdLHRoaXMuZXZlbnRFbGVtZW50cz1bXX19LEF9KGl8fHt9KTtcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodCkpLG51bGwhPXQuc3ZnJiZ0LnN2Zy5zdG9wKCksdC5jaGlsZE5vZGVzJiYxPT10LmNoaWxkTm9kZXMubGVuZ3RoJiZcIk9CSkVDVFwiPT10LmNoaWxkTm9kZXNbMF0ubm9kZU5hbWV8fCh0LnN2Zz1uKTt2YXIgcz10LmdldENvbnRleHQoXCIyZFwiKTt2b2lkIDAhPT1lLmRvY3VtZW50RWxlbWVudD9uLmxvYWRYbWxEb2MocyxlKTpcIjxcIj09ZS5zdWJzdHIoMCwxKT9uLmxvYWRYbWwocyxlKTpuLmxvYWQocyxlKX1lbHNlIGZvcih2YXIgYT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3ZnXCIpLHI9MDtyPGEubGVuZ3RoO3IrKyl7dmFyIG89YVtyXSxsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7bC53aWR0aD1vLmNsaWVudFdpZHRoLGwuaGVpZ2h0PW8uY2xpZW50SGVpZ2h0LG8ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobCxvKSxvLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobyk7dmFyIGg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtoLmFwcGVuZENoaWxkKG8pLGMobCxoLmlubmVySFRNTCl9fTtcInVuZGVmaW5lZFwiPT10eXBlb2YgRWxlbWVudHx8KHZvaWQgMCE9PUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXM/Zj1mdW5jdGlvbih0LGUpe3JldHVybiB0Lm1hdGNoZXMoZSl9OnZvaWQgMCE9PUVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3Rvcj9mPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQud2Via2l0TWF0Y2hlc1NlbGVjdG9yKGUpfTp2b2lkIDAhPT1FbGVtZW50LnByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3I/Zj1mdW5jdGlvbih0LGUpe3JldHVybiB0Lm1vek1hdGNoZXNTZWxlY3RvcihlKX06dm9pZCAwIT09RWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3I/Zj1mdW5jdGlvbih0LGUpe3JldHVybiB0Lm1zTWF0Y2hlc1NlbGVjdG9yKGUpfTp2b2lkIDAhPT1FbGVtZW50LnByb3RvdHlwZS5vTWF0Y2hlc1NlbGVjdG9yP2Y9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5vTWF0Y2hlc1NlbGVjdG9yKGUpfTooXCJmdW5jdGlvblwiIT10eXBlb2YgalF1ZXJ5JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBaZXB0b3x8KGY9ZnVuY3Rpb24odCxlKXtyZXR1cm4gJCh0KS5pcyhlKX0pLHZvaWQgMD09PWYmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBTaXp6bGUmJihmPVNpenpsZS5tYXRjaGVzU2VsZWN0b3IpKSk7dmFyIGU9LyhcXFtbXlxcXV0rXFxdKS9nLGk9LygjW15cXHNcXCs+flxcLlxcWzpdKykvZyxhPS8oXFwuW15cXHNcXCs+flxcLlxcWzpdKykvZyxyPS8oOjpbXlxcc1xcKz5+XFwuXFxbOl0rfDpmaXJzdC1saW5lfDpmaXJzdC1sZXR0ZXJ8OmJlZm9yZXw6YWZ0ZXIpL2dpLG89Lyg6W1xcdy1dK1xcKFteXFwpXSpcXCkpL2dpLGw9Lyg6W15cXHNcXCs+flxcLlxcWzpdKykvZyxoPS8oW15cXHNcXCs+flxcLlxcWzpdKykvZztmdW5jdGlvbiB3KG4pe3ZhciBzPVswLDAsMF0sdD1mdW5jdGlvbih0LGUpe3ZhciBpPW4ubWF0Y2godCk7bnVsbCE9aSYmKHNbZV0rPWkubGVuZ3RoLG49bi5yZXBsYWNlKHQsXCIgXCIpKX07cmV0dXJuIG49KG49bi5yZXBsYWNlKC86bm90XFwoKFteXFwpXSopXFwpL2csXCIgICAgICQxIFwiKSkucmVwbGFjZSgve1tcXHNcXFNdKi9nbSxcIiBcIiksdChlLDEpLHQoaSwwKSx0KGEsMSksdChyLDIpLHQobywxKSx0KGwsMSksbj0obj1uLnJlcGxhY2UoL1tcXCpcXHNcXCs+fl0vZyxcIiBcIikpLnJlcGxhY2UoL1sjXFwuXS9nLFwiIFwiKSx0KGgsMikscy5qb2luKFwiXCIpfVwidW5kZWZpbmVkXCIhPXR5cGVvZiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQmJihDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmRyYXdTdmc9ZnVuY3Rpb24odCxlLGksbixzLGEpe3ZhciByPXtpZ25vcmVNb3VzZTohMCxpZ25vcmVBbmltYXRpb246ITAsaWdub3JlRGltZW5zaW9uczohMCxpZ25vcmVDbGVhcjohMCxvZmZzZXRYOmUsb2Zmc2V0WTppLHNjYWxlV2lkdGg6bixzY2FsZUhlaWdodDpzfTtmb3IodmFyIG8gaW4gYSlhLmhhc093blByb3BlcnR5KG8pJiYocltvXT1hW29dKTtjKHRoaXMuY2FudmFzLHQscil9KSx0LmV4cG9ydHM9Y30odD17ZXhwb3J0czp7fX0sdC5leHBvcnRzKSx0LmV4cG9ydHN9KTsiLCIvKlxuXHRCYXNlZCBvbiByZ2Jjb2xvci5qcyBieSBTdG95YW4gU3RlZmFub3YgPHNzdG9vQGdtYWlsLmNvbT5cblx0aHR0cDovL3d3dy5waHBpZWQuY29tL3JnYi1jb2xvci1wYXJzZXItaW4tamF2YXNjcmlwdC9cbiovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY29sb3Jfc3RyaW5nKSB7XG4gICAgdGhpcy5vayA9IGZhbHNlO1xuICAgIHRoaXMuYWxwaGEgPSAxLjA7XG5cbiAgICAvLyBzdHJpcCBhbnkgbGVhZGluZyAjXG4gICAgaWYgKGNvbG9yX3N0cmluZy5jaGFyQXQoMCkgPT0gJyMnKSB7IC8vIHJlbW92ZSAjIGlmIGFueVxuICAgICAgICBjb2xvcl9zdHJpbmcgPSBjb2xvcl9zdHJpbmcuc3Vic3RyKDEsNik7XG4gICAgfVxuXG4gICAgY29sb3Jfc3RyaW5nID0gY29sb3Jfc3RyaW5nLnJlcGxhY2UoLyAvZywnJyk7XG4gICAgY29sb3Jfc3RyaW5nID0gY29sb3Jfc3RyaW5nLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyBiZWZvcmUgZ2V0dGluZyBpbnRvIHJlZ2V4cHMsIHRyeSBzaW1wbGUgbWF0Y2hlc1xuICAgIC8vIGFuZCBvdmVyd3JpdGUgdGhlIGlucHV0XG4gICAgdmFyIHNpbXBsZV9jb2xvcnMgPSB7XG4gICAgICAgIGFsaWNlYmx1ZTogJ2YwZjhmZicsXG4gICAgICAgIGFudGlxdWV3aGl0ZTogJ2ZhZWJkNycsXG4gICAgICAgIGFxdWE6ICcwMGZmZmYnLFxuICAgICAgICBhcXVhbWFyaW5lOiAnN2ZmZmQ0JyxcbiAgICAgICAgYXp1cmU6ICdmMGZmZmYnLFxuICAgICAgICBiZWlnZTogJ2Y1ZjVkYycsXG4gICAgICAgIGJpc3F1ZTogJ2ZmZTRjNCcsXG4gICAgICAgIGJsYWNrOiAnMDAwMDAwJyxcbiAgICAgICAgYmxhbmNoZWRhbG1vbmQ6ICdmZmViY2QnLFxuICAgICAgICBibHVlOiAnMDAwMGZmJyxcbiAgICAgICAgYmx1ZXZpb2xldDogJzhhMmJlMicsXG4gICAgICAgIGJyb3duOiAnYTUyYTJhJyxcbiAgICAgICAgYnVybHl3b29kOiAnZGViODg3JyxcbiAgICAgICAgY2FkZXRibHVlOiAnNWY5ZWEwJyxcbiAgICAgICAgY2hhcnRyZXVzZTogJzdmZmYwMCcsXG4gICAgICAgIGNob2NvbGF0ZTogJ2QyNjkxZScsXG4gICAgICAgIGNvcmFsOiAnZmY3ZjUwJyxcbiAgICAgICAgY29ybmZsb3dlcmJsdWU6ICc2NDk1ZWQnLFxuICAgICAgICBjb3Juc2lsazogJ2ZmZjhkYycsXG4gICAgICAgIGNyaW1zb246ICdkYzE0M2MnLFxuICAgICAgICBjeWFuOiAnMDBmZmZmJyxcbiAgICAgICAgZGFya2JsdWU6ICcwMDAwOGInLFxuICAgICAgICBkYXJrY3lhbjogJzAwOGI4YicsXG4gICAgICAgIGRhcmtnb2xkZW5yb2Q6ICdiODg2MGInLFxuICAgICAgICBkYXJrZ3JheTogJ2E5YTlhOScsXG4gICAgICAgIGRhcmtncmVlbjogJzAwNjQwMCcsXG4gICAgICAgIGRhcmtraGFraTogJ2JkYjc2YicsXG4gICAgICAgIGRhcmttYWdlbnRhOiAnOGIwMDhiJyxcbiAgICAgICAgZGFya29saXZlZ3JlZW46ICc1NTZiMmYnLFxuICAgICAgICBkYXJrb3JhbmdlOiAnZmY4YzAwJyxcbiAgICAgICAgZGFya29yY2hpZDogJzk5MzJjYycsXG4gICAgICAgIGRhcmtyZWQ6ICc4YjAwMDAnLFxuICAgICAgICBkYXJrc2FsbW9uOiAnZTk5NjdhJyxcbiAgICAgICAgZGFya3NlYWdyZWVuOiAnOGZiYzhmJyxcbiAgICAgICAgZGFya3NsYXRlYmx1ZTogJzQ4M2Q4YicsXG4gICAgICAgIGRhcmtzbGF0ZWdyYXk6ICcyZjRmNGYnLFxuICAgICAgICBkYXJrdHVycXVvaXNlOiAnMDBjZWQxJyxcbiAgICAgICAgZGFya3Zpb2xldDogJzk0MDBkMycsXG4gICAgICAgIGRlZXBwaW5rOiAnZmYxNDkzJyxcbiAgICAgICAgZGVlcHNreWJsdWU6ICcwMGJmZmYnLFxuICAgICAgICBkaW1ncmF5OiAnNjk2OTY5JyxcbiAgICAgICAgZG9kZ2VyYmx1ZTogJzFlOTBmZicsXG4gICAgICAgIGZlbGRzcGFyOiAnZDE5Mjc1JyxcbiAgICAgICAgZmlyZWJyaWNrOiAnYjIyMjIyJyxcbiAgICAgICAgZmxvcmFsd2hpdGU6ICdmZmZhZjAnLFxuICAgICAgICBmb3Jlc3RncmVlbjogJzIyOGIyMicsXG4gICAgICAgIGZ1Y2hzaWE6ICdmZjAwZmYnLFxuICAgICAgICBnYWluc2Jvcm86ICdkY2RjZGMnLFxuICAgICAgICBnaG9zdHdoaXRlOiAnZjhmOGZmJyxcbiAgICAgICAgZ29sZDogJ2ZmZDcwMCcsXG4gICAgICAgIGdvbGRlbnJvZDogJ2RhYTUyMCcsXG4gICAgICAgIGdyYXk6ICc4MDgwODAnLFxuICAgICAgICBncmVlbjogJzAwODAwMCcsXG4gICAgICAgIGdyZWVueWVsbG93OiAnYWRmZjJmJyxcbiAgICAgICAgaG9uZXlkZXc6ICdmMGZmZjAnLFxuICAgICAgICBob3RwaW5rOiAnZmY2OWI0JyxcbiAgICAgICAgaW5kaWFucmVkIDogJ2NkNWM1YycsXG4gICAgICAgIGluZGlnbyA6ICc0YjAwODInLFxuICAgICAgICBpdm9yeTogJ2ZmZmZmMCcsXG4gICAgICAgIGtoYWtpOiAnZjBlNjhjJyxcbiAgICAgICAgbGF2ZW5kZXI6ICdlNmU2ZmEnLFxuICAgICAgICBsYXZlbmRlcmJsdXNoOiAnZmZmMGY1JyxcbiAgICAgICAgbGF3bmdyZWVuOiAnN2NmYzAwJyxcbiAgICAgICAgbGVtb25jaGlmZm9uOiAnZmZmYWNkJyxcbiAgICAgICAgbGlnaHRibHVlOiAnYWRkOGU2JyxcbiAgICAgICAgbGlnaHRjb3JhbDogJ2YwODA4MCcsXG4gICAgICAgIGxpZ2h0Y3lhbjogJ2UwZmZmZicsXG4gICAgICAgIGxpZ2h0Z29sZGVucm9keWVsbG93OiAnZmFmYWQyJyxcbiAgICAgICAgbGlnaHRncmV5OiAnZDNkM2QzJyxcbiAgICAgICAgbGlnaHRncmVlbjogJzkwZWU5MCcsXG4gICAgICAgIGxpZ2h0cGluazogJ2ZmYjZjMScsXG4gICAgICAgIGxpZ2h0c2FsbW9uOiAnZmZhMDdhJyxcbiAgICAgICAgbGlnaHRzZWFncmVlbjogJzIwYjJhYScsXG4gICAgICAgIGxpZ2h0c2t5Ymx1ZTogJzg3Y2VmYScsXG4gICAgICAgIGxpZ2h0c2xhdGVibHVlOiAnODQ3MGZmJyxcbiAgICAgICAgbGlnaHRzbGF0ZWdyYXk6ICc3Nzg4OTknLFxuICAgICAgICBsaWdodHN0ZWVsYmx1ZTogJ2IwYzRkZScsXG4gICAgICAgIGxpZ2h0eWVsbG93OiAnZmZmZmUwJyxcbiAgICAgICAgbGltZTogJzAwZmYwMCcsXG4gICAgICAgIGxpbWVncmVlbjogJzMyY2QzMicsXG4gICAgICAgIGxpbmVuOiAnZmFmMGU2JyxcbiAgICAgICAgbWFnZW50YTogJ2ZmMDBmZicsXG4gICAgICAgIG1hcm9vbjogJzgwMDAwMCcsXG4gICAgICAgIG1lZGl1bWFxdWFtYXJpbmU6ICc2NmNkYWEnLFxuICAgICAgICBtZWRpdW1ibHVlOiAnMDAwMGNkJyxcbiAgICAgICAgbWVkaXVtb3JjaGlkOiAnYmE1NWQzJyxcbiAgICAgICAgbWVkaXVtcHVycGxlOiAnOTM3MGQ4JyxcbiAgICAgICAgbWVkaXVtc2VhZ3JlZW46ICczY2IzNzEnLFxuICAgICAgICBtZWRpdW1zbGF0ZWJsdWU6ICc3YjY4ZWUnLFxuICAgICAgICBtZWRpdW1zcHJpbmdncmVlbjogJzAwZmE5YScsXG4gICAgICAgIG1lZGl1bXR1cnF1b2lzZTogJzQ4ZDFjYycsXG4gICAgICAgIG1lZGl1bXZpb2xldHJlZDogJ2M3MTU4NScsXG4gICAgICAgIG1pZG5pZ2h0Ymx1ZTogJzE5MTk3MCcsXG4gICAgICAgIG1pbnRjcmVhbTogJ2Y1ZmZmYScsXG4gICAgICAgIG1pc3R5cm9zZTogJ2ZmZTRlMScsXG4gICAgICAgIG1vY2Nhc2luOiAnZmZlNGI1JyxcbiAgICAgICAgbmF2YWpvd2hpdGU6ICdmZmRlYWQnLFxuICAgICAgICBuYXZ5OiAnMDAwMDgwJyxcbiAgICAgICAgb2xkbGFjZTogJ2ZkZjVlNicsXG4gICAgICAgIG9saXZlOiAnODA4MDAwJyxcbiAgICAgICAgb2xpdmVkcmFiOiAnNmI4ZTIzJyxcbiAgICAgICAgb3JhbmdlOiAnZmZhNTAwJyxcbiAgICAgICAgb3JhbmdlcmVkOiAnZmY0NTAwJyxcbiAgICAgICAgb3JjaGlkOiAnZGE3MGQ2JyxcbiAgICAgICAgcGFsZWdvbGRlbnJvZDogJ2VlZThhYScsXG4gICAgICAgIHBhbGVncmVlbjogJzk4ZmI5OCcsXG4gICAgICAgIHBhbGV0dXJxdW9pc2U6ICdhZmVlZWUnLFxuICAgICAgICBwYWxldmlvbGV0cmVkOiAnZDg3MDkzJyxcbiAgICAgICAgcGFwYXlhd2hpcDogJ2ZmZWZkNScsXG4gICAgICAgIHBlYWNocHVmZjogJ2ZmZGFiOScsXG4gICAgICAgIHBlcnU6ICdjZDg1M2YnLFxuICAgICAgICBwaW5rOiAnZmZjMGNiJyxcbiAgICAgICAgcGx1bTogJ2RkYTBkZCcsXG4gICAgICAgIHBvd2RlcmJsdWU6ICdiMGUwZTYnLFxuICAgICAgICBwdXJwbGU6ICc4MDAwODAnLFxuICAgICAgICByZWJlY2NhcHVycGxlOiAnNjYzMzk5JyxcbiAgICAgICAgcmVkOiAnZmYwMDAwJyxcbiAgICAgICAgcm9zeWJyb3duOiAnYmM4ZjhmJyxcbiAgICAgICAgcm95YWxibHVlOiAnNDE2OWUxJyxcbiAgICAgICAgc2FkZGxlYnJvd246ICc4YjQ1MTMnLFxuICAgICAgICBzYWxtb246ICdmYTgwNzInLFxuICAgICAgICBzYW5keWJyb3duOiAnZjRhNDYwJyxcbiAgICAgICAgc2VhZ3JlZW46ICcyZThiNTcnLFxuICAgICAgICBzZWFzaGVsbDogJ2ZmZjVlZScsXG4gICAgICAgIHNpZW5uYTogJ2EwNTIyZCcsXG4gICAgICAgIHNpbHZlcjogJ2MwYzBjMCcsXG4gICAgICAgIHNreWJsdWU6ICc4N2NlZWInLFxuICAgICAgICBzbGF0ZWJsdWU6ICc2YTVhY2QnLFxuICAgICAgICBzbGF0ZWdyYXk6ICc3MDgwOTAnLFxuICAgICAgICBzbm93OiAnZmZmYWZhJyxcbiAgICAgICAgc3ByaW5nZ3JlZW46ICcwMGZmN2YnLFxuICAgICAgICBzdGVlbGJsdWU6ICc0NjgyYjQnLFxuICAgICAgICB0YW46ICdkMmI0OGMnLFxuICAgICAgICB0ZWFsOiAnMDA4MDgwJyxcbiAgICAgICAgdGhpc3RsZTogJ2Q4YmZkOCcsXG4gICAgICAgIHRvbWF0bzogJ2ZmNjM0NycsXG4gICAgICAgIHR1cnF1b2lzZTogJzQwZTBkMCcsXG4gICAgICAgIHZpb2xldDogJ2VlODJlZScsXG4gICAgICAgIHZpb2xldHJlZDogJ2QwMjA5MCcsXG4gICAgICAgIHdoZWF0OiAnZjVkZWIzJyxcbiAgICAgICAgd2hpdGU6ICdmZmZmZmYnLFxuICAgICAgICB3aGl0ZXNtb2tlOiAnZjVmNWY1JyxcbiAgICAgICAgeWVsbG93OiAnZmZmZjAwJyxcbiAgICAgICAgeWVsbG93Z3JlZW46ICc5YWNkMzInXG4gICAgfTtcbiAgICBjb2xvcl9zdHJpbmcgPSBzaW1wbGVfY29sb3JzW2NvbG9yX3N0cmluZ10gfHwgY29sb3Jfc3RyaW5nO1xuICAgIC8vIGVtZCBvZiBzaW1wbGUgdHlwZS1pbiBjb2xvcnNcblxuICAgIC8vIGFycmF5IG9mIGNvbG9yIGRlZmluaXRpb24gb2JqZWN0c1xuICAgIHZhciBjb2xvcl9kZWZzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICByZTogL15yZ2JhXFwoKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KSxcXHMqKCg/OlxcZD9cXC4pP1xcZClcXCkkLyxcbiAgICAgICAgICAgIGV4YW1wbGU6IFsncmdiYSgxMjMsIDIzNCwgNDUsIDAuOCknLCAncmdiYSgyNTUsMjM0LDI0NSwxLjApJ10sXG4gICAgICAgICAgICBwcm9jZXNzOiBmdW5jdGlvbiAoYml0cyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1sxXSksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMl0pLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzNdKSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChiaXRzWzRdKVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlOiAvXnJnYlxcKChcXGR7MSwzfSksXFxzKihcXGR7MSwzfSksXFxzKihcXGR7MSwzfSlcXCkkLyxcbiAgICAgICAgICAgIGV4YW1wbGU6IFsncmdiKDEyMywgMjM0LCA0NSknLCAncmdiKDI1NSwyMzQsMjQ1KSddLFxuICAgICAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gKGJpdHMpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMV0pLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzJdKSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1szXSlcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICByZTogL14oWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkkLyxcbiAgICAgICAgICAgIGV4YW1wbGU6IFsnIzAwZmYwMCcsICczMzY2OTknXSxcbiAgICAgICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uIChiaXRzKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzFdLCAxNiksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMl0sIDE2KSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1szXSwgMTYpXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcmU6IC9eKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pJC8sXG4gICAgICAgICAgICBleGFtcGxlOiBbJyNmYjAnLCAnZjBmJ10sXG4gICAgICAgICAgICBwcm9jZXNzOiBmdW5jdGlvbiAoYml0cyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1sxXSArIGJpdHNbMV0sIDE2KSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1syXSArIGJpdHNbMl0sIDE2KSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1szXSArIGJpdHNbM10sIDE2KVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgLy8gc2VhcmNoIHRocm91Z2ggdGhlIGRlZmluaXRpb25zIHRvIGZpbmQgYSBtYXRjaFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sb3JfZGVmcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcmUgPSBjb2xvcl9kZWZzW2ldLnJlO1xuICAgICAgICB2YXIgcHJvY2Vzc29yID0gY29sb3JfZGVmc1tpXS5wcm9jZXNzO1xuICAgICAgICB2YXIgYml0cyA9IHJlLmV4ZWMoY29sb3Jfc3RyaW5nKTtcbiAgICAgICAgaWYgKGJpdHMpIHtcbiAgICAgICAgICAgIHZhciBjaGFubmVscyA9IHByb2Nlc3NvcihiaXRzKTtcbiAgICAgICAgICAgIHRoaXMuciA9IGNoYW5uZWxzWzBdO1xuICAgICAgICAgICAgdGhpcy5nID0gY2hhbm5lbHNbMV07XG4gICAgICAgICAgICB0aGlzLmIgPSBjaGFubmVsc1syXTtcbiAgICAgICAgICAgIGlmIChjaGFubmVscy5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbHBoYSA9IGNoYW5uZWxzWzNdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5vayA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIHZhbGlkYXRlL2NsZWFudXAgdmFsdWVzXG4gICAgdGhpcy5yID0gKHRoaXMuciA8IDAgfHwgaXNOYU4odGhpcy5yKSkgPyAwIDogKCh0aGlzLnIgPiAyNTUpID8gMjU1IDogdGhpcy5yKTtcbiAgICB0aGlzLmcgPSAodGhpcy5nIDwgMCB8fCBpc05hTih0aGlzLmcpKSA/IDAgOiAoKHRoaXMuZyA+IDI1NSkgPyAyNTUgOiB0aGlzLmcpO1xuICAgIHRoaXMuYiA9ICh0aGlzLmIgPCAwIHx8IGlzTmFOKHRoaXMuYikpID8gMCA6ICgodGhpcy5iID4gMjU1KSA/IDI1NSA6IHRoaXMuYik7XG4gICAgdGhpcy5hbHBoYSA9ICh0aGlzLmFscGhhIDwgMCkgPyAwIDogKCh0aGlzLmFscGhhID4gMS4wIHx8IGlzTmFOKHRoaXMuYWxwaGEpKSA/IDEuMCA6IHRoaXMuYWxwaGEpO1xuXG4gICAgLy8gc29tZSBnZXR0ZXJzXG4gICAgdGhpcy50b1JHQiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICdyZ2IoJyArIHRoaXMuciArICcsICcgKyB0aGlzLmcgKyAnLCAnICsgdGhpcy5iICsgJyknO1xuICAgIH1cbiAgICB0aGlzLnRvUkdCQSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICdyZ2JhKCcgKyB0aGlzLnIgKyAnLCAnICsgdGhpcy5nICsgJywgJyArIHRoaXMuYiArICcsICcgKyB0aGlzLmFscGhhICsgJyknO1xuICAgIH1cbiAgICB0aGlzLnRvSGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgciA9IHRoaXMuci50b1N0cmluZygxNik7XG4gICAgICAgIHZhciBnID0gdGhpcy5nLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgdmFyIGIgPSB0aGlzLmIudG9TdHJpbmcoMTYpO1xuICAgICAgICBpZiAoci5sZW5ndGggPT0gMSkgciA9ICcwJyArIHI7XG4gICAgICAgIGlmIChnLmxlbmd0aCA9PSAxKSBnID0gJzAnICsgZztcbiAgICAgICAgaWYgKGIubGVuZ3RoID09IDEpIGIgPSAnMCcgKyBiO1xuICAgICAgICByZXR1cm4gJyMnICsgciArIGcgKyBiO1xuICAgIH1cblxuICAgIC8vIGhlbHBcbiAgICB0aGlzLmdldEhlbHBYTUwgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIGV4YW1wbGVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIC8vIGFkZCByZWdleHBzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sb3JfZGVmcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGV4YW1wbGUgPSBjb2xvcl9kZWZzW2ldLmV4YW1wbGU7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGV4YW1wbGUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBleGFtcGxlc1tleGFtcGxlcy5sZW5ndGhdID0gZXhhbXBsZVtqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBhZGQgdHlwZS1pbiBjb2xvcnNcbiAgICAgICAgZm9yICh2YXIgc2MgaW4gc2ltcGxlX2NvbG9ycykge1xuICAgICAgICAgICAgZXhhbXBsZXNbZXhhbXBsZXMubGVuZ3RoXSA9IHNjO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHhtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHhtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JnYmNvbG9yLWV4YW1wbGVzJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhhbXBsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RfaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RfY29sb3IgPSBuZXcgUkdCQ29sb3IoZXhhbXBsZXNbaV0pO1xuICAgICAgICAgICAgICAgIHZhciBleGFtcGxlX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGV4YW1wbGVfZGl2LnN0eWxlLmNzc1RleHQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgJ21hcmdpbjogM3B4OyAnXG4gICAgICAgICAgICAgICAgICAgICAgICArICdib3JkZXI6IDFweCBzb2xpZCBibGFjazsgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnYmFja2dyb3VuZDonICsgbGlzdF9jb2xvci50b0hleCgpICsgJzsgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnY29sb3I6JyArIGxpc3RfY29sb3IudG9IZXgoKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICBleGFtcGxlX2Rpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgndGVzdCcpKTtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdF9pdGVtX3ZhbHVlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgICAgICAgICAgICAgICAgICcgJyArIGV4YW1wbGVzW2ldICsgJyAtPiAnICsgbGlzdF9jb2xvci50b1JHQigpICsgJyAtPiAnICsgbGlzdF9jb2xvci50b0hleCgpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBsaXN0X2l0ZW0uYXBwZW5kQ2hpbGQoZXhhbXBsZV9kaXYpO1xuICAgICAgICAgICAgICAgIGxpc3RfaXRlbS5hcHBlbmRDaGlsZChsaXN0X2l0ZW1fdmFsdWUpO1xuICAgICAgICAgICAgICAgIHhtbC5hcHBlbmRDaGlsZChsaXN0X2l0ZW0pO1xuXG4gICAgICAgICAgICB9IGNhdGNoKGUpe31cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geG1sO1xuXG4gICAgfVxuXG59XG4iLCIvKlxuICAgIFN0YWNrQmx1ciAtIGEgZmFzdCBhbG1vc3QgR2F1c3NpYW4gQmx1ciBGb3IgQ2FudmFzXG5cbiAgICBWZXJzaW9uOiAgICAgMC41XG4gICAgQXV0aG9yOiAgICAgICAgTWFyaW8gS2xpbmdlbWFublxuICAgIENvbnRhY3Q6ICAgICBtYXJpb0BxdWFzaW1vbmRvLmNvbVxuICAgIFdlYnNpdGU6ICAgIGh0dHA6Ly93d3cucXVhc2ltb25kby5jb20vU3RhY2tCbHVyRm9yQ2FudmFzXG4gICAgVHdpdHRlcjogICAgQHF1YXNpbW9uZG9cblxuICAgIEluIGNhc2UgeW91IGZpbmQgdGhpcyBjbGFzcyB1c2VmdWwgLSBlc3BlY2lhbGx5IGluIGNvbW1lcmNpYWwgcHJvamVjdHMgLVxuICAgIEkgYW0gbm90IHRvdGFsbHkgdW5oYXBweSBmb3IgYSBzbWFsbCBkb25hdGlvbiB0byBteSBQYXlQYWwgYWNjb3VudFxuICAgIG1hcmlvQHF1YXNpbW9uZG8uZGVcblxuICAgIE9yIHN1cHBvcnQgbWUgb24gZmxhdHRyOlxuICAgIGh0dHBzOi8vZmxhdHRyLmNvbS90aGluZy83Mjc5MS9TdGFja0JsdXItYS1mYXN0LWFsbW9zdC1HYXVzc2lhbi1CbHVyLUVmZmVjdC1mb3ItQ2FudmFzSmF2YXNjcmlwdFxuXG4gICAgQ29weXJpZ2h0IChjKSAyMDEwIE1hcmlvIEtsaW5nZW1hbm5cblxuICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAgICBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXRcbiAgICByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcbiAgICBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICAgIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICAgIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nXG4gICAgY29uZGl0aW9uczpcblxuICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gICAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFU1xuICAgIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gICAgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFRcbiAgICBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSxcbiAgICBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAgICBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SXG4gICAgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICAgICovXG5cblxudmFyIG11bF90YWJsZSA9IFtcbiAgICA1MTIsNTEyLDQ1Niw1MTIsMzI4LDQ1NiwzMzUsNTEyLDQwNSwzMjgsMjcxLDQ1NiwzODgsMzM1LDI5Miw1MTIsXG4gICAgNDU0LDQwNSwzNjQsMzI4LDI5OCwyNzEsNDk2LDQ1Niw0MjAsMzg4LDM2MCwzMzUsMzEyLDI5MiwyNzMsNTEyLFxuICAgIDQ4Miw0NTQsNDI4LDQwNSwzODMsMzY0LDM0NSwzMjgsMzEyLDI5OCwyODQsMjcxLDI1OSw0OTYsNDc1LDQ1NixcbiAgICA0MzcsNDIwLDQwNCwzODgsMzc0LDM2MCwzNDcsMzM1LDMyMywzMTIsMzAyLDI5MiwyODIsMjczLDI2NSw1MTIsXG4gICAgNDk3LDQ4Miw0NjgsNDU0LDQ0MSw0MjgsNDE3LDQwNSwzOTQsMzgzLDM3MywzNjQsMzU0LDM0NSwzMzcsMzI4LFxuICAgIDMyMCwzMTIsMzA1LDI5OCwyOTEsMjg0LDI3OCwyNzEsMjY1LDI1OSw1MDcsNDk2LDQ4NSw0NzUsNDY1LDQ1NixcbiAgICA0NDYsNDM3LDQyOCw0MjAsNDEyLDQwNCwzOTYsMzg4LDM4MSwzNzQsMzY3LDM2MCwzNTQsMzQ3LDM0MSwzMzUsXG4gICAgMzI5LDMyMywzMTgsMzEyLDMwNywzMDIsMjk3LDI5MiwyODcsMjgyLDI3OCwyNzMsMjY5LDI2NSwyNjEsNTEyLFxuICAgIDUwNSw0OTcsNDg5LDQ4Miw0NzUsNDY4LDQ2MSw0NTQsNDQ3LDQ0MSw0MzUsNDI4LDQyMiw0MTcsNDExLDQwNSxcbiAgICAzOTksMzk0LDM4OSwzODMsMzc4LDM3MywzNjgsMzY0LDM1OSwzNTQsMzUwLDM0NSwzNDEsMzM3LDMzMiwzMjgsXG4gICAgMzI0LDMyMCwzMTYsMzEyLDMwOSwzMDUsMzAxLDI5OCwyOTQsMjkxLDI4NywyODQsMjgxLDI3OCwyNzQsMjcxLFxuICAgIDI2OCwyNjUsMjYyLDI1OSwyNTcsNTA3LDUwMSw0OTYsNDkxLDQ4NSw0ODAsNDc1LDQ3MCw0NjUsNDYwLDQ1NixcbiAgICA0NTEsNDQ2LDQ0Miw0MzcsNDMzLDQyOCw0MjQsNDIwLDQxNiw0MTIsNDA4LDQwNCw0MDAsMzk2LDM5MiwzODgsXG4gICAgMzg1LDM4MSwzNzcsMzc0LDM3MCwzNjcsMzYzLDM2MCwzNTcsMzU0LDM1MCwzNDcsMzQ0LDM0MSwzMzgsMzM1LFxuICAgIDMzMiwzMjksMzI2LDMyMywzMjAsMzE4LDMxNSwzMTIsMzEwLDMwNywzMDQsMzAyLDI5OSwyOTcsMjk0LDI5MixcbiAgICAyODksMjg3LDI4NSwyODIsMjgwLDI3OCwyNzUsMjczLDI3MSwyNjksMjY3LDI2NSwyNjMsMjYxLDI1OV07XG5cblxudmFyIHNoZ190YWJsZSA9IFtcbiAgICA5LCAxMSwgMTIsIDEzLCAxMywgMTQsIDE0LCAxNSwgMTUsIDE1LCAxNSwgMTYsIDE2LCAxNiwgMTYsIDE3LFxuICAgIDE3LCAxNywgMTcsIDE3LCAxNywgMTcsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE5LFxuICAgIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAyMCwgMjAsIDIwLFxuICAgIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIxLFxuICAgIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLFxuICAgIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLFxuICAgIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLFxuICAgIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIzLFxuICAgIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLFxuICAgIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLFxuICAgIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLFxuICAgIDIzLCAyMywgMjMsIDIzLCAyMywgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LFxuICAgIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LFxuICAgIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LFxuICAgIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LFxuICAgIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQgXTtcblxuXG5mdW5jdGlvbiBwcm9jZXNzSW1hZ2UoaW1nLCBjYW52YXMsIHJhZGl1cywgYmx1ckFscGhhQ2hhbm5lbClcbntcbiAgICBpZiAodHlwZW9mKGltZykgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGltZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBIVE1MSW1hZ2VFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhaW1nIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB3ID0gaW1nLm5hdHVyYWxXaWR0aDtcbiAgICB2YXIgaCA9IGltZy5uYXR1cmFsSGVpZ2h0O1xuXG4gICAgaWYgKHR5cGVvZihjYW52YXMpID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXMpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgSFRNTENhbnZhc0VsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmICFjYW52YXMgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2FudmFzLnN0eWxlLndpZHRoICA9IHcgKyAncHgnO1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4JztcbiAgICBjYW52YXMud2lkdGggPSB3O1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoO1xuXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3LCBoKTtcbiAgICBjb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuXG4gICAgaWYgKGlzTmFOKHJhZGl1cykgfHwgcmFkaXVzIDwgMSkgcmV0dXJuO1xuXG4gICAgaWYgKGJsdXJBbHBoYUNoYW5uZWwpXG4gICAgICAgIHByb2Nlc3NDYW52YXNSR0JBKGNhbnZhcywgMCwgMCwgdywgaCwgcmFkaXVzKTtcbiAgICBlbHNlXG4gICAgICAgIHByb2Nlc3NDYW52YXNSR0IoY2FudmFzLCAwLCAwLCB3LCBoLCByYWRpdXMpO1xufVxuXG5mdW5jdGlvbiBnZXRJbWFnZURhdGFGcm9tQ2FudmFzKGNhbnZhcywgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0KVxue1xuICAgIGlmICh0eXBlb2YoY2FudmFzKSA9PSAnc3RyaW5nJylcbiAgICAgICAgdmFyIGNhbnZhcyAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXMpO1xuICAgIGVsc2UgaWYgKHR5cGVvZiBIVE1MQ2FudmFzRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIWNhbnZhcyBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KVxuICAgICAgICByZXR1cm47XG5cbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHZhciBpbWFnZURhdGE7XG5cbiAgICB0cnkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaW1hZ2VEYXRhID0gY29udGV4dC5nZXRJbWFnZURhdGEodG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmFibGUgdG8gYWNjZXNzIGxvY2FsIGltYWdlIGRhdGE6IFwiICsgZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5hYmxlIHRvIGFjY2VzcyBpbWFnZSBkYXRhOiBcIiArIGUpO1xuICAgIH1cblxuICAgIHJldHVybiBpbWFnZURhdGE7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NDYW52YXNSR0JBKGNhbnZhcywgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpXG57XG4gICAgaWYgKGlzTmFOKHJhZGl1cykgfHwgcmFkaXVzIDwgMSkgcmV0dXJuO1xuICAgIHJhZGl1cyB8PSAwO1xuXG4gICAgdmFyIGltYWdlRGF0YSA9IGdldEltYWdlRGF0YUZyb21DYW52YXMoY2FudmFzLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgaW1hZ2VEYXRhID0gcHJvY2Vzc0ltYWdlRGF0YVJHQkEoaW1hZ2VEYXRhLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cyk7XG5cbiAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCB0b3BfeCwgdG9wX3kpO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzSW1hZ2VEYXRhUkdCQShpbWFnZURhdGEsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKVxue1xuICAgIHZhciBwaXhlbHMgPSBpbWFnZURhdGEuZGF0YTtcblxuICAgIHZhciB4LCB5LCBpLCBwLCB5cCwgeWksIHl3LCByX3N1bSwgZ19zdW0sIGJfc3VtLCBhX3N1bSxcbiAgICAgICAgcl9vdXRfc3VtLCBnX291dF9zdW0sIGJfb3V0X3N1bSwgYV9vdXRfc3VtLFxuICAgICAgICByX2luX3N1bSwgZ19pbl9zdW0sIGJfaW5fc3VtLCBhX2luX3N1bSxcbiAgICAgICAgcHIsIHBnLCBwYiwgcGEsIHJicztcblxuICAgIHZhciBkaXYgPSByYWRpdXMgKyByYWRpdXMgKyAxO1xuICAgIHZhciB3NCA9IHdpZHRoIDw8IDI7XG4gICAgdmFyIHdpZHRoTWludXMxICA9IHdpZHRoIC0gMTtcbiAgICB2YXIgaGVpZ2h0TWludXMxID0gaGVpZ2h0IC0gMTtcbiAgICB2YXIgcmFkaXVzUGx1czEgID0gcmFkaXVzICsgMTtcbiAgICB2YXIgc3VtRmFjdG9yID0gcmFkaXVzUGx1czEgKiAocmFkaXVzUGx1czEgKyAxKSAvIDI7XG5cbiAgICB2YXIgc3RhY2tTdGFydCA9IG5ldyBCbHVyU3RhY2soKTtcbiAgICB2YXIgc3RhY2sgPSBzdGFja1N0YXJ0O1xuICAgIGZvciAoaSA9IDE7IGkgPCBkaXY7IGkrKylcbiAgICB7XG4gICAgICAgIHN0YWNrID0gc3RhY2submV4dCA9IG5ldyBCbHVyU3RhY2soKTtcbiAgICAgICAgaWYgKGkgPT0gcmFkaXVzUGx1czEpIHZhciBzdGFja0VuZCA9IHN0YWNrO1xuICAgIH1cbiAgICBzdGFjay5uZXh0ID0gc3RhY2tTdGFydDtcbiAgICB2YXIgc3RhY2tJbiA9IG51bGw7XG4gICAgdmFyIHN0YWNrT3V0ID0gbnVsbDtcblxuICAgIHl3ID0geWkgPSAwO1xuXG4gICAgdmFyIG11bF9zdW0gPSBtdWxfdGFibGVbcmFkaXVzXTtcbiAgICB2YXIgc2hnX3N1bSA9IHNoZ190YWJsZVtyYWRpdXNdO1xuXG4gICAgZm9yICh5ID0gMDsgeSA8IGhlaWdodDsgeSsrKVxuICAgIHtcbiAgICAgICAgcl9pbl9zdW0gPSBnX2luX3N1bSA9IGJfaW5fc3VtID0gYV9pbl9zdW0gPSByX3N1bSA9IGdfc3VtID0gYl9zdW0gPSBhX3N1bSA9IDA7XG5cbiAgICAgICAgcl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocHIgPSBwaXhlbHNbeWldKTtcbiAgICAgICAgZ19vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGcgPSBwaXhlbHNbeWkrMV0pO1xuICAgICAgICBiX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwYiA9IHBpeGVsc1t5aSsyXSk7XG4gICAgICAgIGFfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBhID0gcGl4ZWxzW3lpKzNdKTtcblxuICAgICAgICByX3N1bSArPSBzdW1GYWN0b3IgKiBwcjtcbiAgICAgICAgZ19zdW0gKz0gc3VtRmFjdG9yICogcGc7XG4gICAgICAgIGJfc3VtICs9IHN1bUZhY3RvciAqIHBiO1xuICAgICAgICBhX3N1bSArPSBzdW1GYWN0b3IgKiBwYTtcblxuICAgICAgICBzdGFjayA9IHN0YWNrU3RhcnQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJhZGl1c1BsdXMxOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN0YWNrLnIgPSBwcjtcbiAgICAgICAgICAgIHN0YWNrLmcgPSBwZztcbiAgICAgICAgICAgIHN0YWNrLmIgPSBwYjtcbiAgICAgICAgICAgIHN0YWNrLmEgPSBwYTtcbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCByYWRpdXNQbHVzMTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBwID0geWkgKyAoKHdpZHRoTWludXMxIDwgaSA/IHdpZHRoTWludXMxIDogaSkgPDwgMik7XG4gICAgICAgICAgICByX3N1bSArPSAoc3RhY2suciA9IChwciA9IHBpeGVsc1twXSkpICogKHJicyA9IHJhZGl1c1BsdXMxIC0gaSk7XG4gICAgICAgICAgICBnX3N1bSArPSAoc3RhY2suZyA9IChwZyA9IHBpeGVsc1twKzFdKSkgKiByYnM7XG4gICAgICAgICAgICBiX3N1bSArPSAoc3RhY2suYiA9IChwYiA9IHBpeGVsc1twKzJdKSkgKiByYnM7XG4gICAgICAgICAgICBhX3N1bSArPSAoc3RhY2suYSA9IChwYSA9IHBpeGVsc1twKzNdKSkgKiByYnM7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtICs9IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gKz0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSArPSBwYjtcbiAgICAgICAgICAgIGFfaW5fc3VtICs9IHBhO1xuXG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHN0YWNrSW4gPSBzdGFja1N0YXJ0O1xuICAgICAgICBzdGFja091dCA9IHN0YWNrRW5kO1xuICAgICAgICBmb3IgKHggPSAwOyB4IDwgd2lkdGg7IHgrKylcbiAgICAgICAge1xuICAgICAgICAgICAgcGl4ZWxzW3lpKzNdID0gcGEgPSAoYV9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuICAgICAgICAgICAgaWYgKHBhICE9IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGEgPSAyNTUgLyBwYTtcbiAgICAgICAgICAgICAgICBwaXhlbHNbeWldICAgPSAoKHJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bSkgKiBwYTtcbiAgICAgICAgICAgICAgICBwaXhlbHNbeWkrMV0gPSAoKGdfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bSkgKiBwYTtcbiAgICAgICAgICAgICAgICBwaXhlbHNbeWkrMl0gPSAoKGJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bSkgKiBwYTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3lpXSA9IHBpeGVsc1t5aSsxXSA9IHBpeGVsc1t5aSsyXSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJfc3VtIC09IHJfb3V0X3N1bTtcbiAgICAgICAgICAgIGdfc3VtIC09IGdfb3V0X3N1bTtcbiAgICAgICAgICAgIGJfc3VtIC09IGJfb3V0X3N1bTtcbiAgICAgICAgICAgIGFfc3VtIC09IGFfb3V0X3N1bTtcblxuICAgICAgICAgICAgcl9vdXRfc3VtIC09IHN0YWNrSW4ucjtcbiAgICAgICAgICAgIGdfb3V0X3N1bSAtPSBzdGFja0luLmc7XG4gICAgICAgICAgICBiX291dF9zdW0gLT0gc3RhY2tJbi5iO1xuICAgICAgICAgICAgYV9vdXRfc3VtIC09IHN0YWNrSW4uYTtcblxuICAgICAgICAgICAgcCA9ICAoeXcgKyAoKHAgPSB4ICsgcmFkaXVzICsgMSkgPCB3aWR0aE1pbnVzMSA/IHAgOiB3aWR0aE1pbnVzMSkpIDw8IDI7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtICs9IChzdGFja0luLnIgPSBwaXhlbHNbcF0pO1xuICAgICAgICAgICAgZ19pbl9zdW0gKz0gKHN0YWNrSW4uZyA9IHBpeGVsc1twKzFdKTtcbiAgICAgICAgICAgIGJfaW5fc3VtICs9IChzdGFja0luLmIgPSBwaXhlbHNbcCsyXSk7XG4gICAgICAgICAgICBhX2luX3N1bSArPSAoc3RhY2tJbi5hID0gcGl4ZWxzW3ArM10pO1xuXG4gICAgICAgICAgICByX3N1bSArPSByX2luX3N1bTtcbiAgICAgICAgICAgIGdfc3VtICs9IGdfaW5fc3VtO1xuICAgICAgICAgICAgYl9zdW0gKz0gYl9pbl9zdW07XG4gICAgICAgICAgICBhX3N1bSArPSBhX2luX3N1bTtcblxuICAgICAgICAgICAgc3RhY2tJbiA9IHN0YWNrSW4ubmV4dDtcblxuICAgICAgICAgICAgcl9vdXRfc3VtICs9IChwciA9IHN0YWNrT3V0LnIpO1xuICAgICAgICAgICAgZ19vdXRfc3VtICs9IChwZyA9IHN0YWNrT3V0LmcpO1xuICAgICAgICAgICAgYl9vdXRfc3VtICs9IChwYiA9IHN0YWNrT3V0LmIpO1xuICAgICAgICAgICAgYV9vdXRfc3VtICs9IChwYSA9IHN0YWNrT3V0LmEpO1xuXG4gICAgICAgICAgICByX2luX3N1bSAtPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtIC09IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gLT0gcGI7XG4gICAgICAgICAgICBhX2luX3N1bSAtPSBwYTtcblxuICAgICAgICAgICAgc3RhY2tPdXQgPSBzdGFja091dC5uZXh0O1xuXG4gICAgICAgICAgICB5aSArPSA0O1xuICAgICAgICB9XG4gICAgICAgIHl3ICs9IHdpZHRoO1xuICAgIH1cblxuXG4gICAgZm9yICh4ID0gMDsgeCA8IHdpZHRoOyB4KyspXG4gICAge1xuICAgICAgICBnX2luX3N1bSA9IGJfaW5fc3VtID0gYV9pbl9zdW0gPSByX2luX3N1bSA9IGdfc3VtID0gYl9zdW0gPSBhX3N1bSA9IHJfc3VtID0gMDtcblxuICAgICAgICB5aSA9IHggPDwgMjtcbiAgICAgICAgcl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocHIgPSBwaXhlbHNbeWldKTtcbiAgICAgICAgZ19vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGcgPSBwaXhlbHNbeWkrMV0pO1xuICAgICAgICBiX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwYiA9IHBpeGVsc1t5aSsyXSk7XG4gICAgICAgIGFfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBhID0gcGl4ZWxzW3lpKzNdKTtcblxuICAgICAgICByX3N1bSArPSBzdW1GYWN0b3IgKiBwcjtcbiAgICAgICAgZ19zdW0gKz0gc3VtRmFjdG9yICogcGc7XG4gICAgICAgIGJfc3VtICs9IHN1bUZhY3RvciAqIHBiO1xuICAgICAgICBhX3N1bSArPSBzdW1GYWN0b3IgKiBwYTtcblxuICAgICAgICBzdGFjayA9IHN0YWNrU3RhcnQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJhZGl1c1BsdXMxOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN0YWNrLnIgPSBwcjtcbiAgICAgICAgICAgIHN0YWNrLmcgPSBwZztcbiAgICAgICAgICAgIHN0YWNrLmIgPSBwYjtcbiAgICAgICAgICAgIHN0YWNrLmEgPSBwYTtcbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHlwID0gd2lkdGg7XG5cbiAgICAgICAgZm9yIChpID0gMTsgaSA8PSByYWRpdXM7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgeWkgPSAoeXAgKyB4KSA8PCAyO1xuXG4gICAgICAgICAgICByX3N1bSArPSAoc3RhY2suciA9IChwciA9IHBpeGVsc1t5aV0pKSAqIChyYnMgPSByYWRpdXNQbHVzMSAtIGkpO1xuICAgICAgICAgICAgZ19zdW0gKz0gKHN0YWNrLmcgPSAocGcgPSBwaXhlbHNbeWkrMV0pKSAqIHJicztcbiAgICAgICAgICAgIGJfc3VtICs9IChzdGFjay5iID0gKHBiID0gcGl4ZWxzW3lpKzJdKSkgKiByYnM7XG4gICAgICAgICAgICBhX3N1bSArPSAoc3RhY2suYSA9IChwYSA9IHBpeGVsc1t5aSszXSkpICogcmJzO1xuXG4gICAgICAgICAgICByX2luX3N1bSArPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtICs9IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gKz0gcGI7XG4gICAgICAgICAgICBhX2luX3N1bSArPSBwYTtcblxuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuXG4gICAgICAgICAgICBpZihpIDwgaGVpZ2h0TWludXMxKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHlwICs9IHdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgeWkgPSB4O1xuICAgICAgICBzdGFja0luID0gc3RhY2tTdGFydDtcbiAgICAgICAgc3RhY2tPdXQgPSBzdGFja0VuZDtcbiAgICAgICAgZm9yICh5ID0gMDsgeSA8IGhlaWdodDsgeSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBwID0geWkgPDwgMjtcbiAgICAgICAgICAgIHBpeGVsc1twKzNdID0gcGEgPSAoYV9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuICAgICAgICAgICAgaWYgKHBhID4gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYSA9IDI1NSAvIHBhO1xuICAgICAgICAgICAgICAgIHBpeGVsc1twXSAgID0gKChyX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW0pICogcGE7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3ArMV0gPSAoKGdfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bSkgKiBwYTtcbiAgICAgICAgICAgICAgICBwaXhlbHNbcCsyXSA9ICgoYl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtKSAqIHBhO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwaXhlbHNbcF0gPSBwaXhlbHNbcCsxXSA9IHBpeGVsc1twKzJdID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcl9zdW0gLT0gcl9vdXRfc3VtO1xuICAgICAgICAgICAgZ19zdW0gLT0gZ19vdXRfc3VtO1xuICAgICAgICAgICAgYl9zdW0gLT0gYl9vdXRfc3VtO1xuICAgICAgICAgICAgYV9zdW0gLT0gYV9vdXRfc3VtO1xuXG4gICAgICAgICAgICByX291dF9zdW0gLT0gc3RhY2tJbi5yO1xuICAgICAgICAgICAgZ19vdXRfc3VtIC09IHN0YWNrSW4uZztcbiAgICAgICAgICAgIGJfb3V0X3N1bSAtPSBzdGFja0luLmI7XG4gICAgICAgICAgICBhX291dF9zdW0gLT0gc3RhY2tJbi5hO1xuXG4gICAgICAgICAgICBwID0gKHggKyAoKChwID0geSArIHJhZGl1c1BsdXMxKSA8IGhlaWdodE1pbnVzMSA/IHAgOiBoZWlnaHRNaW51czEpICogd2lkdGgpKSA8PCAyO1xuXG4gICAgICAgICAgICByX3N1bSArPSAocl9pbl9zdW0gKz0gKHN0YWNrSW4uciA9IHBpeGVsc1twXSkpO1xuICAgICAgICAgICAgZ19zdW0gKz0gKGdfaW5fc3VtICs9IChzdGFja0luLmcgPSBwaXhlbHNbcCsxXSkpO1xuICAgICAgICAgICAgYl9zdW0gKz0gKGJfaW5fc3VtICs9IChzdGFja0luLmIgPSBwaXhlbHNbcCsyXSkpO1xuICAgICAgICAgICAgYV9zdW0gKz0gKGFfaW5fc3VtICs9IChzdGFja0luLmEgPSBwaXhlbHNbcCszXSkpO1xuXG4gICAgICAgICAgICBzdGFja0luID0gc3RhY2tJbi5uZXh0O1xuXG4gICAgICAgICAgICByX291dF9zdW0gKz0gKHByID0gc3RhY2tPdXQucik7XG4gICAgICAgICAgICBnX291dF9zdW0gKz0gKHBnID0gc3RhY2tPdXQuZyk7XG4gICAgICAgICAgICBiX291dF9zdW0gKz0gKHBiID0gc3RhY2tPdXQuYik7XG4gICAgICAgICAgICBhX291dF9zdW0gKz0gKHBhID0gc3RhY2tPdXQuYSk7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtIC09IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gLT0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSAtPSBwYjtcbiAgICAgICAgICAgIGFfaW5fc3VtIC09IHBhO1xuXG4gICAgICAgICAgICBzdGFja091dCA9IHN0YWNrT3V0Lm5leHQ7XG5cbiAgICAgICAgICAgIHlpICs9IHdpZHRoO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbWFnZURhdGE7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NDYW52YXNSR0IoY2FudmFzLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cylcbntcbiAgICBpZiAoaXNOYU4ocmFkaXVzKSB8fCByYWRpdXMgPCAxKSByZXR1cm47XG4gICAgcmFkaXVzIHw9IDA7XG5cbiAgICB2YXIgaW1hZ2VEYXRhID0gZ2V0SW1hZ2VEYXRhRnJvbUNhbnZhcyhjYW52YXMsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgaW1hZ2VEYXRhID0gcHJvY2Vzc0ltYWdlRGF0YVJHQihpbWFnZURhdGEsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKTtcblxuICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLnB1dEltYWdlRGF0YShpbWFnZURhdGEsIHRvcF94LCB0b3BfeSk7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NJbWFnZURhdGFSR0IoaW1hZ2VEYXRhLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cylcbntcbiAgICB2YXIgcGl4ZWxzID0gaW1hZ2VEYXRhLmRhdGE7XG5cbiAgICB2YXIgeCwgeSwgaSwgcCwgeXAsIHlpLCB5dywgcl9zdW0sIGdfc3VtLCBiX3N1bSxcbiAgICAgICAgcl9vdXRfc3VtLCBnX291dF9zdW0sIGJfb3V0X3N1bSxcbiAgICAgICAgcl9pbl9zdW0sIGdfaW5fc3VtLCBiX2luX3N1bSxcbiAgICAgICAgcHIsIHBnLCBwYiwgcmJzO1xuXG4gICAgdmFyIGRpdiA9IHJhZGl1cyArIHJhZGl1cyArIDE7XG4gICAgdmFyIHc0ID0gd2lkdGggPDwgMjtcbiAgICB2YXIgd2lkdGhNaW51czEgID0gd2lkdGggLSAxO1xuICAgIHZhciBoZWlnaHRNaW51czEgPSBoZWlnaHQgLSAxO1xuICAgIHZhciByYWRpdXNQbHVzMSAgPSByYWRpdXMgKyAxO1xuICAgIHZhciBzdW1GYWN0b3IgPSByYWRpdXNQbHVzMSAqIChyYWRpdXNQbHVzMSArIDEpIC8gMjtcblxuICAgIHZhciBzdGFja1N0YXJ0ID0gbmV3IEJsdXJTdGFjaygpO1xuICAgIHZhciBzdGFjayA9IHN0YWNrU3RhcnQ7XG4gICAgZm9yIChpID0gMTsgaSA8IGRpdjsgaSsrKVxuICAgIHtcbiAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0ID0gbmV3IEJsdXJTdGFjaygpO1xuICAgICAgICBpZiAoaSA9PSByYWRpdXNQbHVzMSkgdmFyIHN0YWNrRW5kID0gc3RhY2s7XG4gICAgfVxuICAgIHN0YWNrLm5leHQgPSBzdGFja1N0YXJ0O1xuICAgIHZhciBzdGFja0luID0gbnVsbDtcbiAgICB2YXIgc3RhY2tPdXQgPSBudWxsO1xuXG4gICAgeXcgPSB5aSA9IDA7XG5cbiAgICB2YXIgbXVsX3N1bSA9IG11bF90YWJsZVtyYWRpdXNdO1xuICAgIHZhciBzaGdfc3VtID0gc2hnX3RhYmxlW3JhZGl1c107XG5cbiAgICBmb3IgKHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspXG4gICAge1xuICAgICAgICByX2luX3N1bSA9IGdfaW5fc3VtID0gYl9pbl9zdW0gPSByX3N1bSA9IGdfc3VtID0gYl9zdW0gPSAwO1xuXG4gICAgICAgIHJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHByID0gcGl4ZWxzW3lpXSk7XG4gICAgICAgIGdfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBnID0gcGl4ZWxzW3lpKzFdKTtcbiAgICAgICAgYl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGIgPSBwaXhlbHNbeWkrMl0pO1xuXG4gICAgICAgIHJfc3VtICs9IHN1bUZhY3RvciAqIHByO1xuICAgICAgICBnX3N1bSArPSBzdW1GYWN0b3IgKiBwZztcbiAgICAgICAgYl9zdW0gKz0gc3VtRmFjdG9yICogcGI7XG5cbiAgICAgICAgc3RhY2sgPSBzdGFja1N0YXJ0O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByYWRpdXNQbHVzMTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdGFjay5yID0gcHI7XG4gICAgICAgICAgICBzdGFjay5nID0gcGc7XG4gICAgICAgICAgICBzdGFjay5iID0gcGI7XG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgcmFkaXVzUGx1czE7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgcCA9IHlpICsgKCh3aWR0aE1pbnVzMSA8IGkgPyB3aWR0aE1pbnVzMSA6IGkpIDw8IDIpO1xuICAgICAgICAgICAgcl9zdW0gKz0gKHN0YWNrLnIgPSAocHIgPSBwaXhlbHNbcF0pKSAqIChyYnMgPSByYWRpdXNQbHVzMSAtIGkpO1xuICAgICAgICAgICAgZ19zdW0gKz0gKHN0YWNrLmcgPSAocGcgPSBwaXhlbHNbcCsxXSkpICogcmJzO1xuICAgICAgICAgICAgYl9zdW0gKz0gKHN0YWNrLmIgPSAocGIgPSBwaXhlbHNbcCsyXSkpICogcmJzO1xuXG4gICAgICAgICAgICByX2luX3N1bSArPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtICs9IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gKz0gcGI7XG5cbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc3RhY2tJbiA9IHN0YWNrU3RhcnQ7XG4gICAgICAgIHN0YWNrT3V0ID0gc3RhY2tFbmQ7XG4gICAgICAgIGZvciAoeCA9IDA7IHggPCB3aWR0aDsgeCsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBwaXhlbHNbeWldICAgPSAocl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuICAgICAgICAgICAgcGl4ZWxzW3lpKzFdID0gKGdfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcbiAgICAgICAgICAgIHBpeGVsc1t5aSsyXSA9IChiX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG5cbiAgICAgICAgICAgIHJfc3VtIC09IHJfb3V0X3N1bTtcbiAgICAgICAgICAgIGdfc3VtIC09IGdfb3V0X3N1bTtcbiAgICAgICAgICAgIGJfc3VtIC09IGJfb3V0X3N1bTtcblxuICAgICAgICAgICAgcl9vdXRfc3VtIC09IHN0YWNrSW4ucjtcbiAgICAgICAgICAgIGdfb3V0X3N1bSAtPSBzdGFja0luLmc7XG4gICAgICAgICAgICBiX291dF9zdW0gLT0gc3RhY2tJbi5iO1xuXG4gICAgICAgICAgICBwID0gICh5dyArICgocCA9IHggKyByYWRpdXMgKyAxKSA8IHdpZHRoTWludXMxID8gcCA6IHdpZHRoTWludXMxKSkgPDwgMjtcblxuICAgICAgICAgICAgcl9pbl9zdW0gKz0gKHN0YWNrSW4uciA9IHBpeGVsc1twXSk7XG4gICAgICAgICAgICBnX2luX3N1bSArPSAoc3RhY2tJbi5nID0gcGl4ZWxzW3ArMV0pO1xuICAgICAgICAgICAgYl9pbl9zdW0gKz0gKHN0YWNrSW4uYiA9IHBpeGVsc1twKzJdKTtcblxuICAgICAgICAgICAgcl9zdW0gKz0gcl9pbl9zdW07XG4gICAgICAgICAgICBnX3N1bSArPSBnX2luX3N1bTtcbiAgICAgICAgICAgIGJfc3VtICs9IGJfaW5fc3VtO1xuXG4gICAgICAgICAgICBzdGFja0luID0gc3RhY2tJbi5uZXh0O1xuXG4gICAgICAgICAgICByX291dF9zdW0gKz0gKHByID0gc3RhY2tPdXQucik7XG4gICAgICAgICAgICBnX291dF9zdW0gKz0gKHBnID0gc3RhY2tPdXQuZyk7XG4gICAgICAgICAgICBiX291dF9zdW0gKz0gKHBiID0gc3RhY2tPdXQuYik7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtIC09IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gLT0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSAtPSBwYjtcblxuICAgICAgICAgICAgc3RhY2tPdXQgPSBzdGFja091dC5uZXh0O1xuXG4gICAgICAgICAgICB5aSArPSA0O1xuICAgICAgICB9XG4gICAgICAgIHl3ICs9IHdpZHRoO1xuICAgIH1cblxuXG4gICAgZm9yICh4ID0gMDsgeCA8IHdpZHRoOyB4KyspXG4gICAge1xuICAgICAgICBnX2luX3N1bSA9IGJfaW5fc3VtID0gcl9pbl9zdW0gPSBnX3N1bSA9IGJfc3VtID0gcl9zdW0gPSAwO1xuXG4gICAgICAgIHlpID0geCA8PCAyO1xuICAgICAgICByX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwciA9IHBpeGVsc1t5aV0pO1xuICAgICAgICBnX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwZyA9IHBpeGVsc1t5aSsxXSk7XG4gICAgICAgIGJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBiID0gcGl4ZWxzW3lpKzJdKTtcblxuICAgICAgICByX3N1bSArPSBzdW1GYWN0b3IgKiBwcjtcbiAgICAgICAgZ19zdW0gKz0gc3VtRmFjdG9yICogcGc7XG4gICAgICAgIGJfc3VtICs9IHN1bUZhY3RvciAqIHBiO1xuXG4gICAgICAgIHN0YWNrID0gc3RhY2tTdGFydDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmFkaXVzUGx1czE7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgc3RhY2suciA9IHByO1xuICAgICAgICAgICAgc3RhY2suZyA9IHBnO1xuICAgICAgICAgICAgc3RhY2suYiA9IHBiO1xuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgeXAgPSB3aWR0aDtcblxuICAgICAgICBmb3IgKGkgPSAxOyBpIDw9IHJhZGl1czsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB5aSA9ICh5cCArIHgpIDw8IDI7XG5cbiAgICAgICAgICAgIHJfc3VtICs9IChzdGFjay5yID0gKHByID0gcGl4ZWxzW3lpXSkpICogKHJicyA9IHJhZGl1c1BsdXMxIC0gaSk7XG4gICAgICAgICAgICBnX3N1bSArPSAoc3RhY2suZyA9IChwZyA9IHBpeGVsc1t5aSsxXSkpICogcmJzO1xuICAgICAgICAgICAgYl9zdW0gKz0gKHN0YWNrLmIgPSAocGIgPSBwaXhlbHNbeWkrMl0pKSAqIHJicztcblxuICAgICAgICAgICAgcl9pbl9zdW0gKz0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSArPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtICs9IHBiO1xuXG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG5cbiAgICAgICAgICAgIGlmKGkgPCBoZWlnaHRNaW51czEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeXAgKz0gd2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB5aSA9IHg7XG4gICAgICAgIHN0YWNrSW4gPSBzdGFja1N0YXJ0O1xuICAgICAgICBzdGFja091dCA9IHN0YWNrRW5kO1xuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHAgPSB5aSA8PCAyO1xuICAgICAgICAgICAgcGl4ZWxzW3BdICAgPSAocl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuICAgICAgICAgICAgcGl4ZWxzW3ArMV0gPSAoZ19zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuICAgICAgICAgICAgcGl4ZWxzW3ArMl0gPSAoYl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuXG4gICAgICAgICAgICByX3N1bSAtPSByX291dF9zdW07XG4gICAgICAgICAgICBnX3N1bSAtPSBnX291dF9zdW07XG4gICAgICAgICAgICBiX3N1bSAtPSBiX291dF9zdW07XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSAtPSBzdGFja0luLnI7XG4gICAgICAgICAgICBnX291dF9zdW0gLT0gc3RhY2tJbi5nO1xuICAgICAgICAgICAgYl9vdXRfc3VtIC09IHN0YWNrSW4uYjtcblxuICAgICAgICAgICAgcCA9ICh4ICsgKCgocCA9IHkgKyByYWRpdXNQbHVzMSkgPCBoZWlnaHRNaW51czEgPyBwIDogaGVpZ2h0TWludXMxKSAqIHdpZHRoKSkgPDwgMjtcblxuICAgICAgICAgICAgcl9zdW0gKz0gKHJfaW5fc3VtICs9IChzdGFja0luLnIgPSBwaXhlbHNbcF0pKTtcbiAgICAgICAgICAgIGdfc3VtICs9IChnX2luX3N1bSArPSAoc3RhY2tJbi5nID0gcGl4ZWxzW3ArMV0pKTtcbiAgICAgICAgICAgIGJfc3VtICs9IChiX2luX3N1bSArPSAoc3RhY2tJbi5iID0gcGl4ZWxzW3ArMl0pKTtcblxuICAgICAgICAgICAgc3RhY2tJbiA9IHN0YWNrSW4ubmV4dDtcblxuICAgICAgICAgICAgcl9vdXRfc3VtICs9IChwciA9IHN0YWNrT3V0LnIpO1xuICAgICAgICAgICAgZ19vdXRfc3VtICs9IChwZyA9IHN0YWNrT3V0LmcpO1xuICAgICAgICAgICAgYl9vdXRfc3VtICs9IChwYiA9IHN0YWNrT3V0LmIpO1xuXG4gICAgICAgICAgICByX2luX3N1bSAtPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtIC09IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gLT0gcGI7XG5cbiAgICAgICAgICAgIHN0YWNrT3V0ID0gc3RhY2tPdXQubmV4dDtcblxuICAgICAgICAgICAgeWkgKz0gd2lkdGg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW1hZ2VEYXRhO1xufVxuXG5mdW5jdGlvbiBCbHVyU3RhY2soKVxue1xuICAgIHRoaXMuciA9IDA7XG4gICAgdGhpcy5nID0gMDtcbiAgICB0aGlzLmIgPSAwO1xuICAgIHRoaXMuYSA9IDA7XG4gICAgdGhpcy5uZXh0ID0gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaW1hZ2U6IHByb2Nlc3NJbWFnZSxcbiAgICBjYW52YXNSR0JBOiBwcm9jZXNzQ2FudmFzUkdCQSxcbiAgICBjYW52YXNSR0I6IHByb2Nlc3NDYW52YXNSR0IsXG4gICAgaW1hZ2VEYXRhUkdCQTogcHJvY2Vzc0ltYWdlRGF0YVJHQkEsXG4gICAgaW1hZ2VEYXRhUkdCOiBwcm9jZXNzSW1hZ2VEYXRhUkdCXG59O1xuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuXG5jb25zdCBwcm90b0NoYXJ0ID0ge1xuICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICBtYXJnaW46IHtcbiAgICAgIGxlZnQ6IDEwLFxuICAgICAgcmlnaHQ6IDEwLFxuICAgICAgdG9wOiAxMCxcbiAgICAgIGJvdHRvbTogMTAsXG4gICAgfSxcbiAgfTtcbiAgXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFydEZhY3Rvcnkob3B0cywgcHJvdG8gPSBwcm90b0NoYXJ0KSB7XG5cbiAgY29uc3QgY2hhcnQgPSBPYmplY3QuYXNzaWduKHt9LCBwcm90bywgb3B0cyk7XG4gIGlmKG9wdHMucGFyZW50SWQpIGNoYXJ0LnBhcmVudCA9IGQzLnNlbGVjdChgIyR7b3B0cy5wYXJlbnRJZH1gKTtcbiAgZWxzZSBkMy5zZWxlY3QoJ2JvZHknKTtcblxuICBjaGFydC5zdmcgPSBjaGFydC5wYXJlbnRcbiAgICAuYXBwZW5kKCdzdmcnKS5sb3dlcigpXG4gICAgLmF0dHIoJ2lkJywgY2hhcnQuaWQgfHwgJ2NoYXJ0JylcbiAgICAuYXR0cignd2lkdGgnLCBjaGFydC53aWR0aCAtIGNoYXJ0Lm1hcmdpbi5yaWdodClcbiAgICAuYXR0cignaGVpZ2h0JywgY2hhcnQuaGVpZ2h0IC0gY2hhcnQubWFyZ2luLmJvdHRvbSk7XG5cbiAgaWYgKG9wdHMuc3R5bGVDbGFzcykgY2hhcnQuc3ZnLmF0dHIoJ2NsYXNzJywgb3B0cy5zdHlsZUNsYXNzKTtcblxuICBpZiAob3B0cy5kcmF3QmFja2dyb3VuZCkgY2hhcnQuc3ZnLmFwcGVuZCgncmVjdCcpXG4gICAgLmF0dHIoJ2lkJywgJ2JhY2tncm91bmQnKVxuICAgIC5hdHRyKCd3aWR0aCcsJzEwMCUnKS5hdHRyKCdoZWlnaHQnLCcxMDAlJylcbiAgICAuYXR0cignZmlsbCcsICcjZmZmZmZmJyk7IFxuICAgIC8vIC5hdHRyKCdmaWxsJywgJ3JnYmEoMjU1LDAsMCwuMiknKTtcblxuICBjaGFydC5jb250YWluZXIgPSBjaGFydC5zdmcuYXBwZW5kKCdnJylcbiAgICAuYXR0cignaWQnLCAnY29udGFpbmVyJylcbiAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke2NoYXJ0Lm1hcmdpbi5sZWZ0fSwgJHtjaGFydC5tYXJnaW4udG9wfSlgKTtcblxuICByZXR1cm4gY2hhcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXRDaGFydChjaGFydCwgcGFkZGluZykge1xuICAvLyBjYWxjdWxhdGUgcmVhbCBkaW1lbnNpb25zIG9mIGEgY2hhcnQgKGFzc3VtZXMgY2hhcnQgaXMgYSBnLWVsZW1lbnQgd3JhcHBlZCBpbnNpZGUgYW4gc3ZnKVxuICBkMy5zZWxlY3QoY2hhcnQubm9kZSgpLnBhcmVudEVsZW1lbnQpXG4gICAgICAuYXR0cignd2lkdGgnLCBjaGFydC5ub2RlKCkuZ2V0QkJveCgpLndpZHRoICsgcGFkZGluZy5sZWZ0ICsgcGFkZGluZy5yaWdodClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBjaGFydC5ub2RlKCkuZ2V0QkJveCgpLmhlaWdodCArIHBhZGRpbmcudG9wICsgcGFkZGluZy5ib3R0b20pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVhbERlcHRoKGQpIHtcbiAgLy8gY2FsY3VsYXRlcyB0aGUgcmVhbCBkZXB0aCBvZiBhIEZPUk0gYnkgc3VidHJhY3RpbmcgdW5tYXJrZWQgYW5kIG9wZW4gcmVFbnRyeSBGT1JNc1xuICBjb25zdCBnaG9zdHMgPSBkLmFuY2VzdG9ycygpXG4gICAgICAuZmlsdGVyKGUgPT4gKGUuZGF0YS50eXBlID09PSAnZm9ybScgJiYgZS5kYXRhLnVubWFya2VkIHx8IFxuICAgICAgICAgICAgICAgIGUuZGF0YS50eXBlID09PSAncmVFbnRyeScgJiYgZS5kYXRhLmxhc3RPcGVuKSkubGVuZ3RoO1xuICByZXR1cm4gZC5kZXB0aCAtIGdob3N0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRleHRTdWJzY3JpcHQodGV4dCkge1xuICAvLyBzZWxlY3Rpb24gbW9kdWxlIHRvIHNwbGl0IHRleHQgaW50byBwYXJ0cyBmb3Igc3Vic2NyaXB0cyAoZS5nLiBcInhfblwiKVxuICByZXR1cm4gKHNlbGVjdGlvbikgPT4ge1xuICAgIHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uKGQpIHtcblxuICAgICAgICBjb25zdCBzcGxpdCA9ICh0eXBlb2YodGV4dChkKSkgPT09ICdzdHJpbmcnKSA/IHRleHQoZCkuc3BsaXQoJ18nKSA6ICcnO1xuXG4gICAgICAgIC8vIGlmIChzcGxpdC5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vICAgc3BsaXQuZm9yRWFjaCgocGFydCxpKSA9PiB7XG5cbiAgICAgICAgLy8gICAgIGNvbnN0IGVsZW0gPSBkMy5zZWxlY3QodGhpcykuYXBwZW5kKCd0c3BhbicpXG4gICAgICAgIC8vICAgICAgIC50ZXh0KGQgPT4gcGFydCk7XG5cbiAgICAgICAgLy8gICAgIGlmIChpJTI9PT0xKSBlbGVtXG4gICAgICAgIC8vICAgICAgIC5hdHRyKCdkeCcsIDEpXG4gICAgICAgIC8vICAgICAgIC5hdHRyKCdkeScsIDYpXG4gICAgICAgIC8vICAgICAgIC5hdHRyKCdmb250LXNpemUnLCAnLjhlbScpO1xuICAgICAgICAvLyAgIH0pO1xuICAgICAgICAvLyB9XG4gICAgICAgIGlmIChzcGxpdC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykuYXBwZW5kKCd0c3BhbicpXG4gICAgICAgICAgICAudGV4dChkID0+IHNwbGl0WzBdKTtcblxuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5hcHBlbmQoJ3RzcGFuJylcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gc3BsaXRbMV0pXG4gICAgICAgICAgICAuYXR0cignZHgnLCAxKVxuICAgICAgICAgICAgLmF0dHIoJ2R5JywgNilcbiAgICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJy44ZW0nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIC50ZXh0KHRleHQoZCkpO1xuICAgICAgICB9XG5cbiAgICB9KVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGV4dFNpemUodGV4dCwgZm9udFNpemU9J2luaGVyaXQnLCBmb250RmFtaWx5PSdpbmhlcml0JywgZm9udFN0eWxlPSdub3JtYWwnKSB7XG4gIC8qIFNvdXJjZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vaHV5dGQvMzI3ZTQ1M2M5NWNhM2VkYWRiMzJkMGM4NjdlMjU2MWIgXG4gIENyZWRpdHMgdG86IEh1eSBUci4gKi9cbiAgaWYgKCFkMykgcmV0dXJuO1xuICB2YXIgY29udGFpbmVyID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdzdmcnKTtcbiAgY29udGFpbmVyLmFwcGVuZCgndGV4dCcpXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCBmb250U2l6ZSlcbiAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCBmb250U3R5bGUpXG4gICAgLnN0eWxlKCdmb250LWZhbWlseScsIGZvbnRGYW1pbHkpXG4gICAgLmF0dHIoJ3gnLCctOTk5OScpLmF0dHIoJ3knLCctOTk5OScpXG4gICAgLmNhbGwodGV4dFN1YnNjcmlwdCgoKSA9PiB0ZXh0KSk7IC8vIC50ZXh0KHRleHQpO1xuICB2YXIgc2l6ZSA9IGNvbnRhaW5lci5ub2RlKCkuZ2V0QkJveCgpO1xuICBjb250YWluZXIucmVtb3ZlKCk7XG4gIHJldHVybiB7IHdpZHRoOiBzaXplLndpZHRoLCBoZWlnaHQ6IHNpemUuaGVpZ2h0IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGFjaXR5KGNvbG9yLCBhbHBoYSkge1xuICBjb25zdCBjb2xvckNvcHkgPSBkMy5jb2xvcihjb2xvcik7XG5jb2xvckNvcHkub3BhY2l0eSA9IGFscGhhO1xucmV0dXJuIGNvbG9yQ29weTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZVJlbWFpbmRlcihudW0sIF9kZW4pIHtcbiAgbGV0IGNvdW50ID0gMDtcbiAgbGV0IHNpZ24gPSAxO1xuICBsZXQgZGVuID0gTWF0aC5yb3VuZChfZGVuKTtcbiAgbGV0IGNhbmRpZGF0ZSA9IGRlbjtcbiAgd2hpbGUgKG51bSAlIGRlbiA+IDAuMykge1xuICAgICAgY2FuZGlkYXRlICs9IHNpZ24gKiAwLjAwMTtcbiAgICAgIGlmIChudW0lY2FuZGlkYXRlIDwgbnVtJWRlbikgZGVuID0gY2FuZGlkYXRlO1xuXG4gICAgICBpZihjb3VudCA+PSA1MDAwKSB7XG4gICAgICAgICAgY2FuZGlkYXRlID0gTWF0aC5yb3VuZChfZGVuKTtcbiAgICAgICAgICBzaWduID0gLTE7XG4gICAgICB9XG4gICAgICBpZihjb3VudCA+PSAxMDAwMCkgYnJlYWs7XG4gICAgICBjb3VudCsrO1xuICB9XG4gIHJldHVybiBkZW47XG59XG5leHBvcnQgZnVuY3Rpb24gY2FsY0NpcmNsZURhc2gociwgdW5pdCwgZnJhY3Rpb24pIHtcbiAgY29uc3QgY2lyYyA9IE1hdGguUEkqMiAqIHI7XG4gIHJldHVybiByZWR1Y2VSZW1haW5kZXIoY2lyYywgdW5pdCkgKiBmcmFjdGlvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaXJjbGVEYXNoQXJyYXkociwgdW5pdCwgZnJhY3Rpb25zKSB7XG4gIGxldCBzdHIgPSAnJztcbiAgZm9yIChsZXQgaSBpbiBmcmFjdGlvbnMpIHtcbiAgICAgIHN0ciA9IHN0ci5jb25jYXQoYCR7IGNhbGNDaXJjbGVEYXNoKHIsIHVuaXQsIGZyYWN0aW9uc1tpXSkgfXB4IGApO1xuICB9XG4gIHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaXJjbGVMYWJlbCh0ZXh0LCBmb250U2l6ZT0naW5oZXJpdCcsIGZvbnRGYW1pbHk9J2luaGVyaXQnLCBmb250U3R5bGU9J25vcm1hbCcpIHtcbiAgLy8gc2VsZWN0aW9uIG1vZHVsZSB0byBzcGxpdCB0ZXh0IGludG8gcGFydHMgZm9yIHN1YnNjcmlwdHMgKGUuZy4gXCJ4X25cIilcbiAgcmV0dXJuIChzZWxlY3Rpb24pID0+IHtcblxuICAgICAgc2VsZWN0aW9uLmVhY2goZnVuY3Rpb24oZCkge1xuXG4gICAgICAgICAgY29uc3QgdGV4dFN6ID0gdGV4dFNpemUodGV4dChkKSwgZm9udFNpemUsIGZvbnRGYW1pbHkpO1xuICAgICAgICAgIGNvbnN0IG1hcmdpbiA9IDUwO1xuXG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgZm9udFNpemUpXG4gICAgICAgICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIGZvbnRTdHlsZSlcbiAgICAgICAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIGZvbnRGYW1pbHkpXG4gICAgICAgICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgICAgICAgLnJhaXNlKClcbiAgICAgICAgICAgICAgLnRleHQoZCA9PiB0ZXh0KGQpKTtcblxuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5maWx0ZXIoZCA9PiBkLnIqMiA+PSB0ZXh0U3oud2lkdGggKyBtYXJnaW4pLnNlbGVjdCgndGV4dCcpXG4gICAgICAgICAgICAgIC5jbGFzc2VkKCdsYWJlbCBpbnNpZGUnLCB0cnVlKVxuICAgICAgICAgICAgICAuYXR0cigneScsIGQgPT4gZC5yIC0gdGV4dFN6LmhlaWdodCowLjUgKVxuICAgICAgICAgICAgICAuYXR0cignZG9taW5hbnQtYmFzZWxpbmUnLCdiYXNlbGluZScpO1xuXG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmZpbHRlcihkID0+IGQucioyIDwgdGV4dFN6LndpZHRoICsgbWFyZ2luKS5zZWxlY3QoJ3RleHQnKVxuICAgICAgICAgICAgICAuY2xhc3NlZCgnbGFiZWwgb3V0c2lkZScsIHRydWUpXG4gICAgICAgICAgICAgIC5hdHRyKCd5JywgZCA9PiBkLnIgKyA0KVxuICAgICAgICAgICAgICAuYXR0cignZG9taW5hbnQtYmFzZWxpbmUnLCdoYW5naW5nJyk7XG5cbiAgICAgIH0pO1xuICB9O1xufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCAqIGFzIGNhbnZnIGZyb20gJ2NhbnZnJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBqUXVlcnkgcmVwbGFjZW1lbnRzOlxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FsbChlbGVtcykge1xuICAgIGlmKHR5cGVvZihlbGVtcykgPT09ICdzdHJpbmcnKSBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbXMpO1xuICAgIGVsZW1zLmZvckVhY2goIChlLGkpID0+IHtcbiAgICAgICAgc2hvdyhlKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaG93KGVsZW0pIHtcbiAgICBpZih0eXBlb2YoZWxlbSkgPT09ICdzdHJpbmcnKSBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgIC8vIGVsZW0uY2xhc3NMaXN0LmFkZCgnaXMtdmlzaWJsZScpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVBbGwoZWxlbXMpIHtcbiAgICBpZih0eXBlb2YoZWxlbXMpID09PSAnc3RyaW5nJykgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1zKTtcbiAgICBlbGVtcy5mb3JFYWNoKCAoZSxpKSA9PiB7XG4gICAgICAgIGhpZGUoZSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaGlkZShlbGVtKSB7XG4gICAgaWYodHlwZW9mKGVsZW0pID09PSAnc3RyaW5nJykgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcblx0Ly8gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQWxsKGVsZW1zKSB7XG4gICAgaWYodHlwZW9mKGVsZW1zKSA9PT0gJ3N0cmluZycpIGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtcyk7XG4gICAgZWxlbXMuZm9yRWFjaCggKGUsaSkgPT4ge1xuICAgICAgICB0b2dnbGUoZSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlKGVsZW0pIHtcbiAgICBpZih0eXBlb2YoZWxlbSkgPT09ICdzdHJpbmcnKSBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbiAgICBlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xuXHQvLyBlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLXZpc2libGUnKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Zpc2libGUoZWxlbSkge1xuICAgIGlmKHR5cGVvZihlbGVtKSA9PT0gJ3N0cmluZycpIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuICAgIHJldHVybiAoICFlbGVtLmNsYXNzTGlzdC5jb250YWlucygnZC1ub25lJykgKTtcbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZnVuY3Rpb24gcGFkKG51bSwgc2l6ZSkge1xuICAgIC8qIFNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI5OTg4MjJcbiAgICBDcmVkaXRzIHRvOiBJbmZpbml0aWVzTG9vcCAqL1xuICAgIHZhciBzID0gbnVtK1wiXCI7XG4gICAgd2hpbGUgKHMubGVuZ3RoIDwgc2l6ZSkgcyA9IFwiMFwiICsgcztcbiAgICByZXR1cm4gcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTdmcoc3ZnRWwsIG5hbWUpIHtcbiAgICAvKiBTb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NjQwMzU4OVxuICAgIENyZWRpdHMgdG86IGRlZmdoaTE5NzcsIERhdmVUaGVTY2llbnRpc3QsIHNlbnogKi9cbiAgICBzdmdFbC5zZXRBdHRyaWJ1dGUoXCJ4bWxuc1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpO1xuICAgIHZhciBzdmdEYXRhID0gc3ZnRWwub3V0ZXJIVE1MO1xuICAgIHZhciBwcmVmYWNlID0gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBzdGFuZGFsb25lPVwibm9cIj8+XFxyXFxuJztcbiAgICB2YXIgc3ZnQmxvYiA9IG5ldyBCbG9iKFtwcmVmYWNlLCBzdmdEYXRhXSwge3R5cGU6XCJpbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLThcIn0pO1xuICAgIHZhciBzdmdVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHN2Z0Jsb2IpO1xuICAgIHZhciBkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBkb3dubG9hZExpbmsuaHJlZiA9IHN2Z1VybDtcbiAgICBkb3dubG9hZExpbmsuZG93bmxvYWQgPSBuYW1lO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG93bmxvYWRMaW5rKTtcbiAgICBkb3dubG9hZExpbmsuY2xpY2soKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvd25sb2FkTGluayk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2F2ZUltZyhzdmcsIG5hbWUsIHNjYWxlPTEpIHsgICAgXG4gICAgLyogVXNpbmcgY2FudmcgbGliLiBodHRwczovL2dpdGh1Yi5jb20vY2FudmcvY2FudmcgYW5kIHBhcnRzIG9mIHRoZSBhcHByb2FjaCBmb3Igc2F2ZVN2Zy5cbiAgICBUaGFua3MgdG8gamJlYXJkNCBpbjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5NzYwMzQvMTIwNDA0NyBmb3IgdGhlIHN1Z2dlc3Rpb24gKi9cblxuICAgIGNvbnN0IHcgPSBzdmcuZ2V0QkJveCgpLndpZHRoO1xuICAgIGNvbnN0IGggPSBzdmcuZ2V0QkJveCgpLmhlaWdodDtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaWQnLCdkcmF3aW5nQXJlYScpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICBjYW52YXMud2lkdGggPSB3ICogc2NhbGU7XG4gICAgY2FudmFzLmhlaWdodCA9IGggKiBzY2FsZTtcblxuICAgIGNhbnZnKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcmF3aW5nQXJlYScpLCBzdmcub3V0ZXJIVE1MLCB7IGlnbm9yZURpbWVuc2lvbnM6dHJ1ZSwgaWdub3JlTW91c2U6IHRydWUsIGlnbm9yZUFuaW1hdGlvbjogdHJ1ZSxcbiAgICBzY2FsZVdpZHRoOiB3ICogc2NhbGUsXG4gICAgc2NhbGVIZWlnaHQ6IGggKiBzY2FsZSB9KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJhd2luZ0FyZWEnKSApO1xuXG4gICAgY29uc3QgaW1nVXJsID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcblxuICAgIHZhciBkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBkb3dubG9hZExpbmsuaHJlZiA9IGltZ1VybDtcbiAgICBkb3dubG9hZExpbmsuZG93bmxvYWQgPSBuYW1lO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG93bmxvYWRMaW5rKTtcbiAgICBkb3dubG9hZExpbmsuY2xpY2soKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvd25sb2FkTGluayk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjYW52YXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnIpIHtcbiAgICAvKiBTb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNTAzMDExNyBcbiAgICBDcmVkaXRzIHRvOiBOb2FoIEZyZWl0YXMgKi9cbiAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24gKGZsYXQsIHRvRmxhdHRlbikge1xuICAgIHJldHVybiBmbGF0LmNvbmNhdChBcnJheS5pc0FycmF5KHRvRmxhdHRlbikgPyBmbGF0dGVuKHRvRmxhdHRlbikgOiB0b0ZsYXR0ZW4pO1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlKGFycixvYmopIHtcbiAgICAvKiAgU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTQzODYzXG4gICAgQ3JlZGl0cyB0bzogVmlua28gVnJzYWxvdmljICovXG4gICAgcmV0dXJuIChhcnIuaW5kZXhPZihvYmopICE9IC0xKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlKG8sZnVuYykge1xuICAgIC8qICBTb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzcyMjY2OC90cmF2ZXJzZS1hbGwtdGhlLW5vZGVzLW9mLWEtanNvbi1vYmplY3QtdHJlZS13aXRoLWphdmFzY3JpcHQgXG4gICAgQ3JlZGl0cyB0bzogVGhlSGlwcG8gKi9cbiAgICBmb3IgKHZhciBpIGluIG8pIHtcbiAgICAgICAgZnVuYy5hcHBseShudWxsLFtpLG9baV1dKTsgIC8vIG51bGwgb3IgdGhpcz9cbiAgICAgICAgaWYgKG9baV0gIT09IG51bGwgJiYgdHlwZW9mKG9baV0pPT1cIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAvL2dvaW5nIG9uZSBzdGVwIGRvd24gaW4gdGhlIG9iamVjdCB0cmVlISFcbiAgICAgICAgICAgIHRyYXZlcnNlKG9baV0sZnVuYyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5TdHJpbmcucHJvdG90eXBlLnJlcGxhY2VBbGwgPSBmdW5jdGlvbihmaW5kLCByZXBsYWNlLCBlc2NhcGVNZXRhKSB7XG4gICAgLyogIE1vZGlmaWVkIGZyb206IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzExNDQ3ODMvaG93LXRvLXJlcGxhY2UtYWxsLW9jY3VycmVuY2VzLW9mLWEtc3RyaW5nLWluLWphdmFzY3JpcHQgXG4gICAgQ3JlZGl0cyB0bzogU2VhbiBCcmlnaHQgKi9cbiAgICBpZihlc2NhcGVNZXRhKSBmaW5kID0gZXNjYXBlUmVnRXhwKGZpbmQpO1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2UobmV3IFJlZ0V4cChmaW5kLCAnZycpLCByZXBsYWNlKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFxcW1xcXVxcL1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cblN0cmluZy5wcm90b3R5cGUuYWRkQmVmb3JlPWZ1bmN0aW9uKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0cigwLCBpbmRleCkgKyByZXBsYWNlbWVudCsgdGhpcy5zdWJzdHIoaW5kZXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwKHZhbHVlLCBzdGFydDEsIHN0b3AxLCBzdGFydDIsIHN0b3AyKSB7XG4gICAgLy8gUHJvY2Vzc2luZy1saWtlIG1hcCBmdW5jdGlvblxuICAgIHJldHVybiBzdGFydDIgKyAoc3RvcDIgLSBzdGFydDIpICogKCh2YWx1ZSAtIHN0YXJ0MSkgLyAoc3RvcDEgLSBzdGFydDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5TW92ZUl0ZW0oYXJyLCBmcm9tLCB0bykge1xuICBhcnIuc3BsaWNlKHRvLCAwLCBhcnIuc3BsaWNlKGZyb20sIDEpWzBdKTtcbn1cblxuU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlQXQ9ZnVuY3Rpb24oaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RyKDAsIGluZGV4KSArIHJlcGxhY2VtZW50KyB0aGlzLnN1YnN0cihpbmRleCArIHJlcGxhY2VtZW50Lmxlbmd0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lc3RhbXAoKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICByZXR1cm4gKCcnXG4gICAgKyBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkpLnN1YnN0cigyKSBcbiAgICArIChwYWQoKGRhdGUuZ2V0VVRDTW9udGgoKSsxKSwyKSkgXG4gICAgKyAocGFkKGRhdGUuZ2V0VVRDRGF0ZSgpLDIpKSArICctJ1xuICAgICsgKHBhZCgoZGF0ZS5nZXRIb3VycygpKSwyKSlcbiAgICArIChwYWQoKGRhdGUuZ2V0TWludXRlcygpKSwyKSlcbiAgICArIChwYWQoKGRhdGUuZ2V0U2Vjb25kcygpKSwyKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZVNWRyhzdmcsIGNvbnRhaW5lciwgcmF0aW8pIHtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBgc2NhbGUoJHtyYXRpb30pIHRyYW5zbGF0ZSgwLDApYCk7XG4gICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gcGFyc2VJbnQoc3ZnLmNsaWVudFdpZHRoKnJhdGlvKSArICdweCc7XG4gICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHBhcnNlSW50KHN2Zy5jbGllbnRIZWlnaHQqcmF0aW8pICsgJ3B4JztcblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZDYWxjIHtcbiAgICAvKlxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAnY2FsYycgbW9kdWxlIGZvciBmb3JtZm9ybSAoYykgMjAxOCBQZXRlciBIb2ZtYW5uXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICovXG4gICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9O1xuXG4gICAgc3RhdGljIHJlbF9sb2dpYyhmeCwgZnkpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBjb21tdXRhdGl2ZSByZWxhdGlvbjogeCB5ICovXG4gICAgICAgIGlmICggZnggPiAzIHx8IGZ4IDwgMCB8fCBmeSA+IDMgfHwgZnkgPCAwICkgcmV0dXJuIC05ODtcbiAgICAgICAgZWxzZSBpZiAoIGZ4ID09PSAwIHx8IGZ5ID09PSAxICkgeyBcbiAgICAgICAgICAgIHJldHVybiBmeTsgLy8gQzMgL1RoZW9yZW0gMlxuICAgICAgICB9IFxuICAgICAgICBlbHNlIGlmICggZnkgPT09IDAgfHwgZnggPT09IDEgKSB7IFxuICAgICAgICAgICAgcmV0dXJuIGZ4OyAvLyBDMyAvVGhlb3JlbSAyXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIGZ4ID09PSBmeSApIHsgXG4gICAgICAgICAgICByZXR1cm4gZng7IC8vIEM1IC9UaGVvcmVtIDVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggKGZ4ID09PSAyICYmIGZ5ID09PSAzKSB8fCAoZnggPT09IDMgJiYgZnkgPT09IDIpICkgeyBcbiAgICAgICAgICAgIHJldHVybiAxOyAvLyBDMiAvVGhlb3JlbSAxMyArIEMzIC9UaGVvcmVtIDJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTk5OyAvLyBlcnJvciBjb2RlXG4gICAgfTtcbiAgICBzdGF0aWMgcmVsKC4uLmZWYWxzKSB7IC8vIHZlcmlmaWVkXG4gICAgICAgIC8qIFNob3J0Y3V0IGZvciByZWxhdGlvbiB3aXRoIG4gdmFyaWFibGVzOiB4XzEgLi4uIHhfbiAqL1xuICAgICAgICBpZiAoZlZhbHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdmFyIHZhbCA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIGZWYWxzKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gdGhpcy5yZWxfbG9naWMoIHZhbCxmVmFsc1tpXSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTk3OyAvLyBlcnJvciBjb2RlXG4gICAgfTtcblxuICAgIHN0YXRpYyBpbnZfbG9naWMoZngpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBpbnZlcnNpb24vbmVnYXRpb246ICh4KSAqL1xuICAgICAgICBzd2l0Y2ggKGZ4KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIDM7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtOTk7IC8vIGVycm9yIGNvZGVcbiAgICB9O1xuICAgIHN0YXRpYyBpbnYoZngsIG4pIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogU2hvcnRjdXQgZm9yIG4gaW52ZXJzaW9ucy9uZWdhdGlvbnM6ICh4KSAqL1xuICAgICAgICBpZiAobiA+IDApIHtcbiAgICAgICAgICAgIHZhciB2YWwgPSBmeDtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgPSB0aGlzLmludl9sb2dpYyh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiB0aGlzLmludl9sb2dpYyhmeCk7XG4gICAgICAgIHJldHVybiAtOTc7IC8vIGVycm9yIGNvZGVcbiAgICB9O1xuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgUkUtRU5UUlkgRk9STSBDQUxDVUxBVElPTlxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljIHVGb3JtMihmQSwgZkIsIGFsdEludGVycHI9ZmFsc2UpIHsgLy8gY2FsY3VsYXRpb24gdmVyaWZpZWQgKGJvdGggaW50ZXJwci4pXG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkodW5kZWZpbmVkLCBmYWxzZSwgYWx0SW50ZXJwciwgZkEsIGZCKTtcbiAgICB9O1xuICAgIHN0YXRpYyBpRm9ybTIoZkEsIGZCLCBhbHRJbnRlcnByPWZhbHNlKSB7IC8vIGNhbGN1bGF0aW9uIHZlcmlmaWVkIChib3RoIGludGVycHIuKVxuICAgICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KHVuZGVmaW5lZCwgdHJ1ZSwgYWx0SW50ZXJwciwgZkEsIGZCKTtcbiAgICB9O1xuICAgIHN0YXRpYyB1Rm9ybTMobGFzdE9wZW4sIGZBLCBmQiwgZkMsIGFsdEludGVycHI9ZmFsc2UpIHsgLy8gY2FsY3VsYXRpb24gdmVyaWZpZWQgY2xvc2VkICYgb3BlbiAoYm90aCBpbnRlcnByLilcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeSh0cnVlLCBsYXN0T3BlbiwgYWx0SW50ZXJwciwgZkEsIGZCLCBmQyk7XG4gICAgfTtcbiAgICBzdGF0aWMgaUZvcm0zKGxhc3RPcGVuLCBmQSwgZkIsIGZDLCBhbHRJbnRlcnByPWZhbHNlKSB7IC8vIGNhbGN1bGF0aW9uIHZlcmlmaWVkIGNsb3NlZCAmIG9wZW4gKGJvdGggaW50ZXJwci4pXG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkoZmFsc2UsIGxhc3RPcGVuLCBhbHRJbnRlcnByLCBmQSwgZkIsIGZDKTtcbiAgICB9O1xuICAgIHN0YXRpYyB1Rm9ybTQoZkEsIGZCLCBmQywgZkQsIGFsdEludGVycHI9ZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeSh1bmRlZmluZWQsIGZhbHNlLCBhbHRJbnRlcnByLCBmQSwgZkIsIGZDLCBmRCk7XG4gICAgfTtcbiAgICBzdGF0aWMgaUZvcm00KGZBLCBmQiwgZkMsIGZELCBhbHRJbnRlcnByPWZhbHNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkodW5kZWZpbmVkLCB0cnVlLCBhbHRJbnRlcnByLCBmQSwgZkIsIGZDLCBmRCk7XG4gICAgfTtcbiAgICBzdGF0aWMgdUZvcm01KGxhc3RPcGVuLCBmQSwgZkIsIGZDLCBmRCwgZkUsIGFsdEludGVycHI9ZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeSh0cnVlLCBsYXN0T3BlbiwgYWx0SW50ZXJwciwgZkEsIGZCLCBmQywgZkQsIGZFKTtcbiAgICB9O1xuICAgIHN0YXRpYyBpRm9ybTUobGFzdE9wZW4sIGZBLCBmQiwgZkMsIGZELCBmRSwgYWx0SW50ZXJwcj1mYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KGZhbHNlLCBsYXN0T3BlbiwgYWx0SW50ZXJwciwgZkEsIGZCLCBmQywgZkQsIGZFKTtcbiAgICB9O1xuXG4gICAgLy8gc3RhdGljIHJlRW50cnkoLi4uIHZhcnMpIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMucmVFbnRyeShmYWxzZSwgZmFsc2UsIHZhcnMpO1xuICAgIC8vIH1cbiAgICAvLyBzdGF0aWMgcmVFbnRyeShyZUV2ZW4sIC4uLiB2YXJzKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLnJlRW50cnkocmVFdmVuLCBmYWxzZSwgdmFycyk7XG4gICAgLy8gfVxuXG4gICAgc3RhdGljIHJlRW50cnkocmVFdmVuLCBsYXN0T3BlbiwgYWx0SW50ZXJwciwgLi4uZlZhbHMpIHtcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBkaWZmZXJlbnQgc2VsZi1lcXVpdmFsZW50IHJlLWVudHJ5IEZPUk1zXG4gICAgICAgICBbQXJndW1lbnRzXSByZUV2ZW46IGV2ZW4gcmUtZW50cnktbnVtYmVyPyB8IGxhc3RPcGVuOiBsYXN0IHZhcmlhYmxlIG5vdCBjcm9zc2VkPyB8IGZWYWxzOiB2YXJpYWJsZXMgKDAvMS8yLzMpXG5cbiAgICAgICAgIE5vdGU6IGNhbGN1bGF0aW9uIG1hbnVhbGx5IHZlcmlmaWVkIGZvcuKApiBcbiAgICAgICAgIC0gKHVGT1JNIGExLCByZXMyKSDGkj0oKMaSeCl5KVxuICAgICAgICAgLSAoaUZPUk0gYTIsIHJlczIpIMaSKMaSKT0oYTF4KXlcbiAgICAgICAgIC0gKGlGT1JNIGIxLCByZXMzKSBbMnxyfCsxXSDGkijGkik9KCgoxpJ4KXkpeikgxpI9KCgoKCgoxpJ4KXkpeil4KXkpeilcbiAgICAgICAgIC0gKGlGT1JNIGIyLCByZXMzKSBbMnxyfCsxXSDGkijGkik9KChiMXgpeSl6XG4gICAgICAgICAtICh1Rk9STSBjMSwgcmVzMykgWzJ8cnxdIMaSPSgoKCgoKMaSeCl5KXopeCl5KXopXG4gICAgICAgICAtICh1Rk9STSBjMiwgcmVzMykgWzJ8cnxdIMaSKMaSKT0oKGMxeCl5KXpcbiAgICAgICAgIFNob3VsZCB3b3JrIHdpdGggcmVzb2x1dGlvbnMgb2YgNCwgNSwg4oCmIGJ1dCBuZWVkcyB2ZXJpZmljYXRpb24uXG5cbiAgICAgICAgIE15IGJhc2ljIG9ic2VydmF0aW9ucyBhYm91dCBzZWxmLWVxdWl2YWxlbnQgcmUtZW50cnkgRk9STXM6XG4gICAgICAgICAtIEV2ZXJ5IHJlLWVudHJ5IEZPUk0gbmVlZHMgdG8gaGF2ZSBhbiBldmVuIG51bWJlciBvZiBjcm9zc2VzIHRvIGJlIHNlbGYtZXF1aXZhbGVudCAodUZPUk0pOiDGkiA9ICgoxpIxKTIpIC5cbiAgICAgICAgICAgU28gd2l0aCB1bmV2ZW4gcmVzb2x1dGlvbnMsIHdlIGFsd2F5cyBuZWVkIHRvIGhhdmUgYW4gZXZlbiByZS1lbnRyeSBudW1iZXI6IMaSID0gKCgoKCgoxpIxKTIpMykxKTIpMykgLlxuICAgICAgICAgLSBUbyBiZSBhYmxlIHRvIGFsc28gaGF2ZSB1bmV2ZW4gcmUtZW50cnkgbnVtYmVycywgZWl0aGVyIHRoZSByZXNvbHV0aW9uIG5lZWRzIHRvIGJlIGV2ZW5cbiAgICAgICAgICAgb3Igd2UgaGF2ZSB0byBlbWJlZCB0aGUgcmUtZW50cnkgRk9STSBpbnRvIGEgbm9ybWFsIEZPUk0gdGhhdCBpcyBvbmUgcmUtZW50cnkgb2YgdGhhdCBGT1JNOlxuICAgICAgICAgICDGkijGkikgPSAoKCjGkjEpMikzKSA8LT4gKCgoIMaSID0gKCgoKCgoxpIxKTIpMykxKTIpMykgMSkyKTMpIC5cbiAgICAgICAgICAgVGhlc2UgY29tcG9zaXRpb25hbCByZS1lbnRyeSBGT1JNcyBhcmUgaUZPUk1zLCBzaW5jZSB0aGV5IHJlc29sdmUgdG86ICggxpIgPSAoKMaSKSkgKSAuXG4gICAgICAgICAtIElmIHRoZSBvdXRtb3N0IGNyb3NzIG9mIHRoZSBGT1JNIHNob3VsZCBiZSBsZWZ0IG91dCAob3BlbiBGT1JNcyksIHRoaXMgY2FuIG9ubHkgYmUgZG9uZSBpZiB3ZSBlbWJlZFxuICAgICAgICAgICBhIGNvcnJlc3BvbmRpbmcgY2xvc2VkIEZPUk0gb2YgaXRzZWxmIHRoYXQgZWl0aGVyIGlzIG9yIGVtYmVkcyBpdHMgcmUtZW50cnkgRk9STSAoY2FzZXMgZGVzY3JpYmVkIGFib3ZlKS5cbiAgICAgICAgICAgSSBiZWxpZXZlIHRoZSBvdXRtb3N0IChvcGVuKSBGT1JNIGlzIG5vdCBiZWluZyBjb3VudGVkIGFzIGEgcmUtZW50cnkgYXQgYWxsLCBzaW5jZSBpdCdzIG1pc3NpbmcgYSBjcm9zcy5cblxuICAgICAgICAgVGhpcyBhbGdvcml0aG0gaXMgYmFzZWQgb24gdGhlIGZvbGxvd2luZyBydWxlcy9wYXR0ZXJucy9vYnNlcnZhdGlvbnMgZGVyaXZlZCBmcm9tIFwidUZPUk0gaUZPUk1cIjpcbiAgICAgICAgIFsxXSBJZiAxIGlzIHNvbWV3aGVyZSBpbiB0aGUgRk9STSwgaXQgd2lsbCBkb21pbmF0ZSBhbGwgdmFsdWVzIGluIHNwYWNlcyBkZWVwZXIgdGhhbiBtLFxuICAgICAgICAgICAgIHNvIHRoZSByZS1lbnRyeSBpcyBvYnNvbGV0ZSBhbmQgd2UgY2FuIHN0YXJ0IGNhbGN1bGF0ZSBmcm9tIHRoaXMgc3BhY2UuIFxuICAgICAgICAgWzJdIElmIHRoZXJlIGFyZSAzLzIgb3IgMi8zIHBhaXJzIGluIHRoZSBGT1JNLCB0aGUgZmlyc3QgdGVybSBjYW4gYmUgdHVybmVkIGludG8gMSwgc2luY2VcbiAgICAgICAgICAgICB0aHJvdWdoIEMyIHRoZSBzZWNvbmQgdGVybSBjYW4gYWx3YXlzIGJlIGdlbmVyYXRlZCBpbnRvIGl0cyBzcGFjZSwgd2hlcmUgMjMgPSAxLlxuICAgICAgICAgICAgIFRoZW4gd2UgY2FuIHByb2NlZWQgYXMgaW4gKDEpLlxuICAgICAgICAgWzNdIElmIGFsbCB2YXJpYWJsZXMgYXJlIDAsIHdlIHdpbGwgaGF2ZSBlaXRoZXIgYSB1Rk9STSBvciBpRk9STSwgaGVuY2UgdGhlIHZhbHVlIG9mIHRoZVxuICAgICAgICAgICAgIEZPUk0gd2lsbCBiZSBlaXRoZXIgMiBvciAzLCBkZXBlbmRpbmcgb24gdGhlIGZvbGxvd2luZyBjYXNlczpcbiAgICAgICAgICAgICAtIDI6IGNsb3NlZCwgICAgICByZXNvbHV0aW9uIGV2ZW4sIHJlLWVudHJ5LW51bWJlciBldmVuL29kZCAoYTEpXG4gICAgICAgICAgICAgLSAyOiBjbG9zZWQvb3BlbiwgcmVzb2x1dGlvbiBvZGQsICByZS1lbnRyeS1udW1iZXIgZXZlbiAgICAgKGMxLCBjMilcbiAgICAgICAgICAgICAtIDM6IG9wZW4sICAgICAgICByZXNvbHV0aW9uIGV2ZW4sIHJlLWVudHJ5LW51bWJlciBldmVuL29kZCAoYTIpXG4gICAgICAgICAgICAgLSAzOiBjbG9zZWQvb3BlbiwgcmVzb2x1dGlvbiBvZGQsICByZS1lbnRyeS1udW1iZXIgb2RkICAgICAgKGIxLCBiMilcbiAgICAgICAgIFNpbmNlIFsxXVsyXVszXSBlbGltaW5hdGUgYWxsIG90aGVyIGNhc2VzLCBhbGwgdmFyaWFibGVzIGFyZSBub3cgZWl0aGVyIDIgb3IgMyAoYW5kIG1heWJlIDBzKSxcbiAgICAgICAgIHNvIHVzaW5nIEMyIGFzIGRlc2NyaWJlZCBhYm92ZSwgb25seSB0aGUgbGFzdCBvY2Nhc2lvbiBvZiB0aGVzZSB2YXJpYWJsZXMgbmVlZCB0byBiZSBjb25zaWRlcmVkOlxuICAgICAgICAgWzRdIElmIHdlIHVzZSB1Rk9STSBpRk9STSBpbnRlcnByZXRhdGlvbiAyIChwLjE2NykgcmVjdXJzaXZlIGlkZW50aXR5ICggbW4gPC0+ICgoxpIpKT3GkiApLCBDMiBhbmQgQzFcbiAgICAgICAgICAgICDGkiBjYW4gYmUgc2VwYXJhdGVkIGZyb20gMi8zIGlmIHRoZXJlIGlzIGFuIGV2ZW4gbnVtYmVyIG9mIGNyb3NzZXMgKG9yIG5vbmUpIGFmdGVyIHRoZSB2YXJpYWJsZS5cbiAgICAgICAgICAgICBUaGVuLCBkZXBlbmRpbmcgb24gdGhlIEZPUk0sIHdlIGhhdmUgZWl0aGVyOlxuICAgICAgICAgICAgIGlGT1JNOiAoxpI9KCjGkikpKSAyLzMgPC0+ICgyKSAyLzMgIG9yXG4gICAgICAgICAgICAgdUZPUk06ICDGkj0oKMaSKSkgMi8zICA8LT4gIDIgMi8zXG4gICAgICAgICBbNV0gSWYgWzRdIGRvZXMgbm90IGFwcGx5IG9yIHdlIGRlY2lkZSBmb3IgdUZPUk0gaUZPUk0gaW50ZXJwcmV0YXRpb24gMSAocC4xNjcpOiByZWN1cnNpb24gaW5zdHJ1Y3Rpb24gXG4gICAgICAgICAgICAgKCBtbiAtPiDGkj0oKMaSKSkgKSwgd2Ugd2lsbCBoYXZlIGVpdGhlciB2YXJpYWJsZXMgb2YgMiBvciAzIHdoaWNoIHdlIGNhbm5vdCByZWxhdGUgdG8gxpIsIHNpbmNlXG4gICAgICAgICAgICAgdGhleSBuZWVkIG5vdCBiZSB0aGUgc2FtZSB1bmRldGVybWluZWQgdmFsdWUuIFVzaW5nIGNhc2UgZGlzdGluY3Rpb24sIHdlIGludGVycHJldCB0aGVcbiAgICAgICAgICAgICBsYXN0IG9jY2FzaW9uIG9mIDIgb3IgMyBhcyAwIGFuZCBhcyAxLCBjYWxjdWxhdGUgZXZlcnl0aGluZyB3aXRoIMaSPTIgYW5kIHJlbGF0ZSB0aGUgcmVzdWx0cyBcbiAgICAgICAgICAgICB1c2luZyBjb250cmF2YWxlbmNlOiAoKHgpeSkoKHkpeCkgd2hpY2ggeWllbGRzIHRoZSBmaW5hbCByZXN1bHQuXG4gICAgICAgICovXG4gICAgICAgIC8vIGNoZWNrIGlmIGFyZ3VtZW50cyBhcmUgYWN0dWFsbHkgZGVmaW5lZFxuICAgICAgICBpZiAocmVFdmVuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlRXZlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0T3BlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsYXN0T3BlbiA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc0V2ZW4gPSAoZlZhbHMubGVuZ3RoJTIgPT0gMCk7IC8vIGV2ZW4gcmVzb2x1dGlvbj9cbiAgICAgICAgdmFyIHplcm9zID0gMDsgLy8gemVybyBjb3VudGVyXG4gICAgICAgIHZhciBmaXJzdFVuZGVmID0gLTE7IC8vIGNhdGNoZXMgZmlyc3QgbW4vKG1uKVxuXG4gICAgICAgIC8vIFszXSBkZXRlcm1pbmUgaWYgdUZPUk0gb3IgaUZPUk1cbiAgICAgICAgdmFyIHVGT1JNID0gZmFsc2U7XG4gICAgICAgIHZhciBpRk9STSA9IGZhbHNlO1xuICAgICAgICBpZiAocmVzRXZlbikge1xuICAgICAgICAgICAgaWYgKGxhc3RPcGVuKSBpRk9STSA9IHRydWU7XG4gICAgICAgICAgICBlbHNlIHVGT1JNID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChyZUV2ZW4pIHVGT1JNID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsc2UgaUZPUk0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgMS9tIHNvbWV3aGVyZSBpbiB4XzEg4oCmIHhfblxuICAgICAgICB2YXIgY2FsY2Zyb20gPSAtMTtcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8ZlZhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBmeCA9IGZWYWxzW2ldOyBcblxuICAgICAgICAgICAgaWYgKGZ4ID09IDEpIHtcbiAgICAgICAgICAgICAgICBjYWxjZnJvbSA9IGk7IC8vIFsxXSBpZiBtIGlzIHNvbWV3aGVyZSwgc2V0IGNhbGN1bGF0aW9uIHN0YXJ0IGZyb20gdGhlcmVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZ4ID09IDApIHplcm9zKys7IC8vIFszXSBrZWVwIHRyYWNrIG9mIGhvdyBtYW55IHplcm9zIHRoZXJlIGFyZVxuICAgICAgICAgICAgZWxzZSBpZiAoZnggPT0gMiB8fCBmeCA9PSAzKSB7IC8vIFsyXVxuICAgICAgICAgICAgICAgIGlmKGZpcnN0VW5kZWYgPT0gLTEpIGZpcnN0VW5kZWYgPSBpOyAvLyBpZiB0aGVyZSBpcyBhIGZpcnN0IDIvdSBvciAzL2ksIHJlbWVtYmVyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihmeCAhPSBmVmFsc1tmaXJzdFVuZGVmXSkge1xuICAgICAgICAgICAgICAgICAgICBjYWxjZnJvbSA9IGZpcnN0VW5kZWY7IC8vIGlmIDMvMiBvciAyLzMgcGFpcnMsIHNldCBjYWxjdWxhdGlvbiBmb3JtIGZpcnN0IHVuZGVmLiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICBpZiAoemVyb3MgPT0gZlZhbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBbM10gaW4gY2FzZSBhbGwgdmFyaWFibGVzIGFyZSBuLCBqdXN0IHJldHVybiB0aGUgdW5kZWZpbmVkL2ltYWdpbmFyeSB2YWx1ZSBvZiB0aGUgRk9STVxuICAgICAgICAgICAgaWYgKGlGT1JNKSByZXR1cm4gMztcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGNmcm9tID49IDApIHtcbiAgICAgICAgICAgIC8vIFsxfDJdIGlmIHRoZXJlIGlzIGEgMS9tIHNvbWV3aGVyZSBpbiB0aGUgZm9ybSwgd2UgY2FuIGVhc2lseSBjYWxjdWxhdGUgdGhlIHJlc3QgZnJvbSB0aGlzIHBvaW50XG4gICAgICAgICAgICB2YXIgdmFsID0gMTtcbiAgICAgICAgICAgIGZvcih2YXIgaT1jYWxjZnJvbTsgaTxmVmFscy5sZW5ndGg7IGkrKykgeyAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChsYXN0T3BlbiAmJiBpID09IGZWYWxzLmxlbmd0aC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IHRoaXMucmVsKHZhbCxmVmFsc1tpXSk7IC8vIGlmIG5vIGNyb3NzIG9uIGxhc3QgdmFyLCBkb24ndCBpbnZlcnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB2YWwgPSB0aGlzLmludiggdGhpcy5yZWwodmFsLGZWYWxzW2ldKSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC8vIHdoYXQgcmVtYWlucywgd2lsbCBvbmx5IGJlIGVpdGhlclxuICAgICAgICAvLyAtICgxKSBhbGwgdmFyaWFibGVzIGFyZSBuLzAgb3IgbW4vMiAgIG9yXG4gICAgICAgIC8vIC0gKDIpIGFsbCB2YXJpYWJsZXMgYXJlIG4vMCBvciAobW4pLzNcbiAgICAgICAgLy8gU28gd2UgY2FsY3VsYXRlIGZyb20gdGhlIGxhc3Qgb2NjYXNpb24gb2YgMiBvciAzLCBiZWNhdXNlIHdpdGggQzIgKGRlZ2VuZXJhdGUpIGFsbCBlbHNlIGNhbiBiZSBpZ25vcmVkXG5cbiAgICAgICAgLy8gZm9yIGV2ZW4gY2xvc2VkIHJlLWVudHJ5LUZPUk1zIHdpdGggdW5ldmVuIHJlc29sdXRpb24gKHVGT1JNIGMxKSwgd2UgbmVlZCB0byBkbyB0aGUgY2FsY3VsYXRpb24gdHdpY2VcbiAgICAgICAgdmFyIHJlcGVhdCA9IChyZUV2ZW4gJiYgIXJlc0V2ZW4gJiYgIWxhc3RPcGVuKT8gMjoxO1xuICAgICAgXG4gICAgICAgIGZvcih2YXIgaT0oZlZhbHMubGVuZ3RoKnJlcGVhdCktMTsgaT49MDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBpJWZWYWxzLmxlbmd0aDsgLy8gcmVwZWF0ZWQgdmFyaWFibGUgaW5kZXhcblxuICAgICAgICAgICAgaWYgKGZWYWxzW2luZGV4XSA9PSAyIHx8IGZWYWxzW2luZGV4XSA9PSAzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlSZXYgPSAoZlZhbHMubGVuZ3RoKnJlcGVhdCktMSAtIGk7IC8vIHJldmVyc2UgaW5kZXggdG8gZWFzaWVyIGNoZWNrIGZvciBpbnRlcnByZXRhdGlvbiAyIChzZWUgbmV4dClcblxuICAgICAgICAgICAgICAgIGlmIChhbHRJbnRlcnByICYmICgobGFzdE9wZW4gJiYgaVJldiUyPT0wKSB8fCAoIWxhc3RPcGVuICYmIGlSZXYlMj09MSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVGT1JNIGlGT1JNIGludGVycHJldGF0aW9uIDI6IHJlY3Vyc2l2ZSBpZGVudGl0eSAoIMaSPSgoxpIpKSA8LT4gbW4gKVxuICAgICAgICAgICAgICAgICAgICAvLyDGkj0oKMaSKSkgY2FuIGJlIHNlcGFyYXRlZCBpZiB0aGVyZSBpcyBhbiBldmVuIG51bWJlciBvZiBjcm9zc2VzIChvciBub25lKSBhZnRlciB0aGUgdmFyaWFibGU7IHRoaXMgaXMgdGhlIGNhc2UgaWYgZWl0aGVyOlxuICAgICAgICAgICAgICAgICAgICAvLyAtICgxKSB0aGUgRk9STSBpcyBvcGVuIGFuZCB0aGUgYmFja3dhcmRzIHZhcmlhYmxlIGluZGV4IGlzIGV2ZW4gICAgICBvclxuICAgICAgICAgICAgICAgICAgICAvLyAtICgyKSB0aGUgRk9STSBpcyBjbG9zZWQgYW5kIHRoZSBiYWNrd2FyZHMgdmFyaWFibGUgaW5kZXggaXMgb2RkXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIGlmIHRoZSBudW1iZXIgb2YgY3Jvc3NlcyBiZXR3ZWVuIMaSIGFuZCBvdXIgdmFyIGlzIGV2ZW4sIHdlIGRpc3Rpbmd1aXNoIHR3byBjYXNlczpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlGT1JNKSByZXR1cm4gdGhpcy5yZWwoMyxmVmFsc1tpbmRleF0pOyAvLyBpRk9STTogKMaSPSgoxpIpKSl4IDwtPiAobW4pIHhcbiAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gdGhpcy5yZWwoMixmVmFsc1tpbmRleF0pOyAgICAgICAvLyB1Rk9STTogIMaSPSgoxpIpKXggIDwtPiAgbW4geFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gWzVdIGlmIGV2ZXJ5dGhpbmcgZWxzZSBmYWlscywgdXNlIGNhc2UgZGlzdGluY3Rpb246IHVGT1JNIGlGT1JNIChwLjk0KTsgYWxzbyBhY2NvcmRpbmcgdG86XG4gICAgICAgICAgICAgICAgICAgIC8vIHVGT1JNIGlGT1JNIChwLjE2NykgaW50ZXJwcmV0YXRpb24gMTogcmVjdXJzaW9uIGluc3RydWN0aW9uICggxpI9KCjGkikpIGFuZCBtbiBuZWVkIHRvIGJlIGRpZmZlcmVudGlhdGVkKVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYXNlMCA9IDI7IC8vIHJlLWVudHJ5IMaSPW1uLCBiZWNhdXNlIG90aGVyIG1uPTBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RPcGVuICYmICFyZXNFdmVuICYmICFyZUV2ZW4pIGNhc2UwID0gdGhpcy5pbnYoY2FzZTApOyAvLyBjcm9zcyBmb3IgaW50ZWdyYXRlZCBGT1JNcyB3aXRoIHVuZXZlbiByZXMuIGluc2lkZSBvcGVuIEZPUk1zIChpRk9STSBiMilcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBqPTA7IGo8KGZWYWxzLmxlbmd0aCpyZXBlYXQpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmeCA9IDA7IC8vIGFsbCBvdGhlciB2YWx1ZXMgd2lsbCBiZSAoZGVnZW5lcmF0ZWQgdG8pIHplcm9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihmVmFsc1tpbmRleF0gPT0gMikgZnggPSAwOyAvLyBsYXN0IG9jY2FzaW9uIG9mIG1uLzIgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBmeCA9IHRoaXMuaW52KDApOyAvLyBsYXN0IG9jY2FzaW9uIG9mIChtbikvMyB3aWxsIGJlIGludGVycHJldGVkIGFzICgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RPcGVuICYmIGogPT0gZlZhbHMubGVuZ3RoLTEpIGNhc2UwID0gdGhpcy5yZWwoY2FzZTAsZngpOyAvLyBpZiBubyBjcm9zcyBvbiBsYXN0IHZhciwgZG9uJ3QgaW52ZXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNhc2UwID0gdGhpcy5pbnYoIHRoaXMucmVsKGNhc2UwLGZ4KSApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYXNlMSA9IDI7IC8vIHJlLWVudHJ5IMaSPW1uLCBiZWNhdXNlIG90aGVyIG1uPTFcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RPcGVuICYmICFyZXNFdmVuICYmICFyZUV2ZW4pIGNhc2UxID0gdGhpcy5pbnYoY2FzZTEpOyAvLyBjcm9zcyBmb3IgaW50ZWdyYXRlZCBGT1JNcyB3aXRoIHVuZXZlbiByZXMuIGluc2lkZSBvcGVuIEZPUk1zIChpRk9STSBiMilcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBqPTA7IGo8KGZWYWxzLmxlbmd0aCpyZXBlYXQpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmeCA9IDA7IC8vIGFsbCBvdGhlciB2YWx1ZXMgd2lsbCBiZSAoZGVnZW5lcmF0ZWQgdG8pIHplcm9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihmVmFsc1tpbmRleF0gPT0gMikgZnggPSAxOyAvLyBsYXN0IG9jY2FzaW9uIG9mIG1uLzIgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBmeCA9IHRoaXMuaW52KDEpOyAvLyBsYXN0IG9jY2FzaW9uIG9mIChtbikvMyB3aWxsIGJlIGludGVycHJldGVkIGFzICgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RPcGVuICYmIGogPT0gZlZhbHMubGVuZ3RoLTEpIGNhc2UxID0gdGhpcy5yZWwoY2FzZTEsZngpOyAvLyBpZiBubyBjcm9zcyBvbiBsYXN0IHZhciwgZG9uJ3QgaW52ZXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNhc2UxID0gdGhpcy5pbnYoIHRoaXMucmVsKGNhc2UxLGZ4KSApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udCggY2FzZTAsY2FzZTEgKTsgLy8gY29udHJhdmFsZW5jZSBvZiBib3RoIGNhc2VzXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIHJldHVybiAtOTk7IC8vIGVycm9yIGNvZGVcbiAgICB9OyAvLyBlbmQgcmVFbnRyeSgpXG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBDT01QTEVYIEZPUk0gQ0FMQ1VMQVRJT05TXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyAtIDIgVkFSSUFCTEVTXG5cbiAgICBzdGF0aWMgaW1wbEwoZngsIGZ5KSB7IC8vIHZlcmlmaWVkXG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgXCJpbXBsaWNhdGlvblwiOiAoeCl5ICovXG4gICAgICAgIHJldHVybiB0aGlzLnJlbCggdGhpcy5pbnYoZngpLGZ5ICk7XG4gICAgfTtcbiAgICBzdGF0aWMgaW1wbFIoZngsIGZ5KSB7XG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgXCJpbXBsaWNhdGlvblwiOiB4KHkpICovXG4gICAgICAgIHJldHVybiB0aGlzLnJlbCggZngsdGhpcy5pbnYoZnkpICk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBwcmUoZngsIGZ5KSB7IC8vIHZlcmlmaWVkXG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgXCJwcmVzZWN0aW9uXCIvXCJkZWNpc2lvblwiOiAoKHgpeSkgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuaW52KCB0aGlzLmltcGxMKGZ4LGZ5KSApO1xuICAgIH07XG4gICAgc3RhdGljIHBvc3QoZngsIGZ5KSB7IC8vIHZlcmlmaWVkXG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgXCJwb3N0c2VjdGlvblwiL1wiZGVjaXNpb25cIjogKHgoeSkpICovXG4gICAgICAgIHJldHVybiB0aGlzLmludiggdGhpcy5pbXBsUihmeCxmeSkgKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGNvbnQoZngsIGZ5KSB7IC8vIHZlcmlmaWVkXG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgXCJjb250cmF2YWxlbmNlXCIvXCJlaXRoZXItb3JcIjogKCh4KXkpICh4KHkpKSAqL1xuICAgICAgICByZXR1cm4gdGhpcy5yZWwoIHRoaXMucHJlKGZ4LGZ5KSwgdGhpcy5wb3N0KGZ4LGZ5KSApO1xuICAgIH07XG4gICAgc3RhdGljIGVxdWl2KGZ4LCBmeSkge1xuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIFwiZXF1aXZhbGVuY2VcIi8/OiAoICgoeCl5KSAoeCh5KSkgKSAqL1xuICAgICAgICByZXR1cm4gdGhpcy5pbnYoIHRoaXMuY29udChmeCxmeSkgKTtcbiAgICB9O1xuXG59IiwiaW1wb3J0IHsgZmxhdHRlbiwgaW5jbHVkZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXInO1xuaW1wb3J0IEZDYWxjIGZyb20gJy4vZmNhbGMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGRm9ybSBleHRlbmRzIEZDYWxjIHtcbiAgICAvKlxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAnZm9ybScgbW9kdWxlIGZvciBmb3JtZm9ybSAoYykgMjAxOCBQZXRlciBIb2ZtYW5uXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICovXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEZvcm0gQ2FsY3VsYXRpb25cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgY2FsYyhmb3JtKSB7XG4gICAgICAgIC8qIHJlY3Vyc2l2ZSBmb3JtIGNhbGN1bGF0aW9uICovXG4gICAgICAgIHZhciBmeCA9IDA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBoYXZlIGEganNvbiBmb3JtLCBpZiBub3Q6IHRyeSB0byBjb252ZXJ0XG4gICAgICAgIGlmKHR5cGVvZihmb3JtKSA9PT0gJ3N0cmluZycpIGZvcm0gPSB0aGlzLnBhcnNlTGluZWFyKGZvcm0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgaW4gZm9ybS5zcGFjZSkge1xuICAgICAgICAgICAgaWYgKGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ2Zvcm0nKSB7XG4gICAgICAgICAgICAgICAgZnggPSB0aGlzLnJlbCggZngsdGhpcy5jYWxjKGZvcm0uc3BhY2VbaV0pICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICdjb25zdCcpIHtcbiAgICAgICAgICAgICAgICBmeCA9IHRoaXMucmVsKCBmeCxmb3JtLnNwYWNlW2ldLnZhbHVlICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICd2YXInKSB7XG4gICAgICAgICAgICAgICAgaWYoIWlzTmFOKGZvcm0uc3BhY2VbaV0udmFsdWUpKSBmeCA9IHRoaXMucmVsKCBmeCxmb3JtLnNwYWNlW2ldLnZhbHVlICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICd1bmNsZWFyJykge1xuICAgICAgICAgICAgICAgIGZ4ID0gdGhpcy5yZWwoIGZ4LGZvcm0uc3BhY2VbaV0udmFsdWUgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ3JlRW50cnknKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5lc3RlZFZhbHMgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgZlJlRW50cnkgPSBmb3JtLnNwYWNlW2ldO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiBmUmVFbnRyeS5uZXN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmVzdGVkVmFscy5wdXNoKCB0aGlzLmNhbGMoZlJlRW50cnkubmVzdGVkW2pdKSApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmb3IgZXZlbiByZXNvbHV0aW9ucyAodG90YWwgbmVzdGVkIGFyZ3VtZW50cyksIHJlRW50cnkgbnVtYmVyIHdpbGwgYmUgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgLy8gc2luY2UgaXQgZG9lc24ndCBtYXR0ZXIgaWYgaXRzIGV2ZW4gb3Igb2RkXG4gICAgICAgICAgICAgICAgY29uc3QgcmVFbnRyeU51bWJlciA9IChmUmVFbnRyeS5uZXN0ZWQubGVuZ3RoICUgMiA9PT0gMCkgPyB1bmRlZmluZWQgOiBmUmVFbnRyeS5yZUV2ZW47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gbm90YXRpb24gcmVhZGluZzoge2RlZXBlc3QsIC4uLiwgc2hhbGxvd2VzdH0gIHVzZSBuZXN0ZWRWYWxzLnJldmVyc2UoKSB0byByZXZlcnNlIHZhcmlhYmxlc1xuICAgICAgICAgICAgICAgIGZ4ID0gdGhpcy5yZWwoIGZ4LHRoaXMucmVFbnRyeShyZUVudHJ5TnVtYmVyLCBmUmVFbnRyeS5sYXN0T3BlbiwgZlJlRW50cnkuYWx0SW50ZXJwcmV0YXRpb24sIC4uLm5lc3RlZFZhbHMpICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoZm9ybS51bm1hcmtlZCkgcmV0dXJuIGZ4O1xuICAgICAgICBlbHNlIHJldHVybiB0aGlzLmludiggZnggKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGNhbGNBbGwoZm9ybSkge1xuICAgICAgICAvKiBJbnRlcnByZXQgYW5kIGNhbGN1bGF0ZSBhbGwgcG9zc2libGUgdmFsdWVzIGZvciB0aGUgZm9ybSBcbiAgICAgICAgICAgLT4gbmVlZHMgcmVmYWN0b3JpbmcgdG8gYXZvaWQgcmVkdW5kYW5jeTsgc3VnZ2VzdGlvbnMgd2VsY29tZS4gKi9cblxuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaGF2ZSBhIGpzb24gZm9ybSwgaWYgbm90OiB0cnkgdG8gY29udmVydFxuICAgICAgICBpZih0eXBlb2YoZm9ybSkgPT09ICdzdHJpbmcnKSBmb3JtID0gdGhpcy5wYXJzZUxpbmVhcihmb3JtKTtcblxuICAgICAgICB2YXIgdmFycyA9IHRoaXMuZ2V0VmFyaWFibGVzKGZvcm0pO1xuICAgICAgICB2YXIgdmFscyA9IHt9O1xuXG4gICAgICAgIHZhciBpbnRlcktleSA9ICcnK3ZhcnMuam9pbigpKyc7JztcblxuICAgICAgICBzd2l0Y2ggKHZhcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdmFsc1snUmVzdWx0J10gPSB0aGlzLmNhbGMoZm9ybSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdmFyIGludGVycHIgPSBbIHt2YXI6IHZhcnNbMF0sIHZhbHVlOiBudWxsfSBdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGE9MDsgYTw0OyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwclswXS52YWx1ZSA9IGE7XG4gICAgICAgICAgICAgICAgICAgIHZhbHNbaW50ZXJLZXkrYV0gPSB0aGlzLmludGVyQ2FsYyhmb3JtLCBpbnRlcnByKTsvL1thXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHZhciBpbnRlcnByID0gWyB7dmFyOiB2YXJzWzBdLCB2YWx1ZTogbnVsbH0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzFdLCB2YWx1ZTogbnVsbH0gXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhPTA7IGE8NDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGludGVycHJbMF0udmFsdWUgPSBhO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBiPTA7IGI8NDsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzFdLnZhbHVlID0gYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHNbaW50ZXJLZXkrYSsnJytiXSA9IHRoaXMuaW50ZXJDYWxjKGZvcm0sIGludGVycHIpOy8vW2EsYl0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHZhciBpbnRlcnByID0gWyB7dmFyOiB2YXJzWzBdLCB2YWx1ZTogbnVsbH0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzFdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbMl0sIHZhbHVlOiBudWxsfSBdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGE9MDsgYTw0OyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwclswXS52YWx1ZSA9IGE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGI9MDsgYjw0OyBiKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbMV0udmFsdWUgPSBiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYz0wOyBjPDQ7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbMl0udmFsdWUgPSBjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHNbaW50ZXJLZXkrYSsnJytiKycnK2NdID0gdGhpcy5pbnRlckNhbGMoZm9ybSwgaW50ZXJwcik7Ly9bYSxiLGNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJwciA9IFsge3ZhcjogdmFyc1swXSwgdmFsdWU6IG51bGx9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1sxXSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzJdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbM10sIHZhbHVlOiBudWxsfSBdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGE9MDsgYTw0OyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwclswXS52YWx1ZSA9IGE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGI9MDsgYjw0OyBiKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbMV0udmFsdWUgPSBiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYz0wOyBjPDQ7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbMl0udmFsdWUgPSBjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGQ9MDsgZDw0OyBkKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclszXS52YWx1ZSA9IGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHNbaW50ZXJLZXkrYSsnJytiKycnK2MrJycrZF0gPSB0aGlzLmludGVyQ2FsYyhmb3JtLCBpbnRlcnByKTsvL1thLGIsYyxkXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHZhciBpbnRlcnByID0gWyB7dmFyOiB2YXJzWzBdLCB2YWx1ZTogbnVsbH0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzFdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbMl0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1szXSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzRdLCB2YWx1ZTogbnVsbH0gXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhPTA7IGE8NDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGludGVycHJbMF0udmFsdWUgPSBhO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBiPTA7IGI8NDsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzFdLnZhbHVlID0gYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGM9MDsgYzw0OyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzJdLnZhbHVlID0gYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBkPTA7IGQ8NDsgZCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbM10udmFsdWUgPSBkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBlPTA7IGU8NDsgZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzRdLnZhbHVlID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHNbaW50ZXJLZXkrYSsnJytiKycnK2MrJycrZCsnJytlXSA9IHRoaXMuaW50ZXJDYWxjKGZvcm0sIGludGVycHIpOy8vW2EsYixjLGQsZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIHZhciBpbnRlcnByID0gWyB7dmFyOiB2YXJzWzBdLCB2YWx1ZTogbnVsbH0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzFdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbMl0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1szXSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzRdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbNV0sIHZhbHVlOiBudWxsfSBdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGE9MDsgYTw0OyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwclswXS52YWx1ZSA9IGE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGI9MDsgYjw0OyBiKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbMV0udmFsdWUgPSBiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYz0wOyBjPDQ7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbMl0udmFsdWUgPSBjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGQ9MDsgZDw0OyBkKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclszXS52YWx1ZSA9IGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGU9MDsgZTw0OyBlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbNF0udmFsdWUgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZj0wOyBmPDQ7IGYrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbNV0udmFsdWUgPSBmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHNbaW50ZXJLZXkrYSsnJytiKycnK2MrJycrZCsnJytlKycnK2ZdID0gdGhpcy5pbnRlckNhbGMoZm9ybSwgaW50ZXJwcik7Ly9bYSxiLGMsZCxlLGZdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJwciA9IFsge3ZhcjogdmFyc1swXSwgdmFsdWU6IG51bGx9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1sxXSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzJdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbM10sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1s0XSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzVdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbNl0sIHZhbHVlOiBudWxsfSBdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGE9MDsgYTw0OyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwclswXS52YWx1ZSA9IGE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGI9MDsgYjw0OyBiKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbMV0udmFsdWUgPSBiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYz0wOyBjPDQ7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbMl0udmFsdWUgPSBjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGQ9MDsgZDw0OyBkKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclszXS52YWx1ZSA9IGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGU9MDsgZTw0OyBlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbNF0udmFsdWUgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZj0wOyBmPDQ7IGYrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbNV0udmFsdWUgPSBmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGc9MDsgZzw0OyBnKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcls2XS52YWx1ZSA9IGc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHNbaW50ZXJLZXkrYSsnJytiKycnK2MrJycrZCsnJytlKycnK2YrJycrZ10gPSB0aGlzLmludGVyQ2FsYyhmb3JtLCBpbnRlcnByKTsvL1thLGIsYyxkLGUsZixnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIHZhciBpbnRlcnByID0gWyB7dmFyOiB2YXJzWzBdLCB2YWx1ZTogbnVsbH0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzFdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbMl0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1szXSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzRdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbNV0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1s2XSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzddLCB2YWx1ZTogbnVsbH0gXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhPTA7IGE8NDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGludGVycHJbMF0udmFsdWUgPSBhO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBiPTA7IGI8NDsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzFdLnZhbHVlID0gYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGM9MDsgYzw0OyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzJdLnZhbHVlID0gYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBkPTA7IGQ8NDsgZCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbM10udmFsdWUgPSBkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBlPTA7IGU8NDsgZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzRdLnZhbHVlID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGY9MDsgZjw0OyBmKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzVdLnZhbHVlID0gZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBnPTA7IGc8NDsgZysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbNl0udmFsdWUgPSBnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBoPTA7IGg8NDsgaCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzddLnZhbHVlID0gaDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHNbaW50ZXJLZXkrYSsnJytiKycnK2MrJycrZCsnJytlKycnK2YrJycrZysnJytoXSA9IHRoaXMuaW50ZXJDYWxjKGZvcm0sIGludGVycHIpOy8vW2EsYixjLGQsZSxmLGcsaF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFscztcbiAgICB9O1xuXG4gICAgc3RhdGljIGludGVyQ2FsYyhmb3JtLCBpbnRlcnByKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbGMoIHRoaXMuaW50ZXJwcmV0KGZvcm0sIGludGVycHIpICk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBpbnRlcnByZXQoZm9ybSwgaW50ZXJwcikge1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaGF2ZSBhIGpzb24gZm9ybSwgaWYgbm90OiB0cnkgdG8gY29udmVydFxuICAgICAgICBpZih0eXBlb2YoZm9ybSkgPT09ICdzdHJpbmcnKSBmb3JtID0gdGhpcy5wYXJzZUxpbmVhcihmb3JtKTtcblxuICAgICAgICB2YXIgaW50ZXJwckZvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZvcm0pKTsgLy8gY2xvbmUgZm9ybVxuXG4gICAgICAgIHRoaXMudHJhdmVyc2VGb3JtKGludGVycHJGb3JtLCBmdW5jdGlvbihmQnJhbmNoKSB7XG4gICAgICAgICAgICBjb25zdCBzcGFjZSA9IGZCcmFuY2guc3BhY2U7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gc3BhY2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3BhY2VbaV0udHlwZSA9PT0gJ3ZhcicpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdiBpbiBpbnRlcnByKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BhY2VbaV0uc3ltYm9sID09PSBpbnRlcnByW3ZdLnZhcikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2VbaV0udmFsdWUgPSBpbnRlcnByW3ZdLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaW50ZXJwckZvcm07XG4gICAgfTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBFeHRlbnNpb25zIG9mIEZDYWxjXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljIHJlbF9sb2dpYyhmeCwgZnkpIHtcbiAgICAgICAgaWYodHlwZW9mKGZ4KSA9PT0gQXJyYXkgfHwgdHlwZW9mKGZ5KSA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdXBlci5yZWxfbG9naWMoZngsIGZ5KTtcbiAgICB9O1xuICAgIHN0YXRpYyByZWwoLi4uZlZhbHMpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnJlbCguLi5mVmFscyk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBpbnZfbG9naWMoZngpIHtcbiAgICAgICAgaWYodHlwZW9mKGZ4KSA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdXBlci5pbnZfbG9naWMoZngpO1xuICAgIH07XG4gICAgc3RhdGljIGludihmeCwgbikge1xuICAgICAgICByZXR1cm4gc3VwZXIuaW52KGZ4LCBuKTtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIENvbnZlcnNpb25zXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljIHBhcnNlTGluZWFyKGZvcm11bGEpIHtcbiAgICAgICAgLyogQ29udmVydHMgZnJvbSBwYXJhbnRoZXNpcyBub3RhdGlvbiBpbnRvIEpTT04gc3RyaW5nIGFuZCBwYXJzZXMgYXMgSlNPTiBvYmplY3QgKi9cblxuICAgICAgICAvLyBjb252ZXJ0IHRoZSBmb3JtdWxhIGludG8gYSBKU09OIHN0cmluZ1xuICAgICAgICB2YXIganNvblN0ciA9IHRoaXMuY29udkZyb21MaW5lYXIoZm9ybXVsYSk7XG5cbiAgICAgICAgLy8gdHJ5IHBhcnNpbmcgdGhlIHN0cmluZyBhcyBhIEpTT04gb2JqZWN0XG4gICAgICAgIHZhciBqc29uID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBqc29uO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb252RnJvbUxpbmVhcihmb3JtdWxhKSB7XG4gICAgICAgIC8vIGNsZWFuIGZvcm11bGEgc3RyaW5nIGZyb20gd2hpdGVzcGFjZVxuICAgICAgICB2YXIgY2xlYW5Gb3JtdWxhID0gdGhpcy5jbGVhbkxpbmVhcihmb3JtdWxhKTtcbiAgICAgICAgdmFyIGFyciA9IHRoaXMuY29uc3RydWN0RnJvbUxpbmVhcihjbGVhbkZvcm11bGEpO1xuICAgICAgICByZXR1cm4gZmxhdHRlbihhcnIpLmpvaW4oJycpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbGVhbkxpbmVhcihmb3JtdWxhKSB7XG4gICAgICAgIHZhciBjbGVhbkZvcm11bGEgPSAnJztcbiAgICAgICAgdmFyIGluUXVvdGUgPSBmYWxzZTtcbiAgICAgICAgdmFyIGluU2xhc2ggPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBpIGluIGZvcm11bGEpIHtcbiAgICAgICAgICAgIHZhciBjaGFyID0gZm9ybXVsYVtpXTtcbiAgICAgICAgICAgIGlmKHR5cGVvZihjaGFyKSAhPT0gXCJzdHJpbmdcIikgYnJlYWs7IC8vIHByb3RvdHlwZSBoYWNrc1xuXG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJ1wiJyAmJiAhaW5TbGFzaCkgaW5RdW90ZSA9ICFpblF1b3RlO1xuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcvJyAmJiAhaW5RdW90ZSkgaW5TbGFzaCA9ICFpblNsYXNoO1xuXG4gICAgICAgICAgICAvLyBvbWl0IHdoaXRlc3BhY2Ugb3V0c2lkZSBvZiBxdW90ZXNcbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnICcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5RdW90ZSB8fMKgaW5TbGFzaCkgY2xlYW5Gb3JtdWxhICs9IGNoYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGNsZWFuRm9ybXVsYSArPSBjaGFyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGVhbkZvcm11bGE7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnN0cnVjdEZyb21MaW5lYXIoZm9ybXVsYSkge1xuICAgICAgICAvKiBDb252ZXJ0cyBmcm9tIHBhcmFudGhlc2lzIG5vdGF0aW9uIHRvIEpTT04tZm9ybSAqL1xuXG4gICAgICAgIHZhciBjb21wQWxsID0gW107XG4gICAgICAgIHZhciB1bm1hcmtlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gY2hlY2sgZm9yIGFsbCBlbmNsb3Npbmcgb3V0ZXIgZm9ybVxuICAgICAgICB2YXIgY291bnREZXB0aCA9IDA7XG4gICAgICAgIHZhciBpblF1b3RlID0gZmFsc2U7XG4gICAgICAgIHZhciBpblNsYXNoID0gZmFsc2U7XG4gICAgICAgIHZhciBvdXRlck1hcmtDb3VudCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgaW4gZm9ybXVsYSkge1xuICAgICAgICAgICAgdmFyIGNoYXIgPSBmb3JtdWxhW2ldO1xuICAgICAgICAgICAgaWYodHlwZW9mKGNoYXIpICE9PSBcInN0cmluZ1wiKSBicmVhazsgLy8gcHJvdG90eXBlIGhhY2tzXG5cbiAgICAgICAgICAgIGlmICghaW5RdW90ZSAmJiAhaW5TbGFzaCkge1xuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnKCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChjb3VudERlcHRoID09IDApICYmIChpICE9IDApKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY291bnREZXB0aCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyID09PSAnKScpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnREZXB0aC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnREZXB0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSBmb3JtdWxhLmxlbmd0aC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJ1wiJyAmJiAhaW5TbGFzaCkgaW5RdW90ZSA9ICFpblF1b3RlO1xuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcvJyAmJiAhaW5RdW90ZSkgaW5TbGFzaCA9ICFpblNsYXNoO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcEFsbC5wdXNoKCcgIHsnKTtcbiAgICAgICAgY29tcEFsbC5wdXNoKCdcInR5cGVcIjpcImZvcm1cIiwnKTtcblxuICAgICAgICBpZiAodW5tYXJrZWQpIGNvbXBBbGwucHVzaCgnXCJ1bm1hcmtlZFwiOnRydWUsJyk7XG4gICAgICAgIGVsc2UgZm9ybXVsYSA9IGZvcm11bGEuc2xpY2UoMSxmb3JtdWxhLmxlbmd0aC0xKTtcblxuICAgICAgICBjb21wQWxsLnB1c2goJ1wic3BhY2VcIjpbJyk7ICAgXG5cblxuICAgICAgICB2YXIgcGFydHMgPSBbXTtcbiAgICAgICAgcGFydHMucHVzaCgnJyk7XG5cbiAgICAgICAgdmFyIGNvdW50RGVwdGggPSAwO1xuICAgICAgICB2YXIgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgaW5TbGFzaCA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBvcHRDaGFyID0gJ+KktCc7XG4gICAgICAgIHZhciBuZXN0Q2hhciA9ICfipLUnO1xuXG4gICAgICAgIGZvciAodmFyIGkgaW4gZm9ybXVsYSkge1xuICAgICAgICAgICAgdmFyIGNoYXIgPSBmb3JtdWxhW2ldO1xuICAgICAgICAgICAgdmFyIHByZXZDaGFyID0gZm9ybXVsYVtpLTFdO1xuICAgICAgICAgICAgaWYodHlwZW9mKGNoYXIpICE9PSBcInN0cmluZ1wiKSBicmVhazsgLy8gcHJvdG90eXBlIGhhY2tzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghaW5RdW90ZSAmJiAhaW5TbGFzaCkge1xuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnKScgfHzCoGNoYXIgPT09ICd9JykgY291bnREZXB0aC0tO1xuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnKCcgfHzCoGNoYXIgPT09ICd7Jykge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50RGVwdGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpcnN0ICh4KSBkb2Vzbid0IG5lZWQgdG8gYmUgc2VwYXJhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+IDApIHBhcnRzLnB1c2goJycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvdW50RGVwdGgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIChwcmV2Q2hhciA9PT0gJyknIHx8wqBwcmV2Q2hhciA9PT0gJ30nKSAmJiAhKGNoYXIgPT09ICcpJyB8fMKgY2hhciA9PT0gJ30nKSApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgY2hhciBmb2xsb3dzICh4KSwgc2VwYXJhdGU7IGJ1dCBub3QgaWYgaXQgaXMgYW5vdGhlciAnKSdcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50RGVwdGggPT09IDApIHBhcnRzLnB1c2goJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB1bmlxdWUgc2VwYXJhdGlvbiBjaGFycyBmb3IgcmUtZW50cnkgZm9ybXMgZm9yIGVhc3kgc3BsaXR0aW5nXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50RGVwdGggPT09IDEgJiYgY2hhciA9PT0gJywnKSBjaGFyID0gbmVzdENoYXI7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY291bnREZXB0aCA9PT0gMSAmJiBjaGFyID09PSAnfCcpIGNoYXIgPSBvcHRDaGFyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICdcIicgJiYgIWluU2xhc2gpIGluUXVvdGUgPSAhaW5RdW90ZTtcbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnLycgJiYgIWluUXVvdGUpIGluU2xhc2ggPSAhaW5TbGFzaDtcbiAgICAgICAgICAgIC8vIGFkZCBjaGFyIHRvIHRoZSBsYXRlc3QgcHVzaGVkIHBhcnRcbiAgICAgICAgICAgIHBhcnRzW3BhcnRzLmxlbmd0aC0xXSArPSBjaGFyO1xuICAgICAgICB9XG5cblxuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIgaSBpbiBwYXJ0cykge1xuXG4gICAgICAgICAgICBpZiAocGFydHNbaV1bMF0gPT09ICcoJykgeyBcbiAgICAgICAgICAgICAgICAvLyBpZiBwYXJ0IGlzIGZvcm1cbiAgICAgICAgICAgICAgICAvLyBwYXJ0c1tpXSA9IHRoaXMuY29uc3RydWN0RnJvbUxpbmVhciggcGFydHNbaV0uc2xpY2UoMSxwYXJ0c1tpXS5sZW5ndGgtMSkgKTtcbiAgICAgICAgICAgICAgICB2YXIgY29tcCA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIGNvbXAucHVzaCgneycpO1xuICAgICAgICAgICAgICAgIGNvbXAucHVzaCggdGhpcy5jb25zdHJ1Y3RGcm9tTGluZWFyKHBhcnRzW2ldKSApO1xuICAgICAgICAgICAgICAgIC8vIGNvbXAucHVzaCgnfScpO1xuXG4gICAgICAgICAgICAgICAgcGFydHNbaV0gPSBjb21wLnNsaWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXJ0c1tpXVswXSA9PT0gJ3snKSB7XG4gICAgICAgICAgICAgICAgLy8gZWxzZSBpZiBwYXJ0IGlzIHJlLWVudHJ5IGZvcm1cblxuICAgICAgICAgICAgICAgIHZhciBjb21wID0gW107XG4gICAgICAgICAgICAgICAgY29tcC5wdXNoKCcgIHsnKTtcbiAgICAgICAgICAgICAgICBjb21wLnB1c2goJ1widHlwZVwiOlwicmVFbnRyeVwiLCcpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBwYXJ0c1tpXS5zbGljZSgxLHBhcnRzW2ldLmxlbmd0aC0xKTtcblxuICAgICAgICAgICAgICAgIHZhciByZVBhcnRzID0gY29udGVudC5zcGxpdChvcHRDaGFyKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVOZXN0ZWQgPSByZVBhcnRzW3JlUGFydHMubGVuZ3RoLTFdLnNwbGl0KG5lc3RDaGFyKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZU5lc3RlZC5sZW5ndGggJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnXCJyZUV2ZW5cIjpcInVuZGVmaW5lZFwiLCcpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZVBhcnRzWzBdID09PSAnMnInIHx8IHJlUGFydHNbMV0gPT09ICcycicgfHwgcmVQYXJ0c1syXSA9PT0gJzJyJykgY29tcC5wdXNoKCdcInJlRXZlblwiOnRydWUsJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgY29tcC5wdXNoKCdcInJlRXZlblwiOmZhbHNlLCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZVBhcnRzWzBdID09PSAnb3BlbicgfHwgcmVQYXJ0c1sxXSA9PT0gJ29wZW4nIHx8IHJlUGFydHNbMl0gPT09ICdvcGVuJykgY29tcC5wdXNoKCdcImxhc3RPcGVuXCI6dHJ1ZSwnKTtcbiAgICAgICAgICAgICAgICBlbHNlIGNvbXAucHVzaCgnXCJsYXN0T3BlblwiOmZhbHNlLCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlUGFydHNbMF0gPT09ICdhbHQnIHx8IHJlUGFydHNbMV0gPT09ICdhbHQnIHx8IHJlUGFydHNbMl0gPT09ICdhbHQnKSBjb21wLnB1c2goJ1wiYWx0SW50ZXJwcmV0YXRpb25cIjp0cnVlLCcpO1xuICAgICAgICAgICAgICAgIGVsc2UgY29tcC5wdXNoKCdcImFsdEludGVycHJldGF0aW9uXCI6ZmFsc2UsJyk7XG5cbiAgICAgICAgICAgICAgICBjb21wLnB1c2goJ1wibmVzdGVkXCI6WycpO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbiBpbiByZU5lc3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wLnB1c2goIHRoaXMuY29uc3RydWN0RnJvbUxpbmVhcihyZU5lc3RlZFtuXSkgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gPCByZU5lc3RlZC5sZW5ndGgtMSkgY29tcC5wdXNoKCcsJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlTmVzdGVkW25dID0gdGhpcy5jb25zdHJ1Y3RGcm9tTGluZWFyKCByZU5lc3RlZFtuXSApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnXX0gICcpO1xuXG4gICAgICAgICAgICAgICAgcGFydHNbaV0gPSBjb21wLnNsaWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBlbHNlIHdlIGhhdmUgdmFyaWFibGVzL2NvbnN0YW50c1xuXG4gICAgICAgICAgICAgICAgdmFyIGNvbXAgPSBbXTtcblxuICAgICAgICAgICAgICAgIHZhciB2YXJzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIGluUXVvdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YXIgaW5TbGFzaCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiBwYXJ0c1tpXSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hhciA9IHBhcnRzW2ldW2pdO1xuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YoY2hhcikgIT09IFwic3RyaW5nXCIpIGJyZWFrOyAvLyBwcm90b3R5cGUgaGFja3NcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJ1wiJyAmJiAhaW5TbGFzaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5RdW90ZSA9ICFpblF1b3RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFyayBxdW90ZWQgc3RyaW5nIHdpdGggYSAn4oCWJyBmb3IgaWRlbnRpZmljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpblF1b3RlKSB2YXJzLnB1c2goJ+KAlicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09ICcvJyAmJiAhaW5RdW90ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5TbGFzaCA9ICFpblNsYXNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFyayB1bmNsZWFyIGZvcm0gd2l0aCBhICfigL0nIGZvciBpZGVudGlmaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluU2xhc2gpIHZhcnMucHVzaCgn4oC9Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWluUXVvdGUgJiYgIWluU2xhc2gpIHZhcnMucHVzaCgnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBxdW90ZSBjaGFycyBpbnNpZGUgc2xhc2hlcyB3aWxsIGJlIGVzY2FwZWQgdG8gbm90IGludGVyZmVyZSB3aXRoIEpTT04gc3ludGF4XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJ1wiJyAmJiBpblNsYXNoKSB2YXJzW3ZhcnMubGVuZ3RoLTFdICs9ICdcXFxcJyArIGNoYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHZhcnNbdmFycy5sZW5ndGgtMV0gKz0gY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAodmFyIHYgaW4gdmFycykge1xuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YodmFyc1t2XSkgIT09IFwic3RyaW5nXCIpIGJyZWFrOyAvLyBwcm90b3R5cGUgaGFja3NcblxuICAgICAgICAgICAgICAgICAgICBjb21wLnB1c2goJyAgeycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHZhcnNbdl0pICYmIHZhcnNbdl0ubGVuZ3RoID4gMCBcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhcnNbdl1bMF0gIT09ICfigL0nICYmIHZhcnNbdl1bMF0gIT09ICfigJYnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wLnB1c2goJ1widHlwZVwiOlwiY29uc3RcIiwnKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wLnB1c2goJ1widmFsdWVcIjonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCh2YXJzW3ZdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2YXJzW3ZdWzBdID09PSAn4oC9Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKCdcInR5cGVcIjpcInVuY2xlYXJcIiwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnXCJ2YWx1ZVwiOjIsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wLnB1c2goJ1wic3ltYm9sXCI6Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wLnB1c2goJ1wiJyt2YXJzW3ZdLnNsaWNlKDEpKydcIicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKCdcInR5cGVcIjpcInZhclwiLCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKCdcInZhbHVlXCI6XCIqXCIsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wLnB1c2goJ1wic3ltYm9sXCI6Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2YXJzW3ZdWzBdID09PSAn4oCWJykgY29tcC5wdXNoKCdcIicrdmFyc1t2XS5zbGljZSgxKSsnXCInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgY29tcC5wdXNoKCdcIicrdmFyc1t2XSsnXCInKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb21wLnB1c2goJ30gICcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodiA8IHZhcnMubGVuZ3RoLTEpIGNvbXAucHVzaCgnLCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBhcnRzW2ldID0gY29tcC5zbGljZSgpO1xuICAgICAgICAgICAgfSAvLyBlbmQgZWxzZVxuXG4gICAgICAgICAgICBjb21wQWxsLnB1c2gocGFydHNbaV0pO1xuICAgICAgICAgICAgaWYgKGkgPCBwYXJ0cy5sZW5ndGgtMSkgY29tcEFsbC5wdXNoKCcsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wQWxsLnB1c2goJ119ICAnKTtcblxuICAgICAgICByZXR1cm4gY29tcEFsbDtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gUmVwcmVzZW50YXRpb25cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMganNvblN0cmluZyhmb3JtKSB7XG4gICAgICAgIC8qIHJldHVybiBqc29uLXJlcHJlc2VudGF0aW9uIG9mIHRoZSBzcGVjaWZpZWQgRk9STSAqL1xuICAgICAgICBpZih0eXBlb2YoZm9ybSkgPT09ICdzdHJpbmcnKSBmb3JtID0gdGhpcy5wYXJzZUxpbmVhcihmb3JtKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGZvcm0sIHVuZGVmaW5lZCwgMik7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEhlbHBlclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHN0YXRpYyBnZXRWYXJpYWJsZXMoZm9ybSkge1xuICAgICAgICBpZih0eXBlb2YoZm9ybSkgPT09ICdzdHJpbmcnKSBmb3JtID0gdGhpcy5wYXJzZUxpbmVhcihmb3JtKTtcblxuICAgICAgICB2YXIgdmFycyA9IFtdO1xuICAgICAgICB0aGlzLnRyYXZlcnNlRm9ybShmb3JtLCBmdW5jdGlvbihmQnJhbmNoKSB7XG4gICAgICAgICAgICBjb25zdCBzcGFjZSA9IGZCcmFuY2guc3BhY2U7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gc3BhY2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3BhY2VbaV0udHlwZSA9PT0gJ3ZhcicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmNsdWRlKHZhcnMsIHNwYWNlW2ldLnN5bWJvbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcnMucHVzaChzcGFjZVtpXS5zeW1ib2wpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZhcnMuc29ydCgpO1xuICAgIH07XG5cbiAgICBzdGF0aWMgdHJhdmVyc2VGb3JtKGZvcm0sZnVuYykge1xuICAgICAgICAvKiB0cmF2ZXJzZXMgb25seSBmb3JtLXR5cGVzIGluIGEganNvbiB0cmVlICovXG4gICAgICAgIGxldCBicmVha1RyYXYgPSBmdW5jLmFwcGx5KHRoaXMsW2Zvcm1dKTtcblxuICAgICAgICBpZiAoZm9ybS5zcGFjZSkgeyAvLyBmb3JtLnR5cGU6ICdmb3JtJ1xuICAgICAgICAgICAgaWYgKGZvcm0uc3BhY2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gZm9ybS5zcGFjZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybS5zcGFjZVtpXS50eXBlID09PSAnZm9ybScgfHwgZm9ybS5zcGFjZVtpXS50eXBlID09PSAncmVFbnRyeScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBicmVha0xvb3AgPSB0aGlzLnRyYXZlcnNlRm9ybShmb3JtLnNwYWNlW2ldLGZ1bmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJyZWFrTG9vcCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZm9ybS5uZXN0ZWQpIHsgLy8gZm9ybS50eXBlOiAncmVFbnRyeSdcbiAgICAgICAgICAgIGlmIChmb3JtLm5lc3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBmb3JtLm5lc3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYnJlYWtMb29wID0gdGhpcy50cmF2ZXJzZUZvcm0oZm9ybS5uZXN0ZWRbaV0sZnVuYyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChicmVha0xvb3ApIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKCdFUlJPUjogTm90IGEgZm9ybSEnKTtcblxuICAgICAgICByZXR1cm4gYnJlYWtUcmF2O1xuICAgIH07XG5cbn0iLCJpbXBvcnQgRkZvcm0gZnJvbSAnLi9mZm9ybSc7XG5pbXBvcnQgRDNHcmFwaCwgeyBzYXZlIH0gZnJvbSAnLi4vbW9kdWxlcy9kMy1ncmFwaCc7XG5cbmxldCBnMSA9IHt9OyBsZXQgZzIgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdyYXBoIGV4dGVuZHMgRkZvcm0ge1xuICAgIC8qXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgJ2dyYXBoJyBtb2R1bGUgZm9yIGZvcm1mb3JtIChjKSAyMDE4IFBldGVyIEhvZm1hbm5cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKi9cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyB0aGlzLmdyYXBocyA9IFtdO1xuICB9O1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gRXh0ZW5zaW9ucyBvZiBGRm9ybVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgc3RhdGljIGpzb25TdHJpbmcoZm9ybSkge1xuICAgIGNvbnN0IGV4cGFuZGVkRm9ybSA9IHRoaXMuZXhwYW5kX3JlRW50cnkoZm9ybSk7XG4gICAgcmV0dXJuIHN1cGVyLmpzb25TdHJpbmcoZXhwYW5kZWRGb3JtKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gR3JhcGggcmVwcmVzZW50YXRpb25cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHN0YXRpYyBjcmVhdGVHcmFwaChncmFwaFR5cGUsIF9mb3JtLCBvcHRpb25zKSB7XG4gICAgY29uc3QgYWRkRW1wdHlSZUNoaWxkU3BhY2UgPSAoZ3JhcGhUeXBlID09PSAncGFjaycpO1xuXG4gICAgLy8gZXhwYW5kIHJlLWVudHJ5IHN0cnVjdHVyZSB0byBiZSB1c2FibGUgZm9yIGdyYXBoc1xuICAgIGNvbnN0IGZvcm0gPSB0aGlzLmV4cGFuZF9yZUVudHJ5KF9mb3JtLCB7YWRkRW1wdHlSZUNoaWxkU3BhY2U6IGFkZEVtcHR5UmVDaGlsZFNwYWNlfSk7XG4gICAgLy8gaW5pdGlhbGl6ZSB0aGUgZ3JhcGhcblxuICAgIGNvbnN0IGdyYXBoID0gbmV3IEQzR3JhcGgoZ3JhcGhUeXBlLCBmb3JtLCBvcHRpb25zKTtcbiAgICBncmFwaC5mb3JtdWxhID0gX2Zvcm07XG4gICAgLy8gZ3JhcGhzLnB1c2goIG5ldyBEM0dyYXBoKGdyYXBoVHlwZSwgZm9ybSwgb3B0aW9ucykgKTtcblxuICAgIHJldHVybiBncmFwaDtcbiAgfVxuXG4gIHN0YXRpYyBzYXZlR3JhcGgoZm9ybWF0LCBzdmcsIG5hbWUsIHNjYWxlKSB7XG4gICAgc2F2ZShmb3JtYXQsIHN2ZywgbmFtZSwgc2NhbGUpO1xuICB9XG5cbiAgc3RhdGljIGNvbnN0cnVjdE5lc3RlZChyZUZvcm0sIG9wdGlvbnM9e30pIHtcbiAgICAvKiBDb25zdHJ1Y3RzIGEgKHJlYWwpIG5lc3RlZCBmb3JtIHN0cnVjdHVyZSBmcm9tIHRoZSAubmVzdGVkIGFycmF5IG9mIHRoZSBvcmlnaW5hbCByZS1lbnRyeSBqc29uICovXG4gICAgbGV0IHNwYWNlID0gcmVGb3JtLnNwYWNlID0gW107XG4gICAgcmVGb3JtLm5lc3RlZC5yZXZlcnNlKCk7IC8vIE1VU1QgYmUgcmV2ZXJzZWQsIGJlY2F1c2Ugbm90YXRpb246IHtkZWVwZXN0LCAuLi4sIHNoYWxsb3dlc3R9XG5cbiAgICBmb3IobGV0IGkgaW4gcmVGb3JtLm5lc3RlZCkge1xuICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgIC8vIHByZXBlbmQgdGhlIHJlRW50cnkgbmVzdGluZyBiZWZvcmUgZXZlcnl0aGluZyBlbHNlIGluIHRoZSBzcGFjZVxuICAgICAgICBzcGFjZS51bnNoaWZ0KCB7dHlwZTogJ2Zvcm0nLCByZUNoaWxkOiB0cnVlLCBzcGFjZTogW119ICk7IC8vIHNwYWNlLnB1c2ggPC0gb3JkZXIgbGFzdFxuICAgICAgICBjb25zdCBuZXN0ZWRGb3JtID0gc3BhY2VbMF07IC8vIHNwYWNlW3NwYWNlLmxlbmd0aC0xXSA8LSBvcmRlciBsYXN0XG4gICAgICAgIFxuICAgICAgICBpZighcmVGb3JtLm5lc3RlZFtpXS51bm1hcmtlZCkgbmVzdGVkRm9ybS5zcGFjZS5wdXNoKHJlRm9ybS5uZXN0ZWRbaV0pO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvLyBuZXN0ZWRGb3JtLnNwYWNlLnB1c2gocmVGb3JtLm5lc3RlZFtpXSk7XG4gICAgICAgICAgbmVzdGVkRm9ybS5zcGFjZS5wdXNoKC4uLnJlRm9ybS5uZXN0ZWRbaV0uc3BhY2UpOyAvLyBwdXNoKHJlRm9ybS5uZXN0ZWRbaV0pIGZvciBncm91cGluZ1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhY2UgPSBuZXN0ZWRGb3JtLnNwYWNlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmKCFyZUZvcm0ubmVzdGVkW2ldLnVubWFya2VkKSBzcGFjZS5wdXNoKHJlRm9ybS5uZXN0ZWRbaV0pO1xuICAgICAgICAvLyBlbHNlIHNwYWNlLnB1c2gocmVGb3JtLm5lc3RlZFtpXSk7XG4gICAgICAgIGVsc2Ugc3BhY2UucHVzaCguLi5yZUZvcm0ubmVzdGVkW2ldLnNwYWNlKTsgLy8gcHVzaChyZUZvcm0ubmVzdGVkW2ldKSBmb3IgZ3JvdXBpbmdcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuYWRkRW1wdHlSZUNoaWxkU3BhY2UgJiYgKHNwYWNlLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgc3BhY2UucHVzaCgge3R5cGU6ICdzcGFjZSd9ICk7XG4gICAgICB9XG4gICAgfSAgICBcblxuICAgIC8vIHdlIG5lZWQgdG8gYWRkIGEgcG9pbnQgb2YgcmUtZW50cnkgdG8gdGhlIGxhc3QgbmVzdGVkIGZvcm1cbiAgICAvLyBmaXJzdCwgbGV0cyBhc3N1bWUgdGhpcyBpcyB0aGUgZm9ybSBpdHNlbGZcbiAgICBsZXQgbGFzdE5lc3RlZCA9IHJlRm9ybTtcbiAgICBcbiAgICBpZihyZUZvcm0uc3BhY2UubGVuZ3RoID4gMCkge1xuICAgICAgLy8gdGhlbiBsb29wIHVudGlsIHRoZSBsYXN0IHJlQ2hpbGQgaXMgZm91bmQgYW5kIG1ha2UgdGhpcyBvdXIgbGFzdCBuZXN0ZWQgZm9ybVxuICAgICAgXG4gICAgICB3aGlsZSAobGFzdE5lc3RlZC5zcGFjZVswXS5oYXNPd25Qcm9wZXJ0eSgncmVDaGlsZCcpKSB7ICAgICAgICBcbiAgICAgICAgbGFzdE5lc3RlZCA9IGxhc3ROZXN0ZWQuc3BhY2VbMF07XG4gICAgICAgIGlmIChsYXN0TmVzdGVkLnNwYWNlLmxlbmd0aCA8IDEpIGJyZWFrOyAvLyBwcmV2ZW50IGVycm9ycyB3aGVuIG5vdGhpbmcgaXMgZm91bmRcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZm9yIG9wZW4gcmUtZW50cmllcywgd2UgbmVlZCB0byBhZGQgYW5vdGhlciBuZXN0aW5nIChzZWUgdUZPUk0gaUZPUk0gZm9yIHJlZmVyZW5jZSlcbiAgICBpZihyZUZvcm0ubGFzdE9wZW4pIHtcbiAgICAgIGxhc3ROZXN0ZWQuc3BhY2UudW5zaGlmdCgge3R5cGU6ICdmb3JtJywgcmVDaGlsZDogdHJ1ZSwgc3BhY2U6IFtdfSApO1xuICAgICAgLy8gdGhlbiBhZGQgdGhlIHJlLWVudHJ5IHBvaW50IHRvIGVpdGhlciBzcGFjZVxuICAgICAgbGFzdE5lc3RlZC5zcGFjZVswXS5zcGFjZS51bnNoaWZ0KCB7dHlwZTogJ3JlRW50cnlQb2ludCd9ICk7XG4gICAgfVxuICAgIGVsc2UgbGFzdE5lc3RlZC5zcGFjZS51bnNoaWZ0KCB7dHlwZTogJ3JlRW50cnlQb2ludCd9ICk7XG5cbiAgICAvLyBsYXN0LCBkZWxldGUgdGhlIG5lc3RlZCBzdHJ1Y3R1cmUsIHdlIGRvbid0IG5lZWQgaXQgYW55bW9yZVxuICAgIGRlbGV0ZSByZUZvcm0ubmVzdGVkO1xuICAgIHJldHVybiByZUZvcm07XG4gIH1cblxuICBzdGF0aWMgZXhwYW5kX3JlRW50cnkoX2Zvcm0sIG9wdGlvbnM9e30pIHtcbiAgICBpZih0eXBlb2YoX2Zvcm0pICE9PSAnc3RyaW5nJykgX2Zvcm0gPSBKU09OLnN0cmluZ2lmeShfZm9ybSk7XG4gICAgY29uc3QgcmVmRm9ybSA9IHRoaXMucGFyc2VMaW5lYXIoX2Zvcm0pO1xuICAgIGxldCB0YXJnZXRGb3JtID0gdGhpcy5wYXJzZUxpbmVhcihfZm9ybSk7XG5cbiAgICAvLyB3ZSBtdXN0IGtlZXAgYSBydW5uaW5nIGluZGV4IHRvIG5vdCBjb25mdXNlIGlkZW50aWNhbCBmb3JtcyB3aGlsZSByZWNvbnN0cnVjdGluZyB0aGUgcmVFbnRyaWVzXG4gICAgLy8gTm90ZTogdGhpcyBzaG91bGQgYmUgZG9uZSBtb3JlIGVmZmljaWVudGx5IGluIHRoZSBmdXR1cmVcbiAgICBsZXQgcnVubmluZ0luZGV4ID0gMDtcbiAgICB0aGlzLnRyYXZlcnNlRm9ybShyZWZGb3JtLCBmdW5jdGlvbihicmFuY2gpIHsgYnJhbmNoLnJ1bm5pbmdJbmRleCA9IHJ1bm5pbmdJbmRleCwgcnVubmluZ0luZGV4Kys7IH0pO1xuICAgIHJ1bm5pbmdJbmRleCA9IDA7XG4gICAgdGhpcy50cmF2ZXJzZUZvcm0odGFyZ2V0Rm9ybSwgZnVuY3Rpb24oYnJhbmNoKSB7IGJyYW5jaC5ydW5uaW5nSW5kZXggPSBydW5uaW5nSW5kZXgsIHJ1bm5pbmdJbmRleCsrOyB9KTtcblxuICAgIHRoaXMudHJhdmVyc2VGb3JtKHJlZkZvcm0sIGZ1bmN0aW9uKHJlZkJyYW5jaCkge1xuXG4gICAgICBpZihyZWZCcmFuY2gudHlwZSA9PT0gJ3JlRW50cnknKSB7XG4gICAgICAgIHRoaXMudHJhdmVyc2VGb3JtKHRhcmdldEZvcm0sIGZ1bmN0aW9uKHRhcmdldEJyYW5jaCkge1xuXG4gICAgICAgICAgaWYoIChKU09OLnN0cmluZ2lmeShyZWZCcmFuY2gpID09PSBKU09OLnN0cmluZ2lmeSh0YXJnZXRCcmFuY2gpKSAmJiBcbiAgICAgICAgICAgICAgKHJlZkJyYW5jaC5ydW5uaW5nSW5kZXggPT09ICh0YXJnZXRCcmFuY2guaGFzT3duUHJvcGVydHkoJ3J1bm5pbmdJbmRleCcpID8gdGFyZ2V0QnJhbmNoLnJ1bm5pbmdJbmRleCA6IG51bGwpKSApIHtcbiAgICAgICAgICAgIHRhcmdldEJyYW5jaCA9IHRoaXMuY29uc3RydWN0TmVzdGVkKHRhcmdldEJyYW5jaCwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gZGVsZXRlIHJ1bm5pbmcgaW5kZXggcHJvcGVydHlcbiAgICB0aGlzLnRyYXZlcnNlRm9ybSh0YXJnZXRGb3JtLCBmdW5jdGlvbihicmFuY2gpIHsgZGVsZXRlIGJyYW5jaC5ydW5uaW5nSW5kZXg7IH0pO1xuXG4gICAgcmV0dXJuIHRhcmdldEZvcm07XG4gIH1cblxuXG59IiwiaW1wb3J0IGNhbGMgZnJvbSAnLi9jb3JlL2ZjYWxjJztcbmltcG9ydCBmb3JtIGZyb20gJy4vY29yZS9mZm9ybSc7XG5pbXBvcnQgZ3JhcGggZnJvbSAnLi9jb3JlL2ZncmFwaCc7XG5cbi8vIGV4cG9ydCB7ZGVmYXVsdCBhcyBjYWxjfSBmcm9tICcuL2NvcmUvZmNhbGMnO1xuLy8gZXhwb3J0IHtkZWZhdWx0IGFzIGZvcm19IGZyb20gJy4vY29yZS9mZm9ybSc7XG4vLyBleHBvcnQge2RlZmF1bHQgYXMgZ3JhcGh9IGZyb20gJy4vY29yZS9mZ3JhcGgnO1xuXG5leHBvcnQgZGVmYXVsdCB7IGNhbGMsIGZvcm0sIGdyYXBoIH07IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IGJveG1vZGVsRDMgZnJvbSAnYm94bW9kZWwtbGF5b3V0LWZvci1kMyc7XG5cbmltcG9ydCB7IHNhdmVTdmcsIHNhdmVJbWcsIHBhZCwgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcic7XG5pbXBvcnQgY2hhcnRGYWN0b3J5LCB7IGZpdENoYXJ0LCB0ZXh0U2l6ZSwgdGV4dFN1YnNjcmlwdCwgY2lyY2xlTGFiZWwgfSBmcm9tICcuLi8uLi9jb21tb24vZDMtaGVscGVyJztcblxuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vZDMtc3R5bGVzLmpzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEM0dyYXBoIHtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICAgICAgICAgICAgICAgICAgICBWaXN1YWxpemF0aW9uIFNldHVwXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNvbnN0cnVjdG9yKGdyYXBoVHlwZSwgZGF0YSwgb3B0cywgLi4uYXJncykge1xuICAgICAgICAvLyBjcmVhdGUgYmFzaWMgc3ZnLXN0cnVjdHVyZSBmcm9tIGNoYXJ0RmFjdG9yeSBhbmQgbWVyZ2Ugb3B0aW9ucyB3aXRoIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgY29uc3QgcHJvdG8gPSBjaGFydEZhY3RvcnkoIHsgXG4gICAgICAgICAgICAuLi57IG1hcmdpbjogeyBsZWZ0OiA1MCwgcmlnaHQ6IDUwLCB0b3A6IDUwLCBib3R0b206IDUwIH0sIFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHsgbGVmdDogMTAsIHJpZ2h0OiAxMCwgdG9wOiAxMCwgYm90dG9tOiAxMCB9LFxuICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IHsgbGVmdDogMCwgcmlnaHQ6IDAsIHRvcDogMCwgYm90dG9tOiAwIH0sXG4gICAgICAgICAgICAgICAgc3R5bGVDbGFzczogJ2Jhc2ljJyB9LFxuICAgICAgICAgICAgLi4ub3B0c1xuICAgICAgICB9ICk7XG5cbiAgICAgICAgLy8gbWVyZ2UgdGhpcyBncmFwaCB3aXRoIHRoZSBjaGFydCBzdHJ1Y3R1cmVcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwcm90byk7XG4gICAgICAgIC8vIGNhbGN1bGF0ZSBpbm5lciBkaW1lbnNpb25zIG9mIHRoZSBzdmctY2hhcnRcbiAgICAgICAgdGhpcy5pbm5lckhlaWdodCA9IHRoaXMuaGVpZ2h0IC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tIC0gdGhpcy5wYWRkaW5nLnRvcCAtIHRoaXMucGFkZGluZy5ib3R0b207XG4gICAgICAgIHRoaXMuaW5uZXJXaWR0aCA9IHRoaXMud2lkdGggLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQgLSB0aGlzLnBhZGRpbmcubGVmdCAtIHRoaXMucGFkZGluZy5yaWdodDtcblxuICAgICAgICAvLyBjYWxsIHRoZSBhcHByb3ByaWF0ZSBtZXRob2QgdG8gYnVpbGQgdGhlIGdyYXBoXG4gICAgICAgIHRoaXMuY29uc3RydWN0b3JbZ3JhcGhUeXBlXS5jYWxsKHRoaXMsIGRhdGEsIC4uLmFyZ3MpO1xuICAgIH1cblxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyAgICAgICAgICAgICAgICBEZXB0aCBUcmVlIHZpc3VhbGl6YXRpb25cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgc3RhdGljIHRyZWUoZGF0YSkge1xuICAgICAgICBjb25zdCBjaGFydCA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICAvLyBjcmVhdGUgYSBkMy1oaWVyYXJjaHkgZnJvbSBvdXIgZm9ybS1qc29uXG4gICAgICAgIGNvbnN0IHJvb3QgPSBkMy5oaWVyYXJjaHkoZGF0YSwgZCA9PiBkLnNwYWNlKTtcblxuICAgICAgICAvLyBzZXQgdXAgZGVzaWduIHZhcmlhYmxlc1xuICAgICAgICBjb25zdCBkZXNpZ24gPSBzdHlsZXMudHJlZVt0aGlzLnN0eWxlQ2xhc3NdO1xuICAgICAgICBjb25zdCBbbm9kZVNpemUsIG5vZGVTZXBdID0gW2Rlc2lnbi5ub2RlU2l6ZSwgZGVzaWduLm5vZGVTZXBhcmF0aW9uXTtcbiAgICAgICAgY29uc3QgW2ZvbnRTaXplLCBmb250XSA9IFtkZXNpZ24uZm9udC5zaXplLCBkZXNpZ24uZm9udC5mYW1pbHldO1xuXG4gICAgICAgIHRoaXMucGFkZGluZyA9IHsgbGVmdDogMTAsIHJpZ2h0OiAxMCwgdG9wOiAxMCwgYm90dG9tOiAxMCB9O1xuXG4gICAgICAgIHJvb3QuZHggPSBub2RlU2l6ZS53ICsgbm9kZVNlcC5oejtcbiAgICAgICAgcm9vdC5keSA9IHRoaXMud2lkdGggLyAocm9vdC5oZWlnaHQgKyAxKTtcblxuICAgICAgICAvLyBkZWZpbmUgdHJlZSBsYXlvdXRcbiAgICAgICAgY29uc3QgbGF5b3V0ID0gZDMudHJlZSgpXG4gICAgICAgICAgICAubm9kZVNpemUoW1xuICAgICAgICAgICAgICAgIHJvb3QuZHgsXG4gICAgICAgICAgICAgICAgcm9vdC5keVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIC5zZXBhcmF0aW9uKChhLGIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5wYXJlbnQgPT0gYi5wYXJlbnQgPyAxIDogMjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0cmVlID0gbGF5b3V0KHJvb3QpO1xuXG4gICAgICAgIC8vIGNvbXB1dGUgbWluL21heCB4LXZhbHVlc1xuICAgICAgICBsZXQgeDAgPSBJbmZpbml0eTtcbiAgICAgICAgbGV0IHgxID0gLXgwO1xuICAgICAgICB0cmVlLmVhY2goZCA9PiB7XG4gICAgICAgICAgICBpZiAoZC54ID4geDEpIHgxID0gZC54O1xuICAgICAgICAgICAgaWYgKGQueCA8IHgwKSB4MCA9IGQueDtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbXB1dGUgbmV3IGhlaWdodCBiYXNlZCBvbiB0aGUgZGlmZmVyZW5jZSBvZiBtaW4vbWF4IHgtdmFsdWVzIG9mIHRyZWUgbm9kZXMgKyB0d2ljZSB0aGUgcGFkZGluZ1xuICAgICAgICBjb25zdCByb290VW5tYXJrZWQgPSByb290LmRhdGEudW5tYXJrZWQ7XG4gICAgICAgIGNvbnN0IHRpY2twYWRkaW5nID0gbm9kZVNpemUuaCoxLjg7XG4gICAgICAgIGNvbnN0IGF4aXNIZWlnaHQgPSB0aWNrcGFkZGluZzsgLy8zMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAoeDEgLSB4MCkgKyB0aGlzLnBhZGRpbmcudG9wKjIgKyBub2RlU2l6ZS5oKzIgKyBheGlzSGVpZ2h0O1xuXG4gICAgICAgIC8vIHNldHVwIHN2ZyBjb250YWluZXJcbiAgICAgICAgdGhpcy5zdmdcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMud2lkdGgpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5oZWlnaHQpO1xuICAgICAgICBzdHlsZXMuY2xlYXJEZWZhdWx0cyh0aGlzLnN2Zyk7IC8vIGNsZWFyIGRlZmF1bHQgc3R5bGVzIGZvciBzdmcgZXhwb3J0XG5cbiAgICAgICAgLy8gc2V0dXAgYmFzaWMgY2hhcnQgc3RydWN0dXJlXG4gICAgICAgIGNoYXJ0XG4gICAgICAgICAgICAuY2xhc3NlZCgnZ3JhcGgtdHJlZScsIHRydWUpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0aGlzLnBhZGRpbmcubGVmdCArIG5vZGVTaXplLncvMiArIChyb290LmRhdGEudW5tYXJrZWQgPyAtcm9vdC5keSA6IDApfSwke3RoaXMucGFkZGluZy50b3AgLSB4MCArIG5vZGVTaXplLmgvMn0pYCk7XG4gICAgICAgIFxuICAgICAgICAvLyBhZGQgdmVydGljYWwgYXhpcyBsaW5lcyBmb3IgZGVwdGhcblxuICAgICAgICBjb25zdCByb290SGVpZ2h0cyA9IGQzLnJhbmdlKHJvb3QuaGVpZ2h0ICsgKHJvb3RVbm1hcmtlZCA/IDA6MSkpO1xuXG4gICAgICAgIHRoaXMuZGVwdGhTY2FsZSA9IGQzLnNjYWxlT3JkaW5hbCgpXG4gICAgICAgICAgICAuZG9tYWluKCByb290SGVpZ2h0cyApXG4gICAgICAgICAgICAucmFuZ2UoIHJvb3RIZWlnaHRzLm1hcChpID0+IChpKyhyb290VW5tYXJrZWQgPyAxOjApKSpyb290LmR5KSApO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGVwdGhBeGlzID0gZDMuYXhpc0JvdHRvbSgpXG4gICAgICAgICAgICAuc2NhbGUodGhpcy5kZXB0aFNjYWxlKVxuICAgICAgICAgICAgLnRpY2tTaXplSW5uZXIoLSh4MS14MCkpXG4gICAgICAgICAgICAudGlja1NpemVPdXRlcigwKVxuICAgICAgICAgICAgLnRpY2tQYWRkaW5nKHRpY2twYWRkaW5nKVxuICAgICAgICAgICAgLnRpY2tWYWx1ZXMoIHRoaXMuZGVwdGhTY2FsZS5kb21haW4oKS5tYXAoaSA9PiBcbiAgICAgICAgICAgICAgICAodGhpcy5kZXB0aFNjYWxlLmRvbWFpbigpLmxlbmd0aCA8IDE1KSA/ICdEZXB0aCAnK2kgOiBpXG4gICAgICAgICAgICApICk7XG5cbiAgICAgICAgY29uc3QgYXhpcyA9IGNoYXJ0LmFwcGVuZCgnZycpXG4gICAgICAgICAgICAuY2xhc3NlZCgnZGVwdGhBeGlzJywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsICR7eDF9KWApXG4gICAgICAgICAgICAuY2FsbChkZXB0aEF4aXMpO1xuICAgICAgICBheGlzLnNlbGVjdCgnLmRvbWFpbicpLnJlbW92ZSgpO1xuICAgICAgICBcblxuICAgICAgICAvLyBhZGQgZ3JvdXBzIGZvciBsaW5rcyBhbmQgbm9kZXNcblxuICAgICAgICBjb25zdCBsaW5rcyA9IGNoYXJ0LnNlbGVjdEFsbCgnLmxpbmsnKVxuICAgICAgICAgICAgLmRhdGEodHJlZS5saW5rcygpKSBcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoJ2xpbmsnLCB0cnVlKVxuXG4gICAgICAgIGNvbnN0IG5vZGVzID0gY2hhcnQuc2VsZWN0QWxsKCcubm9kZScpXG4gICAgICAgICAgICAuZGF0YSh0cmVlLmRlc2NlbmRhbnRzKCkpXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdub2RlJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC55fSwke2QueH0pYCk7XG5cbiAgICAgICAgaWYgKHJvb3RVbm1hcmtlZCkge1xuICAgICAgICAgICAgbGlua3MuZmlsdGVyKGQgPT4gZC5zb3VyY2UuZGVwdGggPT09IDApXG4gICAgICAgICAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBub2Rlcy5maWx0ZXIoZCA9PiBkLmRlcHRoID09PSAwKVxuICAgICAgICAgICAgICAgIC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdlbmVyYXRlIGxpbmsgcGFydGl0aW9uIHNlbGVjdGlvbnNcbiAgICAgICAgY29uc3QgbGlua1BhcnRpdGlvbnMgPSByZXNvbHZlTGlua3ModHJlZSwgbGlua3MpO1xuICAgICAgICBjb25zdCBbcmVDaGlsZExpbmssIHJlUG9pbnRMaW5rXSA9IGxpbmtQYXJ0aXRpb25zO1xuXG4gICAgICAgIC8vIGdlbmVyYXRlIG5vZGUgcGFydGl0aW9uIHNlbGVjdGlvbnNcbiAgICAgICAgY29uc3Qgbm9kZVBhcnRpdGlvbnMgPSByZXNvbHZlTm9kZXModHJlZSwgbm9kZXMpO1xuICAgICAgICBjb25zdCBbbGVhdmVzLCBzZXRzLCBmb3JtcywgcmVFbnRyaWVzLCByZUNoaWxkcywgcmVQb2ludHMsIGVsZW1lbnRzLCB2YXJzLCBjb25zdHMsIHVuY2xlYXJdID0gbm9kZVBhcnRpdGlvbnM7XG5cbiAgICAgICAgLy8gY3VydmVkIGxpbmUgZ2VuZXJhdG9yXG4gICAgICAgIGNvbnN0IGxpbmUgPSBkMy5saW5lKCkuY3VydmUoZDMuY3VydmVCYXNpcyk7XG5cbiAgICAgICAgbGlua3NcbiAgICAgICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkJywgZDMubGlua0hvcml6b250YWwoKVxuICAgICAgICAgICAgICAgICAgICAueChkID0+IGQueSlcbiAgICAgICAgICAgICAgICAgICAgLnkoZCA9PiBkLngpKTtcblxuICAgICAgICBub2Rlcy5maWx0ZXIoZCA9PiAhZC5kYXRhLnVubWFya2VkKVxuICAgICAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgICAgIC5hdHRyKCdyJywgbm9kZVNpemUudy8yKVxuICAgICAgICByZVBvaW50cy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCBub2RlU2l6ZS53LzIgKyAyKVxuICAgICAgICAgICAgLnRleHQoZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHAgPSBkLnBhcmVudDtcbiAgICAgICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUocC5kYXRhLnR5cGUgIT09ICdyZUVudHJ5Jykge1xuICAgICAgICAgICAgICAgICAgICBwID0gcC5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudGVyID4gMTAwMCkgcmV0dXJuIG51bGw7IC8vIHNlY3VyaXR5XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIChwLmRhdGEucmVFdmVuICE9PSAndW5kZWZpbmVkJykgPyAocC5kYXRhLnJlRXZlbiA/ICcyfHJ8JyA6ICcyfHJ8KzEnKSA6ICcnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZWxlbWVudHMuc2VsZWN0QWxsKCdjaXJjbGUnKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCAobm9kZVNpemUudy8yKS8yKTtcblxuICAgICAgICBub2Rlc1xuICAgICAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneCcsIG5vZGVTaXplLncvMiArIDIpXG4gICAgICAgIFxuICAgICAgICB2YXJzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgICAgICAuY2FsbCh0ZXh0U3Vic2NyaXB0KGQgPT4gZC5kYXRhLnN5bWJvbCkpO1xuICAgICAgICBjb25zdHMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gYD0gJHtkLmRhdGEudmFsdWV9YCk7XG4gICAgICAgIHVuY2xlYXIuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gYC8ke2QuZGF0YS5zeW1ib2x9L2ApO1xuXG4gICAgICAgIHNldHMuZmlsdGVyKGQgPT4gZC5jaGlsZHJlbilcbiAgICAgICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgICAgICAuY2xhc3NlZCgnaW5uZXInLHRydWUpXG4gICAgICAgICAgICAuYXR0cigncicsIChub2RlU2l6ZS53LzIpLzIpO1xuXG5cbiAgICAgICAgLy8gYXBwbHkgYWxsIHN0eWxlLXJlbGF0ZWQgYXR0cmlidXRlcyB0byB0aGUgc2VsZWN0aW9uc1xuICAgICAgICBkZXNpZ24uYXBwbHlBeGlzU3R5bGVzKGF4aXMpO1xuICAgICAgICBkZXNpZ24uYXBwbHlMaW5rU3R5bGVzKGxpbmtzLCBsaW5rUGFydGl0aW9ucyk7XG4gICAgICAgIGRlc2lnbi5hcHBseU5vZGVTdHlsZXMobm9kZXMsIG5vZGVQYXJ0aXRpb25zKTtcblxuICAgICAgICBmaXRDaGFydChjaGFydCwgdGhpcy5wYWRkaW5nKTtcblxuICAgICAgICAvLyBkZWJ1Z2dpbmc6XG4gICAgICAgIC8vIFt0aGlzLnJvb3QsIHRoaXMubGF5b3V0LCB0aGlzLmNoYXJ0LCB0aGlzLnRyZWUsIHRoaXMuZGVzaWduXSA9IFxuICAgICAgICAvLyAgICAgW3Jvb3QsIGxheW91dCwgY2hhcnQsIHRyZWUsIGRlc2lnbl07XG4gICAgfVxuXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vICAgICAgICAgICAgICAgIENpcmNsZSBwYWNraW5nIHZpc3VhbGl6YXRpb25cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgc3RhdGljIHBhY2soZGF0YSkge1xuICAgICAgICBjb25zdCBjaGFydCA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICAvLyBjcmVhdGUgYSBkMy1oaWVyYXJjaHkgZnJvbSBvdXIgZm9ybS1qc29uXG4gICAgICAgIHN0eWxlcy5jbGVhckRlZmF1bHRzKHRoaXMuc3ZnKTsgLy8gY2xlYXIgZGVmYXVsdCBzdHlsZXMgZm9yIHN2ZyBleHBvcnRcblxuICAgICAgICBjb25zdCByb290ID0gZDMuaGllcmFyY2h5KGRhdGEsIGQgPT4gZC5zcGFjZSlcbiAgICAgICAgICAgIC5zdW0oZCA9PiBkLmNoaWxkcmVuID8gMCA6IDEpO1xuXG4gICAgICAgIC8vIHNldCB1cCBkZXNpZ24gdmFyaWFibGVzXG4gICAgICAgIGNvbnN0IGRlc2lnbiA9IHN0eWxlcy5wYWNrW3RoaXMuc3R5bGVDbGFzc107XG4gICAgICAgIGNvbnN0IFtyYWRpdXMsIHBhZGRpbmddID0gW2Rlc2lnbi5yYWRpdXMsIGRlc2lnbi5wYWRkaW5nXTtcbiAgICAgICAgY29uc3QgW2ZvbnRTaXplLCBmb250XSA9IFtkZXNpZ24uZm9udC5zaXplLCBkZXNpZ24uZm9udC5mYW1pbHldO1xuXG4gICAgICAgIC8vIGRlZmluZSBwYWNrIGxheW91dFxuICAgICAgICBjb25zdCBsYXlvdXQgPSBkMy5wYWNrKClcbiAgICAgICAgLnBhZGRpbmcoZCA9PiB7XG4gICAgICAgICAgICBsZXQgcGFkID0gcGFkZGluZztcbiAgICAgICAgICAgIGlmIChkLmRhdGEudHlwZSA9PT0gJ2Zvcm0nICYmIGQuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGQuY2hpbGRyZW5bMF0uZGF0YS50eXBlID09PSAnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgIHBhZCA9IHBhZCAqIDAuNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkLmRhdGEudW5tYXJrZWQgJiYgZC5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHBhZCA9IDA7XG4gICAgICAgICAgICByZXR1cm4gcGFkO1xuICAgICAgICB9KVxuICAgICAgICAucmFkaXVzKGQgPT4ge1xuICAgICAgICAgICAgbGV0IHJhZCA9IHJhZGl1cztcbiAgICAgICAgICAgIGlmKHR5cGVvZihkLmRhdGEuc3ltYm9sKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByYWQgPSB0ZXh0U2l6ZShkLmRhdGEuc3ltYm9sLCBmb250U2l6ZSwgZm9udCkud2lkdGggLzI7XG4gICAgICAgICAgICAgICAgaWYoZC5kYXRhLnR5cGUgPT09ICd1bmNsZWFyJykgcmFkICs9IHBhZGRpbmcqMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZC5kYXRhLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmFkID0gdGV4dFNpemUoZC5kYXRhLnZhbHVlKycnLCBmb250U2l6ZSwgZm9udCkud2lkdGggLzI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGQuZGF0YS5jaGlsZHJlbiB8fCBkLmRhdGEudHlwZSA9PT0gJ3JlRW50cnlQb2ludCcgfHzCoGQuZGF0YS50eXBlID09PSAnc3BhY2UnKSByYWQgPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHJhZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHBhY2sgPSBsYXlvdXQocm9vdCk7XG5cbiAgICAgICAgLy8gc2V0dXAgYmFzaWMgY2hhcnQgc3RydWN0dXJlXG4gICAgICAgIGNoYXJ0LmF0dHIoJ2NsYXNzJywgJ2dyYXBoLXBhY2snKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtwYWNrLnIgKyB0aGlzLnBhZGRpbmcubGVmdH0sJHtwYWNrLnIgKyB0aGlzLnBhZGRpbmcudG9wfSlgKTtcblxuICAgICAgICBjb25zdCBub2RlcyA9IGNoYXJ0LnNlbGVjdEFsbCgnLm5vZGUnKVxuICAgICAgICAgICAgLmRhdGEocGFjay5kZXNjZW5kYW50cygpKVxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnbm9kZScsIHRydWUpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueH0sJHtkLnl9KWApO1xuXG4gICAgICAgIC8vIGdlbmVyYXRlIG5vZGUgcGFydGl0aW9uIHNlbGVjdGlvbnNcbiAgICAgICAgY29uc3Qgbm9kZVBhcnRpdGlvbnMgPSByZXNvbHZlTm9kZXMocGFjaywgbm9kZXMpO1xuICAgICAgICBjb25zdCBbbGVhdmVzLCBzZXRzLCBmb3JtcywgcmVFbnRyaWVzLCByZUNoaWxkcywgcmVQb2ludHMsIGVsZW1lbnRzLCB2YXJzLCBjb25zdHMsIHVuY2xlYXJdID0gbm9kZVBhcnRpdGlvbnM7XG5cbiAgICAgICAgLy8gZGVmaW5lIGRldGFpbGxlZCBzdHJ1Y3R1cmUvbG9naWNcblxuICAgICAgICBzZXRzLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgICAgIC5hdHRyKCdyJywgZCA9PiBkLnIpO1xuICAgICAgICB2YXJzLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuY2FsbCh0ZXh0U3Vic2NyaXB0KGQgPT4gZC5kYXRhLnN5bWJvbCkpO1xuXG4gICAgICAgIGNvbnN0cy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBkLmRhdGEudmFsdWUpO1xuXG4gICAgICAgIHVuY2xlYXIuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IFxuICAgICAgICAgICAgYHNrZXdYKC0zMCkgdHJhbnNsYXRlKCR7LShkLnIgLSBwYWRkaW5nKX0sXG4gICAgICAgICAgICAkey0odGV4dFNpemUoJ3gnLGZvbnRTaXplLCBmb250KS5oZWlnaHQgKyBwYWRkaW5nKjIpLzJ9KWApXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBkID0+IGQucioyIC0gcGFkZGluZyoyKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGQgPT4gKHRleHRTaXplKCd4Jyxmb250U2l6ZSwgZm9udCkuaGVpZ2h0ICsgcGFkZGluZyoyKSlcbiAgICAgICAgdW5jbGVhci5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmNhbGwodGV4dFN1YnNjcmlwdChkID0+IGQuZGF0YS5zeW1ib2wpKTtcblxuICAgICAgICByZVBvaW50c1xuICAgICAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgICAgIC5hdHRyKCdyJywgMS41KTtcblxuICAgICAgICByZUVudHJpZXMuZmlsdGVyKGQgPT4gZC5kYXRhLnJlRXZlbiAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAuY2FsbChjaXJjbGVMYWJlbCggZCA9PiBkLmRhdGEucmVFdmVuID8gJzJ8cnwnIDogJzJ8cnwrMScsIGRlc2lnbi5mb250Q29udGV4dC5zaXplLCBkZXNpZ24uZm9udENvbnRleHQuZmFtaWx5ICkpO1xuXG4gICAgICAgIC8vIGFwcGx5IGFsbCBzdHlsZS1yZWxhdGVkIGF0dHJpYnV0ZXMgdG8gdGhlIHNlbGVjdGlvbnNcbiAgICAgICAgZGVzaWduLmFwcGx5Tm9kZVN0eWxlcyhub2Rlcywgbm9kZVBhcnRpdGlvbnMsIGNoYXJ0KTtcblxuICAgICAgICBmaXRDaGFydChjaGFydCwgdGhpcy5wYWRkaW5nKTtcblxuICAgICAgICAvLyBkZWJ1Z2dpbmc6XG4gICAgICAgIC8vIFt0aGlzLnJvb3QsIHRoaXMubGF5b3V0LCB0aGlzLmNoYXJ0LCB0aGlzLnBhY2ssIHRoaXMuZGVzaWduXSA9IFxuICAgICAgICAvLyAgICAgW3Jvb3QsIGxheW91dCwgY2hhcnQsIHBhY2ssIGRlc2lnbl07XG4gICAgfVxuXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIEJveG1vZGVsIHZpc3VhbGl6YXRpb24gKFNwZW5jZXItQnJvd24gaG9vayBub3RhdGlvbilcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgc3RhdGljIGdzYmhvb2tzKGRhdGEpIHtcbiAgICAgICAgY29uc3QgY2hhcnQgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgLy8gY3JlYXRlIGEgZDMtaGllcmFyY2h5IGZyb20gb3VyIGZvcm0tanNvblxuICAgICAgICBzdHlsZXMuY2xlYXJEZWZhdWx0cyh0aGlzLnN2Zyk7IC8vIGNsZWFyIGRlZmF1bHQgc3R5bGVzIGZvciBzdmcgZXhwb3J0XG5cbiAgICAgICAgY29uc3Qgcm9vdCA9IGQzLmhpZXJhcmNoeShkYXRhLCBkID0+IGQuc3BhY2UpXG4gICAgICAgICAgICAuc3VtKGQgPT4gZC5zcGFjZSA/IDAgOiAxKTtcblxuICAgICAgICB0aGlzLnN0eWxlQ2xhc3MgPSAnYmFzaWMnO1xuICAgICAgICBjb25zdCBjb21wYWN0UmVFbnRyeSA9ICh0aGlzLmNvbXBhY3RDaGVja2VkICE9PSBudWxsKSA/IHRoaXMuY29tcGFjdENoZWNrZWQgOiB0cnVlO1xuXG4gICAgICAgIC8vIHNldCB1cCBkZXNpZ24gdmFyaWFibGVzXG4gICAgICAgIGNvbnN0IGRlc2lnbiA9IHN0eWxlcy5ib3htb2RlbFt0aGlzLnN0eWxlQ2xhc3NdO1xuICAgICAgICBjb25zdCB7ZWxlbU1hcmdpbiwgZm9ybU1hcmdpbiwgZm9ybVBhZGRpbmcsIG1pbkZvcm1TaXplLCBtYXhMaW5lV2lkdGgsIGZvbnRWYXIsIGZvbnRDb25zdCwgZm9udENvbnRleHQsIGxhYmVsc30gPSB7Li4uZGVzaWdufTtcbiAgICAgICAgY29uc3QgdW5jbGVhclBhZCA9IHtoejogZWxlbU1hcmdpbi5oei8yLCB2dDogZWxlbU1hcmdpbi52dH07XG4gICAgICAgIGNvbnN0IGRhdGFMYWJlbFBhZCA9IDQ7XG5cbiAgICAgICAgLy8gZGVmaW5lIGJveG1vZGVsIGxheW91dFxuICAgICAgICBjb25zdCBsYXlvdXQgPSBib3htb2RlbEQzKClcbiAgICAgICAgICAgIC52QWxpZ24oJ2JvdHRvbScpXG4gICAgICAgICAgICAuZWRnZU1hcmdpbnMoZCA9PiAhKGlzQ29udGFpbmVyKGQpICYmICFkLnBhcmVudC5wYXJlbnQgJiYgZC5wYXJlbnQuZGF0YS51bm1hcmtlZCkgKVxuICAgICAgICAgICAgLmlzQ29udGFpbmVyKGQgPT4gaXNDb250YWluZXIoZCkpXG4gICAgICAgICAgICAucGFkZGluZyhkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcCA9IHtsZWZ0OiAwLCByaWdodDogMCwgdG9wOiAwLCBib3R0b206IDB9O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChpc0NvbnRhaW5lcihkKSkge1xuICAgICAgICAgICAgICAgICAgICBwLmxlZnQgPSBwLnJpZ2h0ID0gZm9ybVBhZGRpbmcuaHo7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkLmRhdGEudHlwZSA9PT0gJ3JlRW50cnknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gZC5kYXRhLnJlRXZlbiA/IGxhYmVscy5yZUV2ZW4gOiBsYWJlbHMucmVPZGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eHRTeiA9IHRleHRTaXplKHRleHQsIGZvbnRDb250ZXh0LnNpemUsIGZvbnRDb250ZXh0LmZhbWlseSwgZm9udENvbnRleHQuc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcC5ib3R0b20gPSB0eHRTei5oZWlnaHQgKyBlbGVtTWFyZ2luLnZ0LzI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXJnaW4oZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG0gPSB7bGVmdDogMCwgcmlnaHQ6IDAsIHRvcDogMCwgYm90dG9tOiAwfTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoaXNDb250YWluZXIoZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbS50b3AgPSBmb3JtTWFyZ2luLnRvcDtcbiAgICAgICAgICAgICAgICAgICAgbS5yaWdodCA9IGZvcm1NYXJnaW4ucmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkLmRlcHRoID09PSAwKSBtLnRvcCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkLmRhdGEucmVDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQucGFyZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkgbS5yaWdodCA9IG1pbkZvcm1TaXplLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQucGFyZW50LmRhdGEubGFzdE9wZW4pIG0udG9wID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wYWN0UmVFbnRyeSAmJiBkLnBhcmVudC5kYXRhLnJlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShkLmNoaWxkcmVuWzBdLmRhdGEudHlwZSA9PT0gJ3JlRW50cnlQb2ludCcgJiYgcmVQYXJlbnRMYXN0T3BlbihkKSkpIG0udG9wID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkLmRhdGEudHlwZSAhPT0gJ3JlRW50cnlQb2ludCcpIHsgLy8gYWxsIG90aGVyIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIG0udG9wID0gbS5ib3R0b20gPSBlbGVtTWFyZ2luLnZ0O1xuICAgICAgICAgICAgICAgICAgICBtLmxlZnQgPSBtLnJpZ2h0ID0gZWxlbU1hcmdpbi5oejtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvbnRWYXIuc3R5bGUgPT0gJ2l0YWxpYycpIG0ucmlnaHQgKz0gMTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZC5kYXRhLnR5cGUgPT09ICd1bmNsZWFyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbS5ib3R0b20gPSAoZC5kYXRhLnN5bWJvbC5zcGxpdCgnXycpLmxlbmd0aCA+IDEpID8gLTYgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbS5ib3R0b20gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGQuZGF0YS50eXBlID09PSAncmVFbnRyeVBvaW50Jykge1xuICAgICAgICAgICAgICAgICAgICBtLnJpZ2h0ID0gZm9ybU1hcmdpbi5yaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zcGFuSGVpZ2h0KGQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzcGFuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBhY3RSZUVudHJ5ICYmIGQuZGF0YS5yZUNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc3BhbjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1pbkNvbnRhaW5lclNpemUoZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHcgPSBtaW5Gb3JtU2l6ZS53aWR0aDtcbiAgICAgICAgICAgICAgICBsZXQgaCA9IG1pbkZvcm1TaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICBpZiAoZC5kYXRhLnJlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQuY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIGQuY2hpbGRyZW5bMF0uZGF0YS50eXBlID09PSAncmVFbnRyeVBvaW50Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlUGFyZW50TGFzdE9wZW4oZCkpIHcgPSBtaW5Gb3JtU2l6ZS53aWR0aC8yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkLmRhdGEudHlwZSA9PT0gJ3JlRW50cnknICYmIGQuY2hpbGRyZW4ubGVuZ3RoIDw9IDIgJiYgZC5jaGlsZHJlblswXS5kYXRhLnR5cGUgPT09ICdyZUVudHJ5UG9pbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkLmRhdGEucmVFdmVuID8gbGFiZWxzLnJlRXZlbiA6IGxhYmVscy5yZU9kZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR4dFN6ID0gdGV4dFNpemUodGV4dCwgZm9udENvbnRleHQuc2l6ZSwgZm9udENvbnRleHQuZmFtaWx5LCBmb250Q29udGV4dC5zdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgIHcgPSB0eHRTei53aWR0aCArIGRhdGFMYWJlbFBhZCoyO1xuICAgICAgICAgICAgICAgICAgICB3ID0gdyA8IG1pbkZvcm1TaXplLndpZHRoID8gbWluRm9ybVNpemUud2lkdGggOiB3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge3dpZHRoOiB3LCBoZWlnaHQ6IGh9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWF4TGluZVdpZHRoKGQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB3ID0gbWF4TGluZVdpZHRoO1xuICAgICAgICAgICAgICAgIHJldHVybiB3O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubm9kZVNpemUoZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHcgPSAwLCBoID0gMDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoaXNUZXh0KGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0eHRTeiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChkLmRhdGEudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd2YXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0U3ogPSB0ZXh0U2l6ZShkLmRhdGEuc3ltYm9sLCBmb250VmFyLnNpemUsIGZvbnRWYXIuZmFtaWx5LCBmb250VmFyLnN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHcgPSB0eHRTei53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSB0eHRTei5oZWlnaHQgKiAwLjc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndW5jbGVhcic6XG4gICAgICAgICAgICAgICAgICAgICAgICB0eHRTeiA9IHRleHRTaXplKGQuZGF0YS5zeW1ib2wsIGZvbnRWYXIuc2l6ZSwgZm9udFZhci5mYW1pbHksICdub3JtYWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHcgPSB0eHRTei53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSB0eHRTei5oZWlnaHQgKiAwLjc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHcgKz0gc2tld0RpZmYoKGggKyB1bmNsZWFyUGFkLnZ0KjIpKSoyICsgdW5jbGVhclBhZC5oeioyO1xuICAgICAgICAgICAgICAgICAgICAgICAgaCArPSB1bmNsZWFyUGFkLnZ0KjI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY29uc3QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0U3ogPSB0ZXh0U2l6ZShkLmRhdGEudmFsdWUsIGZvbnRDb25zdC5zaXplLCBmb250Q29uc3QuZmFtaWx5LCBmb250Q29uc3Quc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdyA9IHR4dFN6LndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaCA9IHR4dFN6LmhlaWdodCAqIDAuNztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7d2lkdGg6IHcsIGhlaWdodDogaH07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYm94bW9kZWwgPSBsYXlvdXQocm9vdCk7XG5cbiAgICAgICAgLy8gc2V0dXAgYmFzaWMgY2hhcnQgc3RydWN0dXJlXG4gICAgICAgIGNoYXJ0LmF0dHIoJ2NsYXNzJywgJ2dyYXBoLWJveG1vZGVsJylcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dGhpcy5wYWRkaW5nLmxlZnR9LCR7dGhpcy5wYWRkaW5nLnRvcH0pYCk7XG5cbi8vIGNoYXJ0LmF0dHIoJ3dpZHRoJywnMTAwJScpLmF0dHIoJ2hlaWdodCcsJzEwMCUnKS5zdHlsZSgnZmlsbCcsJ3JnYmEoMjU1LDAsMCwuMiknKTtcblxuICAgICAgICBjb25zdCBub2RlcyA9IGNoYXJ0LnNlbGVjdEFsbCgnLm5vZGUnKVxuICAgICAgICAgICAgLmRhdGEoYm94bW9kZWwuZGVzY2VuZGFudHMoKSlcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoJ25vZGUnLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLngwfSwke2QueTB9KWApO1xuXG4gICAgICAgIC8vIGdlbmVyYXRlIG5vZGUgcGFydGl0aW9uIHNlbGVjdGlvbnNcbiAgICAgICAgY29uc3Qgbm9kZVBhcnRpdGlvbnMgPSByZXNvbHZlTm9kZXMoYm94bW9kZWwsIG5vZGVzKTtcbiAgICAgICAgY29uc3QgW2xlYXZlcywgc2V0cywgZm9ybXMsIHJlRW50cmllcywgcmVDaGlsZHMsIHJlUG9pbnRzLCBlbGVtZW50cywgdmFycywgY29uc3RzLCB1bmNsZWFyXSA9IG5vZGVQYXJ0aXRpb25zO1xuXG4gICAgICAgIC8vIGRlZmluZSBkZXRhaWxsZWQgc3RydWN0dXJlL2xvZ2ljXG5cbiAgICAgICAgZm9ybXMuYXBwZW5kKCdwb2x5bGluZScpIC8vLmZpbHRlcihkID0+ICFkLmRhdGEudW5tYXJrZWQpLmFwcGVuZCgncG9seWxpbmUnKVxuICAgICAgICAgICAgLmF0dHIoJ3BvaW50cycsIGQgPT4gYDAsMCAke2QueDEtZC54MH0sMCAke2QueDEtZC54MH0sJHtkLnkxLWQueTB9YCk7XG4gICAgICAgIHJlRW50cmllcy5hcHBlbmQoJ3BvbHlsaW5lJylcbiAgICAgICAgICAgIC5hdHRyKCdwb2ludHMnLCBkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB3ID0gZC54MS1kLngwO1xuICAgICAgICAgICAgICAgIGNvbnN0IGggPSBkLnkxLWQueTA7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVIID0gbWluRm9ybVNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHJldHVybiBgMCwwICR7d30sMCAke3d9LCR7aH0gMCwke2h9IDAsJHtoLXJlSH1gO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZCA9PiBkLmRhdGEubGFzdE9wZW4pXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3BvaW50cycsIGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB3ID0gZC54MS1kLngwO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoID0gZC55MS1kLnkwO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZUggPSBtaW5Gb3JtU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHt3fSwke2gtcmVIfSAke3d9LCR7aH0gMCwke2h9IDAsJHtoLXJlSH1gO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICByZUVudHJpZXMuZmlsdGVyKGQgPT4gZC5kYXRhLnJlRXZlbiAhPT0gJ3VuZGVmaW5lZCcpLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuY2xhc3NlZCgnbGFiZWwnLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgwLCR7ZC55MS1kLnkwfSlgKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLGQgPT4gZGF0YUxhYmVsUGFkIClcbiAgICAgICAgICAgIC5hdHRyKCd5JyxkID0+IC01IClcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZC5kYXRhLnJlRXZlbiA/IGxhYmVscy5yZUV2ZW4gOiBsYWJlbHMucmVPZGQpO1xuXG4gICAgICAgIGNvbnN0IHVuY2xUeHRTaXplID0gZCA9PiB0ZXh0U2l6ZShkLmRhdGEuc3ltYm9sLCBmb250VmFyLnNpemUsIGZvbnRWYXIuZmFtaWx5LCAnbm9ybWFsJyk7XG4gICAgICAgIGNvbnN0IHVuY2xEaWZmID0gZCA9PiBza2V3RGlmZiggKHVuY2xUeHRTaXplKGQpLmhlaWdodCowLjcgKyB1bmNsZWFyUGFkLnZ0KjIpICk7XG5cbiAgICAgICAgdW5jbGVhci5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ3VuY2xlYXJNYXJrJyx0cnVlKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHNrZXdYKC0zMCkgdHJhbnNsYXRlKCR7dW5jbERpZmYoZCl9LCR7MH0pYClcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIGQgPT4gKChkLngxLWQueDApIC0gdW5jbERpZmYoZCkgKSlcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBkID0+IChkLnkxLWQueTApIClcbiAgICAgICAgdW5jbGVhci5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLGQgPT4gdW5jbERpZmYoZCkgKyB1bmNsZWFyUGFkLmh6IClcbiAgICAgICAgICAgIC5hdHRyKCd5JyxkID0+IChkLnkxLWQueTApIC11bmNsZWFyUGFkLnZ0ICAtICgoZC5kYXRhLnN5bWJvbC5zcGxpdCgnXycpLmxlbmd0aCA+IDEpID8gNiA6IDApIClcbiAgICAgICAgICAgIC5jYWxsKHRleHRTdWJzY3JpcHQoZCA9PiBkLmRhdGEuc3ltYm9sKSk7XG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0cy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3knLGQgPT4gKGQueTEtZC55MCkgKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBkLmRhdGEudmFsdWUpO1xuICAgICAgICB2YXJzLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneScsZCA9PiAoZC55MS1kLnkwKSApXG4gICAgICAgICAgICAuY2FsbCh0ZXh0U3Vic2NyaXB0KGQgPT4gZC5kYXRhLnN5bWJvbCkpO1xuXG5cbiAgICAgICAgLy8gYXBwbHkgYWxsIHN0eWxlLXJlbGF0ZWQgYXR0cmlidXRlcyB0byB0aGUgc2VsZWN0aW9uc1xuICAgICAgICBkZXNpZ24uYXBwbHlOb2RlU3R5bGVzKG5vZGVzLCBub2RlUGFydGl0aW9ucywgY2hhcnQpO1xuXG4gICAgICAgIGZpdENoYXJ0KGNoYXJ0LCB0aGlzLnBhZGRpbmcpO1xuXG4gICAgICAgIC8vIGRlYnVnZ2luZzpcbiAgICAgICAgLy8gW3RoaXMucm9vdCwgdGhpcy5sYXlvdXQsIHRoaXMuY2hhcnQsIHRoaXMuYm94bW9kZWwsIHRoaXMuZGVzaWduXSA9IFxuICAgICAgICAvLyAgICAgW3Jvb3QsIGxheW91dCwgY2hhcnQsIGJveG1vZGVsLCBkZXNpZ25dO1xuICAgIH1cblxuICAgIHN0YXRpYyBmb3JjZShkYXRhKSB7XG5cbiAgICB9XG5cbn1cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSGVscGVyIGZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gcmVzb2x2ZU5vZGVzKHJvb3QsIG5vZGVzKSB7XG4gIC8vIHJlc29sdmVzIGRlc2NlbmRhbnQgbm9kZXMgaW50byBmaWx0ZXJlZCBzZWxlY3Rpb25zXG4gIGNvbnN0IGxlYXZlcyA9IG5vZGVzLmZpbHRlcihkID0+IHJvb3QubGVhdmVzKCkuZmlsdGVyKGwgPT4gbCA9PT0gZCkucG9wKCkgKVxuICAgICAgLmNsYXNzZWQoJ2xlYWYnLCB0cnVlKTtcblxuICBjb25zdCBzZXRzID0gbm9kZXMuZmlsdGVyKGQgPT4gZC5kYXRhLnR5cGUgPT09ICdmb3JtJyB8fMKgZC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JylcbiAgICAgIC5jbGFzc2VkKCdmb3JtJywgdHJ1ZSlcbiAgY29uc3QgZm9ybXMgPSBzZXRzLmZpbHRlcihkID0+IGQuZGF0YS50eXBlID09PSAnZm9ybScpXG4gICAgICAuY2xhc3NlZCgnZm9ybScsIHRydWUpO1xuICBjb25zdCByZUVudHJpZXMgPSBzZXRzLmZpbHRlcihkID0+IGQuZGF0YS50eXBlID09PSAncmVFbnRyeScpXG4gICAgICAuY2xhc3NlZCgncmVFbnRyeScsIHRydWUpO1xuXG4gIGNvbnN0IGVsZW1lbnRzID0gbm9kZXMuZmlsdGVyKGQgPT4gIShkLmRhdGEudHlwZSA9PT0gJ2Zvcm0nIHx8wqBkLmRhdGEudHlwZSA9PT0gJ3JlRW50cnknKSlcbiAgICAgIC5jbGFzc2VkKCdlbGVtZW50JywgdHJ1ZSk7XG4gIGNvbnN0IHZhcnMgPSBlbGVtZW50cy5maWx0ZXIoZCA9PiBkLmRhdGEudHlwZSA9PT0gJ3ZhcicpXG4gICAgICAuY2xhc3NlZCgndmFyJywgdHJ1ZSk7XG4gIGxldCBjb25zdHMgPSBlbGVtZW50cy5maWx0ZXIoZCA9PiBkLmRhdGEudHlwZSA9PT0gJ2NvbnN0JylcbiAgICAgIC5jbGFzc2VkKCdjb25zdCcsIHRydWUpO1xuICBjb25zdHMudW5tYXJrZWQgPSBlbGVtZW50cy5maWx0ZXIoZCA9PiBkLmRhdGEudmFsdWUgPT0gMCkuY2xhc3NlZCgndW5tYXJrZWQnLCB0cnVlKTtcbiAgY29uc3RzLm1hcmtlZCA9IGVsZW1lbnRzLmZpbHRlcihkID0+IGQuZGF0YS52YWx1ZSA9PSAxKS5jbGFzc2VkKCdtYXJrZWQnLCB0cnVlKTtcbiAgY29uc3RzLmluZGVmID0gZWxlbWVudHMuZmlsdGVyKGQgPT4gZC5kYXRhLnZhbHVlID09IDIpLmNsYXNzZWQoJ2luZGVmJywgdHJ1ZSk7XG4gIGNvbnN0cy5pbWFnID0gZWxlbWVudHMuZmlsdGVyKGQgPT4gZC5kYXRhLnZhbHVlID09IDMpLmNsYXNzZWQoJ2ltYWcnLCB0cnVlKTtcblxuICBjb25zdCB1bmNsZWFyID0gZWxlbWVudHMuZmlsdGVyKGQgPT4gZC5kYXRhLnR5cGUgPT09ICd1bmNsZWFyJylcbiAgICAgIC5jbGFzc2VkKCd1bmNsZWFyJywgdHJ1ZSk7XG5cbiAgY29uc3QgcmVDaGlsZHMgPSBmb3Jtcy5maWx0ZXIoZCA9PiBkLmRhdGEucmVDaGlsZClcbiAgICAgIC5jbGFzc2VkKCdyZUNoaWxkJywgdHJ1ZSk7XG5cbiAgY29uc3QgcmVQb2ludHMgPSBlbGVtZW50cy5maWx0ZXIoZCA9PiBkLmRhdGEudHlwZSA9PT0gJ3JlRW50cnlQb2ludCcpXG4gICAgICAuY2xhc3NlZCgncmVFbnRyeVBvaW50JywgdHJ1ZSk7XG5cbiAgcmV0dXJuIFtsZWF2ZXMsIHNldHMsIGZvcm1zLCByZUVudHJpZXMsIHJlQ2hpbGRzLCByZVBvaW50cywgZWxlbWVudHMsIHZhcnMsIGNvbnN0cywgdW5jbGVhcl07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVMaW5rcyhyb290LCBsaW5rcykge1xuICAvLyByZXNvbHZlcyBsaW5rcyBiZXR3ZWVuIGRlc2NlbmRhbnQgbm9kZXMgaW50byBmaWx0ZXJlZCBzZWxlY3Rpb25zXG4gIGNvbnN0IHJlQ2hpbGRMaW5rID0gbGlua3MuZmlsdGVyKGQgPT4gZC50YXJnZXQuZGF0YS5yZUNoaWxkKVxuICAgICAgLmNsYXNzZWQoJ3JlQ2hpbGRMaW5rJywgdHJ1ZSk7XG5cbiAgY29uc3QgcmVQb2ludExpbmsgPSBsaW5rcy5maWx0ZXIoZCA9PiBkLnRhcmdldC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5UG9pbnQnKVxuICAgICAgLmNsYXNzZWQoJ3JlUG9pbnRMaW5rJywgdHJ1ZSk7XG5cbiAgcmV0dXJuIFtyZUNoaWxkTGluaywgcmVQb2ludExpbmtdO1xufVxuXG5mdW5jdGlvbiBpc1RleHQobm9kZSkgeyByZXR1cm4gbm9kZS5kYXRhLnR5cGUgPT09ICd2YXInIHx8wqBub2RlLmRhdGEudHlwZSA9PT0gJ2NvbnN0JyB8fCBub2RlLmRhdGEudHlwZSA9PT0gJ3VuY2xlYXInOyB9XG5cbmZ1bmN0aW9uIGlzQ29udGFpbmVyKG5vZGUpIHsgcmV0dXJuIG5vZGUuZGF0YS50eXBlID09PSAnZm9ybScgfHzCoG5vZGUuZGF0YS50eXBlID09PSAncmVFbnRyeSc7IH1cblxuZnVuY3Rpb24gcmVQYXJlbnRMYXN0T3Blbihub2RlKSB7XG5sZXQgcmVQYXJlbnQgPSBub2RlLmFuY2VzdG9ycygpLmZpbHRlcihkID0+IGQuZGF0YS50eXBlID09PSAncmVFbnRyeScpLnNoaWZ0KCk7XG5yZXR1cm4gcmVQYXJlbnQuZGF0YS5sYXN0T3Blbjtcbn1cblxuZXhwb3J0IGNvbnN0IHNhdmUgPSBmdW5jdGlvbihmb3JtYXQsIHN2ZywgbmFtZSwgc2NhbGUpIHtcbiAgICAvLyBleHBvcnRzIGdyYXBocyBpbnRvIHN2Z1xuICAgIFxuICAgIG5hbWUgPSBuYW1lIHx8wqBkMy5zZWxlY3Qoc3ZnLnBhcmVudE5vZGUpLmF0dHIoJ2lkJyk7XG4gICAgY29uc3QgdGltZXN0YW1wID0gZ2V0VGltZXN0YW1wKCk7XG5cblx0dHJ5IHtcbiAgICBzd2l0Y2goZm9ybWF0KSB7XG4gICAgICAgIGNhc2UgJ3N2Zyc6XG4gICAgICAgICAgICBzYXZlU3ZnKHN2ZywgdGltZXN0YW1wKydfJytuYW1lKycuc3ZnJywgc2NhbGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ltZyc6XG4gICAgICAgICAgICBzYXZlSW1nKHN2ZywgdGltZXN0YW1wKydfJytuYW1lKycucG5nJywgc2NhbGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXHR9IGNhdGNoKGUpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0fVxufVxuXG5mdW5jdGlvbiBza2V3RGlmZihoZWlnaHQsZGVncmVlcz0zMCkgeyByZXR1cm4gTWF0aC50YW4oKGRlZ3JlZXMqKE1hdGguUEkvMTgwKSkpICogaGVpZ2h0OyB9OyIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCB7IGdldFJlYWxEZXB0aCwgb3BhY2l0eSwgY2lyY2xlRGFzaEFycmF5IH0gZnJvbSAnLi4vLi4vY29tbW9uL2QzLWhlbHBlcic7XG5cbi8qIENhc2NhZGluZyBEMy1TdHlsZXMgLSBieSBQZXRlciBIb2ZtYW5uLCAxMi8yMDE4ICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBnbG9iYWwgc3R5bGVzXG5cbmNvbnN0IGdsb2JhbCA9IHtcbiAgICBjb21tb246IHtcbiAgICAgICAgZm9udDoge2ZhbWlseTogJ3NhbnMtc2VyaWYnLCBzaXplOiAnMTRweCcsIHN0eWxlOiAnbm9ybWFsJ30sXG4gICAgICAgIGZvbnRWYXI6IHtmYW1pbHk6ICdzYW5zLXNlcmlmJywgc2l6ZTogJzE0cHgnLCBzdHlsZTogJ2l0YWxpYyd9LFxuICAgICAgICBmb250Q29uc3Q6IHtmYW1pbHk6ICdjb3VyaWVyLCBtb25vc3BhY2UnLCBzaXplOiAnMTRweCcsIHN0eWxlOiAnbm9ybWFsJ30sXG4gICAgICAgIGZvbnRDb250ZXh0OiB7ZmFtaWx5OiAnc2Fucy1zZXJpZicsIHNpemU6ICcxMHB4Jywgc3R5bGU6ICdub3JtYWwnfSxcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDEsXG4gICAgICAgIGxhYmVsczoge3JlRXZlbjogJzJ8cnwnLCByZU9kZDogJzJ8cnwrMSd9LFxuICAgICAgICBjb2xvcjoge2Jhc2U6IGQzLmNvbG9yKCdibGFjaycpLFxuICAgICAgICAgICAgICAgIGdyb3VuZDogZDMuY29sb3IoJ3doaXRlJyksXG4gICAgICAgICAgICAgICAgaW5kZWY6IGQzLmNvbG9yKCdyZWQnKSxcbiAgICAgICAgICAgICAgICBsaWdodDogZDMuY29sb3IoJyNkZGQnKSxcbiAgICAgICAgICAgIH1cbiAgICB9XG59O1xuZ2xvYmFsLmJhc2ljID0ge1xuICAgIC4uLmdsb2JhbC5jb21tb24sXG4gICAgZm9udDogeyAuLi5nbG9iYWwuY29tbW9uLmZvbnQsXG4gICAgICAgICAgICBmYW1pbHk6ICdnZW9yZ2lhLCBzZXJpZidcbiAgICAgICAgfSxcbiAgICBmb250VmFyOiB7IC4uLmdsb2JhbC5jb21tb24uZm9udFZhcixcbiAgICAgICAgICAgIGZhbWlseTogJ2dlb3JnaWEsIHNlcmlmJywgc3R5bGU6ICdpdGFsaWMnXG4gICAgICAgIH0sXG4gICAgZm9udENvbnN0OiB7IC4uLmdsb2JhbC5jb21tb24uZm9udENvbnN0LFxuICAgICAgICBmYW1pbHk6ICdnZW9yZ2lhLCBzZXJpZidcbiAgICB9LFxuICAgIGZvbnRDb250ZXh0OiB7IC4uLmdsb2JhbC5jb21tb24uZm9udENvbnRleHQsXG4gICAgICAgICAgICBmYW1pbHk6ICdjb3VyaWVyLCBtb25vc3BhY2UnXG4gICAgICAgIH1cbn07XG5nbG9iYWwuZ2VzdGFsdCA9IHtcbiAgICAuLi5nbG9iYWwuY29tbW9uLFxuICAgIGZvbnQ6IHsgLi4uZ2xvYmFsLmNvbW1vbi5mb250LFxuICAgICAgICAgICAgZmFtaWx5OiAnYXJpYWwsIHNhbnMtc2VyaWYnXG4gICAgICAgIH0sXG4gICAgZm9udFZhcjogeyAuLi5nbG9iYWwuY29tbW9uLmZvbnRWYXIsXG4gICAgICAgICAgICBmYW1pbHk6ICdhcmlhbCwgc2Fucy1zZXJpZidcbiAgICAgICAgfSxcbiAgICBmb250Q29uc3Q6IHsgLi4uZ2xvYmFsLmNvbW1vbi5mb250Q29uc3QsXG4gICAgICAgIGZhbWlseTogJ2FyaWFsLCBzYW5zLXNlcmlmJ1xuICAgIH0sXG4gICAgZm9udENvbnRleHQ6IHsgLi4uZ2xvYmFsLmNvbW1vbi5mb250Q29udGV4dCxcbiAgICAgICAgICAgIGZhbWlseTogJ2dlb3JnaWEsIHNlcmlmJ1xuICAgICAgICB9LFxuICAgIGNvbG9yOiB7Li4uZ2xvYmFsLmNvbW1vbi5jb2xvcixcbiAgICAgICAgICAgIHBvczogZDMuY29sb3IoJ3doaXRlJyksIFxuICAgICAgICAgICAgbmVnOiBkMy5jb2xvcignYmxhY2snKVxuICAgICAgICB9XG59O1xuY29uc3QgW2Jhc2ljLCBnZXN0YWx0XSA9IFtnbG9iYWwuYmFzaWMsIGdsb2JhbC5nZXN0YWx0XTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRGVmYXVsdHMoc3ZnKSB7XG4gICAgc3ZnLmF0dHIoJ3N0cm9rZScsJ25vbmUnKS5hdHRyKCdmaWxsJywnbm9uZScpO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZDMudHJlZSBzdHlsZXM6XG5cbmV4cG9ydCBjb25zdCB0cmVlID0ge1xuICAgIGNvbW1vbjoge1xuICAgICAgICBub2RlU2l6ZToge3c6IDEwLjAsIGg6IDEwLjB9LCAvLyBzaXplIG9mIG5vZGVzXG4gICAgICAgIG5vZGVTZXBhcmF0aW9uOiB7aHo6IDIwLCB2dDogNDB9LCAvLyBzZXBhcmF0aW9uIGJldHdlZW4gbm9kZXNcbiAgICAgICAgZGFzaGVzOiB7bGluazogJzRweCA2cHgnXG4gICAgICAgICAgICB9LFxuICAgIH1cbn07XG5cbnRyZWUuYmFzaWMgPSB7XG4gICAgLi4uYmFzaWMsXG4gICAgLi4udHJlZS5jb21tb24sXG59O1xudHJlZS5iYXNpYy5hcHBseUF4aXNTdHlsZXMgPSBmdW5jdGlvbihheGlzKSB7XG5cbiAgICBheGlzLnNlbGVjdEFsbCgnLnRpY2snKS5zZWxlY3QoJ2xpbmUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIHRoaXMubm9kZVNpemUudyoxLjUpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ3JnYmEoMCwwLDAsLjA1JylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UtbGluZWNhcCcsICdyb3VuZCcpO1xuICAgIGF4aXMuc2VsZWN0QWxsKCcudGljaycpLnNlbGVjdCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250Q29udGV4dC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRDb250ZXh0LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250Q29udGV4dC5mYW1pbHkpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKVxuICAgICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnc3RhcnQnKTtcblxufVxudHJlZS5iYXNpYy5hcHBseU5vZGVTdHlsZXMgPSBmdW5jdGlvbihub2Rlcywgbm9kZVBhcnRpdGlvbnMpIHtcbiAgICBjb25zdCBbbGVhdmVzLCBzZXRzLCBmb3JtcywgcmVFbnRyaWVzLCByZUNoaWxkcywgcmVQb2ludHMsIGVsZW1lbnRzLCB2YXJzLCBjb25zdHMsIHVuY2xlYXJdID0gbm9kZVBhcnRpdGlvbnM7XG5cbiAgICBmb3Jtcy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuZ3JvdW5kLnRvU3RyaW5nKCkpO1xuXG5cbiAgICBlbGVtZW50cy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKTtcblxuICAgIHJlRW50cmllcy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpXG4gICAgICAgIC5maWx0ZXIoZCA9PiBkLmRhdGEubGFzdE9wZW4pXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmdyb3VuZC50b1N0cmluZygpKTtcbiAgICByZUNoaWxkcy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBkID0+IGNpcmNsZURhc2hBcnJheShkLnIsIDMsIFsxXSkpO1xuICAgIHJlUG9pbnRzLnNlbGVjdEFsbCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKTtcblxuICAgIG5vZGVzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udC5mYW1pbHkpXG4gICAgICAgIC5zdHlsZSgnZG9taW5hbnQtYmFzZWxpbmUnLCdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSlcbiAgICB2YXJzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250VmFyLnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udFZhci5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udFZhci5mYW1pbHkpO1xuICAgIGNvbnN0cy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udENvbnN0LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udENvbnN0LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250Q29uc3QuZmFtaWx5KTtcblxuICAgIHNldHMuc2VsZWN0QWxsKCdjaXJjbGUuaW5uZXInKVxuICAgICAgICAvLyAuY2xhc3NlZCgnaW5uZXInKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpO1xuXG59O1xudHJlZS5iYXNpYy5hcHBseUxpbmtTdHlsZXMgPSBmdW5jdGlvbihsaW5rcywgbGlua1BhcnRpdGlvbnMpIHtcbiAgICBjb25zdCBbcmVDaGlsZExpbmssIHJlUG9pbnRMaW5rXSA9IGxpbmtQYXJ0aXRpb25zO1xuXG4gICAgbGlua3Muc2VsZWN0QWxsKCdwYXRoJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSk7XG5cbiAgICByZUNoaWxkTGluay5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UtZGFzaGFycmF5JywgdGhpcy5kYXNoZXMubGluayk7XG5cbiAgICByZVBvaW50TGluay5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UtZGFzaGFycmF5JywgdGhpcy5kYXNoZXMubGluayk7XG59O1xuXG4vLyB0cmVlLmdlc3RhbHQgPSB7XG4vLyAgICAgLi4uZ2VzdGFsdCxcbi8vICAgICAuLi50cmVlLmNvbW1vbixcbi8vIH07XG4vLyB0cmVlLmdlc3RhbHQuYXBwbHlBeGlzU3R5bGVzID0gZnVuY3Rpb24oYXhpcykge1xuLy8gICAgIHRyZWUuYmFzaWMuYXBwbHlBeGlzU3R5bGVzKGF4aXMpO1xuLy8gfVxuLy8gdHJlZS5nZXN0YWx0LmFwcGx5Tm9kZVN0eWxlcyA9IGZ1bmN0aW9uKG5vZGVzLCBub2RlUGFydGl0aW9ucykge1xuLy8gICAgIGNvbnN0IFtsZWF2ZXMsIHNldHMsIGZvcm1zLCByZUVudHJpZXMsIHJlQ2hpbGRzLCByZVBvaW50cywgZWxlbWVudHMsIHZhcnMsIGNvbnN0cywgdW5jbGVhcl0gPSBub2RlUGFydGl0aW9ucztcblxuLy8gICAgIHRyZWUuYmFzaWMuYXBwbHlOb2RlU3R5bGVzKG5vZGVzLCBub2RlUGFydGl0aW9ucyk7XG4vLyB9O1xuLy8gdHJlZS5nZXN0YWx0LmFwcGx5TGlua1N0eWxlcyA9IGZ1bmN0aW9uKGxpbmtzLCBsaW5rUGFydGl0aW9ucykge1xuLy8gICAgIC8vIGNvbnN0IFtyZUNoaWxkTGlua10gPSBsaW5rUGFydGl0aW9ucztcblxuLy8gICAgIHRyZWUuYmFzaWMuYXBwbHlMaW5rU3R5bGVzKGxpbmtzLCBsaW5rUGFydGl0aW9ucyk7XG4vLyB9O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZDMucGFjayBzdHlsZXM6XG5cbmV4cG9ydCBjb25zdCBwYWNrID0ge1xuICAgIGNvbW1vbjoge1xuICAgICAgICByYWRpdXM6IDE0LFxuICAgICAgICBwYWRkaW5nOiAxNCxcbiAgICB9XG59O1xuXG5wYWNrLmJhc2ljID0ge1xuICAgIC4uLmJhc2ljLFxuICAgIC4uLnBhY2suY29tbW9uLFxufTtcbnBhY2suYmFzaWMuYXBwbHlOb2RlU3R5bGVzID0gZnVuY3Rpb24obm9kZXMsIG5vZGVQYXJ0aXRpb25zKSB7XG4gICAgY29uc3QgW2xlYXZlcywgc2V0cywgZm9ybXMsIHJlRW50cmllcywgcmVDaGlsZHMsIHJlUG9pbnRzLCBlbGVtZW50cywgdmFycywgY29uc3RzLCB1bmNsZWFyXSA9IG5vZGVQYXJ0aXRpb25zO1xuXG4gICAgZm9ybXMuc2VsZWN0KCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKVxuICAgICAgICAuZmlsdGVyKGQgPT4gZC5kYXRhLnVubWFya2VkKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2UnLCdub25lJyk7XG4gICAgcmVFbnRyaWVzLnNlbGVjdCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpXG4gICAgICAgIC5maWx0ZXIoZCA9PiBkLmRhdGEubGFzdE9wZW4pXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBkID0+IGNpcmNsZURhc2hBcnJheShkLnIsIDE0LCBbMi81LCAzLzVdKSApO1xuXG4gICAgZWxlbWVudHMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnQuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250LmZhbWlseSlcbiAgICAgICAgLnN0eWxlKCdkb21pbmFudC1iYXNlbGluZScsJ21pZGRsZScpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpO1xuICAgIHZhcnMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRWYXIuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250VmFyLnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250VmFyLmZhbWlseSk7XG4gICAgY29uc3RzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250Q29uc3Quc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250Q29uc3Quc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRDb25zdC5mYW1pbHkpO1xuXG4gICAgdW5jbGVhci5zZWxlY3QoJ3JlY3QnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmxpZ2h0LnRvU3RyaW5nKCkpO1xuXG4gICAgcmVQb2ludHMuc2VsZWN0KCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywnbm9uZScpO1xuXG4gICAgY29uc3QgcmVFdmVuTGFiZWxzID0gcmVFbnRyaWVzLnNlbGVjdCgnLmxhYmVsJylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRDb250ZXh0LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udENvbnRleHQuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRDb250ZXh0LmZhbWlseSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnbm9uZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSk7XG59O1xuXG5wYWNrLmdlc3RhbHQgPSB7XG4gICAgLi4uZ2VzdGFsdCxcbiAgICAuLi5wYWNrLmNvbW1vbixcbn07XG5wYWNrLmdlc3RhbHQuaW52ZXJ0RmlsbCA9IGZ1bmN0aW9uKGQpIHtcbiAgICByZXR1cm4gZ2V0UmVhbERlcHRoKGQpJTIgPyB0aGlzLmNvbG9yLnBvcy50b1N0cmluZygpIDogdGhpcy5jb2xvci5uZWcudG9TdHJpbmcoKTtcbn07XG5wYWNrLmdlc3RhbHQuYXBwbHlOb2RlU3R5bGVzID0gZnVuY3Rpb24obm9kZXMsIG5vZGVQYXJ0aXRpb25zLCBjaGFydCkge1xuICAgIGNvbnN0IFtsZWF2ZXMsIHNldHMsIGZvcm1zLCByZUVudHJpZXMsIHJlQ2hpbGRzLCByZVBvaW50cywgZWxlbWVudHMsIHZhcnMsIGNvbnN0cywgdW5jbGVhcl0gPSBub2RlUGFydGl0aW9ucztcblxuICAgIGNvbnN0IGRlZnMgPSBkMy5zZWxlY3QoY2hhcnQubm9kZSgpLnBhcmVudE5vZGUpXG4gICAgICAgIC5hcHBlbmQoJ2RlZnMnKTtcbiAgICBjb25zdCBncmFkXzEgPSBkZWZzLmFwcGVuZCgncmFkaWFsR3JhZGllbnQnKS5hdHRyKCdpZCcsICdncmFkLWluZGVmLW91dGluJylcbiAgICAgICAgLmF0dHIoJ2Z4JywnMjAlJylcbiAgICAgICAgZ3JhZF8xLmFwcGVuZCgnc3RvcCcpXG4gICAgICAgICAgICAuYXR0cignb2Zmc2V0JywnNDAlJykuYXR0cignc3RvcC1jb2xvcicsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSApLmF0dHIoJ3N0b3Atb3BhY2l0eScsIDAuMyk7XG4gICAgICAgICAgICBncmFkXzEuYXBwZW5kKCdzdG9wJylcbiAgICAgICAgICAgIC5hdHRyKCdvZmZzZXQnLCc5MCUnKS5hdHRyKCdzdG9wLWNvbG9yJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpICkuYXR0cignc3RvcC1vcGFjaXR5JywgMC44KTtcbiAgICAgICAgZ3JhZF8xLmFwcGVuZCgnc3RvcCcpXG4gICAgICAgICAgICAuYXR0cignb2Zmc2V0JywnMTAwJScpLmF0dHIoJ3N0b3AtY29sb3InLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkgKS5hdHRyKCdzdG9wLW9wYWNpdHknLCAxLjApO1xuICAgIGNvbnN0IGdyYWRfMiA9IGRlZnMuYXBwZW5kKCdyYWRpYWxHcmFkaWVudCcpLmF0dHIoJ2lkJywgJ2dyYWQtaW5kZWYtaW5vdXQnKVxuICAgICAgICAuYXR0cignZngnLCcyMCUnKVxuICAgICAgICBncmFkXzIuYXBwZW5kKCdzdG9wJylcbiAgICAgICAgICAgIC5hdHRyKCdvZmZzZXQnLCcxMCUnKS5hdHRyKCdzdG9wLWNvbG9yJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpICkuYXR0cignc3RvcC1vcGFjaXR5JywgMS4wKTtcbiAgICAgICAgZ3JhZF8yLmFwcGVuZCgnc3RvcCcpXG4gICAgICAgICAgICAuYXR0cignb2Zmc2V0JywnNTAlJykuYXR0cignc3RvcC1jb2xvcicsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSApLmF0dHIoJ3N0b3Atb3BhY2l0eScsIDAuNik7XG4gICAgICAgIGdyYWRfMi5hcHBlbmQoJ3N0b3AnKVxuICAgICAgICAgICAgLmF0dHIoJ29mZnNldCcsJzYwJScpLmF0dHIoJ3N0b3AtY29sb3InLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkgKS5hdHRyKCdzdG9wLW9wYWNpdHknLCAwLjQpO1xuICAgICAgICBncmFkXzIuYXBwZW5kKCdzdG9wJylcbiAgICAgICAgICAgIC5hdHRyKCdvZmZzZXQnLCcxMDAlJykuYXR0cignc3RvcC1jb2xvcicsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSApLmF0dHIoJ3N0b3Atb3BhY2l0eScsIDAuMCk7XG5cbiAgICBmb3Jtcy5zZWxlY3QoJ2NpcmNsZScpLmZpbHRlcihkID0+ICFkLmRhdGEudW5tYXJrZWQpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IHRoaXMuaW52ZXJ0RmlsbChkKSk7XG5cbiAgICByZUVudHJpZXMuc2VsZWN0KCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIGQgPT4gKGQucGFyZW50LmRhdGEudHlwZSA9PT0gJ3JlRW50cnknKSA/IHRoaXMuY29sb3IucG9zLnRvU3RyaW5nKCkgOiAnbm9uZScgKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAndXJsKCNncmFkLWluZGVmLW91dGluKScpO1xuXG4gICAgY29uc3Qgb3BlblJlRW50cmllcyA9IHJlRW50cmllcy5zZWxlY3QoJ2NpcmNsZScpLmZpbHRlcihkID0+IGQuZGF0YS5sYXN0T3BlbilcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgJ3VybCgjZ3JhZC1pbmRlZi1pbm91dCknKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBkID0+IGNpcmNsZURhc2hBcnJheShkLnIsIDgsIFsyLzUsIDMvNV0pICk7XG5cbiAgICBvcGVuUmVFbnRyaWVzLmZpbHRlcihkID0+ICgoZC5wYXJlbnQuZGF0YS50eXBlICE9PSAncmVFbnRyeScpIHx8wqAhZ2V0UmVhbERlcHRoKGQpJTIpICkgLy8gIFxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2UnLCBkID0+IHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSk7XG5cbiAgICBvcGVuUmVFbnRyaWVzLmZpbHRlcihkID0+IChkLnBhcmVudC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JykgJiYgIWQucGFyZW50LmRhdGEubGFzdE9wZW4pXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIGQgPT4gdGhpcy5jb2xvci5wb3MudG9TdHJpbmcoKSk7XG5cbiAgICBlbGVtZW50cy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnQuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnQuZmFtaWx5KVxuICAgICAgICAuc3R5bGUoJ2RvbWluYW50LWJhc2VsaW5lJywnbWlkZGxlJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiB0aGlzLmludmVydEZpbGwoZCkpO1xuICAgIHZhcnMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRWYXIuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250VmFyLnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250VmFyLmZhbWlseSk7XG4gICAgY29uc3RzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250Q29uc3Quc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250Q29uc3Quc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRDb25zdC5mYW1pbHkpO1xuXG4gICAgdW5jbGVhci5zZWxlY3QoJ3JlY3QnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLHRoaXMuY29sb3IubGlnaHQudG9TdHJpbmcoKSk7XG4gICAgdW5jbGVhci5zZWxlY3QoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKTtcbiAgICAgICAgXG4gICAgcmVQb2ludHMuc2VsZWN0KCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCdub25lJylcbiAgICAgICAgLmZpbHRlcihkID0+IGQucGFyZW50LmRhdGEudHlwZSA9PT0gJ3JlRW50cnknKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLnBvcy50b1N0cmluZygpKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICdzY2FsZSgxLjUpJyk7XG5cbiAgICBjb25zdCByZUV2ZW5MYWJlbHMgPSByZUVudHJpZXMuc2VsZWN0KCcubGFiZWwnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udENvbnRleHQuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250Q29udGV4dC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udENvbnRleHQuZmFtaWx5KVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiAoZC5wYXJlbnQuZGF0YS50eXBlID09PSAncmVFbnRyeScgJiYgIWQucGFyZW50LmRhdGEubGFzdE9wZW4pID8gdGhpcy5jb2xvci5wb3MudG9TdHJpbmcoKSA6IHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSk7XG4gICAgcmVFbnRyaWVzLnNlbGVjdCgnLmxhYmVsLmluc2lkZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gKGQucGFyZW50LmRhdGEudHlwZSAhPT0gJ3JlRW50cnknICYmIGQuZGF0YS5sYXN0T3BlbikgPyB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkgOiB0aGlzLmNvbG9yLnBvcy50b1N0cmluZygpKTtcblxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGJveG1vZGVsRDMgc3R5bGVzOlxuXG5leHBvcnQgY29uc3QgYm94bW9kZWwgPSB7XG4gICAgY29tbW9uOiB7XG4gICAgICAgIGVsZW1NYXJnaW46IHtoejogMTIsIHZ0OiA4fSwgLy8gdnQ6IDhcbiAgICAgICAgZm9ybU1hcmdpbjoge3RvcDogMTAsIHJpZ2h0OiAxMH0sXG4gICAgICAgIGZvcm1QYWRkaW5nOiB7aHo6IDB9LFxuICAgICAgICBtaW5Gb3JtU2l6ZToge3dpZHRoOiAzNCwgaGVpZ2h0OiAzNH0sXG4gICAgICAgIG1heExpbmVXaWR0aDogMTAwMDAsXG4gICAgICAgIHN0cm9rZVdpZHRoOiAxLjFcbiAgICB9XG59O1xuXG5ib3htb2RlbC5iYXNpYyA9IHtcbiAgICAuLi5iYXNpYyxcbiAgICAuLi5ib3htb2RlbC5jb21tb25cbiAgICAvLyBmb250OiB7Li4uYmFzaWMuZm9udCwgc2l6ZTogJzE4cHgnfVxufTtcbmJveG1vZGVsLmJhc2ljLmFwcGx5Tm9kZVN0eWxlcyA9IGZ1bmN0aW9uKG5vZGVzLCBub2RlUGFydGl0aW9ucykge1xuICAgIGNvbnN0IFtsZWF2ZXMsIHNldHMsIGZvcm1zLCByZUVudHJpZXMsIHJlQ2hpbGRzLCByZVBvaW50cywgZWxlbWVudHMsIHZhcnMsIGNvbnN0cywgdW5jbGVhcl0gPSBub2RlUGFydGl0aW9ucztcblxuICAgIHNldHMuc2VsZWN0KCdwb2x5bGluZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCB0aGlzLnN0cm9rZVdpZHRoKTtcbiAgICBmb3Jtcy5zZWxlY3QoJ3BvbHlsaW5lJylcbiAgICAgICAgLmZpbHRlcihkID0+IGQuZGF0YS51bm1hcmtlZClcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlJywnbm9uZScpO1xuICAgIC8vIHJlRW50cmllcy5zZWxlY3QoJ3BvbHlsaW5lJylcbiAgICAvLyAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpO1xuXG4gICAgZWxlbWVudHMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnQuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250LmZhbWlseSlcbiAgICAgICAgLy8gLnN0eWxlKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCdiYXNlbGluZScpIDwtLSBcImJ1Z1wiIGluIFNhZmFyaVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSk7XG4gICAgdmFycy5zZWxlY3QoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udFZhci5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRWYXIuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRWYXIuZmFtaWx5KTtcbiAgICBjb25zdHMuc2VsZWN0KCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRDb25zdC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRDb25zdC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udENvbnN0LmZhbWlseSk7XG4gICAgcmVFbnRyaWVzLnNlbGVjdCgnLmxhYmVsJylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRDb250ZXh0LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udENvbnRleHQuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRDb250ZXh0LmZhbWlseSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnbm9uZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKTtcbiAgICAgICAgLy8gLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKTtcblxuICAgIHVuY2xlYXIuc2VsZWN0KCcudW5jbGVhck1hcmsnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmxpZ2h0LnRvU3RyaW5nKCkpO1xuXG4gICAgdW5jbGVhci5zZWxlY3QoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udFZhci5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCAnbm9ybWFsJylcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udFZhci5mYW1pbHkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19fOyJdLCJzb3VyY2VSb290IjoiIn0=