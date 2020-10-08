<template>
  <div class="projects-page">
    <div class="projects-top">
      <div class="projects-top__inner site-container">
        <div class="projects-top__title site-title site-title--min">
          {{ projectsPage.head.title }}
        </div>
        <Breadcrumb
            :breadcrumbs="breadcrumbs"
        />
      </div>

      <div class="projects-top__filter-btn">
        <Btn class="projects-top__filter-btn-i"
             :btnName="`Filters`"
             @click.native="showFilterHandle"
        />
      </div>
    </div>

    <div class="projects-content double-content site-container">
      <div class="projects-content__inner double-content__inner">
        <div class="projects-content__aside double-content__aside">
          <div class="filters"
               :class="{ show : projectFilters.showFilter === true }"
          >
            <div class="filters__inner">
              <form action="#" class="filters__form">
                <div class="filters__title">
                  Filters
                </div>
                <div class="filters__content">
                  <div class="filters__row">
                    <div class="filters__col">
                      <multiselect
                          v-model="projectFilters.categories.value.name"
                          :options="projectFilters.categories.options"
                          track-by="name"
                          label="name"
                          :show-labels="true"
                          :select-label="``"
                          :deselect-label="``"
                          :selectedLabel="``"
                          :searchable="false"
                          :placeholder="`All categories`"
                          :multiple="true"
                          :taggable="false"
                          :close-on-select="false"
                          :clear-on-select="false"
                          :preserve-search="true"
                      />
                    </div>
                    <div class="filters__col">
                      <multiselect
                          v-model="projectFilters.subcategories.value.name"
                          :options="projectFilters.subcategories.options"
                          track-by="name"
                          label="name"
                          :show-labels="true"
                          :select-label="``"
                          :deselect-label="``"
                          :selectedLabel="``"
                          :searchable="false"
                          :placeholder="`All subcategories`"
                          :multiple="true"
                          :taggable="false"
                          :close-on-select="false"
                          :clear-on-select="false"
                          :preserve-search="true"
                      />
                    </div>
                  </div>
                  <div class="filters__row">
                    <div class="filters__col">
                      <Checkbox
                          class="filters__checkbox"
                          :label="'Only my specialty'"
                          :checked="true"
                          :id="'filters-checkbox01'"
                      />
                    </div>

                    <div class="filters__col">
                      <Checkbox
                          class="filters__checkbox"
                          :label="'Less than 10 requests'"
                          :checked="true"
                          :id="'filters-checkbox02'"
                      />
                    </div>
                    <div class="filters__col">
                      <Checkbox
                          class="filters__checkbox"
                          :label="'Checkbox 3'"
                          :checked="true"
                          :id="'filters-checkbox03'"
                      />
                    </div>
                    <div class="filters__col">
                      <Checkbox
                          class="filters__checkbox"
                          :label="'Premium only'"
                          :checked="false"
                          :id="'filters-checkbox04'"
                      />
                    </div>
                    <div class="filters__col">
                      <Checkbox
                          class="filters__checkbox"
                          :label="'Only my specialty'"
                          :checked="true"
                          :id="'filters-checkbox01'"
                      />
                    </div>

                  </div>
                  <div class="filters__bottom">
                    <Btn class="filters__btn-i"
                         :btnName="`Apply`"
                    />
                    <span class="filters__btn-reset"
                       v-on:click="hideFilterHandle"
                    >
                      Reset
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="projects-content__body double-content__body">
          <div class="projects">
            <div class="projects__list">

              <div class="projects__item"
                   v-for="(item, index) in projectsPage.items"
                   :key="item[index]"
              >
                <div class="projects__info">
                  <div class="projects__img">
                    <img v-bind:src="$store.getters.getUrl + item.img" alt="img">
                  </div>
                  <div class="projects__txt">
                    <div class="projects__name">
                      {{ item.title }}
                      <span>
                        {{ item.titleNumber }}
                      </span>
                    </div>
                    <div class="projects__description">
                      {{ item.description }}
                    </div>
                    <div class="projects__properties">
                      <div class="projects__properties-item"
                           v-for="(property, index) in item.properties"
                           :key="property[index]"
                      >
                        {{property.item}}
                        <sup>
                          {{ property.itemSup }}
                        </sup>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="projects__btn">
                  <button class="projects__btn-i">
                    <span class="projects__btn-ico projects__btn-ico--like">
                      <LikeRotateIco/>
                    </span>
                  </button>
                  <button class="projects__btn-i">
                    <span class="projects__btn-ico">
                      <MessageCloudIco/>
                    </span>
                  </button>
                  <button class="projects__btn-i projects__btn-i--red">
                    <span class="projects__btn-ico">
                      <UsdIco/>
                    </span>
                  </button>
                </div>
              </div>

              <div class="projects__item projects__item--load-more item-load-more">
                <div class="projects__item-more-ico">
                  <LoadMoreIco/>
                </div>
                <div class="projects__item-more-txt">
                  Load more
                </div>
              </div>
            </div>

            <div class="projects-pagination">
              <div class="projects-pagination__inner">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from "./layout/Breadcrumb";
  import Multiselect from 'vue-multiselect';
  import Checkbox from './UI/Checkbox';
  import Btn from "./UI/Btn";
  import Paginate from 'vuejs-paginate'

  import LikeRotateIco from '../assets/img/ico/svg/like-rotate-ico.svg?inline';
  import MessageCloudIco from '../assets/img/ico/svg/message-cloud-ico.svg?inline';
  import UsdIco from '../assets/img/ico/svg/usd-ico.svg?inline';
  import LoadMoreIco from '../assets/img/ico/svg/load-more.svg?inline'

  export default {
    name: "Projects",
    components: {
      Multiselect,
      Breadcrumb,
      Checkbox,
      Btn,
      LikeRotateIco,
      MessageCloudIco,
      UsdIco,
      LoadMoreIco,
      Paginate,
    },

    data() {
      return {
        breadcrumbs: [
          {path: '/', name: 'Home'},
          {path: 'categories', name: 'Projects'},
        ],

        projectsPage: {
          head: {
            title: 'Projects',
            ico: ''
          },

          items:[
            {
              img: 'image/projects/projects-img01.jpg',
              title: 'Printing business cards',
              titleNumber: '20',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
              properties: [
                {item: '350 g/m', itemSup: '2'},
                {item: '4+4', itemSup: ''},
                {item: 'rounding', itemSup: ''}
              ]
            },
            {
              img: 'image/projects/projects-img01.jpg',
              title: 'Print flyers',
              titleNumber: '17',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing ',
              properties: [
                {item: '100 g/m', itemSup: '2'},
                {item: '4+4', itemSup: ''},
                {item: '1000', itemSup: ''},
                {item: 'rounding', itemSup: ''},
                {item: '100 000', itemSup: ''},
                {item: '90 x 50', itemSup: ''}
              ]
            },
            {
              img: 'image/catalog/items/catalog-item01.jpg',
              title: 'Printing business cards',
              titleNumber: '20',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
              properties: [
                {item: '350 g/m', itemSup: '2'},
                {item: '4+4', itemSup: ''},
                {item: 'rounding', itemSup: ''}
              ]
            },
            {
              img: 'image/projects/projects-img01.jpg',
              title: 'Print flyers',
              titleNumber: '17',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing ',
              properties: [
                {item: '100 g/m', itemSup: '2'},
                {item: '4+4', itemSup: ''},
                {item: '1000', itemSup: ''}
              ]
            },
          ]
        },

        projectFilters:{
          categories: {
            value: {
              name: ''
            },
            options: [
              {name: 'All categories'},
              {name: 'Polygraphy'},
              {name: 'Event'}
            ]
          },
          subcategories: {
            value: {
              name: ''
            },
            options: [
              {name: 'All subcategories'},
              {name: 'Polygraphy'},
              {name: 'Event'}
            ]
          },

          showFilter: '',
        },

        paginationRangePage: 0
      }
    },

    methods:{
      paginationHendler(){
        console.log(123);
      },

      showFilterHandle(){
        this.projectFilters.showFilter = true
      },

      hideFilterHandle(){
        this.projectFilters.showFilter = false
      }
    },

    mounted() {
      if( window.screen.width < 700){
        this.paginationRangePage = 3;
        this.projectFilters.showFilter = false;
      } else {
        this.paginationRangePage = 5;
        this.projectFilters.showFilter = true;
      }

      this.projectFilters.showFilter = false;
    }
  }
