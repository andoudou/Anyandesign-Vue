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
<script src="./NightLightLamp.vue.js"></script>
<style src="./NightLightLamp.vue.css" scoped></style>
