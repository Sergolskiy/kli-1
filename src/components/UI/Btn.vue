<template>
    <button class="ui-btn ui-btn-primary">
        {{ $t(btnName) }}
    </button>
</template>

<script>

  export default {
    name: "Btn",
    props:[
      'btnName',
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
        border: 0;
        height: 56px;
        cursor: pointer;
        padding-left: 40px;
        padding-right: 40px;
        transition: .3s;


        &:focus{
            outline: none;
        }

        &:hover{
            background: #EB4B2C;
            box-shadow: 0px 8px 20px rgba(210, 61, 32, 0.3);
        }
    }
</style>