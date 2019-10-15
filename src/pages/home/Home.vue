<template>
  <div>
    <home-header></home-header>
    <HomeSwiper :list="swiperList"></HomeSwiper>
    <HomeIcons></HomeIcons>
    <Homerecommend :relist="recommendList"></Homerecommend>
    <HomeWeekend></HomeWeekend>
  </div>

</template>

<script>
import { mapState } from 'vuex'
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import Homerecommend from './components/recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      lastCity: '',
      swiperList: [],
      recommendList: []

    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    Homerecommend,
    HomeWeekend
    // vue能够识别组件的大小写 而且会用分隔符展开
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
      // axios get发送请求后返回的是一个promise对象 用then（this.getHOmeInfoSucc）来请求ajax数据打印结果
    },
    getHomeInfoSucc (res) {
      // 当获取到ajax内容 拿出数据
      res = res.data
      if (res.ret && res.data) {
        // 如果获取到这个resdata 并且resdata存在 那么就把resdata里的city赋给组件属性
        const data = res.data
        this.swiperList = data.swiperList
        this.recommendList = data.recommendList
      }
    }
  },
  activated () {
    //   当keep-alive组件被激活时 这个生命周期函数被调用 相当于页面每次被渲染时 调用该函数
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
 <style  >
</style>
