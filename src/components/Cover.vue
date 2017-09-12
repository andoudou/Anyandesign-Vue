<template>
    <div id="wrap">
      <navibar v-bind:isPageScrolled="isScrolled" v-bind:isHandleScroll="false" v-bind:scrollTo="scrollTo"></navibar>
      <div id="bannerWrap">
            <div id="banner" v-bind:class="backgroundClass"></div>
      </div>
      <div class="headline" v-bind:class="{scrolled: isScrolled}">
          <slot name="headlineContent"></slot>
      </div>

      <h6 id="photoinfo" v-bind:class="{scrolled: isScrolled}">
          <slot name="photoinfoContent"></slot>
      </h6>

      <go-down v-bind:isScrolled="isScrolled" v-bind:scrollTo="scrollTo"></go-down>
    </div>
</template>
<script src="./Cover.vue.js"></script>
<style src="./Cover.vue.css" scoped></style>
