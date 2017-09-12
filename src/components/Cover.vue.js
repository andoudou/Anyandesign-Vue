import Navibar from '../components/Navibar.vue'
import GoDown from '../components/GoDown.vue'

export default {
  name: 'cover',
  props: ['scrollTo', 'backgroundClass'],
  components: {
    Navibar,
    GoDown
  },
  methods: {
    handleScroll: function (event) {
      var top = typeof window.scrollY === 'undefined' ? window.pageYOffset : window.scrollY
      if (top > 0.1 * window.innerHeight) {
        this.isScrolled = true
      } else {
        this.isScrolled = false
      }
    }
  },
  data () {
    return {
      isScrolled: (typeof window.scrollY === 'undefined' ? window.pageYOffset : window.scrollY) > 0.1 * window.innerHeight
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
