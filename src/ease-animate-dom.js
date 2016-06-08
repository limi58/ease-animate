const generateNumber = require('./generate-number.js')

// dom animate main controller
function domAnimate(selector, opts, duration = 500, easing = 'easeInQuad'){
  const animationProps = getAnimationProps(selector, opts, duration, easing, this.interval)
  startDomAnimate(selector, animationProps, this.interval)
}

// let dom animate
function startDomAnimate(selector, animationProps, interval){
  let numberIndex = 0
  const numbersLength = animationProps[0].numbers.length
  const tick = setInterval(() => {
    animationProps.forEach(prop => {
      setStyle(selector, prop.attr, prop.numbers[numberIndex], prop.unit)
    })
    numberIndex ++
    if(numberIndex >= numbersLength) clearInterval(tick)
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