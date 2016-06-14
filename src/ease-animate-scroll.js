const generateNumber = require('./generate-number.js')

function scrollAnimate(targetValue, duration = 500, easing = 'circleInOut'){
  if(this.isScrolling) return
  const interval = this.interval
  const numbers = generateNumber(
    document.body.scrollTop || document.documentElement.scrollTop,
    targetValue, 
    duration, 
    easing, 
    interval
  )
  const numbersLength = numbers.length
  let numberIndex = 0
  this.isScrolling = true
  const tick = setInterval(() => {
    window.scrollTo(0, numbers[numberIndex])
    numberIndex ++
    if(numberIndex >= numbersLength) {
      clearInterval(tick)
      this.isScrolling = false
    }
  }, interval)
}

module.exports = scrollAnimate