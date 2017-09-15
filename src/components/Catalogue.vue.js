import CatalogueItem from '../components/CatalogueItem.vue'

export default {
  name: 'catalogue',
  props: {
    backgroundColor: {
      type: String,
      default: '#f8f8f8'
    },
    backgroundColorRGBA: {
      type: Object,
      default () {
        return null
      }
    },
    backgroundColorGradient: {
      type: Object,
      default () {
        return null
      }
    }
  },
  components: {
    CatalogueItem
  },
  methods: {
    getBackgroundColorString: function () {
      if (this.backgroundColorGradient) {
        return 'linear-gradient(' + this.backgroundColorGradient.deg + 'deg, ' +
          this.backgroundColorGradient.from + ',' +
          this.backgroundColorGradient.to + ')'
      }
      if (this.backgroundColorRGBA) {
        return 'rgba(' + this.backgroundColorRGBA.R + ',' +
          this.backgroundColorRGBA.G + ',' +
          this.backgroundColorRGBA.B + ',' +
          this.backgroundColorRGBA.A + ')'
      } else {
        return this.backgroundColor
      }
    }
  }
}
