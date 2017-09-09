<template>
    <div class="cataloguebox" v-bind:style="{ backgroundColor: getBackgroundColorString() }">
        <div class="catalogue">
            <h3>CATALOGUE／目录</h3>
            <div class="table">
                <h6>
                    <div class="queue">
                        <div class="catalogueicon" id="catalogueicon1"></div>
                        <ul>
                            <li class="tablehead">UX/IxD／体验与交互</li><br>
                            <li>——</li><br>
                            <li><a href="#/portfolio/foodprint">Foodprint／碳从口出</a></li>
                            <li><a href="#/portfolio/leyue">LE YUE／乐乐</a></li>
                            <li><a href="#/portfolio/lightingroom">Lighting Room／试灯间</a></li>
                            <li><a href="#/portfolio/performingwall">Performing Wall／动次打次</a></li>
                            <li><a href="#/portfolio/pick">Pick／匹课</a></li>
                        </ul>
                    </div>
                    <div class="queue">
                        <div class="catalogueicon" id="catalogueicon2"></div>
                        <ul>
                            <li class="tablehead">INFOGRAPHIC／信息可视化</li><br>
                            <li>——</li><br>
                            <li><a href="#/portfolio/toiletthings">Things in Toilet／厕所那些事</a></li>
                            <li><a href="#/portfolio/moveablefeasts">Moveable Feasts／流动的盛宴</a></li>
                            <li><a href="#/portfolio/eco360">Eco360 CJM／Eco360用户旅程图</a></li>
                        </ul>
                    </div>
                    <div class="queue">
                        <div class="catalogueicon" id="catalogueicon3"></div>
                        <ul>
                            <li class="tablehead">INDUSTRIAL DESIGN／工业产品设计</li><br>
                            <li>——</li><br>
                            <li><a href="#/oops">More Than One／不拘一格</a></li>
                            <li><a href="#/oops">Meet Xi'an／西遇</a></li>
                            <li><a href="#/oops">BEIREN／北人</a></li>
                        </ul>
                    </div>
                    <div class="queue">
                        <div class="catalogueicon" id="catalogueicon4"></div>
                        <ul>
                            <li class="tablehead">OTHERS／其他</li><br>
                            <li>——</li><br>
                            <li><a href="#/oops">Farm of Youth／知青农场</a></li>
                            <li><a href="#/oops">Penguin Group Exhibition／企鹅展厅</a></li>
                            <li><a href="#/portfolio/nightlightlamp">Nightlight Lamp／夜光灯</a></li>
                            <li><a href="#/oops">Copperplate／铜板体书法</a></li>
                        </ul>
                    </div>
                </h6>
            </div>
        </div>
        <slot name="attachment"></slot>
    </div>
</template>
<script>
export default {
  name: 'catalogue',
  props: {
      backgroundColor : {
          type: String,
          default: '#f8f8f8'
      },
      backgroundColorRGBA : {
          type: Object,
          default () {
              return null;
          }
      }
  },
  methods: {
      getBackgroundColorString : function () {
          if (!!this.backgroundColorRGBA)
          {
              return 'rgba(' + this.backgroundColorRGBA.R + ','
                         + this.backgroundColorRGBA.G + ','
                         + this.backgroundColorRGBA.B + ','
                         + this.backgroundColorRGBA.A + ')'
          } else {
              return this.backgroundColor
          }
      }
  }
}
</script>
<style scoped>
.cataloguebox {
    width: 100%;
    background: #f8f8f8;
    position: relative;
}

/* catalogou */

.catalogue {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    padding: 15vh 0;
    text-align: center;
}

.catalogue h3 {
    padding-bottom: calc(6 * (1vw + 1vh - 1vmin));
}

.table {
    width: 100%;
}

.table ul {
    list-style-type: none;
}

.queue {
    width: 24%;
    height: 150px;
    display: inline-table;
}

.queue a:hover {
    color: #aaa;
    /*color: #FF009D;*/
    transition: .2s;
}

.table li,
a {
    font-weight: 400;
    line-height: 1.5;
}

.catalogueicon {
    width: 80px;
    height: 80px;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    margin-bottom: 40px;
    transition: all .2s;
}

#catalogueicon1 {
    background: url('/static/images/icon/catalogue1.svg') no-repeat 0 0;
    background-size: cover;
}

#catalogueicon2 {
    background: url('/static/images/icon/catalogue1.svg') no-repeat 33.3% 0;
    background-size: cover;
}

#catalogueicon3 {
    background: url('/static/images/icon/catalogue1.svg') no-repeat 66.666667% 0;
    background-size: cover;
}

#catalogueicon4 {
    background: url('/static/images/icon/catalogue1.svg') no-repeat 100%;
    background-size: cover;
}

.queue:hover div {
    transform: scale(1.3, 1.3);
    transition: .5s;
}

.queue:hover #catalogueicon1 {
    background: url('/static/images/icon/catalogue2.svg') no-repeat 0 0;
    background-size: cover;
}

.queue:hover #catalogueicon2 {
    background: url('/static/images/icon/catalogue2.svg') no-repeat 33.3% 0;
    background-size: cover;
}

.queue:hover #catalogueicon3 {
    background: url('/static/images/icon/catalogue2.svg') no-repeat 66.666667% 0;
    background-size: cover;
}

.queue:hover #catalogueicon4 {
    background: url('/static/images/icon/catalogue2.svg') no-repeat 100%;
    background-size: cover;
}
</style>
