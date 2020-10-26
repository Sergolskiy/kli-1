<template>
  <div class="page-wrap" :class="language">

    <Header/>

    <main class="main">
      <router-view></router-view>
    </main>

    <Footer/>


    <button type="button" class="btn" @click="showModalPayment">
      Open Modal Payment
    </button>

    <Payment v-if="isModalPayment" @close="closePaymentModal"/>


    <button type="button" class="btn" @click="showModalThankYou">
      Open Modal
    </button>

    <ThankYou v-if="isModalThankYou" @close="closeThankYouModal"/>


    <button type="button" class="btn" @click="showModalTextPopup">
      Open Custom Modal
    </button>

    <TextPopup v-if="isModalTextPopup" @close="closeTextPopupModal"/>



  </div>
</template>

<script>
  import Header from './layout/Header.vue'
  import Footer from './layout/Footer.vue'
  import { mapState } from 'vuex';

  // import Auth from './Popups/Auth.vue'
  import Payment from './Popups/Payment.vue'
  import ThankYou from './Popups/ThankYou.vue'
  import TextPopup from './Popups/TextPopup.vue'


  // import Modal from './ModalComponent/Modal.vue'
  // import Btn from './UI/Btn'


  /*modal svg*/
  // import UiInputName from '@/assets/img/ui/ui-input-name.svg?inline'
  // import UiInputCard from '@/assets/img/ui/ui-input-card.svg?inline'
  /*modal svg end*/

  export default {
    name: "Layout",
    components: {
      Header,
      Footer,
      Payment,
      ThankYou,
      TextPopup,


      // Modal,
      // Btn,
      // UiInputCard,
      // UiInputName,
    },

    data: function () {
      return {
        language: '',


        isModalPayment: false,

        isModalThankYou: false,
        isModalTextPopup: false,

        isModalAuth: false,
      }
    },

    computed: mapState(['lang']),

    watch: {
      lang(newValue) {
        this.language = this.langClass(newValue);
      },
    },

    mounted() {
      this.language = this.langClass(this.$store.getters.getLang);

      // check login
      this.$store.dispatch('checkAuth');

      // console.log(this.$store.getters.getAuth);
      // console.log(this.$store.dispatch('auth'));
      // console.log(this.$store.getters.getAuth);
    },

    methods: {
      langClass(lang) {
        if (lang === 'he') {
          return 'rtl'
        } else {
          return 'ltr'
        }
      },

      // closeAuthModal() {
      //   this.isModalAuth = !this.isModalAuth
      // },


      showModalPayment() {
        this.isModalPayment = true;
      },

      closePaymentModal() {
        this.isModalPayment = false;
      },

      showModalThankYou() {
        this.isModalThankYou = true;
      },

      closeThankYouModal() {
        this.isModalThankYou = false;
      },

      showModalTextPopup() {
        this.isModalTextPopup = true;
      },

      closeTextPopupModal() {
        this.isModalTextPopup = false;
      },




      // showModal2() {
      //   this.isModalVisible2 = true;
      // },
      // closeModal2() {
      //   this.isModalVisible2 = false;
      // },
      //
      //
      // showModalCustom() {
      //   this.isCustomModalVisible = true;
      // },
      // closeModalCustom() {
      //   this.isCustomModalVisible = false;
      // },
    }
  }
</script>

