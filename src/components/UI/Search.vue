<template>
  <form action="#">
    <div class="ui-search">
      <div class="ui-search-body">
        <div class="ui-search-content">
          <input type="text" class="ui-search-input"
                 :placeholder=$t(searchPlaseholder)
                 v-model="search"
                 v-on:keyup="searchChange"
                 @click="searchChange"
          >
          <div class="ui-search-select" v-bind:class="{open: openCategories}">

            <a class="ui-search-select-category" @click="openSearchCategory" href="#">
              <div>{{activeCategory.name}}</div>
              <span>
                <RedArrowDown/>
              </span>
            </a>

            <div class="ui-search-select-dropdown-wrap">
              <vue-custom-scrollbar class="scroll-area-search" :settings="settings">
                <div class="ui-search-select-dropdown-scroll">
                  <div class="ui-search-select-dropdown">
                    <a href="#" class="ui-search-select-option" @click="changeCategory(index)" data-value="Name of category"
                       v-for="(category, index) in categories"
                       :key="index"
                       v-bind:class="{active: activeCategory.id === index}"
                    >
                      {{category.name}}
                    </a>
                  </div>

                </div>
              </vue-custom-scrollbar>
            </div>

          </div>

          <button class="ui-search-btn">
            <SearchIco/>
          </button>

          <div class="ui-search-hints" v-if="hintsShow">
            <div class="ui-search-hints__items">
              <div class="ui-search-hints__item"
                   v-for="(hint, index) in hints"
                   :key="index">
                <a href="#" class="ui-search-hints__link" @click="selectHint(hint.name)">
                  {{hint.name}}
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>
      <!--<div class="ui-search-result">-->
        <!--<div class="ui-search-result-item">-->
          <!--Web dev-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </form>
</template>

<script>
  import SearchIco from '@/assets/img/ico/search-ico.svg?inline';
  import vueCustomScrollbar from 'vue-custom-scrollbar';
  import "vue-custom-scrollbar/dist/vueScrollbar.css";
  import RedArrowDown from '@/assets/img/ico/red-arrow-down.svg?inline';

  export default {
    name: "Search",

    components :{
      SearchIco,
      vueCustomScrollbar,
      RedArrowDown
    },

    data(){
      return {
        settings: {
          suppressScrollY: false,
          suppressScrollX: false,
          wheelPropagation: false
        },
        openCategories: false,
        activeCategory: {
          id: null,
          name: 'All categories'
        },

        search: '',

        hintsShow: false,
        hints: [
          {
            id: 0,
            name: '  Web dev'
          },
          {
            id: 1,
            name: '  Web developer'
          },
          {
            id: 2,
            name: '  Web development'
          },
          {
            id: 3,
            name: 'Web developer blog'
          },
          {
            id: 4,
            name: 'Web developer portfolio'
          },
          {
            id: 5,
            name: 'Web developer company'
          },
        ],


        categories: [
          {
            name: 'Name of category'
          },
          {
            name: 'Name of category1'
          },
          {
            name: 'Name of category2'
          },
          {
            name: 'Name of category3'
          },
          {
            name: 'Name of category4'
          },
          {
            name: 'Name of category5'
          },
          {
            name: 'Name of category6'
          },
          {
            name: 'Name of category7'
          },
          {
            name: 'Name of category8'
          },
          {
            name: 'Name of category9'
          },
          {
            name: 'Name of category10'
          },
          {
            name: 'Name of category11'
          },
        ]
      }
    },

    props:[
      'searchPlaseholder',
    ],

    methods: {
      openSearchCategory(e) {
        e.preventDefault();
        this.openCategories = !this.openCategories;
      },

      changeCategory(index){
        this.activeCategory.name = this.categories[index].name;
        this.activeCategory.id = index;
        this.openCategories = !this.openCategories;
      },

      searchChange(e) {
        console.log(e.target.value.length);
        if(e.target.value.length > 3){
          this.hintsShow = true;
        } else {
          this.hintsShow = false;
        }
      },

      selectHint(name) {
        this.search = name;
        this.hintsShow = false;
      }
    },

    mounted() {
      document.addEventListener('click', (e) => {
        if(!e.target.classList.contains('ui-search-select') && e.target.closest(".ui-search-select") === null){
          this.openCategories = false;
        }

        if(!e.target.classList.contains('ui-search-hints') && e.target.closest(".ui-search-hints") === null &&!e.target.classList.contains('ui-search-input')){
          this.hintsShow = false;
          // console.log(123);
        }
      })
    }

  }
