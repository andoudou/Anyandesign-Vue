export default {
  name: 'top',
  methods: {
    goTop: function () {
      var top = typeof window.scrollY === 'undefined' ? window.pageYOffset : window.scrollY
      this.$scrollTo('#app', top / 4, {easing: [0.785, 0.135, 0.15, 0.86]})
    }
  }
}
