<template>
    <button class="ui-btn ui-btn-primary"
            :class="btnStyle"
    >
        {{ $t(btnName) }}
        <slot name="btn"></slot>
    </button>
</template>

<script>

  export default {
    name: "Btn",

    props:[
      'btnName',
      'btnStyle'
    ],

    data(){
      return{

      }
    }
  }
</script>

<style lang="scss">
    .ui-btn{
        font-size: 16px;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        text-align: center;
        background: #D23D20;
        border-radius: 6px;
        height: 56px;
        cursor: pointer;
        padding-left: 40px;
        padding-right: 40px;
        transition: .3s;
        border: 1px solid #D23D20;


        &:focus{
            outline: none;
        }

        &:hover{
            background: #EB4B2C;
            box-shadow: 0px 8px 20px rgba(210, 61, 32, 0.3);
            border-color: #EB4B2C;
        }

        &.transparent{
            background: white;
            color: #141414;
            border-color: #141414;
            height: 46px;

            &:hover{
                background: #EB4B2C;
                box-shadow: 0px 8px 20px rgba(210, 61, 32, 0.3);
                color: #ffffff;
                border-color: #EB4B2C;
            }
        }
    }

</style>
