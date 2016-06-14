(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Animate"] = factory();
	else
		root["Animate"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var domAnimate = __webpack_require__(1);
	var scrollAnimate = __webpack_require__(5);
	
	function Animate() {
	  this.interval = 10;
	  this.isDomRunning = false;
	  this.isScrolling = false;
	}
	
	Animate.prototype = {
	  domAnimate: domAnimate,
	  scrollAnimate: scrollAnimate
	};
	
	try {
	  module.exports = Animate;
	  window['Animate'] = Animate;
	} catch (e) {}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var generateNumber = __webpack_require__(2);
	
	// dom animate main controller
	function domAnimate(selector, opts) {
	  var duration = arguments.length <= 2 || arguments[2] === undefined ? 500 : arguments[2];
	  var easing = arguments.length <= 3 || arguments[3] === undefined ? 'quadInOut' : arguments[3];
	
	  var animationProps = getAnimationProps(selector, opts, duration, easing, this.interval);
	  startDomAnimate.call(this, selector, animationProps, this.interval);
	}
	
	// let dom animate
	function startDomAnimate(selector, animationProps, interval) {
	  var _this = this;
	
	  var numberIndex = 0;
	  var numbersLength = animationProps[0].numbers.length;
	  this.isDomRunning = true;
	  var tick = setInterval(function () {
	    animationProps.forEach(function (prop) {
	      setStyle(selector, prop.attr, prop.numbers[numberIndex], prop.unit);
	    });
	    numberIndex++;
	    if (numberIndex >= numbersLength) {
	      clearInterval(tick);
	      _this.isDomRunning = false;
	    }
	  }, interval);
	}
	
	// change opts to [{attr: 'top', unit: 'px', numbers: [1,2,2,...]}]
	function getAnimationProps(selector, opts, duration, easing, interval) {
	  var animationProps = [];
	  for (var i in opts) {
	    var attr = i;
	    var currentOriginValue = getStyle(selector, attr);
	    var currentValue = parseFloat(currentOriginValue);
	    var targetValue = parseFloat(opts[i]);
	    var unit = currentOriginValue.replace(currentValue, '');
	    animationProps.push({
	      attr: i,
	      numbers: generateNumber(currentValue, targetValue, duration, easing, interval),
	      unit: unit
	    });
	  }
	  return animationProps;
	}
	
	function getStyle(selector, attr) {
	  var dom = $(selector);
	  return window.getComputedStyle(dom, null)[attr];
	}
	
	function setStyle(selector, attr, value, unit) {
	  $(selector).style[attr] = '' + value + unit;
	}
	
	function $(selector) {
	  return document.querySelector(selector);
	}
	
	module.exports = domAnimate;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var generate = __webpack_require__(3);
	
	/**
	 * generate easing numbers [1,1,1,2,3,4,...]
	 */
	function generateNumber(beginValue, endValue, duration, easing, interval) {
	  verifyParams(duration, interval);
	  var count = duration / interval;
	  var times = endValue - beginValue;
	  var numbers = generate(easing, count, times).map(function (number) {
	    return (number + beginValue).toFixed(4);
	  });
	  return numbers;
	}
	
	function verifyParams(duration, interval) {
	  if (duration < interval || interval < 10) {
	    throw new Error('"duration" must greater than "interval" and "interval" should not less than 10');
	  }
	}
	
	module.exports = generateNumber;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	const generator = __webpack_require__(4)
	
	module.exports = generator

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,n){ true?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.generator=n():t.generator=n()}(this,function(){return function(t){function n(e){if(u[e])return u[e].exports;var r=u[e]={exports:{},id:e,loaded:!1};return t[e].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var u={};return n.m=t,n.c=u,n.p="",n(0)}([function(t,n,u){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}function r(t,n){for(var u=arguments.length<=2||void 0===arguments[2]?1:arguments[2],e=arguments.length<=3||void 0===arguments[3]?4:arguments[3],r=[],o=0;n>=o;o+=1){var i=c["default"][t](o/n).toFixed(e)*u;r.push(i)}return r}var o=u(7),c=e(o);t.exports=r},function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=1.70158;n.backIn=function e(t){function n(n){return n*n*((t+1)*n-t)}return t=+t,n.overshoot=e,n}(u),n.backOut=function r(t){function n(n){return--n*n*((t+1)*n+t)+1}return t=+t,n.overshoot=r,n}(u),n.backInOut=function o(t){function n(n){return((n*=2)<1?n*n*((t+1)*n-t):(n-=2)*n*((t+1)*n+t)+2)/2}return t=+t,n.overshoot=o,n}(u)},function(t,n){"use strict";function u(t){return 1-e(1-t)}function e(t){return(t=+t)<o?I*t*t:i>t?I*(t-=c)*t+a:s>t?I*(t-=f)*t+l:I*(t-=p)*t+O}function r(t){return((t*=2)<=1?1-e(1-t):e(t-1)+1)/2}Object.defineProperty(n,"__esModule",{value:!0}),n.bounceIn=u,n.bounceOut=e,n.bounceInOut=r;var o=4/11,c=6/11,i=8/11,a=.75,f=9/11,s=10/11,l=.9375,p=21/22,O=63/64,I=1/o/o},function(t,n){"use strict";function u(t){return 1-Math.sqrt(1-t*t)}function e(t){return Math.sqrt(1- --t*t)}function r(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}Object.defineProperty(n,"__esModule",{value:!0}),n.circleIn=u,n.circleOut=e,n.circleInOut=r},function(t,n){"use strict";function u(t){return t*t*t}function e(t){return--t*t*t+1}function r(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}Object.defineProperty(n,"__esModule",{value:!0}),n.cubicIn=u,n.cubicOut=e,n.cubicInOut=r},function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=2*Math.PI,e=1,r=.3;n.elasticIn=function o(t,n){function e(u){return t*Math.pow(2,10*--u)*Math.sin((r-u)/n)}var r=Math.asin(1/(t=Math.max(1,t)))*(n/=u);return e.amplitude=function(t){return o(t,n*u)},e.period=function(n){return o(t,n)},e}(e,r),n.elasticOut=function c(t,n){function e(u){return 1-t*Math.pow(2,-10*(u=+u))*Math.sin((u+r)/n)}var r=Math.asin(1/(t=Math.max(1,t)))*(n/=u);return e.amplitude=function(t){return c(t,n*u)},e.period=function(n){return c(t,n)},e}(e,r),n.elasticInOut=function i(t,n){function e(u){return((u=2*u-1)<0?t*Math.pow(2,10*u)*Math.sin((r-u)/n):2-t*Math.pow(2,-10*u)*Math.sin((r+u)/n))/2}var r=Math.asin(1/(t=Math.max(1,t)))*(n/=u);return e.amplitude=function(t){return i(t,n*u)},e.period=function(n){return i(t,n)},e}(e,r)},function(t,n){"use strict";function u(t){return Math.pow(2,10*t-10)}function e(t){return 1-Math.pow(2,-10*t)}function r(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}Object.defineProperty(n,"__esModule",{value:!0}),n.expIn=u,n.expOut=e,n.expInOut=r},function(t,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u(1),r=u(2),o=u(3),c=u(4),i=u(5),a=u(6),f=u(8),s=u(9),l=u(10),p=u(11),O={backIn:e.backIn,backOut:e.backOut,backInOut:e.backInOut,bounceIn:r.bounceIn,bounceOut:r.bounceOut,bounceInOut:r.bounceInOut,circleIn:o.circleIn,circleOut:o.circleOut,circleInOut:o.circleInOut,cubicIn:c.cubicIn,cubicOut:c.cubicOut,cubicInOut:c.cubicInOut,elasticIn:i.elasticIn,elasticOut:i.elasticOut,elasticInOut:i.elasticInOut,expIn:a.expIn,expOut:a.expOut,expInOut:a.expInOut,linear:f.linear,polyIn:s.polyIn,polyOut:s.polyOut,polyInOut:s.polyInOut,quadIn:l.quadIn,quadOut:l.quadOut,quadInOut:l.quadInOut,sinIn:p.sinIn,sinOut:p.sinOut,sinInOut:p.sinInOut};n["default"]=O},function(t,n){"use strict";function u(t){return+t}Object.defineProperty(n,"__esModule",{value:!0}),n.linear=u},function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=3;n.polyIn=function e(t){function n(n){return Math.pow(n,t)}return t=+t,n.exponent=e,n}(u),n.polyOut=function r(t){function n(n){return 1-Math.pow(1-n,t)}return t=+t,n.exponent=r,n}(u),n.polyInOut=function o(t){function n(n){return((n*=2)<=1?Math.pow(n,t):2-Math.pow(2-n,t))/2}return t=+t,n.exponent=o,n}(u)},function(t,n){"use strict";function u(t){return t*t}function e(t){return t*(2-t)}function r(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}Object.defineProperty(n,"__esModule",{value:!0}),n.quadIn=u,n.quadOut=e,n.quadInOut=r},function(t,n){"use strict";function u(t){return 1-Math.cos(t*c)}function e(t){return Math.sin(t*c)}function r(t){return(1-Math.cos(o*t))/2}Object.defineProperty(n,"__esModule",{value:!0}),n.sinIn=u,n.sinOut=e,n.sinInOut=r;var o=Math.PI,c=o/2}])});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var generateNumber = __webpack_require__(2);
	
	function scrollAnimate(targetValue) {
	  var _this = this;
	
	  var duration = arguments.length <= 1 || arguments[1] === undefined ? 500 : arguments[1];
	  var easing = arguments.length <= 2 || arguments[2] === undefined ? 'circleInOut' : arguments[2];
	
	  if (this.isScrolling) return;
	  var interval = this.interval;
	  var numbers = generateNumber(document.body.scrollTop || document.documentElement.scrollTop, targetValue, duration, easing, interval);
	  var numbersLength = numbers.length;
	  var numberIndex = 0;
	  this.isScrolling = true;
	  var tick = setInterval(function () {
	    window.scrollTo(0, numbers[numberIndex]);
	    numberIndex++;
	    if (numberIndex >= numbersLength) {
	      clearInterval(tick);
	      _this.isScrolling = false;
	    }
	  }, interval);
	}
	
	module.exports = scrollAnimate;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ease-animate.js.map