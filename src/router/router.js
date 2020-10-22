import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Catalog from "../components/Catalog.vue";
import Categories from "../components/Categories.vue";
import Projects from "../components/Projects.vue";
import CustomerRates from "../components/CustomerRates";
import ErrorPage from "../components/ErrorPage";
import Personal from "../components/Personal/Personal";

Vue.use(VueRouter)

let url = '/';
if(location.hostname === 'frontend.topden.net') url = '/kli1/';

const routes = [
  { path: url, component: Home },
  { path: url + 'catalog', component: Catalog },
  { path: url + 'categories', component: Categories },
  { path: url + 'projects', component: Projects },
  { path: url + 'printing-business-cards', component: CustomerRates },
  { path: url + '404', component: ErrorPage },
  { path: url + 'personal', component: Personal },
  // { path: url + 'printing-business-cards-empty', component: CustomerRatesEmpty },
]

export const router = new VueRouter({
  mode: 'history',
  routes
})
