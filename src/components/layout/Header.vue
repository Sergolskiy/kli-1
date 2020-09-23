<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__content">
        <div class="header__logo">
          <router-link to="/">
            <Kli1Logo />
          </router-link>
        </div>
        <div class="header__nav">
          <div class="header__nav-item">
            <a href="#" class="header__nav-link">Workers</a>
          </div>
          <div class="header__nav-item">
            <a href="#" class="header__nav-link">Projects</a>
          </div>
          <div class="header__nav-item">
            <a href="#" class="header__nav-btn ui-btn ui-btn-primary">Publish project</a>
            <div class="header__nav-dropdown">
              <div class="header__nav-dropdown-content">
                <div class="header__nav-dropdown-column">
                  <a href="#" class="header__nav-dropdown-title">
                    Category 1
                  </a>
                  <div class="header__nav-dropdown-list">
                    <a href="#" class="header__nav-dropdown-link">
                      Subcategory name
                    </a>
                    <a href="#" class="header__nav-dropdown-link">
                      Subcategory
                    </a>
                    <a href="#" class="header__nav-dropdown-link">
                      Select Subcategory
                    </a>
                    <a href="#" class="header__nav-dropdown-link">
                      Subcategory name
                    </a>
                    <a href="#" class="header__nav-dropdown-link">
                      Subcategory
                    </a>
                  </div>
                </div>
                <div class="header__nav-dropdown-column">
                  <a href="#" class="header__nav-dropdown-title">
                    Category 2
                  </a>
                  <div class="header__nav-dropdown-list">
                    <a href="#" class="header__nav-dropdown-link">
                      Subcategory name
                    </a>
                    <a href="#" class="header__nav-dropdown-link">
                      Subcategory
                    </a>
                  </div>
                </div>
              </div>
              <div class="header__nav-dropdown-all">
                <a href="#" class="header__nav-dropdown-all-i">
                  See all categories
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="header__search">
          <form action="#">
            <div class="ui-search">
              <div class="ui-search-body">
                <input type="text" class="ui-search-input">
                <div class="ui-search-select">
                  <input type="text" value="All categories">
                  <div class="ui-search-select-dropdown">
                    <div class="ui-search-select-option" data-value="Name of category">
                      Name of category
                    </div>
                  </div>
                  <div class="ui-search-select-dropdown">
                    <div class="ui-search-select-option" data-value="Name of category">
                      Name of category
                    </div>
                  </div>
                  <div class="ui-search-select-dropdown">
                    <div class="ui-search-select-option" data-value="Name of category">
                      Name of category
                    </div>
                  </div>
                </div>
                <button class="ui-search-btn">
                  <img src="#" alt="search ico">
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="header__profile">
          <a href="#" class="header__profile-link">
            <span class="header__profile-count">9+</span>
            My profile
            <span class="header__profile-ico">
             <ProfileIco/>
            </span>
          </a>
        </div>
        <div class="header__cart">
          <a href="#" class="header__cart-link">
            <span class="header__cart-count">9+</span>
            Cart
            <span class="header__cart-ico">
              <CartLogo/>
            </span>
          </a>
        </div>
        <div class="header__lang">
          <a href="#" class="header__basket-link">
            <span class="header__lang-flag">flag</span>
            Ukraine / EN

            <select name="" id="" @change="changeLanguage($event)">
              <option value="en">
                en
              </option>
              <option value="he">
                he
              </option>
            </select>
          </a>
        </div>
      </div>
    </div>

    <!--<p>{{ $t("message.hello") }}</p>-->
    <router-link to="/catalog">Catalog</router-link>

    <div>

    </div>
  </header>
</template>

<script>
  import Kli1Logo from '@/assets/img/kli1-logo.svg';
  import CartLogo from '@/assets/img/ico/cart-ico.svg';
  import ProfileIco from '@/assets/img/ico/profile-ico.svg';

  export default {
    name: "Header",
    components: {
      Kli1Logo,
      CartLogo,
      ProfileIco
    },

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
