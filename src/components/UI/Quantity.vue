<template>
  <div class="ui-quantity">
    <Btn class="ui-form-btn-i ui-quantity-btn ui-quantity-minus-btn" @click.native="minus()">
      <template slot="btn">
        <Plus/>
      </template>
    </Btn>

    <div class="ui-input">
      <input type="text" class="ui-quantity-input" :value="value" readonly>
    </div>

    <Btn class="ui-form-btn-i ui-quantity-btn ui-quantity-plus-btn" @click.native="plus()">
      <template slot="btn">
        <Plus/>
      </template>
    </Btn>
  </div>
</template>

<script>
  import Btn from './Btn'
  import Plus from '../../assets/img/ico/plus.svg?inline'

  export default {
    name: "Quantity",

    components: {
      Btn,
      Plus
    },

    props: [
      'value',
    ],

    data() {
      return {
        countInput: 0,
      }
    },

    mounted() {
      this.countInput = this.value;
    },

    methods: {
      minus() {
        this.countInput = this.countInput - 1;
        this.change();
      },

      plus() {
        this.countInput = this.countInput + 1;
        this.change();
      },

      change() {
        this.$emit('input', this.countInput);
      },

      // handleInput () {
      //   this.$emit('input', this.countInput)
      // }
    },

  }
</script>

<style scoped lang="scss">

  .ui-quantity{
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .ui-input{
      width: auto;
      margin: 0 10px;
    }
  }

  .ui-quantity-btn{
    max-width: 56px;
    width: 56px;
    height: 56px;
    padding: 0;
    margin: 0;
  }

  .ui-quantity-minus-btn{
    svg{
      width: 14px;

      path:last-child{
        display: none;
      }
    }
  }

  .ui-quantity-plus-btn svg {

  }

  .ui-quantity-input{
    max-width: 130px;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #141414;
  }

</style>
