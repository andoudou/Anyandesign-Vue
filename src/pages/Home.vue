<template>
  <div id="home">
    <cover v-bind:scrollTo="'#pageContent'" v-bind:backgroundClass="'home'">
        <div slot="headlineContent">
            <h2 class="topline">Portfolio Site</h2>
            <div id="change">
                <transition
                    v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                    v-on:leave="leave"  mode="out-in">
                    <h1 v-bind:key="currentChange"> {{ changedMessage }}</h1>
                </transition>
            </div>
        </div>
        <span slot="photoinfoContent">Rijks, Amsterdam Sept. 2016</span>
    </cover>
    <div class="container page" id="pageContent">
        <div id="describ">
            <h4>Focusing on User Experience, Interaction Design and Data Visualization,</h4>
            <h4>I have a passion for design and wish to share with you.</h4>
        </div>

        <!--第一行-->
        <div class="row" id="row1">
            <transition v-on:leave="leavePage"
            v-on:before-leave="beforeLeavePage"
            v-on:after-enter="afterEnterPage"
            mode="out-in">
                <div class="three columns" v-if="itemVisible('/portfolio/foodprint')" key="b">
                    <a href="javascript:void(0)" v-on:click="itemClicked('/portfolio/foodprint')">
                        <div class="picture" id="picture1">
                            <div class="text"><span>
                                    <h3 class="eng_name">Foodprint</h3>
                                    <h6 class="work_class">UI/Ixd</h6>
                                    <h6 class="ch_name">「碳从口出」个人饮食碳排放管理</h6>
                            </span></div>
                        </div>
                    </a>
                </div>
                <div class="three columns" style="height: 1px;" v-else key="a"></div>
            </transition>
            <div class="three columns">
                <div class="picture" id="picture2">
                    <div class="text"><span>
						</span></div>
                </div>
            </div>
            <div class="six columns">
                <router-link v-bind:to="'/portfolio/performingwall'">
                    <div class="picture" id="picture3">
                        <div class="text"><span>
								<h3 class="eng_name">Performing Wall</h3>
								<h6 class="work_class">UX/Ixd</h6>
								<h6 class="ch_name">「动次打次」面向未来办公情景的交互设计</h6>
						</span></div>
                    </div>
                </router-link>
            </div>
        </div>
        <!--第二行-->
        <div class="row" id="row2">
            <div class="three columns">
                <div class="picture" id="picture4">
                    <div class="text"><span>
						</span></div>
                </div>
            </div>
            <div class="six columns">
                <router-link v-bind:to="'/portfolio/lightingroom'">
                    <div class="picture" id="picture5">
                        <div class="text"><span>
                            <h3 class="eng_name">Lighting Room</h3>
                            <h6 class="work_class">UX/Ixd</h6>
                            <h6 class="ch_name">试灯间</h6>
						</span></div>
                    </div>
                </router-link>
            </div>
            <div class="three columns">
                <router-link v-bind:to="'/portfolio/leyue'">
                    <div class="picture" id="picture6">
                        <div class="text"><span>
                            <h3 class="eng_name">LE YUE</h3>
                            <h6 class="work_class">UX/UI/Ixd</h6>
                            <h6 class="ch_name">「乐乐」心脑血管疾病恢复与管理系统</h6>
						</span></div>
                    </div>
                </router-link>
            </div>
        </div>

        <!--第三行-->
        <div class="row" id="row3">
            <div class="three columns">
                <router-link v-bind:to="'/oops'">
                    <div class="picture" id="picture7">
                        <div class="text"><span>
								<h3 class="eng_name">Meet Xi'an</h3>
								<h6 class="work_class">Bicycle</h6>
								<h6 class="ch_name">「西遇」单车</h6>
						</span></div>
                    </div>
                </router-link>
            </div>
            <div class="three columns">
                <div class="picture" id="picture8">
                    <div class="text"><span>
						</span></div>
                </div>
            </div>
            <div class="six columns">
                <router-link v-bind:to="'/portfolio/morethanone'">
                    <div class="picture" id="picture9">
                        <div class="text"><span>
								<h3 class="eng_name">More Than One</h3>
								<h6 class="work_class">Furniture</h6>
								<h6 class="ch_name">「不拘一格」学生家具</h6>
							</span></div>
                    </div>
                </router-link>
            </div>
        </div>
        <div id="describ">
            <router-link v-bind:to="'/all'">
                <h4 id="explor">EXPLOR MORE<br>...</h4>
            </router-link>
        </div>
    </div>
    <!--底栏-->
    <div id="ground">
        <top></top>
        <contact></contact>
    </div>
  </div>
</template>

<script>
import Cover from '../components/Cover.vue'
import Contact from '../components/Contact.vue'
import Top from '../components/Top.vue'

