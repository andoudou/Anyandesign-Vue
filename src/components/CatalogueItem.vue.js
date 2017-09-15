export default {
  name: 'catalogue-item',
  props: ['to', 'text'],
  methods: {
    scrollTop: function () {
      this.$scrollTo(
        this.$helper.pageTop,
        this.$helper.getScrollTopTime(),
        {easing: this.$helper.scrollTopEasing})
    }
  },
  computed: {
    isCurrentPage: function () {
      return this.$route.path === this.to
    }
  }
}
