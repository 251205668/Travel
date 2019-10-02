<template>
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
</template>

<script>

export default {
  name: 'HomeIcons',
  props: [''],
  data () {
    return {

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
<style lang='stylus' scoped>
.icons {
  // 向下撑蛮宽高二比一的布局
  height: 0;
  padding-bottom: 50%;
  // background: green;
  overflow: hidden;
}

.icon1 {
  // 定义八个 一比一的盒子的布局
  position: relative;
  overflow: hidden;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
  // background: red;
}

.img-div {
  // 图片太大 overflow  定义好图片所在的位置
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.44rem;
  box-sizing: border-box;
  padding: 0.1rem;
}

p {
  // 文字居中 位置定义好
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 0.44rem;
  height: 0.44rem;
  text-align: center;
  columns: #333333;
}

img {
  // 完全显示一张图片 而且居中
  height: 100%;
  display: block;
  margin: 0 auto;
}
</style>