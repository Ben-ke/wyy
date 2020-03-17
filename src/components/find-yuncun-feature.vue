<template>
  <div id="find-f" class="rounded pb-3">
    <cube-page type="scroll-view" title="Scroll">
      <div slot="content" class="scroll-wrapper">
        <cube-scroll
          ref="scroll"
          :data="items"
          direction="horizontal"
          class="horizontal-scroll-list-wrap"
        >
          <ul class="list-wrapper">
            <li v-for="item in items" class="list-item list-unstyled">
              <div class="music-content rounded-a">
                <div class="pl-1 pr-1 rounded-a text-center">
                  <div class="patl" style="display:inline-block">
                  <img :src="item.bf" class="img-fluid" style="width:1.1rem">
                  <small class="text-white">{{item.amount}}</small>
                  </div>
                  <div class="wb">
                  <img class="img-fluid rounded" :src="item.image" style="width:7rem;height:8.5rem"/>
                  <p class="fs-14 text-dark">{{item.title}}</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </cube-scroll>
      </div>
    </cube-page>
  </div>
</template>

<script type="text/ecmascript-6">
//import productsData from "../data/product-list-find.json";
//let _products = [];
//productsData.goods.forEach(item => {
// _products = _products.concat(item.products);
//});
//const _data =_products;

export default {
  data() {
    return {
      items: [
        {
          bf: "../../src/img/bf.png",
          image: "http://p2.music.126.net/R61ZF0gTfd6fuVc41oo5Lg==/109951164286019220.jpg?param=140y140",
          amount: "2027万",
          title: "哪些听一"
        },
        {
          bf: "../../src/img/bf.png",
          image: "http://p2.music.126.net/Icmr5F373Seexm3pEDM4Qg==/109951164537834655.jpg?param=140y140",
          amount: "2027万",
          title: "适合画画听的歌"
        },
        { 
          bf: "../../src/img/bf.png",
          image: "http://p2.music.126.net/x44v5IkLN30gWgUYWYivbg==/109951164000997664.jpg?param=140y140",
          amount: "2027万",
          title: "写作业必备的歌"
        },
        {
          bf: "../../src/img/bf.png",
          image: "http://p2.music.126.net/zGzNJcfLZfLW7E0bkI0opg==/109951163815887214.jpg?param=140y140",
          amount: "2027万",
          title: "网络热歌分享"
        },
        {
          bf: "../../src/img/bf.png",
          image: "http://p2.music.126.net/ipDaITvu_vVvHJqxaujLUQ==/109951164441184008.jpg?param=140y140",
          amount: "2027万",
          title: "100种民谣女声"
        }
      ]
    };
  }
};
</script>


<style lang="stylus" rel="stylesheet/stylus">
#find-f .cube-scroll-content {
  display: inline-block !important;
  width: 46rem !important;
}

#find-f .cube-scroll-wrapper {
  width: 22rem !important;
}

#find-f .list-wrapper {
  padding: 0px 0px;
  white-space: nowrap;
}

#find-f .list-item {
  display: inline-block !important;
}

#find-f .w-64 {
  width: 6rem !important;
  height: 5rem !important;
}

#find-f .fs-14 {
  font-size: 14px !important;
}

#find-f ul {
  margin-top: 0;
  margin-bottom: 0rem !important;
}

#find-f p {
  margin-top: 0;
  margin-bottom: 0rem !important;
}

#find-f .ptt {
  top: 24px;
}

#find-f .rounded-a {
  border-radius: 0.5rem !important;
}


#find-f .w-img-2 {
  width: 2.5rem !important;
}

#find-f .pt5 {
  padding-top: 2.5rem !important;
}

#find-f .pb5 {
  padding-bottom: 2.5rem !important;
}

#find-f .fs-14 {
  font-size: 14px;
}
#find-f .patl{
    position:relative;
    left:1.2rem;
    top:1.5rem;
}
#find-f .wb{
    word-wrap:break-word !important;
    word-break:normal !important;
}
</style>