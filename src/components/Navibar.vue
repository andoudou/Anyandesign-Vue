<template>
    <div id="navibar" v-bind:class="{scrolled: isScrolledFinally(), dark: isDarkTheme}">
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
                                <router-link class="scroll_projects" v-bind:to="'/oops'">
                                    <h6 class="underline">PORTFOLIO</h6>
                                </router-link>
                                <a href="/static/files/anyan_resume.pdf" target="_blank">
                                    <h6 class="underline">RESUME</h6>
                                </a>
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
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
            isScrolled: window.scrollY > 0.1 * window.innerHeight
        }
    },
    methods: {
        isScrolledFinally: function() {
            return this.isHandleScroll === true ? this.isScrolled : this.isPageScrolled
        },
        handleScroll: function(event) {
            if (window.scrollY > 0.1 * window.innerHeight) {
                this.isScrolled = true
            } else {
                this.isScrolled = false
            }
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
    height: 48px;
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
}

#logo:hover {
    transform: scale(1.3) rotate(-25deg);
}

#navibar.scrolled #logo {
    background: url('/static/images/icon/logo2.svg') no-repeat center;
    background-size: 100%;
}

#menu {
    position: absolute;
    right: 0;
}

#bar ul {
    list-style: none;
    padding-top: 14px;
    height: 48px;
}

#bar li {
    display: inline-block;
    text-decoration: none;
    margin: 0 0 0 40px;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.1);
    margin: 0;
    width: auto;
    overflow: auto;
}

.dropdown-content a {
    color: #000;
    margin: 15px 30px 15px 10px;
    text-decoration: none;
    display: block;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown:hover .dropbtn {
    background-color: rgba(0, 0, 0, 0);
}

.dropbtn {
    cursor: pointer;
}

.underline {
    width: auto;
    height: auto;
    position: relative;
}

.underline:after {
    content: "";
    width: 0;
    height: 1.5px;
    background: #000;
    position: absolute;
    top: 100%;
    left: 50%;
    transition: all .5s;
}

.underline:hover:after {
    left: 0;
    width: 100%;
}

#navibar.scrolled.dark .underline,
#navibar.scrolled.dark .underline a {
    color: #000;
}

#navibar.dark .underline,
#navibar.dark .underline a {
    color: #fff;
}

#navibar.dark #logo {
    background: url('/static/images/icon/logo3.svg') no-repeat center;
}

#navibar.dark .dropdown-content {
    background-color: rgba(255, 255, 255, 0.1);
}

#navibar.scrolled.dark .dropdown-content {
    background-color: rgba(0, 0, 0, 0.1);
}

#navibar.dark .underline:after {
    background: #fff;
}

#navibar.scrolled.dark .underline:after {
    background: #000;
}

#navibar.scrolled.dark #logo {
    background: url('/static/images/icon/logo2.svg') no-repeat center;
}

</style>

