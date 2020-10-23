<template>
  <div class="projects">
    <div class="projects__list">

      <div class="projects__item"
           v-for="(item, index) in projectsPage.items"
           :key="item[index]"
      >
        <div class="projects__info">
          <div class="projects__img">
            <img v-bind:src=" item.img" alt="img">
          </div>
          <div class="projects__txt">
            <div class="projects__name">
              {{ item.title }}
              <span>
                        {{ item.titleNumber }}
                      </span>
            </div>
            <div class="projects__description">
              {{ item.description }}
            </div>
            <div class="projects__properties">
              <div class="projects__properties-item"
                   v-for="(property, index) in item.properties"
                   :key="property[index]"
              >
                {{property.item}}
                <sup>
                  {{ property.itemSup }}
                </sup>
              </div>
            </div>

            <div class="projects__studio">
              <div class="projects__studio-ico">
                <div class="projects__studio-ico-inner">
                  <img v-bind:src=" item.studio.img" alt="img">
                </div>
                <div class="projects__studio-count">
                  {{item.studio.count}}
                </div>
              </div>
              <div class="projects__studio-info">
                <div class="projects__studio-name">
                  {{item.studio.name}}
                </div>
                <div class="projects__studio-time">
                  <span>{{item.studio.time}}</span>
                  <span>{{item.studio.date}}</span>
                </div>
              </div>
              <div class="projects__studio-btn">
                <Btn
                  class="projects__studio-btn-i"
                  :btnName="`In workspace`"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="projects__btn">
          <button class="projects__btn-i">
                    <span class="projects__btn-ico">
                      <WarHummerIco/>
                    </span>
          </button>
          <button class="projects__btn-i">
                    <span class="projects__btn-ico">
                      <MessageCloudIco/>
                    </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Btn from "../../UI/Btn";

  import MessageCloudIco from '@/assets/img/ico/svg/message-cloud-ico.svg?inline';
  import WarHummerIco from '@/assets/img/ico/warhummer-ico.svg?inline';
  // import LoadMoreIco from '@/assets/img/ico/svg/load-more.svg?inline'

  export default {
    name: "Projects",
    components: {
      MessageCloudIco,
      WarHummerIco,
      // LoadMoreIco,
      Btn
    },

    data() {
      return {
        projectsPage: {
          head: {
            title: 'Projects',
            ico: ''
          },

          items:[
            {
              img: '/image/projects/projects-img01.jpg',
              title: 'Printing business cards',
              titleNumber: '20',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
              properties: [
                {item: '350 g/m', itemSup: '2'},
                {item: '4+4', itemSup: ''},
                {item: 'rounding', itemSup: ''}
              ],

              studio: {
                name: 'RandomStudio',
                img: '/image/RandomStudio.png',
                time: '10:12',
                date: '02.03.2020',
                count: '1'
              }
            },
            {
              img: '/image/projects/projects-img01.jpg',
              title: 'Print flyers',
              titleNumber: '17',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing ',
              properties: [
                {item: '100 g/m', itemSup: '2'},
                {item: '4+4', itemSup: ''},
                {item: '1000', itemSup: ''},
                {item: 'rounding', itemSup: ''},
                {item: '100 000', itemSup: ''},
                {item: '90 x 50', itemSup: ''}
              ],

              studio: {
                name: 'RandomStudio',
                img: '/image/RandomStudio.png',
                time: '10:12',
                date: '02.03.2020',
                count: '1'
              }
            },
            {
              img: '/image/catalog/items/catalog-item01.jpg',
              title: 'Printing business cards',
              titleNumber: '20',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
              properties: [
                {item: '350 g/m', itemSup: '2'},
                {item: '4+4', itemSup: ''},
                {item: 'rounding', itemSup: ''}
              ],

              studio: {
                name: 'RandomStudio',
                img: '/image/RandomStudio.png',
                time: '10:12',
                date: '02.03.2020',
                count: '1'
              }
            },
            {
              img: '/image/projects/projects-img01.jpg',
              title: 'Print flyers',
              titleNumber: '17',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing ',
              properties: [
                {item: '100 g/m', itemSup: '2'},
                {item: '4+4', itemSup: ''},
                {item: '1000', itemSup: ''}
              ],

              studio: {
                name: 'RandomStudio',
                img: '/image/RandomStudio.png',
                time: '10:12',
                date: '02.03.2020',
                count: '1'
              }
            },
          ]
        },

        paginationRangePage: 0
      }
    },

  }
</script>

