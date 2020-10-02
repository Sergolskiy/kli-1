import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Catalog from "../components/Catalog.vue";
import Categories from "../components/Categories.vue";

Vue.use(VueRouter)

let url = '/';
if(location.hostname === 'frontend.topden.net') url = '/kli1/';

const routes = [
  { path: url, component: Home },
  { path: url + 'catalog', component: Catalog },
  { path: url + 'categories', component: Categories },
]

export const router = new VueRouter({
  mode: 'history',
  routes
})