export default {
  name: 'home',
  components: {
    Cover,
    Contact,
    Top
  },
  data () {
      return {
          currentChange: 0,
          fadeInDuration: 2000,
          fadeOutDuration: 0,
          currentClickedItem: ""
      }
  },
  mounted () {
      this.currentChange = 1
  },
  created () {
      window.scrollTo(0, 0)
  },
  computed: {
      changedMessage: function() {
          switch (this.currentChange) {
              case 1: return 'Design for Behavior'
              case 2: return 'Design for Experience'
              case 3: return 'Design for Service'
          }
      }
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
        if(this.fadeInDuration === 0) {
            el.style.opacity = 1
            return
        }
        var vm = this
        var id = setInterval(frame, this.fadeInDuration/10)
        function frame() {
            if (Number(el.style.opacity) >= 1) {
                clearInterval(id)
                done()
                if(vm.currentChange == 3) {
                    vm.currentChange = 1
                } else {
                    vm.currentChange++
                }
            } else {
                el.style.opacity = Number(el.style.opacity) + 0.1;
                
            }
        }
    },
    leave: function (el, done) {
        if(this.fadeOutDuration === 0) {
            el.style.opacity = 0
            done()
            return
        }
        var id = setInterval(frame, this.fadeOutDuration/10);
        function frame() {
            if (Number(el.style.opacity) <= 0) {
                clearInterval(id);
                done()
            } else {
                el.style.opacity = Number(el.style.opacity) - 0.1;
            }
        }
    },
    itemClicked: function (name){
        this.currentClickedItem = name;
    },
    itemVisible: function (name){
        return this.currentClickedItem != name
    },
    beforeLeavePage: function(el) {
        el.style.zIndex = 1000
        el.style.opacity = 1
    },
    leavePage: function (el, done) {
        console.log("leave")
        console.log(el.style.opacity)
        var vm = this;
        var currentSca = 1;
        var id = setInterval(frame, 100);
        function frame(){
            if(currentSca >= 10) {
                clearInterval(id)
                console.log("done still")
                done()
            } else {
                currentSca += 0.5
                el.style.opacity = Number(el.style.opacity) - 0.05;
                vm.setTransform(el, {rot: 0, sca: currentSca, skx: 0, sky: 0})
            }
        }
    },
    afterEnterPage: function (el){
        console.log("after enter")
        this.$router.push(this.currentClickedItem)
    },
    setTransform: function (element, elTransformArg) {
        var transfromString = ("rotate(" + elTransformArg.rot + "deg ) scale("
            + elTransformArg.sca + ") skewX(" + elTransformArg.skx + "deg ) skewY("
            + elTransformArg.sky + "deg )");

        // now attach that variable to each prefixed style
        element.style.webkitTransform = transfromString;
        element.style.MozTransform = transfromString;
        element.style.msTransform = transfromString;
        element.style.OTransform = transfromString;
        element.style.transform = transfromString;
    }
  }
}
</script>

<style scoped>
.topline {
    position: absolute;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    top: -4vmin;
    text-align: center;
    font-weight: 600;
}

#change {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    text-align: center;
}

#describ {
    background: #fff;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    position: relative;
    padding: calc(10 * (1vw + 1vh - 1vmin)) 0;
    height: auto;
}

#describ h4 {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    text-align: center;
    font-weight: 500;
    letter-spacing: 0.5px;
}

#explor:hover {
    transition: .2s;
    color: #aaa;
}

/* catalogou */

.catalogue {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    padding: 15vh 0;
    text-align: center;
}

.catalogue h3 {
    padding-bottom: calc(6 * (1vw + 1vh - 1vmin));
}

.table {
    width: 100%;
}

.table ul {
    list-style-type: none;
}

.queue {
    width: 24%;
    height: 150px;
    display: inline-table;
}

.queue a:hover {
    color: #aaa;
    /*color: #FF009D;*/
    transition: .2s;
}

.table li,
a {
    font-weight: 400;
    line-height: 1.5;
}

.catalogueicon {
    width: 80px;
    height: 80px;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    margin-bottom: 40px;
    transition: all .2s;
}

#catalogueicon1 {
    background: url('/static/images/icon/catalogue1.svg') no-repeat 0 0;
    background-size: cover;
}

#catalogueicon2 {
    background: url('/static/images/icon/catalogue1.svg') no-repeat 33.3% 0;
    background-size: cover;
}

#catalogueicon3 {
    background: url('/static/images/icon/catalogue1.svg') no-repeat 66.666667% 0;
    background-size: cover;
}

#catalogueicon4 {
    background: url('/static/images/icon/catalogue1.svg') no-repeat 100%;
    background-size: cover;
}

.queue:hover div {
    transform: scale(1.3, 1.3);
    transition: .5s;
}

.queue:hover #catalogueicon1 {
    background: url('/static/images/icon/catalogue2.svg') no-repeat 0 0;
    background-size: cover;
}

