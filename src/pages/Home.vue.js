import Cover from '../components/Cover.vue'
import Contact from '../components/Contact.vue'
import Top from '../components/Top.vue'

export default {
  name: 'home',
  components: {
    Cover,
    Contact,
    Top
  },
  data () {
    return {
      currentChange: 0,
      fadeInDuration: 300,
      fadeOutDuration: 500
    }
  },
  mounted () {
    this.currentChange = 1
  },
  created () {
    window.scrollTo(0, 0)
  },
  computed: {
    changedMessage: function () {
      switch (this.currentChange) {
        case 1:
          return 'Design for Behavior'
        case 2:
          return 'Design for Experience'
        case 3:
          return 'Design for Service'
      }
    }
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      if (this.fadeInDuration === 0) {
        el.style.opacity = 1
        return
      }
      var vm = this
      var id = setInterval(frame, this.fadeInDuration / 10)

      function frame () {
        if (Number(el.style.opacity) >= 1) {
          clearInterval(id)
          done()
          if (vm.currentChange === 3) {
            vm.currentChange = 1
          } else {
            vm.currentChange++
          }
        } else {
          el.style.opacity = Number(el.style.opacity) + 0.01
        }
      }
    },
    leave: function (el, done) {
      if (this.fadeOutDuration === 0) {
        el.style.opacity = 0
        done()
        return
      }
      var id = setInterval(frame, this.fadeOutDuration / 10)

      function frame () {
        if (Number(el.style.opacity) <= 0) {
          clearInterval(id)
          done()
        } else {
          el.style.opacity = Number(el.style.opacity) - 0.1
        }
      }
    }
  }
}
