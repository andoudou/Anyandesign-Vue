<template>
  <div id="home">
    <cover v-bind:scrollTo="'#pageContent'" v-bind:backgroundClass="'all'">
        <div slot="headlineContent">
            <h1>Here We Go</h1>
        </div>
        <span id="photoinfoContent" slot="photoinfoContent">Rijks, Amsterdam Sept. 2016</span>
    </cover>
    <div class="container page" id="pageContent">
        <!--<div id="describ">
            <h4>Focusing on User Experience, Interaction Design and Data Visualization,</h4>
            <h4>I have a passion for design and wish to share with you.</h4>
        </div>-->

        <div id="list" class="row">
            <div id="ca">
                <div class="proa" id="pro1">
                    <router-link v-bind:to="'/portfolio/lightingroom'" target="_blank">
                        <img src="/static/images/projects/all/lightingroom.jpg" width="100%" />
                        <div class="intro">
                            <div>
                                <h3>LIGHTING ROOM／试灯间</h3>
                            </div>
                            <h6>Philips online shopping experience design focuse on step of comparing different products in the whole process of choosing and buying lamps.</h6>
                            <h5 class="time">User Experience/ Interaction Design 11. 2016</h5>
                        </div>
                    </router-link>
                </div>
                <div class="proa" id="pro3">
                    <router-link v-bind:to="'/portfolio/foodprint'" target="_blank">
                        <img src="/static/images/projects/all/foodprint.jpg" width="80%" />
                        <div class="intro">
                            <div>
                                <h3>FOODPRINT／碳从口出</h3>
                            </div>
                            <h6>Childhood memory of blue sky has faded away with growing fog and haze, but we still hope to find the way back by carben footprint.</h6>
                            <h5 class="time">User Interface／Interaction Design 01. 2017</h5>
                        </div>
                    </router-link>
                </div>
                <div class="proa" id="pro5">
                    <router-link v-bind:to="'/portfolio/pick'" target="_blank">
                        <img src="/static/images/projects/all/pick.jpg" width="100%" />
                        <div class="intro">
                            <div>
                                <h3>PICK／匹课</h3>
                            </div>
                            <h6>4M3.COM选课网的改进设计能够主动为同学们精选课程，让选课流程更加顺畅； 合理进行分流，避免每次开学前的选课网“大拥堵”，让每位同学都能够选到心仪的课程。</h6>
                            <h5 class="time">User Interface／Interaction Design/ User Experience 10. 2015</h5>
                        </div>
                    </router-link>
                </div>
                <div class="proa" id="pro7">
                    <router-link v-bind:to="'/portfolio/eco360'" target="_blank">
                        <img src="/static/images/projects/all/eco360.jpg" width="80%" />
                        <div class="intro">
                            <div>
                                <h3>ECO360 CJM／ECO360用户旅程图</h3>
                            </div>
                            <h6>Eco360 customer journey map illustrates the process of a person or an organization from being aware of Azure to becoming a billable customer. </h6>
                            <h5 class="time">Infographic 07. 2017</h5>
                        </div>
                    </router-link>
                </div>
                <div class="proa" id="pro9">
                    <router-link v-bind:to="'/portfolio/morethanone'" target="_blank">
                        <img src="/static/images/projects/all/morethanone.jpg" width="100%" />
                        <div class="intro">
                            <div>
                                <h3>MORE THAN ONE／不拘一格</h3>
                            </div>
                            <h6>宿舍家具作为学生住宿环境中最重要的构成部分，要能够合理的规划利用空间，满足功能性需求， 还要成为便于室友之间交流的载体，同时还要能够创造出属于每一个人的私属空间。</h6>
                            <h5 class="time">Industrial Design/ User Research 04. 2014</h5>
                        </div>
                    </router-link>
                </div>
                <div class="proa" id="pro11">
                    <router-link v-bind:to="'/oops'" target="_blank">
                        <img src="/static/images/projects/all/meetxi'an.jpg" width="80%" />
                        <div class="intro">
                            <div>
                                <h3>MEET XI'AN／西遇</h3>
                            </div>
                            <h6></h6>
                            <h5 class="time">ndustrial Design 04. 2015</h5>
                        </div>
                    </router-link>
                </div>
                <div class="proa" id="pro13">
                    <router-link v-bind:to="'/oops'" target="_blank">
                        <img src="/static/images/projects/all/copperplate.jpg" width="100%" />
                        <div class="intro">
                            <div>
                                <h3>COPPERPLATE／铜板体书法</h3>
                            </div>
                            <h6></h6>
                            <h5 class="time">Calligraphy, Personal hobby</h5>
                        </div>
                    </router-link>
                </div>
            </div>
            <div id="cb">
                <div class="prob" id="pro2">
                    <router-link v-bind:to="'/portfolio/leyue'" target="_blank">
                        <img src="/static/images/projects/all/leyue.jpg" width="100%" />
                        <div class="intro">
                            <div>
                                <h3>LE YUE／乐乐</h3>
                            </div>
                            <h6>Hypertension is a long term medical condition which is a major risk factor for cardiovascular disease. Insisting on measuring blood pressure and taking medicine could reduce the incidence of cardiovascular disease.</h6>
                            <h5 class="time">User Experience/ Interaction Design/ User Interface 05. 2016</h5>
                        </div>
                    </router-link>
                </div>
                <div class="prob" id="pro4">
                    <router-link v-bind:to="'/portfolio/performingwall'" target="_blank">
                        <img src="/static/images/projects/all/performingwall.jpg" width="100%" />
                        <div class="intro">
                            <div>
                                <h3>PERFORMING WALL／动次打次</h3>
                            </div>
                            <h6>Future-oriented Interactive Device</h6>
                            <h5 class="time">User Experience/ Interaction Design 12. 2015</h5>
                        </div>
                    </router-link>
                </div>
                <div class="prob" id="pro6">
                    <router-link v-bind:to="'/portfolio/toiletthings'" target="_blank">
                        <img src="/static/images/projects/all/toiletthings.jpg" width="100%" />
                        <div class="intro">
                            <div>
                                <h3>THINGS IN TOILET／厕所那些事</h3>
                            </div>
                            <h6>Our work start from that we felt women always spend more time in restroom than men. There are a lot of reasons you might figure out such as making up, chating or other special reasons. However, after our investigation, we found
                                there are also some objective reasons.</h6>
                            <h5 class="time">Data Visualization 05. 2016</h5>
                        </div>
                    </router-link>
                </div>
                <div class="prob" id="pro8">
                    <router-link v-bind:to="'/portfolio/moveablefeasts'" target="_blank">
                        <img src="/static/images/projects/all/moveablefeasts.jpg" width="100%" />
                        <div class="intro">
                            <div>
                                <h3>MOVEABLE FEASTS／流动的盛宴</h3>
                            </div>
                            <h6>Moveable Feasts is an online platform which is organized around collecting an encyclopedia of Shanghai streetfood; tracing recipes; collecting origin stories, gathering information on cooking procedures and tools; mapping vendors
                                and stalls throughout the city.</h6>
                            <h5 class="time">Infographic 03. 2016</h5>
                        </div>
                    </router-link>
                </div>
                <div class="prob" id="pro10">
                    <router-link v-bind:to="'/portfolio/youthfarm'" target="_blank">
                        <img src="/static/images/projects/all/youthfarm.jpg" width="100%" />
                        <div class="intro">
                            <div>
                                <h3>FARM OF YOUTH／知青农场</h3>
                            </div>
                            <h6>Educated Youth Farm is base on the farming memory of Shanghai educated youth in Dafeng. Educated youth farm advocate a simple lifestyle and pass youth positive spirit by natural simple products and raw materials.</h6>
                            <h5 class="time">Packaging/ Branding 07. 2014</h5>
                        </div>
                    </router-link>
                </div>
                <div class="prob" id="pro12">
                    <router-link v-bind:to="'/oops'" target="_blank">
                        <img src="/static/images/projects/all/beiren.jpg" width="100%" />
                        <div class="intro">
                            <div>
                                <h3>BEIREN／北人无溶剂复合机</h3>
                            </div>
                            <h6></h6>
                            <h5 class="time">Industrial Design 05. 2014</h5>
                        </div>
                    </router-link>
                </div>
                <div class="prob" id="pro14">
                    <router-link v-bind:to="'/portfolio/nightlightlamp'" target="_blank">
                        <img src="/static/images/projects/all/nightlightlamp.jpg" width="100%" />
                        <div class="intro">
                            <div>
                                <h3>NIGHTLIGHTING LAMP／夜光灯</h3>
                            </div>
                            <h6></h6>
                            <h5 class="time">Craft 11. 2014</h5>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <!--底栏-->
    <catalogue></catalogue>
    <div id="ground">
        <top></top>
        <contact></contact>
    </div>
  </div>
</template>
<script src="./All.vue.js"></script>
<style src="./All.vue.css" scoped></style>
<style>
#banner.all {
    background-image: url('/static/images/vase.jpg');
}
</style>
