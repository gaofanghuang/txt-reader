<template>
  <div class="bookshelf-wrap">
    <div class="bookshelf-import">
      <div class="bookshelf-import-input" v-if="!reset">
        <input ref="fileInp" type="file" @change="getFile" />
      </div>
      <div class="bookshelf-import-btn" @click="importFile">导入</div>
    </div>
    <div class="bookshelf-books">
      <div
        class="bookshelf-book-item"
        @click="readerItem(index)"
        v-for="(item, index) in books"
        :key="item.title + '-' + item.createdTime"
      >
        <div class="bookshelf-book-cover"></div>
        <div class="bookshelf-book-info">
          <div class="bookshelf-book-title">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reset: false,
      newTxt: '',
    };
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
  methods: {
    importFile() {
      this.$refs.fileInp.click();
    },
    getFile(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      const content = this;
      reader.readAsText(file, 'gb2312');
      reader.onload = function() {
        content.$store.commit('SaveBook', {
          title: file.name.split('.')[0],
          content: this.result,
        });
        content.reset = true;
        setTimeout(() => {
          content.reset = false;
        });
      };
    },
    readerItem(index) {
      this.$store.commit('SaveCurBook', this.books[index]);
      this.$router.push('/reader');
    },
  },
};
</script>

<style lang="scss">
@import '@/style/mixins';

.bookshelf-wrap {
  .bookshelf-import {
    display: flex;
    height: 48px;
  }
  .bookshelf-import-input {
    width: 100%;
    height: 100%;
    background: #e9e9e9;
    border-radius: 4px;
    input {
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
  .bookshelf-import-btn {
    flex-shrink: 0;
    width: 120px;
    height: 100%;
    background: $primary;
    color: #ffffff;
    border-radius: 4px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s;
    font-size: 16px;
    &:hover {
      background: darken($primary, 5%);
    }
  }
  .bookshelf-books {
    margin-top: 40px;
  }
  .bookshelf-book-item {
    padding: 20px 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.2s;
    border-radius: 4px;
    &:hover {
      background: #f2f2f2;
    }
  }
  .bookshelf-book-cover {
    width: 10px;
    height: 10px;
    flex-shrink: 0;
    border-radius: 50%;
    background: #e5e5e5;
    margin-right: 20px;
    margin-left: 20px;
  }
}
</style>
