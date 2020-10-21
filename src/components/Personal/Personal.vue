<template>
  <div class="personal-page">
    <div class="personal-top">
      <div class="personal-top__inner site-container">
        <div class="personal-top__title site-title site-title--min">
          {{ projectsPage.head.title }}
        </div>
        <Breadcrumb
            :breadcrumbs="breadcrumbs"
        />
      </div>
    </div>

    <div class="personal-content double-content site-container">
      <div class="personal-content__inner double-content__inner">
        <div class="double-content__aside personal-content__aside">
          <Aside/>
        </div>
        <div class="double-content__body personal-content__body">
          <div class="personal__body">
            <Chat style="display: none;"/>
            <Messages style="display: none;"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
  import Breadcrumb from "../layout/Breadcrumb";
  import Aside from "./PersonalComponents/Aside";
  import Chat from "./PersonalComponents/Chat";
  import Messages from "./PersonalComponents/Messages";

  export default {
    name: "Personal",
    components: {
      Breadcrumb,
      Aside,
      Chat,
      Messages
    },

    data() {
      return {
        breadcrumbs: [
          {path: '/', name: 'Home'},
          {path: '/personal', name: 'My profile'},
          {path: '', name: 'Messages'},
        ],

        projectsPage: {
          head: {
            title: 'My profile',
          },
        }
      }
    }
  }
</script>

<style lang="scss">
  .personal-page{
    padding-top: 50px;
    padding-bottom: 150px;
  }

  .personal-top{
    margin-bottom: 45px;
  }

  .personal-content__aside {
    max-width: 477px;
  }

  .personal-content__body{
    max-width: 913px;
  }

  @media (max-width: 1400px){
    .personal-content__aside {
      max-width: 400px;
    }
  }

  @media (max-width: 1200px){
    .personal-content__aside {
      max-width: 320px;
    }

    .personal-content__body{
      max-width: 100%;
    }
  }

  @media (max-width: 1200px){
    .personal-content__aside {
      max-width: 320px;
    }

    .personal-content__body{
      max-width: 100%;
    }
  }

  @media (max-width: 992px){
    .personal-content__aside {
      display: none;
    }
  }
</style>