</script>

<style lang="scss">

  .ui-search{

  }

  .ui-search-body{
    position: relative;
  }

  .ui-search-content{
    display: flex;
    /*width: 939px;*/
    box-shadow: 0px 0px 0px 12px rgba(0, 0, 0, 0.14);
    border-radius: 6px;
    height: 76px;
  }

  .ui-search-input{
    height: 100%;
    background: white;
    width: 100%;
    border-radius: 6px 0 0 6px;
    padding: 0 29px;
    border: 2px solid transparent;
    transition: .3s;
    font-size: 20px;
    line-height: 24px;

    &:focus{
      border-color: #D23D20;
    }
  }

  .ui-search-select{
    border-left: 1px solid #E6E6E6;
    min-width: 175px;
    position: relative;
    display: none;

    &.open{
      .ui-search-select-category span svg{
        transform: rotate(180deg);
      }

      .ui-search-select-dropdown-wrap{
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
        z-index: 1;
      }
    }
  }


  .ui-search-select-category{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    border: 0;
    font-size: 16px;
    line-height: 24px;
    color: #A4A4A4;
    padding-left: 15px;

    div{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    span{
      margin-right: 10px;

      svg{
        transition: 0.3s;
      }

      path{
        fill: #A4A4A4;
      }
    }
  }

  .ui-search-select-dropdown-wrap{
    background: #FFFFFF;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    position: absolute;
    top: 100%;
    margin-top: 30px;
    width: 237px;
    transition: 0.3s;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-5px);
    z-index: -2;

    &:after{
      content: "";
      display: block;
      width: calc(100% - 15px);
      background: white;
      height: 8px;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  .ui-search-select-dropdown{
    padding: 8px 0 0 15px;
    display: flex;
    flex-direction: column;
  }

  .scroll-area-search{
    max-height: 315px;
    padding-bottom: 8px;

    .ps__rail-y {
      width: 9px;
      background-color: #E6E6E6 !important;
    }

    .ps__thumb-y{
      background-color: rgb(82, 82, 82);
    }
  }


  .ui-search-select-option{
    font-size: 16px;
    line-height: 30px;
    color: #525252;
    transition: 0.3s;

    &.active,
    &:hover{
      color: black;
    }
  }

  .ui-search-btn{
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #D23D20;
    border-radius: 0px 6px 6px 0px;
    border: 0;

    svg path{
      width: 27px;
      height: 30px;
    }
  }

  .ui-search-result{

  }

  .ui-search-result-item{

  }


  .ui-search-hints{
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    margin-top: 5px;

    &__items{
      position: relative;
      padding: 15px 0;
    }

    &__item{
      font-size: 20px;
      line-height: 40px;
      display: flex;
    }

    &__link{
      height: 100%;
      display: flex;
      align-items: center;
      width: 100%;
      color: #141414;
      padding: 0 30px;
      transition: 0.3s;

      &:hover{
        background: #F0F0F0;
      }
    }

  }


  @media(max-width: 1240px){
    .ui-search-content{
      height: 56px;
    }
    .ui-search-input{
      font-size: 16px;
      line-height: 24px;
      padding-left: 23px;
      padding-right: 23px;
    }

    .ui-search-btn{
      width: 56px;
    }
  }

  @media(max-width: 700px){
    .ui-search-content{
      height: 48px;
    }

    .ui-search-btn{
      width: 48px;
    }

    .ui-search-input{
      padding-left: 15px;
      padding-right: 15px;
    }
  }

</style>
