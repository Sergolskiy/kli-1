import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    lang: 'en',
  },

  getters: {
    getLang: state => {
      return state.lang;
    }
  },

  mutations: {
    setLang: (state, payload) => {
      state.lang = payload;
    }
  },

  actions: {},
});
