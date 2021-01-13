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

## WebSocket

- `websocket` 是一个持久化的网络通信协议，可以在单个 TCP 链接上进行全双工通讯，没有了 request 和 response 的概念，链接一旦建立，客户端和服务器端之间实时进行双向数据传输

## Promise

- 定义

  - 解决异步操作带来的回调地狱的问题

- 方法

  - **Promise.all()**

    - 接受一个 promise 实例组成数组(也可以包含变量)，当每个实例都 resolve 的时候，then 方法的参数中可以拿到每个实例 resovle 的值组成的数组(该数组的值的顺序与传进 all 方法的数组的顺序是对应的，即使包含变量，也是对应的)，当有一个实例 reject 的时候，则不会执行`then`方法，个人理解类似数组的`every`方法

  - **Promise.finally()**

    - 无论 promise 实例是成功还是失败都会执行的方法

  - **Promise.race()**

    - 接受的参数与 `all` 方法类似，返回的值是用时最短的 promsie 实例 resovle 的值, 当包含同步程序的时候，首先返回同步程序的值，当有 reject 时，会报 waring，并且在`then`方法的回调中拿不到值

  - **Promise.resolve()**

    - 方法返回一个以给定值解析后的 Promise 对象。如果这个值是一个 promise ，那么将返回这个 promise ；如果这个值是 thenable（即带有"then" 方法），返回的 promise 会“跟随”这个 thenable 的对象，采用它的最终状态；否则返回的 promise 将以此值完成。此函数将类 promise 对象的多层嵌套展平。

## Session Cookie

- session 存储于服务器，可以理解为一个状态列表，拥有一个唯一识别符号 sessionId，通常存放于 cookie 中。服务器收到 cookie 后解析出 sessionId，再去 session 列表中查找，才能找到相应 session。依赖 cookie
- cookie 类似一个令牌，装有 sessionId，存储在客户端，浏览器通常会自动添加。
- token 也类似一个令牌，无状态，用户信息都被加密到 token 中，服务器收到 token 后解密就可知道是哪个用户。需要开发者手动添加。
- jwt 只是一个跨域认证的方案

### token 认证流程

- 用户登陆成功后，服务器返回 token 给客户端
- 客户端收到数据保存在客户端 一般保存到`localStorage cookie sessionStorage`中
- 客户端再次访问服务器，将 token 放入 headers 中
- 服务端采用 filter 校验，校验成功则返回数据

### vw vh 布局

- 类似 rem 布局，在 sass 或 less 中可以定义函数

```Scss
  // 750为设计稿的宽度，可以根据设计稿灵活设置 高度同理
  @function vw($px) {
    @return ($px / 750) * 100vw;
  }
  @function vh($px) {
    @return (&px / 1250) * 100vh;
  }
  // 使用方式
  div {
    width: vw(250);
    height: vh(350);
  }
```

### 路由

#### 实现前端路由需要解决两个核心

- 如何改变 url 缺不引起页面刷新？
- 如何检测 url 变化

#### hash 实现

- hash 是 url 中#及后面的部分，改变 url 重的 hash 的不会引起页面刷新
- 通过 hashchange 时间可以监听到 url 的变化，改变 url 的方式只有这几种，通过浏览器的前进后退，a 标签， window.location 改变 url，这几种情况都会触发 hashchange 事件

#### history 实现

- history 提供了 pushState 和 replaceState 两个方法，这两个方法改变 URL 的 path 部分不会引起页面刷新
- history 提供了 popstate 事件，但是有些不同：通过浏览器前进后退改变 url 会触发 popstate，通过 a 标签和 pushState/replaceState 不会触发 popstate
  但是可以拦截 pushState/replaceState 的调用及 a 标签的点击事件
