<template>
  <div class="Header">
    城市选择
    <router-link to="/">
      <div class="iconfont Header-back">
        &#xe624;
      </div>
    </router-link>

  </div>
</template>

<script>

export default {
  name: 'CityHeader',
  props: [''],
  data () {
    return {

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
@import '~@/assets/styles/varibles.styl';

.Header {
  overflow: hidden;
  height: $headerheight;
  line-height: 0.86rem;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.32rem;
  position: relative;
}

.Header-back {
  width: 0.64rem;
  text-align: center;
  font-size: 0.4rem;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
}
</style>
