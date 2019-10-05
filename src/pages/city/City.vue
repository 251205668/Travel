<template>
  <div>
    <City-Header></City-Header>
    <City-Search></City-Search>
    <cityList></cityList>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/search'
import cityList from './components/cityList'
export default {

  name: 'City',
  props: [''],
  data () {
    return {

    };
  },

  components: {

    CityHeader,
    CitySearch,
    cityList
  },

  computed: {},

  beforeMount () { },

  mounted () { },

  methods: {},

  watch: {}

}

</script>
<style lang='stylus' scoped></style>