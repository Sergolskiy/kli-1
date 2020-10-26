import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Catalog from "../components/Catalog.vue";
import Checkout from "../components/Checkout.vue";
import Categories from "../components/Categories.vue";
import Projects from "../components/Projects.vue";
import CustomerRates from "../components/CustomerRates";
import ErrorPage from "../components/ErrorPage";
import Personal from "../components/Personal/Personal";
import Chat from "../components/Personal/PersonalComponents/Chat";
import Messages from "../components/Personal/PersonalComponents/Messages";
import PersonalProjects from "../components/Personal/PersonalComponents/Projects";
import Requests from "../components/Personal/PersonalComponents/Requests";
import CompletedProjects from "../components/Personal/PersonalComponents/CompletedProjects";
import Review from "../components/Personal/PersonalComponents/Review";
import CustomerRatesFreelancer from "../components/CustomerRatesFreelancer";

Vue.use(VueRouter)

let url = '/';
if(location.hostname === 'frontend.topden.net') url = '/kli1/';

const routes = [
  { path: url, component: Home },
  { path: url + 'catalog', component: Catalog },
  { path: url + 'categories', component: Categories },
  { path: url + 'projects', component: Projects },
  { path: url + 'customer-rates', component: CustomerRates },
  { path: url + 'customer-rates-freelancer', component: CustomerRatesFreelancer },
  { path: url + '404', component: ErrorPage },
  { path: url + 'checkout', component: Checkout },
  {
    path: url + 'personal', component: Personal,
    children: [
      {
        path: 'chat',
        component: Chat,
      },
      {
        path: 'messages',
        component: Messages,
      },
      {
        path: 'projects',
        component: PersonalProjects
      },
      {
        path: 'requests',
        component: Requests
      },
      {
        path: 'completed-projects',
        component: CompletedProjects
      },
      {
        path: 'review',
        component: Review
      },
    ]
  },
  // { path: url + 'printing-business-cards-empty', component: CustomerRatesEmpty },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.requires) {
    next()
  } else {
    next()
  }
})

export default router;
