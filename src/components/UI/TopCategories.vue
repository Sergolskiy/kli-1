<template>
  <div class="header__nav-dropdown"


  >
    <div class="header__nav-dropdown-content">

      <template v-if="categoryMobile">
        <div class="header__nav-dropdown-column"
             v-for="(categoryItem, categoryItemIndex) in categories"
             :key="categoryItemIndex"
             v-show="categoryItemIndex < 1"
        >
          <template
              v-for="(category, categoryIndex) in categoryItem.categoryItem"
          >
            <router-link class="header__nav-dropdown-title"
                         :key="categoryIndex"
                         @click.native="hideCategody"
                         :to=" $store.getters.getUrl + category.titlePath"
            >
              {{ category.title }}
            </router-link>
            <div class="header__nav-dropdown-list" :key="'list-'+categoryIndex">
              <router-link class="header__nav-dropdown-link"
                           v-for="(categoryLink, categoryLinkIndex) in category.items"
                           :key="categoryLinkIndex"
                           :to=" $store.getters.getUrl + categoryLink.path"
                           v-on:click.native="closeElem">
                {{categoryLink.link}}
              </router-link>
            </div>
          </template>
        </div>
      </template>
      <template v-else>
        <div class="header__nav-dropdown-column"
             v-for="(categoryItem, categoryItemIndex) in categories"
             :key="categoryItemIndex"
        >
          <template
              v-for="(category, categoryIndex) in categoryItem.categoryItem"
          >
            <router-link class="header__nav-dropdown-title"
                         :key="categoryIndex"
                         @click.native="hideCategody"
                         :to=" $store.getters.getUrl + category.titlePath"
            >
              {{ category.title }}
            </router-link>
            <div class="header__nav-dropdown-list" :key="'list-'+categoryIndex">
              <router-link class="header__nav-dropdown-link"
                           v-for="(categoryLink, categoryLinkIndex) in category.items"
                           :key="categoryLinkIndex"
                           :to=" $store.getters.getUrl + categoryLink.path"
                           v-on:click.native="closeElem">
                {{categoryLink.link}}
              </router-link>
            </div>
          </template>
        </div>
      </template>
    </div>
    <div class="header__nav-dropdown-all">
      <router-link :to="$store.getters.getUrl + `categories`"
                   v-on:click.native="closeElem"
                   class="header__nav-dropdown-all-i">
        See all categories
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopCategories",

    props:[
      'categoryMobile',
    ],

    data() {
      return {

        categories: [
          {
            categoryItem: [
              {
                title: 'Category 1',
                titlePath: 'catalog',
                items: [
                  {
                    link: 'Polygraphy',
                    path: 'catalog'
                  },
                  {
                    link: 'Subcategory name',
                    path: 'catalog'
                  },
                  {
                    link: 'Subcategory',
                    path: 'catalog'
                  },
                  {
                    link: 'Select Subcategory',
                    path: 'catalog'
                  },
                  {
                    link: 'Subcategory name',
                    path: 'catalog'
                  },
                  {
                    link: 'Subcategory',
                    path: 'catalog'
                  },
                ]
              },
              {
                title: 'Category 2',
                items: [
                  {
                    link: 'Polygraphy',
                    path: 'catalog'
                  },
                  {
                    link: 'Subcategory name',
                    path: 'catalog'
                  },
                  {
                    link: 'Subcategory',
                    path: 'catalog'
                  },
                  {
                    link: 'Select Subcategory',
                    path: 'catalog'
                  },
                  {
                    link: 'Subcategory name',
                    path: 'catalog'
                  },
                  {
                    link: 'Subcategory',
                    path: 'catalog'
                  },
                ]
              },
            ]
          },

          {
            categoryItem: [
              {
                title: 'Category 3',
                items: [
                  {
                    link: 'Polygraphy',
                    path: 'catalog'
                  },
                  {
                    link: 'Subcategory name',
                    path: 'catalog'
                  },
                  {
                    link: 'Subcategory',
                    path: 'catalog'
                  },
                  {
                    link: 'Select Subcategory',
                    path: 'catalog'
                  },
                  {
                    link: 'Subcategory name',
                    path: 'catalog'
                  },
                  {
                    link: 'Subcategory',
                    path: 'catalog'
                  },
                ]
              },
              {
                title: 'Category 4',
                items: [
                  {
                    link: 'Polygraphy',
                    path: 'catalog'
                  },
                  {
                    link: 'Subcategory name',
                    path: 'catalog'
                  },
                ]
              },
            ]
          },

          {
            categoryItem: [
              {
                title: 'Category 5',
                items: [
                  {
                    link: 'Polygraphy',
                    path: 'catalog'
                  },
                  {
                    link: 'Subcategory name',
                    path: 'catalog'
                  },
                  {
                    link: 'Subcategory',
                    path: 'catalog'
                  },
                  {
                    link: 'Select Subcategory',
                    path: 'catalog'
                  },
                  {
                    link: 'Subcategory name',
                    path: 'catalog'
                  },
                  {
                    link: 'Subcategory',
                    path: 'catalog'
                  },
                ]
              },
              {
                title: 'Category 6',
                items: [
                  {
                    link: 'Polygraphy',
                    path: 'catalog'
                  },
                  {
                    link: 'Subcategory name',
                    path: 'catalog'
                  },
                ]
              },
            ]
          },

          {
            categoryItem: [
              {
                title: 'Category 7',
                items: [
                  {
                    link: 'Polygraphy',
                    path: 'catalog'
                  },
                  {
                    link: 'Subcategory name',
                    path: 'catalog'
                  },
                  {
                    link: 'Subcategory',
                    path: 'catalog'
                  },
                  {
                    link: 'Select Subcategory',
                    path: 'catalog'
                  },
                  {
                    link: 'Subcategory name',
                    path: 'catalog'
                  },
                  {
                    link: 'Subcategory',
                    path: 'catalog'
                  },
                ]
              },
              {
                title: 'Category 8',
                items: [
                  {
                    link: 'Polygraphy',
                    path: 'catalog'
                  },
                  {
                    link: 'Subcategory name',
                    path: 'catalog'
                  },
                ]
              },
            ]
          },
        ],
      }
    },

    methods: {
      closeElem() {

        this.$emit('hideCategody')

        // this.$emit('hideCategody')
      },
    }
  }
</script>

<style lang="scss">

</style>