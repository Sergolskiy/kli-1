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
              :multiple="true"
              :taggable="false"
              :close-on-select="true"
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
        <div class="ui-form-col ui-form-col--2 management__col management__col--specialization">
          <div class="ui-label-title">
            {{specialization.label}}
          </div>

          <multiselect
              v-model="specialization.value"
              :options="specialization.options"
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

          <Btn class="management__btn-i management__btn-i-specialization-mobile" :btnName="`+`"/>
        </div>
        <div class="ui-form-col ui-form-col--2 management__col">
          <Btn class="management__btn-i management__btn-i-specialization" :btnName="`+ add specialization`"/>
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
        <div class="ui-form-col ui-form-col--2 management__col">
          <div class="ui-input">
            <div class="ui-label-title">
              <label for="managementId03">
                Your e-mail
              </label>
            </div>
            <input type="text" id="managementId03" value="Random@mail.com">
          </div>
        </div>
        <div class="ui-form-col ui-form-col--2 management__col management__col--lang">
          <Btn class="management__btn-i management__btn-save" :btnName="`Add e-mail`"/>
        </div>
      </div>

      <div class="ui-form-row management__row">
        <div class="ui-form-col ui-form-col--2 management__col">
          <div class="ui-input">
            <div class="ui-label-title">
              <label for="managementId04">
                Phone
              </label>
            </div>
            <input type="text" id="managementId04" value="+12 099 750 30 30">
          </div>
        </div>
        <div class="ui-form-col ui-form-col--2 management__col management__col--lang">
          <Btn class="management__btn-i management__btn-save" :btnName="`Add phone`"/>
        </div>
      </div>


      <div class="ui-form-row management__row">
        <div class="ui-form-col ui-form-col--2 management__col">
          <div class="ui-input">
            <div class="ui-label-title">
              <label for="managementId05">
                Web site
              </label>
            </div>
            <input type="text" id="managementId05" value="website.random.com">
          </div>
        </div>
        <div class="ui-form-col ui-form-col--2 management__col management__col--lang">
          <Btn class="management__btn-i management__btn-save" :btnName="`Add web site`"/>
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
        specialization: {
          label: 'My specialization 1',
          value: '',
          placeholder: 'Choose specialization',
          options: [
            {name: '1'},
            {name: '2'},
          ]
        },


      }
    }
  }
</script>

<style lang="scss">
  @import '../../../scss/profile-management';

</style>