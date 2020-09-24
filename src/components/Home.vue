<template>
  <div class="home">
      <div class="home-top">
          <div class="home-top__bg">
              <Background/>
          </div>
          <div class="home-top__container site-container">
              <div class="home-top__body">
                  <div class="home-top__txt">
                      <div class="home-top__caption">
                          Company tagline may be here
                      </div>
                      <div class="home-top__title">
                          Here may be a headline,<br>
                          the main offer of the company<br>
                          or a descriptor
                      </div>
                  </div>
                  <div class="home-top__img">
                      <HomeMan/>
                  </div>
              </div>
              <div class="home-top__bottom">
                  <div class="home-top__btn">
                      <Btn class="home-top__btn-i"
                           :btnName="btnName.publishsProject"
                      />
                  </div>
              </div>
          </div>
      </div>
     <div class="top-categories">
         <div class="top-categories__inner">
             <div class="top-categories__title site-title">
                 Top categories
             </div>
         </div>
     </div>
  </div>
</template>

<script>
  import Background from '../assets/img/background.svg'
  import HomeMan from '../assets/img/home-man.svg'
  import Btn from "./UI/Btn";

  export default {
    name: "Home",
    components: {
      Background,
      HomeMan,
      Btn
    },

    data: function () {
      return {
        btnName: {
          'publishsProject' : "message.publishsProject"
        },
      }
    },
  }
</script>

<style lang="scss">
    .home{
        margin-top: -157px;
    }

    .home-top{
        height: 860px;
        position: relative;
        padding-top: 260px;

        &__bg{
            position: absolute;
            right: 0;
            top: 0;
        }

        &__container{
            position: relative;
            z-index: 2;
        }

        &__body{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__txt{

        }

        &__caption{
            font-size: 24px;
            line-height: 28px;
            color: #525252;
            margin-bottom: 10px;
        }

        &__title{
            font-size: 46px;
            line-height: 70px;
            color: #141414;
            font-weight: bold;
        }

        &__img{
            margin-right: -100px;
        }

        &__bottom{

        }

        &__btn{

        }

        &__btn-i{

        }

    }


</style>
