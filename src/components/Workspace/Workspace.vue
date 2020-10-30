<template>
  <div class="workspace">
    <div class="workspace-top">
      <div class="workspace-top__inner site-container">
        <div class="workspace-top__title site-title site-title--min">
          {{ workspace.head.title }}
        </div>
        <Breadcrumb/>
      </div>
    </div>

    <div class="workspace-content double-content site-container">
      <div class="workspace-content__inner double-content__inner">
        <div class="double-content__aside workspace-content__aside">

          <div class="workspace-aside-mobile">
            <div class="projects-aside__item"
                 v-for="(project, index) in customerProjects.projects" :key="index">
              <div class="projects-aside__img">
                <img v-bind:src="$store.getters.getUrl + project.img"
                     alt="ico"
                >
              </div>
              <div class="projects-aside__info">
                <div class="projects-aside__title">
                  {{project.name}}
                </div>
                <div class="projects-aside__user">
                  <div class="projects-aside__user-ico">
                    <img v-bind:src="$store.getters.getUrl + customerProjects.customerIco"
                         alt="ico"
                    >
                  </div>
                  {{customerProjects.customerName}}
                </div>
              </div>
            </div>

            <div class="workspace-aside-mobile__btn">
              <Btn
                class="workspace-aside-mobile__btn-i transparent"
                :btnName="`More details`"
              />
              <Btn
                class="workspace-aside-mobile__btn-i"
                :btnName="`Completion`"
                @click.native="showAsideHendler"
              />
            </div>
          </div>

          <div class="workspace-aside" :class="{ 'show' : showAside == true}">

            <div class="workspace-aside-close" @click="hideAsideHendler"></div>

            <div class="workspace-aside__title-table">
              More details
            </div>

            <div class="projects-aside">

              <div class="projects-aside__list">
                <div class="projects-aside__item" v-for="(project, index) in customerProjects.projects" :key="index">
                  <div class="projects-aside__img">
                    <img v-bind:src="$store.getters.getUrl + project.img"
                         alt="ico"
                    >
                  </div>
                  <div class="projects-aside__info">
                    <div class="projects-aside__title">
                      {{project.name}}

                      <span>
                        {{project.count}}
                      </span>
                    </div>
                    <div class="projects-aside__user">
                      <div class="projects-aside__user-ico">
                        <img v-bind:src="$store.getters.getUrl + customerProjects.customerIco"
                             alt="ico"
                        >
                      </div>

                      {{customerProjects.customerName}}
                    </div>
                    <div class="projects-aside__description">
                      {{project.desc}}
                    </div>
                    <div class="projects-aside__properties">
                      <div class="projects-aside__property"
                           v-for="(property, indexProperty) in project.properties"
                           :key="indexProperty">
                        {{property.item}}<sup>{{property.itemSup}}</sup>
                      </div>
                    </div>
                    <router-link :to=project.link class="projects-aside__more">
                      + more info...
                    </router-link>
                  </div>
                </div>
              </div>

            </div>


            <div class="requests-aside">
              <div class="requests__title">
                Win offers
              </div>
              <div class="requests__item">
                <div class="requests__img">
                  <img
                      v-bind:src="'/image/printStudio.png'"
                      alt="ico"
                  >
                  <div class="requests__premium">
                    Premium
                  </div>
                </div>
                <div class="requests__info">
                  <div class="requests__head">
                    <div class="requests__name">
                      PrintStudio
                    </div>
                    <div class="requests__time">
                      <span>10:12</span>
                      <span>02.03.2020</span>
                    </div>
                    <div class="requests__price requests__price--mobile">
                      <span>$75</span>
                      / 2 weeks
                    </div>
                    <div class="requests__deposit-btn--mobile workspace__deposit-btn">
                      30% deposit paid
                    </div>
                  </div>
                  <div class="requests__txt">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                  </div>
                </div>
                <div class="requests__right">
                  <div class="requests__price">
                    <span>$75</span>
                    / 2 weeks
                  </div>

                  <div class="requests__deposit-btn workspace__deposit-btn">
                    30% deposit paid
                  </div>
                </div>
              </div>
            </div>

            <div class="workspace-progressbar">
              <step-progress :steps="steps"
                             :current-step="currentStep"
                             icon-class="progressbar-check"
                             :active-thickness="8"
                             :passive-thickness="8"
                             :line-thickness="8"
                             :active-color="`#EB4B2C`"
                             :passive-color="'#DEDEDE'"
              ></step-progress>
            </div>

            <div class="workspace-aside__btn">
              <Btn class="workspace-aside__btn-i"
                   :btnName="`Next stage`"
                   @click.native="nextStepHendler"
              />

              <Btn class="workspace-aside__btn-i transparent"
                   :btnName="`Arbitrage`"
              />
            </div>

          </div>

        </div>
        <div class="double-content__body workspace-content__body">

          <div class="workspace__body">

            <!--<Chat/>-->

            <Review/>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from "../layout/Breadcrumb";
  import Btn from "./../UI/Btn";
  import StepProgress from 'vue-step-progress';
  // import Chat from './../Personal/PersonalComponents/Chat.vue';
  import Review from './../Workspace/WorkspaceComponents/Review.vue';

  export default {
    name: "Workspace",
    components: {
      Breadcrumb,
      Btn,
      'step-progress': StepProgress,
      // Chat,
      Review
    },

    data(){
      return{
        workspace: {
          head: {
            title: 'My profile',
          },
        },

        customerProjects: {
          customerIco: '/image/ico/user-ico.svg',
          customerName: 'NickCustomer',
          typeProjects: 'Polygraphy',
          projects: [
            {
              id: 1,
              link: '/sdfsd',
              img: '/image/projects/projects-img01.jpg',
              name: 'Printing business cards',
              count: '20',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
              properties: [
                {item: '350 g/m', itemSup: '2'},
              ]
            }
          ]
        },

        currentStep: 0,
        steps: ['Prepayment', 'Working', 'Acceptance', 'Delivery'],
        showAside: false,
      }
    },

    methods:{
      nextStepHendler(){
        console.log(this.currentStep);
        if( this.currentStep === (this.steps.length - 2)){
          this.currentStep = this.currentStep + 2;
        } else {
          this.currentStep = this.currentStep + 1;
        }
      },

      // prevStepHendler(){
      //   console.log(this.currentStep);
      //   if( this.currentStep === 0){
      //     return;
      //   } else {
      //     this.currentStep = this.currentStep - 1;
      //   }
      // }

      showAsideHendler(){
        this.showAside = !this.showAside
      },
      hideAsideHendler(){
        this.showAside = false
      }
    }
  }
</script>

<style lang="scss">
  @import "../../scss/projects-aside";
  @import "../../scss/requests";
  @import "../../scss/workspace";

</style>