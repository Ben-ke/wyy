<template>
  <b-container>
    <b-row>
      <b-col>
        <!-- swiper -->
        <swiper :options="swiperOption">
          <swiper-slide>
            <div class="fs-14">
              <b-badge variant="success">
                <span class="text-white">很久未听</span>
              </b-badge>
              <span class="pr-1 pl-1">的</span>
              <b-badge varight="light">
                <span>粤语歌</span>
              </b-badge>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="fs-14">
              <b-badge variant="info">
                <span class="text-white">80年代</span>
              </b-badge>
              <b-badge variant="danger">
                <span class="text-white pl-1 pr-1">华语</span>
              </b-badge>
              <span>老歌</span>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="fs-14">
              <b-badge variant="primary">
                <span class="text-white">最近一年收藏的</span>
              </b-badge>
              <span class="pr-1 pl-1">的</span>
              <b-badge varight="warning">
                <span>华语流行歌曲</span>
              </b-badge>
            </div>
          </swiper-slide>
          
        </swiper>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
          autoplay:true,
          loop:true,
      }
    }
  }
};
</script>

<style scoped>
.swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
    text-align:center;
}
</style>