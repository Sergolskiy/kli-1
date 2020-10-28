<template>
  <div class="resume-wrap">
    <vue-editor v-model="content"></vue-editor>
  </div>
</template>

<script>
  import { VueEditor } from "vue2-editor";

  export default {
    name: "Resume",

    components: {
      VueEditor
    },

    data() {
      return {
        content: "<p>Resume text</p>"
      };
    }

  }
</script>

<style>
  .quillWrapper{
    background: #F8F8F8;
    border: 1px solid #F0F0F0;
    box-sizing: border-box;
    border-radius: 6px;
    overflow: hidden;
  }


  .ql-toolbar.ql-snow,
  .ql-container.ql-snow{
    border: 0 !important;
  }

  .ql-toolbar.ql-snow{
    background: #F5F5F5;
    border-bottom: 1px solid #F0F0F0 !important;
  }

  .resume-wrap{
    display: flex;
    height: 100%;
  }

</style>
