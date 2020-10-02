<template>
  <div class="breadcrumbs">
    <div class="breadcrumbs__inner">
      <router-link class="breadcrumbs__item"
            v-for="(item, index) in breadcrumbs"
            :key="item[index]"
            :to="$store.getters.getUrl + item.path"
      >
        {{ item.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Breadcrumb",

    props:[
      'breadcrumbs'
    ],

    data(){
      return{

      }
    },
  }
</script>

<style lang="scss">
  .breadcrumbs{

    &__inner{
      display: flex;
      justify-content: center;
      padding-top: 15px;
      padding-bottom: 15px;
    }

    &__item{
      font-size: 16px;
      line-height: 19px;
      color: #141414;
      position: relative;
      margin-right: 9px;
      padding-right: 9px;
      cursor: pointer;

      &:after{
        content: '>';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%) translateX(50%);
      }


      &:last-child{
        color: #A4A4A4;
        pointer-events: none;
        padding-right: 0;
        margin-right: 0;
        cursor: auto;

        &:after{
          display: none;
        }
      }
    }

  }

</style>