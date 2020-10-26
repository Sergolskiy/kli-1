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
  @import '../../../scss/projects';

</style>
