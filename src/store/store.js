import Vue from 'vue';
import Vuex from 'vuex';
import {auth} from './auth'

Vue.use(Vuex);



// const moduleB = {
//   state: {
//     count: 8
//   },
//   mutations: {
//
//   },
//   getters: {
//
//   },
//   actions: {
//
//   }
// }

export const store = new Vuex.Store({
  modules: {
    auth: auth,
    // b: moduleB
  },

  state: {
    lang: 'en',
    url: '',
    cart: false,

  },

  getters: {
    getLang: state => {
      return state.lang;
    },
    getUrl: state => {
      return state.url;
    },
    getCart: state => {
      return state.cart;
    }
  },

  mutations: {
    setLang: (state, payload) => {
      state.lang = payload;
    },
    setUrl: (state, payload) => {
      state.url = payload;
    },
    setCart: (state, payload) => {
      state.cart = payload;
    }
  },

  actions: {},
});

