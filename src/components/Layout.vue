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
        homePage: false,
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
      }
    }
  }
</script>

<style lang="scss">
  .site-container{
    max-width: 1430px;
    width: 100%;
    padding: 0 15px;
  }
</style>
