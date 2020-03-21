import Vue from 'vue';
import Vuex from 'vuex';
import $storage from '@/store/Storage';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: $storage.getData('books') || [],
    curBid: $storage.getData('curBid') || '',
  },
  mutations: {
    SaveBook(state, data) {
      let books = state.books || [];
      books.push(data);
      state.books = books;
      $storage.setData('books', books);
    },
    DeleteBook(state, data) {
      let books = state.books;
      const id = data.id;
      const newBooks = books.filter(item => item.id !== id);
      state.books = newBooks;
      $storage.setData('books', newBooks);
    },
    toCurBid(state, data) {
      state.curBid = data;
      $storage.setData('curBid', data);
    },
  },
  actions: {},
  modules: {},
});
