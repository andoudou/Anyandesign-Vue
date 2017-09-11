<template>
    <div id="navibar" v-bind:class="bannerClassObject">
        <div id="bar">
            <router-link id="home" v-bind:to="'/'">
                <div id="logo"></div>
            </router-link>
            <div id="menu">
                <ul>
                    <div class="dropdown">
                        <li class="underline">
                            <h5 class="dropbtn">WORKS</h5>
                            <div class="dropdown-content">
                                <router-link v-bind:to="'/'">
                                    <h6 class="underline">SELECTED</h6>
                                </router-link>
                                <router-link v-bind:to="'/all'">
                                    <h6 class="underline">All</h6>
                                </router-link>
                            </div>
                        </li>
                    </div>

                    <li class="underline">
                        <router-link class="menu" v-bind:to="'/about'">
                            <h5>ABOUT</h5>
                        </router-link>
                    </li>

                    <div class="dropdown">
                        <li class="underline">
                            <h5 class="dropbtn">DOWNLOAD</h5>
                            <div class="dropdown-content">
                                <!--<router-link class="scroll_projects" v-bind:to="'/oops'">
                                    <h6 class="underline">PORTFOLIO</h6>
                                </router-link>-->
                                <a href="/static/files/anyan_resume.pdf" target="_blank">
                                    <h6 class="underline">RESUME</h6>
                                </a>
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
            <div id="hamburger" v-on:click="showPopup = true">
            </div>
            <transition name="popup"
                v-on:before-enter="beforeMenuEnter"
                v-on:after-enter="afterMenuEnter"
                v-on:after-leave="afterMenuLeave">
                <div id="popupmenu" v-if="showPopup">
                    <ul>
                        <transition-group name="list" 
                            v-on:before-enter="beforeListEnter"
                            v-on:enter="listEnter"
                            v-on:before-leave="beforeListLeave"
                            v-on:leave="listLeave"
                            v-on:after-leave="afterListLeave">
                            <li v-if="showList" key="0" v-bind:data-index="0">
                                <a v-on:click="navigateTo('/', 0)">HOME</a>
                            </li>
                            <li v-if="showList" key="1" v-bind:data-index="1">
                                <a v-on:click="navigateTo('/all', 1)">ALL WORKS</a>
                            </li>
                            <li v-if="showList" key="2" v-bind:data-index="2">
                                <a v-on:click="navigateTo('/about', 2)">ABOUT</a>
                            </li>
                            <li v-if="showList" key="3" v-bind:data-index="3">
                                <a href="/static/files/anyan_resume.pdf">RESUME</a>
                            </li>
                            <li v-if="showList" key="4" v-bind:data-index="maxIndex">
                                <div id="goback" v-on:click="navigateTo('', 4)"></div>
                            </li>
                        </transition-group>
                    </ul>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    name: 'navibar',
    props: {
        isHandleScroll: {
            type: Boolean,
            default: true
        },
        isPageScrolled: {
            type: Boolean
        },
        isDarkTheme: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isScrolled: window.scrollY > 0.1 * window.innerHeight,
            showPopup: false,
            showList: false,
            navigate: '',
            clickedItemIndex: null,
            maxIndex: 4,
            // left: 37, up: 38, right: 39, down: 40,
            // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
            keys : {37: 1, 38: 1, 39: 1, 40: 1}
        }
    },
    computed: {
        bannerClassObject: function () {
            return {
                scrolled: this.isHandleScroll === true ? this.isScrolled : this.isPageScrolled,
                dark: this.isDarkTheme
            }
        }
    },
    methods: {
        handleScroll: function(event) {
            var top = typeof window.scrollY === "undefined" ? window.pageYOffset : window.scrollY
            if (top > 0.1 * window.innerHeight) {
                this.isScrolled = true
            } else {
                this.isScrolled = false
            }
        },
        navigateTo: function(path, clicked) {
            this.navigate = path
            this.showList = false
            this.clickedItemIndex = clicked
        },
        beforeMenuEnter: function(el){
            this.disableScroll()
        },
        afterMenuEnter: function(el) {
            this.showList = true
        },
        afterMenuLeave: function(el) {
            this.enableScroll()
        },
        beforeListEnter: function(el) {
            el.style.opacity = 0
            el.style.transform = this.setTransformX(el, 60)
        },
        listEnter: function(el, done) {
            var index = this.correctIndex(el.dataset.index)
            var delay = index * 120
            var vm = this;

            setTimeout(function(){
                var currentX = 60;
                var id = setInterval(frame, 50);
                function frame(){
                    if(currentX <= 0) {
                        clearInterval(id)
                        done()
                    } else {
                        currentX -= 3
                        el.style.opacity = Number(el.style.opacity) + 0.05
                        vm.setTransformX(el, currentX)
                    }
                }
            }, delay)
        },
        beforeListLeave: function(el) {
            el.style.opacity = 1
        },
        listLeave: function(el, done) {
            var delaySingle = new Number(120)
            var index = this.correctIndex(el.dataset.index)
            var delay = index * delaySingle
            var vm = this;

            setTimeout(function(){
                var currentX = 0;
                var id = setInterval(frame, 50);
                function frame(){
                    if(currentX >= 60) {
                        clearInterval(id)
                        setTimeout(function(){done()}, delaySingle * vm.maxIndex - delay)
                    } else {
                        currentX += 3
                        el.style.opacity = Number(el.style.opacity) - 0.05
                        vm.setTransformX(el, currentX)
                    }
                }
            }, delay)
        },
        afterListLeave: function(el) {
            this.clickedItemIndex = null
            if(!!this.navigate && this.$route.path !== this.navigate) {
                this.$router.push(this.navigate)
                this.navigate = ''
                this.enableScroll()
            } else {
                this.showPopup = false
            }
        },
        setTransformX: function (element, deltaX) {
            var transfromString = ("translateX(" + deltaX + "px )");

            // now attach that variable to each prefixed style
            element.style.webkitTransform = transfromString;
            element.style.MozTransform = transfromString;
            element.style.msTransform = transfromString;
            element.style.OTransform = transfromString;
            element.style.transform = transfromString;
        },
        correctIndex: function(index){
            if (this.clickedItemIndex !== null) {
                if (Number(this.clickedItemIndex) === Number(index)) {
                    return this.maxIndex
                }
                else if (this.clickedItemIndex < index) {
                    return index - 1
                }
            }
            return index
        },
        preventDefault: function(e) {
            e = e || window.event;
            if (e.preventDefault)
                e.preventDefault();
            e.returnValue = false;  
        },
        preventDefaultForScrollKeys: function(e) {
            if (this.keys[e.keyCode]) {
                preventDefault(e);
                return false;
            }
        },
        disableScroll: function(){
            window.addEventListener('DOMMouseScroll', this.preventDefault, false);
            window.onwheel = this.preventDefault; // modern standard
            window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
            window.ontouchmove  = this.preventDefault; // mobile
            document.onkeydown  = this.preventDefaultForScrollKeys;
        },
        enableScroll: function() {
            window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
            window.onmousewheel = document.onmousewheel = null; 
            window.onwheel = null; 
            window.ontouchmove = null;  
            document.onkeydown = null; 
        }
    },
    created() {
        if (this.isHandleScroll === true) {
            window.addEventListener('scroll', this.handleScroll);
        }
    },
    destroyed() {
        if (this.isHandleScroll === true) {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
}
</script>
<style scoped>
#navibar {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    width: 100%;
    height: 160px;
    z-index: 100;
    transition: all 0.4s;
}

