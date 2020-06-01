# React
## 什么是JSX?
- JSX及JavaScript XML,一种在React组件内部构建标签的类XML语法．React在不使用JSX时也可以正常运行,然而使用JSX可以提高组件的可读性.
- 举例
~~~jsx
//不使用JSX时
React.createElement(
  'h1',
  {className: 'title'},
  'Hello, React'
)
//使用JSX时
<h1 className='title'>Hello, React</h1>
~~~