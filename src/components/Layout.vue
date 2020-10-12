<template>
  <div class="page-wrap" :class="language">

    <Header/>

    <main class="main">
      <router-view></router-view>
    </main>

    <Footer/>


    <button type="button" class="btn" @click="showModal">
      Open Modal Payment
    </button>

    <modal v-show="isModalVisible" @close="closeModal">
      <template slot="header">
        Payment
      </template>

      <template slot="body">
        <form class="ui-form">
          <div class="ui-form-row">
            <div class="ui-input">
              <label for="input1" class="ui-label">
                Your name
              </label>
              <label for="input1" class="ui-input-ico">
                <UiInputName/>
              </label>
              <input type="text" id="input1">
            </div>
          </div>

          <div class="ui-form-row">
            <div class="ui-input">
              <label for="input2" class="ui-label">
                Card number
              </label>
              <label for="input2" class="ui-input-ico">
                <UiInputCard/>
              </label>
              <input type="text" id="input2">
            </div>
          </div>

          <div class="ui-form-row ui-form-row--many">
            <div class="ui-form-col ui-form-col--3">
              <div class="ui-input">
                <input type="text" placeholder="MM">
              </div>
            </div>
            <div class="ui-form-col  ui-form-col--3">
              <div class="ui-input">
                <input type="text" placeholder="YY">
              </div>
            </div>
            <div class="ui-form-col  ui-form-col--3">
              <div class="ui-input">
                <input type="text" placeholder="CVT">
              </div>
            </div>
          </div>

          <div class="ui-form-row">
            <Btn class="ui-form-btn-i"
                 :btnName="`Pay`"
            />
          </div>
        </form>
      </template>
    </modal>


    <button type="button" class="btn" @click="showModal2">
      Open Modal
    </button>

    <modal v-show="isModalVisible2" @close="closeModal2">
      <template slot="header">
        Thank you!
      </template>

      <template slot="body">
        <div class="successful-txt">
          Payment was successful
        </div>
        <img
            class="successful-img"
            v-bind:src="$store.getters.getUrl + `image/home-man-like.svg`"
            alt="img"
        >
      </template>
      <template slot="footer">
        <Btn class="successful-btn"
             :btnName="`Ok`"
             v-on:click.native="closeModal2"
        />
      </template>
    </modal>


    <button type="button" class="btn" @click="showModalCustom">
      Open Custom Modal
    </button>

    <modal v-show="isCustomModalVisible" @close="closeModalCustom">
      <template slot="header">
        There will be a<br> title here
      </template>

      <template slot="body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </template>
      <template slot="footer">
        <Btn class="successful-btn"
             :btnName="`Ok`"
             v-on:click.native="closeModalCustom"
        />
      </template>
    </modal>

    <button type="button" class="btn" @click="showModalSing">
     Sing
    </button>

    <modal v-show="isModalSingModalVisible"
           @close="closeModalSing"
           class="auth-modal"
           :class="{'create-account' : authModaltabIndex == 2}"
    >
      <template slot="header" v-if="authModaltabIndex == 1">
        Sing in
      </template>
      <template slot="header" v-if="authModaltabIndex == 2">
        Sing up
      </template>
      <template slot="body">
        <div class="auth-modal__tab site-tab">
          <div class="auth-modal__tab-i site-tab__i"
               :class="{active : authModaltabIndex == 1}"
               data-tab-index="1"
               v-on:click="changeTabHendler"
          >
            Sing in
          </div>
          <div class="auth-modal__tab-i site-tab__i"
               :class="{active : authModaltabIndex == 2}"
               data-tab-index="2"
               v-on:click="changeTabHendler"
          >
            Sing up
          </div>
        </div>

        <div class="auth-modal__tab-content"
             v-if="authModaltabIndex == 1"
        >

          <form class="ui-form">
            <div class="ui-form-row">
              <div class="ui-input">
                <label for="input3" class="ui-label">
                  Email
                </label>
                <input type="text" id="input3" placeholder="Enter your email">
              </div>
            </div>

            <div class="ui-form-row">
              <div class="ui-input">
                <label for="input4" class="ui-label">
                  Password
                </label>
                <input type="password" id="input4" placeholder="Enter your password">
              </div>
            </div>

            <div class="ui-form-row">
              <Btn class="ui-form-btn-i"
                   :btnName="`Log in`"
              />
            </div>

            <div class="auth-modal__social">
              <div class="auth-modal__social-title">
                Sing in with your social network
              </div>
              <div class="auth-modal__social-list">
                <div class="auth-modal__social-item">
                  <img v-bind:src="$store.getters.getUrl + `image/google.png`"
                       alt="ico"
                       width="40"
                       height="40"
                  >
                </div>
                <div class="auth-modal__social-item">
                  <img v-bind:src="$store.getters.getUrl + `image/facebook.png`"
                       alt="ico"
                       width="40"
                       height="40"
                  >
                </div>
              </div>
            </div>
          </form>


        </div>

        <div class="auth-modal__tab-content"
             v-if="authModaltabIndex == 2"
        >


          <form class="ui-form">
            <div class="ui-form-row ui-form-row--many">
              <div class="ui-form-col ui-form-col--2">
                <div class="ui-input">
                  <label for="input5" class="ui-label">
                    Name
                  </label>
                  <input type="text" id="input5" placeholder="Enter your name">
                </div>
              </div>
              <div class="ui-form-col ui-form-col--2">
                <div class="ui-input">
                  <label for="input6" class="ui-label">
                    Email
                  </label>
                  <input type="email" id="input6" placeholder="Enter your email">
                </div>
              </div>
            </div>

            <div class="ui-form-row ui-form-row--many">
              <div class="ui-form-col ui-form-col--2">
                <div class="ui-input">
                  <label for="input7" class="ui-label">
                    Phone
                  </label>
                  <input type="text" id="input7" placeholder="Your phone number">
                </div>
              </div>
              <div class="ui-form-col ui-form-col--2">
                <div class="ui-input">
                  <label for="input8" class="ui-label">
                    Password
                  </label>
                  <input type="password" id="input8" placeholder="Create a password">
                </div>
              </div>
            </div>

            <div class="ui-form-row">
              <Btn class="ui-form-btn-i"
                   :btnName="`Create your account`"
              />
            </div>

            <div class="auth-modal__social">
              <div class="auth-modal__social-title">
                Sing in with your social network
              </div>
              <div class="auth-modal__social-list">
                <div class="auth-modal__social-item">
                  <img v-bind:src="$store.getters.getUrl + `image/google.png`"
                       alt="ico"
                       width="40"
                       height="40"
                  >
                </div>
                <div class="auth-modal__social-item">
                  <img v-bind:src="$store.getters.getUrl + `image/facebook.png`"
                       alt="ico"
                       width="40"
                       height="40"
                  >
                </div>
              </div>
            </div>
          </form>

        </div>
      </template>
    </modal>
  </div>
