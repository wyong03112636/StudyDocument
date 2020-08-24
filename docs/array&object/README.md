# Array&Object

## 数组中常用的方法

### Array.from()

- 将伪数组、Set、Map、argument 转换为真数组，可以接受两个参数，返回一个新的数组

```js
Array.from([1, 2, 3], x => x * 2); // [2, 4, 6]

Array.from('foo'); // ['f', 'o', 'o']

const set = new Set([1, 1, 2, 2]);
Array.from(set); //[1, 2]

const map = new Map([
  ['1', 'a'],
  ['2', 'b'],
]);
Array.from(map); //[['1', 'a'], ['2', 'b']]
Array.from(map.values()); // ['a', 'b']
Array.from(map.keys()); //['1', '2']

//数组去重
function combine() {
  let arr = [].concat.apply([], arguments);
  return Array.from(new Set(arr));
}
```

### Array.isArray()

- 用于判断传递的值是否为一个数组

```js
Array.isArray([1, 2]); //true
Array.isArray('foo'); //false
```

### Array.of()

- 创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型

```js
Array.of(7); //[7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7); // [, , , , , , ]
Array(1, 2, 3); //[1, 2, 3]
```

### Array.concat()

- 用于合并两个或多个数组，此方法不会改变先有数组，并返回新数组

```js
const arr1 = [1, 2];
const arr2 = [2, 3];
const arr4 = [5, 6];
const arr3 = arr1.concat(arr2, arr4); // [1, 2, 2, 3, 5, 6]

//将值链接到数组
const arr5 = arr1.concat(7, [8, 9]); //[1, 2, 7, 8, 9]
```

### Array.every()

- 测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
- **注意：若收到一个空数组，此方法在一切情况下都会返回 true。**

```js
const arr = [2, 3, 4];
const isThan = arr.every(item => item > 1);
```

### Array.fill()

- 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

```js
const arr = [1, 2, 3, 4];
const result = arr.fill('a', 1, 4); //[1, 'a', 'a', 'a']
```

### Array.filter()

- 创建一个新数组，过滤掉不符合函数条件的元素

```js
const arr = [1, 2, 3];
const result = arr.filter(item => {
  return item > 2;
});
console.log(result); //[3]
```

### Array.find()

- 返回数组中满足提供测试函数的第一个元素的值，否则返回 undefined

```js
const arr = [1, 2, 3];
const result = arr.find(item => {
  return item > 1;
});
console.log(result); //2
```

### Array.findIndex()

- 返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。

```js
const arr = [1, 2, 3];
const result = arr.findIndex(item => {
  return item > 1;
});
console.log(result); //1
```
