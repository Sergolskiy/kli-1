<template>
  <modal @close="$emit('close')" :headerType="'left'" class="printing-card-modal">
    <template slot="header">
      {{popupName}}
    </template>

    <template slot="body">
      <div class="printing-card">
        <div class="printing-card__inner">
          <vue-custom-scrollbar class="printing-card__scroll" :settings="settings">
            <div class="printing-card__form">
              <div class="ui-form">

                <template v-for="(question, index) in questions" >
                  <div class="ui-form-row ui-form-row--many" :key="index">

                    <template v-for="(questionRow, questionRowIndex) in question.itemRow">

                      <div class="ui-form-col" :key="questionRowIndex" v-if="questionRow.radio">

                        <div class="ui-label-title ui-label-title--flex-align-center">
                          {{questionRow.radio.name}}
                          <Tooltip
                                  :position="questionRow.radio.tooltip.position"
                                  :content="questionRow.radio.tooltip.content"
                                  v-if="questionRow.radio.tooltip"
                          />
                        </div>
                        <div class="ui-form-radio-wrap">
                          <div class="ui-form-radio ui-form-radio-list">

                            <div class="ui-form-radio-item" v-for="(item, indexRadio) in questionRow.radio.items" :key="indexRadio">
                              <input type="radio" :name="questionRow.radio.radioName" :id="'card-radio-' + index + indexRadio" :value="item.title" class="ui-radio" :checked="questionRow.radio.active === item.title" v-model="questionRow.radio.active" >
                              <label :for="'card-radio-' + index + indexRadio" class="ui-radio-label" >{{item.title}}</label>
                            </div>

                          </div>
                        </div>

                      </div>

                    </template>

                    <template v-for="(questionRow, questionRowIndex) in question.itemRow">

                      <div :class="'ui-form-col ui-form-col--' + question.itemRow.length" :key="questionRowIndex" v-if="questionRow.select">
                        <div class="ui-label-title ui-label-title--flex-align-center">
                          {{questionRow.select.name}}
                          <Tooltip
                                  :position="questionRow.select.tooltip.position"
                                  :content="questionRow.select.tooltip.content"
                                  v-if="questionRow.select.tooltip"
                          />
                        </div>
                        <multiselect
                                v-model="questionRow.select.default"
                                :options="questionRow.select.options"
                                track-by="name"
                                label="name"
                                :show-labels="true"
                                :select-label="``"
                                :deselect-label="``"
                                :selectedLabel="``"
                                :searchable="false"
                                :placeholder="questionRow.select.placeholder"
                                :multiple="false"
                                :taggable="false"
                                :close-on-select="true"
                                :clear-on-select="false"
                                :preserve-search="true"
                        />
                      </div>


                    </template>


                    <template v-for="(questionRow, questionRowIndex) in question.itemRow">

                      <div :class="'ui-form-col ui-form-col--' + question.itemRow.length" :key="questionRowIndex" v-if="questionRow.checkbox">
                        <Checkbox
                                class="filters__checkbox"
                                :label="questionRow.checkbox.name"
                                :checked="questionRow.checkbox.checked"
                                :id="questionRow.checkbox.name + questionRowIndex"
                                v-model="questionRow.checkbox.checked"
                        />
                      </div>


                    </template>


                    <template v-for="(questionRow, questionRowIndex) in question.itemRow">

                      <div :class="'ui-form-col flex-align-center ui-form-col--' + question.itemRow.length" :key="questionRowIndex" v-if="questionRow.quantity" >
                        <div class="ui-label-title printing-card__quantity-title">
                          {{questionRow.quantity.name}}
                        </div>
                        <Quantity v-model="questionRow.quantity.count" />
                      </div>


                    </template>


                    <template v-for="(questionRow, questionRowIndex) in question.itemRow">

                      <div :class="'ui-form-col ui-form-col--' + question.itemRow.length" :key="questionRowIndex" v-if="questionRow.input" >
                        <div class="ui-input">
                          <div class="ui-label-title">
                            <label :for="questionRow.input.name + questionRowIndex">
                              {{questionRow.input.name}}
                            </label>
                          </div>
                          <input type="text" :placeholder="questionRow.input.placeholder" v-model="questionRow.input.value" :id="questionRow.input.name + questionRowIndex">
                        </div>
                      </div>


                    </template>

                    <template v-for="(questionRow, questionRowIndex) in question.itemRow">

                      <div :class="'ui-form-col ui-form-col--' + question.itemRow.length" :key="questionRowIndex" v-if="questionRow.textarea" >
                        <div class="ui-label-title">
                          {{questionRow.textarea.name}}
                        </div>
                        <div class="ui-textarea">
                          <textarea type="text" :placeholder="questionRow.textarea.placeholder" v-model="questionRow.textarea.value" :id="questionRow.textarea.name + questionRowIndex"></textarea>
                        </div>
                      </div>


                    </template>

                  </div>

                </template>



              </div>
            </div>
          </vue-custom-scrollbar>
        </div>
      </div>

    </template>

    <template slot="footer">
      <div class="ui-form-row ui-form-row--many">
        <div class="ui-form-col ui-form-col--2">
          <Btn class="ui-form-btn-i" @click.native="submit"
               :btnName="`Add to cart`"
          />
        </div>
        <div class="ui-form-col ui-form-col--2">
          <div class="printing-card__reset" @click="resetForm">
            Reset all
          </div>
        </div>
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
        ],

        popupName: 'Printing business cards',

        questions: [

          {
            itemRow: [
              {
                radio: {
                  name: 'Paper',
                  tooltip: {
                    position: 'top',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
                  },
                  active: '350 g/m2',
                  radioName: 'radio1',
                  items: [
                    {
                      title: '250 g/m2',
                    },
                    {
                      title: '300 g/m2',
                    },
                    {
                      title: '350 g/m2',
                    },
                    {
                      title: '400 g/m2',
                    },
                  ]
                }
              },
            ],
          },

          {
            itemRow: [
              {
                radio: {
                  name: 'Printing',
                  radioName: 'radio2',
                  active: '4+4',
                  tooltip: {
                    position: 'center',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
                  },
                  items: [
                    {
                      title: '4+4',
                    },
                    {
                      title: '4+0',
                    },
                    {
                      title: '1+1',
                    },
                    {
                      title: '1+0',
                    },
                  ]
                }
              },
            ],
          },

          {
            itemRow: [
              {
                select: {
                  name: 'Size',
                  selectName: 'select1',
                  default: {name: 'Standard 90 x 50 mm',},
                  placeholder: 'Size',
                  options: [
                    {name: 'Standard 90 x 50 mm'},
                    {name: 'Polygraphy'},
                    {name: 'Event'}
                  ],
                }
              },
              {
                select: {
                  name: 'Covering layer',
                  selectName: 'select2',
                  default: {name: 'Varnish',},
                  placeholder: 'Covering layer',
                  options: [
                    {name: 'Varnish'},
                    {name: 'Polygraphy'},
                    {name: 'Event'}
                  ],
                }
              },
            ]
          },

          {
            itemRow: [
              {
                checkbox: {
                  name: 'rounding',
                  checkboxName: 'rounding',
                  checked: true,
                },
              },
              {
                checkbox: {
                  name: 'delivery',
                  checkboxName: 'delivery',
                  checked: false,
                },
              },
              {
                checkbox: {
                  name: 'design',
                  checkboxName: 'design',
                  checked: false,
                },
              },
              {
                checkbox: {
                  name: 'hole',
                  checkboxName: 'hole',
                  checked: false,
                },
              },
            ],
          },

          {
            itemRow: [
              {
                quantity: {
                  name: 'Quantity:',
                  count: 10,
                }
              }
            ],
          },

          {
            itemRow: [
              {
                input: {
                  name: 'Name',
                  placeholder: 'Name',
                  value: '',
                }
              }
            ]
          },

          {
            itemRow: [
              {
                textarea: {
                  name: 'Textarea',
                  placeholder: 'Use this field to specify task details',
                  value: '',
                }
              }
            ]
          },
        ],

        questionsStart: [

          {
            itemRow: [
              {
                radio: {
                  name: 'Paper',
                  tooltip: {
                    position: 'top',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
                  },
                  active: '350 g/m2',
                  radioName: 'radio1',
                  items: [
                    {
                      title: '250 g/m2',
                    },
                    {
                      title: '300 g/m2',
                    },
                    {
                      title: '350 g/m2',
                    },
                    {
                      title: '400 g/m2',
                    },
                  ]
                }
              },
            ],
          },

          {
            itemRow: [
              {
                radio: {
                  name: 'Printing',
                  radioName: 'radio2',
                  active: '4+4',
                  tooltip: {
                    position: 'center',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
                  },
                  items: [
                    {
                      title: '4+4',
                    },
                    {
                      title: '4+0',
                    },
                    {
                      title: '1+1',
                    },
                    {
                      title: '1+0',
                    },
                  ]
                }
              },
            ],
          },

          {
            itemRow: [
              {
                select: {
                  name: 'Size',
                  selectName: 'select1',
                  default: {name: 'Standard 90 x 50 mm',},
                  placeholder: 'Size',
                  options: [
                    {name: 'Standard 90 x 50 mm'},
                    {name: 'Polygraphy'},
                    {name: 'Event'}
                  ],
                }
              },
              {
                select: {
                  name: 'Covering layer',
                  selectName: 'select2',
                  default: {name: 'Varnish',},
                  placeholder: 'Covering layer',
                  options: [
                    {name: 'Varnish'},
                    {name: 'Polygraphy'},
                    {name: 'Event'}
                  ],
                }
              },
            ]
          },

          {
            itemRow: [
              {
                checkbox: {
                  name: 'rounding',
                  checkboxName: 'rounding',
                  checked: true,
                },
              },
              {
                checkbox: {
                  name: 'delivery',
                  checkboxName: 'delivery',
                  checked: false,
                },
              },
              {
                checkbox: {
                  name: 'design',
                  checkboxName: 'design',
                  checked: false,
                },
              },
              {
                checkbox: {
                  name: 'hole',
                  checkboxName: 'hole',
                  checked: false,
                },
              },
            ],
          },

          {
            itemRow: [
              {
                quantity: {
                  name: 'Quantity',
                  count: 10,
                }
              }
            ],
          },

          {
            itemRow: [
              {
                input: {
                  name: 'Name',
                  placeholder: 'Name',
                  value: '',
                }
              }
            ]
          },

          {
            itemRow: [
              {
                textarea: {
                  name: 'Textarea',
                  placeholder: 'Use this field to specify task details',
                  value: '',
                }
              }
            ]
          },
        ]
      }
    },



    methods: {

      resetForm() {
        this.questions = JSON.parse(JSON.stringify(this.questionsStart));
      },

      submit() {
        // console.log(this.questions);

        let toCart = [];

        this.questions.map(item => {
          item.itemRow.map(itemRow => {

            if(Object.prototype.hasOwnProperty.call(itemRow, 'radio')){

              let cartItem ={
                name: itemRow.radio.name,
                value: itemRow.radio.active
              };
              toCart.push(cartItem);
            }

            if(Object.prototype.hasOwnProperty.call(itemRow, 'select')){
              let cartItem ={
                name: itemRow.select.name,
                value: itemRow.select.default.name
              };
              toCart.push(cartItem);
            }

            if(Object.prototype.hasOwnProperty.call(itemRow, 'checkbox')){

              if(itemRow.checked === true){
                let cartItem ={
                  name: itemRow.checkbox.name,
                };
                toCart.push(cartItem);
              }
            }

            if(Object.prototype.hasOwnProperty.call(itemRow, 'quantity')){

              let cartItem ={
                name: itemRow.quantity.name,
                value: itemRow.quantity.count
              };
              toCart.push(cartItem);
            }
          })
        })

        // console.log(toCart);

        let cartItem = {
          name: this.popupName,
          items: toCart
        }

        this.$store.dispatch('addProduct', cartItem);
        console.log(this.$store.getters.getCart);
      }
    }

  }
</script>

<style lang="scss">

  .printing-card-modal {
    .modal-component__inner {
      max-width: 830px;
    }

    .modal-component__content{
      padding-bottom: 0;
    }

    .modal-component__footer{
      margin: 0 -59px;
      padding: 0 59px;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

      .ui-form-col{
        margin-bottom: 0;
      }

      .ui-form-row{
        padding: 40px 0;
        align-items: center;
      }

      .ui-form-btn-i{
        margin-top: 0;
      }
    }
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

    &__reset{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 16px;
      line-height: 24px;
      text-decoration-line: underline;
      color: #525252;
      cursor: pointer;
    }
  }


</style>
