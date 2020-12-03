<template>
<div id="app">
  <!-- <VueOdometer /> -->
  <WaterMark />
</div>
</template>

<script>
import WaterMark from './components/water-mark';
// import VueOdometer from './components/vue-odometer';
export default {
  components:{WaterMark},
  data(){
    return {
      wangValue:'aaaaaa',
      wangDisabled:false
    }
  }
}
</script>
