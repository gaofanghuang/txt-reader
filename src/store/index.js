import Vue from 'vue';
import Vuex from 'vuex';
// TODO: 替换成IndexedDB
import $db from '@/store/Storage';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: $db.getData('books') || [],
    curBook: $db.getData('curBook') || null,
  },
  mutations: {
    SaveBook(state, data) {
      let books = state.books;
      books.push({
        title: data.title,
        content: data.content,
        mark: [],
        createdTime: new Date().toLocaleDateString(),
      });
      state.books = books;
      $db.setData('books', books);
    },
    SaveCurBook(state, data) {
      state.curBook = data;
      $db.setData('curBook', data);
    },
  },
  actions: {},
  modules: {},
});
