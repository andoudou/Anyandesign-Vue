<template>
    <div>
        <div id="wrap">
            <div id="bannerWrap">
                <div id="banner"></div>
            </div>
            <div class="headlinecenter">
                <h1>OOPS!</h1>
                <h2>The page you request is still under construction</h2><br><br>
                    <router-link v-bind:to="'/'">
                        <div id="homebutton">
                            <h5>BACK TO HOME</h5>
                        </div>
                    </router-link>
            </div>
            <h6 id="photoinfo">@Samuel Zeller from unsplash.com</h6>
        </div>
    </div>
</template>
<script src="./Oops.vue.js"></script>
<style src="./Oops.vue.css" scoped></style>
