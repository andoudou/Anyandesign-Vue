<template>
    <a>
        <div 
          id="godownbtn" 
          class="scroll_projects" 
          v-bind:class="{scrolled: isScrolled}" 
          v-scroll-to="{ element: this.scrollTo, duration: 700 }"></div>
    </a>
</template>

<script>
export default {
  name: 'go-down',
  props: ['isScrolled', 'scrollTo']
}
</script>
<<style scoped>
#godownbtn {
    position: absolute;
    background: url('/static/images/icon/godown.svg') no-repeat center;
    background-size: contain;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    width: 10%;
    height: 50px;
    bottom: 3vh;
    opacity: 0.9;
    z-index: 50;
    transition: .2s;
}

#godownbtn:hover {
    bottom: 3.5vh;
}

#godownbtn.scrolled {
    opacity: 0;
}
</style>
