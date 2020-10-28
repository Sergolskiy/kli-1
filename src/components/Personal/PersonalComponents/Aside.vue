<template>
  <div class="personal-aside">
    <div class="personal-aside__inner">
      <div class="personal-aside__list">
        <router-link :to="item.link" class="personal-aside__item"
             v-for="(item, index) in asideMenu"
             :key="item[index]"
        >
          <div class="personal-aside__item-ico">
            <img v-bind:src="$store.getters.getUrl + item.ico"
                 alt="ico"
                 class="personal-aside__item-ico-i">
            <img v-bind:src="$store.getters.getUrl + item.icoHover"
                 alt="ico"
                 class="personal-aside__item-ico-i personal-aside__item-ico-i--hover">
          </div>
          <div class="personal-aside__item-txt">
            {{ item.name }}
          </div>
          <div class="personal-aside__item-count"
               v-if="item.count.length > 0 "
          >
            {{ item.count }}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Aside",

    props: [
      'asideMenu'
    ],

    data(){
      return {

      }
    }
  }
</script>

<style lang="scss">
  .personal-aside{

    &__inner{
      background: #FFFFFF;
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
      border-radius: 6px;
    }

    &__list{
      display: flex;
      flex-direction: column;
    }

    &__item{
      min-height: 74px;
      display: flex;
      padding: 0 24px;
      align-items: center;
      border-bottom: 1px solid #F0F0F0;
      color: #141414;

      &.router-link-active .personal-aside__item-ico-i--hover{
        display: flex;
      }

      &:last-child{
        border-bottom: 0;
      }
    }

    &__item-ico{
      max-width: 28px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 28px;
      position: relative;
    }

    &__item-ico-i{
      width: 100%;
      height: 100%;
    }

    &__item-ico-i--hover{
      display: none;
      position: absolute;
      background: white;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &__item:hover &__item-ico-i--hover{
      display: flex;
    }

    &__item:hover &__item-txt{
      text-decoration: underline;
    }

    &__item-txt{
      width: 100%;
      padding-left: 20px;
    }

    &__item-count{
      margin-left: auto;
      max-width: 28px;
      width: 100%;
      height: 28px;
      background: #D23D20;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      border-radius: 50%;
    }

  }

  @media (max-width: 1400px){

  }

</style>
