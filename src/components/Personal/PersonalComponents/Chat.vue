<template>
  <div class="chat">
    <div class="chat__inner">
      <div class="chat__body">
        <vue-custom-scrollbar id="personalChat" class="scroll-area" :settings="settings">
          <div class="chat__main">


            <template v-for="(item, index) in chat.message">
              <div :key="index">
                <div class="chat__date"  v-if="item.data">
                  <span>{{item.data}}</span>
                </div>


                <div class="chat__item"
                     v-for="(messages, messagesIndex) in item.messages"
                     :key="messagesIndex"
                     :class="{ 'chat__received': messages.type == 'received', 'chat__sent': messages.type == 'sent'}"
                >
                  <div class="chat__message">
                    {{ messages.text }}
                  </div>
                  <div class="chat__time" >
                    {{ messages.time }}
                  </div>
                </div>
              </div>

            </template>


            <!--<div class="chat__item chat__received">-->
              <!--<div class="chat__message">-->
                <!--Excepteur sint occaecat-->
              <!--</div>-->
              <!--<div class="chat__time">-->
                <!--20:32-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="chat__item chat__sent">-->
              <!--<div class="chat__message">-->
                <!--Lorem ipsum dolor sit amet-->
              <!--</div>-->
              <!--<div class="chat__time">-->
                <!--20:32-->
              <!--</div>-->
            <!--</div>-->


          </div>
        </vue-custom-scrollbar>
      </div>
      <div class="chat__footer">
        <div class="chat__file">
          <label for="chatFile">
            <span class="chat__file-ico">
              <Clipico/>
            </span>
          </label>
          <input type="file" id="chatFile">
        </div>
        <div class="chat__input">
          <textarea placeholder="Write a message..." id="chatTextarea" v-model="messageText" v-on:keydown.enter.prevent='sentText'></textarea>
        </div>
        <div class="chat__btn">
          <div class="chat__btn-i" v-on:click="sentText" >
            <div class="chat__btn-ico">
              <AirplaneIco/>
            </div>
          </div>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
  import vueCustomScrollbar from 'vue-custom-scrollbar';
  import "vue-custom-scrollbar/dist/vueScrollbar.css";

  import AirplaneIco from '@/assets/img/ico/svg/airplane-ico.svg?inline';
  import Clipico from '@/assets/img/ico/svg/clip-ico.svg?inline';

  export default {
    name: "Chat",
    components:{
      vueCustomScrollbar,
      AirplaneIco,
      Clipico
    },

    data(){
      return {
        settings: {
          suppressScrollY: false,
          suppressScrollX: false,
          wheelPropagation: false,
        },

        messageText: '',

        chat:{
          message: [
            {
              data: 'September 12, 2020',
              messages: [
                {
                  time: '20:32',
                  type: 'received',
                  text: 'Excepteur sint occaecatdfgdf'
                },
                {
                  time: '20:32',
                  type: 'sent',
                  text: ' Lorem ipsum dolor sit amet,dfgd consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
              ]
            },

            {
              data: 'September 12, 2020',
              messages: [
                {
                  time: '20:32',
                  type: 'received',
                  text: 'Excepteur sint occaecatdfgdf'
                },
                {
                  time: '20:32',
                  type: 'sent',
                  text: ' Lorem ipsum dolor sit amet,dfgd consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
              ]
            },

            {
              messages: [
                {
                  time: '20:32',
                  type: 'received',
                  text: 'Excepteur sint occaecatdfgdf'
                },
                {
                  time: '20:32',
                  type: 'sent',
                  text: ' Lorem ipsum dolor sit amet,dfgd consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
              ]
            },
          ]
        },
      }
    },

    mounted() {
      this.scrollToEnd();
      setTimeout(() => {
        document.querySelector('.page-wrap').classList.add('footer-tablet');
      })
    },

    beforeDestroy() {
      document.querySelector('.page-wrap').classList.remove('footer-tablet')
    },

    methods:{
      scrollToEnd(){
        let container = document.querySelector("#personalChat");
        container.scrollTop = container.scrollHeight;
      },

      sentText(e){
        e.preventDefault();
        let date = new Date();
        let time = date.getHours() + ':' + date.getMinutes();

        // let dataMessage = {
        //   time: time,
        //   type: 'sent',
        //   text: textValue
        // }
        // console.log(this.messageText.length);
        if(this.messageText === '') return;

        let dataMessage = {
          messages: [
            {
              time: time,
              type: 'sent',
              text: this.messageText
            },
          ]
        };

        this.chat.message.push(dataMessage);

        this.messageText = '';

        this.scrollToEnd();

      }
    },

  }
</script>

<style lang="scss">

  .chat__body .scroll-area{
    height: 700px;
    position: relative;
    border-radius: 6px 6px 0 0;
  }

  .chat{

    &__inner{

    }

    &__body{
      display: flex;
      align-items: flex-end;
    }

    &__main{
      min-height: 699px;
      background: #F0F0F0;
      overflow: hidden;
      padding: 20px 30px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    &__date{
      display: flex;
      justify-content: center;
      margin-top: 15px;
      margin-bottom: 30px;

      span{
        background: #E6E6E6;
        border-radius: 6px;
        padding: 10px 20px;
        font-size: 14px;
        line-height: 24px;
        color: #A4A4A4;
      }
    }

    &__item{
      display: flex;
      flex-direction: column;
      padding: 20px 15px 10px;
      max-width: 80%;
      width: fit-content;
      position: relative;
      border-radius: 6px;
      margin-bottom: 10px;
      padding-right: 40px;

      &:after{
        content: '';
        position: absolute;
        width: 22px;
        height: 16px;
        background-repeat: no-repeat;
        background-size: auto;
        background-position: center;
        bottom: -2px;
      }

    }

    &__received{
      background: white;

      &:after{
        left: -11px;
        background-image: url("../../../assets/img/ico/svg/triangle-w.svg");
      }
    }

    &__sent{
      background: #E6E6E6;
      margin-left: auto;

      &:after{
        background-image: url("../../../assets/img/ico/svg/triangle-g.svg");
        right: -11px;
      }
    }

    &__message{
      font-size: 16px;
      line-height: 22px;
      color: #525252;
    }

    &__time{
      font-size: 10px;
      line-height: 24px;
      display: flex;
      align-items: center;
      text-align: right;
      color: #A4A4A4;
      margin-left: auto;
      transform: translateX(20px);
    }


    &__footer{
      display: flex;
      height: 90px;
      background: #FFFFFF;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.06);
      border: 1px solid #F0F0F0;
      border-radius: 0 0 6px 6px;
    }

    &__file{
      display: flex;
      max-width: 80px;
      width: 100%;
      height: 100%;
      align-items: center;

      input[type="file"]{
        display: none;
      }

      label{
        width: 75px;
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    &__file-ico{
      cursor: pointer;

      svg{
        width: 100%;
      }
    }

    &__input{
      width: 100%;
      display: flex;
      align-items: center;

      textarea{
        width: 100%;
        resize: none;
        max-height: 50px;
        border: none;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        padding: 10px 0;

        &::placeholder{
          color: #A4A4A4;
        }
      }
    }

    &__btn{
      max-width: 80px;
      width: 100%;
      height: 100%;
    }

    &__btn-i{
      width: 75px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      align-items: center;
    }

    &__btn-ico{
      cursor: pointer;

      svg{
        width: 100%;
      }
    }
  }

  @media (max-width: 992px){

  }
</style>
