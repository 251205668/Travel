<template>
  <div>
    <div class="recommend-tittle"> 周末去哪儿</div>
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
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'HomeWeekend',
  props: [''],
  data () {
    return {
      recommendList: [
        {
          id: '001',
          imgurl: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
          title: '上海必打卡',
          desc: '中西合璧，现代和传统各有各的精彩'

        },
        {
          id: '002',
          imgurl: 'http://img1.qunarzz.com/sight/source/1603/ad/69b0fc5f48ad5f.jpg_r_640x214_b0fd5c7b.jpg',
          title: '周末亲子爱玩',
          desc: '走进自然或玩转乐园，感知大千世界，游乐项目惊险刺激，特色表演异彩纷呈，等你们~'

        },
        {
          id: '003',
          imgurl: 'http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg',
          title: '上海城市观光',
          desc: '来这里寻找你所不认识的魔都 ，感受云端漫步，品味老上海风情，享受休闲时光'

        },
        {
          id: '004',
          imgurl: 'http://img1.qunarzz.com/sight/source/1505/7b/2a6b0ce087f0e5.jpg_r_640x214_5c76b115.jpg',
          title: '情迷博物馆',
          desc: '走进艺术殿堂，电影博物馆生动演绎着电影人和电影背后的故事，你不想知道吗~'

        },
        {
          id: '005',
          imgurl: 'http://img1.qunarzz.com/sight/source/1505/b7/2f4621a3a4e12c.jpg_r_640x214_d55c10ba.jpg',
          title: '学生最爱TOP10',
          desc: '学习之余最爱玩耍，爱玩的你不可错过'

        },
        {
          id: '006',
          imgurl: 'http://img1.qunarzz.com/sight/p0/1411/4f/146031f0bc5d7e0dd960d3f5bf0c9eca.water.jpg_200x200_f22705c9.jpg',
          title: '上海科技馆',
          desc: '上海市浦东新区世纪大道2000号(近二号线上海科技馆站)'

        }
      ]
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
.recommend-tittle {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item-img-div {
  height: 0;
  overflow: hidden;
  padding-bottom: 37.09%;
  // 保持3:1宽高
}

.item-img {
  width: 100%;
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
</style>
