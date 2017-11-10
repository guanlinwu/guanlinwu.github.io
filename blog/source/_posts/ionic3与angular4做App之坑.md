---
title: ionic3与angular4做App之坑
date: 2017-09-01 09:25:38
tags: [项目, Angular]
---
最近用ionic3和angular4做一个App，涉及的知识比较多，也上手了typescript。下面记录下遇到的坑。

## 用angular的ngClass切换class时，在iPhone上点击会闪烁
这个class是控制页面是否能够滚动的，就是一个样式overflow： hidden。
```html
<ion-content [ngClass]="{'f-no-scroll': isShowMenu}">
······
<button class="menu" ion-button clear tappable (click)="toggleMenu($event)">
    <ion-icon name="menu"></ion-icon>
</button>
```
```scss
.f-no-scroll {
  .scroll-content {
    overflow: hidden;
  }
}
```
在浏览器上是不会闪的，没想到在app上面，点击按钮显示菜单的时候，竟然会闪烁，把[ngClass]="{'f-no-scroll': isShowMenu}"这段去掉后，就不闪烁了，应该是设置overflow的时候，导致了重排reflow。
<!-- more -->
```
什么时候会导致reflow发生呢？ 参考@see http://caibaojian.com/css-reflow-repaint.html

-改变窗口大小
-改变文字大小
-添加/删除样式表
-内容的改变，(用户在输入框中写入内容也会)
-激活伪类，如:hover
-操作class属性
-脚本操作DOM
-计算offsetWidth和offsetHeight
-设置style属性
-常见的重排元素
width	height	padding	margin
display	border-width	border	top
position	font-size	float	text-align
overflow-y	font-weight	overflow	left
font-family	line-height	vertical-align	right
clear	white-space	bottom	min-height
```

所以灵机一动，想到了用js去控制吧，又不影响css，那就是把touchmove事件的默认行为取消掉就行了。
```typescript
  /**
   * 有bug，在app下切换class竟然会闪
   * 所以用js来控制，当菜单弹出的时候，阻止手势滑动事件的默认行为
   *
   * @param {any} event
   * @memberof MakeProfilePage
   */
  stopScroll (event: any) {
    if (this.isShowMenu && event && event.preventDefault) {
      event.preventDefault();
    }
  }
```

## click事件点击一次会触发两次bug
这是因为调用了两次IonicModule.forRoot，会导致重复绑定。当时因为组件化，组件是需要引用到IonicModule的标签，所以在components.modules.ts用了IonicModule.forRoot(TutorialComponent)。
解决方法： 把IonicModule.forRoot(TutorialComponent)，改为把IonicModule就行。
```typescript
//components.modules.ts

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TutorialComponent } from './tutorial/tutorial';
@NgModule({
	declarations: [TutorialComponent],
	imports: [IonicModule.forRoot(TutorialComponent)],/** 此处遇到坑，如果组件中用到ionic的组件，要加上 IonicModule.forRoot */
	exports: [TutorialComponent]
})
export class ComponentsModule {}

```

```typescript
//app.modules.ts
...
@NgModule({
...
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ComponentsModule
  ],
...
})
...
```