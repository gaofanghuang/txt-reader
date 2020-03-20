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
        v-for="(item, index) in books"
        :key="item.title + '-' + item.createdTime"
      >
        <div class="bookshelf-book-info" @click="readerItem(index)">
          <div class="bookshelf-book-dot"></div>
          <div class="bookshelf-book-title">{{ item.title }}</div>
        </div>
        <span class="bookshelf-book-delete" @click="deleteBook(item.id)">删除</span>
      </div>
    </div>
  </div>
</template>

<script>
import $db from '@/store/DB';

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
      reader.onload = async e => {
        const book = {
          title: file.name.split('.')[0],
          mark: [],
          createdTime: new Date().toLocaleDateString(),
        };
        let text = e.target.result;
        const menu = content.formatText(text);
        const rule = /第(.+?)章([\s\S]*?)\n/g;
        text = text.replace(rule, '<div data-no="$1">第$1章 $2</div><br>');
        text = text.replace(/\n/g, '<br><div class="line"></div>');
        console.log(menu);
        const id = await $db.setData({ ...book, content: text, menu });
        content.$store.commit('SaveBook', { ...book, id, menu });
        content.reset = true;
        setTimeout(() => {
          content.reset = false;
        });
      };
    },
    formatText(text) {
      const rule = /第(.+?)章([\s\S]*?)\n/g;
      const menu = [];
      let result;
      while ((result = rule.exec(text)) != null) {
        menu.push({
          name: result[0],
          no: result[1]
        });
      }
      return menu;
    },
    readerItem(index) {
      this.$store.commit('SaveCurBook', this.books[index]);
      this.$router.push('/reader');
    },
    async deleteBook(id) {
      this.$store.commit('DeleteBook', { id });
      const res = await $db.deleteData(id);
    },
  },
};
</script>

<style lang="scss">
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
    transition: 0.2s;
    border-radius: 4px;
    position: relative;
    &:hover {
      background: #f2f2f2;
      .bookshelf-book-delete {
        display: block;
      }
    }
  }
  .bookshelf-book-info {
    padding: 20px 0;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .bookshelf-book-dot {
    width: 10px;
    height: 10px;
    flex-shrink: 0;
    border-radius: 50%;
    background: #e5e5e5;
    margin-right: 20px;
    margin-left: 20px;
  }
  .bookshelf-book-delete {
    display: none;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: $error;
    cursor: pointer;
  }
}
</style>
