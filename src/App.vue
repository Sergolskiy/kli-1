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
      this.$store.commit('setUrl', '/kli1/')
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



  /*select*/

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
    padding-left: 13px;
  }

  .multiselect__option{
    display: flex;
    align-items: center;
    background: transparent;
    font-size: 16px;
    line-height: 23px;
    color: #3F4A5D;
    padding-left: 55px;
    position: relative;
  }

  .multiselect__option:before{
    content: '';
    left: 20px;
    position: absolute;
    top: 11px;
    background: #F0F0F0;
    border-radius: 4px;
    width: 26px;
    height: 26px;
  }
  .multiselect__option.multiselect__option--highlight{

  }

  .multiselect__option.multiselect__option--selected{
    background: transparent;
    font-weight: 400;
    color: #3F4A5D;
  }

  .multiselect__option.multiselect__option--selected:before{
    background: #D23D20;
  }
  .multiselect__option.multiselect__option--selected:after{
    content: '';
    position: absolute;
    left: 20px;
    top: 12px;
    width: 26px;
    height: 26px;
    background-color: transparent;
    background-image: url("./assets/img/ico/white-check-ico.svg");
    background-position: center;
    background-size: 10px;
    background-repeat: no-repeat;
    padding-left: 0;
    padding-right: 0;
  }

  .multiselect__select:before{
    border: 0;
    width: 12px;
    height: 8px;
    background-image: url('./assets/img/ico/red-arrow-down.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    margin: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  /*select end*/



  /*pagination*/

  .pagination-container{
    display: flex;
    justify-content: center;

    li{
      margin:  0 5px;
    }

    .pagination-prev,
    .pagination-next{
      position: relative;
      height: 56px;
      width: 56px;
      display: flex;

      &:before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        background-repeat: no-repeat;
        background-position: center;
        transition: .3s;
      }

      &:after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        background-repeat: no-repeat;
        background-position: center;
        transition: .3s;
        opacity: 0;
      }
    }
    .pagination-prev:before{
      background-image: url("assets/img/ico/slider-arrow-left.svg");
    }
    .pagination-prev:hover:before{
      opacity: 0;
    }
    .pagination-next:before{
      background-image: url("assets/img/ico/slider-arrow-right.svg");
    }
    .pagination-next:hover:before{
      opacity: 0;
    }

    .pagination-prev:after{
      background-image: url("assets/img/ico/slider-arrow-left--red.svg");
    }
    .pagination-prev:hover:after{
      opacity: 1;
    }
    .pagination-next:after{
      background-image: url("assets/img/ico/slider-arrow-right--red.svg");
    }
    .pagination-next:hover:after{
      opacity: 1;
    }

    li.disabled .pagination-prev,
    li.disabled .pagination-next{

      &:before{
        opacity: .2;
      }

      &:hover{
        &:before {
          opacity: 0.2;
        }

        &:after{
          opacity: 0;
        }
      }
    }

    .pagination-link{
      font-size: 16px;
      line-height: 19px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: 0.01em;
      text-transform: uppercase;
      color: #525252;
      background: #F0F0F0;
      border-radius: 6px;
      transition: .3s;
      height: 56px;
      width: 56px;
      justify-content: center;

      &:hover{
        color: white;
        background: #EFBBB1;
      }
    }

    li.active .pagination-link{
      background: #D23D20;
      color: white;
    }

    .pagination-dots .pagination-link{
      width: auto;
      background: transparent;
      padding-top: 10px;
    }
  }

  /*pagination end*/


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
