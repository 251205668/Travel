<template>
  <div class="search">
    <input type="text"
           class="search-input"
           placeholder="请输入城市拼音或者字母">
  </div>
</template>

<script>

export default {
  name: 'CitySearch',
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
</style>