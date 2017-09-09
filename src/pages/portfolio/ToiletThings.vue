<template>
  <div>
      
    <navibar></navibar>

    <div class="headlineleft">
        <div id="text">
            <h1>THINGS IN TOILET</h1>
            <h4>厕所那些事</h4>
            <br><br>
            <p>
                Our work start from that we felt women always spend more time in restroom than men. There are a lot of reasons you might figure out such as making up, chating or other special reasons. However, after our investigation, we found there are also some objective reasons. Is it ture or just our illusion? Maybe we can see from data. By the way, please don’t feel embarrassed because of the topic. It is, you know, a quite serious matter when you realize the reason why your mother or girlfriend cannot balance her work and life is that she has to waste too much time on unnecessery things. So, try to understand them.
            </p>
        </div>
        <div id="expo"></div>
    </div>
    <div class="content">
        <div class="party" id="part1"><img src="/static/images/projects/toiletthings/toilet.jpg" width="100%" /></div>
    </div>

    <catalogue v-bind:backgroundColorGradient="catalogueBackground">
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
    name: "toiletthings",
    components: {
        Navibar,
        Catalogue,
        Contact,
        Top
    },
    data () {
        return {
            catalogueBackground: {
                deg: 0,
                from: '#F7E8EF',
                to: '#fff'
            }
        }
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
    background: linear-gradient( 0deg, #fff, #D5D7E0, #F7E8EF);
    position: relative;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    padding-top: 36vmin;
    padding-bottom: 20vmin;
    padding-left: 10%;
    padding-right: 10%;
    text-align: left;
    transition: all 0.5s;
}

#text {
    width: 50%;
    height: 100%;
}

#expo {
    position: absolute;
    top: 36vmin;
    right: 10%;
    background: url('/static/images/projects/toiletthings/mall.png') no-repeat top;
    background-size: contain;
    width: 35%;
    height: 45%;
}

</style>

