# Chore

## iterable

- ES6 引入`iterable`类型，用于遍历` Map``Set `，具有 iterable 类型的集合可以通过 `for...of`循环来遍历, 最好的方法是使用 forEach 方法来遍历
- `for...in`与`for...of`的区别？

```js
// for..in 实际上遍历的是对象的属性名称， length却不会被遍历出来
let a = [1, 2, 3];
a.name = 'hello';
for (x in a) {
  console.log(x); //'0', '1', '2', 'name'
}
// for...of 完全修复了这些问题
let a = ['A', 'B', 'C'];
a.name = 'hello';
for (x of a) {
  console.log(x); //'A', 'B', 'C'
}
```

## Map

- `Map`是一组键值对的结构，具有极快的查找速度

```js
var m = new Map([
  ['Michael', 95],
  ['Bob', 75],
  ['Tracy', 85],
]);
m.get('Michael'); // 95
//初始化一个map需要一个二维数组或者一个空map
var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'
m.get('Adam'); // undefined
//一个key只能对应一个value，前面的值会被后面的值覆盖
var m = new Map();
m.set('Adam', 67);
m.set('Adam', 88);
m.get('Adam'); // 88
```

## Set

- `Set`和`Map`类似，也是一组 key 的集合，但不存储 value。由于 key 不能重复，所以，在 Set 中，没有重复的 key。

```js
//重复的元素会被Set自动过滤
var s = new Set([1, 2, 3, 3, '3']);
s; // Set {1, 2, 3, "3"}
//通过add(key)方法可以添加元素到Set中，可以重复添加，但不会有效果
s.add(4);
s; // Set {1, 2, 3, 4}
s.add(4);
s; // 仍然是 Set {1, 2, 3, 4}
//通过delete(key)方法可以删除元素
var s = new Set([1, 2, 3]);
s; // Set {1, 2, 3}
s.delete(3);
s; // Set {1, 2}
```

## 数组引用类型去重

- 利用 reduce 方法 + 对象 key 值唯一的特效实现去重

```js
const arr = [
  { key: 1, name: 'wy' },
  { key: 1, name: 'yss' },
];
const hash = {};
arr = arr.reduce((p, c) => {
  hash[c.key] ? '' : (hash[c.key] = true && p.push(c));
  return p;
}, []);
```
