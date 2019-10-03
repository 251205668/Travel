<template>
  <div>
    <home-header></home-header>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
    <Homerecommend></Homerecommend>
    <HomeWeekend></HomeWeekend>
  </div>

</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import Homerecommend from './components/recommend'
import HomeWeekend from './components/weekend'
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    Homerecommend,
    HomeWeekend
    // vue能够识别组件的大小写 而且会用分隔符展开
  }
};
</script>
 <style  >
</style>
 
