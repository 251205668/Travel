<template>
  <div>
    <DetailBanner></DetailBanner>
    <DetailHeader></DetailHeader>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
export default {
  name: 'Detail',
  props: [''],
  data () {
    return {

    };
  },

  components: {
    DetailBanner,
    DetailHeader
  },

  computed: {},

  beforeMount () { },

  mounted () { },

  methods: {},

  watch: {}

}

</script>
<style lang='stylus' scoped>
.content {
  height: 50rem;
}
</style>