</template>

<script>
  import Header from './layout/Header.vue'
  import Footer from './layout/Footer.vue'
  import { mapState } from 'vuex';


  import Modal from './ModalComponent/Modal.vue'
  import Btn from './UI/Btn'


  /*modal svg*/
  import UiInputName from '@/assets/img/ui/ui-input-name.svg?inline'
  import UiInputCard from '@/assets/img/ui/ui-input-card.svg?inline'
  /*modal svg end*/

  export default {
    name: "Layout",
    components: {
      Header,
      Footer,


      Modal,
      Btn,
      UiInputCard,
      UiInputName,
    },

    data: function () {
      return {
        language: '',


        isModalVisible: false,
        isModalVisible2: false,
        isCustomModalVisible: false,


        isModalSingModalVisible: false,
        authModaltabIndex: 1
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
    },

    methods: {
      langClass(lang) {
        if (lang === 'he') {
          return 'rtl'
        } else {
          return 'ltr'
        }
      },


      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },


      showModal2() {
        this.isModalVisible2 = true;
      },
      closeModal2() {
        this.isModalVisible2 = false;
      },


      showModalCustom() {
        this.isCustomModalVisible = true;
      },
      closeModalCustom() {
        this.isCustomModalVisible = false;
      },


      showModalSing() {
        this.isModalSingModalVisible = true;
      },
      closeModalSing() {
        this.isModalSingModalVisible = false;
      },
      changeTabHendler(event){
        this.authModaltabIndex = event.target.attributes['data-tab-index'].value;
      }

    }
  }
</script>

<style lang="scss">
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
      max-width: 447px;
      width: 100%;
      padding: 0 15px;
    }

    &__body{
      max-width: 883px;
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
      margin: 0 -13px;
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

      &::placeholder{
        color: #A4A4A4;
      }
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
    padding: 0 13px;

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

  .auth-modal__tab{
    display: flex;
    justify-content: center;
    margin-bottom: 23px;
  }

  .auth-modal__tab-i{
    max-width: 184px;
    width: 100%;
  }

  .auth-modal__social{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }

  .auth-modal__social-title{
    font-size: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #141414;
    margin-bottom: 20px;

  }

  .auth-modal__social-list{
    display: flex;
    justify-content: center;
  }

  .auth-modal__social-item{
    margin: 0 9px;
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
