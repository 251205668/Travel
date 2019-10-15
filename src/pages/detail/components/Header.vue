<template>
  <div>
    <router-link tag="div"
                 to="/"
                 v-show="showabs"
                 class="header-abs">
      <div class="iconfont backicon">
        &#xe624;
      </div>
    </router-link>
    <div v-show="!showabs"
         :style="opacityStyle"
         class=" header-fixed">
      <router-link to="/">
        <div class="iconfont Header-fixed-back">
          &#xe624;
        </div>
      </router-link>
      景点详情页面

    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailHeader',
  props: [''],
  data () {
    return {
      opacityStyle: {
        opacity: 0
      },
      showabs: true
    }
  },
  activated () {
    window.addEventListener('scroll', this.hanldescroll)
  },
  deactivated () {
    //   页面隐藏时执行
    // 解绑事件 防止其他组件受影响
    window.removeEventListener('scroll', this.hanldescroll)
  },
  components: {},

  computed: {},

  beforeMount () { },

  mounted () {

  },

  methods: {
    hanldescroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        // 如果opcity>1的话 就让下面的div显示 否则为opacity
        this.opacityStyle = { opacity }
        this.showabs = false
      } else {
        this.showabs = true
      }
    }

  }
}

</script>
<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl';

.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 0.4rem;
  background: rgba(0, 0, 0, 0.3);
  text-align: center;
}

.backicon {
  font-size: 0.4rem;
  color: #fff;
}

.header-fixed {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $headerheight;
  line-height: $headerheight;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.32rem;

  .Header-fixed-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    color: #fff;
  }
}
</style>
