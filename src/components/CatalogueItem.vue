<template>
  <router-link v-if="!isCurrentPage" v-bind:to="to">{{ text }}</router-link>
  <a v-else href="javascript:void(0)" v-on:click="scrollTop()">{{ text }}</a>
</template>
<script src="./CatalogueItem.vue.js"></script>
<style src="./CatalogueItem.vue.css"></style>
