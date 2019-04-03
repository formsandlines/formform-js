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
    .attr('fill', '#ffffff'); // 'rgba(255,0,0,.2)');

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
/*! exports provided: showAll, show, hideAll, hide, toggleAll, toggle, isVisible, pad, saveSvg, saveImg, flatten, include, traverse, escapeRegExp, map, arrayMoveItem, getTimestamp */
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
function saveImg(svg, name) {    
    /* Using canvg lib. https://github.com/canvg/canvg and parts of the approach for saveSvg.
    Thanks to jbeard4 in: https://stackoverflow.com/a/3976034/1204047 for the suggestion */
    const w = svg.getBBox().width;
    const h = svg.getBBox().height;

    const canvas = document.createElement("canvas");
    canvas.setAttribute('id','drawingArea');
    document.body.appendChild(canvas);
    canvas.width = w;
    canvas.height = h;

    // console.log(svg.outerHTML);

    canvg__WEBPACK_IMPORTED_MODULE_1__(document.getElementById('drawingArea'), svg.outerHTML, { ignoreMouse: true, ignoreAnimation: true });

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

  static saveGraph(format, svg, name) {
    Object(_modules_d3_graph__WEBPACK_IMPORTED_MODULE_1__["save"])(format, svg, name);
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
            .attr('x',d => 4 )
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

const save = function(format, svg, name) {
    // exports graphs into svg
    
    name = name || d3__WEBPACK_IMPORTED_MODULE_0__["select"](svg.parentNode).attr('id');
    const timestamp = Object(_common_helper__WEBPACK_IMPORTED_MODULE_2__["getTimestamp"])();

	try {
    switch(format) {
        case 'svg':
            Object(_common_helper__WEBPACK_IMPORTED_MODULE_2__["saveSvg"])(svg, timestamp+'_'+name+'.svg');
            break;
        case 'img':
            Object(_common_helper__WEBPACK_IMPORTED_MODULE_2__["saveImg"])(svg, timestamp+'_'+name+'.png');
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
            .attr('offset','40%').attr('stop-color', Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_1__["opacity"])(this.color.indef, 0.3).toString() );
            grad_1.append('stop')
            .attr('offset','90%').attr('stop-color', Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_1__["opacity"])(this.color.indef, 0.8).toString() );
        grad_1.append('stop')
            .attr('offset','100%').attr('stop-color', Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_1__["opacity"])(this.color.indef, 1.0).toString() );
    const grad_2 = defs.append('radialGradient').attr('id', 'grad-indef-inout')
        .attr('fx','20%')
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
        .style('alignment-baseline','baseline')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvYm94bW9kZWwtbGF5b3V0LWZvci1kMy9kaXN0L2JveG1vZGVsLWQzLm1pbi5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9jYW52Zy9kaXN0L2Jyb3dzZXIvY2FudmcubWluLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3JnYmNvbG9yL2luZGV4LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3N0YWNrYmx1ci1jYW52YXMvc3JjL3N0YWNrYmx1ci5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9jb21tb24vZDMtaGVscGVyLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2NvbW1vbi9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL2NvcmUvZmNhbGMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL2NvcmUvZmZvcm0uanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL2NvcmUvZmdyYXBoLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2xpYi9tYWluLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2xpYi9tb2R1bGVzL2QzLWdyYXBoLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2xpYi9tb2R1bGVzL2QzLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS9leHRlcm5hbCBcImQzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVB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QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxtREFBbUQ7QUFDbkQsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDN1NBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUMzWEEsZ0QiLCJmaWxlIjoiZm9ybWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJkM1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJkM1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmb3JtZm9ybVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImQzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmb3JtZm9ybVwiXSA9IGZhY3Rvcnkocm9vdFtcImQzXCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbGliL21haW4uanNcIik7XG4iLCIhZnVuY3Rpb24odCxuKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1uKHJlcXVpcmUoXCJkM1wiKSk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJkM1wiXSxuKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzW1wiYm94bW9kZWwtZDNcIl09bihyZXF1aXJlKFwiZDNcIikpOnRbXCJib3htb2RlbC1kM1wiXT1uKHQuZDMpfSh3aW5kb3csZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBuPXt9O2Z1bmN0aW9uIGUocil7aWYobltyXSlyZXR1cm4gbltyXS5leHBvcnRzO3ZhciBvPW5bcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiB0W3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLGUpLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIGUubT10LGUuYz1uLGUuZD1mdW5jdGlvbih0LG4scil7ZS5vKHQsbil8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4se2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0sZS5yPWZ1bmN0aW9uKHQpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LGUudD1mdW5jdGlvbih0LG4pe2lmKDEmbiYmKHQ9ZSh0KSksOCZuKXJldHVybiB0O2lmKDQmbiYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKGUucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSksMiZuJiZcInN0cmluZ1wiIT10eXBlb2YgdClmb3IodmFyIG8gaW4gdCllLmQocixvLGZ1bmN0aW9uKG4pe3JldHVybiB0W25dfS5iaW5kKG51bGwsbykpO3JldHVybiByfSxlLm49ZnVuY3Rpb24odCl7dmFyIG49dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIGUuZChuLFwiYVwiLG4pLG59LGUubz1mdW5jdGlvbih0LG4pe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxuKX0sZS5wPVwiXCIsZShlLnM9MSl9KFtmdW5jdGlvbihuLGUpe24uZXhwb3J0cz10fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7ZS5yKG4pLGUuZChuLFwiZGVmYXVsdFwiLGZ1bmN0aW9uKCl7cmV0dXJuIG99KTt2YXIgcj1lKDApO2Z1bmN0aW9uIG8oKXt2YXIgdCxuLGUsbyxpLHUsZixhLGMsbD1bXTtmdW5jdGlvbiBoKHQpe3JldHVybiB0LmVhY2hBZnRlcihkKSx0LmVhY2hCZWZvcmUocCksdC5lYWNoQmVmb3JlKHkpLHR9ZnVuY3Rpb24gZChvKXt2YXIgaD1jKG8pLndpZHRoLGQ9YyhvKS5oZWlnaHQ7aWYodChvKSl7aWYoaD1kPTAsby5jaGlsZHJlbil7Zm9yKHZhciBwPWZ1bmN0aW9uKHQpe3ZhciByPVtdLG89MCxpPSExLGY9MCxjPSEwO3JldHVybiB0LmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24obCxoKXtuKGwpJiYhaSYmKGk9ITApLG8rPWwueDEtbC54MCxvKz1jP2UobCk/dShsKS5sZWZ0OjA6TWF0aC5tYXgodShsKS5sZWZ0LHUodC5jaGlsZHJlbltoLTFdKS5yaWdodCk7dmFyIGQ9ZShsKT91KGwpLnJpZ2h0OjA7KG8rZD5hKHQpfHxoPT09dC5jaGlsZHJlbi5sZW5ndGgtMSkmJihvKz1kKSxvPmEodCl8fGg9PT10LmNoaWxkcmVuLmxlbmd0aC0xPyhyLnB1c2goe2Zyb206Zix0bzpoLHdpZHRoOm8sZmxleEhlaWdodDppfSksaDx0LmNoaWxkcmVuLmxlbmd0aC0xJiYoZj1oKzEsbz0wLGk9ITEsYz0hMCkpOmM9ITF9KSxyfShvKSx5PTA7eTxwLmxlbmd0aDt5KyspcFt5XS5oZWlnaHQ9ZyhvLHAseSk7bC5wdXNoKHtib3g6byxsaW5lczpwfSksaCs9ci5tYXgocCxmdW5jdGlvbih0KXtyZXR1cm4gdC53aWR0aH0pLGQrPXIuc3VtKHAsZnVuY3Rpb24odCl7cmV0dXJuIHQuaGVpZ2h0fSl9aCs9aShvKS5sZWZ0K2kobykucmlnaHQsZCs9aShvKS50b3AraShvKS5ib3R0b20saD1NYXRoLm1heChoLGYobykud2lkdGgpLGQ9TWF0aC5tYXgoZCxmKG8pLmhlaWdodCl9by54MD1vLnkwPTAsby54MT1oLG8ueTE9ZH1mdW5jdGlvbiBwKHIpe3ZhciBvPXIueTE7aWYoci5wYXJlbnQmJm4ocikpe289bShyKS5oZWlnaHQ7dmFyIGk9eChyLnBhcmVudCksZj1zKHIsaSk7by09ZShyKXx8MCE9PWY/dShyKS50b3A6MDt2YXIgYT0oby09ZShyKXx8ZiE9PWkubGVuZ3RoLTE/dShyKS5ib3R0b206MCktci55MTtpZih0KHIpJiZyLmNoaWxkcmVuJiZhPjApe3ZhciBjPXgociksbD1hL2MubGVuZ3RoLGg9ITAsZD0hMSxwPXZvaWQgMDt0cnl7Zm9yKHZhciB5LGc9Y1tTeW1ib2wuaXRlcmF0b3JdKCk7IShoPSh5PWcubmV4dCgpKS5kb25lKTtoPSEwKXt5LnZhbHVlLmhlaWdodCs9bH19Y2F0Y2godCl7ZD0hMCxwPXR9ZmluYWxseXt0cnl7aHx8bnVsbD09Zy5yZXR1cm58fGcucmV0dXJuKCl9ZmluYWxseXtpZihkKXRocm93IHB9fX19ci55MT1vfWZ1bmN0aW9uIHkodCl7dmFyIG49dC54MS10LngwLHI9dC55MS10LnkwO2lmKHQucGFyZW50KXt0LnkwPXQucGFyZW50LnkwK2kodC5wYXJlbnQpLnRvcDt2YXIgZj10LnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHQpO2lmKDA9PT1mfHxmdW5jdGlvbih0KXtpZih0LnBhcmVudCl7dmFyIG49dC5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0KSxlPXgodC5wYXJlbnQpLHI9ZVtzKHQsZSldO3JldHVybiByLmZyb209PT1ufXJldHVybiBudWxsfSh0KSl0LngwKz10LnBhcmVudC54MCtpKHQucGFyZW50KS5sZWZ0LGUodCkmJih0LngwKz11KHQpLmxlZnQpO2Vsc2V7dmFyIGE9dC5wYXJlbnQuY2hpbGRyZW5bZi0xXTt0LngwPWEueDEsdC54MCs9TWF0aC5tYXgodShhKS5yaWdodCx1KHQpLmxlZnQpfX1lbHNlIHN3aXRjaChvKXtjYXNlXCJ0b3BcIjp0LnkwPTA7YnJlYWs7Y2FzZVwibWlkZGxlXCI6dC55MD1yLzI7YnJlYWs7Y2FzZVwiYm90dG9tXCI6dC55MD1yfXN3aXRjaChvKXtjYXNlXCJ0b3BcIjppZih0LnBhcmVudCl7dmFyIGM9cyh0KTt0LnkwKz1lKHQpfHwwIT09Yz91KHQpLnRvcDowLHQueTArPXYodCl9YnJlYWs7Y2FzZVwibWlkZGxlXCI6dC5wYXJlbnQmJih0LnkwKz12KHQpK20odCkuaGVpZ2h0LzIpLHQueTAtPXIvMjticmVhaztjYXNlXCJib3R0b21cIjppZih0LnBhcmVudCl7dmFyIGw9eCh0LnBhcmVudCksaD1zKHQsbCk7dC55MC09ZSh0KXx8aCE9PWwubGVuZ3RoLTE/dSh0KS5ib3R0b206MCx0LnkwKz12KHQsITApfXQueTAtPXJ9dC54MT10LngwK24sdC55MT10LnkwK3J9ZnVuY3Rpb24gZyh0LG4scil7Zm9yKHZhciBvPW5bcl0saT0wLGE9by5mcm9tO2E8PW8udG87YSsrKXt2YXIgYz10LmNoaWxkcmVuW2FdLGw9Yy55MS1jLnkwLGg9KGUoYyl8fDAhPT1yP3UoYykudG9wOjApKyhlKGMpfHxyIT09bi5sZW5ndGgtMT91KGMpLmJvdHRvbTowKTtsK2g+aSYmKGk9bCtoKX1yZXR1cm4gTWF0aC5tYXgoaSxmKHQpLmhlaWdodCl9ZnVuY3Rpb24geCh0KXtyZXR1cm4gbFtsLmZpbmRJbmRleChmdW5jdGlvbihuKXtyZXR1cm4gbi5ib3g9PT10fSldLmxpbmVzfWZ1bmN0aW9uIHModCxuKXtpZih0LnBhcmVudCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4xP246eCh0LnBhcmVudCkscj10LnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHQpO3JldHVybiBlLmZpbmRJbmRleChmdW5jdGlvbih0KXtyZXR1cm4gcj49dC5mcm9tJiZyPD10LnRvfSl9cmV0dXJuIG51bGx9ZnVuY3Rpb24gbSh0KXt2YXIgbj14KHQucGFyZW50KTtyZXR1cm4gbltzKHQsbildfWZ1bmN0aW9uIHYodCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0mJmFyZ3VtZW50c1sxXTtpZih0LnBhcmVudCl7dmFyIGU9eCh0LnBhcmVudCksbz1zKHQsZSksaT1uP286by0xO3JldHVybiByLnN1bShlLmZpbHRlcihmdW5jdGlvbih0LG4pe3JldHVybiBuPD1pfSksZnVuY3Rpb24odCl7cmV0dXJuIHQuaGVpZ2h0fSl9cmV0dXJuIG51bGx9ZnVuY3Rpb24gYih0KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdH19cmV0dXJuIGgudkFsaWduPWZ1bmN0aW9uKHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhvPXQsaCk6b30saC5lZGdlTWFyZ2lucz1mdW5jdGlvbih0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8oZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6YigrdCksaCk6ZX0saC5pc0NvbnRhaW5lcj1mdW5jdGlvbihuKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8odD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBuP246YigrbiksaCk6dH0saC5zcGFuSGVpZ2h0PWZ1bmN0aW9uKHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhuPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpiKCt0KSxoKTpufSxoLnBhZGRpbmc9ZnVuY3Rpb24odCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KGk9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90OmIoK3QpLGgpOml9LGgubWFyZ2luPWZ1bmN0aW9uKHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyh1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpiKCt0KSxoKTp1fSxoLm5vZGVTaXplPWZ1bmN0aW9uKHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpiKCt0KSxoKTpjfSxoLm1pbkNvbnRhaW5lclNpemU9ZnVuY3Rpb24odCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KGY9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90OmIoK3QpLGgpOmZ9LGgubWF4TGluZVdpZHRoPWZ1bmN0aW9uKHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhhPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpiKCt0KSxoKTphfSxofX1dKS5kZWZhdWx0fSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib3htb2RlbC1kMy5taW4uanMubWFwIiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZShyZXF1aXJlKFwicmdiY29sb3JcIikscmVxdWlyZShcInN0YWNrYmx1ci1jYW52YXNcIikpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wicmdiY29sb3JcIixcInN0YWNrYmx1ci1jYW52YXNcIl0sZSk6dC5jYW52Zz1lKHQuUkdCQ29sb3IsdC5TdGFja0JsdXIpfSh0aGlzLGZ1bmN0aW9uKG0sZCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ7cmV0dXJuIG09bSYmbS5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRcIik/bS5kZWZhdWx0Om0sZD1kJiZkLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFwiKT9kLmRlZmF1bHQ6ZCxmdW5jdGlvbih0KXt2YXIgdTt0LmV4cG9ydHM7KHU9d2luZG93KS5ET01QYXJzZXI9d2luZG93LkRPTVBhcnNlcjtmdW5jdGlvbiBwKCl7cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIil9dmFyIGYsYz1mdW5jdGlvbih0LGUsaSl7aWYobnVsbCE9dHx8bnVsbCE9ZXx8bnVsbCE9aSl7dmFyIG49ZnVuY3Rpb24ocyl7dmFyIEE9e29wdHM6cyxGUkFNRVJBVEU6MzAsTUFYX1ZJUlRVQUxfUElYRUxTOjNlNCxyb290RW1TaXplOjEyLGVtU2l6ZToxMixsb2c6ZnVuY3Rpb24odCl7fX07MT09QS5vcHRzLmxvZyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGNvbnNvbGUmJihBLmxvZz1mdW5jdGlvbih0KXtjb25zb2xlLmxvZyh0KX0pO0EuaW5pdD1mdW5jdGlvbih0KXt2YXIgZT0wO0EuVW5pcXVlSWQ9ZnVuY3Rpb24oKXtyZXR1cm5cImNhbnZnXCIrICsrZX0sQS5EZWZpbml0aW9ucz17fSxBLlN0eWxlcz17fSxBLlN0eWxlc1NwZWNpZmljaXR5PXt9LEEuQW5pbWF0aW9ucz1bXSxBLkltYWdlcz1bXSxBLmN0eD10LEEuVmlld1BvcnQ9bmV3IGZ1bmN0aW9uKCl7dGhpcy52aWV3UG9ydHM9W10sdGhpcy5DbGVhcj1mdW5jdGlvbigpe3RoaXMudmlld1BvcnRzPVtdfSx0aGlzLlNldEN1cnJlbnQ9ZnVuY3Rpb24odCxlKXt0aGlzLnZpZXdQb3J0cy5wdXNoKHt3aWR0aDp0LGhlaWdodDplfSl9LHRoaXMuUmVtb3ZlQ3VycmVudD1mdW5jdGlvbigpe3RoaXMudmlld1BvcnRzLnBvcCgpfSx0aGlzLkN1cnJlbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52aWV3UG9ydHNbdGhpcy52aWV3UG9ydHMubGVuZ3RoLTFdfSx0aGlzLndpZHRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuQ3VycmVudCgpLndpZHRofSx0aGlzLmhlaWdodD1mdW5jdGlvbigpe3JldHVybiB0aGlzLkN1cnJlbnQoKS5oZWlnaHR9LHRoaXMuQ29tcHV0ZVNpemU9ZnVuY3Rpb24odCl7cmV0dXJuIG51bGwhPXQmJlwibnVtYmVyXCI9PXR5cGVvZiB0P3Q6XCJ4XCI9PXQ/dGhpcy53aWR0aCgpOlwieVwiPT10P3RoaXMuaGVpZ2h0KCk6TWF0aC5zcXJ0KE1hdGgucG93KHRoaXMud2lkdGgoKSwyKStNYXRoLnBvdyh0aGlzLmhlaWdodCgpLDIpKS9NYXRoLnNxcnQoMil9fX0sQS5pbml0KCksQS5JbWFnZXNMb2FkZWQ9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9MDt0PEEuSW1hZ2VzLmxlbmd0aDt0KyspaWYoIUEuSW1hZ2VzW3RdLmxvYWRlZClyZXR1cm4hMTtyZXR1cm4hMH0sQS50cmltPWZ1bmN0aW9uKHQpe3JldHVybiB0LnJlcGxhY2UoL15cXHMrfFxccyskL2csXCJcIil9LEEuY29tcHJlc3NTcGFjZXM9ZnVuY3Rpb24odCl7cmV0dXJuIHQucmVwbGFjZSgvKD8hXFx1MzAwMClcXHMrL2dtLFwiIFwiKX0sQS5hamF4PWZ1bmN0aW9uKHQpe3ZhciBlO3JldHVybihlPXUuWE1MSHR0cFJlcXVlc3Q/bmV3IHUuWE1MSHR0cFJlcXVlc3Q6bmV3IEFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKSk/KGUub3BlbihcIkdFVFwiLHQsITEpLGUuc2VuZChudWxsKSxlLnJlc3BvbnNlVGV4dCk6bnVsbH0sQS5wYXJzZVhtbD1mdW5jdGlvbihlKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgV2luZG93cyYmdm9pZCAwIT09V2luZG93cy5EYXRhJiZ2b2lkIDAhPT1XaW5kb3dzLkRhdGEuWG1sKXt2YXIgdD1uZXcgV2luZG93cy5EYXRhLlhtbC5Eb20uWG1sRG9jdW1lbnQsaT1uZXcgV2luZG93cy5EYXRhLlhtbC5Eb20uWG1sTG9hZFNldHRpbmdzO3JldHVybiBpLnByb2hpYml0RHRkPSExLHQubG9hZFhtbChlLGkpLHR9aWYoIXUuRE9NUGFyc2VyKXtlPWUucmVwbGFjZSgvPCFET0NUWVBFIHN2Z1tePl0qPi8sXCJcIik7dmFyIHQ9bmV3IEFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MRE9NXCIpO3JldHVybiB0LmFzeW5jPVwiZmFsc2VcIix0LmxvYWRYTUwoZSksdH10cnl7dmFyIG49cy54bWxkb20/bmV3IHUuRE9NUGFyc2VyKHMueG1sZG9tKTpuZXcgdS5ET01QYXJzZXI7cmV0dXJuIG4ucGFyc2VGcm9tU3RyaW5nKGUsXCJpbWFnZS9zdmcreG1sXCIpfWNhdGNoKHQpe3JldHVybihuPXMueG1sZG9tP25ldyB1LkRPTVBhcnNlcihzLnhtbGRvbSk6bmV3IHUuRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcoZSxcInRleHQveG1sXCIpfX0sQS5Qcm9wZXJ0eT1mdW5jdGlvbih0LGUpe3RoaXMubmFtZT10LHRoaXMudmFsdWU9ZX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuZ2V0VmFsdWU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuaGFzVmFsdWU9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbCE9dGhpcy52YWx1ZSYmXCJcIiE9PXRoaXMudmFsdWV9LEEuUHJvcGVydHkucHJvdG90eXBlLm51bVZhbHVlPWZ1bmN0aW9uKCl7aWYoIXRoaXMuaGFzVmFsdWUoKSlyZXR1cm4gMDt2YXIgdD1wYXJzZUZsb2F0KHRoaXMudmFsdWUpO3JldHVybih0aGlzLnZhbHVlK1wiXCIpLm1hdGNoKC8lJC8pJiYodC89MTAwKSx0fSxBLlByb3BlcnR5LnByb3RvdHlwZS52YWx1ZU9yRGVmYXVsdD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5oYXNWYWx1ZSgpP3RoaXMudmFsdWU6dH0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUubnVtVmFsdWVPckRlZmF1bHQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuaGFzVmFsdWUoKT90aGlzLm51bVZhbHVlKCk6dH0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuYWRkT3BhY2l0eT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLnZhbHVlO2lmKG51bGwhPXQudmFsdWUmJlwiXCIhPXQudmFsdWUmJlwic3RyaW5nXCI9PXR5cGVvZiB0aGlzLnZhbHVlKXt2YXIgaT1uZXcgbSh0aGlzLnZhbHVlKTtpLm9rJiYoZT1cInJnYmEoXCIraS5yK1wiLCBcIitpLmcrXCIsIFwiK2kuYitcIiwgXCIrdC5udW1WYWx1ZSgpK1wiKVwiKX1yZXR1cm4gbmV3IEEuUHJvcGVydHkodGhpcy5uYW1lLGUpfSxBLlByb3BlcnR5LnByb3RvdHlwZS5nZXREZWZpbml0aW9uPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy52YWx1ZS5tYXRjaCgvIyhbXlxcKSdcIl0rKS8pO3JldHVybiB0JiYodD10WzFdKSx0fHwodD10aGlzLnZhbHVlKSxBLkRlZmluaXRpb25zW3RdfSxBLlByb3BlcnR5LnByb3RvdHlwZS5pc1VybERlZmluaXRpb249ZnVuY3Rpb24oKXtyZXR1cm4gMD09dGhpcy52YWx1ZS5pbmRleE9mKFwidXJsKFwiKX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuZ2V0RmlsbFN0eWxlRGVmaW5pdGlvbj1mdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuZ2V0RGVmaW5pdGlvbigpO2lmKG51bGwhPWkmJmkuY3JlYXRlR3JhZGllbnQpcmV0dXJuIGkuY3JlYXRlR3JhZGllbnQoQS5jdHgsdCxlKTtpZihudWxsIT1pJiZpLmNyZWF0ZVBhdHRlcm4pe2lmKGkuZ2V0SHJlZkF0dHJpYnV0ZSgpLmhhc1ZhbHVlKCkpe3ZhciBuPWkuYXR0cmlidXRlKFwicGF0dGVyblRyYW5zZm9ybVwiKTtpPWkuZ2V0SHJlZkF0dHJpYnV0ZSgpLmdldERlZmluaXRpb24oKSxuLmhhc1ZhbHVlKCkmJihpLmF0dHJpYnV0ZShcInBhdHRlcm5UcmFuc2Zvcm1cIiwhMCkudmFsdWU9bi52YWx1ZSl9cmV0dXJuIGkuY3JlYXRlUGF0dGVybihBLmN0eCx0KX1yZXR1cm4gbnVsbH0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuZ2V0RFBJPWZ1bmN0aW9uKHQpe3JldHVybiA5Nn0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuZ2V0UkVNPWZ1bmN0aW9uKHQpe3JldHVybiBBLnJvb3RFbVNpemV9LEEuUHJvcGVydHkucHJvdG90eXBlLmdldEVNPWZ1bmN0aW9uKHQpe3JldHVybiBBLmVtU2l6ZX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuZ2V0VW5pdHM9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnZhbHVlK1wiXCI7cmV0dXJuIHQucmVwbGFjZSgvWzAtOVxcLlxcLV0vZyxcIlwiKX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuaXNQaXhlbHM9ZnVuY3Rpb24oKXtpZighdGhpcy5oYXNWYWx1ZSgpKXJldHVybiExO3ZhciB0PXRoaXMudmFsdWUrXCJcIjtyZXR1cm4hIXQubWF0Y2goL3B4JC8pfHwhIXQubWF0Y2goL15bMC05XSskLyl9LEEuUHJvcGVydHkucHJvdG90eXBlLnRvUGl4ZWxzPWZ1bmN0aW9uKHQsZSl7aWYoIXRoaXMuaGFzVmFsdWUoKSlyZXR1cm4gMDt2YXIgaT10aGlzLnZhbHVlK1wiXCI7aWYoaS5tYXRjaCgvcmVtJC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqdGhpcy5nZXRSRU0odCk7aWYoaS5tYXRjaCgvZW0kLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKSp0aGlzLmdldEVNKHQpO2lmKGkubWF0Y2goL2V4JC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqdGhpcy5nZXRFTSh0KS8yO2lmKGkubWF0Y2goL3B4JC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCk7aWYoaS5tYXRjaCgvcHQkLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKSp0aGlzLmdldERQSSh0KSooMS83Mik7aWYoaS5tYXRjaCgvcGMkLykpcmV0dXJuIDE1KnRoaXMubnVtVmFsdWUoKTtpZihpLm1hdGNoKC9jbSQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpKnRoaXMuZ2V0RFBJKHQpLzIuNTQ7aWYoaS5tYXRjaCgvbW0kLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKSp0aGlzLmdldERQSSh0KS8yNS40O2lmKGkubWF0Y2goL2luJC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqdGhpcy5nZXREUEkodCk7aWYoaS5tYXRjaCgvJSQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpKkEuVmlld1BvcnQuQ29tcHV0ZVNpemUodCk7dmFyIG49dGhpcy5udW1WYWx1ZSgpO3JldHVybiBlJiZuPDE/bipBLlZpZXdQb3J0LkNvbXB1dGVTaXplKHQpOm59LEEuUHJvcGVydHkucHJvdG90eXBlLnRvTWlsbGlzZWNvbmRzPWZ1bmN0aW9uKCl7aWYoIXRoaXMuaGFzVmFsdWUoKSlyZXR1cm4gMDt2YXIgdD10aGlzLnZhbHVlK1wiXCI7cmV0dXJuIHQubWF0Y2goL3MkLyk/MWUzKnRoaXMubnVtVmFsdWUoKToodC5tYXRjaCgvbXMkLyksdGhpcy5udW1WYWx1ZSgpKX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUudG9SYWRpYW5zPWZ1bmN0aW9uKCl7aWYoIXRoaXMuaGFzVmFsdWUoKSlyZXR1cm4gMDt2YXIgdD10aGlzLnZhbHVlK1wiXCI7cmV0dXJuIHQubWF0Y2goL2RlZyQvKT90aGlzLm51bVZhbHVlKCkqKE1hdGguUEkvMTgwKTp0Lm1hdGNoKC9ncmFkJC8pP3RoaXMubnVtVmFsdWUoKSooTWF0aC5QSS8yMDApOnQubWF0Y2goL3JhZCQvKT90aGlzLm51bVZhbHVlKCk6dGhpcy5udW1WYWx1ZSgpKihNYXRoLlBJLzE4MCl9O3ZhciB0PXtiYXNlbGluZTpcImFscGhhYmV0aWNcIixcImJlZm9yZS1lZGdlXCI6XCJ0b3BcIixcInRleHQtYmVmb3JlLWVkZ2VcIjpcInRvcFwiLG1pZGRsZTpcIm1pZGRsZVwiLGNlbnRyYWw6XCJtaWRkbGVcIixcImFmdGVyLWVkZ2VcIjpcImJvdHRvbVwiLFwidGV4dC1hZnRlci1lZGdlXCI6XCJib3R0b21cIixpZGVvZ3JhcGhpYzpcImlkZW9ncmFwaGljXCIsYWxwaGFiZXRpYzpcImFscGhhYmV0aWNcIixoYW5naW5nOlwiaGFuZ2luZ1wiLG1hdGhlbWF0aWNhbDpcImFscGhhYmV0aWNcIn07cmV0dXJuIEEuUHJvcGVydHkucHJvdG90eXBlLnRvVGV4dEJhc2VsaW5lPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaGFzVmFsdWUoKT90W3RoaXMudmFsdWVdOm51bGx9LEEuRm9udD1uZXcgZnVuY3Rpb24oKXt0aGlzLlN0eWxlcz1cIm5vcm1hbHxpdGFsaWN8b2JsaXF1ZXxpbmhlcml0XCIsdGhpcy5WYXJpYW50cz1cIm5vcm1hbHxzbWFsbC1jYXBzfGluaGVyaXRcIix0aGlzLldlaWdodHM9XCJub3JtYWx8Ym9sZHxib2xkZXJ8bGlnaHRlcnwxMDB8MjAwfDMwMHw0MDB8NTAwfDYwMHw3MDB8ODAwfDkwMHxpbmhlcml0XCIsdGhpcy5DcmVhdGVGb250PWZ1bmN0aW9uKHQsZSxpLG4scyxhKXt2YXIgcj1udWxsIT1hP3RoaXMuUGFyc2UoYSk6dGhpcy5DcmVhdGVGb250KFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixBLmN0eC5mb250KTtyZXR1cm57Zm9udEZhbWlseTpzPXN8fHIuZm9udEZhbWlseSxmb250U2l6ZTpufHxyLmZvbnRTaXplLGZvbnRTdHlsZTp0fHxyLmZvbnRTdHlsZSxmb250V2VpZ2h0Oml8fHIuZm9udFdlaWdodCxmb250VmFyaWFudDplfHxyLmZvbnRWYXJpYW50LHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuW3RoaXMuZm9udFN0eWxlLHRoaXMuZm9udFZhcmlhbnQsdGhpcy5mb250V2VpZ2h0LHRoaXMuZm9udFNpemUsdGhpcy5mb250RmFtaWx5XS5qb2luKFwiIFwiKX19fTt2YXIgcj10aGlzO3RoaXMuUGFyc2U9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXt9LGk9QS50cmltKEEuY29tcHJlc3NTcGFjZXModHx8XCJcIikpLnNwbGl0KFwiIFwiKSxuPXtmb250U2l6ZTohMSxmb250U3R5bGU6ITEsZm9udFdlaWdodDohMSxmb250VmFyaWFudDohMX0scz1cIlwiLGE9MDthPGkubGVuZ3RoO2ErKyluLmZvbnRTdHlsZXx8LTE9PXIuU3R5bGVzLmluZGV4T2YoaVthXSk/bi5mb250VmFyaWFudHx8LTE9PXIuVmFyaWFudHMuaW5kZXhPZihpW2FdKT9uLmZvbnRXZWlnaHR8fC0xPT1yLldlaWdodHMuaW5kZXhPZihpW2FdKT9uLmZvbnRTaXplP1wiaW5oZXJpdFwiIT1pW2FdJiYocys9aVthXSk6KFwiaW5oZXJpdFwiIT1pW2FdJiYoZS5mb250U2l6ZT1pW2FdLnNwbGl0KFwiL1wiKVswXSksbi5mb250U3R5bGU9bi5mb250VmFyaWFudD1uLmZvbnRXZWlnaHQ9bi5mb250U2l6ZT0hMCk6KFwiaW5oZXJpdFwiIT1pW2FdJiYoZS5mb250V2VpZ2h0PWlbYV0pLG4uZm9udFN0eWxlPW4uZm9udFZhcmlhbnQ9bi5mb250V2VpZ2h0PSEwKTooXCJpbmhlcml0XCIhPWlbYV0mJihlLmZvbnRWYXJpYW50PWlbYV0pLG4uZm9udFN0eWxlPW4uZm9udFZhcmlhbnQ9ITApOihcImluaGVyaXRcIiE9aVthXSYmKGUuZm9udFN0eWxlPWlbYV0pLG4uZm9udFN0eWxlPSEwKTtyZXR1cm5cIlwiIT1zJiYoZS5mb250RmFtaWx5PXMpLGV9fSxBLlRvTnVtYmVyQXJyYXk9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPUEudHJpbShBLmNvbXByZXNzU3BhY2VzKCh0fHxcIlwiKS5yZXBsYWNlKC8sL2csXCIgXCIpKSkuc3BsaXQoXCIgXCIpLGk9MDtpPGUubGVuZ3RoO2krKyllW2ldPXBhcnNlRmxvYXQoZVtpXSk7cmV0dXJuIGV9LEEuUG9pbnQ9ZnVuY3Rpb24odCxlKXt0aGlzLng9dCx0aGlzLnk9ZX0sQS5Qb2ludC5wcm90b3R5cGUuYW5nbGVUbz1mdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5hdGFuMih0LnktdGhpcy55LHQueC10aGlzLngpfSxBLlBvaW50LnByb3RvdHlwZS5hcHBseVRyYW5zZm9ybT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLngqdFswXSt0aGlzLnkqdFsyXSt0WzRdLGk9dGhpcy54KnRbMV0rdGhpcy55KnRbM10rdFs1XTt0aGlzLng9ZSx0aGlzLnk9aX0sQS5DcmVhdGVQb2ludD1mdW5jdGlvbih0KXt2YXIgZT1BLlRvTnVtYmVyQXJyYXkodCk7cmV0dXJuIG5ldyBBLlBvaW50KGVbMF0sZVsxXSl9LEEuQ3JlYXRlUGF0aD1mdW5jdGlvbih0KXtmb3IodmFyIGU9QS5Ub051bWJlckFycmF5KHQpLGk9W10sbj0wO248ZS5sZW5ndGg7bis9MilpLnB1c2gobmV3IEEuUG9pbnQoZVtuXSxlW24rMV0pKTtyZXR1cm4gaX0sQS5Cb3VuZGluZ0JveD1mdW5jdGlvbih0LGUsaSxuKXt0aGlzLngxPU51bWJlci5OYU4sdGhpcy55MT1OdW1iZXIuTmFOLHRoaXMueDI9TnVtYmVyLk5hTix0aGlzLnkyPU51bWJlci5OYU4sdGhpcy54PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMueDF9LHRoaXMueT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnkxfSx0aGlzLndpZHRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMueDItdGhpcy54MX0sdGhpcy5oZWlnaHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy55Mi10aGlzLnkxfSx0aGlzLmFkZFBvaW50PWZ1bmN0aW9uKHQsZSl7bnVsbCE9dCYmKChpc05hTih0aGlzLngxKXx8aXNOYU4odGhpcy54MikpJiYodGhpcy54MT10LHRoaXMueDI9dCksdDx0aGlzLngxJiYodGhpcy54MT10KSx0PnRoaXMueDImJih0aGlzLngyPXQpKSxudWxsIT1lJiYoKGlzTmFOKHRoaXMueTEpfHxpc05hTih0aGlzLnkyKSkmJih0aGlzLnkxPWUsdGhpcy55Mj1lKSxlPHRoaXMueTEmJih0aGlzLnkxPWUpLGU+dGhpcy55MiYmKHRoaXMueTI9ZSkpfSx0aGlzLmFkZFg9ZnVuY3Rpb24odCl7dGhpcy5hZGRQb2ludCh0LG51bGwpfSx0aGlzLmFkZFk9ZnVuY3Rpb24odCl7dGhpcy5hZGRQb2ludChudWxsLHQpfSx0aGlzLmFkZEJvdW5kaW5nQm94PWZ1bmN0aW9uKHQpe3RoaXMuYWRkUG9pbnQodC54MSx0LnkxKSx0aGlzLmFkZFBvaW50KHQueDIsdC55Mil9LHRoaXMuYWRkUXVhZHJhdGljQ3VydmU9ZnVuY3Rpb24odCxlLGksbixzLGEpe3ZhciByPXQrMi8zKihpLXQpLG89ZSsyLzMqKG4tZSksbD1yKzEvMyoocy10KSxoPW8rMS8zKihhLWUpO3RoaXMuYWRkQmV6aWVyQ3VydmUodCxlLHIsbCxvLGgscyxhKX0sdGhpcy5hZGRCZXppZXJDdXJ2ZT1mdW5jdGlvbih0LGUsaSxuLHMsYSxyLG8pe3ZhciBsPVt0LGVdLGg9W2ksbl0sdT1bcyxhXSxjPVtyLG9dO3RoaXMuYWRkUG9pbnQobFswXSxsWzFdKSx0aGlzLmFkZFBvaW50KGNbMF0sY1sxXSk7Zm9yKHZhciBmPTA7Zjw9MTtmKyspe3ZhciBtPWZ1bmN0aW9uKHQpe3JldHVybiBNYXRoLnBvdygxLXQsMykqbFtmXSszKk1hdGgucG93KDEtdCwyKSp0KmhbZl0rMyooMS10KSpNYXRoLnBvdyh0LDIpKnVbZl0rTWF0aC5wb3codCwzKSpjW2ZdfSxwPTYqbFtmXS0xMipoW2ZdKzYqdVtmXSxkPS0zKmxbZl0rOSpoW2ZdLTkqdVtmXSszKmNbZl0seT0zKmhbZl0tMypsW2ZdO2lmKDAhPWQpe3ZhciB2PU1hdGgucG93KHAsMiktNCp5KmQ7aWYoISh2PDApKXt2YXIgZz0oLXArTWF0aC5zcXJ0KHYpKS8oMipkKTswPGcmJmc8MSYmKDA9PWYmJnRoaXMuYWRkWChtKGcpKSwxPT1mJiZ0aGlzLmFkZFkobShnKSkpO3ZhciB4PSgtcC1NYXRoLnNxcnQodikpLygyKmQpOzA8eCYmeDwxJiYoMD09ZiYmdGhpcy5hZGRYKG0oeCkpLDE9PWYmJnRoaXMuYWRkWShtKHgpKSl9fWVsc2V7aWYoMD09cCljb250aW51ZTt2YXIgYj0teS9wOzA8YiYmYjwxJiYoMD09ZiYmdGhpcy5hZGRYKG0oYikpLDE9PWYmJnRoaXMuYWRkWShtKGIpKSl9fX0sdGhpcy5pc1BvaW50SW5Cb3g9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy54MTw9dCYmdDw9dGhpcy54MiYmdGhpcy55MTw9ZSYmZTw9dGhpcy55Mn0sdGhpcy5hZGRQb2ludCh0LGUpLHRoaXMuYWRkUG9pbnQoaSxuKX0sQS5UcmFuc2Zvcm09ZnVuY3Rpb24odCl7dmFyIGU9dGhpczt0aGlzLlR5cGU9e30sdGhpcy5UeXBlLnRyYW5zbGF0ZT1mdW5jdGlvbih0KXt0aGlzLnA9QS5DcmVhdGVQb2ludCh0KSx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQpe3QudHJhbnNsYXRlKHRoaXMucC54fHwwLHRoaXMucC55fHwwKX0sdGhpcy51bmFwcGx5PWZ1bmN0aW9uKHQpe3QudHJhbnNsYXRlKC0xKnRoaXMucC54fHwwLC0xKnRoaXMucC55fHwwKX0sdGhpcy5hcHBseVRvUG9pbnQ9ZnVuY3Rpb24odCl7dC5hcHBseVRyYW5zZm9ybShbMSwwLDAsMSx0aGlzLnAueHx8MCx0aGlzLnAueXx8MF0pfX0sdGhpcy5UeXBlLnJvdGF0ZT1mdW5jdGlvbih0KXt2YXIgZT1BLlRvTnVtYmVyQXJyYXkodCk7dGhpcy5hbmdsZT1uZXcgQS5Qcm9wZXJ0eShcImFuZ2xlXCIsZVswXSksdGhpcy5jeD1lWzFdfHwwLHRoaXMuY3k9ZVsyXXx8MCx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQpe3QudHJhbnNsYXRlKHRoaXMuY3gsdGhpcy5jeSksdC5yb3RhdGUodGhpcy5hbmdsZS50b1JhZGlhbnMoKSksdC50cmFuc2xhdGUoLXRoaXMuY3gsLXRoaXMuY3kpfSx0aGlzLnVuYXBwbHk9ZnVuY3Rpb24odCl7dC50cmFuc2xhdGUodGhpcy5jeCx0aGlzLmN5KSx0LnJvdGF0ZSgtMSp0aGlzLmFuZ2xlLnRvUmFkaWFucygpKSx0LnRyYW5zbGF0ZSgtdGhpcy5jeCwtdGhpcy5jeSl9LHRoaXMuYXBwbHlUb1BvaW50PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuYW5nbGUudG9SYWRpYW5zKCk7dC5hcHBseVRyYW5zZm9ybShbMSwwLDAsMSx0aGlzLnAueHx8MCx0aGlzLnAueXx8MF0pLHQuYXBwbHlUcmFuc2Zvcm0oW01hdGguY29zKGUpLE1hdGguc2luKGUpLC1NYXRoLnNpbihlKSxNYXRoLmNvcyhlKSwwLDBdKSx0LmFwcGx5VHJhbnNmb3JtKFsxLDAsMCwxLC10aGlzLnAueHx8MCwtdGhpcy5wLnl8fDBdKX19LHRoaXMuVHlwZS5zY2FsZT1mdW5jdGlvbih0KXt0aGlzLnA9QS5DcmVhdGVQb2ludCh0KSx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQpe3Quc2NhbGUodGhpcy5wLnh8fDEsdGhpcy5wLnl8fHRoaXMucC54fHwxKX0sdGhpcy51bmFwcGx5PWZ1bmN0aW9uKHQpe3Quc2NhbGUoMS90aGlzLnAueHx8MSwxL3RoaXMucC55fHx0aGlzLnAueHx8MSl9LHRoaXMuYXBwbHlUb1BvaW50PWZ1bmN0aW9uKHQpe3QuYXBwbHlUcmFuc2Zvcm0oW3RoaXMucC54fHwwLDAsMCx0aGlzLnAueXx8MCwwLDBdKX19LHRoaXMuVHlwZS5tYXRyaXg9ZnVuY3Rpb24odCl7dGhpcy5tPUEuVG9OdW1iZXJBcnJheSh0KSx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQpe3QudHJhbnNmb3JtKHRoaXMubVswXSx0aGlzLm1bMV0sdGhpcy5tWzJdLHRoaXMubVszXSx0aGlzLm1bNF0sdGhpcy5tWzVdKX0sdGhpcy51bmFwcGx5PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMubVswXSxpPXRoaXMubVsyXSxuPXRoaXMubVs0XSxzPXRoaXMubVsxXSxhPXRoaXMubVszXSxyPXRoaXMubVs1XSxvPTEvKGUqKDEqYS0wKnIpLWkqKDEqcy0wKnIpK24qKDAqcy0wKmEpKTt0LnRyYW5zZm9ybShvKigxKmEtMCpyKSxvKigwKnItMSpzKSxvKigwKm4tMSppKSxvKigxKmUtMCpuKSxvKihpKnItbiphKSxvKihuKnMtZSpyKSl9LHRoaXMuYXBwbHlUb1BvaW50PWZ1bmN0aW9uKHQpe3QuYXBwbHlUcmFuc2Zvcm0odGhpcy5tKX19LHRoaXMuVHlwZS5Ta2V3QmFzZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9ZS5UeXBlLm1hdHJpeCx0aGlzLmJhc2UodCksdGhpcy5hbmdsZT1uZXcgQS5Qcm9wZXJ0eShcImFuZ2xlXCIsdCl9LHRoaXMuVHlwZS5Ta2V3QmFzZS5wcm90b3R5cGU9bmV3IHRoaXMuVHlwZS5tYXRyaXgsdGhpcy5UeXBlLnNrZXdYPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1lLlR5cGUuU2tld0Jhc2UsdGhpcy5iYXNlKHQpLHRoaXMubT1bMSwwLE1hdGgudGFuKHRoaXMuYW5nbGUudG9SYWRpYW5zKCkpLDEsMCwwXX0sdGhpcy5UeXBlLnNrZXdYLnByb3RvdHlwZT1uZXcgdGhpcy5UeXBlLlNrZXdCYXNlLHRoaXMuVHlwZS5za2V3WT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9ZS5UeXBlLlNrZXdCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLm09WzEsTWF0aC50YW4odGhpcy5hbmdsZS50b1JhZGlhbnMoKSksMCwxLDAsMF19LHRoaXMuVHlwZS5za2V3WS5wcm90b3R5cGU9bmV3IHRoaXMuVHlwZS5Ta2V3QmFzZSx0aGlzLnRyYW5zZm9ybXM9W10sdGhpcy5hcHBseT1mdW5jdGlvbih0KXtmb3IodmFyIGU9MDtlPHRoaXMudHJhbnNmb3Jtcy5sZW5ndGg7ZSsrKXRoaXMudHJhbnNmb3Jtc1tlXS5hcHBseSh0KX0sdGhpcy51bmFwcGx5PWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10aGlzLnRyYW5zZm9ybXMubGVuZ3RoLTE7MDw9ZTtlLS0pdGhpcy50cmFuc2Zvcm1zW2VdLnVuYXBwbHkodCl9LHRoaXMuYXBwbHlUb1BvaW50PWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dGhpcy50cmFuc2Zvcm1zLmxlbmd0aDtlKyspdGhpcy50cmFuc2Zvcm1zW2VdLmFwcGx5VG9Qb2ludCh0KX07Zm9yKHZhciBpPUEudHJpbShBLmNvbXByZXNzU3BhY2VzKHQpKS5yZXBsYWNlKC9cXCkoW2EtekEtWl0pL2csXCIpICQxXCIpLnJlcGxhY2UoL1xcKShcXHM/LFxccz8pL2csXCIpIFwiKS5zcGxpdCgvXFxzKD89W2Etel0pLyksbj0wO248aS5sZW5ndGg7bisrKWlmKFwibm9uZVwiIT09aVtuXSl7dmFyIHM9QS50cmltKGlbbl0uc3BsaXQoXCIoXCIpWzBdKSxhPWlbbl0uc3BsaXQoXCIoXCIpWzFdLnJlcGxhY2UoXCIpXCIsXCJcIikscj10aGlzLlR5cGVbc107aWYodm9pZCAwIT09cil7dmFyIG89bmV3IHIoYSk7by50eXBlPXMsdGhpcy50cmFuc2Zvcm1zLnB1c2gobyl9fX0sQS5Bc3BlY3RSYXRpbz1mdW5jdGlvbih0LGUsaSxuLHMsYSxyLG8sbCxoKXt2YXIgdT0oZT0oZT1BLmNvbXByZXNzU3BhY2VzKGUpKS5yZXBsYWNlKC9eZGVmZXJcXHMvLFwiXCIpKS5zcGxpdChcIiBcIilbMF18fFwieE1pZFlNaWRcIixjPWUuc3BsaXQoXCIgXCIpWzFdfHxcIm1lZXRcIixmPWkvbixtPXMvYSxwPU1hdGgubWluKGYsbSksZD1NYXRoLm1heChmLG0pO1wibWVldFwiPT1jJiYobio9cCxhKj1wKSxcInNsaWNlXCI9PWMmJihuKj1kLGEqPWQpLGw9bmV3IEEuUHJvcGVydHkoXCJyZWZYXCIsbCksaD1uZXcgQS5Qcm9wZXJ0eShcInJlZllcIixoKSxsLmhhc1ZhbHVlKCkmJmguaGFzVmFsdWUoKT90LnRyYW5zbGF0ZSgtcCpsLnRvUGl4ZWxzKFwieFwiKSwtcCpoLnRvUGl4ZWxzKFwieVwiKSk6KHUubWF0Y2goL154TWlkLykmJihcIm1lZXRcIj09YyYmcD09bXx8XCJzbGljZVwiPT1jJiZkPT1tKSYmdC50cmFuc2xhdGUoaS8yLW4vMiwwKSx1Lm1hdGNoKC9ZTWlkJC8pJiYoXCJtZWV0XCI9PWMmJnA9PWZ8fFwic2xpY2VcIj09YyYmZD09ZikmJnQudHJhbnNsYXRlKDAscy8yLWEvMiksdS5tYXRjaCgvXnhNYXgvKSYmKFwibWVldFwiPT1jJiZwPT1tfHxcInNsaWNlXCI9PWMmJmQ9PW0pJiZ0LnRyYW5zbGF0ZShpLW4sMCksdS5tYXRjaCgvWU1heCQvKSYmKFwibWVldFwiPT1jJiZwPT1mfHxcInNsaWNlXCI9PWMmJmQ9PWYpJiZ0LnRyYW5zbGF0ZSgwLHMtYSkpLFwibm9uZVwiPT11P3Quc2NhbGUoZixtKTpcIm1lZXRcIj09Yz90LnNjYWxlKHAscCk6XCJzbGljZVwiPT1jJiZ0LnNjYWxlKGQsZCksdC50cmFuc2xhdGUobnVsbD09cj8wOi1yLG51bGw9PW8/MDotbyl9LEEuRWxlbWVudD17fSxBLkVtcHR5UHJvcGVydHk9bmV3IEEuUHJvcGVydHkoXCJFTVBUWVwiLFwiXCIpLEEuRWxlbWVudC5FbGVtZW50QmFzZT1mdW5jdGlvbihhKXt0aGlzLmF0dHJpYnV0ZXM9e30sdGhpcy5zdHlsZXM9e30sdGhpcy5zdHlsZXNTcGVjaWZpY2l0eT17fSx0aGlzLmNoaWxkcmVuPVtdLHRoaXMuYXR0cmlidXRlPWZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5hdHRyaWJ1dGVzW3RdO3JldHVybiBudWxsIT1pP2k6KDE9PWUmJihpPW5ldyBBLlByb3BlcnR5KHQsXCJcIiksdGhpcy5hdHRyaWJ1dGVzW3RdPWkpLGl8fEEuRW1wdHlQcm9wZXJ0eSl9LHRoaXMuZ2V0SHJlZkF0dHJpYnV0ZT1mdW5jdGlvbigpe2Zvcih2YXIgdCBpbiB0aGlzLmF0dHJpYnV0ZXMpaWYoXCJocmVmXCI9PXR8fHQubWF0Y2goLzpocmVmJC8pKXJldHVybiB0aGlzLmF0dHJpYnV0ZXNbdF07cmV0dXJuIEEuRW1wdHlQcm9wZXJ0eX0sdGhpcy5zdHlsZT1mdW5jdGlvbih0LGUsaSl7dmFyIG49dGhpcy5zdHlsZXNbdF07aWYobnVsbCE9bilyZXR1cm4gbjt2YXIgcz10aGlzLmF0dHJpYnV0ZSh0KTtpZihudWxsIT1zJiZzLmhhc1ZhbHVlKCkpcmV0dXJuIHRoaXMuc3R5bGVzW3RdPXM7aWYoMSE9aSl7dmFyIGE9dGhpcy5wYXJlbnQ7aWYobnVsbCE9YSl7dmFyIHI9YS5zdHlsZSh0KTtpZihudWxsIT1yJiZyLmhhc1ZhbHVlKCkpcmV0dXJuIHJ9fXJldHVybiAxPT1lJiYobj1uZXcgQS5Qcm9wZXJ0eSh0LFwiXCIpLHRoaXMuc3R5bGVzW3RdPW4pLG58fEEuRW1wdHlQcm9wZXJ0eX0sdGhpcy5yZW5kZXI9ZnVuY3Rpb24odCl7aWYoXCJub25lXCIhPXRoaXMuc3R5bGUoXCJkaXNwbGF5XCIpLnZhbHVlJiZcImhpZGRlblwiIT10aGlzLnN0eWxlKFwidmlzaWJpbGl0eVwiKS52YWx1ZSl7aWYodC5zYXZlKCksdGhpcy5zdHlsZShcIm1hc2tcIikuaGFzVmFsdWUoKSl7dmFyIGU9dGhpcy5zdHlsZShcIm1hc2tcIikuZ2V0RGVmaW5pdGlvbigpO251bGwhPWUmJmUuYXBwbHkodCx0aGlzKX1lbHNlIGlmKHRoaXMuc3R5bGUoXCJmaWx0ZXJcIikuaGFzVmFsdWUoKSl7dmFyIGk9dGhpcy5zdHlsZShcImZpbHRlclwiKS5nZXREZWZpbml0aW9uKCk7bnVsbCE9aSYmaS5hcHBseSh0LHRoaXMpfWVsc2UgdGhpcy5zZXRDb250ZXh0KHQpLHRoaXMucmVuZGVyQ2hpbGRyZW4odCksdGhpcy5jbGVhckNvbnRleHQodCk7dC5yZXN0b3JlKCl9fSx0aGlzLnNldENvbnRleHQ9ZnVuY3Rpb24odCl7fSx0aGlzLmNsZWFyQ29udGV4dD1mdW5jdGlvbih0KXt9LHRoaXMucmVuZGVyQ2hpbGRyZW49ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTA7ZTx0aGlzLmNoaWxkcmVuLmxlbmd0aDtlKyspdGhpcy5jaGlsZHJlbltlXS5yZW5kZXIodCl9LHRoaXMuYWRkQ2hpbGQ9ZnVuY3Rpb24odCxlKXt2YXIgaT10O2UmJihpPUEuQ3JlYXRlRWxlbWVudCh0KSksaS5wYXJlbnQ9dGhpcyxcInRpdGxlXCIhPWkudHlwZSYmdGhpcy5jaGlsZHJlbi5wdXNoKGkpfSx0aGlzLmFkZFN0eWxlc0Zyb21TdHlsZURlZmluaXRpb249ZnVuY3Rpb24oKXtmb3IodmFyIHQgaW4gQS5TdHlsZXMpaWYoXCJAXCIhPXRbMF0mJmYoYSx0KSl7dmFyIGU9QS5TdHlsZXNbdF0saT1BLlN0eWxlc1NwZWNpZmljaXR5W3RdO2lmKG51bGwhPWUpZm9yKHZhciBuIGluIGUpe3ZhciBzPXRoaXMuc3R5bGVzU3BlY2lmaWNpdHlbbl07dm9pZCAwPT09cyYmKHM9XCIwMDBcIiksczxpJiYodGhpcy5zdHlsZXNbbl09ZVtuXSx0aGlzLnN0eWxlc1NwZWNpZmljaXR5W25dPWkpfX19O3ZhciB0LGU9bmV3IFJlZ0V4cChcIl5bQS1aLV0rJFwiKTtpZihudWxsIT1hJiYxPT1hLm5vZGVUeXBlKXtmb3IodmFyIGk9MDtpPGEuYXR0cmlidXRlcy5sZW5ndGg7aSsrKXt2YXIgbj1hLmF0dHJpYnV0ZXNbaV0scz0odD1uLm5vZGVOYW1lLGUudGVzdCh0KT90LnRvTG93ZXJDYXNlKCk6dCk7dGhpcy5hdHRyaWJ1dGVzW3NdPW5ldyBBLlByb3BlcnR5KHMsbi52YWx1ZSl9aWYodGhpcy5hZGRTdHlsZXNGcm9tU3R5bGVEZWZpbml0aW9uKCksdGhpcy5hdHRyaWJ1dGUoXCJzdHlsZVwiKS5oYXNWYWx1ZSgpKXt2YXIgcj10aGlzLmF0dHJpYnV0ZShcInN0eWxlXCIpLnZhbHVlLnNwbGl0KFwiO1wiKTtmb3IoaT0wO2k8ci5sZW5ndGg7aSsrKWlmKFwiXCIhPUEudHJpbShyW2ldKSl7dmFyIG89cltpXS5zcGxpdChcIjpcIiksbD1BLnRyaW0ob1swXSksaD1BLnRyaW0ob1sxXSk7dGhpcy5zdHlsZXNbbF09bmV3IEEuUHJvcGVydHkobCxoKX19Zm9yKHRoaXMuYXR0cmlidXRlKFwiaWRcIikuaGFzVmFsdWUoKSYmbnVsbD09QS5EZWZpbml0aW9uc1t0aGlzLmF0dHJpYnV0ZShcImlkXCIpLnZhbHVlXSYmKEEuRGVmaW5pdGlvbnNbdGhpcy5hdHRyaWJ1dGUoXCJpZFwiKS52YWx1ZV09dGhpcyksaT0wO2k8YS5jaGlsZE5vZGVzLmxlbmd0aDtpKyspe3ZhciB1PWEuY2hpbGROb2Rlc1tpXTtpZigxPT11Lm5vZGVUeXBlJiZ0aGlzLmFkZENoaWxkKHUsITApLHRoaXMuY2FwdHVyZVRleHROb2RlcyYmKDM9PXUubm9kZVR5cGV8fDQ9PXUubm9kZVR5cGUpKXt2YXIgYz11LnZhbHVlfHx1LnRleHR8fHUudGV4dENvbnRlbnR8fFwiXCI7XCJcIiE9QS5jb21wcmVzc1NwYWNlcyhjKSYmdGhpcy5hZGRDaGlsZChuZXcgQS5FbGVtZW50LnRzcGFuKHUpLCExKX19fX0sQS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5jYWxjdWxhdGVPcGFjaXR5PWZ1bmN0aW9uKCl7Zm9yKHZhciB0PTEsZT10aGlzO251bGwhPWU7KXt2YXIgaT1lLnN0eWxlKFwib3BhY2l0eVwiLCExLCEwKTtpLmhhc1ZhbHVlKCkmJih0Kj1pLm51bVZhbHVlKCkpLGU9ZS5wYXJlbnR9cmV0dXJuIHR9LHRoaXMuc2V0Q29udGV4dD1mdW5jdGlvbih0LGUpe2lmKCFlKXt2YXIgaTtpZih0aGlzLnN0eWxlKFwiZmlsbFwiKS5pc1VybERlZmluaXRpb24oKSludWxsIT0oaT10aGlzLnN0eWxlKFwiZmlsbFwiKS5nZXRGaWxsU3R5bGVEZWZpbml0aW9uKHRoaXMsdGhpcy5zdHlsZShcImZpbGwtb3BhY2l0eVwiKSkpJiYodC5maWxsU3R5bGU9aSk7ZWxzZSBpZih0aGlzLnN0eWxlKFwiZmlsbFwiKS5oYXNWYWx1ZSgpKXt2YXIgbjtcImN1cnJlbnRDb2xvclwiPT0obj10aGlzLnN0eWxlKFwiZmlsbFwiKSkudmFsdWUmJihuLnZhbHVlPXRoaXMuc3R5bGUoXCJjb2xvclwiKS52YWx1ZSksXCJpbmhlcml0XCIhPW4udmFsdWUmJih0LmZpbGxTdHlsZT1cIm5vbmVcIj09bi52YWx1ZT9cInJnYmEoMCwwLDAsMClcIjpuLnZhbHVlKX1pZih0aGlzLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIpLmhhc1ZhbHVlKCkmJihuPShuPW5ldyBBLlByb3BlcnR5KFwiZmlsbFwiLHQuZmlsbFN0eWxlKSkuYWRkT3BhY2l0eSh0aGlzLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIpKSx0LmZpbGxTdHlsZT1uLnZhbHVlKSx0aGlzLnN0eWxlKFwic3Ryb2tlXCIpLmlzVXJsRGVmaW5pdGlvbigpKW51bGwhPShpPXRoaXMuc3R5bGUoXCJzdHJva2VcIikuZ2V0RmlsbFN0eWxlRGVmaW5pdGlvbih0aGlzLHRoaXMuc3R5bGUoXCJzdHJva2Utb3BhY2l0eVwiKSkpJiYodC5zdHJva2VTdHlsZT1pKTtlbHNlIGlmKHRoaXMuc3R5bGUoXCJzdHJva2VcIikuaGFzVmFsdWUoKSl7dmFyIHM7XCJjdXJyZW50Q29sb3JcIj09KHM9dGhpcy5zdHlsZShcInN0cm9rZVwiKSkudmFsdWUmJihzLnZhbHVlPXRoaXMuc3R5bGUoXCJjb2xvclwiKS52YWx1ZSksXCJpbmhlcml0XCIhPXMudmFsdWUmJih0LnN0cm9rZVN0eWxlPVwibm9uZVwiPT1zLnZhbHVlP1wicmdiYSgwLDAsMCwwKVwiOnMudmFsdWUpfWlmKHRoaXMuc3R5bGUoXCJzdHJva2Utb3BhY2l0eVwiKS5oYXNWYWx1ZSgpJiYocz0ocz1uZXcgQS5Qcm9wZXJ0eShcInN0cm9rZVwiLHQuc3Ryb2tlU3R5bGUpKS5hZGRPcGFjaXR5KHRoaXMuc3R5bGUoXCJzdHJva2Utb3BhY2l0eVwiKSksdC5zdHJva2VTdHlsZT1zLnZhbHVlKSx0aGlzLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIpLmhhc1ZhbHVlKCkpe3ZhciBhPXRoaXMuc3R5bGUoXCJzdHJva2Utd2lkdGhcIikudG9QaXhlbHMoKTt0LmxpbmVXaWR0aD0wPT1hPy4wMDE6YX1pZih0aGlzLnN0eWxlKFwic3Ryb2tlLWxpbmVjYXBcIikuaGFzVmFsdWUoKSYmKHQubGluZUNhcD10aGlzLnN0eWxlKFwic3Ryb2tlLWxpbmVjYXBcIikudmFsdWUpLHRoaXMuc3R5bGUoXCJzdHJva2UtbGluZWpvaW5cIikuaGFzVmFsdWUoKSYmKHQubGluZUpvaW49dGhpcy5zdHlsZShcInN0cm9rZS1saW5lam9pblwiKS52YWx1ZSksdGhpcy5zdHlsZShcInN0cm9rZS1taXRlcmxpbWl0XCIpLmhhc1ZhbHVlKCkmJih0Lm1pdGVyTGltaXQ9dGhpcy5zdHlsZShcInN0cm9rZS1taXRlcmxpbWl0XCIpLnZhbHVlKSx0aGlzLnN0eWxlKFwicGFpbnQtb3JkZXJcIikuaGFzVmFsdWUoKSYmKHQucGFpbnRPcmRlcj10aGlzLnN0eWxlKFwicGFpbnQtb3JkZXJcIikudmFsdWUpLHRoaXMuc3R5bGUoXCJzdHJva2UtZGFzaGFycmF5XCIpLmhhc1ZhbHVlKCkmJlwibm9uZVwiIT10aGlzLnN0eWxlKFwic3Ryb2tlLWRhc2hhcnJheVwiKS52YWx1ZSl7dmFyIHI9QS5Ub051bWJlckFycmF5KHRoaXMuc3R5bGUoXCJzdHJva2UtZGFzaGFycmF5XCIpLnZhbHVlKTt2b2lkIDAhPT10LnNldExpbmVEYXNoP3Quc2V0TGluZURhc2gocik6dm9pZCAwIT09dC53ZWJraXRMaW5lRGFzaD90LndlYmtpdExpbmVEYXNoPXI6dm9pZCAwPT09dC5tb3pEYXNofHwxPT1yLmxlbmd0aCYmMD09clswXXx8KHQubW96RGFzaD1yKTt2YXIgbz10aGlzLnN0eWxlKFwic3Ryb2tlLWRhc2hvZmZzZXRcIikudG9QaXhlbHMoKTt2b2lkIDAhPT10LmxpbmVEYXNoT2Zmc2V0P3QubGluZURhc2hPZmZzZXQ9bzp2b2lkIDAhPT10LndlYmtpdExpbmVEYXNoT2Zmc2V0P3Qud2Via2l0TGluZURhc2hPZmZzZXQ9bzp2b2lkIDAhPT10Lm1vekRhc2hPZmZzZXQmJih0Lm1vekRhc2hPZmZzZXQ9byl9fWlmKHZvaWQgMCE9PXQuZm9udCl7dC5mb250PUEuRm9udC5DcmVhdGVGb250KHRoaXMuc3R5bGUoXCJmb250LXN0eWxlXCIpLnZhbHVlLHRoaXMuc3R5bGUoXCJmb250LXZhcmlhbnRcIikudmFsdWUsdGhpcy5zdHlsZShcImZvbnQtd2VpZ2h0XCIpLnZhbHVlLHRoaXMuc3R5bGUoXCJmb250LXNpemVcIikuaGFzVmFsdWUoKT90aGlzLnN0eWxlKFwiZm9udC1zaXplXCIpLnRvUGl4ZWxzKCkrXCJweFwiOlwiXCIsdGhpcy5zdHlsZShcImZvbnQtZmFtaWx5XCIpLnZhbHVlKS50b1N0cmluZygpO3ZhciBsPXRoaXMuc3R5bGUoXCJmb250LXNpemVcIiwhMSwhMSk7bC5pc1BpeGVscygpJiYoQS5lbVNpemU9bC50b1BpeGVscygpKX1pZih0aGlzLnN0eWxlKFwidHJhbnNmb3JtXCIsITEsITApLmhhc1ZhbHVlKCkmJm5ldyBBLlRyYW5zZm9ybSh0aGlzLnN0eWxlKFwidHJhbnNmb3JtXCIsITEsITApLnZhbHVlKS5hcHBseSh0KSx0aGlzLnN0eWxlKFwiY2xpcC1wYXRoXCIsITEsITApLmhhc1ZhbHVlKCkpe3ZhciBoPXRoaXMuc3R5bGUoXCJjbGlwLXBhdGhcIiwhMSwhMCkuZ2V0RGVmaW5pdGlvbigpO251bGwhPWgmJmguYXBwbHkodCl9dC5nbG9iYWxBbHBoYT10aGlzLmNhbGN1bGF0ZU9wYWNpdHkoKX19LEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnBhdGg9ZnVuY3Rpb24odCl7cmV0dXJuIG51bGwhPXQmJnQuYmVnaW5QYXRoKCksbmV3IEEuQm91bmRpbmdCb3h9LHRoaXMucmVuZGVyQ2hpbGRyZW49ZnVuY3Rpb24odCl7dGhpcy5wYXRoKHQpLEEuTW91c2UuY2hlY2tQYXRoKHRoaXMsdCksXCJcIiE9dC5maWxsU3R5bGUmJihcImluaGVyaXRcIiE9dGhpcy5zdHlsZShcImZpbGwtcnVsZVwiKS52YWx1ZU9yRGVmYXVsdChcImluaGVyaXRcIik/dC5maWxsKHRoaXMuc3R5bGUoXCJmaWxsLXJ1bGVcIikudmFsdWUpOnQuZmlsbCgpKSxcIlwiIT10LnN0cm9rZVN0eWxlJiZ0LnN0cm9rZSgpO3ZhciBlPXRoaXMuZ2V0TWFya2VycygpO2lmKG51bGwhPWUpe2lmKHRoaXMuc3R5bGUoXCJtYXJrZXItc3RhcnRcIikuaXNVcmxEZWZpbml0aW9uKCkmJihpPXRoaXMuc3R5bGUoXCJtYXJrZXItc3RhcnRcIikuZ2V0RGVmaW5pdGlvbigpKS5yZW5kZXIodCxlWzBdWzBdLGVbMF1bMV0pLHRoaXMuc3R5bGUoXCJtYXJrZXItbWlkXCIpLmlzVXJsRGVmaW5pdGlvbigpKWZvcih2YXIgaT10aGlzLnN0eWxlKFwibWFya2VyLW1pZFwiKS5nZXREZWZpbml0aW9uKCksbj0xO248ZS5sZW5ndGgtMTtuKyspaS5yZW5kZXIodCxlW25dWzBdLGVbbl1bMV0pO3RoaXMuc3R5bGUoXCJtYXJrZXItZW5kXCIpLmlzVXJsRGVmaW5pdGlvbigpJiYoaT10aGlzLnN0eWxlKFwibWFya2VyLWVuZFwiKS5nZXREZWZpbml0aW9uKCkpLnJlbmRlcih0LGVbZS5sZW5ndGgtMV1bMF0sZVtlLmxlbmd0aC0xXVsxXSl9fSx0aGlzLmdldEJvdW5kaW5nQm94PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGF0aCgpfSx0aGlzLmdldE1hcmtlcnM9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH19LEEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxBLkVsZW1lbnQuc3ZnPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5iYXNlQ2xlYXJDb250ZXh0PXRoaXMuY2xlYXJDb250ZXh0LHRoaXMuY2xlYXJDb250ZXh0PWZ1bmN0aW9uKHQpe3RoaXMuYmFzZUNsZWFyQ29udGV4dCh0KSxBLlZpZXdQb3J0LlJlbW92ZUN1cnJlbnQoKX0sdGhpcy5iYXNlU2V0Q29udGV4dD10aGlzLnNldENvbnRleHQsdGhpcy5zZXRDb250ZXh0PWZ1bmN0aW9uKHQpe2lmKHQuc3Ryb2tlU3R5bGU9XCJyZ2JhKDAsMCwwLDApXCIsdC5saW5lQ2FwPVwiYnV0dFwiLHQubGluZUpvaW49XCJtaXRlclwiLHQubWl0ZXJMaW1pdD00LHQuY2FudmFzLnN0eWxlJiZ2b2lkIDAhPT10LmZvbnQmJnZvaWQgMCE9PXUuZ2V0Q29tcHV0ZWRTdHlsZSl7dC5mb250PXUuZ2V0Q29tcHV0ZWRTdHlsZSh0LmNhbnZhcykuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnRcIik7dmFyIGU9bmV3IEEuUHJvcGVydHkoXCJmb250U2l6ZVwiLEEuRm9udC5QYXJzZSh0LmZvbnQpLmZvbnRTaXplKTtlLmhhc1ZhbHVlKCkmJihBLnJvb3RFbVNpemU9QS5lbVNpemU9ZS50b1BpeGVscyhcInlcIikpfXRoaXMuYmFzZVNldENvbnRleHQodCksdGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcInhcIiwhMCkudmFsdWU9MCksdGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcInlcIiwhMCkudmFsdWU9MCksdC50cmFuc2xhdGUodGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLnRvUGl4ZWxzKFwieFwiKSx0aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpKTt2YXIgaT1BLlZpZXdQb3J0LndpZHRoKCksbj1BLlZpZXdQb3J0LmhlaWdodCgpO2lmKHRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikuaGFzVmFsdWUoKXx8KHRoaXMuYXR0cmlidXRlKFwid2lkdGhcIiwhMCkudmFsdWU9XCIxMDAlXCIpLHRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiLCEwKS52YWx1ZT1cIjEwMCVcIiksdm9pZCAwPT09dGhpcy5yb290KXtpPXRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIpO3ZhciBzPTAsYT0wO3RoaXMuYXR0cmlidXRlKFwicmVmWFwiKS5oYXNWYWx1ZSgpJiZ0aGlzLmF0dHJpYnV0ZShcInJlZllcIikuaGFzVmFsdWUoKSYmKHM9LXRoaXMuYXR0cmlidXRlKFwicmVmWFwiKS50b1BpeGVscyhcInhcIiksYT0tdGhpcy5hdHRyaWJ1dGUoXCJyZWZZXCIpLnRvUGl4ZWxzKFwieVwiKSksXCJ2aXNpYmxlXCIhPXRoaXMuYXR0cmlidXRlKFwib3ZlcmZsb3dcIikudmFsdWVPckRlZmF1bHQoXCJoaWRkZW5cIikmJih0LmJlZ2luUGF0aCgpLHQubW92ZVRvKHMsYSksdC5saW5lVG8oaSxhKSx0LmxpbmVUbyhpLG4pLHQubGluZVRvKHMsbiksdC5jbG9zZVBhdGgoKSx0LmNsaXAoKSl9aWYoQS5WaWV3UG9ydC5TZXRDdXJyZW50KGksbiksdGhpcy5hdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpLmhhc1ZhbHVlKCkpe3ZhciByPUEuVG9OdW1iZXJBcnJheSh0aGlzLmF0dHJpYnV0ZShcInZpZXdCb3hcIikudmFsdWUpLG89clswXSxsPXJbMV07aT1yWzJdLG49clszXSxBLkFzcGVjdFJhdGlvKHQsdGhpcy5hdHRyaWJ1dGUoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIpLnZhbHVlLEEuVmlld1BvcnQud2lkdGgoKSxpLEEuVmlld1BvcnQuaGVpZ2h0KCksbixvLGwsdGhpcy5hdHRyaWJ1dGUoXCJyZWZYXCIpLnZhbHVlLHRoaXMuYXR0cmlidXRlKFwicmVmWVwiKS52YWx1ZSksQS5WaWV3UG9ydC5SZW1vdmVDdXJyZW50KCksQS5WaWV3UG9ydC5TZXRDdXJyZW50KHJbMl0sclszXSl9fX0sQS5FbGVtZW50LnN2Zy5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLEEuRWxlbWVudC5yZWN0PWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnBhdGg9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLnRvUGl4ZWxzKFwieFwiKSxpPXRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIiksbj10aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKSxzPXRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLnRvUGl4ZWxzKFwieVwiKSxhPXRoaXMuYXR0cmlidXRlKFwicnhcIikudG9QaXhlbHMoXCJ4XCIpLHI9dGhpcy5hdHRyaWJ1dGUoXCJyeVwiKS50b1BpeGVscyhcInlcIik7aWYodGhpcy5hdHRyaWJ1dGUoXCJyeFwiKS5oYXNWYWx1ZSgpJiYhdGhpcy5hdHRyaWJ1dGUoXCJyeVwiKS5oYXNWYWx1ZSgpJiYocj1hKSx0aGlzLmF0dHJpYnV0ZShcInJ5XCIpLmhhc1ZhbHVlKCkmJiF0aGlzLmF0dHJpYnV0ZShcInJ4XCIpLmhhc1ZhbHVlKCkmJihhPXIpLGE9TWF0aC5taW4oYSxuLzIpLHI9TWF0aC5taW4ocixzLzIpLG51bGwhPXQpe3ZhciBvPShNYXRoLnNxcnQoMiktMSkvMyo0O3QuYmVnaW5QYXRoKCksdC5tb3ZlVG8oZSthLGkpLHQubGluZVRvKGUrbi1hLGkpLHQuYmV6aWVyQ3VydmVUbyhlK24tYStvKmEsaSxlK24saStyLW8qcixlK24saStyKSx0LmxpbmVUbyhlK24saStzLXIpLHQuYmV6aWVyQ3VydmVUbyhlK24saStzLXIrbypyLGUrbi1hK28qYSxpK3MsZStuLWEsaStzKSx0LmxpbmVUbyhlK2EsaStzKSx0LmJlemllckN1cnZlVG8oZSthLW8qYSxpK3MsZSxpK3MtcitvKnIsZSxpK3MtciksdC5saW5lVG8oZSxpK3IpLHQuYmV6aWVyQ3VydmVUbyhlLGkrci1vKnIsZSthLW8qYSxpLGUrYSxpKSx0LmNsb3NlUGF0aCgpfXJldHVybiBuZXcgQS5Cb3VuZGluZ0JveChlLGksZStuLGkrcyl9fSxBLkVsZW1lbnQucmVjdC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsQS5FbGVtZW50LmNpcmNsZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuYXR0cmlidXRlKFwiY3hcIikudG9QaXhlbHMoXCJ4XCIpLGk9dGhpcy5hdHRyaWJ1dGUoXCJjeVwiKS50b1BpeGVscyhcInlcIiksbj10aGlzLmF0dHJpYnV0ZShcInJcIikudG9QaXhlbHMoKTtyZXR1cm4gbnVsbCE9dCYmKHQuYmVnaW5QYXRoKCksdC5hcmMoZSxpLG4sMCwyKk1hdGguUEksITEpLHQuY2xvc2VQYXRoKCkpLG5ldyBBLkJvdW5kaW5nQm94KGUtbixpLW4sZStuLGkrbil9fSxBLkVsZW1lbnQuY2lyY2xlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSxBLkVsZW1lbnQuZWxsaXBzZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3ZhciBlPShNYXRoLnNxcnQoMiktMSkvMyo0LGk9dGhpcy5hdHRyaWJ1dGUoXCJyeFwiKS50b1BpeGVscyhcInhcIiksbj10aGlzLmF0dHJpYnV0ZShcInJ5XCIpLnRvUGl4ZWxzKFwieVwiKSxzPXRoaXMuYXR0cmlidXRlKFwiY3hcIikudG9QaXhlbHMoXCJ4XCIpLGE9dGhpcy5hdHRyaWJ1dGUoXCJjeVwiKS50b1BpeGVscyhcInlcIik7cmV0dXJuIG51bGwhPXQmJih0LmJlZ2luUGF0aCgpLHQubW92ZVRvKHMraSxhKSx0LmJlemllckN1cnZlVG8ocytpLGErZSpuLHMrZSppLGErbixzLGErbiksdC5iZXppZXJDdXJ2ZVRvKHMtZSppLGErbixzLWksYStlKm4scy1pLGEpLHQuYmV6aWVyQ3VydmVUbyhzLWksYS1lKm4scy1lKmksYS1uLHMsYS1uKSx0LmJlemllckN1cnZlVG8ocytlKmksYS1uLHMraSxhLWUqbixzK2ksYSksdC5jbG9zZVBhdGgoKSksbmV3IEEuQm91bmRpbmdCb3gocy1pLGEtbixzK2ksYStuKX19LEEuRWxlbWVudC5lbGxpcHNlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSxBLkVsZW1lbnQubGluZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5nZXRQb2ludHM9ZnVuY3Rpb24oKXtyZXR1cm5bbmV3IEEuUG9pbnQodGhpcy5hdHRyaWJ1dGUoXCJ4MVwiKS50b1BpeGVscyhcInhcIiksdGhpcy5hdHRyaWJ1dGUoXCJ5MVwiKS50b1BpeGVscyhcInlcIikpLG5ldyBBLlBvaW50KHRoaXMuYXR0cmlidXRlKFwieDJcIikudG9QaXhlbHMoXCJ4XCIpLHRoaXMuYXR0cmlidXRlKFwieTJcIikudG9QaXhlbHMoXCJ5XCIpKV19LHRoaXMucGF0aD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmdldFBvaW50cygpO3JldHVybiBudWxsIT10JiYodC5iZWdpblBhdGgoKSx0Lm1vdmVUbyhlWzBdLngsZVswXS55KSx0LmxpbmVUbyhlWzFdLngsZVsxXS55KSksbmV3IEEuQm91bmRpbmdCb3goZVswXS54LGVbMF0ueSxlWzFdLngsZVsxXS55KX0sdGhpcy5nZXRNYXJrZXJzPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5nZXRQb2ludHMoKSxlPXRbMF0uYW5nbGVUbyh0WzFdKTtyZXR1cm5bW3RbMF0sZV0sW3RbMV0sZV1dfX0sQS5FbGVtZW50LmxpbmUucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLEEuRWxlbWVudC5wb2x5bGluZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5wb2ludHM9QS5DcmVhdGVQYXRoKHRoaXMuYXR0cmlidXRlKFwicG9pbnRzXCIpLnZhbHVlKSx0aGlzLnBhdGg9ZnVuY3Rpb24odCl7dmFyIGU9bmV3IEEuQm91bmRpbmdCb3godGhpcy5wb2ludHNbMF0ueCx0aGlzLnBvaW50c1swXS55KTtudWxsIT10JiYodC5iZWdpblBhdGgoKSx0Lm1vdmVUbyh0aGlzLnBvaW50c1swXS54LHRoaXMucG9pbnRzWzBdLnkpKTtmb3IodmFyIGk9MTtpPHRoaXMucG9pbnRzLmxlbmd0aDtpKyspZS5hZGRQb2ludCh0aGlzLnBvaW50c1tpXS54LHRoaXMucG9pbnRzW2ldLnkpLG51bGwhPXQmJnQubGluZVRvKHRoaXMucG9pbnRzW2ldLngsdGhpcy5wb2ludHNbaV0ueSk7cmV0dXJuIGV9LHRoaXMuZ2V0TWFya2Vycz1mdW5jdGlvbigpe2Zvcih2YXIgdD1bXSxlPTA7ZTx0aGlzLnBvaW50cy5sZW5ndGgtMTtlKyspdC5wdXNoKFt0aGlzLnBvaW50c1tlXSx0aGlzLnBvaW50c1tlXS5hbmdsZVRvKHRoaXMucG9pbnRzW2UrMV0pXSk7cmV0dXJuIDA8dC5sZW5ndGgmJnQucHVzaChbdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoLTFdLHRbdC5sZW5ndGgtMV1bMV1dKSx0fX0sQS5FbGVtZW50LnBvbHlsaW5lLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSxBLkVsZW1lbnQucG9seWdvbj1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LnBvbHlsaW5lLHRoaXMuYmFzZSh0KSx0aGlzLmJhc2VQYXRoPXRoaXMucGF0aCx0aGlzLnBhdGg9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5iYXNlUGF0aCh0KTtyZXR1cm4gbnVsbCE9dCYmKHQubGluZVRvKHRoaXMucG9pbnRzWzBdLngsdGhpcy5wb2ludHNbMF0ueSksdC5jbG9zZVBhdGgoKSksZX19LEEuRWxlbWVudC5wb2x5Z29uLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LnBvbHlsaW5lLEEuRWxlbWVudC5wYXRoPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KTt2YXIgZT10aGlzLmF0dHJpYnV0ZShcImRcIikudmFsdWU7ZT1lLnJlcGxhY2UoLywvZ20sXCIgXCIpO2Zvcih2YXIgaT0wO2k8MjtpKyspZT1lLnJlcGxhY2UoLyhbTW1aekxsSGhWdkNjU3NRcVR0QWFdKShbXlxcc10pL2dtLFwiJDEgJDJcIik7Zm9yKGU9KGU9ZS5yZXBsYWNlKC8oW15cXHNdKShbTW1aekxsSGhWdkNjU3NRcVR0QWFdKS9nbSxcIiQxICQyXCIpKS5yZXBsYWNlKC8oWzAtOV0pKFsrXFwtXSkvZ20sXCIkMSAkMlwiKSxpPTA7aTwyO2krKyllPWUucmVwbGFjZSgvKFxcLlswLTldKikoXFwuKS9nbSxcIiQxICQyXCIpO2U9ZS5yZXBsYWNlKC8oW0FhXShcXHMrWzAtOV0rKXszfSlcXHMrKFswMV0pXFxzKihbMDFdKS9nbSxcIiQxICQzICQ0IFwiKSxlPUEuY29tcHJlc3NTcGFjZXMoZSksZT1BLnRyaW0oZSksdGhpcy5QYXRoUGFyc2VyPW5ldyBmdW5jdGlvbih0KXt0aGlzLnRva2Vucz10LnNwbGl0KFwiIFwiKSx0aGlzLnJlc2V0PWZ1bmN0aW9uKCl7dGhpcy5pPS0xLHRoaXMuY29tbWFuZD1cIlwiLHRoaXMucHJldmlvdXNDb21tYW5kPVwiXCIsdGhpcy5zdGFydD1uZXcgQS5Qb2ludCgwLDApLHRoaXMuY29udHJvbD1uZXcgQS5Qb2ludCgwLDApLHRoaXMuY3VycmVudD1uZXcgQS5Qb2ludCgwLDApLHRoaXMucG9pbnRzPVtdLHRoaXMuYW5nbGVzPVtdfSx0aGlzLmlzRW5kPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaT49dGhpcy50b2tlbnMubGVuZ3RoLTF9LHRoaXMuaXNDb21tYW5kT3JFbmQ9ZnVuY3Rpb24oKXtyZXR1cm4hIXRoaXMuaXNFbmQoKXx8bnVsbCE9dGhpcy50b2tlbnNbdGhpcy5pKzFdLm1hdGNoKC9eW0EtWmEtel0kLyl9LHRoaXMuaXNSZWxhdGl2ZUNvbW1hbmQ9ZnVuY3Rpb24oKXtzd2l0Y2godGhpcy5jb21tYW5kKXtjYXNlXCJtXCI6Y2FzZVwibFwiOmNhc2VcImhcIjpjYXNlXCJ2XCI6Y2FzZVwiY1wiOmNhc2VcInNcIjpjYXNlXCJxXCI6Y2FzZVwidFwiOmNhc2VcImFcIjpjYXNlXCJ6XCI6cmV0dXJuITB9cmV0dXJuITF9LHRoaXMuZ2V0VG9rZW49ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pKyssdGhpcy50b2tlbnNbdGhpcy5pXX0sdGhpcy5nZXRTY2FsYXI9ZnVuY3Rpb24oKXtyZXR1cm4gcGFyc2VGbG9hdCh0aGlzLmdldFRva2VuKCkpfSx0aGlzLm5leHRDb21tYW5kPWZ1bmN0aW9uKCl7dGhpcy5wcmV2aW91c0NvbW1hbmQ9dGhpcy5jb21tYW5kLHRoaXMuY29tbWFuZD10aGlzLmdldFRva2VuKCl9LHRoaXMuZ2V0UG9pbnQ9ZnVuY3Rpb24oKXt2YXIgdD1uZXcgQS5Qb2ludCh0aGlzLmdldFNjYWxhcigpLHRoaXMuZ2V0U2NhbGFyKCkpO3JldHVybiB0aGlzLm1ha2VBYnNvbHV0ZSh0KX0sdGhpcy5nZXRBc0NvbnRyb2xQb2ludD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuZ2V0UG9pbnQoKTtyZXR1cm4gdGhpcy5jb250cm9sPXR9LHRoaXMuZ2V0QXNDdXJyZW50UG9pbnQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmdldFBvaW50KCk7cmV0dXJuIHRoaXMuY3VycmVudD10fSx0aGlzLmdldFJlZmxlY3RlZENvbnRyb2xQb2ludD1mdW5jdGlvbigpe3JldHVyblwiY1wiIT10aGlzLnByZXZpb3VzQ29tbWFuZC50b0xvd2VyQ2FzZSgpJiZcInNcIiE9dGhpcy5wcmV2aW91c0NvbW1hbmQudG9Mb3dlckNhc2UoKSYmXCJxXCIhPXRoaXMucHJldmlvdXNDb21tYW5kLnRvTG93ZXJDYXNlKCkmJlwidFwiIT10aGlzLnByZXZpb3VzQ29tbWFuZC50b0xvd2VyQ2FzZSgpP3RoaXMuY3VycmVudDpuZXcgQS5Qb2ludCgyKnRoaXMuY3VycmVudC54LXRoaXMuY29udHJvbC54LDIqdGhpcy5jdXJyZW50LnktdGhpcy5jb250cm9sLnkpfSx0aGlzLm1ha2VBYnNvbHV0ZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5pc1JlbGF0aXZlQ29tbWFuZCgpJiYodC54Kz10aGlzLmN1cnJlbnQueCx0LnkrPXRoaXMuY3VycmVudC55KSx0fSx0aGlzLmFkZE1hcmtlcj1mdW5jdGlvbih0LGUsaSl7bnVsbCE9aSYmMDx0aGlzLmFuZ2xlcy5sZW5ndGgmJm51bGw9PXRoaXMuYW5nbGVzW3RoaXMuYW5nbGVzLmxlbmd0aC0xXSYmKHRoaXMuYW5nbGVzW3RoaXMuYW5nbGVzLmxlbmd0aC0xXT10aGlzLnBvaW50c1t0aGlzLnBvaW50cy5sZW5ndGgtMV0uYW5nbGVUbyhpKSksdGhpcy5hZGRNYXJrZXJBbmdsZSh0LG51bGw9PWU/bnVsbDplLmFuZ2xlVG8odCkpfSx0aGlzLmFkZE1hcmtlckFuZ2xlPWZ1bmN0aW9uKHQsZSl7dGhpcy5wb2ludHMucHVzaCh0KSx0aGlzLmFuZ2xlcy5wdXNoKGUpfSx0aGlzLmdldE1hcmtlclBvaW50cz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnBvaW50c30sdGhpcy5nZXRNYXJrZXJBbmdsZXM9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9MDt0PHRoaXMuYW5nbGVzLmxlbmd0aDt0KyspaWYobnVsbD09dGhpcy5hbmdsZXNbdF0pZm9yKHZhciBlPXQrMTtlPHRoaXMuYW5nbGVzLmxlbmd0aDtlKyspaWYobnVsbCE9dGhpcy5hbmdsZXNbZV0pe3RoaXMuYW5nbGVzW3RdPXRoaXMuYW5nbGVzW2VdO2JyZWFrfXJldHVybiB0aGlzLmFuZ2xlc319KGUpLHRoaXMucGF0aD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLlBhdGhQYXJzZXI7ZS5yZXNldCgpO3ZhciBpPW5ldyBBLkJvdW5kaW5nQm94O2ZvcihudWxsIT10JiZ0LmJlZ2luUGF0aCgpOyFlLmlzRW5kKCk7KXN3aXRjaChlLm5leHRDb21tYW5kKCksZS5jb21tYW5kKXtjYXNlXCJNXCI6Y2FzZVwibVwiOnZhciBuPWUuZ2V0QXNDdXJyZW50UG9pbnQoKTtmb3IoZS5hZGRNYXJrZXIobiksaS5hZGRQb2ludChuLngsbi55KSxudWxsIT10JiZ0Lm1vdmVUbyhuLngsbi55KSxlLnN0YXJ0PWUuY3VycmVudDshZS5pc0NvbW1hbmRPckVuZCgpOyluPWUuZ2V0QXNDdXJyZW50UG9pbnQoKSxlLmFkZE1hcmtlcihuLGUuc3RhcnQpLGkuYWRkUG9pbnQobi54LG4ueSksbnVsbCE9dCYmdC5saW5lVG8obi54LG4ueSk7YnJlYWs7Y2FzZVwiTFwiOmNhc2VcImxcIjpmb3IoOyFlLmlzQ29tbWFuZE9yRW5kKCk7KXt2YXIgcz1lLmN1cnJlbnQ7bj1lLmdldEFzQ3VycmVudFBvaW50KCksZS5hZGRNYXJrZXIobixzKSxpLmFkZFBvaW50KG4ueCxuLnkpLG51bGwhPXQmJnQubGluZVRvKG4ueCxuLnkpfWJyZWFrO2Nhc2VcIkhcIjpjYXNlXCJoXCI6Zm9yKDshZS5pc0NvbW1hbmRPckVuZCgpOyl7dmFyIGE9bmV3IEEuUG9pbnQoKGUuaXNSZWxhdGl2ZUNvbW1hbmQoKT9lLmN1cnJlbnQueDowKStlLmdldFNjYWxhcigpLGUuY3VycmVudC55KTtlLmFkZE1hcmtlcihhLGUuY3VycmVudCksZS5jdXJyZW50PWEsaS5hZGRQb2ludChlLmN1cnJlbnQueCxlLmN1cnJlbnQueSksbnVsbCE9dCYmdC5saW5lVG8oZS5jdXJyZW50LngsZS5jdXJyZW50LnkpfWJyZWFrO2Nhc2VcIlZcIjpjYXNlXCJ2XCI6Zm9yKDshZS5pc0NvbW1hbmRPckVuZCgpOylhPW5ldyBBLlBvaW50KGUuY3VycmVudC54LChlLmlzUmVsYXRpdmVDb21tYW5kKCk/ZS5jdXJyZW50Lnk6MCkrZS5nZXRTY2FsYXIoKSksZS5hZGRNYXJrZXIoYSxlLmN1cnJlbnQpLGUuY3VycmVudD1hLGkuYWRkUG9pbnQoZS5jdXJyZW50LngsZS5jdXJyZW50LnkpLG51bGwhPXQmJnQubGluZVRvKGUuY3VycmVudC54LGUuY3VycmVudC55KTticmVhaztjYXNlXCJDXCI6Y2FzZVwiY1wiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspe3ZhciByPWUuY3VycmVudCxvPWUuZ2V0UG9pbnQoKSxsPWUuZ2V0QXNDb250cm9sUG9pbnQoKSxoPWUuZ2V0QXNDdXJyZW50UG9pbnQoKTtlLmFkZE1hcmtlcihoLGwsbyksaS5hZGRCZXppZXJDdXJ2ZShyLngsci55LG8ueCxvLnksbC54LGwueSxoLngsaC55KSxudWxsIT10JiZ0LmJlemllckN1cnZlVG8oby54LG8ueSxsLngsbC55LGgueCxoLnkpfWJyZWFrO2Nhc2VcIlNcIjpjYXNlXCJzXCI6Zm9yKDshZS5pc0NvbW1hbmRPckVuZCgpOylyPWUuY3VycmVudCxvPWUuZ2V0UmVmbGVjdGVkQ29udHJvbFBvaW50KCksbD1lLmdldEFzQ29udHJvbFBvaW50KCksaD1lLmdldEFzQ3VycmVudFBvaW50KCksZS5hZGRNYXJrZXIoaCxsLG8pLGkuYWRkQmV6aWVyQ3VydmUoci54LHIueSxvLngsby55LGwueCxsLnksaC54LGgueSksbnVsbCE9dCYmdC5iZXppZXJDdXJ2ZVRvKG8ueCxvLnksbC54LGwueSxoLngsaC55KTticmVhaztjYXNlXCJRXCI6Y2FzZVwicVwiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspcj1lLmN1cnJlbnQsbD1lLmdldEFzQ29udHJvbFBvaW50KCksaD1lLmdldEFzQ3VycmVudFBvaW50KCksZS5hZGRNYXJrZXIoaCxsLGwpLGkuYWRkUXVhZHJhdGljQ3VydmUoci54LHIueSxsLngsbC55LGgueCxoLnkpLG51bGwhPXQmJnQucXVhZHJhdGljQ3VydmVUbyhsLngsbC55LGgueCxoLnkpO2JyZWFrO2Nhc2VcIlRcIjpjYXNlXCJ0XCI6Zm9yKDshZS5pc0NvbW1hbmRPckVuZCgpOylyPWUuY3VycmVudCxsPWUuZ2V0UmVmbGVjdGVkQ29udHJvbFBvaW50KCksZS5jb250cm9sPWwsaD1lLmdldEFzQ3VycmVudFBvaW50KCksZS5hZGRNYXJrZXIoaCxsLGwpLGkuYWRkUXVhZHJhdGljQ3VydmUoci54LHIueSxsLngsbC55LGgueCxoLnkpLG51bGwhPXQmJnQucXVhZHJhdGljQ3VydmVUbyhsLngsbC55LGgueCxoLnkpO2JyZWFrO2Nhc2VcIkFcIjpjYXNlXCJhXCI6Zm9yKDshZS5pc0NvbW1hbmRPckVuZCgpOyl7cj1lLmN1cnJlbnQ7dmFyIHU9ZS5nZXRTY2FsYXIoKSxjPWUuZ2V0U2NhbGFyKCksZj1lLmdldFNjYWxhcigpKihNYXRoLlBJLzE4MCksbT1lLmdldFNjYWxhcigpLHA9ZS5nZXRTY2FsYXIoKSxkPShoPWUuZ2V0QXNDdXJyZW50UG9pbnQoKSxuZXcgQS5Qb2ludChNYXRoLmNvcyhmKSooci54LWgueCkvMitNYXRoLnNpbihmKSooci55LWgueSkvMiwtTWF0aC5zaW4oZikqKHIueC1oLngpLzIrTWF0aC5jb3MoZikqKHIueS1oLnkpLzIpKSx5PU1hdGgucG93KGQueCwyKS9NYXRoLnBvdyh1LDIpK01hdGgucG93KGQueSwyKS9NYXRoLnBvdyhjLDIpOzE8eSYmKHUqPU1hdGguc3FydCh5KSxjKj1NYXRoLnNxcnQoeSkpO3ZhciB2PShtPT1wPy0xOjEpKk1hdGguc3FydCgoTWF0aC5wb3codSwyKSpNYXRoLnBvdyhjLDIpLU1hdGgucG93KHUsMikqTWF0aC5wb3coZC55LDIpLU1hdGgucG93KGMsMikqTWF0aC5wb3coZC54LDIpKS8oTWF0aC5wb3codSwyKSpNYXRoLnBvdyhkLnksMikrTWF0aC5wb3coYywyKSpNYXRoLnBvdyhkLngsMikpKTtpc05hTih2KSYmKHY9MCk7dmFyIGc9bmV3IEEuUG9pbnQodip1KmQueS9jLHYqLWMqZC54L3UpLHg9bmV3IEEuUG9pbnQoKHIueCtoLngpLzIrTWF0aC5jb3MoZikqZy54LU1hdGguc2luKGYpKmcueSwoci55K2gueSkvMitNYXRoLnNpbihmKSpnLngrTWF0aC5jb3MoZikqZy55KSxiPWZ1bmN0aW9uKHQpe3JldHVybiBNYXRoLnNxcnQoTWF0aC5wb3codFswXSwyKStNYXRoLnBvdyh0WzFdLDIpKX0sUD1mdW5jdGlvbih0LGUpe3JldHVybih0WzBdKmVbMF0rdFsxXSplWzFdKS8oYih0KSpiKGUpKX0sRT1mdW5jdGlvbih0LGUpe3JldHVybih0WzBdKmVbMV08dFsxXSplWzBdPy0xOjEpKk1hdGguYWNvcyhQKHQsZSkpfSx3PUUoWzEsMF0sWyhkLngtZy54KS91LChkLnktZy55KS9jXSksQj1bKGQueC1nLngpL3UsKGQueS1nLnkpL2NdLEM9WygtZC54LWcueCkvdSwoLWQueS1nLnkpL2NdLFQ9RShCLEMpO1AoQixDKTw9LTEmJihUPU1hdGguUEkpLDE8PVAoQixDKSYmKFQ9MCk7dmFyIFY9MS1wPzE6LTEsTT13K1YqKFQvMiksUz1uZXcgQS5Qb2ludCh4LngrdSpNYXRoLmNvcyhNKSx4LnkrYypNYXRoLnNpbihNKSk7aWYoZS5hZGRNYXJrZXJBbmdsZShTLE0tVipNYXRoLlBJLzIpLGUuYWRkTWFya2VyQW5nbGUoaCxNLVYqTWF0aC5QSSksaS5hZGRQb2ludChoLngsaC55KSxudWxsIT10KXtQPWM8dT91OmM7dmFyIGs9Yzx1PzE6dS9jLEQ9Yzx1P2MvdToxO3QudHJhbnNsYXRlKHgueCx4LnkpLHQucm90YXRlKGYpLHQuc2NhbGUoayxEKSx0LmFyYygwLDAsUCx3LHcrVCwxLXApLHQuc2NhbGUoMS9rLDEvRCksdC5yb3RhdGUoLWYpLHQudHJhbnNsYXRlKC14LngsLXgueSl9fWJyZWFrO2Nhc2VcIlpcIjpjYXNlXCJ6XCI6bnVsbCE9dCYmaS54MSE9PWkueDImJmkueTEhPT1pLnkyJiZ0LmNsb3NlUGF0aCgpLGUuY3VycmVudD1lLnN0YXJ0fXJldHVybiBpfSx0aGlzLmdldE1hcmtlcnM9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9dGhpcy5QYXRoUGFyc2VyLmdldE1hcmtlclBvaW50cygpLGU9dGhpcy5QYXRoUGFyc2VyLmdldE1hcmtlckFuZ2xlcygpLGk9W10sbj0wO248dC5sZW5ndGg7bisrKWkucHVzaChbdFtuXSxlW25dXSk7cmV0dXJuIGl9fSxBLkVsZW1lbnQucGF0aC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsQS5FbGVtZW50LnBhdHRlcm49ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5jcmVhdGVQYXR0ZXJuPWZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIiwhMCksbj10aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIiwhMCkscz1uZXcgQS5FbGVtZW50LnN2ZztzLmF0dHJpYnV0ZXMudmlld0JveD1uZXcgQS5Qcm9wZXJ0eShcInZpZXdCb3hcIix0aGlzLmF0dHJpYnV0ZShcInZpZXdCb3hcIikudmFsdWUpLHMuYXR0cmlidXRlcy53aWR0aD1uZXcgQS5Qcm9wZXJ0eShcIndpZHRoXCIsaStcInB4XCIpLHMuYXR0cmlidXRlcy5oZWlnaHQ9bmV3IEEuUHJvcGVydHkoXCJoZWlnaHRcIixuK1wicHhcIikscy5hdHRyaWJ1dGVzLnRyYW5zZm9ybT1uZXcgQS5Qcm9wZXJ0eShcInRyYW5zZm9ybVwiLHRoaXMuYXR0cmlidXRlKFwicGF0dGVyblRyYW5zZm9ybVwiKS52YWx1ZSkscy5jaGlsZHJlbj10aGlzLmNoaWxkcmVuO3ZhciBhPXAoKTthLndpZHRoPWksYS5oZWlnaHQ9bjt2YXIgcj1hLmdldENvbnRleHQoXCIyZFwiKTt0aGlzLmF0dHJpYnV0ZShcInhcIikuaGFzVmFsdWUoKSYmdGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLmhhc1ZhbHVlKCkmJnIudHJhbnNsYXRlKHRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiwhMCksdGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLnRvUGl4ZWxzKFwieVwiLCEwKSk7Zm9yKHZhciBvPS0xO288PTE7bysrKWZvcih2YXIgbD0tMTtsPD0xO2wrKylyLnNhdmUoKSxzLmF0dHJpYnV0ZXMueD1uZXcgQS5Qcm9wZXJ0eShcInhcIixvKmEud2lkdGgpLHMuYXR0cmlidXRlcy55PW5ldyBBLlByb3BlcnR5KFwieVwiLGwqYS5oZWlnaHQpLHMucmVuZGVyKHIpLHIucmVzdG9yZSgpO3JldHVybiB0LmNyZWF0ZVBhdHRlcm4oYSxcInJlcGVhdFwiKX19LEEuRWxlbWVudC5wYXR0ZXJuLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5tYXJrZXI9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5iYXNlUmVuZGVyPXRoaXMucmVuZGVyLHRoaXMucmVuZGVyPWZ1bmN0aW9uKHQsZSxpKXtpZihlKXt0LnRyYW5zbGF0ZShlLngsZS55KSxcImF1dG9cIj09dGhpcy5hdHRyaWJ1dGUoXCJvcmllbnRcIikudmFsdWVPckRlZmF1bHQoXCJhdXRvXCIpJiZ0LnJvdGF0ZShpKSxcInN0cm9rZVdpZHRoXCI9PXRoaXMuYXR0cmlidXRlKFwibWFya2VyVW5pdHNcIikudmFsdWVPckRlZmF1bHQoXCJzdHJva2VXaWR0aFwiKSYmdC5zY2FsZSh0LmxpbmVXaWR0aCx0LmxpbmVXaWR0aCksdC5zYXZlKCk7dmFyIG49bmV3IEEuRWxlbWVudC5zdmc7bi5hdHRyaWJ1dGVzLnZpZXdCb3g9bmV3IEEuUHJvcGVydHkoXCJ2aWV3Qm94XCIsdGhpcy5hdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpLnZhbHVlKSxuLmF0dHJpYnV0ZXMucmVmWD1uZXcgQS5Qcm9wZXJ0eShcInJlZlhcIix0aGlzLmF0dHJpYnV0ZShcInJlZlhcIikudmFsdWUpLG4uYXR0cmlidXRlcy5yZWZZPW5ldyBBLlByb3BlcnR5KFwicmVmWVwiLHRoaXMuYXR0cmlidXRlKFwicmVmWVwiKS52YWx1ZSksbi5hdHRyaWJ1dGVzLndpZHRoPW5ldyBBLlByb3BlcnR5KFwid2lkdGhcIix0aGlzLmF0dHJpYnV0ZShcIm1hcmtlcldpZHRoXCIpLnZhbHVlKSxuLmF0dHJpYnV0ZXMuaGVpZ2h0PW5ldyBBLlByb3BlcnR5KFwiaGVpZ2h0XCIsdGhpcy5hdHRyaWJ1dGUoXCJtYXJrZXJIZWlnaHRcIikudmFsdWUpLG4uYXR0cmlidXRlcy5maWxsPW5ldyBBLlByb3BlcnR5KFwiZmlsbFwiLHRoaXMuYXR0cmlidXRlKFwiZmlsbFwiKS52YWx1ZU9yRGVmYXVsdChcImJsYWNrXCIpKSxuLmF0dHJpYnV0ZXMuc3Ryb2tlPW5ldyBBLlByb3BlcnR5KFwic3Ryb2tlXCIsdGhpcy5hdHRyaWJ1dGUoXCJzdHJva2VcIikudmFsdWVPckRlZmF1bHQoXCJub25lXCIpKSxuLmNoaWxkcmVuPXRoaXMuY2hpbGRyZW4sbi5yZW5kZXIodCksdC5yZXN0b3JlKCksXCJzdHJva2VXaWR0aFwiPT10aGlzLmF0dHJpYnV0ZShcIm1hcmtlclVuaXRzXCIpLnZhbHVlT3JEZWZhdWx0KFwic3Ryb2tlV2lkdGhcIikmJnQuc2NhbGUoMS90LmxpbmVXaWR0aCwxL3QubGluZVdpZHRoKSxcImF1dG9cIj09dGhpcy5hdHRyaWJ1dGUoXCJvcmllbnRcIikudmFsdWVPckRlZmF1bHQoXCJhdXRvXCIpJiZ0LnJvdGF0ZSgtaSksdC50cmFuc2xhdGUoLWUueCwtZS55KX19fSxBLkVsZW1lbnQubWFya2VyLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5kZWZzPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMucmVuZGVyPWZ1bmN0aW9uKHQpe319LEEuRWxlbWVudC5kZWZzLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5HcmFkaWVudEJhc2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5zdG9wcz1bXTtmb3IodmFyIGU9MDtlPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO2UrKyl7dmFyIGk9dGhpcy5jaGlsZHJlbltlXTtcInN0b3BcIj09aS50eXBlJiZ0aGlzLnN0b3BzLnB1c2goaSl9dGhpcy5nZXRHcmFkaWVudD1mdW5jdGlvbigpe30sdGhpcy5ncmFkaWVudFVuaXRzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYXR0cmlidXRlKFwiZ3JhZGllbnRVbml0c1wiKS52YWx1ZU9yRGVmYXVsdChcIm9iamVjdEJvdW5kaW5nQm94XCIpfSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQ9W1wiZ3JhZGllbnRVbml0c1wiXSx0aGlzLmluaGVyaXRTdG9wQ29udGFpbmVyPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0Lmxlbmd0aDtlKyspe3ZhciBpPXRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdFtlXTshdGhpcy5hdHRyaWJ1dGUoaSkuaGFzVmFsdWUoKSYmdC5hdHRyaWJ1dGUoaSkuaGFzVmFsdWUoKSYmKHRoaXMuYXR0cmlidXRlKGksITApLnZhbHVlPXQuYXR0cmlidXRlKGkpLnZhbHVlKX19LHRoaXMuY3JlYXRlR3JhZGllbnQ9ZnVuY3Rpb24odCxlLGkpe3ZhciBuPXRoaXM7dGhpcy5nZXRIcmVmQXR0cmlidXRlKCkuaGFzVmFsdWUoKSYmKG49dGhpcy5nZXRIcmVmQXR0cmlidXRlKCkuZ2V0RGVmaW5pdGlvbigpLHRoaXMuaW5oZXJpdFN0b3BDb250YWluZXIobikpO3ZhciBzPWZ1bmN0aW9uKHQpe3JldHVybiBpLmhhc1ZhbHVlKCk/bmV3IEEuUHJvcGVydHkoXCJjb2xvclwiLHQpLmFkZE9wYWNpdHkoaSkudmFsdWU6dH0sYT10aGlzLmdldEdyYWRpZW50KHQsZSk7aWYobnVsbD09YSlyZXR1cm4gcyhuLnN0b3BzW24uc3RvcHMubGVuZ3RoLTFdLmNvbG9yKTtmb3IodmFyIHI9MDtyPG4uc3RvcHMubGVuZ3RoO3IrKylhLmFkZENvbG9yU3RvcChuLnN0b3BzW3JdLm9mZnNldCxzKG4uc3RvcHNbcl0uY29sb3IpKTtpZih0aGlzLmF0dHJpYnV0ZShcImdyYWRpZW50VHJhbnNmb3JtXCIpLmhhc1ZhbHVlKCkpe3ZhciBvPUEuVmlld1BvcnQudmlld1BvcnRzWzBdLGw9bmV3IEEuRWxlbWVudC5yZWN0O2wuYXR0cmlidXRlcy54PW5ldyBBLlByb3BlcnR5KFwieFwiLC1BLk1BWF9WSVJUVUFMX1BJWEVMUy8zKSxsLmF0dHJpYnV0ZXMueT1uZXcgQS5Qcm9wZXJ0eShcInlcIiwtQS5NQVhfVklSVFVBTF9QSVhFTFMvMyksbC5hdHRyaWJ1dGVzLndpZHRoPW5ldyBBLlByb3BlcnR5KFwid2lkdGhcIixBLk1BWF9WSVJUVUFMX1BJWEVMUyksbC5hdHRyaWJ1dGVzLmhlaWdodD1uZXcgQS5Qcm9wZXJ0eShcImhlaWdodFwiLEEuTUFYX1ZJUlRVQUxfUElYRUxTKTt2YXIgaD1uZXcgQS5FbGVtZW50Lmc7aC5hdHRyaWJ1dGVzLnRyYW5zZm9ybT1uZXcgQS5Qcm9wZXJ0eShcInRyYW5zZm9ybVwiLHRoaXMuYXR0cmlidXRlKFwiZ3JhZGllbnRUcmFuc2Zvcm1cIikudmFsdWUpLGguY2hpbGRyZW49W2xdO3ZhciB1PW5ldyBBLkVsZW1lbnQuc3ZnO3UuYXR0cmlidXRlcy54PW5ldyBBLlByb3BlcnR5KFwieFwiLDApLHUuYXR0cmlidXRlcy55PW5ldyBBLlByb3BlcnR5KFwieVwiLDApLHUuYXR0cmlidXRlcy53aWR0aD1uZXcgQS5Qcm9wZXJ0eShcIndpZHRoXCIsby53aWR0aCksdS5hdHRyaWJ1dGVzLmhlaWdodD1uZXcgQS5Qcm9wZXJ0eShcImhlaWdodFwiLG8uaGVpZ2h0KSx1LmNoaWxkcmVuPVtoXTt2YXIgYz1wKCk7Yy53aWR0aD1vLndpZHRoLGMuaGVpZ2h0PW8uaGVpZ2h0O3ZhciBmPWMuZ2V0Q29udGV4dChcIjJkXCIpO3JldHVybiBmLmZpbGxTdHlsZT1hLHUucmVuZGVyKGYpLGYuY3JlYXRlUGF0dGVybihjLFwibm8tcmVwZWF0XCIpfXJldHVybiBhfX0sQS5FbGVtZW50LkdyYWRpZW50QmFzZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQubGluZWFyR3JhZGllbnQ9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5HcmFkaWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwieDFcIiksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJ5MVwiKSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcIngyXCIpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwieTJcIiksdGhpcy5nZXRHcmFkaWVudD1mdW5jdGlvbih0LGUpe3ZhciBpPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/ZS5nZXRCb3VuZGluZ0JveCh0KTpudWxsO3RoaXMuYXR0cmlidXRlKFwieDFcIikuaGFzVmFsdWUoKXx8dGhpcy5hdHRyaWJ1dGUoXCJ5MVwiKS5oYXNWYWx1ZSgpfHx0aGlzLmF0dHJpYnV0ZShcIngyXCIpLmhhc1ZhbHVlKCl8fHRoaXMuYXR0cmlidXRlKFwieTJcIikuaGFzVmFsdWUoKXx8KHRoaXMuYXR0cmlidXRlKFwieDFcIiwhMCkudmFsdWU9MCx0aGlzLmF0dHJpYnV0ZShcInkxXCIsITApLnZhbHVlPTAsdGhpcy5hdHRyaWJ1dGUoXCJ4MlwiLCEwKS52YWx1ZT0xLHRoaXMuYXR0cmlidXRlKFwieTJcIiwhMCkudmFsdWU9MCk7dmFyIG49XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLngoKStpLndpZHRoKCkqdGhpcy5hdHRyaWJ1dGUoXCJ4MVwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwieDFcIikudG9QaXhlbHMoXCJ4XCIpLHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLnkoKStpLmhlaWdodCgpKnRoaXMuYXR0cmlidXRlKFwieTFcIikubnVtVmFsdWUoKTp0aGlzLmF0dHJpYnV0ZShcInkxXCIpLnRvUGl4ZWxzKFwieVwiKSxhPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/aS54KCkraS53aWR0aCgpKnRoaXMuYXR0cmlidXRlKFwieDJcIikubnVtVmFsdWUoKTp0aGlzLmF0dHJpYnV0ZShcIngyXCIpLnRvUGl4ZWxzKFwieFwiKSxyPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/aS55KCkraS5oZWlnaHQoKSp0aGlzLmF0dHJpYnV0ZShcInkyXCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJ5MlwiKS50b1BpeGVscyhcInlcIik7cmV0dXJuIG49PWEmJnM9PXI/bnVsbDp0LmNyZWF0ZUxpbmVhckdyYWRpZW50KG4scyxhLHIpfX0sQS5FbGVtZW50LmxpbmVhckdyYWRpZW50LnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkdyYWRpZW50QmFzZSxBLkVsZW1lbnQucmFkaWFsR3JhZGllbnQ9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5HcmFkaWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwiY3hcIiksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJjeVwiKSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcInJcIiksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJmeFwiKSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcImZ5XCIpLHRoaXMuZ2V0R3JhZGllbnQ9ZnVuY3Rpb24odCxlKXt2YXIgaT1lLmdldEJvdW5kaW5nQm94KHQpO3RoaXMuYXR0cmlidXRlKFwiY3hcIikuaGFzVmFsdWUoKXx8KHRoaXMuYXR0cmlidXRlKFwiY3hcIiwhMCkudmFsdWU9XCI1MCVcIiksdGhpcy5hdHRyaWJ1dGUoXCJjeVwiKS5oYXNWYWx1ZSgpfHwodGhpcy5hdHRyaWJ1dGUoXCJjeVwiLCEwKS52YWx1ZT1cIjUwJVwiKSx0aGlzLmF0dHJpYnV0ZShcInJcIikuaGFzVmFsdWUoKXx8KHRoaXMuYXR0cmlidXRlKFwiclwiLCEwKS52YWx1ZT1cIjUwJVwiKTt2YXIgbj1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2kueCgpK2kud2lkdGgoKSp0aGlzLmF0dHJpYnV0ZShcImN4XCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJjeFwiKS50b1BpeGVscyhcInhcIikscz1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2kueSgpK2kuaGVpZ2h0KCkqdGhpcy5hdHRyaWJ1dGUoXCJjeVwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwiY3lcIikudG9QaXhlbHMoXCJ5XCIpLGE9bixyPXM7dGhpcy5hdHRyaWJ1dGUoXCJmeFwiKS5oYXNWYWx1ZSgpJiYoYT1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2kueCgpK2kud2lkdGgoKSp0aGlzLmF0dHJpYnV0ZShcImZ4XCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJmeFwiKS50b1BpeGVscyhcInhcIikpLHRoaXMuYXR0cmlidXRlKFwiZnlcIikuaGFzVmFsdWUoKSYmKHI9XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLnkoKStpLmhlaWdodCgpKnRoaXMuYXR0cmlidXRlKFwiZnlcIikubnVtVmFsdWUoKTp0aGlzLmF0dHJpYnV0ZShcImZ5XCIpLnRvUGl4ZWxzKFwieVwiKSk7dmFyIG89XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT8oaS53aWR0aCgpK2kuaGVpZ2h0KCkpLzIqdGhpcy5hdHRyaWJ1dGUoXCJyXCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJyXCIpLnRvUGl4ZWxzKCk7cmV0dXJuIHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoYSxyLDAsbixzLG8pfX0sQS5FbGVtZW50LnJhZGlhbEdyYWRpZW50LnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkdyYWRpZW50QmFzZSxBLkVsZW1lbnQuc3RvcD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLm9mZnNldD10aGlzLmF0dHJpYnV0ZShcIm9mZnNldFwiKS5udW1WYWx1ZSgpLHRoaXMub2Zmc2V0PDAmJih0aGlzLm9mZnNldD0wKSwxPHRoaXMub2Zmc2V0JiYodGhpcy5vZmZzZXQ9MSk7dmFyIGU9dGhpcy5zdHlsZShcInN0b3AtY29sb3JcIiwhMCk7XCJcIj09PWUudmFsdWUmJihlLnZhbHVlPVwiIzAwMFwiKSx0aGlzLnN0eWxlKFwic3RvcC1vcGFjaXR5XCIpLmhhc1ZhbHVlKCkmJihlPWUuYWRkT3BhY2l0eSh0aGlzLnN0eWxlKFwic3RvcC1vcGFjaXR5XCIpKSksdGhpcy5jb2xvcj1lLnZhbHVlfSxBLkVsZW1lbnQuc3RvcC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuQW5pbWF0ZUJhc2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksQS5BbmltYXRpb25zLnB1c2godGhpcyksdGhpcy5kdXJhdGlvbj0wLHRoaXMuYmVnaW49dGhpcy5hdHRyaWJ1dGUoXCJiZWdpblwiKS50b01pbGxpc2Vjb25kcygpLHRoaXMubWF4RHVyYXRpb249dGhpcy5iZWdpbit0aGlzLmF0dHJpYnV0ZShcImR1clwiKS50b01pbGxpc2Vjb25kcygpLHRoaXMuZ2V0UHJvcGVydHk9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmF0dHJpYnV0ZShcImF0dHJpYnV0ZVR5cGVcIikudmFsdWUsZT10aGlzLmF0dHJpYnV0ZShcImF0dHJpYnV0ZU5hbWVcIikudmFsdWU7cmV0dXJuXCJDU1NcIj09dD90aGlzLnBhcmVudC5zdHlsZShlLCEwKTp0aGlzLnBhcmVudC5hdHRyaWJ1dGUoZSwhMCl9LHRoaXMuaW5pdGlhbFZhbHVlPW51bGwsdGhpcy5pbml0aWFsVW5pdHM9XCJcIix0aGlzLnJlbW92ZWQ9ITEsdGhpcy5jYWxjVmFsdWU9ZnVuY3Rpb24oKXtyZXR1cm5cIlwifSx0aGlzLnVwZGF0ZT1mdW5jdGlvbih0KXtpZihudWxsPT10aGlzLmluaXRpYWxWYWx1ZSYmKHRoaXMuaW5pdGlhbFZhbHVlPXRoaXMuZ2V0UHJvcGVydHkoKS52YWx1ZSx0aGlzLmluaXRpYWxVbml0cz10aGlzLmdldFByb3BlcnR5KCkuZ2V0VW5pdHMoKSksdGhpcy5kdXJhdGlvbj50aGlzLm1heER1cmF0aW9uKXtpZihcImluZGVmaW5pdGVcIj09dGhpcy5hdHRyaWJ1dGUoXCJyZXBlYXRDb3VudFwiKS52YWx1ZXx8XCJpbmRlZmluaXRlXCI9PXRoaXMuYXR0cmlidXRlKFwicmVwZWF0RHVyXCIpLnZhbHVlKXRoaXMuZHVyYXRpb249MDtlbHNlIGlmKFwiZnJlZXplXCIhPXRoaXMuYXR0cmlidXRlKFwiZmlsbFwiKS52YWx1ZU9yRGVmYXVsdChcInJlbW92ZVwiKXx8dGhpcy5mcm96ZW4pe2lmKFwicmVtb3ZlXCI9PXRoaXMuYXR0cmlidXRlKFwiZmlsbFwiKS52YWx1ZU9yRGVmYXVsdChcInJlbW92ZVwiKSYmIXRoaXMucmVtb3ZlZClyZXR1cm4gdGhpcy5yZW1vdmVkPSEwLHRoaXMuZ2V0UHJvcGVydHkoKS52YWx1ZT10aGlzLnBhcmVudC5hbmltYXRpb25Gcm96ZW4/dGhpcy5wYXJlbnQuYW5pbWF0aW9uRnJvemVuVmFsdWU6dGhpcy5pbml0aWFsVmFsdWUsITB9ZWxzZSB0aGlzLmZyb3plbj0hMCx0aGlzLnBhcmVudC5hbmltYXRpb25Gcm96ZW49ITAsdGhpcy5wYXJlbnQuYW5pbWF0aW9uRnJvemVuVmFsdWU9dGhpcy5nZXRQcm9wZXJ0eSgpLnZhbHVlO3JldHVybiExfXRoaXMuZHVyYXRpb249dGhpcy5kdXJhdGlvbit0O3ZhciBlPSExO2lmKHRoaXMuYmVnaW48dGhpcy5kdXJhdGlvbil7dmFyIGk9dGhpcy5jYWxjVmFsdWUoKTt0aGlzLmF0dHJpYnV0ZShcInR5cGVcIikuaGFzVmFsdWUoKSYmKGk9dGhpcy5hdHRyaWJ1dGUoXCJ0eXBlXCIpLnZhbHVlK1wiKFwiK2krXCIpXCIpLHRoaXMuZ2V0UHJvcGVydHkoKS52YWx1ZT1pLGU9ITB9cmV0dXJuIGV9LHRoaXMuZnJvbT10aGlzLmF0dHJpYnV0ZShcImZyb21cIiksdGhpcy50bz10aGlzLmF0dHJpYnV0ZShcInRvXCIpLHRoaXMudmFsdWVzPXRoaXMuYXR0cmlidXRlKFwidmFsdWVzXCIpLHRoaXMudmFsdWVzLmhhc1ZhbHVlKCkmJih0aGlzLnZhbHVlcy52YWx1ZT10aGlzLnZhbHVlcy52YWx1ZS5zcGxpdChcIjtcIikpLHRoaXMucHJvZ3Jlc3M9ZnVuY3Rpb24oKXt2YXIgdD17cHJvZ3Jlc3M6KHRoaXMuZHVyYXRpb24tdGhpcy5iZWdpbikvKHRoaXMubWF4RHVyYXRpb24tdGhpcy5iZWdpbil9O2lmKHRoaXMudmFsdWVzLmhhc1ZhbHVlKCkpe3ZhciBlPXQucHJvZ3Jlc3MqKHRoaXMudmFsdWVzLnZhbHVlLmxlbmd0aC0xKSxpPU1hdGguZmxvb3IoZSksbj1NYXRoLmNlaWwoZSk7dC5mcm9tPW5ldyBBLlByb3BlcnR5KFwiZnJvbVwiLHBhcnNlRmxvYXQodGhpcy52YWx1ZXMudmFsdWVbaV0pKSx0LnRvPW5ldyBBLlByb3BlcnR5KFwidG9cIixwYXJzZUZsb2F0KHRoaXMudmFsdWVzLnZhbHVlW25dKSksdC5wcm9ncmVzcz0oZS1pKS8obi1pKX1lbHNlIHQuZnJvbT10aGlzLmZyb20sdC50bz10aGlzLnRvO3JldHVybiB0fX0sQS5FbGVtZW50LkFuaW1hdGVCYXNlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5hbmltYXRlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuQW5pbWF0ZUJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuY2FsY1ZhbHVlPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5wcm9ncmVzcygpO3JldHVybiB0LmZyb20ubnVtVmFsdWUoKSsodC50by5udW1WYWx1ZSgpLXQuZnJvbS5udW1WYWx1ZSgpKSp0LnByb2dyZXNzK3RoaXMuaW5pdGlhbFVuaXRzfX0sQS5FbGVtZW50LmFuaW1hdGUucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuQW5pbWF0ZUJhc2UsQS5FbGVtZW50LmFuaW1hdGVDb2xvcj1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkFuaW1hdGVCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmNhbGNWYWx1ZT1mdW5jdGlvbigpe3ZhciB0PXRoaXMucHJvZ3Jlc3MoKSxlPW5ldyBtKHQuZnJvbS52YWx1ZSksaT1uZXcgbSh0LnRvLnZhbHVlKTtpZihlLm9rJiZpLm9rKXt2YXIgbj1lLnIrKGkuci1lLnIpKnQucHJvZ3Jlc3Mscz1lLmcrKGkuZy1lLmcpKnQucHJvZ3Jlc3MsYT1lLmIrKGkuYi1lLmIpKnQucHJvZ3Jlc3M7cmV0dXJuXCJyZ2IoXCIrcGFyc2VJbnQobiwxMCkrXCIsXCIrcGFyc2VJbnQocywxMCkrXCIsXCIrcGFyc2VJbnQoYSwxMCkrXCIpXCJ9cmV0dXJuIHRoaXMuYXR0cmlidXRlKFwiZnJvbVwiKS52YWx1ZX19LEEuRWxlbWVudC5hbmltYXRlQ29sb3IucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuQW5pbWF0ZUJhc2UsQS5FbGVtZW50LmFuaW1hdGVUcmFuc2Zvcm09ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5BbmltYXRlQmFzZSx0aGlzLmJhc2UodCksdGhpcy5jYWxjVmFsdWU9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9dGhpcy5wcm9ncmVzcygpLGU9QS5Ub051bWJlckFycmF5KHQuZnJvbS52YWx1ZSksaT1BLlRvTnVtYmVyQXJyYXkodC50by52YWx1ZSksbj1cIlwiLHM9MDtzPGUubGVuZ3RoO3MrKyluKz1lW3NdKyhpW3NdLWVbc10pKnQucHJvZ3Jlc3MrXCIgXCI7cmV0dXJuIG59fSxBLkVsZW1lbnQuYW5pbWF0ZVRyYW5zZm9ybS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5hbmltYXRlLEEuRWxlbWVudC5mb250PWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuaG9yaXpBZHZYPXRoaXMuYXR0cmlidXRlKFwiaG9yaXotYWR2LXhcIikubnVtVmFsdWUoKSx0aGlzLmlzUlRMPSExLHRoaXMuaXNBcmFiaWM9ITEsdGhpcy5mb250RmFjZT1udWxsLHRoaXMubWlzc2luZ0dseXBoPW51bGwsdGhpcy5nbHlwaHM9W107Zm9yKHZhciBlPTA7ZTx0aGlzLmNoaWxkcmVuLmxlbmd0aDtlKyspe3ZhciBpPXRoaXMuY2hpbGRyZW5bZV07XCJmb250LWZhY2VcIj09aS50eXBlPyh0aGlzLmZvbnRGYWNlPWkpLnN0eWxlKFwiZm9udC1mYW1pbHlcIikuaGFzVmFsdWUoKSYmKEEuRGVmaW5pdGlvbnNbaS5zdHlsZShcImZvbnQtZmFtaWx5XCIpLnZhbHVlXT10aGlzKTpcIm1pc3NpbmctZ2x5cGhcIj09aS50eXBlP3RoaXMubWlzc2luZ0dseXBoPWk6XCJnbHlwaFwiPT1pLnR5cGUmJihcIlwiIT1pLmFyYWJpY0Zvcm0/KHRoaXMuaXNSVEw9ITAsdGhpcy5pc0FyYWJpYz0hMCx2b2lkIDA9PT10aGlzLmdseXBoc1tpLnVuaWNvZGVdJiYodGhpcy5nbHlwaHNbaS51bmljb2RlXT1bXSksdGhpcy5nbHlwaHNbaS51bmljb2RlXVtpLmFyYWJpY0Zvcm1dPWkpOnRoaXMuZ2x5cGhzW2kudW5pY29kZV09aSl9fSxBLkVsZW1lbnQuZm9udC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuZm9udGZhY2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hc2NlbnQ9dGhpcy5hdHRyaWJ1dGUoXCJhc2NlbnRcIikudmFsdWUsdGhpcy5kZXNjZW50PXRoaXMuYXR0cmlidXRlKFwiZGVzY2VudFwiKS52YWx1ZSx0aGlzLnVuaXRzUGVyRW09dGhpcy5hdHRyaWJ1dGUoXCJ1bml0cy1wZXItZW1cIikubnVtVmFsdWUoKX0sQS5FbGVtZW50LmZvbnRmYWNlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5taXNzaW5nZ2x5cGg9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5wYXRoLHRoaXMuYmFzZSh0KSx0aGlzLmhvcml6QWR2WD0wfSxBLkVsZW1lbnQubWlzc2luZ2dseXBoLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LnBhdGgsQS5FbGVtZW50LmdseXBoPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQucGF0aCx0aGlzLmJhc2UodCksdGhpcy5ob3JpekFkdlg9dGhpcy5hdHRyaWJ1dGUoXCJob3Jpei1hZHYteFwiKS5udW1WYWx1ZSgpLHRoaXMudW5pY29kZT10aGlzLmF0dHJpYnV0ZShcInVuaWNvZGVcIikudmFsdWUsdGhpcy5hcmFiaWNGb3JtPXRoaXMuYXR0cmlidXRlKFwiYXJhYmljLWZvcm1cIikudmFsdWV9LEEuRWxlbWVudC5nbHlwaC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5wYXRoLEEuRWxlbWVudC50ZXh0PWZ1bmN0aW9uKHQpe3RoaXMuY2FwdHVyZVRleHROb2Rlcz0hMCx0aGlzLmJhc2U9QS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYmFzZVNldENvbnRleHQ9dGhpcy5zZXRDb250ZXh0LHRoaXMuc2V0Q29udGV4dD1mdW5jdGlvbih0KXt0aGlzLmJhc2VTZXRDb250ZXh0KHQpO3ZhciBlPXRoaXMuc3R5bGUoXCJkb21pbmFudC1iYXNlbGluZVwiKS50b1RleHRCYXNlbGluZSgpO251bGw9PWUmJihlPXRoaXMuc3R5bGUoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIikudG9UZXh0QmFzZWxpbmUoKSksbnVsbCE9ZSYmKHQudGV4dEJhc2VsaW5lPWUpfSx0aGlzLmluaXRpYWxpemVDb29yZGluYXRlcz1mdW5jdGlvbih0KXt0aGlzLng9dGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLnRvUGl4ZWxzKFwieFwiKSx0aGlzLnk9dGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLnRvUGl4ZWxzKFwieVwiKSx0aGlzLmF0dHJpYnV0ZShcImR4XCIpLmhhc1ZhbHVlKCkmJih0aGlzLngrPXRoaXMuYXR0cmlidXRlKFwiZHhcIikudG9QaXhlbHMoXCJ4XCIpKSx0aGlzLmF0dHJpYnV0ZShcImR5XCIpLmhhc1ZhbHVlKCkmJih0aGlzLnkrPXRoaXMuYXR0cmlidXRlKFwiZHlcIikudG9QaXhlbHMoXCJ5XCIpKSx0aGlzLngrPXRoaXMuZ2V0QW5jaG9yRGVsdGEodCx0aGlzLDApfSx0aGlzLmdldEJvdW5kaW5nQm94PWZ1bmN0aW9uKHQpe3RoaXMuaW5pdGlhbGl6ZUNvb3JkaW5hdGVzKHQpO2Zvcih2YXIgZT1udWxsLGk9MDtpPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO2krKyl7dmFyIG49dGhpcy5nZXRDaGlsZEJvdW5kaW5nQm94KHQsdGhpcyx0aGlzLGkpO251bGw9PWU/ZT1uOmUuYWRkQm91bmRpbmdCb3gobil9cmV0dXJuIGV9LHRoaXMucmVuZGVyQ2hpbGRyZW49ZnVuY3Rpb24odCl7dGhpcy5pbml0aWFsaXplQ29vcmRpbmF0ZXModCk7Zm9yKHZhciBlPTA7ZTx0aGlzLmNoaWxkcmVuLmxlbmd0aDtlKyspdGhpcy5yZW5kZXJDaGlsZCh0LHRoaXMsdGhpcyxlKX0sdGhpcy5nZXRBbmNob3JEZWx0YT1mdW5jdGlvbih0LGUsaSl7dmFyIG49dGhpcy5zdHlsZShcInRleHQtYW5jaG9yXCIpLnZhbHVlT3JEZWZhdWx0KFwic3RhcnRcIik7aWYoXCJzdGFydFwiIT1uKXtmb3IodmFyIHM9MCxhPWk7YTxlLmNoaWxkcmVuLmxlbmd0aDthKyspe3ZhciByPWUuY2hpbGRyZW5bYV07aWYoaTxhJiZyLmF0dHJpYnV0ZShcInhcIikuaGFzVmFsdWUoKSlicmVhaztzKz1yLm1lYXN1cmVUZXh0UmVjdXJzaXZlKHQpfXJldHVybi0xKihcImVuZFwiPT1uP3M6cy8yKX1yZXR1cm4gMH0sdGhpcy5hZGp1c3RDaGlsZENvb3JkaW5hdGVzPWZ1bmN0aW9uKHQsZSxpLG4pe3ZhciBzPWkuY2hpbGRyZW5bbl07cmV0dXJuIHMuYXR0cmlidXRlKFwieFwiKS5oYXNWYWx1ZSgpPyhzLng9cy5hdHRyaWJ1dGUoXCJ4XCIpLnRvUGl4ZWxzKFwieFwiKStlLmdldEFuY2hvckRlbHRhKHQsaSxuKSxzLmF0dHJpYnV0ZShcImR4XCIpLmhhc1ZhbHVlKCkmJihzLngrPXMuYXR0cmlidXRlKFwiZHhcIikudG9QaXhlbHMoXCJ4XCIpKSk6KHMuYXR0cmlidXRlKFwiZHhcIikuaGFzVmFsdWUoKSYmKGUueCs9cy5hdHRyaWJ1dGUoXCJkeFwiKS50b1BpeGVscyhcInhcIikpLHMueD1lLngpLGUueD1zLngrcy5tZWFzdXJlVGV4dCh0KSxzLmF0dHJpYnV0ZShcInlcIikuaGFzVmFsdWUoKT8ocy55PXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIikscy5hdHRyaWJ1dGUoXCJkeVwiKS5oYXNWYWx1ZSgpJiYocy55Kz1zLmF0dHJpYnV0ZShcImR5XCIpLnRvUGl4ZWxzKFwieVwiKSkpOihzLmF0dHJpYnV0ZShcImR5XCIpLmhhc1ZhbHVlKCkmJihlLnkrPXMuYXR0cmlidXRlKFwiZHlcIikudG9QaXhlbHMoXCJ5XCIpKSxzLnk9ZS55KSxlLnk9cy55LHN9LHRoaXMuZ2V0Q2hpbGRCb3VuZGluZ0JveD1mdW5jdGlvbih0LGUsaSxuKXt2YXIgcz10aGlzLmFkanVzdENoaWxkQ29vcmRpbmF0ZXModCxlLGksbiksYT1zLmdldEJvdW5kaW5nQm94KHQpO2ZvcihuPTA7bjxzLmNoaWxkcmVuLmxlbmd0aDtuKyspe3ZhciByPWUuZ2V0Q2hpbGRCb3VuZGluZ0JveCh0LGUscyxuKTthLmFkZEJvdW5kaW5nQm94KHIpfXJldHVybiBhfSx0aGlzLnJlbmRlckNoaWxkPWZ1bmN0aW9uKHQsZSxpLG4pe3ZhciBzPXRoaXMuYWRqdXN0Q2hpbGRDb29yZGluYXRlcyh0LGUsaSxuKTtmb3Iocy5yZW5kZXIodCksbj0wO248cy5jaGlsZHJlbi5sZW5ndGg7bisrKWUucmVuZGVyQ2hpbGQodCxlLHMsbil9fSxBLkVsZW1lbnQudGV4dC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLEEuRWxlbWVudC5UZXh0RWxlbWVudEJhc2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmdldEdseXBoPWZ1bmN0aW9uKHQsZSxpKXt2YXIgbj1lW2ldLHM9bnVsbDtpZih0LmlzQXJhYmljKXt2YXIgYT1cImlzb2xhdGVkXCI7KDA9PWl8fFwiIFwiPT1lW2ktMV0pJiZpPGUubGVuZ3RoLTImJlwiIFwiIT1lW2krMV0mJihhPVwidGVybWluYWxcIiksMDxpJiZcIiBcIiE9ZVtpLTFdJiZpPGUubGVuZ3RoLTImJlwiIFwiIT1lW2krMV0mJihhPVwibWVkaWFsXCIpLDA8aSYmXCIgXCIhPWVbaS0xXSYmKGk9PWUubGVuZ3RoLTF8fFwiIFwiPT1lW2krMV0pJiYoYT1cImluaXRpYWxcIiksdm9pZCAwIT09dC5nbHlwaHNbbl0mJm51bGw9PShzPXQuZ2x5cGhzW25dW2FdKSYmXCJnbHlwaFwiPT10LmdseXBoc1tuXS50eXBlJiYocz10LmdseXBoc1tuXSl9ZWxzZSBzPXQuZ2x5cGhzW25dO3JldHVybiBudWxsPT1zJiYocz10Lm1pc3NpbmdHbHlwaCksc30sdGhpcy5yZW5kZXJDaGlsZHJlbj1mdW5jdGlvbih0KXt2YXIgZT10aGlzLnBhcmVudC5zdHlsZShcImZvbnQtZmFtaWx5XCIpLmdldERlZmluaXRpb24oKTtpZihudWxsPT1lKVwic3Ryb2tlXCI9PXQucGFpbnRPcmRlcj8oXCJcIiE9dC5zdHJva2VTdHlsZSYmdC5zdHJva2VUZXh0KEEuY29tcHJlc3NTcGFjZXModGhpcy5nZXRUZXh0KCkpLHRoaXMueCx0aGlzLnkpLFwiXCIhPXQuZmlsbFN0eWxlJiZ0LmZpbGxUZXh0KEEuY29tcHJlc3NTcGFjZXModGhpcy5nZXRUZXh0KCkpLHRoaXMueCx0aGlzLnkpKTooXCJcIiE9dC5maWxsU3R5bGUmJnQuZmlsbFRleHQoQS5jb21wcmVzc1NwYWNlcyh0aGlzLmdldFRleHQoKSksdGhpcy54LHRoaXMueSksXCJcIiE9dC5zdHJva2VTdHlsZSYmdC5zdHJva2VUZXh0KEEuY29tcHJlc3NTcGFjZXModGhpcy5nZXRUZXh0KCkpLHRoaXMueCx0aGlzLnkpKTtlbHNle3ZhciBpPXRoaXMucGFyZW50LnN0eWxlKFwiZm9udC1zaXplXCIpLm51bVZhbHVlT3JEZWZhdWx0KEEuRm9udC5QYXJzZShBLmN0eC5mb250KS5mb250U2l6ZSksbj10aGlzLnBhcmVudC5zdHlsZShcImZvbnQtc3R5bGVcIikudmFsdWVPckRlZmF1bHQoQS5Gb250LlBhcnNlKEEuY3R4LmZvbnQpLmZvbnRTdHlsZSkscz10aGlzLmdldFRleHQoKTtlLmlzUlRMJiYocz1zLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpKTtmb3IodmFyIGE9QS5Ub051bWJlckFycmF5KHRoaXMucGFyZW50LmF0dHJpYnV0ZShcImR4XCIpLnZhbHVlKSxyPTA7cjxzLmxlbmd0aDtyKyspe3ZhciBvPXRoaXMuZ2V0R2x5cGgoZSxzLHIpLGw9aS9lLmZvbnRGYWNlLnVuaXRzUGVyRW07dC50cmFuc2xhdGUodGhpcy54LHRoaXMueSksdC5zY2FsZShsLC1sKTt2YXIgaD10LmxpbmVXaWR0aDt0LmxpbmVXaWR0aD10LmxpbmVXaWR0aCplLmZvbnRGYWNlLnVuaXRzUGVyRW0vaSxcIml0YWxpY1wiPT1uJiZ0LnRyYW5zZm9ybSgxLDAsLjQsMSwwLDApLG8ucmVuZGVyKHQpLFwiaXRhbGljXCI9PW4mJnQudHJhbnNmb3JtKDEsMCwtLjQsMSwwLDApLHQubGluZVdpZHRoPWgsdC5zY2FsZSgxL2wsLTEvbCksdC50cmFuc2xhdGUoLXRoaXMueCwtdGhpcy55KSx0aGlzLngrPWkqKG8uaG9yaXpBZHZYfHxlLmhvcml6QWR2WCkvZS5mb250RmFjZS51bml0c1BlckVtLHZvaWQgMD09PWFbcl18fGlzTmFOKGFbcl0pfHwodGhpcy54Kz1hW3JdKX19fSx0aGlzLmdldFRleHQ9ZnVuY3Rpb24oKXt9LHRoaXMubWVhc3VyZVRleHRSZWN1cnNpdmU9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXRoaXMubWVhc3VyZVRleHQodCksaT0wO2k8dGhpcy5jaGlsZHJlbi5sZW5ndGg7aSsrKWUrPXRoaXMuY2hpbGRyZW5baV0ubWVhc3VyZVRleHRSZWN1cnNpdmUodCk7cmV0dXJuIGV9LHRoaXMubWVhc3VyZVRleHQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5wYXJlbnQuc3R5bGUoXCJmb250LWZhbWlseVwiKS5nZXREZWZpbml0aW9uKCk7aWYobnVsbCE9ZSl7dmFyIGk9dGhpcy5wYXJlbnQuc3R5bGUoXCJmb250LXNpemVcIikubnVtVmFsdWVPckRlZmF1bHQoQS5Gb250LlBhcnNlKEEuY3R4LmZvbnQpLmZvbnRTaXplKSxuPTAscz10aGlzLmdldFRleHQoKTtlLmlzUlRMJiYocz1zLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpKTtmb3IodmFyIGE9QS5Ub051bWJlckFycmF5KHRoaXMucGFyZW50LmF0dHJpYnV0ZShcImR4XCIpLnZhbHVlKSxyPTA7cjxzLmxlbmd0aDtyKyspbis9KHRoaXMuZ2V0R2x5cGgoZSxzLHIpLmhvcml6QWR2WHx8ZS5ob3JpekFkdlgpKmkvZS5mb250RmFjZS51bml0c1BlckVtLHZvaWQgMD09PWFbcl18fGlzTmFOKGFbcl0pfHwobis9YVtyXSk7cmV0dXJuIG59dmFyIG89QS5jb21wcmVzc1NwYWNlcyh0aGlzLmdldFRleHQoKSk7aWYoIXQubWVhc3VyZVRleHQpcmV0dXJuIDEwKm8ubGVuZ3RoO3Quc2F2ZSgpLHRoaXMuc2V0Q29udGV4dCh0LCEwKTt2YXIgbD10Lm1lYXN1cmVUZXh0KG8pLndpZHRoO3JldHVybiB0LnJlc3RvcmUoKSxsfSx0aGlzLmdldEJvdW5kaW5nQm94PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMucGFyZW50LnN0eWxlKFwiZm9udC1zaXplXCIpLm51bVZhbHVlT3JEZWZhdWx0KEEuRm9udC5QYXJzZShBLmN0eC5mb250KS5mb250U2l6ZSk7cmV0dXJuIG5ldyBBLkJvdW5kaW5nQm94KHRoaXMueCx0aGlzLnktZSx0aGlzLngrdGhpcy5tZWFzdXJlVGV4dCh0KSx0aGlzLnkpfX0sQS5FbGVtZW50LlRleHRFbGVtZW50QmFzZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLEEuRWxlbWVudC50c3Bhbj1mdW5jdGlvbih0KXt0aGlzLmNhcHR1cmVUZXh0Tm9kZXM9ITAsdGhpcy5iYXNlPUEuRWxlbWVudC5UZXh0RWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMudGV4dD1BLmNvbXByZXNzU3BhY2VzKHQudmFsdWV8fHQudGV4dHx8dC50ZXh0Q29udGVudHx8XCJcIiksdGhpcy5nZXRUZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIDA8dGhpcy5jaGlsZHJlbi5sZW5ndGg/XCJcIjp0aGlzLnRleHR9fSxBLkVsZW1lbnQudHNwYW4ucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlLEEuRWxlbWVudC50cmVmPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmdldFRleHQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmdldEhyZWZBdHRyaWJ1dGUoKS5nZXREZWZpbml0aW9uKCk7aWYobnVsbCE9dClyZXR1cm4gdC5jaGlsZHJlblswXS5nZXRUZXh0KCl9fSxBLkVsZW1lbnQudHJlZi5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5UZXh0RWxlbWVudEJhc2UsQS5FbGVtZW50LmE9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5UZXh0RWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuaGFzVGV4dD0wPHQuY2hpbGROb2Rlcy5sZW5ndGg7Zm9yKHZhciBlPTA7ZTx0LmNoaWxkTm9kZXMubGVuZ3RoO2UrKykzIT10LmNoaWxkTm9kZXNbZV0ubm9kZVR5cGUmJih0aGlzLmhhc1RleHQ9ITEpO3RoaXMudGV4dD10aGlzLmhhc1RleHQ/dC5jaGlsZE5vZGVzWzBdLnZhbHVlfHx0LmNoaWxkTm9kZXNbMF0uZGF0YTpcIlwiLHRoaXMuZ2V0VGV4dD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRleHR9LHRoaXMuYmFzZVJlbmRlckNoaWxkcmVuPXRoaXMucmVuZGVyQ2hpbGRyZW4sdGhpcy5yZW5kZXJDaGlsZHJlbj1mdW5jdGlvbih0KXtpZih0aGlzLmhhc1RleHQpe3RoaXMuYmFzZVJlbmRlckNoaWxkcmVuKHQpO3ZhciBlPW5ldyBBLlByb3BlcnR5KFwiZm9udFNpemVcIixBLkZvbnQuUGFyc2UoQS5jdHguZm9udCkuZm9udFNpemUpO0EuTW91c2UuY2hlY2tCb3VuZGluZ0JveCh0aGlzLG5ldyBBLkJvdW5kaW5nQm94KHRoaXMueCx0aGlzLnktZS50b1BpeGVscyhcInlcIiksdGhpcy54K3RoaXMubWVhc3VyZVRleHQodCksdGhpcy55KSl9ZWxzZSBpZigwPHRoaXMuY2hpbGRyZW4ubGVuZ3RoKXt2YXIgaT1uZXcgQS5FbGVtZW50Lmc7aS5jaGlsZHJlbj10aGlzLmNoaWxkcmVuLGkucGFyZW50PXRoaXMsaS5yZW5kZXIodCl9fSx0aGlzLm9uY2xpY2s9ZnVuY3Rpb24oKXt1Lm9wZW4odGhpcy5nZXRIcmVmQXR0cmlidXRlKCkudmFsdWUpfSx0aGlzLm9ubW91c2Vtb3ZlPWZ1bmN0aW9uKCl7QS5jdHguY2FudmFzLnN0eWxlLmN1cnNvcj1cInBvaW50ZXJcIn19LEEuRWxlbWVudC5hLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlRleHRFbGVtZW50QmFzZSxBLkVsZW1lbnQuaW1hZ2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KTt2YXIgZT10aGlzLmdldEhyZWZBdHRyaWJ1dGUoKS52YWx1ZTtpZihcIlwiIT1lKXt2YXIgYT1lLm1hdGNoKC9cXC5zdmckLyk7aWYoQS5JbWFnZXMucHVzaCh0aGlzKSx0aGlzLmxvYWRlZD0hMSxhKXRoaXMuaW1nPUEuYWpheChlKSx0aGlzLmxvYWRlZD0hMDtlbHNle3RoaXMuaW1nPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksMT09QS5vcHRzLnVzZUNPUlMmJih0aGlzLmltZy5jcm9zc09yaWdpbj1cIkFub255bW91c1wiKTt2YXIgcj10aGlzO3RoaXMuaW1nLm9ubG9hZD1mdW5jdGlvbigpe3IubG9hZGVkPSEwfSx0aGlzLmltZy5vbmVycm9yPWZ1bmN0aW9uKCl7QS5sb2coJ0VSUk9SOiBpbWFnZSBcIicrZSsnXCIgbm90IGZvdW5kJyksci5sb2FkZWQ9ITB9LHRoaXMuaW1nLnNyYz1lfXRoaXMucmVuZGVyQ2hpbGRyZW49ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLnRvUGl4ZWxzKFwieFwiKSxpPXRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIiksbj10aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKSxzPXRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLnRvUGl4ZWxzKFwieVwiKTswIT1uJiYwIT1zJiYodC5zYXZlKCksYT90LmRyYXdTdmcodGhpcy5pbWcsZSxpLG4scyk6KHQudHJhbnNsYXRlKGUsaSksQS5Bc3BlY3RSYXRpbyh0LHRoaXMuYXR0cmlidXRlKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiKS52YWx1ZSxuLHRoaXMuaW1nLndpZHRoLHMsdGhpcy5pbWcuaGVpZ2h0LDAsMCksci5sb2FkZWQmJih2b2lkIDA9PT10aGlzLmltZy5jb21wbGV0ZXx8dGhpcy5pbWcuY29tcGxldGUpJiZ0LmRyYXdJbWFnZSh0aGlzLmltZywwLDApKSx0LnJlc3RvcmUoKSl9LHRoaXMuZ2V0Qm91bmRpbmdCb3g9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmF0dHJpYnV0ZShcInhcIikudG9QaXhlbHMoXCJ4XCIpLGU9dGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLnRvUGl4ZWxzKFwieVwiKSxpPXRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIpO3JldHVybiBuZXcgQS5Cb3VuZGluZ0JveCh0LGUsdCtpLGUrbil9fX0sQS5FbGVtZW50LmltYWdlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsQS5FbGVtZW50Lmc9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmdldEJvdW5kaW5nQm94PWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1uZXcgQS5Cb3VuZGluZ0JveCxpPTA7aTx0aGlzLmNoaWxkcmVuLmxlbmd0aDtpKyspZS5hZGRCb3VuZGluZ0JveCh0aGlzLmNoaWxkcmVuW2ldLmdldEJvdW5kaW5nQm94KHQpKTtyZXR1cm4gZX19LEEuRWxlbWVudC5nLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsQS5FbGVtZW50LnN5bWJvbD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMucmVuZGVyPWZ1bmN0aW9uKHQpe319LEEuRWxlbWVudC5zeW1ib2wucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxBLkVsZW1lbnQuc3R5bGU9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCk7Zm9yKHZhciBlPVwiXCIsaT0wO2k8dC5jaGlsZE5vZGVzLmxlbmd0aDtpKyspZSs9dC5jaGlsZE5vZGVzW2ldLmRhdGE7ZT1lLnJlcGxhY2UoLyhcXC9cXCooW14qXXxbXFxyXFxuXXwoXFwqKyhbXipcXC9dfFtcXHJcXG5dKSkpKlxcKitcXC8pfCheW1xcc10qXFwvXFwvLiopL2dtLFwiXCIpO3ZhciBuPShlPUEuY29tcHJlc3NTcGFjZXMoZSkpLnNwbGl0KFwifVwiKTtmb3IoaT0wO2k8bi5sZW5ndGg7aSsrKWlmKFwiXCIhPUEudHJpbShuW2ldKSlmb3IodmFyIHM9bltpXS5zcGxpdChcIntcIiksYT1zWzBdLnNwbGl0KFwiLFwiKSxyPXNbMV0uc3BsaXQoXCI7XCIpLG89MDtvPGEubGVuZ3RoO28rKyl7dmFyIGw9QS50cmltKGFbb10pO2lmKFwiXCIhPWwpe2Zvcih2YXIgaD1BLlN0eWxlc1tsXXx8e30sdT0wO3U8ci5sZW5ndGg7dSsrKXt2YXIgYz1yW3VdLmluZGV4T2YoXCI6XCIpLGY9clt1XS5zdWJzdHIoMCxjKSxtPXJbdV0uc3Vic3RyKGMrMSxyW3VdLmxlbmd0aC1jKTtudWxsIT1mJiZudWxsIT1tJiYoaFtBLnRyaW0oZildPW5ldyBBLlByb3BlcnR5KEEudHJpbShmKSxBLnRyaW0obSkpKX1pZihBLlN0eWxlc1tsXT1oLEEuU3R5bGVzU3BlY2lmaWNpdHlbbF09dyhsKSxcIkBmb250LWZhY2VcIj09bClmb3IodmFyIHA9aFtcImZvbnQtZmFtaWx5XCJdLnZhbHVlLnJlcGxhY2UoL1wiL2csXCJcIiksZD1oLnNyYy52YWx1ZS5zcGxpdChcIixcIikseT0wO3k8ZC5sZW5ndGg7eSsrKWlmKDA8ZFt5XS5pbmRleE9mKCdmb3JtYXQoXCJzdmdcIiknKSlmb3IodmFyIHY9ZFt5XS5pbmRleE9mKFwidXJsXCIpLGc9ZFt5XS5pbmRleE9mKFwiKVwiLHYpLHg9ZFt5XS5zdWJzdHIodis1LGctdi02KSxiPUEucGFyc2VYbWwoQS5hamF4KHgpKS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImZvbnRcIiksUD0wO1A8Yi5sZW5ndGg7UCsrKXt2YXIgRT1BLkNyZWF0ZUVsZW1lbnQoYltQXSk7QS5EZWZpbml0aW9uc1twXT1FfX19fSxBLkVsZW1lbnQuc3R5bGUucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LnVzZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYmFzZVNldENvbnRleHQ9dGhpcy5zZXRDb250ZXh0LHRoaXMuc2V0Q29udGV4dD1mdW5jdGlvbih0KXt0aGlzLmJhc2VTZXRDb250ZXh0KHQpLHRoaXMuYXR0cmlidXRlKFwieFwiKS5oYXNWYWx1ZSgpJiZ0LnRyYW5zbGF0ZSh0aGlzLmF0dHJpYnV0ZShcInhcIikudG9QaXhlbHMoXCJ4XCIpLDApLHRoaXMuYXR0cmlidXRlKFwieVwiKS5oYXNWYWx1ZSgpJiZ0LnRyYW5zbGF0ZSgwLHRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIikpfTt2YXIgbj10aGlzLmdldEhyZWZBdHRyaWJ1dGUoKS5nZXREZWZpbml0aW9uKCk7dGhpcy5wYXRoPWZ1bmN0aW9uKHQpe251bGwhPW4mJm4ucGF0aCh0KX0sdGhpcy5lbGVtZW50VHJhbnNmb3JtPWZ1bmN0aW9uKCl7aWYobnVsbCE9biYmbi5zdHlsZShcInRyYW5zZm9ybVwiLCExLCEwKS5oYXNWYWx1ZSgpKXJldHVybiBuZXcgQS5UcmFuc2Zvcm0obi5zdHlsZShcInRyYW5zZm9ybVwiLCExLCEwKS52YWx1ZSl9LHRoaXMuZ2V0Qm91bmRpbmdCb3g9ZnVuY3Rpb24odCl7aWYobnVsbCE9bilyZXR1cm4gbi5nZXRCb3VuZGluZ0JveCh0KX0sdGhpcy5yZW5kZXJDaGlsZHJlbj1mdW5jdGlvbih0KXtpZihudWxsIT1uKXt2YXIgZT1uO1wic3ltYm9sXCI9PW4udHlwZSYmKChlPW5ldyBBLkVsZW1lbnQuc3ZnKS50eXBlPVwic3ZnXCIsZS5hdHRyaWJ1dGVzLnZpZXdCb3g9bmV3IEEuUHJvcGVydHkoXCJ2aWV3Qm94XCIsbi5hdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpLnZhbHVlKSxlLmF0dHJpYnV0ZXMucHJlc2VydmVBc3BlY3RSYXRpbz1uZXcgQS5Qcm9wZXJ0eShcInByZXNlcnZlQXNwZWN0UmF0aW9cIixuLmF0dHJpYnV0ZShcInByZXNlcnZlQXNwZWN0UmF0aW9cIikudmFsdWUpLGUuYXR0cmlidXRlcy5vdmVyZmxvdz1uZXcgQS5Qcm9wZXJ0eShcIm92ZXJmbG93XCIsbi5hdHRyaWJ1dGUoXCJvdmVyZmxvd1wiKS52YWx1ZSksZS5jaGlsZHJlbj1uLmNoaWxkcmVuKSxcInN2Z1wiPT1lLnR5cGUmJih0aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLmhhc1ZhbHVlKCkmJihlLmF0dHJpYnV0ZXMud2lkdGg9bmV3IEEuUHJvcGVydHkoXCJ3aWR0aFwiLHRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikudmFsdWUpKSx0aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS5oYXNWYWx1ZSgpJiYoZS5hdHRyaWJ1dGVzLmhlaWdodD1uZXcgQS5Qcm9wZXJ0eShcImhlaWdodFwiLHRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLnZhbHVlKSkpO3ZhciBpPWUucGFyZW50O2UucGFyZW50PW51bGwsZS5yZW5kZXIodCksZS5wYXJlbnQ9aX19fSxBLkVsZW1lbnQudXNlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsQS5FbGVtZW50Lm1hc2s9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hcHBseT1mdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksbj10aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpLHM9dGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIiksYT10aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIik7aWYoMD09cyYmMD09YSl7Zm9yKHZhciByPW5ldyBBLkJvdW5kaW5nQm94LG89MDtvPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO28rKylyLmFkZEJvdW5kaW5nQm94KHRoaXMuY2hpbGRyZW5bb10uZ2V0Qm91bmRpbmdCb3godCkpO2k9TWF0aC5mbG9vcihyLngxKSxuPU1hdGguZmxvb3Ioci55MSkscz1NYXRoLmZsb29yKHIud2lkdGgoKSksYT1NYXRoLmZsb29yKHIuaGVpZ2h0KCkpfXZhciBsPWUuYXR0cmlidXRlKFwibWFza1wiKS52YWx1ZTtlLmF0dHJpYnV0ZShcIm1hc2tcIikudmFsdWU9XCJcIjt2YXIgaD1wKCk7aC53aWR0aD1pK3MsaC5oZWlnaHQ9bithO3ZhciB1PWguZ2V0Q29udGV4dChcIjJkXCIpO3RoaXMucmVuZGVyQ2hpbGRyZW4odSk7dmFyIGM9cCgpO2Mud2lkdGg9aStzLGMuaGVpZ2h0PW4rYTt2YXIgZj1jLmdldENvbnRleHQoXCIyZFwiKTtlLnJlbmRlcihmKSxmLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbj1cImRlc3RpbmF0aW9uLWluXCIsZi5maWxsU3R5bGU9dS5jcmVhdGVQYXR0ZXJuKGgsXCJuby1yZXBlYXRcIiksZi5maWxsUmVjdCgwLDAsaStzLG4rYSksdC5maWxsU3R5bGU9Zi5jcmVhdGVQYXR0ZXJuKGMsXCJuby1yZXBlYXRcIiksdC5maWxsUmVjdCgwLDAsaStzLG4rYSksZS5hdHRyaWJ1dGUoXCJtYXNrXCIpLnZhbHVlPWx9LHRoaXMucmVuZGVyPWZ1bmN0aW9uKHQpe319LEEuRWxlbWVudC5tYXNrLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5jbGlwUGF0aD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQpe3ZhciBlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsaT10LmJlZ2luUGF0aCxuPXQuY2xvc2VQYXRoO2UmJihDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmJlZ2luUGF0aD1mdW5jdGlvbigpe30sQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5jbG9zZVBhdGg9ZnVuY3Rpb24oKXt9KSxpLmNhbGwodCk7Zm9yKHZhciBzPTA7czx0aGlzLmNoaWxkcmVuLmxlbmd0aDtzKyspe3ZhciBhPXRoaXMuY2hpbGRyZW5bc107aWYodm9pZCAwIT09YS5wYXRoKXt2YXIgcj12b2lkIDAhPT1hLmVsZW1lbnRUcmFuc2Zvcm0mJmEuZWxlbWVudFRyYW5zZm9ybSgpOyFyJiZhLnN0eWxlKFwidHJhbnNmb3JtXCIsITEsITApLmhhc1ZhbHVlKCkmJihyPW5ldyBBLlRyYW5zZm9ybShhLnN0eWxlKFwidHJhbnNmb3JtXCIsITEsITApLnZhbHVlKSksciYmci5hcHBseSh0KSxhLnBhdGgodCksZSYmKENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuY2xvc2VQYXRoPW4pLHImJnIudW5hcHBseSh0KX19bi5jYWxsKHQpLHQuY2xpcCgpLGUmJihDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmJlZ2luUGF0aD1pLENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuY2xvc2VQYXRoPW4pfSx0aGlzLnJlbmRlcj1mdW5jdGlvbih0KXt9fSxBLkVsZW1lbnQuY2xpcFBhdGgucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmZpbHRlcj1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQsZSl7dmFyIGk9ZS5nZXRCb3VuZGluZ0JveCh0KSxuPU1hdGguZmxvb3IoaS54MSkscz1NYXRoLmZsb29yKGkueTEpLGE9TWF0aC5mbG9vcihpLndpZHRoKCkpLHI9TWF0aC5mbG9vcihpLmhlaWdodCgpKSxvPWUuc3R5bGUoXCJmaWx0ZXJcIikudmFsdWU7ZS5zdHlsZShcImZpbHRlclwiKS52YWx1ZT1cIlwiO2Zvcih2YXIgbD0wLGg9MCx1PTA7dTx0aGlzLmNoaWxkcmVuLmxlbmd0aDt1Kyspe3ZhciBjPXRoaXMuY2hpbGRyZW5bdV0uZXh0cmFGaWx0ZXJEaXN0YW5jZXx8MDtsPU1hdGgubWF4KGwsYyksaD1NYXRoLm1heChoLGMpfXZhciBmPXAoKTtmLndpZHRoPWErMipsLGYuaGVpZ2h0PXIrMipoO3ZhciBtPWYuZ2V0Q29udGV4dChcIjJkXCIpO2ZvcihtLnRyYW5zbGF0ZSgtbitsLC1zK2gpLGUucmVuZGVyKG0pLHU9MDt1PHRoaXMuY2hpbGRyZW4ubGVuZ3RoO3UrKylcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLmNoaWxkcmVuW3VdLmFwcGx5JiZ0aGlzLmNoaWxkcmVuW3VdLmFwcGx5KG0sMCwwLGErMipsLHIrMipoKTt0LmRyYXdJbWFnZShmLDAsMCxhKzIqbCxyKzIqaCxuLWwscy1oLGErMipsLHIrMipoKSxlLnN0eWxlKFwiZmlsdGVyXCIsITApLnZhbHVlPW99LHRoaXMucmVuZGVyPWZ1bmN0aW9uKHQpe319LEEuRWxlbWVudC5maWx0ZXIucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmZlTW9ycGhvbG9neT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQsZSxpLG4scyl7fX0sQS5FbGVtZW50LmZlTW9ycGhvbG9neS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuZmVDb21wb3NpdGU9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hcHBseT1mdW5jdGlvbih0LGUsaSxuLHMpe319LEEuRWxlbWVudC5mZUNvbXBvc2l0ZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuZmVDb2xvck1hdHJpeD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KTt2YXIgbj1BLlRvTnVtYmVyQXJyYXkodGhpcy5hdHRyaWJ1dGUoXCJ2YWx1ZXNcIikudmFsdWUpO3N3aXRjaCh0aGlzLmF0dHJpYnV0ZShcInR5cGVcIikudmFsdWVPckRlZmF1bHQoXCJtYXRyaXhcIikpe2Nhc2VcInNhdHVyYXRlXCI6dmFyIGU9blswXTtuPVsuMjEzKy43ODcqZSwuNzE1LS43MTUqZSwuMDcyLS4wNzIqZSwwLDAsLjIxMy0uMjEzKmUsLjcxNSsuMjg1KmUsLjA3Mi0uMDcyKmUsMCwwLC4yMTMtLjIxMyplLC43MTUtLjcxNSplLC4wNzIrLjkyOCplLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxXTticmVhaztjYXNlXCJodWVSb3RhdGVcIjp2YXIgcz1uWzBdKk1hdGguUEkvMTgwLGk9ZnVuY3Rpb24odCxlLGkpe3JldHVybiB0K01hdGguY29zKHMpKmUrTWF0aC5zaW4ocykqaX07bj1baSguMjEzLC43ODcsLS4yMTMpLGkoLjcxNSwtLjcxNSwtLjcxNSksaSguMDcyLC0uMDcyLC45MjgpLDAsMCxpKC4yMTMsLS4yMTMsLjE0MyksaSguNzE1LC4yODUsLjE0KSxpKC4wNzIsLS4wNzIsLS4yODMpLDAsMCxpKC4yMTMsLS4yMTMsLS43ODcpLGkoLjcxNSwtLjcxNSwuNzE1KSxpKC4wNzIsLjkyOCwuMDcyKSwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMV07YnJlYWs7Y2FzZVwibHVtaW5hbmNlVG9BbHBoYVwiOm49WzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLC4yMTI1LC43MTU0LC4wNzIxLDAsMCwwLDAsMCwwLDFdfWZ1bmN0aW9uIHUodCxlLGksbixzLGEpe3JldHVybiB0W2kqbio0KzQqZSthXX1mdW5jdGlvbiBjKHQsZSxpLG4scyxhLHIpe3RbaSpuKjQrNCplK2FdPXJ9ZnVuY3Rpb24gZih0LGUpe3ZhciBpPW5bdF07cmV0dXJuIGkqKGk8MD9lLTI1NTplKX10aGlzLmFwcGx5PWZ1bmN0aW9uKHQsZSxpLG4scyl7dmFyIGE9dC5nZXRJbWFnZURhdGEoMCwwLG4scyk7Zm9yKGk9MDtpPHM7aSsrKWZvcihlPTA7ZTxuO2UrKyl7dmFyIHI9dShhLmRhdGEsZSxpLG4sMCwwKSxvPXUoYS5kYXRhLGUsaSxuLDAsMSksbD11KGEuZGF0YSxlLGksbiwwLDIpLGg9dShhLmRhdGEsZSxpLG4sMCwzKTtjKGEuZGF0YSxlLGksbiwwLDAsZigwLHIpK2YoMSxvKStmKDIsbCkrZigzLGgpK2YoNCwxKSksYyhhLmRhdGEsZSxpLG4sMCwxLGYoNSxyKStmKDYsbykrZig3LGwpK2YoOCxoKStmKDksMSkpLGMoYS5kYXRhLGUsaSxuLDAsMixmKDEwLHIpK2YoMTEsbykrZigxMixsKStmKDEzLGgpK2YoMTQsMSkpLGMoYS5kYXRhLGUsaSxuLDAsMyxmKDE1LHIpK2YoMTYsbykrZigxNyxsKStmKDE4LGgpK2YoMTksMSkpfXQuY2xlYXJSZWN0KDAsMCxuLHMpLHQucHV0SW1hZ2VEYXRhKGEsMCwwKX19LEEuRWxlbWVudC5mZUNvbG9yTWF0cml4LnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5mZUdhdXNzaWFuQmx1cj1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmJsdXJSYWRpdXM9TWF0aC5mbG9vcih0aGlzLmF0dHJpYnV0ZShcInN0ZERldmlhdGlvblwiKS5udW1WYWx1ZSgpKSx0aGlzLmV4dHJhRmlsdGVyRGlzdGFuY2U9dGhpcy5ibHVyUmFkaXVzLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCxlLGksbixzKXtkJiZ2b2lkIDAhPT1kLmNhbnZhc1JHQkE/KHQuY2FudmFzLmlkPUEuVW5pcXVlSWQoKSx0LmNhbnZhcy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodC5jYW52YXMpLGQuY2FudmFzUkdCQSh0LmNhbnZhcyxlLGksbixzLHRoaXMuYmx1clJhZGl1cyksZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0LmNhbnZhcykpOkEubG9nKFwiRVJST1I6IFN0YWNrQmx1ci5qcyBtdXN0IGJlIGluY2x1ZGVkIGZvciBibHVyIHRvIHdvcmtcIil9fSxBLkVsZW1lbnQuZmVHYXVzc2lhbkJsdXIucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LnRpdGxlPWZ1bmN0aW9uKHQpe30sQS5FbGVtZW50LnRpdGxlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5kZXNjPWZ1bmN0aW9uKHQpe30sQS5FbGVtZW50LmRlc2MucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50Lk1JU1NJTkc9ZnVuY3Rpb24odCl7QS5sb2coXCJFUlJPUjogRWxlbWVudCAnXCIrdC5ub2RlTmFtZStcIicgbm90IHlldCBpbXBsZW1lbnRlZC5cIil9LEEuRWxlbWVudC5NSVNTSU5HLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuQ3JlYXRlRWxlbWVudD1mdW5jdGlvbih0KXt2YXIgZT10Lm5vZGVOYW1lLnJlcGxhY2UoL15bXjpdKzovLFwiXCIpO2U9ZS5yZXBsYWNlKC9cXC0vZyxcIlwiKTt2YXIgaT1udWxsO3JldHVybihpPXZvaWQgMCE9PUEuRWxlbWVudFtlXT9uZXcgQS5FbGVtZW50W2VdKHQpOm5ldyBBLkVsZW1lbnQuTUlTU0lORyh0KSkudHlwZT10Lm5vZGVOYW1lLGl9LEEubG9hZD1mdW5jdGlvbih0LGUpe0EubG9hZFhtbCh0LEEuYWpheChlKSl9LEEubG9hZFhtbD1mdW5jdGlvbih0LGUpe0EubG9hZFhtbERvYyh0LEEucGFyc2VYbWwoZSkpfSxBLmxvYWRYbWxEb2M9ZnVuY3Rpb24oYSxyKXtBLmluaXQoYSk7dmFyIGk9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPWEuY2FudmFzO2U7KXQueC09ZS5vZmZzZXRMZWZ0LHQueS09ZS5vZmZzZXRUb3AsZT1lLm9mZnNldFBhcmVudDtyZXR1cm4gdS5zY3JvbGxYJiYodC54Kz11LnNjcm9sbFgpLHUuc2Nyb2xsWSYmKHQueSs9dS5zY3JvbGxZKSx0fTsxIT1BLm9wdHMuaWdub3JlTW91c2UmJihhLmNhbnZhcy5vbmNsaWNrPWZ1bmN0aW9uKHQpe3ZhciBlPWkobmV3IEEuUG9pbnQobnVsbCE9dD90LmNsaWVudFg6ZXZlbnQuY2xpZW50WCxudWxsIT10P3QuY2xpZW50WTpldmVudC5jbGllbnRZKSk7QS5Nb3VzZS5vbmNsaWNrKGUueCxlLnkpfSxhLmNhbnZhcy5vbm1vdXNlbW92ZT1mdW5jdGlvbih0KXt2YXIgZT1pKG5ldyBBLlBvaW50KG51bGwhPXQ/dC5jbGllbnRYOmV2ZW50LmNsaWVudFgsbnVsbCE9dD90LmNsaWVudFk6ZXZlbnQuY2xpZW50WSkpO0EuTW91c2Uub25tb3VzZW1vdmUoZS54LGUueSl9KTt2YXIgbz1BLkNyZWF0ZUVsZW1lbnQoci5kb2N1bWVudEVsZW1lbnQpO28ucm9vdD0hMCxvLmFkZFN0eWxlc0Zyb21TdHlsZURlZmluaXRpb24oKTt2YXIgbD0hMCxuPWZ1bmN0aW9uKCl7QS5WaWV3UG9ydC5DbGVhcigpLGEuY2FudmFzLnBhcmVudE5vZGU/QS5WaWV3UG9ydC5TZXRDdXJyZW50KGEuY2FudmFzLnBhcmVudE5vZGUuY2xpZW50V2lkdGgsYS5jYW52YXMucGFyZW50Tm9kZS5jbGllbnRIZWlnaHQpOkEuVmlld1BvcnQuU2V0Q3VycmVudCg4MDAsNjAwKSwxIT1BLm9wdHMuaWdub3JlRGltZW5zaW9ucyYmKG8uc3R5bGUoXCJ3aWR0aFwiKS5oYXNWYWx1ZSgpJiYoYS5jYW52YXMud2lkdGg9by5zdHlsZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKSxhLmNhbnZhcy5zdHlsZSYmKGEuY2FudmFzLnN0eWxlLndpZHRoPWEuY2FudmFzLndpZHRoK1wicHhcIikpLG8uc3R5bGUoXCJoZWlnaHRcIikuaGFzVmFsdWUoKSYmKGEuY2FudmFzLmhlaWdodD1vLnN0eWxlKFwiaGVpZ2h0XCIpLnRvUGl4ZWxzKFwieVwiKSxhLmNhbnZhcy5zdHlsZSYmKGEuY2FudmFzLnN0eWxlLmhlaWdodD1hLmNhbnZhcy5oZWlnaHQrXCJweFwiKSkpO3ZhciB0PWEuY2FudmFzLmNsaWVudFdpZHRofHxhLmNhbnZhcy53aWR0aCxlPWEuY2FudmFzLmNsaWVudEhlaWdodHx8YS5jYW52YXMuaGVpZ2h0O2lmKDE9PUEub3B0cy5pZ25vcmVEaW1lbnNpb25zJiZvLnN0eWxlKFwid2lkdGhcIikuaGFzVmFsdWUoKSYmby5zdHlsZShcImhlaWdodFwiKS5oYXNWYWx1ZSgpJiYodD1vLnN0eWxlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIpLGU9by5zdHlsZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIikpLEEuVmlld1BvcnQuU2V0Q3VycmVudCh0LGUpLG51bGwhPUEub3B0cy5vZmZzZXRYJiYoby5hdHRyaWJ1dGUoXCJ4XCIsITApLnZhbHVlPUEub3B0cy5vZmZzZXRYKSxudWxsIT1BLm9wdHMub2Zmc2V0WSYmKG8uYXR0cmlidXRlKFwieVwiLCEwKS52YWx1ZT1BLm9wdHMub2Zmc2V0WSksbnVsbCE9QS5vcHRzLnNjYWxlV2lkdGh8fG51bGwhPUEub3B0cy5zY2FsZUhlaWdodCl7dmFyIGk9bnVsbCxuPW51bGwscz1BLlRvTnVtYmVyQXJyYXkoby5hdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpLnZhbHVlKTtudWxsIT1BLm9wdHMuc2NhbGVXaWR0aCYmKG8uYXR0cmlidXRlKFwid2lkdGhcIikuaGFzVmFsdWUoKT9pPW8uYXR0cmlidXRlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIpL0Eub3B0cy5zY2FsZVdpZHRoOmlzTmFOKHNbMl0pfHwoaT1zWzJdL0Eub3B0cy5zY2FsZVdpZHRoKSksbnVsbCE9QS5vcHRzLnNjYWxlSGVpZ2h0JiYoby5hdHRyaWJ1dGUoXCJoZWlnaHRcIikuaGFzVmFsdWUoKT9uPW8uYXR0cmlidXRlKFwiaGVpZ2h0XCIpLnRvUGl4ZWxzKFwieVwiKS9BLm9wdHMuc2NhbGVIZWlnaHQ6aXNOYU4oc1szXSl8fChuPXNbM10vQS5vcHRzLnNjYWxlSGVpZ2h0KSksbnVsbD09aSYmKGk9biksbnVsbD09biYmKG49aSksby5hdHRyaWJ1dGUoXCJ3aWR0aFwiLCEwKS52YWx1ZT1BLm9wdHMuc2NhbGVXaWR0aCxvLmF0dHJpYnV0ZShcImhlaWdodFwiLCEwKS52YWx1ZT1BLm9wdHMuc2NhbGVIZWlnaHQsby5zdHlsZShcInRyYW5zZm9ybVwiLCEwLCEwKS52YWx1ZSs9XCIgc2NhbGUoXCIrMS9pK1wiLFwiKzEvbitcIilcIn0xIT1BLm9wdHMuaWdub3JlQ2xlYXImJmEuY2xlYXJSZWN0KDAsMCx0LGUpLG8ucmVuZGVyKGEpLGwmJihsPSExLFwiZnVuY3Rpb25cIj09dHlwZW9mIEEub3B0cy5yZW5kZXJDYWxsYmFjayYmQS5vcHRzLnJlbmRlckNhbGxiYWNrKHIpKX0scz0hMDtBLkltYWdlc0xvYWRlZCgpJiYocz0hMSxuKCkpLEEuaW50ZXJ2YWxJRD1zZXRJbnRlcnZhbChmdW5jdGlvbigpe3ZhciB0PSExO2lmKHMmJkEuSW1hZ2VzTG9hZGVkKCkmJih0PSEocz0hMSkpLDEhPUEub3B0cy5pZ25vcmVNb3VzZSYmKHR8PUEuTW91c2UuaGFzRXZlbnRzKCkpLDEhPUEub3B0cy5pZ25vcmVBbmltYXRpb24pZm9yKHZhciBlPTA7ZTxBLkFuaW1hdGlvbnMubGVuZ3RoO2UrKyl0fD1BLkFuaW1hdGlvbnNbZV0udXBkYXRlKDFlMy9BLkZSQU1FUkFURSk7XCJmdW5jdGlvblwiPT10eXBlb2YgQS5vcHRzLmZvcmNlUmVkcmF3JiYxPT1BLm9wdHMuZm9yY2VSZWRyYXcoKSYmKHQ9ITApLHQmJihuKCksQS5Nb3VzZS5ydW5FdmVudHMoKSl9LDFlMy9BLkZSQU1FUkFURSl9LEEuc3RvcD1mdW5jdGlvbigpe0EuaW50ZXJ2YWxJRCYmY2xlYXJJbnRlcnZhbChBLmludGVydmFsSUQpfSxBLk1vdXNlPW5ldyBmdW5jdGlvbigpe3RoaXMuZXZlbnRzPVtdLHRoaXMuaGFzRXZlbnRzPWZ1bmN0aW9uKCl7cmV0dXJuIDAhPXRoaXMuZXZlbnRzLmxlbmd0aH0sdGhpcy5vbmNsaWNrPWZ1bmN0aW9uKHQsZSl7dGhpcy5ldmVudHMucHVzaCh7dHlwZTpcIm9uY2xpY2tcIix4OnQseTplLHJ1bjpmdW5jdGlvbih0KXt0Lm9uY2xpY2smJnQub25jbGljaygpfX0pfSx0aGlzLm9ubW91c2Vtb3ZlPWZ1bmN0aW9uKHQsZSl7dGhpcy5ldmVudHMucHVzaCh7dHlwZTpcIm9ubW91c2Vtb3ZlXCIseDp0LHk6ZSxydW46ZnVuY3Rpb24odCl7dC5vbm1vdXNlbW92ZSYmdC5vbm1vdXNlbW92ZSgpfX0pfSx0aGlzLmV2ZW50RWxlbWVudHM9W10sdGhpcy5jaGVja1BhdGg9ZnVuY3Rpb24odCxlKXtmb3IodmFyIGk9MDtpPHRoaXMuZXZlbnRzLmxlbmd0aDtpKyspe3ZhciBuPXRoaXMuZXZlbnRzW2ldO2UuaXNQb2ludEluUGF0aCYmZS5pc1BvaW50SW5QYXRoKG4ueCxuLnkpJiYodGhpcy5ldmVudEVsZW1lbnRzW2ldPXQpfX0sdGhpcy5jaGVja0JvdW5kaW5nQm94PWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBpPTA7aTx0aGlzLmV2ZW50cy5sZW5ndGg7aSsrKXt2YXIgbj10aGlzLmV2ZW50c1tpXTtlLmlzUG9pbnRJbkJveChuLngsbi55KSYmKHRoaXMuZXZlbnRFbGVtZW50c1tpXT10KX19LHRoaXMucnVuRXZlbnRzPWZ1bmN0aW9uKCl7QS5jdHguY2FudmFzLnN0eWxlLmN1cnNvcj1cIlwiO2Zvcih2YXIgdD0wO3Q8dGhpcy5ldmVudHMubGVuZ3RoO3QrKylmb3IodmFyIGU9dGhpcy5ldmVudHNbdF0saT10aGlzLmV2ZW50RWxlbWVudHNbdF07aTspZS5ydW4oaSksaT1pLnBhcmVudDt0aGlzLmV2ZW50cz1bXSx0aGlzLmV2ZW50RWxlbWVudHM9W119fSxBfShpfHx7fSk7XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHQpKSxudWxsIT10LnN2ZyYmdC5zdmcuc3RvcCgpLHQuY2hpbGROb2RlcyYmMT09dC5jaGlsZE5vZGVzLmxlbmd0aCYmXCJPQkpFQ1RcIj09dC5jaGlsZE5vZGVzWzBdLm5vZGVOYW1lfHwodC5zdmc9bik7dmFyIHM9dC5nZXRDb250ZXh0KFwiMmRcIik7dm9pZCAwIT09ZS5kb2N1bWVudEVsZW1lbnQ/bi5sb2FkWG1sRG9jKHMsZSk6XCI8XCI9PWUuc3Vic3RyKDAsMSk/bi5sb2FkWG1sKHMsZSk6bi5sb2FkKHMsZSl9ZWxzZSBmb3IodmFyIGE9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInN2Z1wiKSxyPTA7cjxhLmxlbmd0aDtyKyspe3ZhciBvPWFbcl0sbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO2wud2lkdGg9by5jbGllbnRXaWR0aCxsLmhlaWdodD1vLmNsaWVudEhlaWdodCxvLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGwsbyksby5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pO3ZhciBoPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aC5hcHBlbmRDaGlsZChvKSxjKGwsaC5pbm5lckhUTUwpfX07XCJ1bmRlZmluZWRcIj09dHlwZW9mIEVsZW1lbnR8fCh2b2lkIDAhPT1FbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzP2Y9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5tYXRjaGVzKGUpfTp2b2lkIDAhPT1FbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I/Zj1mdW5jdGlvbih0LGUpe3JldHVybiB0LndlYmtpdE1hdGNoZXNTZWxlY3RvcihlKX06dm9pZCAwIT09RWxlbWVudC5wcm90b3R5cGUubW96TWF0Y2hlc1NlbGVjdG9yP2Y9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5tb3pNYXRjaGVzU2VsZWN0b3IoZSl9OnZvaWQgMCE9PUVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yP2Y9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5tc01hdGNoZXNTZWxlY3RvcihlKX06dm9pZCAwIT09RWxlbWVudC5wcm90b3R5cGUub01hdGNoZXNTZWxlY3Rvcj9mPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQub01hdGNoZXNTZWxlY3RvcihlKX06KFwiZnVuY3Rpb25cIiE9dHlwZW9mIGpRdWVyeSYmXCJmdW5jdGlvblwiIT10eXBlb2YgWmVwdG98fChmPWZ1bmN0aW9uKHQsZSl7cmV0dXJuICQodCkuaXMoZSl9KSx2b2lkIDA9PT1mJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgU2l6emxlJiYoZj1TaXp6bGUubWF0Y2hlc1NlbGVjdG9yKSkpO3ZhciBlPS8oXFxbW15cXF1dK1xcXSkvZyxpPS8oI1teXFxzXFwrPn5cXC5cXFs6XSspL2csYT0vKFxcLlteXFxzXFwrPn5cXC5cXFs6XSspL2cscj0vKDo6W15cXHNcXCs+flxcLlxcWzpdK3w6Zmlyc3QtbGluZXw6Zmlyc3QtbGV0dGVyfDpiZWZvcmV8OmFmdGVyKS9naSxvPS8oOltcXHctXStcXChbXlxcKV0qXFwpKS9naSxsPS8oOlteXFxzXFwrPn5cXC5cXFs6XSspL2csaD0vKFteXFxzXFwrPn5cXC5cXFs6XSspL2c7ZnVuY3Rpb24gdyhuKXt2YXIgcz1bMCwwLDBdLHQ9ZnVuY3Rpb24odCxlKXt2YXIgaT1uLm1hdGNoKHQpO251bGwhPWkmJihzW2VdKz1pLmxlbmd0aCxuPW4ucmVwbGFjZSh0LFwiIFwiKSl9O3JldHVybiBuPShuPW4ucmVwbGFjZSgvOm5vdFxcKChbXlxcKV0qKVxcKS9nLFwiICAgICAkMSBcIikpLnJlcGxhY2UoL3tbXFxzXFxTXSovZ20sXCIgXCIpLHQoZSwxKSx0KGksMCksdChhLDEpLHQociwyKSx0KG8sMSksdChsLDEpLG49KG49bi5yZXBsYWNlKC9bXFwqXFxzXFwrPn5dL2csXCIgXCIpKS5yZXBsYWNlKC9bI1xcLl0vZyxcIiBcIiksdChoLDIpLHMuam9pbihcIlwiKX1cInVuZGVmaW5lZFwiIT10eXBlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEJiYoQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5kcmF3U3ZnPWZ1bmN0aW9uKHQsZSxpLG4scyxhKXt2YXIgcj17aWdub3JlTW91c2U6ITAsaWdub3JlQW5pbWF0aW9uOiEwLGlnbm9yZURpbWVuc2lvbnM6ITAsaWdub3JlQ2xlYXI6ITAsb2Zmc2V0WDplLG9mZnNldFk6aSxzY2FsZVdpZHRoOm4sc2NhbGVIZWlnaHQ6c307Zm9yKHZhciBvIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShvKSYmKHJbb109YVtvXSk7Yyh0aGlzLmNhbnZhcyx0LHIpfSksdC5leHBvcnRzPWN9KHQ9e2V4cG9ydHM6e319LHQuZXhwb3J0cyksdC5leHBvcnRzfSk7IiwiLypcblx0QmFzZWQgb24gcmdiY29sb3IuanMgYnkgU3RveWFuIFN0ZWZhbm92IDxzc3Rvb0BnbWFpbC5jb20+XG5cdGh0dHA6Ly93d3cucGhwaWVkLmNvbS9yZ2ItY29sb3ItcGFyc2VyLWluLWphdmFzY3JpcHQvXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNvbG9yX3N0cmluZykge1xuICAgIHRoaXMub2sgPSBmYWxzZTtcbiAgICB0aGlzLmFscGhhID0gMS4wO1xuXG4gICAgLy8gc3RyaXAgYW55IGxlYWRpbmcgI1xuICAgIGlmIChjb2xvcl9zdHJpbmcuY2hhckF0KDApID09ICcjJykgeyAvLyByZW1vdmUgIyBpZiBhbnlcbiAgICAgICAgY29sb3Jfc3RyaW5nID0gY29sb3Jfc3RyaW5nLnN1YnN0cigxLDYpO1xuICAgIH1cblxuICAgIGNvbG9yX3N0cmluZyA9IGNvbG9yX3N0cmluZy5yZXBsYWNlKC8gL2csJycpO1xuICAgIGNvbG9yX3N0cmluZyA9IGNvbG9yX3N0cmluZy50b0xvd2VyQ2FzZSgpO1xuXG4gICAgLy8gYmVmb3JlIGdldHRpbmcgaW50byByZWdleHBzLCB0cnkgc2ltcGxlIG1hdGNoZXNcbiAgICAvLyBhbmQgb3ZlcndyaXRlIHRoZSBpbnB1dFxuICAgIHZhciBzaW1wbGVfY29sb3JzID0ge1xuICAgICAgICBhbGljZWJsdWU6ICdmMGY4ZmYnLFxuICAgICAgICBhbnRpcXVld2hpdGU6ICdmYWViZDcnLFxuICAgICAgICBhcXVhOiAnMDBmZmZmJyxcbiAgICAgICAgYXF1YW1hcmluZTogJzdmZmZkNCcsXG4gICAgICAgIGF6dXJlOiAnZjBmZmZmJyxcbiAgICAgICAgYmVpZ2U6ICdmNWY1ZGMnLFxuICAgICAgICBiaXNxdWU6ICdmZmU0YzQnLFxuICAgICAgICBibGFjazogJzAwMDAwMCcsXG4gICAgICAgIGJsYW5jaGVkYWxtb25kOiAnZmZlYmNkJyxcbiAgICAgICAgYmx1ZTogJzAwMDBmZicsXG4gICAgICAgIGJsdWV2aW9sZXQ6ICc4YTJiZTInLFxuICAgICAgICBicm93bjogJ2E1MmEyYScsXG4gICAgICAgIGJ1cmx5d29vZDogJ2RlYjg4NycsXG4gICAgICAgIGNhZGV0Ymx1ZTogJzVmOWVhMCcsXG4gICAgICAgIGNoYXJ0cmV1c2U6ICc3ZmZmMDAnLFxuICAgICAgICBjaG9jb2xhdGU6ICdkMjY5MWUnLFxuICAgICAgICBjb3JhbDogJ2ZmN2Y1MCcsXG4gICAgICAgIGNvcm5mbG93ZXJibHVlOiAnNjQ5NWVkJyxcbiAgICAgICAgY29ybnNpbGs6ICdmZmY4ZGMnLFxuICAgICAgICBjcmltc29uOiAnZGMxNDNjJyxcbiAgICAgICAgY3lhbjogJzAwZmZmZicsXG4gICAgICAgIGRhcmtibHVlOiAnMDAwMDhiJyxcbiAgICAgICAgZGFya2N5YW46ICcwMDhiOGInLFxuICAgICAgICBkYXJrZ29sZGVucm9kOiAnYjg4NjBiJyxcbiAgICAgICAgZGFya2dyYXk6ICdhOWE5YTknLFxuICAgICAgICBkYXJrZ3JlZW46ICcwMDY0MDAnLFxuICAgICAgICBkYXJra2hha2k6ICdiZGI3NmInLFxuICAgICAgICBkYXJrbWFnZW50YTogJzhiMDA4YicsXG4gICAgICAgIGRhcmtvbGl2ZWdyZWVuOiAnNTU2YjJmJyxcbiAgICAgICAgZGFya29yYW5nZTogJ2ZmOGMwMCcsXG4gICAgICAgIGRhcmtvcmNoaWQ6ICc5OTMyY2MnLFxuICAgICAgICBkYXJrcmVkOiAnOGIwMDAwJyxcbiAgICAgICAgZGFya3NhbG1vbjogJ2U5OTY3YScsXG4gICAgICAgIGRhcmtzZWFncmVlbjogJzhmYmM4ZicsXG4gICAgICAgIGRhcmtzbGF0ZWJsdWU6ICc0ODNkOGInLFxuICAgICAgICBkYXJrc2xhdGVncmF5OiAnMmY0ZjRmJyxcbiAgICAgICAgZGFya3R1cnF1b2lzZTogJzAwY2VkMScsXG4gICAgICAgIGRhcmt2aW9sZXQ6ICc5NDAwZDMnLFxuICAgICAgICBkZWVwcGluazogJ2ZmMTQ5MycsXG4gICAgICAgIGRlZXBza3libHVlOiAnMDBiZmZmJyxcbiAgICAgICAgZGltZ3JheTogJzY5Njk2OScsXG4gICAgICAgIGRvZGdlcmJsdWU6ICcxZTkwZmYnLFxuICAgICAgICBmZWxkc3BhcjogJ2QxOTI3NScsXG4gICAgICAgIGZpcmVicmljazogJ2IyMjIyMicsXG4gICAgICAgIGZsb3JhbHdoaXRlOiAnZmZmYWYwJyxcbiAgICAgICAgZm9yZXN0Z3JlZW46ICcyMjhiMjInLFxuICAgICAgICBmdWNoc2lhOiAnZmYwMGZmJyxcbiAgICAgICAgZ2FpbnNib3JvOiAnZGNkY2RjJyxcbiAgICAgICAgZ2hvc3R3aGl0ZTogJ2Y4ZjhmZicsXG4gICAgICAgIGdvbGQ6ICdmZmQ3MDAnLFxuICAgICAgICBnb2xkZW5yb2Q6ICdkYWE1MjAnLFxuICAgICAgICBncmF5OiAnODA4MDgwJyxcbiAgICAgICAgZ3JlZW46ICcwMDgwMDAnLFxuICAgICAgICBncmVlbnllbGxvdzogJ2FkZmYyZicsXG4gICAgICAgIGhvbmV5ZGV3OiAnZjBmZmYwJyxcbiAgICAgICAgaG90cGluazogJ2ZmNjliNCcsXG4gICAgICAgIGluZGlhbnJlZCA6ICdjZDVjNWMnLFxuICAgICAgICBpbmRpZ28gOiAnNGIwMDgyJyxcbiAgICAgICAgaXZvcnk6ICdmZmZmZjAnLFxuICAgICAgICBraGFraTogJ2YwZTY4YycsXG4gICAgICAgIGxhdmVuZGVyOiAnZTZlNmZhJyxcbiAgICAgICAgbGF2ZW5kZXJibHVzaDogJ2ZmZjBmNScsXG4gICAgICAgIGxhd25ncmVlbjogJzdjZmMwMCcsXG4gICAgICAgIGxlbW9uY2hpZmZvbjogJ2ZmZmFjZCcsXG4gICAgICAgIGxpZ2h0Ymx1ZTogJ2FkZDhlNicsXG4gICAgICAgIGxpZ2h0Y29yYWw6ICdmMDgwODAnLFxuICAgICAgICBsaWdodGN5YW46ICdlMGZmZmYnLFxuICAgICAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogJ2ZhZmFkMicsXG4gICAgICAgIGxpZ2h0Z3JleTogJ2QzZDNkMycsXG4gICAgICAgIGxpZ2h0Z3JlZW46ICc5MGVlOTAnLFxuICAgICAgICBsaWdodHBpbms6ICdmZmI2YzEnLFxuICAgICAgICBsaWdodHNhbG1vbjogJ2ZmYTA3YScsXG4gICAgICAgIGxpZ2h0c2VhZ3JlZW46ICcyMGIyYWEnLFxuICAgICAgICBsaWdodHNreWJsdWU6ICc4N2NlZmEnLFxuICAgICAgICBsaWdodHNsYXRlYmx1ZTogJzg0NzBmZicsXG4gICAgICAgIGxpZ2h0c2xhdGVncmF5OiAnNzc4ODk5JyxcbiAgICAgICAgbGlnaHRzdGVlbGJsdWU6ICdiMGM0ZGUnLFxuICAgICAgICBsaWdodHllbGxvdzogJ2ZmZmZlMCcsXG4gICAgICAgIGxpbWU6ICcwMGZmMDAnLFxuICAgICAgICBsaW1lZ3JlZW46ICczMmNkMzInLFxuICAgICAgICBsaW5lbjogJ2ZhZjBlNicsXG4gICAgICAgIG1hZ2VudGE6ICdmZjAwZmYnLFxuICAgICAgICBtYXJvb246ICc4MDAwMDAnLFxuICAgICAgICBtZWRpdW1hcXVhbWFyaW5lOiAnNjZjZGFhJyxcbiAgICAgICAgbWVkaXVtYmx1ZTogJzAwMDBjZCcsXG4gICAgICAgIG1lZGl1bW9yY2hpZDogJ2JhNTVkMycsXG4gICAgICAgIG1lZGl1bXB1cnBsZTogJzkzNzBkOCcsXG4gICAgICAgIG1lZGl1bXNlYWdyZWVuOiAnM2NiMzcxJyxcbiAgICAgICAgbWVkaXVtc2xhdGVibHVlOiAnN2I2OGVlJyxcbiAgICAgICAgbWVkaXVtc3ByaW5nZ3JlZW46ICcwMGZhOWEnLFxuICAgICAgICBtZWRpdW10dXJxdW9pc2U6ICc0OGQxY2MnLFxuICAgICAgICBtZWRpdW12aW9sZXRyZWQ6ICdjNzE1ODUnLFxuICAgICAgICBtaWRuaWdodGJsdWU6ICcxOTE5NzAnLFxuICAgICAgICBtaW50Y3JlYW06ICdmNWZmZmEnLFxuICAgICAgICBtaXN0eXJvc2U6ICdmZmU0ZTEnLFxuICAgICAgICBtb2NjYXNpbjogJ2ZmZTRiNScsXG4gICAgICAgIG5hdmFqb3doaXRlOiAnZmZkZWFkJyxcbiAgICAgICAgbmF2eTogJzAwMDA4MCcsXG4gICAgICAgIG9sZGxhY2U6ICdmZGY1ZTYnLFxuICAgICAgICBvbGl2ZTogJzgwODAwMCcsXG4gICAgICAgIG9saXZlZHJhYjogJzZiOGUyMycsXG4gICAgICAgIG9yYW5nZTogJ2ZmYTUwMCcsXG4gICAgICAgIG9yYW5nZXJlZDogJ2ZmNDUwMCcsXG4gICAgICAgIG9yY2hpZDogJ2RhNzBkNicsXG4gICAgICAgIHBhbGVnb2xkZW5yb2Q6ICdlZWU4YWEnLFxuICAgICAgICBwYWxlZ3JlZW46ICc5OGZiOTgnLFxuICAgICAgICBwYWxldHVycXVvaXNlOiAnYWZlZWVlJyxcbiAgICAgICAgcGFsZXZpb2xldHJlZDogJ2Q4NzA5MycsXG4gICAgICAgIHBhcGF5YXdoaXA6ICdmZmVmZDUnLFxuICAgICAgICBwZWFjaHB1ZmY6ICdmZmRhYjknLFxuICAgICAgICBwZXJ1OiAnY2Q4NTNmJyxcbiAgICAgICAgcGluazogJ2ZmYzBjYicsXG4gICAgICAgIHBsdW06ICdkZGEwZGQnLFxuICAgICAgICBwb3dkZXJibHVlOiAnYjBlMGU2JyxcbiAgICAgICAgcHVycGxlOiAnODAwMDgwJyxcbiAgICAgICAgcmViZWNjYXB1cnBsZTogJzY2MzM5OScsXG4gICAgICAgIHJlZDogJ2ZmMDAwMCcsXG4gICAgICAgIHJvc3licm93bjogJ2JjOGY4ZicsXG4gICAgICAgIHJveWFsYmx1ZTogJzQxNjllMScsXG4gICAgICAgIHNhZGRsZWJyb3duOiAnOGI0NTEzJyxcbiAgICAgICAgc2FsbW9uOiAnZmE4MDcyJyxcbiAgICAgICAgc2FuZHlicm93bjogJ2Y0YTQ2MCcsXG4gICAgICAgIHNlYWdyZWVuOiAnMmU4YjU3JyxcbiAgICAgICAgc2Vhc2hlbGw6ICdmZmY1ZWUnLFxuICAgICAgICBzaWVubmE6ICdhMDUyMmQnLFxuICAgICAgICBzaWx2ZXI6ICdjMGMwYzAnLFxuICAgICAgICBza3libHVlOiAnODdjZWViJyxcbiAgICAgICAgc2xhdGVibHVlOiAnNmE1YWNkJyxcbiAgICAgICAgc2xhdGVncmF5OiAnNzA4MDkwJyxcbiAgICAgICAgc25vdzogJ2ZmZmFmYScsXG4gICAgICAgIHNwcmluZ2dyZWVuOiAnMDBmZjdmJyxcbiAgICAgICAgc3RlZWxibHVlOiAnNDY4MmI0JyxcbiAgICAgICAgdGFuOiAnZDJiNDhjJyxcbiAgICAgICAgdGVhbDogJzAwODA4MCcsXG4gICAgICAgIHRoaXN0bGU6ICdkOGJmZDgnLFxuICAgICAgICB0b21hdG86ICdmZjYzNDcnLFxuICAgICAgICB0dXJxdW9pc2U6ICc0MGUwZDAnLFxuICAgICAgICB2aW9sZXQ6ICdlZTgyZWUnLFxuICAgICAgICB2aW9sZXRyZWQ6ICdkMDIwOTAnLFxuICAgICAgICB3aGVhdDogJ2Y1ZGViMycsXG4gICAgICAgIHdoaXRlOiAnZmZmZmZmJyxcbiAgICAgICAgd2hpdGVzbW9rZTogJ2Y1ZjVmNScsXG4gICAgICAgIHllbGxvdzogJ2ZmZmYwMCcsXG4gICAgICAgIHllbGxvd2dyZWVuOiAnOWFjZDMyJ1xuICAgIH07XG4gICAgY29sb3Jfc3RyaW5nID0gc2ltcGxlX2NvbG9yc1tjb2xvcl9zdHJpbmddIHx8IGNvbG9yX3N0cmluZztcbiAgICAvLyBlbWQgb2Ygc2ltcGxlIHR5cGUtaW4gY29sb3JzXG5cbiAgICAvLyBhcnJheSBvZiBjb2xvciBkZWZpbml0aW9uIG9iamVjdHNcbiAgICB2YXIgY29sb3JfZGVmcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcmU6IC9ecmdiYVxcKChcXGR7MSwzfSksXFxzKihcXGR7MSwzfSksXFxzKihcXGR7MSwzfSksXFxzKigoPzpcXGQ/XFwuKT9cXGQpXFwpJC8sXG4gICAgICAgICAgICBleGFtcGxlOiBbJ3JnYmEoMTIzLCAyMzQsIDQ1LCAwLjgpJywgJ3JnYmEoMjU1LDIzNCwyNDUsMS4wKSddLFxuICAgICAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gKGJpdHMpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMV0pLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzJdKSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1szXSksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoYml0c1s0XSlcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICByZTogL15yZ2JcXCgoXFxkezEsM30pLFxccyooXFxkezEsM30pLFxccyooXFxkezEsM30pXFwpJC8sXG4gICAgICAgICAgICBleGFtcGxlOiBbJ3JnYigxMjMsIDIzNCwgNDUpJywgJ3JnYigyNTUsMjM0LDI0NSknXSxcbiAgICAgICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uIChiaXRzKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzFdKSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1syXSksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbM10pXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcmU6IC9eKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pJC8sXG4gICAgICAgICAgICBleGFtcGxlOiBbJyMwMGZmMDAnLCAnMzM2Njk5J10sXG4gICAgICAgICAgICBwcm9jZXNzOiBmdW5jdGlvbiAoYml0cyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1sxXSwgMTYpLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzJdLCAxNiksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbM10sIDE2KVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlOiAvXihbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KSQvLFxuICAgICAgICAgICAgZXhhbXBsZTogWycjZmIwJywgJ2YwZiddLFxuICAgICAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gKGJpdHMpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMV0gKyBiaXRzWzFdLCAxNiksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMl0gKyBiaXRzWzJdLCAxNiksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbM10gKyBiaXRzWzNdLCAxNilcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXTtcblxuICAgIC8vIHNlYXJjaCB0aHJvdWdoIHRoZSBkZWZpbml0aW9ucyB0byBmaW5kIGEgbWF0Y2hcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbG9yX2RlZnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHJlID0gY29sb3JfZGVmc1tpXS5yZTtcbiAgICAgICAgdmFyIHByb2Nlc3NvciA9IGNvbG9yX2RlZnNbaV0ucHJvY2VzcztcbiAgICAgICAgdmFyIGJpdHMgPSByZS5leGVjKGNvbG9yX3N0cmluZyk7XG4gICAgICAgIGlmIChiaXRzKSB7XG4gICAgICAgICAgICB2YXIgY2hhbm5lbHMgPSBwcm9jZXNzb3IoYml0cyk7XG4gICAgICAgICAgICB0aGlzLnIgPSBjaGFubmVsc1swXTtcbiAgICAgICAgICAgIHRoaXMuZyA9IGNoYW5uZWxzWzFdO1xuICAgICAgICAgICAgdGhpcy5iID0gY2hhbm5lbHNbMl07XG4gICAgICAgICAgICBpZiAoY2hhbm5lbHMubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxwaGEgPSBjaGFubmVsc1szXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyB2YWxpZGF0ZS9jbGVhbnVwIHZhbHVlc1xuICAgIHRoaXMuciA9ICh0aGlzLnIgPCAwIHx8IGlzTmFOKHRoaXMucikpID8gMCA6ICgodGhpcy5yID4gMjU1KSA/IDI1NSA6IHRoaXMucik7XG4gICAgdGhpcy5nID0gKHRoaXMuZyA8IDAgfHwgaXNOYU4odGhpcy5nKSkgPyAwIDogKCh0aGlzLmcgPiAyNTUpID8gMjU1IDogdGhpcy5nKTtcbiAgICB0aGlzLmIgPSAodGhpcy5iIDwgMCB8fCBpc05hTih0aGlzLmIpKSA/IDAgOiAoKHRoaXMuYiA+IDI1NSkgPyAyNTUgOiB0aGlzLmIpO1xuICAgIHRoaXMuYWxwaGEgPSAodGhpcy5hbHBoYSA8IDApID8gMCA6ICgodGhpcy5hbHBoYSA+IDEuMCB8fCBpc05hTih0aGlzLmFscGhhKSkgPyAxLjAgOiB0aGlzLmFscGhhKTtcblxuICAgIC8vIHNvbWUgZ2V0dGVyc1xuICAgIHRoaXMudG9SR0IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAncmdiKCcgKyB0aGlzLnIgKyAnLCAnICsgdGhpcy5nICsgJywgJyArIHRoaXMuYiArICcpJztcbiAgICB9XG4gICAgdGhpcy50b1JHQkEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAncmdiYSgnICsgdGhpcy5yICsgJywgJyArIHRoaXMuZyArICcsICcgKyB0aGlzLmIgKyAnLCAnICsgdGhpcy5hbHBoYSArICcpJztcbiAgICB9XG4gICAgdGhpcy50b0hleCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLnIudG9TdHJpbmcoMTYpO1xuICAgICAgICB2YXIgZyA9IHRoaXMuZy50b1N0cmluZygxNik7XG4gICAgICAgIHZhciBiID0gdGhpcy5iLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgaWYgKHIubGVuZ3RoID09IDEpIHIgPSAnMCcgKyByO1xuICAgICAgICBpZiAoZy5sZW5ndGggPT0gMSkgZyA9ICcwJyArIGc7XG4gICAgICAgIGlmIChiLmxlbmd0aCA9PSAxKSBiID0gJzAnICsgYjtcbiAgICAgICAgcmV0dXJuICcjJyArIHIgKyBnICsgYjtcbiAgICB9XG5cbiAgICAvLyBoZWxwXG4gICAgdGhpcy5nZXRIZWxwWE1MID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBleGFtcGxlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAvLyBhZGQgcmVnZXhwc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbG9yX2RlZnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBleGFtcGxlID0gY29sb3JfZGVmc1tpXS5leGFtcGxlO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBleGFtcGxlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgZXhhbXBsZXNbZXhhbXBsZXMubGVuZ3RoXSA9IGV4YW1wbGVbal07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRkIHR5cGUtaW4gY29sb3JzXG4gICAgICAgIGZvciAodmFyIHNjIGluIHNpbXBsZV9jb2xvcnMpIHtcbiAgICAgICAgICAgIGV4YW1wbGVzW2V4YW1wbGVzLmxlbmd0aF0gPSBzYztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB4bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICB4bWwuc2V0QXR0cmlidXRlKCdpZCcsICdyZ2Jjb2xvci1leGFtcGxlcycpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4YW1wbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0X2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIHZhciBsaXN0X2NvbG9yID0gbmV3IFJHQkNvbG9yKGV4YW1wbGVzW2ldKTtcbiAgICAgICAgICAgICAgICB2YXIgZXhhbXBsZV9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBleGFtcGxlX2Rpdi5zdHlsZS5jc3NUZXh0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICdtYXJnaW46IDNweDsgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJ2JhY2tncm91bmQ6JyArIGxpc3RfY29sb3IudG9IZXgoKSArICc7ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJ2NvbG9yOicgKyBsaXN0X2NvbG9yLnRvSGV4KClcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgZXhhbXBsZV9kaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ3Rlc3QnKSk7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RfaXRlbV92YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgICAgICAgICAgICAgICAgICAnICcgKyBleGFtcGxlc1tpXSArICcgLT4gJyArIGxpc3RfY29sb3IudG9SR0IoKSArICcgLT4gJyArIGxpc3RfY29sb3IudG9IZXgoKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgbGlzdF9pdGVtLmFwcGVuZENoaWxkKGV4YW1wbGVfZGl2KTtcbiAgICAgICAgICAgICAgICBsaXN0X2l0ZW0uYXBwZW5kQ2hpbGQobGlzdF9pdGVtX3ZhbHVlKTtcbiAgICAgICAgICAgICAgICB4bWwuYXBwZW5kQ2hpbGQobGlzdF9pdGVtKTtcblxuICAgICAgICAgICAgfSBjYXRjaChlKXt9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHhtbDtcblxuICAgIH1cblxufVxuIiwiLypcbiAgICBTdGFja0JsdXIgLSBhIGZhc3QgYWxtb3N0IEdhdXNzaWFuIEJsdXIgRm9yIENhbnZhc1xuXG4gICAgVmVyc2lvbjogICAgIDAuNVxuICAgIEF1dGhvcjogICAgICAgIE1hcmlvIEtsaW5nZW1hbm5cbiAgICBDb250YWN0OiAgICAgbWFyaW9AcXVhc2ltb25kby5jb21cbiAgICBXZWJzaXRlOiAgICBodHRwOi8vd3d3LnF1YXNpbW9uZG8uY29tL1N0YWNrQmx1ckZvckNhbnZhc1xuICAgIFR3aXR0ZXI6ICAgIEBxdWFzaW1vbmRvXG5cbiAgICBJbiBjYXNlIHlvdSBmaW5kIHRoaXMgY2xhc3MgdXNlZnVsIC0gZXNwZWNpYWxseSBpbiBjb21tZXJjaWFsIHByb2plY3RzIC1cbiAgICBJIGFtIG5vdCB0b3RhbGx5IHVuaGFwcHkgZm9yIGEgc21hbGwgZG9uYXRpb24gdG8gbXkgUGF5UGFsIGFjY291bnRcbiAgICBtYXJpb0BxdWFzaW1vbmRvLmRlXG5cbiAgICBPciBzdXBwb3J0IG1lIG9uIGZsYXR0cjpcbiAgICBodHRwczovL2ZsYXR0ci5jb20vdGhpbmcvNzI3OTEvU3RhY2tCbHVyLWEtZmFzdC1hbG1vc3QtR2F1c3NpYW4tQmx1ci1FZmZlY3QtZm9yLUNhbnZhc0phdmFzY3JpcHRcblxuICAgIENvcHlyaWdodCAoYykgMjAxMCBNYXJpbyBLbGluZ2VtYW5uXG5cbiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gICAgZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0XG4gICAgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsXG4gICAgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAgICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAgICBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZ1xuICAgIGNvbmRpdGlvbnM6XG5cbiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICAgIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVNcbiAgICBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICAgIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUXG4gICAgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXG4gICAgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gICAgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUlxuICAgIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAgICAqL1xuXG5cbnZhciBtdWxfdGFibGUgPSBbXG4gICAgNTEyLDUxMiw0NTYsNTEyLDMyOCw0NTYsMzM1LDUxMiw0MDUsMzI4LDI3MSw0NTYsMzg4LDMzNSwyOTIsNTEyLFxuICAgIDQ1NCw0MDUsMzY0LDMyOCwyOTgsMjcxLDQ5Niw0NTYsNDIwLDM4OCwzNjAsMzM1LDMxMiwyOTIsMjczLDUxMixcbiAgICA0ODIsNDU0LDQyOCw0MDUsMzgzLDM2NCwzNDUsMzI4LDMxMiwyOTgsMjg0LDI3MSwyNTksNDk2LDQ3NSw0NTYsXG4gICAgNDM3LDQyMCw0MDQsMzg4LDM3NCwzNjAsMzQ3LDMzNSwzMjMsMzEyLDMwMiwyOTIsMjgyLDI3MywyNjUsNTEyLFxuICAgIDQ5Nyw0ODIsNDY4LDQ1NCw0NDEsNDI4LDQxNyw0MDUsMzk0LDM4MywzNzMsMzY0LDM1NCwzNDUsMzM3LDMyOCxcbiAgICAzMjAsMzEyLDMwNSwyOTgsMjkxLDI4NCwyNzgsMjcxLDI2NSwyNTksNTA3LDQ5Niw0ODUsNDc1LDQ2NSw0NTYsXG4gICAgNDQ2LDQzNyw0MjgsNDIwLDQxMiw0MDQsMzk2LDM4OCwzODEsMzc0LDM2NywzNjAsMzU0LDM0NywzNDEsMzM1LFxuICAgIDMyOSwzMjMsMzE4LDMxMiwzMDcsMzAyLDI5NywyOTIsMjg3LDI4MiwyNzgsMjczLDI2OSwyNjUsMjYxLDUxMixcbiAgICA1MDUsNDk3LDQ4OSw0ODIsNDc1LDQ2OCw0NjEsNDU0LDQ0Nyw0NDEsNDM1LDQyOCw0MjIsNDE3LDQxMSw0MDUsXG4gICAgMzk5LDM5NCwzODksMzgzLDM3OCwzNzMsMzY4LDM2NCwzNTksMzU0LDM1MCwzNDUsMzQxLDMzNywzMzIsMzI4LFxuICAgIDMyNCwzMjAsMzE2LDMxMiwzMDksMzA1LDMwMSwyOTgsMjk0LDI5MSwyODcsMjg0LDI4MSwyNzgsMjc0LDI3MSxcbiAgICAyNjgsMjY1LDI2MiwyNTksMjU3LDUwNyw1MDEsNDk2LDQ5MSw0ODUsNDgwLDQ3NSw0NzAsNDY1LDQ2MCw0NTYsXG4gICAgNDUxLDQ0Niw0NDIsNDM3LDQzMyw0MjgsNDI0LDQyMCw0MTYsNDEyLDQwOCw0MDQsNDAwLDM5NiwzOTIsMzg4LFxuICAgIDM4NSwzODEsMzc3LDM3NCwzNzAsMzY3LDM2MywzNjAsMzU3LDM1NCwzNTAsMzQ3LDM0NCwzNDEsMzM4LDMzNSxcbiAgICAzMzIsMzI5LDMyNiwzMjMsMzIwLDMxOCwzMTUsMzEyLDMxMCwzMDcsMzA0LDMwMiwyOTksMjk3LDI5NCwyOTIsXG4gICAgMjg5LDI4NywyODUsMjgyLDI4MCwyNzgsMjc1LDI3MywyNzEsMjY5LDI2NywyNjUsMjYzLDI2MSwyNTldO1xuXG5cbnZhciBzaGdfdGFibGUgPSBbXG4gICAgOSwgMTEsIDEyLCAxMywgMTMsIDE0LCAxNCwgMTUsIDE1LCAxNSwgMTUsIDE2LCAxNiwgMTYsIDE2LCAxNyxcbiAgICAxNywgMTcsIDE3LCAxNywgMTcsIDE3LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE4LCAxOSxcbiAgICAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMjAsIDIwLCAyMCxcbiAgICAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMSxcbiAgICAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSxcbiAgICAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMixcbiAgICAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMixcbiAgICAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMyxcbiAgICAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMyxcbiAgICAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMyxcbiAgICAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMyxcbiAgICAyMywgMjMsIDIzLCAyMywgMjMsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCxcbiAgICAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCxcbiAgICAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCxcbiAgICAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCxcbiAgICAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0IF07XG5cblxuZnVuY3Rpb24gcHJvY2Vzc0ltYWdlKGltZywgY2FudmFzLCByYWRpdXMsIGJsdXJBbHBoYUNoYW5uZWwpXG57XG4gICAgaWYgKHR5cGVvZihpbWcpID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbWcpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgSFRNTEltYWdlRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIWltZyBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdyA9IGltZy5uYXR1cmFsV2lkdGg7XG4gICAgdmFyIGggPSBpbWcubmF0dXJhbEhlaWdodDtcblxuICAgIGlmICh0eXBlb2YoY2FudmFzKSA9PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIEhUTUxDYW52YXNFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNhbnZhcy5zdHlsZS53aWR0aCAgPSB3ICsgJ3B4JztcbiAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XG4gICAgY2FudmFzLndpZHRoID0gdztcbiAgICBjYW52YXMuaGVpZ2h0ID0gaDtcblxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcblxuICAgIGlmIChpc05hTihyYWRpdXMpIHx8IHJhZGl1cyA8IDEpIHJldHVybjtcblxuICAgIGlmIChibHVyQWxwaGFDaGFubmVsKVxuICAgICAgICBwcm9jZXNzQ2FudmFzUkdCQShjYW52YXMsIDAsIDAsIHcsIGgsIHJhZGl1cyk7XG4gICAgZWxzZVxuICAgICAgICBwcm9jZXNzQ2FudmFzUkdCKGNhbnZhcywgMCwgMCwgdywgaCwgcmFkaXVzKTtcbn1cblxuZnVuY3Rpb24gZ2V0SW1hZ2VEYXRhRnJvbUNhbnZhcyhjYW52YXMsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodClcbntcbiAgICBpZiAodHlwZW9mKGNhbnZhcykgPT0gJ3N0cmluZycpXG4gICAgICAgIHZhciBjYW52YXMgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzKTtcbiAgICBlbHNlIGlmICh0eXBlb2YgSFRNTENhbnZhc0VsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmICFjYW52YXMgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudClcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB2YXIgaW1hZ2VEYXRhO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGltYWdlRGF0YSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5hYmxlIHRvIGFjY2VzcyBsb2NhbCBpbWFnZSBkYXRhOiBcIiArIGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVuYWJsZSB0byBhY2Nlc3MgaW1hZ2UgZGF0YTogXCIgKyBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1hZ2VEYXRhO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzQ2FudmFzUkdCQShjYW52YXMsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKVxue1xuICAgIGlmIChpc05hTihyYWRpdXMpIHx8IHJhZGl1cyA8IDEpIHJldHVybjtcbiAgICByYWRpdXMgfD0gMDtcblxuICAgIHZhciBpbWFnZURhdGEgPSBnZXRJbWFnZURhdGFGcm9tQ2FudmFzKGNhbnZhcywgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgIGltYWdlRGF0YSA9IHByb2Nlc3NJbWFnZURhdGFSR0JBKGltYWdlRGF0YSwgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpO1xuXG4gICAgY2FudmFzLmdldENvbnRleHQoJzJkJykucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgdG9wX3gsIHRvcF95KTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0ltYWdlRGF0YVJHQkEoaW1hZ2VEYXRhLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cylcbntcbiAgICB2YXIgcGl4ZWxzID0gaW1hZ2VEYXRhLmRhdGE7XG5cbiAgICB2YXIgeCwgeSwgaSwgcCwgeXAsIHlpLCB5dywgcl9zdW0sIGdfc3VtLCBiX3N1bSwgYV9zdW0sXG4gICAgICAgIHJfb3V0X3N1bSwgZ19vdXRfc3VtLCBiX291dF9zdW0sIGFfb3V0X3N1bSxcbiAgICAgICAgcl9pbl9zdW0sIGdfaW5fc3VtLCBiX2luX3N1bSwgYV9pbl9zdW0sXG4gICAgICAgIHByLCBwZywgcGIsIHBhLCByYnM7XG5cbiAgICB2YXIgZGl2ID0gcmFkaXVzICsgcmFkaXVzICsgMTtcbiAgICB2YXIgdzQgPSB3aWR0aCA8PCAyO1xuICAgIHZhciB3aWR0aE1pbnVzMSAgPSB3aWR0aCAtIDE7XG4gICAgdmFyIGhlaWdodE1pbnVzMSA9IGhlaWdodCAtIDE7XG4gICAgdmFyIHJhZGl1c1BsdXMxICA9IHJhZGl1cyArIDE7XG4gICAgdmFyIHN1bUZhY3RvciA9IHJhZGl1c1BsdXMxICogKHJhZGl1c1BsdXMxICsgMSkgLyAyO1xuXG4gICAgdmFyIHN0YWNrU3RhcnQgPSBuZXcgQmx1clN0YWNrKCk7XG4gICAgdmFyIHN0YWNrID0gc3RhY2tTdGFydDtcbiAgICBmb3IgKGkgPSAxOyBpIDwgZGl2OyBpKyspXG4gICAge1xuICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQgPSBuZXcgQmx1clN0YWNrKCk7XG4gICAgICAgIGlmIChpID09IHJhZGl1c1BsdXMxKSB2YXIgc3RhY2tFbmQgPSBzdGFjaztcbiAgICB9XG4gICAgc3RhY2submV4dCA9IHN0YWNrU3RhcnQ7XG4gICAgdmFyIHN0YWNrSW4gPSBudWxsO1xuICAgIHZhciBzdGFja091dCA9IG51bGw7XG5cbiAgICB5dyA9IHlpID0gMDtcblxuICAgIHZhciBtdWxfc3VtID0gbXVsX3RhYmxlW3JhZGl1c107XG4gICAgdmFyIHNoZ19zdW0gPSBzaGdfdGFibGVbcmFkaXVzXTtcblxuICAgIGZvciAoeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKylcbiAgICB7XG4gICAgICAgIHJfaW5fc3VtID0gZ19pbl9zdW0gPSBiX2luX3N1bSA9IGFfaW5fc3VtID0gcl9zdW0gPSBnX3N1bSA9IGJfc3VtID0gYV9zdW0gPSAwO1xuXG4gICAgICAgIHJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHByID0gcGl4ZWxzW3lpXSk7XG4gICAgICAgIGdfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBnID0gcGl4ZWxzW3lpKzFdKTtcbiAgICAgICAgYl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGIgPSBwaXhlbHNbeWkrMl0pO1xuICAgICAgICBhX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwYSA9IHBpeGVsc1t5aSszXSk7XG5cbiAgICAgICAgcl9zdW0gKz0gc3VtRmFjdG9yICogcHI7XG4gICAgICAgIGdfc3VtICs9IHN1bUZhY3RvciAqIHBnO1xuICAgICAgICBiX3N1bSArPSBzdW1GYWN0b3IgKiBwYjtcbiAgICAgICAgYV9zdW0gKz0gc3VtRmFjdG9yICogcGE7XG5cbiAgICAgICAgc3RhY2sgPSBzdGFja1N0YXJ0O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByYWRpdXNQbHVzMTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdGFjay5yID0gcHI7XG4gICAgICAgICAgICBzdGFjay5nID0gcGc7XG4gICAgICAgICAgICBzdGFjay5iID0gcGI7XG4gICAgICAgICAgICBzdGFjay5hID0gcGE7XG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgcmFkaXVzUGx1czE7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgcCA9IHlpICsgKCh3aWR0aE1pbnVzMSA8IGkgPyB3aWR0aE1pbnVzMSA6IGkpIDw8IDIpO1xuICAgICAgICAgICAgcl9zdW0gKz0gKHN0YWNrLnIgPSAocHIgPSBwaXhlbHNbcF0pKSAqIChyYnMgPSByYWRpdXNQbHVzMSAtIGkpO1xuICAgICAgICAgICAgZ19zdW0gKz0gKHN0YWNrLmcgPSAocGcgPSBwaXhlbHNbcCsxXSkpICogcmJzO1xuICAgICAgICAgICAgYl9zdW0gKz0gKHN0YWNrLmIgPSAocGIgPSBwaXhlbHNbcCsyXSkpICogcmJzO1xuICAgICAgICAgICAgYV9zdW0gKz0gKHN0YWNrLmEgPSAocGEgPSBwaXhlbHNbcCszXSkpICogcmJzO1xuXG4gICAgICAgICAgICByX2luX3N1bSArPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtICs9IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gKz0gcGI7XG4gICAgICAgICAgICBhX2luX3N1bSArPSBwYTtcblxuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgICAgICB9XG5cblxuICAgICAgICBzdGFja0luID0gc3RhY2tTdGFydDtcbiAgICAgICAgc3RhY2tPdXQgPSBzdGFja0VuZDtcbiAgICAgICAgZm9yICh4ID0gMDsgeCA8IHdpZHRoOyB4KyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBpeGVsc1t5aSszXSA9IHBhID0gKGFfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcbiAgICAgICAgICAgIGlmIChwYSAhPSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhID0gMjU1IC8gcGE7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3lpXSAgID0gKChyX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW0pICogcGE7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3lpKzFdID0gKChnX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW0pICogcGE7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3lpKzJdID0gKChiX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW0pICogcGE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBpeGVsc1t5aV0gPSBwaXhlbHNbeWkrMV0gPSBwaXhlbHNbeWkrMl0gPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByX3N1bSAtPSByX291dF9zdW07XG4gICAgICAgICAgICBnX3N1bSAtPSBnX291dF9zdW07XG4gICAgICAgICAgICBiX3N1bSAtPSBiX291dF9zdW07XG4gICAgICAgICAgICBhX3N1bSAtPSBhX291dF9zdW07XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSAtPSBzdGFja0luLnI7XG4gICAgICAgICAgICBnX291dF9zdW0gLT0gc3RhY2tJbi5nO1xuICAgICAgICAgICAgYl9vdXRfc3VtIC09IHN0YWNrSW4uYjtcbiAgICAgICAgICAgIGFfb3V0X3N1bSAtPSBzdGFja0luLmE7XG5cbiAgICAgICAgICAgIHAgPSAgKHl3ICsgKChwID0geCArIHJhZGl1cyArIDEpIDwgd2lkdGhNaW51czEgPyBwIDogd2lkdGhNaW51czEpKSA8PCAyO1xuXG4gICAgICAgICAgICByX2luX3N1bSArPSAoc3RhY2tJbi5yID0gcGl4ZWxzW3BdKTtcbiAgICAgICAgICAgIGdfaW5fc3VtICs9IChzdGFja0luLmcgPSBwaXhlbHNbcCsxXSk7XG4gICAgICAgICAgICBiX2luX3N1bSArPSAoc3RhY2tJbi5iID0gcGl4ZWxzW3ArMl0pO1xuICAgICAgICAgICAgYV9pbl9zdW0gKz0gKHN0YWNrSW4uYSA9IHBpeGVsc1twKzNdKTtcblxuICAgICAgICAgICAgcl9zdW0gKz0gcl9pbl9zdW07XG4gICAgICAgICAgICBnX3N1bSArPSBnX2luX3N1bTtcbiAgICAgICAgICAgIGJfc3VtICs9IGJfaW5fc3VtO1xuICAgICAgICAgICAgYV9zdW0gKz0gYV9pbl9zdW07XG5cbiAgICAgICAgICAgIHN0YWNrSW4gPSBzdGFja0luLm5leHQ7XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSArPSAocHIgPSBzdGFja091dC5yKTtcbiAgICAgICAgICAgIGdfb3V0X3N1bSArPSAocGcgPSBzdGFja091dC5nKTtcbiAgICAgICAgICAgIGJfb3V0X3N1bSArPSAocGIgPSBzdGFja091dC5iKTtcbiAgICAgICAgICAgIGFfb3V0X3N1bSArPSAocGEgPSBzdGFja091dC5hKTtcblxuICAgICAgICAgICAgcl9pbl9zdW0gLT0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSAtPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtIC09IHBiO1xuICAgICAgICAgICAgYV9pbl9zdW0gLT0gcGE7XG5cbiAgICAgICAgICAgIHN0YWNrT3V0ID0gc3RhY2tPdXQubmV4dDtcblxuICAgICAgICAgICAgeWkgKz0gNDtcbiAgICAgICAgfVxuICAgICAgICB5dyArPSB3aWR0aDtcbiAgICB9XG5cblxuICAgIGZvciAoeCA9IDA7IHggPCB3aWR0aDsgeCsrKVxuICAgIHtcbiAgICAgICAgZ19pbl9zdW0gPSBiX2luX3N1bSA9IGFfaW5fc3VtID0gcl9pbl9zdW0gPSBnX3N1bSA9IGJfc3VtID0gYV9zdW0gPSByX3N1bSA9IDA7XG5cbiAgICAgICAgeWkgPSB4IDw8IDI7XG4gICAgICAgIHJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHByID0gcGl4ZWxzW3lpXSk7XG4gICAgICAgIGdfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBnID0gcGl4ZWxzW3lpKzFdKTtcbiAgICAgICAgYl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGIgPSBwaXhlbHNbeWkrMl0pO1xuICAgICAgICBhX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwYSA9IHBpeGVsc1t5aSszXSk7XG5cbiAgICAgICAgcl9zdW0gKz0gc3VtRmFjdG9yICogcHI7XG4gICAgICAgIGdfc3VtICs9IHN1bUZhY3RvciAqIHBnO1xuICAgICAgICBiX3N1bSArPSBzdW1GYWN0b3IgKiBwYjtcbiAgICAgICAgYV9zdW0gKz0gc3VtRmFjdG9yICogcGE7XG5cbiAgICAgICAgc3RhY2sgPSBzdGFja1N0YXJ0O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByYWRpdXNQbHVzMTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdGFjay5yID0gcHI7XG4gICAgICAgICAgICBzdGFjay5nID0gcGc7XG4gICAgICAgICAgICBzdGFjay5iID0gcGI7XG4gICAgICAgICAgICBzdGFjay5hID0gcGE7XG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG4gICAgICAgIH1cblxuICAgICAgICB5cCA9IHdpZHRoO1xuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPD0gcmFkaXVzOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHlpID0gKHlwICsgeCkgPDwgMjtcblxuICAgICAgICAgICAgcl9zdW0gKz0gKHN0YWNrLnIgPSAocHIgPSBwaXhlbHNbeWldKSkgKiAocmJzID0gcmFkaXVzUGx1czEgLSBpKTtcbiAgICAgICAgICAgIGdfc3VtICs9IChzdGFjay5nID0gKHBnID0gcGl4ZWxzW3lpKzFdKSkgKiByYnM7XG4gICAgICAgICAgICBiX3N1bSArPSAoc3RhY2suYiA9IChwYiA9IHBpeGVsc1t5aSsyXSkpICogcmJzO1xuICAgICAgICAgICAgYV9zdW0gKz0gKHN0YWNrLmEgPSAocGEgPSBwaXhlbHNbeWkrM10pKSAqIHJicztcblxuICAgICAgICAgICAgcl9pbl9zdW0gKz0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSArPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtICs9IHBiO1xuICAgICAgICAgICAgYV9pbl9zdW0gKz0gcGE7XG5cbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcblxuICAgICAgICAgICAgaWYoaSA8IGhlaWdodE1pbnVzMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB5cCArPSB3aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHlpID0geDtcbiAgICAgICAgc3RhY2tJbiA9IHN0YWNrU3RhcnQ7XG4gICAgICAgIHN0YWNrT3V0ID0gc3RhY2tFbmQ7XG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgcCA9IHlpIDw8IDI7XG4gICAgICAgICAgICBwaXhlbHNbcCszXSA9IHBhID0gKGFfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcbiAgICAgICAgICAgIGlmIChwYSA+IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGEgPSAyNTUgLyBwYTtcbiAgICAgICAgICAgICAgICBwaXhlbHNbcF0gICA9ICgocl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtKSAqIHBhO1xuICAgICAgICAgICAgICAgIHBpeGVsc1twKzFdID0gKChnX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW0pICogcGE7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3ArMl0gPSAoKGJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bSkgKiBwYTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3BdID0gcGl4ZWxzW3ArMV0gPSBwaXhlbHNbcCsyXSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJfc3VtIC09IHJfb3V0X3N1bTtcbiAgICAgICAgICAgIGdfc3VtIC09IGdfb3V0X3N1bTtcbiAgICAgICAgICAgIGJfc3VtIC09IGJfb3V0X3N1bTtcbiAgICAgICAgICAgIGFfc3VtIC09IGFfb3V0X3N1bTtcblxuICAgICAgICAgICAgcl9vdXRfc3VtIC09IHN0YWNrSW4ucjtcbiAgICAgICAgICAgIGdfb3V0X3N1bSAtPSBzdGFja0luLmc7XG4gICAgICAgICAgICBiX291dF9zdW0gLT0gc3RhY2tJbi5iO1xuICAgICAgICAgICAgYV9vdXRfc3VtIC09IHN0YWNrSW4uYTtcblxuICAgICAgICAgICAgcCA9ICh4ICsgKCgocCA9IHkgKyByYWRpdXNQbHVzMSkgPCBoZWlnaHRNaW51czEgPyBwIDogaGVpZ2h0TWludXMxKSAqIHdpZHRoKSkgPDwgMjtcblxuICAgICAgICAgICAgcl9zdW0gKz0gKHJfaW5fc3VtICs9IChzdGFja0luLnIgPSBwaXhlbHNbcF0pKTtcbiAgICAgICAgICAgIGdfc3VtICs9IChnX2luX3N1bSArPSAoc3RhY2tJbi5nID0gcGl4ZWxzW3ArMV0pKTtcbiAgICAgICAgICAgIGJfc3VtICs9IChiX2luX3N1bSArPSAoc3RhY2tJbi5iID0gcGl4ZWxzW3ArMl0pKTtcbiAgICAgICAgICAgIGFfc3VtICs9IChhX2luX3N1bSArPSAoc3RhY2tJbi5hID0gcGl4ZWxzW3ArM10pKTtcblxuICAgICAgICAgICAgc3RhY2tJbiA9IHN0YWNrSW4ubmV4dDtcblxuICAgICAgICAgICAgcl9vdXRfc3VtICs9IChwciA9IHN0YWNrT3V0LnIpO1xuICAgICAgICAgICAgZ19vdXRfc3VtICs9IChwZyA9IHN0YWNrT3V0LmcpO1xuICAgICAgICAgICAgYl9vdXRfc3VtICs9IChwYiA9IHN0YWNrT3V0LmIpO1xuICAgICAgICAgICAgYV9vdXRfc3VtICs9IChwYSA9IHN0YWNrT3V0LmEpO1xuXG4gICAgICAgICAgICByX2luX3N1bSAtPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtIC09IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gLT0gcGI7XG4gICAgICAgICAgICBhX2luX3N1bSAtPSBwYTtcblxuICAgICAgICAgICAgc3RhY2tPdXQgPSBzdGFja091dC5uZXh0O1xuXG4gICAgICAgICAgICB5aSArPSB3aWR0aDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW1hZ2VEYXRhO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzQ2FudmFzUkdCKGNhbnZhcywgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpXG57XG4gICAgaWYgKGlzTmFOKHJhZGl1cykgfHwgcmFkaXVzIDwgMSkgcmV0dXJuO1xuICAgIHJhZGl1cyB8PSAwO1xuXG4gICAgdmFyIGltYWdlRGF0YSA9IGdldEltYWdlRGF0YUZyb21DYW52YXMoY2FudmFzLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQpO1xuICAgIGltYWdlRGF0YSA9IHByb2Nlc3NJbWFnZURhdGFSR0IoaW1hZ2VEYXRhLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cyk7XG5cbiAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCB0b3BfeCwgdG9wX3kpO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzSW1hZ2VEYXRhUkdCKGltYWdlRGF0YSwgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpXG57XG4gICAgdmFyIHBpeGVscyA9IGltYWdlRGF0YS5kYXRhO1xuXG4gICAgdmFyIHgsIHksIGksIHAsIHlwLCB5aSwgeXcsIHJfc3VtLCBnX3N1bSwgYl9zdW0sXG4gICAgICAgIHJfb3V0X3N1bSwgZ19vdXRfc3VtLCBiX291dF9zdW0sXG4gICAgICAgIHJfaW5fc3VtLCBnX2luX3N1bSwgYl9pbl9zdW0sXG4gICAgICAgIHByLCBwZywgcGIsIHJicztcblxuICAgIHZhciBkaXYgPSByYWRpdXMgKyByYWRpdXMgKyAxO1xuICAgIHZhciB3NCA9IHdpZHRoIDw8IDI7XG4gICAgdmFyIHdpZHRoTWludXMxICA9IHdpZHRoIC0gMTtcbiAgICB2YXIgaGVpZ2h0TWludXMxID0gaGVpZ2h0IC0gMTtcbiAgICB2YXIgcmFkaXVzUGx1czEgID0gcmFkaXVzICsgMTtcbiAgICB2YXIgc3VtRmFjdG9yID0gcmFkaXVzUGx1czEgKiAocmFkaXVzUGx1czEgKyAxKSAvIDI7XG5cbiAgICB2YXIgc3RhY2tTdGFydCA9IG5ldyBCbHVyU3RhY2soKTtcbiAgICB2YXIgc3RhY2sgPSBzdGFja1N0YXJ0O1xuICAgIGZvciAoaSA9IDE7IGkgPCBkaXY7IGkrKylcbiAgICB7XG4gICAgICAgIHN0YWNrID0gc3RhY2submV4dCA9IG5ldyBCbHVyU3RhY2soKTtcbiAgICAgICAgaWYgKGkgPT0gcmFkaXVzUGx1czEpIHZhciBzdGFja0VuZCA9IHN0YWNrO1xuICAgIH1cbiAgICBzdGFjay5uZXh0ID0gc3RhY2tTdGFydDtcbiAgICB2YXIgc3RhY2tJbiA9IG51bGw7XG4gICAgdmFyIHN0YWNrT3V0ID0gbnVsbDtcblxuICAgIHl3ID0geWkgPSAwO1xuXG4gICAgdmFyIG11bF9zdW0gPSBtdWxfdGFibGVbcmFkaXVzXTtcbiAgICB2YXIgc2hnX3N1bSA9IHNoZ190YWJsZVtyYWRpdXNdO1xuXG4gICAgZm9yICh5ID0gMDsgeSA8IGhlaWdodDsgeSsrKVxuICAgIHtcbiAgICAgICAgcl9pbl9zdW0gPSBnX2luX3N1bSA9IGJfaW5fc3VtID0gcl9zdW0gPSBnX3N1bSA9IGJfc3VtID0gMDtcblxuICAgICAgICByX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwciA9IHBpeGVsc1t5aV0pO1xuICAgICAgICBnX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwZyA9IHBpeGVsc1t5aSsxXSk7XG4gICAgICAgIGJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBiID0gcGl4ZWxzW3lpKzJdKTtcblxuICAgICAgICByX3N1bSArPSBzdW1GYWN0b3IgKiBwcjtcbiAgICAgICAgZ19zdW0gKz0gc3VtRmFjdG9yICogcGc7XG4gICAgICAgIGJfc3VtICs9IHN1bUZhY3RvciAqIHBiO1xuXG4gICAgICAgIHN0YWNrID0gc3RhY2tTdGFydDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmFkaXVzUGx1czE7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgc3RhY2suciA9IHByO1xuICAgICAgICAgICAgc3RhY2suZyA9IHBnO1xuICAgICAgICAgICAgc3RhY2suYiA9IHBiO1xuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMTsgaSA8IHJhZGl1c1BsdXMxOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHAgPSB5aSArICgod2lkdGhNaW51czEgPCBpID8gd2lkdGhNaW51czEgOiBpKSA8PCAyKTtcbiAgICAgICAgICAgIHJfc3VtICs9IChzdGFjay5yID0gKHByID0gcGl4ZWxzW3BdKSkgKiAocmJzID0gcmFkaXVzUGx1czEgLSBpKTtcbiAgICAgICAgICAgIGdfc3VtICs9IChzdGFjay5nID0gKHBnID0gcGl4ZWxzW3ArMV0pKSAqIHJicztcbiAgICAgICAgICAgIGJfc3VtICs9IChzdGFjay5iID0gKHBiID0gcGl4ZWxzW3ArMl0pKSAqIHJicztcblxuICAgICAgICAgICAgcl9pbl9zdW0gKz0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSArPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtICs9IHBiO1xuXG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHN0YWNrSW4gPSBzdGFja1N0YXJ0O1xuICAgICAgICBzdGFja091dCA9IHN0YWNrRW5kO1xuICAgICAgICBmb3IgKHggPSAwOyB4IDwgd2lkdGg7IHgrKylcbiAgICAgICAge1xuICAgICAgICAgICAgcGl4ZWxzW3lpXSAgID0gKHJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcbiAgICAgICAgICAgIHBpeGVsc1t5aSsxXSA9IChnX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG4gICAgICAgICAgICBwaXhlbHNbeWkrMl0gPSAoYl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuXG4gICAgICAgICAgICByX3N1bSAtPSByX291dF9zdW07XG4gICAgICAgICAgICBnX3N1bSAtPSBnX291dF9zdW07XG4gICAgICAgICAgICBiX3N1bSAtPSBiX291dF9zdW07XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSAtPSBzdGFja0luLnI7XG4gICAgICAgICAgICBnX291dF9zdW0gLT0gc3RhY2tJbi5nO1xuICAgICAgICAgICAgYl9vdXRfc3VtIC09IHN0YWNrSW4uYjtcblxuICAgICAgICAgICAgcCA9ICAoeXcgKyAoKHAgPSB4ICsgcmFkaXVzICsgMSkgPCB3aWR0aE1pbnVzMSA/IHAgOiB3aWR0aE1pbnVzMSkpIDw8IDI7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtICs9IChzdGFja0luLnIgPSBwaXhlbHNbcF0pO1xuICAgICAgICAgICAgZ19pbl9zdW0gKz0gKHN0YWNrSW4uZyA9IHBpeGVsc1twKzFdKTtcbiAgICAgICAgICAgIGJfaW5fc3VtICs9IChzdGFja0luLmIgPSBwaXhlbHNbcCsyXSk7XG5cbiAgICAgICAgICAgIHJfc3VtICs9IHJfaW5fc3VtO1xuICAgICAgICAgICAgZ19zdW0gKz0gZ19pbl9zdW07XG4gICAgICAgICAgICBiX3N1bSArPSBiX2luX3N1bTtcblxuICAgICAgICAgICAgc3RhY2tJbiA9IHN0YWNrSW4ubmV4dDtcblxuICAgICAgICAgICAgcl9vdXRfc3VtICs9IChwciA9IHN0YWNrT3V0LnIpO1xuICAgICAgICAgICAgZ19vdXRfc3VtICs9IChwZyA9IHN0YWNrT3V0LmcpO1xuICAgICAgICAgICAgYl9vdXRfc3VtICs9IChwYiA9IHN0YWNrT3V0LmIpO1xuXG4gICAgICAgICAgICByX2luX3N1bSAtPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtIC09IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gLT0gcGI7XG5cbiAgICAgICAgICAgIHN0YWNrT3V0ID0gc3RhY2tPdXQubmV4dDtcblxuICAgICAgICAgICAgeWkgKz0gNDtcbiAgICAgICAgfVxuICAgICAgICB5dyArPSB3aWR0aDtcbiAgICB9XG5cblxuICAgIGZvciAoeCA9IDA7IHggPCB3aWR0aDsgeCsrKVxuICAgIHtcbiAgICAgICAgZ19pbl9zdW0gPSBiX2luX3N1bSA9IHJfaW5fc3VtID0gZ19zdW0gPSBiX3N1bSA9IHJfc3VtID0gMDtcblxuICAgICAgICB5aSA9IHggPDwgMjtcbiAgICAgICAgcl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocHIgPSBwaXhlbHNbeWldKTtcbiAgICAgICAgZ19vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGcgPSBwaXhlbHNbeWkrMV0pO1xuICAgICAgICBiX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwYiA9IHBpeGVsc1t5aSsyXSk7XG5cbiAgICAgICAgcl9zdW0gKz0gc3VtRmFjdG9yICogcHI7XG4gICAgICAgIGdfc3VtICs9IHN1bUZhY3RvciAqIHBnO1xuICAgICAgICBiX3N1bSArPSBzdW1GYWN0b3IgKiBwYjtcblxuICAgICAgICBzdGFjayA9IHN0YWNrU3RhcnQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJhZGl1c1BsdXMxOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN0YWNrLnIgPSBwcjtcbiAgICAgICAgICAgIHN0YWNrLmcgPSBwZztcbiAgICAgICAgICAgIHN0YWNrLmIgPSBwYjtcbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHlwID0gd2lkdGg7XG5cbiAgICAgICAgZm9yIChpID0gMTsgaSA8PSByYWRpdXM7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgeWkgPSAoeXAgKyB4KSA8PCAyO1xuXG4gICAgICAgICAgICByX3N1bSArPSAoc3RhY2suciA9IChwciA9IHBpeGVsc1t5aV0pKSAqIChyYnMgPSByYWRpdXNQbHVzMSAtIGkpO1xuICAgICAgICAgICAgZ19zdW0gKz0gKHN0YWNrLmcgPSAocGcgPSBwaXhlbHNbeWkrMV0pKSAqIHJicztcbiAgICAgICAgICAgIGJfc3VtICs9IChzdGFjay5iID0gKHBiID0gcGl4ZWxzW3lpKzJdKSkgKiByYnM7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtICs9IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gKz0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSArPSBwYjtcblxuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuXG4gICAgICAgICAgICBpZihpIDwgaGVpZ2h0TWludXMxKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHlwICs9IHdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgeWkgPSB4O1xuICAgICAgICBzdGFja0luID0gc3RhY2tTdGFydDtcbiAgICAgICAgc3RhY2tPdXQgPSBzdGFja0VuZDtcbiAgICAgICAgZm9yICh5ID0gMDsgeSA8IGhlaWdodDsgeSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBwID0geWkgPDwgMjtcbiAgICAgICAgICAgIHBpeGVsc1twXSAgID0gKHJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcbiAgICAgICAgICAgIHBpeGVsc1twKzFdID0gKGdfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcbiAgICAgICAgICAgIHBpeGVsc1twKzJdID0gKGJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcblxuICAgICAgICAgICAgcl9zdW0gLT0gcl9vdXRfc3VtO1xuICAgICAgICAgICAgZ19zdW0gLT0gZ19vdXRfc3VtO1xuICAgICAgICAgICAgYl9zdW0gLT0gYl9vdXRfc3VtO1xuXG4gICAgICAgICAgICByX291dF9zdW0gLT0gc3RhY2tJbi5yO1xuICAgICAgICAgICAgZ19vdXRfc3VtIC09IHN0YWNrSW4uZztcbiAgICAgICAgICAgIGJfb3V0X3N1bSAtPSBzdGFja0luLmI7XG5cbiAgICAgICAgICAgIHAgPSAoeCArICgoKHAgPSB5ICsgcmFkaXVzUGx1czEpIDwgaGVpZ2h0TWludXMxID8gcCA6IGhlaWdodE1pbnVzMSkgKiB3aWR0aCkpIDw8IDI7XG5cbiAgICAgICAgICAgIHJfc3VtICs9IChyX2luX3N1bSArPSAoc3RhY2tJbi5yID0gcGl4ZWxzW3BdKSk7XG4gICAgICAgICAgICBnX3N1bSArPSAoZ19pbl9zdW0gKz0gKHN0YWNrSW4uZyA9IHBpeGVsc1twKzFdKSk7XG4gICAgICAgICAgICBiX3N1bSArPSAoYl9pbl9zdW0gKz0gKHN0YWNrSW4uYiA9IHBpeGVsc1twKzJdKSk7XG5cbiAgICAgICAgICAgIHN0YWNrSW4gPSBzdGFja0luLm5leHQ7XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSArPSAocHIgPSBzdGFja091dC5yKTtcbiAgICAgICAgICAgIGdfb3V0X3N1bSArPSAocGcgPSBzdGFja091dC5nKTtcbiAgICAgICAgICAgIGJfb3V0X3N1bSArPSAocGIgPSBzdGFja091dC5iKTtcblxuICAgICAgICAgICAgcl9pbl9zdW0gLT0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSAtPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtIC09IHBiO1xuXG4gICAgICAgICAgICBzdGFja091dCA9IHN0YWNrT3V0Lm5leHQ7XG5cbiAgICAgICAgICAgIHlpICs9IHdpZHRoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGltYWdlRGF0YTtcbn1cblxuZnVuY3Rpb24gQmx1clN0YWNrKClcbntcbiAgICB0aGlzLnIgPSAwO1xuICAgIHRoaXMuZyA9IDA7XG4gICAgdGhpcy5iID0gMDtcbiAgICB0aGlzLmEgPSAwO1xuICAgIHRoaXMubmV4dCA9IG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGltYWdlOiBwcm9jZXNzSW1hZ2UsXG4gICAgY2FudmFzUkdCQTogcHJvY2Vzc0NhbnZhc1JHQkEsXG4gICAgY2FudmFzUkdCOiBwcm9jZXNzQ2FudmFzUkdCLFxuICAgIGltYWdlRGF0YVJHQkE6IHByb2Nlc3NJbWFnZURhdGFSR0JBLFxuICAgIGltYWdlRGF0YVJHQjogcHJvY2Vzc0ltYWdlRGF0YVJHQlxufTtcbiIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcblxuY29uc3QgcHJvdG9DaGFydCA9IHtcbiAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgbWFyZ2luOiB7XG4gICAgICBsZWZ0OiAxMCxcbiAgICAgIHJpZ2h0OiAxMCxcbiAgICAgIHRvcDogMTAsXG4gICAgICBib3R0b206IDEwLFxuICAgIH0sXG4gIH07XG4gIFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhcnRGYWN0b3J5KG9wdHMsIHByb3RvID0gcHJvdG9DaGFydCkge1xuXG4gIGNvbnN0IGNoYXJ0ID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvdG8sIG9wdHMpO1xuICBpZihvcHRzLnBhcmVudElkKSBjaGFydC5wYXJlbnQgPSBkMy5zZWxlY3QoYCMke29wdHMucGFyZW50SWR9YCk7XG4gIGVsc2UgZDMuc2VsZWN0KCdib2R5Jyk7XG5cbiAgY2hhcnQuc3ZnID0gY2hhcnQucGFyZW50XG4gICAgLmFwcGVuZCgnc3ZnJykubG93ZXIoKVxuICAgIC5hdHRyKCdpZCcsIGNoYXJ0LmlkIHx8ICdjaGFydCcpXG4gICAgLmF0dHIoJ3dpZHRoJywgY2hhcnQud2lkdGggLSBjaGFydC5tYXJnaW4ucmlnaHQpXG4gICAgLmF0dHIoJ2hlaWdodCcsIGNoYXJ0LmhlaWdodCAtIGNoYXJ0Lm1hcmdpbi5ib3R0b20pO1xuXG4gIGlmIChvcHRzLnN0eWxlQ2xhc3MpIGNoYXJ0LnN2Zy5hdHRyKCdjbGFzcycsIG9wdHMuc3R5bGVDbGFzcyk7XG5cbiAgaWYgKG9wdHMuZHJhd0JhY2tncm91bmQpIGNoYXJ0LnN2Zy5hcHBlbmQoJ3JlY3QnKVxuICAgIC5hdHRyKCdpZCcsICdiYWNrZ3JvdW5kJylcbiAgICAuYXR0cignd2lkdGgnLCcxMDAlJykuYXR0cignaGVpZ2h0JywnMTAwJScpXG4gICAgLmF0dHIoJ2ZpbGwnLCAnI2ZmZmZmZicpOyAvLyAncmdiYSgyNTUsMCwwLC4yKScpO1xuXG4gIGNoYXJ0LmNvbnRhaW5lciA9IGNoYXJ0LnN2Zy5hcHBlbmQoJ2cnKVxuICAgIC5hdHRyKCdpZCcsICdjb250YWluZXInKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7Y2hhcnQubWFyZ2luLmxlZnR9LCAke2NoYXJ0Lm1hcmdpbi50b3B9KWApO1xuXG4gIHJldHVybiBjaGFydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpdENoYXJ0KGNoYXJ0LCBwYWRkaW5nKSB7XG4gIC8vIGNhbGN1bGF0ZSByZWFsIGRpbWVuc2lvbnMgb2YgYSBjaGFydCAoYXNzdW1lcyBjaGFydCBpcyBhIGctZWxlbWVudCB3cmFwcGVkIGluc2lkZSBhbiBzdmcpXG4gIGQzLnNlbGVjdChjaGFydC5ub2RlKCkucGFyZW50RWxlbWVudClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIGNoYXJ0Lm5vZGUoKS5nZXRCQm94KCkud2lkdGggKyBwYWRkaW5nLmxlZnQgKyBwYWRkaW5nLnJpZ2h0KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGNoYXJ0Lm5vZGUoKS5nZXRCQm94KCkuaGVpZ2h0ICsgcGFkZGluZy50b3AgKyBwYWRkaW5nLmJvdHRvbSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWFsRGVwdGgoZCkge1xuICAvLyBjYWxjdWxhdGVzIHRoZSByZWFsIGRlcHRoIG9mIGEgRk9STSBieSBzdWJ0cmFjdGluZyB1bm1hcmtlZCBhbmQgb3BlbiByZUVudHJ5IEZPUk1zXG4gIGNvbnN0IGdob3N0cyA9IGQuYW5jZXN0b3JzKClcbiAgICAgIC5maWx0ZXIoZSA9PiAoZS5kYXRhLnR5cGUgPT09ICdmb3JtJyAmJiBlLmRhdGEudW5tYXJrZWQgfHwgXG4gICAgICAgICAgICAgICAgZS5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JyAmJiBlLmRhdGEubGFzdE9wZW4pKS5sZW5ndGg7XG4gIHJldHVybiBkLmRlcHRoIC0gZ2hvc3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGV4dFN1YnNjcmlwdCh0ZXh0KSB7XG4gIC8vIHNlbGVjdGlvbiBtb2R1bGUgdG8gc3BsaXQgdGV4dCBpbnRvIHBhcnRzIGZvciBzdWJzY3JpcHRzIChlLmcuIFwieF9uXCIpXG4gIHJldHVybiAoc2VsZWN0aW9uKSA9PiB7XG4gICAgc2VsZWN0aW9uLmVhY2goZnVuY3Rpb24oZCkge1xuXG4gICAgICAgIGNvbnN0IHNwbGl0ID0gKHR5cGVvZih0ZXh0KGQpKSA9PT0gJ3N0cmluZycpID8gdGV4dChkKS5zcGxpdCgnXycpIDogJyc7XG5cbiAgICAgICAgLy8gaWYgKHNwbGl0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gICBzcGxpdC5mb3JFYWNoKChwYXJ0LGkpID0+IHtcblxuICAgICAgICAvLyAgICAgY29uc3QgZWxlbSA9IGQzLnNlbGVjdCh0aGlzKS5hcHBlbmQoJ3RzcGFuJylcbiAgICAgICAgLy8gICAgICAgLnRleHQoZCA9PiBwYXJ0KTtcblxuICAgICAgICAvLyAgICAgaWYgKGklMj09PTEpIGVsZW1cbiAgICAgICAgLy8gICAgICAgLmF0dHIoJ2R4JywgMSlcbiAgICAgICAgLy8gICAgICAgLmF0dHIoJ2R5JywgNilcbiAgICAgICAgLy8gICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsICcuOGVtJyk7XG4gICAgICAgIC8vICAgfSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKHNwbGl0Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5hcHBlbmQoJ3RzcGFuJylcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gc3BsaXRbMF0pO1xuXG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmFwcGVuZCgndHNwYW4nKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBzcGxpdFsxXSlcbiAgICAgICAgICAgIC5hdHRyKCdkeCcsIDEpXG4gICAgICAgICAgICAuYXR0cignZHknLCA2KVxuICAgICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnLjhlbScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgLnRleHQodGV4dChkKSk7XG4gICAgICAgIH1cblxuICAgIH0pXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0U2l6ZSh0ZXh0LCBmb250U2l6ZT0naW5oZXJpdCcsIGZvbnRGYW1pbHk9J2luaGVyaXQnLCBmb250U3R5bGU9J25vcm1hbCcpIHtcbiAgLyogU291cmNlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9odXl0ZC8zMjdlNDUzYzk1Y2EzZWRhZGIzMmQwYzg2N2UyNTYxYiBcbiAgQ3JlZGl0cyB0bzogSHV5IFRyLiAqL1xuICBpZiAoIWQzKSByZXR1cm47XG4gIHZhciBjb250YWluZXIgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ3N2ZycpO1xuICBjb250YWluZXIuYXBwZW5kKCd0ZXh0JylcbiAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGZvbnRTaXplKVxuICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIGZvbnRTdHlsZSlcbiAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgZm9udEZhbWlseSlcbiAgICAuYXR0cigneCcsJy05OTk5JykuYXR0cigneScsJy05OTk5JylcbiAgICAuY2FsbCh0ZXh0U3Vic2NyaXB0KCgpID0+IHRleHQpKTsgLy8gLnRleHQodGV4dCk7XG4gIHZhciBzaXplID0gY29udGFpbmVyLm5vZGUoKS5nZXRCQm94KCk7XG4gIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgcmV0dXJuIHsgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHQgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wYWNpdHkoY29sb3IsIGFscGhhKSB7XG4gIGNvbnN0IGNvbG9yQ29weSA9IGQzLmNvbG9yKGNvbG9yKTtcbmNvbG9yQ29weS5vcGFjaXR5ID0gYWxwaGE7XG5yZXR1cm4gY29sb3JDb3B5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlUmVtYWluZGVyKG51bSwgX2Rlbikge1xuICBsZXQgY291bnQgPSAwO1xuICBsZXQgc2lnbiA9IDE7XG4gIGxldCBkZW4gPSBNYXRoLnJvdW5kKF9kZW4pO1xuICBsZXQgY2FuZGlkYXRlID0gZGVuO1xuICB3aGlsZSAobnVtICUgZGVuID4gMC4zKSB7XG4gICAgICBjYW5kaWRhdGUgKz0gc2lnbiAqIDAuMDAxO1xuICAgICAgaWYgKG51bSVjYW5kaWRhdGUgPCBudW0lZGVuKSBkZW4gPSBjYW5kaWRhdGU7XG5cbiAgICAgIGlmKGNvdW50ID49IDUwMDApIHtcbiAgICAgICAgICBjYW5kaWRhdGUgPSBNYXRoLnJvdW5kKF9kZW4pO1xuICAgICAgICAgIHNpZ24gPSAtMTtcbiAgICAgIH1cbiAgICAgIGlmKGNvdW50ID49IDEwMDAwKSBicmVhaztcbiAgICAgIGNvdW50Kys7XG4gIH1cbiAgcmV0dXJuIGRlbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYWxjQ2lyY2xlRGFzaChyLCB1bml0LCBmcmFjdGlvbikge1xuICBjb25zdCBjaXJjID0gTWF0aC5QSSoyICogcjtcbiAgcmV0dXJuIHJlZHVjZVJlbWFpbmRlcihjaXJjLCB1bml0KSAqIGZyYWN0aW9uO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZURhc2hBcnJheShyLCB1bml0LCBmcmFjdGlvbnMpIHtcbiAgbGV0IHN0ciA9ICcnO1xuICBmb3IgKGxldCBpIGluIGZyYWN0aW9ucykge1xuICAgICAgc3RyID0gc3RyLmNvbmNhdChgJHsgY2FsY0NpcmNsZURhc2gociwgdW5pdCwgZnJhY3Rpb25zW2ldKSB9cHggYCk7XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZUxhYmVsKHRleHQsIGZvbnRTaXplPSdpbmhlcml0JywgZm9udEZhbWlseT0naW5oZXJpdCcsIGZvbnRTdHlsZT0nbm9ybWFsJykge1xuICAvLyBzZWxlY3Rpb24gbW9kdWxlIHRvIHNwbGl0IHRleHQgaW50byBwYXJ0cyBmb3Igc3Vic2NyaXB0cyAoZS5nLiBcInhfblwiKVxuICByZXR1cm4gKHNlbGVjdGlvbikgPT4ge1xuXG4gICAgICBzZWxlY3Rpb24uZWFjaChmdW5jdGlvbihkKSB7XG5cbiAgICAgICAgICBjb25zdCB0ZXh0U3ogPSB0ZXh0U2l6ZSh0ZXh0KGQpLCBmb250U2l6ZSwgZm9udEZhbWlseSk7XG4gICAgICAgICAgY29uc3QgbWFyZ2luID0gNTA7XG5cbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBmb250U2l6ZSlcbiAgICAgICAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgZm9udFN0eWxlKVxuICAgICAgICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgZm9udEZhbWlseSlcbiAgICAgICAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAgICAgICAucmFpc2UoKVxuICAgICAgICAgICAgICAudGV4dChkID0+IHRleHQoZCkpO1xuXG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmZpbHRlcihkID0+IGQucioyID49IHRleHRTei53aWR0aCArIG1hcmdpbikuc2VsZWN0KCd0ZXh0JylcbiAgICAgICAgICAgICAgLmNsYXNzZWQoJ2xhYmVsIGluc2lkZScsIHRydWUpXG4gICAgICAgICAgICAgIC5hdHRyKCd5JywgZCA9PiBkLnIgLSB0ZXh0U3ouaGVpZ2h0KjAuNSApXG4gICAgICAgICAgICAgIC5hdHRyKCdkb21pbmFudC1iYXNlbGluZScsJ2Jhc2VsaW5lJyk7XG5cbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykuZmlsdGVyKGQgPT4gZC5yKjIgPCB0ZXh0U3oud2lkdGggKyBtYXJnaW4pLnNlbGVjdCgndGV4dCcpXG4gICAgICAgICAgICAgIC5jbGFzc2VkKCdsYWJlbCBvdXRzaWRlJywgdHJ1ZSlcbiAgICAgICAgICAgICAgLmF0dHIoJ3knLCBkID0+IGQuciArIDQpXG4gICAgICAgICAgICAgIC5hdHRyKCdkb21pbmFudC1iYXNlbGluZScsJ2hhbmdpbmcnKTtcblxuICAgICAgfSk7XG4gIH07XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0ICogYXMgY2FudmcgZnJvbSAnY2FudmcnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGpRdWVyeSByZXBsYWNlbWVudHM6XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93QWxsKGVsZW1zKSB7XG4gICAgaWYodHlwZW9mKGVsZW1zKSA9PT0gJ3N0cmluZycpIGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtcyk7XG4gICAgZWxlbXMuZm9yRWFjaCggKGUsaSkgPT4ge1xuICAgICAgICBzaG93KGUpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNob3coZWxlbSkge1xuICAgIGlmKHR5cGVvZihlbGVtKSA9PT0gJ3N0cmluZycpIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgLy8gZWxlbS5jbGFzc0xpc3QuYWRkKCdpcy12aXNpYmxlJyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUFsbChlbGVtcykge1xuICAgIGlmKHR5cGVvZihlbGVtcykgPT09ICdzdHJpbmcnKSBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbXMpO1xuICAgIGVsZW1zLmZvckVhY2goIChlLGkpID0+IHtcbiAgICAgICAgaGlkZShlKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBoaWRlKGVsZW0pIHtcbiAgICBpZih0eXBlb2YoZWxlbSkgPT09ICdzdHJpbmcnKSBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuXHQvLyBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXZpc2libGUnKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVBbGwoZWxlbXMpIHtcbiAgICBpZih0eXBlb2YoZWxlbXMpID09PSAnc3RyaW5nJykgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1zKTtcbiAgICBlbGVtcy5mb3JFYWNoKCAoZSxpKSA9PiB7XG4gICAgICAgIHRvZ2dsZShlKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGUoZWxlbSkge1xuICAgIGlmKHR5cGVvZihlbGVtKSA9PT0gJ3N0cmluZycpIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuICAgIGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XG5cdC8vIGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtdmlzaWJsZScpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmlzaWJsZShlbGVtKSB7XG4gICAgaWYodHlwZW9mKGVsZW0pID09PSAnc3RyaW5nJykgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG4gICAgcmV0dXJuICggIWVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdkLW5vbmUnKSApO1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiBwYWQobnVtLCBzaXplKSB7XG4gICAgLyogU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjk5ODgyMlxuICAgIENyZWRpdHMgdG86IEluZmluaXRpZXNMb29wICovXG4gICAgdmFyIHMgPSBudW0rXCJcIjtcbiAgICB3aGlsZSAocy5sZW5ndGggPCBzaXplKSBzID0gXCIwXCIgKyBzO1xuICAgIHJldHVybiBzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVN2ZyhzdmdFbCwgbmFtZSkge1xuICAgIC8qIFNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ2NDAzNTg5XG4gICAgQ3JlZGl0cyB0bzogZGVmZ2hpMTk3NywgRGF2ZVRoZVNjaWVudGlzdCwgc2VueiAqL1xuICAgIHN2Z0VsLnNldEF0dHJpYnV0ZShcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIik7XG4gICAgdmFyIHN2Z0RhdGEgPSBzdmdFbC5vdXRlckhUTUw7XG4gICAgdmFyIHByZWZhY2UgPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIHN0YW5kYWxvbmU9XCJub1wiPz5cXHJcXG4nO1xuICAgIHZhciBzdmdCbG9iID0gbmV3IEJsb2IoW3ByZWZhY2UsIHN2Z0RhdGFdLCB7dHlwZTpcImltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOFwifSk7XG4gICAgdmFyIHN2Z1VybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoc3ZnQmxvYik7XG4gICAgdmFyIGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGRvd25sb2FkTGluay5ocmVmID0gc3ZnVXJsO1xuICAgIGRvd25sb2FkTGluay5kb3dubG9hZCA9IG5hbWU7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb3dubG9hZExpbmspO1xuICAgIGRvd25sb2FkTGluay5jbGljaygpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG93bmxvYWRMaW5rKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzYXZlSW1nKHN2ZywgbmFtZSkgeyAgICBcbiAgICAvKiBVc2luZyBjYW52ZyBsaWIuIGh0dHBzOi8vZ2l0aHViLmNvbS9jYW52Zy9jYW52ZyBhbmQgcGFydHMgb2YgdGhlIGFwcHJvYWNoIGZvciBzYXZlU3ZnLlxuICAgIFRoYW5rcyB0byBqYmVhcmQ0IGluOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk3NjAzNC8xMjA0MDQ3IGZvciB0aGUgc3VnZ2VzdGlvbiAqL1xuICAgIGNvbnN0IHcgPSBzdmcuZ2V0QkJveCgpLndpZHRoO1xuICAgIGNvbnN0IGggPSBzdmcuZ2V0QkJveCgpLmhlaWdodDtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaWQnLCdkcmF3aW5nQXJlYScpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICBjYW52YXMud2lkdGggPSB3O1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoO1xuXG4gICAgLy8gY29uc29sZS5sb2coc3ZnLm91dGVySFRNTCk7XG5cbiAgICBjYW52Zyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJhd2luZ0FyZWEnKSwgc3ZnLm91dGVySFRNTCwgeyBpZ25vcmVNb3VzZTogdHJ1ZSwgaWdub3JlQW5pbWF0aW9uOiB0cnVlIH0pO1xuXG4gICAgY29uc3QgaW1nVXJsID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcblxuICAgIHZhciBkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBkb3dubG9hZExpbmsuaHJlZiA9IGltZ1VybDtcbiAgICBkb3dubG9hZExpbmsuZG93bmxvYWQgPSBuYW1lO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG93bmxvYWRMaW5rKTtcbiAgICBkb3dubG9hZExpbmsuY2xpY2soKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvd25sb2FkTGluayk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjYW52YXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnIpIHtcbiAgICAvKiBTb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNTAzMDExNyBcbiAgICBDcmVkaXRzIHRvOiBOb2FoIEZyZWl0YXMgKi9cbiAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24gKGZsYXQsIHRvRmxhdHRlbikge1xuICAgIHJldHVybiBmbGF0LmNvbmNhdChBcnJheS5pc0FycmF5KHRvRmxhdHRlbikgPyBmbGF0dGVuKHRvRmxhdHRlbikgOiB0b0ZsYXR0ZW4pO1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlKGFycixvYmopIHtcbiAgICAvKiAgU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTQzODYzXG4gICAgQ3JlZGl0cyB0bzogVmlua28gVnJzYWxvdmljICovXG4gICAgcmV0dXJuIChhcnIuaW5kZXhPZihvYmopICE9IC0xKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlKG8sZnVuYykge1xuICAgIC8qICBTb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzcyMjY2OC90cmF2ZXJzZS1hbGwtdGhlLW5vZGVzLW9mLWEtanNvbi1vYmplY3QtdHJlZS13aXRoLWphdmFzY3JpcHQgXG4gICAgQ3JlZGl0cyB0bzogVGhlSGlwcG8gKi9cbiAgICBmb3IgKHZhciBpIGluIG8pIHtcbiAgICAgICAgZnVuYy5hcHBseShudWxsLFtpLG9baV1dKTsgIC8vIG51bGwgb3IgdGhpcz9cbiAgICAgICAgaWYgKG9baV0gIT09IG51bGwgJiYgdHlwZW9mKG9baV0pPT1cIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAvL2dvaW5nIG9uZSBzdGVwIGRvd24gaW4gdGhlIG9iamVjdCB0cmVlISFcbiAgICAgICAgICAgIHRyYXZlcnNlKG9baV0sZnVuYyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5TdHJpbmcucHJvdG90eXBlLnJlcGxhY2VBbGwgPSBmdW5jdGlvbihmaW5kLCByZXBsYWNlLCBlc2NhcGVNZXRhKSB7XG4gICAgLyogIE1vZGlmaWVkIGZyb206IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzExNDQ3ODMvaG93LXRvLXJlcGxhY2UtYWxsLW9jY3VycmVuY2VzLW9mLWEtc3RyaW5nLWluLWphdmFzY3JpcHQgXG4gICAgQ3JlZGl0cyB0bzogU2VhbiBCcmlnaHQgKi9cbiAgICBpZihlc2NhcGVNZXRhKSBmaW5kID0gZXNjYXBlUmVnRXhwKGZpbmQpO1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2UobmV3IFJlZ0V4cChmaW5kLCAnZycpLCByZXBsYWNlKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFxcW1xcXVxcL1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cblN0cmluZy5wcm90b3R5cGUuYWRkQmVmb3JlPWZ1bmN0aW9uKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0cigwLCBpbmRleCkgKyByZXBsYWNlbWVudCsgdGhpcy5zdWJzdHIoaW5kZXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwKHZhbHVlLCBzdGFydDEsIHN0b3AxLCBzdGFydDIsIHN0b3AyKSB7XG4gICAgLy8gUHJvY2Vzc2luZy1saWtlIG1hcCBmdW5jdGlvblxuICAgIHJldHVybiBzdGFydDIgKyAoc3RvcDIgLSBzdGFydDIpICogKCh2YWx1ZSAtIHN0YXJ0MSkgLyAoc3RvcDEgLSBzdGFydDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5TW92ZUl0ZW0oYXJyLCBmcm9tLCB0bykge1xuICBhcnIuc3BsaWNlKHRvLCAwLCBhcnIuc3BsaWNlKGZyb20sIDEpWzBdKTtcbn1cblxuU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlQXQ9ZnVuY3Rpb24oaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RyKDAsIGluZGV4KSArIHJlcGxhY2VtZW50KyB0aGlzLnN1YnN0cihpbmRleCArIHJlcGxhY2VtZW50Lmxlbmd0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lc3RhbXAoKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICByZXR1cm4gKCcnXG4gICAgKyBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkpLnN1YnN0cigyKSBcbiAgICArIChwYWQoKGRhdGUuZ2V0VVRDTW9udGgoKSsxKSwyKSkgXG4gICAgKyAocGFkKGRhdGUuZ2V0VVRDRGF0ZSgpLDIpKSArICctJ1xuICAgICsgKHBhZCgoZGF0ZS5nZXRIb3VycygpKSwyKSlcbiAgICArIChwYWQoKGRhdGUuZ2V0TWludXRlcygpKSwyKSlcbiAgICArIChwYWQoKGRhdGUuZ2V0U2Vjb25kcygpKSwyKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkNhbGMge1xuICAgIC8qXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICdjYWxjJyBtb2R1bGUgZm9yIGZvcm1mb3JtIChjKSAyMDE4IFBldGVyIEhvZm1hbm5cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKi9cbiAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH07XG5cbiAgICBzdGF0aWMgcmVsX2xvZ2ljKGZ4LCBmeSkgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIGNvbW11dGF0aXZlIHJlbGF0aW9uOiB4IHkgKi9cbiAgICAgICAgaWYgKCBmeCA+IDMgfHwgZnggPCAwIHx8IGZ5ID4gMyB8fCBmeSA8IDAgKSByZXR1cm4gLTk4O1xuICAgICAgICBlbHNlIGlmICggZnggPT09IDAgfHwgZnkgPT09IDEgKSB7IFxuICAgICAgICAgICAgcmV0dXJuIGZ5OyAvLyBDMyAvVGhlb3JlbSAyXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2UgaWYgKCBmeSA9PT0gMCB8fCBmeCA9PT0gMSApIHsgXG4gICAgICAgICAgICByZXR1cm4gZng7IC8vIEMzIC9UaGVvcmVtIDJcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggZnggPT09IGZ5ICkgeyBcbiAgICAgICAgICAgIHJldHVybiBmeDsgLy8gQzUgL1RoZW9yZW0gNVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCAoZnggPT09IDIgJiYgZnkgPT09IDMpIHx8IChmeCA9PT0gMyAmJiBmeSA9PT0gMikgKSB7IFxuICAgICAgICAgICAgcmV0dXJuIDE7IC8vIEMyIC9UaGVvcmVtIDEzICsgQzMgL1RoZW9yZW0gMlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtOTk7IC8vIGVycm9yIGNvZGVcbiAgICB9O1xuICAgIHN0YXRpYyByZWwoLi4uZlZhbHMpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogU2hvcnRjdXQgZm9yIHJlbGF0aW9uIHdpdGggbiB2YXJpYWJsZXM6IHhfMSAuLi4geF9uICovXG4gICAgICAgIGlmIChmVmFscy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2YXIgdmFsID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gZlZhbHMpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSB0aGlzLnJlbF9sb2dpYyggdmFsLGZWYWxzW2ldICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtOTc7IC8vIGVycm9yIGNvZGVcbiAgICB9O1xuXG4gICAgc3RhdGljIGludl9sb2dpYyhmeCkgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIGludmVyc2lvbi9uZWdhdGlvbjogKHgpICovXG4gICAgICAgIHN3aXRjaCAoZngpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gMztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC05OTsgLy8gZXJyb3IgY29kZVxuICAgIH07XG4gICAgc3RhdGljIGludihmeCwgbikgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBTaG9ydGN1dCBmb3IgbiBpbnZlcnNpb25zL25lZ2F0aW9uczogKHgpICovXG4gICAgICAgIGlmIChuID4gMCkge1xuICAgICAgICAgICAgdmFyIHZhbCA9IGZ4O1xuICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPG47IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbCA9IHRoaXMuaW52X2xvZ2ljKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXMuaW52X2xvZ2ljKGZ4KTtcbiAgICAgICAgcmV0dXJuIC05NzsgLy8gZXJyb3IgY29kZVxuICAgIH07XG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBSRS1FTlRSWSBGT1JNIENBTENVTEFUSU9OXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgdUZvcm0yKGZBLCBmQiwgYWx0SW50ZXJwcj1mYWxzZSkgeyAvLyBjYWxjdWxhdGlvbiB2ZXJpZmllZCAoYm90aCBpbnRlcnByLilcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeSh1bmRlZmluZWQsIGZhbHNlLCBhbHRJbnRlcnByLCBmQSwgZkIpO1xuICAgIH07XG4gICAgc3RhdGljIGlGb3JtMihmQSwgZkIsIGFsdEludGVycHI9ZmFsc2UpIHsgLy8gY2FsY3VsYXRpb24gdmVyaWZpZWQgKGJvdGggaW50ZXJwci4pXG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkodW5kZWZpbmVkLCB0cnVlLCBhbHRJbnRlcnByLCBmQSwgZkIpO1xuICAgIH07XG4gICAgc3RhdGljIHVGb3JtMyhsYXN0T3BlbiwgZkEsIGZCLCBmQywgYWx0SW50ZXJwcj1mYWxzZSkgeyAvLyBjYWxjdWxhdGlvbiB2ZXJpZmllZCBjbG9zZWQgJiBvcGVuIChib3RoIGludGVycHIuKVxuICAgICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KHRydWUsIGxhc3RPcGVuLCBhbHRJbnRlcnByLCBmQSwgZkIsIGZDKTtcbiAgICB9O1xuICAgIHN0YXRpYyBpRm9ybTMobGFzdE9wZW4sIGZBLCBmQiwgZkMsIGFsdEludGVycHI9ZmFsc2UpIHsgLy8gY2FsY3VsYXRpb24gdmVyaWZpZWQgY2xvc2VkICYgb3BlbiAoYm90aCBpbnRlcnByLilcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeShmYWxzZSwgbGFzdE9wZW4sIGFsdEludGVycHIsIGZBLCBmQiwgZkMpO1xuICAgIH07XG4gICAgc3RhdGljIHVGb3JtNChmQSwgZkIsIGZDLCBmRCwgYWx0SW50ZXJwcj1mYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KHVuZGVmaW5lZCwgZmFsc2UsIGFsdEludGVycHIsIGZBLCBmQiwgZkMsIGZEKTtcbiAgICB9O1xuICAgIHN0YXRpYyBpRm9ybTQoZkEsIGZCLCBmQywgZkQsIGFsdEludGVycHI9ZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeSh1bmRlZmluZWQsIHRydWUsIGFsdEludGVycHIsIGZBLCBmQiwgZkMsIGZEKTtcbiAgICB9O1xuICAgIHN0YXRpYyB1Rm9ybTUobGFzdE9wZW4sIGZBLCBmQiwgZkMsIGZELCBmRSwgYWx0SW50ZXJwcj1mYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KHRydWUsIGxhc3RPcGVuLCBhbHRJbnRlcnByLCBmQSwgZkIsIGZDLCBmRCwgZkUpO1xuICAgIH07XG4gICAgc3RhdGljIGlGb3JtNShsYXN0T3BlbiwgZkEsIGZCLCBmQywgZkQsIGZFLCBhbHRJbnRlcnByPWZhbHNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkoZmFsc2UsIGxhc3RPcGVuLCBhbHRJbnRlcnByLCBmQSwgZkIsIGZDLCBmRCwgZkUpO1xuICAgIH07XG5cbiAgICAvLyBzdGF0aWMgcmVFbnRyeSguLi4gdmFycykge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KGZhbHNlLCBmYWxzZSwgdmFycyk7XG4gICAgLy8gfVxuICAgIC8vIHN0YXRpYyByZUVudHJ5KHJlRXZlbiwgLi4uIHZhcnMpIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMucmVFbnRyeShyZUV2ZW4sIGZhbHNlLCB2YXJzKTtcbiAgICAvLyB9XG5cbiAgICBzdGF0aWMgcmVFbnRyeShyZUV2ZW4sIGxhc3RPcGVuLCBhbHRJbnRlcnByLCAuLi5mVmFscykge1xuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIGRpZmZlcmVudCBzZWxmLWVxdWl2YWxlbnQgcmUtZW50cnkgRk9STXNcbiAgICAgICAgIFtBcmd1bWVudHNdIHJlRXZlbjogZXZlbiByZS1lbnRyeS1udW1iZXI/IHwgbGFzdE9wZW46IGxhc3QgdmFyaWFibGUgbm90IGNyb3NzZWQ/IHwgZlZhbHM6IHZhcmlhYmxlcyAoMC8xLzIvMylcblxuICAgICAgICAgTm90ZTogY2FsY3VsYXRpb24gbWFudWFsbHkgdmVyaWZpZWQgZm9y4oCmIFxuICAgICAgICAgLSAodUZPUk0gYTEsIHJlczIpIMaSPSgoxpJ4KXkpXG4gICAgICAgICAtIChpRk9STSBhMiwgcmVzMikgxpIoxpIpPShhMXgpeVxuICAgICAgICAgLSAoaUZPUk0gYjEsIHJlczMpIFsyfHJ8KzFdIMaSKMaSKT0oKCjGkngpeSl6KSDGkj0oKCgoKCjGkngpeSl6KXgpeSl6KVxuICAgICAgICAgLSAoaUZPUk0gYjIsIHJlczMpIFsyfHJ8KzFdIMaSKMaSKT0oKGIxeCl5KXpcbiAgICAgICAgIC0gKHVGT1JNIGMxLCByZXMzKSBbMnxyfF0gxpI9KCgoKCgoxpJ4KXkpeil4KXkpeilcbiAgICAgICAgIC0gKHVGT1JNIGMyLCByZXMzKSBbMnxyfF0gxpIoxpIpPSgoYzF4KXkpelxuICAgICAgICAgU2hvdWxkIHdvcmsgd2l0aCByZXNvbHV0aW9ucyBvZiA0LCA1LCDigKYgYnV0IG5lZWRzIHZlcmlmaWNhdGlvbi5cblxuICAgICAgICAgTXkgYmFzaWMgb2JzZXJ2YXRpb25zIGFib3V0IHNlbGYtZXF1aXZhbGVudCByZS1lbnRyeSBGT1JNczpcbiAgICAgICAgIC0gRXZlcnkgcmUtZW50cnkgRk9STSBuZWVkcyB0byBoYXZlIGFuIGV2ZW4gbnVtYmVyIG9mIGNyb3NzZXMgdG8gYmUgc2VsZi1lcXVpdmFsZW50ICh1Rk9STSk6IMaSID0gKCjGkjEpMikgLlxuICAgICAgICAgICBTbyB3aXRoIHVuZXZlbiByZXNvbHV0aW9ucywgd2UgYWx3YXlzIG5lZWQgdG8gaGF2ZSBhbiBldmVuIHJlLWVudHJ5IG51bWJlcjogxpIgPSAoKCgoKCjGkjEpMikzKTEpMikzKSAuXG4gICAgICAgICAtIFRvIGJlIGFibGUgdG8gYWxzbyBoYXZlIHVuZXZlbiByZS1lbnRyeSBudW1iZXJzLCBlaXRoZXIgdGhlIHJlc29sdXRpb24gbmVlZHMgdG8gYmUgZXZlblxuICAgICAgICAgICBvciB3ZSBoYXZlIHRvIGVtYmVkIHRoZSByZS1lbnRyeSBGT1JNIGludG8gYSBub3JtYWwgRk9STSB0aGF0IGlzIG9uZSByZS1lbnRyeSBvZiB0aGF0IEZPUk06XG4gICAgICAgICAgIMaSKMaSKSA9ICgoKMaSMSkyKTMpIDwtPiAoKCggxpIgPSAoKCgoKCjGkjEpMikzKTEpMikzKSAxKTIpMykgLlxuICAgICAgICAgICBUaGVzZSBjb21wb3NpdGlvbmFsIHJlLWVudHJ5IEZPUk1zIGFyZSBpRk9STXMsIHNpbmNlIHRoZXkgcmVzb2x2ZSB0bzogKCDGkiA9ICgoxpIpKSApIC5cbiAgICAgICAgIC0gSWYgdGhlIG91dG1vc3QgY3Jvc3Mgb2YgdGhlIEZPUk0gc2hvdWxkIGJlIGxlZnQgb3V0IChvcGVuIEZPUk1zKSwgdGhpcyBjYW4gb25seSBiZSBkb25lIGlmIHdlIGVtYmVkXG4gICAgICAgICAgIGEgY29ycmVzcG9uZGluZyBjbG9zZWQgRk9STSBvZiBpdHNlbGYgdGhhdCBlaXRoZXIgaXMgb3IgZW1iZWRzIGl0cyByZS1lbnRyeSBGT1JNIChjYXNlcyBkZXNjcmliZWQgYWJvdmUpLlxuICAgICAgICAgICBJIGJlbGlldmUgdGhlIG91dG1vc3QgKG9wZW4pIEZPUk0gaXMgbm90IGJlaW5nIGNvdW50ZWQgYXMgYSByZS1lbnRyeSBhdCBhbGwsIHNpbmNlIGl0J3MgbWlzc2luZyBhIGNyb3NzLlxuXG4gICAgICAgICBUaGlzIGFsZ29yaXRobSBpcyBiYXNlZCBvbiB0aGUgZm9sbG93aW5nIHJ1bGVzL3BhdHRlcm5zL29ic2VydmF0aW9ucyBkZXJpdmVkIGZyb20gXCJ1Rk9STSBpRk9STVwiOlxuICAgICAgICAgWzFdIElmIDEgaXMgc29tZXdoZXJlIGluIHRoZSBGT1JNLCBpdCB3aWxsIGRvbWluYXRlIGFsbCB2YWx1ZXMgaW4gc3BhY2VzIGRlZXBlciB0aGFuIG0sXG4gICAgICAgICAgICAgc28gdGhlIHJlLWVudHJ5IGlzIG9ic29sZXRlIGFuZCB3ZSBjYW4gc3RhcnQgY2FsY3VsYXRlIGZyb20gdGhpcyBzcGFjZS4gXG4gICAgICAgICBbMl0gSWYgdGhlcmUgYXJlIDMvMiBvciAyLzMgcGFpcnMgaW4gdGhlIEZPUk0sIHRoZSBmaXJzdCB0ZXJtIGNhbiBiZSB0dXJuZWQgaW50byAxLCBzaW5jZVxuICAgICAgICAgICAgIHRocm91Z2ggQzIgdGhlIHNlY29uZCB0ZXJtIGNhbiBhbHdheXMgYmUgZ2VuZXJhdGVkIGludG8gaXRzIHNwYWNlLCB3aGVyZSAyMyA9IDEuXG4gICAgICAgICAgICAgVGhlbiB3ZSBjYW4gcHJvY2VlZCBhcyBpbiAoMSkuXG4gICAgICAgICBbM10gSWYgYWxsIHZhcmlhYmxlcyBhcmUgMCwgd2Ugd2lsbCBoYXZlIGVpdGhlciBhIHVGT1JNIG9yIGlGT1JNLCBoZW5jZSB0aGUgdmFsdWUgb2YgdGhlXG4gICAgICAgICAgICAgRk9STSB3aWxsIGJlIGVpdGhlciAyIG9yIDMsIGRlcGVuZGluZyBvbiB0aGUgZm9sbG93aW5nIGNhc2VzOlxuICAgICAgICAgICAgIC0gMjogY2xvc2VkLCAgICAgIHJlc29sdXRpb24gZXZlbiwgcmUtZW50cnktbnVtYmVyIGV2ZW4vb2RkIChhMSlcbiAgICAgICAgICAgICAtIDI6IGNsb3NlZC9vcGVuLCByZXNvbHV0aW9uIG9kZCwgIHJlLWVudHJ5LW51bWJlciBldmVuICAgICAoYzEsIGMyKVxuICAgICAgICAgICAgIC0gMzogb3BlbiwgICAgICAgIHJlc29sdXRpb24gZXZlbiwgcmUtZW50cnktbnVtYmVyIGV2ZW4vb2RkIChhMilcbiAgICAgICAgICAgICAtIDM6IGNsb3NlZC9vcGVuLCByZXNvbHV0aW9uIG9kZCwgIHJlLWVudHJ5LW51bWJlciBvZGQgICAgICAoYjEsIGIyKVxuICAgICAgICAgU2luY2UgWzFdWzJdWzNdIGVsaW1pbmF0ZSBhbGwgb3RoZXIgY2FzZXMsIGFsbCB2YXJpYWJsZXMgYXJlIG5vdyBlaXRoZXIgMiBvciAzIChhbmQgbWF5YmUgMHMpLFxuICAgICAgICAgc28gdXNpbmcgQzIgYXMgZGVzY3JpYmVkIGFib3ZlLCBvbmx5IHRoZSBsYXN0IG9jY2FzaW9uIG9mIHRoZXNlIHZhcmlhYmxlcyBuZWVkIHRvIGJlIGNvbnNpZGVyZWQ6XG4gICAgICAgICBbNF0gSWYgd2UgdXNlIHVGT1JNIGlGT1JNIGludGVycHJldGF0aW9uIDIgKHAuMTY3KSByZWN1cnNpdmUgaWRlbnRpdHkgKCBtbiA8LT4gKCjGkikpPcaSICksIEMyIGFuZCBDMVxuICAgICAgICAgICAgIMaSIGNhbiBiZSBzZXBhcmF0ZWQgZnJvbSAyLzMgaWYgdGhlcmUgaXMgYW4gZXZlbiBudW1iZXIgb2YgY3Jvc3NlcyAob3Igbm9uZSkgYWZ0ZXIgdGhlIHZhcmlhYmxlLlxuICAgICAgICAgICAgIFRoZW4sIGRlcGVuZGluZyBvbiB0aGUgRk9STSwgd2UgaGF2ZSBlaXRoZXI6XG4gICAgICAgICAgICAgaUZPUk06ICjGkj0oKMaSKSkpIDIvMyA8LT4gKDIpIDIvMyAgb3JcbiAgICAgICAgICAgICB1Rk9STTogIMaSPSgoxpIpKSAyLzMgIDwtPiAgMiAyLzNcbiAgICAgICAgIFs1XSBJZiBbNF0gZG9lcyBub3QgYXBwbHkgb3Igd2UgZGVjaWRlIGZvciB1Rk9STSBpRk9STSBpbnRlcnByZXRhdGlvbiAxIChwLjE2Nyk6IHJlY3Vyc2lvbiBpbnN0cnVjdGlvbiBcbiAgICAgICAgICAgICAoIG1uIC0+IMaSPSgoxpIpKSApLCB3ZSB3aWxsIGhhdmUgZWl0aGVyIHZhcmlhYmxlcyBvZiAyIG9yIDMgd2hpY2ggd2UgY2Fubm90IHJlbGF0ZSB0byDGkiwgc2luY2VcbiAgICAgICAgICAgICB0aGV5IG5lZWQgbm90IGJlIHRoZSBzYW1lIHVuZGV0ZXJtaW5lZCB2YWx1ZS4gVXNpbmcgY2FzZSBkaXN0aW5jdGlvbiwgd2UgaW50ZXJwcmV0IHRoZVxuICAgICAgICAgICAgIGxhc3Qgb2NjYXNpb24gb2YgMiBvciAzIGFzIDAgYW5kIGFzIDEsIGNhbGN1bGF0ZSBldmVyeXRoaW5nIHdpdGggxpI9MiBhbmQgcmVsYXRlIHRoZSByZXN1bHRzIFxuICAgICAgICAgICAgIHVzaW5nIGNvbnRyYXZhbGVuY2U6ICgoeCl5KSgoeSl4KSB3aGljaCB5aWVsZHMgdGhlIGZpbmFsIHJlc3VsdC5cbiAgICAgICAgKi9cbiAgICAgICAgLy8gY2hlY2sgaWYgYXJndW1lbnRzIGFyZSBhY3R1YWxseSBkZWZpbmVkXG4gICAgICAgIGlmIChyZUV2ZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVFdmVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhc3RPcGVuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxhc3RPcGVuID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzRXZlbiA9IChmVmFscy5sZW5ndGglMiA9PSAwKTsgLy8gZXZlbiByZXNvbHV0aW9uP1xuICAgICAgICB2YXIgemVyb3MgPSAwOyAvLyB6ZXJvIGNvdW50ZXJcbiAgICAgICAgdmFyIGZpcnN0VW5kZWYgPSAtMTsgLy8gY2F0Y2hlcyBmaXJzdCBtbi8obW4pXG5cbiAgICAgICAgLy8gWzNdIGRldGVybWluZSBpZiB1Rk9STSBvciBpRk9STVxuICAgICAgICB2YXIgdUZPUk0gPSBmYWxzZTtcbiAgICAgICAgdmFyIGlGT1JNID0gZmFsc2U7XG4gICAgICAgIGlmIChyZXNFdmVuKSB7XG4gICAgICAgICAgICBpZiAobGFzdE9wZW4pIGlGT1JNID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsc2UgdUZPUk0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHJlRXZlbikgdUZPUk0gPSB0cnVlO1xuICAgICAgICAgICAgZWxzZSBpRk9STSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAvLyBjaGVjayBpZiB0aGVyZSBpcyAxL20gc29tZXdoZXJlIGluIHhfMSDigKYgeF9uXG4gICAgICAgIHZhciBjYWxjZnJvbSA9IC0xO1xuICAgICAgICBmb3IodmFyIGk9MDsgaTxmVmFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGZ4ID0gZlZhbHNbaV07IFxuXG4gICAgICAgICAgICBpZiAoZnggPT0gMSkge1xuICAgICAgICAgICAgICAgIGNhbGNmcm9tID0gaTsgLy8gWzFdIGlmIG0gaXMgc29tZXdoZXJlLCBzZXQgY2FsY3VsYXRpb24gc3RhcnQgZnJvbSB0aGVyZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZnggPT0gMCkgemVyb3MrKzsgLy8gWzNdIGtlZXAgdHJhY2sgb2YgaG93IG1hbnkgemVyb3MgdGhlcmUgYXJlXG4gICAgICAgICAgICBlbHNlIGlmIChmeCA9PSAyIHx8IGZ4ID09IDMpIHsgLy8gWzJdXG4gICAgICAgICAgICAgICAgaWYoZmlyc3RVbmRlZiA9PSAtMSkgZmlyc3RVbmRlZiA9IGk7IC8vIGlmIHRoZXJlIGlzIGEgZmlyc3QgMi91IG9yIDMvaSwgcmVtZW1iZXJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGZ4ICE9IGZWYWxzW2ZpcnN0VW5kZWZdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGNmcm9tID0gZmlyc3RVbmRlZjsgLy8gaWYgMy8yIG9yIDIvMyBwYWlycywgc2V0IGNhbGN1bGF0aW9uIGZvcm0gZmlyc3QgdW5kZWYuIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIGlmICh6ZXJvcyA9PSBmVmFscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIFszXSBpbiBjYXNlIGFsbCB2YXJpYWJsZXMgYXJlIG4sIGp1c3QgcmV0dXJuIHRoZSB1bmRlZmluZWQvaW1hZ2luYXJ5IHZhbHVlIG9mIHRoZSBGT1JNXG4gICAgICAgICAgICBpZiAoaUZPUk0pIHJldHVybiAzO1xuICAgICAgICAgICAgZWxzZSByZXR1cm4gMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsY2Zyb20gPj0gMCkge1xuICAgICAgICAgICAgLy8gWzF8Ml0gaWYgdGhlcmUgaXMgYSAxL20gc29tZXdoZXJlIGluIHRoZSBmb3JtLCB3ZSBjYW4gZWFzaWx5IGNhbGN1bGF0ZSB0aGUgcmVzdCBmcm9tIHRoaXMgcG9pbnRcbiAgICAgICAgICAgIHZhciB2YWwgPSAxO1xuICAgICAgICAgICAgZm9yKHZhciBpPWNhbGNmcm9tOyBpPGZWYWxzLmxlbmd0aDsgaSsrKSB7ICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGxhc3RPcGVuICYmIGkgPT0gZlZhbHMubGVuZ3RoLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gdGhpcy5yZWwodmFsLGZWYWxzW2ldKTsgLy8gaWYgbm8gY3Jvc3Mgb24gbGFzdCB2YXIsIGRvbid0IGludmVydFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHZhbCA9IHRoaXMuaW52KCB0aGlzLnJlbCh2YWwsZlZhbHNbaV0pICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLy8gd2hhdCByZW1haW5zLCB3aWxsIG9ubHkgYmUgZWl0aGVyXG4gICAgICAgIC8vIC0gKDEpIGFsbCB2YXJpYWJsZXMgYXJlIG4vMCBvciBtbi8yICAgb3JcbiAgICAgICAgLy8gLSAoMikgYWxsIHZhcmlhYmxlcyBhcmUgbi8wIG9yIChtbikvM1xuICAgICAgICAvLyBTbyB3ZSBjYWxjdWxhdGUgZnJvbSB0aGUgbGFzdCBvY2Nhc2lvbiBvZiAyIG9yIDMsIGJlY2F1c2Ugd2l0aCBDMiAoZGVnZW5lcmF0ZSkgYWxsIGVsc2UgY2FuIGJlIGlnbm9yZWRcblxuICAgICAgICAvLyBmb3IgZXZlbiBjbG9zZWQgcmUtZW50cnktRk9STXMgd2l0aCB1bmV2ZW4gcmVzb2x1dGlvbiAodUZPUk0gYzEpLCB3ZSBuZWVkIHRvIGRvIHRoZSBjYWxjdWxhdGlvbiB0d2ljZVxuICAgICAgICB2YXIgcmVwZWF0ID0gKHJlRXZlbiAmJiAhcmVzRXZlbiAmJiAhbGFzdE9wZW4pPyAyOjE7XG4gICAgICBcbiAgICAgICAgZm9yKHZhciBpPShmVmFscy5sZW5ndGgqcmVwZWF0KS0xOyBpPj0wOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGklZlZhbHMubGVuZ3RoOyAvLyByZXBlYXRlZCB2YXJpYWJsZSBpbmRleFxuXG4gICAgICAgICAgICBpZiAoZlZhbHNbaW5kZXhdID09IDIgfHwgZlZhbHNbaW5kZXhdID09IDMpIHtcbiAgICAgICAgICAgICAgICB2YXIgaVJldiA9IChmVmFscy5sZW5ndGgqcmVwZWF0KS0xIC0gaTsgLy8gcmV2ZXJzZSBpbmRleCB0byBlYXNpZXIgY2hlY2sgZm9yIGludGVycHJldGF0aW9uIDIgKHNlZSBuZXh0KVxuXG4gICAgICAgICAgICAgICAgaWYgKGFsdEludGVycHIgJiYgKChsYXN0T3BlbiAmJiBpUmV2JTI9PTApIHx8ICghbGFzdE9wZW4gJiYgaVJldiUyPT0xKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdUZPUk0gaUZPUk0gaW50ZXJwcmV0YXRpb24gMjogcmVjdXJzaXZlIGlkZW50aXR5ICggxpI9KCjGkikpIDwtPiBtbiApXG4gICAgICAgICAgICAgICAgICAgIC8vIMaSPSgoxpIpKSBjYW4gYmUgc2VwYXJhdGVkIGlmIHRoZXJlIGlzIGFuIGV2ZW4gbnVtYmVyIG9mIGNyb3NzZXMgKG9yIG5vbmUpIGFmdGVyIHRoZSB2YXJpYWJsZTsgdGhpcyBpcyB0aGUgY2FzZSBpZiBlaXRoZXI6XG4gICAgICAgICAgICAgICAgICAgIC8vIC0gKDEpIHRoZSBGT1JNIGlzIG9wZW4gYW5kIHRoZSBiYWNrd2FyZHMgdmFyaWFibGUgaW5kZXggaXMgZXZlbiAgICAgIG9yXG4gICAgICAgICAgICAgICAgICAgIC8vIC0gKDIpIHRoZSBGT1JNIGlzIGNsb3NlZCBhbmQgdGhlIGJhY2t3YXJkcyB2YXJpYWJsZSBpbmRleCBpcyBvZGRcblxuICAgICAgICAgICAgICAgICAgICAvLyB0byBkZXRlcm1pbmUgaWYgdGhlIG51bWJlciBvZiBjcm9zc2VzIGJldHdlZW4gxpIgYW5kIG91ciB2YXIgaXMgZXZlbiwgd2UgZGlzdGluZ3Vpc2ggdHdvIGNhc2VzOlxuICAgICAgICAgICAgICAgICAgICBpZiAoaUZPUk0pIHJldHVybiB0aGlzLnJlbCgzLGZWYWxzW2luZGV4XSk7IC8vIGlGT1JNOiAoxpI9KCjGkikpKXggPC0+IChtbikgeFxuICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiB0aGlzLnJlbCgyLGZWYWxzW2luZGV4XSk7ICAgICAgIC8vIHVGT1JNOiAgxpI9KCjGkikpeCAgPC0+ICBtbiB4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBbNV0gaWYgZXZlcnl0aGluZyBlbHNlIGZhaWxzLCB1c2UgY2FzZSBkaXN0aW5jdGlvbjogdUZPUk0gaUZPUk0gKHAuOTQpOyBhbHNvIGFjY29yZGluZyB0bzpcbiAgICAgICAgICAgICAgICAgICAgLy8gdUZPUk0gaUZPUk0gKHAuMTY3KSBpbnRlcnByZXRhdGlvbiAxOiByZWN1cnNpb24gaW5zdHJ1Y3Rpb24gKCDGkj0oKMaSKSkgYW5kIG1uIG5lZWQgdG8gYmUgZGlmZmVyZW50aWF0ZWQpXG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhc2UwID0gMjsgLy8gcmUtZW50cnkgxpI9bW4sIGJlY2F1c2Ugb3RoZXIgbW49MFxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdE9wZW4gJiYgIXJlc0V2ZW4gJiYgIXJlRXZlbikgY2FzZTAgPSB0aGlzLmludihjYXNlMCk7IC8vIGNyb3NzIGZvciBpbnRlZ3JhdGVkIEZPUk1zIHdpdGggdW5ldmVuIHJlcy4gaW5zaWRlIG9wZW4gRk9STXMgKGlGT1JNIGIyKVxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGo9MDsgajwoZlZhbHMubGVuZ3RoKnJlcGVhdCk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZ4ID0gMDsgLy8gYWxsIG90aGVyIHZhbHVlcyB3aWxsIGJlIChkZWdlbmVyYXRlZCB0bykgemVyb1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZWYWxzW2luZGV4XSA9PSAyKSBmeCA9IDA7IC8vIGxhc3Qgb2NjYXNpb24gb2YgbW4vMiB3aWxsIGJlIGludGVycHJldGVkIGFzIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGZ4ID0gdGhpcy5pbnYoMCk7IC8vIGxhc3Qgb2NjYXNpb24gb2YgKG1uKS8zIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgKDApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdE9wZW4gJiYgaiA9PSBmVmFscy5sZW5ndGgtMSkgY2FzZTAgPSB0aGlzLnJlbChjYXNlMCxmeCk7IC8vIGlmIG5vIGNyb3NzIG9uIGxhc3QgdmFyLCBkb24ndCBpbnZlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgY2FzZTAgPSB0aGlzLmludiggdGhpcy5yZWwoY2FzZTAsZngpICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhc2UxID0gMjsgLy8gcmUtZW50cnkgxpI9bW4sIGJlY2F1c2Ugb3RoZXIgbW49MVxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdE9wZW4gJiYgIXJlc0V2ZW4gJiYgIXJlRXZlbikgY2FzZTEgPSB0aGlzLmludihjYXNlMSk7IC8vIGNyb3NzIGZvciBpbnRlZ3JhdGVkIEZPUk1zIHdpdGggdW5ldmVuIHJlcy4gaW5zaWRlIG9wZW4gRk9STXMgKGlGT1JNIGIyKVxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGo9MDsgajwoZlZhbHMubGVuZ3RoKnJlcGVhdCk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZ4ID0gMDsgLy8gYWxsIG90aGVyIHZhbHVlcyB3aWxsIGJlIChkZWdlbmVyYXRlZCB0bykgemVyb1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZWYWxzW2luZGV4XSA9PSAyKSBmeCA9IDE7IC8vIGxhc3Qgb2NjYXNpb24gb2YgbW4vMiB3aWxsIGJlIGludGVycHJldGVkIGFzIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGZ4ID0gdGhpcy5pbnYoMSk7IC8vIGxhc3Qgb2NjYXNpb24gb2YgKG1uKS8zIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgKDEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdE9wZW4gJiYgaiA9PSBmVmFscy5sZW5ndGgtMSkgY2FzZTEgPSB0aGlzLnJlbChjYXNlMSxmeCk7IC8vIGlmIG5vIGNyb3NzIG9uIGxhc3QgdmFyLCBkb24ndCBpbnZlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgY2FzZTEgPSB0aGlzLmludiggdGhpcy5yZWwoY2FzZTEsZngpICk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb250KCBjYXNlMCxjYXNlMSApOyAvLyBjb250cmF2YWxlbmNlIG9mIGJvdGggY2FzZXNcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgcmV0dXJuIC05OTsgLy8gZXJyb3IgY29kZVxuICAgIH07IC8vIGVuZCByZUVudHJ5KClcblxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIENPTVBMRVggRk9STSBDQUxDVUxBVElPTlNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIC0gMiBWQVJJQUJMRVNcblxuICAgIHN0YXRpYyBpbXBsTChmeCwgZnkpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBcImltcGxpY2F0aW9uXCI6ICh4KXkgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMucmVsKCB0aGlzLmludihmeCksZnkgKTtcbiAgICB9O1xuICAgIHN0YXRpYyBpbXBsUihmeCwgZnkpIHtcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBcImltcGxpY2F0aW9uXCI6IHgoeSkgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMucmVsKCBmeCx0aGlzLmludihmeSkgKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIHByZShmeCwgZnkpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBcInByZXNlY3Rpb25cIi9cImRlY2lzaW9uXCI6ICgoeCl5KSAqL1xuICAgICAgICByZXR1cm4gdGhpcy5pbnYoIHRoaXMuaW1wbEwoZngsZnkpICk7XG4gICAgfTtcbiAgICBzdGF0aWMgcG9zdChmeCwgZnkpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBcInBvc3RzZWN0aW9uXCIvXCJkZWNpc2lvblwiOiAoeCh5KSkgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuaW52KCB0aGlzLmltcGxSKGZ4LGZ5KSApO1xuICAgIH07XG5cbiAgICBzdGF0aWMgY29udChmeCwgZnkpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBcImNvbnRyYXZhbGVuY2VcIi9cImVpdGhlci1vclwiOiAoKHgpeSkgKHgoeSkpICovXG4gICAgICAgIHJldHVybiB0aGlzLnJlbCggdGhpcy5wcmUoZngsZnkpLCB0aGlzLnBvc3QoZngsZnkpICk7XG4gICAgfTtcbiAgICBzdGF0aWMgZXF1aXYoZngsIGZ5KSB7XG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgXCJlcXVpdmFsZW5jZVwiLz86ICggKCh4KXkpICh4KHkpKSApICovXG4gICAgICAgIHJldHVybiB0aGlzLmludiggdGhpcy5jb250KGZ4LGZ5KSApO1xuICAgIH07XG5cbn0iLCJpbXBvcnQgeyBmbGF0dGVuLCBpbmNsdWRlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcic7XG5pbXBvcnQgRkNhbGMgZnJvbSAnLi9mY2FsYyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZGb3JtIGV4dGVuZHMgRkNhbGMge1xuICAgIC8qXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICdmb3JtJyBtb2R1bGUgZm9yIGZvcm1mb3JtIChjKSAyMDE4IFBldGVyIEhvZm1hbm5cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKi9cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH07XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gRm9ybSBDYWxjdWxhdGlvblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHN0YXRpYyBjYWxjKGZvcm0pIHtcbiAgICAgICAgLyogcmVjdXJzaXZlIGZvcm0gY2FsY3VsYXRpb24gKi9cbiAgICAgICAgdmFyIGZ4ID0gMDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGhhdmUgYSBqc29uIGZvcm0sIGlmIG5vdDogdHJ5IHRvIGNvbnZlcnRcbiAgICAgICAgaWYodHlwZW9mKGZvcm0pID09PSAnc3RyaW5nJykgZm9ybSA9IHRoaXMucGFyc2VMaW5lYXIoZm9ybSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSBpbiBmb3JtLnNwYWNlKSB7XG4gICAgICAgICAgICBpZiAoZm9ybS5zcGFjZVtpXS50eXBlID09PSAnZm9ybScpIHtcbiAgICAgICAgICAgICAgICBmeCA9IHRoaXMucmVsKCBmeCx0aGlzLmNhbGMoZm9ybS5zcGFjZVtpXSkgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ2NvbnN0Jykge1xuICAgICAgICAgICAgICAgIGZ4ID0gdGhpcy5yZWwoIGZ4LGZvcm0uc3BhY2VbaV0udmFsdWUgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ3ZhcicpIHtcbiAgICAgICAgICAgICAgICBpZighaXNOYU4oZm9ybS5zcGFjZVtpXS52YWx1ZSkpIGZ4ID0gdGhpcy5yZWwoIGZ4LGZvcm0uc3BhY2VbaV0udmFsdWUgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ3VuY2xlYXInKSB7XG4gICAgICAgICAgICAgICAgZnggPSB0aGlzLnJlbCggZngsZm9ybS5zcGFjZVtpXS52YWx1ZSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZm9ybS5zcGFjZVtpXS50eXBlID09PSAncmVFbnRyeScpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmVzdGVkVmFscyA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBmUmVFbnRyeSA9IGZvcm0uc3BhY2VbaV07XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIGZSZUVudHJ5Lm5lc3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBuZXN0ZWRWYWxzLnB1c2goIHRoaXMuY2FsYyhmUmVFbnRyeS5uZXN0ZWRbal0pICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGZvciBldmVuIHJlc29sdXRpb25zICh0b3RhbCBuZXN0ZWQgYXJndW1lbnRzKSwgcmVFbnRyeSBudW1iZXIgd2lsbCBiZSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAvLyBzaW5jZSBpdCBkb2Vzbid0IG1hdHRlciBpZiBpdHMgZXZlbiBvciBvZGRcbiAgICAgICAgICAgICAgICBjb25zdCByZUVudHJ5TnVtYmVyID0gKGZSZUVudHJ5Lm5lc3RlZC5sZW5ndGggJSAyID09PSAwKSA/IHVuZGVmaW5lZCA6IGZSZUVudHJ5LnJlRXZlbjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBub3RhdGlvbiByZWFkaW5nOiB7ZGVlcGVzdCwgLi4uLCBzaGFsbG93ZXN0fSAgdXNlIG5lc3RlZFZhbHMucmV2ZXJzZSgpIHRvIHJldmVyc2UgdmFyaWFibGVzXG4gICAgICAgICAgICAgICAgZnggPSB0aGlzLnJlbCggZngsdGhpcy5yZUVudHJ5KHJlRW50cnlOdW1iZXIsIGZSZUVudHJ5Lmxhc3RPcGVuLCBmUmVFbnRyeS5hbHRJbnRlcnByZXRhdGlvbiwgLi4ubmVzdGVkVmFscykgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihmb3JtLnVubWFya2VkKSByZXR1cm4gZng7XG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXMuaW52KCBmeCApO1xuICAgIH07XG5cbiAgICBzdGF0aWMgY2FsY0FsbChmb3JtKSB7XG4gICAgICAgIC8qIEludGVycHJldCBhbmQgY2FsY3VsYXRlIGFsbCBwb3NzaWJsZSB2YWx1ZXMgZm9yIHRoZSBmb3JtIFxuICAgICAgICAgICAtPiBuZWVkcyByZWZhY3RvcmluZyB0byBhdm9pZCByZWR1bmRhbmN5OyBzdWdnZXN0aW9ucyB3ZWxjb21lLiAqL1xuXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBoYXZlIGEganNvbiBmb3JtLCBpZiBub3Q6IHRyeSB0byBjb252ZXJ0XG4gICAgICAgIGlmKHR5cGVvZihmb3JtKSA9PT0gJ3N0cmluZycpIGZvcm0gPSB0aGlzLnBhcnNlTGluZWFyKGZvcm0pO1xuXG4gICAgICAgIHZhciB2YXJzID0gdGhpcy5nZXRWYXJpYWJsZXMoZm9ybSk7XG4gICAgICAgIHZhciB2YWxzID0ge307XG5cbiAgICAgICAgdmFyIGludGVyS2V5ID0gJycrdmFycy5qb2luKCkrJzsnO1xuXG4gICAgICAgIHN3aXRjaCAodmFycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB2YWxzWydSZXN1bHQnXSA9IHRoaXMuY2FsYyhmb3JtKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJwciA9IFsge3ZhcjogdmFyc1swXSwgdmFsdWU6IG51bGx9IF07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYT0wOyBhPDQ7IGErKykge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzBdLnZhbHVlID0gYTtcbiAgICAgICAgICAgICAgICAgICAgdmFsc1tpbnRlcktleSthXSA9IHRoaXMuaW50ZXJDYWxjKGZvcm0sIGludGVycHIpOy8vW2FdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdmFyIGludGVycHIgPSBbIHt2YXI6IHZhcnNbMF0sIHZhbHVlOiBudWxsfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbMV0sIHZhbHVlOiBudWxsfSBdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGE9MDsgYTw0OyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwclswXS52YWx1ZSA9IGE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGI9MDsgYjw0OyBiKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbMV0udmFsdWUgPSBiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsc1tpbnRlcktleSthKycnK2JdID0gdGhpcy5pbnRlckNhbGMoZm9ybSwgaW50ZXJwcik7Ly9bYSxiXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgdmFyIGludGVycHIgPSBbIHt2YXI6IHZhcnNbMF0sIHZhbHVlOiBudWxsfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbMV0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1syXSwgdmFsdWU6IG51bGx9IF07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYT0wOyBhPDQ7IGErKykge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzBdLnZhbHVlID0gYTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYj0wOyBiPDQ7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclsxXS52YWx1ZSA9IGI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjPTA7IGM8NDsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclsyXS52YWx1ZSA9IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsc1tpbnRlcktleSthKycnK2IrJycrY10gPSB0aGlzLmludGVyQ2FsYyhmb3JtLCBpbnRlcnByKTsvL1thLGIsY10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHZhciBpbnRlcnByID0gWyB7dmFyOiB2YXJzWzBdLCB2YWx1ZTogbnVsbH0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzFdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbMl0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1szXSwgdmFsdWU6IG51bGx9IF07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYT0wOyBhPDQ7IGErKykge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzBdLnZhbHVlID0gYTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYj0wOyBiPDQ7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclsxXS52YWx1ZSA9IGI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjPTA7IGM8NDsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclsyXS52YWx1ZSA9IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZD0wOyBkPDQ7IGQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzNdLnZhbHVlID0gZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsc1tpbnRlcktleSthKycnK2IrJycrYysnJytkXSA9IHRoaXMuaW50ZXJDYWxjKGZvcm0sIGludGVycHIpOy8vW2EsYixjLGRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgdmFyIGludGVycHIgPSBbIHt2YXI6IHZhcnNbMF0sIHZhbHVlOiBudWxsfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbMV0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1syXSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzNdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbNF0sIHZhbHVlOiBudWxsfSBdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGE9MDsgYTw0OyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwclswXS52YWx1ZSA9IGE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGI9MDsgYjw0OyBiKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbMV0udmFsdWUgPSBiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYz0wOyBjPDQ7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbMl0udmFsdWUgPSBjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGQ9MDsgZDw0OyBkKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclszXS52YWx1ZSA9IGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGU9MDsgZTw0OyBlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbNF0udmFsdWUgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsc1tpbnRlcktleSthKycnK2IrJycrYysnJytkKycnK2VdID0gdGhpcy5pbnRlckNhbGMoZm9ybSwgaW50ZXJwcik7Ly9bYSxiLGMsZCxlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgdmFyIGludGVycHIgPSBbIHt2YXI6IHZhcnNbMF0sIHZhbHVlOiBudWxsfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbMV0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1syXSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzNdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbNF0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1s1XSwgdmFsdWU6IG51bGx9IF07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYT0wOyBhPDQ7IGErKykge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzBdLnZhbHVlID0gYTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYj0wOyBiPDQ7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclsxXS52YWx1ZSA9IGI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjPTA7IGM8NDsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclsyXS52YWx1ZSA9IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZD0wOyBkPDQ7IGQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzNdLnZhbHVlID0gZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZT0wOyBlPDQ7IGUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcls0XS52YWx1ZSA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBmPTA7IGY8NDsgZisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcls1XS52YWx1ZSA9IGY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsc1tpbnRlcktleSthKycnK2IrJycrYysnJytkKycnK2UrJycrZl0gPSB0aGlzLmludGVyQ2FsYyhmb3JtLCBpbnRlcnByKTsvL1thLGIsYyxkLGUsZl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIHZhciBpbnRlcnByID0gWyB7dmFyOiB2YXJzWzBdLCB2YWx1ZTogbnVsbH0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzFdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbMl0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1szXSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzRdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbNV0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1s2XSwgdmFsdWU6IG51bGx9IF07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYT0wOyBhPDQ7IGErKykge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzBdLnZhbHVlID0gYTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYj0wOyBiPDQ7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclsxXS52YWx1ZSA9IGI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjPTA7IGM8NDsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclsyXS52YWx1ZSA9IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZD0wOyBkPDQ7IGQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzNdLnZhbHVlID0gZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZT0wOyBlPDQ7IGUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcls0XS52YWx1ZSA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBmPTA7IGY8NDsgZisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcls1XS52YWx1ZSA9IGY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZz0wOyBnPDQ7IGcrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzZdLnZhbHVlID0gZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsc1tpbnRlcktleSthKycnK2IrJycrYysnJytkKycnK2UrJycrZisnJytnXSA9IHRoaXMuaW50ZXJDYWxjKGZvcm0sIGludGVycHIpOy8vW2EsYixjLGQsZSxmLGddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgdmFyIGludGVycHIgPSBbIHt2YXI6IHZhcnNbMF0sIHZhbHVlOiBudWxsfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbMV0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1syXSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzNdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbNF0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1s1XSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzZdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbN10sIHZhbHVlOiBudWxsfSBdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGE9MDsgYTw0OyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwclswXS52YWx1ZSA9IGE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGI9MDsgYjw0OyBiKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbMV0udmFsdWUgPSBiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYz0wOyBjPDQ7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbMl0udmFsdWUgPSBjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGQ9MDsgZDw0OyBkKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclszXS52YWx1ZSA9IGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGU9MDsgZTw0OyBlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbNF0udmFsdWUgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZj0wOyBmPDQ7IGYrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbNV0udmFsdWUgPSBmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGc9MDsgZzw0OyBnKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcls2XS52YWx1ZSA9IGc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGg9MDsgaDw0OyBoKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbN10udmFsdWUgPSBoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsc1tpbnRlcktleSthKycnK2IrJycrYysnJytkKycnK2UrJycrZisnJytnKycnK2hdID0gdGhpcy5pbnRlckNhbGMoZm9ybSwgaW50ZXJwcik7Ly9bYSxiLGMsZCxlLGYsZyxoXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWxzO1xuICAgIH07XG5cbiAgICBzdGF0aWMgaW50ZXJDYWxjKGZvcm0sIGludGVycHIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsYyggdGhpcy5pbnRlcnByZXQoZm9ybSwgaW50ZXJwcikgKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGludGVycHJldChmb3JtLCBpbnRlcnByKSB7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBoYXZlIGEganNvbiBmb3JtLCBpZiBub3Q6IHRyeSB0byBjb252ZXJ0XG4gICAgICAgIGlmKHR5cGVvZihmb3JtKSA9PT0gJ3N0cmluZycpIGZvcm0gPSB0aGlzLnBhcnNlTGluZWFyKGZvcm0pO1xuXG4gICAgICAgIHZhciBpbnRlcnByRm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZm9ybSkpOyAvLyBjbG9uZSBmb3JtXG5cbiAgICAgICAgdGhpcy50cmF2ZXJzZUZvcm0oaW50ZXJwckZvcm0sIGZ1bmN0aW9uKGZCcmFuY2gpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwYWNlID0gZkJyYW5jaC5zcGFjZTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBzcGFjZSkge1xuICAgICAgICAgICAgICAgIGlmIChzcGFjZVtpXS50eXBlID09PSAndmFyJykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB2IGluIGludGVycHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGFjZVtpXS5zeW1ib2wgPT09IGludGVycHJbdl0udmFyKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFjZVtpXS52YWx1ZSA9IGludGVycHJbdl0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBpbnRlcnByRm9ybTtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEV4dGVuc2lvbnMgb2YgRkNhbGNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgcmVsX2xvZ2ljKGZ4LCBmeSkge1xuICAgICAgICBpZih0eXBlb2YoZngpID09PSBBcnJheSB8fCB0eXBlb2YoZnkpID09PSBBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1cGVyLnJlbF9sb2dpYyhmeCwgZnkpO1xuICAgIH07XG4gICAgc3RhdGljIHJlbCguLi5mVmFscykge1xuICAgICAgICByZXR1cm4gc3VwZXIucmVsKC4uLmZWYWxzKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGludl9sb2dpYyhmeCkge1xuICAgICAgICBpZih0eXBlb2YoZngpID09PSBBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1cGVyLmludl9sb2dpYyhmeCk7XG4gICAgfTtcbiAgICBzdGF0aWMgaW52KGZ4LCBuKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5pbnYoZngsIG4pO1xuICAgIH07XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQ29udmVyc2lvbnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgcGFyc2VMaW5lYXIoZm9ybXVsYSkge1xuICAgICAgICAvKiBDb252ZXJ0cyBmcm9tIHBhcmFudGhlc2lzIG5vdGF0aW9uIGludG8gSlNPTiBzdHJpbmcgYW5kIHBhcnNlcyBhcyBKU09OIG9iamVjdCAqL1xuXG4gICAgICAgIC8vIGNvbnZlcnQgdGhlIGZvcm11bGEgaW50byBhIEpTT04gc3RyaW5nXG4gICAgICAgIHZhciBqc29uU3RyID0gdGhpcy5jb252RnJvbUxpbmVhcihmb3JtdWxhKTtcblxuICAgICAgICAvLyB0cnkgcGFyc2luZyB0aGUgc3RyaW5nIGFzIGEgSlNPTiBvYmplY3RcbiAgICAgICAgdmFyIGpzb24gPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGpzb24gPSBKU09OLnBhcnNlKGpzb25TdHIpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnZGcm9tTGluZWFyKGZvcm11bGEpIHtcbiAgICAgICAgLy8gY2xlYW4gZm9ybXVsYSBzdHJpbmcgZnJvbSB3aGl0ZXNwYWNlXG4gICAgICAgIHZhciBjbGVhbkZvcm11bGEgPSB0aGlzLmNsZWFuTGluZWFyKGZvcm11bGEpO1xuICAgICAgICB2YXIgYXJyID0gdGhpcy5jb25zdHJ1Y3RGcm9tTGluZWFyKGNsZWFuRm9ybXVsYSk7XG4gICAgICAgIHJldHVybiBmbGF0dGVuKGFycikuam9pbignJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsZWFuTGluZWFyKGZvcm11bGEpIHtcbiAgICAgICAgdmFyIGNsZWFuRm9ybXVsYSA9ICcnO1xuICAgICAgICB2YXIgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgaW5TbGFzaCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGkgaW4gZm9ybXVsYSkge1xuICAgICAgICAgICAgdmFyIGNoYXIgPSBmb3JtdWxhW2ldO1xuICAgICAgICAgICAgaWYodHlwZW9mKGNoYXIpICE9PSBcInN0cmluZ1wiKSBicmVhazsgLy8gcHJvdG90eXBlIGhhY2tzXG5cbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnXCInICYmICFpblNsYXNoKSBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJy8nICYmICFpblF1b3RlKSBpblNsYXNoID0gIWluU2xhc2g7XG5cbiAgICAgICAgICAgIC8vIG9taXQgd2hpdGVzcGFjZSBvdXRzaWRlIG9mIHF1b3Rlc1xuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcgJykge1xuICAgICAgICAgICAgICAgIGlmIChpblF1b3RlIHx8wqBpblNsYXNoKSBjbGVhbkZvcm11bGEgKz0gY2hhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgY2xlYW5Gb3JtdWxhICs9IGNoYXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsZWFuRm9ybXVsYTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29uc3RydWN0RnJvbUxpbmVhcihmb3JtdWxhKSB7XG4gICAgICAgIC8qIENvbnZlcnRzIGZyb20gcGFyYW50aGVzaXMgbm90YXRpb24gdG8gSlNPTi1mb3JtICovXG5cbiAgICAgICAgdmFyIGNvbXBBbGwgPSBbXTtcbiAgICAgICAgdmFyIHVubWFya2VkID0gdHJ1ZTtcblxuICAgICAgICAvLyBjaGVjayBmb3IgYWxsIGVuY2xvc2luZyBvdXRlciBmb3JtXG4gICAgICAgIHZhciBjb3VudERlcHRoID0gMDtcbiAgICAgICAgdmFyIGluUXVvdGUgPSBmYWxzZTtcbiAgICAgICAgdmFyIGluU2xhc2ggPSBmYWxzZTtcbiAgICAgICAgdmFyIG91dGVyTWFya0NvdW50ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBmb3JtdWxhKSB7XG4gICAgICAgICAgICB2YXIgY2hhciA9IGZvcm11bGFbaV07XG4gICAgICAgICAgICBpZih0eXBlb2YoY2hhcikgIT09IFwic3RyaW5nXCIpIGJyZWFrOyAvLyBwcm90b3R5cGUgaGFja3NcblxuICAgICAgICAgICAgaWYgKCFpblF1b3RlICYmICFpblNsYXNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcoJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGNvdW50RGVwdGggPT0gMCkgJiYgKGkgIT0gMCkpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjb3VudERlcHRoKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09ICcpJykge1xuICAgICAgICAgICAgICAgICAgICBjb3VudERlcHRoLS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudERlcHRoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IGZvcm11bGEubGVuZ3RoLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnXCInICYmICFpblNsYXNoKSBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJy8nICYmICFpblF1b3RlKSBpblNsYXNoID0gIWluU2xhc2g7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wQWxsLnB1c2goJyAgeycpO1xuICAgICAgICBjb21wQWxsLnB1c2goJ1widHlwZVwiOlwiZm9ybVwiLCcpO1xuXG4gICAgICAgIGlmICh1bm1hcmtlZCkgY29tcEFsbC5wdXNoKCdcInVubWFya2VkXCI6dHJ1ZSwnKTtcbiAgICAgICAgZWxzZSBmb3JtdWxhID0gZm9ybXVsYS5zbGljZSgxLGZvcm11bGEubGVuZ3RoLTEpO1xuXG4gICAgICAgIGNvbXBBbGwucHVzaCgnXCJzcGFjZVwiOlsnKTsgICBcblxuXG4gICAgICAgIHZhciBwYXJ0cyA9IFtdO1xuICAgICAgICBwYXJ0cy5wdXNoKCcnKTtcblxuICAgICAgICB2YXIgY291bnREZXB0aCA9IDA7XG4gICAgICAgIHZhciBpblF1b3RlID0gZmFsc2U7XG4gICAgICAgIHZhciBpblNsYXNoID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIG9wdENoYXIgPSAn4qS0JztcbiAgICAgICAgdmFyIG5lc3RDaGFyID0gJ+KktSc7XG5cbiAgICAgICAgZm9yICh2YXIgaSBpbiBmb3JtdWxhKSB7XG4gICAgICAgICAgICB2YXIgY2hhciA9IGZvcm11bGFbaV07XG4gICAgICAgICAgICB2YXIgcHJldkNoYXIgPSBmb3JtdWxhW2ktMV07XG4gICAgICAgICAgICBpZih0eXBlb2YoY2hhcikgIT09IFwic3RyaW5nXCIpIGJyZWFrOyAvLyBwcm90b3R5cGUgaGFja3NcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFpblF1b3RlICYmICFpblNsYXNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcpJyB8fMKgY2hhciA9PT0gJ30nKSBjb3VudERlcHRoLS07XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcoJyB8fMKgY2hhciA9PT0gJ3snKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnREZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmlyc3QgKHgpIGRvZXNuJ3QgbmVlZCB0byBiZSBzZXBhcmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID4gMCkgcGFydHMucHVzaCgnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY291bnREZXB0aCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggKHByZXZDaGFyID09PSAnKScgfHzCoHByZXZDaGFyID09PSAnfScpICYmICEoY2hhciA9PT0gJyknIHx8wqBjaGFyID09PSAnfScpICkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiBjaGFyIGZvbGxvd3MgKHgpLCBzZXBhcmF0ZTsgYnV0IG5vdCBpZiBpdCBpcyBhbm90aGVyICcpJ1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnREZXB0aCA9PT0gMCkgcGFydHMucHVzaCgnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHVuaXF1ZSBzZXBhcmF0aW9uIGNoYXJzIGZvciByZS1lbnRyeSBmb3JtcyBmb3IgZWFzeSBzcGxpdHRpbmdcbiAgICAgICAgICAgICAgICBpZiAoY291bnREZXB0aCA9PT0gMSAmJiBjaGFyID09PSAnLCcpIGNoYXIgPSBuZXN0Q2hhcjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb3VudERlcHRoID09PSAxICYmIGNoYXIgPT09ICd8JykgY2hhciA9IG9wdENoYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJ1wiJyAmJiAhaW5TbGFzaCkgaW5RdW90ZSA9ICFpblF1b3RlO1xuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcvJyAmJiAhaW5RdW90ZSkgaW5TbGFzaCA9ICFpblNsYXNoO1xuICAgICAgICAgICAgLy8gYWRkIGNoYXIgdG8gdGhlIGxhdGVzdCBwdXNoZWQgcGFydFxuICAgICAgICAgICAgcGFydHNbcGFydHMubGVuZ3RoLTFdICs9IGNoYXI7XG4gICAgICAgIH1cblxuXG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciBpIGluIHBhcnRzKSB7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1tpXVswXSA9PT0gJygnKSB7IFxuICAgICAgICAgICAgICAgIC8vIGlmIHBhcnQgaXMgZm9ybVxuICAgICAgICAgICAgICAgIC8vIHBhcnRzW2ldID0gdGhpcy5jb25zdHJ1Y3RGcm9tTGluZWFyKCBwYXJ0c1tpXS5zbGljZSgxLHBhcnRzW2ldLmxlbmd0aC0xKSApO1xuICAgICAgICAgICAgICAgIHZhciBjb21wID0gW107XG4gICAgICAgICAgICAgICAgLy8gY29tcC5wdXNoKCd7Jyk7XG4gICAgICAgICAgICAgICAgY29tcC5wdXNoKCB0aGlzLmNvbnN0cnVjdEZyb21MaW5lYXIocGFydHNbaV0pICk7XG4gICAgICAgICAgICAgICAgLy8gY29tcC5wdXNoKCd9Jyk7XG5cbiAgICAgICAgICAgICAgICBwYXJ0c1tpXSA9IGNvbXAuc2xpY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhcnRzW2ldWzBdID09PSAneycpIHtcbiAgICAgICAgICAgICAgICAvLyBlbHNlIGlmIHBhcnQgaXMgcmUtZW50cnkgZm9ybVxuXG4gICAgICAgICAgICAgICAgdmFyIGNvbXAgPSBbXTtcbiAgICAgICAgICAgICAgICBjb21wLnB1c2goJyAgeycpO1xuICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnXCJ0eXBlXCI6XCJyZUVudHJ5XCIsJyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IHBhcnRzW2ldLnNsaWNlKDEscGFydHNbaV0ubGVuZ3RoLTEpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHJlUGFydHMgPSBjb250ZW50LnNwbGl0KG9wdENoYXIpO1xuICAgICAgICAgICAgICAgIHZhciByZU5lc3RlZCA9IHJlUGFydHNbcmVQYXJ0cy5sZW5ndGgtMV0uc3BsaXQobmVzdENoYXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlTmVzdGVkLmxlbmd0aCAlIDIgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKCdcInJlRXZlblwiOlwidW5kZWZpbmVkXCIsJyk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlUGFydHNbMF0gPT09ICcycicgfHwgcmVQYXJ0c1sxXSA9PT0gJzJyJyB8fCByZVBhcnRzWzJdID09PSAnMnInKSBjb21wLnB1c2goJ1wicmVFdmVuXCI6dHJ1ZSwnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBjb21wLnB1c2goJ1wicmVFdmVuXCI6ZmFsc2UsJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlUGFydHNbMF0gPT09ICdvcGVuJyB8fCByZVBhcnRzWzFdID09PSAnb3BlbicgfHwgcmVQYXJ0c1syXSA9PT0gJ29wZW4nKSBjb21wLnB1c2goJ1wibGFzdE9wZW5cIjp0cnVlLCcpO1xuICAgICAgICAgICAgICAgIGVsc2UgY29tcC5wdXNoKCdcImxhc3RPcGVuXCI6ZmFsc2UsJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVQYXJ0c1swXSA9PT0gJ2FsdCcgfHwgcmVQYXJ0c1sxXSA9PT0gJ2FsdCcgfHwgcmVQYXJ0c1syXSA9PT0gJ2FsdCcpIGNvbXAucHVzaCgnXCJhbHRJbnRlcnByZXRhdGlvblwiOnRydWUsJyk7XG4gICAgICAgICAgICAgICAgZWxzZSBjb21wLnB1c2goJ1wiYWx0SW50ZXJwcmV0YXRpb25cIjpmYWxzZSwnKTtcblxuICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnXCJuZXN0ZWRcIjpbJyk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuIGluIHJlTmVzdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCggdGhpcy5jb25zdHJ1Y3RGcm9tTGluZWFyKHJlTmVzdGVkW25dKSApO1xuICAgICAgICAgICAgICAgICAgICBpZiAobiA8IHJlTmVzdGVkLmxlbmd0aC0xKSBjb21wLnB1c2goJywnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVOZXN0ZWRbbl0gPSB0aGlzLmNvbnN0cnVjdEZyb21MaW5lYXIoIHJlTmVzdGVkW25dICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29tcC5wdXNoKCddfSAgJyk7XG5cbiAgICAgICAgICAgICAgICBwYXJ0c1tpXSA9IGNvbXAuc2xpY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGVsc2Ugd2UgaGF2ZSB2YXJpYWJsZXMvY29uc3RhbnRzXG5cbiAgICAgICAgICAgICAgICB2YXIgY29tcCA9IFtdO1xuXG4gICAgICAgICAgICAgICAgdmFyIHZhcnMgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciBpblNsYXNoID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIHBhcnRzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGFyID0gcGFydHNbaV1bal07XG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZihjaGFyKSAhPT0gXCJzdHJpbmdcIikgYnJlYWs7IC8vIHByb3RvdHlwZSBoYWNrc1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnXCInICYmICFpblNsYXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJrIHF1b3RlZCBzdHJpbmcgd2l0aCBhICfigJYnIGZvciBpZGVudGlmaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluUXVvdGUpIHZhcnMucHVzaCgn4oCWJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhciA9PT0gJy8nICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpblNsYXNoID0gIWluU2xhc2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJrIHVuY2xlYXIgZm9ybSB3aXRoIGEgJ+KAvScgZm9yIGlkZW50aWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5TbGFzaCkgdmFycy5wdXNoKCfigL0nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW5RdW90ZSAmJiAhaW5TbGFzaCkgdmFycy5wdXNoKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHF1b3RlIGNoYXJzIGluc2lkZSBzbGFzaGVzIHdpbGwgYmUgZXNjYXBlZCB0byBub3QgaW50ZXJmZXJlIHdpdGggSlNPTiBzeW50YXhcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnXCInICYmIGluU2xhc2gpIHZhcnNbdmFycy5sZW5ndGgtMV0gKz0gJ1xcXFwnICsgY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdmFyc1t2YXJzLmxlbmd0aC0xXSArPSBjaGFyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdiBpbiB2YXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZih2YXJzW3ZdKSAhPT0gXCJzdHJpbmdcIikgYnJlYWs7IC8vIHByb3RvdHlwZSBoYWNrc1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnICB7Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4odmFyc1t2XSkgJiYgdmFyc1t2XS5sZW5ndGggPiAwIFxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFyc1t2XVswXSAhPT0gJ+KAvScgJiYgdmFyc1t2XVswXSAhPT0gJ+KAlicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnXCJ0eXBlXCI6XCJjb25zdFwiLCcpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnXCJ2YWx1ZVwiOicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKHZhcnNbdl0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhcnNbdl1bMF0gPT09ICfigL0nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wLnB1c2goJ1widHlwZVwiOlwidW5jbGVhclwiLCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKCdcInZhbHVlXCI6MiwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnXCJzeW1ib2xcIjonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnXCInK3ZhcnNbdl0uc2xpY2UoMSkrJ1wiJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wLnB1c2goJ1widHlwZVwiOlwidmFyXCIsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wLnB1c2goJ1widmFsdWVcIjpcIipcIiwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnXCJzeW1ib2xcIjonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZhcnNbdl1bMF0gPT09ICfigJYnKSBjb21wLnB1c2goJ1wiJyt2YXJzW3ZdLnNsaWNlKDEpKydcIicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBjb21wLnB1c2goJ1wiJyt2YXJzW3ZdKydcIicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnfSAgJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2IDwgdmFycy5sZW5ndGgtMSkgY29tcC5wdXNoKCcsJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGFydHNbaV0gPSBjb21wLnNsaWNlKCk7XG4gICAgICAgICAgICB9IC8vIGVuZCBlbHNlXG5cbiAgICAgICAgICAgIGNvbXBBbGwucHVzaChwYXJ0c1tpXSk7XG4gICAgICAgICAgICBpZiAoaSA8IHBhcnRzLmxlbmd0aC0xKSBjb21wQWxsLnB1c2goJywnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBBbGwucHVzaCgnXX0gICcpO1xuXG4gICAgICAgIHJldHVybiBjb21wQWxsO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBSZXByZXNlbnRhdGlvblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHN0YXRpYyBqc29uU3RyaW5nKGZvcm0pIHtcbiAgICAgICAgLyogcmV0dXJuIGpzb24tcmVwcmVzZW50YXRpb24gb2YgdGhlIHNwZWNpZmllZCBGT1JNICovXG4gICAgICAgIGlmKHR5cGVvZihmb3JtKSA9PT0gJ3N0cmluZycpIGZvcm0gPSB0aGlzLnBhcnNlTGluZWFyKGZvcm0pO1xuICAgIFxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZm9ybSwgdW5kZWZpbmVkLCAyKTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gSGVscGVyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljIGdldFZhcmlhYmxlcyhmb3JtKSB7XG4gICAgICAgIGlmKHR5cGVvZihmb3JtKSA9PT0gJ3N0cmluZycpIGZvcm0gPSB0aGlzLnBhcnNlTGluZWFyKGZvcm0pO1xuXG4gICAgICAgIHZhciB2YXJzID0gW107XG4gICAgICAgIHRoaXMudHJhdmVyc2VGb3JtKGZvcm0sIGZ1bmN0aW9uKGZCcmFuY2gpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwYWNlID0gZkJyYW5jaC5zcGFjZTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBzcGFjZSkge1xuICAgICAgICAgICAgICAgIGlmIChzcGFjZVtpXS50eXBlID09PSAndmFyJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWluY2x1ZGUodmFycywgc3BhY2VbaV0uc3ltYm9sKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFycy5wdXNoKHNwYWNlW2ldLnN5bWJvbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFycy5zb3J0KCk7XG4gICAgfTtcblxuICAgIHN0YXRpYyB0cmF2ZXJzZUZvcm0oZm9ybSxmdW5jKSB7XG4gICAgICAgIC8qIHRyYXZlcnNlcyBvbmx5IGZvcm0tdHlwZXMgaW4gYSBqc29uIHRyZWUgKi9cbiAgICAgICAgbGV0IGJyZWFrVHJhdiA9IGZ1bmMuYXBwbHkodGhpcyxbZm9ybV0pO1xuXG4gICAgICAgIGlmIChmb3JtLnNwYWNlKSB7IC8vIGZvcm0udHlwZTogJ2Zvcm0nXG4gICAgICAgICAgICBpZiAoZm9ybS5zcGFjZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBmb3JtLnNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICdmb3JtJyB8fCBmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICdyZUVudHJ5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJyZWFrTG9vcCA9IHRoaXMudHJhdmVyc2VGb3JtKGZvcm0uc3BhY2VbaV0sZnVuYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnJlYWtMb29wKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmb3JtLm5lc3RlZCkgeyAvLyBmb3JtLnR5cGU6ICdyZUVudHJ5J1xuICAgICAgICAgICAgaWYgKGZvcm0ubmVzdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIGZvcm0ubmVzdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBicmVha0xvb3AgPSB0aGlzLnRyYXZlcnNlRm9ybShmb3JtLm5lc3RlZFtpXSxmdW5jKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJyZWFrTG9vcCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgY29uc29sZS5sb2coJ0VSUk9SOiBOb3QgYSBmb3JtIScpO1xuXG4gICAgICAgIHJldHVybiBicmVha1RyYXY7XG4gICAgfTtcblxufSIsImltcG9ydCBGRm9ybSBmcm9tICcuL2Zmb3JtJztcbmltcG9ydCBEM0dyYXBoLCB7IHNhdmUgfSBmcm9tICcuLi9tb2R1bGVzL2QzLWdyYXBoJztcblxubGV0IGcxID0ge307IGxldCBnMiA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR3JhcGggZXh0ZW5kcyBGRm9ybSB7XG4gICAgLypcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAnZ3JhcGgnIG1vZHVsZSBmb3IgZm9ybWZvcm0gKGMpIDIwMTggUGV0ZXIgSG9mbWFublxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAqL1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIHRoaXMuZ3JhcGhzID0gW107XG4gIH07XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBFeHRlbnNpb25zIG9mIEZGb3JtXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBzdGF0aWMganNvblN0cmluZyhmb3JtKSB7XG4gICAgY29uc3QgZXhwYW5kZWRGb3JtID0gdGhpcy5leHBhbmRfcmVFbnRyeShmb3JtKTtcbiAgICByZXR1cm4gc3VwZXIuanNvblN0cmluZyhleHBhbmRlZEZvcm0pO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBHcmFwaCByZXByZXNlbnRhdGlvblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgc3RhdGljIGNyZWF0ZUdyYXBoKGdyYXBoVHlwZSwgX2Zvcm0sIG9wdGlvbnMpIHtcbiAgICBjb25zdCBhZGRFbXB0eVJlQ2hpbGRTcGFjZSA9IChncmFwaFR5cGUgPT09ICdwYWNrJyk7XG5cbiAgICAvLyBleHBhbmQgcmUtZW50cnkgc3RydWN0dXJlIHRvIGJlIHVzYWJsZSBmb3IgZ3JhcGhzXG4gICAgY29uc3QgZm9ybSA9IHRoaXMuZXhwYW5kX3JlRW50cnkoX2Zvcm0sIHthZGRFbXB0eVJlQ2hpbGRTcGFjZTogYWRkRW1wdHlSZUNoaWxkU3BhY2V9KTtcbiAgICAvLyBpbml0aWFsaXplIHRoZSBncmFwaFxuXG4gICAgY29uc3QgZ3JhcGggPSBuZXcgRDNHcmFwaChncmFwaFR5cGUsIGZvcm0sIG9wdGlvbnMpO1xuICAgIGdyYXBoLmZvcm11bGEgPSBfZm9ybTtcbiAgICAvLyBncmFwaHMucHVzaCggbmV3IEQzR3JhcGgoZ3JhcGhUeXBlLCBmb3JtLCBvcHRpb25zKSApO1xuXG4gICAgcmV0dXJuIGdyYXBoO1xuICB9XG5cbiAgc3RhdGljIHNhdmVHcmFwaChmb3JtYXQsIHN2ZywgbmFtZSkge1xuICAgIHNhdmUoZm9ybWF0LCBzdmcsIG5hbWUpO1xuICB9XG5cbiAgc3RhdGljIGNvbnN0cnVjdE5lc3RlZChyZUZvcm0sIG9wdGlvbnM9e30pIHtcbiAgICAvKiBDb25zdHJ1Y3RzIGEgKHJlYWwpIG5lc3RlZCBmb3JtIHN0cnVjdHVyZSBmcm9tIHRoZSAubmVzdGVkIGFycmF5IG9mIHRoZSBvcmlnaW5hbCByZS1lbnRyeSBqc29uICovXG4gICAgbGV0IHNwYWNlID0gcmVGb3JtLnNwYWNlID0gW107XG4gICAgcmVGb3JtLm5lc3RlZC5yZXZlcnNlKCk7IC8vIE1VU1QgYmUgcmV2ZXJzZWQsIGJlY2F1c2Ugbm90YXRpb246IHtkZWVwZXN0LCAuLi4sIHNoYWxsb3dlc3R9XG5cbiAgICBmb3IobGV0IGkgaW4gcmVGb3JtLm5lc3RlZCkge1xuICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgIC8vIHByZXBlbmQgdGhlIHJlRW50cnkgbmVzdGluZyBiZWZvcmUgZXZlcnl0aGluZyBlbHNlIGluIHRoZSBzcGFjZVxuICAgICAgICBzcGFjZS51bnNoaWZ0KCB7dHlwZTogJ2Zvcm0nLCByZUNoaWxkOiB0cnVlLCBzcGFjZTogW119ICk7IC8vIHNwYWNlLnB1c2ggPC0gb3JkZXIgbGFzdFxuICAgICAgICBjb25zdCBuZXN0ZWRGb3JtID0gc3BhY2VbMF07IC8vIHNwYWNlW3NwYWNlLmxlbmd0aC0xXSA8LSBvcmRlciBsYXN0XG4gICAgICAgIFxuICAgICAgICBpZighcmVGb3JtLm5lc3RlZFtpXS51bm1hcmtlZCkgbmVzdGVkRm9ybS5zcGFjZS5wdXNoKHJlRm9ybS5uZXN0ZWRbaV0pO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvLyBuZXN0ZWRGb3JtLnNwYWNlLnB1c2gocmVGb3JtLm5lc3RlZFtpXSk7XG4gICAgICAgICAgbmVzdGVkRm9ybS5zcGFjZS5wdXNoKC4uLnJlRm9ybS5uZXN0ZWRbaV0uc3BhY2UpOyAvLyBwdXNoKHJlRm9ybS5uZXN0ZWRbaV0pIGZvciBncm91cGluZ1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhY2UgPSBuZXN0ZWRGb3JtLnNwYWNlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmKCFyZUZvcm0ubmVzdGVkW2ldLnVubWFya2VkKSBzcGFjZS5wdXNoKHJlRm9ybS5uZXN0ZWRbaV0pO1xuICAgICAgICAvLyBlbHNlIHNwYWNlLnB1c2gocmVGb3JtLm5lc3RlZFtpXSk7XG4gICAgICAgIGVsc2Ugc3BhY2UucHVzaCguLi5yZUZvcm0ubmVzdGVkW2ldLnNwYWNlKTsgLy8gcHVzaChyZUZvcm0ubmVzdGVkW2ldKSBmb3IgZ3JvdXBpbmdcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuYWRkRW1wdHlSZUNoaWxkU3BhY2UgJiYgKHNwYWNlLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgc3BhY2UucHVzaCgge3R5cGU6ICdzcGFjZSd9ICk7XG4gICAgICB9XG4gICAgfSAgICBcblxuICAgIC8vIHdlIG5lZWQgdG8gYWRkIGEgcG9pbnQgb2YgcmUtZW50cnkgdG8gdGhlIGxhc3QgbmVzdGVkIGZvcm1cbiAgICAvLyBmaXJzdCwgbGV0cyBhc3N1bWUgdGhpcyBpcyB0aGUgZm9ybSBpdHNlbGZcbiAgICBsZXQgbGFzdE5lc3RlZCA9IHJlRm9ybTtcbiAgICBcbiAgICBpZihyZUZvcm0uc3BhY2UubGVuZ3RoID4gMCkge1xuICAgICAgLy8gdGhlbiBsb29wIHVudGlsIHRoZSBsYXN0IHJlQ2hpbGQgaXMgZm91bmQgYW5kIG1ha2UgdGhpcyBvdXIgbGFzdCBuZXN0ZWQgZm9ybVxuICAgICAgXG4gICAgICB3aGlsZSAobGFzdE5lc3RlZC5zcGFjZVswXS5oYXNPd25Qcm9wZXJ0eSgncmVDaGlsZCcpKSB7ICAgICAgICBcbiAgICAgICAgbGFzdE5lc3RlZCA9IGxhc3ROZXN0ZWQuc3BhY2VbMF07XG4gICAgICAgIGlmIChsYXN0TmVzdGVkLnNwYWNlLmxlbmd0aCA8IDEpIGJyZWFrOyAvLyBwcmV2ZW50IGVycm9ycyB3aGVuIG5vdGhpbmcgaXMgZm91bmRcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZm9yIG9wZW4gcmUtZW50cmllcywgd2UgbmVlZCB0byBhZGQgYW5vdGhlciBuZXN0aW5nIChzZWUgdUZPUk0gaUZPUk0gZm9yIHJlZmVyZW5jZSlcbiAgICBpZihyZUZvcm0ubGFzdE9wZW4pIHtcbiAgICAgIGxhc3ROZXN0ZWQuc3BhY2UudW5zaGlmdCgge3R5cGU6ICdmb3JtJywgcmVDaGlsZDogdHJ1ZSwgc3BhY2U6IFtdfSApO1xuICAgICAgLy8gdGhlbiBhZGQgdGhlIHJlLWVudHJ5IHBvaW50IHRvIGVpdGhlciBzcGFjZVxuICAgICAgbGFzdE5lc3RlZC5zcGFjZVswXS5zcGFjZS51bnNoaWZ0KCB7dHlwZTogJ3JlRW50cnlQb2ludCd9ICk7XG4gICAgfVxuICAgIGVsc2UgbGFzdE5lc3RlZC5zcGFjZS51bnNoaWZ0KCB7dHlwZTogJ3JlRW50cnlQb2ludCd9ICk7XG5cbiAgICAvLyBsYXN0LCBkZWxldGUgdGhlIG5lc3RlZCBzdHJ1Y3R1cmUsIHdlIGRvbid0IG5lZWQgaXQgYW55bW9yZVxuICAgIGRlbGV0ZSByZUZvcm0ubmVzdGVkO1xuICAgIHJldHVybiByZUZvcm07XG4gIH1cblxuICBzdGF0aWMgZXhwYW5kX3JlRW50cnkoX2Zvcm0sIG9wdGlvbnM9e30pIHtcbiAgICBpZih0eXBlb2YoX2Zvcm0pICE9PSAnc3RyaW5nJykgX2Zvcm0gPSBKU09OLnN0cmluZ2lmeShfZm9ybSk7XG4gICAgY29uc3QgcmVmRm9ybSA9IHRoaXMucGFyc2VMaW5lYXIoX2Zvcm0pO1xuICAgIGxldCB0YXJnZXRGb3JtID0gdGhpcy5wYXJzZUxpbmVhcihfZm9ybSk7XG5cbiAgICAvLyB3ZSBtdXN0IGtlZXAgYSBydW5uaW5nIGluZGV4IHRvIG5vdCBjb25mdXNlIGlkZW50aWNhbCBmb3JtcyB3aGlsZSByZWNvbnN0cnVjdGluZyB0aGUgcmVFbnRyaWVzXG4gICAgLy8gTm90ZTogdGhpcyBzaG91bGQgYmUgZG9uZSBtb3JlIGVmZmljaWVudGx5IGluIHRoZSBmdXR1cmVcbiAgICBsZXQgcnVubmluZ0luZGV4ID0gMDtcbiAgICB0aGlzLnRyYXZlcnNlRm9ybShyZWZGb3JtLCBmdW5jdGlvbihicmFuY2gpIHsgYnJhbmNoLnJ1bm5pbmdJbmRleCA9IHJ1bm5pbmdJbmRleCwgcnVubmluZ0luZGV4Kys7IH0pO1xuICAgIHJ1bm5pbmdJbmRleCA9IDA7XG4gICAgdGhpcy50cmF2ZXJzZUZvcm0odGFyZ2V0Rm9ybSwgZnVuY3Rpb24oYnJhbmNoKSB7IGJyYW5jaC5ydW5uaW5nSW5kZXggPSBydW5uaW5nSW5kZXgsIHJ1bm5pbmdJbmRleCsrOyB9KTtcblxuICAgIHRoaXMudHJhdmVyc2VGb3JtKHJlZkZvcm0sIGZ1bmN0aW9uKHJlZkJyYW5jaCkge1xuXG4gICAgICBpZihyZWZCcmFuY2gudHlwZSA9PT0gJ3JlRW50cnknKSB7XG4gICAgICAgIHRoaXMudHJhdmVyc2VGb3JtKHRhcmdldEZvcm0sIGZ1bmN0aW9uKHRhcmdldEJyYW5jaCkge1xuXG4gICAgICAgICAgaWYoIChKU09OLnN0cmluZ2lmeShyZWZCcmFuY2gpID09PSBKU09OLnN0cmluZ2lmeSh0YXJnZXRCcmFuY2gpKSAmJiBcbiAgICAgICAgICAgICAgKHJlZkJyYW5jaC5ydW5uaW5nSW5kZXggPT09ICh0YXJnZXRCcmFuY2guaGFzT3duUHJvcGVydHkoJ3J1bm5pbmdJbmRleCcpID8gdGFyZ2V0QnJhbmNoLnJ1bm5pbmdJbmRleCA6IG51bGwpKSApIHtcbiAgICAgICAgICAgIHRhcmdldEJyYW5jaCA9IHRoaXMuY29uc3RydWN0TmVzdGVkKHRhcmdldEJyYW5jaCwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gZGVsZXRlIHJ1bm5pbmcgaW5kZXggcHJvcGVydHlcbiAgICB0aGlzLnRyYXZlcnNlRm9ybSh0YXJnZXRGb3JtLCBmdW5jdGlvbihicmFuY2gpIHsgZGVsZXRlIGJyYW5jaC5ydW5uaW5nSW5kZXg7IH0pO1xuXG4gICAgcmV0dXJuIHRhcmdldEZvcm07XG4gIH1cblxuXG59IiwiaW1wb3J0IGNhbGMgZnJvbSAnLi9jb3JlL2ZjYWxjJztcbmltcG9ydCBmb3JtIGZyb20gJy4vY29yZS9mZm9ybSc7XG5pbXBvcnQgZ3JhcGggZnJvbSAnLi9jb3JlL2ZncmFwaCc7XG5cbi8vIGV4cG9ydCB7ZGVmYXVsdCBhcyBjYWxjfSBmcm9tICcuL2NvcmUvZmNhbGMnO1xuLy8gZXhwb3J0IHtkZWZhdWx0IGFzIGZvcm19IGZyb20gJy4vY29yZS9mZm9ybSc7XG4vLyBleHBvcnQge2RlZmF1bHQgYXMgZ3JhcGh9IGZyb20gJy4vY29yZS9mZ3JhcGgnO1xuXG5leHBvcnQgZGVmYXVsdCB7IGNhbGMsIGZvcm0sIGdyYXBoIH07IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IGJveG1vZGVsRDMgZnJvbSAnYm94bW9kZWwtbGF5b3V0LWZvci1kMyc7XG5cbmltcG9ydCB7IHNhdmVTdmcsIHNhdmVJbWcsIHBhZCwgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcic7XG5pbXBvcnQgY2hhcnRGYWN0b3J5LCB7IGZpdENoYXJ0LCB0ZXh0U2l6ZSwgdGV4dFN1YnNjcmlwdCwgY2lyY2xlTGFiZWwgfSBmcm9tICcuLi8uLi9jb21tb24vZDMtaGVscGVyJztcblxuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vZDMtc3R5bGVzLmpzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEM0dyYXBoIHtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICAgICAgICAgICAgICAgICAgICBWaXN1YWxpemF0aW9uIFNldHVwXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNvbnN0cnVjdG9yKGdyYXBoVHlwZSwgZGF0YSwgb3B0cywgLi4uYXJncykge1xuICAgICAgICAvLyBjcmVhdGUgYmFzaWMgc3ZnLXN0cnVjdHVyZSBmcm9tIGNoYXJ0RmFjdG9yeSBhbmQgbWVyZ2Ugb3B0aW9ucyB3aXRoIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgY29uc3QgcHJvdG8gPSBjaGFydEZhY3RvcnkoIHsgXG4gICAgICAgICAgICAuLi57IG1hcmdpbjogeyBsZWZ0OiA1MCwgcmlnaHQ6IDUwLCB0b3A6IDUwLCBib3R0b206IDUwIH0sIFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHsgbGVmdDogMTAsIHJpZ2h0OiAxMCwgdG9wOiAxMCwgYm90dG9tOiAxMCB9LFxuICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IHsgbGVmdDogMCwgcmlnaHQ6IDAsIHRvcDogMCwgYm90dG9tOiAwIH0sXG4gICAgICAgICAgICAgICAgc3R5bGVDbGFzczogJ2Jhc2ljJyB9LFxuICAgICAgICAgICAgLi4ub3B0c1xuICAgICAgICB9ICk7XG5cbiAgICAgICAgLy8gbWVyZ2UgdGhpcyBncmFwaCB3aXRoIHRoZSBjaGFydCBzdHJ1Y3R1cmVcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwcm90byk7XG4gICAgICAgIC8vIGNhbGN1bGF0ZSBpbm5lciBkaW1lbnNpb25zIG9mIHRoZSBzdmctY2hhcnRcbiAgICAgICAgdGhpcy5pbm5lckhlaWdodCA9IHRoaXMuaGVpZ2h0IC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tIC0gdGhpcy5wYWRkaW5nLnRvcCAtIHRoaXMucGFkZGluZy5ib3R0b207XG4gICAgICAgIHRoaXMuaW5uZXJXaWR0aCA9IHRoaXMud2lkdGggLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQgLSB0aGlzLnBhZGRpbmcubGVmdCAtIHRoaXMucGFkZGluZy5yaWdodDtcblxuICAgICAgICAvLyBjYWxsIHRoZSBhcHByb3ByaWF0ZSBtZXRob2QgdG8gYnVpbGQgdGhlIGdyYXBoXG4gICAgICAgIHRoaXMuY29uc3RydWN0b3JbZ3JhcGhUeXBlXS5jYWxsKHRoaXMsIGRhdGEsIC4uLmFyZ3MpO1xuICAgIH1cblxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyAgICAgICAgICAgICAgICBEZXB0aCBUcmVlIHZpc3VhbGl6YXRpb25cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgc3RhdGljIHRyZWUoZGF0YSkge1xuICAgICAgICBjb25zdCBjaGFydCA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICAvLyBjcmVhdGUgYSBkMy1oaWVyYXJjaHkgZnJvbSBvdXIgZm9ybS1qc29uXG4gICAgICAgIGNvbnN0IHJvb3QgPSBkMy5oaWVyYXJjaHkoZGF0YSwgZCA9PiBkLnNwYWNlKTtcblxuICAgICAgICAvLyBzZXQgdXAgZGVzaWduIHZhcmlhYmxlc1xuICAgICAgICBjb25zdCBkZXNpZ24gPSBzdHlsZXMudHJlZVt0aGlzLnN0eWxlQ2xhc3NdO1xuICAgICAgICBjb25zdCBbbm9kZVNpemUsIG5vZGVTZXBdID0gW2Rlc2lnbi5ub2RlU2l6ZSwgZGVzaWduLm5vZGVTZXBhcmF0aW9uXTtcbiAgICAgICAgY29uc3QgW2ZvbnRTaXplLCBmb250XSA9IFtkZXNpZ24uZm9udC5zaXplLCBkZXNpZ24uZm9udC5mYW1pbHldO1xuXG4gICAgICAgIHRoaXMucGFkZGluZyA9IHsgbGVmdDogMTAsIHJpZ2h0OiAxMCwgdG9wOiAxMCwgYm90dG9tOiAxMCB9O1xuXG4gICAgICAgIHJvb3QuZHggPSBub2RlU2l6ZS53ICsgbm9kZVNlcC5oejtcbiAgICAgICAgcm9vdC5keSA9IHRoaXMud2lkdGggLyAocm9vdC5oZWlnaHQgKyAxKTtcblxuICAgICAgICAvLyBkZWZpbmUgdHJlZSBsYXlvdXRcbiAgICAgICAgY29uc3QgbGF5b3V0ID0gZDMudHJlZSgpXG4gICAgICAgICAgICAubm9kZVNpemUoW1xuICAgICAgICAgICAgICAgIHJvb3QuZHgsXG4gICAgICAgICAgICAgICAgcm9vdC5keVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIC5zZXBhcmF0aW9uKChhLGIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5wYXJlbnQgPT0gYi5wYXJlbnQgPyAxIDogMjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0cmVlID0gbGF5b3V0KHJvb3QpO1xuXG4gICAgICAgIC8vIGNvbXB1dGUgbWluL21heCB4LXZhbHVlc1xuICAgICAgICBsZXQgeDAgPSBJbmZpbml0eTtcbiAgICAgICAgbGV0IHgxID0gLXgwO1xuICAgICAgICB0cmVlLmVhY2goZCA9PiB7XG4gICAgICAgICAgICBpZiAoZC54ID4geDEpIHgxID0gZC54O1xuICAgICAgICAgICAgaWYgKGQueCA8IHgwKSB4MCA9IGQueDtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbXB1dGUgbmV3IGhlaWdodCBiYXNlZCBvbiB0aGUgZGlmZmVyZW5jZSBvZiBtaW4vbWF4IHgtdmFsdWVzIG9mIHRyZWUgbm9kZXMgKyB0d2ljZSB0aGUgcGFkZGluZ1xuICAgICAgICBjb25zdCByb290VW5tYXJrZWQgPSByb290LmRhdGEudW5tYXJrZWQ7XG4gICAgICAgIGNvbnN0IHRpY2twYWRkaW5nID0gbm9kZVNpemUuaCoxLjg7XG4gICAgICAgIGNvbnN0IGF4aXNIZWlnaHQgPSB0aWNrcGFkZGluZzsgLy8zMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAoeDEgLSB4MCkgKyB0aGlzLnBhZGRpbmcudG9wKjIgKyBub2RlU2l6ZS5oKzIgKyBheGlzSGVpZ2h0O1xuXG4gICAgICAgIC8vIHNldHVwIHN2ZyBjb250YWluZXJcbiAgICAgICAgdGhpcy5zdmdcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMud2lkdGgpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5oZWlnaHQpO1xuICAgICAgICBzdHlsZXMuY2xlYXJEZWZhdWx0cyh0aGlzLnN2Zyk7IC8vIGNsZWFyIGRlZmF1bHQgc3R5bGVzIGZvciBzdmcgZXhwb3J0XG5cbiAgICAgICAgLy8gc2V0dXAgYmFzaWMgY2hhcnQgc3RydWN0dXJlXG4gICAgICAgIGNoYXJ0XG4gICAgICAgICAgICAuY2xhc3NlZCgnZ3JhcGgtdHJlZScsIHRydWUpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0aGlzLnBhZGRpbmcubGVmdCArIG5vZGVTaXplLncvMiArIChyb290LmRhdGEudW5tYXJrZWQgPyAtcm9vdC5keSA6IDApfSwke3RoaXMucGFkZGluZy50b3AgLSB4MCArIG5vZGVTaXplLmgvMn0pYCk7XG4gICAgICAgIFxuICAgICAgICAvLyBhZGQgdmVydGljYWwgYXhpcyBsaW5lcyBmb3IgZGVwdGhcblxuICAgICAgICBjb25zdCByb290SGVpZ2h0cyA9IGQzLnJhbmdlKHJvb3QuaGVpZ2h0ICsgKHJvb3RVbm1hcmtlZCA/IDA6MSkpO1xuXG4gICAgICAgIHRoaXMuZGVwdGhTY2FsZSA9IGQzLnNjYWxlT3JkaW5hbCgpXG4gICAgICAgICAgICAuZG9tYWluKCByb290SGVpZ2h0cyApXG4gICAgICAgICAgICAucmFuZ2UoIHJvb3RIZWlnaHRzLm1hcChpID0+IChpKyhyb290VW5tYXJrZWQgPyAxOjApKSpyb290LmR5KSApO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGVwdGhBeGlzID0gZDMuYXhpc0JvdHRvbSgpXG4gICAgICAgICAgICAuc2NhbGUodGhpcy5kZXB0aFNjYWxlKVxuICAgICAgICAgICAgLnRpY2tTaXplSW5uZXIoLSh4MS14MCkpXG4gICAgICAgICAgICAudGlja1NpemVPdXRlcigwKVxuICAgICAgICAgICAgLnRpY2tQYWRkaW5nKHRpY2twYWRkaW5nKVxuICAgICAgICAgICAgLnRpY2tWYWx1ZXMoIHRoaXMuZGVwdGhTY2FsZS5kb21haW4oKS5tYXAoaSA9PiBcbiAgICAgICAgICAgICAgICAodGhpcy5kZXB0aFNjYWxlLmRvbWFpbigpLmxlbmd0aCA8IDE1KSA/ICdEZXB0aCAnK2kgOiBpXG4gICAgICAgICAgICApICk7XG5cbiAgICAgICAgY29uc3QgYXhpcyA9IGNoYXJ0LmFwcGVuZCgnZycpXG4gICAgICAgICAgICAuY2xhc3NlZCgnZGVwdGhBeGlzJywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsICR7eDF9KWApXG4gICAgICAgICAgICAuY2FsbChkZXB0aEF4aXMpO1xuICAgICAgICBheGlzLnNlbGVjdCgnLmRvbWFpbicpLnJlbW92ZSgpO1xuICAgICAgICBcblxuICAgICAgICAvLyBhZGQgZ3JvdXBzIGZvciBsaW5rcyBhbmQgbm9kZXNcblxuICAgICAgICBjb25zdCBsaW5rcyA9IGNoYXJ0LnNlbGVjdEFsbCgnLmxpbmsnKVxuICAgICAgICAgICAgLmRhdGEodHJlZS5saW5rcygpKSBcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoJ2xpbmsnLCB0cnVlKVxuXG4gICAgICAgIGNvbnN0IG5vZGVzID0gY2hhcnQuc2VsZWN0QWxsKCcubm9kZScpXG4gICAgICAgICAgICAuZGF0YSh0cmVlLmRlc2NlbmRhbnRzKCkpXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdub2RlJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC55fSwke2QueH0pYCk7XG5cbiAgICAgICAgaWYgKHJvb3RVbm1hcmtlZCkge1xuICAgICAgICAgICAgbGlua3MuZmlsdGVyKGQgPT4gZC5zb3VyY2UuZGVwdGggPT09IDApXG4gICAgICAgICAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBub2Rlcy5maWx0ZXIoZCA9PiBkLmRlcHRoID09PSAwKVxuICAgICAgICAgICAgICAgIC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdlbmVyYXRlIGxpbmsgcGFydGl0aW9uIHNlbGVjdGlvbnNcbiAgICAgICAgY29uc3QgbGlua1BhcnRpdGlvbnMgPSByZXNvbHZlTGlua3ModHJlZSwgbGlua3MpO1xuICAgICAgICBjb25zdCBbcmVDaGlsZExpbmssIHJlUG9pbnRMaW5rXSA9IGxpbmtQYXJ0aXRpb25zO1xuXG4gICAgICAgIC8vIGdlbmVyYXRlIG5vZGUgcGFydGl0aW9uIHNlbGVjdGlvbnNcbiAgICAgICAgY29uc3Qgbm9kZVBhcnRpdGlvbnMgPSByZXNvbHZlTm9kZXModHJlZSwgbm9kZXMpO1xuICAgICAgICBjb25zdCBbbGVhdmVzLCBzZXRzLCBmb3JtcywgcmVFbnRyaWVzLCByZUNoaWxkcywgcmVQb2ludHMsIGVsZW1lbnRzLCB2YXJzLCBjb25zdHMsIHVuY2xlYXJdID0gbm9kZVBhcnRpdGlvbnM7XG5cbiAgICAgICAgLy8gY3VydmVkIGxpbmUgZ2VuZXJhdG9yXG4gICAgICAgIGNvbnN0IGxpbmUgPSBkMy5saW5lKCkuY3VydmUoZDMuY3VydmVCYXNpcyk7XG5cbiAgICAgICAgbGlua3NcbiAgICAgICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkJywgZDMubGlua0hvcml6b250YWwoKVxuICAgICAgICAgICAgICAgICAgICAueChkID0+IGQueSlcbiAgICAgICAgICAgICAgICAgICAgLnkoZCA9PiBkLngpKTtcblxuICAgICAgICBub2Rlcy5maWx0ZXIoZCA9PiAhZC5kYXRhLnVubWFya2VkKVxuICAgICAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgICAgIC5hdHRyKCdyJywgbm9kZVNpemUudy8yKVxuICAgICAgICByZVBvaW50cy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCBub2RlU2l6ZS53LzIgKyAyKVxuICAgICAgICAgICAgLnRleHQoZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHAgPSBkLnBhcmVudDtcbiAgICAgICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUocC5kYXRhLnR5cGUgIT09ICdyZUVudHJ5Jykge1xuICAgICAgICAgICAgICAgICAgICBwID0gcC5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudGVyID4gMTAwMCkgcmV0dXJuIG51bGw7IC8vIHNlY3VyaXR5XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIChwLmRhdGEucmVFdmVuICE9PSAndW5kZWZpbmVkJykgPyAocC5kYXRhLnJlRXZlbiA/ICcyfHJ8JyA6ICcyfHJ8KzEnKSA6ICcnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZWxlbWVudHMuc2VsZWN0QWxsKCdjaXJjbGUnKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCAobm9kZVNpemUudy8yKS8yKTtcblxuICAgICAgICBub2Rlc1xuICAgICAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneCcsIG5vZGVTaXplLncvMiArIDIpXG4gICAgICAgIFxuICAgICAgICB2YXJzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgICAgICAuY2FsbCh0ZXh0U3Vic2NyaXB0KGQgPT4gZC5kYXRhLnN5bWJvbCkpO1xuICAgICAgICBjb25zdHMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gYD0gJHtkLmRhdGEudmFsdWV9YCk7XG4gICAgICAgIHVuY2xlYXIuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gYC8ke2QuZGF0YS5zeW1ib2x9L2ApO1xuXG4gICAgICAgIHNldHMuZmlsdGVyKGQgPT4gZC5jaGlsZHJlbilcbiAgICAgICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgICAgICAuY2xhc3NlZCgnaW5uZXInLHRydWUpXG4gICAgICAgICAgICAuYXR0cigncicsIChub2RlU2l6ZS53LzIpLzIpO1xuXG5cbiAgICAgICAgLy8gYXBwbHkgYWxsIHN0eWxlLXJlbGF0ZWQgYXR0cmlidXRlcyB0byB0aGUgc2VsZWN0aW9uc1xuICAgICAgICBkZXNpZ24uYXBwbHlBeGlzU3R5bGVzKGF4aXMpO1xuICAgICAgICBkZXNpZ24uYXBwbHlMaW5rU3R5bGVzKGxpbmtzLCBsaW5rUGFydGl0aW9ucyk7XG4gICAgICAgIGRlc2lnbi5hcHBseU5vZGVTdHlsZXMobm9kZXMsIG5vZGVQYXJ0aXRpb25zKTtcblxuICAgICAgICBmaXRDaGFydChjaGFydCwgdGhpcy5wYWRkaW5nKTtcblxuICAgICAgICAvLyBkZWJ1Z2dpbmc6XG4gICAgICAgIC8vIFt0aGlzLnJvb3QsIHRoaXMubGF5b3V0LCB0aGlzLmNoYXJ0LCB0aGlzLnRyZWUsIHRoaXMuZGVzaWduXSA9IFxuICAgICAgICAvLyAgICAgW3Jvb3QsIGxheW91dCwgY2hhcnQsIHRyZWUsIGRlc2lnbl07XG4gICAgfVxuXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vICAgICAgICAgICAgICAgIENpcmNsZSBwYWNraW5nIHZpc3VhbGl6YXRpb25cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgc3RhdGljIHBhY2soZGF0YSkge1xuICAgICAgICBjb25zdCBjaGFydCA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICAvLyBjcmVhdGUgYSBkMy1oaWVyYXJjaHkgZnJvbSBvdXIgZm9ybS1qc29uXG4gICAgICAgIHN0eWxlcy5jbGVhckRlZmF1bHRzKHRoaXMuc3ZnKTsgLy8gY2xlYXIgZGVmYXVsdCBzdHlsZXMgZm9yIHN2ZyBleHBvcnRcblxuICAgICAgICBjb25zdCByb290ID0gZDMuaGllcmFyY2h5KGRhdGEsIGQgPT4gZC5zcGFjZSlcbiAgICAgICAgICAgIC5zdW0oZCA9PiBkLmNoaWxkcmVuID8gMCA6IDEpO1xuXG4gICAgICAgIC8vIHNldCB1cCBkZXNpZ24gdmFyaWFibGVzXG4gICAgICAgIGNvbnN0IGRlc2lnbiA9IHN0eWxlcy5wYWNrW3RoaXMuc3R5bGVDbGFzc107XG4gICAgICAgIGNvbnN0IFtyYWRpdXMsIHBhZGRpbmddID0gW2Rlc2lnbi5yYWRpdXMsIGRlc2lnbi5wYWRkaW5nXTtcbiAgICAgICAgY29uc3QgW2ZvbnRTaXplLCBmb250XSA9IFtkZXNpZ24uZm9udC5zaXplLCBkZXNpZ24uZm9udC5mYW1pbHldO1xuXG4gICAgICAgIC8vIGRlZmluZSBwYWNrIGxheW91dFxuICAgICAgICBjb25zdCBsYXlvdXQgPSBkMy5wYWNrKClcbiAgICAgICAgLnBhZGRpbmcoZCA9PiB7XG4gICAgICAgICAgICBsZXQgcGFkID0gcGFkZGluZztcbiAgICAgICAgICAgIGlmIChkLmRhdGEudHlwZSA9PT0gJ2Zvcm0nICYmIGQuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGQuY2hpbGRyZW5bMF0uZGF0YS50eXBlID09PSAnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgIHBhZCA9IHBhZCAqIDAuNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkLmRhdGEudW5tYXJrZWQgJiYgZC5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHBhZCA9IDA7XG4gICAgICAgICAgICByZXR1cm4gcGFkO1xuICAgICAgICB9KVxuICAgICAgICAucmFkaXVzKGQgPT4ge1xuICAgICAgICAgICAgbGV0IHJhZCA9IHJhZGl1cztcbiAgICAgICAgICAgIGlmKHR5cGVvZihkLmRhdGEuc3ltYm9sKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByYWQgPSB0ZXh0U2l6ZShkLmRhdGEuc3ltYm9sLCBmb250U2l6ZSwgZm9udCkud2lkdGggLzI7XG4gICAgICAgICAgICAgICAgaWYoZC5kYXRhLnR5cGUgPT09ICd1bmNsZWFyJykgcmFkICs9IHBhZGRpbmcqMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZC5kYXRhLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmFkID0gdGV4dFNpemUoZC5kYXRhLnZhbHVlKycnLCBmb250U2l6ZSwgZm9udCkud2lkdGggLzI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGQuZGF0YS5jaGlsZHJlbiB8fCBkLmRhdGEudHlwZSA9PT0gJ3JlRW50cnlQb2ludCcgfHzCoGQuZGF0YS50eXBlID09PSAnc3BhY2UnKSByYWQgPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHJhZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHBhY2sgPSBsYXlvdXQocm9vdCk7XG5cbiAgICAgICAgLy8gc2V0dXAgYmFzaWMgY2hhcnQgc3RydWN0dXJlXG4gICAgICAgIGNoYXJ0LmF0dHIoJ2NsYXNzJywgJ2dyYXBoLXBhY2snKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtwYWNrLnIgKyB0aGlzLnBhZGRpbmcubGVmdH0sJHtwYWNrLnIgKyB0aGlzLnBhZGRpbmcudG9wfSlgKTtcblxuICAgICAgICBjb25zdCBub2RlcyA9IGNoYXJ0LnNlbGVjdEFsbCgnLm5vZGUnKVxuICAgICAgICAgICAgLmRhdGEocGFjay5kZXNjZW5kYW50cygpKVxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnbm9kZScsIHRydWUpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueH0sJHtkLnl9KWApO1xuXG4gICAgICAgIC8vIGdlbmVyYXRlIG5vZGUgcGFydGl0aW9uIHNlbGVjdGlvbnNcbiAgICAgICAgY29uc3Qgbm9kZVBhcnRpdGlvbnMgPSByZXNvbHZlTm9kZXMocGFjaywgbm9kZXMpO1xuICAgICAgICBjb25zdCBbbGVhdmVzLCBzZXRzLCBmb3JtcywgcmVFbnRyaWVzLCByZUNoaWxkcywgcmVQb2ludHMsIGVsZW1lbnRzLCB2YXJzLCBjb25zdHMsIHVuY2xlYXJdID0gbm9kZVBhcnRpdGlvbnM7XG5cbiAgICAgICAgLy8gZGVmaW5lIGRldGFpbGxlZCBzdHJ1Y3R1cmUvbG9naWNcblxuICAgICAgICBzZXRzLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgICAgIC5hdHRyKCdyJywgZCA9PiBkLnIpO1xuICAgICAgICB2YXJzLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuY2FsbCh0ZXh0U3Vic2NyaXB0KGQgPT4gZC5kYXRhLnN5bWJvbCkpO1xuXG4gICAgICAgIGNvbnN0cy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBkLmRhdGEudmFsdWUpO1xuXG4gICAgICAgIHVuY2xlYXIuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IFxuICAgICAgICAgICAgYHNrZXdYKC0zMCkgdHJhbnNsYXRlKCR7LShkLnIgLSBwYWRkaW5nKX0sXG4gICAgICAgICAgICAkey0odGV4dFNpemUoJ3gnLGZvbnRTaXplLCBmb250KS5oZWlnaHQgKyBwYWRkaW5nKjIpLzJ9KWApXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBkID0+IGQucioyIC0gcGFkZGluZyoyKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGQgPT4gKHRleHRTaXplKCd4Jyxmb250U2l6ZSwgZm9udCkuaGVpZ2h0ICsgcGFkZGluZyoyKSlcbiAgICAgICAgdW5jbGVhci5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmNhbGwodGV4dFN1YnNjcmlwdChkID0+IGQuZGF0YS5zeW1ib2wpKTtcblxuICAgICAgICByZVBvaW50c1xuICAgICAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgICAgIC5hdHRyKCdyJywgMS41KTtcblxuICAgICAgICByZUVudHJpZXMuZmlsdGVyKGQgPT4gZC5kYXRhLnJlRXZlbiAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAuY2FsbChjaXJjbGVMYWJlbCggZCA9PiBkLmRhdGEucmVFdmVuID8gJzJ8cnwnIDogJzJ8cnwrMScsIGRlc2lnbi5mb250Q29udGV4dC5zaXplLCBkZXNpZ24uZm9udENvbnRleHQuZmFtaWx5ICkpO1xuXG4gICAgICAgIC8vIGFwcGx5IGFsbCBzdHlsZS1yZWxhdGVkIGF0dHJpYnV0ZXMgdG8gdGhlIHNlbGVjdGlvbnNcbiAgICAgICAgZGVzaWduLmFwcGx5Tm9kZVN0eWxlcyhub2Rlcywgbm9kZVBhcnRpdGlvbnMsIGNoYXJ0KTtcblxuICAgICAgICBmaXRDaGFydChjaGFydCwgdGhpcy5wYWRkaW5nKTtcblxuICAgICAgICAvLyBkZWJ1Z2dpbmc6XG4gICAgICAgIC8vIFt0aGlzLnJvb3QsIHRoaXMubGF5b3V0LCB0aGlzLmNoYXJ0LCB0aGlzLnBhY2ssIHRoaXMuZGVzaWduXSA9IFxuICAgICAgICAvLyAgICAgW3Jvb3QsIGxheW91dCwgY2hhcnQsIHBhY2ssIGRlc2lnbl07XG4gICAgfVxuXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIEJveG1vZGVsIHZpc3VhbGl6YXRpb24gKFNwZW5jZXItQnJvd24gaG9vayBub3RhdGlvbilcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgc3RhdGljIGdzYmhvb2tzKGRhdGEpIHtcbiAgICAgICAgY29uc3QgY2hhcnQgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgLy8gY3JlYXRlIGEgZDMtaGllcmFyY2h5IGZyb20gb3VyIGZvcm0tanNvblxuICAgICAgICBzdHlsZXMuY2xlYXJEZWZhdWx0cyh0aGlzLnN2Zyk7IC8vIGNsZWFyIGRlZmF1bHQgc3R5bGVzIGZvciBzdmcgZXhwb3J0XG5cbiAgICAgICAgY29uc3Qgcm9vdCA9IGQzLmhpZXJhcmNoeShkYXRhLCBkID0+IGQuc3BhY2UpXG4gICAgICAgICAgICAuc3VtKGQgPT4gZC5zcGFjZSA/IDAgOiAxKTtcblxuICAgICAgICB0aGlzLnN0eWxlQ2xhc3MgPSAnYmFzaWMnO1xuICAgICAgICBjb25zdCBjb21wYWN0UmVFbnRyeSA9ICh0aGlzLmNvbXBhY3RDaGVja2VkICE9PSBudWxsKSA/IHRoaXMuY29tcGFjdENoZWNrZWQgOiB0cnVlO1xuXG4gICAgICAgIC8vIHNldCB1cCBkZXNpZ24gdmFyaWFibGVzXG4gICAgICAgIGNvbnN0IGRlc2lnbiA9IHN0eWxlcy5ib3htb2RlbFt0aGlzLnN0eWxlQ2xhc3NdO1xuICAgICAgICBjb25zdCB7ZWxlbU1hcmdpbiwgZm9ybU1hcmdpbiwgZm9ybVBhZGRpbmcsIG1pbkZvcm1TaXplLCBtYXhMaW5lV2lkdGgsIGZvbnRWYXIsIGZvbnRDb25zdCwgZm9udENvbnRleHQsIGxhYmVsc30gPSB7Li4uZGVzaWdufTtcbiAgICAgICAgY29uc3QgdW5jbGVhclBhZCA9IHtoejogZWxlbU1hcmdpbi5oei8yLCB2dDogZWxlbU1hcmdpbi52dH07XG5cbiAgICAgICAgLy8gZGVmaW5lIGJveG1vZGVsIGxheW91dFxuICAgICAgICBjb25zdCBsYXlvdXQgPSBib3htb2RlbEQzKClcbiAgICAgICAgICAgIC52QWxpZ24oJ2JvdHRvbScpXG4gICAgICAgICAgICAuZWRnZU1hcmdpbnMoZCA9PiAhKGlzQ29udGFpbmVyKGQpICYmICFkLnBhcmVudC5wYXJlbnQgJiYgZC5wYXJlbnQuZGF0YS51bm1hcmtlZCkgKVxuICAgICAgICAgICAgLmlzQ29udGFpbmVyKGQgPT4gaXNDb250YWluZXIoZCkpXG4gICAgICAgICAgICAucGFkZGluZyhkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcCA9IHtsZWZ0OiAwLCByaWdodDogMCwgdG9wOiAwLCBib3R0b206IDB9O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChpc0NvbnRhaW5lcihkKSkge1xuICAgICAgICAgICAgICAgICAgICBwLmxlZnQgPSBwLnJpZ2h0ID0gZm9ybVBhZGRpbmcuaHo7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkLmRhdGEudHlwZSA9PT0gJ3JlRW50cnknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gZC5kYXRhLnJlRXZlbiA/IGxhYmVscy5yZUV2ZW4gOiBsYWJlbHMucmVPZGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eHRTeiA9IHRleHRTaXplKHRleHQsIGZvbnRDb250ZXh0LnNpemUsIGZvbnRDb250ZXh0LmZhbWlseSwgZm9udENvbnRleHQuc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcC5ib3R0b20gPSB0eHRTei5oZWlnaHQgKyBlbGVtTWFyZ2luLnZ0LzI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXJnaW4oZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG0gPSB7bGVmdDogMCwgcmlnaHQ6IDAsIHRvcDogMCwgYm90dG9tOiAwfTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoaXNDb250YWluZXIoZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbS50b3AgPSBmb3JtTWFyZ2luLnRvcDtcbiAgICAgICAgICAgICAgICAgICAgbS5yaWdodCA9IGZvcm1NYXJnaW4ucmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkLmRlcHRoID09PSAwKSBtLnRvcCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkLmRhdGEucmVDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQucGFyZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkgbS5yaWdodCA9IG1pbkZvcm1TaXplLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQucGFyZW50LmRhdGEubGFzdE9wZW4pIG0udG9wID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wYWN0UmVFbnRyeSAmJiBkLnBhcmVudC5kYXRhLnJlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShkLmNoaWxkcmVuWzBdLmRhdGEudHlwZSA9PT0gJ3JlRW50cnlQb2ludCcgJiYgcmVQYXJlbnRMYXN0T3BlbihkKSkpIG0udG9wID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkLmRhdGEudHlwZSAhPT0gJ3JlRW50cnlQb2ludCcpIHsgLy8gYWxsIG90aGVyIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIG0udG9wID0gbS5ib3R0b20gPSBlbGVtTWFyZ2luLnZ0O1xuICAgICAgICAgICAgICAgICAgICBtLmxlZnQgPSBtLnJpZ2h0ID0gZWxlbU1hcmdpbi5oejtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvbnRWYXIuc3R5bGUgPT0gJ2l0YWxpYycpIG0ucmlnaHQgKz0gMTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZC5kYXRhLnR5cGUgPT09ICd1bmNsZWFyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbS5ib3R0b20gPSAoZC5kYXRhLnN5bWJvbC5zcGxpdCgnXycpLmxlbmd0aCA+IDEpID8gLTYgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbS5ib3R0b20gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGQuZGF0YS50eXBlID09PSAncmVFbnRyeVBvaW50Jykge1xuICAgICAgICAgICAgICAgICAgICBtLnJpZ2h0ID0gZm9ybU1hcmdpbi5yaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zcGFuSGVpZ2h0KGQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzcGFuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBhY3RSZUVudHJ5ICYmIGQuZGF0YS5yZUNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc3BhbjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1pbkNvbnRhaW5lclNpemUoZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHcgPSBtaW5Gb3JtU2l6ZS53aWR0aDtcbiAgICAgICAgICAgICAgICBsZXQgaCA9IG1pbkZvcm1TaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICBpZiAoZC5kYXRhLnJlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQuY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIGQuY2hpbGRyZW5bMF0uZGF0YS50eXBlID09PSAncmVFbnRyeVBvaW50Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVQYXJlbnRMYXN0T3BlbihkKSkgdyA9IG1pbkZvcm1TaXplLndpZHRoLzI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHt3aWR0aDogdywgaGVpZ2h0OiBofTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1heExpbmVXaWR0aChkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdyA9IG1heExpbmVXaWR0aDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdztcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm5vZGVTaXplKGQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB3ID0gMCwgaCA9IDA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGlzVGV4dChkKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdHh0U3ogPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZC5kYXRhLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndmFyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dFN6ID0gdGV4dFNpemUoZC5kYXRhLnN5bWJvbCwgZm9udFZhci5zaXplLCBmb250VmFyLmZhbWlseSwgZm9udFZhci5zdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ID0gdHh0U3oud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoID0gdHh0U3ouaGVpZ2h0ICogMC43O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3VuY2xlYXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0U3ogPSB0ZXh0U2l6ZShkLmRhdGEuc3ltYm9sLCBmb250VmFyLnNpemUsIGZvbnRWYXIuZmFtaWx5LCAnbm9ybWFsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ID0gdHh0U3oud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoID0gdHh0U3ouaGVpZ2h0ICogMC43O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3ICs9IHNrZXdEaWZmKChoICsgdW5jbGVhclBhZC52dCoyKSkqMiArIHVuY2xlYXJQYWQuaHoqMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGggKz0gdW5jbGVhclBhZC52dCoyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NvbnN0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dFN6ID0gdGV4dFNpemUoZC5kYXRhLnZhbHVlLCBmb250Q29uc3Quc2l6ZSwgZm9udENvbnN0LmZhbWlseSwgZm9udENvbnN0LnN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHcgPSB0eHRTei53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSB0eHRTei5oZWlnaHQgKiAwLjc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge3dpZHRoOiB3LCBoZWlnaHQ6IGh9O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGJveG1vZGVsID0gbGF5b3V0KHJvb3QpO1xuXG4gICAgICAgIC8vIHNldHVwIGJhc2ljIGNoYXJ0IHN0cnVjdHVyZVxuICAgICAgICBjaGFydC5hdHRyKCdjbGFzcycsICdncmFwaC1ib3htb2RlbCcpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RoaXMucGFkZGluZy5sZWZ0fSwke3RoaXMucGFkZGluZy50b3B9KWApO1xuXG4vLyBjaGFydC5hdHRyKCd3aWR0aCcsJzEwMCUnKS5hdHRyKCdoZWlnaHQnLCcxMDAlJykuc3R5bGUoJ2ZpbGwnLCdyZ2JhKDI1NSwwLDAsLjIpJyk7XG5cbiAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGFydC5zZWxlY3RBbGwoJy5ub2RlJylcbiAgICAgICAgICAgIC5kYXRhKGJveG1vZGVsLmRlc2NlbmRhbnRzKCkpXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdub2RlJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54MH0sJHtkLnkwfSlgKTtcblxuICAgICAgICAvLyBnZW5lcmF0ZSBub2RlIHBhcnRpdGlvbiBzZWxlY3Rpb25zXG4gICAgICAgIGNvbnN0IG5vZGVQYXJ0aXRpb25zID0gcmVzb2x2ZU5vZGVzKGJveG1vZGVsLCBub2Rlcyk7XG4gICAgICAgIGNvbnN0IFtsZWF2ZXMsIHNldHMsIGZvcm1zLCByZUVudHJpZXMsIHJlQ2hpbGRzLCByZVBvaW50cywgZWxlbWVudHMsIHZhcnMsIGNvbnN0cywgdW5jbGVhcl0gPSBub2RlUGFydGl0aW9ucztcblxuICAgICAgICAvLyBkZWZpbmUgZGV0YWlsbGVkIHN0cnVjdHVyZS9sb2dpY1xuXG4gICAgICAgIGZvcm1zLmFwcGVuZCgncG9seWxpbmUnKSAvLy5maWx0ZXIoZCA9PiAhZC5kYXRhLnVubWFya2VkKS5hcHBlbmQoJ3BvbHlsaW5lJylcbiAgICAgICAgICAgIC5hdHRyKCdwb2ludHMnLCBkID0+IGAwLDAgJHtkLngxLWQueDB9LDAgJHtkLngxLWQueDB9LCR7ZC55MS1kLnkwfWApO1xuICAgICAgICByZUVudHJpZXMuYXBwZW5kKCdwb2x5bGluZScpXG4gICAgICAgICAgICAuYXR0cigncG9pbnRzJywgZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdyA9IGQueDEtZC54MDtcbiAgICAgICAgICAgICAgICBjb25zdCBoID0gZC55MS1kLnkwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlSCA9IG1pbkZvcm1TaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDAsMCAke3d9LDAgJHt3fSwke2h9IDAsJHtofSAwLCR7aC1yZUh9YDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGQgPT4gZC5kYXRhLmxhc3RPcGVuKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdwb2ludHMnLCBkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdyA9IGQueDEtZC54MDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaCA9IGQueTEtZC55MDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVIID0gbWluRm9ybVNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7d30sJHtoLXJlSH0gJHt3fSwke2h9IDAsJHtofSAwLCR7aC1yZUh9YDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgcmVFbnRyaWVzLmZpbHRlcihkID0+IGQuZGF0YS5yZUV2ZW4gIT09ICd1bmRlZmluZWQnKS5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2xhYmVsJywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoMCwke2QueTEtZC55MH0pYClcbiAgICAgICAgICAgIC5hdHRyKCd4JyxkID0+IDQgKVxuICAgICAgICAgICAgLmF0dHIoJ3knLGQgPT4gLTUgKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBkLmRhdGEucmVFdmVuID8gbGFiZWxzLnJlRXZlbiA6IGxhYmVscy5yZU9kZCk7XG5cbiAgICAgICAgY29uc3QgdW5jbFR4dFNpemUgPSBkID0+IHRleHRTaXplKGQuZGF0YS5zeW1ib2wsIGZvbnRWYXIuc2l6ZSwgZm9udFZhci5mYW1pbHksICdub3JtYWwnKTtcbiAgICAgICAgY29uc3QgdW5jbERpZmYgPSBkID0+IHNrZXdEaWZmKCAodW5jbFR4dFNpemUoZCkuaGVpZ2h0KjAuNyArIHVuY2xlYXJQYWQudnQqMikgKTtcblxuICAgICAgICB1bmNsZWFyLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAuY2xhc3NlZCgndW5jbGVhck1hcmsnLHRydWUpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgc2tld1goLTMwKSB0cmFuc2xhdGUoJHt1bmNsRGlmZihkKX0sJHswfSlgKVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgZCA9PiAoKGQueDEtZC54MCkgLSB1bmNsRGlmZihkKSApKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGQgPT4gKGQueTEtZC55MCkgKVxuICAgICAgICB1bmNsZWFyLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneCcsZCA9PiB1bmNsRGlmZihkKSArIHVuY2xlYXJQYWQuaHogKVxuICAgICAgICAgICAgLmF0dHIoJ3knLGQgPT4gKGQueTEtZC55MCkgLXVuY2xlYXJQYWQudnQgIC0gKChkLmRhdGEuc3ltYm9sLnNwbGl0KCdfJykubGVuZ3RoID4gMSkgPyA2IDogMCkgKVxuICAgICAgICAgICAgLmNhbGwodGV4dFN1YnNjcmlwdChkID0+IGQuZGF0YS5zeW1ib2wpKTtcbiAgICAgICAgICBcbiAgICAgICAgY29uc3RzLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneScsZCA9PiAoZC55MS1kLnkwKSApXG4gICAgICAgICAgICAudGV4dChkID0+IGQuZGF0YS52YWx1ZSk7XG4gICAgICAgIHZhcnMuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCd5JyxkID0+IChkLnkxLWQueTApIClcbiAgICAgICAgICAgIC5jYWxsKHRleHRTdWJzY3JpcHQoZCA9PiBkLmRhdGEuc3ltYm9sKSk7XG5cblxuICAgICAgICAvLyBhcHBseSBhbGwgc3R5bGUtcmVsYXRlZCBhdHRyaWJ1dGVzIHRvIHRoZSBzZWxlY3Rpb25zXG4gICAgICAgIGRlc2lnbi5hcHBseU5vZGVTdHlsZXMobm9kZXMsIG5vZGVQYXJ0aXRpb25zLCBjaGFydCk7XG5cbiAgICAgICAgZml0Q2hhcnQoY2hhcnQsIHRoaXMucGFkZGluZyk7XG5cbiAgICAgICAgLy8gZGVidWdnaW5nOlxuICAgICAgICAvLyBbdGhpcy5yb290LCB0aGlzLmxheW91dCwgdGhpcy5jaGFydCwgdGhpcy5ib3htb2RlbCwgdGhpcy5kZXNpZ25dID0gXG4gICAgICAgIC8vICAgICBbcm9vdCwgbGF5b3V0LCBjaGFydCwgYm94bW9kZWwsIGRlc2lnbl07XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcmNlKGRhdGEpIHtcblxuICAgIH1cblxufVxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBIZWxwZXIgZnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiByZXNvbHZlTm9kZXMocm9vdCwgbm9kZXMpIHtcbiAgLy8gcmVzb2x2ZXMgZGVzY2VuZGFudCBub2RlcyBpbnRvIGZpbHRlcmVkIHNlbGVjdGlvbnNcbiAgY29uc3QgbGVhdmVzID0gbm9kZXMuZmlsdGVyKGQgPT4gcm9vdC5sZWF2ZXMoKS5maWx0ZXIobCA9PiBsID09PSBkKS5wb3AoKSApXG4gICAgICAuY2xhc3NlZCgnbGVhZicsIHRydWUpO1xuXG4gIGNvbnN0IHNldHMgPSBub2Rlcy5maWx0ZXIoZCA9PiBkLmRhdGEudHlwZSA9PT0gJ2Zvcm0nIHx8wqBkLmRhdGEudHlwZSA9PT0gJ3JlRW50cnknKVxuICAgICAgLmNsYXNzZWQoJ2Zvcm0nLCB0cnVlKVxuICBjb25zdCBmb3JtcyA9IHNldHMuZmlsdGVyKGQgPT4gZC5kYXRhLnR5cGUgPT09ICdmb3JtJylcbiAgICAgIC5jbGFzc2VkKCdmb3JtJywgdHJ1ZSk7XG4gIGNvbnN0IHJlRW50cmllcyA9IHNldHMuZmlsdGVyKGQgPT4gZC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JylcbiAgICAgIC5jbGFzc2VkKCdyZUVudHJ5JywgdHJ1ZSk7XG5cbiAgY29uc3QgZWxlbWVudHMgPSBub2Rlcy5maWx0ZXIoZCA9PiAhKGQuZGF0YS50eXBlID09PSAnZm9ybScgfHzCoGQuZGF0YS50eXBlID09PSAncmVFbnRyeScpKVxuICAgICAgLmNsYXNzZWQoJ2VsZW1lbnQnLCB0cnVlKTtcbiAgY29uc3QgdmFycyA9IGVsZW1lbnRzLmZpbHRlcihkID0+IGQuZGF0YS50eXBlID09PSAndmFyJylcbiAgICAgIC5jbGFzc2VkKCd2YXInLCB0cnVlKTtcbiAgbGV0IGNvbnN0cyA9IGVsZW1lbnRzLmZpbHRlcihkID0+IGQuZGF0YS50eXBlID09PSAnY29uc3QnKVxuICAgICAgLmNsYXNzZWQoJ2NvbnN0JywgdHJ1ZSk7XG4gIGNvbnN0cy51bm1hcmtlZCA9IGVsZW1lbnRzLmZpbHRlcihkID0+IGQuZGF0YS52YWx1ZSA9PSAwKS5jbGFzc2VkKCd1bm1hcmtlZCcsIHRydWUpO1xuICBjb25zdHMubWFya2VkID0gZWxlbWVudHMuZmlsdGVyKGQgPT4gZC5kYXRhLnZhbHVlID09IDEpLmNsYXNzZWQoJ21hcmtlZCcsIHRydWUpO1xuICBjb25zdHMuaW5kZWYgPSBlbGVtZW50cy5maWx0ZXIoZCA9PiBkLmRhdGEudmFsdWUgPT0gMikuY2xhc3NlZCgnaW5kZWYnLCB0cnVlKTtcbiAgY29uc3RzLmltYWcgPSBlbGVtZW50cy5maWx0ZXIoZCA9PiBkLmRhdGEudmFsdWUgPT0gMykuY2xhc3NlZCgnaW1hZycsIHRydWUpO1xuXG4gIGNvbnN0IHVuY2xlYXIgPSBlbGVtZW50cy5maWx0ZXIoZCA9PiBkLmRhdGEudHlwZSA9PT0gJ3VuY2xlYXInKVxuICAgICAgLmNsYXNzZWQoJ3VuY2xlYXInLCB0cnVlKTtcblxuICBjb25zdCByZUNoaWxkcyA9IGZvcm1zLmZpbHRlcihkID0+IGQuZGF0YS5yZUNoaWxkKVxuICAgICAgLmNsYXNzZWQoJ3JlQ2hpbGQnLCB0cnVlKTtcblxuICBjb25zdCByZVBvaW50cyA9IGVsZW1lbnRzLmZpbHRlcihkID0+IGQuZGF0YS50eXBlID09PSAncmVFbnRyeVBvaW50JylcbiAgICAgIC5jbGFzc2VkKCdyZUVudHJ5UG9pbnQnLCB0cnVlKTtcblxuICByZXR1cm4gW2xlYXZlcywgc2V0cywgZm9ybXMsIHJlRW50cmllcywgcmVDaGlsZHMsIHJlUG9pbnRzLCBlbGVtZW50cywgdmFycywgY29uc3RzLCB1bmNsZWFyXTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUxpbmtzKHJvb3QsIGxpbmtzKSB7XG4gIC8vIHJlc29sdmVzIGxpbmtzIGJldHdlZW4gZGVzY2VuZGFudCBub2RlcyBpbnRvIGZpbHRlcmVkIHNlbGVjdGlvbnNcbiAgY29uc3QgcmVDaGlsZExpbmsgPSBsaW5rcy5maWx0ZXIoZCA9PiBkLnRhcmdldC5kYXRhLnJlQ2hpbGQpXG4gICAgICAuY2xhc3NlZCgncmVDaGlsZExpbmsnLCB0cnVlKTtcblxuICBjb25zdCByZVBvaW50TGluayA9IGxpbmtzLmZpbHRlcihkID0+IGQudGFyZ2V0LmRhdGEudHlwZSA9PT0gJ3JlRW50cnlQb2ludCcpXG4gICAgICAuY2xhc3NlZCgncmVQb2ludExpbmsnLCB0cnVlKTtcblxuICByZXR1cm4gW3JlQ2hpbGRMaW5rLCByZVBvaW50TGlua107XG59XG5cbmZ1bmN0aW9uIGlzVGV4dChub2RlKSB7IHJldHVybiBub2RlLmRhdGEudHlwZSA9PT0gJ3ZhcicgfHzCoG5vZGUuZGF0YS50eXBlID09PSAnY29uc3QnIHx8IG5vZGUuZGF0YS50eXBlID09PSAndW5jbGVhcic7IH1cblxuZnVuY3Rpb24gaXNDb250YWluZXIobm9kZSkgeyByZXR1cm4gbm9kZS5kYXRhLnR5cGUgPT09ICdmb3JtJyB8fMKgbm9kZS5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JzsgfVxuXG5mdW5jdGlvbiByZVBhcmVudExhc3RPcGVuKG5vZGUpIHtcbmxldCByZVBhcmVudCA9IG5vZGUuYW5jZXN0b3JzKCkuZmlsdGVyKGQgPT4gZC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5Jykuc2hpZnQoKTtcbnJldHVybiByZVBhcmVudC5kYXRhLmxhc3RPcGVuO1xufVxuXG5leHBvcnQgY29uc3Qgc2F2ZSA9IGZ1bmN0aW9uKGZvcm1hdCwgc3ZnLCBuYW1lKSB7XG4gICAgLy8gZXhwb3J0cyBncmFwaHMgaW50byBzdmdcbiAgICBcbiAgICBuYW1lID0gbmFtZSB8fMKgZDMuc2VsZWN0KHN2Zy5wYXJlbnROb2RlKS5hdHRyKCdpZCcpO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGdldFRpbWVzdGFtcCgpO1xuXG5cdHRyeSB7XG4gICAgc3dpdGNoKGZvcm1hdCkge1xuICAgICAgICBjYXNlICdzdmcnOlxuICAgICAgICAgICAgc2F2ZVN2ZyhzdmcsIHRpbWVzdGFtcCsnXycrbmFtZSsnLnN2ZycpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ltZyc6XG4gICAgICAgICAgICBzYXZlSW1nKHN2ZywgdGltZXN0YW1wKydfJytuYW1lKycucG5nJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cdH0gY2F0Y2goZSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNrZXdEaWZmKGhlaWdodCxkZWdyZWVzPTMwKSB7IHJldHVybiBNYXRoLnRhbigoZGVncmVlcyooTWF0aC5QSS8xODApKSkgKiBoZWlnaHQ7IH07IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IHsgZ2V0UmVhbERlcHRoLCBvcGFjaXR5LCBjaXJjbGVEYXNoQXJyYXkgfSBmcm9tICcuLi8uLi9jb21tb24vZDMtaGVscGVyJztcblxuLyogQ2FzY2FkaW5nIEQzLVN0eWxlcyAtIGJ5IFBldGVyIEhvZm1hbm4sIDEyLzIwMTggKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGdsb2JhbCBzdHlsZXNcblxuY29uc3QgZ2xvYmFsID0ge1xuICAgIGNvbW1vbjoge1xuICAgICAgICBmb250OiB7ZmFtaWx5OiAnc2Fucy1zZXJpZicsIHNpemU6ICcxNHB4Jywgc3R5bGU6ICdub3JtYWwnfSxcbiAgICAgICAgZm9udFZhcjoge2ZhbWlseTogJ3NhbnMtc2VyaWYnLCBzaXplOiAnMTRweCcsIHN0eWxlOiAnaXRhbGljJ30sXG4gICAgICAgIGZvbnRDb25zdDoge2ZhbWlseTogJ2NvdXJpZXIsIG1vbm9zcGFjZScsIHNpemU6ICcxNHB4Jywgc3R5bGU6ICdub3JtYWwnfSxcbiAgICAgICAgZm9udENvbnRleHQ6IHtmYW1pbHk6ICdzYW5zLXNlcmlmJywgc2l6ZTogJzEwcHgnLCBzdHlsZTogJ25vcm1hbCd9LFxuICAgICAgICBzdHJva2VXaWR0aDogMSxcbiAgICAgICAgbGFiZWxzOiB7cmVFdmVuOiAnMnxyfCcsIHJlT2RkOiAnMnxyfCsxJ30sXG4gICAgICAgIGNvbG9yOiB7YmFzZTogZDMuY29sb3IoJ2JsYWNrJyksXG4gICAgICAgICAgICAgICAgZ3JvdW5kOiBkMy5jb2xvcignd2hpdGUnKSxcbiAgICAgICAgICAgICAgICBpbmRlZjogZDMuY29sb3IoJ3JlZCcpLFxuICAgICAgICAgICAgICAgIGxpZ2h0OiBkMy5jb2xvcignI2RkZCcpLFxuICAgICAgICAgICAgfVxuICAgIH1cbn07XG5nbG9iYWwuYmFzaWMgPSB7XG4gICAgLi4uZ2xvYmFsLmNvbW1vbixcbiAgICBmb250OiB7IC4uLmdsb2JhbC5jb21tb24uZm9udCxcbiAgICAgICAgICAgIGZhbWlseTogJ2dlb3JnaWEsIHNlcmlmJ1xuICAgICAgICB9LFxuICAgIGZvbnRWYXI6IHsgLi4uZ2xvYmFsLmNvbW1vbi5mb250VmFyLFxuICAgICAgICAgICAgZmFtaWx5OiAnZ2VvcmdpYSwgc2VyaWYnLCBzdHlsZTogJ2l0YWxpYydcbiAgICAgICAgfSxcbiAgICBmb250Q29uc3Q6IHsgLi4uZ2xvYmFsLmNvbW1vbi5mb250Q29uc3QsXG4gICAgICAgIGZhbWlseTogJ2dlb3JnaWEsIHNlcmlmJ1xuICAgIH0sXG4gICAgZm9udENvbnRleHQ6IHsgLi4uZ2xvYmFsLmNvbW1vbi5mb250Q29udGV4dCxcbiAgICAgICAgICAgIGZhbWlseTogJ2NvdXJpZXIsIG1vbm9zcGFjZSdcbiAgICAgICAgfVxufTtcbmdsb2JhbC5nZXN0YWx0ID0ge1xuICAgIC4uLmdsb2JhbC5jb21tb24sXG4gICAgZm9udDogeyAuLi5nbG9iYWwuY29tbW9uLmZvbnQsXG4gICAgICAgICAgICBmYW1pbHk6ICdhcmlhbCwgc2Fucy1zZXJpZidcbiAgICAgICAgfSxcbiAgICBmb250VmFyOiB7IC4uLmdsb2JhbC5jb21tb24uZm9udFZhcixcbiAgICAgICAgICAgIGZhbWlseTogJ2FyaWFsLCBzYW5zLXNlcmlmJ1xuICAgICAgICB9LFxuICAgIGZvbnRDb25zdDogeyAuLi5nbG9iYWwuY29tbW9uLmZvbnRDb25zdCxcbiAgICAgICAgZmFtaWx5OiAnYXJpYWwsIHNhbnMtc2VyaWYnXG4gICAgfSxcbiAgICBmb250Q29udGV4dDogeyAuLi5nbG9iYWwuY29tbW9uLmZvbnRDb250ZXh0LFxuICAgICAgICAgICAgZmFtaWx5OiAnZ2VvcmdpYSwgc2VyaWYnXG4gICAgICAgIH0sXG4gICAgY29sb3I6IHsuLi5nbG9iYWwuY29tbW9uLmNvbG9yLFxuICAgICAgICAgICAgcG9zOiBkMy5jb2xvcignd2hpdGUnKSwgXG4gICAgICAgICAgICBuZWc6IGQzLmNvbG9yKCdibGFjaycpXG4gICAgICAgIH1cbn07XG5jb25zdCBbYmFzaWMsIGdlc3RhbHRdID0gW2dsb2JhbC5iYXNpYywgZ2xvYmFsLmdlc3RhbHRdO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJEZWZhdWx0cyhzdmcpIHtcbiAgICBzdmcuYXR0cignc3Ryb2tlJywnbm9uZScpLmF0dHIoJ2ZpbGwnLCdub25lJyk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkMy50cmVlIHN0eWxlczpcblxuZXhwb3J0IGNvbnN0IHRyZWUgPSB7XG4gICAgY29tbW9uOiB7XG4gICAgICAgIG5vZGVTaXplOiB7dzogMTAuMCwgaDogMTAuMH0sIC8vIHNpemUgb2Ygbm9kZXNcbiAgICAgICAgbm9kZVNlcGFyYXRpb246IHtoejogMjAsIHZ0OiA0MH0sIC8vIHNlcGFyYXRpb24gYmV0d2VlbiBub2Rlc1xuICAgICAgICBkYXNoZXM6IHtsaW5rOiAnNHB4IDZweCdcbiAgICAgICAgICAgIH0sXG4gICAgfVxufTtcblxudHJlZS5iYXNpYyA9IHtcbiAgICAuLi5iYXNpYyxcbiAgICAuLi50cmVlLmNvbW1vbixcbn07XG50cmVlLmJhc2ljLmFwcGx5QXhpc1N0eWxlcyA9IGZ1bmN0aW9uKGF4aXMpIHtcblxuICAgIGF4aXMuc2VsZWN0QWxsKCcudGljaycpLnNlbGVjdCgnbGluZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgdGhpcy5ub2RlU2l6ZS53KjEuNSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAncmdiYSgwLDAsMCwuMDUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJyk7XG4gICAgYXhpcy5zZWxlY3RBbGwoJy50aWNrJykuc2VsZWN0KCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRDb250ZXh0LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udENvbnRleHQuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRDb250ZXh0LmZhbWlseSlcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpXG4gICAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpO1xuXG59XG50cmVlLmJhc2ljLmFwcGx5Tm9kZVN0eWxlcyA9IGZ1bmN0aW9uKG5vZGVzLCBub2RlUGFydGl0aW9ucykge1xuICAgIGNvbnN0IFtsZWF2ZXMsIHNldHMsIGZvcm1zLCByZUVudHJpZXMsIHJlQ2hpbGRzLCByZVBvaW50cywgZWxlbWVudHMsIHZhcnMsIGNvbnN0cywgdW5jbGVhcl0gPSBub2RlUGFydGl0aW9ucztcblxuICAgIGZvcm1zLnNlbGVjdEFsbCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSlcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5ncm91bmQudG9TdHJpbmcoKSk7XG5cblxuICAgIGVsZW1lbnRzLnNlbGVjdEFsbCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpO1xuXG4gICAgcmVFbnRyaWVzLnNlbGVjdEFsbCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSlcbiAgICAgICAgLmZpbHRlcihkID0+IGQuZGF0YS5sYXN0T3BlbilcbiAgICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuZ3JvdW5kLnRvU3RyaW5nKCkpO1xuICAgIHJlQ2hpbGRzLnNlbGVjdEFsbCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLWRhc2hhcnJheScsIGQgPT4gY2lyY2xlRGFzaEFycmF5KGQuciwgMywgWzFdKSk7XG4gICAgcmVQb2ludHMuc2VsZWN0QWxsKCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpO1xuXG4gICAgbm9kZXMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnQuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250LmZhbWlseSlcbiAgICAgICAgLnN0eWxlKCdkb21pbmFudC1iYXNlbGluZScsJ21pZGRsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKVxuICAgIHZhcnMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRWYXIuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250VmFyLnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250VmFyLmZhbWlseSk7XG4gICAgY29uc3RzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250Q29uc3Quc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250Q29uc3Quc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRDb25zdC5mYW1pbHkpO1xuXG4gICAgc2V0cy5zZWxlY3RBbGwoJ2NpcmNsZS5pbm5lcicpXG4gICAgICAgIC8vIC5jbGFzc2VkKCdpbm5lcicpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSk7XG5cbn07XG50cmVlLmJhc2ljLmFwcGx5TGlua1N0eWxlcyA9IGZ1bmN0aW9uKGxpbmtzLCBsaW5rUGFydGl0aW9ucykge1xuICAgIGNvbnN0IFtyZUNoaWxkTGluaywgcmVQb2ludExpbmtdID0gbGlua1BhcnRpdGlvbnM7XG5cbiAgICBsaW5rcy5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKTtcblxuICAgIHJlQ2hpbGRMaW5rLnNlbGVjdEFsbCgncGF0aCcpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS1kYXNoYXJyYXknLCB0aGlzLmRhc2hlcy5saW5rKTtcblxuICAgIHJlUG9pbnRMaW5rLnNlbGVjdEFsbCgncGF0aCcpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS1kYXNoYXJyYXknLCB0aGlzLmRhc2hlcy5saW5rKTtcbn07XG5cbi8vIHRyZWUuZ2VzdGFsdCA9IHtcbi8vICAgICAuLi5nZXN0YWx0LFxuLy8gICAgIC4uLnRyZWUuY29tbW9uLFxuLy8gfTtcbi8vIHRyZWUuZ2VzdGFsdC5hcHBseUF4aXNTdHlsZXMgPSBmdW5jdGlvbihheGlzKSB7XG4vLyAgICAgdHJlZS5iYXNpYy5hcHBseUF4aXNTdHlsZXMoYXhpcyk7XG4vLyB9XG4vLyB0cmVlLmdlc3RhbHQuYXBwbHlOb2RlU3R5bGVzID0gZnVuY3Rpb24obm9kZXMsIG5vZGVQYXJ0aXRpb25zKSB7XG4vLyAgICAgY29uc3QgW2xlYXZlcywgc2V0cywgZm9ybXMsIHJlRW50cmllcywgcmVDaGlsZHMsIHJlUG9pbnRzLCBlbGVtZW50cywgdmFycywgY29uc3RzLCB1bmNsZWFyXSA9IG5vZGVQYXJ0aXRpb25zO1xuXG4vLyAgICAgdHJlZS5iYXNpYy5hcHBseU5vZGVTdHlsZXMobm9kZXMsIG5vZGVQYXJ0aXRpb25zKTtcbi8vIH07XG4vLyB0cmVlLmdlc3RhbHQuYXBwbHlMaW5rU3R5bGVzID0gZnVuY3Rpb24obGlua3MsIGxpbmtQYXJ0aXRpb25zKSB7XG4vLyAgICAgLy8gY29uc3QgW3JlQ2hpbGRMaW5rXSA9IGxpbmtQYXJ0aXRpb25zO1xuXG4vLyAgICAgdHJlZS5iYXNpYy5hcHBseUxpbmtTdHlsZXMobGlua3MsIGxpbmtQYXJ0aXRpb25zKTtcbi8vIH07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkMy5wYWNrIHN0eWxlczpcblxuZXhwb3J0IGNvbnN0IHBhY2sgPSB7XG4gICAgY29tbW9uOiB7XG4gICAgICAgIHJhZGl1czogMTQsXG4gICAgICAgIHBhZGRpbmc6IDE0LFxuICAgIH1cbn07XG5cbnBhY2suYmFzaWMgPSB7XG4gICAgLi4uYmFzaWMsXG4gICAgLi4ucGFjay5jb21tb24sXG59O1xucGFjay5iYXNpYy5hcHBseU5vZGVTdHlsZXMgPSBmdW5jdGlvbihub2Rlcywgbm9kZVBhcnRpdGlvbnMpIHtcbiAgICBjb25zdCBbbGVhdmVzLCBzZXRzLCBmb3JtcywgcmVFbnRyaWVzLCByZUNoaWxkcywgcmVQb2ludHMsIGVsZW1lbnRzLCB2YXJzLCBjb25zdHMsIHVuY2xlYXJdID0gbm9kZVBhcnRpdGlvbnM7XG5cbiAgICBmb3Jtcy5zZWxlY3QoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpXG4gICAgICAgIC5maWx0ZXIoZCA9PiBkLmRhdGEudW5tYXJrZWQpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZScsJ25vbmUnKTtcbiAgICByZUVudHJpZXMuc2VsZWN0KCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSlcbiAgICAgICAgLmZpbHRlcihkID0+IGQuZGF0YS5sYXN0T3BlbilcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLWRhc2hhcnJheScsIGQgPT4gY2lyY2xlRGFzaEFycmF5KGQuciwgMTQsIFsyLzUsIDMvNV0pICk7XG5cbiAgICBlbGVtZW50cy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnQuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnQuZmFtaWx5KVxuICAgICAgICAuc3R5bGUoJ2RvbWluYW50LWJhc2VsaW5lJywnbWlkZGxlJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSk7XG4gICAgdmFycy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udFZhci5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRWYXIuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRWYXIuZmFtaWx5KTtcbiAgICBjb25zdHMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRDb25zdC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRDb25zdC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udENvbnN0LmZhbWlseSk7XG5cbiAgICB1bmNsZWFyLnNlbGVjdCgncmVjdCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IubGlnaHQudG9TdHJpbmcoKSk7XG5cbiAgICByZVBvaW50cy5zZWxlY3QoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCdub25lJyk7XG5cbiAgICBjb25zdCByZUV2ZW5MYWJlbHMgPSByZUVudHJpZXMuc2VsZWN0KCcubGFiZWwnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udENvbnRleHQuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250Q29udGV4dC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udENvbnRleHQuZmFtaWx5KVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKTtcbn07XG5cbnBhY2suZ2VzdGFsdCA9IHtcbiAgICAuLi5nZXN0YWx0LFxuICAgIC4uLnBhY2suY29tbW9uLFxufTtcbnBhY2suZ2VzdGFsdC5pbnZlcnRGaWxsID0gZnVuY3Rpb24oZCkge1xuICAgIHJldHVybiBnZXRSZWFsRGVwdGgoZCklMiA/IHRoaXMuY29sb3IucG9zLnRvU3RyaW5nKCkgOiB0aGlzLmNvbG9yLm5lZy50b1N0cmluZygpO1xufTtcbnBhY2suZ2VzdGFsdC5hcHBseU5vZGVTdHlsZXMgPSBmdW5jdGlvbihub2Rlcywgbm9kZVBhcnRpdGlvbnMsIGNoYXJ0KSB7XG4gICAgY29uc3QgW2xlYXZlcywgc2V0cywgZm9ybXMsIHJlRW50cmllcywgcmVDaGlsZHMsIHJlUG9pbnRzLCBlbGVtZW50cywgdmFycywgY29uc3RzLCB1bmNsZWFyXSA9IG5vZGVQYXJ0aXRpb25zO1xuXG4gICAgY29uc3QgZGVmcyA9IGQzLnNlbGVjdChjaGFydC5ub2RlKCkucGFyZW50Tm9kZSlcbiAgICAgICAgLmFwcGVuZCgnZGVmcycpO1xuICAgIGNvbnN0IGdyYWRfMSA9IGRlZnMuYXBwZW5kKCdyYWRpYWxHcmFkaWVudCcpLmF0dHIoJ2lkJywgJ2dyYWQtaW5kZWYtb3V0aW4nKVxuICAgICAgICAuYXR0cignZngnLCcyMCUnKVxuICAgICAgICBncmFkXzEuYXBwZW5kKCdzdG9wJylcbiAgICAgICAgICAgIC5hdHRyKCdvZmZzZXQnLCc0MCUnKS5hdHRyKCdzdG9wLWNvbG9yJywgb3BhY2l0eSh0aGlzLmNvbG9yLmluZGVmLCAwLjMpLnRvU3RyaW5nKCkgKTtcbiAgICAgICAgICAgIGdyYWRfMS5hcHBlbmQoJ3N0b3AnKVxuICAgICAgICAgICAgLmF0dHIoJ29mZnNldCcsJzkwJScpLmF0dHIoJ3N0b3AtY29sb3InLCBvcGFjaXR5KHRoaXMuY29sb3IuaW5kZWYsIDAuOCkudG9TdHJpbmcoKSApO1xuICAgICAgICBncmFkXzEuYXBwZW5kKCdzdG9wJylcbiAgICAgICAgICAgIC5hdHRyKCdvZmZzZXQnLCcxMDAlJykuYXR0cignc3RvcC1jb2xvcicsIG9wYWNpdHkodGhpcy5jb2xvci5pbmRlZiwgMS4wKS50b1N0cmluZygpICk7XG4gICAgY29uc3QgZ3JhZF8yID0gZGVmcy5hcHBlbmQoJ3JhZGlhbEdyYWRpZW50JykuYXR0cignaWQnLCAnZ3JhZC1pbmRlZi1pbm91dCcpXG4gICAgICAgIC5hdHRyKCdmeCcsJzIwJScpXG4gICAgICAgIGdyYWRfMi5hcHBlbmQoJ3N0b3AnKVxuICAgICAgICAgICAgLmF0dHIoJ29mZnNldCcsJzEwJScpLmF0dHIoJ3N0b3AtY29sb3InLCBvcGFjaXR5KHRoaXMuY29sb3IuaW5kZWYsIDEuMCkudG9TdHJpbmcoKSApO1xuICAgICAgICBncmFkXzIuYXBwZW5kKCdzdG9wJylcbiAgICAgICAgICAgIC5hdHRyKCdvZmZzZXQnLCc1MCUnKS5hdHRyKCdzdG9wLWNvbG9yJywgb3BhY2l0eSh0aGlzLmNvbG9yLmluZGVmLCAwLjYpLnRvU3RyaW5nKCkgKTtcbiAgICAgICAgZ3JhZF8yLmFwcGVuZCgnc3RvcCcpXG4gICAgICAgICAgICAuYXR0cignb2Zmc2V0JywnNjAlJykuYXR0cignc3RvcC1jb2xvcicsIG9wYWNpdHkodGhpcy5jb2xvci5pbmRlZiwgMC40KS50b1N0cmluZygpICk7XG4gICAgICAgIGdyYWRfMi5hcHBlbmQoJ3N0b3AnKVxuICAgICAgICAgICAgLmF0dHIoJ29mZnNldCcsJzEwMCUnKS5hdHRyKCdzdG9wLWNvbG9yJywgb3BhY2l0eSh0aGlzLmNvbG9yLmluZGVmLCAwLjApLnRvU3RyaW5nKCkgKTtcblxuICAgIGZvcm1zLnNlbGVjdCgnY2lyY2xlJykuZmlsdGVyKGQgPT4gIWQuZGF0YS51bm1hcmtlZClcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnbm9uZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gdGhpcy5pbnZlcnRGaWxsKGQpKTtcblxuICAgIHJlRW50cmllcy5zZWxlY3QoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZCA9PiAoZC5wYXJlbnQuZGF0YS50eXBlID09PSAncmVFbnRyeScpID8gdGhpcy5jb2xvci5wb3MudG9TdHJpbmcoKSA6ICdub25lJyApXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICd1cmwoI2dyYWQtaW5kZWYtb3V0aW4pJyk7XG5cbiAgICBjb25zdCBvcGVuUmVFbnRyaWVzID0gcmVFbnRyaWVzLnNlbGVjdCgnY2lyY2xlJykuZmlsdGVyKGQgPT4gZC5kYXRhLmxhc3RPcGVuKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAndXJsKCNncmFkLWluZGVmLWlub3V0KScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLWRhc2hhcnJheScsIGQgPT4gY2lyY2xlRGFzaEFycmF5KGQuciwgOCwgWzIvNSwgMy81XSkgKTtcblxuICAgIG9wZW5SZUVudHJpZXMuZmlsdGVyKGQgPT4gKChkLnBhcmVudC5kYXRhLnR5cGUgIT09ICdyZUVudHJ5JykgfHzCoCFnZXRSZWFsRGVwdGgoZCklMikgKSAvLyAgXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIGQgPT4gdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKTtcblxuICAgIG9wZW5SZUVudHJpZXMuZmlsdGVyKGQgPT4gKGQucGFyZW50LmRhdGEudHlwZSA9PT0gJ3JlRW50cnknKSAmJiAhZC5wYXJlbnQuZGF0YS5sYXN0T3BlbilcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZCA9PiB0aGlzLmNvbG9yLnBvcy50b1N0cmluZygpKTtcblxuICAgIGVsZW1lbnRzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udC5mYW1pbHkpXG4gICAgICAgIC5zdHlsZSgnZG9taW5hbnQtYmFzZWxpbmUnLCdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IHRoaXMuaW52ZXJ0RmlsbChkKSk7XG4gICAgdmFycy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udFZhci5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRWYXIuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRWYXIuZmFtaWx5KTtcbiAgICBjb25zdHMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRDb25zdC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRDb25zdC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udENvbnN0LmZhbWlseSk7XG5cbiAgICB1bmNsZWFyLnNlbGVjdCgncmVjdCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsdGhpcy5jb2xvci5saWdodC50b1N0cmluZygpKTtcbiAgICB1bmNsZWFyLnNlbGVjdCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpO1xuICAgICAgICBcbiAgICByZVBvaW50cy5zZWxlY3QoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsJ25vbmUnKVxuICAgICAgICAuZmlsdGVyKGQgPT4gZC5wYXJlbnQuZGF0YS50eXBlID09PSAncmVFbnRyeScpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IucG9zLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3NjYWxlKDEuNSknKTtcblxuICAgIGNvbnN0IHJlRXZlbkxhYmVscyA9IHJlRW50cmllcy5zZWxlY3QoJy5sYWJlbCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250Q29udGV4dC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRDb250ZXh0LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250Q29udGV4dC5mYW1pbHkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IChkLnBhcmVudC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JyAmJiAhZC5wYXJlbnQuZGF0YS5sYXN0T3BlbikgPyB0aGlzLmNvbG9yLnBvcy50b1N0cmluZygpIDogdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKTtcbiAgICByZUVudHJpZXMuc2VsZWN0KCcubGFiZWwuaW5zaWRlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiAoZC5wYXJlbnQuZGF0YS50eXBlICE9PSAncmVFbnRyeScgJiYgZC5kYXRhLmxhc3RPcGVuKSA/IHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSA6IHRoaXMuY29sb3IucG9zLnRvU3RyaW5nKCkpO1xuXG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gYm94bW9kZWxEMyBzdHlsZXM6XG5cbmV4cG9ydCBjb25zdCBib3htb2RlbCA9IHtcbiAgICBjb21tb246IHtcbiAgICAgICAgZWxlbU1hcmdpbjoge2h6OiAxMiwgdnQ6IDh9LCAvLyB2dDogOFxuICAgICAgICBmb3JtTWFyZ2luOiB7dG9wOiAxMCwgcmlnaHQ6IDEwfSxcbiAgICAgICAgZm9ybVBhZGRpbmc6IHtoejogMH0sXG4gICAgICAgIG1pbkZvcm1TaXplOiB7d2lkdGg6IDM0LCBoZWlnaHQ6IDM0fSxcbiAgICAgICAgbWF4TGluZVdpZHRoOiAxMDAwMCxcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDEuMVxuICAgIH1cbn07XG5cbmJveG1vZGVsLmJhc2ljID0ge1xuICAgIC4uLmJhc2ljLFxuICAgIC4uLmJveG1vZGVsLmNvbW1vblxuICAgIC8vIGZvbnQ6IHsuLi5iYXNpYy5mb250LCBzaXplOiAnMThweCd9XG59O1xuYm94bW9kZWwuYmFzaWMuYXBwbHlOb2RlU3R5bGVzID0gZnVuY3Rpb24obm9kZXMsIG5vZGVQYXJ0aXRpb25zKSB7XG4gICAgY29uc3QgW2xlYXZlcywgc2V0cywgZm9ybXMsIHJlRW50cmllcywgcmVDaGlsZHMsIHJlUG9pbnRzLCBlbGVtZW50cywgdmFycywgY29uc3RzLCB1bmNsZWFyXSA9IG5vZGVQYXJ0aXRpb25zO1xuXG4gICAgc2V0cy5zZWxlY3QoJ3BvbHlsaW5lJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIHRoaXMuc3Ryb2tlV2lkdGgpO1xuICAgIGZvcm1zLnNlbGVjdCgncG9seWxpbmUnKVxuICAgICAgICAuZmlsdGVyKGQgPT4gZC5kYXRhLnVubWFya2VkKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2UnLCdub25lJyk7XG4gICAgLy8gcmVFbnRyaWVzLnNlbGVjdCgncG9seWxpbmUnKVxuICAgIC8vICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSk7XG5cbiAgICBlbGVtZW50cy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnQuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnQuZmFtaWx5KVxuICAgICAgICAuc3R5bGUoJ2FsaWdubWVudC1iYXNlbGluZScsJ2Jhc2VsaW5lJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpO1xuICAgIHZhcnMuc2VsZWN0KCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRWYXIuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250VmFyLnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250VmFyLmZhbWlseSk7XG4gICAgY29uc3RzLnNlbGVjdCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250Q29uc3Quc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250Q29uc3Quc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRDb25zdC5mYW1pbHkpO1xuICAgIHJlRW50cmllcy5zZWxlY3QoJy5sYWJlbCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250Q29udGV4dC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRDb250ZXh0LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250Q29udGV4dC5mYW1pbHkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSk7XG4gICAgICAgIC8vIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSk7XG5cbiAgICB1bmNsZWFyLnNlbGVjdCgnLnVuY2xlYXJNYXJrJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5saWdodC50b1N0cmluZygpKTtcblxuICAgIHVuY2xlYXIuc2VsZWN0KCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRWYXIuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgJ25vcm1hbCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRWYXIuZmFtaWx5KVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfXzsiXSwic291cmNlUm9vdCI6IiJ9