<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <div class="icons">
          <div class="icon1">
            <div class="img-div">
              <img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
                   alt="">
            </div>
            <p>景点门票</p>
          </div>
          <div class="icon1">
            <div class="img-div">
              <img src="http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png"
                   alt="">
            </div>

            <p>动植物园</p>
          </div>
          <div class="icon1">
            <div class="img-div">
              <img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3ef092d0a89ffddb7f781cda30c8ae49.png"
                   alt="">
            </div>
            <p>国庆大促</p>
          </div>
          <div class="icon1">
            <div class="img-div">
              <img src="http://img1.qunarzz.com/piao/fusion/1803/f5/c4c9d9830404e602.png"
                   alt="">
            </div>
            <p>室内娱乐</p>
          </div>
          <div class="icon1">
            <div class="img-div">
              <img src="http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png"
                   alt="">
            </div>
            <p>一日游</p>
          </div>
          <div class="icon1">
            <div class="img-div">
              <img src="http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png"
                   alt="">
            </div>
            <p>黄浦江游</p>
          </div>
          <div class="icon1">
            <div class="img-div">
              <img src="http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png"
                   alt="">
            </div>
            <p>上海野生</p>
          </div>
          <div class="icon1">
            <div class="img-div">
              <img src="http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png"
                   alt="">
            </div>
            <p>上海迪士尼</p>
          </div>
        </div>

      </swiper-slide>

      <swiper-slide>
        <div class="icons">
          <div class="icon1">
            <div class="img-div">
              <img src="https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png"
                   alt="">
            </div>
            <p>上海海关</p>
          </div>
          <div class="icon1">
            <div class="img-div">
              <img src="http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png"
                   alt="">
            </div>

            <p>城市观光</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'HomeIcons',
  props: [''],
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
        // loop: true,
        // autoplay: 3000,
        // autoplayDisableOnInteraction: false
      }

    }
  },

  components: {},

  computed: {},

  beforeMount () { },

  mounted () { },

  methods: {},

  watch: {}

}

</script>
<style lang='stylus' scoped>
.icons {
  height: 0;
  padding-bottom: 50%;
  // background: green;
  overflow: hidden;
  margin-top: 0.2rem;
}

.icon1 {
  position: relative;
  overflow: hidden;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
  // background: red;
}

.img-div {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.44rem;
  box-sizing: border-box;
  padding: 0.1rem;
}

p {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 0.44rem;
  height: 0.44rem;
  text-align: center;
  columns: #333333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

img {
  height: 100%;
  display: block;
  margin: 0 auto;
}
</style>
