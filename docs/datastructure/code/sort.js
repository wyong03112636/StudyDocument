/**
 * 冒泡排序
 * @param {Array} list
 * @returns {Array}
 */
function paoSort(list) {
  for (let i = 0; i < list.length; i++) {
    let flag = true;
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j + 1] < list[j]) {
        let temp = list[j + 1];
        list[j + 1] = list[j];
        list[j] = temp;
        let flag = false;
      }
    }
    if (!flag) {
      break;
    }
  }
  return list;
}
console.log(paoSort([2, 1, 3]));

/**
 * 插入排序
 * @param {Array} list
 * @returns {Array}
 */
function chaSort(list) {
  for (let i = 1; i < list.length; i++) {
    let value = list[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (list[j] > value) {
        list[j + 1] = list[j];
      } else {
        break;
      }
    }
    list[j + 1] = value;
  }
  return list;
}

console.log(chaSort([5, 4, 6]));

/**
 * 查找第K大的数
 * @param {Array} arr
 * @param {Number} k
 * @returns {Number}
 */
function findKth(arr, k) {
  const len = arr.length;
  if (k > len) {
    return -1;
  }
  let p = partition(arr, 0, len - 1);
  while (p + 1 !== k) {
    if (p + 1 > k) {
      p = partition(arr, 0, p - 1);
    } else {
      p = partition(arr, p + 1, len - 1);
    }
  }
  return arr[p];
}
console.log(findKth([2, 1, 3, 88, 77, 44, 333], 4));
// 找到区间最大值的下标
function partition(arr, start, end) {
  let i = start;
  let pivot = arr[end];
  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i += 1;
    }
  }
  swap(arr, i, end);
  return i;
}

function swap(arr, i, j) {
  if (i === j) {
    return;
  }
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

const fs = require('fs');
console.log(fs.readFileSync('./linked.js').toString('utf-8'));
