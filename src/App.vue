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
    if(location.hostname === 'frontend.topden.net') {
      this.$store.commit('setUrl', './kli1/')
    }

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
  @import '../node_modules/vue-multiselect/dist/vue-multiselect.min.css';


  .multiselect__tags{
    background: #F8F8F8;
    border: 1px solid #F0F0F0;
    box-sizing: border-box;
    border-radius: 6px;
  }

  .multiselect__single{
    background: #F8F8F8;
    font-size: 16px;
    line-height: 19px;
    color: #525252;
    display: flex;
    align-items: center;
  }

  .multiselect__option{
    display: flex;
    align-items: center;
  }

  .multiselect__option--highlight{
    background: transparent;
    font-size: 16px;
    line-height: 23px;
    color: #3F4A5D;
  }


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
