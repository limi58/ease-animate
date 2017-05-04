const generateNumber = require('./generate-number.js')

// opts: targetValue, duration = 500, easing = 'circleInOut', onDone,
function scrollAnimate(opts){
  if(this.isScrolling) return
  const interval = this.interval
  const numbers = generateNumber(
    document.body.scrollTop || document.documentElement.scrollTop,
    opts.targetValue,
    opts.duration || 500,
    opts.easing || 'circleInOut',
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
      if (opts.onDone) opts.onDone()
    }
  }, interval)
}

module.exports = scrollAnimate
