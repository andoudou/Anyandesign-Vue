<template>
  <div>
      
    <div id="wrap">
        <div id="bannerWrap">
            <div id="banner"></div>
        </div>
        <div class="headlinecenter">
            <h1>OOPS!</h1>
            <h2s>The page you request is still under construction</h2s><br><br>
                <a href="index.html">
                    <div id="homebutton">
                        <h5>BACK TO HOME</h5>
                    </div>
                </a>
        </div>
        <h6 id="photoinfo">@Samuel Zeller from unsplash.com</h6>
    </div>

  </div>
</template>
<script>
export default {
    name: "oops"
}
</script>
<style scoped>

#banner {
    position: absolute;
    height: 100%;
    width: 100%;
    background: url('/static/images/oops.jpg') no-repeat center;
    background-attachment: scroll;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
    z-index: -1;
}

.headlinecenter {
    position: absolute;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    top: 30vmin;
    text-align: center;
    padding: 5% 0;
    background: rgba(255, 255, 255, 0.8);
}

#photoinfo {
    position: absolute;
    bottom: 5vh;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    text-align: right;
    color: #888;
    opacity: 0.5;
    font-style: italic;
    z-index: 20;
}

.headlinecenter h2 {
    font-weight: 500;
}

#homebutton {
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    background: #000;
    width: 150px;
    height: 36px;
    border-radius: 4px;
    color: #fff;
}

#homebutton h5 {
    text-align: center;
    line-height: 38px;
}

</style>
