/**
 * 单链表的查找、插入、删除操作
 */

class Node {
  constructor(element) {
    this.node = element;
    this.next = null;
  }
}

class SingleLinked {
  constructor() {
    this.head = new Node('head');
  }
  // 根据值查找节点
  findByValue(value) {
    let curNode = this.head.next;
    while (curNode.next !== null && curNode.node !== value) {
      curNode = curNode.next;
    }
    return curNode === null ? -1 : curNode;
  }

  // 根据下表查找，下表从0开始
  findByIndex(index) {
    let curNode = this.head.next;
    let pos = 0;
    while (curNode.next !== null && pos !== index) {
      curNode = curNode.next;
      pos++;
    }
    return curNode === null ? -1 : curNode;
  }

  // 向链表末尾添加元素
  append(element) {
    let node = new Node(element);
    let curNode = this.head;
    while (curNode.next) {
      curNode = curNode.next;
    }
    curNode.next = node;
  }

  // 向指定元素后插入元素
  insert(newElement, element) {
    let curNode = this.findByValue(element);
    if (curNode === -1) {
      return;
    }
    let newNode = new Node(newElement);
    newNode.next = curNode.next;
    curNode.next = newNode;
  }

  // 查找前一个结点
  findPrev(item) {
    let curNode = this.head;
    while (curNode.next !== null && curNode.next.node !== item) {
      curNode = curNode.next;
    }
    if (curNode.next === null) {
      return -1;
    }
    return curNode;
  }

  // 删除指定元素
  remove(item) {
    let preNode = this.findPrev(item);
    if (preNode === -1) {
      return;
    }
    preNode.next = preNode.next.next;
  }

  // 展示所有结点
  display() {
    let curNode = this.head.next;
    while (curNode.next) {
      console.log(curNode.node);
      curNode = curNode.next;
    }
  }

  // 链表反转
  revert() {
    let curNode = this.head.next;
    let prev = new Node('head');
    while (curNode !== null) {
      const { next } = curNode;
      curNode.next = prev;
      prev = curNode;
      curNode = next;
    }
    this.head = prev;
  }

  // 环验证
  checkCircle() {
    const fast = this.head.next;
    const slow = this.head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast === slow) {
        return true;
      }
    }
    return false;
  }
}
const linked = new SingleLinked();
linked.append('a');
linked.append('b');
linked.append('c');

linked.insert('d', 'a');

linked.insert('e', 'c');

linked.remove('d');

linked.revert();

linked.display();
