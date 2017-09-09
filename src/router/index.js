import Vue from 'vue'
import Router from 'vue-router'
import VueScrollTo from 'vue-scrollto'
import Home from '../pages/Home.vue'
import All from '../pages/All.vue'
import About from '../pages/About.vue'
import Eco360 from '../pages/portfolio/Eco360.vue'

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
        }
    ]
})

Vue.use(VueScrollTo)