<template>
    <div>
        <navibar></navibar>
        <div class="headlineleft">
            <div id="text">
                <h1>FARM OF YOUTH</h1>
                <div id="org"></div>
                <h4>PACKAGING FOR AGRICULTURAL PRODUCT／知青农场农副产品包装</h4>
                <br>
                <p>
                    Educated Youth Farm is base on the farming memory of Shanghai educated youth in Dafeng. Educated youth farm advocate a simple lifestyle and pass youth positive spirit by natural simple products and raw materials.
                </p>
            </div>
            <div id="house"></div>
        </div>
        <div class="content">
            <div class="party" id="part1"></div>
            <div class="party" id="part2"><img src="/static/images/projects/youthfarm/youthfarm1.jpg" width="100%" /></div>
            <div class="party" id="part3"><img src="/static/images/projects/youthfarm/youthfarm2.jpg" width="100%" /></div>
            <div class="party" id="part4"><img src="/static/images/projects/youthfarm/youthfarm3.jpg" width="100%" /></div>
            <div class="party" id="part5"><img src="/static/images/projects/youthfarm/youthfarm4.jpg" width="100%" /></div>
            <div class="party" id="part6"><img src="/static/images/projects/youthfarm/youthfarm5.jpg" width="100%" /></div>
            <div class="party" id="part7"><img src="/static/images/projects/youthfarm/youthfarm6.jpg" width="100%" /></div>
        </div>
        <catalogue v-bind:backgroundColor="'#ffffff'">
            <div slot="attachment">
                <Top></Top>
                <contact></contact>
            </div>
        </catalogue>
    </div>
</template>
<script src="./YouthFarm.vue.js"></script>
<style src="./YouthFarm.vue.css" scoped></style>
