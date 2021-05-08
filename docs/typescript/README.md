# TypeScript

## 基础类型

```ts
//布尔值
let isDoen: boolean = true;
//数字
let age: number = 1;
//string
let name: string = 'Jim';
//字符串模版
let str = `name: ${name}`;
//数组
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
//元组
let x: [string, number];
x = ['a', 1];
//枚举
enum Color {
  Red,
  Blue,
  Green,
}
let c: Color = Color.Red; //1
console.log(Color.Blue); //2
console.log(Color[2]); //Blue
//void
function a(): void {
  console.log('没有返回值');
}
//never
function error(message: string): never {
  throw new Error(message);
}
//object
declare function create(o: object | null): void;
create({ prop: 0 });
//类型断言
let someValue: any = 'this is a string';
let strlength: number = (<string>someValue).length;
let strlength2: number = (someValue as string).length;
//泛型
function test<T>(arg: T): T {}
//泛型继承 泛型里必须包含一个name属性
interface Test {
  name: string;
}
function test<T extends Test>(arg: T): T {}
//泛型约束 泛型必须是number类型或者string类型
function test<T extends number | string>(arg: T): T {}
```

## Advanced Typescipt

```ts
interface Todo {
  title: string;
  desc: string;
  completed: boolean;
}

// 取出某个interface的key
type T1 = Pick<Todo, 'title' | 'desc'>;

// 去除某个interface的key
type T2 = Omit<Todo, 'completed'>;

const a: T1 = {
  title: 'a',
  desc: 'b',
};

const b: T2 = {
  title: 'a',
  desc: 'b',
};

interface Todo {
  title: string;
  desc: string;
}
// 某个interface的key变为可选
type TodoPreview = Partial<Todo>;

// 可选变为必选
type T = Required<TodoPreview>;

const a: TodoPreview = {
  title: 'a',
};

const b: T = {
  title: 'a',
  desc: 'v',
};
```

## [参考链接](https://juejin.im/post/6876240277208563720#heading-79)
