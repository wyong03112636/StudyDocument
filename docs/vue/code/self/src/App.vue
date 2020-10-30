<template>
<div id="app">
  <Editor
        style='height:300px;'
        v-model='wangValue'
        :disabled='wangDisabled'
    ></Editor>
  <h5>双向绑定的源代码</h5>
  <div>{{wangValue}}</div>
  <h5>双向绑定的页面效果</h5>
  <div v-html='wangEditor'></div>
</div>
</template>

<script>
import Editor from './components/Editor';
export default {
  components:{Editor},
  data(){
    return {
      wangValue:'aaaaaa',
      wangDisabled:false
    }
  }
}
</script>
