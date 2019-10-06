<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">C</li>
    <li class="item">D</li>
    <li class="item">E</li>
    <li class="item">F</li>
  </ul>
</template>

<script>

export default {
  name: 'Alphabet',
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
  line-height: 0.54rem;
  text-align: center;
  color: $bgColor;
}
</style>