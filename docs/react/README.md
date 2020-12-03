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

### 解构赋值对 React 组件进行传值

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

- useState 接受一个初始化函数，只会在第一次渲染时调用。适合处理一些比较复杂的数据

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

### useRef

- useRef 的使用
  - 简单说是，当需要存放一个数据，需要无论在哪里都能取到最新状态时，需要使用 useRef
  - useRef 的引用地址不会改变

```js
function SomeComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      console.log(count);
      setCount(currentCount => currentCount + 1);
    });
    return () => {
      clearInterval(id);
    };
  }, []); // 将count作为依赖的话，打印出来也是当前的count，但是会造成死循环
  return <h1>See what's printed in console.</h1>;
}
```

上面这段代码打印永远都是 0，因为函数声明时（第一次运行时），count 是 0，之后无论这个函数调用多少次，都会是 0
这时，如果我们需要拿到 count 最新值，就可以使用 useRef 声明一个可变数据对象，来存储 count，由于对象引用是不变的，
当我们更新某个字段时，闭包函数就能访问到最新的值了。

```js
// setCount执行会rerender，也就是整个函数会重新执行，把最新的count赋值给countRef.current, 就可以打出最新值了
function SomeComponent() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;
  useEffect(() => {
    const id = setInterval(() => {
      console.log(countRef.current);
      setCount(currentCount => currentCount + 1);
    });
    return () => {
      clearInterval(id);
    };
  }, []);
  return <h1>See what's printed in console.</h1>;
}
```

### useContext 跨组件传参

```tsx
  const Context = React.createContext({
    monyForDad: 0,
    monyForMe: 0
  })
  function Grandpa() {
    const[montForDad] = React.useState(100)
    const[montForMe] = React.useState(101)
    return (
      <Context.Provider value={{montForDad, montForMe}}>
        <Dady>
          <Me />
        </Dady>
      </Context.Provider>
    )
  }

  function Dady({children?: React.ChildNode}) {
    const ctx = React.useContext(Context)
    return (
      <div className="dady">
        <h2>This is Dady, received ${ctx.moneyForDad}</h2>
        {children}
      </div>
    )
  }

  function Me() {
    const ctx = useContext(Context);
    return (
      <div className="son">
        <h3>This is Me, received ${ctx.moneyForMe}</h3>
      </div>
    );
  }

```

### useEffect

- 当 useEffect 有依赖时，每次状态更改都会触发 clean up，也就是都会执行 return 的函数

```tsx
function App() {
  const [message, updateMessage] = React.useState('');
  const [counter, updateCounter] = React.useState(0);

  // 没有依赖
  React.useEffect(() => {
    const interval = setInterval(() => {
      updateCounter(c => c + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log('clean up when unmount');
    };
  }, []);

  // 有依赖
  React.useEffect(() => {
    updateMessage('hello' + counter);
    return () => {
      console.log('clean up after every render.');
    };
  }, [counter]);
  return (
    <>
      <div>counter: {counter}</div>
      <div> message: {message}</div>
    </>
  );
}
```

### useMemo

- 通过接收一个函数，以及依赖，当依赖发生变化时，对函数进行求值，返回这个值，并对值进行缓存。

```tsx
// 当依赖a或者b发生变化时，调用expansive函数进行求值，返回值为c，进行缓存
function App() {
  const [a, setA] = React.useState(1);
  const [b, setB] = React.useState(2);
  const [d, setD] = React.useState(3);

  // 当且仅当a或者b变化时，进行c的求值
  const c = React.useMemo(() => expansive(a, b), [a, b]);

  return (
    <>
      <div>a: {a}</div>
      <div>b: {b}</div>
      <div>c: {c}</div>
      <div>d: {d}</div>
      <button onClick={() => setA(a + 10)}>update a</button>
      <button onClick={() => setB(b + 20)}>update b</button>
    </>
  );
}

function expansive(a, b) {
  let value = 0;
  for (const i = 0; i < 10000; i++) {
    value += Math.random() * 1;
  }

  return (a + b + value).toFixed(0);
}
```

