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
  import Kli1LogoFooter from '@/assets/img/footer/kli1-logo-f.svg?inline'
  import FbIco from '@/assets/img/footer/fb-ico.svg?inline'
  import InIco from '@/assets/img/footer/in-ico.svg?inline'
  import InstIco from '@/assets/img/footer/inst-ico.svg?inline'
  import YoutubeIco from '@/assets/img/footer/youtube-ico.svg?inline'
  import WhiteArrowUp from '@/assets/img/footer/white-arrow-up.svg?inline'

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

  @media(max-width: 1400px){
    .footer__list{
      padding-left: 50px;
      padding-right: 30px;
    }
  }

  @media(max-width: 992px){
    .footer__inner{
      padding-left: 30px;
      padding-right: 30px;
    }

    .footer__list{
      flex-wrap: wrap;
    }

    .footer__list-col{
      width: 50%;
      margin-bottom: 20px;
    }

    .footer__social-title{
      text-align: start;
    }

    .footer__bottom{
      display: flex;
    }

    span.footer__bottom-item{
      &:after{
        display: none;
      }
      &:before{
        display: none;
      }
    }

    a.footer__bottom-item{
      margin-left: auto;
      white-space: nowrap;
    }
  }
  @media(max-width: 700px){
    .footer__body{
      flex-wrap: wrap;
    }

    .footer__list{
      width: 100%;
      padding: 0;
      order: 3;
    }

    .footer__logo{
      order: 1;
      width: 50%;
      margin-bottom: 20px;
    }

    .footer__social{
      order: 2;
      margin-left: 0;
      width: 50%;
    }

    .footer__bottom{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    a.footer__bottom-item {
      margin-left: 0;
      margin-bottom: 15px;
      padding-left: 4px;
      padding-right: 4px;
      margin-right: 0;
      margin-left: 0;
      font-size: 14px;

      &:after{
        margin-left: 4px;
      }

      &:before{
        margin-right: 4px;
      }
    }

    span.footer__bottom-item{
      width: 100%;
      order: 2;
      text-align: center;
      font-size: 14px;
    }

    .rtl .footer__social-list {
      justify-content: flex-end;
    }

  }


  @media(max-width: 400px){
    .footer__logo{
      width: 30%;
    }
    .footer__social{
      width: 70%;
    }
  }

</style>
