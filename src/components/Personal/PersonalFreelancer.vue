<template>
  <div class="personal-page">
    <div class="personal-top">
      <div class="personal-top__inner site-container">
        <div class="personal-top__title site-title site-title--min">
          {{ projectsPage.head.title }}
          <span class="site-subtitle-mobile">
            {{ `: ` + mobileSubTitle}}
          </span>
        </div>
        <Breadcrumb/>
      </div>
    </div>

    <div class="personal-content double-content site-container">
      <div class="personal-content__inner double-content__inner">
        <div class="double-content__aside personal-content__aside">
          <Aside :asideMenu="asideMenu" />
        </div>
        <div class="double-content__body personal-content__body">
          <div class="personal__body">
            <!--<Chat style="display: none;"/>-->
            <!--<Messages style="display: none;"/>-->
            <!--<Projects style="display: none;"/>-->
            <!--<Requests style="display: none;"/>-->

            <router-view></router-view>

          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Breadcrumb from "../layout/Breadcrumb";
  import Aside from "./PersonalComponents/Aside";
  // import Chat from "./PersonalComponents/Chat";
  // import Messages from "./PersonalComponents/Messages";
  // import Projects from "./PersonalComponents/Projects";
  // import Requests from "./PersonalComponents/Requests";
  // import Review from "./PersonalComponents/Review";

  export default {
    name: "PersonalFreelancer",
    components: {
      Breadcrumb,
      Aside,
      // Chat,
      // Messages,
      // Projects,
      // Requests,
      // Review,
    },

    data() {
      return {
        // breadcrumbs: [
        //   {path: '/personal', name: 'My profile'},
        //   {path: '', name: 'Messages'},
        // ],

        mobileSubTitle: '',

        asideMenu: [
          {
            link: '/personal-freelancer/messages',
            ico: '/image/menu/messagesIco.svg',
            icoHover: '/image/menu/messagesIcoHover.svg',
            name: 'Messages',
            count: '4'
          },
          {
            link: '/personal-freelancer/requests',
            ico: '/image/menu/requestsForExecutionIco.svg',
            icoHover: '/image/menu/requestsForExecutionIcoHover.svg',
            name: 'Requests for execution',
            count: ''
          },
          {
            link: '/personal-freelancer/projects',
            ico: '/image/menu/projectsInWorkIco.svg',
            icoHover: '/image/menu/projectsInWorkIcoHover.svg',
            name: 'Projects in work',
            count: '2'
          },
          {
            link: '/personal-freelancer/completed-projects',
            ico: '/image/menu/completedProjectsIco.svg',
            icoHover: '/image/menu/completedProjectsIcoHover.svg',
            name: 'Completed projects',
            count: ''
          },
          {
            link: '/personal-freelancer/review',
            ico: '/image/menu/reviewsIco.svg',
            icoHover: '/image/menu/reviewsIcoHover.svg',
            name: 'Reviews',
            count: ''
          },
          {
            link: '/personal-freelancer/portfolio',
            ico: '/image/menu/portfolioIco.svg',
            icoHover: '/image/menu/portfolioIcoHover.svg',
            name: 'Portfolio',
            count: ''
          },
          {
            link: '/personal-freelancer/resume',
            ico: '/image/menu/resumeIco.svg',
            icoHover: '/image/menu/resumeIcoHover.svg',
            name: 'Resume',
            count: ''
          },
          {
            link: '/personal-freelancer/management',
            ico: '/image/menu/profileManagementIco.svg',
            icoHover: '/image/menu/profileManagementIcoHover.svg',
            name: 'Profile management',
            count: ''
          },
        ],

        projectsPage: {
          head: {
            title: 'My profile',
          },
        }
      }
    },


    mounted() {
      this.mobileSubTitle = this.$route.meta.mobileSubTitle;
    },

    watch:{
      $route (){
        this.mobileSubTitle = this.$route.meta.mobileSubTitle;
      }
    },
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

  .personal__body{
    display: flex;
    flex-direction: column;
    height: 100%;
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


    .site-subtitle-mobile{
      display: inline;
    }

    .personal-top__title{
      display: inline-block;
      text-align: center;
      width: 100%;
    }
  }
</style>
