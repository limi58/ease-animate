'use strict';

var generateNumber = require('./generate-number.js');

function scrollAnimate(targetValue) {
  var _this = this;

  var duration = arguments.length <= 1 || arguments[1] === undefined ? 500 : arguments[1];
  var easing = arguments.length <= 2 || arguments[2] === undefined ? 'easeInQuad' : arguments[2];

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