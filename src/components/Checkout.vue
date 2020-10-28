<template>
  <div class="checkout-page">
    <div class="checkout">
      <div class="checkout__inner">
        <div class="checkout__head">
          <div class="checkout__title site-title site-title--min">
            Checkout
          </div>
          <Breadcrumb
                  :breadcrumbs="breadcrumbs"
          />
        </div>
      </div>
    </div>

    <div class="checkout-content site-container double-content">
      <div class="checkout-content__inner double-content__inner">
        <div class="checkout-content__aside double-content__aside">
          <div class="filters  filters--full">
            <div class="filters__inner">
              <div class="filters__form">
                <div class="filters__content">
                  <div class="filters__title">
                    Main settings
                  </div>
                  <div class="filters__row">
                    <div class="filters__col">
                      <div class="ui-input">
                        <label for="project_name" class="ui-label">
                          Project title
                        </label>
                        <input type="text" id="project_name" placeholder="Enter project title" v-model="filter.projectTitle">
                      </div>

                      <div class="ui-input filters__calendar">
                        <label for="calendar_dd" class="ui-label">
                          Deadline
                        </label>
                        <div class="filters__calendar-fields">
                          <input type="text" class="filters__calendar-field filters__calendar-field--small" id="calendar_dd" placeholder="DD" v-model="filter.date">
                          <input type="text" class="filters__calendar-field filters__calendar-field--small" id="calendar_mm" placeholder="MM" v-model="filter.date">
                          <input type="text" class="filters__calendar-field filters__calendar-field--big" id="calendar_YYYY" placeholder="YYYY" v-model="filter.date">

                          <Btn class="transparent"
                               :btnName="`Open calendar`"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="filters__col">
                      <div class="ui-input">
                        <label for="delivery" class="ui-label">
                          Delivery address
                        </label>
                        <input type="text" id="delivery" placeholder="Enter delivery address" v-model="filter.delivery">
                      </div>

                      <div class="ui-input">
                        <label for="approximate" class="ui-label">
                          Approximate budget
                        </label>
                        <input type="text" id="approximate" placeholder="Enter approximate budget" v-model="filter.approximate">
                      </div>
                    </div>
                  </div>


                  <!--<div class="filters__row">-->
                    <!--<div class="ui-form-col">-->
                      <!---->
                    <!--</div>-->
                  <!--</div>-->


                  <!--<div class="filters__row">-->
                    <!---->
                  <!--</div>-->

                  <!--<div class="filters__row">-->
                    <!--<div class="ui-form-col">-->
                     <!---->
                    <!--</div>-->
                  <!--</div>-->

                  <div class="filters__row">
                    <div class="ui-form-col">
                      <div class="ui-textarea">
                        <label for="comment" class="ui-label">
                          Project comments
                        </label>
                        <textarea name="" id="comment" rows="5" placeholder="Enter project comments" v-model="filter.comment"></textarea>
                      </div>
                    </div>
                  </div>

                  <div class="filters__title">
                    Filters
                  </div>

                  <div class="filters__row">
                    <div class="filters__col">
                      <multiselect
                              v-model="filter.sortByRating.value.name"
                              :options="filter.sortByRating.options"
                              track-by="name"
                              label="name"
                              :show-labels="true"
                              :select-label="``"
                              :deselect-label="``"
                              :selectedLabel="``"
                              :searchable="false"
                              :placeholder="`All categories`"
                              :multiple="false"
                              :taggable="false"
                              :close-on-select="false"
                              :clear-on-select="false"
                              :preserve-search="true"
                      />
                    </div>
                    <div class="filters__col">
                      <multiselect
                              v-model="filter.country.value.name"
                              :options="filter.country.options"
                              track-by="name"
                              label="name"
                              :show-labels="true"
                              :select-label="``"
                              :deselect-label="``"
                              :selectedLabel="``"
                              :searchable="false"
                              :placeholder="`All subcategories`"
                              :multiple="false"
                              :taggable="false"
                              :close-on-select="false"
                              :clear-on-select="false"
                              :preserve-search="true"
                      />
                    </div>
                  </div>

                  <div class="filters__mobile-row-wrap filters__mobile-row-wrap--slier">

                    <div class="filters__row">
                      <div class="ui-form-col">
                        <label class="ui-label">
                          Near me (geo)
                        </label>
                        <range-slider
                                class="slider"
                                min="10"
                                max="1000"
                                step="10"
                                v-model="sliderValue">
                          <template slot="knob"><span class="count">{{sliderValue}} km</span></template>
                        </range-slider>
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


                    </div>
                  </div>


                  <div class="filters__bottom filters__bottom--column">

                    <div class="filters__selected">
                      <span class="filters__selected-name">
                        You selected:
                      </span>
                      <span class="filters__selected-txt">
                        David_33, NickName, RandomStudio
                      </span>
                    </div>

                    <Btn class="filters__btn-full"
                         :btnName="`Send to selected workers `"
                    />

                    <span class="filters__btn-reset filters__btn-reset--mobile"

                    >
                      Reset all
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="checkout-content__body double-content__body">

          <div class="checkout__list" v-for="(checkout, index) in checkoutList" :key="index">
            <div class="checkout__item">
              <div class="checkout__item-top">
                <div class="checkout__item-checkbox">
                  <Checkbox
                          class="filters__checkbox"
                          :label="''"
                          :checked="checkout.checkbox"
                          :id="'checkout-checkbox0' + index"
                          v-model="checkout.checkbox"
                  />
                </div>
                <div class="checkout__item-photo">
                  <img
                          v-bind:src="checkout.img"
                          :alt="checkout.alt"
                  >
                </div>
                <div class="checkout__item-right-wrap">

                  <div class="checkout__item-name">
                    {{checkout.name}}
                  </div>
                  <div class="checkout__item-data">
                    <span>{{checkout.time}}</span>
                    <span>{{checkout.date}}</span>
                  </div>

                  <div class="checkout__item-right">
                    <div class="checkout__item-star">
                      <Star/>
                      <span>
                      {{checkout.rating}}
                    </span>
                    </div>
                    <div class="checkout__item-like">
                      <Like/>
                      <span>
                      {{checkout.like}}
                    </span>
                    </div>
                    <div class="checkout__item-dislike">
                      <Dislike/>
                      <span>
                      {{checkout.dislike}}
                    </span>
                    </div>
                  </div>

                </div>

              </div>
              <div class="checkout__item-bottom">
                <div class="checkout__item-desc">
                  {{checkout.desc}}
                </div>
                <div class="checkout__item-country">
                  <img :src="$store.getters.getUrl + '/image/ico/flag-ua.png'" alt="flag">
                  <span>{{checkout.country}}</span>
                </div>
                <div class="checkout__item-links">
                  <div class="checkout__item-link"   :key="projectIndex" v-for="(project, projectIndex) in checkout.projects">
                    <router-link :to="project.link">
                      <img v-bind:src="project.img" alt="img">
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="projects__item projects__item--load-more  learn-more" @click="learnMore">
            <div class="projects__item-more-ico">
              <LoadMoreIco/>
            </div>
            <div class="projects__item-more-txt">
              Load more
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
</template>

