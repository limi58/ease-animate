const generate = require('ease-generator')

/**
 * generate easing numbers [1,1,1,2,3,4,...]
 */
function generateNumber(beginValue, endValue, duration, easing, interval){
  verifyParams(duration, interval)
  const count = duration / interval
  const times = endValue - beginValue
  const numbers = generate(easing, count, times).map(number => (number + beginValue).toFixed(4))
  return numbers
}

function verifyParams(duration, interval){
  if(duration < interval || interval < 10){
    throw new Error('"duration" must greater than "interval" and "interval" should not less than 10')
  }
}

module.exports = generateNumber