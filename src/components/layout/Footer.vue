<template>
  <footer class="footer">
    <div class="footer__inner site-container">
      <div class="footer__body">
        <div class="footer__logo">
          <Kli1LogoFooter/>
        </div>
        <div class="footer__list">
          <div class="footer__list-col"
               v-for="(link, index) in links"
               :key="index"
          >
            <a href="#"
               class="footer__link"
               v-for="(linkItem, index) in link"
               :key="index"
            >
              <span>></span>
              {{ $t( linkItem.name ) }}
            </a>
          </div>
          <!--<div class="footer__list-col">-->
            <!--<a href="#" class="footer__link">-->
              <!--<span>></span> {{ $t("message.footerLink01") }}-->
            <!--</a>-->
            <!--<a href="#" class="footer__link">-->
              <!--<span>></span> {{ $t("message.footerLink02") }}-->
            <!--</a>-->
            <!--<a href="#" class="footer__link">-->
              <!--<span>></span> {{ $t("message.footerLink03") }}-->
            <!--</a>-->
          <!--</div>-->
          <!--<div class="footer__list-col">-->
            <!--<a href="#" class="footer__link">-->
              <!--<span>></span> {{ $t("message.footerLink04") }}-->
            <!--</a>-->
            <!--<a href="#" class="footer__link">-->
              <!--<span>></span> {{ $t("message.footerLink05") }}-->
            <!--</a>-->
            <!--<a href="#" class="footer__link">-->
              <!--<span>></span> {{ $t("message.footerLink06") }}-->
            <!--</a>-->
          <!--</div>-->
          <!--<div class="footer__list-col">-->
            <!--<a href="#" class="footer__link">-->
              <!--<span>></span> {{ $t("message.footerLink07") }}-->
            <!--</a>-->
            <!--<a href="#" class="footer__link">-->
              <!--<span>></span> {{ $t("message.footerLink08") }}-->
            <!--</a>-->
            <!--<a href="#" class="footer__link">-->
              <!--<span>></span> {{ $t("message.footerLink09") }}-->
            <!--</a>-->
          <!--</div>-->
          <!--<div class="footer__list-col">-->
            <!--<a href="#" class="footer__link">-->
              <!--<span>></span> {{ $t("message.footerLink10") }}-->
            <!--</a>-->
            <!--<a href="#" class="footer__link">-->
              <!--<span>></span> {{ $t("message.footerLink11") }}-->
            <!--</a>-->
          <!--</div>-->
        </div>
        <div class="footer__social">
          <div class="footer__social-title">
            {{ $t("message.weAreInSocial") }}
          </div>
          <div class="footer__social-list">
            <a href="#" class="footer__social-link">
              <FbIco/>
            </a>
            <a href="#" class="footer__social-link">
              <InIco/>
            </a>
            <a href="#" class="footer__social-link">
              <InstIco/>
            </a>
            <a href="#" class="footer__social-link">
              <YoutubeIco/>
            </a>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <span class="footer__bottom-item">
          {{ $t("message.rightsReserved") }}
        </span>
        <a href="#" class="footer__bottom-item">
          {{ $t("message.privacyPolicy") }}
        </a>
        <a href="#" class="footer__bottom-item">
          {{ $t("message.termsOfUse") }}
        </a>
        <a href="#" class="footer__bottom-item">
          {{ $t("message.contactForm") }}
        </a>
      </div>
    </div>
    <div class="btn-to-top">
      <WhiteArrowUp/>
    </div>
  </footer>
</template>

<script>
  import Kli1LogoFooter from '@/assets/img/footer/kli1-logo-f.svg'
  import FbIco from '@/assets/img/footer/fb-ico.svg'
  import InIco from '@/assets/img/footer/in-ico.svg'
  import InstIco from '@/assets/img/footer/inst-ico.svg'
  import YoutubeIco from '@/assets/img/footer/youtube-ico.svg'
  import WhiteArrowUp from '@/assets/img/footer/white-arrow-up.svg'

  export default {
    name: "Footer",
    components: {
      Kli1LogoFooter,
      FbIco,
      InIco,
      InstIco,
      YoutubeIco,
      WhiteArrowUp
    },

    data(){
      return{
        links: {
          0: [
            {name: 'message.footerLink01'},
            {name: 'message.footerLink02'},
            {name: 'message.footerLink03'},
          ],
          1: [
            {name: 'message.footerLink04'},
            {name: 'message.footerLink05'},
            {name: 'message.footerLink06'},
          ],
          2: [
            {name: 'message.footerLink07'},
            {name: 'message.footerLink08'},
            {name: 'message.footerLink09'},
          ],
          3: [
            {name: 'message.footerLink10'},
            {name: 'message.footerLink11'},
          ]
        }
      }
    }
  }
</script>

<style lang="scss">
  .footer{
    position: relative;
    z-index: 2;
    background-color: #0C1A23;

    &__inner{

    }

    &__body{
      display: flex;
      padding-top: 40px;
      padding-bottom: 40px;
    }

    &__logo{

    }

    &__list{
      display: flex;
      margin: 0 -15px;
      width: 100%;
      padding-left: 150px;
      padding-right: 60px;
    }

    &__list-col{
      padding: 0 15px;
      width: 25%;
      display: flex;
      flex-direction: column;
    }

    &__link{
      color: white;
      transition: .3s;

      &:hover{
        color: #D23D20;
      }

      span{
        font-size: 16px;
        color: #D23D20;
        transform: scaleX(0.8);
        display: inline-flex;
        line-height: 32px;
      }
    }

    &__social{
      margin-left: auto;
    }

    &__social-title{
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      text-transform: uppercase;
      color: #FFFFFF;
      text-align: right;
      margin-bottom: 20px;
    }

    &__social-list{
      display: flex;
    }

    &__social-link{
      margin-right: 14px;

      &:last-child{
        margin-right: 0;
      }


      svg path{
        transition: .3s;
      }

      &:hover{
        svg path{
          fill: #D23D20;
        }
      }
    }

    &__bottom{
      padding-bottom: 30px;
    }

    &__bottom-item{
      color: white;
      text-decoration: none;
      margin-right: 15px;
      position: relative;

      &:after{
        content: '|';
        color: white;
        margin-left: 15px;
      }

      &:last-child{
        margin-right: 0;

        &:after{
          display: none;
        }
      }
    }

  }

  .btn-to-top{
    position: fixed;
    right: 113px;
    bottom: 192px;
    width: 76px;
    height: 76px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #D23D20;
    border-radius: 6px;
    cursor: pointer;

    display: none;
  }


  .rtl{
    .footer{
      &__body{
        flex-direction: row-reverse;
      }

      &__social-title{
        text-align: start;
      }

      &__social-list{
        flex-direction: row-reverse;
      }

      &__social-link{

        &:last-child{
          margin-right: 14px;
        }
      }

      &__list{
        flex-direction: row-reverse;
      }

      &__link{
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        text-align: right;

        span{
          transform: scale(-1, 1);
          margin-left: 5px;
          text-align: right;
        }
      }

      &__bottom{
        max-width: fit-content;
        margin-left: auto;
      }

      &__bottom-item{
        margin-right: 0;
        padding-left: 15px;
        text-align: right;
        display: inline-block;


        &:after{
          display: none;
        }

        &:before{
          content: '|';
          color: white;
          margin-right: 15px;
        }

        &:first-child {

          &:before {
            display: none;
          }
        }
      }
    }
  }

</style>
