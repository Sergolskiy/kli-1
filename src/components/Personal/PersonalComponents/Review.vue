<template>
  <div class="review">
    <div class="review__tab">
      <div class="review__tab site-tab">
        <div class="review__tab-i site-tab__i"
             :class="{active : tabIndex == 1}"
             data-tab-index="1"
             v-on:click="changeTabHendler"
        >
          3 month
        </div>
        <div class="review__tab-i site-tab__i"
             :class="{active : tabIndex == 2}"
             data-tab-index="2"
             v-on:click="changeTabHendler"
        >
          1 year
        </div>
        <div class="review__tab-i site-tab__i"
             :class="{active : tabIndex == 2}"
             data-tab-index="3"
             v-on:click="changeTabHendler"
        >
          All
        </div>
      </div>

      <div class="review__tab-content"
           v-if="tabIndex == 1"
      >
        <div class="review__list">
          <div class="review__item">
            <div class="review__item-content">
              <div class="review__title">
                Here will be the name of the project
              </div>
              <div class="review__rate">
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
              <div class="review__txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </div>
              <div class="review__company">
                <div class="review__company-img">
                  <img
                      v-bind:src="$store.getters.getUrl + '../image/printStudio.png'"
                      alt="ico"
                  >
                </div>
                <div class="review__company-info">
                  <div class="review__company-name">
                    NameCompany
                  </div>
                  <div class="review__company-date">
                    02.03.2020
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="review__tab-content"
           v-if="tabIndex == 2"
      >
        <div class="review__list">
          <div class="review__item">
            <div class="review__item-content">
              <div class="review__title">
                Here will be the name of the project
              </div>
              <div class="review__rate">
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
              <div class="review__txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </div>
              <div class="review__company">
                <div class="review__company-img">
                  <img
                          v-bind:src="$store.getters.getUrl + '../image/printStudio.png'"
                          alt="ico"
                  >
                </div>
                <div class="review__company-info">
                  <div class="review__company-name">
                    NameCompany
                  </div>
                  <div class="review__company-date">
                    02.03.2020
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="review__item">
            <div class="review__item-content">
              <div class="review__title">
                Here will be the name of the project
              </div>
              <div class="review__rate">
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
              <div class="review__txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </div>
              <div class="review__company">
                <div class="review__company-img">
                  <img
                          v-bind:src="$store.getters.getUrl + '../image/printStudio.png'"
                          alt="ico"
                  >
                </div>
                <div class="review__company-info">
                  <div class="review__company-name">
                    NameCompany
                  </div>
                  <div class="review__company-date">
                    02.03.2020
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="review__tab-content"
           v-if="tabIndex == 3"
      >
        <div class="review__list">
          <div class="review__item">
            <div class="review__item-content">
              <div class="review__title">
                Here will be the name of the project
              </div>
              <div class="review__rate">
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
              <div class="review__txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </div>
              <div class="review__company">
                <div class="review__company-img">
                  <img
                          v-bind:src="$store.getters.getUrl + '../image/printStudio.png'"
                          alt="ico"
                  >
                </div>
                <div class="review__company-info">
                  <div class="review__company-name">
                    NameCompany
                  </div>
                  <div class="review__company-date">
                    02.03.2020
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="review__item">
            <div class="review__item-content">
              <div class="review__title">
                Here will be the name of the project
              </div>
              <div class="review__rate">
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
              <div class="review__txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </div>
              <div class="review__company">
                <div class="review__company-img">
                  <img
                          v-bind:src="$store.getters.getUrl + '../image/printStudio.png'"
                          alt="ico"
                  >
                </div>
                <div class="review__company-info">
                  <div class="review__company-name">
                    NameCompany
                  </div>
                  <div class="review__company-date">
                    02.03.2020
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="review__item">
            <div class="review__item-content">
              <div class="review__title">
                Here will be the name of the project
              </div>
              <div class="review__rate">
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
              <div class="review__txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </div>
              <div class="review__company">
                <div class="review__company-img">
                  <img
                          v-bind:src="$store.getters.getUrl + '../image/printStudio.png'"
                          alt="ico"
                  >
                </div>
                <div class="review__company-info">
                  <div class="review__company-name">
                    NameCompany
                  </div>
                  <div class="review__company-date">
                    02.03.2020
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import StarRating from 'vue-star-rating';

  export default {
    name: "Review",

    components: {
      StarRating
    },

    data() {
      return {
        tabIndex: 1,
        ratingModel: 4,
      }
    },

    methods: {
      changeTabHendler(event) {
        this.tabIndex = event.target.attributes['data-tab-index'].value;
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../scss/review';
</style>
