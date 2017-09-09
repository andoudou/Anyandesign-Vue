<template>
  <div>
    <navibar v-bind:isDarkTheme="true"></navibar>
    <div class="headlineleft">
        <div id="text">
            <h1>NIGHTLIGHT LAMP</h1>
            <p><br>MOLDING, MATERIAL, ARTS & CRAFTS／「夜灯」造型材料与工艺</p>
        </div>
    </div>
    <div class="content">
        <div class="party" id="part1"></div>
        <div class="party" id="part2"><img src="/static/images/projects/nightlightlamp/nightlightlamp2.jpg" width="100%"></div>
        <div class="party" id="part3"><img src="/static/images/projects/nightlightlamp/nightlightlamp3.jpg" width="100%"></div>
        <div class="party" id="part4"><img src="/static/images/projects/nightlightlamp/nightlightlamp4.jpg" width="100%"></div>
    </div>
    <catalogue>
        <div slot="attachment">
            <Top></Top>
            <contact></contact>
        </div>
    </catalogue>
  </div>
</template>
<script>
import Navibar from '../../components/Navibar.vue'
import Catalogue from '../../components/Catalogue.vue'
import Contact from '../../components/Contact.vue'
import Top from '../../components/Top.vue'

export default {
  name: "nightlightlamp",
  components: {
    Navibar,
    Catalogue,
    Contact,
    Top
  }
}
</script>
<style scoped>
.party {
    position: relative;
    width: 100%;
    height: auto;
    z-index: -10;
}

.headlineleft {
    position: absolute;
    width: 80%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    padding-top: 40vmin;
    padding-bottom: 20vmin;
    text-align: left;
    transition: all 0.5s;
    color: #fff;
}

#text {
    width: 55%;
    height: 100%;
}

#part1 {
    background: url('/static/images/projects/nightlightlamp/nightlightlamp1.jpg') no-repeat center;
    background-size: cover;
    width: 100%;
    height: 100vh;
}
</style>
