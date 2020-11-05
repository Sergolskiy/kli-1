<template>
  <div class="catalog-page">
    <div class="catalog-top">
      <div class="catalog-top__inner site-container">
        <div class="catalog-top__title site-title site-title--min">
          <div class="site-title__ico">
            <img v-bind:src="$store.getters.getUrl + catalogPage.head.ico" alt="ico">
          </div>
          {{ catalogPage.head.title }}
        </div>
        <Breadcrumb
          :breadcrumbs="breadcrumbs"
        />
      </div>
    </div>

    <div class="catalog-tab" v-if="catalogPage.tabs.length > 0">
      <div class="catalog-tab__inner site-container">
        <div class="catalog-tab__slider" dir="ltr">
          <agile :dots="false"
                 :infinite="true"
                 :options="catalogTabOption"
          >
            <div class="catalog-tab__slide"
                 v-for="(item, index) in catalogPage.tabs"
                 :key="item[index]"
            >
              <div class="catalog-tab__slide-link">
                {{ item.name }}
              </div>

            </div>
            <template slot="prevButton">
              <SliderBtnPrev/>
            </template>
            <template slot="nextButton">
              <SliderBtnNext/>
            </template>
          </agile>
        </div>
      </div>
    </div>


    <div class="catalog-content">
      <div class="catalog-content__inner site-container">
        <div class="catalog-content__list">
          <div class="catalog-content__item"
               v-for="(item, index) in catalogPage.items"
               :key="item[index]"
          >
            <div class="catalog-content__item-body">
              <div class="catalog-content__item-img">
                <img v-bind:src="$store.getters.getUrl + item.img" alt="ico">
              </div>
              <div class="catalog-content__item-info">
                <div class="catalog-content__item-name">
                  {{item.title}}
                </div>
                <div class="catalog-content__item-desc">
                  {{item.description}}
                </div>
              </div>
              <div class="catalog-content__item-btn">
                <Btn class="catalog-content__item-btn-i"
                     :btnName="`Choose`"
                     :btnStyle="`transparent`"
                     :to="item.path"
                     v-on:click.native="toggleModalPrintingCards"
                />
              </div>
            </div>
          </div>
          <div class="catalog-content__item catalog-content__item--more">
            <div class="catalog-content__item-body catalog-content__item-more">
              <div class="catalog-content__item-more-ico">
                <LoadMoreIco/>
              </div>
              <div class="catalog-content__item-more-txt">
                Load more
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="catalog-pagination">
      <div class="catalog-pagination__inner site-container">
        <paginate
            :page-count="12"
            :page-range="paginationRangePage"
            :click-handler="paginationHendler"
            :container-class="'pagination-container'"
            :page-link-class="'pagination-link'"
            :prev-link-class="'pagination-prev'"
            :next-link-class="'pagination-next'"
            :break-view-class="'pagination-dots'"
            :prev-text="''"
            :next-text="''"
        >
          <span slot="breakViewContent">
            <svg width="21" height="4" viewBox="0 0 21 4">
              <path d="M0.88 4C0.666667 4 0.485334 3.936 0.336 3.808C0.208 3.65867 0.144 3.47733 0.144 3.264V0.96C0.144 0.746667 0.208 0.576 0.336 0.448C0.485334 0.298666 0.666667 0.224 0.88 0.224H3.184C3.39733 0.224 3.57867 0.298666 3.728 0.448C3.87733 0.576 3.952 0.746667 3.952 0.96V3.264C3.952 3.47733 3.87733 3.65867 3.728 3.808C3.57867 3.936 3.39733 4 3.184 4H0.88ZM9.2625 4C9.04917 4 8.86783 3.936 8.7185 3.808C8.5905 3.65867 8.5265 3.47733 8.5265 3.264V0.96C8.5265 0.746667 8.5905 0.576 8.7185 0.448C8.86783 0.298666 9.04917 0.224 9.2625 0.224H11.5665C11.7798 0.224 11.9612 0.298666 12.1105 0.448C12.2598 0.576 12.3345 0.746667 12.3345 0.96V3.264C12.3345 3.47733 12.2598 3.65867 12.1105 3.808C11.9612 3.936 11.7798 4 11.5665 4H9.2625ZM17.645 4C17.4317 4 17.2503 3.936 17.101 3.808C16.973 3.65867 16.909 3.47733 16.909 3.264V0.96C16.909 0.746667 16.973 0.576 17.101 0.448C17.2503 0.298666 17.4317 0.224 17.645 0.224H19.949C20.1623 0.224 20.3437 0.298666 20.493 0.448C20.6423 0.576 20.717 0.746667 20.717 0.96V3.264C20.717 3.47733 20.6423 3.65867 20.493 3.808C20.3437 3.936 20.1623 4 19.949 4H17.645Z" fill="#9AA2B0"/>
            </svg>
          </span>
        </paginate>
      </div>
    </div>

    <PrintingCards v-if="isModalPrintingCards" @close="toggleModalPrintingCards"/>

  </div>
