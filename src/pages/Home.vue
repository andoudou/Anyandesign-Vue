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
        <span id="photoinfoContent" slot="photoinfoContent">Rijks, Amsterdam Sept. 2016</span>
    </cover>
    <div class="container page" id="pageContent">
        <div id="describ">
            <h4>Focusing on User Experience, Interaction Design and Data Visualization,</h4>
            <h4>I have a passion for design and wish to share with you.</h4>
        </div>

        <!--第一行-->
        <div class="row" id="row1">
            <div class="three columns">
                <router-link v-bind:to="'/portfolio/foodprint'">
                    <div class="picture" id="picture1">
                        <div class="text"><span>
								<h3 class="eng_name">Foodprint</h3>
								<h6 class="work_class">UI/Ixd</h6>
								<h6 class="ch_name">「碳从口出」个人饮食碳排放管理</h6>
						</span></div>
                    </div>
                </router-link>
            </div>
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

<script src="./Home.vue.js"></script>

<style src="./Home.vue.css" scoped></style>
<style>#banner.home {
  background-image: url('/static/images/whale.jpg');
}
</style>
