import Navibar from '../../components/Navibar.vue'
import Catalogue from '../../components/Catalogue.vue'
import Contact from '../../components/Contact.vue'
import Top from '../../components/Top.vue'

export default {
  name: 'performingwall',
  components: {
    Navibar,
    Catalogue,
    Contact,
    Top
  },
  created () {
    this.$helper.initializePage()
  }
}
