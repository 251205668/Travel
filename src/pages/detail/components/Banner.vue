<template>
  <div>
    <div class="banner"
         @click="showCommonGallary">
      <img class="banner-img"
           src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_350x240_a8e4d8a8.jpg"
           alt="">

      <div class="banner-info">
        <div class="banner-tittle">
          上海迪士尼度假村(AAAA景区)
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe623;</span>
          39
        </div>
      </div>

    </div>
    <Fade>
      <CommonGallary v-show="showGallary"
                     @close="closeGallary"></CommonGallary>
    </Fade>
  </div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallery.vue'
import Fade from '@/common/fade/Fade.vue'
export default {
  name: 'DetailBanner',
  props: [''],
  data () {
    return {
      showGallary: false
    }
  },

  components: {
    CommonGallary,
    Fade
  },

  computed: {},

  beforeMount () { },

  mounted () { },

  methods: {
    //   点击banner 显示轮播 点击画廊外侧 隐藏轮播
    showCommonGallary () {
      this.showGallary = true
    },
    closeGallary () {
      this.showGallary = false
    }
  },

  watch: {}

}

</script>
<style lang='stylus' scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
}

.banner-img {
  width: 100%;
}

.banner-info {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 0.6rem;
  color: #fff;
  background: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
}

.banner-tittle {
  flex: 1;
  font-size: 0.32rem;
  padding: 0 0.2rem;
}

.banner-number {
  height: 0.32rem;
  line-height: 0.32rem;
  margin-top: 0.14rem;
  padding: 0 0.4rem;
  border-radius: 0.2rem;
  background: rgba(0, 0, 0, 0.5);
  font-size: 0.24rem;

  .banner-icon {
    font-size: 0.24rem;
  }
}
</style>
