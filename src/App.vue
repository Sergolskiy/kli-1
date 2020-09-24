<template>
  <div id="app">

    <Layout></Layout>

  </div>
</template>

<script>
import Layout from './components/Layout.vue'


export default {
  name: 'App',
  components: {
    Layout
  },

  mounted() {
    // console.log(this.$store.getters.getLang);
    // this.$store.commit('setLang', 'ru')
    // console.log(this.$store.getters.getLang);

    // console.log(this._i18n.locale = 'he');
  }
}
</script>

<style lang="scss">
  /*@import '../node_modules/normalize.css/normalize.css';*/
  @import 'normalize-scss';
  @include normalize();

  @font-face {
    font-family: 'Rubik';
    src: url('./assets/fonts/Rubik-Regular.woff2') format('woff2'),
    url('./assets/fonts/Rubik-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Rubik';
    src: url('./assets/fonts/Rubik-Bold.woff2') format('woff2'),
    url('./assets/fonts/Rubik-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Rubik';
    src: url('./assets/fonts/Rubik-Medium.woff2') format('woff2'),
    url('./assets/fonts/Rubik-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }



  * {
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }

  textarea,
  input,
  a,
  a:focus,
  a:active,
  a:hover{
    text-decoration: none;
    outline: 0;
  }

  button{
    outline: 0;
  }

  a,
  a.active.focus,
  a.active:focus,
  a.focus,
  a:active.focus,
  a:active:focus,
  a:focus,
  button.active.focus,
  button.active:focus,
  button.focus,
  button:active.focus,
  button:active:focus,
  button:focus,
  .btn.active.focus,
  .btn.active:focus,
  .btn.focus,
  .btn:active.focus,
  .btn:active:focus,
  .btn:focus {
    outline: 0!important;
    outline-color: transparent!important;
    outline-width: 0!important;
    outline-style: none!important;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  select{
    outline: none;
  }

  ul{
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .main-wrap{
    overflow: hidden;
    position: relative;
  }
</style>
