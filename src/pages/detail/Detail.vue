<template>
  <div>
    <DetailBanner></DetailBanner>
    <DetailHeader></DetailHeader>
    <div class="content">
      <Detaillist :list="list"></Detaillist>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import Detaillist from './components/list.vue'
export default {
  name: 'Detail',
  props: [''],
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人三管连票',
          children: [{
            title: "成人三管连票-单价优惠"
          }]
        },
        {
          title: '成人五管连票'
        }]
      }, {
        title: '学生票',
        children: [{
          title: '学生三管连票',
          children: [{
            title: "学生三管连票-单价优惠"
          }]
        },
        {
          title: '成人五管连票'
        }]
      },
      {
        title: '优惠票'

      },
      {
        title: '儿童票',

      }]
    };
  },

  components: {
    DetailBanner,
    DetailHeader,
    Detaillist
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