</template>

<script>
  import {VueAgile} from 'vue-agile';
  import Paginate from 'vuejs-paginate'

  import SliderBtnPrev from '../assets/img/ico/slider-arrow-left.svg?inline'
  import SliderBtnNext from '../assets/img/ico/slider-arrow-right.svg?inline'
  import LoadMoreIco from '../assets/img/ico/svg/load-more.svg?inline'

  import Btn from "./UI/Btn";
  import Breadcrumb from "./layout/Breadcrumb";

  import PrintingCards from './Popups/PrintingCards.vue'

  export default {
    name: "Catalog",
    components: {
      Btn,
      agile: VueAgile,
      Paginate,
      SliderBtnPrev,
      SliderBtnNext,
      LoadMoreIco,
      Breadcrumb,
      PrintingCards
    },

    data(){
      return {
        breadcrumbs: [
          { path: 'categories', name: 'Categories'},
          { path: '', name: 'Polygraphy '},
        ],

        catalogPage: {
          head: {
            title: 'Polygraphy',
            ico: 'image/catalog/polygraphy-ico.svg'
          },

          tabs: [
            { name: 'Business cards', link: '' },
            { name: 'Flyer', link: '' },
            { name: 'Posters', link: '' },
            { name: 'Booklets', link: '' },
            { name: 'Catalogs', link: '' },
          ],

          items: [
            {
              img: 'image/catalog/items/catalog-item01.jpg',
              title: 'Business card design',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
              path: ''
            },
            {
              img: 'image/catalog/items/catalog-item01.jpg',
              title: 'Business card design',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
              path: ''
            },
            {
              img: 'image/catalog/items/catalog-item01.jpg',
              title: 'Business card design',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
              path: ''
            },
            {
              img: 'image/catalog/items/catalog-item01.jpg',
              title: 'Business card design',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
              path: ''
            },
            {
              img: 'image/catalog/items/catalog-item01.jpg',
              title: 'Business card design',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
              path: ''
            },
          ]
        },

        catalogTabOption: {
          slidesToShow: 2,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 3,
              }
            },
          ]
        },


        isModalPrintingCards: false,

        paginationRangePage: 0
      }
    },

    methods:{
      paginationHendler(){
        console.log(123);
      },

      toggleModalPrintingCards() {
        this.isModalPrintingCards = !this.isModalPrintingCards
      }
    },

    mounted() {
      if( window.screen.width < 700){
        this.paginationRangePage = 2
      } else {
        this.paginationRangePage = 5;
      }
    }
  }
</script>

