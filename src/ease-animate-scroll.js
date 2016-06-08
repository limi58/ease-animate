const generateNumber = require('./generate-number.js')

function scrollAnimate(targetValue, duration = 500, easing = 'easeInQuad', interval = 10){
  const numbers = generateNumber(
    document.body.scrollTop || document.documentElement.scrollTop,
    targetValue, 
    duration, 
    easing, 
    interval
  )
  const numbersLength = numbers.length
  let numberIndex = 0
  const tick = setInterval(() => {
    window.scrollTo(0, numbers[numberIndex])
    numberIndex ++
    if(numberIndex >= numbersLength) clearInterval(tick)
  }, interval)
}

module.exports = scrollAnimate