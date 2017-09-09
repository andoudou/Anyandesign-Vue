<template>
  <div>
    <navibar></navibar>
    <div class="headlineleft">
        <div id="text">
            <h1>ECO360 CUSTOMER JOURNEY MAP</h1>
            <div id="org"></div>
            <br>
            <p>
                Eco360 customer journey map illustrates the process of a person or an organization from being aware of Azure to becoming a billable customer. Supporting service(at the bottom of the map) go through the whole process to make sure that customer can have
                a high level experience and will not quit at any step. Related technology, activities, communities, people and other stakeholders are the resources of information from which we know the performance of our products. Pink dots are remarkable
                steps we need to pay more attention. Except the main road, customer could skip any step to go to the destination. And all our effort just like a great engine to ensure the normal operation of the whole process.
            </p>
        </div>
        <div id="expo"></div>
    </div>
    <div class="content">
        <div class="party" id="part1"><img src="/static/images/projects/eco360/CJM.jpg" width="80%" /></div>
    </div>
    <catalogue>
        <div slot="attachment" style="position: absolute; height: 100%; width: 100%; top: 0;">
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
  name: "eco360",
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

.headlineleft {
    position: relative;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    padding-top: 35vmin;
    padding-bottom: 20vmin;
    text-align: left;
    transition: all 0.5s;
}

#text {
    width: 50%;
    height: 100%;
}

#org {
    background: url('/static/images/projects/eco360/Microsoft.png') no-repeat left;
    ;
    background-size: contain;
    width: 20em;
    height: 1.5em;
    margin: 0.5em 0;
}

#expo {
    position: absolute;
    top: 35vmin;
    right: 0;
    background: url('/static/images/projects/eco360/sketch.jpg') no-repeat top;
    background-size: cover;
    width: 45%;
    height: 45%;
}

.content {
    text-align: center;
}

</style>
