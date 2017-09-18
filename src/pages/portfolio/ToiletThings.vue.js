import Navibar from '../../components/Navibar.vue'
import Catalogue from '../../components/Catalogue.vue'
import Contact from '../../components/Contact.vue'
import Top from '../../components/Top.vue'

export default {
  name: 'toiletthings',
  components: {
    Navibar,
    Catalogue,
    Contact,
    Top
  },
  data () {
    return {
      catalogueBackground: {
        deg: 0,
        from: '#F7E8EF',
        to: '#fff'
      }
    }
  },
  created () {
    this.$helper.initializePage()
  }
}
