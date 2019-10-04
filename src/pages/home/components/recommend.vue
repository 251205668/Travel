<template>
  <div>
    <div class="recommend-tittle"> 热销推荐</div>
    <ul>
      <li v-for="item of relist"
          :key="item.id"
          class="item border-bottom">
        <div class="item-img-div">
          <img class="item-img"
               :src="item.imgurl"
               alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Homerecommend',
  props: {
    relist: Array
  },
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
.recommend-tittle {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item {
  display: flex;
  height: 1.9rem;
  overflow: hidden;
  // background: red;
}

.item-img {
  width: 1.7rem;
  height: 1.7rem;
  padding: 0.1rem;
}

.item-info {
  flex: 1;
  padding: 0.1rem;
  min-width: 0;
}

.item-title {
  line-height: 0.54rem;
  font-size: 0.32rem;
}

.item-desc {
  line-height: 0.4rem;
  color: #ccc;
  // 强制一行内显示多行文本 移除省略号代替
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-button {
  line-height: 0.34rem;
  margin-top: 0.2rem;
  background: #ff9300;
  padding: 0.06rem;
  border-radius: 0.06rem;
  color: #fff;
}
</style>