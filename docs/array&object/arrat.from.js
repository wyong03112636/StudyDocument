let arr = [1, 2, 3];
let arr2 = [4, 5, 6];
const temp = Array.from(arr, x => x + 1);
console.log(temp);

function combine() {
  let arr = [].concat.apply([], arguments);
  return Array.from(new Set(arr));
}
console.log(combine([1, 2, 3], [2, 3, 4]));

const map = new Map([
  ['1', 'a'],
  ['2', 'b'],
]);
console.log(Array.from(map));
console.log(Array.from(map.values()));
console.log(Array.from(map.keys()));

const arr3 = arr.concat('a', arr2, 'b');
console.log(arr3);
