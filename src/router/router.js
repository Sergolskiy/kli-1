import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Catalog from "../components/Catalog.vue";

Vue.use(VueRouter)


const routes = [
  { path: '/', component: Home },
  { path: '/catalog', component: Catalog },
]

export const router = new VueRouter({
  mode: 'history',
  routes
})
