<template>
  <div class="messages">
    <div class="messages__list">
      <router-link
              v-for="(message, index) in messages"
              :key="index"
              :to="'/personal-customer/chat'"
              class="messages__item"
              v-bind:class="{'messages__item--inactive': message.read}"
      >
        <div class="messages__img">
          <img
              v-bind:src="message.img"
              alt="ico"
          >
          <!--<div class="messages__premium">-->
            <!--Premium-->
          <!--</div>-->
        </div>
        <div class="messages__info">
          <div class="messages__head">
            <div class="messages__name">
              message.name
            </div>
            <div class="messages__time">
              <span>message.time</span>
              <span>message.date</span>
            </div>
          </div>
          <div class="messages__txt">
            {{message.desc}}
          </div>
        </div>
        <div class="messages__count">
          <div class="messages__count-i " v-bind:class="{active: !message.read}">
            {{message.count}}
          </div>
        </div>
      </router-link>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Messages",

    data(){
      return {
        tabIndex: 1,

        breadcrumbs: [
          { path: 'projects', name: 'Projects'},
          { path: '', name: 'Printing business cards'},
        ],

        messages: [
          {
            id: 1,
            img: '/image/customer-rates-ico.jpg',
            name: 'David_33',
            date: '02.03.2020',
            time: '10:12',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            count: '2',
            read: false,
          },
          {
            id: 2,
            img: '/image/customer-rates-ico.jpg',
            name: 'David_33',
            date: '02.03.2020',
            time: '10:12',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            count: '2',
            read: false,
          },
          {
            id: 2,
            img: '/image/customer-rates-ico.jpg',
            name: 'David_33',
            date: '02.03.2020',
            time: '10:12',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            count: '2',
            read: true,
          },
        ],
      }
    },

  }
</script>

<style lang="scss">
  .messages{

    &__list{
      display: flex;
      flex-direction: column;
    }

    &__item{
      display: flex;
      padding-bottom: 30px;
      margin-bottom: 30px;
      border-bottom: 1px solid #F0F0F0;
      position: relative;
    }

    &__item--inactive &__txt{
      color: #A4A4A4;
    }

    &__img{
      max-width: 60px;
      width: 100%;
      height: 60px;
      position: relative;

      img{
        border-radius: 50%;
        overflow: hidden;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__premium{
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      padding: 4px 12px;
      background: #D23D20;
      border-radius: 6px;
      font-size: 9px;
      line-height: 11px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #FFFFFF;
    }

    &__info{
      padding-left: 30px;
      padding-right: 30px;
      max-width: 610px;
    }

    &__head{
      display: flex;
    }

    &__name{
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      color: #141414;
      margin-right: 15px;
    }

    &__time {
      display: flex;
      margin: 0 -11px;

      span{
        font-size: 14px;
        line-height: 26px;
        letter-spacing: 0.1em;
        color: #A4A4A4;
        padding: 0 11px;
      }
    }

    &__txt{
      font-size: 16px;
      line-height: 24px;
      color: #525252;
    }

    &__count{
      position: absolute;
      right: 0;
      top: 0;
      width: 36px;
      height: 36px;
    }

    &__count-i{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 0;
      border-radius: 50%;
      color: #525252;
      background: #F0F0F0;

      &.active{
        color: #ffffff;
        background: #D23D20;
      }
    }

  }

  @media (max-width: 568px){

    .messages__item{
      flex-direction: column;
    }

    .messages__price{
      display: none;
    }

    .messages__price--mobile{
      display: flex;
      align-items: baseline;
    }

    .messages__img{
      position: absolute;
      left: 0;
      top: 0;
    }

    .messages__info{
      padding-left: 0;
      padding-right: 0;
      max-width: 100%;
      margin-bottom: 19px;
    }

    .messages__head{
      padding-left: 80px;
      flex-direction: column;
      min-height: 90px ;
    }

    .messages__item--comment .messages__head{
      justify-content: center;
    }

    .messages__name{
      margin-right: 0;
      margin-bottom: 5px;
    }

    .messages__time{
      margin-bottom: 5px;
    }

    .messages__right{
      max-width: 100%;
      margin-left: 0;
    }

  }
</style>
