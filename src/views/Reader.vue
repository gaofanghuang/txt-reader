<template>
  <div class="reader-wrap">
    <div class="reader-article" v-if="book">
      <div class="reader-title">{{ book.title }}</div>
      <div class="reader-content">
        {{ book.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      book: null,
    };
  },
  created() {
    this.book = this.$store.state.curBook;
  },
};
</script>

<style lang="scss">
.reader-wrap {
  height: 100%;
  .reader-title {
    font-size: 24px;
    margin-bottom: 40px;
  }
  .reader-content {
    height: 100%;
    overflow: auto;
  }
}
</style>
