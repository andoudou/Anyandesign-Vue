<template>
  <div>
    <navibar></navibar>
    <div class="headlineleft">
        <div id="text">
            <h1>MOVEABLE FEASTS</h1>
            <div id="org"></div>
            <p><br>An exploration into the heritage, flavours and possible futures of shanghai streetfood
            </p>
            <br><br>
            <p>
                Moveable Feasts is an online platform which is organized around collecting an encyclopedia of Shanghai streetfood; tracing recipes; collecting origin stories, gathering information on cooking procedures and tools; mapping vendors and stalls throughout
                the city. The website began with an open call to designers, artists, scholars, students and foodies of all types to come map, document, co-create, re-invent and preserve Shanghai’s street food. In the past two years, we have been involving
                students from several courses both at Tongji and at NYU. These classes are based on experiments with - eld research, digital platforms, communication and service design, and contribute to a variety of open projects about streetfood and
                its role as social infrastructure in the city of the future.
            </p>
        </div>
        <div id="expo"></div>
    </div>
    <div class="content">
        <div class="party" id="part1"><img src="/static/images/projects/moveablefeasts/moveablefeasts1.jpg" width="100%"></div>
        <div class="party" id="part2"><img src="/static/images/projects/moveablefeasts/moveablefeasts2.jpg" width="100%"></div>
        <div class="party" id="part3"><img src="/static/images/projects/moveablefeasts/moveablefeasts3.jpg" width="100%"></div>
    </div>
    <catalogue v-bind:backgroundColor="'#ffffff'">
        <div slot="attachment">
            <Top></Top>
            <contact></contact>
        </div>
    </catalogue>
  </div>
</template>
<script src="./MoveableFeasts.vue.js"></script>
<style src="./MoveableFeasts.vue.css" scoped></style>
