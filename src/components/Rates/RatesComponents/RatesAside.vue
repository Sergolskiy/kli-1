<template>
  <div class="customer-rates__aside">

    <div class="customer-rates__aside-head">
      <div class="customer-rates__aside-user">
        <img v-bind:src="$store.getters.getUrl + customerProjects.customerIco"
             alt="ico"
             class="customer-rates__aside-user-ico"
        >
        {{customerProjects.customerName}}
      </div>
      <div class="customer-rates__aside-category">
        <img v-bind:src="$store.getters.getUrl + '/image/catalog/polygraphy-ico.svg'"
             alt="ico"
             class="customer-rates__aside-category-ico"
        >
        {{customerProjects.typeProjects}}
      </div>
    </div>
    <div class="customer-rates__aside-list">
      <div class="customer-rates__aside-item" v-for="(project, index) in customerProjects.projects" :key="index">
        <div class="customer-rates__aside-img">
          <img v-bind:src="$store.getters.getUrl + project.img"
               alt="ico"
          >
        </div>
        <div class="customer-rates__aside-info">
          <div class="customer-rates__aside-title">
            {{project.name}}
          </div>
          <div class="customer-rates__aside-description">
            {{project.desc}}
          </div>
          <div class="customer-rates__aside-properties">
            <div class="customer-rates__aside-property"
                 v-for="(property, indexProperty) in project.properties"
                 :key="indexProperty">
              {{property.item}}<sup>{{property.itemSup}}</sup>
            </div>
          </div>
          <router-link :to=project.link class="customer-rates__aside-more">
            + more info...
          </router-link>
        </div>
      </div>
    </div>
    <div class="customer-rates__aside-full-project">
      <Btn
              class="customer-rates__aside-full-project-i"
              :btnName="`View full project`"
      />
    </div>

  </div>
</template>

<script>
  import Btn from "../../UI/Btn";

  export default {
    name: "RatesAside",

    props: [
      'customerProjects'
    ],

    mounted(){
      console.log(this.customerProjects);
    },

    components: {
      Btn,
    },
  }
</script>

<style scoped>

</style>