<style lang="scss">
  @import "../scss/filter";

  .page-wrap{
    /*background-image: url("../assets/img/line-bg.png");*/
    /*background-image: url("../../public/image/background/line-bg.svg");*/
    background-image: url("../assets/img/line-bg.svg");
    background-position: center;
    background-repeat: repeat-x;
  }

  .site-container{
    max-width: 1430px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
  }

  .site-title{
    font-weight: bold;
    font-size: 46px;
    line-height: 70px;
    text-align: center;
    color: #141414;
    display: flex;
    justify-content: center;
    align-items: center;


    @media(max-width: 992px){
      font-size: 24px;
      line-height: 54px;
    }

    @media (max-width: 700px) {
      font-size: 24px;
      line-height: 70px;
    }

    &__ico{
      margin-right: 23px;
    }

    &--min{
      font-size: 32px;
      line-height: 38px;
    }
  }


  .double-content{

    &__inner{
      display: flex;
      justify-content: space-between;
      margin: 0 -15px;
    }

    &__aside{
      max-width: 477px;
      width: 100%;
      padding: 0 15px;
    }

    &__body{
      max-width: 913px;
      width: 100%;
      padding: 0 15px
    }
  }

  .site-tab{
    display: flex;

    &__i{
      height: 56px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 140px;
      cursor: pointer;
      transition: .3s;
      padding: 0 10px;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      letter-spacing: 0.01em;
      color: #525252;
      border: 1px solid #E1E5EA;
      border-right: 0;
      /*border-bottom: 3px solid transparent;*/
      border-bottom: 1px solid #E1E5EA;
      position: relative;

      &:after{
        content: '';
        height: 3px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background: transparent;
        transition: .3s;
      }

      &:hover{
        /*border-bottom-color: #EFBBB1;*/

        &:after{
          background: #EFBBB1;
        }
      }

      &.active{
        /*border-bottom-color: #D23D20;*/
        color: #141414;


        &:after{
          background: #D23D20;
        }
      }

      &:first-child{
        border-radius: 6px 0px 0px 0px;
      }

      &:last-child{
        border-radius: 0px 6px 0px 0px;
        border-right: 1px solid #E1E5EA;
      }
    }
  }


  .ui-form{

  }

  .ui-form-row{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 23px;

    &--many{
      margin: 0 -15px;
    }

    &:last-child{
      margin-bottom: 0;
    }
  }

  .ui-input{
    width: 100%;
    position: relative;

    input{
      width: 100%;
      background: #F8F8F8;
      border: 1px solid #F0F0F0;
      box-sizing: border-box;
      border-radius: 6px;
      min-height: 56px;
      padding: 0 20px;
      font-size: 16px;
      line-height: 19px;
      color: #141414;
      transition: 0.3s;

      &::placeholder{
        color: #A4A4A4;
      }
    }

    &.ui-no-valid{
      input{
        background: #FFFFFF;
        border: 2px solid #D23D20;
        box-sizing: border-box;
        box-shadow: 0px 4px 10px rgba(210, 61, 32, 0.16);
        border-radius: 6px;
      }
    }


    &__counter{
      input{
        padding-right: 35px;
      }

      .ui-input__counter-input{
        position: relative;
      }
      .ui-input__counter-plus{
        width: 42px;
        height: 25px;
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        cursor: pointer;

        .ui-input__counter-ico{
          background-image: url("../assets/img/ico/svg/arrow-red-up.svg");
        }
      }
      .ui-input__counter-minus{
        width: 42px;
        height: 25px;
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        cursor: pointer;

        .ui-input__counter-ico{
          background-image: url("../assets/img/ico/svg/arrow-red-down.svg");
        }
      }

      .ui-input__counter-ico{
        width: 12px;
        height: 8px;
        display: block;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }

  .ui-textarea{
    width: 100%;

    textarea{
      background: #F8F8F8;
      border: 1px solid #F0F0F0;
      box-sizing: border-box;
      border-radius: 6px;
      width: 100%;
      padding: 20px;font-size: 16px;
      line-height: 19px;

      &::placeholder{
        color: #A4A4A4;
      }
    }
  }

  .ui-label-title{
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #141414;
    margin-bottom: 10px !important;

    &--flex-align-center{
      display: flex;
      align-items: center;
    }

    &.ui-form-col{
      width: 100%;
    }
  }

  .ui-label{
    font-size: 14px;
    line-height: 17px;
    color: #525252;
    margin-bottom: 10px;
    display: flex;
    padding-left: 20px;
  }

  .ui-radio{
    display: none;

    &:checked + .ui-radio-label{
      background: #D23D20;
      color: #fff;
    }
  }

  .ui-radio-label{
    background: #F0F0F0;
    border-radius: 6px;
    font-size: 16px;
    line-height: 24px;
    color: #525252;
    transition: 0.3s;
    padding: 10px 0;
    width: 100%;
    display: block;
    text-align: center;
    cursor: pointer;
  }

  .ui-form-radio-wrap{
    width: 100%;
  }

  .ui-form-radio-list{
    display: flex;
    margin: 0 -15px;
  }

  .ui-form-radio-item{
    width: 25%;
    padding: 0 15px;
  }

  .ui-input-ico{
    position: absolute;
    bottom: 27px;
    left: 19px;
    transform: translateY(50%);

    + input{
      padding-left: 57px;
    }
  }

  .ui-form-col{
    margin-bottom: 23px;
    padding: 0 15px;
    width: 100%;

    &--4{
      width: 25%;
    }

    &--3{
      width: 33.33333%;
    }

    &--2{
      width: 50%;
    }
  }

  .ui-form-btn-i{
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    width: 100%;
    max-width: 368px;
    justify-content: center;
  }
  .auth-modal.create-account .modal-component__inner{
    max-width: 896px;
  }

  .flex-align-center{
    display: flex;
    align-items: center;
  }

  .main{
    min-height: calc(100vh - 300px);
  }

  @media(max-width: 992px){
    .modal-component__content{
      padding-left: 35px;
      padding-right: 35px;
    }

    .auth-modal.create-account .modal-component__inner{
      max-width: 708px;
    }
  }

  @media(max-width: 700px){
    .modal-component__inner,
    .auth-modal.create-account .modal-component__inner{
      max-width: 330px;
    }

    .modal-component__content{
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 15px;
      padding-bottom: 19px;
    }

    .modal-component__header{
      font-size: 24px;
      line-height: 32px;
    }

    .successful-img{
      margin-bottom: 15px;
    }

    .ui-form-btn-i{
      margin-top: 0;
    }

    .ui-form-row{
      margin-bottom: 15px;
    }

    .ui-form-row--many{
      margin-bottom: 0;
    }

    .ui-form-col{
      margin-bottom: 15px;
    }

    .ui-form-col--2{
      width: 100%;
    }

  }













</style>
