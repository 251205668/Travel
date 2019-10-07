<template>
  <ul class="list">
    <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleclick">{{item}}</li>
  </ul>
</template>

<script>

export default {
  name: 'Alphabet',
  props: {
    cities: Object
  },

  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },

  components: {},
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
    // 每次页面被渲染后都会计算出 startY高度 性能提升
  },
  computed: {
    letters () {
      // 构建letters数组
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }

  },

  beforeMount () { },

  mounted () { },

  methods: {
    handleclick (e) {
      this.$emit("change", e.target.innerText)
      // console.log(e.target.innerText)
      // 打印出事件对象的内容
    },
    handleTouchStart () {
      this.touchStatus = true

    },
    handleTouchMove (e) {
      // 具体思路：根据字母距离A字母的高度差 算出当前对应字母的下标  再将数组下标对应元素传递给父组件
      // if (this.touchStatus) {

      //   // 计算出A元素顶部距蓝色底部的高度  （offsetTop距离上方控件的距离）
      //   const touchY = e.touches[0].clientY - 79
      //   // 计算出 当前字母距离蓝色底部的高度（通过e事件的touches数组  clientY距离浏览器有效区域y轴距离）
      //   const index = Math.floor((touchY - this.startY) / 20)

      // }
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        // 定义函数节流方式 清除上一个鼠标滑动    如果正在做手指滚动事情 延迟十六毫秒 如果执行下一次 这需要清除上一次再继续 节约执行频率 防抖
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16);
      }
    },
    handleTouchEnd () {
      this.touchStatus = false

    }
  },

  watch: {}

}

</script>
<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl';

.list {
  // 这三行代码 表示 弹性盒垂直方向内容居中
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  // background: blue;
}

.item {
  line-height: 0.4rem;
  text-align: center;
  color: $bgColor;
}
</style>