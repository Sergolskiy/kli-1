<template>
  <modal
         @close="$emit('close')"
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
            <div class="ui-input" v-bind:class="{'ui-no-valid': validation.email}">
              <label for="input3" class="ui-label">
                Email
              </label>
              <input type="text" id="input3" placeholder="Enter your email" v-model="email">
            </div>
          </div>

          <div class="ui-form-row">
            <div class="ui-input" v-bind:class="{'ui-no-valid': validation.password}">
              <label for="input4" class="ui-label">
                Password
              </label>
              <input type="password" id="input4" placeholder="Enter your password" v-model="password">
            </div>
          </div>

          <div class="ui-form-row" >
            <Btn class="ui-form-btn-i"
                 v-on:click.native="auth"
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
</template>

<script>
  import Modal from './../ModalComponent/Modal.vue'
  import Btn from './../UI/Btn'
  import {validation} from '../../services/validation'

  export default {
    name: "Auth",

    props: [
      'isShow'
    ],

    components: {
      Modal,
      Btn,
    },

    data: function () {
      return {
        isModalSingModalVisible: false,
        authModaltabIndex: 1,

        email: '',
        password: '',

        validation: {
          email: false,
          password: false
        },

      }
    },



    methods: {

      auth() {
        let validationItems = {
          email: this.email,
          password: this.password,
        }

        let validationOptions = {
          email: {
            type: [
              'empty',
              'email',
            ]
          },
          password: {
            type: [
              'empty',
              'password',
            ]
          },
        }
        let validate = validation(validationItems, validationOptions);
        this.validation = validate.validation;

        if(validate.isValidate){
          console.log(this.$store.dispatch('auth'));
          console.log(this.$store.getters.getAuth);
          this.$emit('close');
        }
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

<style scoped>

</style>