- useEffect vs useLayoutEffect

- useLayoutEffect 与 useEffect 传参一致，但有以下区别

  - 执行时机不同。useLayoutEffect 的入参函数会在 react 更新 DOM 树后同步调用。useEffect 为异步调用。useLayoutEffect 在 react render 之前，dom 发生改变之后调用
  - useLayoutEffect 在 development 模式下 SSR 会有警告 ⚠️ 通常情况下 useLayoutEffect 会用在做动效和记录 layout 的一些特殊场景。一般不需要使用 useLayoutEffect。

- 函数组件声明周期
  React 函数组件的执行阶段分为：

  1. Render 阶段
     此阶段就是函数本体的执行阶段
  2. Commit 阶段
     Commit 阶段是拿着 render 返回的结果，去同步 DOM 更新的阶段。render 和 commit 分开以达到批量更新 DOM 的目的，也是 react 之后推出并行模式的设计基础。对于我们代码能感知到的部分就是 useLayoutEffect
  3. DOM 更新结束
     此时 DOM 已经更新完成，代码能感知到的部分就是 useEffect

- useCallback useMemo 的一些使用规则

  - 什么时候不应该使用 useCallback/useMemo

    1. 当函数、对象直接传给 DOM 组件（div,span,imgs），不要使用 useMemo/useCallback。React 并不关心 DOM 组件的 prop 的函数、对象的引用是否变更。除了 ref 函数。因为 ref 函数在两次渲染前后引用不相等，会先使用 null 调用一次旧的 ref，再使用组件 reference 调用一次新的 ref 函数（为了回收副作用）
    2. 当函数、对象直接传给叶子组件或组件包含引用类型的 children 传参时，不要使用 useMemo/useCallback。通常情况下，叶子组件都不会使用 React.memo，而 children 每次引用都会变，所以这些组件其实并不 care 传入的函数、对象是否引用有变更
    3. 不要将一个明显每次渲染都是新的变量作为 useCallback/useMemo。比如：
       const x = ['hello'];
       const cb = useCallback(noop, [prop1, prop2, x]);
    4. 当函数、对象传入的组件不关心是否是个新的引用时，不要使用 useMemo/useCallback（你需要查看组件的源码，确认没有使用 React.memo/PureComponent 并且同步访问最新的 prop 传参，或者直接将 prop 透传给 DOM 或者叶子节点组件）。还要考虑你是否每次都传了一个没有缓存的新的 children。

  - 什么时候要使用 useMemo/useCallback
    1. 在使用 Context Provider 时，使用 useMemo。Provider 通常会有很多组件订阅它的变更，像`<Provider value={{id, name}}>` 这样的代码，会导致每次组件重绘时，Provider value 引用更新，导致所有订阅此 Provider 的 Consumer 组件及 useContext 所在的组件重绘
    2. 当你用到一个耗时的计算，而此计算的输入是一个在重绘时引用不会变更的变量时，使用 useMemo。比如：数据量较大的 map/filter 操作
    3. 当使用 ref 函数时，使用 useMemo/useCallback。比如：当使用 useIntersectionObserver hook 时，ref 函数会根据形参是否为 null 执行 disconnect 和 re-connect 操作，需要避免 ref 引用变更导致无用的 disconnect re-connect 调用
    4. 当引用对象作为 useEffect 的依赖时，为了避免不停执行 useEffect 中的函数，需要使用 useMemo/useCallback
    5. 当子组件使用了 React.memo/PureComponent，prop 作为是否重绘的唯一依据，需要使用 useMemo/useCallback。使用 React DevTools Profiler 来查看 state 变更时的渲染耗时。找出那些渲染慢的组件，使用 React.memo 来避免不必要的关联重绘这些组件
