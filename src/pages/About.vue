<template>
  <div id="about">
    <cover v-bind:scrollTo="'#goingto'" v-bind:backgroundClass="'about'">
        <div slot="headlineContent">
          <h5 class="baudelaire">
            <span id="quote">L’étude du beau est un duel où <br>l’artiste crie de frayeur avant d’être vaincu.</span><br>对美的研究不过一场殊死决斗，<br>在注定被击败的结局之前，只不过看谁的哀鸣声更为响彻。”<br>- Charles Pierre Baudelaire 波德莱尔 -
          </h5>
        </div>
        <span slot="photoinfoContent" style="color: #000;">Dongji Island, Zhoushan／东极岛，舟山市 Oct. 2015 @Miao</span>
    </cover>
    <div class="container page" id="goingto">
        <div id="fullpage">
            <div class="section">
                <div class="loveA">
                    <div class="left">
                        <div class="why">
                            <div class="loveicon" id="loveicon1"></div>
                            <h3>DESIGN／设计</h3><br>
                            <p class="reason">
                                设计是我长久以来关注和学习的领域。能够让自己和他人的生活中有更多美的事物，是我踏足设计的初心和勉励我坚持的动力。
                            </p>
                        </div>
                    </div>
                    <div class="right">
                        <div class="lovepic" id="lovepic1"></div>
                        <h6>Students’ Dormitory，Frankfurt am Main, Germany Setp. 2016</h6>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="loveB">
                    <div class="left">
                        <div class="lovepic" id="lovepic2"></div>
                        <h6 class="vertical">Library, Rijksmuseum, Amsterdam Sept. 2016</h6>
                    </div>
                    <div class="right">
                        <div class="why">
                            <div class="loveicon" id="loveicon2"></div>
                            <h3>READING／阅读</h3><br>
                            <p class="reason">
                                我不知道阅读能否使人明智，但它无疑是我消磨时光最简单的方式，一人，一椅，一本书而已。能与之媲美的，恐怕只有Beatbox了。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="loveA">
                    <div class="left">
                        <div class="why">
                            <div class="loveicon" id="loveicon3"></div>
                            <h3>HIKING／远足</h3><br>
                            <p class="reason">
                                久居城市的一种消极反抗。
                            </p>
                        </div>
                    </div>
                    <div class="right">
                        <div class="lovepic" id="lovepic3"></div>
                        <h6>Suburb, Frankfurt am Main, Germany Oct. 2016</h6>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="loveB">
                    <div class="left">
                        <div class="lovepic" id="lovepic4"></div>
                        <h6>Apothekenmuseum, Heidelberg, Germany December 2016</h6>
                    </div>
                    <div class="right">
                        <div class="why">
                            <div class="loveicon" id="loveicon4"></div>
                            <h3>COPPERPLATE／书法</h3><br>
                            <p class="reason">
                                相比较其它书写体，铜板体流畅而连贯的线条可能是英文在平面世界最真实的映射。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="loveA">
                    <div class="left">
                        <div class="why">
                            <div class="loveicon" id="loveicon5"></div>
                            <h3>CLASSICAL／音乐</h3><br>
                            <p class="reason">
                                嘘，不要说话。
                            </p>
                        </div>
                    </div>
                    <div class="right">
                        <div class="lovepic" id="lovepic5"></div>
                        <h6>Mendelssohn House, Leipzig, Germany Jan. 2017</h6>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="loveB">
                    <div class="left">
                        <div class="lovepic" id="lovepic6"></div>
                        <h6 class="vertical">Pierre Marcolini Shop, Brussels, Belgique Oct. 2016</h6>
                    </div>
                    <div class="right">
                        <div class="why">
                            <div class="loveicon" id="loveicon6"></div>
                            <h3>CHOCOLATE／可可</h3><br>
                            <p class="reason">
                                对巧克力的痴迷源于小时候。<br>那时去姥姥家坐长途汽车常常晕车，她总是会准备很多巧克力，告诉我吃了就不晕车了。不知道真假，但它就是会让我很安心。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!--over-->
        </div>
    </div>
    <div id="ground">
        <top></top>
        <contact></contact>
    </div>
  </div>
</template>

<script>
import Cover from '../components/Cover.vue'
import Contact from '../components/Contact.vue'
import Top from '../components/Top.vue'

export default {
  name: 'about',
  components: {
    Cover,
    Contact,
    Top
  },
  data () {
    return {
      msg: 'about'
    }
  }
}
</script>
<style scoped>
.container:after,
.row:after,
.u-cf {
    content: "";
    display: table;
    clear: both;
}

.container {
    background: #fff;
    position: relative;
    width: 100%;
    height: auto;
    z-index: 50;
}
#describ {
    background: #fff;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    position: relative;
    padding: calc(12 * (1vw + 1vh - 1vmin)) 0;
    height: auto;
}

