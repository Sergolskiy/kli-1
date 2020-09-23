import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import en from './en'
import he from './he'

const messages = {
  en: {
    message: en
  },
  he: {
    message: he
  }
}

export const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})
