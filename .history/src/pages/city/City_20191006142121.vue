<template>
  <div>
    <City-Header></City-Header>
    <City-Search></City-Search>
    <cityList :hot="hotCities"
              :cities="cities"></cityList>
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
      cities: {},
      hotCities: []
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
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },

  }
}

</script>
<style lang='stylus' scoped></style>