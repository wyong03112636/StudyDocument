# React 最佳实践

## Basic

### 什么是 JSX?

- JSX 及 JavaScript XML,一种在 React 组件内部构建标签的类 XML 语法．React 在不使用 JSX 时也可以正常运行,然而使用 JSX 可以提高组件的可读性.
- 举例

```jsx
//不使用JSX时
React.createElement(
  'h1',
  {className: 'title'},
  'Hello, React'
)
//使用JSX时
<h1 className='title'>Hello, React</h1>
```

### 解构赋值对 React 组件进行船只

```jsx
// 当属性很多时，使用剩余参数，而不是一个一个传递, 避免代码过多导致不必要的错误
function Greeting({ name, ...restProps }) {
  // 示例用，实际使用声明具体属性
  return <GreetingOne {...restProps}>Hello {name}!</GereingOne>;
}
```

### 受控组件（受 React 控制的组件）

- 普通的 input 组件，当手动改变 input 值的时候，DOM 会自己更新 input 对应的 value；受控组件禁止 DOM 自行更新，而是把组件状态的改变交给 React 来进行管理

```jsx
// 普通input
<input type="text"/>

// 受控input
<input value={value} onChange={e => this.setState({value: e.targete.value})
```

## React Hooks

### 通用原则

- 只能在最顶层使用 Hook，不要在循环，条件或者嵌套函数中调用 Hook

### useState

- useState 接受一个初始化函数，只会在第一次渲染时调用。

```js
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});
```

- 设置同样的 state（===），不会重新触发渲染，引用类型除外

```js
const [state, setState] = useState(0);

// 更新 state 不会触发组件重新渲染
setState(0);
setState(0);

//但如下的更新 会触发组件重新渲染
const [state, setState] = useState({
  foo: 'bar',
});
setState({ foo: 'bar' });
setState({ foo: 'bar' });
```

- 与 class 组件中的 setState 的区别

```js
  // 初始State
{ foo: 'foo' }

// Class Component
this.setState({ bar: 'bar' }) // 此时state中foo、bar都存在

// Function Component
setState({ bar: 'bar' }) // 此时state中只有bar

// 如果想要同样的效果 可以这样写
setState((prevState) => {
  ...prevState,
  bar: 'bar',
})

```
