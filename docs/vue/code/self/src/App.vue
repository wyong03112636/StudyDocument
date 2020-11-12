<template>
<div id="app">
  <!-- <VueOdometer /> -->
  <Editor />
</div>
</template>

<script>
import Editor from './components/Editor';
// import VueOdometer from './components/vue-odometer';
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
