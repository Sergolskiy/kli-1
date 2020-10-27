<template>
  <modal @close="$emit('close')">
    <template slot="header">
      Thank you!
    </template>

    <template slot="body">
      <div class="successful-txt">
        Payment was successful
      </div>
      <img
              class="successful-img"
              v-bind:src="$store.getters.getUrl + `/image/home-man-like.svg`"
              alt="img"
      >
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
    name: "ThankYou",

    components: {
      Modal,
      Btn,
    },
  }
</script>

<style scoped>

</style>
