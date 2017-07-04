---
title: React自研篇
date: 2017-06-27 10:20:54
tags: [React, 项目]
---

在唯品会离职之前就学习React语法以及了解Flux，离职之后，当然是学会使用它。
第一次接触React，就觉得JSX语法能很简单、明了、直观地去开发组件，虽然React只是单向流的view层框架，可是结合Redux，就能支撑起庞大的单页面应用。抽象的虚拟Dom，极快的diff算法，提高了性能。
而且，学一套React语法，还可以跨端开发，能够用React Native去开发App。

下面列一下自己学习React过程中的知识大纲。
<!--more-->

## React Element 与 React Component
React Element描述了在屏幕上看到的内容，代表了DOM节点的对象，具有描述DOM对象的属性，如type，props，ref······

React Component 是一个函数或者一个类，接受参数并返回了一个React element。

## React 生命周期

+ Mounting
    - getDefaultProps
    - getInitialState
    - componentWillMount
    - render
    - componentDidMount

+ Updating
    - componentWillReceiveProps
    - shouldComponentUpdate
    - componentWillUpdate
    - render
    - componentDidUpdate

+ Unmounting
    - componentWillUnmount

## 虚拟DOM

## React 优化
+ shouldComponentUpdate
+ 有状态和无状态组件
+ immutable
+ 服务端渲染

## Redux
[Redux文档](http://www.redux.org.cn/docs/react-redux/quick-start.html)
Redux的源码不大，可是很精妙，使用单一树更好地管理数据，所有的 state 都以一个对象树的形式储存在一个单一的 store 中。
流向的过程：
view ---> action ---> reducer ---> store(state) ---> view
一、Action
Action 的任务是描述发生的任务
二、Reducer
Reducer 的任务是根据传入的 Action 对象去修改状态树
三、Store
Store 就是把 Reducer 和 action 联系到一起的对象
在 createStore源码中可以看到store返回的对象：
```javascript
  //createStore
  return {
    dispatch,//提供 dispatch(action) 方法更新 state
    subscribe,//通过 subscribe(listener) 注册监听器
    getState,//getState() 方法获取 state；
    replaceReducer,
    [$$observable]: observable
  }
```

## 自学实践
还没有机会能够用到公司项目中，离职前其实已经在用react去重构唯品会viva产品化项目渲染页了，因为考虑到，通过生成器，每个活动页会生成一堆单一状态的json，然后根据json去构建组件，派发事件，刚刚React+Redux 是最好的实践，单一树状态的单向管理，肯定可以提高项目的渲染效率和体验。

可是我自己自研尝试了下。没有主题地搞了个脚手架和简单页面，不过也基本包含了方方面面。
小项目（[前端部分Github代码](https://github.com/guanlinwu/reduxplatform/tree/v3.0/fontend)）涉及的：es6 + React + Redux + React-Router + Sass + Iconfont

项目脚手架一开始是自己用Webpack1搭建的，后来自己升级了Webpack2，再后来参考了官方facebook的create-app脚手架，就把它搬过来了，目录架构是根据实际情况搭的。

目录结构如下：
![react](/images/react_1.png)

页面展示：

![react](/images/react_4.png)
![react](/images/react_3.png)
![react](/images/react_5.png)
![react](/images/react_2.png)