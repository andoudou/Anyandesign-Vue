<template>
<div>
    
    <navibar></navibar>
    
    <div class="headlinecenter">
        <h1>PERF
            <span id="dot"><img src="/static/images/projects/performingwall/yellowdot.svg" width="36px" /></span> RMING WALL</h1>
        <h4><br>Future-oriented Interactive Device</h4>
    </div>
    <div class="content">
        <div class="party" id="part1"></div>
        <div class="party" id="part2"><img src="/static/images/projects/performingwall/performingwall1.jpg" width="100%"></div>
        <div class="party" id="part3"><img src="/static/images/projects/performingwall/performingwall2.jpg" width="100%"></div>
        <div class="party" id="part4"><img src="/static/images/projects/performingwall/performingwall3.jpg" width="100%"></div>
        <div class="party" id="part5"><img src="/static/images/projects/performingwall/performingwall4.jpg" width="100%"></div>
        <div class="party" id="part6"><img src="/static/images/projects/performingwall/performingwall5.jpg" width="100%"></div>
        <div class="party" id="part7"><img src="/static/images/projects/performingwall/performingwall6.jpg" width="100%"></div>
        <div class="video">
            <iframe src="https://player.vimeo.com/video/151055984?title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <div class="party" id="part8"><img src="/static/images/projects/performingwall/performingwall7.jpg" width="100%"></div>
    </div>

    <catalogue v-bind:backgroundColor="'#fff'">
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
    name: "performingwall",
    components: {
        Navibar,
        Catalogue,
        Contact,
        Top
    },
}
</script>
<style scoped>

.party {
    position: relative;
    width: 100%;
    height: auto;
    z-index: -10;
}

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

#dot {
    width: 36px;
    height: 36px;
}

#part1 {
    background: url('/static/images/projects/performingwall/performingwall0.jpg') no-repeat top;
    background-size: cover;
    width: 100%;
    height: 100vh;
}

.video {
    width: 100%;
    text-align: center;
}

.video iframe {
    width: 80vw;
    height: 46vw;
    right: 0;
    left: 0;
    margin: 10% auto;
}

</style>
