# ease-animate

[![Build Status](https://travis-ci.org/limi58/ease-animate.svg?branch=master)](https://travis-ci.org/limi58/ease-animate)

A javascript ease animate library

# Usage
**install**

```
npm install --save ease-animate
```

or

```html
<script type="text/javascript" src='./dist/ease-animate.min.js'></script>
```

**run**

```js
const animate = new Animate()
```

**dom animate**

```js
animate.domAnimate({
  selector: '#ele',
  opts: {top: 200, left: 500},
  duration: 1000,
  onDone () {
    console.log('dom done')
  },
})
```

**scrollbar animate**

```js
animate.scrollAnimate({
  targetValue: 0,
  duration: 1000,
  onDone () {
    console.log('scroll done')
  },
})
```

# API

## new Animate()

### domAnimate()

**void domAnimate(opts) dom animation**

**opts:**

`selector` element selector

`opts` css attribute and value

`[duration]` default 500

`[easing]` ease type, default 'quadInOut'

### scrollAnimate()

**void animate.scrollAnimate(opts) scrollbar animation**

**opts:**

`position` target position

`[duration]` default 500, ms

`[easing]` default 'circleInOut'

### isScrolling
is scrolling

### isDomRunning
is dom animating

# easing
see [ease-generator](https://github.com/limi58/ease-generator#generator)

# demo
[here](demo/demo.html)

# browser support
excluding ie8-
