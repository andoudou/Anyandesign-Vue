import Vue from 'vue'
import Router from 'vue-router'
import VueScrollTo from 'vue-scrollto'
import Home from '../pages/Home.vue'
import All from '../pages/All.vue'
import About from '../pages/About.vue'
import Eco360 from '../pages/portfolio/Eco360.vue'
import Foodprint from '../pages/portfolio/Foodprint.vue'
import Leyue from '../pages/portfolio/Leyue.vue'
import LightingRoom from '../pages/portfolio/LightingRoom.vue'
import Moveablefeasts from '../pages/portfolio/Moveablefeasts.vue'
import NightLightLamp from '../pages/portfolio/NightLightLamp.vue'

Vue.use(Router)

export default new Router({
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
            name: 'Leyue',
            component: Leyue
        },
        {
            path: '/portfolio/lightingroom',
            name: 'LightingRoom',
            component: LightingRoom
        },
        {
            path: '/portfolio/moveablefeasts',
            name: 'Moveablefeasts',
            component: Moveablefeasts
        },
        {
            path: '/portfolio/nightlightlamp',
            name: 'NightLightLamp',
            component: NightLightLamp
        }
    ]
})

Vue.use(VueScrollTo)