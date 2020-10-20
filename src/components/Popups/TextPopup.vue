<template>
  <modal @close="$emit('close')">
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
           v-on:click.native="$emit('close')"
      />
    </template>
  </modal>


</template>

<script>
  import Modal from './../ModalComponent/Modal.vue'
  import Btn from './../UI/Btn'

  export default {
    name: "TextPopup",

    components: {
      Modal,
      Btn,
    },

  }
</script>

<style scoped>

</style>
