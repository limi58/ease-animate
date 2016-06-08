# ease-animate
let everything ease animate

# Usage 
引入js
```html 
<script type="text/javascript" src='../dist/ease-animate.js'></script>
```

实例化
```js
const animate = new Animate()
```

dom 缓动
```js 
animate.domAnimate('#ele', {top: 200, left: 500}, 1000, 'easeInOutBounce')
```

滚动条缓动
```js 
animate.scrollAnimate(0)
```

# animate API

## domAnimate

**domAnimate(selector, opts, [duration], [easing])**

dom 元素动画

selector: 类 css 选择器，不支持多个

opts: 包含属性和目标属性值

duration: 可选，运动时间，单位ms，默认500

easing: 可选，缓动类型，默认 `easeInQuad`

## scrollAnimate

**animate.scrollAnimate(position)**

滚动条运动

position: 滚动到xx位置

# easing 
参考 [jquery.easing](https://github.com/gdsmith/jquery.easing)

# demo
[here](demo/demo.html)

# browser support
excluding ie8-
