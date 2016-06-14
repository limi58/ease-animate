# ease-animate

[![Build Status](https://travis-ci.org/limi58/ease-animate.svg?branch=master)](https://travis-ci.org/limi58/ease-animate)

A javascript library want let everything ease animate

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
animate.domAnimate('#ele', {top: 200, left: 500}, 1000, 'easeInOutBounce')
```

**scrollbar animate**

```js 
animate.scrollAnimate(0)
```

# API

## new Animate()
实例化 Animate

### domAnimate()

**void domAnimate(str selector, obj opts, [num duration = 500], [str easing = 'quadInOut']) dom 元素动画**

selector: 类 css 选择器，不支持多个

opts: 包含属性和目标属性值

duration: 可选，运动时间，单位ms，默认500

easing: 可选，缓动类型，默认 `quadInOut`

### scrollAnimate()

**void animate.scrollAnimate(num position [, num duration = 500] [, str easing = 'circleInOut']) 滚动条运动**

position: 滚动到xx位置

duration: 可选，运动时间，单位ms，默认500

easing: 可选，缓动类型，默认 `circleInOut`

### isScrolling
返回boolean，判断scrollAnimate()是否正在跑

### isDomRunning
返回boolean，判断domAnimate()是否正在跑

# easing 
缓动类型参考 [ease-generator](https://github.com/limi58/ease-generator#generator)

# demo
[here](demo/demo.html)

# browser support
excluding ie8-
