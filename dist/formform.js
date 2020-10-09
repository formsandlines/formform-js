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
/*! exports provided: showAll, show, hideAll, hide, toggleAll, toggle, isVisible, pad, saveSvg, saveImg, flatten, include, traverse, escapeRegExp, map, arrayMoveItem, getTimestamp, scaleSVG, permuteArray, truncateStr, reverseMapping, VARCODE, VARCODE_REV */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permuteArray", function() { return permuteArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncateStr", function() { return truncateStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseMapping", function() { return reverseMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VARCODE", function() { return VARCODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VARCODE_REV", function() { return VARCODE_REV; });
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
    const prefixes = ['-ms-transform','-webkit-transform','-moz-transform','-o-transform','transform'];
    prefixes.forEach(prefix => {
        // svg.setAttribute(prefix, `scale(${ratio}) translate(0,0)`);
        svg.style[prefix] = `scale(${ratio}) translate(0,0)`;
    });
    container.style.width = parseInt(svg.getBBox().width * ratio) + 'px';
    container.style.height = parseInt(svg.getBBox().height * ratio) + 'px';
    // container.style.width = parseInt(svg.clientWidth*ratio) + 'px';
    // container.style.height = parseInt(svg.clientHeight*ratio) + 'px';

}

/*  --------------------------------------------------------
    Additions 01/2020 from:
    https://observablehq.com/@formsandlines/js-toolbox
*/

const permuteArray = inputArray => inputArray.reduce(function permute(res, item, key, arr) {
  /* Permutation algorithm for arrays of arbitrary length
     (credits & thanks to user monkey: https://stackoverflow.com/a/22063440) */
    return res.concat(arr.length > 1 && arr.slice(0, key)
      .concat(arr.slice(key + 1))
      .reduce(permute, [])
      .map(function(perm) { return [item].concat(perm); }) || [[item]]);
}, []);

const truncateStr = (str,limit,appendix='') => str.length > limit ? (str.substr(0,limit) + appendix) : str;

const reverseMapping = (o,bijective=false) => Object.keys(o).reduce((r, k) => Object.assign(r, { [o[k]]: (bijective ? k : (r[o[k]] || []).concat(k)) }), {}); // modified from answer by Nina Scholz: https://stackoverflow.com/a/45728850

/*  --------------------------------------------------------
    Additions 01/2020 from:
    https://observablehq.com/@formsandlines/formform-toolbox 
*/

const VARCODE = ({'a':'ᴬ', 'b':'ᴮ', 'c':'ᵓ', 'd':'ᴰ', 'e':'ᴱ', 'f':'ᵎ', 'g':'ᴳ', 'h':'ᴴ', 'i':'ᴵ', 'j':'ᴶ', 'k':'ᴷ', 'l':'ᴸ', 'm':'ᴹ', 'n':'ᴺ', 'o':'ᴼ', 'p':'ᴾ', 'q':'ᴽ', 'r':'ᴿ', 's':'ᵕ', 't':'ᵀ', 'u':'ᵁ', 'v':'ᵛ', 'w':'ᵂ', 'x':'ᵡ', 'y':'ᵞ', 'z':'ᵜ', 'alt':'ᵽ', '2r':'ᵳ', '2r+1':'ᵲ'});

const VARCODE_REV = reverseMapping(VARCODE,true);


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

/***/ "./src/lib/core/fdna.js":
/*!******************************!*\
  !*** ./src/lib/core/fdna.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FDna; });
/* harmony import */ var _fform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fform */ "./src/lib/core/fform.js");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/helper */ "./src/common/helper.js");



class FDna extends _fform__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /*
    =======================================================
      'dna' module for formform (c) 2019/20 Peter Hofmann
    =======================================================
    */
   
    constructor() {
    };

    static formToDNA (form) {
    	return Object.values(this.calcAll(form)).reverse().join('');
 	};

	static totalVarsFromDNA (formDNA) { 
		/* calculates variable number from formDNA */
		const n = Math.log( formDNA.toString(4).length )/Math.log(4); // log_4(formDNA length) = variable number
		return n % 1 === 0 ? n : undefined;
	};


	static vmap (input, varorder=undefined, options=undefined) {
	  /* Value ordering: left:0, right:1, up:3, down:2 */
	  if (!+input && varorder === undefined) varorder = this.matchDefaultVarOrder( this.getVariables(input) );

	  let formDNA = !!+input ? input : this.formToDNA(this.reOrderVars(input,varorder));
	  formDNA = formDNA.split('').reverse().join('');
	  const vnum = this.totalVarsFromDNA(formDNA);
	  
	  const {size, gapGrow, svgPad, strokeW, strokeC, bgC, hideInputLabel, hideOrderLabel, customLabel, fullInputLabel, inputLabelMax, filter} = 
	        {size: (vnum => { const n = Math.floor( 14 - (vnum-1)**1.0 ); // 12
	                          return n >= 2 ? n : 2; })(vnum), 
	         gapGrow: 1.5,
	         svgPad: `0`, strokeW: 0.5, strokeC: `#fff`, bgC: `none`, // #333
	         hideInputLabel: false, hideOrderLabel: false, fullInputLabel: false, inputLabelMax: 200, customLabel: undefined,
	         // filter: '1111', <- will add later
	         ...options};
	  
	  const margins = [strokeW, ...Array.from({length:vnum-1}, (_,i) => (i+1) * gapGrow)];
	  const gapSum = v => margins.slice(1,v).reverse().reduce((acc,curr,idx) => acc + (2**idx) * curr, 0);

	  const cell = {w:size, h:size};

	  const fx = (qi,n) =>  (qi%2) * (n !== undefined ? n : 0);         // xpos: 0123 -> 0101
	  const fy = (qi,n) => +(qi>0 && qi<3) * (n !== undefined ? n : 0); // ypos: 0123 -> 0110
	  
	  const constructMap = (dnaHolon, vcount, qi=0, mapSVG='') => {
	    const qtn = 4**vcount;
	    const len = Math.sqrt(qtn);
	    dnaHolon = dnaHolon.substr(qi*qtn, qtn); // quarter of the formDNA string

	    mapSVG += `<g transform="translate(${fx(qi, len*cell.w) + fx(qi, gapSum(vcount)) + fx(qi, margins[vcount])},
	${fy(qi, len*cell.h) + fy(qi, gapSum(vcount)) + fy(qi, margins[vcount])})">`;

	    for (let i=0; i<4; i++) {
	      if (vcount > 1) {
	        mapSVG = constructMap(dnaHolon, vcount-1, i, mapSVG);
	      }
	      else {
	        const val = dnaHolon.substr(i,1);

	        mapSVG += `<rect x=${fx(i,cell.w)} y=${fy(i,cell.h)} width=${cell.w} height=${cell.h} fill=${this.vColor(val)}></rect>`;
	      }
	    }
	    mapSVG += `</g>`;
	    return mapSVG;
	  }

	  const processLabel = label => {
	  	if (label.length > 1) {
	  		const labelParts = label.split('_');
	  		return (labelParts.length > 1) ? `${labelParts[0]}<sub>${labelParts[1]}</sub>` : `"${label}"`;
	  	}
	  	else return label;
	  }
	  
	  const caption = () => {
	    if (customLabel !== undefined) return `<figcaption style="word-wrap: break-word;">${customLabel}</figcaption>`;
	    if (!(hideInputLabel && hideOrderLabel)) {
	      let label = '';
	      label += hideOrderLabel || !!+input ? '' : `${varorder.reduce((acc,curr,i) => acc + (i > 0 ? ' > ' : '') + processLabel(curr),'' )}${hideInputLabel ? '' : '<br/>'}`;
	      label += hideInputLabel ? '' : !!+input ? `<code style="font-size:0.8em;">::${fullInputLabel ? input : Object(_common_helper__WEBPACK_IMPORTED_MODULE_1__["truncateStr"])(input,4**4,`…(${4**vnum})`)}</code>` : 'ƒ = '+(fullInputLabel ? input : Object(_common_helper__WEBPACK_IMPORTED_MODULE_1__["truncateStr"])(input,inputLabelMax,`… <i>+more</i>`));
	      return `<figcaption style="word-wrap: break-word;">${label}</figcaption>`;
	    }
	    return '';
	  }

	  const len = Math.sqrt(formDNA.length);
	  if (varorder === undefined && !+input) varorder = formform.form.getVariables(input);
	  
	  const bounds = {w: (cell.w*len + margins[0] + gapSum(vnum)), h: (cell.h*len + margins[0] + gapSum(vnum))};
	  const rhomb = {w: Math.sqrt(2 * bounds.w**2), h: Math.sqrt(2 * bounds.h**2)};
	  
	  return `<figure class="vmap" style="margin: 0;">
	<svg style="background: ${bgC}; padding: ${svgPad};" width=${cell.w*len + gapSum(vnum)} height=${cell.h*len + gapSum(vnum)}
	fill="white" stroke="${strokeC}" stroke-width="${margins[0]}"
	viewBox="-${margins[0]/2} -${margins[0]/2} ${rhomb.w} ${rhomb.h}">
	<g transform="translate(0,${rhomb.h/2}) rotate(-45,0,0)">${ constructMap(formDNA, vnum) }</g>
	</svg>
	${ caption() }
	</figure>`;
	};

	static vmapPerspectives (form, varList=undefined, options=undefined, margin=20) {
	  /* formDNA not yet supported (permutation algorithm required) */
	  if (varList === undefined) varList = this.matchDefaultVarOrder( this.getVariables(form) );

	  const vmapItems = Object(_common_helper__WEBPACK_IMPORTED_MODULE_1__["permuteArray"])(varList).map(varorder => {
	    return `<div class="vmap-item" style="padding: ${Math.floor(margin/4)}px ${Math.floor(margin/2)}px"> 
	      ${this.vmap(form,varorder,{hideInputLabel: true, ...options})}
	      </div>`}).reduce((str,item) => str+item,'');
	  return `<figure class="vmap-perspectives" style="max-width: none;">
	  <div class="vmap-list" style="display: flex; flex-wrap: wrap; margin: 0 -${Math.floor(margin/2)}px">
	  ${ vmapItems }
	  </div>
	  <figcaption style="border-top: 1px solid; padding-top: ${Math.floor(margin/4)}px; margin-top: ${Math.floor(margin/2)}px">ƒ = ${form}</figcaption>
	  </figure>`
	};

	static vmapList (inputList, margin=20, globalOptions=undefined) {
	  /* Generated a list of FORM vmaps */
	  // inputList format: [['form/dna', [varorder]/undefined, options/undefined], ...
	  const getVAlign = obj => {
	  	const alignItems = (!obj || !obj.vAlign) ? 'flex-end'
	  					 : obj.vAlign === 'top' ? 'flex-start'
	  				 	 : obj.vAlign === 'center' ? 'center'
	  				 	 : obj.vAlign === 'bottom' ? 'flex-end' : 'flex-end';
	  	return `align-items: ${alignItems};`;
	  }

	  return `<div class="vmap-list" style="display: flex; flex-wrap: wrap; ${getVAlign(globalOptions)} margin: 0 -${Math.floor(margin/2)}px">
	  ${ inputList.reduce((str,vmap) => 
	  		`${str}<div class="vmap-item" style="padding: ${Math.floor(margin/4)}px ${Math.floor(margin/2)}px">${ this.vmap(vmap[0], vmap[1], {...vmap[2], ...globalOptions}) }</div>`,'') }
	  </div>`
	};

	static vColor (val) {
		/* Value to color map for vmap */
	  return val == 0 ? '#000000'
	       : val == 1 ? '#4757ff'
	       : val == 2 ? '#ff0044'
	       : val == 3 ? '#00ff5f'
	       : NaN;
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
        /* returns json-representation of the specified FORM */
        if(typeof(form) === 'string') form = this.parseLinear(form);
    
        return JSON.stringify(form, undefined, 2);
    }

    // ----------------------------------------------------
    // Helper
    // ----------------------------------------------------

    static getVariables(form) {
        /* parses a FORM to get all of its variables and sorts them using the JS Array.sort() method
        which sorts by comparing UTF-16 code unit values.
        Note: By convention, the process of deriving formDNA from a given FORM involves ordering of the extracted variables by this same sorting method, if no special ordering is specified. */
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

    /*  --------------------------------------------------------
        Additions 01/2020 from:
        https://observablehq.com/@formsandlines/formform-toolbox 
    */

    static getTotalVars (formStr) {
        /* gets total variable number of a FORM */
        return this.getVariables(formStr.substr()).length;
    };

    static reOrderVars (formula, varorder) {
        /* re-orders variables in a formula to match an ordering pattern */
        return this.decodeVars( this.encodeVars(formula, varorder) );
    };

    static decodeVars (encStr, decodePattern=undefined) {
      /* decodes variables in an encoded formula string with an optional decode pattern */
      let revCode = _common_helper__WEBPACK_IMPORTED_MODULE_0__["VARCODE_REV"];
      if (decodePattern) {
        const keys = Object.keys(_common_helper__WEBPACK_IMPORTED_MODULE_0__["VARCODE_REV"]);
        const varPart = keys.slice(0,decodePattern.length);
        const modPart = keys.slice(-3);
        
        revCode = varPart.concat(modPart).reduce( (code,key,i) => ({...code, 
            [key]: i < decodePattern.length ? decodePattern[i] : _common_helper__WEBPACK_IMPORTED_MODULE_0__["VARCODE_REV"][key], }),{});
      }

      return encStr.split('')
                .map(c => Object.keys(revCode).indexOf(c) > -1 ? revCode[c] : c).join('');
    };

    static encodeVars (formula, varorder=undefined) {
      /* encodes variables in a formula string according to a given variable order (array) */
      if (!varorder) varorder = this.getVariables(formula);
      
      function escapeRegExp(string) { // thx to CoolAJ86: https://stackoverflow.com/a/6969486
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
      }
      
      const fixPtn = {alt: 'alt(?=\|)', rEven: '2r(?=\|)', rOdd: '2r+1(?=\|)'};
      const ptn = v => {
        if (v.length > 1) return `\"${escapeRegExp(v)}\"`; // (?<=\")(${v})(?=\")
        return `${escapeRegExp(v)}`;
      };
      
      return varorder
        .reduce((encStr,v,i) => encStr
                .replace(new RegExp(fixPtn.alt, 'g'),_common_helper__WEBPACK_IMPORTED_MODULE_0__["VARCODE"]['alt'] )
                .replace(new RegExp(fixPtn.rEven, 'g'),_common_helper__WEBPACK_IMPORTED_MODULE_0__["VARCODE"]['2r'])
                .replace(new RegExp(fixPtn.rOdd, 'g'),_common_helper__WEBPACK_IMPORTED_MODULE_0__["VARCODE"]['2r+1'])
                .replace(new RegExp(ptn(v), 'g'),(Object.keys(_common_helper__WEBPACK_IMPORTED_MODULE_0__["VARCODE_REV"])[i]) )
                         , formula );
    };


    /*  --------------------------------------------------------
        New Additions 01/2020:
    */

    static matchDefaultVarOrder (varList) {
        /* Helper to match default orderings for calculation and vmaps */
        if (varList.join('') === 'ELR') return ['L','E','R'];
        if (varList.join('') === '+-LR') return ['-','L','R','+'];
        if (varList.join('') === '+-ELR') return ['-','L','E','R','+'];
        return varList;
    }

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
/* harmony import */ var _core_fdna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/fdna */ "./src/lib/core/fdna.js");





// export {default as calc} from './core/fcalc';
// export {default as form} from './core/fform';
// export {default as graph} from './core/fgraph';

/* harmony default export */ __webpack_exports__["default"] = ({ calc: _core_fcalc__WEBPACK_IMPORTED_MODULE_0__["default"], form: _core_fform__WEBPACK_IMPORTED_MODULE_1__["default"], graph: _core_fgraph__WEBPACK_IMPORTED_MODULE_2__["default"], dna: _core_fdna__WEBPACK_IMPORTED_MODULE_3__["default"] });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvYm94bW9kZWwtbGF5b3V0LWZvci1kMy9kaXN0L2JveG1vZGVsLWQzLm1pbi5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9jYW52Zy9kaXN0L2Jyb3dzZXIvY2FudmcubWluLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3JnYmNvbG9yL2luZGV4LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3N0YWNrYmx1ci1jYW52YXMvc3JjL3N0YWNrYmx1ci5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9jb21tb24vZDMtaGVscGVyLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2NvbW1vbi9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL2NvcmUvZmNhbGMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL2NvcmUvZmRuYS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9saWIvY29yZS9mZm9ybS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9saWIvY29yZS9mZ3JhcGguanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL21haW4uanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL21vZHVsZXMvZDMtZ3JhcGguanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL21vZHVsZXMvZDMtc3R5bGVzLmpzIiwid2VicGFjazovL2Zvcm1mb3JtL2V4dGVybmFsIFwiZDNcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixJQUFJLFNBQVMsSUFBSSxTQUFTLElBQUk7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMkJBQTJCLElBQUksU0FBUyxJQUFJLFNBQVMsSUFBSTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsK0JBQStCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsK0JBQStCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0EsMkJBQTJCLG9CQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLG1EQUFtRDtBQUNuRCxpRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7QUM3U0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHlFQUFlO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHlFQUFlOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0VBQVk7QUFDdkI7QUFDQTtBQUNBOztBQUVBLGlCQUFpQix5Q0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MseUVBQWU7O0FBRXZELHNFQUFzRSxzRUFBWTtBQUNsRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0EscUJBQXFCLGNBQWM7QUFDbkMscUJBQXFCLG1CQUFtQjtBQUN4QyxzQkFBc0IsTUFBTTtBQUM1QixzQkFBc0Isc0JBQXNCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDM1hBLGdEIiwiZmlsZSI6ImZvcm1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiZDNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiZDNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZm9ybWZvcm1cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJkM1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiZm9ybWZvcm1cIl0gPSBmYWN0b3J5KHJvb3RbXCJkM1wiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xpYi9tYWluLmpzXCIpO1xuIiwiIWZ1bmN0aW9uKHQsbil7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9bihyZXF1aXJlKFwiZDNcIikpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wiZDNcIl0sbik6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0c1tcImJveG1vZGVsLWQzXCJdPW4ocmVxdWlyZShcImQzXCIpKTp0W1wiYm94bW9kZWwtZDNcIl09bih0LmQzKX0od2luZG93LGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgbj17fTtmdW5jdGlvbiBlKHIpe2lmKG5bcl0pcmV0dXJuIG5bcl0uZXhwb3J0czt2YXIgbz1uW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxlKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBlLm09dCxlLmM9bixlLmQ9ZnVuY3Rpb24odCxuLHIpe2Uubyh0LG4pfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LGUucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxlLnQ9ZnVuY3Rpb24odCxuKXtpZigxJm4mJih0PWUodCkpLDgmbilyZXR1cm4gdDtpZig0Jm4mJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihlLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImbiYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBvIGluIHQpZS5kKHIsbyxmdW5jdGlvbihuKXtyZXR1cm4gdFtuXX0uYmluZChudWxsLG8pKTtyZXR1cm4gcn0sZS5uPWZ1bmN0aW9uKHQpe3ZhciBuPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBlLmQobixcImFcIixuKSxufSxlLm89ZnVuY3Rpb24odCxuKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsbil9LGUucD1cIlwiLGUoZS5zPTEpfShbZnVuY3Rpb24obixlKXtuLmV4cG9ydHM9dH0sZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO2UucihuKSxlLmQobixcImRlZmF1bHRcIixmdW5jdGlvbigpe3JldHVybiBvfSk7dmFyIHI9ZSgwKTtmdW5jdGlvbiBvKCl7dmFyIHQsbixlLG8saSx1LGYsYSxjLGw9W107ZnVuY3Rpb24gaCh0KXtyZXR1cm4gdC5lYWNoQWZ0ZXIoZCksdC5lYWNoQmVmb3JlKHApLHQuZWFjaEJlZm9yZSh5KSx0fWZ1bmN0aW9uIGQobyl7dmFyIGg9YyhvKS53aWR0aCxkPWMobykuaGVpZ2h0O2lmKHQobykpe2lmKGg9ZD0wLG8uY2hpbGRyZW4pe2Zvcih2YXIgcD1mdW5jdGlvbih0KXt2YXIgcj1bXSxvPTAsaT0hMSxmPTAsYz0hMDtyZXR1cm4gdC5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGwsaCl7bihsKSYmIWkmJihpPSEwKSxvKz1sLngxLWwueDAsbys9Yz9lKGwpP3UobCkubGVmdDowOk1hdGgubWF4KHUobCkubGVmdCx1KHQuY2hpbGRyZW5baC0xXSkucmlnaHQpO3ZhciBkPWUobCk/dShsKS5yaWdodDowOyhvK2Q+YSh0KXx8aD09PXQuY2hpbGRyZW4ubGVuZ3RoLTEpJiYobys9ZCksbz5hKHQpfHxoPT09dC5jaGlsZHJlbi5sZW5ndGgtMT8oci5wdXNoKHtmcm9tOmYsdG86aCx3aWR0aDpvLGZsZXhIZWlnaHQ6aX0pLGg8dC5jaGlsZHJlbi5sZW5ndGgtMSYmKGY9aCsxLG89MCxpPSExLGM9ITApKTpjPSExfSkscn0obykseT0wO3k8cC5sZW5ndGg7eSsrKXBbeV0uaGVpZ2h0PWcobyxwLHkpO2wucHVzaCh7Ym94Om8sbGluZXM6cH0pLGgrPXIubWF4KHAsZnVuY3Rpb24odCl7cmV0dXJuIHQud2lkdGh9KSxkKz1yLnN1bShwLGZ1bmN0aW9uKHQpe3JldHVybiB0LmhlaWdodH0pfWgrPWkobykubGVmdCtpKG8pLnJpZ2h0LGQrPWkobykudG9wK2kobykuYm90dG9tLGg9TWF0aC5tYXgoaCxmKG8pLndpZHRoKSxkPU1hdGgubWF4KGQsZihvKS5oZWlnaHQpfW8ueDA9by55MD0wLG8ueDE9aCxvLnkxPWR9ZnVuY3Rpb24gcChyKXt2YXIgbz1yLnkxO2lmKHIucGFyZW50JiZuKHIpKXtvPW0ocikuaGVpZ2h0O3ZhciBpPXgoci5wYXJlbnQpLGY9cyhyLGkpO28tPWUocil8fDAhPT1mP3UocikudG9wOjA7dmFyIGE9KG8tPWUocil8fGYhPT1pLmxlbmd0aC0xP3UocikuYm90dG9tOjApLXIueTE7aWYodChyKSYmci5jaGlsZHJlbiYmYT4wKXt2YXIgYz14KHIpLGw9YS9jLmxlbmd0aCxoPSEwLGQ9ITEscD12b2lkIDA7dHJ5e2Zvcih2YXIgeSxnPWNbU3ltYm9sLml0ZXJhdG9yXSgpOyEoaD0oeT1nLm5leHQoKSkuZG9uZSk7aD0hMCl7eS52YWx1ZS5oZWlnaHQrPWx9fWNhdGNoKHQpe2Q9ITAscD10fWZpbmFsbHl7dHJ5e2h8fG51bGw9PWcucmV0dXJufHxnLnJldHVybigpfWZpbmFsbHl7aWYoZCl0aHJvdyBwfX19fXIueTE9b31mdW5jdGlvbiB5KHQpe3ZhciBuPXQueDEtdC54MCxyPXQueTEtdC55MDtpZih0LnBhcmVudCl7dC55MD10LnBhcmVudC55MCtpKHQucGFyZW50KS50b3A7dmFyIGY9dC5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0KTtpZigwPT09Znx8ZnVuY3Rpb24odCl7aWYodC5wYXJlbnQpe3ZhciBuPXQucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodCksZT14KHQucGFyZW50KSxyPWVbcyh0LGUpXTtyZXR1cm4gci5mcm9tPT09bn1yZXR1cm4gbnVsbH0odCkpdC54MCs9dC5wYXJlbnQueDAraSh0LnBhcmVudCkubGVmdCxlKHQpJiYodC54MCs9dSh0KS5sZWZ0KTtlbHNle3ZhciBhPXQucGFyZW50LmNoaWxkcmVuW2YtMV07dC54MD1hLngxLHQueDArPU1hdGgubWF4KHUoYSkucmlnaHQsdSh0KS5sZWZ0KX19ZWxzZSBzd2l0Y2gobyl7Y2FzZVwidG9wXCI6dC55MD0wO2JyZWFrO2Nhc2VcIm1pZGRsZVwiOnQueTA9ci8yO2JyZWFrO2Nhc2VcImJvdHRvbVwiOnQueTA9cn1zd2l0Y2gobyl7Y2FzZVwidG9wXCI6aWYodC5wYXJlbnQpe3ZhciBjPXModCk7dC55MCs9ZSh0KXx8MCE9PWM/dSh0KS50b3A6MCx0LnkwKz12KHQpfWJyZWFrO2Nhc2VcIm1pZGRsZVwiOnQucGFyZW50JiYodC55MCs9dih0KSttKHQpLmhlaWdodC8yKSx0LnkwLT1yLzI7YnJlYWs7Y2FzZVwiYm90dG9tXCI6aWYodC5wYXJlbnQpe3ZhciBsPXgodC5wYXJlbnQpLGg9cyh0LGwpO3QueTAtPWUodCl8fGghPT1sLmxlbmd0aC0xP3UodCkuYm90dG9tOjAsdC55MCs9dih0LCEwKX10LnkwLT1yfXQueDE9dC54MCtuLHQueTE9dC55MCtyfWZ1bmN0aW9uIGcodCxuLHIpe2Zvcih2YXIgbz1uW3JdLGk9MCxhPW8uZnJvbTthPD1vLnRvO2ErKyl7dmFyIGM9dC5jaGlsZHJlblthXSxsPWMueTEtYy55MCxoPShlKGMpfHwwIT09cj91KGMpLnRvcDowKSsoZShjKXx8ciE9PW4ubGVuZ3RoLTE/dShjKS5ib3R0b206MCk7bCtoPmkmJihpPWwraCl9cmV0dXJuIE1hdGgubWF4KGksZih0KS5oZWlnaHQpfWZ1bmN0aW9uIHgodCl7cmV0dXJuIGxbbC5maW5kSW5kZXgoZnVuY3Rpb24obil7cmV0dXJuIG4uYm94PT09dH0pXS5saW5lc31mdW5jdGlvbiBzKHQsbil7aWYodC5wYXJlbnQpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MT9uOngodC5wYXJlbnQpLHI9dC5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0KTtyZXR1cm4gZS5maW5kSW5kZXgoZnVuY3Rpb24odCl7cmV0dXJuIHI+PXQuZnJvbSYmcjw9dC50b30pfXJldHVybiBudWxsfWZ1bmN0aW9uIG0odCl7dmFyIG49eCh0LnBhcmVudCk7cmV0dXJuIG5bcyh0LG4pXX1mdW5jdGlvbiB2KHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdJiZhcmd1bWVudHNbMV07aWYodC5wYXJlbnQpe3ZhciBlPXgodC5wYXJlbnQpLG89cyh0LGUpLGk9bj9vOm8tMTtyZXR1cm4gci5zdW0oZS5maWx0ZXIoZnVuY3Rpb24odCxuKXtyZXR1cm4gbjw9aX0pLGZ1bmN0aW9uKHQpe3JldHVybiB0LmhlaWdodH0pfXJldHVybiBudWxsfWZ1bmN0aW9uIGIodCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHR9fXJldHVybiBoLnZBbGlnbj1mdW5jdGlvbih0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8obz10LGgpOm99LGguZWRnZU1hcmdpbnM9ZnVuY3Rpb24odCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KGU9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90OmIoK3QpLGgpOmV9LGguaXNDb250YWluZXI9ZnVuY3Rpb24obil7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KHQ9XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uOmIoK24pLGgpOnR9LGguc3BhbkhlaWdodD1mdW5jdGlvbih0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8obj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6YigrdCksaCk6bn0saC5wYWRkaW5nPWZ1bmN0aW9uKHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhpPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpiKCt0KSxoKTppfSxoLm1hcmdpbj1mdW5jdGlvbih0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8odT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6YigrdCksaCk6dX0saC5ub2RlU2l6ZT1mdW5jdGlvbih0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8oYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6YigrdCksaCk6Y30saC5taW5Db250YWluZXJTaXplPWZ1bmN0aW9uKHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhmPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpiKCt0KSxoKTpmfSxoLm1heExpbmVXaWR0aD1mdW5jdGlvbih0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8oYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6YigrdCksaCk6YX0saH19XSkuZGVmYXVsdH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym94bW9kZWwtZDMubWluLmpzLm1hcCIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUocmVxdWlyZShcInJnYmNvbG9yXCIpLHJlcXVpcmUoXCJzdGFja2JsdXItY2FudmFzXCIpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcInJnYmNvbG9yXCIsXCJzdGFja2JsdXItY2FudmFzXCJdLGUpOnQuY2Fudmc9ZSh0LlJHQkNvbG9yLHQuU3RhY2tCbHVyKX0odGhpcyxmdW5jdGlvbihtLGQpe1widXNlIHN0cmljdFwiO3ZhciB0O3JldHVybiBtPW0mJm0uaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0XCIpP20uZGVmYXVsdDptLGQ9ZCYmZC5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRcIik/ZC5kZWZhdWx0OmQsZnVuY3Rpb24odCl7dmFyIHU7dC5leHBvcnRzOyh1PXdpbmRvdykuRE9NUGFyc2VyPXdpbmRvdy5ET01QYXJzZXI7ZnVuY3Rpb24gcCgpe3JldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpfXZhciBmLGM9ZnVuY3Rpb24odCxlLGkpe2lmKG51bGwhPXR8fG51bGwhPWV8fG51bGwhPWkpe3ZhciBuPWZ1bmN0aW9uKHMpe3ZhciBBPXtvcHRzOnMsRlJBTUVSQVRFOjMwLE1BWF9WSVJUVUFMX1BJWEVMUzozZTQscm9vdEVtU2l6ZToxMixlbVNpemU6MTIsbG9nOmZ1bmN0aW9uKHQpe319OzE9PUEub3B0cy5sb2cmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBjb25zb2xlJiYoQS5sb2c9ZnVuY3Rpb24odCl7Y29uc29sZS5sb2codCl9KTtBLmluaXQ9ZnVuY3Rpb24odCl7dmFyIGU9MDtBLlVuaXF1ZUlkPWZ1bmN0aW9uKCl7cmV0dXJuXCJjYW52Z1wiKyArK2V9LEEuRGVmaW5pdGlvbnM9e30sQS5TdHlsZXM9e30sQS5TdHlsZXNTcGVjaWZpY2l0eT17fSxBLkFuaW1hdGlvbnM9W10sQS5JbWFnZXM9W10sQS5jdHg9dCxBLlZpZXdQb3J0PW5ldyBmdW5jdGlvbigpe3RoaXMudmlld1BvcnRzPVtdLHRoaXMuQ2xlYXI9ZnVuY3Rpb24oKXt0aGlzLnZpZXdQb3J0cz1bXX0sdGhpcy5TZXRDdXJyZW50PWZ1bmN0aW9uKHQsZSl7dGhpcy52aWV3UG9ydHMucHVzaCh7d2lkdGg6dCxoZWlnaHQ6ZX0pfSx0aGlzLlJlbW92ZUN1cnJlbnQ9ZnVuY3Rpb24oKXt0aGlzLnZpZXdQb3J0cy5wb3AoKX0sdGhpcy5DdXJyZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmlld1BvcnRzW3RoaXMudmlld1BvcnRzLmxlbmd0aC0xXX0sdGhpcy53aWR0aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLkN1cnJlbnQoKS53aWR0aH0sdGhpcy5oZWlnaHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5DdXJyZW50KCkuaGVpZ2h0fSx0aGlzLkNvbXB1dGVTaXplPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsIT10JiZcIm51bWJlclwiPT10eXBlb2YgdD90OlwieFwiPT10P3RoaXMud2lkdGgoKTpcInlcIj09dD90aGlzLmhlaWdodCgpOk1hdGguc3FydChNYXRoLnBvdyh0aGlzLndpZHRoKCksMikrTWF0aC5wb3codGhpcy5oZWlnaHQoKSwyKSkvTWF0aC5zcXJ0KDIpfX19LEEuaW5pdCgpLEEuSW1hZ2VzTG9hZGVkPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PTA7dDxBLkltYWdlcy5sZW5ndGg7dCsrKWlmKCFBLkltYWdlc1t0XS5sb2FkZWQpcmV0dXJuITE7cmV0dXJuITB9LEEudHJpbT1mdW5jdGlvbih0KXtyZXR1cm4gdC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLFwiXCIpfSxBLmNvbXByZXNzU3BhY2VzPWZ1bmN0aW9uKHQpe3JldHVybiB0LnJlcGxhY2UoLyg/IVxcdTMwMDApXFxzKy9nbSxcIiBcIil9LEEuYWpheD1mdW5jdGlvbih0KXt2YXIgZTtyZXR1cm4oZT11LlhNTEh0dHBSZXF1ZXN0P25ldyB1LlhNTEh0dHBSZXF1ZXN0Om5ldyBBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIikpPyhlLm9wZW4oXCJHRVRcIix0LCExKSxlLnNlbmQobnVsbCksZS5yZXNwb25zZVRleHQpOm51bGx9LEEucGFyc2VYbWw9ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFdpbmRvd3MmJnZvaWQgMCE9PVdpbmRvd3MuRGF0YSYmdm9pZCAwIT09V2luZG93cy5EYXRhLlhtbCl7dmFyIHQ9bmV3IFdpbmRvd3MuRGF0YS5YbWwuRG9tLlhtbERvY3VtZW50LGk9bmV3IFdpbmRvd3MuRGF0YS5YbWwuRG9tLlhtbExvYWRTZXR0aW5ncztyZXR1cm4gaS5wcm9oaWJpdER0ZD0hMSx0LmxvYWRYbWwoZSxpKSx0fWlmKCF1LkRPTVBhcnNlcil7ZT1lLnJlcGxhY2UoLzwhRE9DVFlQRSBzdmdbXj5dKj4vLFwiXCIpO3ZhciB0PW5ldyBBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTERPTVwiKTtyZXR1cm4gdC5hc3luYz1cImZhbHNlXCIsdC5sb2FkWE1MKGUpLHR9dHJ5e3ZhciBuPXMueG1sZG9tP25ldyB1LkRPTVBhcnNlcihzLnhtbGRvbSk6bmV3IHUuRE9NUGFyc2VyO3JldHVybiBuLnBhcnNlRnJvbVN0cmluZyhlLFwiaW1hZ2Uvc3ZnK3htbFwiKX1jYXRjaCh0KXtyZXR1cm4obj1zLnhtbGRvbT9uZXcgdS5ET01QYXJzZXIocy54bWxkb20pOm5ldyB1LkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKGUsXCJ0ZXh0L3htbFwiKX19LEEuUHJvcGVydHk9ZnVuY3Rpb24odCxlKXt0aGlzLm5hbWU9dCx0aGlzLnZhbHVlPWV9LEEuUHJvcGVydHkucHJvdG90eXBlLmdldFZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWV9LEEuUHJvcGVydHkucHJvdG90eXBlLmhhc1ZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuIG51bGwhPXRoaXMudmFsdWUmJlwiXCIhPT10aGlzLnZhbHVlfSxBLlByb3BlcnR5LnByb3RvdHlwZS5udW1WYWx1ZT1mdW5jdGlvbigpe2lmKCF0aGlzLmhhc1ZhbHVlKCkpcmV0dXJuIDA7dmFyIHQ9cGFyc2VGbG9hdCh0aGlzLnZhbHVlKTtyZXR1cm4odGhpcy52YWx1ZStcIlwiKS5tYXRjaCgvJSQvKSYmKHQvPTEwMCksdH0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUudmFsdWVPckRlZmF1bHQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuaGFzVmFsdWUoKT90aGlzLnZhbHVlOnR9LEEuUHJvcGVydHkucHJvdG90eXBlLm51bVZhbHVlT3JEZWZhdWx0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmhhc1ZhbHVlKCk/dGhpcy5udW1WYWx1ZSgpOnR9LEEuUHJvcGVydHkucHJvdG90eXBlLmFkZE9wYWNpdHk9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy52YWx1ZTtpZihudWxsIT10LnZhbHVlJiZcIlwiIT10LnZhbHVlJiZcInN0cmluZ1wiPT10eXBlb2YgdGhpcy52YWx1ZSl7dmFyIGk9bmV3IG0odGhpcy52YWx1ZSk7aS5vayYmKGU9XCJyZ2JhKFwiK2kucitcIiwgXCIraS5nK1wiLCBcIitpLmIrXCIsIFwiK3QubnVtVmFsdWUoKStcIilcIil9cmV0dXJuIG5ldyBBLlByb3BlcnR5KHRoaXMubmFtZSxlKX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuZ2V0RGVmaW5pdGlvbj1mdW5jdGlvbigpe3ZhciB0PXRoaXMudmFsdWUubWF0Y2goLyMoW15cXCknXCJdKykvKTtyZXR1cm4gdCYmKHQ9dFsxXSksdHx8KHQ9dGhpcy52YWx1ZSksQS5EZWZpbml0aW9uc1t0XX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuaXNVcmxEZWZpbml0aW9uPWZ1bmN0aW9uKCl7cmV0dXJuIDA9PXRoaXMudmFsdWUuaW5kZXhPZihcInVybChcIil9LEEuUHJvcGVydHkucHJvdG90eXBlLmdldEZpbGxTdHlsZURlZmluaXRpb249ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmdldERlZmluaXRpb24oKTtpZihudWxsIT1pJiZpLmNyZWF0ZUdyYWRpZW50KXJldHVybiBpLmNyZWF0ZUdyYWRpZW50KEEuY3R4LHQsZSk7aWYobnVsbCE9aSYmaS5jcmVhdGVQYXR0ZXJuKXtpZihpLmdldEhyZWZBdHRyaWJ1dGUoKS5oYXNWYWx1ZSgpKXt2YXIgbj1pLmF0dHJpYnV0ZShcInBhdHRlcm5UcmFuc2Zvcm1cIik7aT1pLmdldEhyZWZBdHRyaWJ1dGUoKS5nZXREZWZpbml0aW9uKCksbi5oYXNWYWx1ZSgpJiYoaS5hdHRyaWJ1dGUoXCJwYXR0ZXJuVHJhbnNmb3JtXCIsITApLnZhbHVlPW4udmFsdWUpfXJldHVybiBpLmNyZWF0ZVBhdHRlcm4oQS5jdHgsdCl9cmV0dXJuIG51bGx9LEEuUHJvcGVydHkucHJvdG90eXBlLmdldERQST1mdW5jdGlvbih0KXtyZXR1cm4gOTZ9LEEuUHJvcGVydHkucHJvdG90eXBlLmdldFJFTT1mdW5jdGlvbih0KXtyZXR1cm4gQS5yb290RW1TaXplfSxBLlByb3BlcnR5LnByb3RvdHlwZS5nZXRFTT1mdW5jdGlvbih0KXtyZXR1cm4gQS5lbVNpemV9LEEuUHJvcGVydHkucHJvdG90eXBlLmdldFVuaXRzPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy52YWx1ZStcIlwiO3JldHVybiB0LnJlcGxhY2UoL1swLTlcXC5cXC1dL2csXCJcIil9LEEuUHJvcGVydHkucHJvdG90eXBlLmlzUGl4ZWxzPWZ1bmN0aW9uKCl7aWYoIXRoaXMuaGFzVmFsdWUoKSlyZXR1cm4hMTt2YXIgdD10aGlzLnZhbHVlK1wiXCI7cmV0dXJuISF0Lm1hdGNoKC9weCQvKXx8ISF0Lm1hdGNoKC9eWzAtOV0rJC8pfSxBLlByb3BlcnR5LnByb3RvdHlwZS50b1BpeGVscz1mdW5jdGlvbih0LGUpe2lmKCF0aGlzLmhhc1ZhbHVlKCkpcmV0dXJuIDA7dmFyIGk9dGhpcy52YWx1ZStcIlwiO2lmKGkubWF0Y2goL3JlbSQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpKnRoaXMuZ2V0UkVNKHQpO2lmKGkubWF0Y2goL2VtJC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqdGhpcy5nZXRFTSh0KTtpZihpLm1hdGNoKC9leCQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpKnRoaXMuZ2V0RU0odCkvMjtpZihpLm1hdGNoKC9weCQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpO2lmKGkubWF0Y2goL3B0JC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqdGhpcy5nZXREUEkodCkqKDEvNzIpO2lmKGkubWF0Y2goL3BjJC8pKXJldHVybiAxNSp0aGlzLm51bVZhbHVlKCk7aWYoaS5tYXRjaCgvY20kLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKSp0aGlzLmdldERQSSh0KS8yLjU0O2lmKGkubWF0Y2goL21tJC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqdGhpcy5nZXREUEkodCkvMjUuNDtpZihpLm1hdGNoKC9pbiQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpKnRoaXMuZ2V0RFBJKHQpO2lmKGkubWF0Y2goLyUkLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKSpBLlZpZXdQb3J0LkNvbXB1dGVTaXplKHQpO3ZhciBuPXRoaXMubnVtVmFsdWUoKTtyZXR1cm4gZSYmbjwxP24qQS5WaWV3UG9ydC5Db21wdXRlU2l6ZSh0KTpufSxBLlByb3BlcnR5LnByb3RvdHlwZS50b01pbGxpc2Vjb25kcz1mdW5jdGlvbigpe2lmKCF0aGlzLmhhc1ZhbHVlKCkpcmV0dXJuIDA7dmFyIHQ9dGhpcy52YWx1ZStcIlwiO3JldHVybiB0Lm1hdGNoKC9zJC8pPzFlMyp0aGlzLm51bVZhbHVlKCk6KHQubWF0Y2goL21zJC8pLHRoaXMubnVtVmFsdWUoKSl9LEEuUHJvcGVydHkucHJvdG90eXBlLnRvUmFkaWFucz1mdW5jdGlvbigpe2lmKCF0aGlzLmhhc1ZhbHVlKCkpcmV0dXJuIDA7dmFyIHQ9dGhpcy52YWx1ZStcIlwiO3JldHVybiB0Lm1hdGNoKC9kZWckLyk/dGhpcy5udW1WYWx1ZSgpKihNYXRoLlBJLzE4MCk6dC5tYXRjaCgvZ3JhZCQvKT90aGlzLm51bVZhbHVlKCkqKE1hdGguUEkvMjAwKTp0Lm1hdGNoKC9yYWQkLyk/dGhpcy5udW1WYWx1ZSgpOnRoaXMubnVtVmFsdWUoKSooTWF0aC5QSS8xODApfTt2YXIgdD17YmFzZWxpbmU6XCJhbHBoYWJldGljXCIsXCJiZWZvcmUtZWRnZVwiOlwidG9wXCIsXCJ0ZXh0LWJlZm9yZS1lZGdlXCI6XCJ0b3BcIixtaWRkbGU6XCJtaWRkbGVcIixjZW50cmFsOlwibWlkZGxlXCIsXCJhZnRlci1lZGdlXCI6XCJib3R0b21cIixcInRleHQtYWZ0ZXItZWRnZVwiOlwiYm90dG9tXCIsaWRlb2dyYXBoaWM6XCJpZGVvZ3JhcGhpY1wiLGFscGhhYmV0aWM6XCJhbHBoYWJldGljXCIsaGFuZ2luZzpcImhhbmdpbmdcIixtYXRoZW1hdGljYWw6XCJhbHBoYWJldGljXCJ9O3JldHVybiBBLlByb3BlcnR5LnByb3RvdHlwZS50b1RleHRCYXNlbGluZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmhhc1ZhbHVlKCk/dFt0aGlzLnZhbHVlXTpudWxsfSxBLkZvbnQ9bmV3IGZ1bmN0aW9uKCl7dGhpcy5TdHlsZXM9XCJub3JtYWx8aXRhbGljfG9ibGlxdWV8aW5oZXJpdFwiLHRoaXMuVmFyaWFudHM9XCJub3JtYWx8c21hbGwtY2Fwc3xpbmhlcml0XCIsdGhpcy5XZWlnaHRzPVwibm9ybWFsfGJvbGR8Ym9sZGVyfGxpZ2h0ZXJ8MTAwfDIwMHwzMDB8NDAwfDUwMHw2MDB8NzAwfDgwMHw5MDB8aW5oZXJpdFwiLHRoaXMuQ3JlYXRlRm9udD1mdW5jdGlvbih0LGUsaSxuLHMsYSl7dmFyIHI9bnVsbCE9YT90aGlzLlBhcnNlKGEpOnRoaXMuQ3JlYXRlRm9udChcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsQS5jdHguZm9udCk7cmV0dXJue2ZvbnRGYW1pbHk6cz1zfHxyLmZvbnRGYW1pbHksZm9udFNpemU6bnx8ci5mb250U2l6ZSxmb250U3R5bGU6dHx8ci5mb250U3R5bGUsZm9udFdlaWdodDppfHxyLmZvbnRXZWlnaHQsZm9udFZhcmlhbnQ6ZXx8ci5mb250VmFyaWFudCx0b1N0cmluZzpmdW5jdGlvbigpe3JldHVyblt0aGlzLmZvbnRTdHlsZSx0aGlzLmZvbnRWYXJpYW50LHRoaXMuZm9udFdlaWdodCx0aGlzLmZvbnRTaXplLHRoaXMuZm9udEZhbWlseV0uam9pbihcIiBcIil9fX07dmFyIHI9dGhpczt0aGlzLlBhcnNlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT17fSxpPUEudHJpbShBLmNvbXByZXNzU3BhY2VzKHR8fFwiXCIpKS5zcGxpdChcIiBcIiksbj17Zm9udFNpemU6ITEsZm9udFN0eWxlOiExLGZvbnRXZWlnaHQ6ITEsZm9udFZhcmlhbnQ6ITF9LHM9XCJcIixhPTA7YTxpLmxlbmd0aDthKyspbi5mb250U3R5bGV8fC0xPT1yLlN0eWxlcy5pbmRleE9mKGlbYV0pP24uZm9udFZhcmlhbnR8fC0xPT1yLlZhcmlhbnRzLmluZGV4T2YoaVthXSk/bi5mb250V2VpZ2h0fHwtMT09ci5XZWlnaHRzLmluZGV4T2YoaVthXSk/bi5mb250U2l6ZT9cImluaGVyaXRcIiE9aVthXSYmKHMrPWlbYV0pOihcImluaGVyaXRcIiE9aVthXSYmKGUuZm9udFNpemU9aVthXS5zcGxpdChcIi9cIilbMF0pLG4uZm9udFN0eWxlPW4uZm9udFZhcmlhbnQ9bi5mb250V2VpZ2h0PW4uZm9udFNpemU9ITApOihcImluaGVyaXRcIiE9aVthXSYmKGUuZm9udFdlaWdodD1pW2FdKSxuLmZvbnRTdHlsZT1uLmZvbnRWYXJpYW50PW4uZm9udFdlaWdodD0hMCk6KFwiaW5oZXJpdFwiIT1pW2FdJiYoZS5mb250VmFyaWFudD1pW2FdKSxuLmZvbnRTdHlsZT1uLmZvbnRWYXJpYW50PSEwKTooXCJpbmhlcml0XCIhPWlbYV0mJihlLmZvbnRTdHlsZT1pW2FdKSxuLmZvbnRTdHlsZT0hMCk7cmV0dXJuXCJcIiE9cyYmKGUuZm9udEZhbWlseT1zKSxlfX0sQS5Ub051bWJlckFycmF5PWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1BLnRyaW0oQS5jb21wcmVzc1NwYWNlcygodHx8XCJcIikucmVwbGFjZSgvLC9nLFwiIFwiKSkpLnNwbGl0KFwiIFwiKSxpPTA7aTxlLmxlbmd0aDtpKyspZVtpXT1wYXJzZUZsb2F0KGVbaV0pO3JldHVybiBlfSxBLlBvaW50PWZ1bmN0aW9uKHQsZSl7dGhpcy54PXQsdGhpcy55PWV9LEEuUG9pbnQucHJvdG90eXBlLmFuZ2xlVG89ZnVuY3Rpb24odCl7cmV0dXJuIE1hdGguYXRhbjIodC55LXRoaXMueSx0LngtdGhpcy54KX0sQS5Qb2ludC5wcm90b3R5cGUuYXBwbHlUcmFuc2Zvcm09ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy54KnRbMF0rdGhpcy55KnRbMl0rdFs0XSxpPXRoaXMueCp0WzFdK3RoaXMueSp0WzNdK3RbNV07dGhpcy54PWUsdGhpcy55PWl9LEEuQ3JlYXRlUG9pbnQ9ZnVuY3Rpb24odCl7dmFyIGU9QS5Ub051bWJlckFycmF5KHQpO3JldHVybiBuZXcgQS5Qb2ludChlWzBdLGVbMV0pfSxBLkNyZWF0ZVBhdGg9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPUEuVG9OdW1iZXJBcnJheSh0KSxpPVtdLG49MDtuPGUubGVuZ3RoO24rPTIpaS5wdXNoKG5ldyBBLlBvaW50KGVbbl0sZVtuKzFdKSk7cmV0dXJuIGl9LEEuQm91bmRpbmdCb3g9ZnVuY3Rpb24odCxlLGksbil7dGhpcy54MT1OdW1iZXIuTmFOLHRoaXMueTE9TnVtYmVyLk5hTix0aGlzLngyPU51bWJlci5OYU4sdGhpcy55Mj1OdW1iZXIuTmFOLHRoaXMueD1mdW5jdGlvbigpe3JldHVybiB0aGlzLngxfSx0aGlzLnk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy55MX0sdGhpcy53aWR0aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLngyLXRoaXMueDF9LHRoaXMuaGVpZ2h0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMueTItdGhpcy55MX0sdGhpcy5hZGRQb2ludD1mdW5jdGlvbih0LGUpe251bGwhPXQmJigoaXNOYU4odGhpcy54MSl8fGlzTmFOKHRoaXMueDIpKSYmKHRoaXMueDE9dCx0aGlzLngyPXQpLHQ8dGhpcy54MSYmKHRoaXMueDE9dCksdD50aGlzLngyJiYodGhpcy54Mj10KSksbnVsbCE9ZSYmKChpc05hTih0aGlzLnkxKXx8aXNOYU4odGhpcy55MikpJiYodGhpcy55MT1lLHRoaXMueTI9ZSksZTx0aGlzLnkxJiYodGhpcy55MT1lKSxlPnRoaXMueTImJih0aGlzLnkyPWUpKX0sdGhpcy5hZGRYPWZ1bmN0aW9uKHQpe3RoaXMuYWRkUG9pbnQodCxudWxsKX0sdGhpcy5hZGRZPWZ1bmN0aW9uKHQpe3RoaXMuYWRkUG9pbnQobnVsbCx0KX0sdGhpcy5hZGRCb3VuZGluZ0JveD1mdW5jdGlvbih0KXt0aGlzLmFkZFBvaW50KHQueDEsdC55MSksdGhpcy5hZGRQb2ludCh0LngyLHQueTIpfSx0aGlzLmFkZFF1YWRyYXRpY0N1cnZlPWZ1bmN0aW9uKHQsZSxpLG4scyxhKXt2YXIgcj10KzIvMyooaS10KSxvPWUrMi8zKihuLWUpLGw9cisxLzMqKHMtdCksaD1vKzEvMyooYS1lKTt0aGlzLmFkZEJlemllckN1cnZlKHQsZSxyLGwsbyxoLHMsYSl9LHRoaXMuYWRkQmV6aWVyQ3VydmU9ZnVuY3Rpb24odCxlLGksbixzLGEscixvKXt2YXIgbD1bdCxlXSxoPVtpLG5dLHU9W3MsYV0sYz1bcixvXTt0aGlzLmFkZFBvaW50KGxbMF0sbFsxXSksdGhpcy5hZGRQb2ludChjWzBdLGNbMV0pO2Zvcih2YXIgZj0wO2Y8PTE7ZisrKXt2YXIgbT1mdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5wb3coMS10LDMpKmxbZl0rMypNYXRoLnBvdygxLXQsMikqdCpoW2ZdKzMqKDEtdCkqTWF0aC5wb3codCwyKSp1W2ZdK01hdGgucG93KHQsMykqY1tmXX0scD02KmxbZl0tMTIqaFtmXSs2KnVbZl0sZD0tMypsW2ZdKzkqaFtmXS05KnVbZl0rMypjW2ZdLHk9MypoW2ZdLTMqbFtmXTtpZigwIT1kKXt2YXIgdj1NYXRoLnBvdyhwLDIpLTQqeSpkO2lmKCEodjwwKSl7dmFyIGc9KC1wK01hdGguc3FydCh2KSkvKDIqZCk7MDxnJiZnPDEmJigwPT1mJiZ0aGlzLmFkZFgobShnKSksMT09ZiYmdGhpcy5hZGRZKG0oZykpKTt2YXIgeD0oLXAtTWF0aC5zcXJ0KHYpKS8oMipkKTswPHgmJng8MSYmKDA9PWYmJnRoaXMuYWRkWChtKHgpKSwxPT1mJiZ0aGlzLmFkZFkobSh4KSkpfX1lbHNle2lmKDA9PXApY29udGludWU7dmFyIGI9LXkvcDswPGImJmI8MSYmKDA9PWYmJnRoaXMuYWRkWChtKGIpKSwxPT1mJiZ0aGlzLmFkZFkobShiKSkpfX19LHRoaXMuaXNQb2ludEluQm94PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMueDE8PXQmJnQ8PXRoaXMueDImJnRoaXMueTE8PWUmJmU8PXRoaXMueTJ9LHRoaXMuYWRkUG9pbnQodCxlKSx0aGlzLmFkZFBvaW50KGksbil9LEEuVHJhbnNmb3JtPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7dGhpcy5UeXBlPXt9LHRoaXMuVHlwZS50cmFuc2xhdGU9ZnVuY3Rpb24odCl7dGhpcy5wPUEuQ3JlYXRlUG9pbnQodCksdGhpcy5hcHBseT1mdW5jdGlvbih0KXt0LnRyYW5zbGF0ZSh0aGlzLnAueHx8MCx0aGlzLnAueXx8MCl9LHRoaXMudW5hcHBseT1mdW5jdGlvbih0KXt0LnRyYW5zbGF0ZSgtMSp0aGlzLnAueHx8MCwtMSp0aGlzLnAueXx8MCl9LHRoaXMuYXBwbHlUb1BvaW50PWZ1bmN0aW9uKHQpe3QuYXBwbHlUcmFuc2Zvcm0oWzEsMCwwLDEsdGhpcy5wLnh8fDAsdGhpcy5wLnl8fDBdKX19LHRoaXMuVHlwZS5yb3RhdGU9ZnVuY3Rpb24odCl7dmFyIGU9QS5Ub051bWJlckFycmF5KHQpO3RoaXMuYW5nbGU9bmV3IEEuUHJvcGVydHkoXCJhbmdsZVwiLGVbMF0pLHRoaXMuY3g9ZVsxXXx8MCx0aGlzLmN5PWVbMl18fDAsdGhpcy5hcHBseT1mdW5jdGlvbih0KXt0LnRyYW5zbGF0ZSh0aGlzLmN4LHRoaXMuY3kpLHQucm90YXRlKHRoaXMuYW5nbGUudG9SYWRpYW5zKCkpLHQudHJhbnNsYXRlKC10aGlzLmN4LC10aGlzLmN5KX0sdGhpcy51bmFwcGx5PWZ1bmN0aW9uKHQpe3QudHJhbnNsYXRlKHRoaXMuY3gsdGhpcy5jeSksdC5yb3RhdGUoLTEqdGhpcy5hbmdsZS50b1JhZGlhbnMoKSksdC50cmFuc2xhdGUoLXRoaXMuY3gsLXRoaXMuY3kpfSx0aGlzLmFwcGx5VG9Qb2ludD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmFuZ2xlLnRvUmFkaWFucygpO3QuYXBwbHlUcmFuc2Zvcm0oWzEsMCwwLDEsdGhpcy5wLnh8fDAsdGhpcy5wLnl8fDBdKSx0LmFwcGx5VHJhbnNmb3JtKFtNYXRoLmNvcyhlKSxNYXRoLnNpbihlKSwtTWF0aC5zaW4oZSksTWF0aC5jb3MoZSksMCwwXSksdC5hcHBseVRyYW5zZm9ybShbMSwwLDAsMSwtdGhpcy5wLnh8fDAsLXRoaXMucC55fHwwXSl9fSx0aGlzLlR5cGUuc2NhbGU9ZnVuY3Rpb24odCl7dGhpcy5wPUEuQ3JlYXRlUG9pbnQodCksdGhpcy5hcHBseT1mdW5jdGlvbih0KXt0LnNjYWxlKHRoaXMucC54fHwxLHRoaXMucC55fHx0aGlzLnAueHx8MSl9LHRoaXMudW5hcHBseT1mdW5jdGlvbih0KXt0LnNjYWxlKDEvdGhpcy5wLnh8fDEsMS90aGlzLnAueXx8dGhpcy5wLnh8fDEpfSx0aGlzLmFwcGx5VG9Qb2ludD1mdW5jdGlvbih0KXt0LmFwcGx5VHJhbnNmb3JtKFt0aGlzLnAueHx8MCwwLDAsdGhpcy5wLnl8fDAsMCwwXSl9fSx0aGlzLlR5cGUubWF0cml4PWZ1bmN0aW9uKHQpe3RoaXMubT1BLlRvTnVtYmVyQXJyYXkodCksdGhpcy5hcHBseT1mdW5jdGlvbih0KXt0LnRyYW5zZm9ybSh0aGlzLm1bMF0sdGhpcy5tWzFdLHRoaXMubVsyXSx0aGlzLm1bM10sdGhpcy5tWzRdLHRoaXMubVs1XSl9LHRoaXMudW5hcHBseT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLm1bMF0saT10aGlzLm1bMl0sbj10aGlzLm1bNF0scz10aGlzLm1bMV0sYT10aGlzLm1bM10scj10aGlzLm1bNV0sbz0xLyhlKigxKmEtMCpyKS1pKigxKnMtMCpyKStuKigwKnMtMCphKSk7dC50cmFuc2Zvcm0obyooMSphLTAqciksbyooMCpyLTEqcyksbyooMCpuLTEqaSksbyooMSplLTAqbiksbyooaSpyLW4qYSksbyoobipzLWUqcikpfSx0aGlzLmFwcGx5VG9Qb2ludD1mdW5jdGlvbih0KXt0LmFwcGx5VHJhbnNmb3JtKHRoaXMubSl9fSx0aGlzLlR5cGUuU2tld0Jhc2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPWUuVHlwZS5tYXRyaXgsdGhpcy5iYXNlKHQpLHRoaXMuYW5nbGU9bmV3IEEuUHJvcGVydHkoXCJhbmdsZVwiLHQpfSx0aGlzLlR5cGUuU2tld0Jhc2UucHJvdG90eXBlPW5ldyB0aGlzLlR5cGUubWF0cml4LHRoaXMuVHlwZS5za2V3WD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9ZS5UeXBlLlNrZXdCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLm09WzEsMCxNYXRoLnRhbih0aGlzLmFuZ2xlLnRvUmFkaWFucygpKSwxLDAsMF19LHRoaXMuVHlwZS5za2V3WC5wcm90b3R5cGU9bmV3IHRoaXMuVHlwZS5Ta2V3QmFzZSx0aGlzLlR5cGUuc2tld1k9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPWUuVHlwZS5Ta2V3QmFzZSx0aGlzLmJhc2UodCksdGhpcy5tPVsxLE1hdGgudGFuKHRoaXMuYW5nbGUudG9SYWRpYW5zKCkpLDAsMSwwLDBdfSx0aGlzLlR5cGUuc2tld1kucHJvdG90eXBlPW5ldyB0aGlzLlR5cGUuU2tld0Jhc2UsdGhpcy50cmFuc2Zvcm1zPVtdLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTA7ZTx0aGlzLnRyYW5zZm9ybXMubGVuZ3RoO2UrKyl0aGlzLnRyYW5zZm9ybXNbZV0uYXBwbHkodCl9LHRoaXMudW5hcHBseT1mdW5jdGlvbih0KXtmb3IodmFyIGU9dGhpcy50cmFuc2Zvcm1zLmxlbmd0aC0xOzA8PWU7ZS0tKXRoaXMudHJhbnNmb3Jtc1tlXS51bmFwcGx5KHQpfSx0aGlzLmFwcGx5VG9Qb2ludD1mdW5jdGlvbih0KXtmb3IodmFyIGU9MDtlPHRoaXMudHJhbnNmb3Jtcy5sZW5ndGg7ZSsrKXRoaXMudHJhbnNmb3Jtc1tlXS5hcHBseVRvUG9pbnQodCl9O2Zvcih2YXIgaT1BLnRyaW0oQS5jb21wcmVzc1NwYWNlcyh0KSkucmVwbGFjZSgvXFwpKFthLXpBLVpdKS9nLFwiKSAkMVwiKS5yZXBsYWNlKC9cXCkoXFxzPyxcXHM/KS9nLFwiKSBcIikuc3BsaXQoL1xccyg/PVthLXpdKS8pLG49MDtuPGkubGVuZ3RoO24rKylpZihcIm5vbmVcIiE9PWlbbl0pe3ZhciBzPUEudHJpbShpW25dLnNwbGl0KFwiKFwiKVswXSksYT1pW25dLnNwbGl0KFwiKFwiKVsxXS5yZXBsYWNlKFwiKVwiLFwiXCIpLHI9dGhpcy5UeXBlW3NdO2lmKHZvaWQgMCE9PXIpe3ZhciBvPW5ldyByKGEpO28udHlwZT1zLHRoaXMudHJhbnNmb3Jtcy5wdXNoKG8pfX19LEEuQXNwZWN0UmF0aW89ZnVuY3Rpb24odCxlLGksbixzLGEscixvLGwsaCl7dmFyIHU9KGU9KGU9QS5jb21wcmVzc1NwYWNlcyhlKSkucmVwbGFjZSgvXmRlZmVyXFxzLyxcIlwiKSkuc3BsaXQoXCIgXCIpWzBdfHxcInhNaWRZTWlkXCIsYz1lLnNwbGl0KFwiIFwiKVsxXXx8XCJtZWV0XCIsZj1pL24sbT1zL2EscD1NYXRoLm1pbihmLG0pLGQ9TWF0aC5tYXgoZixtKTtcIm1lZXRcIj09YyYmKG4qPXAsYSo9cCksXCJzbGljZVwiPT1jJiYobio9ZCxhKj1kKSxsPW5ldyBBLlByb3BlcnR5KFwicmVmWFwiLGwpLGg9bmV3IEEuUHJvcGVydHkoXCJyZWZZXCIsaCksbC5oYXNWYWx1ZSgpJiZoLmhhc1ZhbHVlKCk/dC50cmFuc2xhdGUoLXAqbC50b1BpeGVscyhcInhcIiksLXAqaC50b1BpeGVscyhcInlcIikpOih1Lm1hdGNoKC9eeE1pZC8pJiYoXCJtZWV0XCI9PWMmJnA9PW18fFwic2xpY2VcIj09YyYmZD09bSkmJnQudHJhbnNsYXRlKGkvMi1uLzIsMCksdS5tYXRjaCgvWU1pZCQvKSYmKFwibWVldFwiPT1jJiZwPT1mfHxcInNsaWNlXCI9PWMmJmQ9PWYpJiZ0LnRyYW5zbGF0ZSgwLHMvMi1hLzIpLHUubWF0Y2goL154TWF4LykmJihcIm1lZXRcIj09YyYmcD09bXx8XCJzbGljZVwiPT1jJiZkPT1tKSYmdC50cmFuc2xhdGUoaS1uLDApLHUubWF0Y2goL1lNYXgkLykmJihcIm1lZXRcIj09YyYmcD09Znx8XCJzbGljZVwiPT1jJiZkPT1mKSYmdC50cmFuc2xhdGUoMCxzLWEpKSxcIm5vbmVcIj09dT90LnNjYWxlKGYsbSk6XCJtZWV0XCI9PWM/dC5zY2FsZShwLHApOlwic2xpY2VcIj09YyYmdC5zY2FsZShkLGQpLHQudHJhbnNsYXRlKG51bGw9PXI/MDotcixudWxsPT1vPzA6LW8pfSxBLkVsZW1lbnQ9e30sQS5FbXB0eVByb3BlcnR5PW5ldyBBLlByb3BlcnR5KFwiRU1QVFlcIixcIlwiKSxBLkVsZW1lbnQuRWxlbWVudEJhc2U9ZnVuY3Rpb24oYSl7dGhpcy5hdHRyaWJ1dGVzPXt9LHRoaXMuc3R5bGVzPXt9LHRoaXMuc3R5bGVzU3BlY2lmaWNpdHk9e30sdGhpcy5jaGlsZHJlbj1bXSx0aGlzLmF0dHJpYnV0ZT1mdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuYXR0cmlidXRlc1t0XTtyZXR1cm4gbnVsbCE9aT9pOigxPT1lJiYoaT1uZXcgQS5Qcm9wZXJ0eSh0LFwiXCIpLHRoaXMuYXR0cmlidXRlc1t0XT1pKSxpfHxBLkVtcHR5UHJvcGVydHkpfSx0aGlzLmdldEhyZWZBdHRyaWJ1dGU9ZnVuY3Rpb24oKXtmb3IodmFyIHQgaW4gdGhpcy5hdHRyaWJ1dGVzKWlmKFwiaHJlZlwiPT10fHx0Lm1hdGNoKC86aHJlZiQvKSlyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzW3RdO3JldHVybiBBLkVtcHR5UHJvcGVydHl9LHRoaXMuc3R5bGU9ZnVuY3Rpb24odCxlLGkpe3ZhciBuPXRoaXMuc3R5bGVzW3RdO2lmKG51bGwhPW4pcmV0dXJuIG47dmFyIHM9dGhpcy5hdHRyaWJ1dGUodCk7aWYobnVsbCE9cyYmcy5oYXNWYWx1ZSgpKXJldHVybiB0aGlzLnN0eWxlc1t0XT1zO2lmKDEhPWkpe3ZhciBhPXRoaXMucGFyZW50O2lmKG51bGwhPWEpe3ZhciByPWEuc3R5bGUodCk7aWYobnVsbCE9ciYmci5oYXNWYWx1ZSgpKXJldHVybiByfX1yZXR1cm4gMT09ZSYmKG49bmV3IEEuUHJvcGVydHkodCxcIlwiKSx0aGlzLnN0eWxlc1t0XT1uKSxufHxBLkVtcHR5UHJvcGVydHl9LHRoaXMucmVuZGVyPWZ1bmN0aW9uKHQpe2lmKFwibm9uZVwiIT10aGlzLnN0eWxlKFwiZGlzcGxheVwiKS52YWx1ZSYmXCJoaWRkZW5cIiE9dGhpcy5zdHlsZShcInZpc2liaWxpdHlcIikudmFsdWUpe2lmKHQuc2F2ZSgpLHRoaXMuc3R5bGUoXCJtYXNrXCIpLmhhc1ZhbHVlKCkpe3ZhciBlPXRoaXMuc3R5bGUoXCJtYXNrXCIpLmdldERlZmluaXRpb24oKTtudWxsIT1lJiZlLmFwcGx5KHQsdGhpcyl9ZWxzZSBpZih0aGlzLnN0eWxlKFwiZmlsdGVyXCIpLmhhc1ZhbHVlKCkpe3ZhciBpPXRoaXMuc3R5bGUoXCJmaWx0ZXJcIikuZ2V0RGVmaW5pdGlvbigpO251bGwhPWkmJmkuYXBwbHkodCx0aGlzKX1lbHNlIHRoaXMuc2V0Q29udGV4dCh0KSx0aGlzLnJlbmRlckNoaWxkcmVuKHQpLHRoaXMuY2xlYXJDb250ZXh0KHQpO3QucmVzdG9yZSgpfX0sdGhpcy5zZXRDb250ZXh0PWZ1bmN0aW9uKHQpe30sdGhpcy5jbGVhckNvbnRleHQ9ZnVuY3Rpb24odCl7fSx0aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dGhpcy5jaGlsZHJlbi5sZW5ndGg7ZSsrKXRoaXMuY2hpbGRyZW5bZV0ucmVuZGVyKHQpfSx0aGlzLmFkZENoaWxkPWZ1bmN0aW9uKHQsZSl7dmFyIGk9dDtlJiYoaT1BLkNyZWF0ZUVsZW1lbnQodCkpLGkucGFyZW50PXRoaXMsXCJ0aXRsZVwiIT1pLnR5cGUmJnRoaXMuY2hpbGRyZW4ucHVzaChpKX0sdGhpcy5hZGRTdHlsZXNGcm9tU3R5bGVEZWZpbml0aW9uPWZ1bmN0aW9uKCl7Zm9yKHZhciB0IGluIEEuU3R5bGVzKWlmKFwiQFwiIT10WzBdJiZmKGEsdCkpe3ZhciBlPUEuU3R5bGVzW3RdLGk9QS5TdHlsZXNTcGVjaWZpY2l0eVt0XTtpZihudWxsIT1lKWZvcih2YXIgbiBpbiBlKXt2YXIgcz10aGlzLnN0eWxlc1NwZWNpZmljaXR5W25dO3ZvaWQgMD09PXMmJihzPVwiMDAwXCIpLHM8aSYmKHRoaXMuc3R5bGVzW25dPWVbbl0sdGhpcy5zdHlsZXNTcGVjaWZpY2l0eVtuXT1pKX19fTt2YXIgdCxlPW5ldyBSZWdFeHAoXCJeW0EtWi1dKyRcIik7aWYobnVsbCE9YSYmMT09YS5ub2RlVHlwZSl7Zm9yKHZhciBpPTA7aTxhLmF0dHJpYnV0ZXMubGVuZ3RoO2krKyl7dmFyIG49YS5hdHRyaWJ1dGVzW2ldLHM9KHQ9bi5ub2RlTmFtZSxlLnRlc3QodCk/dC50b0xvd2VyQ2FzZSgpOnQpO3RoaXMuYXR0cmlidXRlc1tzXT1uZXcgQS5Qcm9wZXJ0eShzLG4udmFsdWUpfWlmKHRoaXMuYWRkU3R5bGVzRnJvbVN0eWxlRGVmaW5pdGlvbigpLHRoaXMuYXR0cmlidXRlKFwic3R5bGVcIikuaGFzVmFsdWUoKSl7dmFyIHI9dGhpcy5hdHRyaWJ1dGUoXCJzdHlsZVwiKS52YWx1ZS5zcGxpdChcIjtcIik7Zm9yKGk9MDtpPHIubGVuZ3RoO2krKylpZihcIlwiIT1BLnRyaW0ocltpXSkpe3ZhciBvPXJbaV0uc3BsaXQoXCI6XCIpLGw9QS50cmltKG9bMF0pLGg9QS50cmltKG9bMV0pO3RoaXMuc3R5bGVzW2xdPW5ldyBBLlByb3BlcnR5KGwsaCl9fWZvcih0aGlzLmF0dHJpYnV0ZShcImlkXCIpLmhhc1ZhbHVlKCkmJm51bGw9PUEuRGVmaW5pdGlvbnNbdGhpcy5hdHRyaWJ1dGUoXCJpZFwiKS52YWx1ZV0mJihBLkRlZmluaXRpb25zW3RoaXMuYXR0cmlidXRlKFwiaWRcIikudmFsdWVdPXRoaXMpLGk9MDtpPGEuY2hpbGROb2Rlcy5sZW5ndGg7aSsrKXt2YXIgdT1hLmNoaWxkTm9kZXNbaV07aWYoMT09dS5ub2RlVHlwZSYmdGhpcy5hZGRDaGlsZCh1LCEwKSx0aGlzLmNhcHR1cmVUZXh0Tm9kZXMmJigzPT11Lm5vZGVUeXBlfHw0PT11Lm5vZGVUeXBlKSl7dmFyIGM9dS52YWx1ZXx8dS50ZXh0fHx1LnRleHRDb250ZW50fHxcIlwiO1wiXCIhPUEuY29tcHJlc3NTcGFjZXMoYykmJnRoaXMuYWRkQ2hpbGQobmV3IEEuRWxlbWVudC50c3Bhbih1KSwhMSl9fX19LEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuY2FsY3VsYXRlT3BhY2l0eT1mdW5jdGlvbigpe2Zvcih2YXIgdD0xLGU9dGhpcztudWxsIT1lOyl7dmFyIGk9ZS5zdHlsZShcIm9wYWNpdHlcIiwhMSwhMCk7aS5oYXNWYWx1ZSgpJiYodCo9aS5udW1WYWx1ZSgpKSxlPWUucGFyZW50fXJldHVybiB0fSx0aGlzLnNldENvbnRleHQ9ZnVuY3Rpb24odCxlKXtpZighZSl7dmFyIGk7aWYodGhpcy5zdHlsZShcImZpbGxcIikuaXNVcmxEZWZpbml0aW9uKCkpbnVsbCE9KGk9dGhpcy5zdHlsZShcImZpbGxcIikuZ2V0RmlsbFN0eWxlRGVmaW5pdGlvbih0aGlzLHRoaXMuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIikpKSYmKHQuZmlsbFN0eWxlPWkpO2Vsc2UgaWYodGhpcy5zdHlsZShcImZpbGxcIikuaGFzVmFsdWUoKSl7dmFyIG47XCJjdXJyZW50Q29sb3JcIj09KG49dGhpcy5zdHlsZShcImZpbGxcIikpLnZhbHVlJiYobi52YWx1ZT10aGlzLnN0eWxlKFwiY29sb3JcIikudmFsdWUpLFwiaW5oZXJpdFwiIT1uLnZhbHVlJiYodC5maWxsU3R5bGU9XCJub25lXCI9PW4udmFsdWU/XCJyZ2JhKDAsMCwwLDApXCI6bi52YWx1ZSl9aWYodGhpcy5zdHlsZShcImZpbGwtb3BhY2l0eVwiKS5oYXNWYWx1ZSgpJiYobj0obj1uZXcgQS5Qcm9wZXJ0eShcImZpbGxcIix0LmZpbGxTdHlsZSkpLmFkZE9wYWNpdHkodGhpcy5zdHlsZShcImZpbGwtb3BhY2l0eVwiKSksdC5maWxsU3R5bGU9bi52YWx1ZSksdGhpcy5zdHlsZShcInN0cm9rZVwiKS5pc1VybERlZmluaXRpb24oKSludWxsIT0oaT10aGlzLnN0eWxlKFwic3Ryb2tlXCIpLmdldEZpbGxTdHlsZURlZmluaXRpb24odGhpcyx0aGlzLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIikpKSYmKHQuc3Ryb2tlU3R5bGU9aSk7ZWxzZSBpZih0aGlzLnN0eWxlKFwic3Ryb2tlXCIpLmhhc1ZhbHVlKCkpe3ZhciBzO1wiY3VycmVudENvbG9yXCI9PShzPXRoaXMuc3R5bGUoXCJzdHJva2VcIikpLnZhbHVlJiYocy52YWx1ZT10aGlzLnN0eWxlKFwiY29sb3JcIikudmFsdWUpLFwiaW5oZXJpdFwiIT1zLnZhbHVlJiYodC5zdHJva2VTdHlsZT1cIm5vbmVcIj09cy52YWx1ZT9cInJnYmEoMCwwLDAsMClcIjpzLnZhbHVlKX1pZih0aGlzLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIikuaGFzVmFsdWUoKSYmKHM9KHM9bmV3IEEuUHJvcGVydHkoXCJzdHJva2VcIix0LnN0cm9rZVN0eWxlKSkuYWRkT3BhY2l0eSh0aGlzLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIikpLHQuc3Ryb2tlU3R5bGU9cy52YWx1ZSksdGhpcy5zdHlsZShcInN0cm9rZS13aWR0aFwiKS5oYXNWYWx1ZSgpKXt2YXIgYT10aGlzLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIpLnRvUGl4ZWxzKCk7dC5saW5lV2lkdGg9MD09YT8uMDAxOmF9aWYodGhpcy5zdHlsZShcInN0cm9rZS1saW5lY2FwXCIpLmhhc1ZhbHVlKCkmJih0LmxpbmVDYXA9dGhpcy5zdHlsZShcInN0cm9rZS1saW5lY2FwXCIpLnZhbHVlKSx0aGlzLnN0eWxlKFwic3Ryb2tlLWxpbmVqb2luXCIpLmhhc1ZhbHVlKCkmJih0LmxpbmVKb2luPXRoaXMuc3R5bGUoXCJzdHJva2UtbGluZWpvaW5cIikudmFsdWUpLHRoaXMuc3R5bGUoXCJzdHJva2UtbWl0ZXJsaW1pdFwiKS5oYXNWYWx1ZSgpJiYodC5taXRlckxpbWl0PXRoaXMuc3R5bGUoXCJzdHJva2UtbWl0ZXJsaW1pdFwiKS52YWx1ZSksdGhpcy5zdHlsZShcInBhaW50LW9yZGVyXCIpLmhhc1ZhbHVlKCkmJih0LnBhaW50T3JkZXI9dGhpcy5zdHlsZShcInBhaW50LW9yZGVyXCIpLnZhbHVlKSx0aGlzLnN0eWxlKFwic3Ryb2tlLWRhc2hhcnJheVwiKS5oYXNWYWx1ZSgpJiZcIm5vbmVcIiE9dGhpcy5zdHlsZShcInN0cm9rZS1kYXNoYXJyYXlcIikudmFsdWUpe3ZhciByPUEuVG9OdW1iZXJBcnJheSh0aGlzLnN0eWxlKFwic3Ryb2tlLWRhc2hhcnJheVwiKS52YWx1ZSk7dm9pZCAwIT09dC5zZXRMaW5lRGFzaD90LnNldExpbmVEYXNoKHIpOnZvaWQgMCE9PXQud2Via2l0TGluZURhc2g/dC53ZWJraXRMaW5lRGFzaD1yOnZvaWQgMD09PXQubW96RGFzaHx8MT09ci5sZW5ndGgmJjA9PXJbMF18fCh0Lm1vekRhc2g9cik7dmFyIG89dGhpcy5zdHlsZShcInN0cm9rZS1kYXNob2Zmc2V0XCIpLnRvUGl4ZWxzKCk7dm9pZCAwIT09dC5saW5lRGFzaE9mZnNldD90LmxpbmVEYXNoT2Zmc2V0PW86dm9pZCAwIT09dC53ZWJraXRMaW5lRGFzaE9mZnNldD90LndlYmtpdExpbmVEYXNoT2Zmc2V0PW86dm9pZCAwIT09dC5tb3pEYXNoT2Zmc2V0JiYodC5tb3pEYXNoT2Zmc2V0PW8pfX1pZih2b2lkIDAhPT10LmZvbnQpe3QuZm9udD1BLkZvbnQuQ3JlYXRlRm9udCh0aGlzLnN0eWxlKFwiZm9udC1zdHlsZVwiKS52YWx1ZSx0aGlzLnN0eWxlKFwiZm9udC12YXJpYW50XCIpLnZhbHVlLHRoaXMuc3R5bGUoXCJmb250LXdlaWdodFwiKS52YWx1ZSx0aGlzLnN0eWxlKFwiZm9udC1zaXplXCIpLmhhc1ZhbHVlKCk/dGhpcy5zdHlsZShcImZvbnQtc2l6ZVwiKS50b1BpeGVscygpK1wicHhcIjpcIlwiLHRoaXMuc3R5bGUoXCJmb250LWZhbWlseVwiKS52YWx1ZSkudG9TdHJpbmcoKTt2YXIgbD10aGlzLnN0eWxlKFwiZm9udC1zaXplXCIsITEsITEpO2wuaXNQaXhlbHMoKSYmKEEuZW1TaXplPWwudG9QaXhlbHMoKSl9aWYodGhpcy5zdHlsZShcInRyYW5zZm9ybVwiLCExLCEwKS5oYXNWYWx1ZSgpJiZuZXcgQS5UcmFuc2Zvcm0odGhpcy5zdHlsZShcInRyYW5zZm9ybVwiLCExLCEwKS52YWx1ZSkuYXBwbHkodCksdGhpcy5zdHlsZShcImNsaXAtcGF0aFwiLCExLCEwKS5oYXNWYWx1ZSgpKXt2YXIgaD10aGlzLnN0eWxlKFwiY2xpcC1wYXRoXCIsITEsITApLmdldERlZmluaXRpb24oKTtudWxsIT1oJiZoLmFwcGx5KHQpfXQuZ2xvYmFsQWxwaGE9dGhpcy5jYWxjdWxhdGVPcGFjaXR5KCl9fSxBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsIT10JiZ0LmJlZ2luUGF0aCgpLG5ldyBBLkJvdW5kaW5nQm94fSx0aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe3RoaXMucGF0aCh0KSxBLk1vdXNlLmNoZWNrUGF0aCh0aGlzLHQpLFwiXCIhPXQuZmlsbFN0eWxlJiYoXCJpbmhlcml0XCIhPXRoaXMuc3R5bGUoXCJmaWxsLXJ1bGVcIikudmFsdWVPckRlZmF1bHQoXCJpbmhlcml0XCIpP3QuZmlsbCh0aGlzLnN0eWxlKFwiZmlsbC1ydWxlXCIpLnZhbHVlKTp0LmZpbGwoKSksXCJcIiE9dC5zdHJva2VTdHlsZSYmdC5zdHJva2UoKTt2YXIgZT10aGlzLmdldE1hcmtlcnMoKTtpZihudWxsIT1lKXtpZih0aGlzLnN0eWxlKFwibWFya2VyLXN0YXJ0XCIpLmlzVXJsRGVmaW5pdGlvbigpJiYoaT10aGlzLnN0eWxlKFwibWFya2VyLXN0YXJ0XCIpLmdldERlZmluaXRpb24oKSkucmVuZGVyKHQsZVswXVswXSxlWzBdWzFdKSx0aGlzLnN0eWxlKFwibWFya2VyLW1pZFwiKS5pc1VybERlZmluaXRpb24oKSlmb3IodmFyIGk9dGhpcy5zdHlsZShcIm1hcmtlci1taWRcIikuZ2V0RGVmaW5pdGlvbigpLG49MTtuPGUubGVuZ3RoLTE7bisrKWkucmVuZGVyKHQsZVtuXVswXSxlW25dWzFdKTt0aGlzLnN0eWxlKFwibWFya2VyLWVuZFwiKS5pc1VybERlZmluaXRpb24oKSYmKGk9dGhpcy5zdHlsZShcIm1hcmtlci1lbmRcIikuZ2V0RGVmaW5pdGlvbigpKS5yZW5kZXIodCxlW2UubGVuZ3RoLTFdWzBdLGVbZS5sZW5ndGgtMV1bMV0pfX0sdGhpcy5nZXRCb3VuZGluZ0JveD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnBhdGgoKX0sdGhpcy5nZXRNYXJrZXJzPWZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9fSxBLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsQS5FbGVtZW50LnN2Zz1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYmFzZUNsZWFyQ29udGV4dD10aGlzLmNsZWFyQ29udGV4dCx0aGlzLmNsZWFyQ29udGV4dD1mdW5jdGlvbih0KXt0aGlzLmJhc2VDbGVhckNvbnRleHQodCksQS5WaWV3UG9ydC5SZW1vdmVDdXJyZW50KCl9LHRoaXMuYmFzZVNldENvbnRleHQ9dGhpcy5zZXRDb250ZXh0LHRoaXMuc2V0Q29udGV4dD1mdW5jdGlvbih0KXtpZih0LnN0cm9rZVN0eWxlPVwicmdiYSgwLDAsMCwwKVwiLHQubGluZUNhcD1cImJ1dHRcIix0LmxpbmVKb2luPVwibWl0ZXJcIix0Lm1pdGVyTGltaXQ9NCx0LmNhbnZhcy5zdHlsZSYmdm9pZCAwIT09dC5mb250JiZ2b2lkIDAhPT11LmdldENvbXB1dGVkU3R5bGUpe3QuZm9udD11LmdldENvbXB1dGVkU3R5bGUodC5jYW52YXMpLmdldFByb3BlcnR5VmFsdWUoXCJmb250XCIpO3ZhciBlPW5ldyBBLlByb3BlcnR5KFwiZm9udFNpemVcIixBLkZvbnQuUGFyc2UodC5mb250KS5mb250U2l6ZSk7ZS5oYXNWYWx1ZSgpJiYoQS5yb290RW1TaXplPUEuZW1TaXplPWUudG9QaXhlbHMoXCJ5XCIpKX10aGlzLmJhc2VTZXRDb250ZXh0KHQpLHRoaXMuYXR0cmlidXRlKFwieFwiKS5oYXNWYWx1ZSgpfHwodGhpcy5hdHRyaWJ1dGUoXCJ4XCIsITApLnZhbHVlPTApLHRoaXMuYXR0cmlidXRlKFwieVwiKS5oYXNWYWx1ZSgpfHwodGhpcy5hdHRyaWJ1dGUoXCJ5XCIsITApLnZhbHVlPTApLHQudHJhbnNsYXRlKHRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksdGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLnRvUGl4ZWxzKFwieVwiKSk7dmFyIGk9QS5WaWV3UG9ydC53aWR0aCgpLG49QS5WaWV3UG9ydC5oZWlnaHQoKTtpZih0aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIsITApLnZhbHVlPVwiMTAwJVwiKSx0aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS5oYXNWYWx1ZSgpfHwodGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIiwhMCkudmFsdWU9XCIxMDAlXCIpLHZvaWQgMD09PXRoaXMucm9vdCl7aT10aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKSxuPXRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLnRvUGl4ZWxzKFwieVwiKTt2YXIgcz0wLGE9MDt0aGlzLmF0dHJpYnV0ZShcInJlZlhcIikuaGFzVmFsdWUoKSYmdGhpcy5hdHRyaWJ1dGUoXCJyZWZZXCIpLmhhc1ZhbHVlKCkmJihzPS10aGlzLmF0dHJpYnV0ZShcInJlZlhcIikudG9QaXhlbHMoXCJ4XCIpLGE9LXRoaXMuYXR0cmlidXRlKFwicmVmWVwiKS50b1BpeGVscyhcInlcIikpLFwidmlzaWJsZVwiIT10aGlzLmF0dHJpYnV0ZShcIm92ZXJmbG93XCIpLnZhbHVlT3JEZWZhdWx0KFwiaGlkZGVuXCIpJiYodC5iZWdpblBhdGgoKSx0Lm1vdmVUbyhzLGEpLHQubGluZVRvKGksYSksdC5saW5lVG8oaSxuKSx0LmxpbmVUbyhzLG4pLHQuY2xvc2VQYXRoKCksdC5jbGlwKCkpfWlmKEEuVmlld1BvcnQuU2V0Q3VycmVudChpLG4pLHRoaXMuYXR0cmlidXRlKFwidmlld0JveFwiKS5oYXNWYWx1ZSgpKXt2YXIgcj1BLlRvTnVtYmVyQXJyYXkodGhpcy5hdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpLnZhbHVlKSxvPXJbMF0sbD1yWzFdO2k9clsyXSxuPXJbM10sQS5Bc3BlY3RSYXRpbyh0LHRoaXMuYXR0cmlidXRlKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiKS52YWx1ZSxBLlZpZXdQb3J0LndpZHRoKCksaSxBLlZpZXdQb3J0LmhlaWdodCgpLG4sbyxsLHRoaXMuYXR0cmlidXRlKFwicmVmWFwiKS52YWx1ZSx0aGlzLmF0dHJpYnV0ZShcInJlZllcIikudmFsdWUpLEEuVmlld1BvcnQuUmVtb3ZlQ3VycmVudCgpLEEuVmlld1BvcnQuU2V0Q3VycmVudChyWzJdLHJbM10pfX19LEEuRWxlbWVudC5zdmcucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxBLkVsZW1lbnQucmVjdD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksaT10aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIikscz10aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIiksYT10aGlzLmF0dHJpYnV0ZShcInJ4XCIpLnRvUGl4ZWxzKFwieFwiKSxyPXRoaXMuYXR0cmlidXRlKFwicnlcIikudG9QaXhlbHMoXCJ5XCIpO2lmKHRoaXMuYXR0cmlidXRlKFwicnhcIikuaGFzVmFsdWUoKSYmIXRoaXMuYXR0cmlidXRlKFwicnlcIikuaGFzVmFsdWUoKSYmKHI9YSksdGhpcy5hdHRyaWJ1dGUoXCJyeVwiKS5oYXNWYWx1ZSgpJiYhdGhpcy5hdHRyaWJ1dGUoXCJyeFwiKS5oYXNWYWx1ZSgpJiYoYT1yKSxhPU1hdGgubWluKGEsbi8yKSxyPU1hdGgubWluKHIscy8yKSxudWxsIT10KXt2YXIgbz0oTWF0aC5zcXJ0KDIpLTEpLzMqNDt0LmJlZ2luUGF0aCgpLHQubW92ZVRvKGUrYSxpKSx0LmxpbmVUbyhlK24tYSxpKSx0LmJlemllckN1cnZlVG8oZStuLWErbyphLGksZStuLGkrci1vKnIsZStuLGkrciksdC5saW5lVG8oZStuLGkrcy1yKSx0LmJlemllckN1cnZlVG8oZStuLGkrcy1yK28qcixlK24tYStvKmEsaStzLGUrbi1hLGkrcyksdC5saW5lVG8oZSthLGkrcyksdC5iZXppZXJDdXJ2ZVRvKGUrYS1vKmEsaStzLGUsaStzLXIrbypyLGUsaStzLXIpLHQubGluZVRvKGUsaStyKSx0LmJlemllckN1cnZlVG8oZSxpK3ItbypyLGUrYS1vKmEsaSxlK2EsaSksdC5jbG9zZVBhdGgoKX1yZXR1cm4gbmV3IEEuQm91bmRpbmdCb3goZSxpLGUrbixpK3MpfX0sQS5FbGVtZW50LnJlY3QucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLEEuRWxlbWVudC5jaXJjbGU9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMucGF0aD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmF0dHJpYnV0ZShcImN4XCIpLnRvUGl4ZWxzKFwieFwiKSxpPXRoaXMuYXR0cmlidXRlKFwiY3lcIikudG9QaXhlbHMoXCJ5XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJyXCIpLnRvUGl4ZWxzKCk7cmV0dXJuIG51bGwhPXQmJih0LmJlZ2luUGF0aCgpLHQuYXJjKGUsaSxuLDAsMipNYXRoLlBJLCExKSx0LmNsb3NlUGF0aCgpKSxuZXcgQS5Cb3VuZGluZ0JveChlLW4saS1uLGUrbixpK24pfX0sQS5FbGVtZW50LmNpcmNsZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsQS5FbGVtZW50LmVsbGlwc2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMucGF0aD1mdW5jdGlvbih0KXt2YXIgZT0oTWF0aC5zcXJ0KDIpLTEpLzMqNCxpPXRoaXMuYXR0cmlidXRlKFwicnhcIikudG9QaXhlbHMoXCJ4XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJyeVwiKS50b1BpeGVscyhcInlcIikscz10aGlzLmF0dHJpYnV0ZShcImN4XCIpLnRvUGl4ZWxzKFwieFwiKSxhPXRoaXMuYXR0cmlidXRlKFwiY3lcIikudG9QaXhlbHMoXCJ5XCIpO3JldHVybiBudWxsIT10JiYodC5iZWdpblBhdGgoKSx0Lm1vdmVUbyhzK2ksYSksdC5iZXppZXJDdXJ2ZVRvKHMraSxhK2UqbixzK2UqaSxhK24scyxhK24pLHQuYmV6aWVyQ3VydmVUbyhzLWUqaSxhK24scy1pLGErZSpuLHMtaSxhKSx0LmJlemllckN1cnZlVG8ocy1pLGEtZSpuLHMtZSppLGEtbixzLGEtbiksdC5iZXppZXJDdXJ2ZVRvKHMrZSppLGEtbixzK2ksYS1lKm4scytpLGEpLHQuY2xvc2VQYXRoKCkpLG5ldyBBLkJvdW5kaW5nQm94KHMtaSxhLW4scytpLGErbil9fSxBLkVsZW1lbnQuZWxsaXBzZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsQS5FbGVtZW50LmxpbmU9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuZ2V0UG9pbnRzPWZ1bmN0aW9uKCl7cmV0dXJuW25ldyBBLlBvaW50KHRoaXMuYXR0cmlidXRlKFwieDFcIikudG9QaXhlbHMoXCJ4XCIpLHRoaXMuYXR0cmlidXRlKFwieTFcIikudG9QaXhlbHMoXCJ5XCIpKSxuZXcgQS5Qb2ludCh0aGlzLmF0dHJpYnV0ZShcIngyXCIpLnRvUGl4ZWxzKFwieFwiKSx0aGlzLmF0dHJpYnV0ZShcInkyXCIpLnRvUGl4ZWxzKFwieVwiKSldfSx0aGlzLnBhdGg9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5nZXRQb2ludHMoKTtyZXR1cm4gbnVsbCE9dCYmKHQuYmVnaW5QYXRoKCksdC5tb3ZlVG8oZVswXS54LGVbMF0ueSksdC5saW5lVG8oZVsxXS54LGVbMV0ueSkpLG5ldyBBLkJvdW5kaW5nQm94KGVbMF0ueCxlWzBdLnksZVsxXS54LGVbMV0ueSl9LHRoaXMuZ2V0TWFya2Vycz1mdW5jdGlvbigpe3ZhciB0PXRoaXMuZ2V0UG9pbnRzKCksZT10WzBdLmFuZ2xlVG8odFsxXSk7cmV0dXJuW1t0WzBdLGVdLFt0WzFdLGVdXX19LEEuRWxlbWVudC5saW5lLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSxBLkVsZW1lbnQucG9seWxpbmU9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMucG9pbnRzPUEuQ3JlYXRlUGF0aCh0aGlzLmF0dHJpYnV0ZShcInBvaW50c1wiKS52YWx1ZSksdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3ZhciBlPW5ldyBBLkJvdW5kaW5nQm94KHRoaXMucG9pbnRzWzBdLngsdGhpcy5wb2ludHNbMF0ueSk7bnVsbCE9dCYmKHQuYmVnaW5QYXRoKCksdC5tb3ZlVG8odGhpcy5wb2ludHNbMF0ueCx0aGlzLnBvaW50c1swXS55KSk7Zm9yKHZhciBpPTE7aTx0aGlzLnBvaW50cy5sZW5ndGg7aSsrKWUuYWRkUG9pbnQodGhpcy5wb2ludHNbaV0ueCx0aGlzLnBvaW50c1tpXS55KSxudWxsIT10JiZ0LmxpbmVUbyh0aGlzLnBvaW50c1tpXS54LHRoaXMucG9pbnRzW2ldLnkpO3JldHVybiBlfSx0aGlzLmdldE1hcmtlcnM9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10sZT0wO2U8dGhpcy5wb2ludHMubGVuZ3RoLTE7ZSsrKXQucHVzaChbdGhpcy5wb2ludHNbZV0sdGhpcy5wb2ludHNbZV0uYW5nbGVUbyh0aGlzLnBvaW50c1tlKzFdKV0pO3JldHVybiAwPHQubGVuZ3RoJiZ0LnB1c2goW3RoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aC0xXSx0W3QubGVuZ3RoLTFdWzFdXSksdH19LEEuRWxlbWVudC5wb2x5bGluZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsQS5FbGVtZW50LnBvbHlnb249ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5wb2x5bGluZSx0aGlzLmJhc2UodCksdGhpcy5iYXNlUGF0aD10aGlzLnBhdGgsdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuYmFzZVBhdGgodCk7cmV0dXJuIG51bGwhPXQmJih0LmxpbmVUbyh0aGlzLnBvaW50c1swXS54LHRoaXMucG9pbnRzWzBdLnkpLHQuY2xvc2VQYXRoKCkpLGV9fSxBLkVsZW1lbnQucG9seWdvbi5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5wb2x5bGluZSxBLkVsZW1lbnQucGF0aD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSx0aGlzLmJhc2UodCk7dmFyIGU9dGhpcy5hdHRyaWJ1dGUoXCJkXCIpLnZhbHVlO2U9ZS5yZXBsYWNlKC8sL2dtLFwiIFwiKTtmb3IodmFyIGk9MDtpPDI7aSsrKWU9ZS5yZXBsYWNlKC8oW01tWnpMbEhoVnZDY1NzUXFUdEFhXSkoW15cXHNdKS9nbSxcIiQxICQyXCIpO2ZvcihlPShlPWUucmVwbGFjZSgvKFteXFxzXSkoW01tWnpMbEhoVnZDY1NzUXFUdEFhXSkvZ20sXCIkMSAkMlwiKSkucmVwbGFjZSgvKFswLTldKShbK1xcLV0pL2dtLFwiJDEgJDJcIiksaT0wO2k8MjtpKyspZT1lLnJlcGxhY2UoLyhcXC5bMC05XSopKFxcLikvZ20sXCIkMSAkMlwiKTtlPWUucmVwbGFjZSgvKFtBYV0oXFxzK1swLTldKyl7M30pXFxzKyhbMDFdKVxccyooWzAxXSkvZ20sXCIkMSAkMyAkNCBcIiksZT1BLmNvbXByZXNzU3BhY2VzKGUpLGU9QS50cmltKGUpLHRoaXMuUGF0aFBhcnNlcj1uZXcgZnVuY3Rpb24odCl7dGhpcy50b2tlbnM9dC5zcGxpdChcIiBcIiksdGhpcy5yZXNldD1mdW5jdGlvbigpe3RoaXMuaT0tMSx0aGlzLmNvbW1hbmQ9XCJcIix0aGlzLnByZXZpb3VzQ29tbWFuZD1cIlwiLHRoaXMuc3RhcnQ9bmV3IEEuUG9pbnQoMCwwKSx0aGlzLmNvbnRyb2w9bmV3IEEuUG9pbnQoMCwwKSx0aGlzLmN1cnJlbnQ9bmV3IEEuUG9pbnQoMCwwKSx0aGlzLnBvaW50cz1bXSx0aGlzLmFuZ2xlcz1bXX0sdGhpcy5pc0VuZD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmk+PXRoaXMudG9rZW5zLmxlbmd0aC0xfSx0aGlzLmlzQ29tbWFuZE9yRW5kPWZ1bmN0aW9uKCl7cmV0dXJuISF0aGlzLmlzRW5kKCl8fG51bGwhPXRoaXMudG9rZW5zW3RoaXMuaSsxXS5tYXRjaCgvXltBLVphLXpdJC8pfSx0aGlzLmlzUmVsYXRpdmVDb21tYW5kPWZ1bmN0aW9uKCl7c3dpdGNoKHRoaXMuY29tbWFuZCl7Y2FzZVwibVwiOmNhc2VcImxcIjpjYXNlXCJoXCI6Y2FzZVwidlwiOmNhc2VcImNcIjpjYXNlXCJzXCI6Y2FzZVwicVwiOmNhc2VcInRcIjpjYXNlXCJhXCI6Y2FzZVwielwiOnJldHVybiEwfXJldHVybiExfSx0aGlzLmdldFRva2VuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaSsrLHRoaXMudG9rZW5zW3RoaXMuaV19LHRoaXMuZ2V0U2NhbGFyPWZ1bmN0aW9uKCl7cmV0dXJuIHBhcnNlRmxvYXQodGhpcy5nZXRUb2tlbigpKX0sdGhpcy5uZXh0Q29tbWFuZD1mdW5jdGlvbigpe3RoaXMucHJldmlvdXNDb21tYW5kPXRoaXMuY29tbWFuZCx0aGlzLmNvbW1hbmQ9dGhpcy5nZXRUb2tlbigpfSx0aGlzLmdldFBvaW50PWZ1bmN0aW9uKCl7dmFyIHQ9bmV3IEEuUG9pbnQodGhpcy5nZXRTY2FsYXIoKSx0aGlzLmdldFNjYWxhcigpKTtyZXR1cm4gdGhpcy5tYWtlQWJzb2x1dGUodCl9LHRoaXMuZ2V0QXNDb250cm9sUG9pbnQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmdldFBvaW50KCk7cmV0dXJuIHRoaXMuY29udHJvbD10fSx0aGlzLmdldEFzQ3VycmVudFBvaW50PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5nZXRQb2ludCgpO3JldHVybiB0aGlzLmN1cnJlbnQ9dH0sdGhpcy5nZXRSZWZsZWN0ZWRDb250cm9sUG9pbnQ9ZnVuY3Rpb24oKXtyZXR1cm5cImNcIiE9dGhpcy5wcmV2aW91c0NvbW1hbmQudG9Mb3dlckNhc2UoKSYmXCJzXCIhPXRoaXMucHJldmlvdXNDb21tYW5kLnRvTG93ZXJDYXNlKCkmJlwicVwiIT10aGlzLnByZXZpb3VzQ29tbWFuZC50b0xvd2VyQ2FzZSgpJiZcInRcIiE9dGhpcy5wcmV2aW91c0NvbW1hbmQudG9Mb3dlckNhc2UoKT90aGlzLmN1cnJlbnQ6bmV3IEEuUG9pbnQoMip0aGlzLmN1cnJlbnQueC10aGlzLmNvbnRyb2wueCwyKnRoaXMuY3VycmVudC55LXRoaXMuY29udHJvbC55KX0sdGhpcy5tYWtlQWJzb2x1dGU9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuaXNSZWxhdGl2ZUNvbW1hbmQoKSYmKHQueCs9dGhpcy5jdXJyZW50LngsdC55Kz10aGlzLmN1cnJlbnQueSksdH0sdGhpcy5hZGRNYXJrZXI9ZnVuY3Rpb24odCxlLGkpe251bGwhPWkmJjA8dGhpcy5hbmdsZXMubGVuZ3RoJiZudWxsPT10aGlzLmFuZ2xlc1t0aGlzLmFuZ2xlcy5sZW5ndGgtMV0mJih0aGlzLmFuZ2xlc1t0aGlzLmFuZ2xlcy5sZW5ndGgtMV09dGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoLTFdLmFuZ2xlVG8oaSkpLHRoaXMuYWRkTWFya2VyQW5nbGUodCxudWxsPT1lP251bGw6ZS5hbmdsZVRvKHQpKX0sdGhpcy5hZGRNYXJrZXJBbmdsZT1mdW5jdGlvbih0LGUpe3RoaXMucG9pbnRzLnB1c2godCksdGhpcy5hbmdsZXMucHVzaChlKX0sdGhpcy5nZXRNYXJrZXJQb2ludHM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wb2ludHN9LHRoaXMuZ2V0TWFya2VyQW5nbGVzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PTA7dDx0aGlzLmFuZ2xlcy5sZW5ndGg7dCsrKWlmKG51bGw9PXRoaXMuYW5nbGVzW3RdKWZvcih2YXIgZT10KzE7ZTx0aGlzLmFuZ2xlcy5sZW5ndGg7ZSsrKWlmKG51bGwhPXRoaXMuYW5nbGVzW2VdKXt0aGlzLmFuZ2xlc1t0XT10aGlzLmFuZ2xlc1tlXTticmVha31yZXR1cm4gdGhpcy5hbmdsZXN9fShlKSx0aGlzLnBhdGg9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5QYXRoUGFyc2VyO2UucmVzZXQoKTt2YXIgaT1uZXcgQS5Cb3VuZGluZ0JveDtmb3IobnVsbCE9dCYmdC5iZWdpblBhdGgoKTshZS5pc0VuZCgpOylzd2l0Y2goZS5uZXh0Q29tbWFuZCgpLGUuY29tbWFuZCl7Y2FzZVwiTVwiOmNhc2VcIm1cIjp2YXIgbj1lLmdldEFzQ3VycmVudFBvaW50KCk7Zm9yKGUuYWRkTWFya2VyKG4pLGkuYWRkUG9pbnQobi54LG4ueSksbnVsbCE9dCYmdC5tb3ZlVG8obi54LG4ueSksZS5zdGFydD1lLmN1cnJlbnQ7IWUuaXNDb21tYW5kT3JFbmQoKTspbj1lLmdldEFzQ3VycmVudFBvaW50KCksZS5hZGRNYXJrZXIobixlLnN0YXJ0KSxpLmFkZFBvaW50KG4ueCxuLnkpLG51bGwhPXQmJnQubGluZVRvKG4ueCxuLnkpO2JyZWFrO2Nhc2VcIkxcIjpjYXNlXCJsXCI6Zm9yKDshZS5pc0NvbW1hbmRPckVuZCgpOyl7dmFyIHM9ZS5jdXJyZW50O249ZS5nZXRBc0N1cnJlbnRQb2ludCgpLGUuYWRkTWFya2VyKG4scyksaS5hZGRQb2ludChuLngsbi55KSxudWxsIT10JiZ0LmxpbmVUbyhuLngsbi55KX1icmVhaztjYXNlXCJIXCI6Y2FzZVwiaFwiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspe3ZhciBhPW5ldyBBLlBvaW50KChlLmlzUmVsYXRpdmVDb21tYW5kKCk/ZS5jdXJyZW50Lng6MCkrZS5nZXRTY2FsYXIoKSxlLmN1cnJlbnQueSk7ZS5hZGRNYXJrZXIoYSxlLmN1cnJlbnQpLGUuY3VycmVudD1hLGkuYWRkUG9pbnQoZS5jdXJyZW50LngsZS5jdXJyZW50LnkpLG51bGwhPXQmJnQubGluZVRvKGUuY3VycmVudC54LGUuY3VycmVudC55KX1icmVhaztjYXNlXCJWXCI6Y2FzZVwidlwiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspYT1uZXcgQS5Qb2ludChlLmN1cnJlbnQueCwoZS5pc1JlbGF0aXZlQ29tbWFuZCgpP2UuY3VycmVudC55OjApK2UuZ2V0U2NhbGFyKCkpLGUuYWRkTWFya2VyKGEsZS5jdXJyZW50KSxlLmN1cnJlbnQ9YSxpLmFkZFBvaW50KGUuY3VycmVudC54LGUuY3VycmVudC55KSxudWxsIT10JiZ0LmxpbmVUbyhlLmN1cnJlbnQueCxlLmN1cnJlbnQueSk7YnJlYWs7Y2FzZVwiQ1wiOmNhc2VcImNcIjpmb3IoOyFlLmlzQ29tbWFuZE9yRW5kKCk7KXt2YXIgcj1lLmN1cnJlbnQsbz1lLmdldFBvaW50KCksbD1lLmdldEFzQ29udHJvbFBvaW50KCksaD1lLmdldEFzQ3VycmVudFBvaW50KCk7ZS5hZGRNYXJrZXIoaCxsLG8pLGkuYWRkQmV6aWVyQ3VydmUoci54LHIueSxvLngsby55LGwueCxsLnksaC54LGgueSksbnVsbCE9dCYmdC5iZXppZXJDdXJ2ZVRvKG8ueCxvLnksbC54LGwueSxoLngsaC55KX1icmVhaztjYXNlXCJTXCI6Y2FzZVwic1wiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspcj1lLmN1cnJlbnQsbz1lLmdldFJlZmxlY3RlZENvbnRyb2xQb2ludCgpLGw9ZS5nZXRBc0NvbnRyb2xQb2ludCgpLGg9ZS5nZXRBc0N1cnJlbnRQb2ludCgpLGUuYWRkTWFya2VyKGgsbCxvKSxpLmFkZEJlemllckN1cnZlKHIueCxyLnksby54LG8ueSxsLngsbC55LGgueCxoLnkpLG51bGwhPXQmJnQuYmV6aWVyQ3VydmVUbyhvLngsby55LGwueCxsLnksaC54LGgueSk7YnJlYWs7Y2FzZVwiUVwiOmNhc2VcInFcIjpmb3IoOyFlLmlzQ29tbWFuZE9yRW5kKCk7KXI9ZS5jdXJyZW50LGw9ZS5nZXRBc0NvbnRyb2xQb2ludCgpLGg9ZS5nZXRBc0N1cnJlbnRQb2ludCgpLGUuYWRkTWFya2VyKGgsbCxsKSxpLmFkZFF1YWRyYXRpY0N1cnZlKHIueCxyLnksbC54LGwueSxoLngsaC55KSxudWxsIT10JiZ0LnF1YWRyYXRpY0N1cnZlVG8obC54LGwueSxoLngsaC55KTticmVhaztjYXNlXCJUXCI6Y2FzZVwidFwiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspcj1lLmN1cnJlbnQsbD1lLmdldFJlZmxlY3RlZENvbnRyb2xQb2ludCgpLGUuY29udHJvbD1sLGg9ZS5nZXRBc0N1cnJlbnRQb2ludCgpLGUuYWRkTWFya2VyKGgsbCxsKSxpLmFkZFF1YWRyYXRpY0N1cnZlKHIueCxyLnksbC54LGwueSxoLngsaC55KSxudWxsIT10JiZ0LnF1YWRyYXRpY0N1cnZlVG8obC54LGwueSxoLngsaC55KTticmVhaztjYXNlXCJBXCI6Y2FzZVwiYVwiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspe3I9ZS5jdXJyZW50O3ZhciB1PWUuZ2V0U2NhbGFyKCksYz1lLmdldFNjYWxhcigpLGY9ZS5nZXRTY2FsYXIoKSooTWF0aC5QSS8xODApLG09ZS5nZXRTY2FsYXIoKSxwPWUuZ2V0U2NhbGFyKCksZD0oaD1lLmdldEFzQ3VycmVudFBvaW50KCksbmV3IEEuUG9pbnQoTWF0aC5jb3MoZikqKHIueC1oLngpLzIrTWF0aC5zaW4oZikqKHIueS1oLnkpLzIsLU1hdGguc2luKGYpKihyLngtaC54KS8yK01hdGguY29zKGYpKihyLnktaC55KS8yKSkseT1NYXRoLnBvdyhkLngsMikvTWF0aC5wb3codSwyKStNYXRoLnBvdyhkLnksMikvTWF0aC5wb3coYywyKTsxPHkmJih1Kj1NYXRoLnNxcnQoeSksYyo9TWF0aC5zcXJ0KHkpKTt2YXIgdj0obT09cD8tMToxKSpNYXRoLnNxcnQoKE1hdGgucG93KHUsMikqTWF0aC5wb3coYywyKS1NYXRoLnBvdyh1LDIpKk1hdGgucG93KGQueSwyKS1NYXRoLnBvdyhjLDIpKk1hdGgucG93KGQueCwyKSkvKE1hdGgucG93KHUsMikqTWF0aC5wb3coZC55LDIpK01hdGgucG93KGMsMikqTWF0aC5wb3coZC54LDIpKSk7aXNOYU4odikmJih2PTApO3ZhciBnPW5ldyBBLlBvaW50KHYqdSpkLnkvYyx2Ki1jKmQueC91KSx4PW5ldyBBLlBvaW50KChyLngraC54KS8yK01hdGguY29zKGYpKmcueC1NYXRoLnNpbihmKSpnLnksKHIueStoLnkpLzIrTWF0aC5zaW4oZikqZy54K01hdGguY29zKGYpKmcueSksYj1mdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHRbMF0sMikrTWF0aC5wb3codFsxXSwyKSl9LFA9ZnVuY3Rpb24odCxlKXtyZXR1cm4odFswXSplWzBdK3RbMV0qZVsxXSkvKGIodCkqYihlKSl9LEU9ZnVuY3Rpb24odCxlKXtyZXR1cm4odFswXSplWzFdPHRbMV0qZVswXT8tMToxKSpNYXRoLmFjb3MoUCh0LGUpKX0sdz1FKFsxLDBdLFsoZC54LWcueCkvdSwoZC55LWcueSkvY10pLEI9WyhkLngtZy54KS91LChkLnktZy55KS9jXSxDPVsoLWQueC1nLngpL3UsKC1kLnktZy55KS9jXSxUPUUoQixDKTtQKEIsQyk8PS0xJiYoVD1NYXRoLlBJKSwxPD1QKEIsQykmJihUPTApO3ZhciBWPTEtcD8xOi0xLE09dytWKihULzIpLFM9bmV3IEEuUG9pbnQoeC54K3UqTWF0aC5jb3MoTSkseC55K2MqTWF0aC5zaW4oTSkpO2lmKGUuYWRkTWFya2VyQW5nbGUoUyxNLVYqTWF0aC5QSS8yKSxlLmFkZE1hcmtlckFuZ2xlKGgsTS1WKk1hdGguUEkpLGkuYWRkUG9pbnQoaC54LGgueSksbnVsbCE9dCl7UD1jPHU/dTpjO3ZhciBrPWM8dT8xOnUvYyxEPWM8dT9jL3U6MTt0LnRyYW5zbGF0ZSh4LngseC55KSx0LnJvdGF0ZShmKSx0LnNjYWxlKGssRCksdC5hcmMoMCwwLFAsdyx3K1QsMS1wKSx0LnNjYWxlKDEvaywxL0QpLHQucm90YXRlKC1mKSx0LnRyYW5zbGF0ZSgteC54LC14LnkpfX1icmVhaztjYXNlXCJaXCI6Y2FzZVwielwiOm51bGwhPXQmJmkueDEhPT1pLngyJiZpLnkxIT09aS55MiYmdC5jbG9zZVBhdGgoKSxlLmN1cnJlbnQ9ZS5zdGFydH1yZXR1cm4gaX0sdGhpcy5nZXRNYXJrZXJzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMuUGF0aFBhcnNlci5nZXRNYXJrZXJQb2ludHMoKSxlPXRoaXMuUGF0aFBhcnNlci5nZXRNYXJrZXJBbmdsZXMoKSxpPVtdLG49MDtuPHQubGVuZ3RoO24rKylpLnB1c2goW3Rbbl0sZVtuXV0pO3JldHVybiBpfX0sQS5FbGVtZW50LnBhdGgucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLEEuRWxlbWVudC5wYXR0ZXJuPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuY3JlYXRlUGF0dGVybj1mdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIsITApLG49dGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIsITApLHM9bmV3IEEuRWxlbWVudC5zdmc7cy5hdHRyaWJ1dGVzLnZpZXdCb3g9bmV3IEEuUHJvcGVydHkoXCJ2aWV3Qm94XCIsdGhpcy5hdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpLnZhbHVlKSxzLmF0dHJpYnV0ZXMud2lkdGg9bmV3IEEuUHJvcGVydHkoXCJ3aWR0aFwiLGkrXCJweFwiKSxzLmF0dHJpYnV0ZXMuaGVpZ2h0PW5ldyBBLlByb3BlcnR5KFwiaGVpZ2h0XCIsbitcInB4XCIpLHMuYXR0cmlidXRlcy50cmFuc2Zvcm09bmV3IEEuUHJvcGVydHkoXCJ0cmFuc2Zvcm1cIix0aGlzLmF0dHJpYnV0ZShcInBhdHRlcm5UcmFuc2Zvcm1cIikudmFsdWUpLHMuY2hpbGRyZW49dGhpcy5jaGlsZHJlbjt2YXIgYT1wKCk7YS53aWR0aD1pLGEuaGVpZ2h0PW47dmFyIHI9YS5nZXRDb250ZXh0KFwiMmRcIik7dGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLmhhc1ZhbHVlKCkmJnRoaXMuYXR0cmlidXRlKFwieVwiKS5oYXNWYWx1ZSgpJiZyLnRyYW5zbGF0ZSh0aGlzLmF0dHJpYnV0ZShcInhcIikudG9QaXhlbHMoXCJ4XCIsITApLHRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIiwhMCkpO2Zvcih2YXIgbz0tMTtvPD0xO28rKylmb3IodmFyIGw9LTE7bDw9MTtsKyspci5zYXZlKCkscy5hdHRyaWJ1dGVzLng9bmV3IEEuUHJvcGVydHkoXCJ4XCIsbyphLndpZHRoKSxzLmF0dHJpYnV0ZXMueT1uZXcgQS5Qcm9wZXJ0eShcInlcIixsKmEuaGVpZ2h0KSxzLnJlbmRlcihyKSxyLnJlc3RvcmUoKTtyZXR1cm4gdC5jcmVhdGVQYXR0ZXJuKGEsXCJyZXBlYXRcIil9fSxBLkVsZW1lbnQucGF0dGVybi5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQubWFya2VyPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYmFzZVJlbmRlcj10aGlzLnJlbmRlcix0aGlzLnJlbmRlcj1mdW5jdGlvbih0LGUsaSl7aWYoZSl7dC50cmFuc2xhdGUoZS54LGUueSksXCJhdXRvXCI9PXRoaXMuYXR0cmlidXRlKFwib3JpZW50XCIpLnZhbHVlT3JEZWZhdWx0KFwiYXV0b1wiKSYmdC5yb3RhdGUoaSksXCJzdHJva2VXaWR0aFwiPT10aGlzLmF0dHJpYnV0ZShcIm1hcmtlclVuaXRzXCIpLnZhbHVlT3JEZWZhdWx0KFwic3Ryb2tlV2lkdGhcIikmJnQuc2NhbGUodC5saW5lV2lkdGgsdC5saW5lV2lkdGgpLHQuc2F2ZSgpO3ZhciBuPW5ldyBBLkVsZW1lbnQuc3ZnO24uYXR0cmlidXRlcy52aWV3Qm94PW5ldyBBLlByb3BlcnR5KFwidmlld0JveFwiLHRoaXMuYXR0cmlidXRlKFwidmlld0JveFwiKS52YWx1ZSksbi5hdHRyaWJ1dGVzLnJlZlg9bmV3IEEuUHJvcGVydHkoXCJyZWZYXCIsdGhpcy5hdHRyaWJ1dGUoXCJyZWZYXCIpLnZhbHVlKSxuLmF0dHJpYnV0ZXMucmVmWT1uZXcgQS5Qcm9wZXJ0eShcInJlZllcIix0aGlzLmF0dHJpYnV0ZShcInJlZllcIikudmFsdWUpLG4uYXR0cmlidXRlcy53aWR0aD1uZXcgQS5Qcm9wZXJ0eShcIndpZHRoXCIsdGhpcy5hdHRyaWJ1dGUoXCJtYXJrZXJXaWR0aFwiKS52YWx1ZSksbi5hdHRyaWJ1dGVzLmhlaWdodD1uZXcgQS5Qcm9wZXJ0eShcImhlaWdodFwiLHRoaXMuYXR0cmlidXRlKFwibWFya2VySGVpZ2h0XCIpLnZhbHVlKSxuLmF0dHJpYnV0ZXMuZmlsbD1uZXcgQS5Qcm9wZXJ0eShcImZpbGxcIix0aGlzLmF0dHJpYnV0ZShcImZpbGxcIikudmFsdWVPckRlZmF1bHQoXCJibGFja1wiKSksbi5hdHRyaWJ1dGVzLnN0cm9rZT1uZXcgQS5Qcm9wZXJ0eShcInN0cm9rZVwiLHRoaXMuYXR0cmlidXRlKFwic3Ryb2tlXCIpLnZhbHVlT3JEZWZhdWx0KFwibm9uZVwiKSksbi5jaGlsZHJlbj10aGlzLmNoaWxkcmVuLG4ucmVuZGVyKHQpLHQucmVzdG9yZSgpLFwic3Ryb2tlV2lkdGhcIj09dGhpcy5hdHRyaWJ1dGUoXCJtYXJrZXJVbml0c1wiKS52YWx1ZU9yRGVmYXVsdChcInN0cm9rZVdpZHRoXCIpJiZ0LnNjYWxlKDEvdC5saW5lV2lkdGgsMS90LmxpbmVXaWR0aCksXCJhdXRvXCI9PXRoaXMuYXR0cmlidXRlKFwib3JpZW50XCIpLnZhbHVlT3JEZWZhdWx0KFwiYXV0b1wiKSYmdC5yb3RhdGUoLWkpLHQudHJhbnNsYXRlKC1lLngsLWUueSl9fX0sQS5FbGVtZW50Lm1hcmtlci5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuZGVmcz1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnJlbmRlcj1mdW5jdGlvbih0KXt9fSxBLkVsZW1lbnQuZGVmcy5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuR3JhZGllbnRCYXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuc3RvcHM9W107Zm9yKHZhciBlPTA7ZTx0aGlzLmNoaWxkcmVuLmxlbmd0aDtlKyspe3ZhciBpPXRoaXMuY2hpbGRyZW5bZV07XCJzdG9wXCI9PWkudHlwZSYmdGhpcy5zdG9wcy5wdXNoKGkpfXRoaXMuZ2V0R3JhZGllbnQ9ZnVuY3Rpb24oKXt9LHRoaXMuZ3JhZGllbnRVbml0cz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmF0dHJpYnV0ZShcImdyYWRpZW50VW5pdHNcIikudmFsdWVPckRlZmF1bHQoXCJvYmplY3RCb3VuZGluZ0JveFwiKX0sdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0PVtcImdyYWRpZW50VW5pdHNcIl0sdGhpcy5pbmhlcml0U3RvcENvbnRhaW5lcj1mdW5jdGlvbih0KXtmb3IodmFyIGU9MDtlPHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5sZW5ndGg7ZSsrKXt2YXIgaT10aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXRbZV07IXRoaXMuYXR0cmlidXRlKGkpLmhhc1ZhbHVlKCkmJnQuYXR0cmlidXRlKGkpLmhhc1ZhbHVlKCkmJih0aGlzLmF0dHJpYnV0ZShpLCEwKS52YWx1ZT10LmF0dHJpYnV0ZShpKS52YWx1ZSl9fSx0aGlzLmNyZWF0ZUdyYWRpZW50PWZ1bmN0aW9uKHQsZSxpKXt2YXIgbj10aGlzO3RoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLmhhc1ZhbHVlKCkmJihuPXRoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLmdldERlZmluaXRpb24oKSx0aGlzLmluaGVyaXRTdG9wQ29udGFpbmVyKG4pKTt2YXIgcz1mdW5jdGlvbih0KXtyZXR1cm4gaS5oYXNWYWx1ZSgpP25ldyBBLlByb3BlcnR5KFwiY29sb3JcIix0KS5hZGRPcGFjaXR5KGkpLnZhbHVlOnR9LGE9dGhpcy5nZXRHcmFkaWVudCh0LGUpO2lmKG51bGw9PWEpcmV0dXJuIHMobi5zdG9wc1tuLnN0b3BzLmxlbmd0aC0xXS5jb2xvcik7Zm9yKHZhciByPTA7cjxuLnN0b3BzLmxlbmd0aDtyKyspYS5hZGRDb2xvclN0b3Aobi5zdG9wc1tyXS5vZmZzZXQscyhuLnN0b3BzW3JdLmNvbG9yKSk7aWYodGhpcy5hdHRyaWJ1dGUoXCJncmFkaWVudFRyYW5zZm9ybVwiKS5oYXNWYWx1ZSgpKXt2YXIgbz1BLlZpZXdQb3J0LnZpZXdQb3J0c1swXSxsPW5ldyBBLkVsZW1lbnQucmVjdDtsLmF0dHJpYnV0ZXMueD1uZXcgQS5Qcm9wZXJ0eShcInhcIiwtQS5NQVhfVklSVFVBTF9QSVhFTFMvMyksbC5hdHRyaWJ1dGVzLnk9bmV3IEEuUHJvcGVydHkoXCJ5XCIsLUEuTUFYX1ZJUlRVQUxfUElYRUxTLzMpLGwuYXR0cmlidXRlcy53aWR0aD1uZXcgQS5Qcm9wZXJ0eShcIndpZHRoXCIsQS5NQVhfVklSVFVBTF9QSVhFTFMpLGwuYXR0cmlidXRlcy5oZWlnaHQ9bmV3IEEuUHJvcGVydHkoXCJoZWlnaHRcIixBLk1BWF9WSVJUVUFMX1BJWEVMUyk7dmFyIGg9bmV3IEEuRWxlbWVudC5nO2guYXR0cmlidXRlcy50cmFuc2Zvcm09bmV3IEEuUHJvcGVydHkoXCJ0cmFuc2Zvcm1cIix0aGlzLmF0dHJpYnV0ZShcImdyYWRpZW50VHJhbnNmb3JtXCIpLnZhbHVlKSxoLmNoaWxkcmVuPVtsXTt2YXIgdT1uZXcgQS5FbGVtZW50LnN2Zzt1LmF0dHJpYnV0ZXMueD1uZXcgQS5Qcm9wZXJ0eShcInhcIiwwKSx1LmF0dHJpYnV0ZXMueT1uZXcgQS5Qcm9wZXJ0eShcInlcIiwwKSx1LmF0dHJpYnV0ZXMud2lkdGg9bmV3IEEuUHJvcGVydHkoXCJ3aWR0aFwiLG8ud2lkdGgpLHUuYXR0cmlidXRlcy5oZWlnaHQ9bmV3IEEuUHJvcGVydHkoXCJoZWlnaHRcIixvLmhlaWdodCksdS5jaGlsZHJlbj1baF07dmFyIGM9cCgpO2Mud2lkdGg9by53aWR0aCxjLmhlaWdodD1vLmhlaWdodDt2YXIgZj1jLmdldENvbnRleHQoXCIyZFwiKTtyZXR1cm4gZi5maWxsU3R5bGU9YSx1LnJlbmRlcihmKSxmLmNyZWF0ZVBhdHRlcm4oYyxcIm5vLXJlcGVhdFwiKX1yZXR1cm4gYX19LEEuRWxlbWVudC5HcmFkaWVudEJhc2UucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmxpbmVhckdyYWRpZW50PWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuR3JhZGllbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcIngxXCIpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwieTFcIiksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJ4MlwiKSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcInkyXCIpLHRoaXMuZ2V0R3JhZGllbnQ9ZnVuY3Rpb24odCxlKXt2YXIgaT1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2UuZ2V0Qm91bmRpbmdCb3godCk6bnVsbDt0aGlzLmF0dHJpYnV0ZShcIngxXCIpLmhhc1ZhbHVlKCl8fHRoaXMuYXR0cmlidXRlKFwieTFcIikuaGFzVmFsdWUoKXx8dGhpcy5hdHRyaWJ1dGUoXCJ4MlwiKS5oYXNWYWx1ZSgpfHx0aGlzLmF0dHJpYnV0ZShcInkyXCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcIngxXCIsITApLnZhbHVlPTAsdGhpcy5hdHRyaWJ1dGUoXCJ5MVwiLCEwKS52YWx1ZT0wLHRoaXMuYXR0cmlidXRlKFwieDJcIiwhMCkudmFsdWU9MSx0aGlzLmF0dHJpYnV0ZShcInkyXCIsITApLnZhbHVlPTApO3ZhciBuPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/aS54KCkraS53aWR0aCgpKnRoaXMuYXR0cmlidXRlKFwieDFcIikubnVtVmFsdWUoKTp0aGlzLmF0dHJpYnV0ZShcIngxXCIpLnRvUGl4ZWxzKFwieFwiKSxzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/aS55KCkraS5oZWlnaHQoKSp0aGlzLmF0dHJpYnV0ZShcInkxXCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJ5MVwiKS50b1BpeGVscyhcInlcIiksYT1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2kueCgpK2kud2lkdGgoKSp0aGlzLmF0dHJpYnV0ZShcIngyXCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJ4MlwiKS50b1BpeGVscyhcInhcIikscj1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2kueSgpK2kuaGVpZ2h0KCkqdGhpcy5hdHRyaWJ1dGUoXCJ5MlwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwieTJcIikudG9QaXhlbHMoXCJ5XCIpO3JldHVybiBuPT1hJiZzPT1yP251bGw6dC5jcmVhdGVMaW5lYXJHcmFkaWVudChuLHMsYSxyKX19LEEuRWxlbWVudC5saW5lYXJHcmFkaWVudC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5HcmFkaWVudEJhc2UsQS5FbGVtZW50LnJhZGlhbEdyYWRpZW50PWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuR3JhZGllbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcImN4XCIpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwiY3lcIiksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJyXCIpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwiZnhcIiksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJmeVwiKSx0aGlzLmdldEdyYWRpZW50PWZ1bmN0aW9uKHQsZSl7dmFyIGk9ZS5nZXRCb3VuZGluZ0JveCh0KTt0aGlzLmF0dHJpYnV0ZShcImN4XCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcImN4XCIsITApLnZhbHVlPVwiNTAlXCIpLHRoaXMuYXR0cmlidXRlKFwiY3lcIikuaGFzVmFsdWUoKXx8KHRoaXMuYXR0cmlidXRlKFwiY3lcIiwhMCkudmFsdWU9XCI1MCVcIiksdGhpcy5hdHRyaWJ1dGUoXCJyXCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcInJcIiwhMCkudmFsdWU9XCI1MCVcIik7dmFyIG49XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLngoKStpLndpZHRoKCkqdGhpcy5hdHRyaWJ1dGUoXCJjeFwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwiY3hcIikudG9QaXhlbHMoXCJ4XCIpLHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLnkoKStpLmhlaWdodCgpKnRoaXMuYXR0cmlidXRlKFwiY3lcIikubnVtVmFsdWUoKTp0aGlzLmF0dHJpYnV0ZShcImN5XCIpLnRvUGl4ZWxzKFwieVwiKSxhPW4scj1zO3RoaXMuYXR0cmlidXRlKFwiZnhcIikuaGFzVmFsdWUoKSYmKGE9XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLngoKStpLndpZHRoKCkqdGhpcy5hdHRyaWJ1dGUoXCJmeFwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwiZnhcIikudG9QaXhlbHMoXCJ4XCIpKSx0aGlzLmF0dHJpYnV0ZShcImZ5XCIpLmhhc1ZhbHVlKCkmJihyPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/aS55KCkraS5oZWlnaHQoKSp0aGlzLmF0dHJpYnV0ZShcImZ5XCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJmeVwiKS50b1BpeGVscyhcInlcIikpO3ZhciBvPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/KGkud2lkdGgoKStpLmhlaWdodCgpKS8yKnRoaXMuYXR0cmlidXRlKFwiclwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwiclwiKS50b1BpeGVscygpO3JldHVybiB0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGEsciwwLG4scyxvKX19LEEuRWxlbWVudC5yYWRpYWxHcmFkaWVudC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5HcmFkaWVudEJhc2UsQS5FbGVtZW50LnN0b3A9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5vZmZzZXQ9dGhpcy5hdHRyaWJ1dGUoXCJvZmZzZXRcIikubnVtVmFsdWUoKSx0aGlzLm9mZnNldDwwJiYodGhpcy5vZmZzZXQ9MCksMTx0aGlzLm9mZnNldCYmKHRoaXMub2Zmc2V0PTEpO3ZhciBlPXRoaXMuc3R5bGUoXCJzdG9wLWNvbG9yXCIsITApO1wiXCI9PT1lLnZhbHVlJiYoZS52YWx1ZT1cIiMwMDBcIiksdGhpcy5zdHlsZShcInN0b3Atb3BhY2l0eVwiKS5oYXNWYWx1ZSgpJiYoZT1lLmFkZE9wYWNpdHkodGhpcy5zdHlsZShcInN0b3Atb3BhY2l0eVwiKSkpLHRoaXMuY29sb3I9ZS52YWx1ZX0sQS5FbGVtZW50LnN0b3AucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LkFuaW1hdGVCYXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLEEuQW5pbWF0aW9ucy5wdXNoKHRoaXMpLHRoaXMuZHVyYXRpb249MCx0aGlzLmJlZ2luPXRoaXMuYXR0cmlidXRlKFwiYmVnaW5cIikudG9NaWxsaXNlY29uZHMoKSx0aGlzLm1heER1cmF0aW9uPXRoaXMuYmVnaW4rdGhpcy5hdHRyaWJ1dGUoXCJkdXJcIikudG9NaWxsaXNlY29uZHMoKSx0aGlzLmdldFByb3BlcnR5PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5hdHRyaWJ1dGUoXCJhdHRyaWJ1dGVUeXBlXCIpLnZhbHVlLGU9dGhpcy5hdHRyaWJ1dGUoXCJhdHRyaWJ1dGVOYW1lXCIpLnZhbHVlO3JldHVyblwiQ1NTXCI9PXQ/dGhpcy5wYXJlbnQuc3R5bGUoZSwhMCk6dGhpcy5wYXJlbnQuYXR0cmlidXRlKGUsITApfSx0aGlzLmluaXRpYWxWYWx1ZT1udWxsLHRoaXMuaW5pdGlhbFVuaXRzPVwiXCIsdGhpcy5yZW1vdmVkPSExLHRoaXMuY2FsY1ZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuXCJcIn0sdGhpcy51cGRhdGU9ZnVuY3Rpb24odCl7aWYobnVsbD09dGhpcy5pbml0aWFsVmFsdWUmJih0aGlzLmluaXRpYWxWYWx1ZT10aGlzLmdldFByb3BlcnR5KCkudmFsdWUsdGhpcy5pbml0aWFsVW5pdHM9dGhpcy5nZXRQcm9wZXJ0eSgpLmdldFVuaXRzKCkpLHRoaXMuZHVyYXRpb24+dGhpcy5tYXhEdXJhdGlvbil7aWYoXCJpbmRlZmluaXRlXCI9PXRoaXMuYXR0cmlidXRlKFwicmVwZWF0Q291bnRcIikudmFsdWV8fFwiaW5kZWZpbml0ZVwiPT10aGlzLmF0dHJpYnV0ZShcInJlcGVhdER1clwiKS52YWx1ZSl0aGlzLmR1cmF0aW9uPTA7ZWxzZSBpZihcImZyZWV6ZVwiIT10aGlzLmF0dHJpYnV0ZShcImZpbGxcIikudmFsdWVPckRlZmF1bHQoXCJyZW1vdmVcIil8fHRoaXMuZnJvemVuKXtpZihcInJlbW92ZVwiPT10aGlzLmF0dHJpYnV0ZShcImZpbGxcIikudmFsdWVPckRlZmF1bHQoXCJyZW1vdmVcIikmJiF0aGlzLnJlbW92ZWQpcmV0dXJuIHRoaXMucmVtb3ZlZD0hMCx0aGlzLmdldFByb3BlcnR5KCkudmFsdWU9dGhpcy5wYXJlbnQuYW5pbWF0aW9uRnJvemVuP3RoaXMucGFyZW50LmFuaW1hdGlvbkZyb3plblZhbHVlOnRoaXMuaW5pdGlhbFZhbHVlLCEwfWVsc2UgdGhpcy5mcm96ZW49ITAsdGhpcy5wYXJlbnQuYW5pbWF0aW9uRnJvemVuPSEwLHRoaXMucGFyZW50LmFuaW1hdGlvbkZyb3plblZhbHVlPXRoaXMuZ2V0UHJvcGVydHkoKS52YWx1ZTtyZXR1cm4hMX10aGlzLmR1cmF0aW9uPXRoaXMuZHVyYXRpb24rdDt2YXIgZT0hMTtpZih0aGlzLmJlZ2luPHRoaXMuZHVyYXRpb24pe3ZhciBpPXRoaXMuY2FsY1ZhbHVlKCk7dGhpcy5hdHRyaWJ1dGUoXCJ0eXBlXCIpLmhhc1ZhbHVlKCkmJihpPXRoaXMuYXR0cmlidXRlKFwidHlwZVwiKS52YWx1ZStcIihcIitpK1wiKVwiKSx0aGlzLmdldFByb3BlcnR5KCkudmFsdWU9aSxlPSEwfXJldHVybiBlfSx0aGlzLmZyb209dGhpcy5hdHRyaWJ1dGUoXCJmcm9tXCIpLHRoaXMudG89dGhpcy5hdHRyaWJ1dGUoXCJ0b1wiKSx0aGlzLnZhbHVlcz10aGlzLmF0dHJpYnV0ZShcInZhbHVlc1wiKSx0aGlzLnZhbHVlcy5oYXNWYWx1ZSgpJiYodGhpcy52YWx1ZXMudmFsdWU9dGhpcy52YWx1ZXMudmFsdWUuc3BsaXQoXCI7XCIpKSx0aGlzLnByb2dyZXNzPWZ1bmN0aW9uKCl7dmFyIHQ9e3Byb2dyZXNzOih0aGlzLmR1cmF0aW9uLXRoaXMuYmVnaW4pLyh0aGlzLm1heER1cmF0aW9uLXRoaXMuYmVnaW4pfTtpZih0aGlzLnZhbHVlcy5oYXNWYWx1ZSgpKXt2YXIgZT10LnByb2dyZXNzKih0aGlzLnZhbHVlcy52YWx1ZS5sZW5ndGgtMSksaT1NYXRoLmZsb29yKGUpLG49TWF0aC5jZWlsKGUpO3QuZnJvbT1uZXcgQS5Qcm9wZXJ0eShcImZyb21cIixwYXJzZUZsb2F0KHRoaXMudmFsdWVzLnZhbHVlW2ldKSksdC50bz1uZXcgQS5Qcm9wZXJ0eShcInRvXCIscGFyc2VGbG9hdCh0aGlzLnZhbHVlcy52YWx1ZVtuXSkpLHQucHJvZ3Jlc3M9KGUtaSkvKG4taSl9ZWxzZSB0LmZyb209dGhpcy5mcm9tLHQudG89dGhpcy50bztyZXR1cm4gdH19LEEuRWxlbWVudC5BbmltYXRlQmFzZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuYW5pbWF0ZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkFuaW1hdGVCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmNhbGNWYWx1ZT1mdW5jdGlvbigpe3ZhciB0PXRoaXMucHJvZ3Jlc3MoKTtyZXR1cm4gdC5mcm9tLm51bVZhbHVlKCkrKHQudG8ubnVtVmFsdWUoKS10LmZyb20ubnVtVmFsdWUoKSkqdC5wcm9ncmVzcyt0aGlzLmluaXRpYWxVbml0c319LEEuRWxlbWVudC5hbmltYXRlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkFuaW1hdGVCYXNlLEEuRWxlbWVudC5hbmltYXRlQ29sb3I9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5BbmltYXRlQmFzZSx0aGlzLmJhc2UodCksdGhpcy5jYWxjVmFsdWU9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnByb2dyZXNzKCksZT1uZXcgbSh0LmZyb20udmFsdWUpLGk9bmV3IG0odC50by52YWx1ZSk7aWYoZS5vayYmaS5vayl7dmFyIG49ZS5yKyhpLnItZS5yKSp0LnByb2dyZXNzLHM9ZS5nKyhpLmctZS5nKSp0LnByb2dyZXNzLGE9ZS5iKyhpLmItZS5iKSp0LnByb2dyZXNzO3JldHVyblwicmdiKFwiK3BhcnNlSW50KG4sMTApK1wiLFwiK3BhcnNlSW50KHMsMTApK1wiLFwiK3BhcnNlSW50KGEsMTApK1wiKVwifXJldHVybiB0aGlzLmF0dHJpYnV0ZShcImZyb21cIikudmFsdWV9fSxBLkVsZW1lbnQuYW5pbWF0ZUNvbG9yLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkFuaW1hdGVCYXNlLEEuRWxlbWVudC5hbmltYXRlVHJhbnNmb3JtPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuQW5pbWF0ZUJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuY2FsY1ZhbHVlPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMucHJvZ3Jlc3MoKSxlPUEuVG9OdW1iZXJBcnJheSh0LmZyb20udmFsdWUpLGk9QS5Ub051bWJlckFycmF5KHQudG8udmFsdWUpLG49XCJcIixzPTA7czxlLmxlbmd0aDtzKyspbis9ZVtzXSsoaVtzXS1lW3NdKSp0LnByb2dyZXNzK1wiIFwiO3JldHVybiBufX0sQS5FbGVtZW50LmFuaW1hdGVUcmFuc2Zvcm0ucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuYW5pbWF0ZSxBLkVsZW1lbnQuZm9udD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmhvcml6QWR2WD10aGlzLmF0dHJpYnV0ZShcImhvcml6LWFkdi14XCIpLm51bVZhbHVlKCksdGhpcy5pc1JUTD0hMSx0aGlzLmlzQXJhYmljPSExLHRoaXMuZm9udEZhY2U9bnVsbCx0aGlzLm1pc3NpbmdHbHlwaD1udWxsLHRoaXMuZ2x5cGhzPVtdO2Zvcih2YXIgZT0wO2U8dGhpcy5jaGlsZHJlbi5sZW5ndGg7ZSsrKXt2YXIgaT10aGlzLmNoaWxkcmVuW2VdO1wiZm9udC1mYWNlXCI9PWkudHlwZT8odGhpcy5mb250RmFjZT1pKS5zdHlsZShcImZvbnQtZmFtaWx5XCIpLmhhc1ZhbHVlKCkmJihBLkRlZmluaXRpb25zW2kuc3R5bGUoXCJmb250LWZhbWlseVwiKS52YWx1ZV09dGhpcyk6XCJtaXNzaW5nLWdseXBoXCI9PWkudHlwZT90aGlzLm1pc3NpbmdHbHlwaD1pOlwiZ2x5cGhcIj09aS50eXBlJiYoXCJcIiE9aS5hcmFiaWNGb3JtPyh0aGlzLmlzUlRMPSEwLHRoaXMuaXNBcmFiaWM9ITAsdm9pZCAwPT09dGhpcy5nbHlwaHNbaS51bmljb2RlXSYmKHRoaXMuZ2x5cGhzW2kudW5pY29kZV09W10pLHRoaXMuZ2x5cGhzW2kudW5pY29kZV1baS5hcmFiaWNGb3JtXT1pKTp0aGlzLmdseXBoc1tpLnVuaWNvZGVdPWkpfX0sQS5FbGVtZW50LmZvbnQucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmZvbnRmYWNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXNjZW50PXRoaXMuYXR0cmlidXRlKFwiYXNjZW50XCIpLnZhbHVlLHRoaXMuZGVzY2VudD10aGlzLmF0dHJpYnV0ZShcImRlc2NlbnRcIikudmFsdWUsdGhpcy51bml0c1BlckVtPXRoaXMuYXR0cmlidXRlKFwidW5pdHMtcGVyLWVtXCIpLm51bVZhbHVlKCl9LEEuRWxlbWVudC5mb250ZmFjZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQubWlzc2luZ2dseXBoPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQucGF0aCx0aGlzLmJhc2UodCksdGhpcy5ob3JpekFkdlg9MH0sQS5FbGVtZW50Lm1pc3NpbmdnbHlwaC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5wYXRoLEEuRWxlbWVudC5nbHlwaD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LnBhdGgsdGhpcy5iYXNlKHQpLHRoaXMuaG9yaXpBZHZYPXRoaXMuYXR0cmlidXRlKFwiaG9yaXotYWR2LXhcIikubnVtVmFsdWUoKSx0aGlzLnVuaWNvZGU9dGhpcy5hdHRyaWJ1dGUoXCJ1bmljb2RlXCIpLnZhbHVlLHRoaXMuYXJhYmljRm9ybT10aGlzLmF0dHJpYnV0ZShcImFyYWJpYy1mb3JtXCIpLnZhbHVlfSxBLkVsZW1lbnQuZ2x5cGgucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQucGF0aCxBLkVsZW1lbnQudGV4dD1mdW5jdGlvbih0KXt0aGlzLmNhcHR1cmVUZXh0Tm9kZXM9ITAsdGhpcy5iYXNlPUEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmJhc2VTZXRDb250ZXh0PXRoaXMuc2V0Q29udGV4dCx0aGlzLnNldENvbnRleHQ9ZnVuY3Rpb24odCl7dGhpcy5iYXNlU2V0Q29udGV4dCh0KTt2YXIgZT10aGlzLnN0eWxlKFwiZG9taW5hbnQtYmFzZWxpbmVcIikudG9UZXh0QmFzZWxpbmUoKTtudWxsPT1lJiYoZT10aGlzLnN0eWxlKFwiYWxpZ25tZW50LWJhc2VsaW5lXCIpLnRvVGV4dEJhc2VsaW5lKCkpLG51bGwhPWUmJih0LnRleHRCYXNlbGluZT1lKX0sdGhpcy5pbml0aWFsaXplQ29vcmRpbmF0ZXM9ZnVuY3Rpb24odCl7dGhpcy54PXRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksdGhpcy55PXRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIiksdGhpcy5hdHRyaWJ1dGUoXCJkeFwiKS5oYXNWYWx1ZSgpJiYodGhpcy54Kz10aGlzLmF0dHJpYnV0ZShcImR4XCIpLnRvUGl4ZWxzKFwieFwiKSksdGhpcy5hdHRyaWJ1dGUoXCJkeVwiKS5oYXNWYWx1ZSgpJiYodGhpcy55Kz10aGlzLmF0dHJpYnV0ZShcImR5XCIpLnRvUGl4ZWxzKFwieVwiKSksdGhpcy54Kz10aGlzLmdldEFuY2hvckRlbHRhKHQsdGhpcywwKX0sdGhpcy5nZXRCb3VuZGluZ0JveD1mdW5jdGlvbih0KXt0aGlzLmluaXRpYWxpemVDb29yZGluYXRlcyh0KTtmb3IodmFyIGU9bnVsbCxpPTA7aTx0aGlzLmNoaWxkcmVuLmxlbmd0aDtpKyspe3ZhciBuPXRoaXMuZ2V0Q2hpbGRCb3VuZGluZ0JveCh0LHRoaXMsdGhpcyxpKTtudWxsPT1lP2U9bjplLmFkZEJvdW5kaW5nQm94KG4pfXJldHVybiBlfSx0aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe3RoaXMuaW5pdGlhbGl6ZUNvb3JkaW5hdGVzKHQpO2Zvcih2YXIgZT0wO2U8dGhpcy5jaGlsZHJlbi5sZW5ndGg7ZSsrKXRoaXMucmVuZGVyQ2hpbGQodCx0aGlzLHRoaXMsZSl9LHRoaXMuZ2V0QW5jaG9yRGVsdGE9ZnVuY3Rpb24odCxlLGkpe3ZhciBuPXRoaXMuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiKS52YWx1ZU9yRGVmYXVsdChcInN0YXJ0XCIpO2lmKFwic3RhcnRcIiE9bil7Zm9yKHZhciBzPTAsYT1pO2E8ZS5jaGlsZHJlbi5sZW5ndGg7YSsrKXt2YXIgcj1lLmNoaWxkcmVuW2FdO2lmKGk8YSYmci5hdHRyaWJ1dGUoXCJ4XCIpLmhhc1ZhbHVlKCkpYnJlYWs7cys9ci5tZWFzdXJlVGV4dFJlY3Vyc2l2ZSh0KX1yZXR1cm4tMSooXCJlbmRcIj09bj9zOnMvMil9cmV0dXJuIDB9LHRoaXMuYWRqdXN0Q2hpbGRDb29yZGluYXRlcz1mdW5jdGlvbih0LGUsaSxuKXt2YXIgcz1pLmNoaWxkcmVuW25dO3JldHVybiBzLmF0dHJpYnV0ZShcInhcIikuaGFzVmFsdWUoKT8ocy54PXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIikrZS5nZXRBbmNob3JEZWx0YSh0LGksbikscy5hdHRyaWJ1dGUoXCJkeFwiKS5oYXNWYWx1ZSgpJiYocy54Kz1zLmF0dHJpYnV0ZShcImR4XCIpLnRvUGl4ZWxzKFwieFwiKSkpOihzLmF0dHJpYnV0ZShcImR4XCIpLmhhc1ZhbHVlKCkmJihlLngrPXMuYXR0cmlidXRlKFwiZHhcIikudG9QaXhlbHMoXCJ4XCIpKSxzLng9ZS54KSxlLng9cy54K3MubWVhc3VyZVRleHQodCkscy5hdHRyaWJ1dGUoXCJ5XCIpLmhhc1ZhbHVlKCk/KHMueT1zLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpLHMuYXR0cmlidXRlKFwiZHlcIikuaGFzVmFsdWUoKSYmKHMueSs9cy5hdHRyaWJ1dGUoXCJkeVwiKS50b1BpeGVscyhcInlcIikpKToocy5hdHRyaWJ1dGUoXCJkeVwiKS5oYXNWYWx1ZSgpJiYoZS55Kz1zLmF0dHJpYnV0ZShcImR5XCIpLnRvUGl4ZWxzKFwieVwiKSkscy55PWUueSksZS55PXMueSxzfSx0aGlzLmdldENoaWxkQm91bmRpbmdCb3g9ZnVuY3Rpb24odCxlLGksbil7dmFyIHM9dGhpcy5hZGp1c3RDaGlsZENvb3JkaW5hdGVzKHQsZSxpLG4pLGE9cy5nZXRCb3VuZGluZ0JveCh0KTtmb3Iobj0wO248cy5jaGlsZHJlbi5sZW5ndGg7bisrKXt2YXIgcj1lLmdldENoaWxkQm91bmRpbmdCb3godCxlLHMsbik7YS5hZGRCb3VuZGluZ0JveChyKX1yZXR1cm4gYX0sdGhpcy5yZW5kZXJDaGlsZD1mdW5jdGlvbih0LGUsaSxuKXt2YXIgcz10aGlzLmFkanVzdENoaWxkQ29vcmRpbmF0ZXModCxlLGksbik7Zm9yKHMucmVuZGVyKHQpLG49MDtuPHMuY2hpbGRyZW4ubGVuZ3RoO24rKyllLnJlbmRlckNoaWxkKHQsZSxzLG4pfX0sQS5FbGVtZW50LnRleHQucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxBLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5nZXRHbHlwaD1mdW5jdGlvbih0LGUsaSl7dmFyIG49ZVtpXSxzPW51bGw7aWYodC5pc0FyYWJpYyl7dmFyIGE9XCJpc29sYXRlZFwiOygwPT1pfHxcIiBcIj09ZVtpLTFdKSYmaTxlLmxlbmd0aC0yJiZcIiBcIiE9ZVtpKzFdJiYoYT1cInRlcm1pbmFsXCIpLDA8aSYmXCIgXCIhPWVbaS0xXSYmaTxlLmxlbmd0aC0yJiZcIiBcIiE9ZVtpKzFdJiYoYT1cIm1lZGlhbFwiKSwwPGkmJlwiIFwiIT1lW2ktMV0mJihpPT1lLmxlbmd0aC0xfHxcIiBcIj09ZVtpKzFdKSYmKGE9XCJpbml0aWFsXCIpLHZvaWQgMCE9PXQuZ2x5cGhzW25dJiZudWxsPT0ocz10LmdseXBoc1tuXVthXSkmJlwiZ2x5cGhcIj09dC5nbHlwaHNbbl0udHlwZSYmKHM9dC5nbHlwaHNbbl0pfWVsc2Ugcz10LmdseXBoc1tuXTtyZXR1cm4gbnVsbD09cyYmKHM9dC5taXNzaW5nR2x5cGgpLHN9LHRoaXMucmVuZGVyQ2hpbGRyZW49ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5wYXJlbnQuc3R5bGUoXCJmb250LWZhbWlseVwiKS5nZXREZWZpbml0aW9uKCk7aWYobnVsbD09ZSlcInN0cm9rZVwiPT10LnBhaW50T3JkZXI/KFwiXCIhPXQuc3Ryb2tlU3R5bGUmJnQuc3Ryb2tlVGV4dChBLmNvbXByZXNzU3BhY2VzKHRoaXMuZ2V0VGV4dCgpKSx0aGlzLngsdGhpcy55KSxcIlwiIT10LmZpbGxTdHlsZSYmdC5maWxsVGV4dChBLmNvbXByZXNzU3BhY2VzKHRoaXMuZ2V0VGV4dCgpKSx0aGlzLngsdGhpcy55KSk6KFwiXCIhPXQuZmlsbFN0eWxlJiZ0LmZpbGxUZXh0KEEuY29tcHJlc3NTcGFjZXModGhpcy5nZXRUZXh0KCkpLHRoaXMueCx0aGlzLnkpLFwiXCIhPXQuc3Ryb2tlU3R5bGUmJnQuc3Ryb2tlVGV4dChBLmNvbXByZXNzU3BhY2VzKHRoaXMuZ2V0VGV4dCgpKSx0aGlzLngsdGhpcy55KSk7ZWxzZXt2YXIgaT10aGlzLnBhcmVudC5zdHlsZShcImZvbnQtc2l6ZVwiKS5udW1WYWx1ZU9yRGVmYXVsdChBLkZvbnQuUGFyc2UoQS5jdHguZm9udCkuZm9udFNpemUpLG49dGhpcy5wYXJlbnQuc3R5bGUoXCJmb250LXN0eWxlXCIpLnZhbHVlT3JEZWZhdWx0KEEuRm9udC5QYXJzZShBLmN0eC5mb250KS5mb250U3R5bGUpLHM9dGhpcy5nZXRUZXh0KCk7ZS5pc1JUTCYmKHM9cy5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKSk7Zm9yKHZhciBhPUEuVG9OdW1iZXJBcnJheSh0aGlzLnBhcmVudC5hdHRyaWJ1dGUoXCJkeFwiKS52YWx1ZSkscj0wO3I8cy5sZW5ndGg7cisrKXt2YXIgbz10aGlzLmdldEdseXBoKGUscyxyKSxsPWkvZS5mb250RmFjZS51bml0c1BlckVtO3QudHJhbnNsYXRlKHRoaXMueCx0aGlzLnkpLHQuc2NhbGUobCwtbCk7dmFyIGg9dC5saW5lV2lkdGg7dC5saW5lV2lkdGg9dC5saW5lV2lkdGgqZS5mb250RmFjZS51bml0c1BlckVtL2ksXCJpdGFsaWNcIj09biYmdC50cmFuc2Zvcm0oMSwwLC40LDEsMCwwKSxvLnJlbmRlcih0KSxcIml0YWxpY1wiPT1uJiZ0LnRyYW5zZm9ybSgxLDAsLS40LDEsMCwwKSx0LmxpbmVXaWR0aD1oLHQuc2NhbGUoMS9sLC0xL2wpLHQudHJhbnNsYXRlKC10aGlzLngsLXRoaXMueSksdGhpcy54Kz1pKihvLmhvcml6QWR2WHx8ZS5ob3JpekFkdlgpL2UuZm9udEZhY2UudW5pdHNQZXJFbSx2b2lkIDA9PT1hW3JdfHxpc05hTihhW3JdKXx8KHRoaXMueCs9YVtyXSl9fX0sdGhpcy5nZXRUZXh0PWZ1bmN0aW9uKCl7fSx0aGlzLm1lYXN1cmVUZXh0UmVjdXJzaXZlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10aGlzLm1lYXN1cmVUZXh0KHQpLGk9MDtpPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO2krKyllKz10aGlzLmNoaWxkcmVuW2ldLm1lYXN1cmVUZXh0UmVjdXJzaXZlKHQpO3JldHVybiBlfSx0aGlzLm1lYXN1cmVUZXh0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMucGFyZW50LnN0eWxlKFwiZm9udC1mYW1pbHlcIikuZ2V0RGVmaW5pdGlvbigpO2lmKG51bGwhPWUpe3ZhciBpPXRoaXMucGFyZW50LnN0eWxlKFwiZm9udC1zaXplXCIpLm51bVZhbHVlT3JEZWZhdWx0KEEuRm9udC5QYXJzZShBLmN0eC5mb250KS5mb250U2l6ZSksbj0wLHM9dGhpcy5nZXRUZXh0KCk7ZS5pc1JUTCYmKHM9cy5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKSk7Zm9yKHZhciBhPUEuVG9OdW1iZXJBcnJheSh0aGlzLnBhcmVudC5hdHRyaWJ1dGUoXCJkeFwiKS52YWx1ZSkscj0wO3I8cy5sZW5ndGg7cisrKW4rPSh0aGlzLmdldEdseXBoKGUscyxyKS5ob3JpekFkdlh8fGUuaG9yaXpBZHZYKSppL2UuZm9udEZhY2UudW5pdHNQZXJFbSx2b2lkIDA9PT1hW3JdfHxpc05hTihhW3JdKXx8KG4rPWFbcl0pO3JldHVybiBufXZhciBvPUEuY29tcHJlc3NTcGFjZXModGhpcy5nZXRUZXh0KCkpO2lmKCF0Lm1lYXN1cmVUZXh0KXJldHVybiAxMCpvLmxlbmd0aDt0LnNhdmUoKSx0aGlzLnNldENvbnRleHQodCwhMCk7dmFyIGw9dC5tZWFzdXJlVGV4dChvKS53aWR0aDtyZXR1cm4gdC5yZXN0b3JlKCksbH0sdGhpcy5nZXRCb3VuZGluZ0JveD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLnBhcmVudC5zdHlsZShcImZvbnQtc2l6ZVwiKS5udW1WYWx1ZU9yRGVmYXVsdChBLkZvbnQuUGFyc2UoQS5jdHguZm9udCkuZm9udFNpemUpO3JldHVybiBuZXcgQS5Cb3VuZGluZ0JveCh0aGlzLngsdGhpcy55LWUsdGhpcy54K3RoaXMubWVhc3VyZVRleHQodCksdGhpcy55KX19LEEuRWxlbWVudC5UZXh0RWxlbWVudEJhc2UucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxBLkVsZW1lbnQudHNwYW49ZnVuY3Rpb24odCl7dGhpcy5jYXB0dXJlVGV4dE5vZGVzPSEwLHRoaXMuYmFzZT1BLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnRleHQ9QS5jb21wcmVzc1NwYWNlcyh0LnZhbHVlfHx0LnRleHR8fHQudGV4dENvbnRlbnR8fFwiXCIpLHRoaXMuZ2V0VGV4dD1mdW5jdGlvbigpe3JldHVybiAwPHRoaXMuY2hpbGRyZW4ubGVuZ3RoP1wiXCI6dGhpcy50ZXh0fX0sQS5FbGVtZW50LnRzcGFuLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlRleHRFbGVtZW50QmFzZSxBLkVsZW1lbnQudHJlZj1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlRleHRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5nZXRUZXh0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5nZXRIcmVmQXR0cmlidXRlKCkuZ2V0RGVmaW5pdGlvbigpO2lmKG51bGwhPXQpcmV0dXJuIHQuY2hpbGRyZW5bMF0uZ2V0VGV4dCgpfX0sQS5FbGVtZW50LnRyZWYucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlLEEuRWxlbWVudC5hPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmhhc1RleHQ9MDx0LmNoaWxkTm9kZXMubGVuZ3RoO2Zvcih2YXIgZT0wO2U8dC5jaGlsZE5vZGVzLmxlbmd0aDtlKyspMyE9dC5jaGlsZE5vZGVzW2VdLm5vZGVUeXBlJiYodGhpcy5oYXNUZXh0PSExKTt0aGlzLnRleHQ9dGhpcy5oYXNUZXh0P3QuY2hpbGROb2Rlc1swXS52YWx1ZXx8dC5jaGlsZE5vZGVzWzBdLmRhdGE6XCJcIix0aGlzLmdldFRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50ZXh0fSx0aGlzLmJhc2VSZW5kZXJDaGlsZHJlbj10aGlzLnJlbmRlckNoaWxkcmVuLHRoaXMucmVuZGVyQ2hpbGRyZW49ZnVuY3Rpb24odCl7aWYodGhpcy5oYXNUZXh0KXt0aGlzLmJhc2VSZW5kZXJDaGlsZHJlbih0KTt2YXIgZT1uZXcgQS5Qcm9wZXJ0eShcImZvbnRTaXplXCIsQS5Gb250LlBhcnNlKEEuY3R4LmZvbnQpLmZvbnRTaXplKTtBLk1vdXNlLmNoZWNrQm91bmRpbmdCb3godGhpcyxuZXcgQS5Cb3VuZGluZ0JveCh0aGlzLngsdGhpcy55LWUudG9QaXhlbHMoXCJ5XCIpLHRoaXMueCt0aGlzLm1lYXN1cmVUZXh0KHQpLHRoaXMueSkpfWVsc2UgaWYoMDx0aGlzLmNoaWxkcmVuLmxlbmd0aCl7dmFyIGk9bmV3IEEuRWxlbWVudC5nO2kuY2hpbGRyZW49dGhpcy5jaGlsZHJlbixpLnBhcmVudD10aGlzLGkucmVuZGVyKHQpfX0sdGhpcy5vbmNsaWNrPWZ1bmN0aW9uKCl7dS5vcGVuKHRoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLnZhbHVlKX0sdGhpcy5vbm1vdXNlbW92ZT1mdW5jdGlvbigpe0EuY3R4LmNhbnZhcy5zdHlsZS5jdXJzb3I9XCJwb2ludGVyXCJ9fSxBLkVsZW1lbnQuYS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5UZXh0RWxlbWVudEJhc2UsQS5FbGVtZW50LmltYWdlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCk7dmFyIGU9dGhpcy5nZXRIcmVmQXR0cmlidXRlKCkudmFsdWU7aWYoXCJcIiE9ZSl7dmFyIGE9ZS5tYXRjaCgvXFwuc3ZnJC8pO2lmKEEuSW1hZ2VzLnB1c2godGhpcyksdGhpcy5sb2FkZWQ9ITEsYSl0aGlzLmltZz1BLmFqYXgoZSksdGhpcy5sb2FkZWQ9ITA7ZWxzZXt0aGlzLmltZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLDE9PUEub3B0cy51c2VDT1JTJiYodGhpcy5pbWcuY3Jvc3NPcmlnaW49XCJBbm9ueW1vdXNcIik7dmFyIHI9dGhpczt0aGlzLmltZy5vbmxvYWQ9ZnVuY3Rpb24oKXtyLmxvYWRlZD0hMH0sdGhpcy5pbWcub25lcnJvcj1mdW5jdGlvbigpe0EubG9nKCdFUlJPUjogaW1hZ2UgXCInK2UrJ1wiIG5vdCBmb3VuZCcpLHIubG9hZGVkPSEwfSx0aGlzLmltZy5zcmM9ZX10aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksaT10aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIikscz10aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIik7MCE9biYmMCE9cyYmKHQuc2F2ZSgpLGE/dC5kcmF3U3ZnKHRoaXMuaW1nLGUsaSxuLHMpOih0LnRyYW5zbGF0ZShlLGkpLEEuQXNwZWN0UmF0aW8odCx0aGlzLmF0dHJpYnV0ZShcInByZXNlcnZlQXNwZWN0UmF0aW9cIikudmFsdWUsbix0aGlzLmltZy53aWR0aCxzLHRoaXMuaW1nLmhlaWdodCwwLDApLHIubG9hZGVkJiYodm9pZCAwPT09dGhpcy5pbWcuY29tcGxldGV8fHRoaXMuaW1nLmNvbXBsZXRlKSYmdC5kcmF3SW1hZ2UodGhpcy5pbWcsMCwwKSksdC5yZXN0b3JlKCkpfSx0aGlzLmdldEJvdW5kaW5nQm94PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLnRvUGl4ZWxzKFwieFwiKSxlPXRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIiksaT10aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKSxuPXRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLnRvUGl4ZWxzKFwieVwiKTtyZXR1cm4gbmV3IEEuQm91bmRpbmdCb3godCxlLHQraSxlK24pfX19LEEuRWxlbWVudC5pbWFnZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLEEuRWxlbWVudC5nPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5nZXRCb3VuZGluZ0JveD1mdW5jdGlvbih0KXtmb3IodmFyIGU9bmV3IEEuQm91bmRpbmdCb3gsaT0wO2k8dGhpcy5jaGlsZHJlbi5sZW5ndGg7aSsrKWUuYWRkQm91bmRpbmdCb3godGhpcy5jaGlsZHJlbltpXS5nZXRCb3VuZGluZ0JveCh0KSk7cmV0dXJuIGV9fSxBLkVsZW1lbnQuZy5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLEEuRWxlbWVudC5zeW1ib2w9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnJlbmRlcj1mdW5jdGlvbih0KXt9fSxBLkVsZW1lbnQuc3ltYm9sLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsQS5FbGVtZW50LnN0eWxlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpO2Zvcih2YXIgZT1cIlwiLGk9MDtpPHQuY2hpbGROb2Rlcy5sZW5ndGg7aSsrKWUrPXQuY2hpbGROb2Rlc1tpXS5kYXRhO2U9ZS5yZXBsYWNlKC8oXFwvXFwqKFteKl18W1xcclxcbl18KFxcKisoW14qXFwvXXxbXFxyXFxuXSkpKSpcXCorXFwvKXwoXltcXHNdKlxcL1xcLy4qKS9nbSxcIlwiKTt2YXIgbj0oZT1BLmNvbXByZXNzU3BhY2VzKGUpKS5zcGxpdChcIn1cIik7Zm9yKGk9MDtpPG4ubGVuZ3RoO2krKylpZihcIlwiIT1BLnRyaW0obltpXSkpZm9yKHZhciBzPW5baV0uc3BsaXQoXCJ7XCIpLGE9c1swXS5zcGxpdChcIixcIikscj1zWzFdLnNwbGl0KFwiO1wiKSxvPTA7bzxhLmxlbmd0aDtvKyspe3ZhciBsPUEudHJpbShhW29dKTtpZihcIlwiIT1sKXtmb3IodmFyIGg9QS5TdHlsZXNbbF18fHt9LHU9MDt1PHIubGVuZ3RoO3UrKyl7dmFyIGM9clt1XS5pbmRleE9mKFwiOlwiKSxmPXJbdV0uc3Vic3RyKDAsYyksbT1yW3VdLnN1YnN0cihjKzEsclt1XS5sZW5ndGgtYyk7bnVsbCE9ZiYmbnVsbCE9bSYmKGhbQS50cmltKGYpXT1uZXcgQS5Qcm9wZXJ0eShBLnRyaW0oZiksQS50cmltKG0pKSl9aWYoQS5TdHlsZXNbbF09aCxBLlN0eWxlc1NwZWNpZmljaXR5W2xdPXcobCksXCJAZm9udC1mYWNlXCI9PWwpZm9yKHZhciBwPWhbXCJmb250LWZhbWlseVwiXS52YWx1ZS5yZXBsYWNlKC9cIi9nLFwiXCIpLGQ9aC5zcmMudmFsdWUuc3BsaXQoXCIsXCIpLHk9MDt5PGQubGVuZ3RoO3krKylpZigwPGRbeV0uaW5kZXhPZignZm9ybWF0KFwic3ZnXCIpJykpZm9yKHZhciB2PWRbeV0uaW5kZXhPZihcInVybFwiKSxnPWRbeV0uaW5kZXhPZihcIilcIix2KSx4PWRbeV0uc3Vic3RyKHYrNSxnLXYtNiksYj1BLnBhcnNlWG1sKEEuYWpheCh4KSkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJmb250XCIpLFA9MDtQPGIubGVuZ3RoO1ArKyl7dmFyIEU9QS5DcmVhdGVFbGVtZW50KGJbUF0pO0EuRGVmaW5pdGlvbnNbcF09RX19fX0sQS5FbGVtZW50LnN0eWxlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC51c2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmJhc2VTZXRDb250ZXh0PXRoaXMuc2V0Q29udGV4dCx0aGlzLnNldENvbnRleHQ9ZnVuY3Rpb24odCl7dGhpcy5iYXNlU2V0Q29udGV4dCh0KSx0aGlzLmF0dHJpYnV0ZShcInhcIikuaGFzVmFsdWUoKSYmdC50cmFuc2xhdGUodGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLnRvUGl4ZWxzKFwieFwiKSwwKSx0aGlzLmF0dHJpYnV0ZShcInlcIikuaGFzVmFsdWUoKSYmdC50cmFuc2xhdGUoMCx0aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpKX07dmFyIG49dGhpcy5nZXRIcmVmQXR0cmlidXRlKCkuZ2V0RGVmaW5pdGlvbigpO3RoaXMucGF0aD1mdW5jdGlvbih0KXtudWxsIT1uJiZuLnBhdGgodCl9LHRoaXMuZWxlbWVudFRyYW5zZm9ybT1mdW5jdGlvbigpe2lmKG51bGwhPW4mJm4uc3R5bGUoXCJ0cmFuc2Zvcm1cIiwhMSwhMCkuaGFzVmFsdWUoKSlyZXR1cm4gbmV3IEEuVHJhbnNmb3JtKG4uc3R5bGUoXCJ0cmFuc2Zvcm1cIiwhMSwhMCkudmFsdWUpfSx0aGlzLmdldEJvdW5kaW5nQm94PWZ1bmN0aW9uKHQpe2lmKG51bGwhPW4pcmV0dXJuIG4uZ2V0Qm91bmRpbmdCb3godCl9LHRoaXMucmVuZGVyQ2hpbGRyZW49ZnVuY3Rpb24odCl7aWYobnVsbCE9bil7dmFyIGU9bjtcInN5bWJvbFwiPT1uLnR5cGUmJigoZT1uZXcgQS5FbGVtZW50LnN2ZykudHlwZT1cInN2Z1wiLGUuYXR0cmlidXRlcy52aWV3Qm94PW5ldyBBLlByb3BlcnR5KFwidmlld0JveFwiLG4uYXR0cmlidXRlKFwidmlld0JveFwiKS52YWx1ZSksZS5hdHRyaWJ1dGVzLnByZXNlcnZlQXNwZWN0UmF0aW89bmV3IEEuUHJvcGVydHkoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsbi5hdHRyaWJ1dGUoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIpLnZhbHVlKSxlLmF0dHJpYnV0ZXMub3ZlcmZsb3c9bmV3IEEuUHJvcGVydHkoXCJvdmVyZmxvd1wiLG4uYXR0cmlidXRlKFwib3ZlcmZsb3dcIikudmFsdWUpLGUuY2hpbGRyZW49bi5jaGlsZHJlbiksXCJzdmdcIj09ZS50eXBlJiYodGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS5oYXNWYWx1ZSgpJiYoZS5hdHRyaWJ1dGVzLndpZHRoPW5ldyBBLlByb3BlcnR5KFwid2lkdGhcIix0aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLnZhbHVlKSksdGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikuaGFzVmFsdWUoKSYmKGUuYXR0cmlidXRlcy5oZWlnaHQ9bmV3IEEuUHJvcGVydHkoXCJoZWlnaHRcIix0aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS52YWx1ZSkpKTt2YXIgaT1lLnBhcmVudDtlLnBhcmVudD1udWxsLGUucmVuZGVyKHQpLGUucGFyZW50PWl9fX0sQS5FbGVtZW50LnVzZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLEEuRWxlbWVudC5tYXNrPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmF0dHJpYnV0ZShcInhcIikudG9QaXhlbHMoXCJ4XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLnRvUGl4ZWxzKFwieVwiKSxzPXRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIpLGE9dGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIpO2lmKDA9PXMmJjA9PWEpe2Zvcih2YXIgcj1uZXcgQS5Cb3VuZGluZ0JveCxvPTA7bzx0aGlzLmNoaWxkcmVuLmxlbmd0aDtvKyspci5hZGRCb3VuZGluZ0JveCh0aGlzLmNoaWxkcmVuW29dLmdldEJvdW5kaW5nQm94KHQpKTtpPU1hdGguZmxvb3Ioci54MSksbj1NYXRoLmZsb29yKHIueTEpLHM9TWF0aC5mbG9vcihyLndpZHRoKCkpLGE9TWF0aC5mbG9vcihyLmhlaWdodCgpKX12YXIgbD1lLmF0dHJpYnV0ZShcIm1hc2tcIikudmFsdWU7ZS5hdHRyaWJ1dGUoXCJtYXNrXCIpLnZhbHVlPVwiXCI7dmFyIGg9cCgpO2gud2lkdGg9aStzLGguaGVpZ2h0PW4rYTt2YXIgdT1oLmdldENvbnRleHQoXCIyZFwiKTt0aGlzLnJlbmRlckNoaWxkcmVuKHUpO3ZhciBjPXAoKTtjLndpZHRoPWkrcyxjLmhlaWdodD1uK2E7dmFyIGY9Yy5nZXRDb250ZXh0KFwiMmRcIik7ZS5yZW5kZXIoZiksZi5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb249XCJkZXN0aW5hdGlvbi1pblwiLGYuZmlsbFN0eWxlPXUuY3JlYXRlUGF0dGVybihoLFwibm8tcmVwZWF0XCIpLGYuZmlsbFJlY3QoMCwwLGkrcyxuK2EpLHQuZmlsbFN0eWxlPWYuY3JlYXRlUGF0dGVybihjLFwibm8tcmVwZWF0XCIpLHQuZmlsbFJlY3QoMCwwLGkrcyxuK2EpLGUuYXR0cmlidXRlKFwibWFza1wiKS52YWx1ZT1sfSx0aGlzLnJlbmRlcj1mdW5jdGlvbih0KXt9fSxBLkVsZW1lbnQubWFzay5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuY2xpcFBhdGg9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hcHBseT1mdW5jdGlvbih0KXt2YXIgZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELGk9dC5iZWdpblBhdGgsbj10LmNsb3NlUGF0aDtlJiYoQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5iZWdpblBhdGg9ZnVuY3Rpb24oKXt9LENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuY2xvc2VQYXRoPWZ1bmN0aW9uKCl7fSksaS5jYWxsKHQpO2Zvcih2YXIgcz0wO3M8dGhpcy5jaGlsZHJlbi5sZW5ndGg7cysrKXt2YXIgYT10aGlzLmNoaWxkcmVuW3NdO2lmKHZvaWQgMCE9PWEucGF0aCl7dmFyIHI9dm9pZCAwIT09YS5lbGVtZW50VHJhbnNmb3JtJiZhLmVsZW1lbnRUcmFuc2Zvcm0oKTshciYmYS5zdHlsZShcInRyYW5zZm9ybVwiLCExLCEwKS5oYXNWYWx1ZSgpJiYocj1uZXcgQS5UcmFuc2Zvcm0oYS5zdHlsZShcInRyYW5zZm9ybVwiLCExLCEwKS52YWx1ZSkpLHImJnIuYXBwbHkodCksYS5wYXRoKHQpLGUmJihDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmNsb3NlUGF0aD1uKSxyJiZyLnVuYXBwbHkodCl9fW4uY2FsbCh0KSx0LmNsaXAoKSxlJiYoQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5iZWdpblBhdGg9aSxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmNsb3NlUGF0aD1uKX0sdGhpcy5yZW5kZXI9ZnVuY3Rpb24odCl7fX0sQS5FbGVtZW50LmNsaXBQYXRoLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5maWx0ZXI9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hcHBseT1mdW5jdGlvbih0LGUpe3ZhciBpPWUuZ2V0Qm91bmRpbmdCb3godCksbj1NYXRoLmZsb29yKGkueDEpLHM9TWF0aC5mbG9vcihpLnkxKSxhPU1hdGguZmxvb3IoaS53aWR0aCgpKSxyPU1hdGguZmxvb3IoaS5oZWlnaHQoKSksbz1lLnN0eWxlKFwiZmlsdGVyXCIpLnZhbHVlO2Uuc3R5bGUoXCJmaWx0ZXJcIikudmFsdWU9XCJcIjtmb3IodmFyIGw9MCxoPTAsdT0wO3U8dGhpcy5jaGlsZHJlbi5sZW5ndGg7dSsrKXt2YXIgYz10aGlzLmNoaWxkcmVuW3VdLmV4dHJhRmlsdGVyRGlzdGFuY2V8fDA7bD1NYXRoLm1heChsLGMpLGg9TWF0aC5tYXgoaCxjKX12YXIgZj1wKCk7Zi53aWR0aD1hKzIqbCxmLmhlaWdodD1yKzIqaDt2YXIgbT1mLmdldENvbnRleHQoXCIyZFwiKTtmb3IobS50cmFuc2xhdGUoLW4rbCwtcytoKSxlLnJlbmRlcihtKSx1PTA7dTx0aGlzLmNoaWxkcmVuLmxlbmd0aDt1KyspXCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5jaGlsZHJlblt1XS5hcHBseSYmdGhpcy5jaGlsZHJlblt1XS5hcHBseShtLDAsMCxhKzIqbCxyKzIqaCk7dC5kcmF3SW1hZ2UoZiwwLDAsYSsyKmwscisyKmgsbi1sLHMtaCxhKzIqbCxyKzIqaCksZS5zdHlsZShcImZpbHRlclwiLCEwKS52YWx1ZT1vfSx0aGlzLnJlbmRlcj1mdW5jdGlvbih0KXt9fSxBLkVsZW1lbnQuZmlsdGVyLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5mZU1vcnBob2xvZ3k9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hcHBseT1mdW5jdGlvbih0LGUsaSxuLHMpe319LEEuRWxlbWVudC5mZU1vcnBob2xvZ3kucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmZlQ29tcG9zaXRlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCxlLGksbixzKXt9fSxBLkVsZW1lbnQuZmVDb21wb3NpdGUucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmZlQ29sb3JNYXRyaXg9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCk7dmFyIG49QS5Ub051bWJlckFycmF5KHRoaXMuYXR0cmlidXRlKFwidmFsdWVzXCIpLnZhbHVlKTtzd2l0Y2godGhpcy5hdHRyaWJ1dGUoXCJ0eXBlXCIpLnZhbHVlT3JEZWZhdWx0KFwibWF0cml4XCIpKXtjYXNlXCJzYXR1cmF0ZVwiOnZhciBlPW5bMF07bj1bLjIxMysuNzg3KmUsLjcxNS0uNzE1KmUsLjA3Mi0uMDcyKmUsMCwwLC4yMTMtLjIxMyplLC43MTUrLjI4NSplLC4wNzItLjA3MiplLDAsMCwuMjEzLS4yMTMqZSwuNzE1LS43MTUqZSwuMDcyKy45MjgqZSwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMV07YnJlYWs7Y2FzZVwiaHVlUm90YXRlXCI6dmFyIHM9blswXSpNYXRoLlBJLzE4MCxpPWZ1bmN0aW9uKHQsZSxpKXtyZXR1cm4gdCtNYXRoLmNvcyhzKSplK01hdGguc2luKHMpKml9O249W2koLjIxMywuNzg3LC0uMjEzKSxpKC43MTUsLS43MTUsLS43MTUpLGkoLjA3MiwtLjA3MiwuOTI4KSwwLDAsaSguMjEzLC0uMjEzLC4xNDMpLGkoLjcxNSwuMjg1LC4xNCksaSguMDcyLC0uMDcyLC0uMjgzKSwwLDAsaSguMjEzLC0uMjEzLC0uNzg3KSxpKC43MTUsLS43MTUsLjcxNSksaSguMDcyLC45MjgsLjA3MiksMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDFdO2JyZWFrO2Nhc2VcImx1bWluYW5jZVRvQWxwaGFcIjpuPVswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwuMjEyNSwuNzE1NCwuMDcyMSwwLDAsMCwwLDAsMCwxXX1mdW5jdGlvbiB1KHQsZSxpLG4scyxhKXtyZXR1cm4gdFtpKm4qNCs0KmUrYV19ZnVuY3Rpb24gYyh0LGUsaSxuLHMsYSxyKXt0W2kqbio0KzQqZSthXT1yfWZ1bmN0aW9uIGYodCxlKXt2YXIgaT1uW3RdO3JldHVybiBpKihpPDA/ZS0yNTU6ZSl9dGhpcy5hcHBseT1mdW5jdGlvbih0LGUsaSxuLHMpe3ZhciBhPXQuZ2V0SW1hZ2VEYXRhKDAsMCxuLHMpO2ZvcihpPTA7aTxzO2krKylmb3IoZT0wO2U8bjtlKyspe3ZhciByPXUoYS5kYXRhLGUsaSxuLDAsMCksbz11KGEuZGF0YSxlLGksbiwwLDEpLGw9dShhLmRhdGEsZSxpLG4sMCwyKSxoPXUoYS5kYXRhLGUsaSxuLDAsMyk7YyhhLmRhdGEsZSxpLG4sMCwwLGYoMCxyKStmKDEsbykrZigyLGwpK2YoMyxoKStmKDQsMSkpLGMoYS5kYXRhLGUsaSxuLDAsMSxmKDUscikrZig2LG8pK2YoNyxsKStmKDgsaCkrZig5LDEpKSxjKGEuZGF0YSxlLGksbiwwLDIsZigxMCxyKStmKDExLG8pK2YoMTIsbCkrZigxMyxoKStmKDE0LDEpKSxjKGEuZGF0YSxlLGksbiwwLDMsZigxNSxyKStmKDE2LG8pK2YoMTcsbCkrZigxOCxoKStmKDE5LDEpKX10LmNsZWFyUmVjdCgwLDAsbixzKSx0LnB1dEltYWdlRGF0YShhLDAsMCl9fSxBLkVsZW1lbnQuZmVDb2xvck1hdHJpeC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuZmVHYXVzc2lhbkJsdXI9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5ibHVyUmFkaXVzPU1hdGguZmxvb3IodGhpcy5hdHRyaWJ1dGUoXCJzdGREZXZpYXRpb25cIikubnVtVmFsdWUoKSksdGhpcy5leHRyYUZpbHRlckRpc3RhbmNlPXRoaXMuYmx1clJhZGl1cyx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQsZSxpLG4scyl7ZCYmdm9pZCAwIT09ZC5jYW52YXNSR0JBPyh0LmNhbnZhcy5pZD1BLlVuaXF1ZUlkKCksdC5jYW52YXMuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHQuY2FudmFzKSxkLmNhbnZhc1JHQkEodC5jYW52YXMsZSxpLG4scyx0aGlzLmJsdXJSYWRpdXMpLGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodC5jYW52YXMpKTpBLmxvZyhcIkVSUk9SOiBTdGFja0JsdXIuanMgbXVzdCBiZSBpbmNsdWRlZCBmb3IgYmx1ciB0byB3b3JrXCIpfX0sQS5FbGVtZW50LmZlR2F1c3NpYW5CbHVyLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC50aXRsZT1mdW5jdGlvbih0KXt9LEEuRWxlbWVudC50aXRsZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuZGVzYz1mdW5jdGlvbih0KXt9LEEuRWxlbWVudC5kZXNjLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5NSVNTSU5HPWZ1bmN0aW9uKHQpe0EubG9nKFwiRVJST1I6IEVsZW1lbnQgJ1wiK3Qubm9kZU5hbWUrXCInIG5vdCB5ZXQgaW1wbGVtZW50ZWQuXCIpfSxBLkVsZW1lbnQuTUlTU0lORy5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkNyZWF0ZUVsZW1lbnQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5ub2RlTmFtZS5yZXBsYWNlKC9eW146XSs6LyxcIlwiKTtlPWUucmVwbGFjZSgvXFwtL2csXCJcIik7dmFyIGk9bnVsbDtyZXR1cm4oaT12b2lkIDAhPT1BLkVsZW1lbnRbZV0/bmV3IEEuRWxlbWVudFtlXSh0KTpuZXcgQS5FbGVtZW50Lk1JU1NJTkcodCkpLnR5cGU9dC5ub2RlTmFtZSxpfSxBLmxvYWQ9ZnVuY3Rpb24odCxlKXtBLmxvYWRYbWwodCxBLmFqYXgoZSkpfSxBLmxvYWRYbWw9ZnVuY3Rpb24odCxlKXtBLmxvYWRYbWxEb2ModCxBLnBhcnNlWG1sKGUpKX0sQS5sb2FkWG1sRG9jPWZ1bmN0aW9uKGEscil7QS5pbml0KGEpO3ZhciBpPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1hLmNhbnZhcztlOyl0LngtPWUub2Zmc2V0TGVmdCx0LnktPWUub2Zmc2V0VG9wLGU9ZS5vZmZzZXRQYXJlbnQ7cmV0dXJuIHUuc2Nyb2xsWCYmKHQueCs9dS5zY3JvbGxYKSx1LnNjcm9sbFkmJih0LnkrPXUuc2Nyb2xsWSksdH07MSE9QS5vcHRzLmlnbm9yZU1vdXNlJiYoYS5jYW52YXMub25jbGljaz1mdW5jdGlvbih0KXt2YXIgZT1pKG5ldyBBLlBvaW50KG51bGwhPXQ/dC5jbGllbnRYOmV2ZW50LmNsaWVudFgsbnVsbCE9dD90LmNsaWVudFk6ZXZlbnQuY2xpZW50WSkpO0EuTW91c2Uub25jbGljayhlLngsZS55KX0sYS5jYW52YXMub25tb3VzZW1vdmU9ZnVuY3Rpb24odCl7dmFyIGU9aShuZXcgQS5Qb2ludChudWxsIT10P3QuY2xpZW50WDpldmVudC5jbGllbnRYLG51bGwhPXQ/dC5jbGllbnRZOmV2ZW50LmNsaWVudFkpKTtBLk1vdXNlLm9ubW91c2Vtb3ZlKGUueCxlLnkpfSk7dmFyIG89QS5DcmVhdGVFbGVtZW50KHIuZG9jdW1lbnRFbGVtZW50KTtvLnJvb3Q9ITAsby5hZGRTdHlsZXNGcm9tU3R5bGVEZWZpbml0aW9uKCk7dmFyIGw9ITAsbj1mdW5jdGlvbigpe0EuVmlld1BvcnQuQ2xlYXIoKSxhLmNhbnZhcy5wYXJlbnROb2RlP0EuVmlld1BvcnQuU2V0Q3VycmVudChhLmNhbnZhcy5wYXJlbnROb2RlLmNsaWVudFdpZHRoLGEuY2FudmFzLnBhcmVudE5vZGUuY2xpZW50SGVpZ2h0KTpBLlZpZXdQb3J0LlNldEN1cnJlbnQoODAwLDYwMCksMSE9QS5vcHRzLmlnbm9yZURpbWVuc2lvbnMmJihvLnN0eWxlKFwid2lkdGhcIikuaGFzVmFsdWUoKSYmKGEuY2FudmFzLndpZHRoPW8uc3R5bGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIiksYS5jYW52YXMuc3R5bGUmJihhLmNhbnZhcy5zdHlsZS53aWR0aD1hLmNhbnZhcy53aWR0aCtcInB4XCIpKSxvLnN0eWxlKFwiaGVpZ2h0XCIpLmhhc1ZhbHVlKCkmJihhLmNhbnZhcy5oZWlnaHQ9by5zdHlsZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIiksYS5jYW52YXMuc3R5bGUmJihhLmNhbnZhcy5zdHlsZS5oZWlnaHQ9YS5jYW52YXMuaGVpZ2h0K1wicHhcIikpKTt2YXIgdD1hLmNhbnZhcy5jbGllbnRXaWR0aHx8YS5jYW52YXMud2lkdGgsZT1hLmNhbnZhcy5jbGllbnRIZWlnaHR8fGEuY2FudmFzLmhlaWdodDtpZigxPT1BLm9wdHMuaWdub3JlRGltZW5zaW9ucyYmby5zdHlsZShcIndpZHRoXCIpLmhhc1ZhbHVlKCkmJm8uc3R5bGUoXCJoZWlnaHRcIikuaGFzVmFsdWUoKSYmKHQ9by5zdHlsZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKSxlPW8uc3R5bGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIpKSxBLlZpZXdQb3J0LlNldEN1cnJlbnQodCxlKSxudWxsIT1BLm9wdHMub2Zmc2V0WCYmKG8uYXR0cmlidXRlKFwieFwiLCEwKS52YWx1ZT1BLm9wdHMub2Zmc2V0WCksbnVsbCE9QS5vcHRzLm9mZnNldFkmJihvLmF0dHJpYnV0ZShcInlcIiwhMCkudmFsdWU9QS5vcHRzLm9mZnNldFkpLG51bGwhPUEub3B0cy5zY2FsZVdpZHRofHxudWxsIT1BLm9wdHMuc2NhbGVIZWlnaHQpe3ZhciBpPW51bGwsbj1udWxsLHM9QS5Ub051bWJlckFycmF5KG8uYXR0cmlidXRlKFwidmlld0JveFwiKS52YWx1ZSk7bnVsbCE9QS5vcHRzLnNjYWxlV2lkdGgmJihvLmF0dHJpYnV0ZShcIndpZHRoXCIpLmhhc1ZhbHVlKCk/aT1vLmF0dHJpYnV0ZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKS9BLm9wdHMuc2NhbGVXaWR0aDppc05hTihzWzJdKXx8KGk9c1syXS9BLm9wdHMuc2NhbGVXaWR0aCkpLG51bGwhPUEub3B0cy5zY2FsZUhlaWdodCYmKG8uYXR0cmlidXRlKFwiaGVpZ2h0XCIpLmhhc1ZhbHVlKCk/bj1vLmF0dHJpYnV0ZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIikvQS5vcHRzLnNjYWxlSGVpZ2h0OmlzTmFOKHNbM10pfHwobj1zWzNdL0Eub3B0cy5zY2FsZUhlaWdodCkpLG51bGw9PWkmJihpPW4pLG51bGw9PW4mJihuPWkpLG8uYXR0cmlidXRlKFwid2lkdGhcIiwhMCkudmFsdWU9QS5vcHRzLnNjYWxlV2lkdGgsby5hdHRyaWJ1dGUoXCJoZWlnaHRcIiwhMCkudmFsdWU9QS5vcHRzLnNjYWxlSGVpZ2h0LG8uc3R5bGUoXCJ0cmFuc2Zvcm1cIiwhMCwhMCkudmFsdWUrPVwiIHNjYWxlKFwiKzEvaStcIixcIisxL24rXCIpXCJ9MSE9QS5vcHRzLmlnbm9yZUNsZWFyJiZhLmNsZWFyUmVjdCgwLDAsdCxlKSxvLnJlbmRlcihhKSxsJiYobD0hMSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBBLm9wdHMucmVuZGVyQ2FsbGJhY2smJkEub3B0cy5yZW5kZXJDYWxsYmFjayhyKSl9LHM9ITA7QS5JbWFnZXNMb2FkZWQoKSYmKHM9ITEsbigpKSxBLmludGVydmFsSUQ9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXt2YXIgdD0hMTtpZihzJiZBLkltYWdlc0xvYWRlZCgpJiYodD0hKHM9ITEpKSwxIT1BLm9wdHMuaWdub3JlTW91c2UmJih0fD1BLk1vdXNlLmhhc0V2ZW50cygpKSwxIT1BLm9wdHMuaWdub3JlQW5pbWF0aW9uKWZvcih2YXIgZT0wO2U8QS5BbmltYXRpb25zLmxlbmd0aDtlKyspdHw9QS5BbmltYXRpb25zW2VdLnVwZGF0ZSgxZTMvQS5GUkFNRVJBVEUpO1wiZnVuY3Rpb25cIj09dHlwZW9mIEEub3B0cy5mb3JjZVJlZHJhdyYmMT09QS5vcHRzLmZvcmNlUmVkcmF3KCkmJih0PSEwKSx0JiYobigpLEEuTW91c2UucnVuRXZlbnRzKCkpfSwxZTMvQS5GUkFNRVJBVEUpfSxBLnN0b3A9ZnVuY3Rpb24oKXtBLmludGVydmFsSUQmJmNsZWFySW50ZXJ2YWwoQS5pbnRlcnZhbElEKX0sQS5Nb3VzZT1uZXcgZnVuY3Rpb24oKXt0aGlzLmV2ZW50cz1bXSx0aGlzLmhhc0V2ZW50cz1mdW5jdGlvbigpe3JldHVybiAwIT10aGlzLmV2ZW50cy5sZW5ndGh9LHRoaXMub25jbGljaz1mdW5jdGlvbih0LGUpe3RoaXMuZXZlbnRzLnB1c2goe3R5cGU6XCJvbmNsaWNrXCIseDp0LHk6ZSxydW46ZnVuY3Rpb24odCl7dC5vbmNsaWNrJiZ0Lm9uY2xpY2soKX19KX0sdGhpcy5vbm1vdXNlbW92ZT1mdW5jdGlvbih0LGUpe3RoaXMuZXZlbnRzLnB1c2goe3R5cGU6XCJvbm1vdXNlbW92ZVwiLHg6dCx5OmUscnVuOmZ1bmN0aW9uKHQpe3Qub25tb3VzZW1vdmUmJnQub25tb3VzZW1vdmUoKX19KX0sdGhpcy5ldmVudEVsZW1lbnRzPVtdLHRoaXMuY2hlY2tQYXRoPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBpPTA7aTx0aGlzLmV2ZW50cy5sZW5ndGg7aSsrKXt2YXIgbj10aGlzLmV2ZW50c1tpXTtlLmlzUG9pbnRJblBhdGgmJmUuaXNQb2ludEluUGF0aChuLngsbi55KSYmKHRoaXMuZXZlbnRFbGVtZW50c1tpXT10KX19LHRoaXMuY2hlY2tCb3VuZGluZ0JveD1mdW5jdGlvbih0LGUpe2Zvcih2YXIgaT0wO2k8dGhpcy5ldmVudHMubGVuZ3RoO2krKyl7dmFyIG49dGhpcy5ldmVudHNbaV07ZS5pc1BvaW50SW5Cb3gobi54LG4ueSkmJih0aGlzLmV2ZW50RWxlbWVudHNbaV09dCl9fSx0aGlzLnJ1bkV2ZW50cz1mdW5jdGlvbigpe0EuY3R4LmNhbnZhcy5zdHlsZS5jdXJzb3I9XCJcIjtmb3IodmFyIHQ9MDt0PHRoaXMuZXZlbnRzLmxlbmd0aDt0KyspZm9yKHZhciBlPXRoaXMuZXZlbnRzW3RdLGk9dGhpcy5ldmVudEVsZW1lbnRzW3RdO2k7KWUucnVuKGkpLGk9aS5wYXJlbnQ7dGhpcy5ldmVudHM9W10sdGhpcy5ldmVudEVsZW1lbnRzPVtdfX0sQX0oaXx8e30pO1wic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0KSksbnVsbCE9dC5zdmcmJnQuc3ZnLnN0b3AoKSx0LmNoaWxkTm9kZXMmJjE9PXQuY2hpbGROb2Rlcy5sZW5ndGgmJlwiT0JKRUNUXCI9PXQuY2hpbGROb2Rlc1swXS5ub2RlTmFtZXx8KHQuc3ZnPW4pO3ZhciBzPXQuZ2V0Q29udGV4dChcIjJkXCIpO3ZvaWQgMCE9PWUuZG9jdW1lbnRFbGVtZW50P24ubG9hZFhtbERvYyhzLGUpOlwiPFwiPT1lLnN1YnN0cigwLDEpP24ubG9hZFhtbChzLGUpOm4ubG9hZChzLGUpfWVsc2UgZm9yKHZhciBhPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdmdcIikscj0wO3I8YS5sZW5ndGg7cisrKXt2YXIgbz1hW3JdLGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtsLndpZHRoPW8uY2xpZW50V2lkdGgsbC5oZWlnaHQ9by5jbGllbnRIZWlnaHQsby5wYXJlbnROb2RlLmluc2VydEJlZm9yZShsLG8pLG8ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKTt2YXIgaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2guYXBwZW5kQ2hpbGQobyksYyhsLGguaW5uZXJIVE1MKX19O1widW5kZWZpbmVkXCI9PXR5cGVvZiBFbGVtZW50fHwodm9pZCAwIT09RWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcz9mPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQubWF0Y2hlcyhlKX06dm9pZCAwIT09RWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yP2Y9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC53ZWJraXRNYXRjaGVzU2VsZWN0b3IoZSl9OnZvaWQgMCE9PUVsZW1lbnQucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3Rvcj9mPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQubW96TWF0Y2hlc1NlbGVjdG9yKGUpfTp2b2lkIDAhPT1FbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3Rvcj9mPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQubXNNYXRjaGVzU2VsZWN0b3IoZSl9OnZvaWQgMCE9PUVsZW1lbnQucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3I/Zj1mdW5jdGlvbih0LGUpe3JldHVybiB0Lm9NYXRjaGVzU2VsZWN0b3IoZSl9OihcImZ1bmN0aW9uXCIhPXR5cGVvZiBqUXVlcnkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIFplcHRvfHwoZj1mdW5jdGlvbih0LGUpe3JldHVybiAkKHQpLmlzKGUpfSksdm9pZCAwPT09ZiYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFNpenpsZSYmKGY9U2l6emxlLm1hdGNoZXNTZWxlY3RvcikpKTt2YXIgZT0vKFxcW1teXFxdXStcXF0pL2csaT0vKCNbXlxcc1xcKz5+XFwuXFxbOl0rKS9nLGE9LyhcXC5bXlxcc1xcKz5+XFwuXFxbOl0rKS9nLHI9Lyg6OlteXFxzXFwrPn5cXC5cXFs6XSt8OmZpcnN0LWxpbmV8OmZpcnN0LWxldHRlcnw6YmVmb3JlfDphZnRlcikvZ2ksbz0vKDpbXFx3LV0rXFwoW15cXCldKlxcKSkvZ2ksbD0vKDpbXlxcc1xcKz5+XFwuXFxbOl0rKS9nLGg9LyhbXlxcc1xcKz5+XFwuXFxbOl0rKS9nO2Z1bmN0aW9uIHcobil7dmFyIHM9WzAsMCwwXSx0PWZ1bmN0aW9uKHQsZSl7dmFyIGk9bi5tYXRjaCh0KTtudWxsIT1pJiYoc1tlXSs9aS5sZW5ndGgsbj1uLnJlcGxhY2UodCxcIiBcIikpfTtyZXR1cm4gbj0obj1uLnJlcGxhY2UoLzpub3RcXCgoW15cXCldKilcXCkvZyxcIiAgICAgJDEgXCIpKS5yZXBsYWNlKC97W1xcc1xcU10qL2dtLFwiIFwiKSx0KGUsMSksdChpLDApLHQoYSwxKSx0KHIsMiksdChvLDEpLHQobCwxKSxuPShuPW4ucmVwbGFjZSgvW1xcKlxcc1xcKz5+XS9nLFwiIFwiKSkucmVwbGFjZSgvWyNcXC5dL2csXCIgXCIpLHQoaCwyKSxzLmpvaW4oXCJcIil9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCYmKENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuZHJhd1N2Zz1mdW5jdGlvbih0LGUsaSxuLHMsYSl7dmFyIHI9e2lnbm9yZU1vdXNlOiEwLGlnbm9yZUFuaW1hdGlvbjohMCxpZ25vcmVEaW1lbnNpb25zOiEwLGlnbm9yZUNsZWFyOiEwLG9mZnNldFg6ZSxvZmZzZXRZOmksc2NhbGVXaWR0aDpuLHNjYWxlSGVpZ2h0OnN9O2Zvcih2YXIgbyBpbiBhKWEuaGFzT3duUHJvcGVydHkobykmJihyW29dPWFbb10pO2ModGhpcy5jYW52YXMsdCxyKX0pLHQuZXhwb3J0cz1jfSh0PXtleHBvcnRzOnt9fSx0LmV4cG9ydHMpLHQuZXhwb3J0c30pOyIsIi8qXG5cdEJhc2VkIG9uIHJnYmNvbG9yLmpzIGJ5IFN0b3lhbiBTdGVmYW5vdiA8c3N0b29AZ21haWwuY29tPlxuXHRodHRwOi8vd3d3LnBocGllZC5jb20vcmdiLWNvbG9yLXBhcnNlci1pbi1qYXZhc2NyaXB0L1xuKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjb2xvcl9zdHJpbmcpIHtcbiAgICB0aGlzLm9rID0gZmFsc2U7XG4gICAgdGhpcy5hbHBoYSA9IDEuMDtcblxuICAgIC8vIHN0cmlwIGFueSBsZWFkaW5nICNcbiAgICBpZiAoY29sb3Jfc3RyaW5nLmNoYXJBdCgwKSA9PSAnIycpIHsgLy8gcmVtb3ZlICMgaWYgYW55XG4gICAgICAgIGNvbG9yX3N0cmluZyA9IGNvbG9yX3N0cmluZy5zdWJzdHIoMSw2KTtcbiAgICB9XG5cbiAgICBjb2xvcl9zdHJpbmcgPSBjb2xvcl9zdHJpbmcucmVwbGFjZSgvIC9nLCcnKTtcbiAgICBjb2xvcl9zdHJpbmcgPSBjb2xvcl9zdHJpbmcudG9Mb3dlckNhc2UoKTtcblxuICAgIC8vIGJlZm9yZSBnZXR0aW5nIGludG8gcmVnZXhwcywgdHJ5IHNpbXBsZSBtYXRjaGVzXG4gICAgLy8gYW5kIG92ZXJ3cml0ZSB0aGUgaW5wdXRcbiAgICB2YXIgc2ltcGxlX2NvbG9ycyA9IHtcbiAgICAgICAgYWxpY2VibHVlOiAnZjBmOGZmJyxcbiAgICAgICAgYW50aXF1ZXdoaXRlOiAnZmFlYmQ3JyxcbiAgICAgICAgYXF1YTogJzAwZmZmZicsXG4gICAgICAgIGFxdWFtYXJpbmU6ICc3ZmZmZDQnLFxuICAgICAgICBhenVyZTogJ2YwZmZmZicsXG4gICAgICAgIGJlaWdlOiAnZjVmNWRjJyxcbiAgICAgICAgYmlzcXVlOiAnZmZlNGM0JyxcbiAgICAgICAgYmxhY2s6ICcwMDAwMDAnLFxuICAgICAgICBibGFuY2hlZGFsbW9uZDogJ2ZmZWJjZCcsXG4gICAgICAgIGJsdWU6ICcwMDAwZmYnLFxuICAgICAgICBibHVldmlvbGV0OiAnOGEyYmUyJyxcbiAgICAgICAgYnJvd246ICdhNTJhMmEnLFxuICAgICAgICBidXJseXdvb2Q6ICdkZWI4ODcnLFxuICAgICAgICBjYWRldGJsdWU6ICc1ZjllYTAnLFxuICAgICAgICBjaGFydHJldXNlOiAnN2ZmZjAwJyxcbiAgICAgICAgY2hvY29sYXRlOiAnZDI2OTFlJyxcbiAgICAgICAgY29yYWw6ICdmZjdmNTAnLFxuICAgICAgICBjb3JuZmxvd2VyYmx1ZTogJzY0OTVlZCcsXG4gICAgICAgIGNvcm5zaWxrOiAnZmZmOGRjJyxcbiAgICAgICAgY3JpbXNvbjogJ2RjMTQzYycsXG4gICAgICAgIGN5YW46ICcwMGZmZmYnLFxuICAgICAgICBkYXJrYmx1ZTogJzAwMDA4YicsXG4gICAgICAgIGRhcmtjeWFuOiAnMDA4YjhiJyxcbiAgICAgICAgZGFya2dvbGRlbnJvZDogJ2I4ODYwYicsXG4gICAgICAgIGRhcmtncmF5OiAnYTlhOWE5JyxcbiAgICAgICAgZGFya2dyZWVuOiAnMDA2NDAwJyxcbiAgICAgICAgZGFya2toYWtpOiAnYmRiNzZiJyxcbiAgICAgICAgZGFya21hZ2VudGE6ICc4YjAwOGInLFxuICAgICAgICBkYXJrb2xpdmVncmVlbjogJzU1NmIyZicsXG4gICAgICAgIGRhcmtvcmFuZ2U6ICdmZjhjMDAnLFxuICAgICAgICBkYXJrb3JjaGlkOiAnOTkzMmNjJyxcbiAgICAgICAgZGFya3JlZDogJzhiMDAwMCcsXG4gICAgICAgIGRhcmtzYWxtb246ICdlOTk2N2EnLFxuICAgICAgICBkYXJrc2VhZ3JlZW46ICc4ZmJjOGYnLFxuICAgICAgICBkYXJrc2xhdGVibHVlOiAnNDgzZDhiJyxcbiAgICAgICAgZGFya3NsYXRlZ3JheTogJzJmNGY0ZicsXG4gICAgICAgIGRhcmt0dXJxdW9pc2U6ICcwMGNlZDEnLFxuICAgICAgICBkYXJrdmlvbGV0OiAnOTQwMGQzJyxcbiAgICAgICAgZGVlcHBpbms6ICdmZjE0OTMnLFxuICAgICAgICBkZWVwc2t5Ymx1ZTogJzAwYmZmZicsXG4gICAgICAgIGRpbWdyYXk6ICc2OTY5NjknLFxuICAgICAgICBkb2RnZXJibHVlOiAnMWU5MGZmJyxcbiAgICAgICAgZmVsZHNwYXI6ICdkMTkyNzUnLFxuICAgICAgICBmaXJlYnJpY2s6ICdiMjIyMjInLFxuICAgICAgICBmbG9yYWx3aGl0ZTogJ2ZmZmFmMCcsXG4gICAgICAgIGZvcmVzdGdyZWVuOiAnMjI4YjIyJyxcbiAgICAgICAgZnVjaHNpYTogJ2ZmMDBmZicsXG4gICAgICAgIGdhaW5zYm9ybzogJ2RjZGNkYycsXG4gICAgICAgIGdob3N0d2hpdGU6ICdmOGY4ZmYnLFxuICAgICAgICBnb2xkOiAnZmZkNzAwJyxcbiAgICAgICAgZ29sZGVucm9kOiAnZGFhNTIwJyxcbiAgICAgICAgZ3JheTogJzgwODA4MCcsXG4gICAgICAgIGdyZWVuOiAnMDA4MDAwJyxcbiAgICAgICAgZ3JlZW55ZWxsb3c6ICdhZGZmMmYnLFxuICAgICAgICBob25leWRldzogJ2YwZmZmMCcsXG4gICAgICAgIGhvdHBpbms6ICdmZjY5YjQnLFxuICAgICAgICBpbmRpYW5yZWQgOiAnY2Q1YzVjJyxcbiAgICAgICAgaW5kaWdvIDogJzRiMDA4MicsXG4gICAgICAgIGl2b3J5OiAnZmZmZmYwJyxcbiAgICAgICAga2hha2k6ICdmMGU2OGMnLFxuICAgICAgICBsYXZlbmRlcjogJ2U2ZTZmYScsXG4gICAgICAgIGxhdmVuZGVyYmx1c2g6ICdmZmYwZjUnLFxuICAgICAgICBsYXduZ3JlZW46ICc3Y2ZjMDAnLFxuICAgICAgICBsZW1vbmNoaWZmb246ICdmZmZhY2QnLFxuICAgICAgICBsaWdodGJsdWU6ICdhZGQ4ZTYnLFxuICAgICAgICBsaWdodGNvcmFsOiAnZjA4MDgwJyxcbiAgICAgICAgbGlnaHRjeWFuOiAnZTBmZmZmJyxcbiAgICAgICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICdmYWZhZDInLFxuICAgICAgICBsaWdodGdyZXk6ICdkM2QzZDMnLFxuICAgICAgICBsaWdodGdyZWVuOiAnOTBlZTkwJyxcbiAgICAgICAgbGlnaHRwaW5rOiAnZmZiNmMxJyxcbiAgICAgICAgbGlnaHRzYWxtb246ICdmZmEwN2EnLFxuICAgICAgICBsaWdodHNlYWdyZWVuOiAnMjBiMmFhJyxcbiAgICAgICAgbGlnaHRza3libHVlOiAnODdjZWZhJyxcbiAgICAgICAgbGlnaHRzbGF0ZWJsdWU6ICc4NDcwZmYnLFxuICAgICAgICBsaWdodHNsYXRlZ3JheTogJzc3ODg5OScsXG4gICAgICAgIGxpZ2h0c3RlZWxibHVlOiAnYjBjNGRlJyxcbiAgICAgICAgbGlnaHR5ZWxsb3c6ICdmZmZmZTAnLFxuICAgICAgICBsaW1lOiAnMDBmZjAwJyxcbiAgICAgICAgbGltZWdyZWVuOiAnMzJjZDMyJyxcbiAgICAgICAgbGluZW46ICdmYWYwZTYnLFxuICAgICAgICBtYWdlbnRhOiAnZmYwMGZmJyxcbiAgICAgICAgbWFyb29uOiAnODAwMDAwJyxcbiAgICAgICAgbWVkaXVtYXF1YW1hcmluZTogJzY2Y2RhYScsXG4gICAgICAgIG1lZGl1bWJsdWU6ICcwMDAwY2QnLFxuICAgICAgICBtZWRpdW1vcmNoaWQ6ICdiYTU1ZDMnLFxuICAgICAgICBtZWRpdW1wdXJwbGU6ICc5MzcwZDgnLFxuICAgICAgICBtZWRpdW1zZWFncmVlbjogJzNjYjM3MScsXG4gICAgICAgIG1lZGl1bXNsYXRlYmx1ZTogJzdiNjhlZScsXG4gICAgICAgIG1lZGl1bXNwcmluZ2dyZWVuOiAnMDBmYTlhJyxcbiAgICAgICAgbWVkaXVtdHVycXVvaXNlOiAnNDhkMWNjJyxcbiAgICAgICAgbWVkaXVtdmlvbGV0cmVkOiAnYzcxNTg1JyxcbiAgICAgICAgbWlkbmlnaHRibHVlOiAnMTkxOTcwJyxcbiAgICAgICAgbWludGNyZWFtOiAnZjVmZmZhJyxcbiAgICAgICAgbWlzdHlyb3NlOiAnZmZlNGUxJyxcbiAgICAgICAgbW9jY2FzaW46ICdmZmU0YjUnLFxuICAgICAgICBuYXZham93aGl0ZTogJ2ZmZGVhZCcsXG4gICAgICAgIG5hdnk6ICcwMDAwODAnLFxuICAgICAgICBvbGRsYWNlOiAnZmRmNWU2JyxcbiAgICAgICAgb2xpdmU6ICc4MDgwMDAnLFxuICAgICAgICBvbGl2ZWRyYWI6ICc2YjhlMjMnLFxuICAgICAgICBvcmFuZ2U6ICdmZmE1MDAnLFxuICAgICAgICBvcmFuZ2VyZWQ6ICdmZjQ1MDAnLFxuICAgICAgICBvcmNoaWQ6ICdkYTcwZDYnLFxuICAgICAgICBwYWxlZ29sZGVucm9kOiAnZWVlOGFhJyxcbiAgICAgICAgcGFsZWdyZWVuOiAnOThmYjk4JyxcbiAgICAgICAgcGFsZXR1cnF1b2lzZTogJ2FmZWVlZScsXG4gICAgICAgIHBhbGV2aW9sZXRyZWQ6ICdkODcwOTMnLFxuICAgICAgICBwYXBheWF3aGlwOiAnZmZlZmQ1JyxcbiAgICAgICAgcGVhY2hwdWZmOiAnZmZkYWI5JyxcbiAgICAgICAgcGVydTogJ2NkODUzZicsXG4gICAgICAgIHBpbms6ICdmZmMwY2InLFxuICAgICAgICBwbHVtOiAnZGRhMGRkJyxcbiAgICAgICAgcG93ZGVyYmx1ZTogJ2IwZTBlNicsXG4gICAgICAgIHB1cnBsZTogJzgwMDA4MCcsXG4gICAgICAgIHJlYmVjY2FwdXJwbGU6ICc2NjMzOTknLFxuICAgICAgICByZWQ6ICdmZjAwMDAnLFxuICAgICAgICByb3N5YnJvd246ICdiYzhmOGYnLFxuICAgICAgICByb3lhbGJsdWU6ICc0MTY5ZTEnLFxuICAgICAgICBzYWRkbGVicm93bjogJzhiNDUxMycsXG4gICAgICAgIHNhbG1vbjogJ2ZhODA3MicsXG4gICAgICAgIHNhbmR5YnJvd246ICdmNGE0NjAnLFxuICAgICAgICBzZWFncmVlbjogJzJlOGI1NycsXG4gICAgICAgIHNlYXNoZWxsOiAnZmZmNWVlJyxcbiAgICAgICAgc2llbm5hOiAnYTA1MjJkJyxcbiAgICAgICAgc2lsdmVyOiAnYzBjMGMwJyxcbiAgICAgICAgc2t5Ymx1ZTogJzg3Y2VlYicsXG4gICAgICAgIHNsYXRlYmx1ZTogJzZhNWFjZCcsXG4gICAgICAgIHNsYXRlZ3JheTogJzcwODA5MCcsXG4gICAgICAgIHNub3c6ICdmZmZhZmEnLFxuICAgICAgICBzcHJpbmdncmVlbjogJzAwZmY3ZicsXG4gICAgICAgIHN0ZWVsYmx1ZTogJzQ2ODJiNCcsXG4gICAgICAgIHRhbjogJ2QyYjQ4YycsXG4gICAgICAgIHRlYWw6ICcwMDgwODAnLFxuICAgICAgICB0aGlzdGxlOiAnZDhiZmQ4JyxcbiAgICAgICAgdG9tYXRvOiAnZmY2MzQ3JyxcbiAgICAgICAgdHVycXVvaXNlOiAnNDBlMGQwJyxcbiAgICAgICAgdmlvbGV0OiAnZWU4MmVlJyxcbiAgICAgICAgdmlvbGV0cmVkOiAnZDAyMDkwJyxcbiAgICAgICAgd2hlYXQ6ICdmNWRlYjMnLFxuICAgICAgICB3aGl0ZTogJ2ZmZmZmZicsXG4gICAgICAgIHdoaXRlc21va2U6ICdmNWY1ZjUnLFxuICAgICAgICB5ZWxsb3c6ICdmZmZmMDAnLFxuICAgICAgICB5ZWxsb3dncmVlbjogJzlhY2QzMidcbiAgICB9O1xuICAgIGNvbG9yX3N0cmluZyA9IHNpbXBsZV9jb2xvcnNbY29sb3Jfc3RyaW5nXSB8fCBjb2xvcl9zdHJpbmc7XG4gICAgLy8gZW1kIG9mIHNpbXBsZSB0eXBlLWluIGNvbG9yc1xuXG4gICAgLy8gYXJyYXkgb2YgY29sb3IgZGVmaW5pdGlvbiBvYmplY3RzXG4gICAgdmFyIGNvbG9yX2RlZnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlOiAvXnJnYmFcXCgoXFxkezEsM30pLFxccyooXFxkezEsM30pLFxccyooXFxkezEsM30pLFxccyooKD86XFxkP1xcLik/XFxkKVxcKSQvLFxuICAgICAgICAgICAgZXhhbXBsZTogWydyZ2JhKDEyMywgMjM0LCA0NSwgMC44KScsICdyZ2JhKDI1NSwyMzQsMjQ1LDEuMCknXSxcbiAgICAgICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uIChiaXRzKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzFdKSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1syXSksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbM10pLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KGJpdHNbNF0pXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcmU6IC9ecmdiXFwoKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KVxcKSQvLFxuICAgICAgICAgICAgZXhhbXBsZTogWydyZ2IoMTIzLCAyMzQsIDQ1KScsICdyZ2IoMjU1LDIzNCwyNDUpJ10sXG4gICAgICAgICAgICBwcm9jZXNzOiBmdW5jdGlvbiAoYml0cyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1sxXSksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMl0pLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzNdKVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlOiAvXihbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KSQvLFxuICAgICAgICAgICAgZXhhbXBsZTogWycjMDBmZjAwJywgJzMzNjY5OSddLFxuICAgICAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gKGJpdHMpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMV0sIDE2KSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1syXSwgMTYpLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzNdLCAxNilcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICByZTogL14oWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkkLyxcbiAgICAgICAgICAgIGV4YW1wbGU6IFsnI2ZiMCcsICdmMGYnXSxcbiAgICAgICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uIChiaXRzKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzFdICsgYml0c1sxXSwgMTYpLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzJdICsgYml0c1syXSwgMTYpLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzNdICsgYml0c1szXSwgMTYpXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF07XG5cbiAgICAvLyBzZWFyY2ggdGhyb3VnaCB0aGUgZGVmaW5pdGlvbnMgdG8gZmluZCBhIG1hdGNoXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xvcl9kZWZzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciByZSA9IGNvbG9yX2RlZnNbaV0ucmU7XG4gICAgICAgIHZhciBwcm9jZXNzb3IgPSBjb2xvcl9kZWZzW2ldLnByb2Nlc3M7XG4gICAgICAgIHZhciBiaXRzID0gcmUuZXhlYyhjb2xvcl9zdHJpbmcpO1xuICAgICAgICBpZiAoYml0cykge1xuICAgICAgICAgICAgdmFyIGNoYW5uZWxzID0gcHJvY2Vzc29yKGJpdHMpO1xuICAgICAgICAgICAgdGhpcy5yID0gY2hhbm5lbHNbMF07XG4gICAgICAgICAgICB0aGlzLmcgPSBjaGFubmVsc1sxXTtcbiAgICAgICAgICAgIHRoaXMuYiA9IGNoYW5uZWxzWzJdO1xuICAgICAgICAgICAgaWYgKGNoYW5uZWxzLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFscGhhID0gY2hhbm5lbHNbM107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9rID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gdmFsaWRhdGUvY2xlYW51cCB2YWx1ZXNcbiAgICB0aGlzLnIgPSAodGhpcy5yIDwgMCB8fCBpc05hTih0aGlzLnIpKSA/IDAgOiAoKHRoaXMuciA+IDI1NSkgPyAyNTUgOiB0aGlzLnIpO1xuICAgIHRoaXMuZyA9ICh0aGlzLmcgPCAwIHx8IGlzTmFOKHRoaXMuZykpID8gMCA6ICgodGhpcy5nID4gMjU1KSA/IDI1NSA6IHRoaXMuZyk7XG4gICAgdGhpcy5iID0gKHRoaXMuYiA8IDAgfHwgaXNOYU4odGhpcy5iKSkgPyAwIDogKCh0aGlzLmIgPiAyNTUpID8gMjU1IDogdGhpcy5iKTtcbiAgICB0aGlzLmFscGhhID0gKHRoaXMuYWxwaGEgPCAwKSA/IDAgOiAoKHRoaXMuYWxwaGEgPiAxLjAgfHwgaXNOYU4odGhpcy5hbHBoYSkpID8gMS4wIDogdGhpcy5hbHBoYSk7XG5cbiAgICAvLyBzb21lIGdldHRlcnNcbiAgICB0aGlzLnRvUkdCID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJ3JnYignICsgdGhpcy5yICsgJywgJyArIHRoaXMuZyArICcsICcgKyB0aGlzLmIgKyAnKSc7XG4gICAgfVxuICAgIHRoaXMudG9SR0JBID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJ3JnYmEoJyArIHRoaXMuciArICcsICcgKyB0aGlzLmcgKyAnLCAnICsgdGhpcy5iICsgJywgJyArIHRoaXMuYWxwaGEgKyAnKSc7XG4gICAgfVxuICAgIHRoaXMudG9IZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByID0gdGhpcy5yLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgdmFyIGcgPSB0aGlzLmcudG9TdHJpbmcoMTYpO1xuICAgICAgICB2YXIgYiA9IHRoaXMuYi50b1N0cmluZygxNik7XG4gICAgICAgIGlmIChyLmxlbmd0aCA9PSAxKSByID0gJzAnICsgcjtcbiAgICAgICAgaWYgKGcubGVuZ3RoID09IDEpIGcgPSAnMCcgKyBnO1xuICAgICAgICBpZiAoYi5sZW5ndGggPT0gMSkgYiA9ICcwJyArIGI7XG4gICAgICAgIHJldHVybiAnIycgKyByICsgZyArIGI7XG4gICAgfVxuXG4gICAgLy8gaGVscFxuICAgIHRoaXMuZ2V0SGVscFhNTCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgZXhhbXBsZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgLy8gYWRkIHJlZ2V4cHNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xvcl9kZWZzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZXhhbXBsZSA9IGNvbG9yX2RlZnNbaV0uZXhhbXBsZTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZXhhbXBsZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGV4YW1wbGVzW2V4YW1wbGVzLmxlbmd0aF0gPSBleGFtcGxlW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGFkZCB0eXBlLWluIGNvbG9yc1xuICAgICAgICBmb3IgKHZhciBzYyBpbiBzaW1wbGVfY29sb3JzKSB7XG4gICAgICAgICAgICBleGFtcGxlc1tleGFtcGxlcy5sZW5ndGhdID0gc2M7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgeG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgeG1sLnNldEF0dHJpYnV0ZSgnaWQnLCAncmdiY29sb3ItZXhhbXBsZXMnKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleGFtcGxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdF9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdF9jb2xvciA9IG5ldyBSR0JDb2xvcihleGFtcGxlc1tpXSk7XG4gICAgICAgICAgICAgICAgdmFyIGV4YW1wbGVfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZXhhbXBsZV9kaXYuc3R5bGUuY3NzVGV4dCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAnbWFyZ2luOiAzcHg7ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJ2JvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAnXG4gICAgICAgICAgICAgICAgICAgICAgICArICdiYWNrZ3JvdW5kOicgKyBsaXN0X2NvbG9yLnRvSGV4KCkgKyAnOyAnXG4gICAgICAgICAgICAgICAgICAgICAgICArICdjb2xvcjonICsgbGlzdF9jb2xvci50b0hleCgpXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIGV4YW1wbGVfZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCd0ZXN0JykpO1xuICAgICAgICAgICAgICAgIHZhciBsaXN0X2l0ZW1fdmFsdWUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICAgICAgICAgICAgICAgICAgJyAnICsgZXhhbXBsZXNbaV0gKyAnIC0+ICcgKyBsaXN0X2NvbG9yLnRvUkdCKCkgKyAnIC0+ICcgKyBsaXN0X2NvbG9yLnRvSGV4KClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGxpc3RfaXRlbS5hcHBlbmRDaGlsZChleGFtcGxlX2Rpdik7XG4gICAgICAgICAgICAgICAgbGlzdF9pdGVtLmFwcGVuZENoaWxkKGxpc3RfaXRlbV92YWx1ZSk7XG4gICAgICAgICAgICAgICAgeG1sLmFwcGVuZENoaWxkKGxpc3RfaXRlbSk7XG5cbiAgICAgICAgICAgIH0gY2F0Y2goZSl7fVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4bWw7XG5cbiAgICB9XG5cbn1cbiIsIi8qXG4gICAgU3RhY2tCbHVyIC0gYSBmYXN0IGFsbW9zdCBHYXVzc2lhbiBCbHVyIEZvciBDYW52YXNcblxuICAgIFZlcnNpb246ICAgICAwLjVcbiAgICBBdXRob3I6ICAgICAgICBNYXJpbyBLbGluZ2VtYW5uXG4gICAgQ29udGFjdDogICAgIG1hcmlvQHF1YXNpbW9uZG8uY29tXG4gICAgV2Vic2l0ZTogICAgaHR0cDovL3d3dy5xdWFzaW1vbmRvLmNvbS9TdGFja0JsdXJGb3JDYW52YXNcbiAgICBUd2l0dGVyOiAgICBAcXVhc2ltb25kb1xuXG4gICAgSW4gY2FzZSB5b3UgZmluZCB0aGlzIGNsYXNzIHVzZWZ1bCAtIGVzcGVjaWFsbHkgaW4gY29tbWVyY2lhbCBwcm9qZWN0cyAtXG4gICAgSSBhbSBub3QgdG90YWxseSB1bmhhcHB5IGZvciBhIHNtYWxsIGRvbmF0aW9uIHRvIG15IFBheVBhbCBhY2NvdW50XG4gICAgbWFyaW9AcXVhc2ltb25kby5kZVxuXG4gICAgT3Igc3VwcG9ydCBtZSBvbiBmbGF0dHI6XG4gICAgaHR0cHM6Ly9mbGF0dHIuY29tL3RoaW5nLzcyNzkxL1N0YWNrQmx1ci1hLWZhc3QtYWxtb3N0LUdhdXNzaWFuLUJsdXItRWZmZWN0LWZvci1DYW52YXNKYXZhc2NyaXB0XG5cbiAgICBDb3B5cmlnaHQgKGMpIDIwMTAgTWFyaW8gS2xpbmdlbWFublxuXG4gICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICAgIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxuICAgIHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuICAgIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gICAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gICAgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcbiAgICBjb25kaXRpb25zOlxuXG4gICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgICBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTXG4gICAgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAgICBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxuICAgIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLFxuICAgIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICAgIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcbiAgICBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gICAgKi9cblxuXG52YXIgbXVsX3RhYmxlID0gW1xuICAgIDUxMiw1MTIsNDU2LDUxMiwzMjgsNDU2LDMzNSw1MTIsNDA1LDMyOCwyNzEsNDU2LDM4OCwzMzUsMjkyLDUxMixcbiAgICA0NTQsNDA1LDM2NCwzMjgsMjk4LDI3MSw0OTYsNDU2LDQyMCwzODgsMzYwLDMzNSwzMTIsMjkyLDI3Myw1MTIsXG4gICAgNDgyLDQ1NCw0MjgsNDA1LDM4MywzNjQsMzQ1LDMyOCwzMTIsMjk4LDI4NCwyNzEsMjU5LDQ5Niw0NzUsNDU2LFxuICAgIDQzNyw0MjAsNDA0LDM4OCwzNzQsMzYwLDM0NywzMzUsMzIzLDMxMiwzMDIsMjkyLDI4MiwyNzMsMjY1LDUxMixcbiAgICA0OTcsNDgyLDQ2OCw0NTQsNDQxLDQyOCw0MTcsNDA1LDM5NCwzODMsMzczLDM2NCwzNTQsMzQ1LDMzNywzMjgsXG4gICAgMzIwLDMxMiwzMDUsMjk4LDI5MSwyODQsMjc4LDI3MSwyNjUsMjU5LDUwNyw0OTYsNDg1LDQ3NSw0NjUsNDU2LFxuICAgIDQ0Niw0MzcsNDI4LDQyMCw0MTIsNDA0LDM5NiwzODgsMzgxLDM3NCwzNjcsMzYwLDM1NCwzNDcsMzQxLDMzNSxcbiAgICAzMjksMzIzLDMxOCwzMTIsMzA3LDMwMiwyOTcsMjkyLDI4NywyODIsMjc4LDI3MywyNjksMjY1LDI2MSw1MTIsXG4gICAgNTA1LDQ5Nyw0ODksNDgyLDQ3NSw0NjgsNDYxLDQ1NCw0NDcsNDQxLDQzNSw0MjgsNDIyLDQxNyw0MTEsNDA1LFxuICAgIDM5OSwzOTQsMzg5LDM4MywzNzgsMzczLDM2OCwzNjQsMzU5LDM1NCwzNTAsMzQ1LDM0MSwzMzcsMzMyLDMyOCxcbiAgICAzMjQsMzIwLDMxNiwzMTIsMzA5LDMwNSwzMDEsMjk4LDI5NCwyOTEsMjg3LDI4NCwyODEsMjc4LDI3NCwyNzEsXG4gICAgMjY4LDI2NSwyNjIsMjU5LDI1Nyw1MDcsNTAxLDQ5Niw0OTEsNDg1LDQ4MCw0NzUsNDcwLDQ2NSw0NjAsNDU2LFxuICAgIDQ1MSw0NDYsNDQyLDQzNyw0MzMsNDI4LDQyNCw0MjAsNDE2LDQxMiw0MDgsNDA0LDQwMCwzOTYsMzkyLDM4OCxcbiAgICAzODUsMzgxLDM3NywzNzQsMzcwLDM2NywzNjMsMzYwLDM1NywzNTQsMzUwLDM0NywzNDQsMzQxLDMzOCwzMzUsXG4gICAgMzMyLDMyOSwzMjYsMzIzLDMyMCwzMTgsMzE1LDMxMiwzMTAsMzA3LDMwNCwzMDIsMjk5LDI5NywyOTQsMjkyLFxuICAgIDI4OSwyODcsMjg1LDI4MiwyODAsMjc4LDI3NSwyNzMsMjcxLDI2OSwyNjcsMjY1LDI2MywyNjEsMjU5XTtcblxuXG52YXIgc2hnX3RhYmxlID0gW1xuICAgIDksIDExLCAxMiwgMTMsIDEzLCAxNCwgMTQsIDE1LCAxNSwgMTUsIDE1LCAxNiwgMTYsIDE2LCAxNiwgMTcsXG4gICAgMTcsIDE3LCAxNywgMTcsIDE3LCAxNywgMTgsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTksXG4gICAgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDIwLCAyMCwgMjAsXG4gICAgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjEsXG4gICAgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsXG4gICAgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsXG4gICAgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsXG4gICAgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjMsXG4gICAgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsXG4gICAgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsXG4gICAgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsXG4gICAgMjMsIDIzLCAyMywgMjMsIDIzLCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsXG4gICAgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsXG4gICAgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsXG4gICAgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsXG4gICAgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCBdO1xuXG5cbmZ1bmN0aW9uIHByb2Nlc3NJbWFnZShpbWcsIGNhbnZhcywgcmFkaXVzLCBibHVyQWxwaGFDaGFubmVsKVxue1xuICAgIGlmICh0eXBlb2YoaW1nKSA9PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW1nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIEhUTUxJbWFnZUVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmICFpbWcgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHcgPSBpbWcubmF0dXJhbFdpZHRoO1xuICAgIHZhciBoID0gaW1nLm5hdHVyYWxIZWlnaHQ7XG5cbiAgICBpZiAodHlwZW9mKGNhbnZhcykgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhcyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBIVE1MQ2FudmFzRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIWNhbnZhcyBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjYW52YXMuc3R5bGUud2lkdGggID0gdyArICdweCc7XG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGggKyAncHgnO1xuICAgIGNhbnZhcy53aWR0aCA9IHc7XG4gICAgY2FudmFzLmhlaWdodCA9IGg7XG5cbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHcsIGgpO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZywgMCwgMCk7XG5cbiAgICBpZiAoaXNOYU4ocmFkaXVzKSB8fCByYWRpdXMgPCAxKSByZXR1cm47XG5cbiAgICBpZiAoYmx1ckFscGhhQ2hhbm5lbClcbiAgICAgICAgcHJvY2Vzc0NhbnZhc1JHQkEoY2FudmFzLCAwLCAwLCB3LCBoLCByYWRpdXMpO1xuICAgIGVsc2VcbiAgICAgICAgcHJvY2Vzc0NhbnZhc1JHQihjYW52YXMsIDAsIDAsIHcsIGgsIHJhZGl1cyk7XG59XG5cbmZ1bmN0aW9uIGdldEltYWdlRGF0YUZyb21DYW52YXMoY2FudmFzLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQpXG57XG4gICAgaWYgKHR5cGVvZihjYW52YXMpID09ICdzdHJpbmcnKVxuICAgICAgICB2YXIgY2FudmFzICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhcyk7XG4gICAgZWxzZSBpZiAodHlwZW9mIEhUTUxDYW52YXNFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpXG4gICAgICAgIHJldHVybjtcblxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdmFyIGltYWdlRGF0YTtcblxuICAgIHRyeSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpbWFnZURhdGEgPSBjb250ZXh0LmdldEltYWdlRGF0YSh0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVuYWJsZSB0byBhY2Nlc3MgbG9jYWwgaW1hZ2UgZGF0YTogXCIgKyBlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmFibGUgdG8gYWNjZXNzIGltYWdlIGRhdGE6IFwiICsgZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGltYWdlRGF0YTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0NhbnZhc1JHQkEoY2FudmFzLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cylcbntcbiAgICBpZiAoaXNOYU4ocmFkaXVzKSB8fCByYWRpdXMgPCAxKSByZXR1cm47XG4gICAgcmFkaXVzIHw9IDA7XG5cbiAgICB2YXIgaW1hZ2VEYXRhID0gZ2V0SW1hZ2VEYXRhRnJvbUNhbnZhcyhjYW52YXMsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICBpbWFnZURhdGEgPSBwcm9jZXNzSW1hZ2VEYXRhUkdCQShpbWFnZURhdGEsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKTtcblxuICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLnB1dEltYWdlRGF0YShpbWFnZURhdGEsIHRvcF94LCB0b3BfeSk7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NJbWFnZURhdGFSR0JBKGltYWdlRGF0YSwgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpXG57XG4gICAgdmFyIHBpeGVscyA9IGltYWdlRGF0YS5kYXRhO1xuXG4gICAgdmFyIHgsIHksIGksIHAsIHlwLCB5aSwgeXcsIHJfc3VtLCBnX3N1bSwgYl9zdW0sIGFfc3VtLFxuICAgICAgICByX291dF9zdW0sIGdfb3V0X3N1bSwgYl9vdXRfc3VtLCBhX291dF9zdW0sXG4gICAgICAgIHJfaW5fc3VtLCBnX2luX3N1bSwgYl9pbl9zdW0sIGFfaW5fc3VtLFxuICAgICAgICBwciwgcGcsIHBiLCBwYSwgcmJzO1xuXG4gICAgdmFyIGRpdiA9IHJhZGl1cyArIHJhZGl1cyArIDE7XG4gICAgdmFyIHc0ID0gd2lkdGggPDwgMjtcbiAgICB2YXIgd2lkdGhNaW51czEgID0gd2lkdGggLSAxO1xuICAgIHZhciBoZWlnaHRNaW51czEgPSBoZWlnaHQgLSAxO1xuICAgIHZhciByYWRpdXNQbHVzMSAgPSByYWRpdXMgKyAxO1xuICAgIHZhciBzdW1GYWN0b3IgPSByYWRpdXNQbHVzMSAqIChyYWRpdXNQbHVzMSArIDEpIC8gMjtcblxuICAgIHZhciBzdGFja1N0YXJ0ID0gbmV3IEJsdXJTdGFjaygpO1xuICAgIHZhciBzdGFjayA9IHN0YWNrU3RhcnQ7XG4gICAgZm9yIChpID0gMTsgaSA8IGRpdjsgaSsrKVxuICAgIHtcbiAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0ID0gbmV3IEJsdXJTdGFjaygpO1xuICAgICAgICBpZiAoaSA9PSByYWRpdXNQbHVzMSkgdmFyIHN0YWNrRW5kID0gc3RhY2s7XG4gICAgfVxuICAgIHN0YWNrLm5leHQgPSBzdGFja1N0YXJ0O1xuICAgIHZhciBzdGFja0luID0gbnVsbDtcbiAgICB2YXIgc3RhY2tPdXQgPSBudWxsO1xuXG4gICAgeXcgPSB5aSA9IDA7XG5cbiAgICB2YXIgbXVsX3N1bSA9IG11bF90YWJsZVtyYWRpdXNdO1xuICAgIHZhciBzaGdfc3VtID0gc2hnX3RhYmxlW3JhZGl1c107XG5cbiAgICBmb3IgKHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspXG4gICAge1xuICAgICAgICByX2luX3N1bSA9IGdfaW5fc3VtID0gYl9pbl9zdW0gPSBhX2luX3N1bSA9IHJfc3VtID0gZ19zdW0gPSBiX3N1bSA9IGFfc3VtID0gMDtcblxuICAgICAgICByX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwciA9IHBpeGVsc1t5aV0pO1xuICAgICAgICBnX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwZyA9IHBpeGVsc1t5aSsxXSk7XG4gICAgICAgIGJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBiID0gcGl4ZWxzW3lpKzJdKTtcbiAgICAgICAgYV9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGEgPSBwaXhlbHNbeWkrM10pO1xuXG4gICAgICAgIHJfc3VtICs9IHN1bUZhY3RvciAqIHByO1xuICAgICAgICBnX3N1bSArPSBzdW1GYWN0b3IgKiBwZztcbiAgICAgICAgYl9zdW0gKz0gc3VtRmFjdG9yICogcGI7XG4gICAgICAgIGFfc3VtICs9IHN1bUZhY3RvciAqIHBhO1xuXG4gICAgICAgIHN0YWNrID0gc3RhY2tTdGFydDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmFkaXVzUGx1czE7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgc3RhY2suciA9IHByO1xuICAgICAgICAgICAgc3RhY2suZyA9IHBnO1xuICAgICAgICAgICAgc3RhY2suYiA9IHBiO1xuICAgICAgICAgICAgc3RhY2suYSA9IHBhO1xuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMTsgaSA8IHJhZGl1c1BsdXMxOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHAgPSB5aSArICgod2lkdGhNaW51czEgPCBpID8gd2lkdGhNaW51czEgOiBpKSA8PCAyKTtcbiAgICAgICAgICAgIHJfc3VtICs9IChzdGFjay5yID0gKHByID0gcGl4ZWxzW3BdKSkgKiAocmJzID0gcmFkaXVzUGx1czEgLSBpKTtcbiAgICAgICAgICAgIGdfc3VtICs9IChzdGFjay5nID0gKHBnID0gcGl4ZWxzW3ArMV0pKSAqIHJicztcbiAgICAgICAgICAgIGJfc3VtICs9IChzdGFjay5iID0gKHBiID0gcGl4ZWxzW3ArMl0pKSAqIHJicztcbiAgICAgICAgICAgIGFfc3VtICs9IChzdGFjay5hID0gKHBhID0gcGl4ZWxzW3ArM10pKSAqIHJicztcblxuICAgICAgICAgICAgcl9pbl9zdW0gKz0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSArPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtICs9IHBiO1xuICAgICAgICAgICAgYV9pbl9zdW0gKz0gcGE7XG5cbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc3RhY2tJbiA9IHN0YWNrU3RhcnQ7XG4gICAgICAgIHN0YWNrT3V0ID0gc3RhY2tFbmQ7XG4gICAgICAgIGZvciAoeCA9IDA7IHggPCB3aWR0aDsgeCsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBwaXhlbHNbeWkrM10gPSBwYSA9IChhX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG4gICAgICAgICAgICBpZiAocGEgIT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYSA9IDI1NSAvIHBhO1xuICAgICAgICAgICAgICAgIHBpeGVsc1t5aV0gICA9ICgocl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtKSAqIHBhO1xuICAgICAgICAgICAgICAgIHBpeGVsc1t5aSsxXSA9ICgoZ19zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtKSAqIHBhO1xuICAgICAgICAgICAgICAgIHBpeGVsc1t5aSsyXSA9ICgoYl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtKSAqIHBhO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwaXhlbHNbeWldID0gcGl4ZWxzW3lpKzFdID0gcGl4ZWxzW3lpKzJdID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcl9zdW0gLT0gcl9vdXRfc3VtO1xuICAgICAgICAgICAgZ19zdW0gLT0gZ19vdXRfc3VtO1xuICAgICAgICAgICAgYl9zdW0gLT0gYl9vdXRfc3VtO1xuICAgICAgICAgICAgYV9zdW0gLT0gYV9vdXRfc3VtO1xuXG4gICAgICAgICAgICByX291dF9zdW0gLT0gc3RhY2tJbi5yO1xuICAgICAgICAgICAgZ19vdXRfc3VtIC09IHN0YWNrSW4uZztcbiAgICAgICAgICAgIGJfb3V0X3N1bSAtPSBzdGFja0luLmI7XG4gICAgICAgICAgICBhX291dF9zdW0gLT0gc3RhY2tJbi5hO1xuXG4gICAgICAgICAgICBwID0gICh5dyArICgocCA9IHggKyByYWRpdXMgKyAxKSA8IHdpZHRoTWludXMxID8gcCA6IHdpZHRoTWludXMxKSkgPDwgMjtcblxuICAgICAgICAgICAgcl9pbl9zdW0gKz0gKHN0YWNrSW4uciA9IHBpeGVsc1twXSk7XG4gICAgICAgICAgICBnX2luX3N1bSArPSAoc3RhY2tJbi5nID0gcGl4ZWxzW3ArMV0pO1xuICAgICAgICAgICAgYl9pbl9zdW0gKz0gKHN0YWNrSW4uYiA9IHBpeGVsc1twKzJdKTtcbiAgICAgICAgICAgIGFfaW5fc3VtICs9IChzdGFja0luLmEgPSBwaXhlbHNbcCszXSk7XG5cbiAgICAgICAgICAgIHJfc3VtICs9IHJfaW5fc3VtO1xuICAgICAgICAgICAgZ19zdW0gKz0gZ19pbl9zdW07XG4gICAgICAgICAgICBiX3N1bSArPSBiX2luX3N1bTtcbiAgICAgICAgICAgIGFfc3VtICs9IGFfaW5fc3VtO1xuXG4gICAgICAgICAgICBzdGFja0luID0gc3RhY2tJbi5uZXh0O1xuXG4gICAgICAgICAgICByX291dF9zdW0gKz0gKHByID0gc3RhY2tPdXQucik7XG4gICAgICAgICAgICBnX291dF9zdW0gKz0gKHBnID0gc3RhY2tPdXQuZyk7XG4gICAgICAgICAgICBiX291dF9zdW0gKz0gKHBiID0gc3RhY2tPdXQuYik7XG4gICAgICAgICAgICBhX291dF9zdW0gKz0gKHBhID0gc3RhY2tPdXQuYSk7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtIC09IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gLT0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSAtPSBwYjtcbiAgICAgICAgICAgIGFfaW5fc3VtIC09IHBhO1xuXG4gICAgICAgICAgICBzdGFja091dCA9IHN0YWNrT3V0Lm5leHQ7XG5cbiAgICAgICAgICAgIHlpICs9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgeXcgKz0gd2lkdGg7XG4gICAgfVxuXG5cbiAgICBmb3IgKHggPSAwOyB4IDwgd2lkdGg7IHgrKylcbiAgICB7XG4gICAgICAgIGdfaW5fc3VtID0gYl9pbl9zdW0gPSBhX2luX3N1bSA9IHJfaW5fc3VtID0gZ19zdW0gPSBiX3N1bSA9IGFfc3VtID0gcl9zdW0gPSAwO1xuXG4gICAgICAgIHlpID0geCA8PCAyO1xuICAgICAgICByX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwciA9IHBpeGVsc1t5aV0pO1xuICAgICAgICBnX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwZyA9IHBpeGVsc1t5aSsxXSk7XG4gICAgICAgIGJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBiID0gcGl4ZWxzW3lpKzJdKTtcbiAgICAgICAgYV9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGEgPSBwaXhlbHNbeWkrM10pO1xuXG4gICAgICAgIHJfc3VtICs9IHN1bUZhY3RvciAqIHByO1xuICAgICAgICBnX3N1bSArPSBzdW1GYWN0b3IgKiBwZztcbiAgICAgICAgYl9zdW0gKz0gc3VtRmFjdG9yICogcGI7XG4gICAgICAgIGFfc3VtICs9IHN1bUZhY3RvciAqIHBhO1xuXG4gICAgICAgIHN0YWNrID0gc3RhY2tTdGFydDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmFkaXVzUGx1czE7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgc3RhY2suciA9IHByO1xuICAgICAgICAgICAgc3RhY2suZyA9IHBnO1xuICAgICAgICAgICAgc3RhY2suYiA9IHBiO1xuICAgICAgICAgICAgc3RhY2suYSA9IHBhO1xuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgeXAgPSB3aWR0aDtcblxuICAgICAgICBmb3IgKGkgPSAxOyBpIDw9IHJhZGl1czsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB5aSA9ICh5cCArIHgpIDw8IDI7XG5cbiAgICAgICAgICAgIHJfc3VtICs9IChzdGFjay5yID0gKHByID0gcGl4ZWxzW3lpXSkpICogKHJicyA9IHJhZGl1c1BsdXMxIC0gaSk7XG4gICAgICAgICAgICBnX3N1bSArPSAoc3RhY2suZyA9IChwZyA9IHBpeGVsc1t5aSsxXSkpICogcmJzO1xuICAgICAgICAgICAgYl9zdW0gKz0gKHN0YWNrLmIgPSAocGIgPSBwaXhlbHNbeWkrMl0pKSAqIHJicztcbiAgICAgICAgICAgIGFfc3VtICs9IChzdGFjay5hID0gKHBhID0gcGl4ZWxzW3lpKzNdKSkgKiByYnM7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtICs9IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gKz0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSArPSBwYjtcbiAgICAgICAgICAgIGFfaW5fc3VtICs9IHBhO1xuXG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG5cbiAgICAgICAgICAgIGlmKGkgPCBoZWlnaHRNaW51czEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeXAgKz0gd2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB5aSA9IHg7XG4gICAgICAgIHN0YWNrSW4gPSBzdGFja1N0YXJ0O1xuICAgICAgICBzdGFja091dCA9IHN0YWNrRW5kO1xuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHAgPSB5aSA8PCAyO1xuICAgICAgICAgICAgcGl4ZWxzW3ArM10gPSBwYSA9IChhX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG4gICAgICAgICAgICBpZiAocGEgPiAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhID0gMjU1IC8gcGE7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3BdICAgPSAoKHJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bSkgKiBwYTtcbiAgICAgICAgICAgICAgICBwaXhlbHNbcCsxXSA9ICgoZ19zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtKSAqIHBhO1xuICAgICAgICAgICAgICAgIHBpeGVsc1twKzJdID0gKChiX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW0pICogcGE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBpeGVsc1twXSA9IHBpeGVsc1twKzFdID0gcGl4ZWxzW3ArMl0gPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByX3N1bSAtPSByX291dF9zdW07XG4gICAgICAgICAgICBnX3N1bSAtPSBnX291dF9zdW07XG4gICAgICAgICAgICBiX3N1bSAtPSBiX291dF9zdW07XG4gICAgICAgICAgICBhX3N1bSAtPSBhX291dF9zdW07XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSAtPSBzdGFja0luLnI7XG4gICAgICAgICAgICBnX291dF9zdW0gLT0gc3RhY2tJbi5nO1xuICAgICAgICAgICAgYl9vdXRfc3VtIC09IHN0YWNrSW4uYjtcbiAgICAgICAgICAgIGFfb3V0X3N1bSAtPSBzdGFja0luLmE7XG5cbiAgICAgICAgICAgIHAgPSAoeCArICgoKHAgPSB5ICsgcmFkaXVzUGx1czEpIDwgaGVpZ2h0TWludXMxID8gcCA6IGhlaWdodE1pbnVzMSkgKiB3aWR0aCkpIDw8IDI7XG5cbiAgICAgICAgICAgIHJfc3VtICs9IChyX2luX3N1bSArPSAoc3RhY2tJbi5yID0gcGl4ZWxzW3BdKSk7XG4gICAgICAgICAgICBnX3N1bSArPSAoZ19pbl9zdW0gKz0gKHN0YWNrSW4uZyA9IHBpeGVsc1twKzFdKSk7XG4gICAgICAgICAgICBiX3N1bSArPSAoYl9pbl9zdW0gKz0gKHN0YWNrSW4uYiA9IHBpeGVsc1twKzJdKSk7XG4gICAgICAgICAgICBhX3N1bSArPSAoYV9pbl9zdW0gKz0gKHN0YWNrSW4uYSA9IHBpeGVsc1twKzNdKSk7XG5cbiAgICAgICAgICAgIHN0YWNrSW4gPSBzdGFja0luLm5leHQ7XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSArPSAocHIgPSBzdGFja091dC5yKTtcbiAgICAgICAgICAgIGdfb3V0X3N1bSArPSAocGcgPSBzdGFja091dC5nKTtcbiAgICAgICAgICAgIGJfb3V0X3N1bSArPSAocGIgPSBzdGFja091dC5iKTtcbiAgICAgICAgICAgIGFfb3V0X3N1bSArPSAocGEgPSBzdGFja091dC5hKTtcblxuICAgICAgICAgICAgcl9pbl9zdW0gLT0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSAtPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtIC09IHBiO1xuICAgICAgICAgICAgYV9pbl9zdW0gLT0gcGE7XG5cbiAgICAgICAgICAgIHN0YWNrT3V0ID0gc3RhY2tPdXQubmV4dDtcblxuICAgICAgICAgICAgeWkgKz0gd2lkdGg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGltYWdlRGF0YTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0NhbnZhc1JHQihjYW52YXMsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKVxue1xuICAgIGlmIChpc05hTihyYWRpdXMpIHx8IHJhZGl1cyA8IDEpIHJldHVybjtcbiAgICByYWRpdXMgfD0gMDtcblxuICAgIHZhciBpbWFnZURhdGEgPSBnZXRJbWFnZURhdGFGcm9tQ2FudmFzKGNhbnZhcywgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBpbWFnZURhdGEgPSBwcm9jZXNzSW1hZ2VEYXRhUkdCKGltYWdlRGF0YSwgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpO1xuXG4gICAgY2FudmFzLmdldENvbnRleHQoJzJkJykucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgdG9wX3gsIHRvcF95KTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0ltYWdlRGF0YVJHQihpbWFnZURhdGEsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKVxue1xuICAgIHZhciBwaXhlbHMgPSBpbWFnZURhdGEuZGF0YTtcblxuICAgIHZhciB4LCB5LCBpLCBwLCB5cCwgeWksIHl3LCByX3N1bSwgZ19zdW0sIGJfc3VtLFxuICAgICAgICByX291dF9zdW0sIGdfb3V0X3N1bSwgYl9vdXRfc3VtLFxuICAgICAgICByX2luX3N1bSwgZ19pbl9zdW0sIGJfaW5fc3VtLFxuICAgICAgICBwciwgcGcsIHBiLCByYnM7XG5cbiAgICB2YXIgZGl2ID0gcmFkaXVzICsgcmFkaXVzICsgMTtcbiAgICB2YXIgdzQgPSB3aWR0aCA8PCAyO1xuICAgIHZhciB3aWR0aE1pbnVzMSAgPSB3aWR0aCAtIDE7XG4gICAgdmFyIGhlaWdodE1pbnVzMSA9IGhlaWdodCAtIDE7XG4gICAgdmFyIHJhZGl1c1BsdXMxICA9IHJhZGl1cyArIDE7XG4gICAgdmFyIHN1bUZhY3RvciA9IHJhZGl1c1BsdXMxICogKHJhZGl1c1BsdXMxICsgMSkgLyAyO1xuXG4gICAgdmFyIHN0YWNrU3RhcnQgPSBuZXcgQmx1clN0YWNrKCk7XG4gICAgdmFyIHN0YWNrID0gc3RhY2tTdGFydDtcbiAgICBmb3IgKGkgPSAxOyBpIDwgZGl2OyBpKyspXG4gICAge1xuICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQgPSBuZXcgQmx1clN0YWNrKCk7XG4gICAgICAgIGlmIChpID09IHJhZGl1c1BsdXMxKSB2YXIgc3RhY2tFbmQgPSBzdGFjaztcbiAgICB9XG4gICAgc3RhY2submV4dCA9IHN0YWNrU3RhcnQ7XG4gICAgdmFyIHN0YWNrSW4gPSBudWxsO1xuICAgIHZhciBzdGFja091dCA9IG51bGw7XG5cbiAgICB5dyA9IHlpID0gMDtcblxuICAgIHZhciBtdWxfc3VtID0gbXVsX3RhYmxlW3JhZGl1c107XG4gICAgdmFyIHNoZ19zdW0gPSBzaGdfdGFibGVbcmFkaXVzXTtcblxuICAgIGZvciAoeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKylcbiAgICB7XG4gICAgICAgIHJfaW5fc3VtID0gZ19pbl9zdW0gPSBiX2luX3N1bSA9IHJfc3VtID0gZ19zdW0gPSBiX3N1bSA9IDA7XG5cbiAgICAgICAgcl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocHIgPSBwaXhlbHNbeWldKTtcbiAgICAgICAgZ19vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGcgPSBwaXhlbHNbeWkrMV0pO1xuICAgICAgICBiX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwYiA9IHBpeGVsc1t5aSsyXSk7XG5cbiAgICAgICAgcl9zdW0gKz0gc3VtRmFjdG9yICogcHI7XG4gICAgICAgIGdfc3VtICs9IHN1bUZhY3RvciAqIHBnO1xuICAgICAgICBiX3N1bSArPSBzdW1GYWN0b3IgKiBwYjtcblxuICAgICAgICBzdGFjayA9IHN0YWNrU3RhcnQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJhZGl1c1BsdXMxOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN0YWNrLnIgPSBwcjtcbiAgICAgICAgICAgIHN0YWNrLmcgPSBwZztcbiAgICAgICAgICAgIHN0YWNrLmIgPSBwYjtcbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCByYWRpdXNQbHVzMTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBwID0geWkgKyAoKHdpZHRoTWludXMxIDwgaSA/IHdpZHRoTWludXMxIDogaSkgPDwgMik7XG4gICAgICAgICAgICByX3N1bSArPSAoc3RhY2suciA9IChwciA9IHBpeGVsc1twXSkpICogKHJicyA9IHJhZGl1c1BsdXMxIC0gaSk7XG4gICAgICAgICAgICBnX3N1bSArPSAoc3RhY2suZyA9IChwZyA9IHBpeGVsc1twKzFdKSkgKiByYnM7XG4gICAgICAgICAgICBiX3N1bSArPSAoc3RhY2suYiA9IChwYiA9IHBpeGVsc1twKzJdKSkgKiByYnM7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtICs9IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gKz0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSArPSBwYjtcblxuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgICAgICB9XG5cblxuICAgICAgICBzdGFja0luID0gc3RhY2tTdGFydDtcbiAgICAgICAgc3RhY2tPdXQgPSBzdGFja0VuZDtcbiAgICAgICAgZm9yICh4ID0gMDsgeCA8IHdpZHRoOyB4KyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBpeGVsc1t5aV0gICA9IChyX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG4gICAgICAgICAgICBwaXhlbHNbeWkrMV0gPSAoZ19zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuICAgICAgICAgICAgcGl4ZWxzW3lpKzJdID0gKGJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcblxuICAgICAgICAgICAgcl9zdW0gLT0gcl9vdXRfc3VtO1xuICAgICAgICAgICAgZ19zdW0gLT0gZ19vdXRfc3VtO1xuICAgICAgICAgICAgYl9zdW0gLT0gYl9vdXRfc3VtO1xuXG4gICAgICAgICAgICByX291dF9zdW0gLT0gc3RhY2tJbi5yO1xuICAgICAgICAgICAgZ19vdXRfc3VtIC09IHN0YWNrSW4uZztcbiAgICAgICAgICAgIGJfb3V0X3N1bSAtPSBzdGFja0luLmI7XG5cbiAgICAgICAgICAgIHAgPSAgKHl3ICsgKChwID0geCArIHJhZGl1cyArIDEpIDwgd2lkdGhNaW51czEgPyBwIDogd2lkdGhNaW51czEpKSA8PCAyO1xuXG4gICAgICAgICAgICByX2luX3N1bSArPSAoc3RhY2tJbi5yID0gcGl4ZWxzW3BdKTtcbiAgICAgICAgICAgIGdfaW5fc3VtICs9IChzdGFja0luLmcgPSBwaXhlbHNbcCsxXSk7XG4gICAgICAgICAgICBiX2luX3N1bSArPSAoc3RhY2tJbi5iID0gcGl4ZWxzW3ArMl0pO1xuXG4gICAgICAgICAgICByX3N1bSArPSByX2luX3N1bTtcbiAgICAgICAgICAgIGdfc3VtICs9IGdfaW5fc3VtO1xuICAgICAgICAgICAgYl9zdW0gKz0gYl9pbl9zdW07XG5cbiAgICAgICAgICAgIHN0YWNrSW4gPSBzdGFja0luLm5leHQ7XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSArPSAocHIgPSBzdGFja091dC5yKTtcbiAgICAgICAgICAgIGdfb3V0X3N1bSArPSAocGcgPSBzdGFja091dC5nKTtcbiAgICAgICAgICAgIGJfb3V0X3N1bSArPSAocGIgPSBzdGFja091dC5iKTtcblxuICAgICAgICAgICAgcl9pbl9zdW0gLT0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSAtPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtIC09IHBiO1xuXG4gICAgICAgICAgICBzdGFja091dCA9IHN0YWNrT3V0Lm5leHQ7XG5cbiAgICAgICAgICAgIHlpICs9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgeXcgKz0gd2lkdGg7XG4gICAgfVxuXG5cbiAgICBmb3IgKHggPSAwOyB4IDwgd2lkdGg7IHgrKylcbiAgICB7XG4gICAgICAgIGdfaW5fc3VtID0gYl9pbl9zdW0gPSByX2luX3N1bSA9IGdfc3VtID0gYl9zdW0gPSByX3N1bSA9IDA7XG5cbiAgICAgICAgeWkgPSB4IDw8IDI7XG4gICAgICAgIHJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHByID0gcGl4ZWxzW3lpXSk7XG4gICAgICAgIGdfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBnID0gcGl4ZWxzW3lpKzFdKTtcbiAgICAgICAgYl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGIgPSBwaXhlbHNbeWkrMl0pO1xuXG4gICAgICAgIHJfc3VtICs9IHN1bUZhY3RvciAqIHByO1xuICAgICAgICBnX3N1bSArPSBzdW1GYWN0b3IgKiBwZztcbiAgICAgICAgYl9zdW0gKz0gc3VtRmFjdG9yICogcGI7XG5cbiAgICAgICAgc3RhY2sgPSBzdGFja1N0YXJ0O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByYWRpdXNQbHVzMTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdGFjay5yID0gcHI7XG4gICAgICAgICAgICBzdGFjay5nID0gcGc7XG4gICAgICAgICAgICBzdGFjay5iID0gcGI7XG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG4gICAgICAgIH1cblxuICAgICAgICB5cCA9IHdpZHRoO1xuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPD0gcmFkaXVzOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHlpID0gKHlwICsgeCkgPDwgMjtcblxuICAgICAgICAgICAgcl9zdW0gKz0gKHN0YWNrLnIgPSAocHIgPSBwaXhlbHNbeWldKSkgKiAocmJzID0gcmFkaXVzUGx1czEgLSBpKTtcbiAgICAgICAgICAgIGdfc3VtICs9IChzdGFjay5nID0gKHBnID0gcGl4ZWxzW3lpKzFdKSkgKiByYnM7XG4gICAgICAgICAgICBiX3N1bSArPSAoc3RhY2suYiA9IChwYiA9IHBpeGVsc1t5aSsyXSkpICogcmJzO1xuXG4gICAgICAgICAgICByX2luX3N1bSArPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtICs9IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gKz0gcGI7XG5cbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcblxuICAgICAgICAgICAgaWYoaSA8IGhlaWdodE1pbnVzMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB5cCArPSB3aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHlpID0geDtcbiAgICAgICAgc3RhY2tJbiA9IHN0YWNrU3RhcnQ7XG4gICAgICAgIHN0YWNrT3V0ID0gc3RhY2tFbmQ7XG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgcCA9IHlpIDw8IDI7XG4gICAgICAgICAgICBwaXhlbHNbcF0gICA9IChyX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG4gICAgICAgICAgICBwaXhlbHNbcCsxXSA9IChnX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG4gICAgICAgICAgICBwaXhlbHNbcCsyXSA9IChiX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG5cbiAgICAgICAgICAgIHJfc3VtIC09IHJfb3V0X3N1bTtcbiAgICAgICAgICAgIGdfc3VtIC09IGdfb3V0X3N1bTtcbiAgICAgICAgICAgIGJfc3VtIC09IGJfb3V0X3N1bTtcblxuICAgICAgICAgICAgcl9vdXRfc3VtIC09IHN0YWNrSW4ucjtcbiAgICAgICAgICAgIGdfb3V0X3N1bSAtPSBzdGFja0luLmc7XG4gICAgICAgICAgICBiX291dF9zdW0gLT0gc3RhY2tJbi5iO1xuXG4gICAgICAgICAgICBwID0gKHggKyAoKChwID0geSArIHJhZGl1c1BsdXMxKSA8IGhlaWdodE1pbnVzMSA/IHAgOiBoZWlnaHRNaW51czEpICogd2lkdGgpKSA8PCAyO1xuXG4gICAgICAgICAgICByX3N1bSArPSAocl9pbl9zdW0gKz0gKHN0YWNrSW4uciA9IHBpeGVsc1twXSkpO1xuICAgICAgICAgICAgZ19zdW0gKz0gKGdfaW5fc3VtICs9IChzdGFja0luLmcgPSBwaXhlbHNbcCsxXSkpO1xuICAgICAgICAgICAgYl9zdW0gKz0gKGJfaW5fc3VtICs9IChzdGFja0luLmIgPSBwaXhlbHNbcCsyXSkpO1xuXG4gICAgICAgICAgICBzdGFja0luID0gc3RhY2tJbi5uZXh0O1xuXG4gICAgICAgICAgICByX291dF9zdW0gKz0gKHByID0gc3RhY2tPdXQucik7XG4gICAgICAgICAgICBnX291dF9zdW0gKz0gKHBnID0gc3RhY2tPdXQuZyk7XG4gICAgICAgICAgICBiX291dF9zdW0gKz0gKHBiID0gc3RhY2tPdXQuYik7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtIC09IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gLT0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSAtPSBwYjtcblxuICAgICAgICAgICAgc3RhY2tPdXQgPSBzdGFja091dC5uZXh0O1xuXG4gICAgICAgICAgICB5aSArPSB3aWR0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbWFnZURhdGE7XG59XG5cbmZ1bmN0aW9uIEJsdXJTdGFjaygpXG57XG4gICAgdGhpcy5yID0gMDtcbiAgICB0aGlzLmcgPSAwO1xuICAgIHRoaXMuYiA9IDA7XG4gICAgdGhpcy5hID0gMDtcbiAgICB0aGlzLm5leHQgPSBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpbWFnZTogcHJvY2Vzc0ltYWdlLFxuICAgIGNhbnZhc1JHQkE6IHByb2Nlc3NDYW52YXNSR0JBLFxuICAgIGNhbnZhc1JHQjogcHJvY2Vzc0NhbnZhc1JHQixcbiAgICBpbWFnZURhdGFSR0JBOiBwcm9jZXNzSW1hZ2VEYXRhUkdCQSxcbiAgICBpbWFnZURhdGFSR0I6IHByb2Nlc3NJbWFnZURhdGFSR0Jcbn07XG4iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5cbmNvbnN0IHByb3RvQ2hhcnQgPSB7XG4gICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgIG1hcmdpbjoge1xuICAgICAgbGVmdDogMTAsXG4gICAgICByaWdodDogMTAsXG4gICAgICB0b3A6IDEwLFxuICAgICAgYm90dG9tOiAxMCxcbiAgICB9LFxuICB9O1xuICBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYXJ0RmFjdG9yeShvcHRzLCBwcm90byA9IHByb3RvQ2hhcnQpIHtcblxuICBjb25zdCBjaGFydCA9IE9iamVjdC5hc3NpZ24oe30sIHByb3RvLCBvcHRzKTtcbiAgaWYob3B0cy5wYXJlbnRJZCkgY2hhcnQucGFyZW50ID0gZDMuc2VsZWN0KGAjJHtvcHRzLnBhcmVudElkfWApO1xuICBlbHNlIGQzLnNlbGVjdCgnYm9keScpO1xuXG4gIGNoYXJ0LnN2ZyA9IGNoYXJ0LnBhcmVudFxuICAgIC5hcHBlbmQoJ3N2ZycpLmxvd2VyKClcbiAgICAuYXR0cignaWQnLCBjaGFydC5pZCB8fCAnY2hhcnQnKVxuICAgIC5hdHRyKCd3aWR0aCcsIGNoYXJ0LndpZHRoIC0gY2hhcnQubWFyZ2luLnJpZ2h0KVxuICAgIC5hdHRyKCdoZWlnaHQnLCBjaGFydC5oZWlnaHQgLSBjaGFydC5tYXJnaW4uYm90dG9tKTtcblxuICBpZiAob3B0cy5zdHlsZUNsYXNzKSBjaGFydC5zdmcuYXR0cignY2xhc3MnLCBvcHRzLnN0eWxlQ2xhc3MpO1xuXG4gIGlmIChvcHRzLmRyYXdCYWNrZ3JvdW5kKSBjaGFydC5zdmcuYXBwZW5kKCdyZWN0JylcbiAgICAuYXR0cignaWQnLCAnYmFja2dyb3VuZCcpXG4gICAgLmF0dHIoJ3dpZHRoJywnMTAwJScpLmF0dHIoJ2hlaWdodCcsJzEwMCUnKVxuICAgIC5hdHRyKCdmaWxsJywgJyNmZmZmZmYnKTsgXG4gICAgLy8gLmF0dHIoJ2ZpbGwnLCAncmdiYSgyNTUsMCwwLC4yKScpO1xuXG4gIGNoYXJ0LmNvbnRhaW5lciA9IGNoYXJ0LnN2Zy5hcHBlbmQoJ2cnKVxuICAgIC5hdHRyKCdpZCcsICdjb250YWluZXInKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7Y2hhcnQubWFyZ2luLmxlZnR9LCAke2NoYXJ0Lm1hcmdpbi50b3B9KWApO1xuXG4gIHJldHVybiBjaGFydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpdENoYXJ0KGNoYXJ0LCBwYWRkaW5nKSB7XG4gIC8vIGNhbGN1bGF0ZSByZWFsIGRpbWVuc2lvbnMgb2YgYSBjaGFydCAoYXNzdW1lcyBjaGFydCBpcyBhIGctZWxlbWVudCB3cmFwcGVkIGluc2lkZSBhbiBzdmcpXG4gIGQzLnNlbGVjdChjaGFydC5ub2RlKCkucGFyZW50RWxlbWVudClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIGNoYXJ0Lm5vZGUoKS5nZXRCQm94KCkud2lkdGggKyBwYWRkaW5nLmxlZnQgKyBwYWRkaW5nLnJpZ2h0KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGNoYXJ0Lm5vZGUoKS5nZXRCQm94KCkuaGVpZ2h0ICsgcGFkZGluZy50b3AgKyBwYWRkaW5nLmJvdHRvbSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWFsRGVwdGgoZCkge1xuICAvLyBjYWxjdWxhdGVzIHRoZSByZWFsIGRlcHRoIG9mIGEgRk9STSBieSBzdWJ0cmFjdGluZyB1bm1hcmtlZCBhbmQgb3BlbiByZUVudHJ5IEZPUk1zXG4gIGNvbnN0IGdob3N0cyA9IGQuYW5jZXN0b3JzKClcbiAgICAgIC5maWx0ZXIoZSA9PiAoZS5kYXRhLnR5cGUgPT09ICdmb3JtJyAmJiBlLmRhdGEudW5tYXJrZWQgfHwgXG4gICAgICAgICAgICAgICAgZS5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JyAmJiBlLmRhdGEubGFzdE9wZW4pKS5sZW5ndGg7XG4gIHJldHVybiBkLmRlcHRoIC0gZ2hvc3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGV4dFN1YnNjcmlwdCh0ZXh0KSB7XG4gIC8vIHNlbGVjdGlvbiBtb2R1bGUgdG8gc3BsaXQgdGV4dCBpbnRvIHBhcnRzIGZvciBzdWJzY3JpcHRzIChlLmcuIFwieF9uXCIpXG4gIHJldHVybiAoc2VsZWN0aW9uKSA9PiB7XG4gICAgc2VsZWN0aW9uLmVhY2goZnVuY3Rpb24oZCkge1xuXG4gICAgICAgIGNvbnN0IHNwbGl0ID0gKHR5cGVvZih0ZXh0KGQpKSA9PT0gJ3N0cmluZycpID8gdGV4dChkKS5zcGxpdCgnXycpIDogJyc7XG5cbiAgICAgICAgLy8gaWYgKHNwbGl0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gICBzcGxpdC5mb3JFYWNoKChwYXJ0LGkpID0+IHtcblxuICAgICAgICAvLyAgICAgY29uc3QgZWxlbSA9IGQzLnNlbGVjdCh0aGlzKS5hcHBlbmQoJ3RzcGFuJylcbiAgICAgICAgLy8gICAgICAgLnRleHQoZCA9PiBwYXJ0KTtcblxuICAgICAgICAvLyAgICAgaWYgKGklMj09PTEpIGVsZW1cbiAgICAgICAgLy8gICAgICAgLmF0dHIoJ2R4JywgMSlcbiAgICAgICAgLy8gICAgICAgLmF0dHIoJ2R5JywgNilcbiAgICAgICAgLy8gICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsICcuOGVtJyk7XG4gICAgICAgIC8vICAgfSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKHNwbGl0Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5hcHBlbmQoJ3RzcGFuJylcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gc3BsaXRbMF0pO1xuXG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmFwcGVuZCgndHNwYW4nKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBzcGxpdFsxXSlcbiAgICAgICAgICAgIC5hdHRyKCdkeCcsIDEpXG4gICAgICAgICAgICAuYXR0cignZHknLCA2KVxuICAgICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnLjhlbScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgLnRleHQodGV4dChkKSk7XG4gICAgICAgIH1cblxuICAgIH0pXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0U2l6ZSh0ZXh0LCBmb250U2l6ZT0naW5oZXJpdCcsIGZvbnRGYW1pbHk9J2luaGVyaXQnLCBmb250U3R5bGU9J25vcm1hbCcpIHtcbiAgLyogU291cmNlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9odXl0ZC8zMjdlNDUzYzk1Y2EzZWRhZGIzMmQwYzg2N2UyNTYxYiBcbiAgQ3JlZGl0cyB0bzogSHV5IFRyLiAqL1xuICBpZiAoIWQzKSByZXR1cm47XG4gIHZhciBjb250YWluZXIgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ3N2ZycpO1xuICBjb250YWluZXIuYXBwZW5kKCd0ZXh0JylcbiAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGZvbnRTaXplKVxuICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIGZvbnRTdHlsZSlcbiAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgZm9udEZhbWlseSlcbiAgICAuYXR0cigneCcsJy05OTk5JykuYXR0cigneScsJy05OTk5JylcbiAgICAuY2FsbCh0ZXh0U3Vic2NyaXB0KCgpID0+IHRleHQpKTsgLy8gLnRleHQodGV4dCk7XG4gIHZhciBzaXplID0gY29udGFpbmVyLm5vZGUoKS5nZXRCQm94KCk7XG4gIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgcmV0dXJuIHsgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHQgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wYWNpdHkoY29sb3IsIGFscGhhKSB7XG4gIGNvbnN0IGNvbG9yQ29weSA9IGQzLmNvbG9yKGNvbG9yKTtcbmNvbG9yQ29weS5vcGFjaXR5ID0gYWxwaGE7XG5yZXR1cm4gY29sb3JDb3B5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlUmVtYWluZGVyKG51bSwgX2Rlbikge1xuICBsZXQgY291bnQgPSAwO1xuICBsZXQgc2lnbiA9IDE7XG4gIGxldCBkZW4gPSBNYXRoLnJvdW5kKF9kZW4pO1xuICBsZXQgY2FuZGlkYXRlID0gZGVuO1xuICB3aGlsZSAobnVtICUgZGVuID4gMC4zKSB7XG4gICAgICBjYW5kaWRhdGUgKz0gc2lnbiAqIDAuMDAxO1xuICAgICAgaWYgKG51bSVjYW5kaWRhdGUgPCBudW0lZGVuKSBkZW4gPSBjYW5kaWRhdGU7XG5cbiAgICAgIGlmKGNvdW50ID49IDUwMDApIHtcbiAgICAgICAgICBjYW5kaWRhdGUgPSBNYXRoLnJvdW5kKF9kZW4pO1xuICAgICAgICAgIHNpZ24gPSAtMTtcbiAgICAgIH1cbiAgICAgIGlmKGNvdW50ID49IDEwMDAwKSBicmVhaztcbiAgICAgIGNvdW50Kys7XG4gIH1cbiAgcmV0dXJuIGRlbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYWxjQ2lyY2xlRGFzaChyLCB1bml0LCBmcmFjdGlvbikge1xuICBjb25zdCBjaXJjID0gTWF0aC5QSSoyICogcjtcbiAgcmV0dXJuIHJlZHVjZVJlbWFpbmRlcihjaXJjLCB1bml0KSAqIGZyYWN0aW9uO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZURhc2hBcnJheShyLCB1bml0LCBmcmFjdGlvbnMpIHtcbiAgbGV0IHN0ciA9ICcnO1xuICBmb3IgKGxldCBpIGluIGZyYWN0aW9ucykge1xuICAgICAgc3RyID0gc3RyLmNvbmNhdChgJHsgY2FsY0NpcmNsZURhc2gociwgdW5pdCwgZnJhY3Rpb25zW2ldKSB9cHggYCk7XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZUxhYmVsKHRleHQsIGZvbnRTaXplPSdpbmhlcml0JywgZm9udEZhbWlseT0naW5oZXJpdCcsIGZvbnRTdHlsZT0nbm9ybWFsJykge1xuICAvLyBzZWxlY3Rpb24gbW9kdWxlIHRvIHNwbGl0IHRleHQgaW50byBwYXJ0cyBmb3Igc3Vic2NyaXB0cyAoZS5nLiBcInhfblwiKVxuICByZXR1cm4gKHNlbGVjdGlvbikgPT4ge1xuXG4gICAgICBzZWxlY3Rpb24uZWFjaChmdW5jdGlvbihkKSB7XG5cbiAgICAgICAgICBjb25zdCB0ZXh0U3ogPSB0ZXh0U2l6ZSh0ZXh0KGQpLCBmb250U2l6ZSwgZm9udEZhbWlseSk7XG4gICAgICAgICAgY29uc3QgbWFyZ2luID0gNTA7XG5cbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBmb250U2l6ZSlcbiAgICAgICAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgZm9udFN0eWxlKVxuICAgICAgICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgZm9udEZhbWlseSlcbiAgICAgICAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAgICAgICAucmFpc2UoKVxuICAgICAgICAgICAgICAudGV4dChkID0+IHRleHQoZCkpO1xuXG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmZpbHRlcihkID0+IGQucioyID49IHRleHRTei53aWR0aCArIG1hcmdpbikuc2VsZWN0KCd0ZXh0JylcbiAgICAgICAgICAgICAgLmNsYXNzZWQoJ2xhYmVsIGluc2lkZScsIHRydWUpXG4gICAgICAgICAgICAgIC5hdHRyKCd5JywgZCA9PiBkLnIgLSB0ZXh0U3ouaGVpZ2h0KjAuNSApXG4gICAgICAgICAgICAgIC5hdHRyKCdkb21pbmFudC1iYXNlbGluZScsJ2Jhc2VsaW5lJyk7XG5cbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykuZmlsdGVyKGQgPT4gZC5yKjIgPCB0ZXh0U3oud2lkdGggKyBtYXJnaW4pLnNlbGVjdCgndGV4dCcpXG4gICAgICAgICAgICAgIC5jbGFzc2VkKCdsYWJlbCBvdXRzaWRlJywgdHJ1ZSlcbiAgICAgICAgICAgICAgLmF0dHIoJ3knLCBkID0+IGQuciArIDQpXG4gICAgICAgICAgICAgIC5hdHRyKCdkb21pbmFudC1iYXNlbGluZScsJ2hhbmdpbmcnKTtcblxuICAgICAgfSk7XG4gIH07XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0ICogYXMgY2FudmcgZnJvbSAnY2FudmcnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGpRdWVyeSByZXBsYWNlbWVudHM6XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93QWxsKGVsZW1zKSB7XG4gICAgaWYodHlwZW9mKGVsZW1zKSA9PT0gJ3N0cmluZycpIGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtcyk7XG4gICAgZWxlbXMuZm9yRWFjaCggKGUsaSkgPT4ge1xuICAgICAgICBzaG93KGUpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNob3coZWxlbSkge1xuICAgIGlmKHR5cGVvZihlbGVtKSA9PT0gJ3N0cmluZycpIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgLy8gZWxlbS5jbGFzc0xpc3QuYWRkKCdpcy12aXNpYmxlJyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUFsbChlbGVtcykge1xuICAgIGlmKHR5cGVvZihlbGVtcykgPT09ICdzdHJpbmcnKSBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbXMpO1xuICAgIGVsZW1zLmZvckVhY2goIChlLGkpID0+IHtcbiAgICAgICAgaGlkZShlKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBoaWRlKGVsZW0pIHtcbiAgICBpZih0eXBlb2YoZWxlbSkgPT09ICdzdHJpbmcnKSBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuXHQvLyBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXZpc2libGUnKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVBbGwoZWxlbXMpIHtcbiAgICBpZih0eXBlb2YoZWxlbXMpID09PSAnc3RyaW5nJykgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1zKTtcbiAgICBlbGVtcy5mb3JFYWNoKCAoZSxpKSA9PiB7XG4gICAgICAgIHRvZ2dsZShlKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGUoZWxlbSkge1xuICAgIGlmKHR5cGVvZihlbGVtKSA9PT0gJ3N0cmluZycpIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuICAgIGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XG5cdC8vIGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtdmlzaWJsZScpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmlzaWJsZShlbGVtKSB7XG4gICAgaWYodHlwZW9mKGVsZW0pID09PSAnc3RyaW5nJykgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG4gICAgcmV0dXJuICggIWVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdkLW5vbmUnKSApO1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiBwYWQobnVtLCBzaXplKSB7XG4gICAgLyogU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjk5ODgyMlxuICAgIENyZWRpdHMgdG86IEluZmluaXRpZXNMb29wICovXG4gICAgdmFyIHMgPSBudW0rXCJcIjtcbiAgICB3aGlsZSAocy5sZW5ndGggPCBzaXplKSBzID0gXCIwXCIgKyBzO1xuICAgIHJldHVybiBzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVN2ZyhzdmdFbCwgbmFtZSkge1xuICAgIC8qIFNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ2NDAzNTg5XG4gICAgQ3JlZGl0cyB0bzogZGVmZ2hpMTk3NywgRGF2ZVRoZVNjaWVudGlzdCwgc2VueiAqL1xuICAgIHN2Z0VsLnNldEF0dHJpYnV0ZShcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIik7XG4gICAgdmFyIHN2Z0RhdGEgPSBzdmdFbC5vdXRlckhUTUw7XG4gICAgdmFyIHByZWZhY2UgPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIHN0YW5kYWxvbmU9XCJub1wiPz5cXHJcXG4nO1xuICAgIHZhciBzdmdCbG9iID0gbmV3IEJsb2IoW3ByZWZhY2UsIHN2Z0RhdGFdLCB7dHlwZTpcImltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOFwifSk7XG4gICAgdmFyIHN2Z1VybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoc3ZnQmxvYik7XG4gICAgdmFyIGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGRvd25sb2FkTGluay5ocmVmID0gc3ZnVXJsO1xuICAgIGRvd25sb2FkTGluay5kb3dubG9hZCA9IG5hbWU7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb3dubG9hZExpbmspO1xuICAgIGRvd25sb2FkTGluay5jbGljaygpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG93bmxvYWRMaW5rKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzYXZlSW1nKHN2ZywgbmFtZSwgc2NhbGU9MSkgeyAgICBcbiAgICAvKiBVc2luZyBjYW52ZyBsaWIuIGh0dHBzOi8vZ2l0aHViLmNvbS9jYW52Zy9jYW52ZyBhbmQgcGFydHMgb2YgdGhlIGFwcHJvYWNoIGZvciBzYXZlU3ZnLlxuICAgIFRoYW5rcyB0byBqYmVhcmQ0IGluOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk3NjAzNC8xMjA0MDQ3IGZvciB0aGUgc3VnZ2VzdGlvbiAqL1xuXG4gICAgY29uc3QgdyA9IHN2Zy5nZXRCQm94KCkud2lkdGg7XG4gICAgY29uc3QgaCA9IHN2Zy5nZXRCQm94KCkuaGVpZ2h0O1xuXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdpZCcsJ2RyYXdpbmdBcmVhJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgIGNhbnZhcy53aWR0aCA9IHcgKiBzY2FsZTtcbiAgICBjYW52YXMuaGVpZ2h0ID0gaCAqIHNjYWxlO1xuXG4gICAgY2FudmcoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RyYXdpbmdBcmVhJyksIHN2Zy5vdXRlckhUTUwsIHsgaWdub3JlRGltZW5zaW9uczp0cnVlLCBpZ25vcmVNb3VzZTogdHJ1ZSwgaWdub3JlQW5pbWF0aW9uOiB0cnVlLFxuICAgIHNjYWxlV2lkdGg6IHcgKiBzY2FsZSxcbiAgICBzY2FsZUhlaWdodDogaCAqIHNjYWxlIH0pO1xuXG4gICAgLy8gY29uc29sZS5sb2coIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcmF3aW5nQXJlYScpICk7XG5cbiAgICBjb25zdCBpbWdVcmwgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xuXG4gICAgdmFyIGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGRvd25sb2FkTGluay5ocmVmID0gaW1nVXJsO1xuICAgIGRvd25sb2FkTGluay5kb3dubG9hZCA9IG5hbWU7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb3dubG9hZExpbmspO1xuICAgIGRvd25sb2FkTGluay5jbGljaygpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG93bmxvYWRMaW5rKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNhbnZhcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycikge1xuICAgIC8qIFNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE1MDMwMTE3IFxuICAgIENyZWRpdHMgdG86IE5vYWggRnJlaXRhcyAqL1xuICByZXR1cm4gYXJyLnJlZHVjZShmdW5jdGlvbiAoZmxhdCwgdG9GbGF0dGVuKSB7XG4gICAgcmV0dXJuIGZsYXQuY29uY2F0KEFycmF5LmlzQXJyYXkodG9GbGF0dGVuKSA/IGZsYXR0ZW4odG9GbGF0dGVuKSA6IHRvRmxhdHRlbik7XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluY2x1ZGUoYXJyLG9iaikge1xuICAgIC8qICBTb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNDM4NjNcbiAgICBDcmVkaXRzIHRvOiBWaW5rbyBWcnNhbG92aWMgKi9cbiAgICByZXR1cm4gKGFyci5pbmRleE9mKG9iaikgIT0gLTEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhdmVyc2UobyxmdW5jKSB7XG4gICAgLyogIFNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzIyNjY4L3RyYXZlcnNlLWFsbC10aGUtbm9kZXMtb2YtYS1qc29uLW9iamVjdC10cmVlLXdpdGgtamF2YXNjcmlwdCBcbiAgICBDcmVkaXRzIHRvOiBUaGVIaXBwbyAqL1xuICAgIGZvciAodmFyIGkgaW4gbykge1xuICAgICAgICBmdW5jLmFwcGx5KG51bGwsW2ksb1tpXV0pOyAgLy8gbnVsbCBvciB0aGlzP1xuICAgICAgICBpZiAob1tpXSAhPT0gbnVsbCAmJiB0eXBlb2Yob1tpXSk9PVwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIC8vZ29pbmcgb25lIHN0ZXAgZG93biBpbiB0aGUgb2JqZWN0IHRyZWUhIVxuICAgICAgICAgICAgdHJhdmVyc2Uob1tpXSxmdW5jKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblN0cmluZy5wcm90b3R5cGUucmVwbGFjZUFsbCA9IGZ1bmN0aW9uKGZpbmQsIHJlcGxhY2UsIGVzY2FwZU1ldGEpIHtcbiAgICAvKiAgTW9kaWZpZWQgZnJvbTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTE0NDc4My9ob3ctdG8tcmVwbGFjZS1hbGwtb2NjdXJyZW5jZXMtb2YtYS1zdHJpbmctaW4tamF2YXNjcmlwdCBcbiAgICBDcmVkaXRzIHRvOiBTZWFuIEJyaWdodCAqL1xuICAgIGlmKGVzY2FwZU1ldGEpIGZpbmQgPSBlc2NhcGVSZWdFeHAoZmluZCk7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShuZXcgUmVnRXhwKGZpbmQsICdnJyksIHJlcGxhY2UpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8XFxbXFxdXFwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuU3RyaW5nLnByb3RvdHlwZS5hZGRCZWZvcmU9ZnVuY3Rpb24oaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RyKDAsIGluZGV4KSArIHJlcGxhY2VtZW50KyB0aGlzLnN1YnN0cihpbmRleCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXAodmFsdWUsIHN0YXJ0MSwgc3RvcDEsIHN0YXJ0Miwgc3RvcDIpIHtcbiAgICAvLyBQcm9jZXNzaW5nLWxpa2UgbWFwIGZ1bmN0aW9uXG4gICAgcmV0dXJuIHN0YXJ0MiArIChzdG9wMiAtIHN0YXJ0MikgKiAoKHZhbHVlIC0gc3RhcnQxKSAvIChzdG9wMSAtIHN0YXJ0MSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlNb3ZlSXRlbShhcnIsIGZyb20sIHRvKSB7XG4gIGFyci5zcGxpY2UodG8sIDAsIGFyci5zcGxpY2UoZnJvbSwgMSlbMF0pO1xufVxuXG5TdHJpbmcucHJvdG90eXBlLnJlcGxhY2VBdD1mdW5jdGlvbihpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdHIoMCwgaW5kZXgpICsgcmVwbGFjZW1lbnQrIHRoaXMuc3Vic3RyKGluZGV4ICsgcmVwbGFjZW1lbnQubGVuZ3RoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWVzdGFtcCgpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcblxuICAgIHJldHVybiAoJydcbiAgICArIGRhdGUuZ2V0VVRDRnVsbFllYXIoKSkuc3Vic3RyKDIpIFxuICAgICsgKHBhZCgoZGF0ZS5nZXRVVENNb250aCgpKzEpLDIpKSBcbiAgICArIChwYWQoZGF0ZS5nZXRVVENEYXRlKCksMikpICsgJy0nXG4gICAgKyAocGFkKChkYXRlLmdldEhvdXJzKCkpLDIpKVxuICAgICsgKHBhZCgoZGF0ZS5nZXRNaW51dGVzKCkpLDIpKVxuICAgICsgKHBhZCgoZGF0ZS5nZXRTZWNvbmRzKCkpLDIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlU1ZHKHN2ZywgY29udGFpbmVyLCByYXRpbykge1xuICAgIGNvbnN0IHByZWZpeGVzID0gWyctbXMtdHJhbnNmb3JtJywnLXdlYmtpdC10cmFuc2Zvcm0nLCctbW96LXRyYW5zZm9ybScsJy1vLXRyYW5zZm9ybScsJ3RyYW5zZm9ybSddO1xuICAgIHByZWZpeGVzLmZvckVhY2gocHJlZml4ID0+IHtcbiAgICAgICAgLy8gc3ZnLnNldEF0dHJpYnV0ZShwcmVmaXgsIGBzY2FsZSgke3JhdGlvfSkgdHJhbnNsYXRlKDAsMClgKTtcbiAgICAgICAgc3ZnLnN0eWxlW3ByZWZpeF0gPSBgc2NhbGUoJHtyYXRpb30pIHRyYW5zbGF0ZSgwLDApYDtcbiAgICB9KTtcbiAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSBwYXJzZUludChzdmcuZ2V0QkJveCgpLndpZHRoICogcmF0aW8pICsgJ3B4JztcbiAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gcGFyc2VJbnQoc3ZnLmdldEJCb3goKS5oZWlnaHQgKiByYXRpbykgKyAncHgnO1xuICAgIC8vIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHBhcnNlSW50KHN2Zy5jbGllbnRXaWR0aCpyYXRpbykgKyAncHgnO1xuICAgIC8vIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBwYXJzZUludChzdmcuY2xpZW50SGVpZ2h0KnJhdGlvKSArICdweCc7XG5cbn1cblxuLyogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgQWRkaXRpb25zIDAxLzIwMjAgZnJvbTpcbiAgICBodHRwczovL29ic2VydmFibGVocS5jb20vQGZvcm1zYW5kbGluZXMvanMtdG9vbGJveFxuKi9cblxuZXhwb3J0IGNvbnN0IHBlcm11dGVBcnJheSA9IGlucHV0QXJyYXkgPT4gaW5wdXRBcnJheS5yZWR1Y2UoZnVuY3Rpb24gcGVybXV0ZShyZXMsIGl0ZW0sIGtleSwgYXJyKSB7XG4gIC8qIFBlcm11dGF0aW9uIGFsZ29yaXRobSBmb3IgYXJyYXlzIG9mIGFyYml0cmFyeSBsZW5ndGhcbiAgICAgKGNyZWRpdHMgJiB0aGFua3MgdG8gdXNlciBtb25rZXk6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjA2MzQ0MCkgKi9cbiAgICByZXR1cm4gcmVzLmNvbmNhdChhcnIubGVuZ3RoID4gMSAmJiBhcnIuc2xpY2UoMCwga2V5KVxuICAgICAgLmNvbmNhdChhcnIuc2xpY2Uoa2V5ICsgMSkpXG4gICAgICAucmVkdWNlKHBlcm11dGUsIFtdKVxuICAgICAgLm1hcChmdW5jdGlvbihwZXJtKSB7IHJldHVybiBbaXRlbV0uY29uY2F0KHBlcm0pOyB9KSB8fCBbW2l0ZW1dXSk7XG59LCBbXSk7XG5cbmV4cG9ydCBjb25zdCB0cnVuY2F0ZVN0ciA9IChzdHIsbGltaXQsYXBwZW5kaXg9JycpID0+IHN0ci5sZW5ndGggPiBsaW1pdCA/IChzdHIuc3Vic3RyKDAsbGltaXQpICsgYXBwZW5kaXgpIDogc3RyO1xuXG5leHBvcnQgY29uc3QgcmV2ZXJzZU1hcHBpbmcgPSAobyxiaWplY3RpdmU9ZmFsc2UpID0+IE9iamVjdC5rZXlzKG8pLnJlZHVjZSgociwgaykgPT4gT2JqZWN0LmFzc2lnbihyLCB7IFtvW2tdXTogKGJpamVjdGl2ZSA/IGsgOiAocltvW2tdXSB8fCBbXSkuY29uY2F0KGspKSB9KSwge30pOyAvLyBtb2RpZmllZCBmcm9tIGFuc3dlciBieSBOaW5hIFNjaG9sejogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ1NzI4ODUwXG5cbi8qICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEFkZGl0aW9ucyAwMS8yMDIwIGZyb206XG4gICAgaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0Bmb3Jtc2FuZGxpbmVzL2Zvcm1mb3JtLXRvb2xib3ggXG4qL1xuXG5leHBvcnQgY29uc3QgVkFSQ09ERSA9ICh7J2EnOifhtKwnLCAnYic6J+G0ricsICdjJzon4bWTJywgJ2QnOifhtLAnLCAnZSc6J+G0sScsICdmJzon4bWOJywgJ2cnOifhtLMnLCAnaCc6J+G0tCcsICdpJzon4bS1JywgJ2onOifhtLYnLCAnayc6J+G0tycsICdsJzon4bS4JywgJ20nOifhtLknLCAnbic6J+G0uicsICdvJzon4bS8JywgJ3AnOifhtL4nLCAncSc6J+G0vScsICdyJzon4bS/JywgJ3MnOifhtZUnLCAndCc6J+G1gCcsICd1Jzon4bWBJywgJ3YnOifhtZsnLCAndyc6J+G1gicsICd4Jzon4bWhJywgJ3knOifhtZ4nLCAneic6J+G1nCcsICdhbHQnOifhtb0nLCAnMnInOifhtbMnLCAnMnIrMSc6J+G1sid9KTtcblxuZXhwb3J0IGNvbnN0IFZBUkNPREVfUkVWID0gcmV2ZXJzZU1hcHBpbmcoVkFSQ09ERSx0cnVlKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZDYWxjIHtcbiAgICAvKlxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAnY2FsYycgbW9kdWxlIGZvciBmb3JtZm9ybSAoYykgMjAxOCBQZXRlciBIb2ZtYW5uXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICovXG4gICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9O1xuXG4gICAgc3RhdGljIHJlbF9sb2dpYyhmeCwgZnkpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBjb21tdXRhdGl2ZSByZWxhdGlvbjogeCB5ICovXG4gICAgICAgIGlmICggZnggPiAzIHx8IGZ4IDwgMCB8fCBmeSA+IDMgfHwgZnkgPCAwICkgcmV0dXJuIC05ODtcbiAgICAgICAgZWxzZSBpZiAoIGZ4ID09PSAwIHx8IGZ5ID09PSAxICkgeyBcbiAgICAgICAgICAgIHJldHVybiBmeTsgLy8gQzMgL1RoZW9yZW0gMlxuICAgICAgICB9IFxuICAgICAgICBlbHNlIGlmICggZnkgPT09IDAgfHwgZnggPT09IDEgKSB7IFxuICAgICAgICAgICAgcmV0dXJuIGZ4OyAvLyBDMyAvVGhlb3JlbSAyXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIGZ4ID09PSBmeSApIHsgXG4gICAgICAgICAgICByZXR1cm4gZng7IC8vIEM1IC9UaGVvcmVtIDVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggKGZ4ID09PSAyICYmIGZ5ID09PSAzKSB8fCAoZnggPT09IDMgJiYgZnkgPT09IDIpICkgeyBcbiAgICAgICAgICAgIHJldHVybiAxOyAvLyBDMiAvVGhlb3JlbSAxMyArIEMzIC9UaGVvcmVtIDJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTk5OyAvLyBlcnJvciBjb2RlXG4gICAgfTtcbiAgICBzdGF0aWMgcmVsKC4uLmZWYWxzKSB7IC8vIHZlcmlmaWVkXG4gICAgICAgIC8qIFNob3J0Y3V0IGZvciByZWxhdGlvbiB3aXRoIG4gdmFyaWFibGVzOiB4XzEgLi4uIHhfbiAqL1xuICAgICAgICBpZiAoZlZhbHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdmFyIHZhbCA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIGZWYWxzKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gdGhpcy5yZWxfbG9naWMoIHZhbCxmVmFsc1tpXSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTk3OyAvLyBlcnJvciBjb2RlXG4gICAgfTtcblxuICAgIHN0YXRpYyBpbnZfbG9naWMoZngpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBpbnZlcnNpb24vbmVnYXRpb246ICh4KSAqL1xuICAgICAgICBzd2l0Y2ggKGZ4KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIDM7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtOTk7IC8vIGVycm9yIGNvZGVcbiAgICB9O1xuICAgIHN0YXRpYyBpbnYoZngsIG4pIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogU2hvcnRjdXQgZm9yIG4gaW52ZXJzaW9ucy9uZWdhdGlvbnM6ICh4KSAqL1xuICAgICAgICBpZiAobiA+IDApIHtcbiAgICAgICAgICAgIHZhciB2YWwgPSBmeDtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgPSB0aGlzLmludl9sb2dpYyh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiB0aGlzLmludl9sb2dpYyhmeCk7XG4gICAgICAgIHJldHVybiAtOTc7IC8vIGVycm9yIGNvZGVcbiAgICB9O1xuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgUkUtRU5UUlkgRk9STSBDQUxDVUxBVElPTlxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljIHVGb3JtMihmQSwgZkIsIGFsdEludGVycHI9ZmFsc2UpIHsgLy8gY2FsY3VsYXRpb24gdmVyaWZpZWQgKGJvdGggaW50ZXJwci4pXG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkodW5kZWZpbmVkLCBmYWxzZSwgYWx0SW50ZXJwciwgZkEsIGZCKTtcbiAgICB9O1xuICAgIHN0YXRpYyBpRm9ybTIoZkEsIGZCLCBhbHRJbnRlcnByPWZhbHNlKSB7IC8vIGNhbGN1bGF0aW9uIHZlcmlmaWVkIChib3RoIGludGVycHIuKVxuICAgICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KHVuZGVmaW5lZCwgdHJ1ZSwgYWx0SW50ZXJwciwgZkEsIGZCKTtcbiAgICB9O1xuICAgIHN0YXRpYyB1Rm9ybTMobGFzdE9wZW4sIGZBLCBmQiwgZkMsIGFsdEludGVycHI9ZmFsc2UpIHsgLy8gY2FsY3VsYXRpb24gdmVyaWZpZWQgY2xvc2VkICYgb3BlbiAoYm90aCBpbnRlcnByLilcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeSh0cnVlLCBsYXN0T3BlbiwgYWx0SW50ZXJwciwgZkEsIGZCLCBmQyk7XG4gICAgfTtcbiAgICBzdGF0aWMgaUZvcm0zKGxhc3RPcGVuLCBmQSwgZkIsIGZDLCBhbHRJbnRlcnByPWZhbHNlKSB7IC8vIGNhbGN1bGF0aW9uIHZlcmlmaWVkIGNsb3NlZCAmIG9wZW4gKGJvdGggaW50ZXJwci4pXG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkoZmFsc2UsIGxhc3RPcGVuLCBhbHRJbnRlcnByLCBmQSwgZkIsIGZDKTtcbiAgICB9O1xuICAgIHN0YXRpYyB1Rm9ybTQoZkEsIGZCLCBmQywgZkQsIGFsdEludGVycHI9ZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeSh1bmRlZmluZWQsIGZhbHNlLCBhbHRJbnRlcnByLCBmQSwgZkIsIGZDLCBmRCk7XG4gICAgfTtcbiAgICBzdGF0aWMgaUZvcm00KGZBLCBmQiwgZkMsIGZELCBhbHRJbnRlcnByPWZhbHNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkodW5kZWZpbmVkLCB0cnVlLCBhbHRJbnRlcnByLCBmQSwgZkIsIGZDLCBmRCk7XG4gICAgfTtcbiAgICBzdGF0aWMgdUZvcm01KGxhc3RPcGVuLCBmQSwgZkIsIGZDLCBmRCwgZkUsIGFsdEludGVycHI9ZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeSh0cnVlLCBsYXN0T3BlbiwgYWx0SW50ZXJwciwgZkEsIGZCLCBmQywgZkQsIGZFKTtcbiAgICB9O1xuICAgIHN0YXRpYyBpRm9ybTUobGFzdE9wZW4sIGZBLCBmQiwgZkMsIGZELCBmRSwgYWx0SW50ZXJwcj1mYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KGZhbHNlLCBsYXN0T3BlbiwgYWx0SW50ZXJwciwgZkEsIGZCLCBmQywgZkQsIGZFKTtcbiAgICB9O1xuXG4gICAgLy8gc3RhdGljIHJlRW50cnkoLi4uIHZhcnMpIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMucmVFbnRyeShmYWxzZSwgZmFsc2UsIHZhcnMpO1xuICAgIC8vIH1cbiAgICAvLyBzdGF0aWMgcmVFbnRyeShyZUV2ZW4sIC4uLiB2YXJzKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLnJlRW50cnkocmVFdmVuLCBmYWxzZSwgdmFycyk7XG4gICAgLy8gfVxuXG4gICAgc3RhdGljIHJlRW50cnkocmVFdmVuLCBsYXN0T3BlbiwgYWx0SW50ZXJwciwgLi4uZlZhbHMpIHtcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBkaWZmZXJlbnQgc2VsZi1lcXVpdmFsZW50IHJlLWVudHJ5IEZPUk1zXG4gICAgICAgICBbQXJndW1lbnRzXSByZUV2ZW46IGV2ZW4gcmUtZW50cnktbnVtYmVyPyB8IGxhc3RPcGVuOiBsYXN0IHZhcmlhYmxlIG5vdCBjcm9zc2VkPyB8IGZWYWxzOiB2YXJpYWJsZXMgKDAvMS8yLzMpXG5cbiAgICAgICAgIE5vdGU6IGNhbGN1bGF0aW9uIG1hbnVhbGx5IHZlcmlmaWVkIGZvcuKApiBcbiAgICAgICAgIC0gKHVGT1JNIGExLCByZXMyKSDGkj0oKMaSeCl5KVxuICAgICAgICAgLSAoaUZPUk0gYTIsIHJlczIpIMaSKMaSKT0oYTF4KXlcbiAgICAgICAgIC0gKGlGT1JNIGIxLCByZXMzKSBbMnxyfCsxXSDGkijGkik9KCgoxpJ4KXkpeikgxpI9KCgoKCgoxpJ4KXkpeil4KXkpeilcbiAgICAgICAgIC0gKGlGT1JNIGIyLCByZXMzKSBbMnxyfCsxXSDGkijGkik9KChiMXgpeSl6XG4gICAgICAgICAtICh1Rk9STSBjMSwgcmVzMykgWzJ8cnxdIMaSPSgoKCgoKMaSeCl5KXopeCl5KXopXG4gICAgICAgICAtICh1Rk9STSBjMiwgcmVzMykgWzJ8cnxdIMaSKMaSKT0oKGMxeCl5KXpcbiAgICAgICAgIFNob3VsZCB3b3JrIHdpdGggcmVzb2x1dGlvbnMgb2YgNCwgNSwg4oCmIGJ1dCBuZWVkcyB2ZXJpZmljYXRpb24uXG5cbiAgICAgICAgIE15IGJhc2ljIG9ic2VydmF0aW9ucyBhYm91dCBzZWxmLWVxdWl2YWxlbnQgcmUtZW50cnkgRk9STXM6XG4gICAgICAgICAtIEV2ZXJ5IHJlLWVudHJ5IEZPUk0gbmVlZHMgdG8gaGF2ZSBhbiBldmVuIG51bWJlciBvZiBjcm9zc2VzIHRvIGJlIHNlbGYtZXF1aXZhbGVudCAodUZPUk0pOiDGkiA9ICgoxpIxKTIpIC5cbiAgICAgICAgICAgU28gd2l0aCB1bmV2ZW4gcmVzb2x1dGlvbnMsIHdlIGFsd2F5cyBuZWVkIHRvIGhhdmUgYW4gZXZlbiByZS1lbnRyeSBudW1iZXI6IMaSID0gKCgoKCgoxpIxKTIpMykxKTIpMykgLlxuICAgICAgICAgLSBUbyBiZSBhYmxlIHRvIGFsc28gaGF2ZSB1bmV2ZW4gcmUtZW50cnkgbnVtYmVycywgZWl0aGVyIHRoZSByZXNvbHV0aW9uIG5lZWRzIHRvIGJlIGV2ZW5cbiAgICAgICAgICAgb3Igd2UgaGF2ZSB0byBlbWJlZCB0aGUgcmUtZW50cnkgRk9STSBpbnRvIGEgbm9ybWFsIEZPUk0gdGhhdCBpcyBvbmUgcmUtZW50cnkgb2YgdGhhdCBGT1JNOlxuICAgICAgICAgICDGkijGkikgPSAoKCjGkjEpMikzKSA8LT4gKCgoIMaSID0gKCgoKCgoxpIxKTIpMykxKTIpMykgMSkyKTMpIC5cbiAgICAgICAgICAgVGhlc2UgY29tcG9zaXRpb25hbCByZS1lbnRyeSBGT1JNcyBhcmUgaUZPUk1zLCBzaW5jZSB0aGV5IHJlc29sdmUgdG86ICggxpIgPSAoKMaSKSkgKSAuXG4gICAgICAgICAtIElmIHRoZSBvdXRtb3N0IGNyb3NzIG9mIHRoZSBGT1JNIHNob3VsZCBiZSBsZWZ0IG91dCAob3BlbiBGT1JNcyksIHRoaXMgY2FuIG9ubHkgYmUgZG9uZSBpZiB3ZSBlbWJlZFxuICAgICAgICAgICBhIGNvcnJlc3BvbmRpbmcgY2xvc2VkIEZPUk0gb2YgaXRzZWxmIHRoYXQgZWl0aGVyIGlzIG9yIGVtYmVkcyBpdHMgcmUtZW50cnkgRk9STSAoY2FzZXMgZGVzY3JpYmVkIGFib3ZlKS5cbiAgICAgICAgICAgSSBiZWxpZXZlIHRoZSBvdXRtb3N0IChvcGVuKSBGT1JNIGlzIG5vdCBiZWluZyBjb3VudGVkIGFzIGEgcmUtZW50cnkgYXQgYWxsLCBzaW5jZSBpdCdzIG1pc3NpbmcgYSBjcm9zcy5cblxuICAgICAgICAgVGhpcyBhbGdvcml0aG0gaXMgYmFzZWQgb24gdGhlIGZvbGxvd2luZyBydWxlcy9wYXR0ZXJucy9vYnNlcnZhdGlvbnMgZGVyaXZlZCBmcm9tIFwidUZPUk0gaUZPUk1cIjpcbiAgICAgICAgIFsxXSBJZiAxIGlzIHNvbWV3aGVyZSBpbiB0aGUgRk9STSwgaXQgd2lsbCBkb21pbmF0ZSBhbGwgdmFsdWVzIGluIHNwYWNlcyBkZWVwZXIgdGhhbiBtLFxuICAgICAgICAgICAgIHNvIHRoZSByZS1lbnRyeSBpcyBvYnNvbGV0ZSBhbmQgd2UgY2FuIHN0YXJ0IGNhbGN1bGF0ZSBmcm9tIHRoaXMgc3BhY2UuIFxuICAgICAgICAgWzJdIElmIHRoZXJlIGFyZSAzLzIgb3IgMi8zIHBhaXJzIGluIHRoZSBGT1JNLCB0aGUgZmlyc3QgdGVybSBjYW4gYmUgdHVybmVkIGludG8gMSwgc2luY2VcbiAgICAgICAgICAgICB0aHJvdWdoIEMyIHRoZSBzZWNvbmQgdGVybSBjYW4gYWx3YXlzIGJlIGdlbmVyYXRlZCBpbnRvIGl0cyBzcGFjZSwgd2hlcmUgMjMgPSAxLlxuICAgICAgICAgICAgIFRoZW4gd2UgY2FuIHByb2NlZWQgYXMgaW4gKDEpLlxuICAgICAgICAgWzNdIElmIGFsbCB2YXJpYWJsZXMgYXJlIDAsIHdlIHdpbGwgaGF2ZSBlaXRoZXIgYSB1Rk9STSBvciBpRk9STSwgaGVuY2UgdGhlIHZhbHVlIG9mIHRoZVxuICAgICAgICAgICAgIEZPUk0gd2lsbCBiZSBlaXRoZXIgMiBvciAzLCBkZXBlbmRpbmcgb24gdGhlIGZvbGxvd2luZyBjYXNlczpcbiAgICAgICAgICAgICAtIDI6IGNsb3NlZCwgICAgICByZXNvbHV0aW9uIGV2ZW4sIHJlLWVudHJ5LW51bWJlciBldmVuL29kZCAoYTEpXG4gICAgICAgICAgICAgLSAyOiBjbG9zZWQvb3BlbiwgcmVzb2x1dGlvbiBvZGQsICByZS1lbnRyeS1udW1iZXIgZXZlbiAgICAgKGMxLCBjMilcbiAgICAgICAgICAgICAtIDM6IG9wZW4sICAgICAgICByZXNvbHV0aW9uIGV2ZW4sIHJlLWVudHJ5LW51bWJlciBldmVuL29kZCAoYTIpXG4gICAgICAgICAgICAgLSAzOiBjbG9zZWQvb3BlbiwgcmVzb2x1dGlvbiBvZGQsICByZS1lbnRyeS1udW1iZXIgb2RkICAgICAgKGIxLCBiMilcbiAgICAgICAgIFNpbmNlIFsxXVsyXVszXSBlbGltaW5hdGUgYWxsIG90aGVyIGNhc2VzLCBhbGwgdmFyaWFibGVzIGFyZSBub3cgZWl0aGVyIDIgb3IgMyAoYW5kIG1heWJlIDBzKSxcbiAgICAgICAgIHNvIHVzaW5nIEMyIGFzIGRlc2NyaWJlZCBhYm92ZSwgb25seSB0aGUgbGFzdCBvY2Nhc2lvbiBvZiB0aGVzZSB2YXJpYWJsZXMgbmVlZCB0byBiZSBjb25zaWRlcmVkOlxuICAgICAgICAgWzRdIElmIHdlIHVzZSB1Rk9STSBpRk9STSBpbnRlcnByZXRhdGlvbiAyIChwLjE2NykgcmVjdXJzaXZlIGlkZW50aXR5ICggbW4gPC0+ICgoxpIpKT3GkiApLCBDMiBhbmQgQzFcbiAgICAgICAgICAgICDGkiBjYW4gYmUgc2VwYXJhdGVkIGZyb20gMi8zIGlmIHRoZXJlIGlzIGFuIGV2ZW4gbnVtYmVyIG9mIGNyb3NzZXMgKG9yIG5vbmUpIGFmdGVyIHRoZSB2YXJpYWJsZS5cbiAgICAgICAgICAgICBUaGVuLCBkZXBlbmRpbmcgb24gdGhlIEZPUk0sIHdlIGhhdmUgZWl0aGVyOlxuICAgICAgICAgICAgIGlGT1JNOiAoxpI9KCjGkikpKSAyLzMgPC0+ICgyKSAyLzMgIG9yXG4gICAgICAgICAgICAgdUZPUk06ICDGkj0oKMaSKSkgMi8zICA8LT4gIDIgMi8zXG4gICAgICAgICBbNV0gSWYgWzRdIGRvZXMgbm90IGFwcGx5IG9yIHdlIGRlY2lkZSBmb3IgdUZPUk0gaUZPUk0gaW50ZXJwcmV0YXRpb24gMSAocC4xNjcpOiByZWN1cnNpb24gaW5zdHJ1Y3Rpb24gXG4gICAgICAgICAgICAgKCBtbiAtPiDGkj0oKMaSKSkgKSwgd2Ugd2lsbCBoYXZlIGVpdGhlciB2YXJpYWJsZXMgb2YgMiBvciAzIHdoaWNoIHdlIGNhbm5vdCByZWxhdGUgdG8gxpIsIHNpbmNlXG4gICAgICAgICAgICAgdGhleSBuZWVkIG5vdCBiZSB0aGUgc2FtZSB1bmRldGVybWluZWQgdmFsdWUuIFVzaW5nIGNhc2UgZGlzdGluY3Rpb24sIHdlIGludGVycHJldCB0aGVcbiAgICAgICAgICAgICBsYXN0IG9jY2FzaW9uIG9mIDIgb3IgMyBhcyAwIGFuZCBhcyAxLCBjYWxjdWxhdGUgZXZlcnl0aGluZyB3aXRoIMaSPTIgYW5kIHJlbGF0ZSB0aGUgcmVzdWx0cyBcbiAgICAgICAgICAgICB1c2luZyBjb250cmF2YWxlbmNlOiAoKHgpeSkoKHkpeCkgd2hpY2ggeWllbGRzIHRoZSBmaW5hbCByZXN1bHQuXG4gICAgICAgICovXG4gICAgICAgIC8vIGNoZWNrIGlmIGFyZ3VtZW50cyBhcmUgYWN0dWFsbHkgZGVmaW5lZFxuICAgICAgICBpZiAocmVFdmVuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlRXZlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0T3BlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsYXN0T3BlbiA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc0V2ZW4gPSAoZlZhbHMubGVuZ3RoJTIgPT0gMCk7IC8vIGV2ZW4gcmVzb2x1dGlvbj9cbiAgICAgICAgdmFyIHplcm9zID0gMDsgLy8gemVybyBjb3VudGVyXG4gICAgICAgIHZhciBmaXJzdFVuZGVmID0gLTE7IC8vIGNhdGNoZXMgZmlyc3QgbW4vKG1uKVxuXG4gICAgICAgIC8vIFszXSBkZXRlcm1pbmUgaWYgdUZPUk0gb3IgaUZPUk1cbiAgICAgICAgdmFyIHVGT1JNID0gZmFsc2U7XG4gICAgICAgIHZhciBpRk9STSA9IGZhbHNlO1xuICAgICAgICBpZiAocmVzRXZlbikge1xuICAgICAgICAgICAgaWYgKGxhc3RPcGVuKSBpRk9STSA9IHRydWU7XG4gICAgICAgICAgICBlbHNlIHVGT1JNID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChyZUV2ZW4pIHVGT1JNID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsc2UgaUZPUk0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgMS9tIHNvbWV3aGVyZSBpbiB4XzEg4oCmIHhfblxuICAgICAgICB2YXIgY2FsY2Zyb20gPSAtMTtcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8ZlZhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBmeCA9IGZWYWxzW2ldOyBcblxuICAgICAgICAgICAgaWYgKGZ4ID09IDEpIHtcbiAgICAgICAgICAgICAgICBjYWxjZnJvbSA9IGk7IC8vIFsxXSBpZiBtIGlzIHNvbWV3aGVyZSwgc2V0IGNhbGN1bGF0aW9uIHN0YXJ0IGZyb20gdGhlcmVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZ4ID09IDApIHplcm9zKys7IC8vIFszXSBrZWVwIHRyYWNrIG9mIGhvdyBtYW55IHplcm9zIHRoZXJlIGFyZVxuICAgICAgICAgICAgZWxzZSBpZiAoZnggPT0gMiB8fCBmeCA9PSAzKSB7IC8vIFsyXVxuICAgICAgICAgICAgICAgIGlmKGZpcnN0VW5kZWYgPT0gLTEpIGZpcnN0VW5kZWYgPSBpOyAvLyBpZiB0aGVyZSBpcyBhIGZpcnN0IDIvdSBvciAzL2ksIHJlbWVtYmVyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihmeCAhPSBmVmFsc1tmaXJzdFVuZGVmXSkge1xuICAgICAgICAgICAgICAgICAgICBjYWxjZnJvbSA9IGZpcnN0VW5kZWY7IC8vIGlmIDMvMiBvciAyLzMgcGFpcnMsIHNldCBjYWxjdWxhdGlvbiBmb3JtIGZpcnN0IHVuZGVmLiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICBpZiAoemVyb3MgPT0gZlZhbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBbM10gaW4gY2FzZSBhbGwgdmFyaWFibGVzIGFyZSBuLCBqdXN0IHJldHVybiB0aGUgdW5kZWZpbmVkL2ltYWdpbmFyeSB2YWx1ZSBvZiB0aGUgRk9STVxuICAgICAgICAgICAgaWYgKGlGT1JNKSByZXR1cm4gMztcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGNmcm9tID49IDApIHtcbiAgICAgICAgICAgIC8vIFsxfDJdIGlmIHRoZXJlIGlzIGEgMS9tIHNvbWV3aGVyZSBpbiB0aGUgZm9ybSwgd2UgY2FuIGVhc2lseSBjYWxjdWxhdGUgdGhlIHJlc3QgZnJvbSB0aGlzIHBvaW50XG4gICAgICAgICAgICB2YXIgdmFsID0gMTtcbiAgICAgICAgICAgIGZvcih2YXIgaT1jYWxjZnJvbTsgaTxmVmFscy5sZW5ndGg7IGkrKykgeyAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChsYXN0T3BlbiAmJiBpID09IGZWYWxzLmxlbmd0aC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IHRoaXMucmVsKHZhbCxmVmFsc1tpXSk7IC8vIGlmIG5vIGNyb3NzIG9uIGxhc3QgdmFyLCBkb24ndCBpbnZlcnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB2YWwgPSB0aGlzLmludiggdGhpcy5yZWwodmFsLGZWYWxzW2ldKSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC8vIHdoYXQgcmVtYWlucywgd2lsbCBvbmx5IGJlIGVpdGhlclxuICAgICAgICAvLyAtICgxKSBhbGwgdmFyaWFibGVzIGFyZSBuLzAgb3IgbW4vMiAgIG9yXG4gICAgICAgIC8vIC0gKDIpIGFsbCB2YXJpYWJsZXMgYXJlIG4vMCBvciAobW4pLzNcbiAgICAgICAgLy8gU28gd2UgY2FsY3VsYXRlIGZyb20gdGhlIGxhc3Qgb2NjYXNpb24gb2YgMiBvciAzLCBiZWNhdXNlIHdpdGggQzIgKGRlZ2VuZXJhdGUpIGFsbCBlbHNlIGNhbiBiZSBpZ25vcmVkXG5cbiAgICAgICAgLy8gZm9yIGV2ZW4gY2xvc2VkIHJlLWVudHJ5LUZPUk1zIHdpdGggdW5ldmVuIHJlc29sdXRpb24gKHVGT1JNIGMxKSwgd2UgbmVlZCB0byBkbyB0aGUgY2FsY3VsYXRpb24gdHdpY2VcbiAgICAgICAgdmFyIHJlcGVhdCA9IChyZUV2ZW4gJiYgIXJlc0V2ZW4gJiYgIWxhc3RPcGVuKT8gMjoxO1xuICAgICAgXG4gICAgICAgIGZvcih2YXIgaT0oZlZhbHMubGVuZ3RoKnJlcGVhdCktMTsgaT49MDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBpJWZWYWxzLmxlbmd0aDsgLy8gcmVwZWF0ZWQgdmFyaWFibGUgaW5kZXhcblxuICAgICAgICAgICAgaWYgKGZWYWxzW2luZGV4XSA9PSAyIHx8IGZWYWxzW2luZGV4XSA9PSAzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlSZXYgPSAoZlZhbHMubGVuZ3RoKnJlcGVhdCktMSAtIGk7IC8vIHJldmVyc2UgaW5kZXggdG8gZWFzaWVyIGNoZWNrIGZvciBpbnRlcnByZXRhdGlvbiAyIChzZWUgbmV4dClcblxuICAgICAgICAgICAgICAgIGlmIChhbHRJbnRlcnByICYmICgobGFzdE9wZW4gJiYgaVJldiUyPT0wKSB8fCAoIWxhc3RPcGVuICYmIGlSZXYlMj09MSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVGT1JNIGlGT1JNIGludGVycHJldGF0aW9uIDI6IHJlY3Vyc2l2ZSBpZGVudGl0eSAoIMaSPSgoxpIpKSA8LT4gbW4gKVxuICAgICAgICAgICAgICAgICAgICAvLyDGkj0oKMaSKSkgY2FuIGJlIHNlcGFyYXRlZCBpZiB0aGVyZSBpcyBhbiBldmVuIG51bWJlciBvZiBjcm9zc2VzIChvciBub25lKSBhZnRlciB0aGUgdmFyaWFibGU7IHRoaXMgaXMgdGhlIGNhc2UgaWYgZWl0aGVyOlxuICAgICAgICAgICAgICAgICAgICAvLyAtICgxKSB0aGUgRk9STSBpcyBvcGVuIGFuZCB0aGUgYmFja3dhcmRzIHZhcmlhYmxlIGluZGV4IGlzIGV2ZW4gICAgICBvclxuICAgICAgICAgICAgICAgICAgICAvLyAtICgyKSB0aGUgRk9STSBpcyBjbG9zZWQgYW5kIHRoZSBiYWNrd2FyZHMgdmFyaWFibGUgaW5kZXggaXMgb2RkXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIGlmIHRoZSBudW1iZXIgb2YgY3Jvc3NlcyBiZXR3ZWVuIMaSIGFuZCBvdXIgdmFyIGlzIGV2ZW4sIHdlIGRpc3Rpbmd1aXNoIHR3byBjYXNlczpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlGT1JNKSByZXR1cm4gdGhpcy5yZWwoMyxmVmFsc1tpbmRleF0pOyAvLyBpRk9STTogKMaSPSgoxpIpKSl4IDwtPiAobW4pIHhcbiAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gdGhpcy5yZWwoMixmVmFsc1tpbmRleF0pOyAgICAgICAvLyB1Rk9STTogIMaSPSgoxpIpKXggIDwtPiAgbW4geFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gWzVdIGlmIGV2ZXJ5dGhpbmcgZWxzZSBmYWlscywgdXNlIGNhc2UgZGlzdGluY3Rpb246IHVGT1JNIGlGT1JNIChwLjk0KTsgYWxzbyBhY2NvcmRpbmcgdG86XG4gICAgICAgICAgICAgICAgICAgIC8vIHVGT1JNIGlGT1JNIChwLjE2NykgaW50ZXJwcmV0YXRpb24gMTogcmVjdXJzaW9uIGluc3RydWN0aW9uICggxpI9KCjGkikpIGFuZCBtbiBuZWVkIHRvIGJlIGRpZmZlcmVudGlhdGVkKVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYXNlMCA9IDI7IC8vIHJlLWVudHJ5IMaSPW1uLCBiZWNhdXNlIG90aGVyIG1uPTBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RPcGVuICYmICFyZXNFdmVuICYmICFyZUV2ZW4pIGNhc2UwID0gdGhpcy5pbnYoY2FzZTApOyAvLyBjcm9zcyBmb3IgaW50ZWdyYXRlZCBGT1JNcyB3aXRoIHVuZXZlbiByZXMuIGluc2lkZSBvcGVuIEZPUk1zIChpRk9STSBiMilcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBqPTA7IGo8KGZWYWxzLmxlbmd0aCpyZXBlYXQpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmeCA9IDA7IC8vIGFsbCBvdGhlciB2YWx1ZXMgd2lsbCBiZSAoZGVnZW5lcmF0ZWQgdG8pIHplcm9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihmVmFsc1tpbmRleF0gPT0gMikgZnggPSAwOyAvLyBsYXN0IG9jY2FzaW9uIG9mIG1uLzIgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBmeCA9IHRoaXMuaW52KDApOyAvLyBsYXN0IG9jY2FzaW9uIG9mIChtbikvMyB3aWxsIGJlIGludGVycHJldGVkIGFzICgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RPcGVuICYmIGogPT0gZlZhbHMubGVuZ3RoLTEpIGNhc2UwID0gdGhpcy5yZWwoY2FzZTAsZngpOyAvLyBpZiBubyBjcm9zcyBvbiBsYXN0IHZhciwgZG9uJ3QgaW52ZXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNhc2UwID0gdGhpcy5pbnYoIHRoaXMucmVsKGNhc2UwLGZ4KSApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYXNlMSA9IDI7IC8vIHJlLWVudHJ5IMaSPW1uLCBiZWNhdXNlIG90aGVyIG1uPTFcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RPcGVuICYmICFyZXNFdmVuICYmICFyZUV2ZW4pIGNhc2UxID0gdGhpcy5pbnYoY2FzZTEpOyAvLyBjcm9zcyBmb3IgaW50ZWdyYXRlZCBGT1JNcyB3aXRoIHVuZXZlbiByZXMuIGluc2lkZSBvcGVuIEZPUk1zIChpRk9STSBiMilcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBqPTA7IGo8KGZWYWxzLmxlbmd0aCpyZXBlYXQpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmeCA9IDA7IC8vIGFsbCBvdGhlciB2YWx1ZXMgd2lsbCBiZSAoZGVnZW5lcmF0ZWQgdG8pIHplcm9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihmVmFsc1tpbmRleF0gPT0gMikgZnggPSAxOyAvLyBsYXN0IG9jY2FzaW9uIG9mIG1uLzIgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBmeCA9IHRoaXMuaW52KDEpOyAvLyBsYXN0IG9jY2FzaW9uIG9mIChtbikvMyB3aWxsIGJlIGludGVycHJldGVkIGFzICgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RPcGVuICYmIGogPT0gZlZhbHMubGVuZ3RoLTEpIGNhc2UxID0gdGhpcy5yZWwoY2FzZTEsZngpOyAvLyBpZiBubyBjcm9zcyBvbiBsYXN0IHZhciwgZG9uJ3QgaW52ZXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNhc2UxID0gdGhpcy5pbnYoIHRoaXMucmVsKGNhc2UxLGZ4KSApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udCggY2FzZTAsY2FzZTEgKTsgLy8gY29udHJhdmFsZW5jZSBvZiBib3RoIGNhc2VzXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIHJldHVybiAtOTk7IC8vIGVycm9yIGNvZGVcbiAgICB9OyAvLyBlbmQgcmVFbnRyeSgpXG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBDT01QTEVYIEZPUk0gQ0FMQ1VMQVRJT05TXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyAtIDIgVkFSSUFCTEVTXG5cbiAgICBzdGF0aWMgaW1wbEwoZngsIGZ5KSB7IC8vIHZlcmlmaWVkXG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgXCJpbXBsaWNhdGlvblwiOiAoeCl5ICovXG4gICAgICAgIHJldHVybiB0aGlzLnJlbCggdGhpcy5pbnYoZngpLGZ5ICk7XG4gICAgfTtcbiAgICBzdGF0aWMgaW1wbFIoZngsIGZ5KSB7XG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgXCJpbXBsaWNhdGlvblwiOiB4KHkpICovXG4gICAgICAgIHJldHVybiB0aGlzLnJlbCggZngsdGhpcy5pbnYoZnkpICk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBwcmUoZngsIGZ5KSB7IC8vIHZlcmlmaWVkXG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgXCJwcmVzZWN0aW9uXCIvXCJkZWNpc2lvblwiOiAoKHgpeSkgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuaW52KCB0aGlzLmltcGxMKGZ4LGZ5KSApO1xuICAgIH07XG4gICAgc3RhdGljIHBvc3QoZngsIGZ5KSB7IC8vIHZlcmlmaWVkXG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgXCJwb3N0c2VjdGlvblwiL1wiZGVjaXNpb25cIjogKHgoeSkpICovXG4gICAgICAgIHJldHVybiB0aGlzLmludiggdGhpcy5pbXBsUihmeCxmeSkgKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGNvbnQoZngsIGZ5KSB7IC8vIHZlcmlmaWVkXG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgXCJjb250cmF2YWxlbmNlXCIvXCJlaXRoZXItb3JcIjogKCh4KXkpICh4KHkpKSAqL1xuICAgICAgICByZXR1cm4gdGhpcy5yZWwoIHRoaXMucHJlKGZ4LGZ5KSwgdGhpcy5wb3N0KGZ4LGZ5KSApO1xuICAgIH07XG4gICAgc3RhdGljIGVxdWl2KGZ4LCBmeSkge1xuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIFwiZXF1aXZhbGVuY2VcIi8/OiAoICgoeCl5KSAoeCh5KSkgKSAqL1xuICAgICAgICByZXR1cm4gdGhpcy5pbnYoIHRoaXMuY29udChmeCxmeSkgKTtcbiAgICB9O1xuXG59IiwiaW1wb3J0IEZGb3JtIGZyb20gJy4vZmZvcm0nO1xuaW1wb3J0IHsgcGVybXV0ZUFycmF5LCB0cnVuY2F0ZVN0ciB9IGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGRG5hIGV4dGVuZHMgRkZvcm0ge1xuICAgIC8qXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgJ2RuYScgbW9kdWxlIGZvciBmb3JtZm9ybSAoYykgMjAxOS8yMCBQZXRlciBIb2ZtYW5uXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICovXG4gICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9O1xuXG4gICAgc3RhdGljIGZvcm1Ub0ROQSAoZm9ybSkge1xuICAgIFx0cmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5jYWxjQWxsKGZvcm0pKS5yZXZlcnNlKCkuam9pbignJyk7XG4gXHR9O1xuXG5cdHN0YXRpYyB0b3RhbFZhcnNGcm9tRE5BIChmb3JtRE5BKSB7IFxuXHRcdC8qIGNhbGN1bGF0ZXMgdmFyaWFibGUgbnVtYmVyIGZyb20gZm9ybUROQSAqL1xuXHRcdGNvbnN0IG4gPSBNYXRoLmxvZyggZm9ybUROQS50b1N0cmluZyg0KS5sZW5ndGggKS9NYXRoLmxvZyg0KTsgLy8gbG9nXzQoZm9ybUROQSBsZW5ndGgpID0gdmFyaWFibGUgbnVtYmVyXG5cdFx0cmV0dXJuIG4gJSAxID09PSAwID8gbiA6IHVuZGVmaW5lZDtcblx0fTtcblxuXG5cdHN0YXRpYyB2bWFwIChpbnB1dCwgdmFyb3JkZXI9dW5kZWZpbmVkLCBvcHRpb25zPXVuZGVmaW5lZCkge1xuXHQgIC8qIFZhbHVlIG9yZGVyaW5nOiBsZWZ0OjAsIHJpZ2h0OjEsIHVwOjMsIGRvd246MiAqL1xuXHQgIGlmICghK2lucHV0ICYmIHZhcm9yZGVyID09PSB1bmRlZmluZWQpIHZhcm9yZGVyID0gdGhpcy5tYXRjaERlZmF1bHRWYXJPcmRlciggdGhpcy5nZXRWYXJpYWJsZXMoaW5wdXQpICk7XG5cblx0ICBsZXQgZm9ybUROQSA9ICEhK2lucHV0ID8gaW5wdXQgOiB0aGlzLmZvcm1Ub0ROQSh0aGlzLnJlT3JkZXJWYXJzKGlucHV0LHZhcm9yZGVyKSk7XG5cdCAgZm9ybUROQSA9IGZvcm1ETkEuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKTtcblx0ICBjb25zdCB2bnVtID0gdGhpcy50b3RhbFZhcnNGcm9tRE5BKGZvcm1ETkEpO1xuXHQgIFxuXHQgIGNvbnN0IHtzaXplLCBnYXBHcm93LCBzdmdQYWQsIHN0cm9rZVcsIHN0cm9rZUMsIGJnQywgaGlkZUlucHV0TGFiZWwsIGhpZGVPcmRlckxhYmVsLCBjdXN0b21MYWJlbCwgZnVsbElucHV0TGFiZWwsIGlucHV0TGFiZWxNYXgsIGZpbHRlcn0gPSBcblx0ICAgICAgICB7c2l6ZTogKHZudW0gPT4geyBjb25zdCBuID0gTWF0aC5mbG9vciggMTQgLSAodm51bS0xKSoqMS4wICk7IC8vIDEyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4gPj0gMiA/IG4gOiAyOyB9KSh2bnVtKSwgXG5cdCAgICAgICAgIGdhcEdyb3c6IDEuNSxcblx0ICAgICAgICAgc3ZnUGFkOiBgMGAsIHN0cm9rZVc6IDAuNSwgc3Ryb2tlQzogYCNmZmZgLCBiZ0M6IGBub25lYCwgLy8gIzMzM1xuXHQgICAgICAgICBoaWRlSW5wdXRMYWJlbDogZmFsc2UsIGhpZGVPcmRlckxhYmVsOiBmYWxzZSwgZnVsbElucHV0TGFiZWw6IGZhbHNlLCBpbnB1dExhYmVsTWF4OiAyMDAsIGN1c3RvbUxhYmVsOiB1bmRlZmluZWQsXG5cdCAgICAgICAgIC8vIGZpbHRlcjogJzExMTEnLCA8LSB3aWxsIGFkZCBsYXRlclxuXHQgICAgICAgICAuLi5vcHRpb25zfTtcblx0ICBcblx0ICBjb25zdCBtYXJnaW5zID0gW3N0cm9rZVcsIC4uLkFycmF5LmZyb20oe2xlbmd0aDp2bnVtLTF9LCAoXyxpKSA9PiAoaSsxKSAqIGdhcEdyb3cpXTtcblx0ICBjb25zdCBnYXBTdW0gPSB2ID0+IG1hcmdpbnMuc2xpY2UoMSx2KS5yZXZlcnNlKCkucmVkdWNlKChhY2MsY3VycixpZHgpID0+IGFjYyArICgyKippZHgpICogY3VyciwgMCk7XG5cblx0ICBjb25zdCBjZWxsID0ge3c6c2l6ZSwgaDpzaXplfTtcblxuXHQgIGNvbnN0IGZ4ID0gKHFpLG4pID0+ICAocWklMikgKiAobiAhPT0gdW5kZWZpbmVkID8gbiA6IDApOyAgICAgICAgIC8vIHhwb3M6IDAxMjMgLT4gMDEwMVxuXHQgIGNvbnN0IGZ5ID0gKHFpLG4pID0+ICsocWk+MCAmJiBxaTwzKSAqIChuICE9PSB1bmRlZmluZWQgPyBuIDogMCk7IC8vIHlwb3M6IDAxMjMgLT4gMDExMFxuXHQgIFxuXHQgIGNvbnN0IGNvbnN0cnVjdE1hcCA9IChkbmFIb2xvbiwgdmNvdW50LCBxaT0wLCBtYXBTVkc9JycpID0+IHtcblx0ICAgIGNvbnN0IHF0biA9IDQqKnZjb3VudDtcblx0ICAgIGNvbnN0IGxlbiA9IE1hdGguc3FydChxdG4pO1xuXHQgICAgZG5hSG9sb24gPSBkbmFIb2xvbi5zdWJzdHIocWkqcXRuLCBxdG4pOyAvLyBxdWFydGVyIG9mIHRoZSBmb3JtRE5BIHN0cmluZ1xuXG5cdCAgICBtYXBTVkcgKz0gYDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke2Z4KHFpLCBsZW4qY2VsbC53KSArIGZ4KHFpLCBnYXBTdW0odmNvdW50KSkgKyBmeChxaSwgbWFyZ2luc1t2Y291bnRdKX0sXG5cdCR7ZnkocWksIGxlbipjZWxsLmgpICsgZnkocWksIGdhcFN1bSh2Y291bnQpKSArIGZ5KHFpLCBtYXJnaW5zW3Zjb3VudF0pfSlcIj5gO1xuXG5cdCAgICBmb3IgKGxldCBpPTA7IGk8NDsgaSsrKSB7XG5cdCAgICAgIGlmICh2Y291bnQgPiAxKSB7XG5cdCAgICAgICAgbWFwU1ZHID0gY29uc3RydWN0TWFwKGRuYUhvbG9uLCB2Y291bnQtMSwgaSwgbWFwU1ZHKTtcblx0ICAgICAgfVxuXHQgICAgICBlbHNlIHtcblx0ICAgICAgICBjb25zdCB2YWwgPSBkbmFIb2xvbi5zdWJzdHIoaSwxKTtcblxuXHQgICAgICAgIG1hcFNWRyArPSBgPHJlY3QgeD0ke2Z4KGksY2VsbC53KX0geT0ke2Z5KGksY2VsbC5oKX0gd2lkdGg9JHtjZWxsLnd9IGhlaWdodD0ke2NlbGwuaH0gZmlsbD0ke3RoaXMudkNvbG9yKHZhbCl9PjwvcmVjdD5gO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICBtYXBTVkcgKz0gYDwvZz5gO1xuXHQgICAgcmV0dXJuIG1hcFNWRztcblx0ICB9XG5cblx0ICBjb25zdCBwcm9jZXNzTGFiZWwgPSBsYWJlbCA9PiB7XG5cdCAgXHRpZiAobGFiZWwubGVuZ3RoID4gMSkge1xuXHQgIFx0XHRjb25zdCBsYWJlbFBhcnRzID0gbGFiZWwuc3BsaXQoJ18nKTtcblx0ICBcdFx0cmV0dXJuIChsYWJlbFBhcnRzLmxlbmd0aCA+IDEpID8gYCR7bGFiZWxQYXJ0c1swXX08c3ViPiR7bGFiZWxQYXJ0c1sxXX08L3N1Yj5gIDogYFwiJHtsYWJlbH1cImA7XG5cdCAgXHR9XG5cdCAgXHRlbHNlIHJldHVybiBsYWJlbDtcblx0ICB9XG5cdCAgXG5cdCAgY29uc3QgY2FwdGlvbiA9ICgpID0+IHtcblx0ICAgIGlmIChjdXN0b21MYWJlbCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gYDxmaWdjYXB0aW9uIHN0eWxlPVwid29yZC13cmFwOiBicmVhay13b3JkO1wiPiR7Y3VzdG9tTGFiZWx9PC9maWdjYXB0aW9uPmA7XG5cdCAgICBpZiAoIShoaWRlSW5wdXRMYWJlbCAmJiBoaWRlT3JkZXJMYWJlbCkpIHtcblx0ICAgICAgbGV0IGxhYmVsID0gJyc7XG5cdCAgICAgIGxhYmVsICs9IGhpZGVPcmRlckxhYmVsIHx8ICEhK2lucHV0ID8gJycgOiBgJHt2YXJvcmRlci5yZWR1Y2UoKGFjYyxjdXJyLGkpID0+IGFjYyArIChpID4gMCA/ICcgPiAnIDogJycpICsgcHJvY2Vzc0xhYmVsKGN1cnIpLCcnICl9JHtoaWRlSW5wdXRMYWJlbCA/ICcnIDogJzxici8+J31gO1xuXHQgICAgICBsYWJlbCArPSBoaWRlSW5wdXRMYWJlbCA/ICcnIDogISEraW5wdXQgPyBgPGNvZGUgc3R5bGU9XCJmb250LXNpemU6MC44ZW07XCI+Ojoke2Z1bGxJbnB1dExhYmVsID8gaW5wdXQgOiB0cnVuY2F0ZVN0cihpbnB1dCw0Kio0LGDigKYoJHs0Kip2bnVtfSlgKX08L2NvZGU+YCA6ICfGkiA9ICcrKGZ1bGxJbnB1dExhYmVsID8gaW5wdXQgOiB0cnVuY2F0ZVN0cihpbnB1dCxpbnB1dExhYmVsTWF4LGDigKYgPGk+K21vcmU8L2k+YCkpO1xuXHQgICAgICByZXR1cm4gYDxmaWdjYXB0aW9uIHN0eWxlPVwid29yZC13cmFwOiBicmVhay13b3JkO1wiPiR7bGFiZWx9PC9maWdjYXB0aW9uPmA7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gJyc7XG5cdCAgfVxuXG5cdCAgY29uc3QgbGVuID0gTWF0aC5zcXJ0KGZvcm1ETkEubGVuZ3RoKTtcblx0ICBpZiAodmFyb3JkZXIgPT09IHVuZGVmaW5lZCAmJiAhK2lucHV0KSB2YXJvcmRlciA9IGZvcm1mb3JtLmZvcm0uZ2V0VmFyaWFibGVzKGlucHV0KTtcblx0ICBcblx0ICBjb25zdCBib3VuZHMgPSB7dzogKGNlbGwudypsZW4gKyBtYXJnaW5zWzBdICsgZ2FwU3VtKHZudW0pKSwgaDogKGNlbGwuaCpsZW4gKyBtYXJnaW5zWzBdICsgZ2FwU3VtKHZudW0pKX07XG5cdCAgY29uc3QgcmhvbWIgPSB7dzogTWF0aC5zcXJ0KDIgKiBib3VuZHMudyoqMiksIGg6IE1hdGguc3FydCgyICogYm91bmRzLmgqKjIpfTtcblx0ICBcblx0ICByZXR1cm4gYDxmaWd1cmUgY2xhc3M9XCJ2bWFwXCIgc3R5bGU9XCJtYXJnaW46IDA7XCI+XG5cdDxzdmcgc3R5bGU9XCJiYWNrZ3JvdW5kOiAke2JnQ307IHBhZGRpbmc6ICR7c3ZnUGFkfTtcIiB3aWR0aD0ke2NlbGwudypsZW4gKyBnYXBTdW0odm51bSl9IGhlaWdodD0ke2NlbGwuaCpsZW4gKyBnYXBTdW0odm51bSl9XG5cdGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIiR7c3Ryb2tlQ31cIiBzdHJva2Utd2lkdGg9XCIke21hcmdpbnNbMF19XCJcblx0dmlld0JveD1cIi0ke21hcmdpbnNbMF0vMn0gLSR7bWFyZ2luc1swXS8yfSAke3Job21iLnd9ICR7cmhvbWIuaH1cIj5cblx0PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAsJHtyaG9tYi5oLzJ9KSByb3RhdGUoLTQ1LDAsMClcIj4keyBjb25zdHJ1Y3RNYXAoZm9ybUROQSwgdm51bSkgfTwvZz5cblx0PC9zdmc+XG5cdCR7IGNhcHRpb24oKSB9XG5cdDwvZmlndXJlPmA7XG5cdH07XG5cblx0c3RhdGljIHZtYXBQZXJzcGVjdGl2ZXMgKGZvcm0sIHZhckxpc3Q9dW5kZWZpbmVkLCBvcHRpb25zPXVuZGVmaW5lZCwgbWFyZ2luPTIwKSB7XG5cdCAgLyogZm9ybUROQSBub3QgeWV0IHN1cHBvcnRlZCAocGVybXV0YXRpb24gYWxnb3JpdGhtIHJlcXVpcmVkKSAqL1xuXHQgIGlmICh2YXJMaXN0ID09PSB1bmRlZmluZWQpIHZhckxpc3QgPSB0aGlzLm1hdGNoRGVmYXVsdFZhck9yZGVyKCB0aGlzLmdldFZhcmlhYmxlcyhmb3JtKSApO1xuXG5cdCAgY29uc3Qgdm1hcEl0ZW1zID0gcGVybXV0ZUFycmF5KHZhckxpc3QpLm1hcCh2YXJvcmRlciA9PiB7XG5cdCAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJ2bWFwLWl0ZW1cIiBzdHlsZT1cInBhZGRpbmc6ICR7TWF0aC5mbG9vcihtYXJnaW4vNCl9cHggJHtNYXRoLmZsb29yKG1hcmdpbi8yKX1weFwiPiBcblx0ICAgICAgJHt0aGlzLnZtYXAoZm9ybSx2YXJvcmRlcix7aGlkZUlucHV0TGFiZWw6IHRydWUsIC4uLm9wdGlvbnN9KX1cblx0ICAgICAgPC9kaXY+YH0pLnJlZHVjZSgoc3RyLGl0ZW0pID0+IHN0citpdGVtLCcnKTtcblx0ICByZXR1cm4gYDxmaWd1cmUgY2xhc3M9XCJ2bWFwLXBlcnNwZWN0aXZlc1wiIHN0eWxlPVwibWF4LXdpZHRoOiBub25lO1wiPlxuXHQgIDxkaXYgY2xhc3M9XCJ2bWFwLWxpc3RcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtd3JhcDogd3JhcDsgbWFyZ2luOiAwIC0ke01hdGguZmxvb3IobWFyZ2luLzIpfXB4XCI+XG5cdCAgJHsgdm1hcEl0ZW1zIH1cblx0ICA8L2Rpdj5cblx0ICA8ZmlnY2FwdGlvbiBzdHlsZT1cImJvcmRlci10b3A6IDFweCBzb2xpZDsgcGFkZGluZy10b3A6ICR7TWF0aC5mbG9vcihtYXJnaW4vNCl9cHg7IG1hcmdpbi10b3A6ICR7TWF0aC5mbG9vcihtYXJnaW4vMil9cHhcIj7GkiA9ICR7Zm9ybX08L2ZpZ2NhcHRpb24+XG5cdCAgPC9maWd1cmU+YFxuXHR9O1xuXG5cdHN0YXRpYyB2bWFwTGlzdCAoaW5wdXRMaXN0LCBtYXJnaW49MjAsIGdsb2JhbE9wdGlvbnM9dW5kZWZpbmVkKSB7XG5cdCAgLyogR2VuZXJhdGVkIGEgbGlzdCBvZiBGT1JNIHZtYXBzICovXG5cdCAgLy8gaW5wdXRMaXN0IGZvcm1hdDogW1snZm9ybS9kbmEnLCBbdmFyb3JkZXJdL3VuZGVmaW5lZCwgb3B0aW9ucy91bmRlZmluZWRdLCAuLi5cblx0ICBjb25zdCBnZXRWQWxpZ24gPSBvYmogPT4ge1xuXHQgIFx0Y29uc3QgYWxpZ25JdGVtcyA9ICghb2JqIHx8ICFvYmoudkFsaWduKSA/ICdmbGV4LWVuZCdcblx0ICBcdFx0XHRcdFx0IDogb2JqLnZBbGlnbiA9PT0gJ3RvcCcgPyAnZmxleC1zdGFydCdcblx0ICBcdFx0XHRcdCBcdCA6IG9iai52QWxpZ24gPT09ICdjZW50ZXInID8gJ2NlbnRlcidcblx0ICBcdFx0XHRcdCBcdCA6IG9iai52QWxpZ24gPT09ICdib3R0b20nID8gJ2ZsZXgtZW5kJyA6ICdmbGV4LWVuZCc7XG5cdCAgXHRyZXR1cm4gYGFsaWduLWl0ZW1zOiAke2FsaWduSXRlbXN9O2A7XG5cdCAgfVxuXG5cdCAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwidm1hcC1saXN0XCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7ICR7Z2V0VkFsaWduKGdsb2JhbE9wdGlvbnMpfSBtYXJnaW46IDAgLSR7TWF0aC5mbG9vcihtYXJnaW4vMil9cHhcIj5cblx0ICAkeyBpbnB1dExpc3QucmVkdWNlKChzdHIsdm1hcCkgPT4gXG5cdCAgXHRcdGAke3N0cn08ZGl2IGNsYXNzPVwidm1hcC1pdGVtXCIgc3R5bGU9XCJwYWRkaW5nOiAke01hdGguZmxvb3IobWFyZ2luLzQpfXB4ICR7TWF0aC5mbG9vcihtYXJnaW4vMil9cHhcIj4keyB0aGlzLnZtYXAodm1hcFswXSwgdm1hcFsxXSwgey4uLnZtYXBbMl0sIC4uLmdsb2JhbE9wdGlvbnN9KSB9PC9kaXY+YCwnJykgfVxuXHQgIDwvZGl2PmBcblx0fTtcblxuXHRzdGF0aWMgdkNvbG9yICh2YWwpIHtcblx0XHQvKiBWYWx1ZSB0byBjb2xvciBtYXAgZm9yIHZtYXAgKi9cblx0ICByZXR1cm4gdmFsID09IDAgPyAnIzAwMDAwMCdcblx0ICAgICAgIDogdmFsID09IDEgPyAnIzQ3NTdmZidcblx0ICAgICAgIDogdmFsID09IDIgPyAnI2ZmMDA0NCdcblx0ICAgICAgIDogdmFsID09IDMgPyAnIzAwZmY1Zidcblx0ICAgICAgIDogTmFOO1xuXHR9O1xuXG59IiwiaW1wb3J0IHsgZmxhdHRlbiwgaW5jbHVkZSwgVkFSQ09ERSwgVkFSQ09ERV9SRVYgfSBmcm9tICcuLi8uLi9jb21tb24vaGVscGVyJztcbmltcG9ydCBGQ2FsYyBmcm9tICcuL2ZjYWxjJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkZvcm0gZXh0ZW5kcyBGQ2FsYyB7XG4gICAgLypcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgJ2Zvcm0nIG1vZHVsZSBmb3IgZm9ybWZvcm0gKGMpIDIwMTggUGV0ZXIgSG9mbWFublxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAqL1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBGb3JtIENhbGN1bGF0aW9uXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljIGNhbGMoZm9ybSkge1xuICAgICAgICAvKiByZWN1cnNpdmUgZm9ybSBjYWxjdWxhdGlvbiAqL1xuICAgICAgICB2YXIgZnggPSAwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaGF2ZSBhIGpzb24gZm9ybSwgaWYgbm90OiB0cnkgdG8gY29udmVydFxuICAgICAgICBpZih0eXBlb2YoZm9ybSkgPT09ICdzdHJpbmcnKSBmb3JtID0gdGhpcy5wYXJzZUxpbmVhcihmb3JtKTtcblxuICAgICAgICBmb3IgKHZhciBpIGluIGZvcm0uc3BhY2UpIHtcbiAgICAgICAgICAgIGlmIChmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICdmb3JtJykge1xuICAgICAgICAgICAgICAgIGZ4ID0gdGhpcy5yZWwoIGZ4LHRoaXMuY2FsYyhmb3JtLnNwYWNlW2ldKSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZm9ybS5zcGFjZVtpXS50eXBlID09PSAnY29uc3QnKSB7XG4gICAgICAgICAgICAgICAgZnggPSB0aGlzLnJlbCggZngsZm9ybS5zcGFjZVtpXS52YWx1ZSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZm9ybS5zcGFjZVtpXS50eXBlID09PSAndmFyJykge1xuICAgICAgICAgICAgICAgIGlmKCFpc05hTihmb3JtLnNwYWNlW2ldLnZhbHVlKSkgZnggPSB0aGlzLnJlbCggZngsZm9ybS5zcGFjZVtpXS52YWx1ZSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZm9ybS5zcGFjZVtpXS50eXBlID09PSAndW5jbGVhcicpIHtcbiAgICAgICAgICAgICAgICBmeCA9IHRoaXMucmVsKCBmeCxmb3JtLnNwYWNlW2ldLnZhbHVlICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICdyZUVudHJ5Jykge1xuICAgICAgICAgICAgICAgIHZhciBuZXN0ZWRWYWxzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIGZSZUVudHJ5ID0gZm9ybS5zcGFjZVtpXTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogaW4gZlJlRW50cnkubmVzdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5lc3RlZFZhbHMucHVzaCggdGhpcy5jYWxjKGZSZUVudHJ5Lm5lc3RlZFtqXSkgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZm9yIGV2ZW4gcmVzb2x1dGlvbnMgKHRvdGFsIG5lc3RlZCBhcmd1bWVudHMpLCByZUVudHJ5IG51bWJlciB3aWxsIGJlIHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIC8vIHNpbmNlIGl0IGRvZXNuJ3QgbWF0dGVyIGlmIGl0cyBldmVuIG9yIG9kZFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlRW50cnlOdW1iZXIgPSAoZlJlRW50cnkubmVzdGVkLmxlbmd0aCAlIDIgPT09IDApID8gdW5kZWZpbmVkIDogZlJlRW50cnkucmVFdmVuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIG5vdGF0aW9uIHJlYWRpbmc6IHtkZWVwZXN0LCAuLi4sIHNoYWxsb3dlc3R9ICB1c2UgbmVzdGVkVmFscy5yZXZlcnNlKCkgdG8gcmV2ZXJzZSB2YXJpYWJsZXNcbiAgICAgICAgICAgICAgICBmeCA9IHRoaXMucmVsKCBmeCx0aGlzLnJlRW50cnkocmVFbnRyeU51bWJlciwgZlJlRW50cnkubGFzdE9wZW4sIGZSZUVudHJ5LmFsdEludGVycHJldGF0aW9uLCAuLi5uZXN0ZWRWYWxzKSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGZvcm0udW5tYXJrZWQpIHJldHVybiBmeDtcbiAgICAgICAgZWxzZSByZXR1cm4gdGhpcy5pbnYoIGZ4ICk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBjYWxjQWxsKGZvcm0pIHtcbiAgICAgICAgLyogSW50ZXJwcmV0IGFuZCBjYWxjdWxhdGUgYWxsIHBvc3NpYmxlIHZhbHVlcyBmb3IgdGhlIGZvcm0gXG4gICAgICAgICAgIC0+IG5lZWRzIHJlZmFjdG9yaW5nIHRvIGF2b2lkIHJlZHVuZGFuY3k7IHN1Z2dlc3Rpb25zIHdlbGNvbWUuICovXG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGhhdmUgYSBqc29uIGZvcm0sIGlmIG5vdDogdHJ5IHRvIGNvbnZlcnRcbiAgICAgICAgaWYodHlwZW9mKGZvcm0pID09PSAnc3RyaW5nJykgZm9ybSA9IHRoaXMucGFyc2VMaW5lYXIoZm9ybSk7XG5cbiAgICAgICAgdmFyIHZhcnMgPSB0aGlzLmdldFZhcmlhYmxlcyhmb3JtKTtcbiAgICAgICAgdmFyIHZhbHMgPSB7fTtcblxuICAgICAgICB2YXIgaW50ZXJLZXkgPSAnJyt2YXJzLmpvaW4oKSsnOyc7XG5cbiAgICAgICAgc3dpdGNoICh2YXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHZhbHNbJ1Jlc3VsdCddID0gdGhpcy5jYWxjKGZvcm0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHZhciBpbnRlcnByID0gWyB7dmFyOiB2YXJzWzBdLCB2YWx1ZTogbnVsbH0gXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhPTA7IGE8NDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGludGVycHJbMF0udmFsdWUgPSBhO1xuICAgICAgICAgICAgICAgICAgICB2YWxzW2ludGVyS2V5K2FdID0gdGhpcy5pbnRlckNhbGMoZm9ybSwgaW50ZXJwcik7Ly9bYV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJwciA9IFsge3ZhcjogdmFyc1swXSwgdmFsdWU6IG51bGx9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1sxXSwgdmFsdWU6IG51bGx9IF07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYT0wOyBhPDQ7IGErKykge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzBdLnZhbHVlID0gYTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYj0wOyBiPDQ7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclsxXS52YWx1ZSA9IGI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxzW2ludGVyS2V5K2ErJycrYl0gPSB0aGlzLmludGVyQ2FsYyhmb3JtLCBpbnRlcnByKTsvL1thLGJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJwciA9IFsge3ZhcjogdmFyc1swXSwgdmFsdWU6IG51bGx9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1sxXSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzJdLCB2YWx1ZTogbnVsbH0gXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhPTA7IGE8NDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGludGVycHJbMF0udmFsdWUgPSBhO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBiPTA7IGI8NDsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzFdLnZhbHVlID0gYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGM9MDsgYzw0OyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzJdLnZhbHVlID0gYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxzW2ludGVyS2V5K2ErJycrYisnJytjXSA9IHRoaXMuaW50ZXJDYWxjKGZvcm0sIGludGVycHIpOy8vW2EsYixjXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdmFyIGludGVycHIgPSBbIHt2YXI6IHZhcnNbMF0sIHZhbHVlOiBudWxsfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbMV0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1syXSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzNdLCB2YWx1ZTogbnVsbH0gXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhPTA7IGE8NDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGludGVycHJbMF0udmFsdWUgPSBhO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBiPTA7IGI8NDsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzFdLnZhbHVlID0gYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGM9MDsgYzw0OyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzJdLnZhbHVlID0gYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBkPTA7IGQ8NDsgZCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbM10udmFsdWUgPSBkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxzW2ludGVyS2V5K2ErJycrYisnJytjKycnK2RdID0gdGhpcy5pbnRlckNhbGMoZm9ybSwgaW50ZXJwcik7Ly9bYSxiLGMsZF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJwciA9IFsge3ZhcjogdmFyc1swXSwgdmFsdWU6IG51bGx9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1sxXSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzJdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbM10sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1s0XSwgdmFsdWU6IG51bGx9IF07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYT0wOyBhPDQ7IGErKykge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzBdLnZhbHVlID0gYTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYj0wOyBiPDQ7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclsxXS52YWx1ZSA9IGI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjPTA7IGM8NDsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclsyXS52YWx1ZSA9IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZD0wOyBkPDQ7IGQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzNdLnZhbHVlID0gZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZT0wOyBlPDQ7IGUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcls0XS52YWx1ZSA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxzW2ludGVyS2V5K2ErJycrYisnJytjKycnK2QrJycrZV0gPSB0aGlzLmludGVyQ2FsYyhmb3JtLCBpbnRlcnByKTsvL1thLGIsYyxkLGVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJwciA9IFsge3ZhcjogdmFyc1swXSwgdmFsdWU6IG51bGx9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1sxXSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzJdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbM10sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1s0XSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzVdLCB2YWx1ZTogbnVsbH0gXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhPTA7IGE8NDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGludGVycHJbMF0udmFsdWUgPSBhO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBiPTA7IGI8NDsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzFdLnZhbHVlID0gYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGM9MDsgYzw0OyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzJdLnZhbHVlID0gYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBkPTA7IGQ8NDsgZCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbM10udmFsdWUgPSBkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBlPTA7IGU8NDsgZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzRdLnZhbHVlID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGY9MDsgZjw0OyBmKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzVdLnZhbHVlID0gZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxzW2ludGVyS2V5K2ErJycrYisnJytjKycnK2QrJycrZSsnJytmXSA9IHRoaXMuaW50ZXJDYWxjKGZvcm0sIGludGVycHIpOy8vW2EsYixjLGQsZSxmXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgdmFyIGludGVycHIgPSBbIHt2YXI6IHZhcnNbMF0sIHZhbHVlOiBudWxsfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbMV0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1syXSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzNdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbNF0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1s1XSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzZdLCB2YWx1ZTogbnVsbH0gXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhPTA7IGE8NDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGludGVycHJbMF0udmFsdWUgPSBhO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBiPTA7IGI8NDsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzFdLnZhbHVlID0gYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGM9MDsgYzw0OyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzJdLnZhbHVlID0gYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBkPTA7IGQ8NDsgZCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbM10udmFsdWUgPSBkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBlPTA7IGU8NDsgZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzRdLnZhbHVlID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGY9MDsgZjw0OyBmKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzVdLnZhbHVlID0gZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBnPTA7IGc8NDsgZysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJbNl0udmFsdWUgPSBnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxzW2ludGVyS2V5K2ErJycrYisnJytjKycnK2QrJycrZSsnJytmKycnK2ddID0gdGhpcy5pbnRlckNhbGMoZm9ybSwgaW50ZXJwcik7Ly9bYSxiLGMsZCxlLGYsZ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJwciA9IFsge3ZhcjogdmFyc1swXSwgdmFsdWU6IG51bGx9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1sxXSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzJdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbM10sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1s0XSwgdmFsdWU6IG51bGx9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyOiB2YXJzWzVdLCB2YWx1ZTogbnVsbH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YXI6IHZhcnNbNl0sIHZhbHVlOiBudWxsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcjogdmFyc1s3XSwgdmFsdWU6IG51bGx9IF07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYT0wOyBhPDQ7IGErKykge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzBdLnZhbHVlID0gYTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYj0wOyBiPDQ7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclsxXS52YWx1ZSA9IGI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjPTA7IGM8NDsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwclsyXS52YWx1ZSA9IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZD0wOyBkPDQ7IGQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzNdLnZhbHVlID0gZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZT0wOyBlPDQ7IGUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcls0XS52YWx1ZSA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBmPTA7IGY8NDsgZisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcls1XS52YWx1ZSA9IGY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZz0wOyBnPDQ7IGcrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByWzZdLnZhbHVlID0gZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaD0wOyBoPDQ7IGgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcls3XS52YWx1ZSA9IGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxzW2ludGVyS2V5K2ErJycrYisnJytjKycnK2QrJycrZSsnJytmKycnK2crJycraF0gPSB0aGlzLmludGVyQ2FsYyhmb3JtLCBpbnRlcnByKTsvL1thLGIsYyxkLGUsZixnLGhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHM7XG4gICAgfTtcblxuICAgIHN0YXRpYyBpbnRlckNhbGMoZm9ybSwgaW50ZXJwcikge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWxjKCB0aGlzLmludGVycHJldChmb3JtLCBpbnRlcnByKSApO1xuICAgIH07XG5cbiAgICBzdGF0aWMgaW50ZXJwcmV0KGZvcm0sIGludGVycHIpIHtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGhhdmUgYSBqc29uIGZvcm0sIGlmIG5vdDogdHJ5IHRvIGNvbnZlcnRcbiAgICAgICAgaWYodHlwZW9mKGZvcm0pID09PSAnc3RyaW5nJykgZm9ybSA9IHRoaXMucGFyc2VMaW5lYXIoZm9ybSk7XG5cbiAgICAgICAgdmFyIGludGVycHJGb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmb3JtKSk7IC8vIGNsb25lIGZvcm1cblxuICAgICAgICB0aGlzLnRyYXZlcnNlRm9ybShpbnRlcnByRm9ybSwgZnVuY3Rpb24oZkJyYW5jaCkge1xuICAgICAgICAgICAgY29uc3Qgc3BhY2UgPSBmQnJhbmNoLnNwYWNlO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIHNwYWNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNwYWNlW2ldLnR5cGUgPT09ICd2YXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHYgaW4gaW50ZXJwcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwYWNlW2ldLnN5bWJvbCA9PT0gaW50ZXJwclt2XS52YXIpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNlW2ldLnZhbHVlID0gaW50ZXJwclt2XS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGludGVycHJGb3JtO1xuICAgIH07XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gRXh0ZW5zaW9ucyBvZiBGQ2FsY1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHN0YXRpYyByZWxfbG9naWMoZngsIGZ5KSB7XG4gICAgICAgIGlmKHR5cGVvZihmeCkgPT09IEFycmF5IHx8IHR5cGVvZihmeSkgPT09IEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwZXIucmVsX2xvZ2ljKGZ4LCBmeSk7XG4gICAgfTtcbiAgICBzdGF0aWMgcmVsKC4uLmZWYWxzKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5yZWwoLi4uZlZhbHMpO1xuICAgIH07XG5cbiAgICBzdGF0aWMgaW52X2xvZ2ljKGZ4KSB7XG4gICAgICAgIGlmKHR5cGVvZihmeCkgPT09IEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwZXIuaW52X2xvZ2ljKGZ4KTtcbiAgICB9O1xuICAgIHN0YXRpYyBpbnYoZngsIG4pIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmludihmeCwgbik7XG4gICAgfTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBDb252ZXJzaW9uc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHN0YXRpYyBwYXJzZUxpbmVhcihmb3JtdWxhKSB7XG4gICAgICAgIC8qIENvbnZlcnRzIGZyb20gcGFyYW50aGVzaXMgbm90YXRpb24gaW50byBKU09OIHN0cmluZyBhbmQgcGFyc2VzIGFzIEpTT04gb2JqZWN0ICovXG5cbiAgICAgICAgLy8gY29udmVydCB0aGUgZm9ybXVsYSBpbnRvIGEgSlNPTiBzdHJpbmdcbiAgICAgICAgdmFyIGpzb25TdHIgPSB0aGlzLmNvbnZGcm9tTGluZWFyKGZvcm11bGEpO1xuXG4gICAgICAgIC8vIHRyeSBwYXJzaW5nIHRoZSBzdHJpbmcgYXMgYSBKU09OIG9iamVjdFxuICAgICAgICB2YXIganNvbiA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UoanNvblN0cik7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ganNvbjtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udkZyb21MaW5lYXIoZm9ybXVsYSkge1xuICAgICAgICAvLyBjbGVhbiBmb3JtdWxhIHN0cmluZyBmcm9tIHdoaXRlc3BhY2VcbiAgICAgICAgdmFyIGNsZWFuRm9ybXVsYSA9IHRoaXMuY2xlYW5MaW5lYXIoZm9ybXVsYSk7XG4gICAgICAgIHZhciBhcnIgPSB0aGlzLmNvbnN0cnVjdEZyb21MaW5lYXIoY2xlYW5Gb3JtdWxhKTtcbiAgICAgICAgcmV0dXJuIGZsYXR0ZW4oYXJyKS5qb2luKCcnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xlYW5MaW5lYXIoZm9ybXVsYSkge1xuICAgICAgICB2YXIgY2xlYW5Gb3JtdWxhID0gJyc7XG4gICAgICAgIHZhciBpblF1b3RlID0gZmFsc2U7XG4gICAgICAgIHZhciBpblNsYXNoID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICh2YXIgaSBpbiBmb3JtdWxhKSB7XG4gICAgICAgICAgICB2YXIgY2hhciA9IGZvcm11bGFbaV07XG4gICAgICAgICAgICBpZih0eXBlb2YoY2hhcikgIT09IFwic3RyaW5nXCIpIGJyZWFrOyAvLyBwcm90b3R5cGUgaGFja3NcblxuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICdcIicgJiYgIWluU2xhc2gpIGluUXVvdGUgPSAhaW5RdW90ZTtcbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnLycgJiYgIWluUXVvdGUpIGluU2xhc2ggPSAhaW5TbGFzaDtcblxuICAgICAgICAgICAgLy8gb21pdCB3aGl0ZXNwYWNlIG91dHNpZGUgb2YgcXVvdGVzXG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluUXVvdGUgfHzCoGluU2xhc2gpIGNsZWFuRm9ybXVsYSArPSBjaGFyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBjbGVhbkZvcm11bGEgKz0gY2hhcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xlYW5Gb3JtdWxhO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb25zdHJ1Y3RGcm9tTGluZWFyKGZvcm11bGEpIHtcbiAgICAgICAgLyogQ29udmVydHMgZnJvbSBwYXJhbnRoZXNpcyBub3RhdGlvbiB0byBKU09OLWZvcm0gKi9cblxuICAgICAgICB2YXIgY29tcEFsbCA9IFtdO1xuICAgICAgICB2YXIgdW5tYXJrZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIGNoZWNrIGZvciBhbGwgZW5jbG9zaW5nIG91dGVyIGZvcm1cbiAgICAgICAgdmFyIGNvdW50RGVwdGggPSAwO1xuICAgICAgICB2YXIgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgaW5TbGFzaCA9IGZhbHNlO1xuICAgICAgICB2YXIgb3V0ZXJNYXJrQ291bnQgPSAwO1xuICAgICAgICBmb3IgKHZhciBpIGluIGZvcm11bGEpIHtcbiAgICAgICAgICAgIHZhciBjaGFyID0gZm9ybXVsYVtpXTtcbiAgICAgICAgICAgIGlmKHR5cGVvZihjaGFyKSAhPT0gXCJzdHJpbmdcIikgYnJlYWs7IC8vIHByb3RvdHlwZSBoYWNrc1xuXG4gICAgICAgICAgICBpZiAoIWluUXVvdGUgJiYgIWluU2xhc2gpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJygnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoY291bnREZXB0aCA9PSAwKSAmJiAoaSAhPSAwKSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50RGVwdGgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhciA9PT0gJyknKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50RGVwdGgtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50RGVwdGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gZm9ybXVsYS5sZW5ndGgtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVubWFya2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICdcIicgJiYgIWluU2xhc2gpIGluUXVvdGUgPSAhaW5RdW90ZTtcbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnLycgJiYgIWluUXVvdGUpIGluU2xhc2ggPSAhaW5TbGFzaDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBBbGwucHVzaCgnICB7Jyk7XG4gICAgICAgIGNvbXBBbGwucHVzaCgnXCJ0eXBlXCI6XCJmb3JtXCIsJyk7XG5cbiAgICAgICAgaWYgKHVubWFya2VkKSBjb21wQWxsLnB1c2goJ1widW5tYXJrZWRcIjp0cnVlLCcpO1xuICAgICAgICBlbHNlIGZvcm11bGEgPSBmb3JtdWxhLnNsaWNlKDEsZm9ybXVsYS5sZW5ndGgtMSk7XG5cbiAgICAgICAgY29tcEFsbC5wdXNoKCdcInNwYWNlXCI6WycpOyAgIFxuXG5cbiAgICAgICAgdmFyIHBhcnRzID0gW107XG4gICAgICAgIHBhcnRzLnB1c2goJycpO1xuXG4gICAgICAgIHZhciBjb3VudERlcHRoID0gMDtcbiAgICAgICAgdmFyIGluUXVvdGUgPSBmYWxzZTtcbiAgICAgICAgdmFyIGluU2xhc2ggPSBmYWxzZTtcblxuICAgICAgICB2YXIgb3B0Q2hhciA9ICfipLQnO1xuICAgICAgICB2YXIgbmVzdENoYXIgPSAn4qS1JztcblxuICAgICAgICBmb3IgKHZhciBpIGluIGZvcm11bGEpIHtcbiAgICAgICAgICAgIHZhciBjaGFyID0gZm9ybXVsYVtpXTtcbiAgICAgICAgICAgIHZhciBwcmV2Q2hhciA9IGZvcm11bGFbaS0xXTtcbiAgICAgICAgICAgIGlmKHR5cGVvZihjaGFyKSAhPT0gXCJzdHJpbmdcIikgYnJlYWs7IC8vIHByb3RvdHlwZSBoYWNrc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIWluUXVvdGUgJiYgIWluU2xhc2gpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJyknIHx8wqBjaGFyID09PSAnfScpIGNvdW50RGVwdGgtLTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJygnIHx8wqBjaGFyID09PSAneycpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudERlcHRoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmaXJzdCAoeCkgZG9lc24ndCBuZWVkIHRvIGJlIHNlcGFyYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiAwKSBwYXJ0cy5wdXNoKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb3VudERlcHRoKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAocHJldkNoYXIgPT09ICcpJyB8fMKgcHJldkNoYXIgPT09ICd9JykgJiYgIShjaGFyID09PSAnKScgfHzCoGNoYXIgPT09ICd9JykgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGNoYXIgZm9sbG93cyAoeCksIHNlcGFyYXRlOyBidXQgbm90IGlmIGl0IGlzIGFub3RoZXIgJyknXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudERlcHRoID09PSAwKSBwYXJ0cy5wdXNoKCcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gdW5pcXVlIHNlcGFyYXRpb24gY2hhcnMgZm9yIHJlLWVudHJ5IGZvcm1zIGZvciBlYXN5IHNwbGl0dGluZ1xuICAgICAgICAgICAgICAgIGlmIChjb3VudERlcHRoID09PSAxICYmIGNoYXIgPT09ICcsJykgY2hhciA9IG5lc3RDaGFyO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvdW50RGVwdGggPT09IDEgJiYgY2hhciA9PT0gJ3wnKSBjaGFyID0gb3B0Q2hhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnXCInICYmICFpblNsYXNoKSBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJy8nICYmICFpblF1b3RlKSBpblNsYXNoID0gIWluU2xhc2g7XG4gICAgICAgICAgICAvLyBhZGQgY2hhciB0byB0aGUgbGF0ZXN0IHB1c2hlZCBwYXJ0XG4gICAgICAgICAgICBwYXJ0c1twYXJ0cy5sZW5ndGgtMV0gKz0gY2hhcjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIGkgaW4gcGFydHMpIHtcblxuICAgICAgICAgICAgaWYgKHBhcnRzW2ldWzBdID09PSAnKCcpIHsgXG4gICAgICAgICAgICAgICAgLy8gaWYgcGFydCBpcyBmb3JtXG4gICAgICAgICAgICAgICAgLy8gcGFydHNbaV0gPSB0aGlzLmNvbnN0cnVjdEZyb21MaW5lYXIoIHBhcnRzW2ldLnNsaWNlKDEscGFydHNbaV0ubGVuZ3RoLTEpICk7XG4gICAgICAgICAgICAgICAgdmFyIGNvbXAgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyBjb21wLnB1c2goJ3snKTtcbiAgICAgICAgICAgICAgICBjb21wLnB1c2goIHRoaXMuY29uc3RydWN0RnJvbUxpbmVhcihwYXJ0c1tpXSkgKTtcbiAgICAgICAgICAgICAgICAvLyBjb21wLnB1c2goJ30nKTtcblxuICAgICAgICAgICAgICAgIHBhcnRzW2ldID0gY29tcC5zbGljZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGFydHNbaV1bMF0gPT09ICd7Jykge1xuICAgICAgICAgICAgICAgIC8vIGVsc2UgaWYgcGFydCBpcyByZS1lbnRyeSBmb3JtXG5cbiAgICAgICAgICAgICAgICB2YXIgY29tcCA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnICB7Jyk7XG4gICAgICAgICAgICAgICAgY29tcC5wdXNoKCdcInR5cGVcIjpcInJlRW50cnlcIiwnKTtcblxuICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gcGFydHNbaV0uc2xpY2UoMSxwYXJ0c1tpXS5sZW5ndGgtMSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcmVQYXJ0cyA9IGNvbnRlbnQuc3BsaXQob3B0Q2hhcik7XG4gICAgICAgICAgICAgICAgdmFyIHJlTmVzdGVkID0gcmVQYXJ0c1tyZVBhcnRzLmxlbmd0aC0xXS5zcGxpdChuZXN0Q2hhcik7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVOZXN0ZWQubGVuZ3RoICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wLnB1c2goJ1wicmVFdmVuXCI6XCJ1bmRlZmluZWRcIiwnKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVQYXJ0c1swXSA9PT0gJzJyJyB8fCByZVBhcnRzWzFdID09PSAnMnInIHx8IHJlUGFydHNbMl0gPT09ICcycicpIGNvbXAucHVzaCgnXCJyZUV2ZW5cIjp0cnVlLCcpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGNvbXAucHVzaCgnXCJyZUV2ZW5cIjpmYWxzZSwnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVQYXJ0c1swXSA9PT0gJ29wZW4nIHx8IHJlUGFydHNbMV0gPT09ICdvcGVuJyB8fCByZVBhcnRzWzJdID09PSAnb3BlbicpIGNvbXAucHVzaCgnXCJsYXN0T3BlblwiOnRydWUsJyk7XG4gICAgICAgICAgICAgICAgZWxzZSBjb21wLnB1c2goJ1wibGFzdE9wZW5cIjpmYWxzZSwnKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZVBhcnRzWzBdID09PSAnYWx0JyB8fCByZVBhcnRzWzFdID09PSAnYWx0JyB8fCByZVBhcnRzWzJdID09PSAnYWx0JykgY29tcC5wdXNoKCdcImFsdEludGVycHJldGF0aW9uXCI6dHJ1ZSwnKTtcbiAgICAgICAgICAgICAgICBlbHNlIGNvbXAucHVzaCgnXCJhbHRJbnRlcnByZXRhdGlvblwiOmZhbHNlLCcpO1xuXG4gICAgICAgICAgICAgICAgY29tcC5wdXNoKCdcIm5lc3RlZFwiOlsnKTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIG4gaW4gcmVOZXN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKCB0aGlzLmNvbnN0cnVjdEZyb21MaW5lYXIocmVOZXN0ZWRbbl0pICk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuIDwgcmVOZXN0ZWQubGVuZ3RoLTEpIGNvbXAucHVzaCgnLCcpO1xuICAgICAgICAgICAgICAgICAgICAvLyByZU5lc3RlZFtuXSA9IHRoaXMuY29uc3RydWN0RnJvbUxpbmVhciggcmVOZXN0ZWRbbl0gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb21wLnB1c2goJ119ICAnKTtcblxuICAgICAgICAgICAgICAgIHBhcnRzW2ldID0gY29tcC5zbGljZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZWxzZSB3ZSBoYXZlIHZhcmlhYmxlcy9jb25zdGFudHNcblxuICAgICAgICAgICAgICAgIHZhciBjb21wID0gW107XG5cbiAgICAgICAgICAgICAgICB2YXIgdmFycyA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBpblF1b3RlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFyIGluU2xhc2ggPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogaW4gcGFydHNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoYXIgPSBwYXJ0c1tpXVtqXTtcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mKGNoYXIpICE9PSBcInN0cmluZ1wiKSBicmVhazsgLy8gcHJvdG90eXBlIGhhY2tzXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICdcIicgJiYgIWluU2xhc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluUXVvdGUgPSAhaW5RdW90ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hcmsgcXVvdGVkIHN0cmluZyB3aXRoIGEgJ+KAlicgZm9yIGlkZW50aWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5RdW90ZSkgdmFycy5wdXNoKCfigJYnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyID09PSAnLycgJiYgIWluUXVvdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluU2xhc2ggPSAhaW5TbGFzaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hcmsgdW5jbGVhciBmb3JtIHdpdGggYSAn4oC9JyBmb3IgaWRlbnRpZmljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpblNsYXNoKSB2YXJzLnB1c2goJ+KAvScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpblF1b3RlICYmICFpblNsYXNoKSB2YXJzLnB1c2goJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcXVvdGUgY2hhcnMgaW5zaWRlIHNsYXNoZXMgd2lsbCBiZSBlc2NhcGVkIHRvIG5vdCBpbnRlcmZlcmUgd2l0aCBKU09OIHN5bnRheFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICdcIicgJiYgaW5TbGFzaCkgdmFyc1t2YXJzLmxlbmd0aC0xXSArPSAnXFxcXCcgKyBjaGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB2YXJzW3ZhcnMubGVuZ3RoLTFdICs9IGNoYXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciB2IGluIHZhcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mKHZhcnNbdl0pICE9PSBcInN0cmluZ1wiKSBicmVhazsgLy8gcHJvdG90eXBlIGhhY2tzXG5cbiAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKCcgIHsnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTih2YXJzW3ZdKSAmJiB2YXJzW3ZdLmxlbmd0aCA+IDAgXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YXJzW3ZdWzBdICE9PSAn4oC9JyAmJiB2YXJzW3ZdWzBdICE9PSAn4oCWJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKCdcInR5cGVcIjpcImNvbnN0XCIsJyk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKCdcInZhbHVlXCI6Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wLnB1c2godmFyc1t2XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodmFyc1t2XVswXSA9PT0gJ+KAvScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnXCJ0eXBlXCI6XCJ1bmNsZWFyXCIsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wLnB1c2goJ1widmFsdWVcIjoyLCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKCdcInN5bWJvbFwiOicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKCdcIicrdmFyc1t2XS5zbGljZSgxKSsnXCInKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnXCJ0eXBlXCI6XCJ2YXJcIiwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAucHVzaCgnXCJ2YWx1ZVwiOlwiKlwiLCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKCdcInN5bWJvbFwiOicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodmFyc1t2XVswXSA9PT0gJ+KAlicpIGNvbXAucHVzaCgnXCInK3ZhcnNbdl0uc2xpY2UoMSkrJ1wiJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNvbXAucHVzaCgnXCInK3ZhcnNbdl0rJ1wiJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29tcC5wdXNoKCd9ICAnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYgPCB2YXJzLmxlbmd0aC0xKSBjb21wLnB1c2goJywnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwYXJ0c1tpXSA9IGNvbXAuc2xpY2UoKTtcbiAgICAgICAgICAgIH0gLy8gZW5kIGVsc2VcblxuICAgICAgICAgICAgY29tcEFsbC5wdXNoKHBhcnRzW2ldKTtcbiAgICAgICAgICAgIGlmIChpIDwgcGFydHMubGVuZ3RoLTEpIGNvbXBBbGwucHVzaCgnLCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcEFsbC5wdXNoKCddfSAgJyk7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBBbGw7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFJlcHJlc2VudGF0aW9uXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljIGpzb25TdHJpbmcoZm9ybSkge1xuICAgICAgICAvKiByZXR1cm5zIGpzb24tcmVwcmVzZW50YXRpb24gb2YgdGhlIHNwZWNpZmllZCBGT1JNICovXG4gICAgICAgIGlmKHR5cGVvZihmb3JtKSA9PT0gJ3N0cmluZycpIGZvcm0gPSB0aGlzLnBhcnNlTGluZWFyKGZvcm0pO1xuICAgIFxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZm9ybSwgdW5kZWZpbmVkLCAyKTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gSGVscGVyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljIGdldFZhcmlhYmxlcyhmb3JtKSB7XG4gICAgICAgIC8qIHBhcnNlcyBhIEZPUk0gdG8gZ2V0IGFsbCBvZiBpdHMgdmFyaWFibGVzIGFuZCBzb3J0cyB0aGVtIHVzaW5nIHRoZSBKUyBBcnJheS5zb3J0KCkgbWV0aG9kXG4gICAgICAgIHdoaWNoIHNvcnRzIGJ5IGNvbXBhcmluZyBVVEYtMTYgY29kZSB1bml0IHZhbHVlcy5cbiAgICAgICAgTm90ZTogQnkgY29udmVudGlvbiwgdGhlIHByb2Nlc3Mgb2YgZGVyaXZpbmcgZm9ybUROQSBmcm9tIGEgZ2l2ZW4gRk9STSBpbnZvbHZlcyBvcmRlcmluZyBvZiB0aGUgZXh0cmFjdGVkIHZhcmlhYmxlcyBieSB0aGlzIHNhbWUgc29ydGluZyBtZXRob2QsIGlmIG5vIHNwZWNpYWwgb3JkZXJpbmcgaXMgc3BlY2lmaWVkLiAqL1xuICAgICAgICBpZih0eXBlb2YoZm9ybSkgPT09ICdzdHJpbmcnKSBmb3JtID0gdGhpcy5wYXJzZUxpbmVhcihmb3JtKTtcblxuICAgICAgICB2YXIgdmFycyA9IFtdO1xuICAgICAgICB0aGlzLnRyYXZlcnNlRm9ybShmb3JtLCBmdW5jdGlvbihmQnJhbmNoKSB7XG4gICAgICAgICAgICBjb25zdCBzcGFjZSA9IGZCcmFuY2guc3BhY2U7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gc3BhY2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3BhY2VbaV0udHlwZSA9PT0gJ3ZhcicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmNsdWRlKHZhcnMsIHNwYWNlW2ldLnN5bWJvbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcnMucHVzaChzcGFjZVtpXS5zeW1ib2wpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZhcnMuc29ydCgpO1xuICAgIH07XG5cbiAgICBzdGF0aWMgdHJhdmVyc2VGb3JtKGZvcm0sZnVuYykge1xuICAgICAgICAvKiB0cmF2ZXJzZXMgb25seSBmb3JtLXR5cGVzIGluIGEganNvbiB0cmVlICovXG4gICAgICAgIGxldCBicmVha1RyYXYgPSBmdW5jLmFwcGx5KHRoaXMsW2Zvcm1dKTtcblxuICAgICAgICBpZiAoZm9ybS5zcGFjZSkgeyAvLyBmb3JtLnR5cGU6ICdmb3JtJ1xuICAgICAgICAgICAgaWYgKGZvcm0uc3BhY2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gZm9ybS5zcGFjZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybS5zcGFjZVtpXS50eXBlID09PSAnZm9ybScgfHwgZm9ybS5zcGFjZVtpXS50eXBlID09PSAncmVFbnRyeScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBicmVha0xvb3AgPSB0aGlzLnRyYXZlcnNlRm9ybShmb3JtLnNwYWNlW2ldLGZ1bmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJyZWFrTG9vcCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZm9ybS5uZXN0ZWQpIHsgLy8gZm9ybS50eXBlOiAncmVFbnRyeSdcbiAgICAgICAgICAgIGlmIChmb3JtLm5lc3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBmb3JtLm5lc3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYnJlYWtMb29wID0gdGhpcy50cmF2ZXJzZUZvcm0oZm9ybS5uZXN0ZWRbaV0sZnVuYyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChicmVha0xvb3ApIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKCdFUlJPUjogTm90IGEgZm9ybSEnKTtcblxuICAgICAgICByZXR1cm4gYnJlYWtUcmF2O1xuICAgIH07XG5cbiAgICAvKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgQWRkaXRpb25zIDAxLzIwMjAgZnJvbTpcbiAgICAgICAgaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0Bmb3Jtc2FuZGxpbmVzL2Zvcm1mb3JtLXRvb2xib3ggXG4gICAgKi9cblxuICAgIHN0YXRpYyBnZXRUb3RhbFZhcnMgKGZvcm1TdHIpIHtcbiAgICAgICAgLyogZ2V0cyB0b3RhbCB2YXJpYWJsZSBudW1iZXIgb2YgYSBGT1JNICovXG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhcmlhYmxlcyhmb3JtU3RyLnN1YnN0cigpKS5sZW5ndGg7XG4gICAgfTtcblxuICAgIHN0YXRpYyByZU9yZGVyVmFycyAoZm9ybXVsYSwgdmFyb3JkZXIpIHtcbiAgICAgICAgLyogcmUtb3JkZXJzIHZhcmlhYmxlcyBpbiBhIGZvcm11bGEgdG8gbWF0Y2ggYW4gb3JkZXJpbmcgcGF0dGVybiAqL1xuICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVWYXJzKCB0aGlzLmVuY29kZVZhcnMoZm9ybXVsYSwgdmFyb3JkZXIpICk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWNvZGVWYXJzIChlbmNTdHIsIGRlY29kZVBhdHRlcm49dW5kZWZpbmVkKSB7XG4gICAgICAvKiBkZWNvZGVzIHZhcmlhYmxlcyBpbiBhbiBlbmNvZGVkIGZvcm11bGEgc3RyaW5nIHdpdGggYW4gb3B0aW9uYWwgZGVjb2RlIHBhdHRlcm4gKi9cbiAgICAgIGxldCByZXZDb2RlID0gVkFSQ09ERV9SRVY7XG4gICAgICBpZiAoZGVjb2RlUGF0dGVybikge1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoVkFSQ09ERV9SRVYpO1xuICAgICAgICBjb25zdCB2YXJQYXJ0ID0ga2V5cy5zbGljZSgwLGRlY29kZVBhdHRlcm4ubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgbW9kUGFydCA9IGtleXMuc2xpY2UoLTMpO1xuICAgICAgICBcbiAgICAgICAgcmV2Q29kZSA9IHZhclBhcnQuY29uY2F0KG1vZFBhcnQpLnJlZHVjZSggKGNvZGUsa2V5LGkpID0+ICh7Li4uY29kZSwgXG4gICAgICAgICAgICBba2V5XTogaSA8IGRlY29kZVBhdHRlcm4ubGVuZ3RoID8gZGVjb2RlUGF0dGVybltpXSA6IFZBUkNPREVfUkVWW2tleV0sIH0pLHt9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVuY1N0ci5zcGxpdCgnJylcbiAgICAgICAgICAgICAgICAubWFwKGMgPT4gT2JqZWN0LmtleXMocmV2Q29kZSkuaW5kZXhPZihjKSA+IC0xID8gcmV2Q29kZVtjXSA6IGMpLmpvaW4oJycpO1xuICAgIH07XG5cbiAgICBzdGF0aWMgZW5jb2RlVmFycyAoZm9ybXVsYSwgdmFyb3JkZXI9dW5kZWZpbmVkKSB7XG4gICAgICAvKiBlbmNvZGVzIHZhcmlhYmxlcyBpbiBhIGZvcm11bGEgc3RyaW5nIGFjY29yZGluZyB0byBhIGdpdmVuIHZhcmlhYmxlIG9yZGVyIChhcnJheSkgKi9cbiAgICAgIGlmICghdmFyb3JkZXIpIHZhcm9yZGVyID0gdGhpcy5nZXRWYXJpYWJsZXMoZm9ybXVsYSk7XG4gICAgICBcbiAgICAgIGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHJpbmcpIHsgLy8gdGh4IHRvIENvb2xBSjg2OiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNjk2OTQ4NlxuICAgICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyk7IC8vICQmIG1lYW5zIHRoZSB3aG9sZSBtYXRjaGVkIHN0cmluZ1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zdCBmaXhQdG4gPSB7YWx0OiAnYWx0KD89XFx8KScsIHJFdmVuOiAnMnIoPz1cXHwpJywgck9kZDogJzJyKzEoPz1cXHwpJ307XG4gICAgICBjb25zdCBwdG4gPSB2ID0+IHtcbiAgICAgICAgaWYgKHYubGVuZ3RoID4gMSkgcmV0dXJuIGBcXFwiJHtlc2NhcGVSZWdFeHAodil9XFxcImA7IC8vICg/PD1cXFwiKSgke3Z9KSg/PVxcXCIpXG4gICAgICAgIHJldHVybiBgJHtlc2NhcGVSZWdFeHAodil9YDtcbiAgICAgIH07XG4gICAgICBcbiAgICAgIHJldHVybiB2YXJvcmRlclxuICAgICAgICAucmVkdWNlKChlbmNTdHIsdixpKSA9PiBlbmNTdHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKGZpeFB0bi5hbHQsICdnJyksVkFSQ09ERVsnYWx0J10gKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoZml4UHRuLnJFdmVuLCAnZycpLFZBUkNPREVbJzJyJ10pXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cChmaXhQdG4uck9kZCwgJ2cnKSxWQVJDT0RFWycycisxJ10pXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cChwdG4odiksICdnJyksKE9iamVjdC5rZXlzKFZBUkNPREVfUkVWKVtpXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICwgZm9ybXVsYSApO1xuICAgIH07XG5cblxuICAgIC8qICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBOZXcgQWRkaXRpb25zIDAxLzIwMjA6XG4gICAgKi9cblxuICAgIHN0YXRpYyBtYXRjaERlZmF1bHRWYXJPcmRlciAodmFyTGlzdCkge1xuICAgICAgICAvKiBIZWxwZXIgdG8gbWF0Y2ggZGVmYXVsdCBvcmRlcmluZ3MgZm9yIGNhbGN1bGF0aW9uIGFuZCB2bWFwcyAqL1xuICAgICAgICBpZiAodmFyTGlzdC5qb2luKCcnKSA9PT0gJ0VMUicpIHJldHVybiBbJ0wnLCdFJywnUiddO1xuICAgICAgICBpZiAodmFyTGlzdC5qb2luKCcnKSA9PT0gJystTFInKSByZXR1cm4gWyctJywnTCcsJ1InLCcrJ107XG4gICAgICAgIGlmICh2YXJMaXN0LmpvaW4oJycpID09PSAnKy1FTFInKSByZXR1cm4gWyctJywnTCcsJ0UnLCdSJywnKyddO1xuICAgICAgICByZXR1cm4gdmFyTGlzdDtcbiAgICB9XG5cbn0iLCJpbXBvcnQgRkZvcm0gZnJvbSAnLi9mZm9ybSc7XG5pbXBvcnQgRDNHcmFwaCwgeyBzYXZlIH0gZnJvbSAnLi4vbW9kdWxlcy9kMy1ncmFwaCc7XG5cbmxldCBnMSA9IHt9OyBsZXQgZzIgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkdyYXBoIGV4dGVuZHMgRkZvcm0ge1xuICAgIC8qXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgJ2dyYXBoJyBtb2R1bGUgZm9yIGZvcm1mb3JtIChjKSAyMDE4IFBldGVyIEhvZm1hbm5cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKi9cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyB0aGlzLmdyYXBocyA9IFtdO1xuICB9O1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gRXh0ZW5zaW9ucyBvZiBGRm9ybVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgc3RhdGljIGpzb25TdHJpbmcoZm9ybSkge1xuICAgIGNvbnN0IGV4cGFuZGVkRm9ybSA9IHRoaXMuZXhwYW5kX3JlRW50cnkoZm9ybSk7XG4gICAgcmV0dXJuIHN1cGVyLmpzb25TdHJpbmcoZXhwYW5kZWRGb3JtKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gR3JhcGggcmVwcmVzZW50YXRpb25cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHN0YXRpYyBjcmVhdGVHcmFwaChncmFwaFR5cGUsIF9mb3JtLCBvcHRpb25zKSB7XG4gICAgY29uc3QgYWRkRW1wdHlSZUNoaWxkU3BhY2UgPSAoZ3JhcGhUeXBlID09PSAncGFjaycpO1xuXG4gICAgLy8gZXhwYW5kIHJlLWVudHJ5IHN0cnVjdHVyZSB0byBiZSB1c2FibGUgZm9yIGdyYXBoc1xuICAgIGNvbnN0IGZvcm0gPSB0aGlzLmV4cGFuZF9yZUVudHJ5KF9mb3JtLCB7YWRkRW1wdHlSZUNoaWxkU3BhY2U6IGFkZEVtcHR5UmVDaGlsZFNwYWNlfSk7XG4gICAgLy8gaW5pdGlhbGl6ZSB0aGUgZ3JhcGhcblxuICAgIGNvbnN0IGdyYXBoID0gbmV3IEQzR3JhcGgoZ3JhcGhUeXBlLCBmb3JtLCBvcHRpb25zKTtcbiAgICBncmFwaC5mb3JtdWxhID0gX2Zvcm07XG4gICAgLy8gZ3JhcGhzLnB1c2goIG5ldyBEM0dyYXBoKGdyYXBoVHlwZSwgZm9ybSwgb3B0aW9ucykgKTtcblxuICAgIHJldHVybiBncmFwaDtcbiAgfVxuXG4gIHN0YXRpYyBzYXZlR3JhcGgoZm9ybWF0LCBzdmcsIG5hbWUsIHNjYWxlKSB7XG4gICAgc2F2ZShmb3JtYXQsIHN2ZywgbmFtZSwgc2NhbGUpO1xuICB9XG5cbiAgc3RhdGljIGNvbnN0cnVjdE5lc3RlZChyZUZvcm0sIG9wdGlvbnM9e30pIHtcbiAgICAvKiBDb25zdHJ1Y3RzIGEgKHJlYWwpIG5lc3RlZCBmb3JtIHN0cnVjdHVyZSBmcm9tIHRoZSAubmVzdGVkIGFycmF5IG9mIHRoZSBvcmlnaW5hbCByZS1lbnRyeSBqc29uICovXG4gICAgbGV0IHNwYWNlID0gcmVGb3JtLnNwYWNlID0gW107XG4gICAgcmVGb3JtLm5lc3RlZC5yZXZlcnNlKCk7IC8vIE1VU1QgYmUgcmV2ZXJzZWQsIGJlY2F1c2Ugbm90YXRpb246IHtkZWVwZXN0LCAuLi4sIHNoYWxsb3dlc3R9XG5cbiAgICBmb3IobGV0IGkgaW4gcmVGb3JtLm5lc3RlZCkge1xuICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgIC8vIHByZXBlbmQgdGhlIHJlRW50cnkgbmVzdGluZyBiZWZvcmUgZXZlcnl0aGluZyBlbHNlIGluIHRoZSBzcGFjZVxuICAgICAgICBzcGFjZS51bnNoaWZ0KCB7dHlwZTogJ2Zvcm0nLCByZUNoaWxkOiB0cnVlLCBzcGFjZTogW119ICk7IC8vIHNwYWNlLnB1c2ggPC0gb3JkZXIgbGFzdFxuICAgICAgICBjb25zdCBuZXN0ZWRGb3JtID0gc3BhY2VbMF07IC8vIHNwYWNlW3NwYWNlLmxlbmd0aC0xXSA8LSBvcmRlciBsYXN0XG4gICAgICAgIFxuICAgICAgICBpZighcmVGb3JtLm5lc3RlZFtpXS51bm1hcmtlZCkgbmVzdGVkRm9ybS5zcGFjZS5wdXNoKHJlRm9ybS5uZXN0ZWRbaV0pO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvLyBuZXN0ZWRGb3JtLnNwYWNlLnB1c2gocmVGb3JtLm5lc3RlZFtpXSk7XG4gICAgICAgICAgbmVzdGVkRm9ybS5zcGFjZS5wdXNoKC4uLnJlRm9ybS5uZXN0ZWRbaV0uc3BhY2UpOyAvLyBwdXNoKHJlRm9ybS5uZXN0ZWRbaV0pIGZvciBncm91cGluZ1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhY2UgPSBuZXN0ZWRGb3JtLnNwYWNlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmKCFyZUZvcm0ubmVzdGVkW2ldLnVubWFya2VkKSBzcGFjZS5wdXNoKHJlRm9ybS5uZXN0ZWRbaV0pO1xuICAgICAgICAvLyBlbHNlIHNwYWNlLnB1c2gocmVGb3JtLm5lc3RlZFtpXSk7XG4gICAgICAgIGVsc2Ugc3BhY2UucHVzaCguLi5yZUZvcm0ubmVzdGVkW2ldLnNwYWNlKTsgLy8gcHVzaChyZUZvcm0ubmVzdGVkW2ldKSBmb3IgZ3JvdXBpbmdcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuYWRkRW1wdHlSZUNoaWxkU3BhY2UgJiYgKHNwYWNlLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgc3BhY2UucHVzaCgge3R5cGU6ICdzcGFjZSd9ICk7XG4gICAgICB9XG4gICAgfSAgICBcblxuICAgIC8vIHdlIG5lZWQgdG8gYWRkIGEgcG9pbnQgb2YgcmUtZW50cnkgdG8gdGhlIGxhc3QgbmVzdGVkIGZvcm1cbiAgICAvLyBmaXJzdCwgbGV0cyBhc3N1bWUgdGhpcyBpcyB0aGUgZm9ybSBpdHNlbGZcbiAgICBsZXQgbGFzdE5lc3RlZCA9IHJlRm9ybTtcbiAgICBcbiAgICBpZihyZUZvcm0uc3BhY2UubGVuZ3RoID4gMCkge1xuICAgICAgLy8gdGhlbiBsb29wIHVudGlsIHRoZSBsYXN0IHJlQ2hpbGQgaXMgZm91bmQgYW5kIG1ha2UgdGhpcyBvdXIgbGFzdCBuZXN0ZWQgZm9ybVxuICAgICAgXG4gICAgICB3aGlsZSAobGFzdE5lc3RlZC5zcGFjZVswXS5oYXNPd25Qcm9wZXJ0eSgncmVDaGlsZCcpKSB7ICAgICAgICBcbiAgICAgICAgbGFzdE5lc3RlZCA9IGxhc3ROZXN0ZWQuc3BhY2VbMF07XG4gICAgICAgIGlmIChsYXN0TmVzdGVkLnNwYWNlLmxlbmd0aCA8IDEpIGJyZWFrOyAvLyBwcmV2ZW50IGVycm9ycyB3aGVuIG5vdGhpbmcgaXMgZm91bmRcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZm9yIG9wZW4gcmUtZW50cmllcywgd2UgbmVlZCB0byBhZGQgYW5vdGhlciBuZXN0aW5nIChzZWUgdUZPUk0gaUZPUk0gZm9yIHJlZmVyZW5jZSlcbiAgICBpZihyZUZvcm0ubGFzdE9wZW4pIHtcbiAgICAgIGxhc3ROZXN0ZWQuc3BhY2UudW5zaGlmdCgge3R5cGU6ICdmb3JtJywgcmVDaGlsZDogdHJ1ZSwgc3BhY2U6IFtdfSApO1xuICAgICAgLy8gdGhlbiBhZGQgdGhlIHJlLWVudHJ5IHBvaW50IHRvIGVpdGhlciBzcGFjZVxuICAgICAgbGFzdE5lc3RlZC5zcGFjZVswXS5zcGFjZS51bnNoaWZ0KCB7dHlwZTogJ3JlRW50cnlQb2ludCd9ICk7XG4gICAgfVxuICAgIGVsc2UgbGFzdE5lc3RlZC5zcGFjZS51bnNoaWZ0KCB7dHlwZTogJ3JlRW50cnlQb2ludCd9ICk7XG5cbiAgICAvLyBsYXN0LCBkZWxldGUgdGhlIG5lc3RlZCBzdHJ1Y3R1cmUsIHdlIGRvbid0IG5lZWQgaXQgYW55bW9yZVxuICAgIGRlbGV0ZSByZUZvcm0ubmVzdGVkO1xuICAgIHJldHVybiByZUZvcm07XG4gIH1cblxuICBzdGF0aWMgZXhwYW5kX3JlRW50cnkoX2Zvcm0sIG9wdGlvbnM9e30pIHtcbiAgICBpZih0eXBlb2YoX2Zvcm0pICE9PSAnc3RyaW5nJykgX2Zvcm0gPSBKU09OLnN0cmluZ2lmeShfZm9ybSk7XG4gICAgY29uc3QgcmVmRm9ybSA9IHRoaXMucGFyc2VMaW5lYXIoX2Zvcm0pO1xuICAgIGxldCB0YXJnZXRGb3JtID0gdGhpcy5wYXJzZUxpbmVhcihfZm9ybSk7XG5cbiAgICAvLyB3ZSBtdXN0IGtlZXAgYSBydW5uaW5nIGluZGV4IHRvIG5vdCBjb25mdXNlIGlkZW50aWNhbCBmb3JtcyB3aGlsZSByZWNvbnN0cnVjdGluZyB0aGUgcmVFbnRyaWVzXG4gICAgLy8gTm90ZTogdGhpcyBzaG91bGQgYmUgZG9uZSBtb3JlIGVmZmljaWVudGx5IGluIHRoZSBmdXR1cmVcbiAgICBsZXQgcnVubmluZ0luZGV4ID0gMDtcbiAgICB0aGlzLnRyYXZlcnNlRm9ybShyZWZGb3JtLCBmdW5jdGlvbihicmFuY2gpIHsgYnJhbmNoLnJ1bm5pbmdJbmRleCA9IHJ1bm5pbmdJbmRleCwgcnVubmluZ0luZGV4Kys7IH0pO1xuICAgIHJ1bm5pbmdJbmRleCA9IDA7XG4gICAgdGhpcy50cmF2ZXJzZUZvcm0odGFyZ2V0Rm9ybSwgZnVuY3Rpb24oYnJhbmNoKSB7IGJyYW5jaC5ydW5uaW5nSW5kZXggPSBydW5uaW5nSW5kZXgsIHJ1bm5pbmdJbmRleCsrOyB9KTtcblxuICAgIHRoaXMudHJhdmVyc2VGb3JtKHJlZkZvcm0sIGZ1bmN0aW9uKHJlZkJyYW5jaCkge1xuXG4gICAgICBpZihyZWZCcmFuY2gudHlwZSA9PT0gJ3JlRW50cnknKSB7XG4gICAgICAgIHRoaXMudHJhdmVyc2VGb3JtKHRhcmdldEZvcm0sIGZ1bmN0aW9uKHRhcmdldEJyYW5jaCkge1xuXG4gICAgICAgICAgaWYoIChKU09OLnN0cmluZ2lmeShyZWZCcmFuY2gpID09PSBKU09OLnN0cmluZ2lmeSh0YXJnZXRCcmFuY2gpKSAmJiBcbiAgICAgICAgICAgICAgKHJlZkJyYW5jaC5ydW5uaW5nSW5kZXggPT09ICh0YXJnZXRCcmFuY2guaGFzT3duUHJvcGVydHkoJ3J1bm5pbmdJbmRleCcpID8gdGFyZ2V0QnJhbmNoLnJ1bm5pbmdJbmRleCA6IG51bGwpKSApIHtcbiAgICAgICAgICAgIHRhcmdldEJyYW5jaCA9IHRoaXMuY29uc3RydWN0TmVzdGVkKHRhcmdldEJyYW5jaCwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gZGVsZXRlIHJ1bm5pbmcgaW5kZXggcHJvcGVydHlcbiAgICB0aGlzLnRyYXZlcnNlRm9ybSh0YXJnZXRGb3JtLCBmdW5jdGlvbihicmFuY2gpIHsgZGVsZXRlIGJyYW5jaC5ydW5uaW5nSW5kZXg7IH0pO1xuXG4gICAgcmV0dXJuIHRhcmdldEZvcm07XG4gIH1cblxuXG59IiwiaW1wb3J0IGNhbGMgZnJvbSAnLi9jb3JlL2ZjYWxjJztcbmltcG9ydCBmb3JtIGZyb20gJy4vY29yZS9mZm9ybSc7XG5pbXBvcnQgZ3JhcGggZnJvbSAnLi9jb3JlL2ZncmFwaCc7XG5pbXBvcnQgZG5hIGZyb20gJy4vY29yZS9mZG5hJztcblxuLy8gZXhwb3J0IHtkZWZhdWx0IGFzIGNhbGN9IGZyb20gJy4vY29yZS9mY2FsYyc7XG4vLyBleHBvcnQge2RlZmF1bHQgYXMgZm9ybX0gZnJvbSAnLi9jb3JlL2Zmb3JtJztcbi8vIGV4cG9ydCB7ZGVmYXVsdCBhcyBncmFwaH0gZnJvbSAnLi9jb3JlL2ZncmFwaCc7XG5cbmV4cG9ydCBkZWZhdWx0IHsgY2FsYywgZm9ybSwgZ3JhcGgsIGRuYSB9OyIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCBib3htb2RlbEQzIGZyb20gJ2JveG1vZGVsLWxheW91dC1mb3ItZDMnO1xuXG5pbXBvcnQgeyBzYXZlU3ZnLCBzYXZlSW1nLCBwYWQsIGdldFRpbWVzdGFtcCB9IGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXInO1xuaW1wb3J0IGNoYXJ0RmFjdG9yeSwgeyBmaXRDaGFydCwgdGV4dFNpemUsIHRleHRTdWJzY3JpcHQsIGNpcmNsZUxhYmVsIH0gZnJvbSAnLi4vLi4vY29tbW9uL2QzLWhlbHBlcic7XG5cbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL2QzLXN0eWxlcy5qcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRDNHcmFwaCB7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXphdGlvbiBTZXR1cFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb25zdHJ1Y3RvcihncmFwaFR5cGUsIGRhdGEsIG9wdHMsIC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gY3JlYXRlIGJhc2ljIHN2Zy1zdHJ1Y3R1cmUgZnJvbSBjaGFydEZhY3RvcnkgYW5kIG1lcmdlIG9wdGlvbnMgd2l0aCBjb25maWd1cmF0aW9uXG4gICAgICAgIGNvbnN0IHByb3RvID0gY2hhcnRGYWN0b3J5KCB7IFxuICAgICAgICAgICAgLi4ueyBtYXJnaW46IHsgbGVmdDogNTAsIHJpZ2h0OiA1MCwgdG9wOiA1MCwgYm90dG9tOiA1MCB9LCBcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB7IGxlZnQ6IDEwLCByaWdodDogMTAsIHRvcDogMTAsIGJvdHRvbTogMTAgfSxcbiAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiB7IGxlZnQ6IDAsIHJpZ2h0OiAwLCB0b3A6IDAsIGJvdHRvbTogMCB9LFxuICAgICAgICAgICAgICAgIHN0eWxlQ2xhc3M6ICdiYXNpYycgfSxcbiAgICAgICAgICAgIC4uLm9wdHNcbiAgICAgICAgfSApO1xuXG4gICAgICAgIC8vIG1lcmdlIHRoaXMgZ3JhcGggd2l0aCB0aGUgY2hhcnQgc3RydWN0dXJlXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgcHJvdG8pO1xuICAgICAgICAvLyBjYWxjdWxhdGUgaW5uZXIgZGltZW5zaW9ucyBvZiB0aGUgc3ZnLWNoYXJ0XG4gICAgICAgIHRoaXMuaW5uZXJIZWlnaHQgPSB0aGlzLmhlaWdodCAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbSAtIHRoaXMucGFkZGluZy50b3AgLSB0aGlzLnBhZGRpbmcuYm90dG9tO1xuICAgICAgICB0aGlzLmlubmVyV2lkdGggPSB0aGlzLndpZHRoIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0IC0gdGhpcy5wYWRkaW5nLmxlZnQgLSB0aGlzLnBhZGRpbmcucmlnaHQ7XG5cbiAgICAgICAgLy8gY2FsbCB0aGUgYXBwcm9wcmlhdGUgbWV0aG9kIHRvIGJ1aWxkIHRoZSBncmFwaFxuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yW2dyYXBoVHlwZV0uY2FsbCh0aGlzLCBkYXRhLCAuLi5hcmdzKTtcbiAgICB9XG5cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gICAgICAgICAgICAgICAgRGVwdGggVHJlZSB2aXN1YWxpemF0aW9uXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHN0YXRpYyB0cmVlKGRhdGEpIHtcbiAgICAgICAgY29uc3QgY2hhcnQgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgLy8gY3JlYXRlIGEgZDMtaGllcmFyY2h5IGZyb20gb3VyIGZvcm0tanNvblxuICAgICAgICBjb25zdCByb290ID0gZDMuaGllcmFyY2h5KGRhdGEsIGQgPT4gZC5zcGFjZSk7XG5cbiAgICAgICAgLy8gc2V0IHVwIGRlc2lnbiB2YXJpYWJsZXNcbiAgICAgICAgY29uc3QgZGVzaWduID0gc3R5bGVzLnRyZWVbdGhpcy5zdHlsZUNsYXNzXTtcbiAgICAgICAgY29uc3QgW25vZGVTaXplLCBub2RlU2VwXSA9IFtkZXNpZ24ubm9kZVNpemUsIGRlc2lnbi5ub2RlU2VwYXJhdGlvbl07XG4gICAgICAgIGNvbnN0IFtmb250U2l6ZSwgZm9udF0gPSBbZGVzaWduLmZvbnQuc2l6ZSwgZGVzaWduLmZvbnQuZmFtaWx5XTtcblxuICAgICAgICB0aGlzLnBhZGRpbmcgPSB7IGxlZnQ6IDEwLCByaWdodDogMTAsIHRvcDogMTAsIGJvdHRvbTogMTAgfTtcblxuICAgICAgICByb290LmR4ID0gbm9kZVNpemUudyArIG5vZGVTZXAuaHo7XG4gICAgICAgIHJvb3QuZHkgPSB0aGlzLndpZHRoIC8gKHJvb3QuaGVpZ2h0ICsgMSk7XG5cbiAgICAgICAgLy8gZGVmaW5lIHRyZWUgbGF5b3V0XG4gICAgICAgIGNvbnN0IGxheW91dCA9IGQzLnRyZWUoKVxuICAgICAgICAgICAgLm5vZGVTaXplKFtcbiAgICAgICAgICAgICAgICByb290LmR4LFxuICAgICAgICAgICAgICAgIHJvb3QuZHlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAuc2VwYXJhdGlvbigoYSxiKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEucGFyZW50ID09IGIucGFyZW50ID8gMSA6IDI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdHJlZSA9IGxheW91dChyb290KTtcblxuICAgICAgICAvLyBjb21wdXRlIG1pbi9tYXggeC12YWx1ZXNcbiAgICAgICAgbGV0IHgwID0gSW5maW5pdHk7XG4gICAgICAgIGxldCB4MSA9IC14MDtcbiAgICAgICAgdHJlZS5lYWNoKGQgPT4ge1xuICAgICAgICAgICAgaWYgKGQueCA+IHgxKSB4MSA9IGQueDtcbiAgICAgICAgICAgIGlmIChkLnggPCB4MCkgeDAgPSBkLng7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjb21wdXRlIG5ldyBoZWlnaHQgYmFzZWQgb24gdGhlIGRpZmZlcmVuY2Ugb2YgbWluL21heCB4LXZhbHVlcyBvZiB0cmVlIG5vZGVzICsgdHdpY2UgdGhlIHBhZGRpbmdcbiAgICAgICAgY29uc3Qgcm9vdFVubWFya2VkID0gcm9vdC5kYXRhLnVubWFya2VkO1xuICAgICAgICBjb25zdCB0aWNrcGFkZGluZyA9IG5vZGVTaXplLmgqMS44O1xuICAgICAgICBjb25zdCBheGlzSGVpZ2h0ID0gdGlja3BhZGRpbmc7IC8vMzA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gKHgxIC0geDApICsgdGhpcy5wYWRkaW5nLnRvcCoyICsgbm9kZVNpemUuaCsyICsgYXhpc0hlaWdodDtcblxuICAgICAgICAvLyBzZXR1cCBzdmcgY29udGFpbmVyXG4gICAgICAgIHRoaXMuc3ZnXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCB0aGlzLndpZHRoKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgc3R5bGVzLmNsZWFyRGVmYXVsdHModGhpcy5zdmcpOyAvLyBjbGVhciBkZWZhdWx0IHN0eWxlcyBmb3Igc3ZnIGV4cG9ydFxuXG4gICAgICAgIC8vIHNldHVwIGJhc2ljIGNoYXJ0IHN0cnVjdHVyZVxuICAgICAgICBjaGFydFxuICAgICAgICAgICAgLmNsYXNzZWQoJ2dyYXBoLXRyZWUnLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dGhpcy5wYWRkaW5nLmxlZnQgKyBub2RlU2l6ZS53LzIgKyAocm9vdC5kYXRhLnVubWFya2VkID8gLXJvb3QuZHkgOiAwKX0sJHt0aGlzLnBhZGRpbmcudG9wIC0geDAgKyBub2RlU2l6ZS5oLzJ9KWApO1xuICAgICAgICBcbiAgICAgICAgLy8gYWRkIHZlcnRpY2FsIGF4aXMgbGluZXMgZm9yIGRlcHRoXG5cbiAgICAgICAgY29uc3Qgcm9vdEhlaWdodHMgPSBkMy5yYW5nZShyb290LmhlaWdodCArIChyb290VW5tYXJrZWQgPyAwOjEpKTtcblxuICAgICAgICB0aGlzLmRlcHRoU2NhbGUgPSBkMy5zY2FsZU9yZGluYWwoKVxuICAgICAgICAgICAgLmRvbWFpbiggcm9vdEhlaWdodHMgKVxuICAgICAgICAgICAgLnJhbmdlKCByb290SGVpZ2h0cy5tYXAoaSA9PiAoaSsocm9vdFVubWFya2VkID8gMTowKSkqcm9vdC5keSkgKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRlcHRoQXhpcyA9IGQzLmF4aXNCb3R0b20oKVxuICAgICAgICAgICAgLnNjYWxlKHRoaXMuZGVwdGhTY2FsZSlcbiAgICAgICAgICAgIC50aWNrU2l6ZUlubmVyKC0oeDEteDApKVxuICAgICAgICAgICAgLnRpY2tTaXplT3V0ZXIoMClcbiAgICAgICAgICAgIC50aWNrUGFkZGluZyh0aWNrcGFkZGluZylcbiAgICAgICAgICAgIC50aWNrVmFsdWVzKCB0aGlzLmRlcHRoU2NhbGUuZG9tYWluKCkubWFwKGkgPT4gXG4gICAgICAgICAgICAgICAgKHRoaXMuZGVwdGhTY2FsZS5kb21haW4oKS5sZW5ndGggPCAxNSkgPyAnRGVwdGggJytpIDogaVxuICAgICAgICAgICAgKSApO1xuXG4gICAgICAgIGNvbnN0IGF4aXMgPSBjaGFydC5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2RlcHRoQXhpcycsIHRydWUpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCAke3gxfSlgKVxuICAgICAgICAgICAgLmNhbGwoZGVwdGhBeGlzKTtcbiAgICAgICAgYXhpcy5zZWxlY3QoJy5kb21haW4nKS5yZW1vdmUoKTtcbiAgICAgICAgXG5cbiAgICAgICAgLy8gYWRkIGdyb3VwcyBmb3IgbGlua3MgYW5kIG5vZGVzXG5cbiAgICAgICAgY29uc3QgbGlua3MgPSBjaGFydC5zZWxlY3RBbGwoJy5saW5rJylcbiAgICAgICAgICAgIC5kYXRhKHRyZWUubGlua3MoKSkgXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdsaW5rJywgdHJ1ZSlcblxuICAgICAgICBjb25zdCBub2RlcyA9IGNoYXJ0LnNlbGVjdEFsbCgnLm5vZGUnKVxuICAgICAgICAgICAgLmRhdGEodHJlZS5kZXNjZW5kYW50cygpKVxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnbm9kZScsIHRydWUpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueX0sJHtkLnh9KWApO1xuXG4gICAgICAgIGlmIChyb290VW5tYXJrZWQpIHtcbiAgICAgICAgICAgIGxpbmtzLmZpbHRlcihkID0+IGQuc291cmNlLmRlcHRoID09PSAwKVxuICAgICAgICAgICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgICAgICAgbm9kZXMuZmlsdGVyKGQgPT4gZC5kZXB0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBnZW5lcmF0ZSBsaW5rIHBhcnRpdGlvbiBzZWxlY3Rpb25zXG4gICAgICAgIGNvbnN0IGxpbmtQYXJ0aXRpb25zID0gcmVzb2x2ZUxpbmtzKHRyZWUsIGxpbmtzKTtcbiAgICAgICAgY29uc3QgW3JlQ2hpbGRMaW5rLCByZVBvaW50TGlua10gPSBsaW5rUGFydGl0aW9ucztcblxuICAgICAgICAvLyBnZW5lcmF0ZSBub2RlIHBhcnRpdGlvbiBzZWxlY3Rpb25zXG4gICAgICAgIGNvbnN0IG5vZGVQYXJ0aXRpb25zID0gcmVzb2x2ZU5vZGVzKHRyZWUsIG5vZGVzKTtcbiAgICAgICAgY29uc3QgW2xlYXZlcywgc2V0cywgZm9ybXMsIHJlRW50cmllcywgcmVDaGlsZHMsIHJlUG9pbnRzLCBlbGVtZW50cywgdmFycywgY29uc3RzLCB1bmNsZWFyXSA9IG5vZGVQYXJ0aXRpb25zO1xuXG4gICAgICAgIC8vIGN1cnZlZCBsaW5lIGdlbmVyYXRvclxuICAgICAgICBjb25zdCBsaW5lID0gZDMubGluZSgpLmN1cnZlKGQzLmN1cnZlQmFzaXMpO1xuXG4gICAgICAgIGxpbmtzXG4gICAgICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgICAgICAuYXR0cignZCcsIGQzLmxpbmtIb3Jpem9udGFsKClcbiAgICAgICAgICAgICAgICAgICAgLngoZCA9PiBkLnkpXG4gICAgICAgICAgICAgICAgICAgIC55KGQgPT4gZC54KSk7XG5cbiAgICAgICAgbm9kZXMuZmlsdGVyKGQgPT4gIWQuZGF0YS51bm1hcmtlZClcbiAgICAgICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgICAgICAuYXR0cigncicsIG5vZGVTaXplLncvMilcbiAgICAgICAgcmVQb2ludHMuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCd4Jywgbm9kZVNpemUudy8yICsgMilcbiAgICAgICAgICAgIC50ZXh0KGQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwID0gZC5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgIHdoaWxlKHAuZGF0YS50eXBlICE9PSAncmVFbnRyeScpIHtcbiAgICAgICAgICAgICAgICAgICAgcCA9IHAucGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRlciA+IDEwMDApIHJldHVybiBudWxsOyAvLyBzZWN1cml0eVxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAocC5kYXRhLnJlRXZlbiAhPT0gJ3VuZGVmaW5lZCcpID8gKHAuZGF0YS5yZUV2ZW4gPyAnMnxyfCcgOiAnMnxyfCsxJykgOiAnJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGVsZW1lbnRzLnNlbGVjdEFsbCgnY2lyY2xlJylcbiAgICAgICAgICAgIC5hdHRyKCdyJywgKG5vZGVTaXplLncvMikvMik7XG5cbiAgICAgICAgbm9kZXNcbiAgICAgICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCBub2RlU2l6ZS53LzIgKyAyKVxuICAgICAgICBcbiAgICAgICAgdmFycy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAgICAgLmNhbGwodGV4dFN1YnNjcmlwdChkID0+IGQuZGF0YS5zeW1ib2wpKTtcbiAgICAgICAgY29uc3RzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgICAgICAudGV4dChkID0+IGA9ICR7ZC5kYXRhLnZhbHVlfWApO1xuICAgICAgICB1bmNsZWFyLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgICAgICAudGV4dChkID0+IGAvJHtkLmRhdGEuc3ltYm9sfS9gKTtcblxuICAgICAgICBzZXRzLmZpbHRlcihkID0+IGQuY2hpbGRyZW4pXG4gICAgICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2lubmVyJyx0cnVlKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCAobm9kZVNpemUudy8yKS8yKTtcblxuXG4gICAgICAgIC8vIGFwcGx5IGFsbCBzdHlsZS1yZWxhdGVkIGF0dHJpYnV0ZXMgdG8gdGhlIHNlbGVjdGlvbnNcbiAgICAgICAgZGVzaWduLmFwcGx5QXhpc1N0eWxlcyhheGlzKTtcbiAgICAgICAgZGVzaWduLmFwcGx5TGlua1N0eWxlcyhsaW5rcywgbGlua1BhcnRpdGlvbnMpO1xuICAgICAgICBkZXNpZ24uYXBwbHlOb2RlU3R5bGVzKG5vZGVzLCBub2RlUGFydGl0aW9ucyk7XG5cbiAgICAgICAgZml0Q2hhcnQoY2hhcnQsIHRoaXMucGFkZGluZyk7XG5cbiAgICAgICAgLy8gZGVidWdnaW5nOlxuICAgICAgICAvLyBbdGhpcy5yb290LCB0aGlzLmxheW91dCwgdGhpcy5jaGFydCwgdGhpcy50cmVlLCB0aGlzLmRlc2lnbl0gPSBcbiAgICAgICAgLy8gICAgIFtyb290LCBsYXlvdXQsIGNoYXJ0LCB0cmVlLCBkZXNpZ25dO1xuICAgIH1cblxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyAgICAgICAgICAgICAgICBDaXJjbGUgcGFja2luZyB2aXN1YWxpemF0aW9uXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHN0YXRpYyBwYWNrKGRhdGEpIHtcbiAgICAgICAgY29uc3QgY2hhcnQgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgLy8gY3JlYXRlIGEgZDMtaGllcmFyY2h5IGZyb20gb3VyIGZvcm0tanNvblxuICAgICAgICBzdHlsZXMuY2xlYXJEZWZhdWx0cyh0aGlzLnN2Zyk7IC8vIGNsZWFyIGRlZmF1bHQgc3R5bGVzIGZvciBzdmcgZXhwb3J0XG5cbiAgICAgICAgY29uc3Qgcm9vdCA9IGQzLmhpZXJhcmNoeShkYXRhLCBkID0+IGQuc3BhY2UpXG4gICAgICAgICAgICAuc3VtKGQgPT4gZC5jaGlsZHJlbiA/IDAgOiAxKTtcblxuICAgICAgICAvLyBzZXQgdXAgZGVzaWduIHZhcmlhYmxlc1xuICAgICAgICBjb25zdCBkZXNpZ24gPSBzdHlsZXMucGFja1t0aGlzLnN0eWxlQ2xhc3NdO1xuICAgICAgICBjb25zdCBbcmFkaXVzLCBwYWRkaW5nXSA9IFtkZXNpZ24ucmFkaXVzLCBkZXNpZ24ucGFkZGluZ107XG4gICAgICAgIGNvbnN0IFtmb250U2l6ZSwgZm9udF0gPSBbZGVzaWduLmZvbnQuc2l6ZSwgZGVzaWduLmZvbnQuZmFtaWx5XTtcblxuICAgICAgICAvLyBkZWZpbmUgcGFjayBsYXlvdXRcbiAgICAgICAgY29uc3QgbGF5b3V0ID0gZDMucGFjaygpXG4gICAgICAgIC5wYWRkaW5nKGQgPT4ge1xuICAgICAgICAgICAgbGV0IHBhZCA9IHBhZGRpbmc7XG4gICAgICAgICAgICBpZiAoZC5kYXRhLnR5cGUgPT09ICdmb3JtJyAmJiBkLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChkLmNoaWxkcmVuWzBdLmRhdGEudHlwZSA9PT0gJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICBwYWQgPSBwYWQgKiAwLjQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZC5kYXRhLnVubWFya2VkICYmIGQuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSBwYWQgPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHBhZDtcbiAgICAgICAgfSlcbiAgICAgICAgLnJhZGl1cyhkID0+IHtcbiAgICAgICAgICAgIGxldCByYWQgPSByYWRpdXM7XG4gICAgICAgICAgICBpZih0eXBlb2YoZC5kYXRhLnN5bWJvbCkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmFkID0gdGV4dFNpemUoZC5kYXRhLnN5bWJvbCwgZm9udFNpemUsIGZvbnQpLndpZHRoIC8yO1xuICAgICAgICAgICAgICAgIGlmKGQuZGF0YS50eXBlID09PSAndW5jbGVhcicpIHJhZCArPSBwYWRkaW5nKjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGQuZGF0YS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJhZCA9IHRleHRTaXplKGQuZGF0YS52YWx1ZSsnJywgZm9udFNpemUsIGZvbnQpLndpZHRoIC8yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihkLmRhdGEuY2hpbGRyZW4gfHwgZC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5UG9pbnQnIHx8wqBkLmRhdGEudHlwZSA9PT0gJ3NwYWNlJykgcmFkID0gMDtcbiAgICAgICAgICAgIHJldHVybiByYWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwYWNrID0gbGF5b3V0KHJvb3QpO1xuXG4gICAgICAgIC8vIHNldHVwIGJhc2ljIGNoYXJ0IHN0cnVjdHVyZVxuICAgICAgICBjaGFydC5hdHRyKCdjbGFzcycsICdncmFwaC1wYWNrJylcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7cGFjay5yICsgdGhpcy5wYWRkaW5nLmxlZnR9LCR7cGFjay5yICsgdGhpcy5wYWRkaW5nLnRvcH0pYCk7XG5cbiAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGFydC5zZWxlY3RBbGwoJy5ub2RlJylcbiAgICAgICAgICAgIC5kYXRhKHBhY2suZGVzY2VuZGFudHMoKSlcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoJ25vZGUnLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnh9LCR7ZC55fSlgKTtcblxuICAgICAgICAvLyBnZW5lcmF0ZSBub2RlIHBhcnRpdGlvbiBzZWxlY3Rpb25zXG4gICAgICAgIGNvbnN0IG5vZGVQYXJ0aXRpb25zID0gcmVzb2x2ZU5vZGVzKHBhY2ssIG5vZGVzKTtcbiAgICAgICAgY29uc3QgW2xlYXZlcywgc2V0cywgZm9ybXMsIHJlRW50cmllcywgcmVDaGlsZHMsIHJlUG9pbnRzLCBlbGVtZW50cywgdmFycywgY29uc3RzLCB1bmNsZWFyXSA9IG5vZGVQYXJ0aXRpb25zO1xuXG4gICAgICAgIC8vIGRlZmluZSBkZXRhaWxsZWQgc3RydWN0dXJlL2xvZ2ljXG5cbiAgICAgICAgc2V0cy5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgICAgICAuYXR0cigncicsIGQgPT4gZC5yKTtcbiAgICAgICAgdmFycy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmNhbGwodGV4dFN1YnNjcmlwdChkID0+IGQuZGF0YS5zeW1ib2wpKTtcblxuICAgICAgICBjb25zdHMuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZC5kYXRhLnZhbHVlKTtcblxuICAgICAgICB1bmNsZWFyLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBcbiAgICAgICAgICAgIGBza2V3WCgtMzApIHRyYW5zbGF0ZSgkey0oZC5yIC0gcGFkZGluZyl9LFxuICAgICAgICAgICAgJHstKHRleHRTaXplKCd4Jyxmb250U2l6ZSwgZm9udCkuaGVpZ2h0ICsgcGFkZGluZyoyKS8yfSlgKVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgZCA9PiBkLnIqMiAtIHBhZGRpbmcqMilcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBkID0+ICh0ZXh0U2l6ZSgneCcsZm9udFNpemUsIGZvbnQpLmhlaWdodCArIHBhZGRpbmcqMikpXG4gICAgICAgIHVuY2xlYXIuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5jYWxsKHRleHRTdWJzY3JpcHQoZCA9PiBkLmRhdGEuc3ltYm9sKSk7XG5cbiAgICAgICAgcmVQb2ludHNcbiAgICAgICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgICAgICAuYXR0cigncicsIDEuNSk7XG5cbiAgICAgICAgcmVFbnRyaWVzLmZpbHRlcihkID0+IGQuZGF0YS5yZUV2ZW4gIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgLmNhbGwoY2lyY2xlTGFiZWwoIGQgPT4gZC5kYXRhLnJlRXZlbiA/ICcyfHJ8JyA6ICcyfHJ8KzEnLCBkZXNpZ24uZm9udENvbnRleHQuc2l6ZSwgZGVzaWduLmZvbnRDb250ZXh0LmZhbWlseSApKTtcblxuICAgICAgICAvLyBhcHBseSBhbGwgc3R5bGUtcmVsYXRlZCBhdHRyaWJ1dGVzIHRvIHRoZSBzZWxlY3Rpb25zXG4gICAgICAgIGRlc2lnbi5hcHBseU5vZGVTdHlsZXMobm9kZXMsIG5vZGVQYXJ0aXRpb25zLCBjaGFydCk7XG5cbiAgICAgICAgZml0Q2hhcnQoY2hhcnQsIHRoaXMucGFkZGluZyk7XG5cbiAgICAgICAgLy8gZGVidWdnaW5nOlxuICAgICAgICAvLyBbdGhpcy5yb290LCB0aGlzLmxheW91dCwgdGhpcy5jaGFydCwgdGhpcy5wYWNrLCB0aGlzLmRlc2lnbl0gPSBcbiAgICAgICAgLy8gICAgIFtyb290LCBsYXlvdXQsIGNoYXJ0LCBwYWNrLCBkZXNpZ25dO1xuICAgIH1cblxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBCb3htb2RlbCB2aXN1YWxpemF0aW9uIChTcGVuY2VyLUJyb3duIGhvb2sgbm90YXRpb24pXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHN0YXRpYyBnc2Job29rcyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IGNoYXJ0ID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIC8vIGNyZWF0ZSBhIGQzLWhpZXJhcmNoeSBmcm9tIG91ciBmb3JtLWpzb25cbiAgICAgICAgc3R5bGVzLmNsZWFyRGVmYXVsdHModGhpcy5zdmcpOyAvLyBjbGVhciBkZWZhdWx0IHN0eWxlcyBmb3Igc3ZnIGV4cG9ydFxuXG4gICAgICAgIGNvbnN0IHJvb3QgPSBkMy5oaWVyYXJjaHkoZGF0YSwgZCA9PiBkLnNwYWNlKVxuICAgICAgICAgICAgLnN1bShkID0+IGQuc3BhY2UgPyAwIDogMSk7XG5cbiAgICAgICAgdGhpcy5zdHlsZUNsYXNzID0gJ2Jhc2ljJztcbiAgICAgICAgY29uc3QgY29tcGFjdFJlRW50cnkgPSAodGhpcy5jb21wYWN0Q2hlY2tlZCAhPT0gbnVsbCkgPyB0aGlzLmNvbXBhY3RDaGVja2VkIDogdHJ1ZTtcblxuICAgICAgICAvLyBzZXQgdXAgZGVzaWduIHZhcmlhYmxlc1xuICAgICAgICBjb25zdCBkZXNpZ24gPSBzdHlsZXMuYm94bW9kZWxbdGhpcy5zdHlsZUNsYXNzXTtcbiAgICAgICAgY29uc3Qge2VsZW1NYXJnaW4sIGZvcm1NYXJnaW4sIGZvcm1QYWRkaW5nLCBtaW5Gb3JtU2l6ZSwgbWF4TGluZVdpZHRoLCBmb250VmFyLCBmb250Q29uc3QsIGZvbnRDb250ZXh0LCBsYWJlbHN9ID0gey4uLmRlc2lnbn07XG4gICAgICAgIGNvbnN0IHVuY2xlYXJQYWQgPSB7aHo6IGVsZW1NYXJnaW4uaHovMiwgdnQ6IGVsZW1NYXJnaW4udnR9O1xuICAgICAgICBjb25zdCBkYXRhTGFiZWxQYWQgPSA0O1xuXG4gICAgICAgIC8vIGRlZmluZSBib3htb2RlbCBsYXlvdXRcbiAgICAgICAgY29uc3QgbGF5b3V0ID0gYm94bW9kZWxEMygpXG4gICAgICAgICAgICAudkFsaWduKCdib3R0b20nKVxuICAgICAgICAgICAgLmVkZ2VNYXJnaW5zKGQgPT4gIShpc0NvbnRhaW5lcihkKSAmJiAhZC5wYXJlbnQucGFyZW50ICYmIGQucGFyZW50LmRhdGEudW5tYXJrZWQpIClcbiAgICAgICAgICAgIC5pc0NvbnRhaW5lcihkID0+IGlzQ29udGFpbmVyKGQpKVxuICAgICAgICAgICAgLnBhZGRpbmcoZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHAgPSB7bGVmdDogMCwgcmlnaHQ6IDAsIHRvcDogMCwgYm90dG9tOiAwfTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoaXNDb250YWluZXIoZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcC5sZWZ0ID0gcC5yaWdodCA9IGZvcm1QYWRkaW5nLmh6O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGQuZGF0YS5yZUV2ZW4gPyBsYWJlbHMucmVFdmVuIDogbGFiZWxzLnJlT2RkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHh0U3ogPSB0ZXh0U2l6ZSh0ZXh0LCBmb250Q29udGV4dC5zaXplLCBmb250Q29udGV4dC5mYW1pbHksIGZvbnRDb250ZXh0LnN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAuYm90dG9tID0gdHh0U3ouaGVpZ2h0ICsgZWxlbU1hcmdpbi52dC8yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFyZ2luKGQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBtID0ge2xlZnQ6IDAsIHJpZ2h0OiAwLCB0b3A6IDAsIGJvdHRvbTogMH07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGlzQ29udGFpbmVyKGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIG0udG9wID0gZm9ybU1hcmdpbi50b3A7XG4gICAgICAgICAgICAgICAgICAgIG0ucmlnaHQgPSBmb3JtTWFyZ2luLnJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZC5kZXB0aCA9PT0gMCkgbS50b3AgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZC5kYXRhLnJlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLnBhcmVudC5jaGlsZHJlbi5sZW5ndGggPT09IDEpIG0ucmlnaHQgPSBtaW5Gb3JtU2l6ZS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLnBhcmVudC5kYXRhLmxhc3RPcGVuKSBtLnRvcCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFjdFJlRW50cnkgJiYgZC5wYXJlbnQuZGF0YS5yZUNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZC5jaGlsZHJlblswXS5kYXRhLnR5cGUgPT09ICdyZUVudHJ5UG9pbnQnICYmIHJlUGFyZW50TGFzdE9wZW4oZCkpKSBtLnRvcCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZC5kYXRhLnR5cGUgIT09ICdyZUVudHJ5UG9pbnQnKSB7IC8vIGFsbCBvdGhlciBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICBtLnRvcCA9IG0uYm90dG9tID0gZWxlbU1hcmdpbi52dDtcbiAgICAgICAgICAgICAgICAgICAgbS5sZWZ0ID0gbS5yaWdodCA9IGVsZW1NYXJnaW4uaHo7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmb250VmFyLnN0eWxlID09ICdpdGFsaWMnKSBtLnJpZ2h0ICs9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGQuZGF0YS50eXBlID09PSAndW5jbGVhcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG0uYm90dG9tID0gKGQuZGF0YS5zeW1ib2wuc3BsaXQoJ18nKS5sZW5ndGggPiAxKSA/IC02IDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uYm90dG9tID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkLmRhdGEudHlwZSA9PT0gJ3JlRW50cnlQb2ludCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbS5yaWdodCA9IGZvcm1NYXJnaW4ucmlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3BhbkhlaWdodChkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc3BhbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChjb21wYWN0UmVFbnRyeSAmJiBkLmRhdGEucmVDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBzcGFuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNwYW47XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5taW5Db250YWluZXJTaXplKGQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB3ID0gbWluRm9ybVNpemUud2lkdGg7XG4gICAgICAgICAgICAgICAgbGV0IGggPSBtaW5Gb3JtU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgaWYgKGQuZGF0YS5yZUNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiBkLmNoaWxkcmVuWzBdLmRhdGEudHlwZSA9PT0gJ3JlRW50cnlQb2ludCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZVBhcmVudExhc3RPcGVuKGQpKSB3ID0gbWluRm9ybVNpemUud2lkdGgvMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JyAmJiBkLmNoaWxkcmVuLmxlbmd0aCA8PSAyICYmIGQuY2hpbGRyZW5bMF0uZGF0YS50eXBlID09PSAncmVFbnRyeVBvaW50Jykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gZC5kYXRhLnJlRXZlbiA/IGxhYmVscy5yZUV2ZW4gOiBsYWJlbHMucmVPZGQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0eHRTeiA9IHRleHRTaXplKHRleHQsIGZvbnRDb250ZXh0LnNpemUsIGZvbnRDb250ZXh0LmZhbWlseSwgZm9udENvbnRleHQuc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICB3ID0gdHh0U3oud2lkdGggKyBkYXRhTGFiZWxQYWQqMjtcbiAgICAgICAgICAgICAgICAgICAgdyA9IHcgPCBtaW5Gb3JtU2l6ZS53aWR0aCA/IG1pbkZvcm1TaXplLndpZHRoIDogdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHt3aWR0aDogdywgaGVpZ2h0OiBofTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1heExpbmVXaWR0aChkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdyA9IG1heExpbmVXaWR0aDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdztcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm5vZGVTaXplKGQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB3ID0gMCwgaCA9IDA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGlzVGV4dChkKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdHh0U3ogPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZC5kYXRhLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndmFyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dFN6ID0gdGV4dFNpemUoZC5kYXRhLnN5bWJvbCwgZm9udFZhci5zaXplLCBmb250VmFyLmZhbWlseSwgZm9udFZhci5zdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ID0gdHh0U3oud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoID0gdHh0U3ouaGVpZ2h0ICogMC43O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3VuY2xlYXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0U3ogPSB0ZXh0U2l6ZShkLmRhdGEuc3ltYm9sLCBmb250VmFyLnNpemUsIGZvbnRWYXIuZmFtaWx5LCAnbm9ybWFsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ID0gdHh0U3oud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoID0gdHh0U3ouaGVpZ2h0ICogMC43O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3ICs9IHNrZXdEaWZmKChoICsgdW5jbGVhclBhZC52dCoyKSkqMiArIHVuY2xlYXJQYWQuaHoqMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGggKz0gdW5jbGVhclBhZC52dCoyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NvbnN0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dFN6ID0gdGV4dFNpemUoZC5kYXRhLnZhbHVlLCBmb250Q29uc3Quc2l6ZSwgZm9udENvbnN0LmZhbWlseSwgZm9udENvbnN0LnN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHcgPSB0eHRTei53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSB0eHRTei5oZWlnaHQgKiAwLjc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge3dpZHRoOiB3LCBoZWlnaHQ6IGh9O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGJveG1vZGVsID0gbGF5b3V0KHJvb3QpO1xuXG4gICAgICAgIC8vIHNldHVwIGJhc2ljIGNoYXJ0IHN0cnVjdHVyZVxuICAgICAgICBjaGFydC5hdHRyKCdjbGFzcycsICdncmFwaC1ib3htb2RlbCcpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RoaXMucGFkZGluZy5sZWZ0fSwke3RoaXMucGFkZGluZy50b3B9KWApO1xuXG4vLyBjaGFydC5hdHRyKCd3aWR0aCcsJzEwMCUnKS5hdHRyKCdoZWlnaHQnLCcxMDAlJykuc3R5bGUoJ2ZpbGwnLCdyZ2JhKDI1NSwwLDAsLjIpJyk7XG5cbiAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGFydC5zZWxlY3RBbGwoJy5ub2RlJylcbiAgICAgICAgICAgIC5kYXRhKGJveG1vZGVsLmRlc2NlbmRhbnRzKCkpXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdub2RlJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54MH0sJHtkLnkwfSlgKTtcblxuICAgICAgICAvLyBnZW5lcmF0ZSBub2RlIHBhcnRpdGlvbiBzZWxlY3Rpb25zXG4gICAgICAgIGNvbnN0IG5vZGVQYXJ0aXRpb25zID0gcmVzb2x2ZU5vZGVzKGJveG1vZGVsLCBub2Rlcyk7XG4gICAgICAgIGNvbnN0IFtsZWF2ZXMsIHNldHMsIGZvcm1zLCByZUVudHJpZXMsIHJlQ2hpbGRzLCByZVBvaW50cywgZWxlbWVudHMsIHZhcnMsIGNvbnN0cywgdW5jbGVhcl0gPSBub2RlUGFydGl0aW9ucztcblxuICAgICAgICAvLyBkZWZpbmUgZGV0YWlsbGVkIHN0cnVjdHVyZS9sb2dpY1xuXG4gICAgICAgIGZvcm1zLmFwcGVuZCgncG9seWxpbmUnKSAvLy5maWx0ZXIoZCA9PiAhZC5kYXRhLnVubWFya2VkKS5hcHBlbmQoJ3BvbHlsaW5lJylcbiAgICAgICAgICAgIC5hdHRyKCdwb2ludHMnLCBkID0+IGAwLDAgJHtkLngxLWQueDB9LDAgJHtkLngxLWQueDB9LCR7ZC55MS1kLnkwfWApO1xuICAgICAgICByZUVudHJpZXMuYXBwZW5kKCdwb2x5bGluZScpXG4gICAgICAgICAgICAuYXR0cigncG9pbnRzJywgZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdyA9IGQueDEtZC54MDtcbiAgICAgICAgICAgICAgICBjb25zdCBoID0gZC55MS1kLnkwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlSCA9IG1pbkZvcm1TaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDAsMCAke3d9LDAgJHt3fSwke2h9IDAsJHtofSAwLCR7aC1yZUh9YDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGQgPT4gZC5kYXRhLmxhc3RPcGVuKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdwb2ludHMnLCBkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdyA9IGQueDEtZC54MDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaCA9IGQueTEtZC55MDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVIID0gbWluRm9ybVNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7d30sJHtoLXJlSH0gJHt3fSwke2h9IDAsJHtofSAwLCR7aC1yZUh9YDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgcmVFbnRyaWVzLmZpbHRlcihkID0+IGQuZGF0YS5yZUV2ZW4gIT09ICd1bmRlZmluZWQnKS5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2xhYmVsJywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoMCwke2QueTEtZC55MH0pYClcbiAgICAgICAgICAgIC5hdHRyKCd4JyxkID0+IGRhdGFMYWJlbFBhZCApXG4gICAgICAgICAgICAuYXR0cigneScsZCA9PiAtNSApXG4gICAgICAgICAgICAudGV4dChkID0+IGQuZGF0YS5yZUV2ZW4gPyBsYWJlbHMucmVFdmVuIDogbGFiZWxzLnJlT2RkKTtcblxuICAgICAgICBjb25zdCB1bmNsVHh0U2l6ZSA9IGQgPT4gdGV4dFNpemUoZC5kYXRhLnN5bWJvbCwgZm9udFZhci5zaXplLCBmb250VmFyLmZhbWlseSwgJ25vcm1hbCcpO1xuICAgICAgICBjb25zdCB1bmNsRGlmZiA9IGQgPT4gc2tld0RpZmYoICh1bmNsVHh0U2l6ZShkKS5oZWlnaHQqMC43ICsgdW5jbGVhclBhZC52dCoyKSApO1xuXG4gICAgICAgIHVuY2xlYXIuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgIC5jbGFzc2VkKCd1bmNsZWFyTWFyaycsdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGBza2V3WCgtMzApIHRyYW5zbGF0ZSgke3VuY2xEaWZmKGQpfSwkezB9KWApXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBkID0+ICgoZC54MS1kLngwKSAtIHVuY2xEaWZmKGQpICkpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgZCA9PiAoZC55MS1kLnkwKSApXG4gICAgICAgIHVuY2xlYXIuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCd4JyxkID0+IHVuY2xEaWZmKGQpICsgdW5jbGVhclBhZC5oeiApXG4gICAgICAgICAgICAuYXR0cigneScsZCA9PiAoZC55MS1kLnkwKSAtdW5jbGVhclBhZC52dCAgLSAoKGQuZGF0YS5zeW1ib2wuc3BsaXQoJ18nKS5sZW5ndGggPiAxKSA/IDYgOiAwKSApXG4gICAgICAgICAgICAuY2FsbCh0ZXh0U3Vic2NyaXB0KGQgPT4gZC5kYXRhLnN5bWJvbCkpO1xuICAgICAgICAgIFxuICAgICAgICBjb25zdHMuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCd5JyxkID0+IChkLnkxLWQueTApIClcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZC5kYXRhLnZhbHVlKTtcbiAgICAgICAgdmFycy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3knLGQgPT4gKGQueTEtZC55MCkgKVxuICAgICAgICAgICAgLmNhbGwodGV4dFN1YnNjcmlwdChkID0+IGQuZGF0YS5zeW1ib2wpKTtcblxuXG4gICAgICAgIC8vIGFwcGx5IGFsbCBzdHlsZS1yZWxhdGVkIGF0dHJpYnV0ZXMgdG8gdGhlIHNlbGVjdGlvbnNcbiAgICAgICAgZGVzaWduLmFwcGx5Tm9kZVN0eWxlcyhub2Rlcywgbm9kZVBhcnRpdGlvbnMsIGNoYXJ0KTtcblxuICAgICAgICBmaXRDaGFydChjaGFydCwgdGhpcy5wYWRkaW5nKTtcblxuICAgICAgICAvLyBkZWJ1Z2dpbmc6XG4gICAgICAgIC8vIFt0aGlzLnJvb3QsIHRoaXMubGF5b3V0LCB0aGlzLmNoYXJ0LCB0aGlzLmJveG1vZGVsLCB0aGlzLmRlc2lnbl0gPSBcbiAgICAgICAgLy8gICAgIFtyb290LCBsYXlvdXQsIGNoYXJ0LCBib3htb2RlbCwgZGVzaWduXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9yY2UoZGF0YSkge1xuXG4gICAgfVxuXG59XG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEhlbHBlciBmdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHJlc29sdmVOb2Rlcyhyb290LCBub2Rlcykge1xuICAvLyByZXNvbHZlcyBkZXNjZW5kYW50IG5vZGVzIGludG8gZmlsdGVyZWQgc2VsZWN0aW9uc1xuICBjb25zdCBsZWF2ZXMgPSBub2Rlcy5maWx0ZXIoZCA9PiByb290LmxlYXZlcygpLmZpbHRlcihsID0+IGwgPT09IGQpLnBvcCgpIClcbiAgICAgIC5jbGFzc2VkKCdsZWFmJywgdHJ1ZSk7XG5cbiAgY29uc3Qgc2V0cyA9IG5vZGVzLmZpbHRlcihkID0+IGQuZGF0YS50eXBlID09PSAnZm9ybScgfHzCoGQuZGF0YS50eXBlID09PSAncmVFbnRyeScpXG4gICAgICAuY2xhc3NlZCgnZm9ybScsIHRydWUpXG4gIGNvbnN0IGZvcm1zID0gc2V0cy5maWx0ZXIoZCA9PiBkLmRhdGEudHlwZSA9PT0gJ2Zvcm0nKVxuICAgICAgLmNsYXNzZWQoJ2Zvcm0nLCB0cnVlKTtcbiAgY29uc3QgcmVFbnRyaWVzID0gc2V0cy5maWx0ZXIoZCA9PiBkLmRhdGEudHlwZSA9PT0gJ3JlRW50cnknKVxuICAgICAgLmNsYXNzZWQoJ3JlRW50cnknLCB0cnVlKTtcblxuICBjb25zdCBlbGVtZW50cyA9IG5vZGVzLmZpbHRlcihkID0+ICEoZC5kYXRhLnR5cGUgPT09ICdmb3JtJyB8fMKgZC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JykpXG4gICAgICAuY2xhc3NlZCgnZWxlbWVudCcsIHRydWUpO1xuICBjb25zdCB2YXJzID0gZWxlbWVudHMuZmlsdGVyKGQgPT4gZC5kYXRhLnR5cGUgPT09ICd2YXInKVxuICAgICAgLmNsYXNzZWQoJ3ZhcicsIHRydWUpO1xuICBsZXQgY29uc3RzID0gZWxlbWVudHMuZmlsdGVyKGQgPT4gZC5kYXRhLnR5cGUgPT09ICdjb25zdCcpXG4gICAgICAuY2xhc3NlZCgnY29uc3QnLCB0cnVlKTtcbiAgY29uc3RzLnVubWFya2VkID0gZWxlbWVudHMuZmlsdGVyKGQgPT4gZC5kYXRhLnZhbHVlID09IDApLmNsYXNzZWQoJ3VubWFya2VkJywgdHJ1ZSk7XG4gIGNvbnN0cy5tYXJrZWQgPSBlbGVtZW50cy5maWx0ZXIoZCA9PiBkLmRhdGEudmFsdWUgPT0gMSkuY2xhc3NlZCgnbWFya2VkJywgdHJ1ZSk7XG4gIGNvbnN0cy5pbmRlZiA9IGVsZW1lbnRzLmZpbHRlcihkID0+IGQuZGF0YS52YWx1ZSA9PSAyKS5jbGFzc2VkKCdpbmRlZicsIHRydWUpO1xuICBjb25zdHMuaW1hZyA9IGVsZW1lbnRzLmZpbHRlcihkID0+IGQuZGF0YS52YWx1ZSA9PSAzKS5jbGFzc2VkKCdpbWFnJywgdHJ1ZSk7XG5cbiAgY29uc3QgdW5jbGVhciA9IGVsZW1lbnRzLmZpbHRlcihkID0+IGQuZGF0YS50eXBlID09PSAndW5jbGVhcicpXG4gICAgICAuY2xhc3NlZCgndW5jbGVhcicsIHRydWUpO1xuXG4gIGNvbnN0IHJlQ2hpbGRzID0gZm9ybXMuZmlsdGVyKGQgPT4gZC5kYXRhLnJlQ2hpbGQpXG4gICAgICAuY2xhc3NlZCgncmVDaGlsZCcsIHRydWUpO1xuXG4gIGNvbnN0IHJlUG9pbnRzID0gZWxlbWVudHMuZmlsdGVyKGQgPT4gZC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5UG9pbnQnKVxuICAgICAgLmNsYXNzZWQoJ3JlRW50cnlQb2ludCcsIHRydWUpO1xuXG4gIHJldHVybiBbbGVhdmVzLCBzZXRzLCBmb3JtcywgcmVFbnRyaWVzLCByZUNoaWxkcywgcmVQb2ludHMsIGVsZW1lbnRzLCB2YXJzLCBjb25zdHMsIHVuY2xlYXJdO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlTGlua3Mocm9vdCwgbGlua3MpIHtcbiAgLy8gcmVzb2x2ZXMgbGlua3MgYmV0d2VlbiBkZXNjZW5kYW50IG5vZGVzIGludG8gZmlsdGVyZWQgc2VsZWN0aW9uc1xuICBjb25zdCByZUNoaWxkTGluayA9IGxpbmtzLmZpbHRlcihkID0+IGQudGFyZ2V0LmRhdGEucmVDaGlsZClcbiAgICAgIC5jbGFzc2VkKCdyZUNoaWxkTGluaycsIHRydWUpO1xuXG4gIGNvbnN0IHJlUG9pbnRMaW5rID0gbGlua3MuZmlsdGVyKGQgPT4gZC50YXJnZXQuZGF0YS50eXBlID09PSAncmVFbnRyeVBvaW50JylcbiAgICAgIC5jbGFzc2VkKCdyZVBvaW50TGluaycsIHRydWUpO1xuXG4gIHJldHVybiBbcmVDaGlsZExpbmssIHJlUG9pbnRMaW5rXTtcbn1cblxuZnVuY3Rpb24gaXNUZXh0KG5vZGUpIHsgcmV0dXJuIG5vZGUuZGF0YS50eXBlID09PSAndmFyJyB8fMKgbm9kZS5kYXRhLnR5cGUgPT09ICdjb25zdCcgfHwgbm9kZS5kYXRhLnR5cGUgPT09ICd1bmNsZWFyJzsgfVxuXG5mdW5jdGlvbiBpc0NvbnRhaW5lcihub2RlKSB7IHJldHVybiBub2RlLmRhdGEudHlwZSA9PT0gJ2Zvcm0nIHx8wqBub2RlLmRhdGEudHlwZSA9PT0gJ3JlRW50cnknOyB9XG5cbmZ1bmN0aW9uIHJlUGFyZW50TGFzdE9wZW4obm9kZSkge1xubGV0IHJlUGFyZW50ID0gbm9kZS5hbmNlc3RvcnMoKS5maWx0ZXIoZCA9PiBkLmRhdGEudHlwZSA9PT0gJ3JlRW50cnknKS5zaGlmdCgpO1xucmV0dXJuIHJlUGFyZW50LmRhdGEubGFzdE9wZW47XG59XG5cbmV4cG9ydCBjb25zdCBzYXZlID0gZnVuY3Rpb24oZm9ybWF0LCBzdmcsIG5hbWUsIHNjYWxlKSB7XG4gICAgLy8gZXhwb3J0cyBncmFwaHMgaW50byBzdmdcbiAgICBcbiAgICBuYW1lID0gbmFtZSB8fMKgZDMuc2VsZWN0KHN2Zy5wYXJlbnROb2RlKS5hdHRyKCdpZCcpO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGdldFRpbWVzdGFtcCgpO1xuXG5cdHRyeSB7XG4gICAgc3dpdGNoKGZvcm1hdCkge1xuICAgICAgICBjYXNlICdzdmcnOlxuICAgICAgICAgICAgc2F2ZVN2ZyhzdmcsIHRpbWVzdGFtcCsnXycrbmFtZSsnLnN2ZycsIHNjYWxlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdpbWcnOlxuICAgICAgICAgICAgc2F2ZUltZyhzdmcsIHRpbWVzdGFtcCsnXycrbmFtZSsnLnBuZycsIHNjYWxlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblx0fSBjYXRjaChlKSB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2tld0RpZmYoaGVpZ2h0LGRlZ3JlZXM9MzApIHsgcmV0dXJuIE1hdGgudGFuKChkZWdyZWVzKihNYXRoLlBJLzE4MCkpKSAqIGhlaWdodDsgfTsiLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgeyBnZXRSZWFsRGVwdGgsIG9wYWNpdHksIGNpcmNsZURhc2hBcnJheSB9IGZyb20gJy4uLy4uL2NvbW1vbi9kMy1oZWxwZXInO1xuXG4vKiBDYXNjYWRpbmcgRDMtU3R5bGVzIC0gYnkgUGV0ZXIgSG9mbWFubiwgMTIvMjAxOCAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZ2xvYmFsIHN0eWxlc1xuXG5jb25zdCBnbG9iYWwgPSB7XG4gICAgY29tbW9uOiB7XG4gICAgICAgIGZvbnQ6IHtmYW1pbHk6ICdzYW5zLXNlcmlmJywgc2l6ZTogJzE0cHgnLCBzdHlsZTogJ25vcm1hbCd9LFxuICAgICAgICBmb250VmFyOiB7ZmFtaWx5OiAnc2Fucy1zZXJpZicsIHNpemU6ICcxNHB4Jywgc3R5bGU6ICdpdGFsaWMnfSxcbiAgICAgICAgZm9udENvbnN0OiB7ZmFtaWx5OiAnY291cmllciwgbW9ub3NwYWNlJywgc2l6ZTogJzE0cHgnLCBzdHlsZTogJ25vcm1hbCd9LFxuICAgICAgICBmb250Q29udGV4dDoge2ZhbWlseTogJ3NhbnMtc2VyaWYnLCBzaXplOiAnMTBweCcsIHN0eWxlOiAnbm9ybWFsJ30sXG4gICAgICAgIHN0cm9rZVdpZHRoOiAxLFxuICAgICAgICBsYWJlbHM6IHtyZUV2ZW46ICcyfHJ8JywgcmVPZGQ6ICcyfHJ8KzEnfSxcbiAgICAgICAgY29sb3I6IHtiYXNlOiBkMy5jb2xvcignYmxhY2snKSxcbiAgICAgICAgICAgICAgICBncm91bmQ6IGQzLmNvbG9yKCd3aGl0ZScpLFxuICAgICAgICAgICAgICAgIGluZGVmOiBkMy5jb2xvcigncmVkJyksXG4gICAgICAgICAgICAgICAgbGlnaHQ6IGQzLmNvbG9yKCcjZGRkJyksXG4gICAgICAgICAgICB9XG4gICAgfVxufTtcbmdsb2JhbC5iYXNpYyA9IHtcbiAgICAuLi5nbG9iYWwuY29tbW9uLFxuICAgIGZvbnQ6IHsgLi4uZ2xvYmFsLmNvbW1vbi5mb250LFxuICAgICAgICAgICAgZmFtaWx5OiAnZ2VvcmdpYSwgc2VyaWYnXG4gICAgICAgIH0sXG4gICAgZm9udFZhcjogeyAuLi5nbG9iYWwuY29tbW9uLmZvbnRWYXIsXG4gICAgICAgICAgICBmYW1pbHk6ICdnZW9yZ2lhLCBzZXJpZicsIHN0eWxlOiAnaXRhbGljJ1xuICAgICAgICB9LFxuICAgIGZvbnRDb25zdDogeyAuLi5nbG9iYWwuY29tbW9uLmZvbnRDb25zdCxcbiAgICAgICAgZmFtaWx5OiAnZ2VvcmdpYSwgc2VyaWYnXG4gICAgfSxcbiAgICBmb250Q29udGV4dDogeyAuLi5nbG9iYWwuY29tbW9uLmZvbnRDb250ZXh0LFxuICAgICAgICAgICAgZmFtaWx5OiAnY291cmllciwgbW9ub3NwYWNlJ1xuICAgICAgICB9XG59O1xuZ2xvYmFsLmdlc3RhbHQgPSB7XG4gICAgLi4uZ2xvYmFsLmNvbW1vbixcbiAgICBmb250OiB7IC4uLmdsb2JhbC5jb21tb24uZm9udCxcbiAgICAgICAgICAgIGZhbWlseTogJ2FyaWFsLCBzYW5zLXNlcmlmJ1xuICAgICAgICB9LFxuICAgIGZvbnRWYXI6IHsgLi4uZ2xvYmFsLmNvbW1vbi5mb250VmFyLFxuICAgICAgICAgICAgZmFtaWx5OiAnYXJpYWwsIHNhbnMtc2VyaWYnXG4gICAgICAgIH0sXG4gICAgZm9udENvbnN0OiB7IC4uLmdsb2JhbC5jb21tb24uZm9udENvbnN0LFxuICAgICAgICBmYW1pbHk6ICdhcmlhbCwgc2Fucy1zZXJpZidcbiAgICB9LFxuICAgIGZvbnRDb250ZXh0OiB7IC4uLmdsb2JhbC5jb21tb24uZm9udENvbnRleHQsXG4gICAgICAgICAgICBmYW1pbHk6ICdnZW9yZ2lhLCBzZXJpZidcbiAgICAgICAgfSxcbiAgICBjb2xvcjogey4uLmdsb2JhbC5jb21tb24uY29sb3IsXG4gICAgICAgICAgICBwb3M6IGQzLmNvbG9yKCd3aGl0ZScpLCBcbiAgICAgICAgICAgIG5lZzogZDMuY29sb3IoJ2JsYWNrJylcbiAgICAgICAgfVxufTtcbmNvbnN0IFtiYXNpYywgZ2VzdGFsdF0gPSBbZ2xvYmFsLmJhc2ljLCBnbG9iYWwuZ2VzdGFsdF07XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckRlZmF1bHRzKHN2Zykge1xuICAgIHN2Zy5hdHRyKCdzdHJva2UnLCdub25lJykuYXR0cignZmlsbCcsJ25vbmUnKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGQzLnRyZWUgc3R5bGVzOlxuXG5leHBvcnQgY29uc3QgdHJlZSA9IHtcbiAgICBjb21tb246IHtcbiAgICAgICAgbm9kZVNpemU6IHt3OiAxMC4wLCBoOiAxMC4wfSwgLy8gc2l6ZSBvZiBub2Rlc1xuICAgICAgICBub2RlU2VwYXJhdGlvbjoge2h6OiAyMCwgdnQ6IDQwfSwgLy8gc2VwYXJhdGlvbiBiZXR3ZWVuIG5vZGVzXG4gICAgICAgIGRhc2hlczoge2xpbms6ICc0cHggNnB4J1xuICAgICAgICAgICAgfSxcbiAgICB9XG59O1xuXG50cmVlLmJhc2ljID0ge1xuICAgIC4uLmJhc2ljLFxuICAgIC4uLnRyZWUuY29tbW9uLFxufTtcbnRyZWUuYmFzaWMuYXBwbHlBeGlzU3R5bGVzID0gZnVuY3Rpb24oYXhpcykge1xuXG4gICAgYXhpcy5zZWxlY3RBbGwoJy50aWNrJykuc2VsZWN0KCdsaW5lJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCB0aGlzLm5vZGVTaXplLncqMS41KVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdyZ2JhKDAsMCwwLC4wNScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLWxpbmVjYXAnLCAncm91bmQnKTtcbiAgICBheGlzLnNlbGVjdEFsbCgnLnRpY2snKS5zZWxlY3QoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udENvbnRleHQuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250Q29udGV4dC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udENvbnRleHQuZmFtaWx5KVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSlcbiAgICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0Jyk7XG5cbn1cbnRyZWUuYmFzaWMuYXBwbHlOb2RlU3R5bGVzID0gZnVuY3Rpb24obm9kZXMsIG5vZGVQYXJ0aXRpb25zKSB7XG4gICAgY29uc3QgW2xlYXZlcywgc2V0cywgZm9ybXMsIHJlRW50cmllcywgcmVDaGlsZHMsIHJlUG9pbnRzLCBlbGVtZW50cywgdmFycywgY29uc3RzLCB1bmNsZWFyXSA9IG5vZGVQYXJ0aXRpb25zO1xuXG4gICAgZm9ybXMuc2VsZWN0QWxsKCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmdyb3VuZC50b1N0cmluZygpKTtcblxuXG4gICAgZWxlbWVudHMuc2VsZWN0QWxsKCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSk7XG5cbiAgICByZUVudHJpZXMuc2VsZWN0QWxsKCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSlcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKVxuICAgICAgICAuZmlsdGVyKGQgPT4gZC5kYXRhLmxhc3RPcGVuKVxuICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5ncm91bmQudG9TdHJpbmcoKSk7XG4gICAgcmVDaGlsZHMuc2VsZWN0QWxsKCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UtZGFzaGFycmF5JywgZCA9PiBjaXJjbGVEYXNoQXJyYXkoZC5yLCAzLCBbMV0pKTtcbiAgICByZVBvaW50cy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSk7XG5cbiAgICBub2Rlcy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnQuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnQuZmFtaWx5KVxuICAgICAgICAuc3R5bGUoJ2RvbWluYW50LWJhc2VsaW5lJywnbWlkZGxlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpXG4gICAgdmFycy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udFZhci5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRWYXIuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRWYXIuZmFtaWx5KTtcbiAgICBjb25zdHMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRDb25zdC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRDb25zdC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udENvbnN0LmZhbWlseSk7XG5cbiAgICBzZXRzLnNlbGVjdEFsbCgnY2lyY2xlLmlubmVyJylcbiAgICAgICAgLy8gLmNsYXNzZWQoJ2lubmVyJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnbm9uZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKTtcblxufTtcbnRyZWUuYmFzaWMuYXBwbHlMaW5rU3R5bGVzID0gZnVuY3Rpb24obGlua3MsIGxpbmtQYXJ0aXRpb25zKSB7XG4gICAgY29uc3QgW3JlQ2hpbGRMaW5rLCByZVBvaW50TGlua10gPSBsaW5rUGFydGl0aW9ucztcblxuICAgIGxpbmtzLnNlbGVjdEFsbCgncGF0aCcpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpO1xuXG4gICAgcmVDaGlsZExpbmsuc2VsZWN0QWxsKCdwYXRoJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLWRhc2hhcnJheScsIHRoaXMuZGFzaGVzLmxpbmspO1xuXG4gICAgcmVQb2ludExpbmsuc2VsZWN0QWxsKCdwYXRoJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLWRhc2hhcnJheScsIHRoaXMuZGFzaGVzLmxpbmspO1xufTtcblxuLy8gdHJlZS5nZXN0YWx0ID0ge1xuLy8gICAgIC4uLmdlc3RhbHQsXG4vLyAgICAgLi4udHJlZS5jb21tb24sXG4vLyB9O1xuLy8gdHJlZS5nZXN0YWx0LmFwcGx5QXhpc1N0eWxlcyA9IGZ1bmN0aW9uKGF4aXMpIHtcbi8vICAgICB0cmVlLmJhc2ljLmFwcGx5QXhpc1N0eWxlcyhheGlzKTtcbi8vIH1cbi8vIHRyZWUuZ2VzdGFsdC5hcHBseU5vZGVTdHlsZXMgPSBmdW5jdGlvbihub2Rlcywgbm9kZVBhcnRpdGlvbnMpIHtcbi8vICAgICBjb25zdCBbbGVhdmVzLCBzZXRzLCBmb3JtcywgcmVFbnRyaWVzLCByZUNoaWxkcywgcmVQb2ludHMsIGVsZW1lbnRzLCB2YXJzLCBjb25zdHMsIHVuY2xlYXJdID0gbm9kZVBhcnRpdGlvbnM7XG5cbi8vICAgICB0cmVlLmJhc2ljLmFwcGx5Tm9kZVN0eWxlcyhub2Rlcywgbm9kZVBhcnRpdGlvbnMpO1xuLy8gfTtcbi8vIHRyZWUuZ2VzdGFsdC5hcHBseUxpbmtTdHlsZXMgPSBmdW5jdGlvbihsaW5rcywgbGlua1BhcnRpdGlvbnMpIHtcbi8vICAgICAvLyBjb25zdCBbcmVDaGlsZExpbmtdID0gbGlua1BhcnRpdGlvbnM7XG5cbi8vICAgICB0cmVlLmJhc2ljLmFwcGx5TGlua1N0eWxlcyhsaW5rcywgbGlua1BhcnRpdGlvbnMpO1xuLy8gfTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGQzLnBhY2sgc3R5bGVzOlxuXG5leHBvcnQgY29uc3QgcGFjayA9IHtcbiAgICBjb21tb246IHtcbiAgICAgICAgcmFkaXVzOiAxNCxcbiAgICAgICAgcGFkZGluZzogMTQsXG4gICAgfVxufTtcblxucGFjay5iYXNpYyA9IHtcbiAgICAuLi5iYXNpYyxcbiAgICAuLi5wYWNrLmNvbW1vbixcbn07XG5wYWNrLmJhc2ljLmFwcGx5Tm9kZVN0eWxlcyA9IGZ1bmN0aW9uKG5vZGVzLCBub2RlUGFydGl0aW9ucykge1xuICAgIGNvbnN0IFtsZWF2ZXMsIHNldHMsIGZvcm1zLCByZUVudHJpZXMsIHJlQ2hpbGRzLCByZVBvaW50cywgZWxlbWVudHMsIHZhcnMsIGNvbnN0cywgdW5jbGVhcl0gPSBub2RlUGFydGl0aW9ucztcblxuICAgIGZvcm1zLnNlbGVjdCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSlcbiAgICAgICAgLmZpbHRlcihkID0+IGQuZGF0YS51bm1hcmtlZClcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlJywnbm9uZScpO1xuICAgIHJlRW50cmllcy5zZWxlY3QoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKVxuICAgICAgICAuZmlsdGVyKGQgPT4gZC5kYXRhLmxhc3RPcGVuKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2UtZGFzaGFycmF5JywgZCA9PiBjaXJjbGVEYXNoQXJyYXkoZC5yLCAxNCwgWzIvNSwgMy81XSkgKTtcblxuICAgIGVsZW1lbnRzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udC5mYW1pbHkpXG4gICAgICAgIC5zdHlsZSgnZG9taW5hbnQtYmFzZWxpbmUnLCdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKTtcbiAgICB2YXJzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250VmFyLnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udFZhci5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udFZhci5mYW1pbHkpO1xuICAgIGNvbnN0cy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udENvbnN0LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udENvbnN0LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250Q29uc3QuZmFtaWx5KTtcblxuICAgIHVuY2xlYXIuc2VsZWN0KCdyZWN0JylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5saWdodC50b1N0cmluZygpKTtcblxuICAgIHJlUG9pbnRzLnNlbGVjdCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsJ25vbmUnKTtcblxuICAgIGNvbnN0IHJlRXZlbkxhYmVscyA9IHJlRW50cmllcy5zZWxlY3QoJy5sYWJlbCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250Q29udGV4dC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRDb250ZXh0LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250Q29udGV4dC5mYW1pbHkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpO1xufTtcblxucGFjay5nZXN0YWx0ID0ge1xuICAgIC4uLmdlc3RhbHQsXG4gICAgLi4ucGFjay5jb21tb24sXG59O1xucGFjay5nZXN0YWx0LmludmVydEZpbGwgPSBmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuIGdldFJlYWxEZXB0aChkKSUyID8gdGhpcy5jb2xvci5wb3MudG9TdHJpbmcoKSA6IHRoaXMuY29sb3IubmVnLnRvU3RyaW5nKCk7XG59O1xucGFjay5nZXN0YWx0LmFwcGx5Tm9kZVN0eWxlcyA9IGZ1bmN0aW9uKG5vZGVzLCBub2RlUGFydGl0aW9ucywgY2hhcnQpIHtcbiAgICBjb25zdCBbbGVhdmVzLCBzZXRzLCBmb3JtcywgcmVFbnRyaWVzLCByZUNoaWxkcywgcmVQb2ludHMsIGVsZW1lbnRzLCB2YXJzLCBjb25zdHMsIHVuY2xlYXJdID0gbm9kZVBhcnRpdGlvbnM7XG5cbiAgICBjb25zdCBkZWZzID0gZDMuc2VsZWN0KGNoYXJ0Lm5vZGUoKS5wYXJlbnROb2RlKVxuICAgICAgICAuYXBwZW5kKCdkZWZzJyk7XG4gICAgY29uc3QgZ3JhZF8xID0gZGVmcy5hcHBlbmQoJ3JhZGlhbEdyYWRpZW50JykuYXR0cignaWQnLCAnZ3JhZC1pbmRlZi1vdXRpbicpXG4gICAgICAgIC5hdHRyKCdmeCcsJzIwJScpXG4gICAgICAgIGdyYWRfMS5hcHBlbmQoJ3N0b3AnKVxuICAgICAgICAgICAgLmF0dHIoJ29mZnNldCcsJzQwJScpLmF0dHIoJ3N0b3AtY29sb3InLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkgKS5hdHRyKCdzdG9wLW9wYWNpdHknLCAwLjMpO1xuICAgICAgICAgICAgZ3JhZF8xLmFwcGVuZCgnc3RvcCcpXG4gICAgICAgICAgICAuYXR0cignb2Zmc2V0JywnOTAlJykuYXR0cignc3RvcC1jb2xvcicsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSApLmF0dHIoJ3N0b3Atb3BhY2l0eScsIDAuOCk7XG4gICAgICAgIGdyYWRfMS5hcHBlbmQoJ3N0b3AnKVxuICAgICAgICAgICAgLmF0dHIoJ29mZnNldCcsJzEwMCUnKS5hdHRyKCdzdG9wLWNvbG9yJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpICkuYXR0cignc3RvcC1vcGFjaXR5JywgMS4wKTtcbiAgICBjb25zdCBncmFkXzIgPSBkZWZzLmFwcGVuZCgncmFkaWFsR3JhZGllbnQnKS5hdHRyKCdpZCcsICdncmFkLWluZGVmLWlub3V0JylcbiAgICAgICAgLmF0dHIoJ2Z4JywnMjAlJylcbiAgICAgICAgZ3JhZF8yLmFwcGVuZCgnc3RvcCcpXG4gICAgICAgICAgICAuYXR0cignb2Zmc2V0JywnMTAlJykuYXR0cignc3RvcC1jb2xvcicsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSApLmF0dHIoJ3N0b3Atb3BhY2l0eScsIDEuMCk7XG4gICAgICAgIGdyYWRfMi5hcHBlbmQoJ3N0b3AnKVxuICAgICAgICAgICAgLmF0dHIoJ29mZnNldCcsJzUwJScpLmF0dHIoJ3N0b3AtY29sb3InLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkgKS5hdHRyKCdzdG9wLW9wYWNpdHknLCAwLjYpO1xuICAgICAgICBncmFkXzIuYXBwZW5kKCdzdG9wJylcbiAgICAgICAgICAgIC5hdHRyKCdvZmZzZXQnLCc2MCUnKS5hdHRyKCdzdG9wLWNvbG9yJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpICkuYXR0cignc3RvcC1vcGFjaXR5JywgMC40KTtcbiAgICAgICAgZ3JhZF8yLmFwcGVuZCgnc3RvcCcpXG4gICAgICAgICAgICAuYXR0cignb2Zmc2V0JywnMTAwJScpLmF0dHIoJ3N0b3AtY29sb3InLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkgKS5hdHRyKCdzdG9wLW9wYWNpdHknLCAwLjApO1xuXG4gICAgZm9ybXMuc2VsZWN0KCdjaXJjbGUnKS5maWx0ZXIoZCA9PiAhZC5kYXRhLnVubWFya2VkKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiB0aGlzLmludmVydEZpbGwoZCkpO1xuXG4gICAgcmVFbnRyaWVzLnNlbGVjdCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCBkID0+IChkLnBhcmVudC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JykgPyB0aGlzLmNvbG9yLnBvcy50b1N0cmluZygpIDogJ25vbmUnIClcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgJ3VybCgjZ3JhZC1pbmRlZi1vdXRpbiknKTtcblxuICAgIGNvbnN0IG9wZW5SZUVudHJpZXMgPSByZUVudHJpZXMuc2VsZWN0KCdjaXJjbGUnKS5maWx0ZXIoZCA9PiBkLmRhdGEubGFzdE9wZW4pXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICd1cmwoI2dyYWQtaW5kZWYtaW5vdXQpJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UtZGFzaGFycmF5JywgZCA9PiBjaXJjbGVEYXNoQXJyYXkoZC5yLCA4LCBbMi81LCAzLzVdKSApO1xuXG4gICAgb3BlblJlRW50cmllcy5maWx0ZXIoZCA9PiAoKGQucGFyZW50LmRhdGEudHlwZSAhPT0gJ3JlRW50cnknKSB8fMKgIWdldFJlYWxEZXB0aChkKSUyKSApIC8vICBcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZCA9PiB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpO1xuXG4gICAgb3BlblJlRW50cmllcy5maWx0ZXIoZCA9PiAoZC5wYXJlbnQuZGF0YS50eXBlID09PSAncmVFbnRyeScpICYmICFkLnBhcmVudC5kYXRhLmxhc3RPcGVuKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2UnLCBkID0+IHRoaXMuY29sb3IucG9zLnRvU3RyaW5nKCkpO1xuXG4gICAgZWxlbWVudHMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnQuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250LmZhbWlseSlcbiAgICAgICAgLnN0eWxlKCdkb21pbmFudC1iYXNlbGluZScsJ21pZGRsZScpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnbm9uZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gdGhpcy5pbnZlcnRGaWxsKGQpKTtcbiAgICB2YXJzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250VmFyLnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udFZhci5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udFZhci5mYW1pbHkpO1xuICAgIGNvbnN0cy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udENvbnN0LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udENvbnN0LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250Q29uc3QuZmFtaWx5KTtcblxuICAgIHVuY2xlYXIuc2VsZWN0KCdyZWN0JylcbiAgICAgICAgLnN0eWxlKCdmaWxsJyx0aGlzLmNvbG9yLmxpZ2h0LnRvU3RyaW5nKCkpO1xuICAgIHVuY2xlYXIuc2VsZWN0KCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmaWxsJyx0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSk7XG4gICAgICAgIFxuICAgIHJlUG9pbnRzLnNlbGVjdCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJyx0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywnbm9uZScpXG4gICAgICAgIC5maWx0ZXIoZCA9PiBkLnBhcmVudC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JylcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKVxuICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5wb3MudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAnc2NhbGUoMS41KScpO1xuXG4gICAgY29uc3QgcmVFdmVuTGFiZWxzID0gcmVFbnRyaWVzLnNlbGVjdCgnLmxhYmVsJylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRDb250ZXh0LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udENvbnRleHQuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRDb250ZXh0LmZhbWlseSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnbm9uZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gKGQucGFyZW50LmRhdGEudHlwZSA9PT0gJ3JlRW50cnknICYmICFkLnBhcmVudC5kYXRhLmxhc3RPcGVuKSA/IHRoaXMuY29sb3IucG9zLnRvU3RyaW5nKCkgOiB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpO1xuICAgIHJlRW50cmllcy5zZWxlY3QoJy5sYWJlbC5pbnNpZGUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IChkLnBhcmVudC5kYXRhLnR5cGUgIT09ICdyZUVudHJ5JyAmJiBkLmRhdGEubGFzdE9wZW4pID8gdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpIDogdGhpcy5jb2xvci5wb3MudG9TdHJpbmcoKSk7XG5cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBib3htb2RlbEQzIHN0eWxlczpcblxuZXhwb3J0IGNvbnN0IGJveG1vZGVsID0ge1xuICAgIGNvbW1vbjoge1xuICAgICAgICBlbGVtTWFyZ2luOiB7aHo6IDEyLCB2dDogOH0sIC8vIHZ0OiA4XG4gICAgICAgIGZvcm1NYXJnaW46IHt0b3A6IDEwLCByaWdodDogMTB9LFxuICAgICAgICBmb3JtUGFkZGluZzoge2h6OiAwfSxcbiAgICAgICAgbWluRm9ybVNpemU6IHt3aWR0aDogMzQsIGhlaWdodDogMzR9LFxuICAgICAgICBtYXhMaW5lV2lkdGg6IDEwMDAwLFxuICAgICAgICBzdHJva2VXaWR0aDogMS4xXG4gICAgfVxufTtcblxuYm94bW9kZWwuYmFzaWMgPSB7XG4gICAgLi4uYmFzaWMsXG4gICAgLi4uYm94bW9kZWwuY29tbW9uXG4gICAgLy8gZm9udDogey4uLmJhc2ljLmZvbnQsIHNpemU6ICcxOHB4J31cbn07XG5ib3htb2RlbC5iYXNpYy5hcHBseU5vZGVTdHlsZXMgPSBmdW5jdGlvbihub2Rlcywgbm9kZVBhcnRpdGlvbnMpIHtcbiAgICBjb25zdCBbbGVhdmVzLCBzZXRzLCBmb3JtcywgcmVFbnRyaWVzLCByZUNoaWxkcywgcmVQb2ludHMsIGVsZW1lbnRzLCB2YXJzLCBjb25zdHMsIHVuY2xlYXJdID0gbm9kZVBhcnRpdGlvbnM7XG5cbiAgICBzZXRzLnNlbGVjdCgncG9seWxpbmUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAnbm9uZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgdGhpcy5zdHJva2VXaWR0aCk7XG4gICAgZm9ybXMuc2VsZWN0KCdwb2x5bGluZScpXG4gICAgICAgIC5maWx0ZXIoZCA9PiBkLmRhdGEudW5tYXJrZWQpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZScsJ25vbmUnKTtcbiAgICAvLyByZUVudHJpZXMuc2VsZWN0KCdwb2x5bGluZScpXG4gICAgLy8gICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKTtcblxuICAgIGVsZW1lbnRzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udC5mYW1pbHkpXG4gICAgICAgIC8vIC5zdHlsZSgnYWxpZ25tZW50LWJhc2VsaW5lJywnYmFzZWxpbmUnKSA8LS0gXCJidWdcIiBpbiBTYWZhcmlcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpO1xuICAgIHZhcnMuc2VsZWN0KCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRWYXIuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250VmFyLnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250VmFyLmZhbWlseSk7XG4gICAgY29uc3RzLnNlbGVjdCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250Q29uc3Quc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250Q29uc3Quc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRDb25zdC5mYW1pbHkpO1xuICAgIHJlRW50cmllcy5zZWxlY3QoJy5sYWJlbCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250Q29udGV4dC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRDb250ZXh0LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250Q29udGV4dC5mYW1pbHkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSk7XG4gICAgICAgIC8vIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSk7XG5cbiAgICB1bmNsZWFyLnNlbGVjdCgnLnVuY2xlYXJNYXJrJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5saWdodC50b1N0cmluZygpKTtcblxuICAgIHVuY2xlYXIuc2VsZWN0KCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRWYXIuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgJ25vcm1hbCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRWYXIuZmFtaWx5KVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfXzsiXSwic291cmNlUm9vdCI6IiJ9