import Cover from '../components/Cover.vue'
import Contact from '../components/Contact.vue'
import Top from '../components/Top.vue'
import Catalogue from '../components/Catalogue.vue'

export default {
  name: 'all',
  components: {
    Cover,
    Contact,
    Top,
    Catalogue
  },
  created () {
    this.$helper.initializePage()
  }
}
