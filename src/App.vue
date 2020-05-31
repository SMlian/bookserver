<template>
  <div id="app">
    <Box class="block__box"/>
  </div>
</template>
<script>
import Box from "./Box"
export default {
  components:{
    Box
  }
}
</script>
<style lang="less" scope>
#app{
  margin: 0;
  padding:0;
  width: 100%;
  height: 100%;
}
.block__box{
  width: 100%;
  height: 100%
}
</style>
