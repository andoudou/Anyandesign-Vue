<template>
  <div id="app">
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script src="./App.vue.js"></script>
<style src="./App.vue.css"></style>
