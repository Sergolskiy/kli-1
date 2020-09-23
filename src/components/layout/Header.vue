<template>
  <header class="header">
    <p>{{ $t("message.hello") }}</p>
    <router-link to="/">no home</router-link>
    <router-link to="/home">Перейти к Foo</router-link>

    <div>
      <select name="" id="" @change="changeLanguage($event)">
        <option value="en">
          en
        </option>
        <option value="he">
          he
        </option>
      </select>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",

    data: function () {
      return {
        lang: '',
      }
    },

    mounted() {
      this.lang = this.langClass(this.$store.getters.getLang);
    },

    methods: {
      changeLanguage(event) {
        this._i18n.locale = event.target.value;
        this.$store.commit('setLang', event.target.value);
        this.lang = this.langClass(event.target.value);
      },

      langClass (lang) {
        if (lang === 'he') {
          return 'rtl'
        } else {
          return 'ltr'
        }
      }
    }

  }

</script>

<style scoped>

</style>
