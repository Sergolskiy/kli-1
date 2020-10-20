<template>
  <modal @close="$emit('close')">
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
</template>

<script>
  import Modal from './../ModalComponent/Modal.vue'
  import Btn from './../UI/Btn'
  /*modal svg*/
  import UiInputName from '@/assets/img/ui/ui-input-name.svg?inline'
  import UiInputCard from '@/assets/img/ui/ui-input-card.svg?inline'
  /*modal svg end*/

  export default {
    name: "Payment",

    components: {
      Modal,
      Btn,
      UiInputCard,
      UiInputName,
    },
  }
</script>

<style scoped>

</style>
