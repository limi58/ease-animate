'use strict';

var domAnimate = require('./ease-animate-dom.js');
var scrollAnimate = require('./ease-animate-scroll.js');

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