
<template>
  <div class="customer-rates-page customer-rates-freelance-page">
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
        <div class="customer-rates__aside-wrap double-content__aside">
          <div class="customer-rates__aside">

            <div class="customer-rates__aside-head">
              <div class="customer-rates__aside-user">
                <img v-bind:src="$store.getters.getUrl + '/image/ico/user-ico.svg'"
                     alt="ico"
                     class="customer-rates__aside-user-ico"
                >
                NickCustomer
              </div>
              <div class="customer-rates__aside-category">
                <img v-bind:src="$store.getters.getUrl + '/image/catalog/polygraphy-ico.svg'"
                     alt="ico"
                     class="customer-rates__aside-category-ico"
                >
                Polygraphy
              </div>
            </div>
            <div class="customer-rates__aside-list">
              <div class="customer-rates__aside-item">
                <div class="customer-rates__aside-img">
                  <img v-bind:src="$store.getters.getUrl + '/image/projects/projects-img01.jpg'"
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
            <div class="customer-rates__aside-full-project">
              <Btn
                  class="customer-rates__aside-full-project-i"
                  :btnName="`View full project`"
              />
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
              <div class="customer-rates__col customer-rates__col--counter">
                <div class="ui-input ui-input__counter" v-bind:class="{'ui-no-valid': validation.priceCounter}">
                  <div class="ui-label-title">
                    <label for="customerRatesFree01">
                      Price
                    </label>
                  </div>
                  <div class="ui-input__counter-input" >
                    <span class="ui-input__counter-plus"
                        @click="counterPlus"
                    >
                       <span class="ui-input__counter-ico"></span>
                    </span>
                    <input type="text" placeholder="Price" id="customerRatesFree01"
                           v-model="priceCounter"
                           @blur="changePrice"
                    >
                    <span class="ui-input__counter-minus"
                        @click="counterMinus"
                    >
                      <span class="ui-input__counter-ico"></span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="customer-rates__col customer-rates__col--counter">
                <div class="ui-input ui-input__counter">
                  <div class="ui-label-title">
                    <label for="customerRatesFree02">
                      Deadlines
                    </label>
                  </div>
                  <div class="ui-input__counter-input">
                    <span class="ui-input__counter-plus">
                      <span class="ui-input__counter-ico"></span>
                    </span>
                    <input type="text" placeholder="Deadlines" id="customerRatesFree02">
                    <span class="ui-input__counter-minus">
                      <span class="ui-input__counter-ico"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="customer-rates__row">
              <div class="customer-rates__col">
                <div class="ui-label-title">
                  Offer text
                </div>
                <div class="ui-textarea">
                  <textarea type="text" placeholder="Briefly describe your offer"
                            id="textareaId01">
                  </textarea>
                </div>
              </div>
            </div>

            <div class="customer-rates__bottom-btn">
              <Btn class="customer-rates__bottom-btn-i" @click.native="sendOffer"
                   :btnName="`Send offer`"
              />
              <Btn class="customer-rates__bottom-btn-i" @click.native="deleteOffer" :btnDisabled="true"
                 :btnName="`Delete offer`"
              />
            </div>
          </div>

          <div class="customer-rates__tab-content"
               v-if="tabIndex == 2"
          >
            2
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Breadcrumb from "../../layout/Breadcrumb";
  import Btn from "../../UI/Btn";
  import {validation} from "../../../services/validation";

  export default {
    name: "FreelancerRates",

    components: {
      Breadcrumb,
      Btn,
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
        },

        validation: {
          priceCounter: false,
        },

        priceCounter: ''
      }
    },

    methods: {
      changeTabHendler(event){
        this.tabIndex = event.target.attributes['data-tab-index'].value;
      },

      sendOffer(){
        console.log('send')
      },

      deleteOffer(){
        console.log('delete')
      },

      counterPlus(){
        if (this.priceCounter === '') this.priceCounter = 0
        this.priceCounter = parseFloat(this.priceCounter) + 1;
      },

      counterMinus(){
        if (this.priceCounter === 0 || this.priceCounter === '') {this.priceCounter = 0}
        else {this.priceCounter = parseFloat(this.priceCounter) - 1;}
      },

      changePrice(){

        let validationItems = {
          priceCounter: this.priceCounter,
        }

        let validationOptions = {
          priceCounter: {
            type: [
              'empty',
              'numeric',
            ]
          },
        }
        let validate = validation(validationItems, validationOptions);
        this.validation = validate.validation;

        if(!validate.isValidate){
          return
        }
      }

    }
  }
</script>

<style lang="scss">
  @import '../../../scss/customer-rates';

</style>
