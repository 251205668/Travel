<template>
  <div>
    <div class="search">
      <input type="text"
             v-model="keyword"
             class="search-input"
             placeholder="请输入城市拼音或者字母">
    </div>
    <div ref="search"
         class="search-content"
         v-show="keyword">
      <ul>
        <li class="search-item border-topbottom "
            v-for="item of list"
            :key="item.name">{{item.name}}</li>
        <!-- 如果不存在list里没有内容 就显示 -->
        <li class="search-item border-topbottom "
            v-show="!list.length">
          Can't find result
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    };
  },

  components: {},

  computed: {},

  beforeMount () { },

  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },

  methods: {},

  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
        // 返回空
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          // 实现搜索功能 ：循环这个数组的前提下  遍历循环'A''B'...里面的数据 再对keyword搜索下标为止 然后向空数组添加元素
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          });
        }
        this.list = result
      }, 100)

    }
  }

}

</script>
<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl';

.search {
  height: 0.72rem;
  background: $bgColor;
  padding: 0 0.1rem;
  font-weight: bold;
}

.search-input {
  // border: 1px solid #A18CD1;
  padding: 0 0.1rem;
  box-sizing: border-box;
  height: 0.62rem;
  width: 100%;
  line-height: 0.62rem;
  text-align: center;
  border-radius: 0.06rem;
  font-size: 0.28rem;
  font-family: 'Microsoft Yahei', Arial;
  // color: #666;
}

.search-content {
  position: absolute;
  overflow: hidden;
  left: 0;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.search-item {
  line-height: 0.42rem;
  padding: 0.2rem;
  background: #fff;
}
</style>