import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Catalog from "../components/Catalog.vue";
import Categories from "../components/Categories.vue";
import Projects from "../components/Projects.vue";
import CustomerRates from "../components/CustomerRates";
// import CustomerRatesEmpty from "../components/CustomerRatesEmpty";

Vue.use(VueRouter)

let url = '/';
if(location.hostname === 'frontend.topden.net') url = '/kli1/';

const routes = [
  { path: url, component: Home },
  { path: url + 'catalog', component: Catalog },
  { path: url + 'categories', component: Categories },
  { path: url + 'projects', component: Projects },
  { path: url + 'printing-business-cards', component: CustomerRates },
  // { path: url + 'printing-business-cards-empty', component: CustomerRatesEmpty },
]

export const router = new VueRouter({
  mode: 'history',
  routes
})
