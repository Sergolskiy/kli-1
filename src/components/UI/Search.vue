<template>
  <form action="#">
    <div class="ui-search">
      <div class="ui-search-body">
        <div class="ui-search-content">
          <input type="text" class="ui-search-input" :placeholder=$t(searchPlaseholder)>
          <button class="ui-search-btn">
            <SearchIco/>
          </button>
        </div>
      </div>
      <!--<div class="ui-search-result">-->
        <!--<div class="ui-search-result-item">-->
          <!--Web dev-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </form>
</template>

<script>
  import SearchIco from '@/assets/img/ico/search-ico.svg?inline';

  export default {
    name: "Search",
    components :{
      SearchIco
    },
    props:[
      'searchPlaseholder',
    ],
  }
</script>

<style lang="scss">

  .ui-search{

  }

  .ui-search-body{

  }

  .ui-search-content{
    display: flex;
    /*width: 939px;*/
    box-shadow: 0px 0px 0px 12px rgba(0, 0, 0, 0.14);
    border-radius: 6px;
  }

  .ui-search-input{
    height: 76px;
    background: white;
    width: 100%;
    border-radius: 6px 0 0 6px;
    padding: 0 29px;
    border: 2px solid transparent;
    transition: .3s;
    font-size: 20px;
    line-height: 24px;

    &:focus{
      border-color: #D23D20;
    }
  }

  .ui-search-btn{
    width: 100px;
    height: 76px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #D23D20;
    border-radius: 0px 6px 6px 0px;
    border: 0;

    svg path{
      width: 27px;
      height: 30px;
    }
  }

  .ui-search-result{

  }

  .ui-search-result-item{

  }

  .rtl{

    .ui-search-input{
      text-align: right;
      border-radius: 0 6px 6px 0;
    }

    .ui-search-content{
      flex-direction: row-reverse;
    }

    .ui-search-btn{
      border-radius: 6px 0 0 6px;
    }
  }


  @media(max-width: 1240px){
    .ui-search-btn{
      height: 56px;
    }

    .ui-search-input{
      height: 56px;
      font-size: 16px;
      line-height: 24px;
      padding-left: 23px;
      padding-right: 23px;
    }

    .ui-search-btn{
      width: 56px;
    }

  }

</style>
