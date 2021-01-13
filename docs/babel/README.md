# Babel

## 什么是 Babel？

- Babel 是一个工具链，主要用于旧浏览器中将 ES5 以上的代码转换为向兼容版本的 JavaScript 代码。
  - 语法转换
  - Polyfill 实现目标环境中缺少的功能
  - 源代码转换

## Babel 基本配置

```js
module.exports = function(api) {
  api.cache(true); //避免报错 Caching was left unconfigured
  const presets = [
    //设置转换规则
    [
      '@babel/env',
      {
        targets: {
          //配置兼容的浏览器的版本
          edge: '7',
          firefox: '60',
          chrome: '67',
          safari: '11.1',
          // ie: '6'
        },
        useBuiltIns: 'usage', //Babel过滤全局代码。查找缺少的功能并使用polyfill
      },
    ],
  ];
  const plugins = [];
  return {
    presets,
    plugins,
  };
};
```

## 使用 Js 方式做 babel 转换

```js
const babel = require('@babel/core');
const code = `
const sayHi = () => {
  console.log('Hello, Babel')
}
Promise.resolve().finally()  //触发polyfill
sayHi()
`;
const options = {};
const result = babel.transform(code, options);
console.log(result);
```

## @babel/preset-env

- 插件功能
  - 可以将 es6 所有的代码做转换
- 可以使用该命令指定插件
  - `npx babel src -d dist --presets=@babel/preset-env`

## @babel/cli

- 插件功能
  - 使用户可以从终端运行 babel

## @babel/core

- 插件功能
  - 可以在 js 代码中调用 babel

## @babel/polyfill

- 插件功能
  - 将浏览器不支持的语法比如`Promise.resolve().finally()`添加垫片

## @babel/plugin-transform-member-expression-literals

- 插件功能
  - 将对象的属性为保留字时，使用\["name"\]的形式

```js
// in
obj.foo = 'isValid';

obj.const = 'isKeyword';
obj['var'] = 'isKeyword';
//out
obj.foo = 'isValid';

obj['const'] = 'isKeyword';
obj['var'] = 'isKeyword';
```

## @babel/plugin-transform-property-literals

- 插件功能
  - 去除对象的 key 值的引号

```js
//in
var foo = {
  // changed
  bar: function() {},
  '1': function() {},

  // not changed
  default: 1,
  [a]: 2,
  foo: 1,
};
// out
var foo = {
  bar: function() {},
  1: function() {},

  default: 1,
  [a]: 2,
  foo: 1,
};
```

## @babel/plugin-transform-reserved-words

- 插件功能
  - 转换变量名为保留字的变量

```js
//in
var abstract = 1;
var x = abstract + 1;

// out
var _abstract = 1;
var x = _abstract + 1;
```

## @babel/plugin-transform-property-mutators

- 插件功能
  - 将对象的 get set 方法，通过 Object.defineProperties()改写

```js
// in
var foo = {
  get bar() {
    return this._bar;
  },
  set bar(value) {
    this._bar = value;
  },
};
//out
var foo = Object.defineProperties(
  {},
  {
    bar: {
      get: function() {
        return this._bar;
      },
      set: function(value) {
        this._bar = value;
      },
      configurable: true,
      enumerable: true,
    },
  }
);
```

## @babel/plugin-transform-arrow-functions

- 插件功能
  - 将箭头函数转换为普通函数
- 可以使用该命令使用指定插件转换
  - `npx babel src -d dist --plugins=@babel/plugin-transform-arrow-functions`

```js
//in
var a = () => {};
var a = b => b;

const double = [1, 2, 3].map(num => num * 2);
console.log(double); // [2,4,6]
//out
var a = function() {};
var a = function(b) {
  return b;
};

const double = [1, 2, 3].map(function(num) {
  return num * 2;
});
console.log(double); // [2,4,6]
```

## @babel/plugin-transform-block-scoped-functions

- 插件作用
  - 确保块级声明的函数是块级作用域的

```js
//in
{
  function name(n) {
    return n;
  }
}
name('Steve');
//out
{
  let name = function(n) {
    return n;
  };
}
name('Steve');
```

## @babel/plugin-transform-block-scoping

- 插件作用
  - 将`let/const`声明的变量转为 es5

```js
//in
{
  let a = 3;
}
let a = 3;
//out
{
  var _a = 3;
}
var a = 3;
```

## @babel/plugin-transform-classes

- 插件作用
  - 将 class 写法转换为 es5 函数写法

```js
//in
class Test {
  constructor(name) {
    this.name = name;
  }

  logger() {
    console.log('Hello', this.name);
  }
}
//out
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var Test = (function() {
  function Test(name) {
    _classCallCheck(this, Test);

    this.name = name;
  }

  Test.prototype.logger = function logger() {
    console.log('Hello', this.name);
  };

  return Test;
})();
```

## @babel/plugin-transform-computed-properties

- 插件作用
  - 通过 object.defineProperty 的方式给对象添加 key 值

```js
//in
var obj = {
  ['x' + foo]: 'heh',
  ['y' + bar]: 'noo',
  foo: 'foo',
  bar: 'bar',
};
//out
var _obj;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var obj =
  ((_obj = {}),
  _defineProperty(_obj, 'x' + foo, 'heh'),
  _defineProperty(_obj, 'y' + bar, 'noo'),
  _defineProperty(_obj, 'foo', 'foo'),
  _defineProperty(_obj, 'bar', 'bar'),
  _obj);
```

## @babel/plugin-transform-destructuring

- 插件作用
  - 转换解构赋值的写法

```js
//in
let {x, y} = obj;
let [a, b, ...rest] = arr;
//out
function _toArray(arr) { ... }
let _obj = obj,
    x = _obj.x,
    y = _obj.y;

let _arr = arr,
    _arr2 = _toArray(_arr),
    a = _arr2[0],
    b = _arr2[1],
    rest = _arr2.slice(2);
```

## @babel/plugin-transform-duplicate-keys

- 插件作用
  - 同一对象的相同的 key 用`['key']`的形式代替

```js
//in
var x = { a: 5, a: 6 };
var y = {
  get a() {},
  set a(x) {},
  a: 3,
};
//out
var x = { a: 5, ['a']: 6 };
var y = {
  get a() {},
  set a(x) {},
  ['a']: 3,
};
```

## @babel/plugin-transform-for-of

- 插件作用
  - 转换`for of`循环语句

```js
//in
for (var i of foo) {
}
//out
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (
    var _iterator = foo[Symbol.iterator](), _step;
    !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
    _iteratorNormalCompletion = true
  ) {
    var i = _step.value;
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
```

## @babel/plugin-transform-function-name （失效的插件）

- 插件作用
  - 箭头函数转为普通函数

```js
// in
let number = x => x;
// out
let number = x => x;
```

## @babel/plugin-transform-instanceof

- 插件作用
  - 转换 instanceof

```js
//in
foo instanceof Bar;
//out
function _instanceof(left, right) {
  if (right != null && typeof Symbol !== 'undefined' && right[Symbol.hasInstance]) {
    return right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

_instanceof(foo, Bar);
```

## @babel/plugin-transform-literals

- 插件作用
  - 转换二进制，八进制，unicode

```js
//in
var b = 0b11; // binary integer literal
var o = 0o7; // octal integer literal
const u = 'Hello\u{000A}\u{0009}!'; // unicode string literals, newline and tab
//out
var b = 3; // binary integer literal
var o = 7; // octal integer literal
const u = 'Hello\n\t!'; // unicode string literals, newline and tab
```
