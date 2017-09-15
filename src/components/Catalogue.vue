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
                                <catalogue-item v-bind:to="'/portfolio/foodprint'" v-bind:text="'Foodprint／碳从口出'"></catalogue-item>
                            </li>
                            <li>
                                <catalogue-item v-bind:to="'/portfolio/leyue'" v-bind:text="'LE YUE／乐乐'"></catalogue-item>
                            </li>
                            <li>
                                <catalogue-item v-bind:to="'/portfolio/lightingroom'" v-bind:text="'Lighting Room／试灯间'"></catalogue-item>
                            </li>
                            <li>
                                <catalogue-item v-bind:to="'/portfolio/performingwall'" v-bind:text="'Performing Wall／动次打次'"></catalogue-item>
                            </li>
                            <li>
                                <catalogue-item v-bind:to="'/portfolio/pick'" v-bind:text="'Pick／匹课'"></catalogue-item>
                            </li>
                        </ul>
                    </div>
                    <div class="queue">
                        <div class="catalogueicon" id="catalogueicon2"></div>
                        <ul>
                            <li class="tablehead">INFOGRAPHIC／信息可视化</li><br>
                            <li>——</li><br>
                            <li>
                                <catalogue-item v-bind:to="'/portfolio/toiletthings'" v-bind:text="'Things in Toilet／厕所那些事'"></catalogue-item>
                            </li>
                            <li>
                                <catalogue-item v-bind:to="'/portfolio/moveablefeasts'" v-bind:text="'Moveable Feasts／流动的盛宴'"></catalogue-item>
                            </li>
                            <li>
                                <catalogue-item v-bind:to="'/portfolio/eco360'" v-bind:text="'Eco360 CJM／Eco360用户旅程图'"></catalogue-item>
                            </li>
                        </ul>
                    </div>
                    <div class="queue">
                        <div class="catalogueicon" id="catalogueicon3"></div>
                        <ul>
                            <li class="tablehead">INDUSTRIAL DESIGN／工业产品设计</li><br>
                            <li>——</li><br>
                            <li>
                                <catalogue-item v-bind:to="'/portfolio/morethanone'" v-bind:text="'More Than One／不拘一格'"></catalogue-item>
                            </li>
                            <li>
                                <catalogue-item v-bind:to="'/oops'" v-bind:text="'Meet Xi\'an／西遇'"></catalogue-item>
                            </li>
                            <li>
                                <catalogue-item v-bind:to="'/oops'" v-bind:text="'BEIREN／北人'"></catalogue-item>
                            </li>
                        </ul>
                    </div>
                    <div class="queue">
                        <div class="catalogueicon" id="catalogueicon4"></div>
                        <ul>
                            <li class="tablehead">OTHERS／其他</li><br>
                            <li>——</li><br>
                            <li>
                                <catalogue-item v-bind:to="'/portfolio/youthfarm'" v-bind:text="'Farm of Youth／知青农场'"></catalogue-item>
                            </li>
                            <li>
                                <catalogue-item v-bind:to="'/oops'" v-bind:text="'Penguin Group Exhibition／企鹅展厅'"></catalogue-item>
                            </li>
                            <li>
                                <catalogue-item v-bind:to="'/portfolio/nightlightlamp'" v-bind:text="'Nightlight Lamp／夜光灯'"></catalogue-item>
                            </li>
                            <li>
                                <catalogue-item v-bind:to="'/oops'" v-bind:text="'Copperplate／铜板体书法'"></catalogue-item>
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
