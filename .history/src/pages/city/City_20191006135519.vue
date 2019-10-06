<template>
  <div>
    <City-Header></City-Header>
    <City-Search></City-Search>
    <cityList></cityList>
    <Alphabet></Alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/search'
import cityList from './components/cityList'
import Alphabet from './components/Alphabet'
import axios from 'axios'
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
    cityList,
    Alphabet
  },

  computed: {},

  beforeMount () { },

  mounted () {
    this.getCityInfo()

  },

  methods: {

    getCityInfo () {
      axios.get('/api/city.json').then(this.handlecityajax)
    },
    handlecityajax (res) {

    }
  },

  watch: {}

}

</script>
<style lang='stylus' scoped></style>