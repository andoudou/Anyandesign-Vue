export default {
  name: 'top',
  methods: {
    goTop: function () {
      this.$scrollTo(
        this.$helper.pageTop,
        this.$helper.getScrollTopTime(),
        {easing: this.$helper.scrollTopEasing})
    }
  }
}
