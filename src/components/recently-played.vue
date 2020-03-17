<template>
  <b-container class="mt-3 mb-3" id="rp">
    <b-row class="pt-1 pb-1">
      <b-col class="d-flex">
        <p>最近播放</p>
        <div class="ml-auto d-inline-flex text-secondary">
          <p class="fs-14">更多</p>
          <b-icon icon="chevron-right" class="secondary h4 position-relative" style="top:-2px"></b-icon>
        </div>
      </b-col>
    </b-row>
    <b-row class="pt-1 pb-1">
      <b-col>
        <ul class="list-unstyled">
          <li v-for="item in items" style="width:50%" class="float-left">
            <figure class="d-flex justify-content-center align-content-center align-items-center">
              <img :src="item.image" class="rounded-1 pr-2 float-left img-fluid w-img-5" />
              <div class>
                <p class="fs-14 pt-1">{{item.title}}</p>
                <small class="text-secondary">{{item.titlesub}}</small>
              </div>
            </figure>
          </li>
        </ul>
      </b-col>
    </b-row>
    <b-row class="pt-1 pb-1">
      <b-col>
        <div>
          <b-tabs no-nav-style active-nav-item-class="text-dark">
            <b-tab active no-body title-link-class="text-secondary">
              <template v-slot:title>
                <p>
                  创建歌单
                  <small>999</small>
                </p>
              </template>
              <ul class="list-unstyled">
                <li v-for="gedan in gedanItems" style="width:50%" class="float-left">
                  <div
                    class="d-flex justify-content-center align-content-center align-items-center p-1"
                  >
                    <img :src="gedan.src" class="rounded-1 pr-2 float-left img-fluid w-img-5" />
                    <div>
                      <p class="fs-14 pt-1">{{gedan.title}}</p>
                      <small class="text-secondary">{{gedan.amount}}</small>
                    </div>
                  </div>
                </li>
              </ul>
            </b-tab>
            <b-tab title-link-class="text-secondary">
              <template v-slot:title>
                <p class="pl-2">
                  收藏歌单
                  <small>999</small>
                </p>
              </template>
              <ul class="list-unstyled">
                <li v-for="gedan in gedanItems" style="width:50%" class="float-left">
                  <div
                    class="d-flex justify-content-center align-content-center align-items-center p-1"
                  >
                    <img :src="gedan.src" class="rounded-1 pr-2 float-left img-fluid w-img-5" />
                    <div>
                      <p class="fs-14 pt-1">{{gedan.title}}</p>
                      <small class="text-secondary">{{gedan.amount}}</small>
                    </div>
                  </div>
                </li>
              </ul>
            </b-tab>
            <b-tab no-body title-link-class="text-secondary">
              <template v-slot:title>
                <p class="pl-2">
                  歌单助手
                  <small>beta</small>
                </p>
              </template>
              <div class="pt-3">
                <b-jumbotron bg-variant="light" text-variant="secondary">
                  <template v-slot:header>
                    <p class="fs-14 text-center">你可以从歌单中筛选出</p>
                  </template>
                  <template v-slot:lead>
                    <sv class="pt-2 pb-2 mt-1 mb-1"></sv>
                  </template>
                  <div class="justify-content-center d-flex">
                    <b-button
                      pill
                      variant="primary"
                      size="sm"
                      href="#"
                      class="text-center pr-4 pl-4"
                    >试试看</b-button>
                  </div>
                </b-jumbotron>
              </div>
            </b-tab>
            <template v-slot:tabs-end>
              <li class="nav-item ml-auto">
                <div>
                  <b-icon icon="three-dots-vertical" class="text-secondary"></b-icon>
                </div>
              </li>
            </template>
          </b-tabs>
        </div>
      </b-col>
      <!--b-col cols="2" class="text-right">
          <b-icon icon="three-dots-vertical" class="text-secondary"></b-icon>
      </b-col-->
    </b-row>
  </b-container>
</template>

<script>
import sv from "../components/swiper-vertical";
export default {
  components: {
    sv
  },
  data() {
    return {
      items: [
        {
          href: "",
          image: "../../src/img/2.jpg",
          title: "全部已播歌曲",
          titlesub: "999"
        },
        {
          href: "",
          image: "../../src/img/2.jpg",
          title: "全部已播歌曲",
          titlesub: "999"
        }
      ],
      gedanItems: [
        {
          href: "",
          src: "../../src/img/2.jpg",
          image: "../../src/img/2.jpg",
          title: "xxx的2019年度歌曲",
          amount: 10
        },
        {
          href: "",
          src: "../../src/img/2.jpg",
          image: "../../src/img/2.jpg",
          title: "xxx的2019年度歌曲",
          amount: 10
        },
        {
          href: "",
          src: "../../src/img/2.jpg",
          image: "../../src/img/2.jpg",
          title: "xxx的2019年度歌曲",
          amount: 10
        },
        {
          href: "",
          src: "../../src/img/2.jpg",
          image: "../../src/img/2.jpg",
          title: "xxx的2019年度歌曲",
          amount: 10
        },
        {
          href: "",
          src: "../../src/img/2.jpg",
          image: "../../src/img/2.jpg",
          title: "xxx的2019年度歌曲",
          amount: 10
        },
        {
          href: "",
          src: "../../src/img/2.jpg",
          image: "../../src/img/2.jpg",
          title: "xxx的2019年度歌曲",
          amount: 10
        }
      ]
    };
  }
};
</script>

<style>
#rp p {
  margin-top: 0rem !important;
  margin-bottom: 0rem !important;
}
#rp figure {
  margin: 0.5rem 0 0.5rem !important;
}
#rp .fs-14 {
  font-size: 14px;
}
#rp .w-img-5 {
  width: 4rem !important;
  height: 3.5rem;
}
#rp .rounded-1 {
  border-radius: 1rem;
}
/*gedan*/
#rp .nav-link {
  padding: 0rem 0rem !important;
}
#rp a:hover {
  color: #212529 !important;
  text-decoration: none;
  background-color: transparent;
}
</style>