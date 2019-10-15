import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
// Vue使用插件 都通过use方法
Vue.use(Vuex)

export default new Vuex.Store({
  // 导出一个store实例 里面放着state公有数据  如果使用 直接导入Vuex的store 然后再到根vue实例下声明store  就可以在每一个子组件中使用 this.$store.state.属性值
  state,
  actions: {
    changeCity (ctx, city) {
      // 第二步 接收组件派发过来的数据 第一个参数是上下文ctx 第二个为数据
      ctx.commit('changeCity', city)
      // 第三步  执行changeCity的mutations 用commit方法
      // console.log(city)
    }

  },
  mutations: {
    changeCity (state, city) {
      state.city = city
      localStorage.city = city
      // vuex里的localStorage类似于cookie 存储历史记录
    }
  }

})
