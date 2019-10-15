<template>
  <div class="container"
       @click="handleclick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide>
          <img class="gallary-img"
               src="http://img1.qunarzz.com/sight/p0/1905/28/28622a6b07caa0faa3.img.jpg_r_800x800_d54721f6.jpg"
               alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="gallary-img"
               src="http://img1.qunarzz.com/sight/p0/1905/48/48ab8be6f72168fca3.img.jpg_r_800x800_7cda8f75.jpg"
               alt="">
        </swiper-slide>
        <div class="swiper-pagination"
             slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        loop: true,
        // 当点击事件触发时 可能会导致swiper计算宽度失常 用下面两个属性可以解决 当父级dom发生改变时 重新加载swiper
        observeParents: true,
        observer: true
        // autoplay: 3000,
        // autoplayDisableOnInteraction: false
      }

    }
  },

  components: {},

  computed: {},

  beforeMount () { },

  mounted () { },

  methods: {
    handleclick () {
      this.$emit('close')
    }
  },

  watch: {}

}

</script>
<style lang='stylus' scoped>
.container >>> .swiper-container {
  overflow: inherit;
}

.container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  background: #000;
}

.wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}

.gallary-img {
  width: 100%;
}

.swiper-pagination {
  color: #fff;
  bottom: -1rem;
}
</style>
