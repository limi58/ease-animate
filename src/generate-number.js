'use strict';

var Eases = require('./Eases.js');

/**
 * generate easing numbers [1,1,1,2,3,4,...]
 */
function generateNumber(beginValue, endValue, duration, easing, interval) {
  verifyParams(duration, interval);
  var eases = new Eases();
  var numbers = [];
  for (var i = 0; i <= duration; i += interval) {
    numbers.push(eases[easing](i, beginValue, endValue - beginValue, duration).toFixed(2));
  }
  return numbers;
}

function verifyParams(duration, interval) {
  if (duration < interval || interval < 10) {
    throw new Error('"duration" must greater than "interval" and "interval" should not less than 10');
  }
}

module.exports = generateNumber;