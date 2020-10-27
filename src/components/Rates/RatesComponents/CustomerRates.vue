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
                      :close-on-select="false"
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
                      :close-on-select="false"
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

  </div>
</template>

<script>
  import Breadcrumb from "../../layout/Breadcrumb";
  import Multiselect from 'vue-multiselect';
  import Btn from "../../UI/Btn";

  export default {
    name: "CustomerRates",

    components: {
      Multiselect,
      Breadcrumb,
      Btn
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


        offers: [
          {
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
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../scss/customer-rates';
</style>
