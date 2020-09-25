<template>
  <div class="page-wrap" :class="language">

    <Header/>

    <main class="main">
      <router-view></router-view>
    </main>

    <Footer/>

  </div>
</template>

<script>
  import Header from './layout/Header.vue'
  import Footer from './layout/Footer.vue'
  import { mapState } from 'vuex';

  export default {
    name: "Layout",
    components: {
      Header,
      Footer
    },

    data: function () {
      return {
        language: '',
      }
    },

    computed: mapState(['lang']),

    watch: {
      lang(newValue) {
        this.language = this.langClass(newValue);
      },
    },

    mounted() {
      this.language = this.langClass(this.$store.getters.getLang);
    },

    methods: {
      langClass(lang) {
        if (lang === 'he') {
          return 'rtl'
        } else {
          return 'ltr'
        }
      },

    }
  }
</script>

<style lang="scss">
  .page-wrap{
    background-image: url("../assets/img/line-bg.png");
    background-position: center;
    background-repeat: repeat-x;
  }

  .site-container{
    max-width: 1430px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
  }

  .site-title{
    font-weight: bold;
    font-size: 46px;
    line-height: 70px;
    text-align: center;
    color: #141414;
  }

</style>
