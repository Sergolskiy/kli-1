<template>
  <div class="home">
      <div class="home-top">
          <div class="home-top__bg">
              <Background/>
          </div>
          <div class="home-top__container site-container">
              <div class="home-top__body">
                  <div class="home-top__txt">
                      <div class="home-top__caption">
                        {{ $t("message.homeCaption") }}
                      </div>
                      <div class="home-top__title">
                        {{ $t("message.homeTitle") }}
                      </div>
                  </div>
                  <div class="home-top__img">
                      <HomeMan/>
                  </div>
              </div>
              <div class="home-top__bottom">
                  <div class="home-top__btn">
                      <Btn class="home-top__btn-i"
                           :btnName="btnName.publishsProject"
                      />
                  </div>
                  <div class="home-top__search">
                      <Search class="home-top__search-i" v-bind:searchPlaseholder="searchPlaseholder.startTypingYourSearchQuery"/>
                  </div>
              </div>
          </div>
      </div>
     <div class="top-categories">
         <div class="top-categories__inner site-container">
             <div class="top-categories__title site-title">
               {{ $t("message.topCategories") }}
             </div>


           <!--<img v-bind:src="require('../assets/img/ico/svg/top-categ01.svg')" alt="ico">-->
           <img v-bind:src="$store.getters.getUrl + topCategories[0].slideIco" alt="ico">
             <div class="top-categories__slider">
               <agile :dots="false"
                      :infinite="true"
                      :options="topCategoriesOption"
               >
                 <div class="top-categories__slide"
                      v-for="(slide, index) in topCategories"
                      :key="slide[index]"
                 >
                   <div class="top-categories__slide-link">
                     <div class="top-categories__slide-img">

                     </div>
                     <div class="top-categories__slide-name">
                       {{ $t( slide.slideName ) }}
                     </div>
                   </div>
                 </div>
                  <!--<div class="top-categories__slide">-->
                    <!--<div class="top-categories__slide-link">-->
                      <!--<div class="top-categories__slide-img">-->
                        <!--<TopCategImg01/>-->
                      <!--</div>-->
                      <!--<div class="top-categories__slide-name">-->
                        <!--{{ $t("message.event") }}-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class="top-categories__slide">-->
                    <!--<div class="top-categories__slide-link">-->
                      <!--<div class="top-categories__slide-img">-->
                        <!--<TopCategImg02/>-->
                      <!--</div>-->
                      <!--<div class="top-categories__slide-name">-->
                        <!--{{ $t("message.food") }}-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class="top-categories__slide">-->
                    <!--<div class="top-categories__slide-link">-->
                      <!--<div class="top-categories__slide-img">-->
                        <!--<TopCategImg03/>-->
                      <!--</div>-->
                      <!--<div class="top-categories__slide-name">-->
                        <!--{{ $t("message.transportation") }}-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class="top-categories__slide">-->
                    <!--<div class="top-categories__slide-link">-->
                      <!--<div class="top-categories__slide-img">-->
                        <!--<TopCategImg04/>-->
                      <!--</div>-->
                      <!--<div class="top-categories__slide-name">-->
                        <!--{{ $t("message.repairWork") }}-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class="top-categories__slide">-->
                    <!--<div class="top-categories__slide-link">-->
                      <!--<div class="top-categories__slide-img">-->
                        <!--<TopCategImg05/>-->
                      <!--</div>-->
                      <!--<div class="top-categories__slide-name">-->
                        <!--{{ $t("message.polygraphy") }}-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
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

    <InlineSVG />
    <img :src="externalSVG" />

     <div class="how-it-works">
       <div class="how-it-works__inner site-container">
         <div class="how-it-works__title site-title">
           {{ $t("message.howItWorks") }}
         </div>
         <div class="how-it-works__content">
           <video width="400" poster="@/assets/img/video-preview.jpg" :click="addControls">
             <source src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4" type="video/mp4">
             Your browser does not support HTML video.
           </video>
         </div>
       </div>
     </div>
  </div>
</template>

