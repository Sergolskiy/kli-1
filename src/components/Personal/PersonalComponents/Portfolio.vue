<template>
  <div class="portfolio">
    <div class="portfolio__section">
      <div class="portfolio__section-title">
        Add work
      </div>
      <div class="portfolio__section-content">
        <div class="portfolio__img">
          <div class="portfolio__photo">
            <div class="portfolio__photo-i">
              <img v-bind:src="$store.getters.getUrl + `/image/portfolio-img.jpg`"
                   alt="img"
              >
            </div>
            <div class="portfolio__photo-btn">
              <label for="portfolioPhotoFile">
                <input type="file" id="portfolioPhotoFile" style="display:none;">
                <Btn class="transparent portfolio__photo-btn-i" :btnName="`Select a file`"/>
              </label>
            </div>
          </div>
          <div class="portfolio__photo-del">
            <div class="portfolio__photo-del-i">
              <div class="portfolio__photo-del-ico">
                <DelIco/>
              </div>
              Del
            </div>
          </div>
        </div>

        <div class="portfolio__info">
          <div class="portfolio__info-row">
            <div class="portfolio__info-col">
              <div class="ui-input">
                <div class="ui-label-title">
                  <label for="managementId01">
                    Job title
                  </label>
                </div>
                <input type="text" id="managementId01" placeholder="Enter job title">
              </div>
            </div>

            <div class="portfolio__col">
              <div class="ui-label-title">
                {{category.label}}
              </div>

              <multiselect
                  v-model="category.value"
                  :options="category.options"
                  track-by="name"
                  label="name"
                  :show-labels="true"
                  :select-label="``"
                  :deselect-label="``"
                  :selectedLabel="``"
                  :searchable="false"
                  :placeholder="`Select Categories`"
                  :multiple="false"
                  :taggable="false"
                  :close-on-select="true"
                  :clear-on-select="false"
                  :preserve-search="true"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="portfolio__section-content portfolio__section-content--textarea">
        <div class="portfolio__textarea">
          <div class="ui-label-title">
            Work description
          </div>
          <div class="ui-textarea">
                  <textarea type="text" placeholder="Enter your job description text"
                            id="textareaId01">
                  </textarea>
          </div>
        </div>

        <div class="portfolio__btn-add">
          <Btn class="portfolio__btn-add-i" :btnName="`Add work`"/>
        </div>
      </div>
    </div>

    <div class="portfolio__section">
      <div class="portfolio__section-title">
        Portfolio
      </div>

      <div class="portfolio__list">
        <div class="portfolio__item"
             v-for="(item, index) in portfolioList"
             :key="item[index]"
        >
          <div class="portfolio__item-content">
            <div class="portfolio__item-info">
              <div class="portfolio__item-img">
                <img v-bind:src="$store.getters.getUrl + item.img"
                     alt="ico"
                >
              </div>
              <div class="portfolio__item-title">
                {{item.title}}
              </div>
              <div class="portfolio__item-txt">
                {{item.text}}
              </div>
            </div>
            <div class="portfolio__item-btn">
              <div class="portfolio__item-btn-i">
                <div class="portfolio__item-ico">
                  <DelIco/>
                </div>
                Del
              </div>
              <div class="portfolio__item-btn-i">
                <div class="portfolio__item-ico">
                  <Editico/>
                </div>
                Edit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Btn from './../../UI/Btn'
  import DelIco from '@/assets/img/ico/del-ico.svg?inline';
  import Editico from '@/assets/img/ico/edit-ico.svg?inline';
  import Multiselect from 'vue-multiselect';

  export default {
    name: "Portfolio",
    components:{
      Btn,
      DelIco,
      Editico,
      Multiselect
    },

    data(){
      return{
        category: {
          label: 'My specialization 1',
          value: '',
          placeholder: 'Choose specialization',
          options: [
            {name: '1'},
            {name: '2'},
          ]
        },

        portfolioList:[
          {
            img: '/image/portfolio-item-img.jpg',
            title: 'This will be the title of the job',
            text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
          },
          {
            img: '/image/portfolio-item-img.jpg',
            title: 'This will be the title of the job',
            text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
          },
          {
            img: '/image/portfolio-item-img.jpg',
            title: 'This will be the title of the job',
            text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
          },
          {
            img: '/image/portfolio-item-img.jpg',
            title: 'This will be the title of the job',
            text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
          },
          {
            img: '/image/portfolio-item-img.jpg',
            title: 'This will be the title of the job',
            text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
          },
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../scss/portfolio';
</style>