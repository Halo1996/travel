
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <!-- 显示的是当前路由地址显示的内容 -->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
// 单文件组件
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
