<template>
  <div>
    <div class="recommend-tittle"> 热销推荐</div>
    <ul>
      <li v-for="item of recommendList"
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
  props: [''],
  data () {
    return {
      recommendList: [
        {
          id: "001",
          imgurl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
          title: '上海迪士尼乐园',
          desc: '上海市浦东新区川沙新镇上海迪士尼度假区内'

        },
        {
          id: "002",
          imgurl: 'http://img1.qunarzz.com/sight/p0/1908/c8/c8f722801de63d7ca3.img.jpg_200x200_592ccf80.jpg',
          title: '上海野生动物园',
          desc: '上海市浦东新区南六公路178号'

        },
        {
          id: "003",
          imgurl: 'http://img1.qunarzz.com/sight/p0/1906/19/19b7939928a0200da3.img.jpg_200x200_6879c7f7.jpg',
          title: '上海海昌海洋公园',
          desc: '上海市浦东新区南汇城银飞路166号'

        },
        {
          id: "004",
          imgurl: 'http://img1.qunarzz.com/sight/p0/1412/9f/fbff2a5302c0ce906ef9b64159730f89.water.jpg_200x200_87806940.jpg',
          title: '上海海洋水族馆',
          desc: '上海市浦东新区陆家嘴环路1388号（近东方明珠）'

        },
        {
          id: "005",
          imgurl: 'http://img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_200x200_6d7378b2.jpg',
          title: '东方明珠',
          desc: '上海市浦东新区世纪大道1号'

        },
        {
          id: "006",
          imgurl: 'http://img1.qunarzz.com/sight/p0/1411/4f/146031f0bc5d7e0dd960d3f5bf0c9eca.water.jpg_200x200_f22705c9.jpg',
          title: '上海科技馆',
          desc: '上海市浦东新区世纪大道2000号(近二号线上海科技馆站)'

        }
      ]
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