const domAnimate = require('./ease-animate-dom.js')
const scrollAnimate = require('./ease-animate-scroll.js')

function Animate(){
  this.interval = 10
  this.isDomRunning = false
  this.isScrolling = false
}

Animate.prototype = {
  domAnimate,
  scrollAnimate,
}

module.exports = Animate

