<template>
    <div id="wrap">
      <navibar v-bind:isPageScrolled="isScrolled" v-bind:isHandleScroll="false"></navibar>
      <div id="bannerWrap">
            <div id="banner" v-bind:class="backgroundClass"></div>
      </div>
      <div class="headline" v-bind:class="{scrolled: isScrolled}">
          <slot name="headlineContent"></slot>
      </div>

      <h6 id="photoinfo" v-bind:class="{scrolled: isScrolled}">
          <slot name="photoinfoContent"></slot>
      </h6>

      <go-down v-bind:isScrolled="isScrolled" v-bind:scrollTo="scrollTo"></go-down>
    </div>
</template>
<script>
import Navibar from '../components/Navibar.vue'
import GoDown from '../components/GoDown.vue'

export default {
  name: 'cover',
  props:['scrollTo', 'backgroundClass'],
  components: {
    Navibar,
    GoDown
  },
  methods: {
    handleScroll: function(event){
      var top = typeof window.scrollY === "undefined" ? window.pageYOffset : window.scrollY
      if (top > 0.1 * window.innerHeight) {
        this.isScrolled = true
      } else {
        this.isScrolled = false
      }
    }
  },
  data () {
    return {
      isScrolled: (typeof window.scrollY === "undefined" ? window.pageYOffset : window.scrollY) > 0.1 * window.innerHeight
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
<style scoped>
    #wrap {
        position: relative;
        width: 100%;
        height: 100vmin;
    }

    .headline {
        position: fixed;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        right: 0;
        left: 0;
        top: 44vmin;
        text-align: center;
        transition: all 0.2s;
        opacity: 1;
    }

    .headline.scrolled {
        top: 50vmin;
        opacity: 0;
    }

    #photoinfo {
        position: absolute;
        bottom: 5vh;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        right: 0;
        left: 0;
        text-align: right;
        color: #888;
        opacity: 1;
        font-style: italic;
        z-index: 20;
    }

    #photoinfo.scrolled {
        opacity: 0;
    }

    #bannerWrap {
        overflow: hidden;
        position: absolute;
        height: 100%;
        width: 100%;
    }

    #banner {
        position: absolute;
        height: 100%;
        width: 100%;
        -moz-transition: all 1s;
        -webkit-transition: all 1s;
        transition: all 1s;
        -moz-transform: scale(1, 1);
        -webkit-transform: scale(1, 1);
        transform: scale(1, 1);
        background-attachment: scroll;
        -moz-background-size: cover;
        -webkit-background-size: cover;
        background-size: cover;
        background-position: top;
        z-index: -1;
    }

    #wrap:hover #banner {
        -moz-transform: scale(1.2, 1.2);
        -webkit-transform: scale(1.2, 1.2);
        transform: scale(1.2, 1.2);
        transition: 5s;
    }
</style>
