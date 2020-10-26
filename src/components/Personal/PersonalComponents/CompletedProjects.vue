<template>
  <div class="completed-projects">
    <div class="projects__list">

      <div class="projects__item projects__container"
           v-for="(item, index) in projectsPage.items"
           :key="item[index]"
      >

        <div class="projects__row">
          <div class="projects__col">
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

        <div class="projects__row">
          <div class="projects__col">
            <div class="projects__col-title">
              Win offers
            </div>
            <div class="projects__requests">
              <div class="requests__item">
                <div class="requests__img">
                  <img
                      v-bind:src="'/image/printStudio.png'"
                      alt="ico"
                  >
                  <div class="requests__premium">
                    Premium
                  </div>
                </div>
                <div class="requests__info">
                  <div class="requests__head">
                    <div class="requests__name">
                      PrintStudio
                    </div>
                    <div class="requests__time">
                      <span>10:12</span>
                      <span>02.03.2020</span>
                    </div>
                    <div class="requests__price requests__price--mobile">
                      <span>$75</span>
                      / 2 weeks
                    </div>
                  </div>
                  <div class="requests__txt">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                  </div>
                </div>
                <div class="requests__right">
                  <div class="requests__price">
                    <span>$75</span>
                    / 2 weeks
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="projects__col projects__col projects__rate">
            <div class="projects__col-title">
              Rate the work
            </div>
            <div class="projects__rate">
              <div class="projects__rate-stars">
                <star-rating
                    :increment="0.01"
                    :fixed-points="2"
                    :star-size="28"
                    v-model="ratingModel"
                    @click.native="changeRating"
                    :show-rating="false"
                    :inactive-color="`#F0F0F0`"
                    :active-color="`#D23D20`"
                    :star-points="[14.89450,0.86042, 18.11630,7.49853, 25.64050,8.41397, 26.98850,10.08150, 26.43970,11.05310, 20.97830,16.01190, 22.40390,23.22370, 21.17670,24.97300, 20.14330,24.81480, 13.49860,21.27390, 6.85392,24.81480, 4.75602,24.22410, 4.59334,23.22180, 6.01894,16.01190, 0.48597,10.98910, 0.41914,8.87659, 1.35672,8.41658, 1.35672,8.41397, 8.88027,7.49853, 12.10200,0.86042, 14.15130,0.14035, 14.89450,0.86042]"
                    :padding="8"
                />
              </div>
              <div class="projects__rate-txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import MessageCloudIco from '@/assets/img/ico/svg/message-cloud-ico.svg?inline';
  import WarHummerIco from '@/assets/img/ico/warhummer-ico.svg?inline';
  import StarRating from 'vue-star-rating';

  export default {
    name: "CompletedProjects",
    components: {
      MessageCloudIco,
      WarHummerIco,
      StarRating
    },

    data() {
      return {
        ratingModel: 4,
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


            },
          ]
        },

        paginationRangePage: 0
      }
    },

    methods:{
      changeRating(){
        console.log(this.ratingModel);
      }
    }

  }
</script>

<style lang="scss">
  @import '../../../scss/projects';
  @import '../../../scss/requests';

  .completed-projects{
    .requests__item{
      flex-wrap: wrap;
    }

    .requests__img{
      max-width: 60px;
      width: 100%;
    }

    .requests__info{
      width: calc(100% - 60px);
    }

    .requests__right{
      margin-left: 90px;
      margin-top: 15px;
    }

    .requests__price{
      text-align: start;
    }
  }
</style>