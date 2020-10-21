<template>
  <div class="tooltip" v-bind:class="{'tooltip--top': (position === 'top')}">
    <div class="tooltip__name">
      <Question/>
    </div>
    <div class="tooltip__txt">
      <div class="tooltip__txt-inner">
        {{content}}
      </div>
    </div>
  </div>
</template>

<script>
  import Question from '../../assets/img/ico/question.svg?inline'

  export default {
    name: "Tooltip",

    props: [
      'position',
      'content'
    ],

    components: {
      Question
    },
  }
</script>

<style scoped lang="scss">
  .tooltip{
    position: relative;
    margin-left: 10px;


    &__name{
      display: flex;
      cursor: pointer;

      svg{
        path {
          transition: 0.3s;
        }
      }

      &:hover{
        svg{
          path{
            fill: black;
          }
        }
      }
    }

    &:hover{
      .tooltip__txt{
        z-index: 100;
        opacity: 1;
        visibility: visible;
      }
    }

    &--top .tooltip__txt{
      transform: translateY(-15px);

      &:after{
        top: 13px;
        left: 0;
      }
    }

    &__txt{
      position: absolute;
      top: 50%;
      left: 100%;
      margin-left: 20px;
      transform: translateY(-50%);
      min-width: 280px;
      background: #FFFFFF;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.14);
      padding: 10px 15px;
      border-radius: 10px;
      opacity: 0;
      visibility: hidden;
      z-index: -10;
      transition: 0.3s;

      &:before{
        content: "";
        display: block;
        width: 20px;
        height: 100%;
        position: absolute;
        top: 0;
        left: -20px;
      }

      &:after{
        content: "";
        display: block;
        width: 20px;
        height: 20px;
        background: white;
        border-radius: 3px;
        transform: rotate(45deg) translateX(-50%);
        position: absolute;
        top: 50%;
        left: -3px;
      }

    }

    &__txt-inner{
      font-size: 14px;
      line-height: 24px;
      color: #525252;
      font-weight: 100;
      position: relative;
      z-index: 10;
    }
  }


</style>
