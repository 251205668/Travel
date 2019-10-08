<template>
  <div id="app">
    <!-- 显示的是当前路由地址所对应的内容 keep-alive 如果路由重新加载 就不会重新渲染(放入缓存) 就不会重新调用钩子函数 -->
    <keep-alive>
      <router-view />
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
