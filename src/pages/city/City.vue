<template>
  <div>
    <City-Header></City-Header>
    <City-Search></City-Search>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/search'
export default {

  name: 'City',
  props: [''],
  data () {
    return {

    };
  },

  components: {

    CityHeader,
    CitySearch
  },

  computed: {},

  beforeMount () { },

  mounted () { },

  methods: {},

  watch: {}

}

</script>
<style lang='stylus' scoped></style>