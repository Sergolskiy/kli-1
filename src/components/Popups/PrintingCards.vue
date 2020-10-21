<template>
  <modal @close="$emit('close')" :headerType="'left'" class="printing-card-modal">
    <template slot="header">
      Printing business cards
    </template>

    <template slot="body">
      <div class="printing-card">
        <div class="printing-card__inner">
          <vue-custom-scrollbar class="printing-card__scroll" :settings="settings">
            <div class="printing-card__form">
              <div class="ui-form">

                <div class="ui-form-row">
                  <div class="ui-label-title ui-label-title--flex-align-center">
                    Paper
                    <Tooltip :position="'top'" :content="content"/>
                  </div>
                  <div class="ui-form-radio-wrap">
                    <div class="ui-form-radio ui-form-radio-list">
                      <div class="ui-form-radio-item">
                        <input type="radio" name="paper" id="radio1" class="ui-radio">
                        <label for="radio1" class="ui-radio-label">250 g/m2</label>
                      </div>
                      <div class="ui-form-radio-item">
                        <input type="radio" name="paper" id="radio2" class="ui-radio">
                        <label for="radio2" class="ui-radio-label">300 g/m2</label>
                      </div>
                      <div class="ui-form-radio-item">
                        <input type="radio" name="paper" id="radio3" class="ui-radio">
                        <label for="radio3" class="ui-radio-label">350 g/m2</label>
                      </div>
                      <div class="ui-form-radio-item">
                        <input type="radio" name="paper" id="radio4" class="ui-radio">
                        <label for="radio4" class="ui-radio-label">400 g/m2</label>
                      </div>

                    </div>
                  </div>

                </div>
                <div class="ui-form-row ui-form-row--many">
                  <div class="ui-label-title ui-label-title--flex-align-center ui-form-col">
                    Size
                  </div>
                  <div class="ui-form-col ui-form-col--2">
                    <multiselect
                            v-model="value"
                            :options="options"
                            track-by="name"
                            label="name"
                            :show-labels="true"
                            :select-label="``"
                            :deselect-label="``"
                            :selectedLabel="``"
                            :searchable="false"
                            :placeholder="`All categories`"
                            :multiple="false"
                            :taggable="false"
                            :close-on-select="true"
                            :clear-on-select="false"
                            :preserve-search="true"
                    />
                  </div>
                  <div class="ui-form-col ui-form-col--2">
                    <multiselect
                            v-model="value"
                            :options="options"
                            track-by="name"
                            label="name"
                            :show-labels="true"
                            :select-label="``"
                            :deselect-label="``"
                            :selectedLabel="``"
                            :searchable="false"
                            :placeholder="`All categories`"
                            :multiple="false"
                            :taggable="false"
                            :close-on-select="true"
                            :clear-on-select="false"
                            :preserve-search="true"
                    />
                  </div>


                </div>
                <div class="ui-form-row ui-form-row--many">
                  <div class="ui-form-col ui-form-col--4">
                    <Checkbox
                            class="filters__checkbox"
                            :label="'rounding'"
                            :checked="true"
                            :id="'filters-checkbox01'"
                    />
                  </div>
                  <div class="ui-form-col ui-form-col--4">
                    <Checkbox
                            class="filters__checkbox"
                            :label="'delivery'"
                            :checked="false"
                            :id="'filters-checkbox02'"
                    />
                  </div>
                  <div class="ui-form-col ui-form-col--4">
                    <Checkbox
                            class="filters__checkbox"
                            :label="'design'"
                            :checked="false"
                            :id="'filters-checkbox03'"
                    />
                  </div>
                  <div class="ui-form-col ui-form-col--4">
                    <Checkbox
                            class="filters__checkbox"
                            :label="'hole'"
                            :checked="false"
                            :id="'filters-checkbox04'"
                    />
                  </div>

                </div>
                <div class="ui-form-row flex-align-center">
                  <div class="ui-label-title printing-card__quantity-title">
                    Quantity:
                  </div>
                  <Quantity @change="changeQuantity"/>
                </div>

                <div class="ui-form-row">
                  <div class="ui-input">
                    <label for="input1" class="ui-label">
                      Your name
                    </label>
                    <input type="text" id="input1">
                  </div>
                </div>

                <div class="ui-form-row">
                  <div class="ui-input">
                    <label for="input2" class="ui-label">
                      Card number
                    </label>
                    <input type="text" id="input2">
                  </div>
                </div>

                <div class="ui-form-row ui-form-row--many">
                  <div class="ui-form-col ui-form-col--3">
                    <div class="ui-input">
                      <input type="text" placeholder="MM">
                    </div>
                  </div>
                  <div class="ui-form-col  ui-form-col--3">
                    <div class="ui-input">
                      <input type="text" placeholder="YY">
                    </div>
                  </div>
                  <div class="ui-form-col  ui-form-col--3">
                    <div class="ui-input">
                      <input type="text" placeholder="CVT">
                    </div>
                  </div>
                </div>


                <div class="ui-form-row">
                  <div class="ui-label-title">
                    Your comments
                  </div>
                  <div class="ui-textarea">
                    <textarea type="text" placeholder="Use this field to specify task details"></textarea>
                  </div>
                </div>

              </div>
            </div>
          </vue-custom-scrollbar>
        </div>
      </div>

    </template>

    <template slot="footer">
      <div class="ui-form-row">
        <Btn class="ui-form-btn-i"
             :btnName="`Pay`"
        />
      </div>
    </template>
  </modal>
</template>

<script>
  import Modal from './../ModalComponent/Modal.vue'
  import Btn from './../UI/Btn'
  import Multiselect from 'vue-multiselect';
  import vueCustomScrollbar from 'vue-custom-scrollbar';
  import Checkbox from '../UI/Checkbox'
  import Quantity from '../UI/Quantity'
  import Tooltip from '../UI/Tooltip'

  export default {
    name: "PrintingCards",

    components: {
      Modal,
      Btn,
      Multiselect,
      vueCustomScrollbar,
      Checkbox,
      Quantity,
      Tooltip
    },

    data() {
      return {
        settings: {
          suppressScrollY: false,
          suppressScrollX: false,
          wheelPropagation: false
        },

        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',

        value: {name: 'All categories'},
        options: [
          {name: 'All categories'},
          {name: 'Polygraphy'},
          {name: 'Event'}
        ]
      }
    },

    methods: {
      changeQuantity(count) {
        console.log(count);
      }
    }

  }
</script>

<style lang="scss">

  .printing-card-modal .modal-component__inner {
    max-width: 830px;
  }


  .printing-card {
    &__inner {
    }

    &__form{
      padding-top: 20px;
    }

    &__scroll {
      margin-right: -59px;
      padding-right: 59px;
      max-height: 600px;
      overflow: hidden;
    }

    &__quantity-title{
      margin-right: 20px;
      margin-bottom: 0 !important;
    }
  }


</style>