</script>

<style lang="scss">
  .projects-page{
    padding-top: 50px;
    padding-bottom: 130px;
  }

  .projects-top{

    &__inner{

    }

    &__title{

    }


  }

  .projects-content{
    margin-top: 40px;

    &__inner{

    }

    &__aside{
      max-width: 477px;
    }

    &__body{
      max-width: 913px;
    }

  }


  .filters{

    &__inner{
      background: #FFFFFF;
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
      border-radius: 6px;
    }

    &__form{
      display: flex;
      flex-wrap: wrap;
      padding: 33px 39px 40px;
    }

    &__title{
      width: 100%;
      font-weight: 500;
      font-size: 32px;
      line-height: 38px;
      text-align: center;
      color: #141414;
      margin-bottom: 25px;
    }

    &__content{
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    &__row{
      display: flex;
      margin: 0 -15px;
      flex-direction: column;
      margin-bottom: 10px;
    }

    &__col{
      width: 100%;
      padding: 0 15px;
      margin-bottom: 20px;

      .multiselect{
        margin-bottom: 20px;
      }
    }

    &__checkbox{

    }

    &__bottom{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__btn-i{
      width: 50%;
      max-width: 200px;
      justify-content: center;
    }

    &__btn-reset{
      font-size: 16px;
      line-height: 24px;
      text-decoration-line: underline;
      color: #525252;

      &:hover{
        text-decoration-line: none;
      }
    }

    .multiselect .multiselect__tags{
      min-height: 56px;
      display: flex;
      align-items: center;
    }

  }



  .projects{

    &__list{
      display: flex;
      flex-direction: column;
    }

    &__item{
      display: flex;
      padding-bottom: 30px;
      margin-bottom: 30px;
      border-bottom: 1px solid #F0F0F0;
      position: relative;

      &--load-more{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 100px;
        border-bottom: 0;
      }
    }

    &__info{
      display: flex;
      width: 100%;
    }

    &__img{
      max-width: 120px;
      width: 100%;
      height: 80px;

      img{
        width: 100%;
        height: 100%;
        overflow: hidden;
        object-fit: cover;
        border-radius: 6px;
      }
    }

    &__txt{
      padding-left: 19px;
    }

    &__name{
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      display: flex;
      color: #141414;
      margin-bottom: 10px;
      min-height: 20px;
      padding-right: 200px;

      span{
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #A4A4A4;
        padding-left: 20px;
        position: relative;
        margin-left: 15px;

        &:before{
          content: '';
          width: 14px;
          height: 14px;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          background: url("../assets/img/ico/hummer-ico.svg") center/contain no-repeat;
        }
      }
    }

    &__description{
      font-size: 16px;
      line-height: 24px;
      color: #525252;
      margin-bottom: 15px;
      min-height: 20px;
      padding-right: 200px;
      max-width: 420px;
      box-sizing: content-box;
    }

    &__properties{
      display: flex;
      flex-wrap: wrap;
    }

    &__properties-item{
      margin-right: 10px;
      background: #F0F0F0;
      border-radius: 6px;
      padding: 7px 15px 5px;
      font-size: 14px;
      line-height: 24px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #525252;
      white-space: nowrap;
      margin-bottom: 10px;

      &:last-child{
        margin-right: 0;
      }
    }

    &__btn{
      display: flex;
      width: 190px;
      position: absolute;
      right: 0;
      top: 0;
    }

    &__btn-i{
      display: flex;
      width: 56px;
      height: 56px;
      margin-left: 5px;
      justify-content: center;
      align-items: center;
      background: #F0F0F0;
      border-radius: 6px;
      border: 0;
      padding: 0;
      transition: .3s;

      &:first-child{
        margin-left: 0;
      }


      &:hover{
        background: #D23D20;

        svg path{
          fill: white;
        }
      }

      &--red{
        background: #D23D20;

        &:hover{
          background: #EB4B2C;
          box-shadow: 0px 8px 20px rgba(210, 61, 32, 0.3);
        }
      }
    }

    &__btn-ico{

      svg path{
        transition: .3s;
      }

      &--like{
        svg{
          margin-top: 5px;
        }
      }
    }

    &__item-more-ico{
      margin-bottom: 15px;

      svg{
        transition: 1s;
      }
    }

    &__item--load-more:hover &__item-more-ico svg{
      transform: rotate(180deg);
    }

    &__item-more-txt{
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #141414;
    }

  }


  @media (max-width: 1300px){
    .projects-content__aside {
      max-width: 420px;
    }

    .filters__form{
      padding: 20px;
    }
  }

  @media (max-width: 992px){

    .projects-page{
      padding-top: 35px;
      padding-bottom: 90px;
    }

    .projects-content{
      margin-top: 0;
    }

    .double-content__inner{
      flex-direction: column;
    }

    .projects-content__aside{
      max-width: 100%;
    }

  }

  @media (min-width: 701px) and (max-width: 992px){
    .filters__inner{
      background: transparent;
      box-shadow: none;
      margin-bottom: 40px;
    }

    .filters__row{
      flex-direction: row;
      flex-wrap: wrap;
      margin: 0 -24px;
    }

    .filters__col{
      width: 50%;
      padding: 0 24px;
    }

    .filters__title{
      text-align: start;
      font-size: 20px;
      line-height: 24px;
    }

    .filters__bottom{
      margin: 0 -24px;
      justify-content: flex-start;
    }

    .filters__btn-i{
      max-width: calc(50% - 48px);
      margin-left: 24px;
    }

    .filters__btn-reset{
      padding: 0 24px;
      margin-left: 24px;
    }
  }

  .projects-top__filter-btn{
    display: none;
  }

  @media (max-width: 700px){
    .projects-top__filter-btn{
      display: flex;
      padding: 0 15px;
      justify-content: center;
      margin-top: 35px;
      margin-bottom: 40px;
    }

    .projects-top__filter-btn-i{
      max-width: 300px;
      width: 100%;
      justify-content: center;
    }

    .filters{
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: white;
      opacity: 0;
      z-index: -1;
      visibility: hidden;
      transition: .3s;

      &.show{
        z-index: 10;
        opacity: 1;
        visibility: visible;
      }
    }

    .filters__inner{
      box-shadow: none;
      height: 100%;
    }

    .filters__form{
      height: 100%;
    }

    .filters__content{
      height: calc(100% - 120px);
      overflow-x: hidden;
      overflow-y: scroll;
    }

    .filters__bottom{
      margin-top: auto;
      position: absolute;
      height: 80px;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 15px;
      background: #FFFFFF;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
      justify-content: space-between;
    }

    .filters__btn-i{
      max-width: 220px;
      width: 100%;
    }


    .projects__info{
      flex-direction: column;
    }

    .projects__img{
      margin-bottom: 20px;
    }

    .projects__txt{
      padding-left: 0;
    }

    .projects__name,
    .projects__description{
      padding-right: 0;
      max-width: 100%;
    }

    .projects__btn {
      width: 155px;
    }

    .projects__btn-i{
      width: 48px;
      height: 48px;
    }

  }


</style>
