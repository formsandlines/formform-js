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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvYm94bW9kZWwtbGF5b3V0LWZvci1kMy9kaXN0L2JveG1vZGVsLWQzLm1pbi5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9jYW52Zy9kaXN0L2Jyb3dzZXIvY2FudmcubWluLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3JnYmNvbG9yL2luZGV4LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3N0YWNrYmx1ci1jYW52YXMvc3JjL3N0YWNrYmx1ci5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9jb21tb24vZDMtaGVscGVyLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2NvbW1vbi9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL2NvcmUvZmNhbGMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL2NvcmUvZmZvcm0uanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL2NvcmUvZmdyYXBoLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2xpYi9tYWluLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2xpYi9tb2R1bGVzL2QzLWdyYXBoLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2xpYi9tb2R1bGVzL2QzLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS9leHRlcm5hbCBcImQzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVB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QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxtREFBbUQ7QUFDbkQsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDN1NBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDM1hBLGdEIiwiZmlsZSI6ImZvcm1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiZDNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiZDNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZm9ybWZvcm1cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJkM1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiZm9ybWZvcm1cIl0gPSBmYWN0b3J5KHJvb3RbXCJkM1wiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xpYi9tYWluLmpzXCIpO1xuIiwiIWZ1bmN0aW9uKHQsbil7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9bihyZXF1aXJlKFwiZDNcIikpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wiZDNcIl0sbik6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0c1tcImJveG1vZGVsLWQzXCJdPW4ocmVxdWlyZShcImQzXCIpKTp0W1wiYm94bW9kZWwtZDNcIl09bih0LmQzKX0od2luZG93LGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgbj17fTtmdW5jdGlvbiBlKHIpe2lmKG5bcl0pcmV0dXJuIG5bcl0uZXhwb3J0czt2YXIgbz1uW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxlKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBlLm09dCxlLmM9bixlLmQ9ZnVuY3Rpb24odCxuLHIpe2Uubyh0LG4pfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LGUucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxlLnQ9ZnVuY3Rpb24odCxuKXtpZigxJm4mJih0PWUodCkpLDgmbilyZXR1cm4gdDtpZig0Jm4mJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihlLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImbiYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBvIGluIHQpZS5kKHIsbyxmdW5jdGlvbihuKXtyZXR1cm4gdFtuXX0uYmluZChudWxsLG8pKTtyZXR1cm4gcn0sZS5uPWZ1bmN0aW9uKHQpe3ZhciBuPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBlLmQobixcImFcIixuKSxufSxlLm89ZnVuY3Rpb24odCxuKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsbil9LGUucD1cIlwiLGUoZS5zPTEpfShbZnVuY3Rpb24obixlKXtuLmV4cG9ydHM9dH0sZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO2UucihuKSxlLmQobixcImRlZmF1bHRcIixmdW5jdGlvbigpe3JldHVybiBvfSk7dmFyIHI9ZSgwKTtmdW5jdGlvbiBvKCl7dmFyIHQsbixlLG8saSx1LGYsYSxjLGw9W107ZnVuY3Rpb24gaCh0KXtyZXR1cm4gdC5lYWNoQWZ0ZXIoZCksdC5lYWNoQmVmb3JlKHApLHQuZWFjaEJlZm9yZSh5KSx0fWZ1bmN0aW9uIGQobyl7dmFyIGg9YyhvKS53aWR0aCxkPWMobykuaGVpZ2h0O2lmKHQobykpe2lmKGg9ZD0wLG8uY2hpbGRyZW4pe2Zvcih2YXIgcD1mdW5jdGlvbih0KXt2YXIgcj1bXSxvPTAsaT0hMSxmPTAsYz0hMDtyZXR1cm4gdC5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGwsaCl7bihsKSYmIWkmJihpPSEwKSxvKz1sLngxLWwueDAsbys9Yz9lKGwpP3UobCkubGVmdDowOk1hdGgubWF4KHUobCkubGVmdCx1KHQuY2hpbGRyZW5baC0xXSkucmlnaHQpO3ZhciBkPWUobCk/dShsKS5yaWdodDowOyhvK2Q+YSh0KXx8aD09PXQuY2hpbGRyZW4ubGVuZ3RoLTEpJiYobys9ZCksbz5hKHQpfHxoPT09dC5jaGlsZHJlbi5sZW5ndGgtMT8oci5wdXNoKHtmcm9tOmYsdG86aCx3aWR0aDpvLGZsZXhIZWlnaHQ6aX0pLGg8dC5jaGlsZHJlbi5sZW5ndGgtMSYmKGY9aCsxLG89MCxpPSExLGM9ITApKTpjPSExfSkscn0obykseT0wO3k8cC5sZW5ndGg7eSsrKXBbeV0uaGVpZ2h0PWcobyxwLHkpO2wucHVzaCh7Ym94Om8sbGluZXM6cH0pLGgrPXIubWF4KHAsZnVuY3Rpb24odCl7cmV0dXJuIHQud2lkdGh9KSxkKz1yLnN1bShwLGZ1bmN0aW9uKHQpe3JldHVybiB0LmhlaWdodH0pfWgrPWkobykubGVmdCtpKG8pLnJpZ2h0LGQrPWkobykudG9wK2kobykuYm90dG9tLGg9TWF0aC5tYXgoaCxmKG8pLndpZHRoKSxkPU1hdGgubWF4KGQsZihvKS5oZWlnaHQpfW8ueDA9by55MD0wLG8ueDE9aCxvLnkxPWR9ZnVuY3Rpb24gcChyKXt2YXIgbz1yLnkxO2lmKHIucGFyZW50JiZuKHIpKXtvPW0ocikuaGVpZ2h0O3ZhciBpPXgoci5wYXJlbnQpLGY9cyhyLGkpO28tPWUocil8fDAhPT1mP3UocikudG9wOjA7dmFyIGE9KG8tPWUocil8fGYhPT1pLmxlbmd0aC0xP3UocikuYm90dG9tOjApLXIueTE7aWYodChyKSYmci5jaGlsZHJlbiYmYT4wKXt2YXIgYz14KHIpLGw9YS9jLmxlbmd0aCxoPSEwLGQ9ITEscD12b2lkIDA7dHJ5e2Zvcih2YXIgeSxnPWNbU3ltYm9sLml0ZXJhdG9yXSgpOyEoaD0oeT1nLm5leHQoKSkuZG9uZSk7aD0hMCl7eS52YWx1ZS5oZWlnaHQrPWx9fWNhdGNoKHQpe2Q9ITAscD10fWZpbmFsbHl7dHJ5e2h8fG51bGw9PWcucmV0dXJufHxnLnJldHVybigpfWZpbmFsbHl7aWYoZCl0aHJvdyBwfX19fXIueTE9b31mdW5jdGlvbiB5KHQpe3ZhciBuPXQueDEtdC54MCxyPXQueTEtdC55MDtpZih0LnBhcmVudCl7dC55MD10LnBhcmVudC55MCtpKHQucGFyZW50KS50b3A7dmFyIGY9dC5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0KTtpZigwPT09Znx8ZnVuY3Rpb24odCl7aWYodC5wYXJlbnQpe3ZhciBuPXQucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodCksZT14KHQucGFyZW50KSxyPWVbcyh0LGUpXTtyZXR1cm4gci5mcm9tPT09bn1yZXR1cm4gbnVsbH0odCkpdC54MCs9dC5wYXJlbnQueDAraSh0LnBhcmVudCkubGVmdCxlKHQpJiYodC54MCs9dSh0KS5sZWZ0KTtlbHNle3ZhciBhPXQucGFyZW50LmNoaWxkcmVuW2YtMV07dC54MD1hLngxLHQueDArPU1hdGgubWF4KHUoYSkucmlnaHQsdSh0KS5sZWZ0KX19ZWxzZSBzd2l0Y2gobyl7Y2FzZVwidG9wXCI6dC55MD0wO2JyZWFrO2Nhc2VcIm1pZGRsZVwiOnQueTA9ci8yO2JyZWFrO2Nhc2VcImJvdHRvbVwiOnQueTA9cn1zd2l0Y2gobyl7Y2FzZVwidG9wXCI6aWYodC5wYXJlbnQpe3ZhciBjPXModCk7dC55MCs9ZSh0KXx8MCE9PWM/dSh0KS50b3A6MCx0LnkwKz12KHQpfWJyZWFrO2Nhc2VcIm1pZGRsZVwiOnQucGFyZW50JiYodC55MCs9dih0KSttKHQpLmhlaWdodC8yKSx0LnkwLT1yLzI7YnJlYWs7Y2FzZVwiYm90dG9tXCI6aWYodC5wYXJlbnQpe3ZhciBsPXgodC5wYXJlbnQpLGg9cyh0LGwpO3QueTAtPWUodCl8fGghPT1sLmxlbmd0aC0xP3UodCkuYm90dG9tOjAsdC55MCs9dih0LCEwKX10LnkwLT1yfXQueDE9dC54MCtuLHQueTE9dC55MCtyfWZ1bmN0aW9uIGcodCxuLHIpe2Zvcih2YXIgbz1uW3JdLGk9MCxhPW8uZnJvbTthPD1vLnRvO2ErKyl7dmFyIGM9dC5jaGlsZHJlblthXSxsPWMueTEtYy55MCxoPShlKGMpfHwwIT09cj91KGMpLnRvcDowKSsoZShjKXx8ciE9PW4ubGVuZ3RoLTE/dShjKS5ib3R0b206MCk7bCtoPmkmJihpPWwraCl9cmV0dXJuIE1hdGgubWF4KGksZih0KS5oZWlnaHQpfWZ1bmN0aW9uIHgodCl7cmV0dXJuIGxbbC5maW5kSW5kZXgoZnVuY3Rpb24obil7cmV0dXJuIG4uYm94PT09dH0pXS5saW5lc31mdW5jdGlvbiBzKHQsbil7aWYodC5wYXJlbnQpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MT9uOngodC5wYXJlbnQpLHI9dC5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0KTtyZXR1cm4gZS5maW5kSW5kZXgoZnVuY3Rpb24odCl7cmV0dXJuIHI+PXQuZnJvbSYmcjw9dC50b30pfXJldHVybiBudWxsfWZ1bmN0aW9uIG0odCl7dmFyIG49eCh0LnBhcmVudCk7cmV0dXJuIG5bcyh0LG4pXX1mdW5jdGlvbiB2KHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdJiZhcmd1bWVudHNbMV07aWYodC5wYXJlbnQpe3ZhciBlPXgodC5wYXJlbnQpLG89cyh0LGUpLGk9bj9vOm8tMTtyZXR1cm4gci5zdW0oZS5maWx0ZXIoZnVuY3Rpb24odCxuKXtyZXR1cm4gbjw9aX0pLGZ1bmN0aW9uKHQpe3JldHVybiB0LmhlaWdodH0pfXJldHVybiBudWxsfWZ1bmN0aW9uIGIodCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHR9fXJldHVybiBoLnZBbGlnbj1mdW5jdGlvbih0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8obz10LGgpOm99LGguZWRnZU1hcmdpbnM9ZnVuY3Rpb24odCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KGU9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90OmIoK3QpLGgpOmV9LGguaXNDb250YWluZXI9ZnVuY3Rpb24obil7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KHQ9XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uOmIoK24pLGgpOnR9LGguc3BhbkhlaWdodD1mdW5jdGlvbih0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8obj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6YigrdCksaCk6bn0saC5wYWRkaW5nPWZ1bmN0aW9uKHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhpPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpiKCt0KSxoKTppfSxoLm1hcmdpbj1mdW5jdGlvbih0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8odT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6YigrdCksaCk6dX0saC5ub2RlU2l6ZT1mdW5jdGlvbih0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8oYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6YigrdCksaCk6Y30saC5taW5Db250YWluZXJTaXplPWZ1bmN0aW9uKHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhmPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpiKCt0KSxoKTpmfSxoLm1heExpbmVXaWR0aD1mdW5jdGlvbih0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8oYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6YigrdCksaCk6YX0saH19XSkuZGVmYXVsdH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym94bW9kZWwtZDMubWluLmpzLm1hcCIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUocmVxdWlyZShcInJnYmNvbG9yXCIpLHJlcXVpcmUoXCJzdGFja2JsdXItY2FudmFzXCIpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcInJnYmNvbG9yXCIsXCJzdGFja2JsdXItY2FudmFzXCJdLGUpOnQuY2Fudmc9ZSh0LlJHQkNvbG9yLHQuU3RhY2tCbHVyKX0odGhpcyxmdW5jdGlvbihtLGQpe1widXNlIHN0cmljdFwiO3ZhciB0O3JldHVybiBtPW0mJm0uaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0XCIpP20uZGVmYXVsdDptLGQ9ZCYmZC5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRcIik/ZC5kZWZhdWx0OmQsZnVuY3Rpb24odCl7dmFyIHU7dC5leHBvcnRzOyh1PXdpbmRvdykuRE9NUGFyc2VyPXdpbmRvdy5ET01QYXJzZXI7ZnVuY3Rpb24gcCgpe3JldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpfXZhciBmLGM9ZnVuY3Rpb24odCxlLGkpe2lmKG51bGwhPXR8fG51bGwhPWV8fG51bGwhPWkpe3ZhciBuPWZ1bmN0aW9uKHMpe3ZhciBBPXtvcHRzOnMsRlJBTUVSQVRFOjMwLE1BWF9WSVJUVUFMX1BJWEVMUzozZTQscm9vdEVtU2l6ZToxMixlbVNpemU6MTIsbG9nOmZ1bmN0aW9uKHQpe319OzE9PUEub3B0cy5sb2cmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBjb25zb2xlJiYoQS5sb2c9ZnVuY3Rpb24odCl7Y29uc29sZS5sb2codCl9KTtBLmluaXQ9ZnVuY3Rpb24odCl7dmFyIGU9MDtBLlVuaXF1ZUlkPWZ1bmN0aW9uKCl7cmV0dXJuXCJjYW52Z1wiKyArK2V9LEEuRGVmaW5pdGlvbnM9e30sQS5TdHlsZXM9e30sQS5TdHlsZXNTcGVjaWZpY2l0eT17fSxBLkFuaW1hdGlvbnM9W10sQS5JbWFnZXM9W10sQS5jdHg9dCxBLlZpZXdQb3J0PW5ldyBmdW5jdGlvbigpe3RoaXMudmlld1BvcnRzPVtdLHRoaXMuQ2xlYXI9ZnVuY3Rpb24oKXt0aGlzLnZpZXdQb3J0cz1bXX0sdGhpcy5TZXRDdXJyZW50PWZ1bmN0aW9uKHQsZSl7dGhpcy52aWV3UG9ydHMucHVzaCh7d2lkdGg6dCxoZWlnaHQ6ZX0pfSx0aGlzLlJlbW92ZUN1cnJlbnQ9ZnVuY3Rpb24oKXt0aGlzLnZpZXdQb3J0cy5wb3AoKX0sdGhpcy5DdXJyZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmlld1BvcnRzW3RoaXMudmlld1BvcnRzLmxlbmd0aC0xXX0sdGhpcy53aWR0aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLkN1cnJlbnQoKS53aWR0aH0sdGhpcy5oZWlnaHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5DdXJyZW50KCkuaGVpZ2h0fSx0aGlzLkNvbXB1dGVTaXplPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsIT10JiZcIm51bWJlclwiPT10eXBlb2YgdD90OlwieFwiPT10P3RoaXMud2lkdGgoKTpcInlcIj09dD90aGlzLmhlaWdodCgpOk1hdGguc3FydChNYXRoLnBvdyh0aGlzLndpZHRoKCksMikrTWF0aC5wb3codGhpcy5oZWlnaHQoKSwyKSkvTWF0aC5zcXJ0KDIpfX19LEEuaW5pdCgpLEEuSW1hZ2VzTG9hZGVkPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PTA7dDxBLkltYWdlcy5sZW5ndGg7dCsrKWlmKCFBLkltYWdlc1t0XS5sb2FkZWQpcmV0dXJuITE7cmV0dXJuITB9LEEudHJpbT1mdW5jdGlvbih0KXtyZXR1cm4gdC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLFwiXCIpfSxBLmNvbXByZXNzU3BhY2VzPWZ1bmN0aW9uKHQpe3JldHVybiB0LnJlcGxhY2UoLyg/IVxcdTMwMDApXFxzKy9nbSxcIiBcIil9LEEuYWpheD1mdW5jdGlvbih0KXt2YXIgZTtyZXR1cm4oZT11LlhNTEh0dHBSZXF1ZXN0P25ldyB1LlhNTEh0dHBSZXF1ZXN0Om5ldyBBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIikpPyhlLm9wZW4oXCJHRVRcIix0LCExKSxlLnNlbmQobnVsbCksZS5yZXNwb25zZVRleHQpOm51bGx9LEEucGFyc2VYbWw9ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFdpbmRvd3MmJnZvaWQgMCE9PVdpbmRvd3MuRGF0YSYmdm9pZCAwIT09V2luZG93cy5EYXRhLlhtbCl7dmFyIHQ9bmV3IFdpbmRvd3MuRGF0YS5YbWwuRG9tLlhtbERvY3VtZW50LGk9bmV3IFdpbmRvd3MuRGF0YS5YbWwuRG9tLlhtbExvYWRTZXR0aW5ncztyZXR1cm4gaS5wcm9oaWJpdER0ZD0hMSx0LmxvYWRYbWwoZSxpKSx0fWlmKCF1LkRPTVBhcnNlcil7ZT1lLnJlcGxhY2UoLzwhRE9DVFlQRSBzdmdbXj5dKj4vLFwiXCIpO3ZhciB0PW5ldyBBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTERPTVwiKTtyZXR1cm4gdC5hc3luYz1cImZhbHNlXCIsdC5sb2FkWE1MKGUpLHR9dHJ5e3ZhciBuPXMueG1sZG9tP25ldyB1LkRPTVBhcnNlcihzLnhtbGRvbSk6bmV3IHUuRE9NUGFyc2VyO3JldHVybiBuLnBhcnNlRnJvbVN0cmluZyhlLFwiaW1hZ2Uvc3ZnK3htbFwiKX1jYXRjaCh0KXtyZXR1cm4obj1zLnhtbGRvbT9uZXcgdS5ET01QYXJzZXIocy54bWxkb20pOm5ldyB1LkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKGUsXCJ0ZXh0L3htbFwiKX19LEEuUHJvcGVydHk9ZnVuY3Rpb24odCxlKXt0aGlzLm5hbWU9dCx0aGlzLnZhbHVlPWV9LEEuUHJvcGVydHkucHJvdG90eXBlLmdldFZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWV9LEEuUHJvcGVydHkucHJvdG90eXBlLmhhc1ZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuIG51bGwhPXRoaXMudmFsdWUmJlwiXCIhPT10aGlzLnZhbHVlfSxBLlByb3BlcnR5LnByb3RvdHlwZS5udW1WYWx1ZT1mdW5jdGlvbigpe2lmKCF0aGlzLmhhc1ZhbHVlKCkpcmV0dXJuIDA7dmFyIHQ9cGFyc2VGbG9hdCh0aGlzLnZhbHVlKTtyZXR1cm4odGhpcy52YWx1ZStcIlwiKS5tYXRjaCgvJSQvKSYmKHQvPTEwMCksdH0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUudmFsdWVPckRlZmF1bHQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuaGFzVmFsdWUoKT90aGlzLnZhbHVlOnR9LEEuUHJvcGVydHkucHJvdG90eXBlLm51bVZhbHVlT3JEZWZhdWx0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmhhc1ZhbHVlKCk/dGhpcy5udW1WYWx1ZSgpOnR9LEEuUHJvcGVydHkucHJvdG90eXBlLmFkZE9wYWNpdHk9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy52YWx1ZTtpZihudWxsIT10LnZhbHVlJiZcIlwiIT10LnZhbHVlJiZcInN0cmluZ1wiPT10eXBlb2YgdGhpcy52YWx1ZSl7dmFyIGk9bmV3IG0odGhpcy52YWx1ZSk7aS5vayYmKGU9XCJyZ2JhKFwiK2kucitcIiwgXCIraS5nK1wiLCBcIitpLmIrXCIsIFwiK3QubnVtVmFsdWUoKStcIilcIil9cmV0dXJuIG5ldyBBLlByb3BlcnR5KHRoaXMubmFtZSxlKX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuZ2V0RGVmaW5pdGlvbj1mdW5jdGlvbigpe3ZhciB0PXRoaXMudmFsdWUubWF0Y2goLyMoW15cXCknXCJdKykvKTtyZXR1cm4gdCYmKHQ9dFsxXSksdHx8KHQ9dGhpcy52YWx1ZSksQS5EZWZpbml0aW9uc1t0XX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuaXNVcmxEZWZpbml0aW9uPWZ1bmN0aW9uKCl7cmV0dXJuIDA9PXRoaXMudmFsdWUuaW5kZXhPZihcInVybChcIil9LEEuUHJvcGVydHkucHJvdG90eXBlLmdldEZpbGxTdHlsZURlZmluaXRpb249ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmdldERlZmluaXRpb24oKTtpZihudWxsIT1pJiZpLmNyZWF0ZUdyYWRpZW50KXJldHVybiBpLmNyZWF0ZUdyYWRpZW50KEEuY3R4LHQsZSk7aWYobnVsbCE9aSYmaS5jcmVhdGVQYXR0ZXJuKXtpZihpLmdldEhyZWZBdHRyaWJ1dGUoKS5oYXNWYWx1ZSgpKXt2YXIgbj1pLmF0dHJpYnV0ZShcInBhdHRlcm5UcmFuc2Zvcm1cIik7aT1pLmdldEhyZWZBdHRyaWJ1dGUoKS5nZXREZWZpbml0aW9uKCksbi5oYXNWYWx1ZSgpJiYoaS5hdHRyaWJ1dGUoXCJwYXR0ZXJuVHJhbnNmb3JtXCIsITApLnZhbHVlPW4udmFsdWUpfXJldHVybiBpLmNyZWF0ZVBhdHRlcm4oQS5jdHgsdCl9cmV0dXJuIG51bGx9LEEuUHJvcGVydHkucHJvdG90eXBlLmdldERQST1mdW5jdGlvbih0KXtyZXR1cm4gOTZ9LEEuUHJvcGVydHkucHJvdG90eXBlLmdldFJFTT1mdW5jdGlvbih0KXtyZXR1cm4gQS5yb290RW1TaXplfSxBLlByb3BlcnR5LnByb3RvdHlwZS5nZXRFTT1mdW5jdGlvbih0KXtyZXR1cm4gQS5lbVNpemV9LEEuUHJvcGVydHkucHJvdG90eXBlLmdldFVuaXRzPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy52YWx1ZStcIlwiO3JldHVybiB0LnJlcGxhY2UoL1swLTlcXC5cXC1dL2csXCJcIil9LEEuUHJvcGVydHkucHJvdG90eXBlLmlzUGl4ZWxzPWZ1bmN0aW9uKCl7aWYoIXRoaXMuaGFzVmFsdWUoKSlyZXR1cm4hMTt2YXIgdD10aGlzLnZhbHVlK1wiXCI7cmV0dXJuISF0Lm1hdGNoKC9weCQvKXx8ISF0Lm1hdGNoKC9eWzAtOV0rJC8pfSxBLlByb3BlcnR5LnByb3RvdHlwZS50b1BpeGVscz1mdW5jdGlvbih0LGUpe2lmKCF0aGlzLmhhc1ZhbHVlKCkpcmV0dXJuIDA7dmFyIGk9dGhpcy52YWx1ZStcIlwiO2lmKGkubWF0Y2goL3JlbSQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpKnRoaXMuZ2V0UkVNKHQpO2lmKGkubWF0Y2goL2VtJC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqdGhpcy5nZXRFTSh0KTtpZihpLm1hdGNoKC9leCQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpKnRoaXMuZ2V0RU0odCkvMjtpZihpLm1hdGNoKC9weCQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpO2lmKGkubWF0Y2goL3B0JC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqdGhpcy5nZXREUEkodCkqKDEvNzIpO2lmKGkubWF0Y2goL3BjJC8pKXJldHVybiAxNSp0aGlzLm51bVZhbHVlKCk7aWYoaS5tYXRjaCgvY20kLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKSp0aGlzLmdldERQSSh0KS8yLjU0O2lmKGkubWF0Y2goL21tJC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqdGhpcy5nZXREUEkodCkvMjUuNDtpZihpLm1hdGNoKC9pbiQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpKnRoaXMuZ2V0RFBJKHQpO2lmKGkubWF0Y2goLyUkLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKSpBLlZpZXdQb3J0LkNvbXB1dGVTaXplKHQpO3ZhciBuPXRoaXMubnVtVmFsdWUoKTtyZXR1cm4gZSYmbjwxP24qQS5WaWV3UG9ydC5Db21wdXRlU2l6ZSh0KTpufSxBLlByb3BlcnR5LnByb3RvdHlwZS50b01pbGxpc2Vjb25kcz1mdW5jdGlvbigpe2lmKCF0aGlzLmhhc1ZhbHVlKCkpcmV0dXJuIDA7dmFyIHQ9dGhpcy52YWx1ZStcIlwiO3JldHVybiB0Lm1hdGNoKC9zJC8pPzFlMyp0aGlzLm51bVZhbHVlKCk6KHQubWF0Y2goL21zJC8pLHRoaXMubnVtVmFsdWUoKSl9LEEuUHJvcGVydHkucHJvdG90eXBlLnRvUmFkaWFucz1mdW5jdGlvbigpe2lmKCF0aGlzLmhhc1ZhbHVlKCkpcmV0dXJuIDA7dmFyIHQ9dGhpcy52YWx1ZStcIlwiO3JldHVybiB0Lm1hdGNoKC9kZWckLyk/dGhpcy5udW1WYWx1ZSgpKihNYXRoLlBJLzE4MCk6dC5tYXRjaCgvZ3JhZCQvKT90aGlzLm51bVZhbHVlKCkqKE1hdGguUEkvMjAwKTp0Lm1hdGNoKC9yYWQkLyk/dGhpcy5udW1WYWx1ZSgpOnRoaXMubnVtVmFsdWUoKSooTWF0aC5QSS8xODApfTt2YXIgdD17YmFzZWxpbmU6XCJhbHBoYWJldGljXCIsXCJiZWZvcmUtZWRnZVwiOlwidG9wXCIsXCJ0ZXh0LWJlZm9yZS1lZGdlXCI6XCJ0b3BcIixtaWRkbGU6XCJtaWRkbGVcIixjZW50cmFsOlwibWlkZGxlXCIsXCJhZnRlci1lZGdlXCI6XCJib3R0b21cIixcInRleHQtYWZ0ZXItZWRnZVwiOlwiYm90dG9tXCIsaWRlb2dyYXBoaWM6XCJpZGVvZ3JhcGhpY1wiLGFscGhhYmV0aWM6XCJhbHBoYWJldGljXCIsaGFuZ2luZzpcImhhbmdpbmdcIixtYXRoZW1hdGljYWw6XCJhbHBoYWJldGljXCJ9O3JldHVybiBBLlByb3BlcnR5LnByb3RvdHlwZS50b1RleHRCYXNlbGluZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmhhc1ZhbHVlKCk/dFt0aGlzLnZhbHVlXTpudWxsfSxBLkZvbnQ9bmV3IGZ1bmN0aW9uKCl7dGhpcy5TdHlsZXM9XCJub3JtYWx8aXRhbGljfG9ibGlxdWV8aW5oZXJpdFwiLHRoaXMuVmFyaWFudHM9XCJub3JtYWx8c21hbGwtY2Fwc3xpbmhlcml0XCIsdGhpcy5XZWlnaHRzPVwibm9ybWFsfGJvbGR8Ym9sZGVyfGxpZ2h0ZXJ8MTAwfDIwMHwzMDB8NDAwfDUwMHw2MDB8NzAwfDgwMHw5MDB8aW5oZXJpdFwiLHRoaXMuQ3JlYXRlRm9udD1mdW5jdGlvbih0LGUsaSxuLHMsYSl7dmFyIHI9bnVsbCE9YT90aGlzLlBhcnNlKGEpOnRoaXMuQ3JlYXRlRm9udChcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsQS5jdHguZm9udCk7cmV0dXJue2ZvbnRGYW1pbHk6cz1zfHxyLmZvbnRGYW1pbHksZm9udFNpemU6bnx8ci5mb250U2l6ZSxmb250U3R5bGU6dHx8ci5mb250U3R5bGUsZm9udFdlaWdodDppfHxyLmZvbnRXZWlnaHQsZm9udFZhcmlhbnQ6ZXx8ci5mb250VmFyaWFudCx0b1N0cmluZzpmdW5jdGlvbigpe3JldHVyblt0aGlzLmZvbnRTdHlsZSx0aGlzLmZvbnRWYXJpYW50LHRoaXMuZm9udFdlaWdodCx0aGlzLmZvbnRTaXplLHRoaXMuZm9udEZhbWlseV0uam9pbihcIiBcIil9fX07dmFyIHI9dGhpczt0aGlzLlBhcnNlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT17fSxpPUEudHJpbShBLmNvbXByZXNzU3BhY2VzKHR8fFwiXCIpKS5zcGxpdChcIiBcIiksbj17Zm9udFNpemU6ITEsZm9udFN0eWxlOiExLGZvbnRXZWlnaHQ6ITEsZm9udFZhcmlhbnQ6ITF9LHM9XCJcIixhPTA7YTxpLmxlbmd0aDthKyspbi5mb250U3R5bGV8fC0xPT1yLlN0eWxlcy5pbmRleE9mKGlbYV0pP24uZm9udFZhcmlhbnR8fC0xPT1yLlZhcmlhbnRzLmluZGV4T2YoaVthXSk/bi5mb250V2VpZ2h0fHwtMT09ci5XZWlnaHRzLmluZGV4T2YoaVthXSk/bi5mb250U2l6ZT9cImluaGVyaXRcIiE9aVthXSYmKHMrPWlbYV0pOihcImluaGVyaXRcIiE9aVthXSYmKGUuZm9udFNpemU9aVthXS5zcGxpdChcIi9cIilbMF0pLG4uZm9udFN0eWxlPW4uZm9udFZhcmlhbnQ9bi5mb250V2VpZ2h0PW4uZm9udFNpemU9ITApOihcImluaGVyaXRcIiE9aVthXSYmKGUuZm9udFdlaWdodD1pW2FdKSxuLmZvbnRTdHlsZT1uLmZvbnRWYXJpYW50PW4uZm9udFdlaWdodD0hMCk6KFwiaW5oZXJpdFwiIT1pW2FdJiYoZS5mb250VmFyaWFudD1pW2FdKSxuLmZvbnRTdHlsZT1uLmZvbnRWYXJpYW50PSEwKTooXCJpbmhlcml0XCIhPWlbYV0mJihlLmZvbnRTdHlsZT1pW2FdKSxuLmZvbnRTdHlsZT0hMCk7cmV0dXJuXCJcIiE9cyYmKGUuZm9udEZhbWlseT1zKSxlfX0sQS5Ub051bWJlckFycmF5PWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1BLnRyaW0oQS5jb21wcmVzc1NwYWNlcygodHx8XCJcIikucmVwbGFjZSgvLC9nLFwiIFwiKSkpLnNwbGl0KFwiIFwiKSxpPTA7aTxlLmxlbmd0aDtpKyspZVtpXT1wYXJzZUZsb2F0KGVbaV0pO3JldHVybiBlfSxBLlBvaW50PWZ1bmN0aW9uKHQsZSl7dGhpcy54PXQsdGhpcy55PWV9LEEuUG9pbnQucHJvdG90eXBlLmFuZ2xlVG89ZnVuY3Rpb24odCl7cmV0dXJuIE1hdGguYXRhbjIodC55LXRoaXMueSx0LngtdGhpcy54KX0sQS5Qb2ludC5wcm90b3R5cGUuYXBwbHlUcmFuc2Zvcm09ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy54KnRbMF0rdGhpcy55KnRbMl0rdFs0XSxpPXRoaXMueCp0WzFdK3RoaXMueSp0WzNdK3RbNV07dGhpcy54PWUsdGhpcy55PWl9LEEuQ3JlYXRlUG9pbnQ9ZnVuY3Rpb24odCl7dmFyIGU9QS5Ub051bWJlckFycmF5KHQpO3JldHVybiBuZXcgQS5Qb2ludChlWzBdLGVbMV0pfSxBLkNyZWF0ZVBhdGg9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPUEuVG9OdW1iZXJBcnJheSh0KSxpPVtdLG49MDtuPGUubGVuZ3RoO24rPTIpaS5wdXNoKG5ldyBBLlBvaW50KGVbbl0sZVtuKzFdKSk7cmV0dXJuIGl9LEEuQm91bmRpbmdCb3g9ZnVuY3Rpb24odCxlLGksbil7dGhpcy54MT1OdW1iZXIuTmFOLHRoaXMueTE9TnVtYmVyLk5hTix0aGlzLngyPU51bWJlci5OYU4sdGhpcy55Mj1OdW1iZXIuTmFOLHRoaXMueD1mdW5jdGlvbigpe3JldHVybiB0aGlzLngxfSx0aGlzLnk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy55MX0sdGhpcy53aWR0aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLngyLXRoaXMueDF9LHRoaXMuaGVpZ2h0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMueTItdGhpcy55MX0sdGhpcy5hZGRQb2ludD1mdW5jdGlvbih0LGUpe251bGwhPXQmJigoaXNOYU4odGhpcy54MSl8fGlzTmFOKHRoaXMueDIpKSYmKHRoaXMueDE9dCx0aGlzLngyPXQpLHQ8dGhpcy54MSYmKHRoaXMueDE9dCksdD50aGlzLngyJiYodGhpcy54Mj10KSksbnVsbCE9ZSYmKChpc05hTih0aGlzLnkxKXx8aXNOYU4odGhpcy55MikpJiYodGhpcy55MT1lLHRoaXMueTI9ZSksZTx0aGlzLnkxJiYodGhpcy55MT1lKSxlPnRoaXMueTImJih0aGlzLnkyPWUpKX0sdGhpcy5hZGRYPWZ1bmN0aW9uKHQpe3RoaXMuYWRkUG9pbnQodCxudWxsKX0sdGhpcy5hZGRZPWZ1bmN0aW9uKHQpe3RoaXMuYWRkUG9pbnQobnVsbCx0KX0sdGhpcy5hZGRCb3VuZGluZ0JveD1mdW5jdGlvbih0KXt0aGlzLmFkZFBvaW50KHQueDEsdC55MSksdGhpcy5hZGRQb2ludCh0LngyLHQueTIpfSx0aGlzLmFkZFF1YWRyYXRpY0N1cnZlPWZ1bmN0aW9uKHQsZSxpLG4scyxhKXt2YXIgcj10KzIvMyooaS10KSxvPWUrMi8zKihuLWUpLGw9cisxLzMqKHMtdCksaD1vKzEvMyooYS1lKTt0aGlzLmFkZEJlemllckN1cnZlKHQsZSxyLGwsbyxoLHMsYSl9LHRoaXMuYWRkQmV6aWVyQ3VydmU9ZnVuY3Rpb24odCxlLGksbixzLGEscixvKXt2YXIgbD1bdCxlXSxoPVtpLG5dLHU9W3MsYV0sYz1bcixvXTt0aGlzLmFkZFBvaW50KGxbMF0sbFsxXSksdGhpcy5hZGRQb2ludChjWzBdLGNbMV0pO2Zvcih2YXIgZj0wO2Y8PTE7ZisrKXt2YXIgbT1mdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5wb3coMS10LDMpKmxbZl0rMypNYXRoLnBvdygxLXQsMikqdCpoW2ZdKzMqKDEtdCkqTWF0aC5wb3codCwyKSp1W2ZdK01hdGgucG93KHQsMykqY1tmXX0scD02KmxbZl0tMTIqaFtmXSs2KnVbZl0sZD0tMypsW2ZdKzkqaFtmXS05KnVbZl0rMypjW2ZdLHk9MypoW2ZdLTMqbFtmXTtpZigwIT1kKXt2YXIgdj1NYXRoLnBvdyhwLDIpLTQqeSpkO2lmKCEodjwwKSl7dmFyIGc9KC1wK01hdGguc3FydCh2KSkvKDIqZCk7MDxnJiZnPDEmJigwPT1mJiZ0aGlzLmFkZFgobShnKSksMT09ZiYmdGhpcy5hZGRZKG0oZykpKTt2YXIgeD0oLXAtTWF0aC5zcXJ0KHYpKS8oMipkKTswPHgmJng8MSYmKDA9PWYmJnRoaXMuYWRkWChtKHgpKSwxPT1mJiZ0aGlzLmFkZFkobSh4KSkpfX1lbHNle2lmKDA9PXApY29udGludWU7dmFyIGI9LXkvcDswPGImJmI8MSYmKDA9PWYmJnRoaXMuYWRkWChtKGIpKSwxPT1mJiZ0aGlzLmFkZFkobShiKSkpfX19LHRoaXMuaXNQb2ludEluQm94PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMueDE8PXQmJnQ8PXRoaXMueDImJnRoaXMueTE8PWUmJmU8PXRoaXMueTJ9LHRoaXMuYWRkUG9pbnQodCxlKSx0aGlzLmFkZFBvaW50KGksbil9LEEuVHJhbnNmb3JtPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7dGhpcy5UeXBlPXt9LHRoaXMuVHlwZS50cmFuc2xhdGU9ZnVuY3Rpb24odCl7dGhpcy5wPUEuQ3JlYXRlUG9pbnQodCksdGhpcy5hcHBseT1mdW5jdGlvbih0KXt0LnRyYW5zbGF0ZSh0aGlzLnAueHx8MCx0aGlzLnAueXx8MCl9LHRoaXMudW5hcHBseT1mdW5jdGlvbih0KXt0LnRyYW5zbGF0ZSgtMSp0aGlzLnAueHx8MCwtMSp0aGlzLnAueXx8MCl9LHRoaXMuYXBwbHlUb1BvaW50PWZ1bmN0aW9uKHQpe3QuYXBwbHlUcmFuc2Zvcm0oWzEsMCwwLDEsdGhpcy5wLnh8fDAsdGhpcy5wLnl8fDBdKX19LHRoaXMuVHlwZS5yb3RhdGU9ZnVuY3Rpb24odCl7dmFyIGU9QS5Ub051bWJlckFycmF5KHQpO3RoaXMuYW5nbGU9bmV3IEEuUHJvcGVydHkoXCJhbmdsZVwiLGVbMF0pLHRoaXMuY3g9ZVsxXXx8MCx0aGlzLmN5PWVbMl18fDAsdGhpcy5hcHBseT1mdW5jdGlvbih0KXt0LnRyYW5zbGF0ZSh0aGlzLmN4LHRoaXMuY3kpLHQucm90YXRlKHRoaXMuYW5nbGUudG9SYWRpYW5zKCkpLHQudHJhbnNsYXRlKC10aGlzLmN4LC10aGlzLmN5KX0sdGhpcy51bmFwcGx5PWZ1bmN0aW9uKHQpe3QudHJhbnNsYXRlKHRoaXMuY3gsdGhpcy5jeSksdC5yb3RhdGUoLTEqdGhpcy5hbmdsZS50b1JhZGlhbnMoKSksdC50cmFuc2xhdGUoLXRoaXMuY3gsLXRoaXMuY3kpfSx0aGlzLmFwcGx5VG9Qb2ludD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmFuZ2xlLnRvUmFkaWFucygpO3QuYXBwbHlUcmFuc2Zvcm0oWzEsMCwwLDEsdGhpcy5wLnh8fDAsdGhpcy5wLnl8fDBdKSx0LmFwcGx5VHJhbnNmb3JtKFtNYXRoLmNvcyhlKSxNYXRoLnNpbihlKSwtTWF0aC5zaW4oZSksTWF0aC5jb3MoZSksMCwwXSksdC5hcHBseVRyYW5zZm9ybShbMSwwLDAsMSwtdGhpcy5wLnh8fDAsLXRoaXMucC55fHwwXSl9fSx0aGlzLlR5cGUuc2NhbGU9ZnVuY3Rpb24odCl7dGhpcy5wPUEuQ3JlYXRlUG9pbnQodCksdGhpcy5hcHBseT1mdW5jdGlvbih0KXt0LnNjYWxlKHRoaXMucC54fHwxLHRoaXMucC55fHx0aGlzLnAueHx8MSl9LHRoaXMudW5hcHBseT1mdW5jdGlvbih0KXt0LnNjYWxlKDEvdGhpcy5wLnh8fDEsMS90aGlzLnAueXx8dGhpcy5wLnh8fDEpfSx0aGlzLmFwcGx5VG9Qb2ludD1mdW5jdGlvbih0KXt0LmFwcGx5VHJhbnNmb3JtKFt0aGlzLnAueHx8MCwwLDAsdGhpcy5wLnl8fDAsMCwwXSl9fSx0aGlzLlR5cGUubWF0cml4PWZ1bmN0aW9uKHQpe3RoaXMubT1BLlRvTnVtYmVyQXJyYXkodCksdGhpcy5hcHBseT1mdW5jdGlvbih0KXt0LnRyYW5zZm9ybSh0aGlzLm1bMF0sdGhpcy5tWzFdLHRoaXMubVsyXSx0aGlzLm1bM10sdGhpcy5tWzRdLHRoaXMubVs1XSl9LHRoaXMudW5hcHBseT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLm1bMF0saT10aGlzLm1bMl0sbj10aGlzLm1bNF0scz10aGlzLm1bMV0sYT10aGlzLm1bM10scj10aGlzLm1bNV0sbz0xLyhlKigxKmEtMCpyKS1pKigxKnMtMCpyKStuKigwKnMtMCphKSk7dC50cmFuc2Zvcm0obyooMSphLTAqciksbyooMCpyLTEqcyksbyooMCpuLTEqaSksbyooMSplLTAqbiksbyooaSpyLW4qYSksbyoobipzLWUqcikpfSx0aGlzLmFwcGx5VG9Qb2ludD1mdW5jdGlvbih0KXt0LmFwcGx5VHJhbnNmb3JtKHRoaXMubSl9fSx0aGlzLlR5cGUuU2tld0Jhc2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPWUuVHlwZS5tYXRyaXgsdGhpcy5iYXNlKHQpLHRoaXMuYW5nbGU9bmV3IEEuUHJvcGVydHkoXCJhbmdsZVwiLHQpfSx0aGlzLlR5cGUuU2tld0Jhc2UucHJvdG90eXBlPW5ldyB0aGlzLlR5cGUubWF0cml4LHRoaXMuVHlwZS5za2V3WD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9ZS5UeXBlLlNrZXdCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLm09WzEsMCxNYXRoLnRhbih0aGlzLmFuZ2xlLnRvUmFkaWFucygpKSwxLDAsMF19LHRoaXMuVHlwZS5za2V3WC5wcm90b3R5cGU9bmV3IHRoaXMuVHlwZS5Ta2V3QmFzZSx0aGlzLlR5cGUuc2tld1k9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPWUuVHlwZS5Ta2V3QmFzZSx0aGlzLmJhc2UodCksdGhpcy5tPVsxLE1hdGgudGFuKHRoaXMuYW5nbGUudG9SYWRpYW5zKCkpLDAsMSwwLDBdfSx0aGlzLlR5cGUuc2tld1kucHJvdG90eXBlPW5ldyB0aGlzLlR5cGUuU2tld0Jhc2UsdGhpcy50cmFuc2Zvcm1zPVtdLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTA7ZTx0aGlzLnRyYW5zZm9ybXMubGVuZ3RoO2UrKyl0aGlzLnRyYW5zZm9ybXNbZV0uYXBwbHkodCl9LHRoaXMudW5hcHBseT1mdW5jdGlvbih0KXtmb3IodmFyIGU9dGhpcy50cmFuc2Zvcm1zLmxlbmd0aC0xOzA8PWU7ZS0tKXRoaXMudHJhbnNmb3Jtc1tlXS51bmFwcGx5KHQpfSx0aGlzLmFwcGx5VG9Qb2ludD1mdW5jdGlvbih0KXtmb3IodmFyIGU9MDtlPHRoaXMudHJhbnNmb3Jtcy5sZW5ndGg7ZSsrKXRoaXMudHJhbnNmb3Jtc1tlXS5hcHBseVRvUG9pbnQodCl9O2Zvcih2YXIgaT1BLnRyaW0oQS5jb21wcmVzc1NwYWNlcyh0KSkucmVwbGFjZSgvXFwpKFthLXpBLVpdKS9nLFwiKSAkMVwiKS5yZXBsYWNlKC9cXCkoXFxzPyxcXHM/KS9nLFwiKSBcIikuc3BsaXQoL1xccyg/PVthLXpdKS8pLG49MDtuPGkubGVuZ3RoO24rKylpZihcIm5vbmVcIiE9PWlbbl0pe3ZhciBzPUEudHJpbShpW25dLnNwbGl0KFwiKFwiKVswXSksYT1pW25dLnNwbGl0KFwiKFwiKVsxXS5yZXBsYWNlKFwiKVwiLFwiXCIpLHI9dGhpcy5UeXBlW3NdO2lmKHZvaWQgMCE9PXIpe3ZhciBvPW5ldyByKGEpO28udHlwZT1zLHRoaXMudHJhbnNmb3Jtcy5wdXNoKG8pfX19LEEuQXNwZWN0UmF0aW89ZnVuY3Rpb24odCxlLGksbixzLGEscixvLGwsaCl7dmFyIHU9KGU9KGU9QS5jb21wcmVzc1NwYWNlcyhlKSkucmVwbGFjZSgvXmRlZmVyXFxzLyxcIlwiKSkuc3BsaXQoXCIgXCIpWzBdfHxcInhNaWRZTWlkXCIsYz1lLnNwbGl0KFwiIFwiKVsxXXx8XCJtZWV0XCIsZj1pL24sbT1zL2EscD1NYXRoLm1pbihmLG0pLGQ9TWF0aC5tYXgoZixtKTtcIm1lZXRcIj09YyYmKG4qPXAsYSo9cCksXCJzbGljZVwiPT1jJiYobio9ZCxhKj1kKSxsPW5ldyBBLlByb3BlcnR5KFwicmVmWFwiLGwpLGg9bmV3IEEuUHJvcGVydHkoXCJyZWZZXCIsaCksbC5oYXNWYWx1ZSgpJiZoLmhhc1ZhbHVlKCk/dC50cmFuc2xhdGUoLXAqbC50b1BpeGVscyhcInhcIiksLXAqaC50b1BpeGVscyhcInlcIikpOih1Lm1hdGNoKC9eeE1pZC8pJiYoXCJtZWV0XCI9PWMmJnA9PW18fFwic2xpY2VcIj09YyYmZD09bSkmJnQudHJhbnNsYXRlKGkvMi1uLzIsMCksdS5tYXRjaCgvWU1pZCQvKSYmKFwibWVldFwiPT1jJiZwPT1mfHxcInNsaWNlXCI9PWMmJmQ9PWYpJiZ0LnRyYW5zbGF0ZSgwLHMvMi1hLzIpLHUubWF0Y2goL154TWF4LykmJihcIm1lZXRcIj09YyYmcD09bXx8XCJzbGljZVwiPT1jJiZkPT1tKSYmdC50cmFuc2xhdGUoaS1uLDApLHUubWF0Y2goL1lNYXgkLykmJihcIm1lZXRcIj09YyYmcD09Znx8XCJzbGljZVwiPT1jJiZkPT1mKSYmdC50cmFuc2xhdGUoMCxzLWEpKSxcIm5vbmVcIj09dT90LnNjYWxlKGYsbSk6XCJtZWV0XCI9PWM/dC5zY2FsZShwLHApOlwic2xpY2VcIj09YyYmdC5zY2FsZShkLGQpLHQudHJhbnNsYXRlKG51bGw9PXI/MDotcixudWxsPT1vPzA6LW8pfSxBLkVsZW1lbnQ9e30sQS5FbXB0eVByb3BlcnR5PW5ldyBBLlByb3BlcnR5KFwiRU1QVFlcIixcIlwiKSxBLkVsZW1lbnQuRWxlbWVudEJhc2U9ZnVuY3Rpb24oYSl7dGhpcy5hdHRyaWJ1dGVzPXt9LHRoaXMuc3R5bGVzPXt9LHRoaXMuc3R5bGVzU3BlY2lmaWNpdHk9e30sdGhpcy5jaGlsZHJlbj1bXSx0aGlzLmF0dHJpYnV0ZT1mdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuYXR0cmlidXRlc1t0XTtyZXR1cm4gbnVsbCE9aT9pOigxPT1lJiYoaT1uZXcgQS5Qcm9wZXJ0eSh0LFwiXCIpLHRoaXMuYXR0cmlidXRlc1t0XT1pKSxpfHxBLkVtcHR5UHJvcGVydHkpfSx0aGlzLmdldEhyZWZBdHRyaWJ1dGU9ZnVuY3Rpb24oKXtmb3IodmFyIHQgaW4gdGhpcy5hdHRyaWJ1dGVzKWlmKFwiaHJlZlwiPT10fHx0Lm1hdGNoKC86aHJlZiQvKSlyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzW3RdO3JldHVybiBBLkVtcHR5UHJvcGVydHl9LHRoaXMuc3R5bGU9ZnVuY3Rpb24odCxlLGkpe3ZhciBuPXRoaXMuc3R5bGVzW3RdO2lmKG51bGwhPW4pcmV0dXJuIG47dmFyIHM9dGhpcy5hdHRyaWJ1dGUodCk7aWYobnVsbCE9cyYmcy5oYXNWYWx1ZSgpKXJldHVybiB0aGlzLnN0eWxlc1t0XT1zO2lmKDEhPWkpe3ZhciBhPXRoaXMucGFyZW50O2lmKG51bGwhPWEpe3ZhciByPWEuc3R5bGUodCk7aWYobnVsbCE9ciYmci5oYXNWYWx1ZSgpKXJldHVybiByfX1yZXR1cm4gMT09ZSYmKG49bmV3IEEuUHJvcGVydHkodCxcIlwiKSx0aGlzLnN0eWxlc1t0XT1uKSxufHxBLkVtcHR5UHJvcGVydHl9LHRoaXMucmVuZGVyPWZ1bmN0aW9uKHQpe2lmKFwibm9uZVwiIT10aGlzLnN0eWxlKFwiZGlzcGxheVwiKS52YWx1ZSYmXCJoaWRkZW5cIiE9dGhpcy5zdHlsZShcInZpc2liaWxpdHlcIikudmFsdWUpe2lmKHQuc2F2ZSgpLHRoaXMuc3R5bGUoXCJtYXNrXCIpLmhhc1ZhbHVlKCkpe3ZhciBlPXRoaXMuc3R5bGUoXCJtYXNrXCIpLmdldERlZmluaXRpb24oKTtudWxsIT1lJiZlLmFwcGx5KHQsdGhpcyl9ZWxzZSBpZih0aGlzLnN0eWxlKFwiZmlsdGVyXCIpLmhhc1ZhbHVlKCkpe3ZhciBpPXRoaXMuc3R5bGUoXCJmaWx0ZXJcIikuZ2V0RGVmaW5pdGlvbigpO251bGwhPWkmJmkuYXBwbHkodCx0aGlzKX1lbHNlIHRoaXMuc2V0Q29udGV4dCh0KSx0aGlzLnJlbmRlckNoaWxkcmVuKHQpLHRoaXMuY2xlYXJDb250ZXh0KHQpO3QucmVzdG9yZSgpfX0sdGhpcy5zZXRDb250ZXh0PWZ1bmN0aW9uKHQpe30sdGhpcy5jbGVhckNvbnRleHQ9ZnVuY3Rpb24odCl7fSx0aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dGhpcy5jaGlsZHJlbi5sZW5ndGg7ZSsrKXRoaXMuY2hpbGRyZW5bZV0ucmVuZGVyKHQpfSx0aGlzLmFkZENoaWxkPWZ1bmN0aW9uKHQsZSl7dmFyIGk9dDtlJiYoaT1BLkNyZWF0ZUVsZW1lbnQodCkpLGkucGFyZW50PXRoaXMsXCJ0aXRsZVwiIT1pLnR5cGUmJnRoaXMuY2hpbGRyZW4ucHVzaChpKX0sdGhpcy5hZGRTdHlsZXNGcm9tU3R5bGVEZWZpbml0aW9uPWZ1bmN0aW9uKCl7Zm9yKHZhciB0IGluIEEuU3R5bGVzKWlmKFwiQFwiIT10WzBdJiZmKGEsdCkpe3ZhciBlPUEuU3R5bGVzW3RdLGk9QS5TdHlsZXNTcGVjaWZpY2l0eVt0XTtpZihudWxsIT1lKWZvcih2YXIgbiBpbiBlKXt2YXIgcz10aGlzLnN0eWxlc1NwZWNpZmljaXR5W25dO3ZvaWQgMD09PXMmJihzPVwiMDAwXCIpLHM8aSYmKHRoaXMuc3R5bGVzW25dPWVbbl0sdGhpcy5zdHlsZXNTcGVjaWZpY2l0eVtuXT1pKX19fTt2YXIgdCxlPW5ldyBSZWdFeHAoXCJeW0EtWi1dKyRcIik7aWYobnVsbCE9YSYmMT09YS5ub2RlVHlwZSl7Zm9yKHZhciBpPTA7aTxhLmF0dHJpYnV0ZXMubGVuZ3RoO2krKyl7dmFyIG49YS5hdHRyaWJ1dGVzW2ldLHM9KHQ9bi5ub2RlTmFtZSxlLnRlc3QodCk/dC50b0xvd2VyQ2FzZSgpOnQpO3RoaXMuYXR0cmlidXRlc1tzXT1uZXcgQS5Qcm9wZXJ0eShzLG4udmFsdWUpfWlmKHRoaXMuYWRkU3R5bGVzRnJvbVN0eWxlRGVmaW5pdGlvbigpLHRoaXMuYXR0cmlidXRlKFwic3R5bGVcIikuaGFzVmFsdWUoKSl7dmFyIHI9dGhpcy5hdHRyaWJ1dGUoXCJzdHlsZVwiKS52YWx1ZS5zcGxpdChcIjtcIik7Zm9yKGk9MDtpPHIubGVuZ3RoO2krKylpZihcIlwiIT1BLnRyaW0ocltpXSkpe3ZhciBvPXJbaV0uc3BsaXQoXCI6XCIpLGw9QS50cmltKG9bMF0pLGg9QS50cmltKG9bMV0pO3RoaXMuc3R5bGVzW2xdPW5ldyBBLlByb3BlcnR5KGwsaCl9fWZvcih0aGlzLmF0dHJpYnV0ZShcImlkXCIpLmhhc1ZhbHVlKCkmJm51bGw9PUEuRGVmaW5pdGlvbnNbdGhpcy5hdHRyaWJ1dGUoXCJpZFwiKS52YWx1ZV0mJihBLkRlZmluaXRpb25zW3RoaXMuYXR0cmlidXRlKFwiaWRcIikudmFsdWVdPXRoaXMpLGk9MDtpPGEuY2hpbGROb2Rlcy5sZW5ndGg7aSsrKXt2YXIgdT1hLmNoaWxkTm9kZXNbaV07aWYoMT09dS5ub2RlVHlwZSYmdGhpcy5hZGRDaGlsZCh1LCEwKSx0aGlzLmNhcHR1cmVUZXh0Tm9kZXMmJigzPT11Lm5vZGVUeXBlfHw0PT11Lm5vZGVUeXBlKSl7dmFyIGM9dS52YWx1ZXx8dS50ZXh0fHx1LnRleHRDb250ZW50fHxcIlwiO1wiXCIhPUEuY29tcHJlc3NTcGFjZXMoYykmJnRoaXMuYWRkQ2hpbGQobmV3IEEuRWxlbWVudC50c3Bhbih1KSwhMSl9fX19LEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuY2FsY3VsYXRlT3BhY2l0eT1mdW5jdGlvbigpe2Zvcih2YXIgdD0xLGU9dGhpcztudWxsIT1lOyl7dmFyIGk9ZS5zdHlsZShcIm9wYWNpdHlcIiwhMSwhMCk7aS5oYXNWYWx1ZSgpJiYodCo9aS5udW1WYWx1ZSgpKSxlPWUucGFyZW50fXJldHVybiB0fSx0aGlzLnNldENvbnRleHQ9ZnVuY3Rpb24odCxlKXtpZighZSl7dmFyIGk7aWYodGhpcy5zdHlsZShcImZpbGxcIikuaXNVcmxEZWZpbml0aW9uKCkpbnVsbCE9KGk9dGhpcy5zdHlsZShcImZpbGxcIikuZ2V0RmlsbFN0eWxlRGVmaW5pdGlvbih0aGlzLHRoaXMuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIikpKSYmKHQuZmlsbFN0eWxlPWkpO2Vsc2UgaWYodGhpcy5zdHlsZShcImZpbGxcIikuaGFzVmFsdWUoKSl7dmFyIG47XCJjdXJyZW50Q29sb3JcIj09KG49dGhpcy5zdHlsZShcImZpbGxcIikpLnZhbHVlJiYobi52YWx1ZT10aGlzLnN0eWxlKFwiY29sb3JcIikudmFsdWUpLFwiaW5oZXJpdFwiIT1uLnZhbHVlJiYodC5maWxsU3R5bGU9XCJub25lXCI9PW4udmFsdWU/XCJyZ2JhKDAsMCwwLDApXCI6bi52YWx1ZSl9aWYodGhpcy5zdHlsZShcImZpbGwtb3BhY2l0eVwiKS5oYXNWYWx1ZSgpJiYobj0obj1uZXcgQS5Qcm9wZXJ0eShcImZpbGxcIix0LmZpbGxTdHlsZSkpLmFkZE9wYWNpdHkodGhpcy5zdHlsZShcImZpbGwtb3BhY2l0eVwiKSksdC5maWxsU3R5bGU9bi52YWx1ZSksdGhpcy5zdHlsZShcInN0cm9rZVwiKS5pc1VybERlZmluaXRpb24oKSludWxsIT0oaT10aGlzLnN0eWxlKFwic3Ryb2tlXCIpLmdldEZpbGxTdHlsZURlZmluaXRpb24odGhpcyx0aGlzLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIikpKSYmKHQuc3Ryb2tlU3R5bGU9aSk7ZWxzZSBpZih0aGlzLnN0eWxlKFwic3Ryb2tlXCIpLmhhc1ZhbHVlKCkpe3ZhciBzO1wiY3VycmVudENvbG9yXCI9PShzPXRoaXMuc3R5bGUoXCJzdHJva2VcIikpLnZhbHVlJiYocy52YWx1ZT10aGlzLnN0eWxlKFwiY29sb3JcIikudmFsdWUpLFwiaW5oZXJpdFwiIT1zLnZhbHVlJiYodC5zdHJva2VTdHlsZT1cIm5vbmVcIj09cy52YWx1ZT9cInJnYmEoMCwwLDAsMClcIjpzLnZhbHVlKX1pZih0aGlzLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIikuaGFzVmFsdWUoKSYmKHM9KHM9bmV3IEEuUHJvcGVydHkoXCJzdHJva2VcIix0LnN0cm9rZVN0eWxlKSkuYWRkT3BhY2l0eSh0aGlzLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIikpLHQuc3Ryb2tlU3R5bGU9cy52YWx1ZSksdGhpcy5zdHlsZShcInN0cm9rZS13aWR0aFwiKS5oYXNWYWx1ZSgpKXt2YXIgYT10aGlzLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIpLnRvUGl4ZWxzKCk7dC5saW5lV2lkdGg9MD09YT8uMDAxOmF9aWYodGhpcy5zdHlsZShcInN0cm9rZS1saW5lY2FwXCIpLmhhc1ZhbHVlKCkmJih0LmxpbmVDYXA9dGhpcy5zdHlsZShcInN0cm9rZS1saW5lY2FwXCIpLnZhbHVlKSx0aGlzLnN0eWxlKFwic3Ryb2tlLWxpbmVqb2luXCIpLmhhc1ZhbHVlKCkmJih0LmxpbmVKb2luPXRoaXMuc3R5bGUoXCJzdHJva2UtbGluZWpvaW5cIikudmFsdWUpLHRoaXMuc3R5bGUoXCJzdHJva2UtbWl0ZXJsaW1pdFwiKS5oYXNWYWx1ZSgpJiYodC5taXRlckxpbWl0PXRoaXMuc3R5bGUoXCJzdHJva2UtbWl0ZXJsaW1pdFwiKS52YWx1ZSksdGhpcy5zdHlsZShcInBhaW50LW9yZGVyXCIpLmhhc1ZhbHVlKCkmJih0LnBhaW50T3JkZXI9dGhpcy5zdHlsZShcInBhaW50LW9yZGVyXCIpLnZhbHVlKSx0aGlzLnN0eWxlKFwic3Ryb2tlLWRhc2hhcnJheVwiKS5oYXNWYWx1ZSgpJiZcIm5vbmVcIiE9dGhpcy5zdHlsZShcInN0cm9rZS1kYXNoYXJyYXlcIikudmFsdWUpe3ZhciByPUEuVG9OdW1iZXJBcnJheSh0aGlzLnN0eWxlKFwic3Ryb2tlLWRhc2hhcnJheVwiKS52YWx1ZSk7dm9pZCAwIT09dC5zZXRMaW5lRGFzaD90LnNldExpbmVEYXNoKHIpOnZvaWQgMCE9PXQud2Via2l0TGluZURhc2g/dC53ZWJraXRMaW5lRGFzaD1yOnZvaWQgMD09PXQubW96RGFzaHx8MT09ci5sZW5ndGgmJjA9PXJbMF18fCh0Lm1vekRhc2g9cik7dmFyIG89dGhpcy5zdHlsZShcInN0cm9rZS1kYXNob2Zmc2V0XCIpLnRvUGl4ZWxzKCk7dm9pZCAwIT09dC5saW5lRGFzaE9mZnNldD90LmxpbmVEYXNoT2Zmc2V0PW86dm9pZCAwIT09dC53ZWJraXRMaW5lRGFzaE9mZnNldD90LndlYmtpdExpbmVEYXNoT2Zmc2V0PW86dm9pZCAwIT09dC5tb3pEYXNoT2Zmc2V0JiYodC5tb3pEYXNoT2Zmc2V0PW8pfX1pZih2b2lkIDAhPT10LmZvbnQpe3QuZm9udD1BLkZvbnQuQ3JlYXRlRm9udCh0aGlzLnN0eWxlKFwiZm9udC1zdHlsZVwiKS52YWx1ZSx0aGlzLnN0eWxlKFwiZm9udC12YXJpYW50XCIpLnZhbHVlLHRoaXMuc3R5bGUoXCJmb250LXdlaWdodFwiKS52YWx1ZSx0aGlzLnN0eWxlKFwiZm9udC1zaXplXCIpLmhhc1ZhbHVlKCk/dGhpcy5zdHlsZShcImZvbnQtc2l6ZVwiKS50b1BpeGVscygpK1wicHhcIjpcIlwiLHRoaXMuc3R5bGUoXCJmb250LWZhbWlseVwiKS52YWx1ZSkudG9TdHJpbmcoKTt2YXIgbD10aGlzLnN0eWxlKFwiZm9udC1zaXplXCIsITEsITEpO2wuaXNQaXhlbHMoKSYmKEEuZW1TaXplPWwudG9QaXhlbHMoKSl9aWYodGhpcy5zdHlsZShcInRyYW5zZm9ybVwiLCExLCEwKS5oYXNWYWx1ZSgpJiZuZXcgQS5UcmFuc2Zvcm0odGhpcy5zdHlsZShcInRyYW5zZm9ybVwiLCExLCEwKS52YWx1ZSkuYXBwbHkodCksdGhpcy5zdHlsZShcImNsaXAtcGF0aFwiLCExLCEwKS5oYXNWYWx1ZSgpKXt2YXIgaD10aGlzLnN0eWxlKFwiY2xpcC1wYXRoXCIsITEsITApLmdldERlZmluaXRpb24oKTtudWxsIT1oJiZoLmFwcGx5KHQpfXQuZ2xvYmFsQWxwaGE9dGhpcy5jYWxjdWxhdGVPcGFjaXR5KCl9fSxBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsIT10JiZ0LmJlZ2luUGF0aCgpLG5ldyBBLkJvdW5kaW5nQm94fSx0aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe3RoaXMucGF0aCh0KSxBLk1vdXNlLmNoZWNrUGF0aCh0aGlzLHQpLFwiXCIhPXQuZmlsbFN0eWxlJiYoXCJpbmhlcml0XCIhPXRoaXMuc3R5bGUoXCJmaWxsLXJ1bGVcIikudmFsdWVPckRlZmF1bHQoXCJpbmhlcml0XCIpP3QuZmlsbCh0aGlzLnN0eWxlKFwiZmlsbC1ydWxlXCIpLnZhbHVlKTp0LmZpbGwoKSksXCJcIiE9dC5zdHJva2VTdHlsZSYmdC5zdHJva2UoKTt2YXIgZT10aGlzLmdldE1hcmtlcnMoKTtpZihudWxsIT1lKXtpZih0aGlzLnN0eWxlKFwibWFya2VyLXN0YXJ0XCIpLmlzVXJsRGVmaW5pdGlvbigpJiYoaT10aGlzLnN0eWxlKFwibWFya2VyLXN0YXJ0XCIpLmdldERlZmluaXRpb24oKSkucmVuZGVyKHQsZVswXVswXSxlWzBdWzFdKSx0aGlzLnN0eWxlKFwibWFya2VyLW1pZFwiKS5pc1VybERlZmluaXRpb24oKSlmb3IodmFyIGk9dGhpcy5zdHlsZShcIm1hcmtlci1taWRcIikuZ2V0RGVmaW5pdGlvbigpLG49MTtuPGUubGVuZ3RoLTE7bisrKWkucmVuZGVyKHQsZVtuXVswXSxlW25dWzFdKTt0aGlzLnN0eWxlKFwibWFya2VyLWVuZFwiKS5pc1VybERlZmluaXRpb24oKSYmKGk9dGhpcy5zdHlsZShcIm1hcmtlci1lbmRcIikuZ2V0RGVmaW5pdGlvbigpKS5yZW5kZXIodCxlW2UubGVuZ3RoLTFdWzBdLGVbZS5sZW5ndGgtMV1bMV0pfX0sdGhpcy5nZXRCb3VuZGluZ0JveD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnBhdGgoKX0sdGhpcy5nZXRNYXJrZXJzPWZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9fSxBLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsQS5FbGVtZW50LnN2Zz1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYmFzZUNsZWFyQ29udGV4dD10aGlzLmNsZWFyQ29udGV4dCx0aGlzLmNsZWFyQ29udGV4dD1mdW5jdGlvbih0KXt0aGlzLmJhc2VDbGVhckNvbnRleHQodCksQS5WaWV3UG9ydC5SZW1vdmVDdXJyZW50KCl9LHRoaXMuYmFzZVNldENvbnRleHQ9dGhpcy5zZXRDb250ZXh0LHRoaXMuc2V0Q29udGV4dD1mdW5jdGlvbih0KXtpZih0LnN0cm9rZVN0eWxlPVwicmdiYSgwLDAsMCwwKVwiLHQubGluZUNhcD1cImJ1dHRcIix0LmxpbmVKb2luPVwibWl0ZXJcIix0Lm1pdGVyTGltaXQ9NCx0LmNhbnZhcy5zdHlsZSYmdm9pZCAwIT09dC5mb250JiZ2b2lkIDAhPT11LmdldENvbXB1dGVkU3R5bGUpe3QuZm9udD11LmdldENvbXB1dGVkU3R5bGUodC5jYW52YXMpLmdldFByb3BlcnR5VmFsdWUoXCJmb250XCIpO3ZhciBlPW5ldyBBLlByb3BlcnR5KFwiZm9udFNpemVcIixBLkZvbnQuUGFyc2UodC5mb250KS5mb250U2l6ZSk7ZS5oYXNWYWx1ZSgpJiYoQS5yb290RW1TaXplPUEuZW1TaXplPWUudG9QaXhlbHMoXCJ5XCIpKX10aGlzLmJhc2VTZXRDb250ZXh0KHQpLHRoaXMuYXR0cmlidXRlKFwieFwiKS5oYXNWYWx1ZSgpfHwodGhpcy5hdHRyaWJ1dGUoXCJ4XCIsITApLnZhbHVlPTApLHRoaXMuYXR0cmlidXRlKFwieVwiKS5oYXNWYWx1ZSgpfHwodGhpcy5hdHRyaWJ1dGUoXCJ5XCIsITApLnZhbHVlPTApLHQudHJhbnNsYXRlKHRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksdGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLnRvUGl4ZWxzKFwieVwiKSk7dmFyIGk9QS5WaWV3UG9ydC53aWR0aCgpLG49QS5WaWV3UG9ydC5oZWlnaHQoKTtpZih0aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIsITApLnZhbHVlPVwiMTAwJVwiKSx0aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS5oYXNWYWx1ZSgpfHwodGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIiwhMCkudmFsdWU9XCIxMDAlXCIpLHZvaWQgMD09PXRoaXMucm9vdCl7aT10aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKSxuPXRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLnRvUGl4ZWxzKFwieVwiKTt2YXIgcz0wLGE9MDt0aGlzLmF0dHJpYnV0ZShcInJlZlhcIikuaGFzVmFsdWUoKSYmdGhpcy5hdHRyaWJ1dGUoXCJyZWZZXCIpLmhhc1ZhbHVlKCkmJihzPS10aGlzLmF0dHJpYnV0ZShcInJlZlhcIikudG9QaXhlbHMoXCJ4XCIpLGE9LXRoaXMuYXR0cmlidXRlKFwicmVmWVwiKS50b1BpeGVscyhcInlcIikpLFwidmlzaWJsZVwiIT10aGlzLmF0dHJpYnV0ZShcIm92ZXJmbG93XCIpLnZhbHVlT3JEZWZhdWx0KFwiaGlkZGVuXCIpJiYodC5iZWdpblBhdGgoKSx0Lm1vdmVUbyhzLGEpLHQubGluZVRvKGksYSksdC5saW5lVG8oaSxuKSx0LmxpbmVUbyhzLG4pLHQuY2xvc2VQYXRoKCksdC5jbGlwKCkpfWlmKEEuVmlld1BvcnQuU2V0Q3VycmVudChpLG4pLHRoaXMuYXR0cmlidXRlKFwidmlld0JveFwiKS5oYXNWYWx1ZSgpKXt2YXIgcj1BLlRvTnVtYmVyQXJyYXkodGhpcy5hdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpLnZhbHVlKSxvPXJbMF0sbD1yWzFdO2k9clsyXSxuPXJbM10sQS5Bc3BlY3RSYXRpbyh0LHRoaXMuYXR0cmlidXRlKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiKS52YWx1ZSxBLlZpZXdQb3J0LndpZHRoKCksaSxBLlZpZXdQb3J0LmhlaWdodCgpLG4sbyxsLHRoaXMuYXR0cmlidXRlKFwicmVmWFwiKS52YWx1ZSx0aGlzLmF0dHJpYnV0ZShcInJlZllcIikudmFsdWUpLEEuVmlld1BvcnQuUmVtb3ZlQ3VycmVudCgpLEEuVmlld1BvcnQuU2V0Q3VycmVudChyWzJdLHJbM10pfX19LEEuRWxlbWVudC5zdmcucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxBLkVsZW1lbnQucmVjdD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksaT10aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIikscz10aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIiksYT10aGlzLmF0dHJpYnV0ZShcInJ4XCIpLnRvUGl4ZWxzKFwieFwiKSxyPXRoaXMuYXR0cmlidXRlKFwicnlcIikudG9QaXhlbHMoXCJ5XCIpO2lmKHRoaXMuYXR0cmlidXRlKFwicnhcIikuaGFzVmFsdWUoKSYmIXRoaXMuYXR0cmlidXRlKFwicnlcIikuaGFzVmFsdWUoKSYmKHI9YSksdGhpcy5hdHRyaWJ1dGUoXCJyeVwiKS5oYXNWYWx1ZSgpJiYhdGhpcy5hdHRyaWJ1dGUoXCJyeFwiKS5oYXNWYWx1ZSgpJiYoYT1yKSxhPU1hdGgubWluKGEsbi8yKSxyPU1hdGgubWluKHIscy8yKSxudWxsIT10KXt2YXIgbz0oTWF0aC5zcXJ0KDIpLTEpLzMqNDt0LmJlZ2luUGF0aCgpLHQubW92ZVRvKGUrYSxpKSx0LmxpbmVUbyhlK24tYSxpKSx0LmJlemllckN1cnZlVG8oZStuLWErbyphLGksZStuLGkrci1vKnIsZStuLGkrciksdC5saW5lVG8oZStuLGkrcy1yKSx0LmJlemllckN1cnZlVG8oZStuLGkrcy1yK28qcixlK24tYStvKmEsaStzLGUrbi1hLGkrcyksdC5saW5lVG8oZSthLGkrcyksdC5iZXppZXJDdXJ2ZVRvKGUrYS1vKmEsaStzLGUsaStzLXIrbypyLGUsaStzLXIpLHQubGluZVRvKGUsaStyKSx0LmJlemllckN1cnZlVG8oZSxpK3ItbypyLGUrYS1vKmEsaSxlK2EsaSksdC5jbG9zZVBhdGgoKX1yZXR1cm4gbmV3IEEuQm91bmRpbmdCb3goZSxpLGUrbixpK3MpfX0sQS5FbGVtZW50LnJlY3QucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLEEuRWxlbWVudC5jaXJjbGU9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMucGF0aD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmF0dHJpYnV0ZShcImN4XCIpLnRvUGl4ZWxzKFwieFwiKSxpPXRoaXMuYXR0cmlidXRlKFwiY3lcIikudG9QaXhlbHMoXCJ5XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJyXCIpLnRvUGl4ZWxzKCk7cmV0dXJuIG51bGwhPXQmJih0LmJlZ2luUGF0aCgpLHQuYXJjKGUsaSxuLDAsMipNYXRoLlBJLCExKSx0LmNsb3NlUGF0aCgpKSxuZXcgQS5Cb3VuZGluZ0JveChlLW4saS1uLGUrbixpK24pfX0sQS5FbGVtZW50LmNpcmNsZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsQS5FbGVtZW50LmVsbGlwc2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMucGF0aD1mdW5jdGlvbih0KXt2YXIgZT0oTWF0aC5zcXJ0KDIpLTEpLzMqNCxpPXRoaXMuYXR0cmlidXRlKFwicnhcIikudG9QaXhlbHMoXCJ4XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJyeVwiKS50b1BpeGVscyhcInlcIikscz10aGlzLmF0dHJpYnV0ZShcImN4XCIpLnRvUGl4ZWxzKFwieFwiKSxhPXRoaXMuYXR0cmlidXRlKFwiY3lcIikudG9QaXhlbHMoXCJ5XCIpO3JldHVybiBudWxsIT10JiYodC5iZWdpblBhdGgoKSx0Lm1vdmVUbyhzK2ksYSksdC5iZXppZXJDdXJ2ZVRvKHMraSxhK2UqbixzK2UqaSxhK24scyxhK24pLHQuYmV6aWVyQ3VydmVUbyhzLWUqaSxhK24scy1pLGErZSpuLHMtaSxhKSx0LmJlemllckN1cnZlVG8ocy1pLGEtZSpuLHMtZSppLGEtbixzLGEtbiksdC5iZXppZXJDdXJ2ZVRvKHMrZSppLGEtbixzK2ksYS1lKm4scytpLGEpLHQuY2xvc2VQYXRoKCkpLG5ldyBBLkJvdW5kaW5nQm94KHMtaSxhLW4scytpLGErbil9fSxBLkVsZW1lbnQuZWxsaXBzZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsQS5FbGVtZW50LmxpbmU9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuZ2V0UG9pbnRzPWZ1bmN0aW9uKCl7cmV0dXJuW25ldyBBLlBvaW50KHRoaXMuYXR0cmlidXRlKFwieDFcIikudG9QaXhlbHMoXCJ4XCIpLHRoaXMuYXR0cmlidXRlKFwieTFcIikudG9QaXhlbHMoXCJ5XCIpKSxuZXcgQS5Qb2ludCh0aGlzLmF0dHJpYnV0ZShcIngyXCIpLnRvUGl4ZWxzKFwieFwiKSx0aGlzLmF0dHJpYnV0ZShcInkyXCIpLnRvUGl4ZWxzKFwieVwiKSldfSx0aGlzLnBhdGg9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5nZXRQb2ludHMoKTtyZXR1cm4gbnVsbCE9dCYmKHQuYmVnaW5QYXRoKCksdC5tb3ZlVG8oZVswXS54LGVbMF0ueSksdC5saW5lVG8oZVsxXS54LGVbMV0ueSkpLG5ldyBBLkJvdW5kaW5nQm94KGVbMF0ueCxlWzBdLnksZVsxXS54LGVbMV0ueSl9LHRoaXMuZ2V0TWFya2Vycz1mdW5jdGlvbigpe3ZhciB0PXRoaXMuZ2V0UG9pbnRzKCksZT10WzBdLmFuZ2xlVG8odFsxXSk7cmV0dXJuW1t0WzBdLGVdLFt0WzFdLGVdXX19LEEuRWxlbWVudC5saW5lLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSxBLkVsZW1lbnQucG9seWxpbmU9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMucG9pbnRzPUEuQ3JlYXRlUGF0aCh0aGlzLmF0dHJpYnV0ZShcInBvaW50c1wiKS52YWx1ZSksdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3ZhciBlPW5ldyBBLkJvdW5kaW5nQm94KHRoaXMucG9pbnRzWzBdLngsdGhpcy5wb2ludHNbMF0ueSk7bnVsbCE9dCYmKHQuYmVnaW5QYXRoKCksdC5tb3ZlVG8odGhpcy5wb2ludHNbMF0ueCx0aGlzLnBvaW50c1swXS55KSk7Zm9yKHZhciBpPTE7aTx0aGlzLnBvaW50cy5sZW5ndGg7aSsrKWUuYWRkUG9pbnQodGhpcy5wb2ludHNbaV0ueCx0aGlzLnBvaW50c1tpXS55KSxudWxsIT10JiZ0LmxpbmVUbyh0aGlzLnBvaW50c1tpXS54LHRoaXMucG9pbnRzW2ldLnkpO3JldHVybiBlfSx0aGlzLmdldE1hcmtlcnM9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10sZT0wO2U8dGhpcy5wb2ludHMubGVuZ3RoLTE7ZSsrKXQucHVzaChbdGhpcy5wb2ludHNbZV0sdGhpcy5wb2ludHNbZV0uYW5nbGVUbyh0aGlzLnBvaW50c1tlKzFdKV0pO3JldHVybiAwPHQubGVuZ3RoJiZ0LnB1c2goW3RoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aC0xXSx0W3QubGVuZ3RoLTFdWzFdXSksdH19LEEuRWxlbWVudC5wb2x5bGluZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsQS5FbGVtZW50LnBvbHlnb249ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5wb2x5bGluZSx0aGlzLmJhc2UodCksdGhpcy5iYXNlUGF0aD10aGlzLnBhdGgsdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuYmFzZVBhdGgodCk7cmV0dXJuIG51bGwhPXQmJih0LmxpbmVUbyh0aGlzLnBvaW50c1swXS54LHRoaXMucG9pbnRzWzBdLnkpLHQuY2xvc2VQYXRoKCkpLGV9fSxBLkVsZW1lbnQucG9seWdvbi5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5wb2x5bGluZSxBLkVsZW1lbnQucGF0aD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSx0aGlzLmJhc2UodCk7dmFyIGU9dGhpcy5hdHRyaWJ1dGUoXCJkXCIpLnZhbHVlO2U9ZS5yZXBsYWNlKC8sL2dtLFwiIFwiKTtmb3IodmFyIGk9MDtpPDI7aSsrKWU9ZS5yZXBsYWNlKC8oW01tWnpMbEhoVnZDY1NzUXFUdEFhXSkoW15cXHNdKS9nbSxcIiQxICQyXCIpO2ZvcihlPShlPWUucmVwbGFjZSgvKFteXFxzXSkoW01tWnpMbEhoVnZDY1NzUXFUdEFhXSkvZ20sXCIkMSAkMlwiKSkucmVwbGFjZSgvKFswLTldKShbK1xcLV0pL2dtLFwiJDEgJDJcIiksaT0wO2k8MjtpKyspZT1lLnJlcGxhY2UoLyhcXC5bMC05XSopKFxcLikvZ20sXCIkMSAkMlwiKTtlPWUucmVwbGFjZSgvKFtBYV0oXFxzK1swLTldKyl7M30pXFxzKyhbMDFdKVxccyooWzAxXSkvZ20sXCIkMSAkMyAkNCBcIiksZT1BLmNvbXByZXNzU3BhY2VzKGUpLGU9QS50cmltKGUpLHRoaXMuUGF0aFBhcnNlcj1uZXcgZnVuY3Rpb24odCl7dGhpcy50b2tlbnM9dC5zcGxpdChcIiBcIiksdGhpcy5yZXNldD1mdW5jdGlvbigpe3RoaXMuaT0tMSx0aGlzLmNvbW1hbmQ9XCJcIix0aGlzLnByZXZpb3VzQ29tbWFuZD1cIlwiLHRoaXMuc3RhcnQ9bmV3IEEuUG9pbnQoMCwwKSx0aGlzLmNvbnRyb2w9bmV3IEEuUG9pbnQoMCwwKSx0aGlzLmN1cnJlbnQ9bmV3IEEuUG9pbnQoMCwwKSx0aGlzLnBvaW50cz1bXSx0aGlzLmFuZ2xlcz1bXX0sdGhpcy5pc0VuZD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmk+PXRoaXMudG9rZW5zLmxlbmd0aC0xfSx0aGlzLmlzQ29tbWFuZE9yRW5kPWZ1bmN0aW9uKCl7cmV0dXJuISF0aGlzLmlzRW5kKCl8fG51bGwhPXRoaXMudG9rZW5zW3RoaXMuaSsxXS5tYXRjaCgvXltBLVphLXpdJC8pfSx0aGlzLmlzUmVsYXRpdmVDb21tYW5kPWZ1bmN0aW9uKCl7c3dpdGNoKHRoaXMuY29tbWFuZCl7Y2FzZVwibVwiOmNhc2VcImxcIjpjYXNlXCJoXCI6Y2FzZVwidlwiOmNhc2VcImNcIjpjYXNlXCJzXCI6Y2FzZVwicVwiOmNhc2VcInRcIjpjYXNlXCJhXCI6Y2FzZVwielwiOnJldHVybiEwfXJldHVybiExfSx0aGlzLmdldFRva2VuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaSsrLHRoaXMudG9rZW5zW3RoaXMuaV19LHRoaXMuZ2V0U2NhbGFyPWZ1bmN0aW9uKCl7cmV0dXJuIHBhcnNlRmxvYXQodGhpcy5nZXRUb2tlbigpKX0sdGhpcy5uZXh0Q29tbWFuZD1mdW5jdGlvbigpe3RoaXMucHJldmlvdXNDb21tYW5kPXRoaXMuY29tbWFuZCx0aGlzLmNvbW1hbmQ9dGhpcy5nZXRUb2tlbigpfSx0aGlzLmdldFBvaW50PWZ1bmN0aW9uKCl7dmFyIHQ9bmV3IEEuUG9pbnQodGhpcy5nZXRTY2FsYXIoKSx0aGlzLmdldFNjYWxhcigpKTtyZXR1cm4gdGhpcy5tYWtlQWJzb2x1dGUodCl9LHRoaXMuZ2V0QXNDb250cm9sUG9pbnQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmdldFBvaW50KCk7cmV0dXJuIHRoaXMuY29udHJvbD10fSx0aGlzLmdldEFzQ3VycmVudFBvaW50PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5nZXRQb2ludCgpO3JldHVybiB0aGlzLmN1cnJlbnQ9dH0sdGhpcy5nZXRSZWZsZWN0ZWRDb250cm9sUG9pbnQ9ZnVuY3Rpb24oKXtyZXR1cm5cImNcIiE9dGhpcy5wcmV2aW91c0NvbW1hbmQudG9Mb3dlckNhc2UoKSYmXCJzXCIhPXRoaXMucHJldmlvdXNDb21tYW5kLnRvTG93ZXJDYXNlKCkmJlwicVwiIT10aGlzLnByZXZpb3VzQ29tbWFuZC50b0xvd2VyQ2FzZSgpJiZcInRcIiE9dGhpcy5wcmV2aW91c0NvbW1hbmQudG9Mb3dlckNhc2UoKT90aGlzLmN1cnJlbnQ6bmV3IEEuUG9pbnQoMip0aGlzLmN1cnJlbnQueC10aGlzLmNvbnRyb2wueCwyKnRoaXMuY3VycmVudC55LXRoaXMuY29udHJvbC55KX0sdGhpcy5tYWtlQWJzb2x1dGU9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuaXNSZWxhdGl2ZUNvbW1hbmQoKSYmKHQueCs9dGhpcy5jdXJyZW50LngsdC55Kz10aGlzLmN1cnJlbnQueSksdH0sdGhpcy5hZGRNYXJrZXI9ZnVuY3Rpb24odCxlLGkpe251bGwhPWkmJjA8dGhpcy5hbmdsZXMubGVuZ3RoJiZudWxsPT10aGlzLmFuZ2xlc1t0aGlzLmFuZ2xlcy5sZW5ndGgtMV0mJih0aGlzLmFuZ2xlc1t0aGlzLmFuZ2xlcy5sZW5ndGgtMV09dGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoLTFdLmFuZ2xlVG8oaSkpLHRoaXMuYWRkTWFya2VyQW5nbGUodCxudWxsPT1lP251bGw6ZS5hbmdsZVRvKHQpKX0sdGhpcy5hZGRNYXJrZXJBbmdsZT1mdW5jdGlvbih0LGUpe3RoaXMucG9pbnRzLnB1c2godCksdGhpcy5hbmdsZXMucHVzaChlKX0sdGhpcy5nZXRNYXJrZXJQb2ludHM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wb2ludHN9LHRoaXMuZ2V0TWFya2VyQW5nbGVzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PTA7dDx0aGlzLmFuZ2xlcy5sZW5ndGg7dCsrKWlmKG51bGw9PXRoaXMuYW5nbGVzW3RdKWZvcih2YXIgZT10KzE7ZTx0aGlzLmFuZ2xlcy5sZW5ndGg7ZSsrKWlmKG51bGwhPXRoaXMuYW5nbGVzW2VdKXt0aGlzLmFuZ2xlc1t0XT10aGlzLmFuZ2xlc1tlXTticmVha31yZXR1cm4gdGhpcy5hbmdsZXN9fShlKSx0aGlzLnBhdGg9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5QYXRoUGFyc2VyO2UucmVzZXQoKTt2YXIgaT1uZXcgQS5Cb3VuZGluZ0JveDtmb3IobnVsbCE9dCYmdC5iZWdpblBhdGgoKTshZS5pc0VuZCgpOylzd2l0Y2goZS5uZXh0Q29tbWFuZCgpLGUuY29tbWFuZCl7Y2FzZVwiTVwiOmNhc2VcIm1cIjp2YXIgbj1lLmdldEFzQ3VycmVudFBvaW50KCk7Zm9yKGUuYWRkTWFya2VyKG4pLGkuYWRkUG9pbnQobi54LG4ueSksbnVsbCE9dCYmdC5tb3ZlVG8obi54LG4ueSksZS5zdGFydD1lLmN1cnJlbnQ7IWUuaXNDb21tYW5kT3JFbmQoKTspbj1lLmdldEFzQ3VycmVudFBvaW50KCksZS5hZGRNYXJrZXIobixlLnN0YXJ0KSxpLmFkZFBvaW50KG4ueCxuLnkpLG51bGwhPXQmJnQubGluZVRvKG4ueCxuLnkpO2JyZWFrO2Nhc2VcIkxcIjpjYXNlXCJsXCI6Zm9yKDshZS5pc0NvbW1hbmRPckVuZCgpOyl7dmFyIHM9ZS5jdXJyZW50O249ZS5nZXRBc0N1cnJlbnRQb2ludCgpLGUuYWRkTWFya2VyKG4scyksaS5hZGRQb2ludChuLngsbi55KSxudWxsIT10JiZ0LmxpbmVUbyhuLngsbi55KX1icmVhaztjYXNlXCJIXCI6Y2FzZVwiaFwiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspe3ZhciBhPW5ldyBBLlBvaW50KChlLmlzUmVsYXRpdmVDb21tYW5kKCk/ZS5jdXJyZW50Lng6MCkrZS5nZXRTY2FsYXIoKSxlLmN1cnJlbnQueSk7ZS5hZGRNYXJrZXIoYSxlLmN1cnJlbnQpLGUuY3VycmVudD1hLGkuYWRkUG9pbnQoZS5jdXJyZW50LngsZS5jdXJyZW50LnkpLG51bGwhPXQmJnQubGluZVRvKGUuY3VycmVudC54LGUuY3VycmVudC55KX1icmVhaztjYXNlXCJWXCI6Y2FzZVwidlwiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspYT1uZXcgQS5Qb2ludChlLmN1cnJlbnQueCwoZS5pc1JlbGF0aXZlQ29tbWFuZCgpP2UuY3VycmVudC55OjApK2UuZ2V0U2NhbGFyKCkpLGUuYWRkTWFya2VyKGEsZS5jdXJyZW50KSxlLmN1cnJlbnQ9YSxpLmFkZFBvaW50KGUuY3VycmVudC54LGUuY3VycmVudC55KSxudWxsIT10JiZ0LmxpbmVUbyhlLmN1cnJlbnQueCxlLmN1cnJlbnQueSk7YnJlYWs7Y2FzZVwiQ1wiOmNhc2VcImNcIjpmb3IoOyFlLmlzQ29tbWFuZE9yRW5kKCk7KXt2YXIgcj1lLmN1cnJlbnQsbz1lLmdldFBvaW50KCksbD1lLmdldEFzQ29udHJvbFBvaW50KCksaD1lLmdldEFzQ3VycmVudFBvaW50KCk7ZS5hZGRNYXJrZXIoaCxsLG8pLGkuYWRkQmV6aWVyQ3VydmUoci54LHIueSxvLngsby55LGwueCxsLnksaC54LGgueSksbnVsbCE9dCYmdC5iZXppZXJDdXJ2ZVRvKG8ueCxvLnksbC54LGwueSxoLngsaC55KX1icmVhaztjYXNlXCJTXCI6Y2FzZVwic1wiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspcj1lLmN1cnJlbnQsbz1lLmdldFJlZmxlY3RlZENvbnRyb2xQb2ludCgpLGw9ZS5nZXRBc0NvbnRyb2xQb2ludCgpLGg9ZS5nZXRBc0N1cnJlbnRQb2ludCgpLGUuYWRkTWFya2VyKGgsbCxvKSxpLmFkZEJlemllckN1cnZlKHIueCxyLnksby54LG8ueSxsLngsbC55LGgueCxoLnkpLG51bGwhPXQmJnQuYmV6aWVyQ3VydmVUbyhvLngsby55LGwueCxsLnksaC54LGgueSk7YnJlYWs7Y2FzZVwiUVwiOmNhc2VcInFcIjpmb3IoOyFlLmlzQ29tbWFuZE9yRW5kKCk7KXI9ZS5jdXJyZW50LGw9ZS5nZXRBc0NvbnRyb2xQb2ludCgpLGg9ZS5nZXRBc0N1cnJlbnRQb2ludCgpLGUuYWRkTWFya2VyKGgsbCxsKSxpLmFkZFF1YWRyYXRpY0N1cnZlKHIueCxyLnksbC54LGwueSxoLngsaC55KSxudWxsIT10JiZ0LnF1YWRyYXRpY0N1cnZlVG8obC54LGwueSxoLngsaC55KTticmVhaztjYXNlXCJUXCI6Y2FzZVwidFwiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspcj1lLmN1cnJlbnQsbD1lLmdldFJlZmxlY3RlZENvbnRyb2xQb2ludCgpLGUuY29udHJvbD1sLGg9ZS5nZXRBc0N1cnJlbnRQb2ludCgpLGUuYWRkTWFya2VyKGgsbCxsKSxpLmFkZFF1YWRyYXRpY0N1cnZlKHIueCxyLnksbC54LGwueSxoLngsaC55KSxudWxsIT10JiZ0LnF1YWRyYXRpY0N1cnZlVG8obC54LGwueSxoLngsaC55KTticmVhaztjYXNlXCJBXCI6Y2FzZVwiYVwiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspe3I9ZS5jdXJyZW50O3ZhciB1PWUuZ2V0U2NhbGFyKCksYz1lLmdldFNjYWxhcigpLGY9ZS5nZXRTY2FsYXIoKSooTWF0aC5QSS8xODApLG09ZS5nZXRTY2FsYXIoKSxwPWUuZ2V0U2NhbGFyKCksZD0oaD1lLmdldEFzQ3VycmVudFBvaW50KCksbmV3IEEuUG9pbnQoTWF0aC5jb3MoZikqKHIueC1oLngpLzIrTWF0aC5zaW4oZikqKHIueS1oLnkpLzIsLU1hdGguc2luKGYpKihyLngtaC54KS8yK01hdGguY29zKGYpKihyLnktaC55KS8yKSkseT1NYXRoLnBvdyhkLngsMikvTWF0aC5wb3codSwyKStNYXRoLnBvdyhkLnksMikvTWF0aC5wb3coYywyKTsxPHkmJih1Kj1NYXRoLnNxcnQoeSksYyo9TWF0aC5zcXJ0KHkpKTt2YXIgdj0obT09cD8tMToxKSpNYXRoLnNxcnQoKE1hdGgucG93KHUsMikqTWF0aC5wb3coYywyKS1NYXRoLnBvdyh1LDIpKk1hdGgucG93KGQueSwyKS1NYXRoLnBvdyhjLDIpKk1hdGgucG93KGQueCwyKSkvKE1hdGgucG93KHUsMikqTWF0aC5wb3coZC55LDIpK01hdGgucG93KGMsMikqTWF0aC5wb3coZC54LDIpKSk7aXNOYU4odikmJih2PTApO3ZhciBnPW5ldyBBLlBvaW50KHYqdSpkLnkvYyx2Ki1jKmQueC91KSx4PW5ldyBBLlBvaW50KChyLngraC54KS8yK01hdGguY29zKGYpKmcueC1NYXRoLnNpbihmKSpnLnksKHIueStoLnkpLzIrTWF0aC5zaW4oZikqZy54K01hdGguY29zKGYpKmcueSksYj1mdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHRbMF0sMikrTWF0aC5wb3codFsxXSwyKSl9LFA9ZnVuY3Rpb24odCxlKXtyZXR1cm4odFswXSplWzBdK3RbMV0qZVsxXSkvKGIodCkqYihlKSl9LEU9ZnVuY3Rpb24odCxlKXtyZXR1cm4odFswXSplWzFdPHRbMV0qZVswXT8tMToxKSpNYXRoLmFjb3MoUCh0LGUpKX0sdz1FKFsxLDBdLFsoZC54LWcueCkvdSwoZC55LWcueSkvY10pLEI9WyhkLngtZy54KS91LChkLnktZy55KS9jXSxDPVsoLWQueC1nLngpL3UsKC1kLnktZy55KS9jXSxUPUUoQixDKTtQKEIsQyk8PS0xJiYoVD1NYXRoLlBJKSwxPD1QKEIsQykmJihUPTApO3ZhciBWPTEtcD8xOi0xLE09dytWKihULzIpLFM9bmV3IEEuUG9pbnQoeC54K3UqTWF0aC5jb3MoTSkseC55K2MqTWF0aC5zaW4oTSkpO2lmKGUuYWRkTWFya2VyQW5nbGUoUyxNLVYqTWF0aC5QSS8yKSxlLmFkZE1hcmtlckFuZ2xlKGgsTS1WKk1hdGguUEkpLGkuYWRkUG9pbnQoaC54LGgueSksbnVsbCE9dCl7UD1jPHU/dTpjO3ZhciBrPWM8dT8xOnUvYyxEPWM8dT9jL3U6MTt0LnRyYW5zbGF0ZSh4LngseC55KSx0LnJvdGF0ZShmKSx0LnNjYWxlKGssRCksdC5hcmMoMCwwLFAsdyx3K1QsMS1wKSx0LnNjYWxlKDEvaywxL0QpLHQucm90YXRlKC1mKSx0LnRyYW5zbGF0ZSgteC54LC14LnkpfX1icmVhaztjYXNlXCJaXCI6Y2FzZVwielwiOm51bGwhPXQmJmkueDEhPT1pLngyJiZpLnkxIT09aS55MiYmdC5jbG9zZVBhdGgoKSxlLmN1cnJlbnQ9ZS5zdGFydH1yZXR1cm4gaX0sdGhpcy5nZXRNYXJrZXJzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMuUGF0aFBhcnNlci5nZXRNYXJrZXJQb2ludHMoKSxlPXRoaXMuUGF0aFBhcnNlci5nZXRNYXJrZXJBbmdsZXMoKSxpPVtdLG49MDtuPHQubGVuZ3RoO24rKylpLnB1c2goW3Rbbl0sZVtuXV0pO3JldHVybiBpfX0sQS5FbGVtZW50LnBhdGgucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLEEuRWxlbWVudC5wYXR0ZXJuPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuY3JlYXRlUGF0dGVybj1mdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIsITApLG49dGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIsITApLHM9bmV3IEEuRWxlbWVudC5zdmc7cy5hdHRyaWJ1dGVzLnZpZXdCb3g9bmV3IEEuUHJvcGVydHkoXCJ2aWV3Qm94XCIsdGhpcy5hdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpLnZhbHVlKSxzLmF0dHJpYnV0ZXMud2lkdGg9bmV3IEEuUHJvcGVydHkoXCJ3aWR0aFwiLGkrXCJweFwiKSxzLmF0dHJpYnV0ZXMuaGVpZ2h0PW5ldyBBLlByb3BlcnR5KFwiaGVpZ2h0XCIsbitcInB4XCIpLHMuYXR0cmlidXRlcy50cmFuc2Zvcm09bmV3IEEuUHJvcGVydHkoXCJ0cmFuc2Zvcm1cIix0aGlzLmF0dHJpYnV0ZShcInBhdHRlcm5UcmFuc2Zvcm1cIikudmFsdWUpLHMuY2hpbGRyZW49dGhpcy5jaGlsZHJlbjt2YXIgYT1wKCk7YS53aWR0aD1pLGEuaGVpZ2h0PW47dmFyIHI9YS5nZXRDb250ZXh0KFwiMmRcIik7dGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLmhhc1ZhbHVlKCkmJnRoaXMuYXR0cmlidXRlKFwieVwiKS5oYXNWYWx1ZSgpJiZyLnRyYW5zbGF0ZSh0aGlzLmF0dHJpYnV0ZShcInhcIikudG9QaXhlbHMoXCJ4XCIsITApLHRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIiwhMCkpO2Zvcih2YXIgbz0tMTtvPD0xO28rKylmb3IodmFyIGw9LTE7bDw9MTtsKyspci5zYXZlKCkscy5hdHRyaWJ1dGVzLng9bmV3IEEuUHJvcGVydHkoXCJ4XCIsbyphLndpZHRoKSxzLmF0dHJpYnV0ZXMueT1uZXcgQS5Qcm9wZXJ0eShcInlcIixsKmEuaGVpZ2h0KSxzLnJlbmRlcihyKSxyLnJlc3RvcmUoKTtyZXR1cm4gdC5jcmVhdGVQYXR0ZXJuKGEsXCJyZXBlYXRcIil9fSxBLkVsZW1lbnQucGF0dGVybi5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQubWFya2VyPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYmFzZVJlbmRlcj10aGlzLnJlbmRlcix0aGlzLnJlbmRlcj1mdW5jdGlvbih0LGUsaSl7aWYoZSl7dC50cmFuc2xhdGUoZS54LGUueSksXCJhdXRvXCI9PXRoaXMuYXR0cmlidXRlKFwib3JpZW50XCIpLnZhbHVlT3JEZWZhdWx0KFwiYXV0b1wiKSYmdC5yb3RhdGUoaSksXCJzdHJva2VXaWR0aFwiPT10aGlzLmF0dHJpYnV0ZShcIm1hcmtlclVuaXRzXCIpLnZhbHVlT3JEZWZhdWx0KFwic3Ryb2tlV2lkdGhcIikmJnQuc2NhbGUodC5saW5lV2lkdGgsdC5saW5lV2lkdGgpLHQuc2F2ZSgpO3ZhciBuPW5ldyBBLkVsZW1lbnQuc3ZnO24uYXR0cmlidXRlcy52aWV3Qm94PW5ldyBBLlByb3BlcnR5KFwidmlld0JveFwiLHRoaXMuYXR0cmlidXRlKFwidmlld0JveFwiKS52YWx1ZSksbi5hdHRyaWJ1dGVzLnJlZlg9bmV3IEEuUHJvcGVydHkoXCJyZWZYXCIsdGhpcy5hdHRyaWJ1dGUoXCJyZWZYXCIpLnZhbHVlKSxuLmF0dHJpYnV0ZXMucmVmWT1uZXcgQS5Qcm9wZXJ0eShcInJlZllcIix0aGlzLmF0dHJpYnV0ZShcInJlZllcIikudmFsdWUpLG4uYXR0cmlidXRlcy53aWR0aD1uZXcgQS5Qcm9wZXJ0eShcIndpZHRoXCIsdGhpcy5hdHRyaWJ1dGUoXCJtYXJrZXJXaWR0aFwiKS52YWx1ZSksbi5hdHRyaWJ1dGVzLmhlaWdodD1uZXcgQS5Qcm9wZXJ0eShcImhlaWdodFwiLHRoaXMuYXR0cmlidXRlKFwibWFya2VySGVpZ2h0XCIpLnZhbHVlKSxuLmF0dHJpYnV0ZXMuZmlsbD1uZXcgQS5Qcm9wZXJ0eShcImZpbGxcIix0aGlzLmF0dHJpYnV0ZShcImZpbGxcIikudmFsdWVPckRlZmF1bHQoXCJibGFja1wiKSksbi5hdHRyaWJ1dGVzLnN0cm9rZT1uZXcgQS5Qcm9wZXJ0eShcInN0cm9rZVwiLHRoaXMuYXR0cmlidXRlKFwic3Ryb2tlXCIpLnZhbHVlT3JEZWZhdWx0KFwibm9uZVwiKSksbi5jaGlsZHJlbj10aGlzLmNoaWxkcmVuLG4ucmVuZGVyKHQpLHQucmVzdG9yZSgpLFwic3Ryb2tlV2lkdGhcIj09dGhpcy5hdHRyaWJ1dGUoXCJtYXJrZXJVbml0c1wiKS52YWx1ZU9yRGVmYXVsdChcInN0cm9rZVdpZHRoXCIpJiZ0LnNjYWxlKDEvdC5saW5lV2lkdGgsMS90LmxpbmVXaWR0aCksXCJhdXRvXCI9PXRoaXMuYXR0cmlidXRlKFwib3JpZW50XCIpLnZhbHVlT3JEZWZhdWx0KFwiYXV0b1wiKSYmdC5yb3RhdGUoLWkpLHQudHJhbnNsYXRlKC1lLngsLWUueSl9fX0sQS5FbGVtZW50Lm1hcmtlci5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuZGVmcz1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnJlbmRlcj1mdW5jdGlvbih0KXt9fSxBLkVsZW1lbnQuZGVmcy5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuR3JhZGllbnRCYXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuc3RvcHM9W107Zm9yKHZhciBlPTA7ZTx0aGlzLmNoaWxkcmVuLmxlbmd0aDtlKyspe3ZhciBpPXRoaXMuY2hpbGRyZW5bZV07XCJzdG9wXCI9PWkudHlwZSYmdGhpcy5zdG9wcy5wdXNoKGkpfXRoaXMuZ2V0R3JhZGllbnQ9ZnVuY3Rpb24oKXt9LHRoaXMuZ3JhZGllbnRVbml0cz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmF0dHJpYnV0ZShcImdyYWRpZW50VW5pdHNcIikudmFsdWVPckRlZmF1bHQoXCJvYmplY3RCb3VuZGluZ0JveFwiKX0sdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0PVtcImdyYWRpZW50VW5pdHNcIl0sdGhpcy5pbmhlcml0U3RvcENvbnRhaW5lcj1mdW5jdGlvbih0KXtmb3IodmFyIGU9MDtlPHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5sZW5ndGg7ZSsrKXt2YXIgaT10aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXRbZV07IXRoaXMuYXR0cmlidXRlKGkpLmhhc1ZhbHVlKCkmJnQuYXR0cmlidXRlKGkpLmhhc1ZhbHVlKCkmJih0aGlzLmF0dHJpYnV0ZShpLCEwKS52YWx1ZT10LmF0dHJpYnV0ZShpKS52YWx1ZSl9fSx0aGlzLmNyZWF0ZUdyYWRpZW50PWZ1bmN0aW9uKHQsZSxpKXt2YXIgbj10aGlzO3RoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLmhhc1ZhbHVlKCkmJihuPXRoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLmdldERlZmluaXRpb24oKSx0aGlzLmluaGVyaXRTdG9wQ29udGFpbmVyKG4pKTt2YXIgcz1mdW5jdGlvbih0KXtyZXR1cm4gaS5oYXNWYWx1ZSgpP25ldyBBLlByb3BlcnR5KFwiY29sb3JcIix0KS5hZGRPcGFjaXR5KGkpLnZhbHVlOnR9LGE9dGhpcy5nZXRHcmFkaWVudCh0LGUpO2lmKG51bGw9PWEpcmV0dXJuIHMobi5zdG9wc1tuLnN0b3BzLmxlbmd0aC0xXS5jb2xvcik7Zm9yKHZhciByPTA7cjxuLnN0b3BzLmxlbmd0aDtyKyspYS5hZGRDb2xvclN0b3Aobi5zdG9wc1tyXS5vZmZzZXQscyhuLnN0b3BzW3JdLmNvbG9yKSk7aWYodGhpcy5hdHRyaWJ1dGUoXCJncmFkaWVudFRyYW5zZm9ybVwiKS5oYXNWYWx1ZSgpKXt2YXIgbz1BLlZpZXdQb3J0LnZpZXdQb3J0c1swXSxsPW5ldyBBLkVsZW1lbnQucmVjdDtsLmF0dHJpYnV0ZXMueD1uZXcgQS5Qcm9wZXJ0eShcInhcIiwtQS5NQVhfVklSVFVBTF9QSVhFTFMvMyksbC5hdHRyaWJ1dGVzLnk9bmV3IEEuUHJvcGVydHkoXCJ5XCIsLUEuTUFYX1ZJUlRVQUxfUElYRUxTLzMpLGwuYXR0cmlidXRlcy53aWR0aD1uZXcgQS5Qcm9wZXJ0eShcIndpZHRoXCIsQS5NQVhfVklSVFVBTF9QSVhFTFMpLGwuYXR0cmlidXRlcy5oZWlnaHQ9bmV3IEEuUHJvcGVydHkoXCJoZWlnaHRcIixBLk1BWF9WSVJUVUFMX1BJWEVMUyk7dmFyIGg9bmV3IEEuRWxlbWVudC5nO2guYXR0cmlidXRlcy50cmFuc2Zvcm09bmV3IEEuUHJvcGVydHkoXCJ0cmFuc2Zvcm1cIix0aGlzLmF0dHJpYnV0ZShcImdyYWRpZW50VHJhbnNmb3JtXCIpLnZhbHVlKSxoLmNoaWxkcmVuPVtsXTt2YXIgdT1uZXcgQS5FbGVtZW50LnN2Zzt1LmF0dHJpYnV0ZXMueD1uZXcgQS5Qcm9wZXJ0eShcInhcIiwwKSx1LmF0dHJpYnV0ZXMueT1uZXcgQS5Qcm9wZXJ0eShcInlcIiwwKSx1LmF0dHJpYnV0ZXMud2lkdGg9bmV3IEEuUHJvcGVydHkoXCJ3aWR0aFwiLG8ud2lkdGgpLHUuYXR0cmlidXRlcy5oZWlnaHQ9bmV3IEEuUHJvcGVydHkoXCJoZWlnaHRcIixvLmhlaWdodCksdS5jaGlsZHJlbj1baF07dmFyIGM9cCgpO2Mud2lkdGg9by53aWR0aCxjLmhlaWdodD1vLmhlaWdodDt2YXIgZj1jLmdldENvbnRleHQoXCIyZFwiKTtyZXR1cm4gZi5maWxsU3R5bGU9YSx1LnJlbmRlcihmKSxmLmNyZWF0ZVBhdHRlcm4oYyxcIm5vLXJlcGVhdFwiKX1yZXR1cm4gYX19LEEuRWxlbWVudC5HcmFkaWVudEJhc2UucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmxpbmVhckdyYWRpZW50PWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuR3JhZGllbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcIngxXCIpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwieTFcIiksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJ4MlwiKSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcInkyXCIpLHRoaXMuZ2V0R3JhZGllbnQ9ZnVuY3Rpb24odCxlKXt2YXIgaT1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2UuZ2V0Qm91bmRpbmdCb3godCk6bnVsbDt0aGlzLmF0dHJpYnV0ZShcIngxXCIpLmhhc1ZhbHVlKCl8fHRoaXMuYXR0cmlidXRlKFwieTFcIikuaGFzVmFsdWUoKXx8dGhpcy5hdHRyaWJ1dGUoXCJ4MlwiKS5oYXNWYWx1ZSgpfHx0aGlzLmF0dHJpYnV0ZShcInkyXCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcIngxXCIsITApLnZhbHVlPTAsdGhpcy5hdHRyaWJ1dGUoXCJ5MVwiLCEwKS52YWx1ZT0wLHRoaXMuYXR0cmlidXRlKFwieDJcIiwhMCkudmFsdWU9MSx0aGlzLmF0dHJpYnV0ZShcInkyXCIsITApLnZhbHVlPTApO3ZhciBuPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/aS54KCkraS53aWR0aCgpKnRoaXMuYXR0cmlidXRlKFwieDFcIikubnVtVmFsdWUoKTp0aGlzLmF0dHJpYnV0ZShcIngxXCIpLnRvUGl4ZWxzKFwieFwiKSxzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/aS55KCkraS5oZWlnaHQoKSp0aGlzLmF0dHJpYnV0ZShcInkxXCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJ5MVwiKS50b1BpeGVscyhcInlcIiksYT1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2kueCgpK2kud2lkdGgoKSp0aGlzLmF0dHJpYnV0ZShcIngyXCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJ4MlwiKS50b1BpeGVscyhcInhcIikscj1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2kueSgpK2kuaGVpZ2h0KCkqdGhpcy5hdHRyaWJ1dGUoXCJ5MlwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwieTJcIikudG9QaXhlbHMoXCJ5XCIpO3JldHVybiBuPT1hJiZzPT1yP251bGw6dC5jcmVhdGVMaW5lYXJHcmFkaWVudChuLHMsYSxyKX19LEEuRWxlbWVudC5saW5lYXJHcmFkaWVudC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5HcmFkaWVudEJhc2UsQS5FbGVtZW50LnJhZGlhbEdyYWRpZW50PWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuR3JhZGllbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcImN4XCIpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwiY3lcIiksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJyXCIpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwiZnhcIiksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJmeVwiKSx0aGlzLmdldEdyYWRpZW50PWZ1bmN0aW9uKHQsZSl7dmFyIGk9ZS5nZXRCb3VuZGluZ0JveCh0KTt0aGlzLmF0dHJpYnV0ZShcImN4XCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcImN4XCIsITApLnZhbHVlPVwiNTAlXCIpLHRoaXMuYXR0cmlidXRlKFwiY3lcIikuaGFzVmFsdWUoKXx8KHRoaXMuYXR0cmlidXRlKFwiY3lcIiwhMCkudmFsdWU9XCI1MCVcIiksdGhpcy5hdHRyaWJ1dGUoXCJyXCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcInJcIiwhMCkudmFsdWU9XCI1MCVcIik7dmFyIG49XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLngoKStpLndpZHRoKCkqdGhpcy5hdHRyaWJ1dGUoXCJjeFwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwiY3hcIikudG9QaXhlbHMoXCJ4XCIpLHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLnkoKStpLmhlaWdodCgpKnRoaXMuYXR0cmlidXRlKFwiY3lcIikubnVtVmFsdWUoKTp0aGlzLmF0dHJpYnV0ZShcImN5XCIpLnRvUGl4ZWxzKFwieVwiKSxhPW4scj1zO3RoaXMuYXR0cmlidXRlKFwiZnhcIikuaGFzVmFsdWUoKSYmKGE9XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLngoKStpLndpZHRoKCkqdGhpcy5hdHRyaWJ1dGUoXCJmeFwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwiZnhcIikudG9QaXhlbHMoXCJ4XCIpKSx0aGlzLmF0dHJpYnV0ZShcImZ5XCIpLmhhc1ZhbHVlKCkmJihyPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/aS55KCkraS5oZWlnaHQoKSp0aGlzLmF0dHJpYnV0ZShcImZ5XCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJmeVwiKS50b1BpeGVscyhcInlcIikpO3ZhciBvPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/KGkud2lkdGgoKStpLmhlaWdodCgpKS8yKnRoaXMuYXR0cmlidXRlKFwiclwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwiclwiKS50b1BpeGVscygpO3JldHVybiB0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGEsciwwLG4scyxvKX19LEEuRWxlbWVudC5yYWRpYWxHcmFkaWVudC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5HcmFkaWVudEJhc2UsQS5FbGVtZW50LnN0b3A9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5vZmZzZXQ9dGhpcy5hdHRyaWJ1dGUoXCJvZmZzZXRcIikubnVtVmFsdWUoKSx0aGlzLm9mZnNldDwwJiYodGhpcy5vZmZzZXQ9MCksMTx0aGlzLm9mZnNldCYmKHRoaXMub2Zmc2V0PTEpO3ZhciBlPXRoaXMuc3R5bGUoXCJzdG9wLWNvbG9yXCIsITApO1wiXCI9PT1lLnZhbHVlJiYoZS52YWx1ZT1cIiMwMDBcIiksdGhpcy5zdHlsZShcInN0b3Atb3BhY2l0eVwiKS5oYXNWYWx1ZSgpJiYoZT1lLmFkZE9wYWNpdHkodGhpcy5zdHlsZShcInN0b3Atb3BhY2l0eVwiKSkpLHRoaXMuY29sb3I9ZS52YWx1ZX0sQS5FbGVtZW50LnN0b3AucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LkFuaW1hdGVCYXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLEEuQW5pbWF0aW9ucy5wdXNoKHRoaXMpLHRoaXMuZHVyYXRpb249MCx0aGlzLmJlZ2luPXRoaXMuYXR0cmlidXRlKFwiYmVnaW5cIikudG9NaWxsaXNlY29uZHMoKSx0aGlzLm1heER1cmF0aW9uPXRoaXMuYmVnaW4rdGhpcy5hdHRyaWJ1dGUoXCJkdXJcIikudG9NaWxsaXNlY29uZHMoKSx0aGlzLmdldFByb3BlcnR5PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5hdHRyaWJ1dGUoXCJhdHRyaWJ1dGVUeXBlXCIpLnZhbHVlLGU9dGhpcy5hdHRyaWJ1dGUoXCJhdHRyaWJ1dGVOYW1lXCIpLnZhbHVlO3JldHVyblwiQ1NTXCI9PXQ/dGhpcy5wYXJlbnQuc3R5bGUoZSwhMCk6dGhpcy5wYXJlbnQuYXR0cmlidXRlKGUsITApfSx0aGlzLmluaXRpYWxWYWx1ZT1udWxsLHRoaXMuaW5pdGlhbFVuaXRzPVwiXCIsdGhpcy5yZW1vdmVkPSExLHRoaXMuY2FsY1ZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuXCJcIn0sdGhpcy51cGRhdGU9ZnVuY3Rpb24odCl7aWYobnVsbD09dGhpcy5pbml0aWFsVmFsdWUmJih0aGlzLmluaXRpYWxWYWx1ZT10aGlzLmdldFByb3BlcnR5KCkudmFsdWUsdGhpcy5pbml0aWFsVW5pdHM9dGhpcy5nZXRQcm9wZXJ0eSgpLmdldFVuaXRzKCkpLHRoaXMuZHVyYXRpb24+dGhpcy5tYXhEdXJhdGlvbil7aWYoXCJpbmRlZmluaXRlXCI9PXRoaXMuYXR0cmlidXRlKFwicmVwZWF0Q291bnRcIikudmFsdWV8fFwiaW5kZWZpbml0ZVwiPT10aGlzLmF0dHJpYnV0ZShcInJlcGVhdER1clwiKS52YWx1ZSl0aGlzLmR1cmF0aW9uPTA7ZWxzZSBpZihcImZyZWV6ZVwiIT10aGlzLmF0dHJpYnV0ZShcImZpbGxcIikudmFsdWVPckRlZmF1bHQoXCJyZW1vdmVcIil8fHRoaXMuZnJvemVuKXtpZihcInJlbW92ZVwiPT10aGlzLmF0dHJpYnV0ZShcImZpbGxcIikudmFsdWVPckRlZmF1bHQoXCJyZW1vdmVcIikmJiF0aGlzLnJlbW92ZWQpcmV0dXJuIHRoaXMucmVtb3ZlZD0hMCx0aGlzLmdldFByb3BlcnR5KCkudmFsdWU9dGhpcy5wYXJlbnQuYW5pbWF0aW9uRnJvemVuP3RoaXMucGFyZW50LmFuaW1hdGlvbkZyb3plblZhbHVlOnRoaXMuaW5pdGlhbFZhbHVlLCEwfWVsc2UgdGhpcy5mcm96ZW49ITAsdGhpcy5wYXJlbnQuYW5pbWF0aW9uRnJvemVuPSEwLHRoaXMucGFyZW50LmFuaW1hdGlvbkZyb3plblZhbHVlPXRoaXMuZ2V0UHJvcGVydHkoKS52YWx1ZTtyZXR1cm4hMX10aGlzLmR1cmF0aW9uPXRoaXMuZHVyYXRpb24rdDt2YXIgZT0hMTtpZih0aGlzLmJlZ2luPHRoaXMuZHVyYXRpb24pe3ZhciBpPXRoaXMuY2FsY1ZhbHVlKCk7dGhpcy5hdHRyaWJ1dGUoXCJ0eXBlXCIpLmhhc1ZhbHVlKCkmJihpPXRoaXMuYXR0cmlidXRlKFwidHlwZVwiKS52YWx1ZStcIihcIitpK1wiKVwiKSx0aGlzLmdldFByb3BlcnR5KCkudmFsdWU9aSxlPSEwfXJldHVybiBlfSx0aGlzLmZyb209dGhpcy5hdHRyaWJ1dGUoXCJmcm9tXCIpLHRoaXMudG89dGhpcy5hdHRyaWJ1dGUoXCJ0b1wiKSx0aGlzLnZhbHVlcz10aGlzLmF0dHJpYnV0ZShcInZhbHVlc1wiKSx0aGlzLnZhbHVlcy5oYXNWYWx1ZSgpJiYodGhpcy52YWx1ZXMudmFsdWU9dGhpcy52YWx1ZXMudmFsdWUuc3BsaXQoXCI7XCIpKSx0aGlzLnByb2dyZXNzPWZ1bmN0aW9uKCl7dmFyIHQ9e3Byb2dyZXNzOih0aGlzLmR1cmF0aW9uLXRoaXMuYmVnaW4pLyh0aGlzLm1heER1cmF0aW9uLXRoaXMuYmVnaW4pfTtpZih0aGlzLnZhbHVlcy5oYXNWYWx1ZSgpKXt2YXIgZT10LnByb2dyZXNzKih0aGlzLnZhbHVlcy52YWx1ZS5sZW5ndGgtMSksaT1NYXRoLmZsb29yKGUpLG49TWF0aC5jZWlsKGUpO3QuZnJvbT1uZXcgQS5Qcm9wZXJ0eShcImZyb21cIixwYXJzZUZsb2F0KHRoaXMudmFsdWVzLnZhbHVlW2ldKSksdC50bz1uZXcgQS5Qcm9wZXJ0eShcInRvXCIscGFyc2VGbG9hdCh0aGlzLnZhbHVlcy52YWx1ZVtuXSkpLHQucHJvZ3Jlc3M9KGUtaSkvKG4taSl9ZWxzZSB0LmZyb209dGhpcy5mcm9tLHQudG89dGhpcy50bztyZXR1cm4gdH19LEEuRWxlbWVudC5BbmltYXRlQmFzZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuYW5pbWF0ZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkFuaW1hdGVCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmNhbGNWYWx1ZT1mdW5jdGlvbigpe3ZhciB0PXRoaXMucHJvZ3Jlc3MoKTtyZXR1cm4gdC5mcm9tLm51bVZhbHVlKCkrKHQudG8ubnVtVmFsdWUoKS10LmZyb20ubnVtVmFsdWUoKSkqdC5wcm9ncmVzcyt0aGlzLmluaXRpYWxVbml0c319LEEuRWxlbWVudC5hbmltYXRlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkFuaW1hdGVCYXNlLEEuRWxlbWVudC5hbmltYXRlQ29sb3I9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5BbmltYXRlQmFzZSx0aGlzLmJhc2UodCksdGhpcy5jYWxjVmFsdWU9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnByb2dyZXNzKCksZT1uZXcgbSh0LmZyb20udmFsdWUpLGk9bmV3IG0odC50by52YWx1ZSk7aWYoZS5vayYmaS5vayl7dmFyIG49ZS5yKyhpLnItZS5yKSp0LnByb2dyZXNzLHM9ZS5nKyhpLmctZS5nKSp0LnByb2dyZXNzLGE9ZS5iKyhpLmItZS5iKSp0LnByb2dyZXNzO3JldHVyblwicmdiKFwiK3BhcnNlSW50KG4sMTApK1wiLFwiK3BhcnNlSW50KHMsMTApK1wiLFwiK3BhcnNlSW50KGEsMTApK1wiKVwifXJldHVybiB0aGlzLmF0dHJpYnV0ZShcImZyb21cIikudmFsdWV9fSxBLkVsZW1lbnQuYW5pbWF0ZUNvbG9yLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkFuaW1hdGVCYXNlLEEuRWxlbWVudC5hbmltYXRlVHJhbnNmb3JtPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuQW5pbWF0ZUJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuY2FsY1ZhbHVlPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMucHJvZ3Jlc3MoKSxlPUEuVG9OdW1iZXJBcnJheSh0LmZyb20udmFsdWUpLGk9QS5Ub051bWJlckFycmF5KHQudG8udmFsdWUpLG49XCJcIixzPTA7czxlLmxlbmd0aDtzKyspbis9ZVtzXSsoaVtzXS1lW3NdKSp0LnByb2dyZXNzK1wiIFwiO3JldHVybiBufX0sQS5FbGVtZW50LmFuaW1hdGVUcmFuc2Zvcm0ucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuYW5pbWF0ZSxBLkVsZW1lbnQuZm9udD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmhvcml6QWR2WD10aGlzLmF0dHJpYnV0ZShcImhvcml6LWFkdi14XCIpLm51bVZhbHVlKCksdGhpcy5pc1JUTD0hMSx0aGlzLmlzQXJhYmljPSExLHRoaXMuZm9udEZhY2U9bnVsbCx0aGlzLm1pc3NpbmdHbHlwaD1udWxsLHRoaXMuZ2x5cGhzPVtdO2Zvcih2YXIgZT0wO2U8dGhpcy5jaGlsZHJlbi5sZW5ndGg7ZSsrKXt2YXIgaT10aGlzLmNoaWxkcmVuW2VdO1wiZm9udC1mYWNlXCI9PWkudHlwZT8odGhpcy5mb250RmFjZT1pKS5zdHlsZShcImZvbnQtZmFtaWx5XCIpLmhhc1ZhbHVlKCkmJihBLkRlZmluaXRpb25zW2kuc3R5bGUoXCJmb250LWZhbWlseVwiKS52YWx1ZV09dGhpcyk6XCJtaXNzaW5nLWdseXBoXCI9PWkudHlwZT90aGlzLm1pc3NpbmdHbHlwaD1pOlwiZ2x5cGhcIj09aS50eXBlJiYoXCJcIiE9aS5hcmFiaWNGb3JtPyh0aGlzLmlzUlRMPSEwLHRoaXMuaXNBcmFiaWM9ITAsdm9pZCAwPT09dGhpcy5nbHlwaHNbaS51bmljb2RlXSYmKHRoaXMuZ2x5cGhzW2kudW5pY29kZV09W10pLHRoaXMuZ2x5cGhzW2kudW5pY29kZV1baS5hcmFiaWNGb3JtXT1pKTp0aGlzLmdseXBoc1tpLnVuaWNvZGVdPWkpfX0sQS5FbGVtZW50LmZvbnQucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmZvbnRmYWNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXNjZW50PXRoaXMuYXR0cmlidXRlKFwiYXNjZW50XCIpLnZhbHVlLHRoaXMuZGVzY2VudD10aGlzLmF0dHJpYnV0ZShcImRlc2NlbnRcIikudmFsdWUsdGhpcy51bml0c1BlckVtPXRoaXMuYXR0cmlidXRlKFwidW5pdHMtcGVyLWVtXCIpLm51bVZhbHVlKCl9LEEuRWxlbWVudC5mb250ZmFjZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQubWlzc2luZ2dseXBoPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQucGF0aCx0aGlzLmJhc2UodCksdGhpcy5ob3JpekFkdlg9MH0sQS5FbGVtZW50Lm1pc3NpbmdnbHlwaC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5wYXRoLEEuRWxlbWVudC5nbHlwaD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LnBhdGgsdGhpcy5iYXNlKHQpLHRoaXMuaG9yaXpBZHZYPXRoaXMuYXR0cmlidXRlKFwiaG9yaXotYWR2LXhcIikubnVtVmFsdWUoKSx0aGlzLnVuaWNvZGU9dGhpcy5hdHRyaWJ1dGUoXCJ1bmljb2RlXCIpLnZhbHVlLHRoaXMuYXJhYmljRm9ybT10aGlzLmF0dHJpYnV0ZShcImFyYWJpYy1mb3JtXCIpLnZhbHVlfSxBLkVsZW1lbnQuZ2x5cGgucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQucGF0aCxBLkVsZW1lbnQudGV4dD1mdW5jdGlvbih0KXt0aGlzLmNhcHR1cmVUZXh0Tm9kZXM9ITAsdGhpcy5iYXNlPUEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmJhc2VTZXRDb250ZXh0PXRoaXMuc2V0Q29udGV4dCx0aGlzLnNldENvbnRleHQ9ZnVuY3Rpb24odCl7dGhpcy5iYXNlU2V0Q29udGV4dCh0KTt2YXIgZT10aGlzLnN0eWxlKFwiZG9taW5hbnQtYmFzZWxpbmVcIikudG9UZXh0QmFzZWxpbmUoKTtudWxsPT1lJiYoZT10aGlzLnN0eWxlKFwiYWxpZ25tZW50LWJhc2VsaW5lXCIpLnRvVGV4dEJhc2VsaW5lKCkpLG51bGwhPWUmJih0LnRleHRCYXNlbGluZT1lKX0sdGhpcy5pbml0aWFsaXplQ29vcmRpbmF0ZXM9ZnVuY3Rpb24odCl7dGhpcy54PXRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksdGhpcy55PXRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIiksdGhpcy5hdHRyaWJ1dGUoXCJkeFwiKS5oYXNWYWx1ZSgpJiYodGhpcy54Kz10aGlzLmF0dHJpYnV0ZShcImR4XCIpLnRvUGl4ZWxzKFwieFwiKSksdGhpcy5hdHRyaWJ1dGUoXCJkeVwiKS5oYXNWYWx1ZSgpJiYodGhpcy55Kz10aGlzLmF0dHJpYnV0ZShcImR5XCIpLnRvUGl4ZWxzKFwieVwiKSksdGhpcy54Kz10aGlzLmdldEFuY2hvckRlbHRhKHQsdGhpcywwKX0sdGhpcy5nZXRCb3VuZGluZ0JveD1mdW5jdGlvbih0KXt0aGlzLmluaXRpYWxpemVDb29yZGluYXRlcyh0KTtmb3IodmFyIGU9bnVsbCxpPTA7aTx0aGlzLmNoaWxkcmVuLmxlbmd0aDtpKyspe3ZhciBuPXRoaXMuZ2V0Q2hpbGRCb3VuZGluZ0JveCh0LHRoaXMsdGhpcyxpKTtudWxsPT1lP2U9bjplLmFkZEJvdW5kaW5nQm94KG4pfXJldHVybiBlfSx0aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe3RoaXMuaW5pdGlhbGl6ZUNvb3JkaW5hdGVzKHQpO2Zvcih2YXIgZT0wO2U8dGhpcy5jaGlsZHJlbi5sZW5ndGg7ZSsrKXRoaXMucmVuZGVyQ2hpbGQodCx0aGlzLHRoaXMsZSl9LHRoaXMuZ2V0QW5jaG9yRGVsdGE9ZnVuY3Rpb24odCxlLGkpe3ZhciBuPXRoaXMuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiKS52YWx1ZU9yRGVmYXVsdChcInN0YXJ0XCIpO2lmKFwic3RhcnRcIiE9bil7Zm9yKHZhciBzPTAsYT1pO2E8ZS5jaGlsZHJlbi5sZW5ndGg7YSsrKXt2YXIgcj1lLmNoaWxkcmVuW2FdO2lmKGk8YSYmci5hdHRyaWJ1dGUoXCJ4XCIpLmhhc1ZhbHVlKCkpYnJlYWs7cys9ci5tZWFzdXJlVGV4dFJlY3Vyc2l2ZSh0KX1yZXR1cm4tMSooXCJlbmRcIj09bj9zOnMvMil9cmV0dXJuIDB9LHRoaXMuYWRqdXN0Q2hpbGRDb29yZGluYXRlcz1mdW5jdGlvbih0LGUsaSxuKXt2YXIgcz1pLmNoaWxkcmVuW25dO3JldHVybiBzLmF0dHJpYnV0ZShcInhcIikuaGFzVmFsdWUoKT8ocy54PXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIikrZS5nZXRBbmNob3JEZWx0YSh0LGksbikscy5hdHRyaWJ1dGUoXCJkeFwiKS5oYXNWYWx1ZSgpJiYocy54Kz1zLmF0dHJpYnV0ZShcImR4XCIpLnRvUGl4ZWxzKFwieFwiKSkpOihzLmF0dHJpYnV0ZShcImR4XCIpLmhhc1ZhbHVlKCkmJihlLngrPXMuYXR0cmlidXRlKFwiZHhcIikudG9QaXhlbHMoXCJ4XCIpKSxzLng9ZS54KSxlLng9cy54K3MubWVhc3VyZVRleHQodCkscy5hdHRyaWJ1dGUoXCJ5XCIpLmhhc1ZhbHVlKCk/KHMueT1zLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpLHMuYXR0cmlidXRlKFwiZHlcIikuaGFzVmFsdWUoKSYmKHMueSs9cy5hdHRyaWJ1dGUoXCJkeVwiKS50b1BpeGVscyhcInlcIikpKToocy5hdHRyaWJ1dGUoXCJkeVwiKS5oYXNWYWx1ZSgpJiYoZS55Kz1zLmF0dHJpYnV0ZShcImR5XCIpLnRvUGl4ZWxzKFwieVwiKSkscy55PWUueSksZS55PXMueSxzfSx0aGlzLmdldENoaWxkQm91bmRpbmdCb3g9ZnVuY3Rpb24odCxlLGksbil7dmFyIHM9dGhpcy5hZGp1c3RDaGlsZENvb3JkaW5hdGVzKHQsZSxpLG4pLGE9cy5nZXRCb3VuZGluZ0JveCh0KTtmb3Iobj0wO248cy5jaGlsZHJlbi5sZW5ndGg7bisrKXt2YXIgcj1lLmdldENoaWxkQm91bmRpbmdCb3godCxlLHMsbik7YS5hZGRCb3VuZGluZ0JveChyKX1yZXR1cm4gYX0sdGhpcy5yZW5kZXJDaGlsZD1mdW5jdGlvbih0LGUsaSxuKXt2YXIgcz10aGlzLmFkanVzdENoaWxkQ29vcmRpbmF0ZXModCxlLGksbik7Zm9yKHMucmVuZGVyKHQpLG49MDtuPHMuY2hpbGRyZW4ubGVuZ3RoO24rKyllLnJlbmRlckNoaWxkKHQsZSxzLG4pfX0sQS5FbGVtZW50LnRleHQucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxBLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5nZXRHbHlwaD1mdW5jdGlvbih0LGUsaSl7dmFyIG49ZVtpXSxzPW51bGw7aWYodC5pc0FyYWJpYyl7dmFyIGE9XCJpc29sYXRlZFwiOygwPT1pfHxcIiBcIj09ZVtpLTFdKSYmaTxlLmxlbmd0aC0yJiZcIiBcIiE9ZVtpKzFdJiYoYT1cInRlcm1pbmFsXCIpLDA8aSYmXCIgXCIhPWVbaS0xXSYmaTxlLmxlbmd0aC0yJiZcIiBcIiE9ZVtpKzFdJiYoYT1cIm1lZGlhbFwiKSwwPGkmJlwiIFwiIT1lW2ktMV0mJihpPT1lLmxlbmd0aC0xfHxcIiBcIj09ZVtpKzFdKSYmKGE9XCJpbml0aWFsXCIpLHZvaWQgMCE9PXQuZ2x5cGhzW25dJiZudWxsPT0ocz10LmdseXBoc1tuXVthXSkmJlwiZ2x5cGhcIj09dC5nbHlwaHNbbl0udHlwZSYmKHM9dC5nbHlwaHNbbl0pfWVsc2Ugcz10LmdseXBoc1tuXTtyZXR1cm4gbnVsbD09cyYmKHM9dC5taXNzaW5nR2x5cGgpLHN9LHRoaXMucmVuZGVyQ2hpbGRyZW49ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5wYXJlbnQuc3R5bGUoXCJmb250LWZhbWlseVwiKS5nZXREZWZpbml0aW9uKCk7aWYobnVsbD09ZSlcInN0cm9rZVwiPT10LnBhaW50T3JkZXI/KFwiXCIhPXQuc3Ryb2tlU3R5bGUmJnQuc3Ryb2tlVGV4dChBLmNvbXByZXNzU3BhY2VzKHRoaXMuZ2V0VGV4dCgpKSx0aGlzLngsdGhpcy55KSxcIlwiIT10LmZpbGxTdHlsZSYmdC5maWxsVGV4dChBLmNvbXByZXNzU3BhY2VzKHRoaXMuZ2V0VGV4dCgpKSx0aGlzLngsdGhpcy55KSk6KFwiXCIhPXQuZmlsbFN0eWxlJiZ0LmZpbGxUZXh0KEEuY29tcHJlc3NTcGFjZXModGhpcy5nZXRUZXh0KCkpLHRoaXMueCx0aGlzLnkpLFwiXCIhPXQuc3Ryb2tlU3R5bGUmJnQuc3Ryb2tlVGV4dChBLmNvbXByZXNzU3BhY2VzKHRoaXMuZ2V0VGV4dCgpKSx0aGlzLngsdGhpcy55KSk7ZWxzZXt2YXIgaT10aGlzLnBhcmVudC5zdHlsZShcImZvbnQtc2l6ZVwiKS5udW1WYWx1ZU9yRGVmYXVsdChBLkZvbnQuUGFyc2UoQS5jdHguZm9udCkuZm9udFNpemUpLG49dGhpcy5wYXJlbnQuc3R5bGUoXCJmb250LXN0eWxlXCIpLnZhbHVlT3JEZWZhdWx0KEEuRm9udC5QYXJzZShBLmN0eC5mb250KS5mb250U3R5bGUpLHM9dGhpcy5nZXRUZXh0KCk7ZS5pc1JUTCYmKHM9cy5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKSk7Zm9yKHZhciBhPUEuVG9OdW1iZXJBcnJheSh0aGlzLnBhcmVudC5hdHRyaWJ1dGUoXCJkeFwiKS52YWx1ZSkscj0wO3I8cy5sZW5ndGg7cisrKXt2YXIgbz10aGlzLmdldEdseXBoKGUscyxyKSxsPWkvZS5mb250RmFjZS51bml0c1BlckVtO3QudHJhbnNsYXRlKHRoaXMueCx0aGlzLnkpLHQuc2NhbGUobCwtbCk7dmFyIGg9dC5saW5lV2lkdGg7dC5saW5lV2lkdGg9dC5saW5lV2lkdGgqZS5mb250RmFjZS51bml0c1BlckVtL2ksXCJpdGFsaWNcIj09biYmdC50cmFuc2Zvcm0oMSwwLC40LDEsMCwwKSxvLnJlbmRlcih0KSxcIml0YWxpY1wiPT1uJiZ0LnRyYW5zZm9ybSgxLDAsLS40LDEsMCwwKSx0LmxpbmVXaWR0aD1oLHQuc2NhbGUoMS9sLC0xL2wpLHQudHJhbnNsYXRlKC10aGlzLngsLXRoaXMueSksdGhpcy54Kz1pKihvLmhvcml6QWR2WHx8ZS5ob3JpekFkdlgpL2UuZm9udEZhY2UudW5pdHNQZXJFbSx2b2lkIDA9PT1hW3JdfHxpc05hTihhW3JdKXx8KHRoaXMueCs9YVtyXSl9fX0sdGhpcy5nZXRUZXh0PWZ1bmN0aW9uKCl7fSx0aGlzLm1lYXN1cmVUZXh0UmVjdXJzaXZlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10aGlzLm1lYXN1cmVUZXh0KHQpLGk9MDtpPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO2krKyllKz10aGlzLmNoaWxkcmVuW2ldLm1lYXN1cmVUZXh0UmVjdXJzaXZlKHQpO3JldHVybiBlfSx0aGlzLm1lYXN1cmVUZXh0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMucGFyZW50LnN0eWxlKFwiZm9udC1mYW1pbHlcIikuZ2V0RGVmaW5pdGlvbigpO2lmKG51bGwhPWUpe3ZhciBpPXRoaXMucGFyZW50LnN0eWxlKFwiZm9udC1zaXplXCIpLm51bVZhbHVlT3JEZWZhdWx0KEEuRm9udC5QYXJzZShBLmN0eC5mb250KS5mb250U2l6ZSksbj0wLHM9dGhpcy5nZXRUZXh0KCk7ZS5pc1JUTCYmKHM9cy5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKSk7Zm9yKHZhciBhPUEuVG9OdW1iZXJBcnJheSh0aGlzLnBhcmVudC5hdHRyaWJ1dGUoXCJkeFwiKS52YWx1ZSkscj0wO3I8cy5sZW5ndGg7cisrKW4rPSh0aGlzLmdldEdseXBoKGUscyxyKS5ob3JpekFkdlh8fGUuaG9yaXpBZHZYKSppL2UuZm9udEZhY2UudW5pdHNQZXJFbSx2b2lkIDA9PT1hW3JdfHxpc05hTihhW3JdKXx8KG4rPWFbcl0pO3JldHVybiBufXZhciBvPUEuY29tcHJlc3NTcGFjZXModGhpcy5nZXRUZXh0KCkpO2lmKCF0Lm1lYXN1cmVUZXh0KXJldHVybiAxMCpvLmxlbmd0aDt0LnNhdmUoKSx0aGlzLnNldENvbnRleHQodCwhMCk7dmFyIGw9dC5tZWFzdXJlVGV4dChvKS53aWR0aDtyZXR1cm4gdC5yZXN0b3JlKCksbH0sdGhpcy5nZXRCb3VuZGluZ0JveD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLnBhcmVudC5zdHlsZShcImZvbnQtc2l6ZVwiKS5udW1WYWx1ZU9yRGVmYXVsdChBLkZvbnQuUGFyc2UoQS5jdHguZm9udCkuZm9udFNpemUpO3JldHVybiBuZXcgQS5Cb3VuZGluZ0JveCh0aGlzLngsdGhpcy55LWUsdGhpcy54K3RoaXMubWVhc3VyZVRleHQodCksdGhpcy55KX19LEEuRWxlbWVudC5UZXh0RWxlbWVudEJhc2UucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxBLkVsZW1lbnQudHNwYW49ZnVuY3Rpb24odCl7dGhpcy5jYXB0dXJlVGV4dE5vZGVzPSEwLHRoaXMuYmFzZT1BLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnRleHQ9QS5jb21wcmVzc1NwYWNlcyh0LnZhbHVlfHx0LnRleHR8fHQudGV4dENvbnRlbnR8fFwiXCIpLHRoaXMuZ2V0VGV4dD1mdW5jdGlvbigpe3JldHVybiAwPHRoaXMuY2hpbGRyZW4ubGVuZ3RoP1wiXCI6dGhpcy50ZXh0fX0sQS5FbGVtZW50LnRzcGFuLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlRleHRFbGVtZW50QmFzZSxBLkVsZW1lbnQudHJlZj1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlRleHRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5nZXRUZXh0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5nZXRIcmVmQXR0cmlidXRlKCkuZ2V0RGVmaW5pdGlvbigpO2lmKG51bGwhPXQpcmV0dXJuIHQuY2hpbGRyZW5bMF0uZ2V0VGV4dCgpfX0sQS5FbGVtZW50LnRyZWYucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlLEEuRWxlbWVudC5hPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmhhc1RleHQ9MDx0LmNoaWxkTm9kZXMubGVuZ3RoO2Zvcih2YXIgZT0wO2U8dC5jaGlsZE5vZGVzLmxlbmd0aDtlKyspMyE9dC5jaGlsZE5vZGVzW2VdLm5vZGVUeXBlJiYodGhpcy5oYXNUZXh0PSExKTt0aGlzLnRleHQ9dGhpcy5oYXNUZXh0P3QuY2hpbGROb2Rlc1swXS52YWx1ZXx8dC5jaGlsZE5vZGVzWzBdLmRhdGE6XCJcIix0aGlzLmdldFRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50ZXh0fSx0aGlzLmJhc2VSZW5kZXJDaGlsZHJlbj10aGlzLnJlbmRlckNoaWxkcmVuLHRoaXMucmVuZGVyQ2hpbGRyZW49ZnVuY3Rpb24odCl7aWYodGhpcy5oYXNUZXh0KXt0aGlzLmJhc2VSZW5kZXJDaGlsZHJlbih0KTt2YXIgZT1uZXcgQS5Qcm9wZXJ0eShcImZvbnRTaXplXCIsQS5Gb250LlBhcnNlKEEuY3R4LmZvbnQpLmZvbnRTaXplKTtBLk1vdXNlLmNoZWNrQm91bmRpbmdCb3godGhpcyxuZXcgQS5Cb3VuZGluZ0JveCh0aGlzLngsdGhpcy55LWUudG9QaXhlbHMoXCJ5XCIpLHRoaXMueCt0aGlzLm1lYXN1cmVUZXh0KHQpLHRoaXMueSkpfWVsc2UgaWYoMDx0aGlzLmNoaWxkcmVuLmxlbmd0aCl7dmFyIGk9bmV3IEEuRWxlbWVudC5nO2kuY2hpbGRyZW49dGhpcy5jaGlsZHJlbixpLnBhcmVudD10aGlzLGkucmVuZGVyKHQpfX0sdGhpcy5vbmNsaWNrPWZ1bmN0aW9uKCl7dS5vcGVuKHRoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLnZhbHVlKX0sdGhpcy5vbm1vdXNlbW92ZT1mdW5jdGlvbigpe0EuY3R4LmNhbnZhcy5zdHlsZS5jdXJzb3I9XCJwb2ludGVyXCJ9fSxBLkVsZW1lbnQuYS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5UZXh0RWxlbWVudEJhc2UsQS5FbGVtZW50LmltYWdlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCk7dmFyIGU9dGhpcy5nZXRIcmVmQXR0cmlidXRlKCkudmFsdWU7aWYoXCJcIiE9ZSl7dmFyIGE9ZS5tYXRjaCgvXFwuc3ZnJC8pO2lmKEEuSW1hZ2VzLnB1c2godGhpcyksdGhpcy5sb2FkZWQ9ITEsYSl0aGlzLmltZz1BLmFqYXgoZSksdGhpcy5sb2FkZWQ9ITA7ZWxzZXt0aGlzLmltZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLDE9PUEub3B0cy51c2VDT1JTJiYodGhpcy5pbWcuY3Jvc3NPcmlnaW49XCJBbm9ueW1vdXNcIik7dmFyIHI9dGhpczt0aGlzLmltZy5vbmxvYWQ9ZnVuY3Rpb24oKXtyLmxvYWRlZD0hMH0sdGhpcy5pbWcub25lcnJvcj1mdW5jdGlvbigpe0EubG9nKCdFUlJPUjogaW1hZ2UgXCInK2UrJ1wiIG5vdCBmb3VuZCcpLHIubG9hZGVkPSEwfSx0aGlzLmltZy5zcmM9ZX10aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksaT10aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIikscz10aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIik7MCE9biYmMCE9cyYmKHQuc2F2ZSgpLGE/dC5kcmF3U3ZnKHRoaXMuaW1nLGUsaSxuLHMpOih0LnRyYW5zbGF0ZShlLGkpLEEuQXNwZWN0UmF0aW8odCx0aGlzLmF0dHJpYnV0ZShcInByZXNlcnZlQXNwZWN0UmF0aW9cIikudmFsdWUsbix0aGlzLmltZy53aWR0aCxzLHRoaXMuaW1nLmhlaWdodCwwLDApLHIubG9hZGVkJiYodm9pZCAwPT09dGhpcy5pbWcuY29tcGxldGV8fHRoaXMuaW1nLmNvbXBsZXRlKSYmdC5kcmF3SW1hZ2UodGhpcy5pbWcsMCwwKSksdC5yZXN0b3JlKCkpfSx0aGlzLmdldEJvdW5kaW5nQm94PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLnRvUGl4ZWxzKFwieFwiKSxlPXRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIiksaT10aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKSxuPXRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLnRvUGl4ZWxzKFwieVwiKTtyZXR1cm4gbmV3IEEuQm91bmRpbmdCb3godCxlLHQraSxlK24pfX19LEEuRWxlbWVudC5pbWFnZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLEEuRWxlbWVudC5nPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5nZXRCb3VuZGluZ0JveD1mdW5jdGlvbih0KXtmb3IodmFyIGU9bmV3IEEuQm91bmRpbmdCb3gsaT0wO2k8dGhpcy5jaGlsZHJlbi5sZW5ndGg7aSsrKWUuYWRkQm91bmRpbmdCb3godGhpcy5jaGlsZHJlbltpXS5nZXRCb3VuZGluZ0JveCh0KSk7cmV0dXJuIGV9fSxBLkVsZW1lbnQuZy5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLEEuRWxlbWVudC5zeW1ib2w9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnJlbmRlcj1mdW5jdGlvbih0KXt9fSxBLkVsZW1lbnQuc3ltYm9sLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsQS5FbGVtZW50LnN0eWxlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpO2Zvcih2YXIgZT1cIlwiLGk9MDtpPHQuY2hpbGROb2Rlcy5sZW5ndGg7aSsrKWUrPXQuY2hpbGROb2Rlc1tpXS5kYXRhO2U9ZS5yZXBsYWNlKC8oXFwvXFwqKFteKl18W1xcclxcbl18KFxcKisoW14qXFwvXXxbXFxyXFxuXSkpKSpcXCorXFwvKXwoXltcXHNdKlxcL1xcLy4qKS9nbSxcIlwiKTt2YXIgbj0oZT1BLmNvbXByZXNzU3BhY2VzKGUpKS5zcGxpdChcIn1cIik7Zm9yKGk9MDtpPG4ubGVuZ3RoO2krKylpZihcIlwiIT1BLnRyaW0obltpXSkpZm9yKHZhciBzPW5baV0uc3BsaXQoXCJ7XCIpLGE9c1swXS5zcGxpdChcIixcIikscj1zWzFdLnNwbGl0KFwiO1wiKSxvPTA7bzxhLmxlbmd0aDtvKyspe3ZhciBsPUEudHJpbShhW29dKTtpZihcIlwiIT1sKXtmb3IodmFyIGg9QS5TdHlsZXNbbF18fHt9LHU9MDt1PHIubGVuZ3RoO3UrKyl7dmFyIGM9clt1XS5pbmRleE9mKFwiOlwiKSxmPXJbdV0uc3Vic3RyKDAsYyksbT1yW3VdLnN1YnN0cihjKzEsclt1XS5sZW5ndGgtYyk7bnVsbCE9ZiYmbnVsbCE9bSYmKGhbQS50cmltKGYpXT1uZXcgQS5Qcm9wZXJ0eShBLnRyaW0oZiksQS50cmltKG0pKSl9aWYoQS5TdHlsZXNbbF09aCxBLlN0eWxlc1NwZWNpZmljaXR5W2xdPXcobCksXCJAZm9udC1mYWNlXCI9PWwpZm9yKHZhciBwPWhbXCJmb250LWZhbWlseVwiXS52YWx1ZS5yZXBsYWNlKC9cIi9nLFwiXCIpLGQ9aC5zcmMudmFsdWUuc3BsaXQoXCIsXCIpLHk9MDt5PGQubGVuZ3RoO3krKylpZigwPGRbeV0uaW5kZXhPZignZm9ybWF0KFwic3ZnXCIpJykpZm9yKHZhciB2PWRbeV0uaW5kZXhPZihcInVybFwiKSxnPWRbeV0uaW5kZXhPZihcIilcIix2KSx4PWRbeV0uc3Vic3RyKHYrNSxnLXYtNiksYj1BLnBhcnNlWG1sKEEuYWpheCh4KSkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJmb250XCIpLFA9MDtQPGIubGVuZ3RoO1ArKyl7dmFyIEU9QS5DcmVhdGVFbGVtZW50KGJbUF0pO0EuRGVmaW5pdGlvbnNbcF09RX19fX0sQS5FbGVtZW50LnN0eWxlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC51c2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmJhc2VTZXRDb250ZXh0PXRoaXMuc2V0Q29udGV4dCx0aGlzLnNldENvbnRleHQ9ZnVuY3Rpb24odCl7dGhpcy5iYXNlU2V0Q29udGV4dCh0KSx0aGlzLmF0dHJpYnV0ZShcInhcIikuaGFzVmFsdWUoKSYmdC50cmFuc2xhdGUodGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLnRvUGl4ZWxzKFwieFwiKSwwKSx0aGlzLmF0dHJpYnV0ZShcInlcIikuaGFzVmFsdWUoKSYmdC50cmFuc2xhdGUoMCx0aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpKX07dmFyIG49dGhpcy5nZXRIcmVmQXR0cmlidXRlKCkuZ2V0RGVmaW5pdGlvbigpO3RoaXMucGF0aD1mdW5jdGlvbih0KXtudWxsIT1uJiZuLnBhdGgodCl9LHRoaXMuZWxlbWVudFRyYW5zZm9ybT1mdW5jdGlvbigpe2lmKG51bGwhPW4mJm4uc3R5bGUoXCJ0cmFuc2Zvcm1cIiwhMSwhMCkuaGFzVmFsdWUoKSlyZXR1cm4gbmV3IEEuVHJhbnNmb3JtKG4uc3R5bGUoXCJ0cmFuc2Zvcm1cIiwhMSwhMCkudmFsdWUpfSx0aGlzLmdldEJvdW5kaW5nQm94PWZ1bmN0aW9uKHQpe2lmKG51bGwhPW4pcmV0dXJuIG4uZ2V0Qm91bmRpbmdCb3godCl9LHRoaXMucmVuZGVyQ2hpbGRyZW49ZnVuY3Rpb24odCl7aWYobnVsbCE9bil7dmFyIGU9bjtcInN5bWJvbFwiPT1uLnR5cGUmJigoZT1uZXcgQS5FbGVtZW50LnN2ZykudHlwZT1cInN2Z1wiLGUuYXR0cmlidXRlcy52aWV3Qm94PW5ldyBBLlByb3BlcnR5KFwidmlld0JveFwiLG4uYXR0cmlidXRlKFwidmlld0JveFwiKS52YWx1ZSksZS5hdHRyaWJ1dGVzLnByZXNlcnZlQXNwZWN0UmF0aW89bmV3IEEuUHJvcGVydHkoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsbi5hdHRyaWJ1dGUoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIpLnZhbHVlKSxlLmF0dHJpYnV0ZXMub3ZlcmZsb3c9bmV3IEEuUHJvcGVydHkoXCJvdmVyZmxvd1wiLG4uYXR0cmlidXRlKFwib3ZlcmZsb3dcIikudmFsdWUpLGUuY2hpbGRyZW49bi5jaGlsZHJlbiksXCJzdmdcIj09ZS50eXBlJiYodGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS5oYXNWYWx1ZSgpJiYoZS5hdHRyaWJ1dGVzLndpZHRoPW5ldyBBLlByb3BlcnR5KFwid2lkdGhcIix0aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLnZhbHVlKSksdGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikuaGFzVmFsdWUoKSYmKGUuYXR0cmlidXRlcy5oZWlnaHQ9bmV3IEEuUHJvcGVydHkoXCJoZWlnaHRcIix0aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS52YWx1ZSkpKTt2YXIgaT1lLnBhcmVudDtlLnBhcmVudD1udWxsLGUucmVuZGVyKHQpLGUucGFyZW50PWl9fX0sQS5FbGVtZW50LnVzZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLEEuRWxlbWVudC5tYXNrPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmF0dHJpYnV0ZShcInhcIikudG9QaXhlbHMoXCJ4XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLnRvUGl4ZWxzKFwieVwiKSxzPXRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIpLGE9dGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIpO2lmKDA9PXMmJjA9PWEpe2Zvcih2YXIgcj1uZXcgQS5Cb3VuZGluZ0JveCxvPTA7bzx0aGlzLmNoaWxkcmVuLmxlbmd0aDtvKyspci5hZGRCb3VuZGluZ0JveCh0aGlzLmNoaWxkcmVuW29dLmdldEJvdW5kaW5nQm94KHQpKTtpPU1hdGguZmxvb3Ioci54MSksbj1NYXRoLmZsb29yKHIueTEpLHM9TWF0aC5mbG9vcihyLndpZHRoKCkpLGE9TWF0aC5mbG9vcihyLmhlaWdodCgpKX12YXIgbD1lLmF0dHJpYnV0ZShcIm1hc2tcIikudmFsdWU7ZS5hdHRyaWJ1dGUoXCJtYXNrXCIpLnZhbHVlPVwiXCI7dmFyIGg9cCgpO2gud2lkdGg9aStzLGguaGVpZ2h0PW4rYTt2YXIgdT1oLmdldENvbnRleHQoXCIyZFwiKTt0aGlzLnJlbmRlckNoaWxkcmVuKHUpO3ZhciBjPXAoKTtjLndpZHRoPWkrcyxjLmhlaWdodD1uK2E7dmFyIGY9Yy5nZXRDb250ZXh0KFwiMmRcIik7ZS5yZW5kZXIoZiksZi5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb249XCJkZXN0aW5hdGlvbi1pblwiLGYuZmlsbFN0eWxlPXUuY3JlYXRlUGF0dGVybihoLFwibm8tcmVwZWF0XCIpLGYuZmlsbFJlY3QoMCwwLGkrcyxuK2EpLHQuZmlsbFN0eWxlPWYuY3JlYXRlUGF0dGVybihjLFwibm8tcmVwZWF0XCIpLHQuZmlsbFJlY3QoMCwwLGkrcyxuK2EpLGUuYXR0cmlidXRlKFwibWFza1wiKS52YWx1ZT1sfSx0aGlzLnJlbmRlcj1mdW5jdGlvbih0KXt9fSxBLkVsZW1lbnQubWFzay5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuY2xpcFBhdGg9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hcHBseT1mdW5jdGlvbih0KXt2YXIgZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELGk9dC5iZWdpblBhdGgsbj10LmNsb3NlUGF0aDtlJiYoQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5iZWdpblBhdGg9ZnVuY3Rpb24oKXt9LENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuY2xvc2VQYXRoPWZ1bmN0aW9uKCl7fSksaS5jYWxsKHQpO2Zvcih2YXIgcz0wO3M8dGhpcy5jaGlsZHJlbi5sZW5ndGg7cysrKXt2YXIgYT10aGlzLmNoaWxkcmVuW3NdO2lmKHZvaWQgMCE9PWEucGF0aCl7dmFyIHI9dm9pZCAwIT09YS5lbGVtZW50VHJhbnNmb3JtJiZhLmVsZW1lbnRUcmFuc2Zvcm0oKTshciYmYS5zdHlsZShcInRyYW5zZm9ybVwiLCExLCEwKS5oYXNWYWx1ZSgpJiYocj1uZXcgQS5UcmFuc2Zvcm0oYS5zdHlsZShcInRyYW5zZm9ybVwiLCExLCEwKS52YWx1ZSkpLHImJnIuYXBwbHkodCksYS5wYXRoKHQpLGUmJihDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmNsb3NlUGF0aD1uKSxyJiZyLnVuYXBwbHkodCl9fW4uY2FsbCh0KSx0LmNsaXAoKSxlJiYoQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5iZWdpblBhdGg9aSxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmNsb3NlUGF0aD1uKX0sdGhpcy5yZW5kZXI9ZnVuY3Rpb24odCl7fX0sQS5FbGVtZW50LmNsaXBQYXRoLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5maWx0ZXI9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hcHBseT1mdW5jdGlvbih0LGUpe3ZhciBpPWUuZ2V0Qm91bmRpbmdCb3godCksbj1NYXRoLmZsb29yKGkueDEpLHM9TWF0aC5mbG9vcihpLnkxKSxhPU1hdGguZmxvb3IoaS53aWR0aCgpKSxyPU1hdGguZmxvb3IoaS5oZWlnaHQoKSksbz1lLnN0eWxlKFwiZmlsdGVyXCIpLnZhbHVlO2Uuc3R5bGUoXCJmaWx0ZXJcIikudmFsdWU9XCJcIjtmb3IodmFyIGw9MCxoPTAsdT0wO3U8dGhpcy5jaGlsZHJlbi5sZW5ndGg7dSsrKXt2YXIgYz10aGlzLmNoaWxkcmVuW3VdLmV4dHJhRmlsdGVyRGlzdGFuY2V8fDA7bD1NYXRoLm1heChsLGMpLGg9TWF0aC5tYXgoaCxjKX12YXIgZj1wKCk7Zi53aWR0aD1hKzIqbCxmLmhlaWdodD1yKzIqaDt2YXIgbT1mLmdldENvbnRleHQoXCIyZFwiKTtmb3IobS50cmFuc2xhdGUoLW4rbCwtcytoKSxlLnJlbmRlcihtKSx1PTA7dTx0aGlzLmNoaWxkcmVuLmxlbmd0aDt1KyspXCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5jaGlsZHJlblt1XS5hcHBseSYmdGhpcy5jaGlsZHJlblt1XS5hcHBseShtLDAsMCxhKzIqbCxyKzIqaCk7dC5kcmF3SW1hZ2UoZiwwLDAsYSsyKmwscisyKmgsbi1sLHMtaCxhKzIqbCxyKzIqaCksZS5zdHlsZShcImZpbHRlclwiLCEwKS52YWx1ZT1vfSx0aGlzLnJlbmRlcj1mdW5jdGlvbih0KXt9fSxBLkVsZW1lbnQuZmlsdGVyLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5mZU1vcnBob2xvZ3k9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hcHBseT1mdW5jdGlvbih0LGUsaSxuLHMpe319LEEuRWxlbWVudC5mZU1vcnBob2xvZ3kucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmZlQ29tcG9zaXRlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCxlLGksbixzKXt9fSxBLkVsZW1lbnQuZmVDb21wb3NpdGUucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmZlQ29sb3JNYXRyaXg9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCk7dmFyIG49QS5Ub051bWJlckFycmF5KHRoaXMuYXR0cmlidXRlKFwidmFsdWVzXCIpLnZhbHVlKTtzd2l0Y2godGhpcy5hdHRyaWJ1dGUoXCJ0eXBlXCIpLnZhbHVlT3JEZWZhdWx0KFwibWF0cml4XCIpKXtjYXNlXCJzYXR1cmF0ZVwiOnZhciBlPW5bMF07bj1bLjIxMysuNzg3KmUsLjcxNS0uNzE1KmUsLjA3Mi0uMDcyKmUsMCwwLC4yMTMtLjIxMyplLC43MTUrLjI4NSplLC4wNzItLjA3MiplLDAsMCwuMjEzLS4yMTMqZSwuNzE1LS43MTUqZSwuMDcyKy45MjgqZSwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMV07YnJlYWs7Y2FzZVwiaHVlUm90YXRlXCI6dmFyIHM9blswXSpNYXRoLlBJLzE4MCxpPWZ1bmN0aW9uKHQsZSxpKXtyZXR1cm4gdCtNYXRoLmNvcyhzKSplK01hdGguc2luKHMpKml9O249W2koLjIxMywuNzg3LC0uMjEzKSxpKC43MTUsLS43MTUsLS43MTUpLGkoLjA3MiwtLjA3MiwuOTI4KSwwLDAsaSguMjEzLC0uMjEzLC4xNDMpLGkoLjcxNSwuMjg1LC4xNCksaSguMDcyLC0uMDcyLC0uMjgzKSwwLDAsaSguMjEzLC0uMjEzLC0uNzg3KSxpKC43MTUsLS43MTUsLjcxNSksaSguMDcyLC45MjgsLjA3MiksMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDFdO2JyZWFrO2Nhc2VcImx1bWluYW5jZVRvQWxwaGFcIjpuPVswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwuMjEyNSwuNzE1NCwuMDcyMSwwLDAsMCwwLDAsMCwxXX1mdW5jdGlvbiB1KHQsZSxpLG4scyxhKXtyZXR1cm4gdFtpKm4qNCs0KmUrYV19ZnVuY3Rpb24gYyh0LGUsaSxuLHMsYSxyKXt0W2kqbio0KzQqZSthXT1yfWZ1bmN0aW9uIGYodCxlKXt2YXIgaT1uW3RdO3JldHVybiBpKihpPDA/ZS0yNTU6ZSl9dGhpcy5hcHBseT1mdW5jdGlvbih0LGUsaSxuLHMpe3ZhciBhPXQuZ2V0SW1hZ2VEYXRhKDAsMCxuLHMpO2ZvcihpPTA7aTxzO2krKylmb3IoZT0wO2U8bjtlKyspe3ZhciByPXUoYS5kYXRhLGUsaSxuLDAsMCksbz11KGEuZGF0YSxlLGksbiwwLDEpLGw9dShhLmRhdGEsZSxpLG4sMCwyKSxoPXUoYS5kYXRhLGUsaSxuLDAsMyk7YyhhLmRhdGEsZSxpLG4sMCwwLGYoMCxyKStmKDEsbykrZigyLGwpK2YoMyxoKStmKDQsMSkpLGMoYS5kYXRhLGUsaSxuLDAsMSxmKDUscikrZig2LG8pK2YoNyxsKStmKDgsaCkrZig5LDEpKSxjKGEuZGF0YSxlLGksbiwwLDIsZigxMCxyKStmKDExLG8pK2YoMTIsbCkrZigxMyxoKStmKDE0LDEpKSxjKGEuZGF0YSxlLGksbiwwLDMsZigxNSxyKStmKDE2LG8pK2YoMTcsbCkrZigxOCxoKStmKDE5LDEpKX10LmNsZWFyUmVjdCgwLDAsbixzKSx0LnB1dEltYWdlRGF0YShhLDAsMCl9fSxBLkVsZW1lbnQuZmVDb2xvck1hdHJpeC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuZmVHYXVzc2lhbkJsdXI9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5ibHVyUmFkaXVzPU1hdGguZmxvb3IodGhpcy5hdHRyaWJ1dGUoXCJzdGREZXZpYXRpb25cIikubnVtVmFsdWUoKSksdGhpcy5leHRyYUZpbHRlckRpc3RhbmNlPXRoaXMuYmx1clJhZGl1cyx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQsZSxpLG4scyl7ZCYmdm9pZCAwIT09ZC5jYW52YXNSR0JBPyh0LmNhbnZhcy5pZD1BLlVuaXF1ZUlkKCksdC5jYW52YXMuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHQuY2FudmFzKSxkLmNhbnZhc1JHQkEodC5jYW52YXMsZSxpLG4scyx0aGlzLmJsdXJSYWRpdXMpLGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodC5jYW52YXMpKTpBLmxvZyhcIkVSUk9SOiBTdGFja0JsdXIuanMgbXVzdCBiZSBpbmNsdWRlZCBmb3IgYmx1ciB0byB3b3JrXCIpfX0sQS5FbGVtZW50LmZlR2F1c3NpYW5CbHVyLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC50aXRsZT1mdW5jdGlvbih0KXt9LEEuRWxlbWVudC50aXRsZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuZGVzYz1mdW5jdGlvbih0KXt9LEEuRWxlbWVudC5kZXNjLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5NSVNTSU5HPWZ1bmN0aW9uKHQpe0EubG9nKFwiRVJST1I6IEVsZW1lbnQgJ1wiK3Qubm9kZU5hbWUrXCInIG5vdCB5ZXQgaW1wbGVtZW50ZWQuXCIpfSxBLkVsZW1lbnQuTUlTU0lORy5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkNyZWF0ZUVsZW1lbnQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5ub2RlTmFtZS5yZXBsYWNlKC9eW146XSs6LyxcIlwiKTtlPWUucmVwbGFjZSgvXFwtL2csXCJcIik7dmFyIGk9bnVsbDtyZXR1cm4oaT12b2lkIDAhPT1BLkVsZW1lbnRbZV0/bmV3IEEuRWxlbWVudFtlXSh0KTpuZXcgQS5FbGVtZW50Lk1JU1NJTkcodCkpLnR5cGU9dC5ub2RlTmFtZSxpfSxBLmxvYWQ9ZnVuY3Rpb24odCxlKXtBLmxvYWRYbWwodCxBLmFqYXgoZSkpfSxBLmxvYWRYbWw9ZnVuY3Rpb24odCxlKXtBLmxvYWRYbWxEb2ModCxBLnBhcnNlWG1sKGUpKX0sQS5sb2FkWG1sRG9jPWZ1bmN0aW9uKGEscil7QS5pbml0KGEpO3ZhciBpPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1hLmNhbnZhcztlOyl0LngtPWUub2Zmc2V0TGVmdCx0LnktPWUub2Zmc2V0VG9wLGU9ZS5vZmZzZXRQYXJlbnQ7cmV0dXJuIHUuc2Nyb2xsWCYmKHQueCs9dS5zY3JvbGxYKSx1LnNjcm9sbFkmJih0LnkrPXUuc2Nyb2xsWSksdH07MSE9QS5vcHRzLmlnbm9yZU1vdXNlJiYoYS5jYW52YXMub25jbGljaz1mdW5jdGlvbih0KXt2YXIgZT1pKG5ldyBBLlBvaW50KG51bGwhPXQ/dC5jbGllbnRYOmV2ZW50LmNsaWVudFgsbnVsbCE9dD90LmNsaWVudFk6ZXZlbnQuY2xpZW50WSkpO0EuTW91c2Uub25jbGljayhlLngsZS55KX0sYS5jYW52YXMub25tb3VzZW1vdmU9ZnVuY3Rpb24odCl7dmFyIGU9aShuZXcgQS5Qb2ludChudWxsIT10P3QuY2xpZW50WDpldmVudC5jbGllbnRYLG51bGwhPXQ/dC5jbGllbnRZOmV2ZW50LmNsaWVudFkpKTtBLk1vdXNlLm9ubW91c2Vtb3ZlKGUueCxlLnkpfSk7dmFyIG89QS5DcmVhdGVFbGVtZW50KHIuZG9jdW1lbnRFbGVtZW50KTtvLnJvb3Q9ITAsby5hZGRTdHlsZXNGcm9tU3R5bGVEZWZpbml0aW9uKCk7dmFyIGw9ITAsbj1mdW5jdGlvbigpe0EuVmlld1BvcnQuQ2xlYXIoKSxhLmNhbnZhcy5wYXJlbnROb2RlP0EuVmlld1BvcnQuU2V0Q3VycmVudChhLmNhbnZhcy5wYXJlbnROb2RlLmNsaWVudFdpZHRoLGEuY2FudmFzLnBhcmVudE5vZGUuY2xpZW50SGVpZ2h0KTpBLlZpZXdQb3J0LlNldEN1cnJlbnQoODAwLDYwMCksMSE9QS5vcHRzLmlnbm9yZURpbWVuc2lvbnMmJihvLnN0eWxlKFwid2lkdGhcIikuaGFzVmFsdWUoKSYmKGEuY2FudmFzLndpZHRoPW8uc3R5bGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIiksYS5jYW52YXMuc3R5bGUmJihhLmNhbnZhcy5zdHlsZS53aWR0aD1hLmNhbnZhcy53aWR0aCtcInB4XCIpKSxvLnN0eWxlKFwiaGVpZ2h0XCIpLmhhc1ZhbHVlKCkmJihhLmNhbnZhcy5oZWlnaHQ9by5zdHlsZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIiksYS5jYW52YXMuc3R5bGUmJihhLmNhbnZhcy5zdHlsZS5oZWlnaHQ9YS5jYW52YXMuaGVpZ2h0K1wicHhcIikpKTt2YXIgdD1hLmNhbnZhcy5jbGllbnRXaWR0aHx8YS5jYW52YXMud2lkdGgsZT1hLmNhbnZhcy5jbGllbnRIZWlnaHR8fGEuY2FudmFzLmhlaWdodDtpZigxPT1BLm9wdHMuaWdub3JlRGltZW5zaW9ucyYmby5zdHlsZShcIndpZHRoXCIpLmhhc1ZhbHVlKCkmJm8uc3R5bGUoXCJoZWlnaHRcIikuaGFzVmFsdWUoKSYmKHQ9by5zdHlsZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKSxlPW8uc3R5bGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIpKSxBLlZpZXdQb3J0LlNldEN1cnJlbnQodCxlKSxudWxsIT1BLm9wdHMub2Zmc2V0WCYmKG8uYXR0cmlidXRlKFwieFwiLCEwKS52YWx1ZT1BLm9wdHMub2Zmc2V0WCksbnVsbCE9QS5vcHRzLm9mZnNldFkmJihvLmF0dHJpYnV0ZShcInlcIiwhMCkudmFsdWU9QS5vcHRzLm9mZnNldFkpLG51bGwhPUEub3B0cy5zY2FsZVdpZHRofHxudWxsIT1BLm9wdHMuc2NhbGVIZWlnaHQpe3ZhciBpPW51bGwsbj1udWxsLHM9QS5Ub051bWJlckFycmF5KG8uYXR0cmlidXRlKFwidmlld0JveFwiKS52YWx1ZSk7bnVsbCE9QS5vcHRzLnNjYWxlV2lkdGgmJihvLmF0dHJpYnV0ZShcIndpZHRoXCIpLmhhc1ZhbHVlKCk/aT1vLmF0dHJpYnV0ZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKS9BLm9wdHMuc2NhbGVXaWR0aDppc05hTihzWzJdKXx8KGk9c1syXS9BLm9wdHMuc2NhbGVXaWR0aCkpLG51bGwhPUEub3B0cy5zY2FsZUhlaWdodCYmKG8uYXR0cmlidXRlKFwiaGVpZ2h0XCIpLmhhc1ZhbHVlKCk/bj1vLmF0dHJpYnV0ZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIikvQS5vcHRzLnNjYWxlSGVpZ2h0OmlzTmFOKHNbM10pfHwobj1zWzNdL0Eub3B0cy5zY2FsZUhlaWdodCkpLG51bGw9PWkmJihpPW4pLG51bGw9PW4mJihuPWkpLG8uYXR0cmlidXRlKFwid2lkdGhcIiwhMCkudmFsdWU9QS5vcHRzLnNjYWxlV2lkdGgsby5hdHRyaWJ1dGUoXCJoZWlnaHRcIiwhMCkudmFsdWU9QS5vcHRzLnNjYWxlSGVpZ2h0LG8uc3R5bGUoXCJ0cmFuc2Zvcm1cIiwhMCwhMCkudmFsdWUrPVwiIHNjYWxlKFwiKzEvaStcIixcIisxL24rXCIpXCJ9MSE9QS5vcHRzLmlnbm9yZUNsZWFyJiZhLmNsZWFyUmVjdCgwLDAsdCxlKSxvLnJlbmRlcihhKSxsJiYobD0hMSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBBLm9wdHMucmVuZGVyQ2FsbGJhY2smJkEub3B0cy5yZW5kZXJDYWxsYmFjayhyKSl9LHM9ITA7QS5JbWFnZXNMb2FkZWQoKSYmKHM9ITEsbigpKSxBLmludGVydmFsSUQ9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXt2YXIgdD0hMTtpZihzJiZBLkltYWdlc0xvYWRlZCgpJiYodD0hKHM9ITEpKSwxIT1BLm9wdHMuaWdub3JlTW91c2UmJih0fD1BLk1vdXNlLmhhc0V2ZW50cygpKSwxIT1BLm9wdHMuaWdub3JlQW5pbWF0aW9uKWZvcih2YXIgZT0wO2U8QS5BbmltYXRpb25zLmxlbmd0aDtlKyspdHw9QS5BbmltYXRpb25zW2VdLnVwZGF0ZSgxZTMvQS5GUkFNRVJBVEUpO1wiZnVuY3Rpb25cIj09dHlwZW9mIEEub3B0cy5mb3JjZVJlZHJhdyYmMT09QS5vcHRzLmZvcmNlUmVkcmF3KCkmJih0PSEwKSx0JiYobigpLEEuTW91c2UucnVuRXZlbnRzKCkpfSwxZTMvQS5GUkFNRVJBVEUpfSxBLnN0b3A9ZnVuY3Rpb24oKXtBLmludGVydmFsSUQmJmNsZWFySW50ZXJ2YWwoQS5pbnRlcnZhbElEKX0sQS5Nb3VzZT1uZXcgZnVuY3Rpb24oKXt0aGlzLmV2ZW50cz1bXSx0aGlzLmhhc0V2ZW50cz1mdW5jdGlvbigpe3JldHVybiAwIT10aGlzLmV2ZW50cy5sZW5ndGh9LHRoaXMub25jbGljaz1mdW5jdGlvbih0LGUpe3RoaXMuZXZlbnRzLnB1c2goe3R5cGU6XCJvbmNsaWNrXCIseDp0LHk6ZSxydW46ZnVuY3Rpb24odCl7dC5vbmNsaWNrJiZ0Lm9uY2xpY2soKX19KX0sdGhpcy5vbm1vdXNlbW92ZT1mdW5jdGlvbih0LGUpe3RoaXMuZXZlbnRzLnB1c2goe3R5cGU6XCJvbm1vdXNlbW92ZVwiLHg6dCx5OmUscnVuOmZ1bmN0aW9uKHQpe3Qub25tb3VzZW1vdmUmJnQub25tb3VzZW1vdmUoKX19KX0sdGhpcy5ldmVudEVsZW1lbnRzPVtdLHRoaXMuY2hlY2tQYXRoPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBpPTA7aTx0aGlzLmV2ZW50cy5sZW5ndGg7aSsrKXt2YXIgbj10aGlzLmV2ZW50c1tpXTtlLmlzUG9pbnRJblBhdGgmJmUuaXNQb2ludEluUGF0aChuLngsbi55KSYmKHRoaXMuZXZlbnRFbGVtZW50c1tpXT10KX19LHRoaXMuY2hlY2tCb3VuZGluZ0JveD1mdW5jdGlvbih0LGUpe2Zvcih2YXIgaT0wO2k8dGhpcy5ldmVudHMubGVuZ3RoO2krKyl7dmFyIG49dGhpcy5ldmVudHNbaV07ZS5pc1BvaW50SW5Cb3gobi54LG4ueSkmJih0aGlzLmV2ZW50RWxlbWVudHNbaV09dCl9fSx0aGlzLnJ1bkV2ZW50cz1mdW5jdGlvbigpe0EuY3R4LmNhbnZhcy5zdHlsZS5jdXJzb3I9XCJcIjtmb3IodmFyIHQ9MDt0PHRoaXMuZXZlbnRzLmxlbmd0aDt0KyspZm9yKHZhciBlPXRoaXMuZXZlbnRzW3RdLGk9dGhpcy5ldmVudEVsZW1lbnRzW3RdO2k7KWUucnVuKGkpLGk9aS5wYXJlbnQ7dGhpcy5ldmVudHM9W10sdGhpcy5ldmVudEVsZW1lbnRzPVtdfX0sQX0oaXx8e30pO1wic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0KSksbnVsbCE9dC5zdmcmJnQuc3ZnLnN0b3AoKSx0LmNoaWxkTm9kZXMmJjE9PXQuY2hpbGROb2Rlcy5sZW5ndGgmJlwiT0JKRUNUXCI9PXQuY2hpbGROb2Rlc1swXS5ub2RlTmFtZXx8KHQuc3ZnPW4pO3ZhciBzPXQuZ2V0Q29udGV4dChcIjJkXCIpO3ZvaWQgMCE9PWUuZG9jdW1lbnRFbGVtZW50P24ubG9hZFhtbERvYyhzLGUpOlwiPFwiPT1lLnN1YnN0cigwLDEpP24ubG9hZFhtbChzLGUpOm4ubG9hZChzLGUpfWVsc2UgZm9yKHZhciBhPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdmdcIikscj0wO3I8YS5sZW5ndGg7cisrKXt2YXIgbz1hW3JdLGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtsLndpZHRoPW8uY2xpZW50V2lkdGgsbC5oZWlnaHQ9by5jbGllbnRIZWlnaHQsby5wYXJlbnROb2RlLmluc2VydEJlZm9yZShsLG8pLG8ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKTt2YXIgaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2guYXBwZW5kQ2hpbGQobyksYyhsLGguaW5uZXJIVE1MKX19O1widW5kZWZpbmVkXCI9PXR5cGVvZiBFbGVtZW50fHwodm9pZCAwIT09RWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcz9mPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQubWF0Y2hlcyhlKX06dm9pZCAwIT09RWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yP2Y9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC53ZWJraXRNYXRjaGVzU2VsZWN0b3IoZSl9OnZvaWQgMCE9PUVsZW1lbnQucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3Rvcj9mPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQubW96TWF0Y2hlc1NlbGVjdG9yKGUpfTp2b2lkIDAhPT1FbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3Rvcj9mPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQubXNNYXRjaGVzU2VsZWN0b3IoZSl9OnZvaWQgMCE9PUVsZW1lbnQucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3I/Zj1mdW5jdGlvbih0LGUpe3JldHVybiB0Lm9NYXRjaGVzU2VsZWN0b3IoZSl9OihcImZ1bmN0aW9uXCIhPXR5cGVvZiBqUXVlcnkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIFplcHRvfHwoZj1mdW5jdGlvbih0LGUpe3JldHVybiAkKHQpLmlzKGUpfSksdm9pZCAwPT09ZiYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFNpenpsZSYmKGY9U2l6emxlLm1hdGNoZXNTZWxlY3RvcikpKTt2YXIgZT0vKFxcW1teXFxdXStcXF0pL2csaT0vKCNbXlxcc1xcKz5+XFwuXFxbOl0rKS9nLGE9LyhcXC5bXlxcc1xcKz5+XFwuXFxbOl0rKS9nLHI9Lyg6OlteXFxzXFwrPn5cXC5cXFs6XSt8OmZpcnN0LWxpbmV8OmZpcnN0LWxldHRlcnw6YmVmb3JlfDphZnRlcikvZ2ksbz0vKDpbXFx3LV0rXFwoW15cXCldKlxcKSkvZ2ksbD0vKDpbXlxcc1xcKz5+XFwuXFxbOl0rKS9nLGg9LyhbXlxcc1xcKz5+XFwuXFxbOl0rKS9nO2Z1bmN0aW9uIHcobil7dmFyIHM9WzAsMCwwXSx0PWZ1bmN0aW9uKHQsZSl7dmFyIGk9bi5tYXRjaCh0KTtudWxsIT1pJiYoc1tlXSs9aS5sZW5ndGgsbj1uLnJlcGxhY2UodCxcIiBcIikpfTtyZXR1cm4gbj0obj1uLnJlcGxhY2UoLzpub3RcXCgoW15cXCldKilcXCkvZyxcIiAgICAgJDEgXCIpKS5yZXBsYWNlKC97W1xcc1xcU10qL2dtLFwiIFwiKSx0KGUsMSksdChpLDApLHQoYSwxKSx0KHIsMiksdChvLDEpLHQobCwxKSxuPShuPW4ucmVwbGFjZSgvW1xcKlxcc1xcKz5+XS9nLFwiIFwiKSkucmVwbGFjZSgvWyNcXC5dL2csXCIgXCIpLHQoaCwyKSxzLmpvaW4oXCJcIil9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCYmKENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuZHJhd1N2Zz1mdW5jdGlvbih0LGUsaSxuLHMsYSl7dmFyIHI9e2lnbm9yZU1vdXNlOiEwLGlnbm9yZUFuaW1hdGlvbjohMCxpZ25vcmVEaW1lbnNpb25zOiEwLGlnbm9yZUNsZWFyOiEwLG9mZnNldFg6ZSxvZmZzZXRZOmksc2NhbGVXaWR0aDpuLHNjYWxlSGVpZ2h0OnN9O2Zvcih2YXIgbyBpbiBhKWEuaGFzT3duUHJvcGVydHkobykmJihyW29dPWFbb10pO2ModGhpcy5jYW52YXMsdCxyKX0pLHQuZXhwb3J0cz1jfSh0PXtleHBvcnRzOnt9fSx0LmV4cG9ydHMpLHQuZXhwb3J0c30pOyIsIi8qXG5cdEJhc2VkIG9uIHJnYmNvbG9yLmpzIGJ5IFN0b3lhbiBTdGVmYW5vdiA8c3N0b29AZ21haWwuY29tPlxuXHRodHRwOi8vd3d3LnBocGllZC5jb20vcmdiLWNvbG9yLXBhcnNlci1pbi1qYXZhc2NyaXB0L1xuKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjb2xvcl9zdHJpbmcpIHtcbiAgICB0aGlzLm9rID0gZmFsc2U7XG4gICAgdGhpcy5hbHBoYSA9IDEuMDtcblxuICAgIC8vIHN0cmlwIGFueSBsZWFkaW5nICNcbiAgICBpZiAoY29sb3Jfc3RyaW5nLmNoYXJBdCgwKSA9PSAnIycpIHsgLy8gcmVtb3ZlICMgaWYgYW55XG4gICAgICAgIGNvbG9yX3N0cmluZyA9IGNvbG9yX3N0cmluZy5zdWJzdHIoMSw2KTtcbiAgICB9XG5cbiAgICBjb2xvcl9zdHJpbmcgPSBjb2xvcl9zdHJpbmcucmVwbGFjZSgvIC9nLCcnKTtcbiAgICBjb2xvcl9zdHJpbmcgPSBjb2xvcl9zdHJpbmcudG9Mb3dlckNhc2UoKTtcblxuICAgIC8vIGJlZm9yZSBnZXR0aW5nIGludG8gcmVnZXhwcywgdHJ5IHNpbXBsZSBtYXRjaGVzXG4gICAgLy8gYW5kIG92ZXJ3cml0ZSB0aGUgaW5wdXRcbiAgICB2YXIgc2ltcGxlX2NvbG9ycyA9IHtcbiAgICAgICAgYWxpY2VibHVlOiAnZjBmOGZmJyxcbiAgICAgICAgYW50aXF1ZXdoaXRlOiAnZmFlYmQ3JyxcbiAgICAgICAgYXF1YTogJzAwZmZmZicsXG4gICAgICAgIGFxdWFtYXJpbmU6ICc3ZmZmZDQnLFxuICAgICAgICBhenVyZTogJ2YwZmZmZicsXG4gICAgICAgIGJlaWdlOiAnZjVmNWRjJyxcbiAgICAgICAgYmlzcXVlOiAnZmZlNGM0JyxcbiAgICAgICAgYmxhY2s6ICcwMDAwMDAnLFxuICAgICAgICBibGFuY2hlZGFsbW9uZDogJ2ZmZWJjZCcsXG4gICAgICAgIGJsdWU6ICcwMDAwZmYnLFxuICAgICAgICBibHVldmlvbGV0OiAnOGEyYmUyJyxcbiAgICAgICAgYnJvd246ICdhNTJhMmEnLFxuICAgICAgICBidXJseXdvb2Q6ICdkZWI4ODcnLFxuICAgICAgICBjYWRldGJsdWU6ICc1ZjllYTAnLFxuICAgICAgICBjaGFydHJldXNlOiAnN2ZmZjAwJyxcbiAgICAgICAgY2hvY29sYXRlOiAnZDI2OTFlJyxcbiAgICAgICAgY29yYWw6ICdmZjdmNTAnLFxuICAgICAgICBjb3JuZmxvd2VyYmx1ZTogJzY0OTVlZCcsXG4gICAgICAgIGNvcm5zaWxrOiAnZmZmOGRjJyxcbiAgICAgICAgY3JpbXNvbjogJ2RjMTQzYycsXG4gICAgICAgIGN5YW46ICcwMGZmZmYnLFxuICAgICAgICBkYXJrYmx1ZTogJzAwMDA4YicsXG4gICAgICAgIGRhcmtjeWFuOiAnMDA4YjhiJyxcbiAgICAgICAgZGFya2dvbGRlbnJvZDogJ2I4ODYwYicsXG4gICAgICAgIGRhcmtncmF5OiAnYTlhOWE5JyxcbiAgICAgICAgZGFya2dyZWVuOiAnMDA2NDAwJyxcbiAgICAgICAgZGFya2toYWtpOiAnYmRiNzZiJyxcbiAgICAgICAgZGFya21hZ2VudGE6ICc4YjAwOGInLFxuICAgICAgICBkYXJrb2xpdmVncmVlbjogJzU1NmIyZicsXG4gICAgICAgIGRhcmtvcmFuZ2U6ICdmZjhjMDAnLFxuICAgICAgICBkYXJrb3JjaGlkOiAnOTkzMmNjJyxcbiAgICAgICAgZGFya3JlZDogJzhiMDAwMCcsXG4gICAgICAgIGRhcmtzYWxtb246ICdlOTk2N2EnLFxuICAgICAgICBkYXJrc2VhZ3JlZW46ICc4ZmJjOGYnLFxuICAgICAgICBkYXJrc2xhdGVibHVlOiAnNDgzZDhiJyxcbiAgICAgICAgZGFya3NsYXRlZ3JheTogJzJmNGY0ZicsXG4gICAgICAgIGRhcmt0dXJxdW9pc2U6ICcwMGNlZDEnLFxuICAgICAgICBkYXJrdmlvbGV0OiAnOTQwMGQzJyxcbiAgICAgICAgZGVlcHBpbms6ICdmZjE0OTMnLFxuICAgICAgICBkZWVwc2t5Ymx1ZTogJzAwYmZmZicsXG4gICAgICAgIGRpbWdyYXk6ICc2OTY5NjknLFxuICAgICAgICBkb2RnZXJibHVlOiAnMWU5MGZmJyxcbiAgICAgICAgZmVsZHNwYXI6ICdkMTkyNzUnLFxuICAgICAgICBmaXJlYnJpY2s6ICdiMjIyMjInLFxuICAgICAgICBmbG9yYWx3aGl0ZTogJ2ZmZmFmMCcsXG4gICAgICAgIGZvcmVzdGdyZWVuOiAnMjI4YjIyJyxcbiAgICAgICAgZnVjaHNpYTogJ2ZmMDBmZicsXG4gICAgICAgIGdhaW5zYm9ybzogJ2RjZGNkYycsXG4gICAgICAgIGdob3N0d2hpdGU6ICdmOGY4ZmYnLFxuICAgICAgICBnb2xkOiAnZmZkNzAwJyxcbiAgICAgICAgZ29sZGVucm9kOiAnZGFhNTIwJyxcbiAgICAgICAgZ3JheTogJzgwODA4MCcsXG4gICAgICAgIGdyZWVuOiAnMDA4MDAwJyxcbiAgICAgICAgZ3JlZW55ZWxsb3c6ICdhZGZmMmYnLFxuICAgICAgICBob25leWRldzogJ2YwZmZmMCcsXG4gICAgICAgIGhvdHBpbms6ICdmZjY5YjQnLFxuICAgICAgICBpbmRpYW5yZWQgOiAnY2Q1YzVjJyxcbiAgICAgICAgaW5kaWdvIDogJzRiMDA4MicsXG4gICAgICAgIGl2b3J5OiAnZmZmZmYwJyxcbiAgICAgICAga2hha2k6ICdmMGU2OGMnLFxuICAgICAgICBsYXZlbmRlcjogJ2U2ZTZmYScsXG4gICAgICAgIGxhdmVuZGVyYmx1c2g6ICdmZmYwZjUnLFxuICAgICAgICBsYXduZ3JlZW46ICc3Y2ZjMDAnLFxuICAgICAgICBsZW1vbmNoaWZmb246ICdmZmZhY2QnLFxuICAgICAgICBsaWdodGJsdWU6ICdhZGQ4ZTYnLFxuICAgICAgICBsaWdodGNvcmFsOiAnZjA4MDgwJyxcbiAgICAgICAgbGlnaHRjeWFuOiAnZTBmZmZmJyxcbiAgICAgICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICdmYWZhZDInLFxuICAgICAgICBsaWdodGdyZXk6ICdkM2QzZDMnLFxuICAgICAgICBsaWdodGdyZWVuOiAnOTBlZTkwJyxcbiAgICAgICAgbGlnaHRwaW5rOiAnZmZiNmMxJyxcbiAgICAgICAgbGlnaHRzYWxtb246ICdmZmEwN2EnLFxuICAgICAgICBsaWdodHNlYWdyZWVuOiAnMjBiMmFhJyxcbiAgICAgICAgbGlnaHRza3libHVlOiAnODdjZWZhJyxcbiAgICAgICAgbGlnaHRzbGF0ZWJsdWU6ICc4NDcwZmYnLFxuICAgICAgICBsaWdodHNsYXRlZ3JheTogJzc3ODg5OScsXG4gICAgICAgIGxpZ2h0c3RlZWxibHVlOiAnYjBjNGRlJyxcbiAgICAgICAgbGlnaHR5ZWxsb3c6ICdmZmZmZTAnLFxuICAgICAgICBsaW1lOiAnMDBmZjAwJyxcbiAgICAgICAgbGltZWdyZWVuOiAnMzJjZDMyJyxcbiAgICAgICAgbGluZW46ICdmYWYwZTYnLFxuICAgICAgICBtYWdlbnRhOiAnZmYwMGZmJyxcbiAgICAgICAgbWFyb29uOiAnODAwMDAwJyxcbiAgICAgICAgbWVkaXVtYXF1YW1hcmluZTogJzY2Y2RhYScsXG4gICAgICAgIG1lZGl1bWJsdWU6ICcwMDAwY2QnLFxuICAgICAgICBtZWRpdW1vcmNoaWQ6ICdiYTU1ZDMnLFxuICAgICAgICBtZWRpdW1wdXJwbGU6ICc5MzcwZDgnLFxuICAgICAgICBtZWRpdW1zZWFncmVlbjogJzNjYjM3MScsXG4gICAgICAgIG1lZGl1bXNsYXRlYmx1ZTogJzdiNjhlZScsXG4gICAgICAgIG1lZGl1bXNwcmluZ2dyZWVuOiAnMDBmYTlhJyxcbiAgICAgICAgbWVkaXVtdHVycXVvaXNlOiAnNDhkMWNjJyxcbiAgICAgICAgbWVkaXVtdmlvbGV0cmVkOiAnYzcxNTg1JyxcbiAgICAgICAgbWlkbmlnaHRibHVlOiAnMTkxOTcwJyxcbiAgICAgICAgbWludGNyZWFtOiAnZjVmZmZhJyxcbiAgICAgICAgbWlzdHlyb3NlOiAnZmZlNGUxJyxcbiAgICAgICAgbW9jY2FzaW46ICdmZmU0YjUnLFxuICAgICAgICBuYXZham93aGl0ZTogJ2ZmZGVhZCcsXG4gICAgICAgIG5hdnk6ICcwMDAwODAnLFxuICAgICAgICBvbGRsYWNlOiAnZmRmNWU2JyxcbiAgICAgICAgb2xpdmU6ICc4MDgwMDAnLFxuICAgICAgICBvbGl2ZWRyYWI6ICc2YjhlMjMnLFxuICAgICAgICBvcmFuZ2U6ICdmZmE1MDAnLFxuICAgICAgICBvcmFuZ2VyZWQ6ICdmZjQ1MDAnLFxuICAgICAgICBvcmNoaWQ6ICdkYTcwZDYnLFxuICAgICAgICBwYWxlZ29sZGVucm9kOiAnZWVlOGFhJyxcbiAgICAgICAgcGFsZWdyZWVuOiAnOThmYjk4JyxcbiAgICAgICAgcGFsZXR1cnF1b2lzZTogJ2FmZWVlZScsXG4gICAgICAgIHBhbGV2aW9sZXRyZWQ6ICdkODcwOTMnLFxuICAgICAgICBwYXBheWF3aGlwOiAnZmZlZmQ1JyxcbiAgICAgICAgcGVhY2hwdWZmOiAnZmZkYWI5JyxcbiAgICAgICAgcGVydTogJ2NkODUzZicsXG4gICAgICAgIHBpbms6ICdmZmMwY2InLFxuICAgICAgICBwbHVtOiAnZGRhMGRkJyxcbiAgICAgICAgcG93ZGVyYmx1ZTogJ2IwZTBlNicsXG4gICAgICAgIHB1cnBsZTogJzgwMDA4MCcsXG4gICAgICAgIHJlYmVjY2FwdXJwbGU6ICc2NjMzOTknLFxuICAgICAgICByZWQ6ICdmZjAwMDAnLFxuICAgICAgICByb3N5YnJvd246ICdiYzhmOGYnLFxuICAgICAgICByb3lhbGJsdWU6ICc0MTY5ZTEnLFxuICAgICAgICBzYWRkbGVicm93bjogJzhiNDUxMycsXG4gICAgICAgIHNhbG1vbjogJ2ZhODA3MicsXG4gICAgICAgIHNhbmR5YnJvd246ICdmNGE0NjAnLFxuICAgICAgICBzZWFncmVlbjogJzJlOGI1NycsXG4gICAgICAgIHNlYXNoZWxsOiAnZmZmNWVlJyxcbiAgICAgICAgc2llbm5hOiAnYTA1MjJkJyxcbiAgICAgICAgc2lsdmVyOiAnYzBjMGMwJyxcbiAgICAgICAgc2t5Ymx1ZTogJzg3Y2VlYicsXG4gICAgICAgIHNsYXRlYmx1ZTogJzZhNWFjZCcsXG4gICAgICAgIHNsYXRlZ3JheTogJzcwODA5MCcsXG4gICAgICAgIHNub3c6ICdmZmZhZmEnLFxuICAgICAgICBzcHJpbmdncmVlbjogJzAwZmY3ZicsXG4gICAgICAgIHN0ZWVsYmx1ZTogJzQ2ODJiNCcsXG4gICAgICAgIHRhbjogJ2QyYjQ4YycsXG4gICAgICAgIHRlYWw6ICcwMDgwODAnLFxuICAgICAgICB0aGlzdGxlOiAnZDhiZmQ4JyxcbiAgICAgICAgdG9tYXRvOiAnZmY2MzQ3JyxcbiAgICAgICAgdHVycXVvaXNlOiAnNDBlMGQwJyxcbiAgICAgICAgdmlvbGV0OiAnZWU4MmVlJyxcbiAgICAgICAgdmlvbGV0cmVkOiAnZDAyMDkwJyxcbiAgICAgICAgd2hlYXQ6ICdmNWRlYjMnLFxuICAgICAgICB3aGl0ZTogJ2ZmZmZmZicsXG4gICAgICAgIHdoaXRlc21va2U6ICdmNWY1ZjUnLFxuICAgICAgICB5ZWxsb3c6ICdmZmZmMDAnLFxuICAgICAgICB5ZWxsb3dncmVlbjogJzlhY2QzMidcbiAgICB9O1xuICAgIGNvbG9yX3N0cmluZyA9IHNpbXBsZV9jb2xvcnNbY29sb3Jfc3RyaW5nXSB8fCBjb2xvcl9zdHJpbmc7XG4gICAgLy8gZW1kIG9mIHNpbXBsZSB0eXBlLWluIGNvbG9yc1xuXG4gICAgLy8gYXJyYXkgb2YgY29sb3IgZGVmaW5pdGlvbiBvYmplY3RzXG4gICAgdmFyIGNvbG9yX2RlZnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlOiAvXnJnYmFcXCgoXFxkezEsM30pLFxccyooXFxkezEsM30pLFxccyooXFxkezEsM30pLFxccyooKD86XFxkP1xcLik/XFxkKVxcKSQvLFxuICAgICAgICAgICAgZXhhbXBsZTogWydyZ2JhKDEyMywgMjM0LCA0NSwgMC44KScsICdyZ2JhKDI1NSwyMzQsMjQ1LDEuMCknXSxcbiAgICAgICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uIChiaXRzKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzFdKSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1syXSksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbM10pLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KGJpdHNbNF0pXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcmU6IC9ecmdiXFwoKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KVxcKSQvLFxuICAgICAgICAgICAgZXhhbXBsZTogWydyZ2IoMTIzLCAyMzQsIDQ1KScsICdyZ2IoMjU1LDIzNCwyNDUpJ10sXG4gICAgICAgICAgICBwcm9jZXNzOiBmdW5jdGlvbiAoYml0cyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1sxXSksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMl0pLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzNdKVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlOiAvXihbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KSQvLFxuICAgICAgICAgICAgZXhhbXBsZTogWycjMDBmZjAwJywgJzMzNjY5OSddLFxuICAgICAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gKGJpdHMpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMV0sIDE2KSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1syXSwgMTYpLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzNdLCAxNilcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICByZTogL14oWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkkLyxcbiAgICAgICAgICAgIGV4YW1wbGU6IFsnI2ZiMCcsICdmMGYnXSxcbiAgICAgICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uIChiaXRzKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzFdICsgYml0c1sxXSwgMTYpLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzJdICsgYml0c1syXSwgMTYpLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzNdICsgYml0c1szXSwgMTYpXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF07XG5cbiAgICAvLyBzZWFyY2ggdGhyb3VnaCB0aGUgZGVmaW5pdGlvbnMgdG8gZmluZCBhIG1hdGNoXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xvcl9kZWZzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciByZSA9IGNvbG9yX2RlZnNbaV0ucmU7XG4gICAgICAgIHZhciBwcm9jZXNzb3IgPSBjb2xvcl9kZWZzW2ldLnByb2Nlc3M7XG4gICAgICAgIHZhciBiaXRzID0gcmUuZXhlYyhjb2xvcl9zdHJpbmcpO1xuICAgICAgICBpZiAoYml0cykge1xuICAgICAgICAgICAgdmFyIGNoYW5uZWxzID0gcHJvY2Vzc29yKGJpdHMpO1xuICAgICAgICAgICAgdGhpcy5yID0gY2hhbm5lbHNbMF07XG4gICAgICAgICAgICB0aGlzLmcgPSBjaGFubmVsc1sxXTtcbiAgICAgICAgICAgIHRoaXMuYiA9IGNoYW5uZWxzWzJdO1xuICAgICAgICAgICAgaWYgKGNoYW5uZWxzLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFscGhhID0gY2hhbm5lbHNbM107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9rID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gdmFsaWRhdGUvY2xlYW51cCB2YWx1ZXNcbiAgICB0aGlzLnIgPSAodGhpcy5yIDwgMCB8fCBpc05hTih0aGlzLnIpKSA/IDAgOiAoKHRoaXMuciA+IDI1NSkgPyAyNTUgOiB0aGlzLnIpO1xuICAgIHRoaXMuZyA9ICh0aGlzLmcgPCAwIHx8IGlzTmFOKHRoaXMuZykpID8gMCA6ICgodGhpcy5nID4gMjU1KSA/IDI1NSA6IHRoaXMuZyk7XG4gICAgdGhpcy5iID0gKHRoaXMuYiA8IDAgfHwgaXNOYU4odGhpcy5iKSkgPyAwIDogKCh0aGlzLmIgPiAyNTUpID8gMjU1IDogdGhpcy5iKTtcbiAgICB0aGlzLmFscGhhID0gKHRoaXMuYWxwaGEgPCAwKSA/IDAgOiAoKHRoaXMuYWxwaGEgPiAxLjAgfHwgaXNOYU4odGhpcy5hbHBoYSkpID8gMS4wIDogdGhpcy5hbHBoYSk7XG5cbiAgICAvLyBzb21lIGdldHRlcnNcbiAgICB0aGlzLnRvUkdCID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJ3JnYignICsgdGhpcy5yICsgJywgJyArIHRoaXMuZyArICcsICcgKyB0aGlzLmIgKyAnKSc7XG4gICAgfVxuICAgIHRoaXMudG9SR0JBID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJ3JnYmEoJyArIHRoaXMuciArICcsICcgKyB0aGlzLmcgKyAnLCAnICsgdGhpcy5iICsgJywgJyArIHRoaXMuYWxwaGEgKyAnKSc7XG4gICAgfVxuICAgIHRoaXMudG9IZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByID0gdGhpcy5yLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgdmFyIGcgPSB0aGlzLmcudG9TdHJpbmcoMTYpO1xuICAgICAgICB2YXIgYiA9IHRoaXMuYi50b1N0cmluZygxNik7XG4gICAgICAgIGlmIChyLmxlbmd0aCA9PSAxKSByID0gJzAnICsgcjtcbiAgICAgICAgaWYgKGcubGVuZ3RoID09IDEpIGcgPSAnMCcgKyBnO1xuICAgICAgICBpZiAoYi5sZW5ndGggPT0gMSkgYiA9ICcwJyArIGI7XG4gICAgICAgIHJldHVybiAnIycgKyByICsgZyArIGI7XG4gICAgfVxuXG4gICAgLy8gaGVscFxuICAgIHRoaXMuZ2V0SGVscFhNTCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgZXhhbXBsZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgLy8gYWRkIHJlZ2V4cHNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xvcl9kZWZzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZXhhbXBsZSA9IGNvbG9yX2RlZnNbaV0uZXhhbXBsZTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZXhhbXBsZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGV4YW1wbGVzW2V4YW1wbGVzLmxlbmd0aF0gPSBleGFtcGxlW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGFkZCB0eXBlLWluIGNvbG9yc1xuICAgICAgICBmb3IgKHZhciBzYyBpbiBzaW1wbGVfY29sb3JzKSB7XG4gICAgICAgICAgICBleGFtcGxlc1tleGFtcGxlcy5sZW5ndGhdID0gc2M7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgeG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgeG1sLnNldEF0dHJpYnV0ZSgnaWQnLCAncmdiY29sb3ItZXhhbXBsZXMnKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleGFtcGxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdF9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdF9jb2xvciA9IG5ldyBSR0JDb2xvcihleGFtcGxlc1tpXSk7XG4gICAgICAgICAgICAgICAgdmFyIGV4YW1wbGVfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZXhhbXBsZV9kaXYuc3R5bGUuY3NzVGV4dCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAnbWFyZ2luOiAzcHg7ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJ2JvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAnXG4gICAgICAgICAgICAgICAgICAgICAgICArICdiYWNrZ3JvdW5kOicgKyBsaXN0X2NvbG9yLnRvSGV4KCkgKyAnOyAnXG4gICAgICAgICAgICAgICAgICAgICAgICArICdjb2xvcjonICsgbGlzdF9jb2xvci50b0hleCgpXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIGV4YW1wbGVfZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCd0ZXN0JykpO1xuICAgICAgICAgICAgICAgIHZhciBsaXN0X2l0ZW1fdmFsdWUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICAgICAgICAgICAgICAgICAgJyAnICsgZXhhbXBsZXNbaV0gKyAnIC0+ICcgKyBsaXN0X2NvbG9yLnRvUkdCKCkgKyAnIC0+ICcgKyBsaXN0X2NvbG9yLnRvSGV4KClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGxpc3RfaXRlbS5hcHBlbmRDaGlsZChleGFtcGxlX2Rpdik7XG4gICAgICAgICAgICAgICAgbGlzdF9pdGVtLmFwcGVuZENoaWxkKGxpc3RfaXRlbV92YWx1ZSk7XG4gICAgICAgICAgICAgICAgeG1sLmFwcGVuZENoaWxkKGxpc3RfaXRlbSk7XG5cbiAgICAgICAgICAgIH0gY2F0Y2goZSl7fVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4bWw7XG5cbiAgICB9XG5cbn1cbiIsIi8qXG4gICAgU3RhY2tCbHVyIC0gYSBmYXN0IGFsbW9zdCBHYXVzc2lhbiBCbHVyIEZvciBDYW52YXNcblxuICAgIFZlcnNpb246ICAgICAwLjVcbiAgICBBdXRob3I6ICAgICAgICBNYXJpbyBLbGluZ2VtYW5uXG4gICAgQ29udGFjdDogICAgIG1hcmlvQHF1YXNpbW9uZG8uY29tXG4gICAgV2Vic2l0ZTogICAgaHR0cDovL3d3dy5xdWFzaW1vbmRvLmNvbS9TdGFja0JsdXJGb3JDYW52YXNcbiAgICBUd2l0dGVyOiAgICBAcXVhc2ltb25kb1xuXG4gICAgSW4gY2FzZSB5b3UgZmluZCB0aGlzIGNsYXNzIHVzZWZ1bCAtIGVzcGVjaWFsbHkgaW4gY29tbWVyY2lhbCBwcm9qZWN0cyAtXG4gICAgSSBhbSBub3QgdG90YWxseSB1bmhhcHB5IGZvciBhIHNtYWxsIGRvbmF0aW9uIHRvIG15IFBheVBhbCBhY2NvdW50XG4gICAgbWFyaW9AcXVhc2ltb25kby5kZVxuXG4gICAgT3Igc3VwcG9ydCBtZSBvbiBmbGF0dHI6XG4gICAgaHR0cHM6Ly9mbGF0dHIuY29tL3RoaW5nLzcyNzkxL1N0YWNrQmx1ci1hLWZhc3QtYWxtb3N0LUdhdXNzaWFuLUJsdXItRWZmZWN0LWZvci1DYW52YXNKYXZhc2NyaXB0XG5cbiAgICBDb3B5cmlnaHQgKGMpIDIwMTAgTWFyaW8gS2xpbmdlbWFublxuXG4gICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICAgIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxuICAgIHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuICAgIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gICAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gICAgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcbiAgICBjb25kaXRpb25zOlxuXG4gICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgICBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTXG4gICAgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAgICBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxuICAgIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLFxuICAgIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICAgIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcbiAgICBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gICAgKi9cblxuXG52YXIgbXVsX3RhYmxlID0gW1xuICAgIDUxMiw1MTIsNDU2LDUxMiwzMjgsNDU2LDMzNSw1MTIsNDA1LDMyOCwyNzEsNDU2LDM4OCwzMzUsMjkyLDUxMixcbiAgICA0NTQsNDA1LDM2NCwzMjgsMjk4LDI3MSw0OTYsNDU2LDQyMCwzODgsMzYwLDMzNSwzMTIsMjkyLDI3Myw1MTIsXG4gICAgNDgyLDQ1NCw0MjgsNDA1LDM4MywzNjQsMzQ1LDMyOCwzMTIsMjk4LDI4NCwyNzEsMjU5LDQ5Niw0NzUsNDU2LFxuICAgIDQzNyw0MjAsNDA0LDM4OCwzNzQsMzYwLDM0NywzMzUsMzIzLDMxMiwzMDIsMjkyLDI4MiwyNzMsMjY1LDUxMixcbiAgICA0OTcsNDgyLDQ2OCw0NTQsNDQxLDQyOCw0MTcsNDA1LDM5NCwzODMsMzczLDM2NCwzNTQsMzQ1LDMzNywzMjgsXG4gICAgMzIwLDMxMiwzMDUsMjk4LDI5MSwyODQsMjc4LDI3MSwyNjUsMjU5LDUwNyw0OTYsNDg1LDQ3NSw0NjUsNDU2LFxuICAgIDQ0Niw0MzcsNDI4LDQyMCw0MTIsNDA0LDM5NiwzODgsMzgxLDM3NCwzNjcsMzYwLDM1NCwzNDcsMzQxLDMzNSxcbiAgICAzMjksMzIzLDMxOCwzMTIsMzA3LDMwMiwyOTcsMjkyLDI4NywyODIsMjc4LDI3MywyNjksMjY1LDI2MSw1MTIsXG4gICAgNTA1LDQ5Nyw0ODksNDgyLDQ3NSw0NjgsNDYxLDQ1NCw0NDcsNDQxLDQzNSw0MjgsNDIyLDQxNyw0MTEsNDA1LFxuICAgIDM5OSwzOTQsMzg5LDM4MywzNzgsMzczLDM2OCwzNjQsMzU5LDM1NCwzNTAsMzQ1LDM0MSwzMzcsMzMyLDMyOCxcbiAgICAzMjQsMzIwLDMxNiwzMTIsMzA5LDMwNSwzMDEsMjk4LDI5NCwyOTEsMjg3LDI4NCwyODEsMjc4LDI3NCwyNzEsXG4gICAgMjY4LDI2NSwyNjIsMjU5LDI1Nyw1MDcsNTAxLDQ5Niw0OTEsNDg1LDQ4MCw0NzUsNDcwLDQ2NSw0NjAsNDU2LFxuICAgIDQ1MSw0NDYsNDQyLDQzNyw0MzMsNDI4LDQyNCw0MjAsNDE2LDQxMiw0MDgsNDA0LDQwMCwzOTYsMzkyLDM4OCxcbiAgICAzODUsMzgxLDM3NywzNzQsMzcwLDM2NywzNjMsMzYwLDM1NywzNTQsMzUwLDM0NywzNDQsMzQxLDMzOCwzMzUsXG4gICAgMzMyLDMyOSwzMjYsMzIzLDMyMCwzMTgsMzE1LDMxMiwzMTAsMzA3LDMwNCwzMDIsMjk5LDI5NywyOTQsMjkyLFxuICAgIDI4OSwyODcsMjg1LDI4MiwyODAsMjc4LDI3NSwyNzMsMjcxLDI2OSwyNjcsMjY1LDI2MywyNjEsMjU5XTtcblxuXG52YXIgc2hnX3RhYmxlID0gW1xuICAgIDksIDExLCAxMiwgMTMsIDEzLCAxNCwgMTQsIDE1LCAxNSwgMTUsIDE1LCAxNiwgMTYsIDE2LCAxNiwgMTcsXG4gICAgMTcsIDE3LCAxNywgMTcsIDE3LCAxNywgMTgsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTksXG4gICAgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDIwLCAyMCwgMjAsXG4gICAgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjEsXG4gICAgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsXG4gICAgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsXG4gICAgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsXG4gICAgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjMsXG4gICAgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsXG4gICAgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsXG4gICAgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsXG4gICAgMjMsIDIzLCAyMywgMjMsIDIzLCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsXG4gICAgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsXG4gICAgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsXG4gICAgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsXG4gICAgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCBdO1xuXG5cbmZ1bmN0aW9uIHByb2Nlc3NJbWFnZShpbWcsIGNhbnZhcywgcmFkaXVzLCBibHVyQWxwaGFDaGFubmVsKVxue1xuICAgIGlmICh0eXBlb2YoaW1nKSA9PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW1nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIEhUTUxJbWFnZUVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmICFpbWcgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHcgPSBpbWcubmF0dXJhbFdpZHRoO1xuICAgIHZhciBoID0gaW1nLm5hdHVyYWxIZWlnaHQ7XG5cbiAgICBpZiAodHlwZW9mKGNhbnZhcykgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhcyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBIVE1MQ2FudmFzRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIWNhbnZhcyBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjYW52YXMuc3R5bGUud2lkdGggID0gdyArICdweCc7XG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGggKyAncHgnO1xuICAgIGNhbnZhcy53aWR0aCA9IHc7XG4gICAgY2FudmFzLmhlaWdodCA9IGg7XG5cbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHcsIGgpO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZywgMCwgMCk7XG5cbiAgICBpZiAoaXNOYU4ocmFkaXVzKSB8fCByYWRpdXMgPCAxKSByZXR1cm47XG5cbiAgICBpZiAoYmx1ckFscGhhQ2hhbm5lbClcbiAgICAgICAgcHJvY2Vzc0NhbnZhc1JHQkEoY2FudmFzLCAwLCAwLCB3LCBoLCByYWRpdXMpO1xuICAgIGVsc2VcbiAgICAgICAgcHJvY2Vzc0NhbnZhc1JHQihjYW52YXMsIDAsIDAsIHcsIGgsIHJhZGl1cyk7XG59XG5cbmZ1bmN0aW9uIGdldEltYWdlRGF0YUZyb21DYW52YXMoY2FudmFzLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQpXG57XG4gICAgaWYgKHR5cGVvZihjYW52YXMpID09ICdzdHJpbmcnKVxuICAgICAgICB2YXIgY2FudmFzICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhcyk7XG4gICAgZWxzZSBpZiAodHlwZW9mIEhUTUxDYW52YXNFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpXG4gICAgICAgIHJldHVybjtcblxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdmFyIGltYWdlRGF0YTtcblxuICAgIHRyeSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpbWFnZURhdGEgPSBjb250ZXh0LmdldEltYWdlRGF0YSh0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVuYWJsZSB0byBhY2Nlc3MgbG9jYWwgaW1hZ2UgZGF0YTogXCIgKyBlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmFibGUgdG8gYWNjZXNzIGltYWdlIGRhdGE6IFwiICsgZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGltYWdlRGF0YTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0NhbnZhc1JHQkEoY2FudmFzLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cylcbntcbiAgICBpZiAoaXNOYU4ocmFkaXVzKSB8fCByYWRpdXMgPCAxKSByZXR1cm47XG4gICAgcmFkaXVzIHw9IDA7XG5cbiAgICB2YXIgaW1hZ2VEYXRhID0gZ2V0SW1hZ2VEYXRhRnJvbUNhbnZhcyhjYW52YXMsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICBpbWFnZURhdGEgPSBwcm9jZXNzSW1hZ2VEYXRhUkdCQShpbWFnZURhdGEsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKTtcblxuICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLnB1dEltYWdlRGF0YShpbWFnZURhdGEsIHRvcF94LCB0b3BfeSk7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NJbWFnZURhdGFSR0JBKGltYWdlRGF0YSwgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpXG57XG4gICAgdmFyIHBpeGVscyA9IGltYWdlRGF0YS5kYXRhO1xuXG4gICAgdmFyIHgsIHksIGksIHAsIHlwLCB5aSwgeXcsIHJfc3VtLCBnX3N1bSwgYl9zdW0sIGFfc3VtLFxuICAgICAgICByX291dF9zdW0sIGdfb3V0X3N1bSwgYl9vdXRfc3VtLCBhX291dF9zdW0sXG4gICAgICAgIHJfaW5fc3VtLCBnX2luX3N1bSwgYl9pbl9zdW0sIGFfaW5fc3VtLFxuICAgICAgICBwciwgcGcsIHBiLCBwYSwgcmJzO1xuXG4gICAgdmFyIGRpdiA9IHJhZGl1cyArIHJhZGl1cyArIDE7XG4gICAgdmFyIHc0ID0gd2lkdGggPDwgMjtcbiAgICB2YXIgd2lkdGhNaW51czEgID0gd2lkdGggLSAxO1xuICAgIHZhciBoZWlnaHRNaW51czEgPSBoZWlnaHQgLSAxO1xuICAgIHZhciByYWRpdXNQbHVzMSAgPSByYWRpdXMgKyAxO1xuICAgIHZhciBzdW1GYWN0b3IgPSByYWRpdXNQbHVzMSAqIChyYWRpdXNQbHVzMSArIDEpIC8gMjtcblxuICAgIHZhciBzdGFja1N0YXJ0ID0gbmV3IEJsdXJTdGFjaygpO1xuICAgIHZhciBzdGFjayA9IHN0YWNrU3RhcnQ7XG4gICAgZm9yIChpID0gMTsgaSA8IGRpdjsgaSsrKVxuICAgIHtcbiAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0ID0gbmV3IEJsdXJTdGFjaygpO1xuICAgICAgICBpZiAoaSA9PSByYWRpdXNQbHVzMSkgdmFyIHN0YWNrRW5kID0gc3RhY2s7XG4gICAgfVxuICAgIHN0YWNrLm5leHQgPSBzdGFja1N0YXJ0O1xuICAgIHZhciBzdGFja0luID0gbnVsbDtcbiAgICB2YXIgc3RhY2tPdXQgPSBudWxsO1xuXG4gICAgeXcgPSB5aSA9IDA7XG5cbiAgICB2YXIgbXVsX3N1bSA9IG11bF90YWJsZVtyYWRpdXNdO1xuICAgIHZhciBzaGdfc3VtID0gc2hnX3RhYmxlW3JhZGl1c107XG5cbiAgICBmb3IgKHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspXG4gICAge1xuICAgICAgICByX2luX3N1bSA9IGdfaW5fc3VtID0gYl9pbl9zdW0gPSBhX2luX3N1bSA9IHJfc3VtID0gZ19zdW0gPSBiX3N1bSA9IGFfc3VtID0gMDtcblxuICAgICAgICByX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwciA9IHBpeGVsc1t5aV0pO1xuICAgICAgICBnX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwZyA9IHBpeGVsc1t5aSsxXSk7XG4gICAgICAgIGJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBiID0gcGl4ZWxzW3lpKzJdKTtcbiAgICAgICAgYV9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGEgPSBwaXhlbHNbeWkrM10pO1xuXG4gICAgICAgIHJfc3VtICs9IHN1bUZhY3RvciAqIHByO1xuICAgICAgICBnX3N1bSArPSBzdW1GYWN0b3IgKiBwZztcbiAgICAgICAgYl9zdW0gKz0gc3VtRmFjdG9yICogcGI7XG4gICAgICAgIGFfc3VtICs9IHN1bUZhY3RvciAqIHBhO1xuXG4gICAgICAgIHN0YWNrID0gc3RhY2tTdGFydDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmFkaXVzUGx1czE7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgc3RhY2suciA9IHByO1xuICAgICAgICAgICAgc3RhY2suZyA9IHBnO1xuICAgICAgICAgICAgc3RhY2suYiA9IHBiO1xuICAgICAgICAgICAgc3RhY2suYSA9IHBhO1xuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMTsgaSA8IHJhZGl1c1BsdXMxOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHAgPSB5aSArICgod2lkdGhNaW51czEgPCBpID8gd2lkdGhNaW51czEgOiBpKSA8PCAyKTtcbiAgICAgICAgICAgIHJfc3VtICs9IChzdGFjay5yID0gKHByID0gcGl4ZWxzW3BdKSkgKiAocmJzID0gcmFkaXVzUGx1czEgLSBpKTtcbiAgICAgICAgICAgIGdfc3VtICs9IChzdGFjay5nID0gKHBnID0gcGl4ZWxzW3ArMV0pKSAqIHJicztcbiAgICAgICAgICAgIGJfc3VtICs9IChzdGFjay5iID0gKHBiID0gcGl4ZWxzW3ArMl0pKSAqIHJicztcbiAgICAgICAgICAgIGFfc3VtICs9IChzdGFjay5hID0gKHBhID0gcGl4ZWxzW3ArM10pKSAqIHJicztcblxuICAgICAgICAgICAgcl9pbl9zdW0gKz0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSArPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtICs9IHBiO1xuICAgICAgICAgICAgYV9pbl9zdW0gKz0gcGE7XG5cbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc3RhY2tJbiA9IHN0YWNrU3RhcnQ7XG4gICAgICAgIHN0YWNrT3V0ID0gc3RhY2tFbmQ7XG4gICAgICAgIGZvciAoeCA9IDA7IHggPCB3aWR0aDsgeCsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBwaXhlbHNbeWkrM10gPSBwYSA9IChhX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG4gICAgICAgICAgICBpZiAocGEgIT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYSA9IDI1NSAvIHBhO1xuICAgICAgICAgICAgICAgIHBpeGVsc1t5aV0gICA9ICgocl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtKSAqIHBhO1xuICAgICAgICAgICAgICAgIHBpeGVsc1t5aSsxXSA9ICgoZ19zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtKSAqIHBhO1xuICAgICAgICAgICAgICAgIHBpeGVsc1t5aSsyXSA9ICgoYl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtKSAqIHBhO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwaXhlbHNbeWldID0gcGl4ZWxzW3lpKzFdID0gcGl4ZWxzW3lpKzJdID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcl9zdW0gLT0gcl9vdXRfc3VtO1xuICAgICAgICAgICAgZ19zdW0gLT0gZ19vdXRfc3VtO1xuICAgICAgICAgICAgYl9zdW0gLT0gYl9vdXRfc3VtO1xuICAgICAgICAgICAgYV9zdW0gLT0gYV9vdXRfc3VtO1xuXG4gICAgICAgICAgICByX291dF9zdW0gLT0gc3RhY2tJbi5yO1xuICAgICAgICAgICAgZ19vdXRfc3VtIC09IHN0YWNrSW4uZztcbiAgICAgICAgICAgIGJfb3V0X3N1bSAtPSBzdGFja0luLmI7XG4gICAgICAgICAgICBhX291dF9zdW0gLT0gc3RhY2tJbi5hO1xuXG4gICAgICAgICAgICBwID0gICh5dyArICgocCA9IHggKyByYWRpdXMgKyAxKSA8IHdpZHRoTWludXMxID8gcCA6IHdpZHRoTWludXMxKSkgPDwgMjtcblxuICAgICAgICAgICAgcl9pbl9zdW0gKz0gKHN0YWNrSW4uciA9IHBpeGVsc1twXSk7XG4gICAgICAgICAgICBnX2luX3N1bSArPSAoc3RhY2tJbi5nID0gcGl4ZWxzW3ArMV0pO1xuICAgICAgICAgICAgYl9pbl9zdW0gKz0gKHN0YWNrSW4uYiA9IHBpeGVsc1twKzJdKTtcbiAgICAgICAgICAgIGFfaW5fc3VtICs9IChzdGFja0luLmEgPSBwaXhlbHNbcCszXSk7XG5cbiAgICAgICAgICAgIHJfc3VtICs9IHJfaW5fc3VtO1xuICAgICAgICAgICAgZ19zdW0gKz0gZ19pbl9zdW07XG4gICAgICAgICAgICBiX3N1bSArPSBiX2luX3N1bTtcbiAgICAgICAgICAgIGFfc3VtICs9IGFfaW5fc3VtO1xuXG4gICAgICAgICAgICBzdGFja0luID0gc3RhY2tJbi5uZXh0O1xuXG4gICAgICAgICAgICByX291dF9zdW0gKz0gKHByID0gc3RhY2tPdXQucik7XG4gICAgICAgICAgICBnX291dF9zdW0gKz0gKHBnID0gc3RhY2tPdXQuZyk7XG4gICAgICAgICAgICBiX291dF9zdW0gKz0gKHBiID0gc3RhY2tPdXQuYik7XG4gICAgICAgICAgICBhX291dF9zdW0gKz0gKHBhID0gc3RhY2tPdXQuYSk7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtIC09IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gLT0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSAtPSBwYjtcbiAgICAgICAgICAgIGFfaW5fc3VtIC09IHBhO1xuXG4gICAgICAgICAgICBzdGFja091dCA9IHN0YWNrT3V0Lm5leHQ7XG5cbiAgICAgICAgICAgIHlpICs9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgeXcgKz0gd2lkdGg7XG4gICAgfVxuXG5cbiAgICBmb3IgKHggPSAwOyB4IDwgd2lkdGg7IHgrKylcbiAgICB7XG4gICAgICAgIGdfaW5fc3VtID0gYl9pbl9zdW0gPSBhX2luX3N1bSA9IHJfaW5fc3VtID0gZ19zdW0gPSBiX3N1bSA9IGFfc3VtID0gcl9zdW0gPSAwO1xuXG4gICAgICAgIHlpID0geCA8PCAyO1xuICAgICAgICByX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwciA9IHBpeGVsc1t5aV0pO1xuICAgICAgICBnX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwZyA9IHBpeGVsc1t5aSsxXSk7XG4gICAgICAgIGJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBiID0gcGl4ZWxzW3lpKzJdKTtcbiAgICAgICAgYV9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGEgPSBwaXhlbHNbeWkrM10pO1xuXG4gICAgICAgIHJfc3VtICs9IHN1bUZhY3RvciAqIHByO1xuICAgICAgICBnX3N1bSArPSBzdW1GYWN0b3IgKiBwZztcbiAgICAgICAgYl9zdW0gKz0gc3VtRmFjdG9yICogcGI7XG4gICAgICAgIGFfc3VtICs9IHN1bUZhY3RvciAqIHBhO1xuXG4gICAgICAgIHN0YWNrID0gc3RhY2tTdGFydDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmFkaXVzUGx1czE7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgc3RhY2suciA9IHByO1xuICAgICAgICAgICAgc3RhY2suZyA9IHBnO1xuICAgICAgICAgICAgc3RhY2suYiA9IHBiO1xuICAgICAgICAgICAgc3RhY2suYSA9IHBhO1xuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgeXAgPSB3aWR0aDtcblxuICAgICAgICBmb3IgKGkgPSAxOyBpIDw9IHJhZGl1czsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB5aSA9ICh5cCArIHgpIDw8IDI7XG5cbiAgICAgICAgICAgIHJfc3VtICs9IChzdGFjay5yID0gKHByID0gcGl4ZWxzW3lpXSkpICogKHJicyA9IHJhZGl1c1BsdXMxIC0gaSk7XG4gICAgICAgICAgICBnX3N1bSArPSAoc3RhY2suZyA9IChwZyA9IHBpeGVsc1t5aSsxXSkpICogcmJzO1xuICAgICAgICAgICAgYl9zdW0gKz0gKHN0YWNrLmIgPSAocGIgPSBwaXhlbHNbeWkrMl0pKSAqIHJicztcbiAgICAgICAgICAgIGFfc3VtICs9IChzdGFjay5hID0gKHBhID0gcGl4ZWxzW3lpKzNdKSkgKiByYnM7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtICs9IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gKz0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSArPSBwYjtcbiAgICAgICAgICAgIGFfaW5fc3VtICs9IHBhO1xuXG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG5cbiAgICAgICAgICAgIGlmKGkgPCBoZWlnaHRNaW51czEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeXAgKz0gd2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB5aSA9IHg7XG4gICAgICAgIHN0YWNrSW4gPSBzdGFja1N0YXJ0O1xuICAgICAgICBzdGFja091dCA9IHN0YWNrRW5kO1xuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHAgPSB5aSA8PCAyO1xuICAgICAgICAgICAgcGl4ZWxzW3ArM10gPSBwYSA9IChhX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG4gICAgICAgICAgICBpZiAocGEgPiAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhID0gMjU1IC8gcGE7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3BdICAgPSAoKHJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bSkgKiBwYTtcbiAgICAgICAgICAgICAgICBwaXhlbHNbcCsxXSA9ICgoZ19zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtKSAqIHBhO1xuICAgICAgICAgICAgICAgIHBpeGVsc1twKzJdID0gKChiX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW0pICogcGE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBpeGVsc1twXSA9IHBpeGVsc1twKzFdID0gcGl4ZWxzW3ArMl0gPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByX3N1bSAtPSByX291dF9zdW07XG4gICAgICAgICAgICBnX3N1bSAtPSBnX291dF9zdW07XG4gICAgICAgICAgICBiX3N1bSAtPSBiX291dF9zdW07XG4gICAgICAgICAgICBhX3N1bSAtPSBhX291dF9zdW07XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSAtPSBzdGFja0luLnI7XG4gICAgICAgICAgICBnX291dF9zdW0gLT0gc3RhY2tJbi5nO1xuICAgICAgICAgICAgYl9vdXRfc3VtIC09IHN0YWNrSW4uYjtcbiAgICAgICAgICAgIGFfb3V0X3N1bSAtPSBzdGFja0luLmE7XG5cbiAgICAgICAgICAgIHAgPSAoeCArICgoKHAgPSB5ICsgcmFkaXVzUGx1czEpIDwgaGVpZ2h0TWludXMxID8gcCA6IGhlaWdodE1pbnVzMSkgKiB3aWR0aCkpIDw8IDI7XG5cbiAgICAgICAgICAgIHJfc3VtICs9IChyX2luX3N1bSArPSAoc3RhY2tJbi5yID0gcGl4ZWxzW3BdKSk7XG4gICAgICAgICAgICBnX3N1bSArPSAoZ19pbl9zdW0gKz0gKHN0YWNrSW4uZyA9IHBpeGVsc1twKzFdKSk7XG4gICAgICAgICAgICBiX3N1bSArPSAoYl9pbl9zdW0gKz0gKHN0YWNrSW4uYiA9IHBpeGVsc1twKzJdKSk7XG4gICAgICAgICAgICBhX3N1bSArPSAoYV9pbl9zdW0gKz0gKHN0YWNrSW4uYSA9IHBpeGVsc1twKzNdKSk7XG5cbiAgICAgICAgICAgIHN0YWNrSW4gPSBzdGFja0luLm5leHQ7XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSArPSAocHIgPSBzdGFja091dC5yKTtcbiAgICAgICAgICAgIGdfb3V0X3N1bSArPSAocGcgPSBzdGFja091dC5nKTtcbiAgICAgICAgICAgIGJfb3V0X3N1bSArPSAocGIgPSBzdGFja091dC5iKTtcbiAgICAgICAgICAgIGFfb3V0X3N1bSArPSAocGEgPSBzdGFja091dC5hKTtcblxuICAgICAgICAgICAgcl9pbl9zdW0gLT0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSAtPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtIC09IHBiO1xuICAgICAgICAgICAgYV9pbl9zdW0gLT0gcGE7XG5cbiAgICAgICAgICAgIHN0YWNrT3V0ID0gc3RhY2tPdXQubmV4dDtcblxuICAgICAgICAgICAgeWkgKz0gd2lkdGg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGltYWdlRGF0YTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0NhbnZhc1JHQihjYW52YXMsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKVxue1xuICAgIGlmIChpc05hTihyYWRpdXMpIHx8IHJhZGl1cyA8IDEpIHJldHVybjtcbiAgICByYWRpdXMgfD0gMDtcblxuICAgIHZhciBpbWFnZURhdGEgPSBnZXRJbWFnZURhdGFGcm9tQ2FudmFzKGNhbnZhcywgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBpbWFnZURhdGEgPSBwcm9jZXNzSW1hZ2VEYXRhUkdCKGltYWdlRGF0YSwgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpO1xuXG4gICAgY2FudmFzLmdldENvbnRleHQoJzJkJykucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgdG9wX3gsIHRvcF95KTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0ltYWdlRGF0YVJHQihpbWFnZURhdGEsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKVxue1xuICAgIHZhciBwaXhlbHMgPSBpbWFnZURhdGEuZGF0YTtcblxuICAgIHZhciB4LCB5LCBpLCBwLCB5cCwgeWksIHl3LCByX3N1bSwgZ19zdW0sIGJfc3VtLFxuICAgICAgICByX291dF9zdW0sIGdfb3V0X3N1bSwgYl9vdXRfc3VtLFxuICAgICAgICByX2luX3N1bSwgZ19pbl9zdW0sIGJfaW5fc3VtLFxuICAgICAgICBwciwgcGcsIHBiLCByYnM7XG5cbiAgICB2YXIgZGl2ID0gcmFkaXVzICsgcmFkaXVzICsgMTtcbiAgICB2YXIgdzQgPSB3aWR0aCA8PCAyO1xuICAgIHZhciB3aWR0aE1pbnVzMSAgPSB3aWR0aCAtIDE7XG4gICAgdmFyIGhlaWdodE1pbnVzMSA9IGhlaWdodCAtIDE7XG4gICAgdmFyIHJhZGl1c1BsdXMxICA9IHJhZGl1cyArIDE7XG4gICAgdmFyIHN1bUZhY3RvciA9IHJhZGl1c1BsdXMxICogKHJhZGl1c1BsdXMxICsgMSkgLyAyO1xuXG4gICAgdmFyIHN0YWNrU3RhcnQgPSBuZXcgQmx1clN0YWNrKCk7XG4gICAgdmFyIHN0YWNrID0gc3RhY2tTdGFydDtcbiAgICBmb3IgKGkgPSAxOyBpIDwgZGl2OyBpKyspXG4gICAge1xuICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQgPSBuZXcgQmx1clN0YWNrKCk7XG4gICAgICAgIGlmIChpID09IHJhZGl1c1BsdXMxKSB2YXIgc3RhY2tFbmQgPSBzdGFjaztcbiAgICB9XG4gICAgc3RhY2submV4dCA9IHN0YWNrU3RhcnQ7XG4gICAgdmFyIHN0YWNrSW4gPSBudWxsO1xuICAgIHZhciBzdGFja091dCA9IG51bGw7XG5cbiAgICB5dyA9IHlpID0gMDtcblxuICAgIHZhciBtdWxfc3VtID0gbXVsX3RhYmxlW3JhZGl1c107XG4gICAgdmFyIHNoZ19zdW0gPSBzaGdfdGFibGVbcmFkaXVzXTtcblxuICAgIGZvciAoeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKylcbiAgICB7XG4gICAgICAgIHJfaW5fc3VtID0gZ19pbl9zdW0gPSBiX2luX3N1bSA9IHJfc3VtID0gZ19zdW0gPSBiX3N1bSA9IDA7XG5cbiAgICAgICAgcl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocHIgPSBwaXhlbHNbeWldKTtcbiAgICAgICAgZ19vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGcgPSBwaXhlbHNbeWkrMV0pO1xuICAgICAgICBiX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwYiA9IHBpeGVsc1t5aSsyXSk7XG5cbiAgICAgICAgcl9zdW0gKz0gc3VtRmFjdG9yICogcHI7XG4gICAgICAgIGdfc3VtICs9IHN1bUZhY3RvciAqIHBnO1xuICAgICAgICBiX3N1bSArPSBzdW1GYWN0b3IgKiBwYjtcblxuICAgICAgICBzdGFjayA9IHN0YWNrU3RhcnQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJhZGl1c1BsdXMxOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN0YWNrLnIgPSBwcjtcbiAgICAgICAgICAgIHN0YWNrLmcgPSBwZztcbiAgICAgICAgICAgIHN0YWNrLmIgPSBwYjtcbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCByYWRpdXNQbHVzMTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBwID0geWkgKyAoKHdpZHRoTWludXMxIDwgaSA/IHdpZHRoTWludXMxIDogaSkgPDwgMik7XG4gICAgICAgICAgICByX3N1bSArPSAoc3RhY2suciA9IChwciA9IHBpeGVsc1twXSkpICogKHJicyA9IHJhZGl1c1BsdXMxIC0gaSk7XG4gICAgICAgICAgICBnX3N1bSArPSAoc3RhY2suZyA9IChwZyA9IHBpeGVsc1twKzFdKSkgKiByYnM7XG4gICAgICAgICAgICBiX3N1bSArPSAoc3RhY2suYiA9IChwYiA9IHBpeGVsc1twKzJdKSkgKiByYnM7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtICs9IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gKz0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSArPSBwYjtcblxuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgICAgICB9XG5cblxuICAgICAgICBzdGFja0luID0gc3RhY2tTdGFydDtcbiAgICAgICAgc3RhY2tPdXQgPSBzdGFja0VuZDtcbiAgICAgICAgZm9yICh4ID0gMDsgeCA8IHdpZHRoOyB4KyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBpeGVsc1t5aV0gICA9IChyX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG4gICAgICAgICAgICBwaXhlbHNbeWkrMV0gPSAoZ19zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuICAgICAgICAgICAgcGl4ZWxzW3lpKzJdID0gKGJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcblxuICAgICAgICAgICAgcl9zdW0gLT0gcl9vdXRfc3VtO1xuICAgICAgICAgICAgZ19zdW0gLT0gZ19vdXRfc3VtO1xuICAgICAgICAgICAgYl9zdW0gLT0gYl9vdXRfc3VtO1xuXG4gICAgICAgICAgICByX291dF9zdW0gLT0gc3RhY2tJbi5yO1xuICAgICAgICAgICAgZ19vdXRfc3VtIC09IHN0YWNrSW4uZztcbiAgICAgICAgICAgIGJfb3V0X3N1bSAtPSBzdGFja0luLmI7XG5cbiAgICAgICAgICAgIHAgPSAgKHl3ICsgKChwID0geCArIHJhZGl1cyArIDEpIDwgd2lkdGhNaW51czEgPyBwIDogd2lkdGhNaW51czEpKSA8PCAyO1xuXG4gICAgICAgICAgICByX2luX3N1bSArPSAoc3RhY2tJbi5yID0gcGl4ZWxzW3BdKTtcbiAgICAgICAgICAgIGdfaW5fc3VtICs9IChzdGFja0luLmcgPSBwaXhlbHNbcCsxXSk7XG4gICAgICAgICAgICBiX2luX3N1bSArPSAoc3RhY2tJbi5iID0gcGl4ZWxzW3ArMl0pO1xuXG4gICAgICAgICAgICByX3N1bSArPSByX2luX3N1bTtcbiAgICAgICAgICAgIGdfc3VtICs9IGdfaW5fc3VtO1xuICAgICAgICAgICAgYl9zdW0gKz0gYl9pbl9zdW07XG5cbiAgICAgICAgICAgIHN0YWNrSW4gPSBzdGFja0luLm5leHQ7XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSArPSAocHIgPSBzdGFja091dC5yKTtcbiAgICAgICAgICAgIGdfb3V0X3N1bSArPSAocGcgPSBzdGFja091dC5nKTtcbiAgICAgICAgICAgIGJfb3V0X3N1bSArPSAocGIgPSBzdGFja091dC5iKTtcblxuICAgICAgICAgICAgcl9pbl9zdW0gLT0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSAtPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtIC09IHBiO1xuXG4gICAgICAgICAgICBzdGFja091dCA9IHN0YWNrT3V0Lm5leHQ7XG5cbiAgICAgICAgICAgIHlpICs9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgeXcgKz0gd2lkdGg7XG4gICAgfVxuXG5cbiAgICBmb3IgKHggPSAwOyB4IDwgd2lkdGg7IHgrKylcbiAgICB7XG4gICAgICAgIGdfaW5fc3VtID0gYl9pbl9zdW0gPSByX2luX3N1bSA9IGdfc3VtID0gYl9zdW0gPSByX3N1bSA9IDA7XG5cbiAgICAgICAgeWkgPSB4IDw8IDI7XG4gICAgICAgIHJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHByID0gcGl4ZWxzW3lpXSk7XG4gICAgICAgIGdfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBnID0gcGl4ZWxzW3lpKzFdKTtcbiAgICAgICAgYl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGIgPSBwaXhlbHNbeWkrMl0pO1xuXG4gICAgICAgIHJfc3VtICs9IHN1bUZhY3RvciAqIHByO1xuICAgICAgICBnX3N1bSArPSBzdW1GYWN0b3IgKiBwZztcbiAgICAgICAgYl9zdW0gKz0gc3VtRmFjdG9yICogcGI7XG5cbiAgICAgICAgc3RhY2sgPSBzdGFja1N0YXJ0O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByYWRpdXNQbHVzMTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdGFjay5yID0gcHI7XG4gICAgICAgICAgICBzdGFjay5nID0gcGc7XG4gICAgICAgICAgICBzdGFjay5iID0gcGI7XG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG4gICAgICAgIH1cblxuICAgICAgICB5cCA9IHdpZHRoO1xuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPD0gcmFkaXVzOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHlpID0gKHlwICsgeCkgPDwgMjtcblxuICAgICAgICAgICAgcl9zdW0gKz0gKHN0YWNrLnIgPSAocHIgPSBwaXhlbHNbeWldKSkgKiAocmJzID0gcmFkaXVzUGx1czEgLSBpKTtcbiAgICAgICAgICAgIGdfc3VtICs9IChzdGFjay5nID0gKHBnID0gcGl4ZWxzW3lpKzFdKSkgKiByYnM7XG4gICAgICAgICAgICBiX3N1bSArPSAoc3RhY2suYiA9IChwYiA9IHBpeGVsc1t5aSsyXSkpICogcmJzO1xuXG4gICAgICAgICAgICByX2luX3N1bSArPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtICs9IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gKz0gcGI7XG5cbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcblxuICAgICAgICAgICAgaWYoaSA8IGhlaWdodE1pbnVzMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB5cCArPSB3aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHlpID0geDtcbiAgICAgICAgc3RhY2tJbiA9IHN0YWNrU3RhcnQ7XG4gICAgICAgIHN0YWNrT3V0ID0gc3RhY2tFbmQ7XG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgcCA9IHlpIDw8IDI7XG4gICAgICAgICAgICBwaXhlbHNbcF0gICA9IChyX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG4gICAgICAgICAgICBwaXhlbHNbcCsxXSA9IChnX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG4gICAgICAgICAgICBwaXhlbHNbcCsyXSA9IChiX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG5cbiAgICAgICAgICAgIHJfc3VtIC09IHJfb3V0X3N1bTtcbiAgICAgICAgICAgIGdfc3VtIC09IGdfb3V0X3N1bTtcbiAgICAgICAgICAgIGJfc3VtIC09IGJfb3V0X3N1bTtcblxuICAgICAgICAgICAgcl9vdXRfc3VtIC09IHN0YWNrSW4ucjtcbiAgICAgICAgICAgIGdfb3V0X3N1bSAtPSBzdGFja0luLmc7XG4gICAgICAgICAgICBiX291dF9zdW0gLT0gc3RhY2tJbi5iO1xuXG4gICAgICAgICAgICBwID0gKHggKyAoKChwID0geSArIHJhZGl1c1BsdXMxKSA8IGhlaWdodE1pbnVzMSA/IHAgOiBoZWlnaHRNaW51czEpICogd2lkdGgpKSA8PCAyO1xuXG4gICAgICAgICAgICByX3N1bSArPSAocl9pbl9zdW0gKz0gKHN0YWNrSW4uciA9IHBpeGVsc1twXSkpO1xuICAgICAgICAgICAgZ19zdW0gKz0gKGdfaW5fc3VtICs9IChzdGFja0luLmcgPSBwaXhlbHNbcCsxXSkpO1xuICAgICAgICAgICAgYl9zdW0gKz0gKGJfaW5fc3VtICs9IChzdGFja0luLmIgPSBwaXhlbHNbcCsyXSkpO1xuXG4gICAgICAgICAgICBzdGFja0luID0gc3RhY2tJbi5uZXh0O1xuXG4gICAgICAgICAgICByX291dF9zdW0gKz0gKHByID0gc3RhY2tPdXQucik7XG4gICAgICAgICAgICBnX291dF9zdW0gKz0gKHBnID0gc3RhY2tPdXQuZyk7XG4gICAgICAgICAgICBiX291dF9zdW0gKz0gKHBiID0gc3RhY2tPdXQuYik7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtIC09IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gLT0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSAtPSBwYjtcblxuICAgICAgICAgICAgc3RhY2tPdXQgPSBzdGFja091dC5uZXh0O1xuXG4gICAgICAgICAgICB5aSArPSB3aWR0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbWFnZURhdGE7XG59XG5cbmZ1bmN0aW9uIEJsdXJTdGFjaygpXG57XG4gICAgdGhpcy5yID0gMDtcbiAgICB0aGlzLmcgPSAwO1xuICAgIHRoaXMuYiA9IDA7XG4gICAgdGhpcy5hID0gMDtcbiAgICB0aGlzLm5leHQgPSBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpbWFnZTogcHJvY2Vzc0ltYWdlLFxuICAgIGNhbnZhc1JHQkE6IHByb2Nlc3NDYW52YXNSR0JBLFxuICAgIGNhbnZhc1JHQjogcHJvY2Vzc0NhbnZhc1JHQixcbiAgICBpbWFnZURhdGFSR0JBOiBwcm9jZXNzSW1hZ2VEYXRhUkdCQSxcbiAgICBpbWFnZURhdGFSR0I6IHByb2Nlc3NJbWFnZURhdGFSR0Jcbn07XG4iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5cbmNvbnN0IHByb3RvQ2hhcnQgPSB7XG4gICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgIG1hcmdpbjoge1xuICAgICAgbGVmdDogMTAsXG4gICAgICByaWdodDogMTAsXG4gICAgICB0b3A6IDEwLFxuICAgICAgYm90dG9tOiAxMCxcbiAgICB9LFxuICB9O1xuICBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYXJ0RmFjdG9yeShvcHRzLCBwcm90byA9IHByb3RvQ2hhcnQpIHtcblxuICBjb25zdCBjaGFydCA9IE9iamVjdC5hc3NpZ24oe30sIHByb3RvLCBvcHRzKTtcbiAgaWYob3B0cy5wYXJlbnRJZCkgY2hhcnQucGFyZW50ID0gZDMuc2VsZWN0KGAjJHtvcHRzLnBhcmVudElkfWApO1xuICBlbHNlIGQzLnNlbGVjdCgnYm9keScpO1xuXG4gIGNoYXJ0LnN2ZyA9IGNoYXJ0LnBhcmVudFxuICAgIC5hcHBlbmQoJ3N2ZycpLmxvd2VyKClcbiAgICAuYXR0cignaWQnLCBjaGFydC5pZCB8fCAnY2hhcnQnKVxuICAgIC5hdHRyKCd3aWR0aCcsIGNoYXJ0LndpZHRoIC0gY2hhcnQubWFyZ2luLnJpZ2h0KVxuICAgIC5hdHRyKCdoZWlnaHQnLCBjaGFydC5oZWlnaHQgLSBjaGFydC5tYXJnaW4uYm90dG9tKTtcblxuICBpZiAob3B0cy5zdHlsZUNsYXNzKSBjaGFydC5zdmcuYXR0cignY2xhc3MnLCBvcHRzLnN0eWxlQ2xhc3MpO1xuXG4gIGlmIChvcHRzLmRyYXdCYWNrZ3JvdW5kKSBjaGFydC5zdmcuYXBwZW5kKCdyZWN0JylcbiAgICAuYXR0cignaWQnLCAnYmFja2dyb3VuZCcpXG4gICAgLmF0dHIoJ3dpZHRoJywnMTAwJScpLmF0dHIoJ2hlaWdodCcsJzEwMCUnKVxuICAgIC5hdHRyKCdmaWxsJywgJyNmZmZmZmYnKTsgXG4gICAgLy8gLmF0dHIoJ2ZpbGwnLCAncmdiYSgyNTUsMCwwLC4yKScpO1xuXG4gIGNoYXJ0LmNvbnRhaW5lciA9IGNoYXJ0LnN2Zy5hcHBlbmQoJ2cnKVxuICAgIC5hdHRyKCdpZCcsICdjb250YWluZXInKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7Y2hhcnQubWFyZ2luLmxlZnR9LCAke2NoYXJ0Lm1hcmdpbi50b3B9KWApO1xuXG4gIHJldHVybiBjaGFydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpdENoYXJ0KGNoYXJ0LCBwYWRkaW5nKSB7XG4gIC8vIGNhbGN1bGF0ZSByZWFsIGRpbWVuc2lvbnMgb2YgYSBjaGFydCAoYXNzdW1lcyBjaGFydCBpcyBhIGctZWxlbWVudCB3cmFwcGVkIGluc2lkZSBhbiBzdmcpXG4gIGQzLnNlbGVjdChjaGFydC5ub2RlKCkucGFyZW50RWxlbWVudClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIGNoYXJ0Lm5vZGUoKS5nZXRCQm94KCkud2lkdGggKyBwYWRkaW5nLmxlZnQgKyBwYWRkaW5nLnJpZ2h0KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGNoYXJ0Lm5vZGUoKS5nZXRCQm94KCkuaGVpZ2h0ICsgcGFkZGluZy50b3AgKyBwYWRkaW5nLmJvdHRvbSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWFsRGVwdGgoZCkge1xuICAvLyBjYWxjdWxhdGVzIHRoZSByZWFsIGRlcHRoIG9mIGEgRk9STSBieSBzdWJ0cmFjdGluZyB1bm1hcmtlZCBhbmQgb3BlbiByZUVudHJ5IEZPUk1zXG4gIGNvbnN0IGdob3N0cyA9IGQuYW5jZXN0b3JzKClcbiAgICAgIC5maWx0ZXIoZSA9PiAoZS5kYXRhLnR5cGUgPT09ICdmb3JtJyAmJiBlLmRhdGEudW5tYXJrZWQgfHwgXG4gICAgICAgICAgICAgICAgZS5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JyAmJiBlLmRhdGEubGFzdE9wZW4pKS5sZW5ndGg7XG4gIHJldHVybiBkLmRlcHRoIC0gZ2hvc3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGV4dFN1YnNjcmlwdCh0ZXh0KSB7XG4gIC8vIHNlbGVjdGlvbiBtb2R1bGUgdG8gc3BsaXQgdGV4dCBpbnRvIHBhcnRzIGZvciBzdWJzY3JpcHRzIChlLmcuIFwieF9uXCIpXG4gIHJldHVybiAoc2VsZWN0aW9uKSA9PiB7XG4gICAgc2VsZWN0aW9uLmVhY2goZnVuY3Rpb24oZCkge1xuXG4gICAgICAgIGNvbnN0IHNwbGl0ID0gKHR5cGVvZih0ZXh0KGQpKSA9PT0gJ3N0cmluZycpID8gdGV4dChkKS5zcGxpdCgnXycpIDogJyc7XG5cbiAgICAgICAgLy8gaWYgKHNwbGl0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gICBzcGxpdC5mb3JFYWNoKChwYXJ0LGkpID0+IHtcblxuICAgICAgICAvLyAgICAgY29uc3QgZWxlbSA9IGQzLnNlbGVjdCh0aGlzKS5hcHBlbmQoJ3RzcGFuJylcbiAgICAgICAgLy8gICAgICAgLnRleHQoZCA9PiBwYXJ0KTtcblxuICAgICAgICAvLyAgICAgaWYgKGklMj09PTEpIGVsZW1cbiAgICAgICAgLy8gICAgICAgLmF0dHIoJ2R4JywgMSlcbiAgICAgICAgLy8gICAgICAgLmF0dHIoJ2R5JywgNilcbiAgICAgICAgLy8gICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsICcuOGVtJyk7XG4gICAgICAgIC8vICAgfSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKHNwbGl0Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5hcHBlbmQoJ3RzcGFuJylcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gc3BsaXRbMF0pO1xuXG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmFwcGVuZCgndHNwYW4nKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBzcGxpdFsxXSlcbiAgICAgICAgICAgIC5hdHRyKCdkeCcsIDEpXG4gICAgICAgICAgICAuYXR0cignZHknLCA2KVxuICAgICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnLjhlbScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgLnRleHQodGV4dChkKSk7XG4gICAgICAgIH1cblxuICAgIH0pXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0U2l6ZSh0ZXh0LCBmb250U2l6ZT0naW5oZXJpdCcsIGZvbnRGYW1pbHk9J2luaGVyaXQnLCBmb250U3R5bGU9J25vcm1hbCcpIHtcbiAgLyogU291cmNlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9odXl0ZC8zMjdlNDUzYzk1Y2EzZWRhZGIzMmQwYzg2N2UyNTYxYiBcbiAgQ3JlZGl0cyB0bzogSHV5IFRyLiAqL1xuICBpZiAoIWQzKSByZXR1cm47XG4gIHZhciBjb250YWluZXIgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ3N2ZycpO1xuICBjb250YWluZXIuYXBwZW5kKCd0ZXh0JylcbiAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGZvbnRTaXplKVxuICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIGZvbnRTdHlsZSlcbiAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgZm9udEZhbWlseSlcbiAgICAuYXR0cigneCcsJy05OTk5JykuYXR0cigneScsJy05OTk5JylcbiAgICAuY2FsbCh0ZXh0U3Vic2NyaXB0KCgpID0+IHRleHQpKTsgLy8gLnRleHQodGV4dCk7XG4gIHZhciBzaXplID0gY29udGFpbmVyLm5vZGUoKS5nZXRCQm94KCk7XG4gIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgcmV0dXJuIHsgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHQgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wYWNpdHkoY29sb3IsIGFscGhhKSB7XG4gIGNvbnN0IGNvbG9yQ29weSA9IGQzLmNvbG9yKGNvbG9yKTtcbmNvbG9yQ29weS5vcGFjaXR5ID0gYWxwaGE7XG5yZXR1cm4gY29sb3JDb3B5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlUmVtYWluZGVyKG51bSwgX2Rlbikge1xuICBsZXQgY291bnQgPSAwO1xuICBsZXQgc2lnbiA9IDE7XG4gIGxldCBkZW4gPSBNYXRoLnJvdW5kKF9kZW4pO1xuICBsZXQgY2FuZGlkYXRlID0gZGVuO1xuICB3aGlsZSAobnVtICUgZGVuID4gMC4zKSB7XG4gICAgICBjYW5kaWRhdGUgKz0gc2lnbiAqIDAuMDAxO1xuICAgICAgaWYgKG51bSVjYW5kaWRhdGUgPCBudW0lZGVuKSBkZW4gPSBjYW5kaWRhdGU7XG5cbiAgICAgIGlmKGNvdW50ID49IDUwMDApIHtcbiAgICAgICAgICBjYW5kaWRhdGUgPSBNYXRoLnJvdW5kKF9kZW4pO1xuICAgICAgICAgIHNpZ24gPSAtMTtcbiAgICAgIH1cbiAgICAgIGlmKGNvdW50ID49IDEwMDAwKSBicmVhaztcbiAgICAgIGNvdW50Kys7XG4gIH1cbiAgcmV0dXJuIGRlbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYWxjQ2lyY2xlRGFzaChyLCB1bml0LCBmcmFjdGlvbikge1xuICBjb25zdCBjaXJjID0gTWF0aC5QSSoyICogcjtcbiAgcmV0dXJuIHJlZHVjZVJlbWFpbmRlcihjaXJjLCB1bml0KSAqIGZyYWN0aW9uO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZURhc2hBcnJheShyLCB1bml0LCBmcmFjdGlvbnMpIHtcbiAgbGV0IHN0ciA9ICcnO1xuICBmb3IgKGxldCBpIGluIGZyYWN0aW9ucykge1xuICAgICAgc3RyID0gc3RyLmNvbmNhdChgJHsgY2FsY0NpcmNsZURhc2gociwgdW5pdCwgZnJhY3Rpb25zW2ldKSB9cHggYCk7XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZUxhYmVsKHRleHQsIGZvbnRTaXplPSdpbmhlcml0JywgZm9udEZhbWlseT0naW5oZXJpdCcsIGZvbnRTdHlsZT0nbm9ybWFsJykge1xuICAvLyBzZWxlY3Rpb24gbW9kdWxlIHRvIHNwbGl0IHRleHQgaW50byBwYXJ0cyBmb3Igc3Vic2NyaXB0cyAoZS5nLiBcInhfblwiKVxuICByZXR1cm4gKHNlbGVjdGlvbikgPT4ge1xuXG4gICAgICBzZWxlY3Rpb24uZWFjaChmdW5jdGlvbihkKSB7XG5cbiAgICAgICAgICBjb25zdCB0ZXh0U3ogPSB0ZXh0U2l6ZSh0ZXh0KGQpLCBmb250U2l6ZSwgZm9udEZhbWlseSk7XG4gICAgICAgICAgY29uc3QgbWFyZ2luID0gNTA7XG5cbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBmb250U2l6ZSlcbiAgICAgICAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgZm9udFN0eWxlKVxuICAgICAgICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgZm9udEZhbWlseSlcbiAgICAgICAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAgICAgICAucmFpc2UoKVxuICAgICAgICAgICAgICAudGV4dChkID0+IHRleHQoZCkpO1xuXG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmZpbHRlcihkID0+IGQucioyID49IHRleHRTei53aWR0aCArIG1hcmdpbikuc2VsZWN0KCd0ZXh0JylcbiAgICAgICAgICAgICAgLmNsYXNzZWQoJ2xhYmVsIGluc2lkZScsIHRydWUpXG4gICAgICAgICAgICAgIC5hdHRyKCd5JywgZCA9PiBkLnIgLSB0ZXh0U3ouaGVpZ2h0KjAuNSApXG4gICAgICAgICAgICAgIC5hdHRyKCdkb21pbmFudC1iYXNlbGluZScsJ2Jhc2VsaW5lJyk7XG5cbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykuZmlsdGVyKGQgPT4gZC5yKjIgPCB0ZXh0U3oud2lkdGggKyBtYXJnaW4pLnNlbGVjdCgndGV4dCcpXG4gICAgICAgICAgICAgIC5jbGFzc2VkKCdsYWJlbCBvdXRzaWRlJywgdHJ1ZSlcbiAgICAgICAgICAgICAgLmF0dHIoJ3knLCBkID0+IGQuciArIDQpXG4gICAgICAgICAgICAgIC5hdHRyKCdkb21pbmFudC1iYXNlbGluZScsJ2hhbmdpbmcnKTtcblxuICAgICAgfSk7XG4gIH07XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0ICogYXMgY2FudmcgZnJvbSAnY2FudmcnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGpRdWVyeSByZXBsYWNlbWVudHM6XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93QWxsKGVsZW1zKSB7XG4gICAgaWYodHlwZW9mKGVsZW1zKSA9PT0gJ3N0cmluZycpIGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtcyk7XG4gICAgZWxlbXMuZm9yRWFjaCggKGUsaSkgPT4ge1xuICAgICAgICBzaG93KGUpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNob3coZWxlbSkge1xuICAgIGlmKHR5cGVvZihlbGVtKSA9PT0gJ3N0cmluZycpIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgLy8gZWxlbS5jbGFzc0xpc3QuYWRkKCdpcy12aXNpYmxlJyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUFsbChlbGVtcykge1xuICAgIGlmKHR5cGVvZihlbGVtcykgPT09ICdzdHJpbmcnKSBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbXMpO1xuICAgIGVsZW1zLmZvckVhY2goIChlLGkpID0+IHtcbiAgICAgICAgaGlkZShlKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBoaWRlKGVsZW0pIHtcbiAgICBpZih0eXBlb2YoZWxlbSkgPT09ICdzdHJpbmcnKSBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuXHQvLyBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXZpc2libGUnKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVBbGwoZWxlbXMpIHtcbiAgICBpZih0eXBlb2YoZWxlbXMpID09PSAnc3RyaW5nJykgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1zKTtcbiAgICBlbGVtcy5mb3JFYWNoKCAoZSxpKSA9PiB7XG4gICAgICAgIHRvZ2dsZShlKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGUoZWxlbSkge1xuICAgIGlmKHR5cGVvZihlbGVtKSA9PT0gJ3N0cmluZycpIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuICAgIGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XG5cdC8vIGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtdmlzaWJsZScpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmlzaWJsZShlbGVtKSB7XG4gICAgaWYodHlwZW9mKGVsZW0pID09PSAnc3RyaW5nJykgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG4gICAgcmV0dXJuICggIWVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdkLW5vbmUnKSApO1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiBwYWQobnVtLCBzaXplKSB7XG4gICAgLyogU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjk5ODgyMlxuICAgIENyZWRpdHMgdG86IEluZmluaXRpZXNMb29wICovXG4gICAgdmFyIHMgPSBudW0rXCJcIjtcbiAgICB3aGlsZSAocy5sZW5ndGggPCBzaXplKSBzID0gXCIwXCIgKyBzO1xuICAgIHJldHVybiBzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVN2ZyhzdmdFbCwgbmFtZSkge1xuICAgIC8qIFNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ2NDAzNTg5XG4gICAgQ3JlZGl0cyB0bzogZGVmZ2hpMTk3NywgRGF2ZVRoZVNjaWVudGlzdCwgc2VueiAqL1xuICAgIHN2Z0VsLnNldEF0dHJpYnV0ZShcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIik7XG4gICAgdmFyIHN2Z0RhdGEgPSBzdmdFbC5vdXRlckhUTUw7XG4gICAgdmFyIHByZWZhY2UgPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIHN0YW5kYWxvbmU9XCJub1wiPz5cXHJcXG4nO1xuICAgIHZhciBzdmdCbG9iID0gbmV3IEJsb2IoW3ByZWZhY2UsIHN2Z0RhdGFdLCB7dHlwZTpcImltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOFwifSk7XG4gICAgdmFyIHN2Z1VybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoc3ZnQmxvYik7XG4gICAgdmFyIGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGRvd25sb2FkTGluay5ocmVmID0gc3ZnVXJsO1xuICAgIGRvd25sb2FkTGluay5kb3dubG9hZCA9IG5hbWU7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb3dubG9hZExpbmspO1xuICAgIGRvd25sb2FkTGluay5jbGljaygpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG93bmxvYWRMaW5rKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzYXZlSW1nKHN2ZywgbmFtZSkgeyAgICBcbiAgICAvKiBVc2luZyBjYW52ZyBsaWIuIGh0dHBzOi8vZ2l0aHViLmNvbS9jYW52Zy9jYW52ZyBhbmQgcGFydHMgb2YgdGhlIGFwcHJvYWNoIGZvciBzYXZlU3ZnLlxuICAgIFRoYW5rcyB0byBqYmVhcmQ0IGluOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk3NjAzNC8xMjA0MDQ3IGZvciB0aGUgc3VnZ2VzdGlvbiAqL1xuICAgIGNvbnN0IHcgPSBzdmcuZ2V0QkJveCgpLndpZHRoO1xuICAgIGNvbnN0IGggPSBzdmcuZ2V0QkJveCgpLmhlaWdodDtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaWQnLCdkcmF3aW5nQXJlYScpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICBjYW52YXMud2lkdGggPSB3O1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoO1xuXG4gICAgLy8gY29uc29sZS5sb2coc3ZnLm91dGVySFRNTCk7XG5cbiAgICBjYW52Zyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJhd2luZ0FyZWEnKSwgc3ZnLm91dGVySFRNTCwgeyBpZ25vcmVNb3VzZTogdHJ1ZSwgaWdub3JlQW5pbWF0aW9uOiB0cnVlIH0pO1xuXG4gICAgY29uc3QgaW1nVXJsID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcblxuICAgIHZhciBkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBkb3dubG9hZExpbmsuaHJlZiA9IGltZ1VybDtcbiAgICBkb3dubG9hZExpbmsuZG93bmxvYWQgPSBuYW1lO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG93bmxvYWRMaW5rKTtcbiAgICBkb3dubG9hZExpbmsuY2xpY2soKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvd25sb2FkTGluayk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjYW52YXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnIpIHtcbiAgICAvKiBTb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNTAzMDExNyBcbiAgICBDcmVkaXRzIHRvOiBOb2FoIEZyZWl0YXMgKi9cbiAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24gKGZsYXQsIHRvRmxhdHRlbikge1xuICAgIHJldHVybiBmbGF0LmNvbmNhdChBcnJheS5pc0FycmF5KHRvRmxhdHRlbikgPyBmbGF0dGVuKHRvRmxhdHRlbikgOiB0b0ZsYXR0ZW4pO1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlKGFycixvYmopIHtcbiAgICAvKiAgU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTQzODYzXG4gICAgQ3JlZGl0cyB0bzogVmlua28gVnJzYWxvdmljICovXG4gICAgcmV0dXJuIChhcnIuaW5kZXhPZihvYmopICE9IC0xKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlKG8sZnVuYykge1xuICAgIC8qICBTb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzcyMjY2OC90cmF2ZXJzZS1hbGwtdGhlLW5vZGVzLW9mLWEtanNvbi1vYmplY3QtdHJlZS13aXRoLWphdmFzY3JpcHQgXG4gICAgQ3JlZGl0cyB0bzogVGhlSGlwcG8gKi9cbiAgICBmb3IgKHZhciBpIGluIG8pIHtcbiAgICAgICAgZnVuYy5hcHBseShudWxsLFtpLG9baV1dKTsgIC8vIG51bGwgb3IgdGhpcz9cbiAgICAgICAgaWYgKG9baV0gIT09IG51bGwgJiYgdHlwZW9mKG9baV0pPT1cIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAvL2dvaW5nIG9uZSBzdGVwIGRvd24gaW4gdGhlIG9iamVjdCB0cmVlISFcbiAgICAgICAgICAgIHRyYXZlcnNlKG9baV0sZnVuYyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5TdHJpbmcucHJvdG90eXBlLnJlcGxhY2VBbGwgPSBmdW5jdGlvbihmaW5kLCByZXBsYWNlLCBlc2NhcGVNZXRhKSB7XG4gICAgLyogIE1vZGlmaWVkIGZyb206IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzExNDQ3ODMvaG93LXRvLXJlcGxhY2UtYWxsLW9jY3VycmVuY2VzLW9mLWEtc3RyaW5nLWluLWphdmFzY3JpcHQgXG4gICAgQ3JlZGl0cyB0bzogU2VhbiBCcmlnaHQgKi9cbiAgICBpZihlc2NhcGVNZXRhKSBmaW5kID0gZXNjYXBlUmVnRXhwKGZpbmQpO1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2UobmV3IFJlZ0V4cChmaW5kLCAnZycpLCByZXBsYWNlKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFxcW1xcXVxcL1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cblN0cmluZy5wcm90b3R5cGUuYWRkQmVmb3JlPWZ1bmN0aW9uKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0cigwLCBpbmRleCkgKyByZXBsYWNlbWVudCsgdGhpcy5zdWJzdHIoaW5kZXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwKHZhbHVlLCBzdGFydDEsIHN0b3AxLCBzdGFydDIsIHN0b3AyKSB7XG4gICAgLy8gUHJvY2Vzc2luZy1saWtlIG1hcCBmdW5jdGlvblxuICAgIHJldHVybiBzdGFydDIgKyAoc3RvcDIgLSBzdGFydDIpICogKCh2YWx1ZSAtIHN0YXJ0MSkgLyAoc3RvcDEgLSBzdGFydDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5TW92ZUl0ZW0oYXJyLCBmcm9tLCB0bykge1xuICBhcnIuc3BsaWNlKHRvLCAwLCBhcnIuc3BsaWNlKGZyb20sIDEpWzBdKTtcbn1cblxuU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlQXQ9ZnVuY3Rpb24oaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RyKDAsIGluZGV4KSArIHJlcGxhY2VtZW50KyB0aGlzLnN1YnN0cihpbmRleCArIHJlcGxhY2VtZW50Lmxlbmd0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lc3RhbXAoKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICByZXR1cm4gKCcnXG4gICAgKyBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkpLnN1YnN0cigyKSBcbiAgICArIChwYWQoKGRhdGUuZ2V0VVRDTW9udGgoKSsxKSwyKSkgXG4gICAgKyAocGFkKGRhdGUuZ2V0VVRDRGF0ZSgpLDIpKSArICctJ1xuICAgICsgKHBhZCgoZGF0ZS5nZXRIb3VycygpKSwyKSlcbiAgICArIChwYWQoKGRhdGUuZ2V0TWludXRlcygpKSwyKSlcbiAgICArIChwYWQoKGRhdGUuZ2V0U2Vjb25kcygpKSwyKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkNhbGMge1xuICAgIC8qXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICdjYWxjJyBtb2R1bGUgZm9yIGZvcm1mb3JtIChjKSAyMDE4IFBldGVyIEhvZm1hbm5cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKi9cbiAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH07XG5cbiAgICBzdGF0aWMgcmVsX2xvZ2ljKGZ4LCBmeSkgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIGNvbW11dGF0aXZlIHJlbGF0aW9uOiB4IHkgKi9cbiAgICAgICAgaWYgKCBmeCA+IDMgfHwgZnggPCAwIHx8IGZ5ID4gMyB8fCBmeSA8IDAgKSByZXR1cm4gLTk4O1xuICAgICAgICBlbHNlIGlmICggZnggPT09IDAgfHwgZnkgPT09IDEgKSB7IFxuICAgICAgICAgICAgcmV0dXJuIGZ5OyAvLyBDMyAvVGhlb3JlbSAyXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2UgaWYgKCBmeSA9PT0gMCB8fCBmeCA9PT0gMSApIHsgXG4gICAgICAgICAgICByZXR1cm4gZng7IC8vIEMzIC9UaGVvcmVtIDJcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggZnggPT09IGZ5ICkgeyBcbiAgICAgICAgICAgIHJldHVybiBmeDsgLy8gQzUgL1RoZW9yZW0gNVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCAoZnggPT09IDIgJiYgZnkgPT09IDMpIHx8IChmeCA9PT0gMyAmJiBmeSA9PT0gMikgKSB7IFxuICAgICAgICAgICAgcmV0dXJuIDE7IC8vIEMyIC9UaGVvcmVtIDEzICsgQzMgL1RoZW9yZW0gMlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtOTk7IC8vIGVycm9yIGNvZGVcbiAgICB9O1xuICAgIHN0YXRpYyByZWwoLi4uZlZhbHMpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogU2hvcnRjdXQgZm9yIHJlbGF0aW9uIHdpdGggbiB2YXJpYWJsZXM6IHhfMSAuLi4geF9uICovXG4gICAgICAgIGlmIChmVmFscy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2YXIgdmFsID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gZlZhbHMpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSB0aGlzLnJlbF9sb2dpYyggdmFsLGZWYWxzW2ldICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtOTc7IC8vIGVycm9yIGNvZGVcbiAgICB9O1xuXG4gICAgc3RhdGljIGludl9sb2dpYyhmeCkgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIGludmVyc2lvbi9uZWdhdGlvbjogKHgpICovXG4gICAgICAgIHN3aXRjaCAoZngpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gMztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC05OTsgLy8gZXJyb3IgY29kZVxuICAgIH07XG4gICAgc3RhdGljIGludihmeCwgbikgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBTaG9ydGN1dCBmb3IgbiBpbnZlcnNpb25zL25lZ2F0aW9uczogKHgpICovXG4gICAgICAgIGlmIChuID4gMCkge1xuICAgICAgICAgICAgdmFyIHZhbCA9IGZ4O1xuICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPG47IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbCA9IHRoaXMuaW52X2xvZ2ljKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXMuaW52X2xvZ2ljKGZ4KTtcbiAgICAgICAgcmV0dXJuIC05NzsgLy8gZXJyb3IgY29kZVxuICAgIH07XG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBSRS1FTlRSWSBGT1JNIENBTENVTEFUSU9OXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgdUZvcm0yKGZBLCBmQiwgYWx0SW50ZXJwcj1mYWxzZSkgeyAvLyBjYWxjdWxhdGlvbiB2ZXJpZmllZCAoYm90aCBpbnRlcnByLilcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeSh1bmRlZmluZWQsIGZhbHNlLCBhbHRJbnRlcnByLCBmQSwgZkIpO1xuICAgIH07XG4gICAgc3RhdGljIGlGb3JtMihmQSwgZkIsIGFsdEludGVycHI9ZmFsc2UpIHsgLy8gY2FsY3VsYXRpb24gdmVyaWZpZWQgKGJvdGggaW50ZXJwci4pXG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkodW5kZWZpbmVkLCB0cnVlLCBhbHRJbnRlcnByLCBmQSwgZkIpO1xuICAgIH07XG4gICAgc3RhdGljIHVGb3JtMyhsYXN0T3BlbiwgZkEsIGZCLCBmQywgYWx0SW50ZXJwcj1mYWxzZSkgeyAvLyBjYWxjdWxhdGlvbiB2ZXJpZmllZCBjbG9zZWQgJiBvcGVuIChib3RoIGludGVycHIuKVxuICAgICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KHRydWUsIGxhc3RPcGVuLCBhbHRJbnRlcnByLCBmQSwgZkIsIGZDKTtcbiAgICB9O1xuICAgIHN0YXRpYyBpRm9ybTMobGFzdE9wZW4sIGZBLCBmQiwgZkMsIGFsdEludGVycHI9ZmFsc2UpIHsgLy8gY2FsY3VsYXRpb24gdmVyaWZpZWQgY2xvc2VkICYgb3BlbiAoYm90aCBpbnRlcnByLilcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeShmYWxzZSwgbGFzdE9wZW4sIGFsdEludGVycHIsIGZBLCBmQiwgZkMpO1xuICAgIH07XG4gICAgc3RhdGljIHVGb3JtNChmQSwgZkIsIGZDLCBmRCwgYWx0SW50ZXJwcj1mYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KHVuZGVmaW5lZCwgZmFsc2UsIGFsdEludGVycHIsIGZBLCBmQiwgZkMsIGZEKTtcbiAgICB9O1xuICAgIHN0YXRpYyBpRm9ybTQoZkEsIGZCLCBmQywgZkQsIGFsdEludGVycHI9ZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeSh1bmRlZmluZWQsIHRydWUsIGFsdEludGVycHIsIGZBLCBmQiwgZkMsIGZEKTtcbiAgICB9O1xuICAgIHN0YXRpYyB1Rm9ybTUobGFzdE9wZW4sIGZBLCBmQiwgZkMsIGZELCBmRSwgYWx0SW50ZXJwcj1mYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KHRydWUsIGxhc3RPcGVuLCBhbHRJbnRlcnByLCBmQSwgZkIsIGZDLCBmRCwgZkUpO1xuICAgIH07XG4gICAgc3RhdGljIGlGb3JtNShsYXN0T3BlbiwgZkEsIGZCLCBmQywgZkQsIGZFLCBhbHRJbnRlcnByPWZhbHNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkoZmFsc2UsIGxhc3RPcGVuLCBhbHRJbnRlcnByLCBmQSwgZkIsIGZDLCBmRCwgZkUpO1xuICAgIH07XG5cbiAgICAvLyBzdGF0aWMgcmVFbnRyeSguLi4gdmFycykge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KGZhbHNlLCBmYWxzZSwgdmFycyk7XG4gICAgLy8gfVxuICAgIC8vIHN0YXRpYyByZUVudHJ5KHJlRXZlbiwgLi4uIHZhcnMpIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMucmVFbnRyeShyZUV2ZW4sIGZhbHNlLCB2YXJzKTtcbiAgICAvLyB9XG5cbiAgICBzdGF0aWMgcmVFbnRyeShyZUV2ZW4sIGxhc3RPcGVuLCBhbHRJbnRlcnByLCAuLi5mVmFscykge1xuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIGRpZmZlcmVudCBzZWxmLWVxdWl2YWxlbnQgcmUtZW50cnkgRk9STXNcbiAgICAgICAgIFtBcmd1bWVudHNdIHJlRXZlbjogZXZlbiByZS1lbnRyeS1udW1iZXI/IHwgbGFzdE9wZW46IGxhc3QgdmFyaWFibGUgbm90IGNyb3NzZWQ/IHwgZlZhbHM6IHZhcmlhYmxlcyAoMC8xLzIvMylcblxuICAgICAgICAgTm90ZTogY2FsY3VsYXRpb24gbWFudWFsbHkgdmVyaWZpZWQgZm9y4oCmIFxuICAgICAgICAgLSAodUZPUk0gYTEsIHJlczIpIMaSPSgoxpJ4KXkpXG4gICAgICAgICAtIChpRk9STSBhMiwgcmVzMikgxpIoxpIpPShhMXgpeVxuICAgICAgICAgLSAoaUZPUk0gYjEsIHJlczMpIFsyfHJ8KzFdIMaSKMaSKT0oKCjGkngpeSl6KSDGkj0oKCgoKCjGkngpeSl6KXgpeSl6KVxuICAgICAgICAgLSAoaUZPUk0gYjIsIHJlczMpIFsyfHJ8KzFdIMaSKMaSKT0oKGIxeCl5KXpcbiAgICAgICAgIC0gKHVGT1JNIGMxLCByZXMzKSBbMnxyfF0gxpI9KCgoKCgoxpJ4KXkpeil4KXkpeilcbiAgICAgICAgIC0gKHVGT1JNIGMyLCByZXMzKSBbMnxyfF0gxpIoxpIpPSgoYzF4KXkpelxuICAgICAgICAgU2hvdWxkIHdvcmsgd2l0aCByZXNvbHV0aW9ucyBvZiA0LCA1LCDigKYgYnV0IG5lZWRzIHZlcmlmaWNhdGlvbi5cblxuICAgICAgICAgTXkgYmFzaWMgb2JzZXJ2YXRpb25zIGFib3V0IHNlbGYtZXF1aXZhbGVudCByZS1lbnRyeSBGT1JNczpcbiAgICAgICAgIC0gRXZlcnkgcmUtZW50cnkgRk9STSBuZWVkcyB0byBoYXZlIGFuIGV2ZW4gbnVtYmVyIG9mIGNyb3NzZXMgdG8gYmUgc2VsZi1lcXVpdmFsZW50ICh1Rk9STSk6IMaSID0gKCjGkjEpMikgLlxuICAgICAgICAgICBTbyB3aXRoIHVuZXZlbiByZXNvbHV0aW9ucywgd2UgYWx3YXlzIG5lZWQgdG8gaGF2ZSBhbiBldmVuIHJlLWVudHJ5IG51bWJlcjogxpIgPSAoKCgoKCjGkjEpMikzKTEpMikzKSAuXG4gICAgICAgICAtIFRvIGJlIGFibGUgdG8gYWxzbyBoYXZlIHVuZXZlbiByZS1lbnRyeSBudW1iZXJzLCBlaXRoZXIgdGhlIHJlc29sdXRpb24gbmVlZHMgdG8gYmUgZXZlblxuICAgICAgICAgICBvciB3ZSBoYXZlIHRvIGVtYmVkIHRoZSByZS1lbnRyeSBGT1JNIGludG8gYSBub3JtYWwgRk9STSB0aGF0IGlzIG9uZSByZS1lbnRyeSBvZiB0aGF0IEZPUk06XG4gICAgICAgICAgIMaSKMaSKSA9ICgoKMaSMSkyKTMpIDwtPiAoKCggxpIgPSAoKCgoKCjGkjEpMikzKTEpMikzKSAxKTIpMykgLlxuICAgICAgICAgICBUaGVzZSBjb21wb3NpdGlvbmFsIHJlLWVudHJ5IEZPUk1zIGFyZSBpRk9STXMsIHNpbmNlIHRoZXkgcmVzb2x2ZSB0bzogKCDGkiA9ICgoxpIpKSApIC5cbiAgICAgICAgIC0gSWYgdGhlIG91dG1vc3QgY3Jvc3Mgb2YgdGhlIEZPUk0gc2hvdWxkIGJlIGxlZnQgb3V0IChvcGVuIEZPUk1zKSwgdGhpcyBjYW4gb25seSBiZSBkb25lIGlmIHdlIGVtYmVkXG4gICAgICAgICAgIGEgY29ycmVzcG9uZGluZyBjbG9zZWQgRk9STSBvZiBpdHNlbGYgdGhhdCBlaXRoZXIgaXMgb3IgZW1iZWRzIGl0cyByZS1lbnRyeSBGT1JNIChjYXNlcyBkZXNjcmliZWQgYWJvdmUpLlxuICAgICAgICAgICBJIGJlbGlldmUgdGhlIG91dG1vc3QgKG9wZW4pIEZPUk0gaXMgbm90IGJlaW5nIGNvdW50ZWQgYXMgYSByZS1lbnRyeSBhdCBhbGwsIHNpbmNlIGl0J3MgbWlzc2luZyBhIGNyb3NzLlxuXG4gICAgICAgICBUaGlzIGFsZ29yaXRobSBpcyBiYXNlZCBvbiB0aGUgZm9sbG93aW5nIHJ1bGVzL3BhdHRlcm5zL29ic2VydmF0aW9ucyBkZXJpdmVkIGZyb20gXCJ1Rk9STSBpRk9STVwiOlxuICAgICAgICAgWzFdIElmIDEgaXMgc29tZXdoZXJlIGluIHRoZSBGT1JNLCBpdCB3aWxsIGRvbWluYXRlIGFsbCB2YWx1ZXMgaW4gc3BhY2VzIGRlZXBlciB0aGFuIG0sXG4gICAgICAgICAgICAgc28gdGhlIHJlLWVudHJ5IGlzIG9ic29sZXRlIGFuZCB3ZSBjYW4gc3RhcnQgY2FsY3VsYXRlIGZyb20gdGhpcyBzcGFjZS4gXG4gICAgICAgICBbMl0gSWYgdGhlcmUgYXJlIDMvMiBvciAyLzMgcGFpcnMgaW4gdGhlIEZPUk0sIHRoZSBmaXJzdCB0ZXJtIGNhbiBiZSB0dXJuZWQgaW50byAxLCBzaW5jZVxuICAgICAgICAgICAgIHRocm91Z2ggQzIgdGhlIHNlY29uZCB0ZXJtIGNhbiBhbHdheXMgYmUgZ2VuZXJhdGVkIGludG8gaXRzIHNwYWNlLCB3aGVyZSAyMyA9IDEuXG4gICAgICAgICAgICAgVGhlbiB3ZSBjYW4gcHJvY2VlZCBhcyBpbiAoMSkuXG4gICAgICAgICBbM10gSWYgYWxsIHZhcmlhYmxlcyBhcmUgMCwgd2Ugd2lsbCBoYXZlIGVpdGhlciBhIHVGT1JNIG9yIGlGT1JNLCBoZW5jZSB0aGUgdmFsdWUgb2YgdGhlXG4gICAgICAgICAgICAgRk9STSB3aWxsIGJlIGVpdGhlciAyIG9yIDMsIGRlcGVuZGluZyBvbiB0aGUgZm9sbG93aW5nIGNhc2VzOlxuICAgICAgICAgICAgIC0gMjogY2xvc2VkLCAgICAgIHJlc29sdXRpb24gZXZlbiwgcmUtZW50cnktbnVtYmVyIGV2ZW4vb2RkIChhMSlcbiAgICAgICAgICAgICAtIDI6IGNsb3NlZC9vcGVuLCByZXNvbHV0aW9uIG9kZCwgIHJlLWVudHJ5LW51bWJlciBldmVuICAgICAoYzEsIGMyKVxuICAgICAgICAgICAgIC0gMzogb3BlbiwgICAgICAgIHJlc29sdXRpb24gZXZlbiwgcmUtZW50cnktbnVtYmVyIGV2ZW4vb2RkIChhMilcbiAgICAgICAgICAgICAtIDM6IGNsb3NlZC9vcGVuLCByZXNvbHV0aW9uIG9kZCwgIHJlLWVudHJ5LW51bWJlciBvZGQgICAgICAoYjEsIGIyKVxuICAgICAgICAgU2luY2UgWzFdWzJdWzNdIGVsaW1pbmF0ZSBhbGwgb3RoZXIgY2FzZXMsIGFsbCB2YXJpYWJsZXMgYXJlIG5vdyBlaXRoZXIgMiBvciAzIChhbmQgbWF5YmUgMHMpLFxuICAgICAgICAgc28gdXNpbmcgQzIgYXMgZGVzY3JpYmVkIGFib3ZlLCBvbmx5IHRoZSBsYXN0IG9jY2FzaW9uIG9mIHRoZXNlIHZhcmlhYmxlcyBuZWVkIHRvIGJlIGNvbnNpZGVyZWQ6XG4gICAgICAgICBbNF0gSWYgd2UgdXNlIHVGT1JNIGlGT1JNIGludGVycHJldGF0aW9uIDIgKHAuMTY3KSByZWN1cnNpdmUgaWRlbnRpdHkgKCBtbiA8LT4gKCjGkikpPcaSICksIEMyIGFuZCBDMVxuICAgICAgICAgICAgIMaSIGNhbiBiZSBzZXBhcmF0ZWQgZnJvbSAyLzMgaWYgdGhlcmUgaXMgYW4gZXZlbiBudW1iZXIgb2YgY3Jvc3NlcyAob3Igbm9uZSkgYWZ0ZXIgdGhlIHZhcmlhYmxlLlxuICAgICAgICAgICAgIFRoZW4sIGRlcGVuZGluZyBvbiB0aGUgRk9STSwgd2UgaGF2ZSBlaXRoZXI6XG4gICAgICAgICAgICAgaUZPUk06ICjGkj0oKMaSKSkpIDIvMyA8LT4gKDIpIDIvMyAgb3JcbiAgICAgICAgICAgICB1Rk9STTogIMaSPSgoxpIpKSAyLzMgIDwtPiAgMiAyLzNcbiAgICAgICAgIFs1XSBJZiBbNF0gZG9lcyBub3QgYXBwbHkgb3Igd2UgZGVjaWRlIGZvciB1Rk9STSBpRk9STSBpbnRlcnByZXRhdGlvbiAxIChwLjE2Nyk6IHJlY3Vyc2lvbiBpbnN0cnVjdGlvbiBcbiAgICAgICAgICAgICAoIG1uIC0+IMaSPSgoxpIpKSApLCB3ZSB3aWxsIGhhdmUgZWl0aGVyIHZhcmlhYmxlcyBvZiAyIG9yIDMgd2hpY2ggd2UgY2Fubm90IHJlbGF0ZSB0byDGkiwgc2luY2VcbiAgICAgICAgICAgICB0aGV5IG5lZWQgbm90IGJlIHRoZSBzYW1lIHVuZGV0ZXJtaW5lZCB2YWx1ZS4gVXNpbmcgY2FzZSBkaXN0aW5jdGlvbiwgd2UgaW50ZXJwcmV0IHRoZVxuICAgICAgICAgICAgIGxhc3Qgb2NjYXNpb24gb2YgMiBvciAzIGFzIDAgYW5kIGFzIDEsIGNhbGN1bGF0ZSBldmVyeXRoaW5nIHdpdGggxpI9MiBhbmQgcmVsYXRlIHRoZSByZXN1bHRzIFxuICAgICAgICAgICAgIHVzaW5nIGNvbnRyYXZhbGVuY2U6ICgoeCl5KSgoeSl4KSB3aGljaCB5aWVsZHMgdGhlIGZpbmFsIHJlc3VsdC5cbiAgICAgICAgKi9cbiAgICAgICAgLy8gY2hlY2sgaWYgYXJndW1lbnRzIGFyZSBhY3R1YWxseSBkZWZpbmVkXG4gICAgICAgIGlmIChyZUV2ZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVFdmVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhc3RPcGVuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxhc3RPcGVuID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzRXZlbiA9IChmVmFscy5sZW5ndGglMiA9PSAwKTsgLy8gZXZlbiByZXNvbHV0aW9uP1xuICAgICAgICB2YXIgemVyb3MgPSAwOyAvLyB6ZXJvIGNvdW50ZXJcbiAgICAgICAgdmFyIGZpcnN0VW5kZWYgPSAtMTsgLy8gY2F0Y2hlcyBmaXJzdCBtbi8obW4pXG5cbiAgICAgICAgLy8gWzNdIGRldGVybWluZSBpZiB1Rk9STSBvciBpRk9STVxuICAgICAgICB2YXIgdUZPUk0gPSBmYWxzZTtcbiAgICAgICAgdmFyIGlGT1JNID0gZmFsc2U7XG4gICAgICAgIGlmIChyZXNFdmVuKSB7XG4gICAgICAgICAgICBpZiAobGFzdE9wZW4pIGlGT1JNID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsc2UgdUZPUk0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHJlRXZlbikgdUZPUk0gPSB0cnVlO1xuICAgICAgICAgICAgZWxzZSBpRk9STSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAvLyBjaGVjayBpZiB0aGVyZSBpcyAxL20gc29tZXdoZXJlIGluIHhfMSDigKYgeF9uXG4gICAgICAgIHZhciBjYWxjZnJvbSA9IC0xO1xuICAgICAgICBmb3IodmFyIGk9MDsgaTxmVmFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGZ4ID0gZlZhbHNbaV07IFxuXG4gICAgICAgICAgICBpZiAoZnggPT0gMSkge1xuICAgICAgICAgICAgICAgIGNhbGNmcm9tID0gaTsgLy8gWzFdIGlmIG0gaXMgc29tZXdoZXJlLCBzZXQgY2FsY3VsYXRpb24gc3RhcnQgZnJvbSB0aGVyZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZnggPT0gMCkgemVyb3MrKzsgLy8gWzNdIGtlZXAgdHJhY2sgb2YgaG93IG1hbnkgemVyb3MgdGhlcmUgYXJlXG4gICAgICAgICAgICBlbHNlIGlmIChmeCA9PSAyIHx8IGZ4ID09IDMpIHsgLy8gWzJdXG4gICAgICAgICAgICAgICAgaWYoZmlyc3RVbmRlZiA9PSAtMSkgZmlyc3RVbmRlZiA9IGk7IC8vIGlmIHRoZXJlIGlzIGEgZmlyc3QgMi91IG9yIDMvaSwgcmVtZW1iZXJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGZ4ICE9IGZWYWxzW2ZpcnN0VW5kZWZdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGNmcm9tID0gZmlyc3RVbmRlZjsgLy8gaWYgMy8yIG9yIDIvMyBwYWlycywgc2V0IGNhbGN1bGF0aW9uIGZvcm0gZmlyc3QgdW5kZWYuIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIGlmICh6ZXJvcyA9PSBmVmFscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIFszXSBpbiBjYXNlIGFsbCB2YXJpYWJsZXMgYXJlIG4sIGp1c3QgcmV0dXJuIHRoZSB1bmRlZmluZWQvaW1hZ2luYXJ5IHZhbHVlIG9mIHRoZSBGT1JNXG4gICAgICAgICAgICBpZiAoaUZPUk0pIHJldHVybiAzO1xuICAgICAgICAgICAgZWxzZSByZXR1cm4gMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsY2Zyb20gPj0gMCkge1xuICAgICAgICAgICAgLy8gWzF8Ml0gaWYgdGhlcmUgaXMgYSAxL20gc29tZXdoZXJlIGluIHRoZSBmb3JtLCB3ZSBjYW4gZWFzaWx5IGNhbGN1bGF0ZSB0aGUgcmVzdCBmcm9tIHRoaXMgcG9pbnRcbiAgICAgICAgICAgIHZhciB2YWwgPSAxO1xuICAgICAgICAgICAgZm9yKHZhciBpPWNhbGNmcm9tOyBpPGZWYWxzLmxlbmd0aDsgaSsrKSB7ICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGxhc3RPcGVuICYmIGkgPT0gZlZhbHMubGVuZ3RoLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gdGhpcy5yZWwodmFsLGZWYWxzW2ldKTsgLy8gaWYgbm8gY3Jvc3Mgb24gbGFzdCB2YXIsIGRvbid0IGludmVydFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHZhbCA9IHRoaXMuaW52KCB0aGlzLnJlbCh2YWwsZlZhbHNbaV0pICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLy8gd2hhdCByZW1haW5zLCB3aWxsIG9ubHkgYmUgZWl0aGVyXG4gICAgICAgIC8vIC0gKDEpIGFsbCB2YXJpYWJsZXMgYXJlIG4vMCBvciBtbi8yICAgb3JcbiAgICAgICAgLy8gLSAoMikgYWxsIHZhcmlhYmxlcyBhcmUgbi8wIG9yIChtbikvM1xuICAgICAgICAvLyBTbyB3ZSBjYWxjdWxhdGUgZnJvbSB0aGUgbGFzdCBvY2Nhc2lvbiBvZiAyIG9yIDMsIGJlY2F1c2Ugd2l0aCBDMiAoZGVnZW5lcmF0ZSkgYWxsIGVsc2UgY2FuIGJlIGlnbm9yZWRcblxuICAgICAgICAvLyBmb3IgZXZlbiBjbG9zZWQgcmUtZW50cnktRk9STXMgd2l0aCB1bmV2ZW4gcmVzb2x1dGlvbiAodUZPUk0gYzEpLCB3ZSBuZWVkIHRvIGRvIHRoZSBjYWxjdWxhdGlvbiB0d2ljZVxuICAgICAgICB2YXIgcmVwZWF0ID0gKHJlRXZlbiAmJiAhcmVzRXZlbiAmJiAhbGFzdE9wZW4pPyAyOjE7XG4gICAgICBcbiAgICAgICAgZm9yKHZhciBpPShmVmFscy5sZW5ndGgqcmVwZWF0KS0xOyBpPj0wOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGklZlZhbHMubGVuZ3RoOyAvLyByZXBlYXRlZCB2YXJpYWJsZSBpbmRleFxuXG4gICAgICAgICAgICBpZiAoZlZhbHNbaW5kZXhdID09IDIgfHwgZlZhbHNbaW5kZXhdID09IDMpIHtcbiAgICAgICAgICAgICAgICB2YXIgaVJldiA9IChmVmFscy5sZW5ndGgqcmVwZWF0KS0xIC0gaTsgLy8gcmV2ZXJzZSBpbmRleCB0byBlYXNpZXIgY2hlY2sgZm9yIGludGVycHJldGF0aW9uIDIgKHNlZSBuZXh0KVxuXG4gICAgICAgICAgICAgICAgaWYgKGFsdEludGVycHIgJiYgKChsYXN0T3BlbiAmJiBpUmV2JTI9PTApIHx8ICghbGFzdE9wZW4gJiYgaVJldiUyPT0xKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdUZPUk0gaUZPUk0gaW50ZXJwcmV0YXRpb24gMjogcmVjdXJzaXZlIGlkZW50aXR5ICggxpI9KCjGkikpIDwtPiBtbiApXG4gICAgICAgICAgICAgICAgICAgIC8vIMaSPSgoxpIpKSBjYW4gYmUgc2VwYXJhdGVkIGlmIHRoZXJlIGlzIGFuIGV2ZW4gbnVtYmVyIG9mIGNyb3NzZXMgKG9yIG5vbmUpIGFmdGVyIHRoZSB2YXJpYWJsZTsgdGhpcyBpcyB0aGUgY2FzZSBpZiBlaXRoZXI6XG4gICAgICAgICAgICAgICAgICAgIC8vIC0gKDEpIHRoZSBGT1JNIGlzIG9wZW4gYW5kIHRoZSBiYWNrd2FyZHMgdmFyaWFibGUgaW5kZXggaXMgZXZlbiAgICAgIG9yXG4gICAgICAgICAgICAgICAgICAgIC8vIC0gKDIpIHRoZSBGT1JNIGlzIGNsb3NlZCBhbmQgdGhlIGJhY2t3YXJkcyB2YXJpYWJsZSBpbmRleCBpcyBvZGRcblxuICAgICAgICAgICAgICAgICAgICAvLyB0byBkZXRlcm1pbmUgaWYgdGhlIG51bWJlciBvZiBjcm9zc2VzIGJldHdlZW4gxpIgYW5kIG91ciB2YXIgaXMgZXZlbiwgd2UgZGlzdGluZ3Vpc2ggdHdvIGNhc2VzOlxuICAgICAgICAgICAgICAgICAgICBpZiAoaUZPUk0pIHJldHVybiB0aGlzLnJlbCgzLGZWYWxzW2luZGV4XSk7IC8vIGlGT1JNOiAoxpI9KCjGkikpKXggPC0+IChtbikgeFxuICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiB0aGlzLnJlbCgyLGZWYWxzW2luZGV4XSk7ICAgICAgIC8vIHVGT1JNOiAgxpI9KCjGkikpeCAgPC0+ICBtbiB4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBbNV0gaWYgZXZlcnl0aGluZyBlbHNlIGZhaWxzLCB1c2UgY2FzZSBkaXN0aW5jdGlvbjogdUZPUk0gaUZPUk0gKHAuOTQpOyBhbHNvIGFjY29yZGluZyB0bzpcbiAgICAgICAgICAgICAgICAgICAgLy8gdUZPUk0gaUZPUk0gKHAuMTY3KSBpbnRlcnByZXRhdGlvbiAxOiByZWN1cnNpb24gaW5zdHJ1Y3Rpb24gKCDGkj0oKMaSKSkgYW5kIG1uIG5lZWQgdG8gYmUgZGlmZmVyZW50aWF0ZWQpXG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhc2UwID0gMjsgLy8gcmUtZW50cnkgxpI9bW4sIGJlY2F1c2Ugb3RoZXIgbW49MFxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdE9wZW4gJiYgIXJlc0V2ZW4gJiYgIXJlRXZlbikgY2FzZTAgPSB0aGlzLmludihjYXNlMCk7IC8vIGNyb3NzIGZvciBpbnRlZ3JhdGVkIEZPUk1zIHdpdGggdW5ldmVuIHJlcy4gaW5zaWRlIG9wZW4gRk9STXMgKGlGT1JNIGIyKVxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGo9MDsgajwoZlZhbHMubGVuZ3RoKnJlcGVhdCk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZ4ID0gMDsgLy8gYWxsIG90aGVyIHZhbHVlcyB3aWxsIGJlIChkZWdlbmVyYXRlZCB0bykgemVyb1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZWYWxzW2luZGV4XSA9PSAyKSBmeCA9IDA7IC8vIGxhc3Qgb2NjYXNpb24gb2YgbW4vMiB3aWxsIGJlIGludGVycHJldGVkIGFzIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGZ4ID0gdGhpcy5pbnYoMCk7IC8vIGxhc3Qgb2NjYXNpb24gb2YgKG1uKS8zIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgKDApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdE9wZW4gJiYgaiA9PSBmVmFscy5sZW5ndGgtMSkgY2FzZTAgPSB0aGlzLnJlbChjYXNlMCxmeCk7IC8vIGlmIG5vIGNyb3NzIG9uIGxhc3QgdmFyLCBkb24ndCBpbnZlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgY2FzZTAgPSB0aGlzLmludiggdGhpcy5yZWwoY2FzZTAsZngpICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhc2UxID0gMjsgLy8gcmUtZW50cnkgxpI9bW4sIGJlY2F1c2Ugb3RoZXIgbW49MVxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdE9wZW4gJiYgIXJlc0V2ZW4gJiYgIXJlRXZlbikgY2FzZTEgPSB0aGlzLmludihjYXNlMSk7IC8vIGNyb3NzIGZvciBpbnRlZ3JhdGVkIEZPUk1zIHdpdGggdW5ldmVuIHJlcy4gaW5zaWRlIG9wZW4gRk9STXMgKGlGT1JNIGIyKVxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGo9MDsgajwoZlZhbHMubGVuZ3RoKnJlcGVhdCk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZ4ID0gMDsgLy8gYWxsIG90aGVyIHZhbHVlcyB3aWxsIGJlIChkZWdlbmVyYXRlZCB0bykgemVyb1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZWYWxzW2luZGV4XSA9PSAyKSBmeCA9IDE7IC8vIGxhc3Qgb2NjYXNpb24gb2YgbW4vMiB3aWxsIGJlIGludGVycHJldGVkIGFzIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGZ4ID0gdGhpcy5pbnYoMSk7IC8vIGxhc3Qgb2NjYXNpb24gb2YgKG1uKS8zIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgKDEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdE9wZW4gJiYgaiA9PSBmVmFscy5sZW5ndGgtMSkgY2FzZTEgPSB0aGlzLnJlbChjYXNlMSxmeCk7IC8vIGlmIG5vIGNyb3NzIG9uIGxhc3QgdmFyLCBkb24ndCBpbnZlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgY2FzZTEgPSB0aGlzLmludiggdGhpcy5yZWwoY2FzZTEsZngpICk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb250KCBjYXNlMCxjYXNlMSApOyAvLyBjb250cmF2YWxlbmNlIG9mIGJvdGggY2FzZXNcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgcmV0dXJuIC05OTsgLy8gZXJyb3IgY29kZVxuICAgIH07IC8vIGVuZCByZUVudHJ5KClcblxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIENPTVBMRVggRk9STSBDQUxDVUxBVElPTlNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIC0gMiBWQVJJQUJMRVNcblxuICAgIHN0YXRpYyBpbXBsTChmeCwgZnkpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBcImltcGxpY2F0aW9uXCI6ICh4KXkgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMucmVsKCB0aGlzLmludihmeCksZnkgKTtcbiAgICB9O1xuICAgIHN0YXRpYyBpbXBsUihmeCwgZnkpIHtcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBcImltcGxpY2F0aW9uXCI6IHgoeSkgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMucmVsKCBmeCx0aGlzLmludihmeSkgKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIHByZShmeCwgZnkpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBcInByZXNlY3Rpb25cIi9cImRlY2lzaW9uXCI6ICgoeCl5KSAqL1xuICAgICAgICByZXR1cm4gdGhpcy5pbnYoIHRoaXMuaW1wbEwoZngsZnkpICk7XG4gICAgfTtcbiAgICBzdGF0aWMgcG9zdChmeCwgZnkpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBcInBvc3RzZWN0aW9uXCIvXCJkZWNpc2lvblwiOiAoeCh5KSkgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuaW52KCB0aGlzLmltcGxSKGZ4LGZ5KSApO1xuICAgIH07XG5cbiAgICBzdGF0aWMgY29udChmeCwgZnkpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBcImNvbnRyYXZhbGVuY2VcIi9cImVpdGhlci1vclwiOiAoKHgpeSkgKHgoeSkpICovXG4gICAgICAgIHJldHVybiB0aGlzLnJlbCggdGhpcy5wcmUoZngsZnkpLCB0aGlzLnBvc3QoZngsZnkpICk7XG4gICAgfTtcbiAgICBzdGF0aWMgZXF1aXYoZngsIGZ5KSB7XG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgXCJlcXVpdmFsZW5jZVwiLz86ICggKCh4KXkpICh4KHkpKSApICovXG4gICAgICAgIHJldHVybiB0aGlzLmludiggdGhpcy5jb250KGZ4LGZ5KSApO1xuICAgIH07XG5cbn0iLCJpbXBvcnQgeyBmbGF0dGVuLCBpbmNsdWRlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcic7XG5pbXBvcnQgRkNhbGMgZnJvbSAnLi9mY2FsYyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZGb3JtIGV4dGVuZHMgRkNhbGMge1xuICAgIC8qXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICdmb3JtJyBtb2R1bGUgZm9yIGZvcm1mb3JtIChjKSAyMDE4IFBldGVyIEhvZm1hbm5cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKi9cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH07XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gRm9ybSBDYWxjdWxhdGlvblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHN0YXRpYyBjYWxjKGZvcm0pIHtcbiAgICAgICAgLyogcmVjdXJzaXZlIGZvcm0gY2FsY3VsYXRpb24gKi9cbiAgICAgICAgdmFyIGZ4ID0gMDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGhhdmUgYSBqc29uIGZvcm0sIGlmIG5vdDogdHJ5IHRvIGNvbnZlcnRcbiAgICAgICAgaWYodHlwZW9mKGZvcm0pID09PSAnc3RyaW5nJykgZm9ybSA9IHRoaXMucGFyc2VMaW5lYXIoZm9ybSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSBpbiBmb3JtLnNwYWNlKSB7XG4gICAgICAgICAgICBpZiAoZm9ybS5zcGFjZVtpXS50eXBlID09PSAnZm9ybScpIHtcbiAgICAgICAgICAgICAgICBmeCA9IHRoaXMucmVsKCBmeCx0aGlzLmNhbGMoZm9ybS5zcGFjZVtpXSkgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ2NvbnN0Jykge1xuICAgICAgICAgICAgICAgIGZ4ID0gdGhpcy5yZWwoIGZ4LGZvcm0uc3BhY2VbaV0udmFsdWUgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ3ZhcicpIHtcbiAgICAgICAgICAgICAgICBpZighaXNOYU4oZm9ybS5zcGFjZVtpXS52YWx1ZSkpIGZ4ID0gdGhpcy5yZWwoIGZ4LGZvcm0uc3BhY2VbaV0udmFsdWUgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ3VuY2xlYXInKSB7XG4gICAgICAgICAgICAgICAgZnggPSB0aGlzLnJlbCggZngsZm9ybS5zcGFjZVtpXS52YWx1ZSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZm9ybS5zcGFjZVtpXS50eXBlID09PSAncmVFbnRyeScpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmVzdGVkVmFscyA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBmUmVFbnRyeSA9IGZvcm0uc3BhY2VbaV07XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIGZSZUVudHJ5Lm5lc3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBuZXN0ZWRWYWxzLnB1c2goIHRoaXMuY2FsYyhmUmVFbnRyeS5uZXN0ZWRbal0pICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGZvciBldmVuIHJlc29sdXRpb25zICh0b3RhbCBuZXN0ZWQgYXJndW1lbnRzKSwgcmVFbnRyeSBudW1iZXIgd2lsbCBiZSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAvLyBzaW5jZSBpdCBkb2Vzbid0IG1hdHRlciBpZiBpdHMgZXZlbiBvciBvZGRcbiAgICAgICAgICAgICAgICBjb25zdCByZUVudHJ5TnVtYmVyID0gKGZSZUVudHJ5Lm5lc3RlZC5sZW5ndGggJSAyID09PSAwKSA/IHVuZGVmaW5lZCA6IGZSZUVudHJ5LnJlRXZlbjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBub3RhdGlvbiByZWFkaW5nOiB7ZGVlcGVzdCwgLi4uLCBzaGFsbG93ZXN0fSAgdXNlIG5lc3RlZFZhbHMucmV2ZXJzZSgpIHRvIHJldmVyc2UgdmFyaWFibGVzXG4gICAgICAgICAgICAgICAgZnggPSB0aGlzLnJlbCggZngsdGhpcy5yZUVudHJ5KHJlRW50cnlOdW1iZXIsIGZSZUVudHJ5Lmxhc3RPcGVuLCBmUmVFbnRyeS5hbHRJbnRlcnByZXRhdGlvbiwgLi4ubmVzdGVkVmFscykgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihmb3JtLnVubWFya2VkKSByZXR1cm4gZng7XG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXMuaW52KCBmeCApO1xuICAgIH07XG5cbiAgICBzdGF0aWMgY2FsY0FsbChmb3JtKSB7XG4gICAgICAgIC8qIEludGVycHJldCBhbmQgY2FsY3VsYXRlIGFsbCBwb3NzaWJsZSB2YWx1ZXMgZm9yIHRoZSBmb3JtIFxuICAgICAgICAgICAtPiBuZWVkcyByZWZhY3RvcmluZyB0byBhdm9pZCByZWR1bmRhbmN5OyBzdWdnZXN0aW9ucyB3ZWxjb21lLiAqL1xuXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBoYXZlIGEganNvbiBmb3JtLCBpZiBub3Q6IHRyeSB0byBjb252ZXJ0XG4gICAgICAgIGlmKHR5cGVvZihmb3JtKSA9PT0gJ3N0cmluZycpIGZvcm0gPSB0aGlzLnBhcnNlTGluZWFyKGZvcm0pO1xuXG4gICAgICAgIHZhciB2YXJzID0gdGhpcy5nZXRWYXJpYWJsZXMoZm9ybSk7XG4gICAgICAgIHZhciB2YWxzID0ge307XG5cbiAgICAgICAgdmFyIGludGVyS2V5ID0gJycrdmFycy5qb2luKCkrJzsnO1xuXG4gICAgICAgIHN3aXRjaCAodmFycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB2YWxzWydSZXN1bHQnXSA9IHRoaXMuY2FsYyhmb3JtKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJwciA9IFsge3ZhcjogdmFyc1swXSwgdmFsdWU6IG51bGx9IF07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYT0wOyBhPDQ7IGErKykge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzBdLnZhbHVlID0gYTtcbiAgICAgICAgICAgICAgICAgICAgdmFsc1tpbnRlcktleSthXSA9IHRoaXMuaW50ZXJDYWxjKGZvcm0sIGludGVycHIpOy8vW2FdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdmFyIGludGVycHIgPSBbIHt2YXI6IHZhcnNbMF0sIHZhbHVlOiBudWxsfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbMV0sIHZhbHVlOiBudWxsfSBdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGE9MDsgYTw0OyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwclswXS52YWx1ZSA9IGE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGI9MDsgYjw0OyBiKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbMV0udmFsdWUgPSBiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsc1tpbnRlcktleSthKycnK2JdID0gdGhpcy5pbnRlckNhbGMoZm9ybSwgaW50ZXJwcik7Ly9bYSxiXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgdmFyIGludGVycHIgPSBbIHt2YXI6IHZhcnNbMF0sIHZhbHVlOiBudWxsfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbMV0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1syXSwgdmFsdWU6IG51bGx9IF07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYT0wOyBhPDQ7IGErKykge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzBdLnZhbHVlID0gYTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYj0wOyBiPDQ7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclsxXS52YWx1ZSA9IGI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjPTA7IGM8NDsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclsyXS52YWx1ZSA9IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsc1tpbnRlcktleSthKycnK2IrJycrY10gPSB0aGlzLmludGVyQ2FsYyhmb3JtLCBpbnRlcnByKTsvL1thLGIsY10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHZhciBpbnRlcnByID0gWyB7dmFyOiB2YXJzWzBdLCB2YWx1ZTogbnVsbH0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzFdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbMl0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1szXSwgdmFsdWU6IG51bGx9IF07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYT0wOyBhPDQ7IGErKykge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzBdLnZhbHVlID0gYTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYj0wOyBiPDQ7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclsxXS52YWx1ZSA9IGI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjPTA7IGM8NDsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclsyXS52YWx1ZSA9IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZD0wOyBkPDQ7IGQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzNdLnZhbHVlID0gZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsc1tpbnRlcktleSthKycnK2IrJycrYysnJytkXSA9IHRoaXMuaW50ZXJDYWxjKGZvcm0sIGludGVycHIpOy8vW2EsYixjLGRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgdmFyIGludGVycHIgPSBbIHt2YXI6IHZhcnNbMF0sIHZhbHVlOiBudWxsfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbMV0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1syXSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzNdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbNF0sIHZhbHVlOiBudWxsfSBdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGE9MDsgYTw0OyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwclswXS52YWx1ZSA9IGE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGI9MDsgYjw0OyBiKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbMV0udmFsdWUgPSBiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYz0wOyBjPDQ7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbMl0udmFsdWUgPSBjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGQ9MDsgZDw0OyBkKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclszXS52YWx1ZSA9IGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGU9MDsgZTw0OyBlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbNF0udmFsdWUgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsc1tpbnRlcktleSthKycnK2IrJycrYysnJytkKycnK2VdID0gdGhpcy5pbnRlckNhbGMoZm9ybSwgaW50ZXJwcik7Ly9bYSxiLGMsZCxlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgdmFyIGludGVycHIgPSBbIHt2YXI6IHZhcnNbMF0sIHZhbHVlOiBudWxsfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbMV0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1syXSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzNdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbNF0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1s1XSwgdmFsdWU6IG51bGx9IF07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYT0wOyBhPDQ7IGErKykge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzBdLnZhbHVlID0gYTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYj0wOyBiPDQ7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclsxXS52YWx1ZSA9IGI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjPTA7IGM8NDsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclsyXS52YWx1ZSA9IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZD0wOyBkPDQ7IGQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzNdLnZhbHVlID0gZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZT0wOyBlPDQ7IGUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcls0XS52YWx1ZSA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBmPTA7IGY8NDsgZisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcls1XS52YWx1ZSA9IGY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsc1tpbnRlcktleSthKycnK2IrJycrYysnJytkKycnK2UrJycrZl0gPSB0aGlzLmludGVyQ2FsYyhmb3JtLCBpbnRlcnByKTsvL1thLGIsYyxkLGUsZl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIHZhciBpbnRlcnByID0gWyB7dmFyOiB2YXJzWzBdLCB2YWx1ZTogbnVsbH0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzFdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbMl0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1szXSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzRdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbNV0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1s2XSwgdmFsdWU6IG51bGx9IF07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYT0wOyBhPDQ7IGErKykge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzBdLnZhbHVlID0gYTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYj0wOyBiPDQ7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclsxXS52YWx1ZSA9IGI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjPTA7IGM8NDsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclsyXS52YWx1ZSA9IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZD0wOyBkPDQ7IGQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzNdLnZhbHVlID0gZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZT0wOyBlPDQ7IGUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcls0XS52YWx1ZSA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBmPTA7IGY8NDsgZisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcls1XS52YWx1ZSA9IGY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZz0wOyBnPDQ7IGcrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzZdLnZhbHVlID0gZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsc1tpbnRlcktleSthKycnK2IrJycrYysnJytkKycnK2UrJycrZisnJytnXSA9IHRoaXMuaW50ZXJDYWxjKGZvcm0sIGludGVycHIpOy8vW2EsYixjLGQsZSxmLGddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgdmFyIGludGVycHIgPSBbIHt2YXI6IHZhcnNbMF0sIHZhbHVlOiBudWxsfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbMV0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1syXSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzNdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbNF0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1s1XSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzZdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbN10sIHZhbHVlOiBudWxsfSBdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGE9MDsgYTw0OyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwclswXS52YWx1ZSA9IGE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGI9MDsgYjw0OyBiKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbMV0udmFsdWUgPSBiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYz0wOyBjPDQ7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbMl0udmFsdWUgPSBjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGQ9MDsgZDw0OyBkKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclszXS52YWx1ZSA9IGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGU9MDsgZTw0OyBlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbNF0udmFsdWUgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZj0wOyBmPDQ7IGYrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbNV0udmFsdWUgPSBmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGc9MDsgZzw0OyBnKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcls2XS52YWx1ZSA9IGc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGg9MDsgaDw0OyBoKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbN10udmFsdWUgPSBoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsc1tpbnRlcktleSthKycnK2IrJycrYysnJytkKycnK2UrJycrZisnJytnKycnK2hdID0gdGhpcy5pbnRlckNhbGMoZm9ybSwgaW50ZXJwcik7Ly9bYSxiLGMsZCxlLGYsZyxoXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWxzO1xuICAgIH07XG5cbiAgICBzdGF0aWMgaW50ZXJDYWxjKGZvcm0sIGludGVycHIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsYyggdGhpcy5pbnRlcnByZXQoZm9ybSwgaW50ZXJwcikgKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGludGVycHJldChmb3JtLCBpbnRlcnByKSB7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBoYXZlIGEganNvbiBmb3JtLCBpZiBub3Q6IHRyeSB0byBjb252ZXJ0XG4gICAgICAgIGlmKHR5cGVvZihmb3JtKSA9PT0gJ3N0cmluZycpIGZvcm0gPSB0aGlzLnBhcnNlTGluZWFyKGZvcm0pO1xuXG4gICAgICAgIHZhciBpbnRlcnByRm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZm9ybSkpOyAvLyBjbG9uZSBmb3JtXG5cbiAgICAgICAgdGhpcy50cmF2ZXJzZUZvcm0oaW50ZXJwckZvcm0sIGZ1bmN0aW9uKGZCcmFuY2gpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwYWNlID0gZkJyYW5jaC5zcGFjZTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBzcGFjZSkge1xuICAgICAgICAgICAgICAgIGlmIChzcGFjZVtpXS50eXBlID09PSAndmFyJykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB2IGluIGludGVycHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGFjZVtpXS5zeW1ib2wgPT09IGludGVycHJbdl0udmFyKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFjZVtpXS52YWx1ZSA9IGludGVycHJbdl0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBpbnRlcnByRm9ybTtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEV4dGVuc2lvbnMgb2YgRkNhbGNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgcmVsX2xvZ2ljKGZ4LCBmeSkge1xuICAgICAgICBpZih0eXBlb2YoZngpID09PSBBcnJheSB8fCB0eXBlb2YoZnkpID09PSBBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1cGVyLnJlbF9sb2dpYyhmeCwgZnkpO1xuICAgIH07XG4gICAgc3RhdGljIHJlbCguLi5mVmFscykge1xuICAgICAgICByZXR1cm4gc3VwZXIucmVsKC4uLmZWYWxzKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGludl9sb2dpYyhmeCkge1xuICAgICAgICBpZih0eXBlb2YoZngpID09PSBBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1cGVyLmludl9sb2dpYyhmeCk7XG4gICAgfTtcbiAgICBzdGF0aWMgaW52KGZ4LCBuKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5pbnYoZngsIG4pO1xuICAgIH07XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQ29udmVyc2lvbnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgcGFyc2VMaW5lYXIoZm9ybXVsYSkge1xuICAgICAgICAvKiBDb252ZXJ0cyBmcm9tIHBhcmFudGhlc2lzIG5vdGF0aW9uIGludG8gSlNPTiBzdHJpbmcgYW5kIHBhcnNlcyBhcyBKU09OIG9iamVjdCAqL1xuXG4gICAgICAgIC8vIGNvbnZlcnQgdGhlIGZvcm11bGEgaW50byBhIEpTT04gc3RyaW5nXG4gICAgICAgIHZhciBqc29uU3RyID0gdGhpcy5jb252RnJvbUxpbmVhcihmb3JtdWxhKTtcblxuICAgICAgICAvLyB0cnkgcGFyc2luZyB0aGUgc3RyaW5nIGFzIGEgSlNPTiBvYmplY3RcbiAgICAgICAgdmFyIGpzb24gPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGpzb24gPSBKU09OLnBhcnNlKGpzb25TdHIpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnZGcm9tTGluZWFyKGZvcm11bGEpIHtcbiAgICAgICAgLy8gY2xlYW4gZm9ybXVsYSBzdHJpbmcgZnJvbSB3aGl0ZXNwYWNlXG4gICAgICAgIHZhciBjbGVhbkZvcm11bGEgPSB0aGlzLmNsZWFuTGluZWFyKGZvcm11bGEpO1xuICAgICAgICB2YXIgYXJyID0gdGhpcy5jb25zdHJ1Y3RGcm9tTGluZWFyKGNsZWFuRm9ybXVsYSk7XG4gICAgICAgIHJldHVybiBmbGF0dGVuKGFycikuam9pbignJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsZWFuTGluZWFyKGZvcm11bGEpIHtcbiAgICAgICAgdmFyIGNsZWFuRm9ybXVsYSA9ICcnO1xuICAgICAgICB2YXIgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgaW5TbGFzaCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGkgaW4gZm9ybXVsYSkge1xuICAgICAgICAgICAgdmFyIGNoYXIgPSBmb3JtdWxhW2ldO1xuICAgICAgICAgICAgaWYodHlwZW9mKGNoYXIpICE9PSBcInN0cmluZ1wiKSBicmVhazsgLy8gcHJvdG90eXBlIGhhY2tzXG5cbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnXCInICYmICFpblNsYXNoKSBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJy8nICYmICFpblF1b3RlKSBpblNsYXNoID0gIWluU2xhc2g7XG5cbiAgICAgICAgICAgIC8vIG9taXQgd2hpdGVzcGFjZSBvdXRzaWRlIG9mIHF1b3Rlc1xuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcgJykge1xuICAgICAgICAgICAgICAgIGlmIChpblF1b3RlIHx8wqBpblNsYXNoKSBjbGVhbkZvcm11bGEgKz0gY2hhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgY2xlYW5Gb3JtdWxhICs9IGNoYXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsZWFuRm9ybXVsYTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29uc3RydWN0RnJvbUxpbmVhcihmb3JtdWxhKSB7XG4gICAgICAgIC8qIENvbnZlcnRzIGZyb20gcGFyYW50aGVzaXMgbm90YXRpb24gdG8gSlNPTi1mb3JtICovXG5cbiAgICAgICAgdmFyIGNvbXBBbGwgPSBbXTtcbiAgICAgICAgdmFyIHVubWFya2VkID0gdHJ1ZTtcblxuICAgICAgICAvLyBjaGVjayBmb3IgYWxsIGVuY2xvc2luZyBvdXRlciBmb3JtXG4gICAgICAgIHZhciBjb3VudERlcHRoID0gMDtcbiAgICAgICAgdmFyIGluUXVvdGUgPSBmYWxzZTtcbiAgICAgICAgdmFyIGluU2xhc2ggPSBmYWxzZTtcbiAgICAgICAgdmFyIG91dGVyTWFya0NvdW50ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBmb3JtdWxhKSB7XG4gICAgICAgICAgICB2YXIgY2hhciA9IGZvcm11bGFbaV07XG4gICAgICAgICAgICBpZih0eXBlb2YoY2hhcikgIT09IFwic3RyaW5nXCIpIGJyZWFrOyAvLyBwcm90b3R5cGUgaGFja3NcblxuICAgICAgICAgICAgaWYgKCFpblF1b3RlICYmICFpblNsYXNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcoJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGNvdW50RGVwdGggPT0gMCkgJiYgKGkgIT0gMCkpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjb3VudERlcHRoKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09ICcpJykge1xuICAgICAgICAgICAgICAgICAgICBjb3VudERlcHRoLS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudERlcHRoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IGZvcm11bGEubGVuZ3RoLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnXCInICYmICFpblNsYXNoKSBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJy8nICYmICFpblF1b3RlKSBpblNsYXNoID0gIWluU2xhc2g7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wQWxsLnB1c2goJyAgeycpO1xuICAgICAgICBjb21wQWxsLnB1c2goJ1widHlwZVwiOlwiZm9ybVwiLCcpO1xuXG4gICAgICAgIGlmICh1bm1hcmtlZCkgY29tcEFsbC5wdXNoKCdcInVubWFya2VkXCI6dHJ1ZSwnKTtcbiAgICAgICAgZWxzZSBmb3JtdWxhID0gZm9ybXVsYS5zbGljZSgxLGZvcm11bGEubGVuZ3RoLTEpO1xuXG4gICAgICAgIGNvbXBBbGwucHVzaCgnXCJzcGFjZVwiOlsnKTsgICBcblxuXG4gICAgICAgIHZhciBwYXJ0cyA9IFtdO1xuICAgICAgICBwYXJ0cy5wdXNoKCcnKTtcblxuICAgICAgICB2YXIgY291bnREZXB0aCA9IDA7XG4gICAgICAgIHZhciBpblF1b3RlID0gZmFsc2U7XG4gICAgICAgIHZhciBpblNsYXNoID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIG9wdENoYXIgPSAn4qS0JztcbiAgICAgICAgdmFyIG5lc3RDaGFyID0gJ+KktSc7XG5cbiAgICAgICAgZm9yICh2YXIgaSBpbiBmb3JtdWxhKSB7XG4gICAgICAgICAgICB2YXIgY2hhciA9IGZvcm11bGFbaV07XG4gICAgICAgICAgICB2YXIgcHJldkNoYXIgPSBmb3JtdWxhW2ktMV07XG4gICAgICAgICAgICBpZih0eXBlb2YoY2hhcikgIT09IFwic3RyaW5nXCIpIGJyZWFrOyAvLyBwcm90b3R5cGUgaGFja3NcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFpblF1b3RlICYmICFpblNsYXNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcpJyB8fMKgY2hhciA9PT0gJ30nKSBjb3VudERlcHRoLS07XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcoJyB8fMKgY2hhciA9PT0gJ3snKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnREZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmlyc3QgKHgpIGRvZXNuJ3QgbmVlZCB0byBiZSBzZXBhcmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID4gMCkgcGFydHMucHVzaCgnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY291bnREZXB0aCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggKHByZXZDaGFyID09PSAnKScgfHzCoHByZXZDaGFyID09PSAnfScpICYmICEoY2hhciA9PT0gJyknIHx8wqBjaGFyID09PSAnfScpICkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiBjaGFyIGZvbGxvd3MgKHgpLCBzZXBhcmF0ZTsgYnV0IG5vdCBpZiBpdCBpcyBhbm90aGVyICcpJ1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnREZXB0aCA9PT0gMCkgcGFydHMucHVzaCgnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHVuaXF1ZSBzZXBhcmF0aW9uIGNoYXJzIGZvciByZS1lbnRyeSBmb3JtcyBmb3IgZWFzeSBzcGxpdHRpbmdcbiAgICAgICAgICAgICAgICBpZiAoY291bnREZXB0aCA9PT0gMSAmJiBjaGFyID09PSAnLCcpIGNoYXIgPSBuZXN0Q2hhcjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb3VudERlcHRoID09PSAxICYmIGNoYXIgPT09ICd8JykgY2hhciA9IG9wdENoYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJ1wiJyAmJiAhaW5TbGFzaCkgaW5RdW90ZSA9ICFpblF1b3RlO1xuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcvJyAmJiAhaW5RdW90ZSkgaW5TbGFzaCA9ICFpblNsYXNoO1xuICAgICAgICAgICAgLy8gYWRkIGNoYXIgdG8gdGhlIGxhdGVzdCBwdXNoZWQgcGFydFxuICAgICAgICAgICAgcGFydHNbcGFydHMubGVuZ3RoLTFdICs9IGNoYXI7XG4gICAgICAgIH1cblxuXG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciBpIGluIHBhcnRzKSB7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1tpXVswXSA9PT0gJygnKSB7IFxuICAgICAgICAgICAgICAgIC8vIGlmIHBhcnQgaXMgZm9ybVxuICAgICAgICAgICAgICAgIC8vIHBhcnRzW2ldID0gdGhpcy5jb25zdHJ1Y3RGcm9tTGluZWFyKCBwYXJ0c1tpXS5zbGljZSgxLHBhcnRzW2ldLmxlbmd0aC0xKSApO1xuICAgICAgICAgICAgICAgIHZhciBjb21wID0gW107XG4gICAgICAgICAgICAgICAgLy8gY29tcC5wdXNoKCd7Jyk7XG4gICAgICAgICAgICAgICAgY29tcC5wdXNoKCB0aGlzLmNvbnN0cnVjdEZyb21MaW5lYXIocGFydHNbaV0pICk7XG4gICAgICAgICAgICAgICAgLy8gY29tcC5wdXNoKCd9Jyk7XG5cbiAgICAgICAgICAgICAgICBwYXJ0c1tpXSA9IGNvbXAuc2xpY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhcnRzW2ldWzBdID09PSAneycpIHtcbiAgICAgICAgICAgICAgICAvLyBlbHNlIGlmIHBhcnQgaXMgcmUtZW50cnkgZm9ybVxuXG4gICAgICAgICAgICAgICAgdmFyIGNvbXAgPSBbXTtcbiAgICAgICAgICAgICAgICBjb21wLnB1c2goJyAgeycpO1xuICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnXCJ0eXBlXCI6XCJyZUVudHJ5XCIsJyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IHBhcnRzW2ldLnNsaWNlKDEscGFydHNbaV0ubGVuZ3RoLTEpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHJlUGFydHMgPSBjb250ZW50LnNwbGl0KG9wdENoYXIpO1xuICAgICAgICAgICAgICAgIHZhciByZU5lc3RlZCA9IHJlUGFydHNbcmVQYXJ0cy5sZW5ndGgtMV0uc3BsaXQobmVzdENoYXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlTmVzdGVkLmxlbmd0aCAlIDIgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKCdcInJlRXZlblwiOlwidW5kZWZpbmVkXCIsJyk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlUGFydHNbMF0gPT09ICcycicgfHwgcmVQYXJ0c1sxXSA9PT0gJzJyJyB8fCByZVBhcnRzWzJdID09PSAnMnInKSBjb21wLnB1c2goJ1wicmVFdmVuXCI6dHJ1ZSwnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBjb21wLnB1c2goJ1wicmVFdmVuXCI6ZmFsc2UsJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlUGFydHNbMF0gPT09ICdvcGVuJyB8fCByZVBhcnRzWzFdID09PSAnb3BlbicgfHwgcmVQYXJ0c1syXSA9PT0gJ29wZW4nKSBjb21wLnB1c2goJ1wibGFzdE9wZW5cIjp0cnVlLCcpO1xuICAgICAgICAgICAgICAgIGVsc2UgY29tcC5wdXNoKCdcImxhc3RPcGVuXCI6ZmFsc2UsJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVQYXJ0c1swXSA9PT0gJ2FsdCcgfHwgcmVQYXJ0c1sxXSA9PT0gJ2FsdCcgfHwgcmVQYXJ0c1syXSA9PT0gJ2FsdCcpIGNvbXAucHVzaCgnXCJhbHRJbnRlcnByZXRhdGlvblwiOnRydWUsJyk7XG4gICAgICAgICAgICAgICAgZWxzZSBjb21wLnB1c2goJ1wiYWx0SW50ZXJwcmV0YXRpb25cIjpmYWxzZSwnKTtcblxuICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnXCJuZXN0ZWRcIjpbJyk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuIGluIHJlTmVzdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCggdGhpcy5jb25zdHJ1Y3RGcm9tTGluZWFyKHJlTmVzdGVkW25dKSApO1xuICAgICAgICAgICAgICAgICAgICBpZiAobiA8IHJlTmVzdGVkLmxlbmd0aC0xKSBjb21wLnB1c2goJywnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVOZXN0ZWRbbl0gPSB0aGlzLmNvbnN0cnVjdEZyb21MaW5lYXIoIHJlTmVzdGVkW25dICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29tcC5wdXNoKCddfSAgJyk7XG5cbiAgICAgICAgICAgICAgICBwYXJ0c1tpXSA9IGNvbXAuc2xpY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGVsc2Ugd2UgaGF2ZSB2YXJpYWJsZXMvY29uc3RhbnRzXG5cbiAgICAgICAgICAgICAgICB2YXIgY29tcCA9IFtdO1xuXG4gICAgICAgICAgICAgICAgdmFyIHZhcnMgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciBpblNsYXNoID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIHBhcnRzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGFyID0gcGFydHNbaV1bal07XG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZihjaGFyKSAhPT0gXCJzdHJpbmdcIikgYnJlYWs7IC8vIHByb3RvdHlwZSBoYWNrc1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnXCInICYmICFpblNsYXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJrIHF1b3RlZCBzdHJpbmcgd2l0aCBhICfigJYnIGZvciBpZGVudGlmaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluUXVvdGUpIHZhcnMucHVzaCgn4oCWJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhciA9PT0gJy8nICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpblNsYXNoID0gIWluU2xhc2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJrIHVuY2xlYXIgZm9ybSB3aXRoIGEgJ+KAvScgZm9yIGlkZW50aWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5TbGFzaCkgdmFycy5wdXNoKCfigL0nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW5RdW90ZSAmJiAhaW5TbGFzaCkgdmFycy5wdXNoKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHF1b3RlIGNoYXJzIGluc2lkZSBzbGFzaGVzIHdpbGwgYmUgZXNjYXBlZCB0byBub3QgaW50ZXJmZXJlIHdpdGggSlNPTiBzeW50YXhcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnXCInICYmIGluU2xhc2gpIHZhcnNbdmFycy5sZW5ndGgtMV0gKz0gJ1xcXFwnICsgY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdmFyc1t2YXJzLmxlbmd0aC0xXSArPSBjaGFyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdiBpbiB2YXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZih2YXJzW3ZdKSAhPT0gXCJzdHJpbmdcIikgYnJlYWs7IC8vIHByb3RvdHlwZSBoYWNrc1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnICB7Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4odmFyc1t2XSkgJiYgdmFyc1t2XS5sZW5ndGggPiAwIFxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFyc1t2XVswXSAhPT0gJ+KAvScgJiYgdmFyc1t2XVswXSAhPT0gJ+KAlicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnXCJ0eXBlXCI6XCJjb25zdFwiLCcpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnXCJ2YWx1ZVwiOicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKHZhcnNbdl0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhcnNbdl1bMF0gPT09ICfigL0nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wLnB1c2goJ1widHlwZVwiOlwidW5jbGVhclwiLCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKCdcInZhbHVlXCI6MiwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnXCJzeW1ib2xcIjonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnXCInK3ZhcnNbdl0uc2xpY2UoMSkrJ1wiJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wLnB1c2goJ1widHlwZVwiOlwidmFyXCIsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wLnB1c2goJ1widmFsdWVcIjpcIipcIiwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnXCJzeW1ib2xcIjonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZhcnNbdl1bMF0gPT09ICfigJYnKSBjb21wLnB1c2goJ1wiJyt2YXJzW3ZdLnNsaWNlKDEpKydcIicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBjb21wLnB1c2goJ1wiJyt2YXJzW3ZdKydcIicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnfSAgJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2IDwgdmFycy5sZW5ndGgtMSkgY29tcC5wdXNoKCcsJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGFydHNbaV0gPSBjb21wLnNsaWNlKCk7XG4gICAgICAgICAgICB9IC8vIGVuZCBlbHNlXG5cbiAgICAgICAgICAgIGNvbXBBbGwucHVzaChwYXJ0c1tpXSk7XG4gICAgICAgICAgICBpZiAoaSA8IHBhcnRzLmxlbmd0aC0xKSBjb21wQWxsLnB1c2goJywnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBBbGwucHVzaCgnXX0gICcpO1xuXG4gICAgICAgIHJldHVybiBjb21wQWxsO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBSZXByZXNlbnRhdGlvblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHN0YXRpYyBqc29uU3RyaW5nKGZvcm0pIHtcbiAgICAgICAgLyogcmV0dXJuIGpzb24tcmVwcmVzZW50YXRpb24gb2YgdGhlIHNwZWNpZmllZCBGT1JNICovXG4gICAgICAgIGlmKHR5cGVvZihmb3JtKSA9PT0gJ3N0cmluZycpIGZvcm0gPSB0aGlzLnBhcnNlTGluZWFyKGZvcm0pO1xuICAgIFxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZm9ybSwgdW5kZWZpbmVkLCAyKTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gSGVscGVyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljIGdldFZhcmlhYmxlcyhmb3JtKSB7XG4gICAgICAgIGlmKHR5cGVvZihmb3JtKSA9PT0gJ3N0cmluZycpIGZvcm0gPSB0aGlzLnBhcnNlTGluZWFyKGZvcm0pO1xuXG4gICAgICAgIHZhciB2YXJzID0gW107XG4gICAgICAgIHRoaXMudHJhdmVyc2VGb3JtKGZvcm0sIGZ1bmN0aW9uKGZCcmFuY2gpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwYWNlID0gZkJyYW5jaC5zcGFjZTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBzcGFjZSkge1xuICAgICAgICAgICAgICAgIGlmIChzcGFjZVtpXS50eXBlID09PSAndmFyJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWluY2x1ZGUodmFycywgc3BhY2VbaV0uc3ltYm9sKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFycy5wdXNoKHNwYWNlW2ldLnN5bWJvbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFycy5zb3J0KCk7XG4gICAgfTtcblxuICAgIHN0YXRpYyB0cmF2ZXJzZUZvcm0oZm9ybSxmdW5jKSB7XG4gICAgICAgIC8qIHRyYXZlcnNlcyBvbmx5IGZvcm0tdHlwZXMgaW4gYSBqc29uIHRyZWUgKi9cbiAgICAgICAgbGV0IGJyZWFrVHJhdiA9IGZ1bmMuYXBwbHkodGhpcyxbZm9ybV0pO1xuXG4gICAgICAgIGlmIChmb3JtLnNwYWNlKSB7IC8vIGZvcm0udHlwZTogJ2Zvcm0nXG4gICAgICAgICAgICBpZiAoZm9ybS5zcGFjZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBmb3JtLnNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICdmb3JtJyB8fCBmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICdyZUVudHJ5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJyZWFrTG9vcCA9IHRoaXMudHJhdmVyc2VGb3JtKGZvcm0uc3BhY2VbaV0sZnVuYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnJlYWtMb29wKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmb3JtLm5lc3RlZCkgeyAvLyBmb3JtLnR5cGU6ICdyZUVudHJ5J1xuICAgICAgICAgICAgaWYgKGZvcm0ubmVzdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIGZvcm0ubmVzdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBicmVha0xvb3AgPSB0aGlzLnRyYXZlcnNlRm9ybShmb3JtLm5lc3RlZFtpXSxmdW5jKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJyZWFrTG9vcCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgY29uc29sZS5sb2coJ0VSUk9SOiBOb3QgYSBmb3JtIScpO1xuXG4gICAgICAgIHJldHVybiBicmVha1RyYXY7XG4gICAgfTtcblxufSIsImltcG9ydCBGRm9ybSBmcm9tICcuL2Zmb3JtJztcbmltcG9ydCBEM0dyYXBoLCB7IHNhdmUgfSBmcm9tICcuLi9tb2R1bGVzL2QzLWdyYXBoJztcblxubGV0IGcxID0ge307IGxldCBnMiA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR3JhcGggZXh0ZW5kcyBGRm9ybSB7XG4gICAgLypcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAnZ3JhcGgnIG1vZHVsZSBmb3IgZm9ybWZvcm0gKGMpIDIwMTggUGV0ZXIgSG9mbWFublxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAqL1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIHRoaXMuZ3JhcGhzID0gW107XG4gIH07XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBFeHRlbnNpb25zIG9mIEZGb3JtXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBzdGF0aWMganNvblN0cmluZyhmb3JtKSB7XG4gICAgY29uc3QgZXhwYW5kZWRGb3JtID0gdGhpcy5leHBhbmRfcmVFbnRyeShmb3JtKTtcbiAgICByZXR1cm4gc3VwZXIuanNvblN0cmluZyhleHBhbmRlZEZvcm0pO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBHcmFwaCByZXByZXNlbnRhdGlvblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgc3RhdGljIGNyZWF0ZUdyYXBoKGdyYXBoVHlwZSwgX2Zvcm0sIG9wdGlvbnMpIHtcbiAgICBjb25zdCBhZGRFbXB0eVJlQ2hpbGRTcGFjZSA9IChncmFwaFR5cGUgPT09ICdwYWNrJyk7XG5cbiAgICAvLyBleHBhbmQgcmUtZW50cnkgc3RydWN0dXJlIHRvIGJlIHVzYWJsZSBmb3IgZ3JhcGhzXG4gICAgY29uc3QgZm9ybSA9IHRoaXMuZXhwYW5kX3JlRW50cnkoX2Zvcm0sIHthZGRFbXB0eVJlQ2hpbGRTcGFjZTogYWRkRW1wdHlSZUNoaWxkU3BhY2V9KTtcbiAgICAvLyBpbml0aWFsaXplIHRoZSBncmFwaFxuXG4gICAgY29uc3QgZ3JhcGggPSBuZXcgRDNHcmFwaChncmFwaFR5cGUsIGZvcm0sIG9wdGlvbnMpO1xuICAgIGdyYXBoLmZvcm11bGEgPSBfZm9ybTtcbiAgICAvLyBncmFwaHMucHVzaCggbmV3IEQzR3JhcGgoZ3JhcGhUeXBlLCBmb3JtLCBvcHRpb25zKSApO1xuXG4gICAgcmV0dXJuIGdyYXBoO1xuICB9XG5cbiAgc3RhdGljIHNhdmVHcmFwaChmb3JtYXQsIHN2ZywgbmFtZSkge1xuICAgIHNhdmUoZm9ybWF0LCBzdmcsIG5hbWUpO1xuICB9XG5cbiAgc3RhdGljIGNvbnN0cnVjdE5lc3RlZChyZUZvcm0sIG9wdGlvbnM9e30pIHtcbiAgICAvKiBDb25zdHJ1Y3RzIGEgKHJlYWwpIG5lc3RlZCBmb3JtIHN0cnVjdHVyZSBmcm9tIHRoZSAubmVzdGVkIGFycmF5IG9mIHRoZSBvcmlnaW5hbCByZS1lbnRyeSBqc29uICovXG4gICAgbGV0IHNwYWNlID0gcmVGb3JtLnNwYWNlID0gW107XG4gICAgcmVGb3JtLm5lc3RlZC5yZXZlcnNlKCk7IC8vIE1VU1QgYmUgcmV2ZXJzZWQsIGJlY2F1c2Ugbm90YXRpb246IHtkZWVwZXN0LCAuLi4sIHNoYWxsb3dlc3R9XG5cbiAgICBmb3IobGV0IGkgaW4gcmVGb3JtLm5lc3RlZCkge1xuICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgIC8vIHByZXBlbmQgdGhlIHJlRW50cnkgbmVzdGluZyBiZWZvcmUgZXZlcnl0aGluZyBlbHNlIGluIHRoZSBzcGFjZVxuICAgICAgICBzcGFjZS51bnNoaWZ0KCB7dHlwZTogJ2Zvcm0nLCByZUNoaWxkOiB0cnVlLCBzcGFjZTogW119ICk7IC8vIHNwYWNlLnB1c2ggPC0gb3JkZXIgbGFzdFxuICAgICAgICBjb25zdCBuZXN0ZWRGb3JtID0gc3BhY2VbMF07IC8vIHNwYWNlW3NwYWNlLmxlbmd0aC0xXSA8LSBvcmRlciBsYXN0XG4gICAgICAgIFxuICAgICAgICBpZighcmVGb3JtLm5lc3RlZFtpXS51bm1hcmtlZCkgbmVzdGVkRm9ybS5zcGFjZS5wdXNoKHJlRm9ybS5uZXN0ZWRbaV0pO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvLyBuZXN0ZWRGb3JtLnNwYWNlLnB1c2gocmVGb3JtLm5lc3RlZFtpXSk7XG4gICAgICAgICAgbmVzdGVkRm9ybS5zcGFjZS5wdXNoKC4uLnJlRm9ybS5uZXN0ZWRbaV0uc3BhY2UpOyAvLyBwdXNoKHJlRm9ybS5uZXN0ZWRbaV0pIGZvciBncm91cGluZ1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhY2UgPSBuZXN0ZWRGb3JtLnNwYWNlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmKCFyZUZvcm0ubmVzdGVkW2ldLnVubWFya2VkKSBzcGFjZS5wdXNoKHJlRm9ybS5uZXN0ZWRbaV0pO1xuICAgICAgICAvLyBlbHNlIHNwYWNlLnB1c2gocmVGb3JtLm5lc3RlZFtpXSk7XG4gICAgICAgIGVsc2Ugc3BhY2UucHVzaCguLi5yZUZvcm0ubmVzdGVkW2ldLnNwYWNlKTsgLy8gcHVzaChyZUZvcm0ubmVzdGVkW2ldKSBmb3IgZ3JvdXBpbmdcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuYWRkRW1wdHlSZUNoaWxkU3BhY2UgJiYgKHNwYWNlLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgc3BhY2UucHVzaCgge3R5cGU6ICdzcGFjZSd9ICk7XG4gICAgICB9XG4gICAgfSAgICBcblxuICAgIC8vIHdlIG5lZWQgdG8gYWRkIGEgcG9pbnQgb2YgcmUtZW50cnkgdG8gdGhlIGxhc3QgbmVzdGVkIGZvcm1cbiAgICAvLyBmaXJzdCwgbGV0cyBhc3N1bWUgdGhpcyBpcyB0aGUgZm9ybSBpdHNlbGZcbiAgICBsZXQgbGFzdE5lc3RlZCA9IHJlRm9ybTtcbiAgICBcbiAgICBpZihyZUZvcm0uc3BhY2UubGVuZ3RoID4gMCkge1xuICAgICAgLy8gdGhlbiBsb29wIHVudGlsIHRoZSBsYXN0IHJlQ2hpbGQgaXMgZm91bmQgYW5kIG1ha2UgdGhpcyBvdXIgbGFzdCBuZXN0ZWQgZm9ybVxuICAgICAgXG4gICAgICB3aGlsZSAobGFzdE5lc3RlZC5zcGFjZVswXS5oYXNPd25Qcm9wZXJ0eSgncmVDaGlsZCcpKSB7ICAgICAgICBcbiAgICAgICAgbGFzdE5lc3RlZCA9IGxhc3ROZXN0ZWQuc3BhY2VbMF07XG4gICAgICAgIGlmIChsYXN0TmVzdGVkLnNwYWNlLmxlbmd0aCA8IDEpIGJyZWFrOyAvLyBwcmV2ZW50IGVycm9ycyB3aGVuIG5vdGhpbmcgaXMgZm91bmRcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZm9yIG9wZW4gcmUtZW50cmllcywgd2UgbmVlZCB0byBhZGQgYW5vdGhlciBuZXN0aW5nIChzZWUgdUZPUk0gaUZPUk0gZm9yIHJlZmVyZW5jZSlcbiAgICBpZihyZUZvcm0ubGFzdE9wZW4pIHtcbiAgICAgIGxhc3ROZXN0ZWQuc3BhY2UudW5zaGlmdCgge3R5cGU6ICdmb3JtJywgcmVDaGlsZDogdHJ1ZSwgc3BhY2U6IFtdfSApO1xuICAgICAgLy8gdGhlbiBhZGQgdGhlIHJlLWVudHJ5IHBvaW50IHRvIGVpdGhlciBzcGFjZVxuICAgICAgbGFzdE5lc3RlZC5zcGFjZVswXS5zcGFjZS51bnNoaWZ0KCB7dHlwZTogJ3JlRW50cnlQb2ludCd9ICk7XG4gICAgfVxuICAgIGVsc2UgbGFzdE5lc3RlZC5zcGFjZS51bnNoaWZ0KCB7dHlwZTogJ3JlRW50cnlQb2ludCd9ICk7XG5cbiAgICAvLyBsYXN0LCBkZWxldGUgdGhlIG5lc3RlZCBzdHJ1Y3R1cmUsIHdlIGRvbid0IG5lZWQgaXQgYW55bW9yZVxuICAgIGRlbGV0ZSByZUZvcm0ubmVzdGVkO1xuICAgIHJldHVybiByZUZvcm07XG4gIH1cblxuICBzdGF0aWMgZXhwYW5kX3JlRW50cnkoX2Zvcm0sIG9wdGlvbnM9e30pIHtcbiAgICBpZih0eXBlb2YoX2Zvcm0pICE9PSAnc3RyaW5nJykgX2Zvcm0gPSBKU09OLnN0cmluZ2lmeShfZm9ybSk7XG4gICAgY29uc3QgcmVmRm9ybSA9IHRoaXMucGFyc2VMaW5lYXIoX2Zvcm0pO1xuICAgIGxldCB0YXJnZXRGb3JtID0gdGhpcy5wYXJzZUxpbmVhcihfZm9ybSk7XG5cbiAgICAvLyB3ZSBtdXN0IGtlZXAgYSBydW5uaW5nIGluZGV4IHRvIG5vdCBjb25mdXNlIGlkZW50aWNhbCBmb3JtcyB3aGlsZSByZWNvbnN0cnVjdGluZyB0aGUgcmVFbnRyaWVzXG4gICAgLy8gTm90ZTogdGhpcyBzaG91bGQgYmUgZG9uZSBtb3JlIGVmZmljaWVudGx5IGluIHRoZSBmdXR1cmVcbiAgICBsZXQgcnVubmluZ0luZGV4ID0gMDtcbiAgICB0aGlzLnRyYXZlcnNlRm9ybShyZWZGb3JtLCBmdW5jdGlvbihicmFuY2gpIHsgYnJhbmNoLnJ1bm5pbmdJbmRleCA9IHJ1bm5pbmdJbmRleCwgcnVubmluZ0luZGV4Kys7IH0pO1xuICAgIHJ1bm5pbmdJbmRleCA9IDA7XG4gICAgdGhpcy50cmF2ZXJzZUZvcm0odGFyZ2V0Rm9ybSwgZnVuY3Rpb24oYnJhbmNoKSB7IGJyYW5jaC5ydW5uaW5nSW5kZXggPSBydW5uaW5nSW5kZXgsIHJ1bm5pbmdJbmRleCsrOyB9KTtcblxuICAgIHRoaXMudHJhdmVyc2VGb3JtKHJlZkZvcm0sIGZ1bmN0aW9uKHJlZkJyYW5jaCkge1xuXG4gICAgICBpZihyZWZCcmFuY2gudHlwZSA9PT0gJ3JlRW50cnknKSB7XG4gICAgICAgIHRoaXMudHJhdmVyc2VGb3JtKHRhcmdldEZvcm0sIGZ1bmN0aW9uKHRhcmdldEJyYW5jaCkge1xuXG4gICAgICAgICAgaWYoIChKU09OLnN0cmluZ2lmeShyZWZCcmFuY2gpID09PSBKU09OLnN0cmluZ2lmeSh0YXJnZXRCcmFuY2gpKSAmJiBcbiAgICAgICAgICAgICAgKHJlZkJyYW5jaC5ydW5uaW5nSW5kZXggPT09ICh0YXJnZXRCcmFuY2guaGFzT3duUHJvcGVydHkoJ3J1bm5pbmdJbmRleCcpID8gdGFyZ2V0QnJhbmNoLnJ1bm5pbmdJbmRleCA6IG51bGwpKSApIHtcbiAgICAgICAgICAgIHRhcmdldEJyYW5jaCA9IHRoaXMuY29uc3RydWN0TmVzdGVkKHRhcmdldEJyYW5jaCwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gZGVsZXRlIHJ1bm5pbmcgaW5kZXggcHJvcGVydHlcbiAgICB0aGlzLnRyYXZlcnNlRm9ybSh0YXJnZXRGb3JtLCBmdW5jdGlvbihicmFuY2gpIHsgZGVsZXRlIGJyYW5jaC5ydW5uaW5nSW5kZXg7IH0pO1xuXG4gICAgcmV0dXJuIHRhcmdldEZvcm07XG4gIH1cblxuXG59IiwiaW1wb3J0IGNhbGMgZnJvbSAnLi9jb3JlL2ZjYWxjJztcbmltcG9ydCBmb3JtIGZyb20gJy4vY29yZS9mZm9ybSc7XG5pbXBvcnQgZ3JhcGggZnJvbSAnLi9jb3JlL2ZncmFwaCc7XG5cbi8vIGV4cG9ydCB7ZGVmYXVsdCBhcyBjYWxjfSBmcm9tICcuL2NvcmUvZmNhbGMnO1xuLy8gZXhwb3J0IHtkZWZhdWx0IGFzIGZvcm19IGZyb20gJy4vY29yZS9mZm9ybSc7XG4vLyBleHBvcnQge2RlZmF1bHQgYXMgZ3JhcGh9IGZyb20gJy4vY29yZS9mZ3JhcGgnO1xuXG5leHBvcnQgZGVmYXVsdCB7IGNhbGMsIGZvcm0sIGdyYXBoIH07IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IGJveG1vZGVsRDMgZnJvbSAnYm94bW9kZWwtbGF5b3V0LWZvci1kMyc7XG5cbmltcG9ydCB7IHNhdmVTdmcsIHNhdmVJbWcsIHBhZCwgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcic7XG5pbXBvcnQgY2hhcnRGYWN0b3J5LCB7IGZpdENoYXJ0LCB0ZXh0U2l6ZSwgdGV4dFN1YnNjcmlwdCwgY2lyY2xlTGFiZWwgfSBmcm9tICcuLi8uLi9jb21tb24vZDMtaGVscGVyJztcblxuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vZDMtc3R5bGVzLmpzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEM0dyYXBoIHtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICAgICAgICAgICAgICAgICAgICBWaXN1YWxpemF0aW9uIFNldHVwXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNvbnN0cnVjdG9yKGdyYXBoVHlwZSwgZGF0YSwgb3B0cywgLi4uYXJncykge1xuICAgICAgICAvLyBjcmVhdGUgYmFzaWMgc3ZnLXN0cnVjdHVyZSBmcm9tIGNoYXJ0RmFjdG9yeSBhbmQgbWVyZ2Ugb3B0aW9ucyB3aXRoIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgY29uc3QgcHJvdG8gPSBjaGFydEZhY3RvcnkoIHsgXG4gICAgICAgICAgICAuLi57IG1hcmdpbjogeyBsZWZ0OiA1MCwgcmlnaHQ6IDUwLCB0b3A6IDUwLCBib3R0b206IDUwIH0sIFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHsgbGVmdDogMTAsIHJpZ2h0OiAxMCwgdG9wOiAxMCwgYm90dG9tOiAxMCB9LFxuICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IHsgbGVmdDogMCwgcmlnaHQ6IDAsIHRvcDogMCwgYm90dG9tOiAwIH0sXG4gICAgICAgICAgICAgICAgc3R5bGVDbGFzczogJ2Jhc2ljJyB9LFxuICAgICAgICAgICAgLi4ub3B0c1xuICAgICAgICB9ICk7XG5cbiAgICAgICAgLy8gbWVyZ2UgdGhpcyBncmFwaCB3aXRoIHRoZSBjaGFydCBzdHJ1Y3R1cmVcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwcm90byk7XG4gICAgICAgIC8vIGNhbGN1bGF0ZSBpbm5lciBkaW1lbnNpb25zIG9mIHRoZSBzdmctY2hhcnRcbiAgICAgICAgdGhpcy5pbm5lckhlaWdodCA9IHRoaXMuaGVpZ2h0IC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tIC0gdGhpcy5wYWRkaW5nLnRvcCAtIHRoaXMucGFkZGluZy5ib3R0b207XG4gICAgICAgIHRoaXMuaW5uZXJXaWR0aCA9IHRoaXMud2lkdGggLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQgLSB0aGlzLnBhZGRpbmcubGVmdCAtIHRoaXMucGFkZGluZy5yaWdodDtcblxuICAgICAgICAvLyBjYWxsIHRoZSBhcHByb3ByaWF0ZSBtZXRob2QgdG8gYnVpbGQgdGhlIGdyYXBoXG4gICAgICAgIHRoaXMuY29uc3RydWN0b3JbZ3JhcGhUeXBlXS5jYWxsKHRoaXMsIGRhdGEsIC4uLmFyZ3MpO1xuICAgIH1cblxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyAgICAgICAgICAgICAgICBEZXB0aCBUcmVlIHZpc3VhbGl6YXRpb25cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgc3RhdGljIHRyZWUoZGF0YSkge1xuICAgICAgICBjb25zdCBjaGFydCA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICAvLyBjcmVhdGUgYSBkMy1oaWVyYXJjaHkgZnJvbSBvdXIgZm9ybS1qc29uXG4gICAgICAgIGNvbnN0IHJvb3QgPSBkMy5oaWVyYXJjaHkoZGF0YSwgZCA9PiBkLnNwYWNlKTtcblxuICAgICAgICAvLyBzZXQgdXAgZGVzaWduIHZhcmlhYmxlc1xuICAgICAgICBjb25zdCBkZXNpZ24gPSBzdHlsZXMudHJlZVt0aGlzLnN0eWxlQ2xhc3NdO1xuICAgICAgICBjb25zdCBbbm9kZVNpemUsIG5vZGVTZXBdID0gW2Rlc2lnbi5ub2RlU2l6ZSwgZGVzaWduLm5vZGVTZXBhcmF0aW9uXTtcbiAgICAgICAgY29uc3QgW2ZvbnRTaXplLCBmb250XSA9IFtkZXNpZ24uZm9udC5zaXplLCBkZXNpZ24uZm9udC5mYW1pbHldO1xuXG4gICAgICAgIHRoaXMucGFkZGluZyA9IHsgbGVmdDogMTAsIHJpZ2h0OiAxMCwgdG9wOiAxMCwgYm90dG9tOiAxMCB9O1xuXG4gICAgICAgIHJvb3QuZHggPSBub2RlU2l6ZS53ICsgbm9kZVNlcC5oejtcbiAgICAgICAgcm9vdC5keSA9IHRoaXMud2lkdGggLyAocm9vdC5oZWlnaHQgKyAxKTtcblxuICAgICAgICAvLyBkZWZpbmUgdHJlZSBsYXlvdXRcbiAgICAgICAgY29uc3QgbGF5b3V0ID0gZDMudHJlZSgpXG4gICAgICAgICAgICAubm9kZVNpemUoW1xuICAgICAgICAgICAgICAgIHJvb3QuZHgsXG4gICAgICAgICAgICAgICAgcm9vdC5keVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIC5zZXBhcmF0aW9uKChhLGIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5wYXJlbnQgPT0gYi5wYXJlbnQgPyAxIDogMjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0cmVlID0gbGF5b3V0KHJvb3QpO1xuXG4gICAgICAgIC8vIGNvbXB1dGUgbWluL21heCB4LXZhbHVlc1xuICAgICAgICBsZXQgeDAgPSBJbmZpbml0eTtcbiAgICAgICAgbGV0IHgxID0gLXgwO1xuICAgICAgICB0cmVlLmVhY2goZCA9PiB7XG4gICAgICAgICAgICBpZiAoZC54ID4geDEpIHgxID0gZC54O1xuICAgICAgICAgICAgaWYgKGQueCA8IHgwKSB4MCA9IGQueDtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbXB1dGUgbmV3IGhlaWdodCBiYXNlZCBvbiB0aGUgZGlmZmVyZW5jZSBvZiBtaW4vbWF4IHgtdmFsdWVzIG9mIHRyZWUgbm9kZXMgKyB0d2ljZSB0aGUgcGFkZGluZ1xuICAgICAgICBjb25zdCByb290VW5tYXJrZWQgPSByb290LmRhdGEudW5tYXJrZWQ7XG4gICAgICAgIGNvbnN0IHRpY2twYWRkaW5nID0gbm9kZVNpemUuaCoxLjg7XG4gICAgICAgIGNvbnN0IGF4aXNIZWlnaHQgPSB0aWNrcGFkZGluZzsgLy8zMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAoeDEgLSB4MCkgKyB0aGlzLnBhZGRpbmcudG9wKjIgKyBub2RlU2l6ZS5oKzIgKyBheGlzSGVpZ2h0O1xuXG4gICAgICAgIC8vIHNldHVwIHN2ZyBjb250YWluZXJcbiAgICAgICAgdGhpcy5zdmdcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMud2lkdGgpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5oZWlnaHQpO1xuICAgICAgICBzdHlsZXMuY2xlYXJEZWZhdWx0cyh0aGlzLnN2Zyk7IC8vIGNsZWFyIGRlZmF1bHQgc3R5bGVzIGZvciBzdmcgZXhwb3J0XG5cbiAgICAgICAgLy8gc2V0dXAgYmFzaWMgY2hhcnQgc3RydWN0dXJlXG4gICAgICAgIGNoYXJ0XG4gICAgICAgICAgICAuY2xhc3NlZCgnZ3JhcGgtdHJlZScsIHRydWUpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0aGlzLnBhZGRpbmcubGVmdCArIG5vZGVTaXplLncvMiArIChyb290LmRhdGEudW5tYXJrZWQgPyAtcm9vdC5keSA6IDApfSwke3RoaXMucGFkZGluZy50b3AgLSB4MCArIG5vZGVTaXplLmgvMn0pYCk7XG4gICAgICAgIFxuICAgICAgICAvLyBhZGQgdmVydGljYWwgYXhpcyBsaW5lcyBmb3IgZGVwdGhcblxuICAgICAgICBjb25zdCByb290SGVpZ2h0cyA9IGQzLnJhbmdlKHJvb3QuaGVpZ2h0ICsgKHJvb3RVbm1hcmtlZCA/IDA6MSkpO1xuXG4gICAgICAgIHRoaXMuZGVwdGhTY2FsZSA9IGQzLnNjYWxlT3JkaW5hbCgpXG4gICAgICAgICAgICAuZG9tYWluKCByb290SGVpZ2h0cyApXG4gICAgICAgICAgICAucmFuZ2UoIHJvb3RIZWlnaHRzLm1hcChpID0+IChpKyhyb290VW5tYXJrZWQgPyAxOjApKSpyb290LmR5KSApO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGVwdGhBeGlzID0gZDMuYXhpc0JvdHRvbSgpXG4gICAgICAgICAgICAuc2NhbGUodGhpcy5kZXB0aFNjYWxlKVxuICAgICAgICAgICAgLnRpY2tTaXplSW5uZXIoLSh4MS14MCkpXG4gICAgICAgICAgICAudGlja1NpemVPdXRlcigwKVxuICAgICAgICAgICAgLnRpY2tQYWRkaW5nKHRpY2twYWRkaW5nKVxuICAgICAgICAgICAgLnRpY2tWYWx1ZXMoIHRoaXMuZGVwdGhTY2FsZS5kb21haW4oKS5tYXAoaSA9PiBcbiAgICAgICAgICAgICAgICAodGhpcy5kZXB0aFNjYWxlLmRvbWFpbigpLmxlbmd0aCA8IDE1KSA/ICdEZXB0aCAnK2kgOiBpXG4gICAgICAgICAgICApICk7XG5cbiAgICAgICAgY29uc3QgYXhpcyA9IGNoYXJ0LmFwcGVuZCgnZycpXG4gICAgICAgICAgICAuY2xhc3NlZCgnZGVwdGhBeGlzJywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsICR7eDF9KWApXG4gICAgICAgICAgICAuY2FsbChkZXB0aEF4aXMpO1xuICAgICAgICBheGlzLnNlbGVjdCgnLmRvbWFpbicpLnJlbW92ZSgpO1xuICAgICAgICBcblxuICAgICAgICAvLyBhZGQgZ3JvdXBzIGZvciBsaW5rcyBhbmQgbm9kZXNcblxuICAgICAgICBjb25zdCBsaW5rcyA9IGNoYXJ0LnNlbGVjdEFsbCgnLmxpbmsnKVxuICAgICAgICAgICAgLmRhdGEodHJlZS5saW5rcygpKSBcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoJ2xpbmsnLCB0cnVlKVxuXG4gICAgICAgIGNvbnN0IG5vZGVzID0gY2hhcnQuc2VsZWN0QWxsKCcubm9kZScpXG4gICAgICAgICAgICAuZGF0YSh0cmVlLmRlc2NlbmRhbnRzKCkpXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdub2RlJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC55fSwke2QueH0pYCk7XG5cbiAgICAgICAgaWYgKHJvb3RVbm1hcmtlZCkge1xuICAgICAgICAgICAgbGlua3MuZmlsdGVyKGQgPT4gZC5zb3VyY2UuZGVwdGggPT09IDApXG4gICAgICAgICAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBub2Rlcy5maWx0ZXIoZCA9PiBkLmRlcHRoID09PSAwKVxuICAgICAgICAgICAgICAgIC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdlbmVyYXRlIGxpbmsgcGFydGl0aW9uIHNlbGVjdGlvbnNcbiAgICAgICAgY29uc3QgbGlua1BhcnRpdGlvbnMgPSByZXNvbHZlTGlua3ModHJlZSwgbGlua3MpO1xuICAgICAgICBjb25zdCBbcmVDaGlsZExpbmssIHJlUG9pbnRMaW5rXSA9IGxpbmtQYXJ0aXRpb25zO1xuXG4gICAgICAgIC8vIGdlbmVyYXRlIG5vZGUgcGFydGl0aW9uIHNlbGVjdGlvbnNcbiAgICAgICAgY29uc3Qgbm9kZVBhcnRpdGlvbnMgPSByZXNvbHZlTm9kZXModHJlZSwgbm9kZXMpO1xuICAgICAgICBjb25zdCBbbGVhdmVzLCBzZXRzLCBmb3JtcywgcmVFbnRyaWVzLCByZUNoaWxkcywgcmVQb2ludHMsIGVsZW1lbnRzLCB2YXJzLCBjb25zdHMsIHVuY2xlYXJdID0gbm9kZVBhcnRpdGlvbnM7XG5cbiAgICAgICAgLy8gY3VydmVkIGxpbmUgZ2VuZXJhdG9yXG4gICAgICAgIGNvbnN0IGxpbmUgPSBkMy5saW5lKCkuY3VydmUoZDMuY3VydmVCYXNpcyk7XG5cbiAgICAgICAgbGlua3NcbiAgICAgICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkJywgZDMubGlua0hvcml6b250YWwoKVxuICAgICAgICAgICAgICAgICAgICAueChkID0+IGQueSlcbiAgICAgICAgICAgICAgICAgICAgLnkoZCA9PiBkLngpKTtcblxuICAgICAgICBub2Rlcy5maWx0ZXIoZCA9PiAhZC5kYXRhLnVubWFya2VkKVxuICAgICAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgICAgIC5hdHRyKCdyJywgbm9kZVNpemUudy8yKVxuICAgICAgICByZVBvaW50cy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCBub2RlU2l6ZS53LzIgKyAyKVxuICAgICAgICAgICAgLnRleHQoZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHAgPSBkLnBhcmVudDtcbiAgICAgICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUocC5kYXRhLnR5cGUgIT09ICdyZUVudHJ5Jykge1xuICAgICAgICAgICAgICAgICAgICBwID0gcC5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudGVyID4gMTAwMCkgcmV0dXJuIG51bGw7IC8vIHNlY3VyaXR5XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIChwLmRhdGEucmVFdmVuICE9PSAndW5kZWZpbmVkJykgPyAocC5kYXRhLnJlRXZlbiA/ICcyfHJ8JyA6ICcyfHJ8KzEnKSA6ICcnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZWxlbWVudHMuc2VsZWN0QWxsKCdjaXJjbGUnKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCAobm9kZVNpemUudy8yKS8yKTtcblxuICAgICAgICBub2Rlc1xuICAgICAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneCcsIG5vZGVTaXplLncvMiArIDIpXG4gICAgICAgIFxuICAgICAgICB2YXJzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgICAgICAuY2FsbCh0ZXh0U3Vic2NyaXB0KGQgPT4gZC5kYXRhLnN5bWJvbCkpO1xuICAgICAgICBjb25zdHMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gYD0gJHtkLmRhdGEudmFsdWV9YCk7XG4gICAgICAgIHVuY2xlYXIuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gYC8ke2QuZGF0YS5zeW1ib2x9L2ApO1xuXG4gICAgICAgIHNldHMuZmlsdGVyKGQgPT4gZC5jaGlsZHJlbilcbiAgICAgICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgICAgICAuY2xhc3NlZCgnaW5uZXInLHRydWUpXG4gICAgICAgICAgICAuYXR0cigncicsIChub2RlU2l6ZS53LzIpLzIpO1xuXG5cbiAgICAgICAgLy8gYXBwbHkgYWxsIHN0eWxlLXJlbGF0ZWQgYXR0cmlidXRlcyB0byB0aGUgc2VsZWN0aW9uc1xuICAgICAgICBkZXNpZ24uYXBwbHlBeGlzU3R5bGVzKGF4aXMpO1xuICAgICAgICBkZXNpZ24uYXBwbHlMaW5rU3R5bGVzKGxpbmtzLCBsaW5rUGFydGl0aW9ucyk7XG4gICAgICAgIGRlc2lnbi5hcHBseU5vZGVTdHlsZXMobm9kZXMsIG5vZGVQYXJ0aXRpb25zKTtcblxuICAgICAgICBmaXRDaGFydChjaGFydCwgdGhpcy5wYWRkaW5nKTtcblxuICAgICAgICAvLyBkZWJ1Z2dpbmc6XG4gICAgICAgIC8vIFt0aGlzLnJvb3QsIHRoaXMubGF5b3V0LCB0aGlzLmNoYXJ0LCB0aGlzLnRyZWUsIHRoaXMuZGVzaWduXSA9IFxuICAgICAgICAvLyAgICAgW3Jvb3QsIGxheW91dCwgY2hhcnQsIHRyZWUsIGRlc2lnbl07XG4gICAgfVxuXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vICAgICAgICAgICAgICAgIENpcmNsZSBwYWNraW5nIHZpc3VhbGl6YXRpb25cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgc3RhdGljIHBhY2soZGF0YSkge1xuICAgICAgICBjb25zdCBjaGFydCA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICAvLyBjcmVhdGUgYSBkMy1oaWVyYXJjaHkgZnJvbSBvdXIgZm9ybS1qc29uXG4gICAgICAgIHN0eWxlcy5jbGVhckRlZmF1bHRzKHRoaXMuc3ZnKTsgLy8gY2xlYXIgZGVmYXVsdCBzdHlsZXMgZm9yIHN2ZyBleHBvcnRcblxuICAgICAgICBjb25zdCByb290ID0gZDMuaGllcmFyY2h5KGRhdGEsIGQgPT4gZC5zcGFjZSlcbiAgICAgICAgICAgIC5zdW0oZCA9PiBkLmNoaWxkcmVuID8gMCA6IDEpO1xuXG4gICAgICAgIC8vIHNldCB1cCBkZXNpZ24gdmFyaWFibGVzXG4gICAgICAgIGNvbnN0IGRlc2lnbiA9IHN0eWxlcy5wYWNrW3RoaXMuc3R5bGVDbGFzc107XG4gICAgICAgIGNvbnN0IFtyYWRpdXMsIHBhZGRpbmddID0gW2Rlc2lnbi5yYWRpdXMsIGRlc2lnbi5wYWRkaW5nXTtcbiAgICAgICAgY29uc3QgW2ZvbnRTaXplLCBmb250XSA9IFtkZXNpZ24uZm9udC5zaXplLCBkZXNpZ24uZm9udC5mYW1pbHldO1xuXG4gICAgICAgIC8vIGRlZmluZSBwYWNrIGxheW91dFxuICAgICAgICBjb25zdCBsYXlvdXQgPSBkMy5wYWNrKClcbiAgICAgICAgLnBhZGRpbmcoZCA9PiB7XG4gICAgICAgICAgICBsZXQgcGFkID0gcGFkZGluZztcbiAgICAgICAgICAgIGlmIChkLmRhdGEudHlwZSA9PT0gJ2Zvcm0nICYmIGQuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGQuY2hpbGRyZW5bMF0uZGF0YS50eXBlID09PSAnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgIHBhZCA9IHBhZCAqIDAuNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkLmRhdGEudW5tYXJrZWQgJiYgZC5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHBhZCA9IDA7XG4gICAgICAgICAgICByZXR1cm4gcGFkO1xuICAgICAgICB9KVxuICAgICAgICAucmFkaXVzKGQgPT4ge1xuICAgICAgICAgICAgbGV0IHJhZCA9IHJhZGl1cztcbiAgICAgICAgICAgIGlmKHR5cGVvZihkLmRhdGEuc3ltYm9sKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByYWQgPSB0ZXh0U2l6ZShkLmRhdGEuc3ltYm9sLCBmb250U2l6ZSwgZm9udCkud2lkdGggLzI7XG4gICAgICAgICAgICAgICAgaWYoZC5kYXRhLnR5cGUgPT09ICd1bmNsZWFyJykgcmFkICs9IHBhZGRpbmcqMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZC5kYXRhLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmFkID0gdGV4dFNpemUoZC5kYXRhLnZhbHVlKycnLCBmb250U2l6ZSwgZm9udCkud2lkdGggLzI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGQuZGF0YS5jaGlsZHJlbiB8fCBkLmRhdGEudHlwZSA9PT0gJ3JlRW50cnlQb2ludCcgfHzCoGQuZGF0YS50eXBlID09PSAnc3BhY2UnKSByYWQgPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHJhZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHBhY2sgPSBsYXlvdXQocm9vdCk7XG5cbiAgICAgICAgLy8gc2V0dXAgYmFzaWMgY2hhcnQgc3RydWN0dXJlXG4gICAgICAgIGNoYXJ0LmF0dHIoJ2NsYXNzJywgJ2dyYXBoLXBhY2snKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtwYWNrLnIgKyB0aGlzLnBhZGRpbmcubGVmdH0sJHtwYWNrLnIgKyB0aGlzLnBhZGRpbmcudG9wfSlgKTtcblxuICAgICAgICBjb25zdCBub2RlcyA9IGNoYXJ0LnNlbGVjdEFsbCgnLm5vZGUnKVxuICAgICAgICAgICAgLmRhdGEocGFjay5kZXNjZW5kYW50cygpKVxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnbm9kZScsIHRydWUpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueH0sJHtkLnl9KWApO1xuXG4gICAgICAgIC8vIGdlbmVyYXRlIG5vZGUgcGFydGl0aW9uIHNlbGVjdGlvbnNcbiAgICAgICAgY29uc3Qgbm9kZVBhcnRpdGlvbnMgPSByZXNvbHZlTm9kZXMocGFjaywgbm9kZXMpO1xuICAgICAgICBjb25zdCBbbGVhdmVzLCBzZXRzLCBmb3JtcywgcmVFbnRyaWVzLCByZUNoaWxkcywgcmVQb2ludHMsIGVsZW1lbnRzLCB2YXJzLCBjb25zdHMsIHVuY2xlYXJdID0gbm9kZVBhcnRpdGlvbnM7XG5cbiAgICAgICAgLy8gZGVmaW5lIGRldGFpbGxlZCBzdHJ1Y3R1cmUvbG9naWNcblxuICAgICAgICBzZXRzLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgICAgIC5hdHRyKCdyJywgZCA9PiBkLnIpO1xuICAgICAgICB2YXJzLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuY2FsbCh0ZXh0U3Vic2NyaXB0KGQgPT4gZC5kYXRhLnN5bWJvbCkpO1xuXG4gICAgICAgIGNvbnN0cy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBkLmRhdGEudmFsdWUpO1xuXG4gICAgICAgIHVuY2xlYXIuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IFxuICAgICAgICAgICAgYHNrZXdYKC0zMCkgdHJhbnNsYXRlKCR7LShkLnIgLSBwYWRkaW5nKX0sXG4gICAgICAgICAgICAkey0odGV4dFNpemUoJ3gnLGZvbnRTaXplLCBmb250KS5oZWlnaHQgKyBwYWRkaW5nKjIpLzJ9KWApXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBkID0+IGQucioyIC0gcGFkZGluZyoyKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGQgPT4gKHRleHRTaXplKCd4Jyxmb250U2l6ZSwgZm9udCkuaGVpZ2h0ICsgcGFkZGluZyoyKSlcbiAgICAgICAgdW5jbGVhci5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmNhbGwodGV4dFN1YnNjcmlwdChkID0+IGQuZGF0YS5zeW1ib2wpKTtcblxuICAgICAgICByZVBvaW50c1xuICAgICAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgICAgIC5hdHRyKCdyJywgMS41KTtcblxuICAgICAgICByZUVudHJpZXMuZmlsdGVyKGQgPT4gZC5kYXRhLnJlRXZlbiAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAuY2FsbChjaXJjbGVMYWJlbCggZCA9PiBkLmRhdGEucmVFdmVuID8gJzJ8cnwnIDogJzJ8cnwrMScsIGRlc2lnbi5mb250Q29udGV4dC5zaXplLCBkZXNpZ24uZm9udENvbnRleHQuZmFtaWx5ICkpO1xuXG4gICAgICAgIC8vIGFwcGx5IGFsbCBzdHlsZS1yZWxhdGVkIGF0dHJpYnV0ZXMgdG8gdGhlIHNlbGVjdGlvbnNcbiAgICAgICAgZGVzaWduLmFwcGx5Tm9kZVN0eWxlcyhub2Rlcywgbm9kZVBhcnRpdGlvbnMsIGNoYXJ0KTtcblxuICAgICAgICBmaXRDaGFydChjaGFydCwgdGhpcy5wYWRkaW5nKTtcblxuICAgICAgICAvLyBkZWJ1Z2dpbmc6XG4gICAgICAgIC8vIFt0aGlzLnJvb3QsIHRoaXMubGF5b3V0LCB0aGlzLmNoYXJ0LCB0aGlzLnBhY2ssIHRoaXMuZGVzaWduXSA9IFxuICAgICAgICAvLyAgICAgW3Jvb3QsIGxheW91dCwgY2hhcnQsIHBhY2ssIGRlc2lnbl07XG4gICAgfVxuXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIEJveG1vZGVsIHZpc3VhbGl6YXRpb24gKFNwZW5jZXItQnJvd24gaG9vayBub3RhdGlvbilcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgc3RhdGljIGdzYmhvb2tzKGRhdGEpIHtcbiAgICAgICAgY29uc3QgY2hhcnQgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgLy8gY3JlYXRlIGEgZDMtaGllcmFyY2h5IGZyb20gb3VyIGZvcm0tanNvblxuICAgICAgICBzdHlsZXMuY2xlYXJEZWZhdWx0cyh0aGlzLnN2Zyk7IC8vIGNsZWFyIGRlZmF1bHQgc3R5bGVzIGZvciBzdmcgZXhwb3J0XG5cbiAgICAgICAgY29uc3Qgcm9vdCA9IGQzLmhpZXJhcmNoeShkYXRhLCBkID0+IGQuc3BhY2UpXG4gICAgICAgICAgICAuc3VtKGQgPT4gZC5zcGFjZSA/IDAgOiAxKTtcblxuICAgICAgICB0aGlzLnN0eWxlQ2xhc3MgPSAnYmFzaWMnO1xuICAgICAgICBjb25zdCBjb21wYWN0UmVFbnRyeSA9ICh0aGlzLmNvbXBhY3RDaGVja2VkICE9PSBudWxsKSA/IHRoaXMuY29tcGFjdENoZWNrZWQgOiB0cnVlO1xuXG4gICAgICAgIC8vIHNldCB1cCBkZXNpZ24gdmFyaWFibGVzXG4gICAgICAgIGNvbnN0IGRlc2lnbiA9IHN0eWxlcy5ib3htb2RlbFt0aGlzLnN0eWxlQ2xhc3NdO1xuICAgICAgICBjb25zdCB7ZWxlbU1hcmdpbiwgZm9ybU1hcmdpbiwgZm9ybVBhZGRpbmcsIG1pbkZvcm1TaXplLCBtYXhMaW5lV2lkdGgsIGZvbnRWYXIsIGZvbnRDb25zdCwgZm9udENvbnRleHQsIGxhYmVsc30gPSB7Li4uZGVzaWdufTtcbiAgICAgICAgY29uc3QgdW5jbGVhclBhZCA9IHtoejogZWxlbU1hcmdpbi5oei8yLCB2dDogZWxlbU1hcmdpbi52dH07XG5cbiAgICAgICAgLy8gZGVmaW5lIGJveG1vZGVsIGxheW91dFxuICAgICAgICBjb25zdCBsYXlvdXQgPSBib3htb2RlbEQzKClcbiAgICAgICAgICAgIC52QWxpZ24oJ2JvdHRvbScpXG4gICAgICAgICAgICAuZWRnZU1hcmdpbnMoZCA9PiAhKGlzQ29udGFpbmVyKGQpICYmICFkLnBhcmVudC5wYXJlbnQgJiYgZC5wYXJlbnQuZGF0YS51bm1hcmtlZCkgKVxuICAgICAgICAgICAgLmlzQ29udGFpbmVyKGQgPT4gaXNDb250YWluZXIoZCkpXG4gICAgICAgICAgICAucGFkZGluZyhkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcCA9IHtsZWZ0OiAwLCByaWdodDogMCwgdG9wOiAwLCBib3R0b206IDB9O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChpc0NvbnRhaW5lcihkKSkge1xuICAgICAgICAgICAgICAgICAgICBwLmxlZnQgPSBwLnJpZ2h0ID0gZm9ybVBhZGRpbmcuaHo7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkLmRhdGEudHlwZSA9PT0gJ3JlRW50cnknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gZC5kYXRhLnJlRXZlbiA/IGxhYmVscy5yZUV2ZW4gOiBsYWJlbHMucmVPZGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eHRTeiA9IHRleHRTaXplKHRleHQsIGZvbnRDb250ZXh0LnNpemUsIGZvbnRDb250ZXh0LmZhbWlseSwgZm9udENvbnRleHQuc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcC5ib3R0b20gPSB0eHRTei5oZWlnaHQgKyBlbGVtTWFyZ2luLnZ0LzI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXJnaW4oZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG0gPSB7bGVmdDogMCwgcmlnaHQ6IDAsIHRvcDogMCwgYm90dG9tOiAwfTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoaXNDb250YWluZXIoZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbS50b3AgPSBmb3JtTWFyZ2luLnRvcDtcbiAgICAgICAgICAgICAgICAgICAgbS5yaWdodCA9IGZvcm1NYXJnaW4ucmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkLmRlcHRoID09PSAwKSBtLnRvcCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkLmRhdGEucmVDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQucGFyZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkgbS5yaWdodCA9IG1pbkZvcm1TaXplLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQucGFyZW50LmRhdGEubGFzdE9wZW4pIG0udG9wID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wYWN0UmVFbnRyeSAmJiBkLnBhcmVudC5kYXRhLnJlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShkLmNoaWxkcmVuWzBdLmRhdGEudHlwZSA9PT0gJ3JlRW50cnlQb2ludCcgJiYgcmVQYXJlbnRMYXN0T3BlbihkKSkpIG0udG9wID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkLmRhdGEudHlwZSAhPT0gJ3JlRW50cnlQb2ludCcpIHsgLy8gYWxsIG90aGVyIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIG0udG9wID0gbS5ib3R0b20gPSBlbGVtTWFyZ2luLnZ0O1xuICAgICAgICAgICAgICAgICAgICBtLmxlZnQgPSBtLnJpZ2h0ID0gZWxlbU1hcmdpbi5oejtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvbnRWYXIuc3R5bGUgPT0gJ2l0YWxpYycpIG0ucmlnaHQgKz0gMTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZC5kYXRhLnR5cGUgPT09ICd1bmNsZWFyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbS5ib3R0b20gPSAoZC5kYXRhLnN5bWJvbC5zcGxpdCgnXycpLmxlbmd0aCA+IDEpID8gLTYgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbS5ib3R0b20gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGQuZGF0YS50eXBlID09PSAncmVFbnRyeVBvaW50Jykge1xuICAgICAgICAgICAgICAgICAgICBtLnJpZ2h0ID0gZm9ybU1hcmdpbi5yaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zcGFuSGVpZ2h0KGQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzcGFuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBhY3RSZUVudHJ5ICYmIGQuZGF0YS5yZUNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc3BhbjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1pbkNvbnRhaW5lclNpemUoZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHcgPSBtaW5Gb3JtU2l6ZS53aWR0aDtcbiAgICAgICAgICAgICAgICBsZXQgaCA9IG1pbkZvcm1TaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICBpZiAoZC5kYXRhLnJlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQuY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIGQuY2hpbGRyZW5bMF0uZGF0YS50eXBlID09PSAncmVFbnRyeVBvaW50Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVQYXJlbnRMYXN0T3BlbihkKSkgdyA9IG1pbkZvcm1TaXplLndpZHRoLzI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHt3aWR0aDogdywgaGVpZ2h0OiBofTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1heExpbmVXaWR0aChkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdyA9IG1heExpbmVXaWR0aDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdztcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm5vZGVTaXplKGQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB3ID0gMCwgaCA9IDA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGlzVGV4dChkKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdHh0U3ogPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZC5kYXRhLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndmFyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dFN6ID0gdGV4dFNpemUoZC5kYXRhLnN5bWJvbCwgZm9udFZhci5zaXplLCBmb250VmFyLmZhbWlseSwgZm9udFZhci5zdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ID0gdHh0U3oud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoID0gdHh0U3ouaGVpZ2h0ICogMC43O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3VuY2xlYXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0U3ogPSB0ZXh0U2l6ZShkLmRhdGEuc3ltYm9sLCBmb250VmFyLnNpemUsIGZvbnRWYXIuZmFtaWx5LCAnbm9ybWFsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ID0gdHh0U3oud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoID0gdHh0U3ouaGVpZ2h0ICogMC43O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3ICs9IHNrZXdEaWZmKChoICsgdW5jbGVhclBhZC52dCoyKSkqMiArIHVuY2xlYXJQYWQuaHoqMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGggKz0gdW5jbGVhclBhZC52dCoyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NvbnN0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dFN6ID0gdGV4dFNpemUoZC5kYXRhLnZhbHVlLCBmb250Q29uc3Quc2l6ZSwgZm9udENvbnN0LmZhbWlseSwgZm9udENvbnN0LnN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHcgPSB0eHRTei53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSB0eHRTei5oZWlnaHQgKiAwLjc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge3dpZHRoOiB3LCBoZWlnaHQ6IGh9O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGJveG1vZGVsID0gbGF5b3V0KHJvb3QpO1xuXG4gICAgICAgIC8vIHNldHVwIGJhc2ljIGNoYXJ0IHN0cnVjdHVyZVxuICAgICAgICBjaGFydC5hdHRyKCdjbGFzcycsICdncmFwaC1ib3htb2RlbCcpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RoaXMucGFkZGluZy5sZWZ0fSwke3RoaXMucGFkZGluZy50b3B9KWApO1xuXG4vLyBjaGFydC5hdHRyKCd3aWR0aCcsJzEwMCUnKS5hdHRyKCdoZWlnaHQnLCcxMDAlJykuc3R5bGUoJ2ZpbGwnLCdyZ2JhKDI1NSwwLDAsLjIpJyk7XG5cbiAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGFydC5zZWxlY3RBbGwoJy5ub2RlJylcbiAgICAgICAgICAgIC5kYXRhKGJveG1vZGVsLmRlc2NlbmRhbnRzKCkpXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdub2RlJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54MH0sJHtkLnkwfSlgKTtcblxuICAgICAgICAvLyBnZW5lcmF0ZSBub2RlIHBhcnRpdGlvbiBzZWxlY3Rpb25zXG4gICAgICAgIGNvbnN0IG5vZGVQYXJ0aXRpb25zID0gcmVzb2x2ZU5vZGVzKGJveG1vZGVsLCBub2Rlcyk7XG4gICAgICAgIGNvbnN0IFtsZWF2ZXMsIHNldHMsIGZvcm1zLCByZUVudHJpZXMsIHJlQ2hpbGRzLCByZVBvaW50cywgZWxlbWVudHMsIHZhcnMsIGNvbnN0cywgdW5jbGVhcl0gPSBub2RlUGFydGl0aW9ucztcblxuICAgICAgICAvLyBkZWZpbmUgZGV0YWlsbGVkIHN0cnVjdHVyZS9sb2dpY1xuXG4gICAgICAgIGZvcm1zLmFwcGVuZCgncG9seWxpbmUnKSAvLy5maWx0ZXIoZCA9PiAhZC5kYXRhLnVubWFya2VkKS5hcHBlbmQoJ3BvbHlsaW5lJylcbiAgICAgICAgICAgIC5hdHRyKCdwb2ludHMnLCBkID0+IGAwLDAgJHtkLngxLWQueDB9LDAgJHtkLngxLWQueDB9LCR7ZC55MS1kLnkwfWApO1xuICAgICAgICByZUVudHJpZXMuYXBwZW5kKCdwb2x5bGluZScpXG4gICAgICAgICAgICAuYXR0cigncG9pbnRzJywgZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdyA9IGQueDEtZC54MDtcbiAgICAgICAgICAgICAgICBjb25zdCBoID0gZC55MS1kLnkwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlSCA9IG1pbkZvcm1TaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDAsMCAke3d9LDAgJHt3fSwke2h9IDAsJHtofSAwLCR7aC1yZUh9YDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGQgPT4gZC5kYXRhLmxhc3RPcGVuKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdwb2ludHMnLCBkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdyA9IGQueDEtZC54MDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaCA9IGQueTEtZC55MDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVIID0gbWluRm9ybVNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7d30sJHtoLXJlSH0gJHt3fSwke2h9IDAsJHtofSAwLCR7aC1yZUh9YDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgcmVFbnRyaWVzLmZpbHRlcihkID0+IGQuZGF0YS5yZUV2ZW4gIT09ICd1bmRlZmluZWQnKS5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2xhYmVsJywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoMCwke2QueTEtZC55MH0pYClcbiAgICAgICAgICAgIC5hdHRyKCd4JyxkID0+IDQgKVxuICAgICAgICAgICAgLmF0dHIoJ3knLGQgPT4gLTUgKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBkLmRhdGEucmVFdmVuID8gbGFiZWxzLnJlRXZlbiA6IGxhYmVscy5yZU9kZCk7XG5cbiAgICAgICAgY29uc3QgdW5jbFR4dFNpemUgPSBkID0+IHRleHRTaXplKGQuZGF0YS5zeW1ib2wsIGZvbnRWYXIuc2l6ZSwgZm9udFZhci5mYW1pbHksICdub3JtYWwnKTtcbiAgICAgICAgY29uc3QgdW5jbERpZmYgPSBkID0+IHNrZXdEaWZmKCAodW5jbFR4dFNpemUoZCkuaGVpZ2h0KjAuNyArIHVuY2xlYXJQYWQudnQqMikgKTtcblxuICAgICAgICB1bmNsZWFyLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAuY2xhc3NlZCgndW5jbGVhck1hcmsnLHRydWUpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgc2tld1goLTMwKSB0cmFuc2xhdGUoJHt1bmNsRGlmZihkKX0sJHswfSlgKVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgZCA9PiAoKGQueDEtZC54MCkgLSB1bmNsRGlmZihkKSApKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGQgPT4gKGQueTEtZC55MCkgKVxuICAgICAgICB1bmNsZWFyLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneCcsZCA9PiB1bmNsRGlmZihkKSArIHVuY2xlYXJQYWQuaHogKVxuICAgICAgICAgICAgLmF0dHIoJ3knLGQgPT4gKGQueTEtZC55MCkgLXVuY2xlYXJQYWQudnQgIC0gKChkLmRhdGEuc3ltYm9sLnNwbGl0KCdfJykubGVuZ3RoID4gMSkgPyA2IDogMCkgKVxuICAgICAgICAgICAgLmNhbGwodGV4dFN1YnNjcmlwdChkID0+IGQuZGF0YS5zeW1ib2wpKTtcbiAgICAgICAgICBcbiAgICAgICAgY29uc3RzLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneScsZCA9PiAoZC55MS1kLnkwKSApXG4gICAgICAgICAgICAudGV4dChkID0+IGQuZGF0YS52YWx1ZSk7XG4gICAgICAgIHZhcnMuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCd5JyxkID0+IChkLnkxLWQueTApIClcbiAgICAgICAgICAgIC5jYWxsKHRleHRTdWJzY3JpcHQoZCA9PiBkLmRhdGEuc3ltYm9sKSk7XG5cblxuICAgICAgICAvLyBhcHBseSBhbGwgc3R5bGUtcmVsYXRlZCBhdHRyaWJ1dGVzIHRvIHRoZSBzZWxlY3Rpb25zXG4gICAgICAgIGRlc2lnbi5hcHBseU5vZGVTdHlsZXMobm9kZXMsIG5vZGVQYXJ0aXRpb25zLCBjaGFydCk7XG5cbiAgICAgICAgZml0Q2hhcnQoY2hhcnQsIHRoaXMucGFkZGluZyk7XG5cbiAgICAgICAgLy8gZGVidWdnaW5nOlxuICAgICAgICAvLyBbdGhpcy5yb290LCB0aGlzLmxheW91dCwgdGhpcy5jaGFydCwgdGhpcy5ib3htb2RlbCwgdGhpcy5kZXNpZ25dID0gXG4gICAgICAgIC8vICAgICBbcm9vdCwgbGF5b3V0LCBjaGFydCwgYm94bW9kZWwsIGRlc2lnbl07XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcmNlKGRhdGEpIHtcblxuICAgIH1cblxufVxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBIZWxwZXIgZnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiByZXNvbHZlTm9kZXMocm9vdCwgbm9kZXMpIHtcbiAgLy8gcmVzb2x2ZXMgZGVzY2VuZGFudCBub2RlcyBpbnRvIGZpbHRlcmVkIHNlbGVjdGlvbnNcbiAgY29uc3QgbGVhdmVzID0gbm9kZXMuZmlsdGVyKGQgPT4gcm9vdC5sZWF2ZXMoKS5maWx0ZXIobCA9PiBsID09PSBkKS5wb3AoKSApXG4gICAgICAuY2xhc3NlZCgnbGVhZicsIHRydWUpO1xuXG4gIGNvbnN0IHNldHMgPSBub2Rlcy5maWx0ZXIoZCA9PiBkLmRhdGEudHlwZSA9PT0gJ2Zvcm0nIHx8wqBkLmRhdGEudHlwZSA9PT0gJ3JlRW50cnknKVxuICAgICAgLmNsYXNzZWQoJ2Zvcm0nLCB0cnVlKVxuICBjb25zdCBmb3JtcyA9IHNldHMuZmlsdGVyKGQgPT4gZC5kYXRhLnR5cGUgPT09ICdmb3JtJylcbiAgICAgIC5jbGFzc2VkKCdmb3JtJywgdHJ1ZSk7XG4gIGNvbnN0IHJlRW50cmllcyA9IHNldHMuZmlsdGVyKGQgPT4gZC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JylcbiAgICAgIC5jbGFzc2VkKCdyZUVudHJ5JywgdHJ1ZSk7XG5cbiAgY29uc3QgZWxlbWVudHMgPSBub2Rlcy5maWx0ZXIoZCA9PiAhKGQuZGF0YS50eXBlID09PSAnZm9ybScgfHzCoGQuZGF0YS50eXBlID09PSAncmVFbnRyeScpKVxuICAgICAgLmNsYXNzZWQoJ2VsZW1lbnQnLCB0cnVlKTtcbiAgY29uc3QgdmFycyA9IGVsZW1lbnRzLmZpbHRlcihkID0+IGQuZGF0YS50eXBlID09PSAndmFyJylcbiAgICAgIC5jbGFzc2VkKCd2YXInLCB0cnVlKTtcbiAgbGV0IGNvbnN0cyA9IGVsZW1lbnRzLmZpbHRlcihkID0+IGQuZGF0YS50eXBlID09PSAnY29uc3QnKVxuICAgICAgLmNsYXNzZWQoJ2NvbnN0JywgdHJ1ZSk7XG4gIGNvbnN0cy51bm1hcmtlZCA9IGVsZW1lbnRzLmZpbHRlcihkID0+IGQuZGF0YS52YWx1ZSA9PSAwKS5jbGFzc2VkKCd1bm1hcmtlZCcsIHRydWUpO1xuICBjb25zdHMubWFya2VkID0gZWxlbWVudHMuZmlsdGVyKGQgPT4gZC5kYXRhLnZhbHVlID09IDEpLmNsYXNzZWQoJ21hcmtlZCcsIHRydWUpO1xuICBjb25zdHMuaW5kZWYgPSBlbGVtZW50cy5maWx0ZXIoZCA9PiBkLmRhdGEudmFsdWUgPT0gMikuY2xhc3NlZCgnaW5kZWYnLCB0cnVlKTtcbiAgY29uc3RzLmltYWcgPSBlbGVtZW50cy5maWx0ZXIoZCA9PiBkLmRhdGEudmFsdWUgPT0gMykuY2xhc3NlZCgnaW1hZycsIHRydWUpO1xuXG4gIGNvbnN0IHVuY2xlYXIgPSBlbGVtZW50cy5maWx0ZXIoZCA9PiBkLmRhdGEudHlwZSA9PT0gJ3VuY2xlYXInKVxuICAgICAgLmNsYXNzZWQoJ3VuY2xlYXInLCB0cnVlKTtcblxuICBjb25zdCByZUNoaWxkcyA9IGZvcm1zLmZpbHRlcihkID0+IGQuZGF0YS5yZUNoaWxkKVxuICAgICAgLmNsYXNzZWQoJ3JlQ2hpbGQnLCB0cnVlKTtcblxuICBjb25zdCByZVBvaW50cyA9IGVsZW1lbnRzLmZpbHRlcihkID0+IGQuZGF0YS50eXBlID09PSAncmVFbnRyeVBvaW50JylcbiAgICAgIC5jbGFzc2VkKCdyZUVudHJ5UG9pbnQnLCB0cnVlKTtcblxuICByZXR1cm4gW2xlYXZlcywgc2V0cywgZm9ybXMsIHJlRW50cmllcywgcmVDaGlsZHMsIHJlUG9pbnRzLCBlbGVtZW50cywgdmFycywgY29uc3RzLCB1bmNsZWFyXTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUxpbmtzKHJvb3QsIGxpbmtzKSB7XG4gIC8vIHJlc29sdmVzIGxpbmtzIGJldHdlZW4gZGVzY2VuZGFudCBub2RlcyBpbnRvIGZpbHRlcmVkIHNlbGVjdGlvbnNcbiAgY29uc3QgcmVDaGlsZExpbmsgPSBsaW5rcy5maWx0ZXIoZCA9PiBkLnRhcmdldC5kYXRhLnJlQ2hpbGQpXG4gICAgICAuY2xhc3NlZCgncmVDaGlsZExpbmsnLCB0cnVlKTtcblxuICBjb25zdCByZVBvaW50TGluayA9IGxpbmtzLmZpbHRlcihkID0+IGQudGFyZ2V0LmRhdGEudHlwZSA9PT0gJ3JlRW50cnlQb2ludCcpXG4gICAgICAuY2xhc3NlZCgncmVQb2ludExpbmsnLCB0cnVlKTtcblxuICByZXR1cm4gW3JlQ2hpbGRMaW5rLCByZVBvaW50TGlua107XG59XG5cbmZ1bmN0aW9uIGlzVGV4dChub2RlKSB7IHJldHVybiBub2RlLmRhdGEudHlwZSA9PT0gJ3ZhcicgfHzCoG5vZGUuZGF0YS50eXBlID09PSAnY29uc3QnIHx8IG5vZGUuZGF0YS50eXBlID09PSAndW5jbGVhcic7IH1cblxuZnVuY3Rpb24gaXNDb250YWluZXIobm9kZSkgeyByZXR1cm4gbm9kZS5kYXRhLnR5cGUgPT09ICdmb3JtJyB8fMKgbm9kZS5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JzsgfVxuXG5mdW5jdGlvbiByZVBhcmVudExhc3RPcGVuKG5vZGUpIHtcbmxldCByZVBhcmVudCA9IG5vZGUuYW5jZXN0b3JzKCkuZmlsdGVyKGQgPT4gZC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5Jykuc2hpZnQoKTtcbnJldHVybiByZVBhcmVudC5kYXRhLmxhc3RPcGVuO1xufVxuXG5leHBvcnQgY29uc3Qgc2F2ZSA9IGZ1bmN0aW9uKGZvcm1hdCwgc3ZnLCBuYW1lKSB7XG4gICAgLy8gZXhwb3J0cyBncmFwaHMgaW50byBzdmdcbiAgICBcbiAgICBuYW1lID0gbmFtZSB8fMKgZDMuc2VsZWN0KHN2Zy5wYXJlbnROb2RlKS5hdHRyKCdpZCcpO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGdldFRpbWVzdGFtcCgpO1xuXG5cdHRyeSB7XG4gICAgc3dpdGNoKGZvcm1hdCkge1xuICAgICAgICBjYXNlICdzdmcnOlxuICAgICAgICAgICAgc2F2ZVN2ZyhzdmcsIHRpbWVzdGFtcCsnXycrbmFtZSsnLnN2ZycpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ltZyc6XG4gICAgICAgICAgICBzYXZlSW1nKHN2ZywgdGltZXN0YW1wKydfJytuYW1lKycucG5nJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cdH0gY2F0Y2goZSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNrZXdEaWZmKGhlaWdodCxkZWdyZWVzPTMwKSB7IHJldHVybiBNYXRoLnRhbigoZGVncmVlcyooTWF0aC5QSS8xODApKSkgKiBoZWlnaHQ7IH07IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IHsgZ2V0UmVhbERlcHRoLCBvcGFjaXR5LCBjaXJjbGVEYXNoQXJyYXkgfSBmcm9tICcuLi8uLi9jb21tb24vZDMtaGVscGVyJztcblxuLyogQ2FzY2FkaW5nIEQzLVN0eWxlcyAtIGJ5IFBldGVyIEhvZm1hbm4sIDEyLzIwMTggKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGdsb2JhbCBzdHlsZXNcblxuY29uc3QgZ2xvYmFsID0ge1xuICAgIGNvbW1vbjoge1xuICAgICAgICBmb250OiB7ZmFtaWx5OiAnc2Fucy1zZXJpZicsIHNpemU6ICcxNHB4Jywgc3R5bGU6ICdub3JtYWwnfSxcbiAgICAgICAgZm9udFZhcjoge2ZhbWlseTogJ3NhbnMtc2VyaWYnLCBzaXplOiAnMTRweCcsIHN0eWxlOiAnaXRhbGljJ30sXG4gICAgICAgIGZvbnRDb25zdDoge2ZhbWlseTogJ2NvdXJpZXIsIG1vbm9zcGFjZScsIHNpemU6ICcxNHB4Jywgc3R5bGU6ICdub3JtYWwnfSxcbiAgICAgICAgZm9udENvbnRleHQ6IHtmYW1pbHk6ICdzYW5zLXNlcmlmJywgc2l6ZTogJzEwcHgnLCBzdHlsZTogJ25vcm1hbCd9LFxuICAgICAgICBzdHJva2VXaWR0aDogMSxcbiAgICAgICAgbGFiZWxzOiB7cmVFdmVuOiAnMnxyfCcsIHJlT2RkOiAnMnxyfCsxJ30sXG4gICAgICAgIGNvbG9yOiB7YmFzZTogZDMuY29sb3IoJ2JsYWNrJyksXG4gICAgICAgICAgICAgICAgZ3JvdW5kOiBkMy5jb2xvcignd2hpdGUnKSxcbiAgICAgICAgICAgICAgICBpbmRlZjogZDMuY29sb3IoJ3JlZCcpLFxuICAgICAgICAgICAgICAgIGxpZ2h0OiBkMy5jb2xvcignI2RkZCcpLFxuICAgICAgICAgICAgfVxuICAgIH1cbn07XG5nbG9iYWwuYmFzaWMgPSB7XG4gICAgLi4uZ2xvYmFsLmNvbW1vbixcbiAgICBmb250OiB7IC4uLmdsb2JhbC5jb21tb24uZm9udCxcbiAgICAgICAgICAgIGZhbWlseTogJ2dlb3JnaWEsIHNlcmlmJ1xuICAgICAgICB9LFxuICAgIGZvbnRWYXI6IHsgLi4uZ2xvYmFsLmNvbW1vbi5mb250VmFyLFxuICAgICAgICAgICAgZmFtaWx5OiAnZ2VvcmdpYSwgc2VyaWYnLCBzdHlsZTogJ2l0YWxpYydcbiAgICAgICAgfSxcbiAgICBmb250Q29uc3Q6IHsgLi4uZ2xvYmFsLmNvbW1vbi5mb250Q29uc3QsXG4gICAgICAgIGZhbWlseTogJ2dlb3JnaWEsIHNlcmlmJ1xuICAgIH0sXG4gICAgZm9udENvbnRleHQ6IHsgLi4uZ2xvYmFsLmNvbW1vbi5mb250Q29udGV4dCxcbiAgICAgICAgICAgIGZhbWlseTogJ2NvdXJpZXIsIG1vbm9zcGFjZSdcbiAgICAgICAgfVxufTtcbmdsb2JhbC5nZXN0YWx0ID0ge1xuICAgIC4uLmdsb2JhbC5jb21tb24sXG4gICAgZm9udDogeyAuLi5nbG9iYWwuY29tbW9uLmZvbnQsXG4gICAgICAgICAgICBmYW1pbHk6ICdhcmlhbCwgc2Fucy1zZXJpZidcbiAgICAgICAgfSxcbiAgICBmb250VmFyOiB7IC4uLmdsb2JhbC5jb21tb24uZm9udFZhcixcbiAgICAgICAgICAgIGZhbWlseTogJ2FyaWFsLCBzYW5zLXNlcmlmJ1xuICAgICAgICB9LFxuICAgIGZvbnRDb25zdDogeyAuLi5nbG9iYWwuY29tbW9uLmZvbnRDb25zdCxcbiAgICAgICAgZmFtaWx5OiAnYXJpYWwsIHNhbnMtc2VyaWYnXG4gICAgfSxcbiAgICBmb250Q29udGV4dDogeyAuLi5nbG9iYWwuY29tbW9uLmZvbnRDb250ZXh0LFxuICAgICAgICAgICAgZmFtaWx5OiAnZ2VvcmdpYSwgc2VyaWYnXG4gICAgICAgIH0sXG4gICAgY29sb3I6IHsuLi5nbG9iYWwuY29tbW9uLmNvbG9yLFxuICAgICAgICAgICAgcG9zOiBkMy5jb2xvcignd2hpdGUnKSwgXG4gICAgICAgICAgICBuZWc6IGQzLmNvbG9yKCdibGFjaycpXG4gICAgICAgIH1cbn07XG5jb25zdCBbYmFzaWMsIGdlc3RhbHRdID0gW2dsb2JhbC5iYXNpYywgZ2xvYmFsLmdlc3RhbHRdO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJEZWZhdWx0cyhzdmcpIHtcbiAgICBzdmcuYXR0cignc3Ryb2tlJywnbm9uZScpLmF0dHIoJ2ZpbGwnLCdub25lJyk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkMy50cmVlIHN0eWxlczpcblxuZXhwb3J0IGNvbnN0IHRyZWUgPSB7XG4gICAgY29tbW9uOiB7XG4gICAgICAgIG5vZGVTaXplOiB7dzogMTAuMCwgaDogMTAuMH0sIC8vIHNpemUgb2Ygbm9kZXNcbiAgICAgICAgbm9kZVNlcGFyYXRpb246IHtoejogMjAsIHZ0OiA0MH0sIC8vIHNlcGFyYXRpb24gYmV0d2VlbiBub2Rlc1xuICAgICAgICBkYXNoZXM6IHtsaW5rOiAnNHB4IDZweCdcbiAgICAgICAgICAgIH0sXG4gICAgfVxufTtcblxudHJlZS5iYXNpYyA9IHtcbiAgICAuLi5iYXNpYyxcbiAgICAuLi50cmVlLmNvbW1vbixcbn07XG50cmVlLmJhc2ljLmFwcGx5QXhpc1N0eWxlcyA9IGZ1bmN0aW9uKGF4aXMpIHtcblxuICAgIGF4aXMuc2VsZWN0QWxsKCcudGljaycpLnNlbGVjdCgnbGluZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgdGhpcy5ub2RlU2l6ZS53KjEuNSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAncmdiYSgwLDAsMCwuMDUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJyk7XG4gICAgYXhpcy5zZWxlY3RBbGwoJy50aWNrJykuc2VsZWN0KCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRDb250ZXh0LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udENvbnRleHQuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRDb250ZXh0LmZhbWlseSlcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpXG4gICAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpO1xuXG59XG50cmVlLmJhc2ljLmFwcGx5Tm9kZVN0eWxlcyA9IGZ1bmN0aW9uKG5vZGVzLCBub2RlUGFydGl0aW9ucykge1xuICAgIGNvbnN0IFtsZWF2ZXMsIHNldHMsIGZvcm1zLCByZUVudHJpZXMsIHJlQ2hpbGRzLCByZVBvaW50cywgZWxlbWVudHMsIHZhcnMsIGNvbnN0cywgdW5jbGVhcl0gPSBub2RlUGFydGl0aW9ucztcblxuICAgIGZvcm1zLnNlbGVjdEFsbCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSlcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5ncm91bmQudG9TdHJpbmcoKSk7XG5cblxuICAgIGVsZW1lbnRzLnNlbGVjdEFsbCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpO1xuXG4gICAgcmVFbnRyaWVzLnNlbGVjdEFsbCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSlcbiAgICAgICAgLmZpbHRlcihkID0+IGQuZGF0YS5sYXN0T3BlbilcbiAgICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuZ3JvdW5kLnRvU3RyaW5nKCkpO1xuICAgIHJlQ2hpbGRzLnNlbGVjdEFsbCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLWRhc2hhcnJheScsIGQgPT4gY2lyY2xlRGFzaEFycmF5KGQuciwgMywgWzFdKSk7XG4gICAgcmVQb2ludHMuc2VsZWN0QWxsKCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpO1xuXG4gICAgbm9kZXMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnQuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250LmZhbWlseSlcbiAgICAgICAgLnN0eWxlKCdkb21pbmFudC1iYXNlbGluZScsJ21pZGRsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKVxuICAgIHZhcnMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRWYXIuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250VmFyLnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250VmFyLmZhbWlseSk7XG4gICAgY29uc3RzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250Q29uc3Quc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250Q29uc3Quc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRDb25zdC5mYW1pbHkpO1xuXG4gICAgc2V0cy5zZWxlY3RBbGwoJ2NpcmNsZS5pbm5lcicpXG4gICAgICAgIC8vIC5jbGFzc2VkKCdpbm5lcicpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSk7XG5cbn07XG50cmVlLmJhc2ljLmFwcGx5TGlua1N0eWxlcyA9IGZ1bmN0aW9uKGxpbmtzLCBsaW5rUGFydGl0aW9ucykge1xuICAgIGNvbnN0IFtyZUNoaWxkTGluaywgcmVQb2ludExpbmtdID0gbGlua1BhcnRpdGlvbnM7XG5cbiAgICBsaW5rcy5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKTtcblxuICAgIHJlQ2hpbGRMaW5rLnNlbGVjdEFsbCgncGF0aCcpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS1kYXNoYXJyYXknLCB0aGlzLmRhc2hlcy5saW5rKTtcblxuICAgIHJlUG9pbnRMaW5rLnNlbGVjdEFsbCgncGF0aCcpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS1kYXNoYXJyYXknLCB0aGlzLmRhc2hlcy5saW5rKTtcbn07XG5cbi8vIHRyZWUuZ2VzdGFsdCA9IHtcbi8vICAgICAuLi5nZXN0YWx0LFxuLy8gICAgIC4uLnRyZWUuY29tbW9uLFxuLy8gfTtcbi8vIHRyZWUuZ2VzdGFsdC5hcHBseUF4aXNTdHlsZXMgPSBmdW5jdGlvbihheGlzKSB7XG4vLyAgICAgdHJlZS5iYXNpYy5hcHBseUF4aXNTdHlsZXMoYXhpcyk7XG4vLyB9XG4vLyB0cmVlLmdlc3RhbHQuYXBwbHlOb2RlU3R5bGVzID0gZnVuY3Rpb24obm9kZXMsIG5vZGVQYXJ0aXRpb25zKSB7XG4vLyAgICAgY29uc3QgW2xlYXZlcywgc2V0cywgZm9ybXMsIHJlRW50cmllcywgcmVDaGlsZHMsIHJlUG9pbnRzLCBlbGVtZW50cywgdmFycywgY29uc3RzLCB1bmNsZWFyXSA9IG5vZGVQYXJ0aXRpb25zO1xuXG4vLyAgICAgdHJlZS5iYXNpYy5hcHBseU5vZGVTdHlsZXMobm9kZXMsIG5vZGVQYXJ0aXRpb25zKTtcbi8vIH07XG4vLyB0cmVlLmdlc3RhbHQuYXBwbHlMaW5rU3R5bGVzID0gZnVuY3Rpb24obGlua3MsIGxpbmtQYXJ0aXRpb25zKSB7XG4vLyAgICAgLy8gY29uc3QgW3JlQ2hpbGRMaW5rXSA9IGxpbmtQYXJ0aXRpb25zO1xuXG4vLyAgICAgdHJlZS5iYXNpYy5hcHBseUxpbmtTdHlsZXMobGlua3MsIGxpbmtQYXJ0aXRpb25zKTtcbi8vIH07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkMy5wYWNrIHN0eWxlczpcblxuZXhwb3J0IGNvbnN0IHBhY2sgPSB7XG4gICAgY29tbW9uOiB7XG4gICAgICAgIHJhZGl1czogMTQsXG4gICAgICAgIHBhZGRpbmc6IDE0LFxuICAgIH1cbn07XG5cbnBhY2suYmFzaWMgPSB7XG4gICAgLi4uYmFzaWMsXG4gICAgLi4ucGFjay5jb21tb24sXG59O1xucGFjay5iYXNpYy5hcHBseU5vZGVTdHlsZXMgPSBmdW5jdGlvbihub2Rlcywgbm9kZVBhcnRpdGlvbnMpIHtcbiAgICBjb25zdCBbbGVhdmVzLCBzZXRzLCBmb3JtcywgcmVFbnRyaWVzLCByZUNoaWxkcywgcmVQb2ludHMsIGVsZW1lbnRzLCB2YXJzLCBjb25zdHMsIHVuY2xlYXJdID0gbm9kZVBhcnRpdGlvbnM7XG5cbiAgICBmb3Jtcy5zZWxlY3QoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpXG4gICAgICAgIC5maWx0ZXIoZCA9PiBkLmRhdGEudW5tYXJrZWQpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZScsJ25vbmUnKTtcbiAgICByZUVudHJpZXMuc2VsZWN0KCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSlcbiAgICAgICAgLmZpbHRlcihkID0+IGQuZGF0YS5sYXN0T3BlbilcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLWRhc2hhcnJheScsIGQgPT4gY2lyY2xlRGFzaEFycmF5KGQuciwgMTQsIFsyLzUsIDMvNV0pICk7XG5cbiAgICBlbGVtZW50cy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnQuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnQuZmFtaWx5KVxuICAgICAgICAuc3R5bGUoJ2RvbWluYW50LWJhc2VsaW5lJywnbWlkZGxlJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSk7XG4gICAgdmFycy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udFZhci5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRWYXIuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRWYXIuZmFtaWx5KTtcbiAgICBjb25zdHMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRDb25zdC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRDb25zdC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udENvbnN0LmZhbWlseSk7XG5cbiAgICB1bmNsZWFyLnNlbGVjdCgncmVjdCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IubGlnaHQudG9TdHJpbmcoKSk7XG5cbiAgICByZVBvaW50cy5zZWxlY3QoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCdub25lJyk7XG5cbiAgICBjb25zdCByZUV2ZW5MYWJlbHMgPSByZUVudHJpZXMuc2VsZWN0KCcubGFiZWwnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udENvbnRleHQuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250Q29udGV4dC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udENvbnRleHQuZmFtaWx5KVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKTtcbn07XG5cbnBhY2suZ2VzdGFsdCA9IHtcbiAgICAuLi5nZXN0YWx0LFxuICAgIC4uLnBhY2suY29tbW9uLFxufTtcbnBhY2suZ2VzdGFsdC5pbnZlcnRGaWxsID0gZnVuY3Rpb24oZCkge1xuICAgIHJldHVybiBnZXRSZWFsRGVwdGgoZCklMiA/IHRoaXMuY29sb3IucG9zLnRvU3RyaW5nKCkgOiB0aGlzLmNvbG9yLm5lZy50b1N0cmluZygpO1xufTtcbnBhY2suZ2VzdGFsdC5hcHBseU5vZGVTdHlsZXMgPSBmdW5jdGlvbihub2Rlcywgbm9kZVBhcnRpdGlvbnMsIGNoYXJ0KSB7XG4gICAgY29uc3QgW2xlYXZlcywgc2V0cywgZm9ybXMsIHJlRW50cmllcywgcmVDaGlsZHMsIHJlUG9pbnRzLCBlbGVtZW50cywgdmFycywgY29uc3RzLCB1bmNsZWFyXSA9IG5vZGVQYXJ0aXRpb25zO1xuXG4gICAgY29uc3QgZGVmcyA9IGQzLnNlbGVjdChjaGFydC5ub2RlKCkucGFyZW50Tm9kZSlcbiAgICAgICAgLmFwcGVuZCgnZGVmcycpO1xuICAgIGNvbnN0IGdyYWRfMSA9IGRlZnMuYXBwZW5kKCdyYWRpYWxHcmFkaWVudCcpLmF0dHIoJ2lkJywgJ2dyYWQtaW5kZWYtb3V0aW4nKVxuICAgICAgICAuYXR0cignZngnLCcyMCUnKVxuICAgICAgICBncmFkXzEuYXBwZW5kKCdzdG9wJylcbiAgICAgICAgICAgIC5hdHRyKCdvZmZzZXQnLCc0MCUnKS5hdHRyKCdzdG9wLWNvbG9yJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpICkuYXR0cignc3RvcC1vcGFjaXR5JywgMC4zKTtcbiAgICAgICAgICAgIGdyYWRfMS5hcHBlbmQoJ3N0b3AnKVxuICAgICAgICAgICAgLmF0dHIoJ29mZnNldCcsJzkwJScpLmF0dHIoJ3N0b3AtY29sb3InLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkgKS5hdHRyKCdzdG9wLW9wYWNpdHknLCAwLjgpO1xuICAgICAgICBncmFkXzEuYXBwZW5kKCdzdG9wJylcbiAgICAgICAgICAgIC5hdHRyKCdvZmZzZXQnLCcxMDAlJykuYXR0cignc3RvcC1jb2xvcicsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSApLmF0dHIoJ3N0b3Atb3BhY2l0eScsIDEuMCk7XG4gICAgY29uc3QgZ3JhZF8yID0gZGVmcy5hcHBlbmQoJ3JhZGlhbEdyYWRpZW50JykuYXR0cignaWQnLCAnZ3JhZC1pbmRlZi1pbm91dCcpXG4gICAgICAgIC5hdHRyKCdmeCcsJzIwJScpXG4gICAgICAgIGdyYWRfMi5hcHBlbmQoJ3N0b3AnKVxuICAgICAgICAgICAgLmF0dHIoJ29mZnNldCcsJzEwJScpLmF0dHIoJ3N0b3AtY29sb3InLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkgKS5hdHRyKCdzdG9wLW9wYWNpdHknLCAxLjApO1xuICAgICAgICBncmFkXzIuYXBwZW5kKCdzdG9wJylcbiAgICAgICAgICAgIC5hdHRyKCdvZmZzZXQnLCc1MCUnKS5hdHRyKCdzdG9wLWNvbG9yJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpICkuYXR0cignc3RvcC1vcGFjaXR5JywgMC42KTtcbiAgICAgICAgZ3JhZF8yLmFwcGVuZCgnc3RvcCcpXG4gICAgICAgICAgICAuYXR0cignb2Zmc2V0JywnNjAlJykuYXR0cignc3RvcC1jb2xvcicsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSApLmF0dHIoJ3N0b3Atb3BhY2l0eScsIDAuNCk7XG4gICAgICAgIGdyYWRfMi5hcHBlbmQoJ3N0b3AnKVxuICAgICAgICAgICAgLmF0dHIoJ29mZnNldCcsJzEwMCUnKS5hdHRyKCdzdG9wLWNvbG9yJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpICkuYXR0cignc3RvcC1vcGFjaXR5JywgMC4wKTtcblxuICAgIGZvcm1zLnNlbGVjdCgnY2lyY2xlJykuZmlsdGVyKGQgPT4gIWQuZGF0YS51bm1hcmtlZClcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnbm9uZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gdGhpcy5pbnZlcnRGaWxsKGQpKTtcblxuICAgIHJlRW50cmllcy5zZWxlY3QoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZCA9PiAoZC5wYXJlbnQuZGF0YS50eXBlID09PSAncmVFbnRyeScpID8gdGhpcy5jb2xvci5wb3MudG9TdHJpbmcoKSA6ICdub25lJyApXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICd1cmwoI2dyYWQtaW5kZWYtb3V0aW4pJyk7XG5cbiAgICBjb25zdCBvcGVuUmVFbnRyaWVzID0gcmVFbnRyaWVzLnNlbGVjdCgnY2lyY2xlJykuZmlsdGVyKGQgPT4gZC5kYXRhLmxhc3RPcGVuKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAndXJsKCNncmFkLWluZGVmLWlub3V0KScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLWRhc2hhcnJheScsIGQgPT4gY2lyY2xlRGFzaEFycmF5KGQuciwgOCwgWzIvNSwgMy81XSkgKTtcblxuICAgIG9wZW5SZUVudHJpZXMuZmlsdGVyKGQgPT4gKChkLnBhcmVudC5kYXRhLnR5cGUgIT09ICdyZUVudHJ5JykgfHzCoCFnZXRSZWFsRGVwdGgoZCklMikgKSAvLyAgXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIGQgPT4gdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKTtcblxuICAgIG9wZW5SZUVudHJpZXMuZmlsdGVyKGQgPT4gKGQucGFyZW50LmRhdGEudHlwZSA9PT0gJ3JlRW50cnknKSAmJiAhZC5wYXJlbnQuZGF0YS5sYXN0T3BlbilcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZCA9PiB0aGlzLmNvbG9yLnBvcy50b1N0cmluZygpKTtcblxuICAgIGVsZW1lbnRzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udC5mYW1pbHkpXG4gICAgICAgIC5zdHlsZSgnZG9taW5hbnQtYmFzZWxpbmUnLCdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IHRoaXMuaW52ZXJ0RmlsbChkKSk7XG4gICAgdmFycy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udFZhci5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRWYXIuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRWYXIuZmFtaWx5KTtcbiAgICBjb25zdHMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRDb25zdC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRDb25zdC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udENvbnN0LmZhbWlseSk7XG5cbiAgICB1bmNsZWFyLnNlbGVjdCgncmVjdCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsdGhpcy5jb2xvci5saWdodC50b1N0cmluZygpKTtcbiAgICB1bmNsZWFyLnNlbGVjdCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpO1xuICAgICAgICBcbiAgICByZVBvaW50cy5zZWxlY3QoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsJ25vbmUnKVxuICAgICAgICAuZmlsdGVyKGQgPT4gZC5wYXJlbnQuZGF0YS50eXBlID09PSAncmVFbnRyeScpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IucG9zLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3NjYWxlKDEuNSknKTtcblxuICAgIGNvbnN0IHJlRXZlbkxhYmVscyA9IHJlRW50cmllcy5zZWxlY3QoJy5sYWJlbCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250Q29udGV4dC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRDb250ZXh0LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250Q29udGV4dC5mYW1pbHkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IChkLnBhcmVudC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JyAmJiAhZC5wYXJlbnQuZGF0YS5sYXN0T3BlbikgPyB0aGlzLmNvbG9yLnBvcy50b1N0cmluZygpIDogdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKTtcbiAgICByZUVudHJpZXMuc2VsZWN0KCcubGFiZWwuaW5zaWRlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiAoZC5wYXJlbnQuZGF0YS50eXBlICE9PSAncmVFbnRyeScgJiYgZC5kYXRhLmxhc3RPcGVuKSA/IHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSA6IHRoaXMuY29sb3IucG9zLnRvU3RyaW5nKCkpO1xuXG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gYm94bW9kZWxEMyBzdHlsZXM6XG5cbmV4cG9ydCBjb25zdCBib3htb2RlbCA9IHtcbiAgICBjb21tb246IHtcbiAgICAgICAgZWxlbU1hcmdpbjoge2h6OiAxMiwgdnQ6IDh9LCAvLyB2dDogOFxuICAgICAgICBmb3JtTWFyZ2luOiB7dG9wOiAxMCwgcmlnaHQ6IDEwfSxcbiAgICAgICAgZm9ybVBhZGRpbmc6IHtoejogMH0sXG4gICAgICAgIG1pbkZvcm1TaXplOiB7d2lkdGg6IDM0LCBoZWlnaHQ6IDM0fSxcbiAgICAgICAgbWF4TGluZVdpZHRoOiAxMDAwMCxcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDEuMVxuICAgIH1cbn07XG5cbmJveG1vZGVsLmJhc2ljID0ge1xuICAgIC4uLmJhc2ljLFxuICAgIC4uLmJveG1vZGVsLmNvbW1vblxuICAgIC8vIGZvbnQ6IHsuLi5iYXNpYy5mb250LCBzaXplOiAnMThweCd9XG59O1xuYm94bW9kZWwuYmFzaWMuYXBwbHlOb2RlU3R5bGVzID0gZnVuY3Rpb24obm9kZXMsIG5vZGVQYXJ0aXRpb25zKSB7XG4gICAgY29uc3QgW2xlYXZlcywgc2V0cywgZm9ybXMsIHJlRW50cmllcywgcmVDaGlsZHMsIHJlUG9pbnRzLCBlbGVtZW50cywgdmFycywgY29uc3RzLCB1bmNsZWFyXSA9IG5vZGVQYXJ0aXRpb25zO1xuXG4gICAgc2V0cy5zZWxlY3QoJ3BvbHlsaW5lJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIHRoaXMuc3Ryb2tlV2lkdGgpO1xuICAgIGZvcm1zLnNlbGVjdCgncG9seWxpbmUnKVxuICAgICAgICAuZmlsdGVyKGQgPT4gZC5kYXRhLnVubWFya2VkKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2UnLCdub25lJyk7XG4gICAgLy8gcmVFbnRyaWVzLnNlbGVjdCgncG9seWxpbmUnKVxuICAgIC8vICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSk7XG5cbiAgICBlbGVtZW50cy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnQuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnQuZmFtaWx5KVxuICAgICAgICAvLyAuc3R5bGUoJ2FsaWdubWVudC1iYXNlbGluZScsJ2Jhc2VsaW5lJykgPC0tIFwiYnVnXCIgaW4gU2FmYXJpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKTtcbiAgICB2YXJzLnNlbGVjdCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250VmFyLnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udFZhci5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udFZhci5mYW1pbHkpO1xuICAgIGNvbnN0cy5zZWxlY3QoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udENvbnN0LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udENvbnN0LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250Q29uc3QuZmFtaWx5KTtcbiAgICByZUVudHJpZXMuc2VsZWN0KCcubGFiZWwnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udENvbnRleHQuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250Q29udGV4dC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udENvbnRleHQuZmFtaWx5KVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpO1xuICAgICAgICAvLyAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpO1xuXG4gICAgdW5jbGVhci5zZWxlY3QoJy51bmNsZWFyTWFyaycpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IubGlnaHQudG9TdHJpbmcoKSk7XG5cbiAgICB1bmNsZWFyLnNlbGVjdCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250VmFyLnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsICdub3JtYWwnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250VmFyLmZhbWlseSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnbm9uZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2QzX187Il0sInNvdXJjZVJvb3QiOiIifQ==