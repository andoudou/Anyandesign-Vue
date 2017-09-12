export default {
  name: 'navibar',
  props: {
    isHandleScroll: {
      type: Boolean,
      default: true
    },
    isPageScrolled: {
      type: Boolean
    },
    isDarkTheme: {
      type: Boolean,
      default: false
    },
    scrollTo: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      isScrolled: (typeof window.scrollY === 'undefined' ? window.pageYOffset : window.scrollY) > 0.1 * window.innerHeight,
      showPopup: false,
      showList: false,
      navigate: '',
      clickedItemIndex: null,
      maxIndex: 4,
      // left: 37, up: 38, right: 39, down: 40,
      // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
      keys: { 37: 1, 38: 1, 39: 1, 40: 1 }
    }
  },
  computed: {
    bannerClassObject: function () {
      return {
        scrolled: this.isHandleScroll === true ? this.isScrolled : this.isPageScrolled,
        dark: this.isDarkTheme
      }
    }
  },
  methods: {
    menuItemClicked: function (path) {
      if (this.$route.path === path) {
        if (this.scrollTo) {
          this.$scrollTo(this.scrollTo, 700)
        }
      } else {
        this.$router.push(path)
      }
    },
    handleScroll: function (event) {
      var top = typeof window.scrollY === 'undefined' ? window.pageYOffset : window.scrollY
      if (top > 0.1 * window.innerHeight) {
        this.isScrolled = true
      } else {
        this.isScrolled = false
      }
    },
    navigateTo: function (path, clicked) {
      this.navigate = path
      this.showList = false
      this.clickedItemIndex = clicked
    },
    beforeMenuEnter: function (el) {
      this.disableScroll()
    },
    afterMenuEnter: function (el) {
      this.showList = true
    },
    beforeMenuLeave: function (el) {
      this.$scrollTo(this.scrollTo, 700)
    },
    afterMenuLeave: function (el) {
      this.enableScroll()
    },
    beforeListEnter: function (el) {
      el.style.opacity = 0
      el.style.transform = this.setTransformX(el, 60)
    },
    listEnter: function (el, done) {
      var index = this.correctIndex(el.dataset.index)
      var delay = index * 120
      var vm = this

      setTimeout(function () {
        var currentX = 80
        var id = setInterval(frame, 16)

        function frame () {
          if (currentX <= 0) {
            clearInterval(id)
            done()
          } else {
            currentX -= 3
            el.style.opacity = Number(el.style.opacity) + 0.05
            vm.setTransformX(el, currentX)
          }
        }
      }, delay)
    },
    beforeListLeave: function (el) {
      el.style.opacity = 1
    },
    listLeave: function (el, done) {
      var delaySingle = 120
      var index = this.correctIndex(el.dataset.index)
      var delay = index * delaySingle
      var vm = this

      setTimeout(function () {
        var currentX = 0
        var id = setInterval(frame, 14)

        function frame () {
          if (currentX >= 80) {
            clearInterval(id)
            setTimeout(function () { done() }, delaySingle * vm.maxIndex - delay)
          } else {
            currentX += 3
            el.style.opacity = Number(el.style.opacity) - 0.05
            vm.setTransformX(el, currentX)
          }
        }
      }, delay)
    },
    afterListLeave: function (el) {
      this.clickedItemIndex = null
      if (!!this.navigate && this.$route.path !== this.navigate) {
        this.$router.push(this.navigate)
        this.navigate = ''
        this.enableScroll()
      } else {
        this.showPopup = false
      }
    },
    setTransformX: function (element, deltaX) {
      var transfromString = ('translateX(' + deltaX + 'px )')

      // now attach that variable to each prefixed style
      element.style.webkitTransform = transfromString
      element.style.MozTransform = transfromString
      element.style.msTransform = transfromString
      element.style.OTransform = transfromString
      element.style.transform = transfromString
    },
    correctIndex: function (index) {
      if (this.clickedItemIndex !== null) {
        if (Number(this.clickedItemIndex) === Number(index)) {
          return this.maxIndex
        } else if (this.clickedItemIndex < index) {
          return index - 1
        }
      }
      return index
    },
    preventDefault: function (e) {
      e = e || window.event
      if (e.preventDefault) {
        e.preventDefault()
      }
      e.returnValue = false
    },
    preventDefaultForScrollKeys: function (e) {
      if (this.keys[e.keyCode]) {
        e.preventDefault()
        return false
      }
    },
    disableScroll: function () {
      window.addEventListener('DOMMouseScroll', this.preventDefault, false)
      window.onwheel = this.preventDefault // modern standard
      window.onmousewheel = document.onmousewheel = this.preventDefault // older browsers, IE
      window.ontouchmove = this.preventDefault // mobile
      document.onkeydown = this.preventDefaultForScrollKeys
    },
    enableScroll: function () {
      window.removeEventListener('DOMMouseScroll', this.preventDefault, false)
      window.onmousewheel = document.onmousewheel = null
      window.onwheel = null
      window.ontouchmove = null
      document.onkeydown = null
    }
  },
  created () {
    if (this.isHandleScroll === true) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed () {
    if (this.isHandleScroll === true) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
}
