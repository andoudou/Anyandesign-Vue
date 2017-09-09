<template>
  <div id="about">
    <div class="wrapper">
      <navibar></navibar>
    </div>
    <div class="content">
      {{ msg }}
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
import Navibar from '../components/Navibar.vue'

export default {
  name: 'about',
  components: {
    Navibar
  },
  data () {
    return {
      msg: 'about'
    }
  }
}
</script>