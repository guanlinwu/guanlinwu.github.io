(function() {
    'use strict';

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    //获取常规变量
    var canvas = document.getElementById('particles'),
        ctx = canvas.getContext('2d');
    // 如果不支持canvas
    if (ctx == undefined) {
        return;
    }

    var cwidth = canvas.width = canvas.offsetWidth,
        cheight = canvas.height = canvas.offsetHeight,
        circles = [];

    // 点的数量
    var POINTNUM = window.innerWidth > 750 ? 50 : 30;

    window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
    }();
    // 设置圆的填充颜色和线条颜色
    ctx.fillStyle = 'rgba(5, 131, 234, 0.6)';
    ctx.strokeStyle = 'rgba(120, 120, 120, 0.1)';

    //生成start ～ end随机数
    var random = function random(start, end) {
    if (arguments.length < 2) {
        end = start;
        start = 1;
    }
    return Math.floor(Math.random() * (end - start + 1) + 1);
    };

    // 每个圆的构造函数

    var Circle = function () {
    function Circle(x, y) {
        _classCallCheck(this, Circle);

        this.x = x;
        this.y = y;
        this.r = random(0.5, 8);
        this.vx = random(2) - 1.5 || 1;
        this.vy = random(2) - 1.5 || 1;
    }

    _createClass(Circle, [{
        key: 'drawCircle',
        value: function drawCircle() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 360);
        ctx.closePath();
        ctx.fill();
        }
    }, {
        key: 'drawLine',
        value: function drawLine(nextCircle) {
        var dx = this.x - nextCircle.x,
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
    }, {
        key: 'move',
        value: function move(w, h) {
        // this.vx = this.x < w && this.x > 0 ? this.vx : -this.vx;
        // this.vy = this.y < h && this.y > 0 ? this.vy : -this.vy;
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
        this.x += this.vx / 4;
        this.y += this.vy / 4;
        }
    }]);

    return Circle;
    }();

    //初始化


    var init = function init() {
    for (var i = 0; i < POINTNUM; i++) {
        circles.push(new Circle(random(cwidth), random(cheight)));
    }

    draw();
    };

    //画图
    var draw = function draw() {
    ctx.clearRect(0, 0, cwidth, cheight);
    for (var i = 0; i < POINTNUM; i++) {
        circles[i].move(cwidth, cheight);
        circles[i].drawCircle();

        for (var j = i + 1; j < POINTNUM; j++) {
        circles[i].drawLine(circles[j]);
        }
    }
    requestAnimationFrame(draw);
    };

    window.onload = function () {
        init();
    };
})()