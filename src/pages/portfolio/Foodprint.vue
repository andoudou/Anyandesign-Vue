<template>
  <div>
    <navibar></navibar>
    <div class="headlinecenter">
        <h1>FOODPRINT</h1>
        <h4><br>Childhood memory of blue sky has faded away with growing fog and haze, but we still hope to find the way back by carben footprint.
            <br>童年印象里的碧草蓝天，好像已经被时间和雾霾模糊，沿着碳足迹，我们想找到回去的路。</h4>
    </div>
    <div id="phone"><img src="/static/images/projects/foodprint/phone.png" width="100%" /></div>
    <div class="content">
        <div class="party" id="part1"></div>
        <div class="party" id="part2"><img src="/static/images/projects/foodprint/foodprint2.jpg" width="100%" /></div>
        <div class="party" id="part3"><img src="/static/images/projects/foodprint/foodprint3.jpg" width="100%" /></div>
        <div class="party" id="part4"><img src="/static/images/projects/foodprint/foodprint4.jpg" width="100%" /></div>
        <div class="party" id="part5"><img src="/static/images/projects/foodprint/foodprint5.jpg" width="100%" /></div>
        <div class="party" id="part6"><img src="/static/images/projects/foodprint/foodprint6.jpg" width="100%" /></div>
        <div class="party" id="part6"><img src="/static/images/projects/foodprint/foodprint7.jpg" width="100%" /></div>
        <div class="party" id="part6"><img src="/static/images/projects/foodprint/foodprint8.jpg" width="100%" /></div>
        <div class="party" id="part6"><img src="/static/images/projects/foodprint/foodprint9.jpg" width="100%" /></div>
        <div class="party" id="part6"><img src="/static/images/projects/foodprint/foodprint10.jpg" width="100%" /></div>
    </div>
    <catalogue v-bind:backgroundColor="'#edf0f5'">
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
  name: "foodprint",
  components: {
    Navibar,
    Catalogue,
    Contact,
    Top
  }
}
</script>
<style scoped>
.headlinecenter {
    position: absolute;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    top: 44vmin;
    text-align: center;
}

.party {
    background: #edf0f5;
    position: relative;
    width: 100%;
    height: auto;
    z-index: -10;
}

.headlinecenter {
    color: #59493f;
}

#phone {
    position: absolute;
    top: 65%;
    right: 0;
    width: 60%;
    height: 100%;
}

#part1 {
    background: url('/static/images/projects/foodprint/foodprint1.jpg') no-repeat top;
    background-size: cover;
    width: 100%;
    height: 100vh;
}
</style>
