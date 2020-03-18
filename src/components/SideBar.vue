<template>
  <ul class="side-bar">
    <li class="sider-item" v-for="item in list" :key="item.name">
      <router-link :to="item.path">{{ item.name }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          icon: 'abc',
          name: '阅读',
          path: '/reader',
        },
        {
          icon: 'abc',
          name: '书架',
          path: '/bookshelf',
        },
        {
          icon: 'abc',
          name: '设置',
          path: '/set',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.side-bar {
  width: 100%;
  height: 100%;
  background: #333333;
  color: #fff;
  padding: 40px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .sider-item {
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      background: rgba($color: #ffffff, $alpha: 0.03);
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    .router-link-exact-active {
      background: rgba($color: #ffffff, $alpha: 0.05);
    }
  }
}
</style>
