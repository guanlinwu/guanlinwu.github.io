---
title: JavaScript易漏基础笔记（不断学习不断更新）
date: 2017-07-25 10:20:26
tags: [JavaScript]
---
最近一段时间在重温JavaScript基础，温故而知新，记录下一些容易漏掉的细节。

# 一 对象
### hasOwnProperty()：
如果in判断一个属性存在，这个属性不一定是改实例的，它可能是该实例继承得到的；
要判断一个属性是否是自身拥有的，而不是继承得到的，可以用hasOwnProperty()方法。

```javascript
let obj = {
    name: 'xxx'
};
obj.hasOwnProperty('name'); // true
obj.hasOwnProperty('toString'); // false
```

<!-- more -->
# 二 条件判断
### true or false：
JavaScript把null、undefined、0、NaN和空字符串''视为false，其他值一概视为true

# 三 循环
### for ... in：
for ... in循环，它可以把一个对象的所有属性依次循环出来：
```javascript
let obj = {
    name: 'xxx',
    age: '22'
};

for (let key in obj) {
    console.log(key); // 'name', 'age'
}
```

可以用上述的hasOwnProperty() 过滤继承的属性。

对于Array，每个元素的索引被视为对象的属性，for ... in循环会循环出Array的索引：
```javascript
let array = ['apple', 'banana', 'grape'];
for (let i in array) {
    console.log(i); // '0', '1', '2'
    console.log(array[i]); // 'apple', 'banana', 'grape'
}
```

# 四 关于箭头函数的this
this在箭头函数中已按照词法作用域绑定了，用call()或者apply()调用箭头函数时，无法对this进行绑定