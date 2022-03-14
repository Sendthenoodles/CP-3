import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Mystery from '../views/GameMystery.vue'
import Horror from '../views/GameHorror.vue'
import Souls from '../views/GameSouls.vue'
import Multi from '../views/GameMulti.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
   path: '/Horror',
   name: 'Horror',
   component: Horror
 },
 {
   path: '/Mystery',
   name: 'Mystery',
   component: Mystery
 },
 {
   path: '/Souls',
   name: 'Souls',
   component: Souls
 },
 {
   path: '/Multiplayer',
   name: 'Multi',
   component: Multi
 },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
