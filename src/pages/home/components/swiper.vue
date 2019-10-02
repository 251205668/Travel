<template>
  <div class="wrapper">
    <swiper :options="swiperOption"
            ref="mySwiper"
            @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList"
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
  props: [''],
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '001',
        imgurl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/47f7d9e9fb7c5cb88a1245180c9ca5b4.jpg_750x200_de4858e1.jpg'
      },
      {
        id: '002',
        imgurl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/0fa39f9f5e66189e85b5c6e54278587d.jpg_750x200_86c8f2d8.jpg'
      },
      {
        id: '003',
        imgurl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/9b5dd778a3e717f95bf9dfd28140283b.jpg_750x200_33b4a213.jpg'
      },
      {
        id: '004',
        imgurl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/249dfa53de67b8824a96f9821e58f30d.jpg_750x200_48bf24d9.jpg'
      },
      {
        id: '005',
        imgurl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/0645bd625b46216a55e3835d0f677ce2.jpg_750x200_1e9a0cbf.jpg'
      },
      {
        id: '006',
        imgurl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/bc504af704ef02fbc0455fdbab8635ee.jpg_750x200_fa9cad2a.jpg'
      },
      {
        id: '007',
        imgurl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/cd40bfe8cc78b91664dd9eddc844b9be.jpg_750x200_e1cb5b42.jpg'
      }]
    };
  },

  components: {},

  computed: {},

  beforeMount () { },

  mounted () { },

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
  padding-bottom: 31.25%;
  // background: #eee;
}
</style>