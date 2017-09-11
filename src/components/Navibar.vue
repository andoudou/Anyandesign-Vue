<template>
    <div id="navibar" v-bind:class="bannerClassObject">
        <div id="bar">
            <router-link id="home" v-bind:to="'/'">
                <div id="logo"></div>
            </router-link>
            <div id="menu">
                <ul>
                    <div class="dropdown">
                        <li class="underline">
                            <h5 class="dropbtn">WORKS</h5>
                            <div class="dropdown-content">
                                <router-link v-bind:to="'/'">
                                    <h6 class="underline">SELECTED</h6>
                                </router-link>
                                <router-link v-bind:to="'/all'">
                                    <h6 class="underline">All</h6>
                                </router-link>
                            </div>
                        </li>
                    </div>

                    <li class="underline">
                        <router-link class="menu" v-bind:to="'/about'">
                            <h5>ABOUT</h5>
                        </router-link>
                    </li>

                    <div class="dropdown">
                        <li class="underline">
                            <h5 class="dropbtn">DOWNLOAD</h5>
                            <div class="dropdown-content">
                                <!--<router-link class="scroll_projects" v-bind:to="'/oops'">
                                    <h6 class="underline">PORTFOLIO</h6>
                                </router-link>-->
                                <a href="/static/files/anyan_resume.pdf" target="_blank">
                                    <h6 class="underline">RESUME</h6>
                                </a>
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
            <div id="hamburger" v-on:click="showPopup = true">
            </div>
            <transition name="popup"
                v-on:before-enter="beforeMenuEnter"
                v-on:after-enter="afterMenuEnter"
                v-on:after-leave="afterMenuLeave">
                <div id="popupmenu" v-if="showPopup">
                    <ul>
                        <transition-group name="list" 
                            v-on:before-enter="beforeListEnter"
                            v-on:enter="listEnter"
                            v-on:before-leave="beforeListLeave"
                            v-on:leave="listLeave"
                            v-on:after-leave="afterListLeave">
                            <li v-if="showList" key="0" v-bind:data-index="0">
                                <a v-on:click="navigateTo('/', 0)">HOME</a>
                            </li>
                            <li v-if="showList" key="1" v-bind:data-index="1">
                                <a v-on:click="navigateTo('/all', 1)">ALL WORKS</a>
                            </li>
                            <li v-if="showList" key="2" v-bind:data-index="2">
                                <a v-on:click="navigateTo('/about', 2)">ABOUT</a>
                            </li>
                            <li v-if="showList" key="3" v-bind:data-index="3">
                                <a href="/static/files/anyan_resume.pdf">RESUME</a>
                            </li>
                            <li v-if="showList" key="4" v-bind:data-index="maxIndex">
                                <div id="goback" v-on:click="navigateTo('', 4)"></div>
                            </li>
                        </transition-group>
                    </ul>
                </div>
            </transition>
        </div>
    </div>
</template>
<script src="./Navibar.vue.js"></script>
<style src="./Navibar.vue.css" scoped></style>