#navibar.scrolled {
    position: fixed;
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
    height: 48px;
}

#bar {
    position: fixed;
    width: 80%;
    height: inherit;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    padding-top: 110px;
    transition: all 0.5s;
    letter-spacing: 2px;
    width: 80%;
}

#navibar.scrolled #bar {
    padding-top: 0;
    letter-spacing: 1px;
    width: 96%;
}

#logo {
    position: absolute;
    width: 28px;
    height: 28px;
    margin: 10px 0;
    background: url('/static/images/icon/logo1.svg') no-repeat center;
    transition: all 0.5s;
    background-size: 100%;
}

#logo:hover {
    transform: scale(1.3) rotate(-25deg);
    -moz-transform: scale(1.3) rotate(-25deg);
    -webkit-transform: scale(1.3) rotate(-25deg);
}

#navibar.dark #logo {
    background: url('/static/images/icon/logo3.svg') no-repeat center;
}

#navibar.scrolled #logo {
    background: url('/static/images/icon/logo2.svg') no-repeat center;
}

#navibar.scrolled.dark #logo {
    background: url('/static/images/icon/logo2.svg') no-repeat center;
}

/* full screen menu */

#menu {
    position: absolute;
    right: 0;
}

#menu ul {
    list-style: none;
    padding-top: 14px;
    height: 48px;
}

