<template>
  <modal @close="$emit('close')">
    <template slot="header">
      Payment
    </template>

    <template slot="body">
      <div class="ui-form">
        <div class="ui-form-row">
          <div class="ui-input" v-bind:class="{'ui-no-valid': validation.name}">
            <label for="input1" class="ui-label">
              Your name
            </label>
            <label for="input1" class="ui-input-ico">
              <UiInputName/>
            </label>
            <input type="text" id="input1" v-model="name">
          </div>
        </div>

        <div class="ui-form-row">
          <div class="ui-input" v-bind:class="{'ui-no-valid': validation.card}">
            <label for="input2" class="ui-label">
              Card number
            </label>
            <label for="input2" class="ui-input-ico">
              <UiInputCard/>
            </label>
            <input type="text" id="input2" v-model="card" maxlength="16">
          </div>
        </div>

        <div class="ui-form-row ui-form-row--many">
          <div class="ui-form-col ui-form-col--3">
            <div class="ui-input" v-bind:class="{'ui-no-valid': validation.mouth}">
              <input type="text" placeholder="MM" v-model="mouth" maxlength="2">
            </div>
          </div>
          <div class="ui-form-col  ui-form-col--3">
            <div class="ui-input" v-bind:class="{'ui-no-valid': validation.year}">
              <input type="text" placeholder="YY" v-model="year" maxlength="2">
            </div>
          </div>
          <div class="ui-form-col  ui-form-col--3">
            <div class="ui-input" v-bind:class="{'ui-no-valid': validation.cvt}">
              <input type="text" placeholder="CVT" v-model="cvt" maxlength="3">
            </div>
          </div>
        </div>

        <div class="ui-form-row">
          <Btn class="ui-form-btn-i"
               :btnName="`Pay`"
               @click.native="paymentSubmit"
          />
        </div>
      </div>
    </template>
  </modal>
</template>

<script>
  import Modal from './../ModalComponent/Modal.vue'
  import Btn from './../UI/Btn'
  /*modal svg*/
  import UiInputName from '@/assets/img/ui/ui-input-name.svg?inline'
  import UiInputCard from '@/assets/img/ui/ui-input-card.svg?inline'

  import {validation} from '../../services/validation'
  /*modal svg end*/

  export default {
    name: "Payment",

    components: {
      Modal,
      Btn,
      UiInputCard,
      UiInputName,
    },
    data() {
      return {
        name: '',
        card: '',
        mouth: '',
        year: '',
        cvt: '',

        validation: {
          name: false,
          card: false,
          mouth: false,
          year: false,
          cvt: false,
        },
      }
    },
    methods: {
      paymentSubmit() {
        let validationItems = {
          name: this.name,
          card: this.card.replace(/\s/g, ''),
          mouth: this.mouth.replace(/\s/g, ''),
          year: this.year.replace(/\s/g, ''),
          cvt: this.cvt.replace(/\s/g, ''),
        }

        let validationOptions = {
          name: {
            type: [
              'empty',
            ]
          },
          card: {
            type: [
              'empty',
              'numeric',
              {
                'minLength': '16'
              }
            ]
          },
          mouth: {
            type: [
              'empty',
              'numeric',
              {
                'minLength': '2'
              }
            ]
          },
          year: {
            type: [
              'empty',
              'numeric',
              {
                'minLength': '2'
              }
            ]
          },
          cvt: {
            type: [
              'empty',
              'numeric',
              {
                'minLength': '3'
              }
            ]
          },
        }

        let validate = validation(validationItems, validationOptions);
        this.validation = validate.validation;

        if(validate.isValidate){
          console.log(2423423);
          this.$emit('success');
        }
      },
    },
  }
</script>

<style scoped>

</style>
