<template>
  <a v-if="isCurrentPage" href="javascript:void(0)" v-on:click="scrollTop()">{{ text }}</a>
  <router-link v-else v-bind:to="to">{{ text }}</router-link>
</template>
<script src="./CatalogueItem.vue.js"></script>
<style src="./CatalogueItem.vue.css"></style>
