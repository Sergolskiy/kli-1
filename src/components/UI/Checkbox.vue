<template>
  <div class="ui-checkbox">
    <input type="checkbox"
           class="ui-checkbox-input"
           :checked="checked"
           :id="id"
    >
    <label :for="id"
           class="ui-checkbox-label"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
  export default {
    name: "Checkbox",

    props:[
      'label',
      'checked',
      'id'
    ],

    mounted() {

    }
  }
</script>

<style lang="scss">
  .ui-checkbox-input{
    display: none;

    &:checked + .ui-checkbox-label:after{
      display: flex;
    }
  }

  .ui-checkbox-label{
    position: relative;
    padding-left: 40px;
    min-height: 30px;
    font-size: 16px;
    line-height: 23px;
    color: #3F4A5D;
    display: flex;
    align-items: center;

    &:before{
      content: '';
      left: 0;
      position: absolute;
      top: 0;
      background: #F0F0F0;
      border-radius: 4px;
      width: 26px;
      height: 26px;
    }

    &:after{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 26px;
      height: 26px;
      background-image: url("../../assets/img/ico/white-check-ico.svg");
      background-position: center;
      background-size: 10px;
      background-repeat: no-repeat;
      padding-left: 0;
      padding-right: 0;
      background-color: #D23D20;
      border-radius: 4px;
      display: none;
    }
  }
</style>