<template>
  <div>
    <navibar></navibar>
    <div class="headlineleft">
        <div id="text">
            <h1>LIGHTING ROOM</h1>
            <div id="org"></div>
            <h4>ONLINE SHOPPING EXPERIENCE 在线商城体验设计</h4>
            <br>
            <p>
                In this project, we choose website for computer as the platform to design pages and interaction of online shopping website. We focuse on step of comparing different products in the whole process of choosing and buying lamps. And according to showing the
                virtual scene of lamps to let customers observe lamps better, which use the advantage of physical store to make up the shortage of online shopping experience.
            </p>
        </div>
        <div id="house"></div>
    </div>
    <div class="content">
        <div class="party" id="part1"></div>
        <div class="party" id="part2"><img src="/static/images/projects/lightingroom/lightingroom2.jpg" width="100%" /></div>
        <div class="party" id="part3"><img src="/static/images/projects/lightingroom/lightingroom3.jpg" width="100%" /></div>
        <div class="party" id="part4"><img src="/static/images/projects/lightingroom/lightingroom4.jpg" width="100%" /></div>
        <div class="party" id="part5"><img src="/static/images/projects/lightingroom/lightingroom5.jpg" width="100%" /></div>
        <div class="party" id="part6"><img src="/static/images/projects/lightingroom/lightingroom6.jpg" width="100%" /></div>
        <div class="party" id="part7"><img src="/static/images/projects/lightingroom/lightingroom7.jpg" width="100%" /></div>
        <div class="party" id="part8">
            <img src="/static/images/projects/lightingroom/lightingroom8.jpg" width="100%" />
            <img src="/static/images/projects/lightingroom/lightingroom9.jpg" width="100%" />
            <img src="/static/images/projects/lightingroom/lightingroom10.jpg" width="100%" />
        </div>
        <div class="party" id="part9"><img src="/static/images/projects/lightingroom/lightingroom11.jpg" width="100%" /></div>
        <div class="party" id="part10"><img src="/static/images/projects/lightingroom/lightingroom12.jpg" width="100%" /></div>
        <div class="video">
            <iframe src="https://player.vimeo.com/video/231983266?title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
    </div>
    <catalogue v-bind:backgroundColor="'#ffffff'">
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
  name: "lightingroom",
  components: {
    Navibar,
    Catalogue,
    Contact,
    Top
  },
}
</script>
<<style scoped>
.party {
    position: relative;
    width: 100%;
    height: auto;
    z-index: -10;
}

.headlineleft {
    background: linear-gradient( 0deg, #fff, #eee);
    position: relative;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    padding-top: 35vmin;
    padding-bottom: 30vmin;
    text-align: left;
    transition: all 0.5s;
}

#text {
    width: 45%;
    height: 100%;
}

#org {
    background: url('/static/images/projects/lightingroom/philips.svg') no-repeat left;
    ;
    background-size: contain;
    width: 20em;
    height: 1em;
    margin: 0.5em 0.1em;
}

#house {
    position: absolute;
    top: 30vmin;
    right: 0;
    background: url('/static/images/projects/lightingroom/house.png') no-repeat top;
    background-size: contain;
    width: 50%;
    height: 60%;
}

#part8 {
    background: #EEEEEE;
    padding: 0;
    margin: 0;
}

.video {
    width: 100%;
    background: #EEEEEE;
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
