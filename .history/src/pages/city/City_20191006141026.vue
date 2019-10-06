<template>
  <div>
    <City-Header></City-Header>
    <City-Search></City-Search>
    <cityList :hotCities="hotCities"></cityList>
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
      cities: "",
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
      // 当获取到ajax内容 拿出数据
      res = res.data
      if (res.ret && res.data) {
        // 如果获取到这个resdata 并且resdata存在 那么就把resdata里的city赋给组件属性
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    watch: {}
  }
}

</script>
<style lang='stylus' scoped></style>