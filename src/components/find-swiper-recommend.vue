<template>
  <div class="mt-3 mb-3">
    <swiper>
      <swiper-slide>
        <ul class="list-unstyled">
          <li v-for="item in items" class="mt-2 mb-2">
            <a :href="item.href">
              <div class="d-flex flex-row">
                <img class="img-fluid rounded" :src="item.image" style="width:4.5rem;height:4.5rem" />
                <div class="flex-fill align-self-center ml-2">
                  <p class="text-dark">{{item.title}}-<small class="text-secondary">{{item.author}}</small>
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
        slidesPerView : 2,
        spaceBetween : 20,
        autoplay: false,
        slidesOffsetBefore : 100,
      },
      items: [
        {
          href: "",
          target: "",
          image:
            "https://p1.music.126.net/cnGpIQ6rQCKVrDyVVSpzeg==/3263350518850877.jpg?param=130y130",
          title: "修炼爱情",
          author: "林俊杰",
          description: "因你而在"
        },
        {
          href: "",
          target: "",
          image:
            "https://p2.music.126.net/_d1scu7z_1dmd0Zgv9mTLA==/19165587183900212.jpg?param=130y130",
          title: "淘汰",
          author: "陈奕迅",
          description: "认了吧"
        },
        {
          href: "",
          target: "",
          image:
            "https://p1.music.126.net/eiazGAbIGMBF-Q9lInm5xw==/109951164158509628.jpg?param=130y130",
          title: "国王与乞丐",
          author: "华晨宇",
          description: "异类"
        }
      ]
    };
  }
};
</script>

<style scoped>
p {
  margin-top: 0;
  margin-bottom: 0rem !important;
}
</style>