<style lang="scss">
  /*projects block start*/

  .projects{

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

      &--load-more{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 100px;
        border-bottom: 0;
      }
    }

    &__info{
      display: flex;
      width: 100%;
    }

    &__img{
      max-width: 120px;
      width: 100%;
      height: 80px;

      img{
        width: 100%;
        height: 100%;
        overflow: hidden;
        object-fit: cover;
        border-radius: 6px;
      }
    }

    &__txt{
      padding-left: 19px;
    }

    &__name{
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      display: flex;
      color: #141414;
      margin-bottom: 10px;
      min-height: 20px;
      padding-right: 200px;

      span{
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #A4A4A4;
        padding-left: 20px;
        position: relative;
        margin-left: 15px;

        &:before{
          content: '';
          width: 14px;
          height: 14px;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          background: url("../../../assets/img/ico/hummer-ico.svg") center/contain no-repeat;
        }
      }
    }

    &__description{
      font-size: 16px;
      line-height: 24px;
      color: #525252;
      margin-bottom: 15px;
      min-height: 20px;
      padding-right: 200px;
      max-width: 420px;
      box-sizing: content-box;
    }

    &__properties{
      display: flex;
      flex-wrap: wrap;
    }

    &__properties-item{
      margin-right: 10px;
      background: #F0F0F0;
      border-radius: 6px;
      padding: 7px 15px 5px;
      font-size: 14px;
      line-height: 24px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #525252;
      white-space: nowrap;
      margin-bottom: 10px;

      &:last-child{
        margin-right: 0;
      }
    }

    &__btn{
      display: flex;
      width: 190px;
      position: absolute;
      right: 0;
      top: 0;
      justify-content: flex-end;
    }

    &__btn-i{
      display: flex;
      width: 56px;
      height: 56px;
      margin-left: 5px;
      justify-content: center;
      align-items: center;
      background: #F0F0F0;
      border-radius: 6px;
      border: 0;
      padding: 0;
      transition: .3s;

      &:first-child{
        margin-left: 0;
      }


      &:hover{
        background: #D23D20;

        svg path{
          fill: white;
        }
      }

      &--red{
        background: #D23D20;

        &:hover{
          background: #EB4B2C;
          box-shadow: 0px 8px 20px rgba(210, 61, 32, 0.3);
        }
      }
    }

    &__btn-ico{

      svg path{
        transition: .3s;
      }

      &--like{
        svg{
          margin-top: 5px;
        }
      }
    }

    &__item-more-ico{
      margin-bottom: 15px;

      svg{
        transition: 1s;
      }
    }

    &__item--load-more:hover &__item-more-ico svg{
      transform: rotate(180deg);
    }

    &__item-more-txt{
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #141414;
    }

    &__studio{
      display: flex;
      max-width: 420px;
      width: 100%;
      position: relative;
      margin-top: 20px;
    }

    &__studio-ico{
      max-width: 60px;
      width: 100%;
      height: 60px;
      border-radius: 50%;

    }
    &__studio-ico-inner{
      padding: 10px;
      background: white;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      filter: drop-shadow(0px 6px 30px rgba(0, 0, 0, 0.1));

      img{
        width: 40px;
        height: 40px;
        object-fit: contain;
        overflow: hidden;
      }
    }


    &__studio-count{
      position: absolute;
      left: -12px;
      top: -12px;
      width: 28px;
      height: 28px;
      color: white;
      background: #D23D20;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__studio-info{
      padding-left: 20px;
      padding-right: 20px;
      width: 100%;
    }

    &__studio-name{
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      color: #141414;
    }

    &__studio-time{
      font-size: 14px;
      line-height: 26px;
      letter-spacing: 0.1em;
      color: #A4A4A4;

      span:first-child{
        margin-right: 20px;
      }
    }

    &__studio-btn{
      margin-left: auto;
      max-width: 160px;
      width: 100%;
    }

    &__studio-btn-i{
      padding: 0 10px;
      width: 100%;
      display: flex;
      justify-content: center;
      height: 46px;
    }


  }

  @media (max-width: 700px){

    .projects__info{
      flex-direction: column;
    }

    .projects__img{
      margin-bottom: 20px;
    }

    .projects__txt{
      padding-left: 0;
    }

    .projects__name,
    .projects__description{
      padding-right: 0;
      max-width: 100%;
    }

    .projects__btn {
      width: 155px;
    }

    .projects__btn-i{
      width: 48px;
      height: 48px;
    }

    .projects__studio{
      flex-wrap: wrap;
    }

    .projects__studio-info{
      width: calc(100% - 60px);
    }

    .projects__studio-btn{
      margin-left: 80px;
    }

    .projects__studio-count{
      right: 0;
      left: auto;
      top: 0;
    }

  }

  /*projects block end*/

</style>
