<template>
  <div class="cart"
       :class="{ show : $store.getters.getCart == true}"
  >
    <div class="cart__inner">
      <div class="cart__head">
        <div class="cart__head-close"
             v-on:click="hideCartHandler"
        ></div>
        <div class="cart__title">
          Cart
        </div>
      </div>
      <div class="cart__body">
        <vue-custom-scrollbar class="scroll-area" :settings="settings">
          <div class="cart__list">
            <div class="cart__item">
            <div class="cart__item-content">
              <div class="cart__img">
                <img
                    v-bind:src="$store.getters.getUrl + 'image/projects/projects-img01.jpg'"
                    alt="ico"
                >
              </div>
              <div class="cart__info">
                <div class="cart__name">
                  Printing business cards
                </div>
                <div class="cart__properties">
                  <div class="cart__property">
                    350 g/m<sup>2</sup>
                  </div>
                </div>
              </div>
              <div class="cart__btn">
                <div class="cart__btn-i">
                  <div class="cart__btn-i-ico">
                    <DelIco/>
                  </div>
                  Del
                </div>
                <div class="cart__btn-i">
                  <div class="cart__btn-i-ico">
                    <Editico/>
                  </div>
                  Edit
                </div>
              </div>
            </div>
          </div>
          </div>
        </vue-custom-scrollbar>
      </div>
      <div class="cart__footer">
        <div class="cart__footer-btn">
          <Btn
            class="cart__footer-btn-i"
            :btnName="'Checkout'"
          />

          <div class="cart__footer-btn-delete">
            Delete all
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import DelIco from '@/assets/img/ico/del-ico.svg?inline';
  import Editico from '@/assets/img/ico/edit-ico.svg?inline';
  import Btn from "./UI/Btn";
  import { mixin as clickaway } from 'vue-clickaway';
  import vueCustomScrollbar from 'vue-custom-scrollbar';
  import "vue-custom-scrollbar/dist/vueScrollbar.css";

  export default {
    name: "Cart",

    components:{
      DelIco,
      Editico,
      Btn,
      vueCustomScrollbar
    },

    mixins: [ clickaway ],

    data(){
      return {
        settings: {
          suppressScrollY: false,
          suppressScrollX: false,
          wheelPropagation: false
        },
      }
    },

    mounted() {

    },


    methods:{
      hideCartHandler(){
        if(this.$store.getters.getCart === true) {
          this.$store.commit('setCart', false);
        }
      },

    },
  }
</script>

<style lang="scss">

  .scroll-area{
    width: 100%;
    height: calc(100vh - 230px);
    position: relative;
  }

  .cart{
    position: fixed;
    top: 0;
    height: 100%;
    max-width: 740px;
    width: 100%;
    transition: .3s;
    right: -100%;
    z-index: 15;

    &.show{
      right: 0;
    }

    &__inner{
      width: 100%;
      height: 100%;
      background: white;
      box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.16);
      position: relative;
    }

    &__head{
      position: relative;
      padding: 0 50px;
      height: 91px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #F0F0F0;
    }

    &__head-close{
      width: 28px;
      height: 28px;
      background-image: url("../assets/img/ico/menu/cross-red-ico.svg");
      background-position: center;
      background-size: 40px;
      background-repeat: no-repeat;
      position: absolute;
      left: 11px;
      top: 11px;
    }

    &__title{
      font-weight: 500;
      font-size: 32px;
      line-height: 46px;
      color: #141414;
    }

    &__body{

    }

    &__list{

    }

    &__item{

    }

    &__item-content{
      display: flex;

      padding: 30px 50px;
      border-bottom: 1px solid #F0F0F0;
    }

    &__img{
      max-width: 120px;
      width: 100%;
      height: 80px;
      border-radius: 6px;
      overflow: hidden;

      img{
        object-fit: cover;
      }
    }

    &__info{
      padding-left: 29px;
      padding-right: 15px;
      max-width: 360px;
      width: 100%;
    }

    &__name{
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      display: flex;
      align-items: center;
      color: #141414;
      margin-bottom: 10px;
    }

    &__properties{
      display: flex;
      flex-wrap: wrap;
    }

    &__property{
      margin-right: 10px;
      font-size: 14px;
      line-height: 24px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #525252;
      min-height: 36px;
      padding: 0 15px;
      background: #F0F0F0;
      border-radius: 6px;
      margin-bottom: 10px;

      &:last-child{
        margin-right: 0;
      }
    }

    &__btn{
      max-width: 65px;
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-left: auto;
    }

    &__btn-i{
      margin-bottom: 15px;
      display: flex;
      align-items: flex-start;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: #A4A4A4;
    }

    &__btn-i-ico{
      width: 18px;
      height: 18px;
      margin-right: 13px;
    }

    &__footer{
      display: flex;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: #FFFFFF;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    }

    &__footer-btn{
      height: 136px;
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      padding: 0 50px;
    }

    &__footer-btn-i{
      max-width: 220px;
      width: 100%;
      justify-content: center;
    }

    &__footer-btn-delete{
      font-size: 16px;
      line-height: 24px;
      text-decoration-line: underline;
      color: #525252;

      &:hover{
        text-decoration-line: none;
      }
    }

  }


  @media(max-width: 992px){

    .cart__head{
      padding: 0 30px;
    }

    .cart__item-content{
      padding: 30px;
    }

    .cart__footer-btn{
      padding: 0 30px;
    }

    .cart__head-close{
      left: auto;
      right: 11px;
    }

    .cart{
      max-width: 100%;
    }
  }

  @media(max-width: 568px){
    .cart__head{
      height: 78px;
      padding: 0 15px;
    }

    .scroll-area{
      height: calc(100vh - 160px);
    }

    .cart__footer-btn{
       height: 80px;
      padding: 0 15px;
    }

    .cart__item-content{
      padding: 30px 15px;
      flex-wrap: wrap;
    }

    .cart__img{
      margin-bottom: 15px;
    }

    .cart__btn{
      order: 1;
      margin-left: 0;
      padding-left: 30px;
      padding-top: 10px;
    }

    .cart__info{
      width: 100%;
      order: 2;
      padding-left: 0;
      padding-right: 0;
      max-width: 100%;
    }

    .cart__footer-btn-i{
      height: 48px;
    }

  }

  @media (max-width: 350px){
    .cart__footer-btn-i{
      max-width: 180px;
    }
  }

</style>