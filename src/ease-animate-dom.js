const generateNumber = require('./generate-number.js')

// opts: selector, opts, duration = 500, easing = 'quadInOut', onDone,
function domAnimate(opts){
  const selector = opts.selector
  const _opts = opts.opts
  const duration = opts.duration || 500
  const easing = opts.easing || 'quadInOut'
  const animationProps = getAnimationProps(selector, _opts, duration, easing, this.interval)
  const onDone = opts.onDone
  startDomAnimate.call(this, selector, animationProps, this.interval, onDone)
}

// let dom animate
function startDomAnimate(selector, animationProps, interval, onDone){
  let numberIndex = 0
  const numbersLength = animationProps[0].numbers.length
  this.isDomRunning = true
  const tick = setInterval(() => {
    animationProps.forEach(prop => {
      setStyle(selector, prop.attr, prop.numbers[numberIndex], prop.unit)
    })
    numberIndex ++
    if(numberIndex >= numbersLength) {
      clearInterval(tick)
      this.isDomRunning = false
      if (onDone) onDone()
    }
  }, interval)
}

// change opts to [{attr: 'top', unit: 'px', numbers: [1,2,2,...]}]
function getAnimationProps(selector, opts, duration, easing, interval){
  const animationProps = []
  for(let i in opts){
    const attr = i
    const currentOriginValue = getStyle(selector, attr)
    const currentValue = parseFloat(currentOriginValue)
    const targetValue = parseFloat(opts[i])
    const unit = currentOriginValue.replace(currentValue, '')
    animationProps.push({
      attr: i,
      numbers: generateNumber(currentValue, targetValue, duration, easing, interval),
      unit: unit,
    })
  }
  return animationProps
}

function getStyle(selector, attr){
  const dom = $(selector)
  return window.getComputedStyle(dom, null)[attr]
}

function setStyle(selector, attr, value, unit){
  $(selector).style[attr] = `${value}${unit}`
}

function $(selector){
  return document.querySelector(selector)
}

module.exports = domAnimate
