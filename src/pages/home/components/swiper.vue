<template>
  <div class="wrapper">
    <swiper :options="swiperOption"
            v-if="list.length">
      <!-- slides -->
      <swiper-slide v-for="item of list"
                    :key="item.id">
        <img class="swiper"
             :src="item.imgurl"
             alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
      }

    }
  },

  components: {},

  computed: {},

  beforeMount () { },

  mounted () {
    // setInterval(() => {
    //   console.log('simulate async data')
    //   if (this.swiperList.length < 7) {
    //     this.swiperList.push(this.swiperList.length + 1)
    //   }
    // }, 2000)
  },

  methods: {},

  watch: {}

}

</script>
<style lang="stylus" scoped>
.wrapper >>>.swiper-pagination-bullet-active {
  opacity: 1;
  background: #fff;
}

.swiper {
  width: 100%;
}

.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 27%;
  // background: #eee;
}
</style>
