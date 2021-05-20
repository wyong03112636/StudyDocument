// 生成SKU
// 已知规格数据
const spu = 'AB1234567';
const specList = [ 
 ["red", "yellow"],
 ["XL", "S"], 
 ['a1', 'a2'],
 ['b1', 'b2'],
];
/** 
  输出结果：
  AB1234567-red-XL-a1-b1;
  AB1234567-red-S-a1-b1;
  AB1234567-red-XL-a1-b2;
  AB1234567-red-S-a1-b2;
  ....
*/
// 请完善如下createSKU函数及注释信息以符合输出结果;
/** 
* @param
* @return 
*/
function createSKU(spu, list){
  if (!spu || Object.prototype.toString.call(list) !== '[object Array]') {
    throw new Error()
  }
  let singleArr = [];
  const temp = list.reduce((p, c, i, arr) => {
    let index = 0
    while(index < (arr.length * c.length)) {
      for(let k = 0; k < arr[index].length; k ++) {

        if (singleArr.indexOf() === -1 ) {
          singleArr.push(arr[index][k])
          // arr[index].splice(k, 1)
          break;
        } 
      }
      index ++
    }

    p.push([...singleArr])
    singleArr.splice(0, singleArr.length)
    return p
  }, [])
  console.log(temp)
  const result = temp.map(item => {
    item.unshift(spu)
    return item.join('-')
  })
  return result
}

// console.log(createSKU(spu, specList)) 


class Node {
  constructor(node, next) {
    this.current = node
    this.next = next

  }
}

class Link {
  constructor() {

  },

  revert() {

  }
}


while(node.current) {
  let prev = null
  
  node.next = prev
  
  prev = node.current

  node.current 

}


class Stack {
  constructor(length) {
    this.length = length;
    this.arr = []
  }

  add(node) {
    if (this.arr.length > this.length) {
      console.log('栈满')
      return
    }
    this.arr.push(node)
  }

  out() {
    if (!this.arr.length) {
      
      return
    } 
    this.arr.shift()
  }
}



