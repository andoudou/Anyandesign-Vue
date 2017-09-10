<template>
  <div>
    <navibar></navibar>
      
    <div class="headlineleft">
        <div id="text">
            <h1>PICK</h1>

            <h4>REDSIGN FOR 4M3.COM 同济大学选课网再设计</h4>
            <br>
            <p>
                4M3.COM的再设计是我进入交互设计专业后的第一次设计尝试，作为选课网的用户，能够深切体会4M3.COM存在的诸多问题。我们为选课平台取名“Pick／匹课”，意为主动为同学们精选课程，让选课流程更加顺畅； 合理进行分流，避免每次开学前的选课网“大拥堵”，让每位同学都能够选到心仪的课程。
            </p>
        </div>
        <div id="device"></div>
    </div>
    <div class="content">
        <div class="party" id="part1"></div>
        <div class="party" id="part2"><img src="/static/images/projects/pick/pick2.jpg" width="100%" /></div>
        <div class="party" id="part3"><img src="/static/images/projects/pick/pick3.jpg" width="100%" /></div>
        <div class="party" id="part4"><img src="/static/images/projects/pick/pick4.jpg" width="100%" /></div>
        <div class="party" id="part5"><img src="/static/images/projects/pick/pick5.jpg" width="100%" /></div>
        <div class="party" id="part6"><img src="/static/images/projects/pick/pick6.jpg" width="100%" /></div>
        <div class="party" id="part7"><img src="/static/images/projects/pick/pick7.jpg" width="100%" /></div>
        <div class="party" id="part8"><img src="/static/images/projects/pick/pick8.jpg" width="100%" /></div>
        <div class="video">
            <iframe src="https://player.vimeo.com/video/232277855?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
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
    name: "pick",
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

.headlineleft {
    background: url('/static/images/projects/pick/pick1.jpg');
    background-size: cover;
    position: relative;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    padding-top: 42vmin;
    padding-bottom: 30vmin;
    text-align: left;
    transition: all 0.5s;
}

#text {
    width: 45%;
    height: 100%;
}

#device {
    position: absolute;
    bottom: 0vmin;
    right: 0;
    background: url('/static/images/projects/pick/device.png') no-repeat top;
    background-size: contain;
    width: 50%;
    height: 60%;
}

#part8,
#part7 {
    background: #f2f2f2;
}

.video {
    width: 100%;
    background: #f2f2f2;
    text-align: center;
}

.video iframe {
    width: 80vw;
    height: 46vw;
    right: 0;
    left: 0;
    margin: 5% auto;
}

</style>

