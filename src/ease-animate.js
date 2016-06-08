const domAnimate = require('./ease-animate-dom.js')
const scrollAnimate = require('./ease-animate-scroll.js')

function Animate(){
  this.interval = 10
}

Animate.prototype = {
  domAnimate,
  scrollAnimate,
}

try{
  module.exports = Animate
  window['Animate'] = Animate
}catch(e){

}

