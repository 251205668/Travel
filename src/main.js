// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
// 引入reset.css使得移动端默认样式相同
import './assets/styles/border.css'
// 引入一像素边框的解决方案 可能存在2倍屏
import fastClick from 'fastclick'
// 解决点击300ms延迟问题
import './assets/styles/iconfont.css'
Vue.config.productionTip = false
fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})