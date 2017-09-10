<template>
  <div>
    <navibar></navibar>
    <div class="headlineright">
        <h1>LE YUE</h1>
        <div id="org"></div>
        <h4>乐乐高血压患者健康管理系统／MANAGEMENT FOR HYPERTENSIVE PATIENTS</h4>
        <br>
        <p>Hypertension is a long term medical condition which is a major risk factor for cardiovascular disease. Lifestyle changes can lower blood pressure and decrease the risk of health complications. If it is not sufficient then blood pressure medications
            are used. Insisting on measuring blood pressure and taking medicine could reduce the incidence of cardiovascular disease. However, through research, most patients can not actively treat the disease.</p>
    </div>
    <div class="content">
        <div class="party" id="part1"></div>
        <div class="party" id="part2"><img src="/static/images/projects/leyue/leyue2.jpg" width="100%"></div>
        <div class="party" id="part3"><img src="/static/images/projects/leyue/leyue3.jpg" width="100%"></div>
        <div class="party" id="part4"><img src="/static/images/projects/leyue/leyue4.jpg" width="100%"></div>
        <div class="party" id="part5"><img src="/static/images/projects/leyue/leyue5.jpg" width="100%"></div>
        <div class="party" id="part6"><img src="/static/images/projects/leyue/leyue6.jpg" width="100%"></div>
        <div class="party" id="part7"><img src="/static/images/projects/leyue/leyue7.jpg" width="100%"></div>
        <div class="party" id="part8"><img src="/static/images/projects/leyue/leyue8.jpg" width="100%"></div>
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
    name: "leyue",
    components: {
        Navibar,
        Catalogue,
        Contact,
        Top
    },
    created () {
        window.scrollTo(0, 0)
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

.headlineright {
    position: absolute;
    right: 0;
    text-align: left;
    width: 45%;
    top: 36vmin;
    right: 10%;
}

#org {
    background: url('/static/images/projects/leyue/philips.svg') no-repeat left;
    background-size: contain;
    width: 100%;
    height: 1em;
    margin: 0.5em 0.1em;
}

#part1 {
    background: url('/static/images/projects/leyue/leyue1.jpg') no-repeat center;
    background-size: cover;
    width: 100%;
    height: 100vh;
}
</style>
