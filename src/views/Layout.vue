<template>
  <div class="layout-wrap">
    <div class="layout-sidebar">
      <SideBar />
    </div>
    <div class="layout-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar';

export default {
  name: 'Home',
  components: {
    SideBar,
  },
};
</script>

<style lang="scss">
.layout-wrap {
  display: flex;
  width: 100%;
  height: 100vh;
  .layout-sidebar {
    width: 60px;
    height: 100%;
    flex-shrink: 0;
  }
  .layout-main {
    width: 100%;
    height: 100%;
    padding: 40px;
  }
}
</style>
