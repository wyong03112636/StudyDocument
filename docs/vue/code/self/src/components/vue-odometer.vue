<template>
  <IOdometer
    class="iOdometer"
    :value="num"
  />
</template>
 
<script>
  import IOdometer from 'vue-odometer';
  import 'odometer/themes/odometer-theme-default.css';
 
  export default {
    name: 'view',
    components: {
      IOdometer
    },
    data() {
      return {
        num: 100
      };
    },
    mounted() {
      const that = this;
      setTimeout(function() {
        that.num = 200
      }, 200);
    }
  };
</script>
 
<style scoped>
  .iOdometer {
    font-size: 2em;
    margin: 0;
    color: red;
    font-weight: blod;
  }
</style>