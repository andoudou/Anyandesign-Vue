import Vue from 'vue'
import Router from 'vue-router'
import VueScrollTo from 'vue-scrollto'
import Home from '../pages/Home.vue'
import All from '../pages/All.vue'
import About from '../pages/About.vue'
import Oops from '../pages/Oops.vue'
import Eco360 from '../pages/portfolio/Eco360.vue'
import Foodprint from '../pages/portfolio/Foodprint.vue'
import LeYue from '../pages/portfolio/LeYue.vue'
import LightingRoom from '../pages/portfolio/LightingRoom.vue'
import MoveableFeasts from '../pages/portfolio/MoveableFeasts.vue'
import NightLightLamp from '../pages/portfolio/NightLightLamp.vue'
import PerformingWall from '../pages/portfolio/PerformingWall.vue'
import MoreThanOne from '../pages/portfolio/MoreThanOne.vue'
import Pick from '../pages/portfolio/Pick.vue'
import ToiletThings from '../pages/portfolio/ToiletThings.vue'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/all',
    name: 'All',
    component: All
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/oops',
    name: 'Oops',
    component: Oops
  },
  {
    path: '/portfolio/eco360',
    name: 'Eco360',
    component: Eco360
  },
  {
    path: '/portfolio/foodprint',
    name: 'Foodprint',
    component: Foodprint
  },
  {
    path: '/portfolio/leyue',
    name: 'LeYue',
    component: LeYue
  },
  {
    path: '/portfolio/lightingroom',
    name: 'LightingRoom',
    component: LightingRoom
  },
  {
    path: '/portfolio/moveablefeasts',
    name: 'MoveableFeasts',
    component: MoveableFeasts
  },
  {
    path: '/portfolio/nightlightlamp',
    name: 'NightLightLamp',
    component: NightLightLamp
  },
  {
    path: '/portfolio/performingwall',
    name: 'PerformingWall',
    component: PerformingWall
  },
  {
    path: '/portfolio/morethanone',
    name: 'MoreThanOne',
    component: MoreThanOne
  },
  {
    path: '/portfolio/pick',
    name: 'Pick',
    component: Pick
  },
  {
    path: '/portfolio/toiletthings',
    name: 'ToiletThings',
    component: ToiletThings
  }]
})

export default router

Vue.use(VueScrollTo)
