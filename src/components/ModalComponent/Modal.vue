<template>
  <div class="modal-component">
    <div class="modal-component__inner">
      <slot name="header">
        <button type="button" class="btn-close btn-right" @click="close" aria-label="Close modal">
          x
        </button>
        Header
      </slot>

      <slot name="body">
      </slot>

      <slot name="footer">
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Modal",

    methods: {
      close(event) {
        this.$emit('close');
      },
    },
  }
</script>

<style lang="scss">

</style>