<template>
    <a>
        <div id="top" class="scroll_top" v-scroll-to="{ element: '#app', duration: 1000 }"></div>
    </a>
</template>
<script>
export default {
  name: "top"
}
</script>
<style scoped>
#top {
    position: absolute;
    background: url('/static/images/icon/gotop.svg') no-repeat center;
    width: 10%;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    z-index: 50;
    top: 10vh;
    transition: .2s;
}

#top:hover {
    top: 9.5vh;
}

</style>
