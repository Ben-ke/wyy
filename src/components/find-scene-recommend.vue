<template>
  <div id="find-re" class="rounded pb-3">
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
                  <img class="img-fluid rounded" :src="item.image" style="width:8rem;"/>
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
          image: "http://p1.music.126.net/siHJgaVwhJp0KWn27VFIfA==/109951164170684730.jpg?param=140y140",
          amount: "2027万",
          title: "工作学习必备"
        },
        {
          bf: "../../src/img/bf.png",
          image: "http://p1.music.126.net/tb9Q9Of3fXG7-v8OpPhsEQ==/109951164676901776.jpg?param=140y140",
          amount: "2027万",
          title: "生活是自己的"
        },
        { 
          bf: "../../src/img/bf.png",
          image: "http://p1.music.126.net/tb9Q9Of3fXG7-v8OpPhsEQ==/109951164676901776.jpg?param=140y140",
          amount: "2027万",
          title: "适合学习听的歌"
        },
        {
          bf: "../../src/img/bf.png",
          image: "http://p1.music.126.net/UqdgVGIUk0mKUVW9AfKhwA==/109951163673016229.jpg?param=140y140",
          amount: "2027万",
          title: "精选|网络热歌分享"
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
#find-re .cube-scroll-content {
  display: inline-block !important;
  width: 46rem !important;
}

#find-re .cube-scroll-wrapper {
  width: 22rem !important;
}

#find-re .list-wrapper {
  padding: 0px 0px;
  white-space: nowrap;
}

#find-re .list-item {
  display: inline-block !important;
}

#find-re .w-64 {
  width: 6rem !important;
  height: 5rem !important;
}

#find-re .fs-14 {
  font-size: 14px !important;
}

#find-re ul {
  margin-top: 0;
  margin-bottom: 0rem !important;
}

#find-re p {
  margin-top: 0;
  margin-bottom: 0rem !important;
}

#find-re .ptt {
  top: 24px;
}

#find-re .rounded-a {
  border-radius: 0.5rem !important;
}


#find-re .w-img-2 {
  width: 2.5rem !important;
}

#find-re .pt5 {
  padding-top: 2.5rem !important;
}

#find-re .pb5 {
  padding-bottom: 2.5rem !important;
}

#find-re .fs-14 {
  font-size: 14px;
}
#find-re .patl{
    position:relative;
    left:1.6rem;
    top:1.5rem;
}
#find-re .wb{
    word-wrap:break-word !important;
    word-break:normal !important;
}
</style>