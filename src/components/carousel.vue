<template>
  <b-container>
    <b-row>
      <b-col class="d-flex pt-3">
        <p>我的音乐</p>
        <div class="ml-auto d-inline-flex text-secondary">
          <p class="fs-14">更多</p>
          <b-icon icon="chevron-right" class="secondary h4 position-relative" style="top:-2px"></b-icon>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div id="find-b" class="rounded">
          <cube-page type="scroll-view" title="Scroll">
            <div slot="content" class="scroll-wrapper">
              <cube-scroll
                ref="scroll"
                :data="items"
                direction="horizontal"
                class="horizontal-scroll-list-wrap"
              >
                <ul class="list-wrapper">
                  <li v-for="item in items" class="list-item m-1 list-unstyled" style="width:8rem;">
                    <div class="music-content rounded-a">
                      <div
                        :style="{background:'url('+item.bg+')',backgroundSize:cover}"
                        class="bg-overlay-dark pl-3 pr-3 pt5 pb5 rounded-a text-center"
                      >
                        <img class="img-fluid w-img-2" :src="item.image" />
                        <p class="fs-14 text-white">{{item.description}}</p>
                        <p class="text-white fs-14 position-relative ptt">{{item.descriptionsub}}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </cube-scroll>
            </div>
          </cube-page>
        </div>
      </b-col>
    </b-row>
    
  </b-container>
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
          bg: "../../src/img/2.jpg",
          image: "../../src/img/心.png",
          description: "我喜欢的音乐",
          descriptionsub: "心动模式"
        },
        {
          bg: "../../src/img/3.jpg",
          image: "../../src/img/私人FM.png",
          description: "私人FM",
          descriptionsub: "听点新鲜的"
        },
        {
          bg: "../../src/img/底色.png",
          image: "../../src/img/05.png",
          description: "私藏推荐",
          descriptionsub: "私藏推荐"
        },
        {
          bg: "../../src/img/底色.png",
          image: "../../src/img/07.png",
          description: "云村正能量",
          descriptionsub: "心动模式"
        },
        {
          bg: "../../src/img/底色.png",
          image: "../../src/img/07.png",
          description: "Sati空间",
          descriptionsub: "减压轻音乐"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#find-b .cube-scroll-content {
  display: inline-block !important;
  width: 44rem !important;
}

#find-b .cube-scroll-wrapper {
  width: 22rem !important;
}

#find-b .list-wrapper {
  padding: 0 10px;
  white-space: nowrap;
}

#find-b .list-item {
  display: inline-block !important;
}

#find-b .w-64 {
  width: 6rem !important;
  height: 5rem !important;
}

#find-b .fs-14 {
  font-size: 14px !important;
}

#find-b ul {
  margin-top: 0;
  margin-bottom: 0rem !important;
}

#find-b p {
  margin-top: 0;
  margin-bottom: 0rem !important;
}

#find-b .bg-overlay-dark {
  position: relative;
  z-index: 1;
}

#find-b .ptt {
  top: 24px;
}

#find-b .rounded-a {
  border-radius: 0.5rem !important;
}

.bg-overlay-dark:before {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: ' ';
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 0.5rem !important;
}

.w-img-2 {
  width: 2.5rem !important;
}

#find-b .pt5 {
  padding-top: 2.5rem !important;
}

#find-b .pb5 {
  padding-bottom: 2.5rem !important;
}
.fs-14{
  font-size:14px;
}
</style>