#describ h4 {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    text-align: center;
    font-weight: 300;
    letter-spacing: 1px;
}

.section {
  height: 100vh;
}

.loveA {
    position: relative;
    width: 100%;
    height: 100%;
    background: #fff;
}

.loveB {
    position: relative;
    width: 100%;
    height: 100%;
    background: #F4F4F4;
}

.left {
    /*background: palevioletred;*/
    float: left;
    background-size: cover;
    width: 40%;
    height: 100%;
    margin-left: 10%;
}

.right {
    /*background: mediumpurple;*/
    float: left;
    background-size: cover;
    width: 40%;
    height: 100%;
}

.lovepic {
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.why p {
    font-weight: 300;
}

.baudelaire {
    width: 100%;
    text-align: center;
    line-height: 1.5;
    font-weight: 100;
    transition: all 0.5s;
    color: #000;
    font-weight: 400;
    letter-spacing: 0.1em;
    line-height: 22pt;
}

#quote {
    font-style: italic;
    font-size: 12pt;
}


/*.anyan {
    position: relative;
    width: 100%;
    height: 100vh;
    background: #F4F4F4;
}

.leftyan {
    background: palevioletred;
    float: left;
    background-size: cover;
    width: 40%;
    height: 100%;
    margin-left: 10%;
}

.rightyan {
    background: mediumpurple;
    float: left;
    background-size: cover;
    width: 40%;
    height: 100%;
}

#yan {
    width: 90%;
    height: 45%;
    margin-top: 40%;
    background: url('../images/about/yan.jpg') no-repeat center;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
}

.zhoushan {
    width: 100%;
    text-align: left;
    font-weight: 300;
    font-size: 8pt;
    color: #888;
    margin-top: 0.5em;
    font-style: italic;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
}

.quote {
    width: 100%;
    margin-top: 40%;
    text-align: left;
}

.quote h3 {
    padding-bottom: 48%;
}*/

#lovepic1 {
    width: 100%;
    height: 45%;
    margin-top: 32%;
    background: url('/static/images/about/design.jpg') no-repeat center;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
}

#lovepic2 {
    width: 70%;
    height: 80%;
    margin-top: 12%;
    background: url('/static/images/about/reading.jpg') no-repeat center;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
}

#lovepic3 {
    width: 100%;
    height: 45%;
    margin-top: 32%;
    background: url('/static/images/about/hiking.jpg') no-repeat center;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
}

#lovepic4 {
    width: 100%;
    height: 45%;
    margin-top: 32%;
    background: url('/static/images/about/calligraphy.jpg') no-repeat center;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
}

#lovepic5 {
    width: 100%;
    height: 45%;
    margin-top: 32%;
    background: url('/static/images/about/classical.jpg') no-repeat center;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
}

#lovepic6 {
    width: 70%;
    height: 80%;
    margin-top: 12%;
    background: url('/static/images/about/chocolate.jpg') no-repeat center;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
}

.right h6 {
    text-align: right;
    font-weight: 300;
    font-size: 8pt;
    color: #888;
    margin-top: 0.5em;
    font-style: italic;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
}

.left h6 {
    text-align: left;
    font-weight: 300;
    font-size: 8pt;
    color: #888;
    margin-top: 0.5em;
    font-style: italic;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
}

.vertical {
    width: 70%;
}

.why {
    width: 70%;
    margin-top: 45%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    opacity: 0.9;
}

.why h3 {
    font-weight: 500;
}

.why p {
    font-size: 10pt;
    font-weight: 200;
}

.loveicon {
    width: 90px;
    height: 90px;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    margin-bottom: 20px;
}

#loveicon1 {
    background: url('/static/images/icon/love.svg') no-repeat 0 0;
    background-size: cover;
}

#loveicon2 {
    background: url('/static/images/icon/love.svg') no-repeat 20% 0;
    background-size: cover;
}

#loveicon3 {
    background: url('/static/images/icon/love.svg') no-repeat 40% 0;
    background-size: cover;
}

#loveicon4 {
    background: url('/static/images/icon/love.svg') no-repeat 60% 0;
    background-size: cover;
}

#loveicon5 {
    background: url('/static/images/icon/love.svg') no-repeat 80% 0;
    background-size: cover;
}

#loveicon6 {
    background: url('/static/images/icon/love.svg') no-repeat 100% 0;
    background-size: cover;
}

.why h5 {
    margin-bottom: 10px;
}

#ground {
    background: url('/static/images/about/yan2.jpg') no-repeat bottom;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
    position: relative;
    bottom: 0;
    width: 100%;
    height: 100vh;
    transition: all 0.5s;
}
</style>
<style>
#banner.about {
    background-image: url('/static/images/about/yan.jpg');
}
#photoinfo {
  opacity: 1!important;
}
</style>