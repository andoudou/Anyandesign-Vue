<template>
    <a>
        <div 
          id="godownbtn" 
          class="scroll_projects" 
          v-bind:class="{scrolled: isScrolled}" 
          v-scroll-to="{element: scrollTo, duration: 700, easing: $helper.scrollDownEasing}"></div>
    </a>
</template>
<script src="./GoDown.vue.js"></script>
<style src="./GoDown.vue.css" scoped></style>
