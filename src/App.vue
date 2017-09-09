<template>
  <div id="app">
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Avenir', 'Trebuchet MS', 'Vernada', 'Helvetica', sans-serif;
}

a {
    cursor: pointer;
    text-decoration: none;
    color: #000;
    font-weight: 300;
}

h1 {
    font-size: 36pt;
    font-weight: 600;
    line-height: 1.2;
}

h2 {
    font-size: 18pt;
    font-weight: 300;
    line-height: 1.2;
}

h3 {
    font-size: 12pt;
    font-weight: 500;
}

h4 {
    font-size: 12pt;
    font-weight: 300;
}

h5 {
    font-size: 10pt;
    font-weight: 500;
}

h6 {
    font-size: 10pt;
    font-weight: 300;
}

p {
    font-size: 10pt;
    font-weight: 400;
    letter-spacing: 1px;
}

.component-fade-enter-active {
  transition: all .3s ease;
}
.component-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.component-fade-enter, .component-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
