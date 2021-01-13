# Vue3

## vue3 响应式原理

### proxy 与 object.defineProperty 区别

```vue
<template>
  <div>{{ obj.c }}</div>
</template>
<script>
export default {
  data() {
    return {
      obj: {
        a: 1,
      },
    };
  },
  mounted() {
    this.obj.c = 2;
  },
};
</script>
```

- vue2 不能检测到数据的变动
  - 利用索引直接设置一个数组项时 `Array[1] = 1` 可以通过 vue.set 解决
  - 修改数组长度的时候 `Array.length = 2` 可以通过 splice 解决
- 我们对 obj 上原本不存在的 c 属性进行一个赋值，在 vue2 中是不会触发响应式视图更新的。 这是因为`object.defineProperty`必须对于确定的 key 值进行响应式，这就导致如果 data 在初始化的时候没有 c 属性，那么后续对于 c 属性的复制都不会触发数据劫持，在 vue2 中，可以通过`vue.set`

```js
const raw = {};
const data = new Proxy(raw, {
  get(target, key) {},
  set(target, key, value) {},
});
```

- Proxy 就不存在以上的问题，因为 proxy 的数据劫持是整个对象的层面，而 Object.defineProperty 的数据劫持是具体到了对象的谋个 key 值，所以才会对 key 有要求

### Vue 的异步更新队列

> Vue 在更新 DOM 时是异步执行的。只要监听到数据的变化，就会开启一个队列，并把同一个事件循环中发生的数据变更做缓冲。所以，当数据更新后，不能直接做 dom 操作，需要在下次事件循环中执行 dom 操作。 利用`this.$nextTick(callback)`,在 callback 中执行 dom 操作

```vue
<template>
  <div id="example">{{ message }}</div>
</template>
<script>
export default {
  var vm = new Vue({
    el: '#example',
    data: {
      message: '123'
    }
  })
  vm.message = 'new message'              // 更改数据
  vm.$el.textContent === 'new message'    // false
  Vue.nextTick(function() {
    vm.$el.textContent === 'new message'  // true
  })
}
</script>
```
