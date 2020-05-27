# Babel
## 什么是Babel？
- Babel是一个工具链，主要用于旧浏览器中将ES5以上的代码转换为向兼容版本的JavaScript代码。
  - 语法转换
  - Polyfill实现目标环境中缺少的功能
  - 源代码转换

## Babel基本配置
~~~js
module.exports = function(api) {
  api.cache(true) //避免报错 Caching was left unconfigured
  const presets = [
    ['@babel/env', {
      targets: { //配置兼容的浏览器的版本
        edge: '7',
        firefox: '60',
        chrome: '67',
        safari: '11.1',
        // ie: '6'
      },
      useBuiltIns: 'usage' //Babel过滤全局代码。查找缺少的功能并使用polyfill
    }]
  ]
  const plugins = []
  return {
    presets,
    plugins
  }
}
~~~

## 使用Js方式做babel转换
~~~js
const babel = require('@babel/core');
const code = `
const sayHi = () => {
  console.log('Hello, Babel')
}
Promise.resolve().finally()  //触发polyfill
sayHi()
`
const options = {}
const result = babel.transform(code, options)
console.log(result);
~~~

## @babel/preset-env
- 插件功能
  - 可以将es6所有的代码做转换
- 可以使用该命令指定插件
  - `npx babel src -d dist --presets=@babel/preset-env`

## @babel/cli
- 插件功能
  - 使用户可以从终端运行babel

## @babel/core
- 插件功能
  - 可以在js代码中调用babel

## @babel/polyfill
- 插件功能
  - 将浏览器不支持的语法比如`Promise.resolve().finally()`添加垫片

## @babel/plugin-transform-member-expression-literals
- 插件功能
  - 将对象的属性为保留字时，使用\["name"\]的形式 

~~~js
// in
obj.foo = "isValid";

obj.const = "isKeyword";
obj["var"] = "isKeyword";
//out
obj.foo = "isValid";

obj["const"] = "isKeyword";
obj["var"] = "isKeyword";
~~~

## @babel/plugin-transform-property-literals
- 插件功能
  - 去除对象的key值的引号

~~~js
//in
var foo = {
  // changed
  "bar": function () {},
  "1": function () {},

  // not changed
  "default": 1,
  [a]: 2,
  foo: 1
};
// out
var foo = {
  bar: function () {},
  1: function () {},

  "default": 1,
  [a]: 2,
  foo: 1
};
~~~

## @babel/plugin-transform-reserved-words
- 插件功能
  - 转换变量名为保留字的变量

~~~js
//in
var abstract = 1;
var x = abstract + 1;

// out
var _abstract = 1;
var x = _abstract + 1;
~~~

## @babel/plugin-transform-property-mutators
- 插件功能
  - 将对象的get set方法，通过Object.defineProperties()改写

~~~js
// in
var foo = {
  get bar() {
    return this._bar;
  },
  set bar(value) {
    this._bar = value;
  }
};
//out
var foo = Object.defineProperties({}, {
  bar: {
    get: function () {
      return this._bar;
    },
    set: function (value) {
      this._bar = value;
    },
    configurable: true,
    enumerable: true
  }
});
~~~

## @babel/plugin-transform-arrow-functions
- 插件功能
  - 将箭头函数转换为普通函数
- 可以使用该命令使用指定插件转换
  - `npx babel src -d dist --plugins=@babel/plugin-transform-arrow-functions`
~~~js
//in
var a = () => {};
var a = (b) => b;

const double = [1,2,3].map((num) => num * 2);
console.log(double); // [2,4,6]
//out
var a = function () {};
var a = function (b) {
  return b;
};

const double = [1, 2, 3].map(function (num) {
  return num * 2;
});
console.log(double); // [2,4,6]
~~~

## @babel/plugin-transform-block-scoped-functions
- 插件作用
  - 确保块级声明的函数是块级作用域的

~~~js
//in
{
  function name (n) {
    return n;
  }
}
name("Steve");
//out
{
  let name = function (n) {
    return n;
  };
}
name("Steve");
~~~

## @babel/plugin-transform-block-scoping
- 插件作用
  - 将`let/const`声明的变量转为es5

~~~js
//in
{
  let a = 3
}
let a = 3
//out
{
  var _a = 3;
}
var a = 3;
~~~