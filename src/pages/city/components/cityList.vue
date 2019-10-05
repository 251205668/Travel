<template>
  <div class="list">
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>

    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">上海</div>
        </div>
        <div class="button-wrapper">
          <div class="button">三亚</div>
        </div>
        <div class="button-wrapper">
          <div class="button">香港</div>
        </div>
        <div class="button-wrapper">
          <div class="button">杭州</div>
        </div>
        <div class="button-wrapper">
          <div class="button">广州</div>
        </div>
        <div class="button-wrapper">
          <div class="button">成都</div>
        </div>
        <div class="button-wrapper">
          <div class="button">深圳</div>
        </div>

      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>

      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>

      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>

      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>

      </div>
    </div>
  </div>
</template>

<script> 

export default {
  name: 'cityList',
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
@import '~@/assets/styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.title {
  line-height: 0.4rem;
  background: #eee;
  padding-left: 0.2rem;
  color: #666;
  font-size: 0.24rem;
}

.button-list {
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
  overflow: hidden;
  // 触发BFC
}

.button-wrapper {
  width: 33.33%;
  float: left;
}

.button {
  padding: 0.1rem 0;
  text-align: center;
  margin: 0.1rem;
  border: 0.02rem solid #ccc;
  border-radius: 0.05rem;
}

.item {
  line-height: 0.76rem;
  padding-left: 0.2rem;
}
</style>