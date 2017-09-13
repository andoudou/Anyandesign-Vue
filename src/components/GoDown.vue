<template>
    <a>
        <div 
          id="godownbtn" 
          class="scroll_projects" 
          v-bind:class="{scrolled: isScrolled}" 
          v-scroll-to="{element: this.scrollTo, duration: 700, easing: [0.445, 0.05, 0.55, 0.95]}"></div>
    </a>
</template>
<script src="./GoDown.vue.js"></script>
<style src="./GoDown.vue.css" scoped></style>
