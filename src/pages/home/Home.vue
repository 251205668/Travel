<template>
  <div>
    <home-header></home-header>
    <HomeSwiper></HomeSwiper>
    <div>test</div>
  </div>

</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper
    // vue能够识别组件的大小写 而且会用分隔符展开
  }
};
</script>
 <style  >
</style>
 
