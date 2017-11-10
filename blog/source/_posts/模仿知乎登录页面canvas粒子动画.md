---
title: 模仿知乎登录页面canvas粒子动画
date: 2017-07-04 09:52:26
tags: [JavaScript]
---
最近给自己的github pages 搞一个动画，想到了知乎登录背景的粒子效果，于是模仿着用es6写一个，放在自己github pages 的banner上。
先上图。

![模仿知乎登录背景效果](/images/zhihu_1.gif)

<!--more-->
## 技术
canvas

## 思路

- 每一个圆都是一个构造函数的实例，都有自己的属性和函数,然后创建一定数量的圆实例对象
    - 属性：
        - 圆的中心的 x 坐标
        - 圆的中心的 y 坐标
        - 圆的半径r
        - x 方向的移动速度
        - y 方向的移动速度
    - 函数
        - 构造函数
        - 画圆函数
        - 画直线函数
        - 移动函数
- 画圆和直线。每个圆实例对象都调用画圆函数，在canvas上画出圆点，然后调用画直线函数，通过循环，判断圆与圆之间的距离，符合距离的就在圆心与圆心之间画直线

- 移动。有了圆心x，y坐标位置和每个方向的速度，就可以每帧去移动x，y坐标的位置。

- 每帧更新。

## 代码
```javascript
// 点的数量
const POINTNUM = 70;
//获取常规变量
let canvas = document.getElementById('particles'),
    ctx = canvas.getContext('2d'),
    cwidth = canvas.width = canvas.offsetWidth,
    cheight = canvas.height = canvas.offsetHeight,
    circles = [];

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

// 设置圆的填充颜色和线条颜色
ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
ctx.strokeStyle = 'rgba(0, 0, 255, 0.1)';

//生成start ～ end随机数
const random = function(start, end) {
    if (arguments.length < 2) {
        end = start;
        start = 1;
    }
    return Math.floor(Math.random() * (end - start + 1) + 1);
}

// 每个圆的构造函数
class Circle {
  // 构造函数
  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.r = random(0.5, 10);
    this.vx = random(2) - 1.5 || 1;
    this.vy = random(2) - 1.5 || 1;
  }
  //画圆
  drawCircle () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 360);
    ctx.closePath();
    ctx.fill();
  }
  // 判断该圆与传入的圆之间的距离，然后在一定距离的话就画直线
  drawLine (nextCircle) {
    let dx = this.x - nextCircle.x,
        dy = this.y - nextCircle.y,
        distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 200) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(nextCircle.x, nextCircle.y);
        ctx.closePath();
        ctx.stroke();
    }
  }
  // 移动
  move (w, h) {
    // this.vx = (this.x < w && this.x > 0) ? this.vx: ( - this.vx);
    // this.vy = (this.y < h && this.y > 0) ? this.vy: ( - this.vy);
    /**
     * 这里可以优化
     */
    if (this.vx > 0) {
        this.vx = (this.x + this.r < w) ? this.vx: ( - this.vx);
    } else {
        this.vx = (this.x < this.r) ? ( - this.vx) : this.vx;
    }
    if (this.vy > 0) {
        this.vy = (this.y + this.r < h) ? this.vy: ( - this.vy);
    } else {
        this.vy = (this.y < this.r) ? ( - this.vy) : this.vy;
    }
    this.x += this.vx/2;
    this.y += this.vy/2;
  }
}

//初始化
const init = () => {
  for(let i=0; i<POINTNUM; i++) {
    circles.push(new Circle(random(cwidth), random(cheight)))
  }

  draw();
}

//每帧绘制
const draw = () => {
    ctx.clearRect(0, 0, cwidth, cheight);
    for(let i=0; i<POINTNUM; i++) {
        circles[i].move(cwidth, cheight);
        circles[i].drawCircle();

        for (let j=i + 1; j<POINTNUM; j++) {
            circles[i].drawLine(circles[j]);
        }
    }
    requestAnimationFrame(draw);
}

// 在window加载完后执行
window.onload = () => {
  init();
}
```
<!--more-->

## 完成