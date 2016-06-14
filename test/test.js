const assert = require('chai').assert
const Animate = require('../dist/ease-animate.min.js')
const generateNumber = require('../src/generate-number.js')

describe('test generate-number', () => {
  it('generateNumber should return a array', () => {
    const numbers = generateNumber(0, 100, 1000, 'quadInOut', 10)
    assert.isArray(numbers)
  })
  it('duration less than interval or interval less than 10 will throw error', () => {
    assert.throws(() => generateNumber(0, 100, 9, 'quadInOut', 9))
    assert.throws(() => generateNumber(0, 100, 9, 'quadInOut', 10))
  })
})

describe('test Animate class', () => {
  it('Animate can create instance', () => {
    const animate = new Animate()
    assert.doesNotThrow(() => {const animate = new Animate()})
  })
})