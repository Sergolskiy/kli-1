import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)


const routes = [
  { path: '/', component: Home },
  { path: '/home', component: HelloWorld },
]

export const router = new VueRouter({
  mode: 'history',
  routes
})