<script>
  import Breadcrumb from "./layout/Breadcrumb";
  import Multiselect from 'vue-multiselect';
  import Checkbox from './UI/Checkbox';
  import Btn from "./UI/Btn";
  import Paginate from 'vuejs-paginate'
  import Star from '../assets/img/star.svg?inline'
  import Like from '../assets/img/like.svg?inline'
  import Dislike from '../assets/img/dislike.svg?inline'
  import LoadMoreIco from '../assets/img/ico/svg/load-more.svg?inline'


  import RangeSlider from 'vue-range-slider'
  // you probably need to import built-in style

  export default {
    name: "Checkout",
    components: {
      Multiselect,
      Breadcrumb,
      Checkbox,
      Btn,
      Paginate,
      Star,
      Like,
      Dislike,
      RangeSlider,
      LoadMoreIco,
    },


    data() {
      return {
        breadcrumbs: [
          { path: 'categories', name: 'Categories'}
        ],

        sliderValue: 50,

        filter: {
          projectTitle: '',
          date: '',
          delivery: '',
          approximate: '',
          comment: '',

          sortByRating: {
            value: {
              name: ''
            },
            options: [
              {name: 'All categories'},
              {name: 'Polygraphy'},
              {name: 'Event'}
            ]
          },

          country: {
            value: {
              name: ''
            },
            options: [
              {name: 'All categories'},
              {name: 'Polygraphy'},
              {name: 'Event'}
            ]
          },
        },


        paginationRangePage: 0,

        checkoutList: [
          {
            checkbox: true,
            img: '/image/customer-rates-ico.jpg',
            alt: 'ico',
            name: 'David_33',
            time: '10:12',
            date: '02.03.2020',
            rating: '24 546',
            like: '32',
            dislike: '0',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            country: 'Ukraine / Kiev',
            projects: [
              {
                link: '/image',
                img: '/image/projects/projects-img01.jpg'
              },
              {
                link: '/image',
                img: '/image/projects/projects-img01.jpg'
              },
              {
                link: '/image',
                img: '/image/projects/projects-img01.jpg'
              },
            ],
          },
          {
            checkbox: false,
            img: '/image/customer-rates-ico.jpg',
            alt: 'ico',
            name: 'David_33',
            time: '10:12',
            date: '02.03.2020',
            rating: '24 546',
            like: '32',
            dislike: '0',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            country: 'Ukraine / Kiev',
            projects: [
              {
                link: '/image',
                img: '/image/projects/projects-img01.jpg'
              },
              {
                link: '/image',
                img: '/image/projects/projects-img01.jpg'
              },
              {
                link: '/image',
                img: '/image/projects/projects-img01.jpg'
              },
            ],
          },
          {
            checkbox: false,
            img: '/image/customer-rates-ico.jpg',
            alt: 'ico',
            name: 'David_33',
            time: '10:12',
            date: '02.03.2020',
            rating: '24 546',
            like: '32',
            dislike: '0',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            country: 'Ukraine / Kiev',
            projects: [
              {
                link: '/image',
                img: '/image/projects/projects-img01.jpg'
              },
              {
                link: '/image',
                img: '/image/projects/projects-img01.jpg'
              },
              {
                link: '/image',
                img: '/image/projects/projects-img01.jpg'
              },
            ],
          },
          {
            checkbox: false,
            img: '/image/customer-rates-ico.jpg',
            alt: 'ico',
            name: 'David_33',
            time: '10:12',
            date: '02.03.2020',
            rating: '24 546',
            like: '32',
            dislike: '0',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            country: 'Ukraine / Kiev',
            projects: [
              {
                link: '/image',
                img: '/image/projects/projects-img01.jpg'
              },
              {
                link: '/image',
                img: '/image/projects/projects-img01.jpg'
              },
              {
                link: '/image',
                img: '/image/projects/projects-img01.jpg'
              },
            ],
          },
          {
            checkbox: false,
            img: '/image/customer-rates-ico.jpg',
            alt: 'ico',
            name: 'David_33',
            time: '10:12',
            date: '02.03.2020',
            rating: '24 546',
            like: '32',
            dislike: '0',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            country: 'Ukraine / Kiev',
            projects: [
              {
                link: '/image',
                img: '/image/projects/projects-img01.jpg'
              },
              {
                link: '/image',
                img: '/image/projects/projects-img01.jpg'
              },
              {
                link: '/image',
                img: '/image/projects/projects-img01.jpg'
              },
            ],
          },
        ],



      }
    },

    methods: {
      paginationHendler() {
        console.log(123);
      },

      learnMore() {
        console.log(234);
      },
    },

  }
