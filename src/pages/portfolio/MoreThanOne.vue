<template>
  <div>
    <navibar></navibar>
    <div class="headlineleft">
        <div id="text">
            <h1>MORE THAN ONE</h1>
            <h4>FURNITURE DESIGN FOR COLLEGE STUDENTS 高校学生宿舍家具调查研究与设计</h4>
            <br>
            <p>
                宿舍家具作为学生住宿环境中最重要的构成部分，要能够合理的规划利用空间，满足功能性需求， 还要成为便于室友之间交流的载体，同时还要能够创造出属于每一个人的私属空间。本研究项目立 足于对宿舍家具“公共性”特征和“私属性”特征的研究，通过分析学生在宿舍内的生活、学习方式， 学生对宿舍家具的功能需求和心理需求，寻找出能够完成宿舍家具“公共性”角色和“私属性”角色相 互合理转变的方法，并以此为依据进行宿舍家具设计。
            </p>
        </div>
        <div id="notebook"></div>
    </div>
    <div class="content">
        <div class="party" id="part1"><img src="/static/images/projects/morethanone/morethanone1.jpg" width="100%" /></div>
        <div class="party" id="part2"><img src="/static/images/projects/morethanone/morethanone2.jpg" width="100%" /></div>
        <div class="party" id="part3"><img src="/static/images/projects/morethanone/morethanone3.jpg" width="100%" /></div>
        <div class="party" id="part4"><img src="/static/images/projects/morethanone/morethanone4.jpg" width="100%" /></div>
        <div class="party" id="part5"><img src="/static/images/projects/morethanone/morethanone5.jpg" width="100%" /></div>
    </div>
    <catalogue v-bind:backgroundColor="'#ffffff'">
        <div slot="attachment">
            <Top></Top>
            <contact></contact>
        </div>
    </catalogue>
  </div>
</template>
<script src="./MoreThanOne.vue.js"></script>
<style src="./MoreThanOne.vue.css" scoped></style>
