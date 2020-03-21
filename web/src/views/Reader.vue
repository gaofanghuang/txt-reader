<template>
  <div class="reader-wrap">
    <div class="reader-article" v-if="curBid">
      <div class="reader-title">{{ title }}</div>
      <div class="reader-content" id="readerContent">
        <div id="content" class="reader-content-text" v-html="content"></div>
      </div>
      <div class="reader-bar">
        <div class="reader-bar-left" @click="addMark">
          mark(<i class="mark-pop">{{ mark.length }}</i
          >)
        </div>
        <div class="reader-bar-center" @click="showMenu = true">menu</div>
        <div class="reader-bar-right">{{ process }}</div>
      </div>

      <transition name="fadeIn">
        <div class="menu-wrap" v-show="showMenu">
          <div class="menu-mask" @click="showMenu = false"></div>
          <div class="menu-box">
            <ul class="menu-list">
              <li
                class="menu-item"
                @click="scrollTo(item.no)"
                v-for="(item, index) in menu"
                :key="index + item.no"
              >
                {{ item.name }}
              </li>
            </ul>
          </div>
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
      curBid: '',
      title: '',
      content: '',
      menu: [],
      mark: [],
      process: '',
    };
  },
  created() {
    this.curBid = this.$store.state.curBid;
    if (this.curBid) {
      this.getContent();
    }
  },
  methods: {
    async getContent() {
      const book = await $db.get(this.curBid);
      this.title = book.title;
      this.menu = book.menu;
      this.mark = book.mark;
      this.content = book.content && book.content.replace(/\n/g, '<br><div class="line"></div>');
      setTimeout(() => {
        if (this.mark.length > 0) {
          document.querySelector('#readerContent').scrollTo({
            top: this.mark[this.mark.length - 1],
            left: 0,
          });
        }
      }, 1000);
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
    async addMark() {
      console.log('添加标签');
      const markPoint = document.querySelector('#readerContent').scrollTop;
      this.mark.push(markPoint);
      await $db.updated(this.curBid, { mark: this.mark });
      console.log(markPoint);
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
    height: calc(100% - 60px);
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
  .menu-box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    overflow: hidden;
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 3px 3px 16px rgba($color: #000000, $alpha: 0.18);
  }
  .menu-list {
    width: 100%;
    max-height: 60vh;
    padding: 20px;
    overflow-y: auto;
    display: flex;
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
    bottom: 10px;
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
        background: rgba($color: #000000, $alpha: 0.04);
      }
    }
  }
  .mark-pop {
    font-style: normal;
  }
}
</style>
