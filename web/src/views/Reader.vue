<template>
  <div class="reader-wrap">
    <div class="reader-article" v-if="curBook">
      <div class="reader-title">{{ curBook.title }}</div>
      <div class="reader-content" id="readerContent">
        <div id="content" class="reader-content-text" v-html="content"></div>
      </div>
      <div class="reader-bar">
        <div class="reader-bar-left" @click="addMark">mark</div>
        <div class="reader-bar-center" @click="showMenu = true">menu</div>
        <div class="reader-bar-right">{{ process }}</div>
      </div>

      <transition name="fadeIn">
        <div class="menu-wrap" v-show="showMenu">
          <div class="menu-mask" @click="showMenu = false"></div>
          <ul class="menu-list">
            <li
              class="menu-item"
              @click="scrollTo(item.no)"
              v-for="(item, index) in curBook.menu"
              :key="index + item.no"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import $db from '@/store/DB';

export default {
  data() {
    return {
      showMenu: false,
      curBook: null,
      content: '',
      process: '',
    };
  },
  created() {
    this.curBook = this.$store.state.curBook;
    if (this.curBook) {
      this.getContent();
    }
  },
  mounted() {},
  methods: {
    async getContent() {
      const id = this.curBook.id;
      const book = await $db.getData(id);
      this.content = book.content;
    },
    scrollTo(no) {
      const theNo = document.querySelector(`#content div[data-no='${no}']`);
      document.querySelector('#readerContent').scrollTo({
        top: theNo.offsetTop - 100,
        left: 0,
        behavior: 'smooth',
      });
      this.showMenu = false;
    },
    addMark() {
      console.log('添加标签');
    },
  },
};
</script>

<style lang="scss">
.reader-wrap {
  height: 100%;
  .reader-article {
    height: 100%;
  }
  .reader-title {
    width: 900px;
    margin-left: auto;
    margin-right: auto;
    font-size: 12px;
    margin-bottom: 20px;
    color: #aaaaaa;
  }
  .reader-content {
    height: calc(100% - 40px);
    overflow: auto;
    &::-webkit-scrollbar,
    &::-webkit-scrollbar-track {
      background: #f2f2f2;
      border-radius: 8px;
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: #999999;
      border-radius: 8px;
    }
  }
  .reader-content-text {
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    font-size: 18px;
    letter-spacing: 1px;
    color: #666;
    text-align: left;
    line-height: 2;
    word-wrap: break-word;
    word-break: break-all;
    .line {
      margin-bottom: 20px;
    }
  }
  .menu-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba($color: #000000, $alpha: 0.68);
  }
  .menu-list {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 3px 3px 16px rgba($color: #000000, $alpha: 0.18);
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    align-items: flex-start;
  }
  .menu-item {
    height: 36px;
    line-height: 36px;
    padding: 0 10px;
    transition: 0.2s;
    cursor: pointer;
    color: #999999;
    border-radius: 4px;
    &:hover {
      background: #f9f9f9;
    }
  }
  .reader-bar {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #aaaaaa;
    width: 900px;
    transition: 0.2s;
    & > div {
      padding: 4px 10px;
      border-radius: 8px;
      cursor: pointer;
      &:hover {
        background: rgba($color: #ffffff, $alpha: 0.68);
      }
    }
  }
}
</style>
