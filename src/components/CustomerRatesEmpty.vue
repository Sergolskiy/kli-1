
<template>
  <div class="customer-rates-page">
    <div class="customer-rates-top">
      <div class="customer-rates-top__inner site-container">
        <div class="customer-rates-top__title site-title site-title--min">
          {{ customerRatesPage.head.title }}
        </div>
        <Breadcrumb
            :breadcrumbs="breadcrumbs"
        />
      </div>
    </div>

    <div class="customer-rates-content double-content site-container">
      <div class="customer-rates-content__inner double-content__inner">
        <div class="customer-rates__aside double-content__aside">
          <div class="customer-rates__aside-head">
            <div class="customer-rates__aside-user">
              <img v-bind:src="$store.getters.getUrl + 'image/ico/user-ico.svg'"
                   alt="ico"
                   class="customer-rates__aside-user-ico"
              >
              NickCustomer
            </div>
            <div class="customer-rates__aside-category">
              <img v-bind:src="$store.getters.getUrl + 'image/catalog/polygraphy-ico.svg'"
                   alt="ico"
                   class="customer-rates__aside-category-ico"
              >
              Polygraphy
            </div>
          </div>
          <div class="customer-rates__aside-list">
            <div class="customer-rates__aside-item">
              <div class="customer-rates__aside-img">
                <img v-bind:src="$store.getters.getUrl + 'image/projects/projects-img01.jpg'"
                     alt="ico"
                >
              </div>
              <div class="customer-rates__aside-info">
                <div class="customer-rates__aside-title">
                  Printing business cards
                </div>
                <div class="customer-rates__aside-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </div>
                <div class="customer-rates__aside-properties">
                  <div class="customer-rates__aside-property">
                    350 g/m<sup>2</sup>
                  </div>
                </div>
                <div class="customer-rates__aside-more">
                  + more info...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="customer-rates__body double-content__body">
          <div class="customer-rates__tab site-tab">
            <div class="customer-rates__tab-i site-tab__i"
                 :class="{active : tabIndex == 1}"
                 data-tab-index="1"
                 v-on:click="changeTabHendler"
            >
              Offers
            </div>
            <div class="customer-rates__tab-i site-tab__i"
                 :class="{active : tabIndex == 2}"
                 data-tab-index="2"
                 v-on:click="changeTabHendler"
            >
              Comments
            </div>
          </div>

          <div class="customer-rates__tab-content"
               v-if="tabIndex == 1"
          >
            <div class="customer-rates__row">
              <div class="customer-rates__col">
                <div class="customer-rates__input">
                  <label for="" class="customer-rates__label">
                    
                  </label>
                  <input type="text">
                </div>
              </div>
            </div>
          </div>

          <div class="customer-rates__tab-content"
               v-if="tabIndex == 2"
          >
            Empty
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Breadcrumb from "./layout/Breadcrumb";
  // import Btn from "./UI/Btn";

  export default {
    name: "CustomerRatesEmpty",

    components: {
      Breadcrumb,
      // Btn
    },

    data(){
      return {
        tabIndex: 1,

        breadcrumbs: [
          { path: '/', name: 'Home'},
          { path: 'projects', name: 'Projects'},
          { path: '', name: 'Printing business cards'},
        ],

        customerRatesPage:{
          head: {
            title: 'Printing business cards',
          },

          showFilter: '',
        }
      }
    },

    methods: {
      changeTabHendler(event){
        this.tabIndex = event.target.attributes['data-tab-index'].value;
      }
    }
  }
</script>

