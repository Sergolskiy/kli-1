<template>
  <div class="management">
    <div class="management__section">
      <div class="management__title">
        Personal information
      </div>
      <div class="management__photo">
        <div class="management__img">
          <div class="management__img-inner">
            <img
                v-bind:src="'/image/profile-photo.jpg'"
                alt="ico"
            >
          </div>
        </div>

        <div class="management__photo-setting">
          <div class="management__photo-setting-i">
            <div class="management__photo-setting-i-ico">
              <DelIco/>
            </div>
            Del photo or logo
          </div>
          <label for="managementFile01" class="management__photo-setting-i">
            <input type="file" id="managementFile01">
            <div class="management__photo-setting-i-ico">
              <UploadIco/>
            </div>
            Upload photo or logo
          </label>
        </div>
      </div>
      <div class="ui-form-row management__row">
        <div class="ui-form-col ui-form-col--2 management__col">
          <div class="ui-input">
            <div class="ui-label-title">
              <label for="managementId01">
                Your name
              </label>
            </div>
            <input type="text" id="managementId01" value="Alex">
          </div>
        </div>
        <div class="ui-form-col ui-form-col--2 management__col management__col--lang">
          <div class="management__btn-lang-wrap">
            <div class="management__btn-lang">
              <Btn class="management__btn-lang-i" :btnName="`+ русский`"/>
            </div>
            <div class="management__btn-lang">
              <Btn class="management__btn-lang-i" :btnName="`+ תיִרבִע`"/>
            </div>
          </div>
        </div>
      </div>

      <div class="ui-form-row management__row">
        <div class="ui-form-col ui-form-col--2 management__col">
          <div class="ui-input">
            <div class="ui-label-title">
              <label for="managementId02">
                Name of the company
              </label>
            </div>
            <input type="text" id="managementId02" value="Me&MyCat">
          </div>
        </div>
        <div class="ui-form-col ui-form-col--2 management__col">
          <div class="ui-label-title">
            {{workLanguage.label}}
          </div>

          <multiselect
              class="management-lang"
              v-model="workLanguage.value"
              :options="workLanguage.options"
              track-by="name"
              label="name"
              :show-labels="true"
              :select-label="``"
              :deselect-label="``"
              :selectedLabel="``"
              :searchable="false"
              :placeholder="``"
              :taggable="false"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              :preserve-search="true"
          />
        </div>
      </div>

      <div class="ui-form-row management__row">
        <div class="ui-form-col ui-form-col--2 management__col">
          <div class="ui-label-title">
            {{country.label}}
          </div>

          <multiselect
              v-model="country.value"
              :options="country.options"
              track-by="name"
              label="name"
              :show-labels="true"
              :select-label="``"
              :deselect-label="``"
              :selectedLabel="``"
              :searchable="false"
              :placeholder="`Choose your country`"
              :multiple="false"
              :taggable="false"
              :close-on-select="true"
              :clear-on-select="false"
              :preserve-search="true"
          />
        </div>
        <div class="ui-form-col ui-form-col--2 management__col">
          <div class="ui-label-title">
            {{town.label}}
          </div>

          <multiselect
              v-model="town.value"
              :options="town.options"
              track-by="name"
              label="name"
              :show-labels="true"
              :select-label="``"
              :deselect-label="``"
              :selectedLabel="``"
              :searchable="false"
              :placeholder="`Choose your Town`"
              :multiple="false"
              :taggable="false"
              :close-on-select="true"
              :clear-on-select="false"
              :preserve-search="true"
          />
        </div>
      </div>

      <div class="ui-form-row management__row">
        <div class="ui-form-col ui-form-col--2 management__col management__col--specialization"
          v-for="(item, index) in specialization"
           :key="item[index]"
        >
          <div class="ui-label-title">
            {{item.label}}
          </div>

          <multiselect
              v-model="item.value"
              :options="item.options"
              track-by="name"
              label="name"
              :show-labels="true"
              :select-label="``"
              :deselect-label="``"
              :selectedLabel="``"
              :searchable="false"
              :placeholder="`Choose your Town`"
              :multiple="false"
              :taggable="false"
              :close-on-select="true"
              :clear-on-select="false"
              :preserve-search="true"
          />

          <Btn class="management__btn-i management__btn-i-specialization-mobile"
               :btnName="`+`"
               data-btn="specializationMobBtn"
               @click.native="addSpecialization"
          />
        </div>
        <div class="ui-form-col ui-form-col--2 management__col">
          <Btn class="management__btn-i management__btn-i-specialization"
               :btnName="`+ add specialization`"
                @click.native="addSpecialization"
          />
        </div>
      </div>


      <div class="ui-form-row management__row">
        <div class="ui-form-col management__col">
          <div class="management__btn-save-wrap">
            <Btn class="management__btn-i management__btn-save" :btnName="`Save`"/>
          </div>
        </div>
      </div>
    </div>

    <div class="management__section">
      <div class="management__title">
        Security and password
      </div>

      <div class="ui-form-row management__row">
        <div class="ui-form-col ui-form-col--2 management__col"
             v-for="(item, index) in email"
             :key="index"
        >
          <div class="ui-input">
            <div class="ui-label-title">
              <label :for="`managementIdEmail` + index">
                {{item.label}}
              </label>
            </div>
            <input type="email" :id="`managementIdEmail` + index" :value="item.value">
          </div>
        </div>
        <div class="ui-form-col ui-form-col--2 management__col management__col--lang">
          <Btn class="management__btn-i management__btn-save"
               :btnName="`Add e-mail`"
               id="addEmailBtn"
               @click.native="addField"
          />
        </div>
      </div>

      <div class="ui-form-row management__row">
        <div class="ui-form-col ui-form-col--2 management__col"
             v-for="(item, index) in phone"
             :key="index"
        >
          <div class="ui-input">
            <div class="ui-label-title">
              <label :for="`managementIdPhone` + index">
                {{item.label}}
              </label>
            </div>
            <input type="text"
                   :id="`managementIdPhone` + index"
                   :value="item.value">
          </div>
        </div>
        <div class="ui-form-col ui-form-col--2 management__col management__col--lang">
          <Btn class="management__btn-i management__btn-save"
               :btnName="`Add phone`"
               id="addPhoneBtn"
               @click.native="addField"
          />
        </div>
      </div>


      <div class="ui-form-row management__row">
        <div class="ui-form-col ui-form-col--2 management__col"
             v-for="(item, index) in webSite"
             :key="index"
        >
          <div class="ui-input">
            <div class="ui-label-title">
              <label :for="`managementIdWebSite` + index">
                {{item.label}}
              </label>
            </div>
            <input type="text"
                   :id="`managementIdWebSite` + index"
                   :value="item.value">
          </div>
        </div>
        <div class="ui-form-col ui-form-col--2 management__col management__col--lang">
          <Btn class="management__btn-i management__btn-save"
               :btnName="`Add web site`"
               id="addWebSiteBtn"
               @click.native="addField"
          />
        </div>
      </div>


      <div class="ui-form-row management__row">
        <div class="ui-form-col ui-form-col--2 management__col">
          <div class="ui-input">
            <div class="ui-label-title">
              <label for="managementId06">
                Password
              </label>
            </div>
            <input type="password" id="managementId06" value="" placeholder="*************">
          </div>
        </div>
        <div class="ui-form-col ui-form-col--2 management__col management__col--lang">
          <Btn class="management__btn-i management__btn-save" :btnName="`Change password`"/>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import DelIco from '@/assets/img/ico/del-ico.svg?inline';
  import UploadIco from '@/assets/img/ico/upload-ico.svg?inline';
  import Btn from "../../UI/Btn";
  import Multiselect from 'vue-multiselect';

  export default {
    name: "ProfileManagement",
    components: {
      DelIco,
      UploadIco,
      Btn,
      Multiselect,
    },

    data(){
      return{
        workLanguage: {
          label: 'Work language',
          value: [
            {name: 'English'},
            {name: 'Русский'},
          ],
          options: [
            {name: 'English'},
            {name: 'Русский'},
            {name: 'Deutsch'},
            {name: 'Italiano'},
            {name: 'Français'},
            {name: 'עִבְרִית '},
          ]
        },

        town: {
          label: 'Town',
          value: '',
          placeholder: 'Choose your Town',
          options: [
            {name: '1'},
            {name: '2'},
          ]
        },
        country: {
          label: 'Town',
          value: '',
          placeholder: 'Choose your Town',
          options: [
            {name: '1'},
            {name: '2'},
          ]
        },
        specialization: [
          {
            label: 'My specialization 1',
            value: '',
            placeholder: 'Choose specialization',
            options: [
              {name: '1'},
              {name: '2'},
            ]
          }
        ],

        email:[
          {
            label: 'Your e-mail',
            value: 'Random@mail.com'
          }
        ],

        phone:[
          {
            label: 'Phone',
            value: '+12 099 750 30 30'
          }
        ],

        webSite:[
          {
            label: 'Web site',
            value: 'website.random.com'
          }
        ],
      }
    },

    methods: {
      addSpecialization(event){

        let newItem = {
          label: 'My specialization ' + (this.specialization.length + 1),
          value: '',
          placeholder: 'Choose specialization',
          options: [
            {name: '1'},
            {name: '2'},
          ]
        }

        if(event.target.getAttribute('data-btn') === `specializationMobBtn`){
          event.target.remove();
        }

        this.specialization.push(newItem);
      },

      addField(event){
        let fieldName = event.target.id;

        if(fieldName === 'addEmailBtn') {
          let newItem = {
            label: 'Your e-mail ' + (this.email.length + 1),
            value: ''
          };

          this.email.push(newItem);
        }

        if(fieldName === 'addPhoneBtn') {
          let newItem = {
            label: 'phone ' + (this.phone.length + 1),
            value: ''
          };

          this.phone.push(newItem);
        }

        if(fieldName === 'addWebSiteBtn') {
          let newItem = {
            label: 'Web site ' + (this.webSite.length + 1),
            value: ''
          };

          this.webSite.push(newItem);
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../scss/profile-management';

</style>