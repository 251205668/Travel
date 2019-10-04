import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
                // 当访问根路径的时候 内容为（展示）HelloWorld
        },
        {
            path: '/city',
            name: 'City',
            component: City
                // 当访问根路径的时候 内容为（展示）HelloWorld
        }
    ]
})