<style lang="scss">
  .catalog-page{
    padding-top: 50px;
    padding-bottom: 100px;
  }

  .catalog-tab{
    margin-top: 30px;
    margin-bottom: 50px;

    &__inner{

    }

    &__slider{
      padding-left: 50px;
      padding-right: 50px;
      position: relative;
    }

    &__slide{
      padding: 0 12px;
    }

    &__slide-link{
      height: 80px;
      background: #F0F0F0;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      color: #525252;
      transition: .3s;

      &:hover{
        color: #FFFFFF;
        background: #D23D20;
        box-shadow: 0px 5px 20px rgba(210, 61, 32, 0.3);
      }
    }

    button.agile__nav-button {
      border: none;
      background-color: transparent;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;

      svg path {
        transition: .3s;
      }

      &:hover {
        svg path {
          fill: #D23D20;
        }
      }
    }

    button.agile__nav-button--prev {
      left: -50px;
    }

    button.agile__nav-button--next {
      right: -50px;
    }

  }


  .catalog-content{
    &__inner{

    }

    &__list{
      display: flex;
      flex-wrap: wrap;
      margin: 0 -15px;
    }

    &__item{
      width: 25%;
      padding: 0 15px;
      margin-bottom: 50px;
    }

    &__item-body{
      display: flex;
      height: 100%;
      flex-direction: column;
    }

    &__item-img{
      width: 100%;
      height: 220px;
      display: flex;
      justify-content: center;
      align-items: center;

      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 6px;
        overflow: hidden;
      }
    }

    &__item-info{
      padding: 20px 15px;
      display: flex;
      flex-direction: column;
    }

    &__item-name{
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #141414;
      margin-bottom: 10px;
    }

    &__item-desc{
      font-size: 16px;
      line-height: 24px;
      color: #525252;
    }

    &__item-btn{
      margin-top: auto;
      padding-left: 15px;
      padding-right: 15px;
    }

    &__item-btn-i{
      max-width: 200px;
      width: 100%;
      padding: 0 10px;
      justify-content: center;
    }


    &__item-more{
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
      min-height: 220px;
      background: #ffffff;
      border: 1px solid #F0F0F0;
      border-radius: 6px;
      cursor: pointer;
    }

    &__item-more-ico{
      margin-bottom: 19px;
      width: 85px;
      height: 85px;
      display: flex;
      justify-content: center;
      align-items: center;

      svg{
        transition: 1s;
      }
    }
    &__item-more:hover &__item-more-ico svg{
      transform: rotate(180deg);
    }


    &__item-more-txt{
      font-size: 20px;
      line-height: 24px;
      font-weight: 500;
      display: flex;
      align-items: center;
      text-align: center;
      color: #141414;
    }


  }

  .catalog-pagination{
    display: flex;
    justify-content: center;
  }

  @media (max-width: 992px){
    .catalog-content__item{
      width: 33.333%;
    }

    .catalog-content__list{
      margin: 0 -10px;
    }

    .catalog-content__item{
      padding: 0 10px;
    }

    .catalog-content__item-img{
      height: 175px;
    }

    .catalog-content__item-info{
      padding-left: 0;
      padding-right: 0;
    }

    .catalog-tab__slide-link{
      height: 60px;
    }
  }


  @media (max-width: 700px){
    .catalog-content__item{
      width: 100%;
    }

    .catalog-content__item-img{
      height: 220px;
    }

    .catalog-content__item-info{
      padding-left: 15px;
      padding-right: 15px;
    }

    .catalog-content__item-btn-i{
      max-width: 100%;
    }

    .catalog-tab__slider{
      padding-left: 30px;
      padding-right: 30px;
    }

    button.agile__nav-button--prev {
      left: -30px!important;
    }

    button.agile__nav-button--next {
      right: -30px!important;
    }

    .catalog-tab__slide {
      padding: 0 5px;
    }

    .catalog-tab__slide-link{
      font-size: 14px;
      line-height: 18px;
    }

    .catalog-content__item-more{
      border: 0;
      min-height: 170px;
    }


  }


  @media ( max-width: 360px){
    .pagination-container .pagination-prev,
    .pagination-container .pagination-next{
      display: none;
    }

  }




</style>
