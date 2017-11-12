---
title: Vue自研篇
date: 2017-06-27 23:51:50
tags: [Vue, 项目]
---

Vue是当前非常火热的前端框架之一，特别是vue2.0，强劲了不少。
趁着做外包系统（[Github代码](https://github.com/guanlinwu/quanjian/tree/v2/frontend)），就用vue2.0 + vue-router + axios + vue-cli + element-ui + electron 去实践了一下。
最终，代码用vue开发，然后打包成一个electron桌面应用程序。
由于上传的代码没有完整的后端接口，所以自己用node + express写了一个个性化的假数据服务器。

<!--more-->

## 前端目录结构如下：
![目录结构](/images/vue_1.png)

## 解释一下src目录
```
+ src
    - api           管理接口medel层，每一个模块一个文件，如会员管理模块，商品管理模块
    - components    故名思义，就是存放组件的文件，里面还会细分
    - router        路由管理
    - styles        基础样式管理
    - utils         工具函数，如重新封装的axios, localstorage
    - views         管理每个页面的容器
    - App.vue       入口组件大容器
    - main.js       入口js
    - assets        暂时存放图片s
```

## express假数据服务器
（[Github代码](https://github.com/guanlinwu/quanjian/tree/v2/frontend/mock)）
感觉写得有点像模块化，每个文件对应每部分的接口，用node去读取该文件夹的文件，把所有接口整理成一个对象，然后用一个工厂函数统一处理接口。后续继续补充

## 总结
之前有看过vue语法，也有看它双向绑定的原理（核心函数Object.defineproperty），如今在一个外包中实践了vue全家桶，学习了一遍语法和关键函数，也了解了vue的一些生命周期，学习了如何使用vue组件，也学习了饿了么的element-ui框架，根据项目情况去定义文件夹和管理架构，后端接口采用的是restful架构，合作起来效率极高。

## 部分界面
![登陆](/images/vue_2.png)
![会员](/images/vue_3.png)
![销售](/images/vue_4.png)
![销售](/images/vue_5.png)
