export default {
  name: 'top',
  methods: {
    goTop: function () {
      var top = typeof window.scrollY === 'undefined' ? window.pageYOffset : window.scrollY
      // Scroll takes at least 1 second. The longer the page is, the longer time will be taken
      this.$scrollTo('#app', top / 4 > 1000 ? top / 4 : 1000, {easing: [0.785, 0.135, 0.15, 0.86]})
    }
  }
}
