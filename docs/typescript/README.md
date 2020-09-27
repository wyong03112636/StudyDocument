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
```
