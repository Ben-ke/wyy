<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <ul class="list-unstyled">
          <li v-for="item in XDitems" class="mt-2 mb-2">
            <a :href="item.href">
              <div class="d-flex flex-row">
                <img class="img-fluid rounded" :src="item.image" style="width:4.5rem;height:4.5rem" />
                <div class="flex-fill align-self-center ml-2">
                  <p class="text-dark">
                    {{item.title}}-
                    <small class="text-secondary">{{item.author}}</small>
                  </p>
                  <small class="text-secondary">{{item.description}}</small>
                </div>
                <p class="align-self-center">
                  <b-icon icon="play-fill" style="color:#e84545" font-scale="2"></b-icon>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul class="list-unstyled">
          <li v-for="item in items" class="mt-2 mb-2">
            <a :href="item.href">
              <div class="d-flex flex-row">
                <img class="img-fluid rounded" :src="item.image" style="width:4.5rem;height:4.5rem" />
                <div class="flex-fill align-self-center ml-2">
                  <p class="text-dark">
                    {{item.title}}-
                    <small class="text-secondary">{{item.author}}</small>
                  </p>
                  <small class="text-secondary">{{item.description}}</small>
                </div>
                <p class="align-self-center">
                  <b-icon icon="play-fill" style="color:#e84545" font-scale="2"></b-icon>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: false,
        slidesPerView: 1.02,
        autoplay: false
      },
      items: [
        {
          href: "",
          target: "",
          image:
            "http://p2.music.126.net/4KDBaQXnQywQovmqvjx-8Q==/109951164444131697.jpg?param=50y50&quality=100",
          title: "冬眠",
          author: "司南",
          description: "因你而在"
        },
        {
          href: "",
          target: "",
          image:
            "http://p1.music.126.net/6F8-Rp8MUvxzrpTjxJiA7A==/109951164764756625.jpg?param=50y50&quality=100",
          title: "朋友请听好(易烊千玺)",
          author: "易烊千玺",
          description: "综艺《朋友请听好》主题曲"
        },
        {
          href: "",
          target: "",
          image:
            "http://p2.music.126.net/zgDvTPDSYKjQUjkV8sQUOA==/109951164605092552.jpg?param=50y50&quality=100",
          title: "大眠(完整版)",
          author: "小乐哥",
          description: "原唱：王心凌"
        }
      ],
      XDitems: [
        {
          href: "",
          target: "",
          image:
            "http://p4.music.126.net/XPPeIZu7wgcGXZ0666mfFg==/109951164640697307.jpg?param=130y130",
          title: "小王",
          author: "毛不易",
          description: "毛不易匠心复刻辑《小王》"
        },
        {
          href: "",
          target: "",
          image:
            "http://p3.music.126.net/PunfNNRGPT-tFm-fWPXTrA==/109951164715215423.jpg?param=130y130",
          title: "MAP OF THE SOUL : 7",
          author: "",
          description: "BTS (防弹少年团)"
        },
        {
          href: "",
          target: "",
          image:
            "http://p2.music.126.net/zgDvTPDSYKjQUjkV8sQUOA==/109951164605092552.jpg?param=50y50&quality=100",
          title: "大眠(完整版)",
          author: "小乐哥",
          description: "原唱：王心凌"
        }
      ]
    };
  }
};
</script>