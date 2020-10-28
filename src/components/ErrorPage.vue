<template>
  <div class="page404">
    <div class="page404__inner site-container">
      <div class="page404__img">
        <img
             v-if="pageWidth == 0"
             v-bind:src="$store.getters.getUrl + images[0]"
             alt="ico"
             width="40"
             height="40"
        >
        <img
            v-if="pageWidth == 1"
             v-bind:src="$store.getters.getUrl + images[1]"
             alt="ico"
             width="40"
             height="40"
        >
        <img
             v-if="pageWidth == 2"
             v-bind:src="$store.getters.getUrl + images[2]"
             alt="ico"
             width="40"
             height="40"
        >
      </div>
      <div class="page404__block">
        <div class="page404__title">
          Page not found!
        </div>
        <router-link :to="`/`" class="page404__btn">
          <Btn
              class="page404__btn-i"
              :btnName="`To home page`"
          />
        </router-link>
        <div class="page404__txt">
          Incorrectly typed address or such page
          the site no longer exists
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Btn from './UI/Btn'

  export default {
    name: "ErrorPage",
    components:{
      Btn,
    },

    data(){
      return{
        pageWidth: 0,
        images:[
          '/image/404-img.svg',
          '/image/404-img-table.svg',
          '/image/404-img-mobile.svg',
        ]
      }
    },

    mounted() {
      if(window.screen.width < 992){
        this.pageWidth = 1;
      }
      if (window.screen.width < 700 && window.screen.width < 992){
        this.pageWidth = 2
      }
    }
  }
</script>

<style lang="scss">
  .page404{

    &__inner{
      min-height: calc(100vh - 92px);
    }

    &__img{
      max-width: 844px;
      width: 100%;
      margin: 0 auto;

      img{
        width: 100%;
        height: 100%;
      }
    }

    &__block{
      display: flex;
      flex-direction: column;
      margin-top: -100px;
      max-width: 368px;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 150px;
    }

    &__title{
      font-weight: 500;
      font-size: 48px;
      line-height: 57px;
      text-align: center;
      color: #141414;
      margin-bottom: 55px;
    }

    &__btn{
      margin-bottom: 35px;
      display: flex;
      justify-content: center;
    }

    &__btn-i{
      width: 100%;
      max-width: 100%;
      justify-content: center;
    }

    &__txt{
      font-size: 20px;
      line-height: 32px;
      text-align: center;
      color: #141414;
    }

  }

  @media (max-width: 992px){
    .page404__block{
      margin-top: -220px;
    }
  }

  @media (max-width: 700px){
    .page404__block{
      margin-top: 0;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      top: 136px;
      max-width: 300px;
    }

    .page404__inner{
      position: relative;
    }

    .page404__title{
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 35px;
    }

    .page404__btn-i{
      height: 48px;
      font-size: 14px;
    }

    .page404__txt{
      font-size: 16px;
      line-height: 32px;
    }
  }

</style>