<script>
  import Background from '../assets/img/background.svg?external'
  import HomeMan from '../assets/img/home-man.svg?external'

  import InlineSVG from '../../public/image/svg/top-categ01.svg?inline'; // Note the `?inline` query string
  import ExternalSVG from '../../public/image/svg/top-categ01.svg';

  import Btn from "./UI/Btn";
  import Search from "./UI/Search";
  import { VueAgile } from 'vue-agile';

  // import TopCategImg01 from '../assets/img/ico/svg/top-categ01.svg'
  // import TopCategImg02 from '../assets/img/ico/svg/top-categ02.svg'
  // import TopCategImg03 from '../assets/img/ico/svg/top-categ03.svg'
  // import TopCategImg04 from '../assets/img/ico/svg/top-categ04.svg'
  // import TopCategImg05 from '../assets/img/ico/svg/top-categ05.svg'
  import SliderBtnPrev from '../assets/img/ico/slider-arrow-left.svg'
  import SliderBtnNext from '../assets/img/ico/slider-arrow-right.svg'

  export default {
    name: "Home",
    components: {
      Background,
      HomeMan,
      Btn,
      Search,
      agile: VueAgile,

      InlineSVG,

      // TopCategImg01,
      // TopCategImg02,
      // TopCategImg03,
      // TopCategImg04,
      // TopCategImg05,
      SliderBtnPrev,
      SliderBtnNext
    },

    computed: {
      externalSVG() {
        return ExternalSVG;
      },
    },

    data: function () {
      return {
        url: './',

        btnName: {
          'publishsProject' : "message.publishsProject"
        },
        searchPlaseholder: {
          'startTypingYourSearchQuery' : "message.startTypingYourSearchQuery"
        },
        topCategoriesOption: {
          slidesToShow: 5
        },
        topCategories: [
          {
            slideName: 'message.event',
            slideIco: 'image/svg/top-categ01.svg'
          },
          {
            slideName: 'message.food',
            slideIco: '../assets/img/ico/svg/top-categ02.svg/'
          },
          {
            slideName: 'message.transportation',
            slideIco: '../assets/img/ico/svg/top-categ03.svg/'
          },
          {
            slideName: 'message.repairWork',
            slideIco: '../assets/img/ico/svg/top-categ04.svg/'
          },
          {
            slideName: 'message.polygraphy',
            slideIco: '../assets/img/ico/svg/top-categ05.svg/'
          },
        ]
      }
    },

    mounted() {
      if(location.hostname === 'frontend.topden.net') {
        this.url = './kli2/'
      }
    },

    methods:{
      addControls(){

      }
    }
  }
</script>

<style lang="scss">
  .home{
    margin-top: -157px;
    /*background-image: url("../assets/img/vector-bg.png");*/
    background-image: url("../assets/img/vector-bg.svg");
    background-position-y: 249px;
    background-repeat: no-repeat;
  }

  .home-top{
      height: 860px;
      position: relative;
      padding-top: 260px;

      &__bg{
          position: absolute;
          right: 0;
          top: 0;
      }

      &__container{
          position: relative;
          z-index: 2;
      }

      &__body{
          display: flex;
          justify-content: space-between;
        margin-bottom: 70px;
      }

      &__txt{
        padding-bottom: 80px;
        position: relative;

        &:before{
          content: '';
          bottom: 0;
          left: 0;
          width: 130px;
          height: 5px;
          background: #141414;
          position: absolute;
        }
      }

      &__caption{
          font-size: 24px;
          line-height: 28px;
          color: #525252;
          margin-bottom: 10px;
      }

      &__title{
          font-size: 46px;
          line-height: 70px;
          color: #141414;
          font-weight: bold;
          max-width: 687px;
      }

      &__img{
          margin-right: -100px;
      }

      &__bottom{
          display: flex;
          align-items: center;
          justify-content: space-between;
      }

      &__btn{
          margin-right: 100px;
      }

      &__btn-i{
          height: 76px;
          padding-left: 80px;
          padding-right: 80px;
          font-weight: 500;
          font-size: 20px;
      }

      &__search{

      }

      &__search-i{

      }
  }

  .top-categories{
    &__inner{
      padding-top: 145px;
      padding-bottom: 135px;
    }

    &__title{
      margin-bottom: 70px;
    }

    &__slider{
      position: relative;
    }

    &__slide{

    }

    &__slide-link{
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__slide-img{
      margin-bottom: 30px;
    }

    &__slide-name{
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      color: #525252;
    }


    button.agile__nav-button{
      border: none;
      background-color: transparent;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      svg path{
        transition: .3s;
      }

      &:hover{
        svg path{
          fill: #D23D20;
        }
      }
    }

    button.agile__nav-button--prev{
      left: 0;
    }

    button.agile__nav-button--next{
      right: 0;
    }
  }

  .how-it-works{

    &__inner{
      padding-bottom: 160px;
      padding-top: 60px;
    }

    &__title{
      margin-bottom: 60px;
    }

    &__content{
      max-width: 1314px;
      width: 100%;
      margin: 0 auto;

      video{
        width: 100%;
      }
    }

  }


  .rtl {

    .home{
      background-image: url("../assets/img/vector-bg-rtl.png");
    }

    .home-top{
      &__bg{
        right: auto;
        left: 0;
        transform: scale(-1, 1);
      }

      &__body {
        flex-direction: row-reverse;
      }

      &__img{
        margin-right: 0;
        margin-left: -100px;
        transform: scale(-1, 1);
      }

      &__caption{
        text-align: right;
      }

      &__title{
        text-align: right;
      }

      &__txt:before{
        left: auto;
        right: 0;
      }

      &__bottom{
        flex-direction: row-reverse;
      }

      &__btn{
        margin-right: 0;
        margin-left: 20px;
      }
    }
  }


</style>
