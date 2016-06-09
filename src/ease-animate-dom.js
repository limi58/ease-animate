'use strict';

var generateNumber = require('./generate-number.js');

// dom animate main controller
function domAnimate(selector, opts) {
  var duration = arguments.length <= 2 || arguments[2] === undefined ? 500 : arguments[2];
  var easing = arguments.length <= 3 || arguments[3] === undefined ? 'easeInQuad' : arguments[3];

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