<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">C</li>
    <li class="item">D</li>
    <li class="item">E</li>
    <li class="item">F</li>
    <li class="item">G</li>
    <li class="item">H</li>
    <li class="item">I</li>
    <li class="item">J</li>
    <li class="item">K</li>
    <li class="item">L</li>
    <li class="item">M</li>
    <li class="item">N</li>
    <li class="item">O</li>
    <li class="item">P</li>
    <li class="item">Q</li>
    <li class="item">R</li>
    <li class="item">S</li>
    <li class="item">T</li>
    <li class="item">U</li>
    <li class="item">V</li>
    <li class="item">W</li>
    <li class="item">X</li>
    <li class="item">Y</li>
    <li class="item">Z</li>
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
  line-height: 0.34rem;
  text-align: center;
  color: $bgColor;
}
</style>