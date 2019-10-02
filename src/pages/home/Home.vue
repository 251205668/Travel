<template>
  <div>
    <home-header></home-header>
  </div>

</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: "Home",
  components: {
    HomeHeader
    // vue能够识别组件的大小写 而且会用分隔符展开
  }
};
</script>
 <style  >
</style>
 
