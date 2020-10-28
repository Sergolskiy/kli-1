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
        <div class="customer-rates__aside-wrap double-content__aside">

          <RatesAside :customerProjects="customerProjects"/>

        </div>
        <div class="customer-rates__body-wrap double-content__body">
          <div class="customer-rates__body">
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
              <div class="customer-rates__filter">
                <div class="customer-rates__filter-i">
                  <multiselect
                      v-model="customerRatesPage.priceFilter.value.name"
                      :options="customerRatesPage.priceFilter.options"
                      track-by="name"
                      label="name"
                      :show-labels="true"
                      :select-label="``"
                      :deselect-label="``"
                      :selectedLabel="``"
                      :searchable="false"
                      :placeholder="`Sort offers by price`"
                      :taggable="false"
                      :close-on-select="true"
                      :clear-on-select="false"
                  />
                </div>
                <div class="customer-rates__filter-i">
                  <multiselect
                      v-model="customerRatesPage.otherFilter.value.name"
                      :options="customerRatesPage.otherFilter.options"
                      track-by="name"
                      label="name"
                      :show-labels="true"
                      :select-label="``"
                      :deselect-label="``"
                      :selectedLabel="``"
                      :searchable="false"
                      :placeholder="`Some other filter`"
                      :taggable="false"
                      :close-on-select="true"
                      :clear-on-select="false"
                  />
                </div>
              </div>

              <div class="customer-rates__offers">
                <div class="customer-rates__offers-item"
                     v-for="(item, index) in offers"
                     :key="item[index]"
                >
                  <div class="customer-rates__offers-img">
                    <img
                          v-bind:src="$store.getters.getUrl + item.img"
                          alt="ico"
                    >
                    <div class="customer-rates__offers-premium" v-if="item.premium">
                      Premium
                    </div>
                  </div>
                  <div class="customer-rates__offers-info">
                    <div class="customer-rates__offers-head">
                      <div class="customer-rates__offers-name">
                        {{ item.name }}
                      </div>
                      <div class="customer-rates__offers-time">
                        <span>{{ item.time }}</span>
                        <span>{{ item.date }}</span>
                      </div>
                      <div class="customer-rates__offers-price customer-rates__offers-price--mobile"
                          :class="{ 'red' : item.priceRed}"
                      >
                        <span>{{ item.price }}</span>
                        / {{ item.weeks }}
                      </div>
                    </div>
                    <div class="customer-rates__offers-txt">
                      {{ item.txt }}
                    </div>
                  </div>
                  <div class="customer-rates__offers-right">
                    <div class="customer-rates__offers-price"
                         :class="{ 'red' : item.priceRed}"
                    >
                      <span>{{ item.price }}</span>
                      / {{ item.weeks }}
                    </div>
                    <div class="customer-rates__offers-btn">
                      <Btn
                        class="customer-rates__offers-btn-i"
                        :btnStyle="`transparent`"
                        :btnName="`Choose offer`"
                        @click.native="showModalPayment(item.id)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="customer-rates__tab-content"
                 v-if="tabIndex == 2"
            >
              <div class="customer-rates__offers">
                <div class="customer-rates__offers-item customer-rates__offers-item--comment"
                    v-for="(item, index) in comments"
                    :key="item[index]"
                    :class="{ 'customer-rates__offers-item--inactive' : item.active == false}"
                >
                  <div class="customer-rates__offers-img">
                    <img
                        v-bind:src="$store.getters.getUrl + item.img"
                        alt="ico"
                    >
                    <div class="customer-rates__offers-premium" v-if="item.premium">
                      Premium
                    </div>
                  </div>
                  <div class="customer-rates__offers-info">
                    <div class="customer-rates__offers-head">
                      <div class="customer-rates__offers-name">
                        {{ item.name }}
                      </div>
                      <div class="customer-rates__offers-time">
                        <span>{{ item.time }}</span>
                        <span>{{ item.date }}</span>
                      </div>
                    </div>
                    <div class="customer-rates__offers-txt">
                      {{ item.txt }}
                    </div>
                  </div>
                  <div class="customer-rates__offers-count">
                    <div class="customer-rates__offers-count-i"
                         :class="{ 'active' : item.active}"
                    >
                      {{ item.count }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <Payment v-if="isModalPayment" @close="closePaymentModal" @success="successPayment"/>

    <ThankYou v-if="isModalThankYou" @close="closeThankYouModal"/>

  </div>
</template>

<script>
  import Breadcrumb from "../../layout/Breadcrumb";
  import Multiselect from 'vue-multiselect';
  import Btn from "../../UI/Btn";
  import Payment from '../../Popups/Payment.vue'
  import ThankYou from '../../Popups/ThankYou.vue'
  import RatesAside from './RatesAside'

  export default {
    name: "CustomerRates",

    components: {
      Multiselect,
      Breadcrumb,
      Payment,
      ThankYou,
      RatesAside,
      Btn
    },

    data(){
      return {
        tabIndex: 1,

        breadcrumbs: [
          { path: 'projects', name: 'Projects'},
          { path: '', name: 'Printing business cards'},
        ],

        isModalPayment: false,

        isModalThankYou: false,

        customerRatesPage:{
          head: {
            title: 'Printing business cards',
          },

          priceFilter: {
            value: {
              name: ''
            },
            options: [
              {name: '1'},
              {name: '2'},
              {name: '3'}
            ]
          },
          otherFilter: {
            value: {
              name: ''
            },
            options: [
              {name: '1'},
              {name: '2'},
              {name: '3'}
            ]
          },

          showFilter: '',
        },

        customerProjects: {
          customerIco: '/image/ico/user-ico.svg',
          customerName: 'NickCustomer',
          typeProjects: 'Polygraphy',
          projects: [
            {
              id: 1,
              link: '/sdfsd',
              img: '/image/projects/projects-img01.jpg',
              name: 'Printing business cards',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
              properties: [
                {item: '350 g/m', itemSup: '2'},
              ]
            },
            {
              id: 2,
              link: '/fsdfsd',
              img: '/image/projects/projects-img02.jpg',
              name: 'Printing business cards',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
              properties: [
                {item: '350 g/m', itemSup: '2'},
              ]
            },
          ]
        },

        offers: [
          {
            id: 1,
            premium: true,
            img: '/image/customer-rates-ico.jpg',
            name: 'David_33',
            time: '10:12',
            date: '02.03.2020',
            txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
            price: '$75',
            priceRed: true,
            weeks: '2 weeks'
          },
          {
            id: 2,
            premium: false,
            img: '/image/customer-rates-ico.jpg',
            name: 'David_33',
            time: '10:12',
            date: '02.03.2020',
            txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            price: '$100',
            priceRed: false,
            weeks: '3 weeks'
          },
        ],

        comments: [
          {
            active: true,
            premium: true,
            img: '/image/customer-rates-ico.jpg',
            name: 'David_33',
            time: '10:12',
            date: '02.03.2020',
            txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            count: '2'
          },
          {
            active: false,
            premium: false,
            img: '/image/customer-rates-ico.jpg',
            name: 'David_33',
            time: '10:12',
            date: '02.03.2020',
            txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            count: '3'
          }
        ],
      }
    },

    methods: {
      changeTabHendler(event){
        this.tabIndex = event.target.attributes['data-tab-index'].value;
      },


      showModalPayment() {
        this.isModalPayment = true;
      },

      closePaymentModal() {
        this.isModalPayment = false;
      },

      showModalThankYou() {
        this.isModalThankYou = true;
      },

      closeThankYouModal() {
        this.isModalThankYou = false;
      },

      successPayment() {
        this.closePaymentModal();
        this.showModalThankYou();
      },

    }
  }
</script>

<style lang="scss">
  @import '../../../scss/customer-rates';
</style>
