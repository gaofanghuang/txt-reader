<template>
  <div class="reader-wrap">
    <div class="reader-article" v-if="curBook">
      <div class="reader-title">{{ curBook.title }}</div>
      <div class="reader-content">
        <div class="reader-content-text" v-html="content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import $db from '@/store/DB';

export default {
  data() {
    return {
      curbook: null,
      content: '',
    };
  },
  created() {
    this.curBook = this.$store.state.curBook;
    this.getContent();
  },
  methods: {
    async getContent() {
      const id = this.curBook.id;
      const book = await $db.getData(id);
      this.content = book.content.replace(/\n/g, '<br><div class="line"></div>');
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
    .line {
      margin-bottom: 20px;
    }
  }
}
</style>
