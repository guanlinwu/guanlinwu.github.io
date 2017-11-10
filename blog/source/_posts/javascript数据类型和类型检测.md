---
title: JavaScript数据类型和类型检测
date: 2017-07-06 15:35:27
tags: [JavaScript]
---
## JavaScript数据类型分为基本类型和引用类型

基本类型包括：
Number
String
Boolean
Null
Undefined
Symbol (es6)

引用类型：
Object

<!--more-->
## 等号判断
- == 判断
    ```javascript
        '1.23' == 1.23
        0 == false
        null == undefined
        new Object() == new Object()
    ```
- === 判断
    - 类型不同，返回false
    - 类型相同
    ```javascript
        NaN ≠ NaN
        new Object ≠ new Object
        null === null
        undefined === undefined
    ```

## 类型检测
类型检测常用的方法有 typeof、instanceof、Object.prototype.toString

### typeof 适合基本类型及function检测，遇到null失效
typeof 能检测出的值为 number、boolean、string、function、object、undefined

```javascript
typeof 100 === 'number'
typeof true === 'boolean'
typeof function () {} === 'function'
typeof undefined === 'undefined'
typeof new Object() === 'object'
typeof [1， 2]  === 'object'
typeof NaN === 'number'
typeof null === 'object'
```
要检测Object的具体类型，可以用instanceof

### instanceof 适合自定义对象，也可以用来检测原生对象


### Object.prototype.toString
通过{}.toString拿到，适合内置对象和基元类型，遇到null和undefined失效(IE678等返回[object Object])

```javascript
Object.prototype.toString.apply([]); === '[object Array]';
Object.prototype.toString.apply(function(){}); === '[object Function]';
Object.prototype.toString.apply(null); === '[object Null]'
Object.prototype.toString.apply(undefined); === '[object Undefined]'

//IE6/7/8 Object.prototype.toString.apply(null) 返回”[object Object]”
```