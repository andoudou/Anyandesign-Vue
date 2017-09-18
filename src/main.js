// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import router from './router'

Vue.use(VueScrollTo)

const helpers = {
  getPageScrollTop: function () {
    return typeof window.scrollY === 'undefined' ? window.pageYOffset : window.scrollY
  },
  pageTop: '#app',
  // Scroll takes at least 1 second. The longer the page is, the longer time will be taken
  getScrollTopTime: function () {
    var top = this.getPageScrollTop()
    return top / 4 > 1000 ? top / 4 : 1000
  },
  scrollTopEasing: [0.785, 0.135, 0.15, 0.86],
  scrollDownEasing: [0.445, 0.05, 0.55, 0.95],
  initializePage: function () {
    window.scrollTo(0, 0)
  }
}

var helperPlugin = {
  install: function (Vue, options) {
    Vue.prototype.$helper = helpers
  }
}

Vue.use(helperPlugin)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: (h) => h(App)
})
