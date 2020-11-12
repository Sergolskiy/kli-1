<template>
  <div class="requests">
    <div class="projects__list">
      <div class="projects__item"
           v-for="(item, index) in items"
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
          </div>
        </div>
        <div class="projects__btn projects__btn--customer">
          <span class="projects__btn--customer-count" v-if="item.count">
            {{ item.count }}
          </span>

          <router-link :to="`/rates/customer`" class="projects__btn--customer-btn">
            <Btn
                :btnName="'Details'"
                :class="'transparent'"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Btn from "../../UI/Btn";

  export default {
    name: "RequestsCustomer",
    components: {
      Btn
    },

    data(){
      return {
        items:[
          {
            img: '/image/projects/projects-img01.jpg',
            title: 'Printing business cards',
            titleNumber: '20',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            count: 1,
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
            count: '',
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
            count: 4,
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
            count: 5,
            properties: [
              {item: '100 g/m', itemSup: '2'},
              {item: '4+4', itemSup: ''},
              {item: '1000', itemSup: ''}
            ],

          },
        ]
      }
    },
  }
</script>

<style lang="scss">
  @import '../../../scss/requests';
  @import '../../../scss/projects';
</style>
