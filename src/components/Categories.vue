<template>
  <div class="categories-page">
    <div class="categories">
      <div class="categories__inner">
        <div class="categories__head">
          <div class="categories__title site-title site-title--min">
            {{ categoriesPage.head.title }}
          </div>
          <Breadcrumb
              :breadcrumbs="breadcrumbs"
          />
        </div>
      </div>
    </div>

    <div class="categories-content">
      <div class="categories-content__inner site-container">
        <div class="categories-content__list">
          <div class="categories-content__item"
               v-for="(item, index) in categoriesPage.items"
               :key="item[index]"
          >
            <router-link
                class="categories-content__link"
                :to="item.path"
            >
              <div class="categories-content__item-inner">
                <div class="categories-content__img">
                  <img v-bind:src="$store.getters.getUrl + item.ico" alt="ico">
                </div>
                <div class="categories-content__name">
                  {{ item.name }}
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Breadcrumb from "./layout/Breadcrumb";

  export default {
    name: "Categories",
    components: {
      Breadcrumb
    },

    data(){
      return{

        breadcrumbs: [
          { path: 'categories', name: 'Categories'}
        ],

        categoriesPage:{
          head: {
            title: 'Categories',
          },

          items: [
            {
              name: 'Event',
              path: '',
              ico: 'image/svg/top-categ01.svg'
            },
            {
              name: 'Food',
              path: '',
              ico: 'image/svg/top-categ02.svg'
            },
            {
              name: 'Transportation',
              path: '',
              ico: 'image/svg/top-categ03.svg'
            },
            {
              name: 'Repair work',
              path: '',
              ico: 'image/svg/top-categ04.svg'
            },
            {
              name: 'Polygraphy',
              path: '',
              ico: 'image/svg/top-categ05.svg'
            },
            {
              name: 'Polygraphy',
              path: '',
              ico: 'image/svg/top-categ05.svg'
            },
            {
              name: 'Repair work',
              path: '',
              ico: 'image/svg/top-categ04.svg'
            },
            {
              name: 'Transportation',
              path: '',
              ico: 'image/svg/top-categ03.svg'
            },
            {
              name: 'Food',
              path: '',
              ico: 'image/svg/top-categ02.svg'
            },
            {
              name: 'Event',
              path: '',
              ico: 'image/svg/top-categ01.svg'
            },
          ],
        }
      }
    }
  }
</script>

<style lang="scss">
  .categories-page{
    padding-top: 50px;
    padding-bottom: 200px;
  }

  .categories-content{
    &__inner{
      padding-top: 60px;
    }

    &__list{
      margin: 0 -15px;
      display: flex;
      flex-wrap: wrap;
    }

    &__item{
      width: 20%;
      padding: 0 15px;
      margin-bottom: 60px;
    }

    &__item-inner{
      transition: .3s;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 175px;
      max-width: 220px;
      width: 100%;
      cursor: pointer;
      padding: 10px;

      &:hover{
        background: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
      }
    }

    &__link{
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__img{
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
    }

    &__name{
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      color: #525252;
    }

  }

  @media (max-width: 992px){
    .categories-content__inner{
      padding-top: 35px;
    }
  }

  @media (max-width: 700px){
    .categories-content__item{
      width: 33.3333%;
    }

    .categories-content__img > img{
      width: 57px;
    }

    .categories-content__name{
      font-size: 14px;
    }
  }



</style>
