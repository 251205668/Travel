<template>
  <div class="list"
       ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div v-for="item of hot"
               :key="item.id"
               @click="handleCityclick(item.name)"
               class="button-wrapper">
            <div class="button">{{item.name}}</div>
          </div>

        </div>
      </div>
      <div class="area"
           v-for="(item, key) of cities"
           :key="key"
           :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
               @click="handleCityclick(innerItem.name)"
               v-for="innerItem of item"
               :key="innerItem.id">
            {{innerItem.name}}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'cityList',
  props: {
    letter: String,
    hot: Array,
    cities: Object

  },
  data () {
    return {

    }
  },

  components: {},

  computed: {},

  beforeMount () { },

  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
    this.scroll.refresh()
    // 页面挂载后 wrapper dom使用Bscroll插件
    // console.log(hot)
  },

  methods: {
    handleCityclick (city) {
      this.$store.dispatch('changeCity', city)
      //  第一步 将city派发给action
      this.$router.push('/')
    }
  },

  watch: {
    letter () {
      // 当监听到letter变化 则list 滚动到key为letter的页面
      if (this.letter) {
        // 获取点击的dom 字母  因为是循环的ref 所以数组 但是这个数组里只有一个元素
        const element = this.$refs[this.letter][0]
        // console.log(element)
        this.scroll.scrollToElement(element)
      }
      this.scroll.refresh()
    }
  }

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
  line-height: 0.54rem;
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
