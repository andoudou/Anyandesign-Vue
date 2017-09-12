<template>
    <div id="contact">
        <div id="sayhi">
            <ul id="connect">
                <li>
                    <a href="mailto:andoudou92@icloud.com" class="connect">
                        <div id="connect1"></div>
                    </a>
                </li>&nbsp; &nbsp; &nbsp; &nbsp;
                <li>
                    <div class="tooltip connect" onclick="location.href='/static/images/wechat.png'" id="connect2">
                        <span class="tooltiptext"></span>
                    </div>
                </li>&nbsp; &nbsp; &nbsp; &nbsp;
                <li>
                    <a href="https://www.linkedin.com/in/yan-an/" target="_blank" class="connect">
                        <div id="connect3"></div>
                    </a>
                </li>
            </ul>
        </div>
        <div id="rights">
            <a style="cursor: text">© AnYan {{ year }}</a>
        </div>
    </div>
</template>
<script src="./Contact.vue.js"></script>
<style src="./Contact.vue.css" scoped></style>
