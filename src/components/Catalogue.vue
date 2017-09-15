<template>
    <div class="cataloguebox" v-bind:style="{ background: getBackgroundColorString() }">
        <div class="catalogue">
            <h3>CATALOGUE</h3>
            <div class="table">
                <h6>
                    <div class="queue">
                        <div class="catalogueicon" id="catalogueicon1"></div>
                        <ul>
                            <li class="tablehead">UX/IxD／体验与交互</li><br>
                            <li>——</li><br>
                            <li>
                                <router-link v-bind:to="'/portfolio/foodprint'">Foodprint／碳从口出</router-link>
                            </li>
                            <li>
                                <router-link v-bind:to="'/portfolio/leyue'">LE YUE／乐乐</router-link>
                            </li>
                            <li>
                                <router-link v-bind:to="'/portfolio/lightingroom'">Lighting Room／试灯间</router-link>
                            </li>
                            <li>
                                <router-link v-bind:to="'/portfolio/performingwall'">Performing Wall／动次打次</router-link>
                            </li>
                            <li>
                                <router-link v-bind:to="'/portfolio/pick'">Pick／匹课</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="queue">
                        <div class="catalogueicon" id="catalogueicon2"></div>
                        <ul>
                            <li class="tablehead">INFOGRAPHIC／信息可视化</li><br>
                            <li>——</li><br>
                            <li>
                                <router-link v-bind:to="'/portfolio/toiletthings'">Things in Toilet／厕所那些事</router-link>
                            </li>
                            <li>
                                <router-link v-bind:to="'/portfolio/moveablefeasts'">Moveable Feasts／流动的盛宴</router-link>
                            </li>
                            <li>
                                <router-link v-bind:to="'/portfolio/eco360'">Eco360 CJM／Eco360用户旅程图</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="queue">
                        <div class="catalogueicon" id="catalogueicon3"></div>
                        <ul>
                            <li class="tablehead">INDUSTRIAL DESIGN／工业产品设计</li><br>
                            <li>——</li><br>
                            <li>
                                <router-link v-bind:to="'/portfolio/morethanone'">More Than One／不拘一格</router-link>
                            </li>
                            <li>
                                <router-link v-bind:to="'/oops'">Meet Xi'an／西遇</router-link>
                            </li>
                            <li>
                                <router-link v-bind:to="'/oops'">BEIREN／北人</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="queue">
                        <div class="catalogueicon" id="catalogueicon4"></div>
                        <ul>
                            <li class="tablehead">OTHERS／其他</li><br>
                            <li>——</li><br>
                            <li>
                                <router-link v-bind:to="'/portfolio/youthfarm'">Farm of Youth／知青农场</router-link>
                            </li>
                            <li>
                                <router-link v-bind:to="'/oops'">Penguin Group Exhibition／企鹅展厅</router-link>
                            </li>
                            <li>
                                <router-link v-bind:to="'/portfolio/nightlightlamp'">Nightlight Lamp／夜光灯</router-link>
                            </li>
                            <li>
                                <router-link v-bind:to="'/oops'">Copperplate／铜板体书法</router-link>
                            </li>
                        </ul>
                    </div>
                </h6>
            </div>
        </div>
        <slot name="attachment"></slot>
    </div>
</template>
<script src="./Catalogue.vue.js"></script>
<style src="./Catalogue.vue.css" scoped></style>
