<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    if ('indexedDB' in window) {
      console.log('当前浏览器支持 IndexedDB');
      return;
    } else {
      console.log('您的浏览器不支持 IndexedDB, 请升级或更换其他浏览器');
    }
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
