<template>
  <div>
    <City-Header></City-Header>
    <City-Search></City-Search>
    <cityList :letter="letter"
              :hot="hotCities"
              :cities="cities"></cityList>
    <Alphabet @change="handlechange"
              :cities="cities"></Alphabet>
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
      letter: "",
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
    handlechange (letter) {
      this.letter = letter
      // console.log(letter)
    },
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handlecityajax)
    },
    handlecityajax (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
      console.log(res)
    },

  }
}

</script>
<style lang='stylus' scoped></style>