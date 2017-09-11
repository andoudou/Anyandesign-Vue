<template>
    <div id="about">
        <cover v-bind:scrollTo="'#goingto'" v-bind:backgroundClass="'about'">
            <div slot="headlineContent">
                <h5 class="baudelaire">
                    <span id="quote">L’étude du beau est un duel où <br>l’artiste crie de frayeur avant d’être vaincu.</span><br>对美的研究不过一场殊死决斗，<br>在注定被击败的结局之前，只不过看谁的哀鸣声更为响彻。”<br>- Charles Pierre Baudelaire 波德莱尔 -
                </h5>
            </div>
            <span id="photoinfoContent" slot="photoinfoContent">Dongji Island, Zhoushan／东极岛，舟山市 Oct. 2015 @Miao</span>
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
    data() {
        return {
            msg: 'about'
        }
    },
    created() {
        window.scrollTo(0, 0)
    }
}
</script>
<style src="./About.vue.css" scoped></style>
<style>
#banner.about {
    background-image: url('/static/images/about/yan.jpg');
}
</style>