.queue:hover #catalogueicon2 {
    background: url('/static/images/icon/catalogue2.svg') no-repeat 33.3% 0;
    background-size: cover;
}

.queue:hover #catalogueicon3 {
    background: url('/static/images/icon/catalogue2.svg') no-repeat 66.666667% 0;
    background-size: cover;
}

.queue:hover #catalogueicon4 {
    background: url('/static/images/icon/catalogue2.svg') no-repeat 100%;
    background-size: cover;
}

/* end foot */

.container {
    position: relative;
    width: 100%;
    height: inherit;
    z-index: 50;
}

.row {
    position: relative;
    width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    padding: 0 0 0 0;
}

.picture {
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
}

.text {
    background: rgba(255, 255, 255, 0.9);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0;
    opacity: 0;
    letter-spacing: -1px;
    transition: all 0.5s;
}

.text:hover {
    opacity: 1;
    letter-spacing: 1px;
}

.text span {
    position: absolute;
    width: 100%;
    top: 40%;
}

.eng_name,
.work_class,
.ch_name {
    text-align: center;
    text-decoration: none;
}

.picture span {
    color: #000;
}

.eng_name {
    font-size: 18px;
    font-weight: 500;
}

.work_class {
    font-size: 14px;
    font-weight: lighter;
}

.ch_name {
    font-size: 12px;
    font-weight: normal;
}

#picture2 div {
    background: url('/static/images/thumbnail/learning.jpg') no-repeat center;
    background-size: cover;
}

#picture4 div {
    background: url('/static/images/thumbnail/thinking.jpg') no-repeat center;
    background-size: cover;
}

#picture8 div {
    background: url('/static/images/thumbnail/practice.jpg') no-repeat center;
    background-size: cover;
}

#picture1 {
    background: url('/static/images/thumbnail/foodprint.jpg') no-repeat center;
    background-size: cover;
}

#picture2 {
    background: url('/static/images/thumbnail/learning.jpg') no-repeat center;
    background-size: cover;
}

#picture3 {
    background: url('/static/images/thumbnail/performingwall.jpg') no-repeat center;
    background-size: cover;
}

#picture4 {
    background: url('/static/images/thumbnail/thinking.jpg') no-repeat center;
    background-size: cover;
}

#picture5 {
    background: url('/static/images/thumbnail/lightingroom.jpg') no-repeat center;
    background-size: cover;
}

#picture6 {
    background: url('/static/images/thumbnail/leyue.jpg') no-repeat center;
    background-size: cover;
}

#picture7 {
    background: url('/static/images/thumbnail/meetxian.jpg') no-repeat center;
    background-size: cover;
}

#picture8 {
    background: url('/static/images/thumbnail/practice.jpg') no-repeat center;
    background-size: cover;
}

#picture9 {
    background: url('/static/images/thumbnail/morethanone.jpg') no-repeat center;
    background-size: cover;
}

#ground {
    background: url('/static/images/whale2.jpg') no-repeat top;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
    position: relative;
    bottom: 0;
    margin: 0;
    width: 100%;
    height: 50vh;
    transition: all 0.5s;
}

.column,
.columns {
    width: 100%;
    float: left;
    box-sizing: border-box;
}

.picture {
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 62vw;
}

/* For devices larger than 140px */

@media (min-device-width: 550px) {
    .column,
    .columns {
        margin: 0;
        padding: 0;
        margin-left: 0;
        padding-bottom: 0;
        height: auto;
        position: relative;
    }
    .column:first-child,
    .columns:first-child {
        margin-left: 0;
    }
    .one.column,
    .one.columns {
        width: 4.66666666667%;
    }
    .two.columns {
        width: 13.3333333333%;
    }
    .three.columns {
        width: 25%;
    }
    .four.columns {
        width: 30.6666666667%;
    }
    .five.columns {
        width: 39.3333333333%;
    }
    .six.columns {
        width: 50%;
    }
    .seven.columns {
        width: 56.6666666667%;
    }
    .eight.columns {
        width: 65.3333333333%;
    }
    .nine.columns {
        width: 74.0%;
    }
    .ten.columns {
        width: 82.6666666667%;
    }
    .eleven.columns {
        width: 91.3333333333%;
    }
    .twelve.columns {
        width: 100%;
        margin-left: 0;
    }
    .one-half.column {
        width: 48%;
    }
}


/* Self Clearing Goodness */

.container:after,
.row:after,
.u-cf {
    content: "";
    display: table;
    clear: both;
}

@media (min-device-width: 1025px) {
    .picture {
        height: 25vw;
    }
}

@media (max-device-width: 1025px) {
    #banner {
        background-attachment: scroll;
    }
}
</style>

<style>
#banner.home {
    background-image: url('/static/images/whale.jpg');
}
</style>
