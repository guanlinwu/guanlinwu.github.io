---
title: Css常用集合（不断更新收集）
date: 2017-07-03 15:13:18
tags: [Css]
---

Css常用集合代码片段（不断更新收集）
<!--more-->
```css
/*字数超过显示省略号*/
.ellipsis{overflow: hidden; white-space: nowrap; word-break: keep-all; text-overflow: ellipsis;}

/*超过N行后就显示省略号，这里n=2 不要定死高度*/
.showNRow{overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;white-space: normal;word-break: break-all;}

/*渐变*/
.gradient{filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff3c9b',endColorstr='#e61f80');background:-ms-linear-gradient(top, #ff3c9b, #e61f80);/*IE10*/background: -webkit-gradient(linear, 0 0, 0 100%, from(#ff3c9b), to(#e61f80));background: -moz-linear-gradient(top, #ff3c9b, #e61f80); }

/*去掉select外形*/
{-webkit-appearance: none;border: none;outline:none;}

/*1px 细线*/
.line{ content:""; position: absolute; top: 0; left:0; right:0; border-top:1px solid #c8c7cc; -webkit-transform:scaleY(.5); -webkit-transform-origin:0 0; pointer-events:none;}

/*背景斜线*/
.bgline45double{-webkit-gradient(linear,100% 0, 0 100%,color-stop(.25, rgba(240, 240, 240, .2)), color-stop(.25, transparent),color-stop(.5, transparent), color-stop(.5, rgba(240, 240, 240, .2)),color-stop(.75, rgba(240, 240, 240, .2)), color-stop(.75, transparent),to(transparent)),-webkit-gradient(linear,0 100%, 100% 0,color-stop(.25, rgba(240, 240, 240, .2)), color-stop(.25, transparent),color-stop(.5, transparent), color-stop(.5, rgba(240, 240, 240, .2)),color-stop(.75, rgba(240, 240, 240, .2)), color-stop(.75, transparent),to(transparent));background-size: 14px 14px;}
.bgline45{background-image: -webkit-gradient(linear,0 100%, 100% 0,color-stop(.25, rgba(240, 240, 240, .2)), color-stop(.25, transparent),color-stop(.5, transparent), color-stop(.5, rgba(240, 240, 240, .2)),color-stop(.75, rgba(240, 240, 240, .2)), color-stop(.75, transparent),to(transparent));background-size: 14px 14px;}

/*1px 边框*/
{   content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-color: #000;
    border-width: 1px;
    border-style: solid;
    width: 200%;
    height: 200%;
    -webkit-transform: scale(.5);
    -webkit-transform-origin: 0 0;
    pointer-events: none;
}

/*bug
1. line-height，要块级才可以定义
2. 解决内层margin 不撑开外层， 外层加overflow:hidden; 或者外层padding: 1;
*/

/*设置input placeholder的颜色*/
::-webkit-input-placeholder{}

/*去除移动端touch事件阴影*/
*{-webkit-tap-highlight-color: rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;}

/*background-attachment:fixed ios 无效 解决方法*/
.u-fix-img {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
    background-color: transparent;
    background-repeat: repeat;
    height: 100%;
    width: 100%;
}

z-index: -1; ！！
```