<style lang="scss">
  .customer-rates-page{
    padding-top: 50px;
    padding-bottom: 120px;
  }

  .customer-rates-top{

    &__inner{

    }

    &__title{

    }

  }

  .customer-rates-content{

    &__inner{
      margin-top: 45px;
    }
  }

  .customer-rates{

    &__aside{
      padding: 40px;
      max-width: 566px;
      width: 100%;
      background: #FFFFFF;
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
      border-radius: 6px;
    }

    &__aside-head{
      display: flex;
      margin-bottom: 40px;
    }

    &__aside-user{
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      color: #141414;
      display: flex;
      align-items: center;
      margin-right: 30px;
    }

    &__aside-user-ico{
      width: 32px;
      height: 32px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
    }

    &__aside-category{
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      color: #141414;
      display: flex;
      align-items: center;
    }

    &__aside-category-ico{
      width: 32px;
      height: 32px;
      margin-right: 10px;
    }

    &__aside-list{

    }

    &__aside-item{
      display: flex;
      margin-bottom: 30px;
    }

    &__aside-img{
      height: 80px;
      width: 120px;

      img{
        border-radius: 6px;
        overflow: hidden;
        object-fit: cover;
        object-position: center;
      }
    }

    &__aside-info{
      display: flex;
      flex-direction: column;
      padding-left: 20px;
    }

    &__aside-title{
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      display: flex;
      align-items: center;
      color: #141414;
      margin-bottom: 8px;
    }

    &__aside-description{
      font-size: 16px;
      line-height: 24px;
      color: #525252;
      margin-bottom: 15px;
    }

    &__aside-properties{
      display: flex;
      flex-wrap: wrap;
    }

    &__aside-property{
      margin-right: 10px;
      font-size: 14px;
      line-height: 24px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #525252;
      min-height: 36px;
      padding: 0 15px;
      background: #F0F0F0;
      border-radius: 6px;
      margin-bottom: 10px;

      &:last-child{
        margin-right: 0;
      }
    }

    &__aside-more{
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: #525252;
    }

    &__body{
      display: flex;
      flex-direction: column;
      max-width: 764px;
      width: 100%;
    }

    &__tab{
      position: relative;
      width: 100%;
      margin-bottom: 40px;

      &:before{
        content: '';
        height: 1px;
        width: 100%;
        background: #F0F0F0;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }

    &__tab-i{
      min-width: 226px;
      font-weight: 500;
    }

    &__tab-content{

    }

    &__filter{
      display: flex;
      margin: 0 -15px;
      margin-bottom: 35px;

      .multiselect .multiselect__tags{
        min-height: 56px;
        display: flex;
        align-items: center;
      }
    }

    &__filter-i{
      padding: 0 15px;
      width: 100%;
    }

    &__offers{

    }

    &__offers-item{
      display: flex;
      padding-bottom: 30px;
      margin-bottom: 30px;
      border-bottom: 1px solid #F0F0F0;
      position: relative;

      &--comment .customer-rates__offers-info{
        max-width: 615px;
      }
    }

    &__offers-img{
      max-width: 60px;
      width: 100%;
      height: 60px;
      position: relative;

      img{
        border-radius: 50%;
        overflow: hidden;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__offers-premium{
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      padding: 4px 12px;
      background: #D23D20;
      border-radius: 6px;
      font-size: 9px;
      line-height: 11px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #FFFFFF;
    }

    &__offers-info{
      padding-left: 30px;
      padding-right: 30px;
      max-width: 500px;
    }

    &__offers-head{
      display: flex;
    }

    &__offers-name{
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      color: #141414;
      margin-right: 15px;
    }

    &__offers-time {
      display: flex;
      margin: 0 -11px;

      span{
        font-size: 14px;
        line-height: 26px;
        letter-spacing: 0.1em;
        color: #A4A4A4;
        padding: 0 11px;
      }
    }

    &__offers-txt{
      font-size: 16px;
      line-height: 24px;
      color: #525252;
    }

    &__offers-right{
      display: flex;
      flex-direction: column;
      max-width: 170px;
      width: 100%;
      margin-left: auto;
    }

    &__offers-price{
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #141414;
      margin-bottom: 12px;

      &.red{
        color: #D23D20;
      }

      span{
        font-weight: 500;
        font-size: 32px;
        line-height: 38px;
      }
    }

    &__offers-btn{

    }

    &__offers-btn-i{
      width: 100%;
      padding: 0 10px;
      display: flex;
      justify-content: center;
    }

    &__offers-count{
      position: absolute;
      right: 0;
      top: 0;
      width: 36px;
      height: 36px;
    }

    &__offers-count-i{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 0;
      border-radius: 50%;
      color: #525252;
      background: #F0F0F0;

      &.active{
        color: #ffffff;
        background: #D23D20;
      }
    }

  }



</style>