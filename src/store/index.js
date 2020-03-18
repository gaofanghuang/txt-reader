import Vue from 'vue';
import Vuex from 'vuex';
import $storage from '@/store/Storage';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: $storage.getData('books') || [],
    curBook: $storage.getData('curBook') || null,
  },
  mutations: {
    SaveBook(state, data) {
      let books = state.books || [];
      books.push(data);
      state.books = books;
      $storage.setData('books', books);
    },
    SaveCurBook(state, data) {
      state.curBook = data;
      $storage.setData('curBook', data);
    },
  },
  actions: {},
  modules: {},
});
