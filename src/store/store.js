import Vue from 'vue';
import Vuex from 'vuex';
import {auth} from './auth'
import {user} from './user'
import {cart} from './cart'

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
    user: user,
    cart: cart,
  },

  state: {
    lang: 'en',
    url: '',
  },

  getters: {
    getLang: state => {
      return state.lang;
    },
    getUrl: state => {
      return state.url;
    },

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