#menu li {
    display: inline-block;
    text-decoration: none;
    margin: 0 0 0 40px;
}

#menu .dropdown {
    position: relative;
    display: inline-block;
}

#menu .dropdown-content {
    display: none;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.1);
    margin: 0;
    width: auto;
    overflow: auto;
}

#menu .dropdown-content a {
    color: #000;
    margin: 15px 30px 15px 10px;
    text-decoration: none;
    display: block;
}

#menu .dropdown:hover .dropdown-content {
    display: block;
}

#menu .dropdown:hover .dropbtn {
    background-color: rgba(0, 0, 0, 0);
}

#menu .dropbtn {
    cursor: pointer;
}

#menu .underline {
    width: auto;
    height: auto;
    position: relative;
}

#menu .underline:after {
    content: "";
    width: 0;
    height: 1.5px;
    background: #000;
    position: absolute;
    top: 100%;
    left: 50%;
    transition: all .5s;
}

#menu .underline:hover:after {
    left: 0;
    width: 100%;
}

#navibar.scrolled.dark #menu .underline,
#navibar.scrolled.dark #menu .underline a {
    color: #000;
}

#navibar.dark #menu .underline,
#navibar.dark #menu .underline a {
    color: #fff;
}

#navibar.dark #menu .dropdown-content {
    background-color: rgba(255, 255, 255, 0.1);
}

#navibar.scrolled.dark #menu .dropdown-content {
    background-color: rgba(0, 0, 0, 0.1);
}

#navibar.dark #menu .underline:after {
    background: #fff;
}

#navibar.scrolled.dark #menu .underline:after {
    background: #000;
}
/* end of full screen menu */

/* mobile screen menu */
#hamburger {
    background: url('/static/images/icon/burger1.svg') no-repeat center;
    background-size: contain;
    position: absolute;
    right: 0;
    width: 56px;
    height: 56px;
    cursor: pointer;
}

#navibar.dark #hamburger {
    background: url('/static/images/icon/burger2.svg') no-repeat center;
}

#navibar.dark.scrolled #hamburger {
    background: url('/static/images/icon/burger1.svg') no-repeat center;
}

#navibar.scrolled #hamburger {
    top: 22px;
}

#popupmenu {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.95);
    height: 100%;
    width: 100%;
    z-index: 100;
}

#popupmenu ul {
    position: relative;
    text-align: center;
    font-size: 32pt;
    line-height: 5em;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
}

#goback {
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    width: 80px;
    height: 80px;
    background: url('/static/images/icon/goback.svg') no-repeat center;
    background-size: contain;
    cursor: pointer;
}

.popup-enter-active {
  transition: all .3s ease;
}
.popup-leave-active {
  transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.popup-enter, .popup-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}

/* end of mobile screen menu */

@media (max-device-width: 1024px) {
    #menu {
        display: none;
    }

    #hamburger {
        display: inline-block;
    }

    #logo {
        width: 60px;
        height: 60px;
    }

    #navibar.scrolled #logo {
        top: 10px;
    }

    #navibar.scrolled {
        height: 100px;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);

    }
}

@media (min-device-width: 1025px) {
    #menu {
        display: inline-block;
    }

    #hamburger {
        display: none;
    }

    #logo {
        width: 28px;
        height: 28px;
    }

    #navibar.scrolled {
        height: 48px;
    }
}

</style>

