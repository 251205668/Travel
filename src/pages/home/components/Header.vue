<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont backicon">
        &#xe624;
      </div>
    </div>
    <div class="header-input"><span class="iconfont">&#xe632;</span><span class="tui">输入城市景点或游玩主题</span></div>
    <router-link to="/city">
      <div class="header-right">{{this.currentcity}}<span class="iconfont selecticon">&#xe64a;</span></div>
    </router-link>

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  props: {

  },
  computed: {
    ...mapState({
      currentcity: 'city'
    })
    // mapState 把vuex里面的数据映射到计算属性中 将city映射到currentcity这个对象中 上面就可以直接使用 this.currentcity引用数据
  }
}
</script>

 <style lang="stylus" scoped>
 @import '~@/assets/styles/varibles.styl';

 .header {
   display: flex;
   line-height: $headerheight;
   background: $bgColor;
   color: #fff;
 }

 .header-left {
   width: 0.64rem;
   float: left;
 }

 .backicon {
   text-align: center;
   font-size: 0.4rem;
 }

 .tui {
   margin-left: 0.1rem;
 }

 .header-input {
   flex: 1;
   padding-left: 0.2rem;
   height: 0.64rem;
   line-height: 0.64rem;
   margin-top: 0.12rem;
   margin-left: 0.2rem;
   background: #fff;
   border-radius: 0.1rem;
   color: #ccc;
 }

 .header-right {
   min-width: 1.24rem;
   float: right;
   text-align: center;
   color: #fff;
 }

 .selecticon {
   font-size: 0.3rem;
 }
</style>
