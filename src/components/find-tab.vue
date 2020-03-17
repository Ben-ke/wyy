<template>
  <div class id="ft">
    <b-tabs no-nav-style active-nav-item-class="text-dark">
      <b-tab active no-body title-link-class="text-secondary">
        <template v-slot:title>
          <small class="text-secondary">3月1日</small>
          <p>新歌</p>
        </template>
        <div>
          <swiper :options="swiperOption">
            <swiper-slide>
              <ul class="list-unstyled">
                <li v-for="item in items" class="mt-2 mb-2">
                  <a :href="item.href">
                    <div class="d-flex flex-row">
                      <img
                        class="img-fluid rounded"
                        :src="item.image"
                        style="width:4.5rem;height:4.5rem"
                      />
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
                      <img
                        class="img-fluid rounded"
                        :src="item.image"
                        style="width:4.5rem;height:4.5rem"
                      />
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
      </b-tab>
      <b-tab title-link-class="text-secondary">
        <template v-slot:title>
          <small class="text-secondary invisible">3月1日</small>
          <p class="pl-2">新碟</p>
        </template>
        <div>
        <ftx></ftx>
        </div>
      </b-tab>
      <template v-slot:tabs-end>
        <li class="nav-item ml-auto align-self-center">
          <b-button size="sm" pill variant="outline-secondary" class="fs-12">更多新碟</b-button>
        </li>
      </template>
    </b-tabs>
  </div>
</template>


<script>
import ftx from '../components/find-tab-xd'
export default {
  components:{
      ftx
  },
  data() {
    return {
        see:false,
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
      ]
    };
  }
};
</script>
<style>
#ft .btn-sm,
.btn-group-sm > .btn {
  padding: 0rem 0.5rem !important;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}
#ft .nav-link {
  display: block;
  padding: 0rem !important;
}
#ft .fs-12 {
  font-size: 12px;
}
</style>