</script>

<style lang="scss">

  @import '~vue-range-slider/dist/vue-range-slider.scss';
  $knob-size: 50px;

  .checkout-page{
    padding-top: 50px;
  }

  .checkout-content{
    padding-top: 50px;
    padding-bottom: 180px;

    .slider{
      width: 100%;
      padding: 0;
      margin-top: 40px;

      .range-slider-rail{
        background: #C8C8C8;
        border-radius: 50px;
        height: 14px;
      }

      .range-slider-fill{
        background: linear-gradient(270deg, rgb(26, 26, 26) 0%, rgb(77, 77, 77) 100%);
        border-radius: 50px;
        height: 14px;
      }

      .range-slider-knob{
        width: 32px;
        height: 32px;
        background: rgb(210, 61, 32);
        border: 0;
      }

      .count{
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 16px;
        line-height: 30px;
        color: #1A1A1A;
        white-space: nowrap;
      }

    }
  }

  .checkout{

    &__list{

    }

    &__item{
      position: relative;
      padding-bottom: 30px;
      margin-bottom: 30px;

      &:after{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #F0F0F0;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }

    &__item-top{
      display: flex;
      align-items: flex-start;
    }

    &__item-checkbox{
      margin-top: 8px;
      margin-right: 20px;

      .ui-checkbox-label{
        min-height: 42px;
      }

      .ui-checkbox-label:after,
      .ui-checkbox-label:before{
        width: 40px;
        height: 40px;
        background-size: 15px;

      }
    }

    &__item-photo{
      max-width: 60px;
      margin-right: 30px;

      img{
        border-radius: 50%;
        width: 100%;
      }
    }

    &__item-right-wrap{
      display: flex;
      width: calc(100% - 150px);
    }

    &__item-name{
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      color: #141414;
      margin-right: 20px;
    }

    &__item-data{
      font-size: 14px;
      line-height: 26px;
      letter-spacing: 0.1em;
      color: #A4A4A4;

      span:first-child{
        margin-right: 15px;
      }
    }

    &__item-right{
      display: flex;
      margin-left: auto;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      color: #141414;
    }

    &__item-star{
      display: flex;
      /*align-items: center;*/
      margin-right: 30px;

      svg{
        width: 19px;
        height: 20px;
        top: 2px;
        position: relative;
      }

      span{
        margin-left: 8px;
      }
    }

    &__item-like{
      margin-right: 30px;

      svg{
        position: relative;
        top: 2px;
        width: 18px;
        height: 20px;
      }

      span{
        margin-left: 8px;
      }
    }

    &__item-dislike{
      display: flex;
      align-items: center;
      color: #A4A4A4;

      svg{
        width: 18px;
        height: 20px;
      }

      span{
        margin-left: 10px;
      }
    }

    &__item-bottom{
      margin-top: -35px;
      padding-left: 150px;
    }

    &__item-desc{
      font-size: 14px;
      line-height: 24px;
      color: #525252;
    }

    &__item-country{
      display: flex;
      align-items: center;
      font-size: 14px;
      line-height: 30px;
      color: #525252;

      span{
        margin-left: 10px;
      }
    }

    &__item-links{
      display: flex;
      margin: 10px -15px 0;
    }

    &__item-link{
      padding: 0 15px;
      width: 33.33%;

      img{
        width: 100%;
      }
    }

  }


  @media (max-width: 1180px) and (min-width: 992px)  {
    .checkout-content__aside{
      max-width: 410px;
    }

    .filters__calendar-fields .ui-btn{
      margin-left: 0;
    }

    .checkout__item-name{
      margin-right: 10px;
    }

    .checkout__item-data span:first-child{
      margin-right: 10px;
    }

    .checkout__item-like,
    .checkout__item-star{
      margin-right: 10px;
      font-size: 14px;
    }

    .checkout__item-right svg{
      width: 20px;
      height: 20px;
    }

    .checkout__item-like,
    .checkout__item-dislike{
      svg{
        width: 16px;
        height: 20px;
      }
    }

    .checkout__item-photo {
      margin-right: 20px;
    }

    .checkout__item-bottom {
      padding-left: 140px;
    }
  }

  @media (max-width: 992px) {
    .checkout-content__aside{
      max-width: 100%;
    }


    .checkout-content .slider {
      margin-top: 27px;
    }
  }


  @media (max-width: 670px) {
    .checkout__item-checkbox{
      margin-top: 15px;
      margin-right: 20px;
    }

    .checkout__item-checkbox .ui-checkbox-label{
      min-height: 26px;
      padding-left: 26px;
    }

    .checkout__item-checkbox .ui-checkbox-label:after, .checkout__item-checkbox .ui-checkbox-label:before {
      width: 26px;
      height: 26px;
      background-size: 10px;
    }

    .checkout__item-photo{
      margin-right: 20px;
    }

    .checkout__item-right-wrap{
      display: flex;
      width: calc(100% - 150px);
      flex-direction: column;
    }

    .checkout__item-right{
      margin-left: 0;
      font-size: 14px;
    }

    .checkout__item-star svg{
      width: 17px;
      height: 17px;
    }

    .checkout__item-like,
    .checkout__item-star{
      margin-right: 18px;
    }

    .checkout__item-like svg{
      width: 14px;
      height: 16px;
    }

    .checkout__item-dislike svg{
      width: 14px;
      height: 16px;
    }

    .checkout__item-bottom{
      margin-top: 0px;
      padding-left: 0;
      display: flex;
      flex-direction: column;
    }

    .checkout__item-country{
      order: -1;
      padding-left: 126px;
      margin-bottom: 6px;
    }



  }

  @media (max-width: 450px) {
    .checkout__item-link{
      width: 50%;

      &:last-child{
        display: none;
      }
    }
  }

</style>
