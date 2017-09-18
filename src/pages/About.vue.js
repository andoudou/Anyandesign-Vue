import Cover from '../components/Cover.vue'
import Contact from '../components/Contact.vue'
import Top from '../components/Top.vue'

export default {
  name: 'about',
  components: {
    Cover,
    Contact,
    Top
  },
  data () {
    return {
      msg: 'about'
    }
  },
  created () {
    this.$helper.initializePage()
  }
}
