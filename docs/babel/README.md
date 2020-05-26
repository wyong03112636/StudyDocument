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

## @babel/plugin-transform-arrow-functions
- 插件功能
  - 将箭头函数转换为普通函数
- 可以使用该命令使用指定插件转换
  - `npx babel src -d dist --plugins=@babel/plugin-transform-arrow-functions`

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