<template>
  <div>
    <b-container>
      <b-row>
        <b-col class="d-flex">
          <div>
            <small class="text-secondary">推荐歌单</small>
            <p>为你精挑细选</p>
          </div>
          <div class="ml-auto d-flex align-self-end">
            <b-button size="sm" pill variant="outline-secondary" href="#" target class="fs-12">查看更多</b-button>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <fc></fc>
        </b-col>
      </b-row>
      <b-row>
          <b-col class="d-flex">
              <div>
                  <small class="text-secondary">相似艺人</small>
                  <p>听过爱过的华语经典</p>
              </div>
              <div class="ml-auto d-flex align-self-end">
                  <b-button size="sm" target="" variant="outline-secondary" pill class="fs-12"><b-icon icon="play-fill"></b-icon>播放全部</b-button>
              </div>
          </b-col>
      </b-row>
      <b-row>
          <b-col>
              <fsr></fsr>
          </b-col>
      </b-row>
      <b-row>
          <b-col class="d-flex">
              <div>
                  <small class="text-secondary">场景推荐</small>
                  <p>Coffee/Tea/Music</p>
              </div>
              <div class="ml-auto d-flex align-self-end">
                  <b-button size="sm" target="" variant="outline-secondary" pill class="fs-12">查看更多</b-button>
              </div>
          </b-col>
      </b-row>
      <b-row>
          <b-col>
              <fsr2></fsr2>
          </b-col>
      </b-row>
      <b-row>
          <b-col class="d-flex">
              <div>
                  <small class="text-secondary">云村精选</small>
                  <p>行走CD们的神级合作</p>
              </div>
              <div class="ml-auto d-flex align-self-end">
                  <b-button size="sm" target="" variant="outline-secondary" pill class="fs-12">查看更多</b-button>
              </div>
          </b-col>
      </b-row>
      <b-row>
          <b-col><fyf></fyf></b-col>
      </b-row>
      <b-row>
          <b-col><ft></ft></b-col>
      </b-row>
      <b-row>
          <b-col class="d-flex">
              <div>
                  <small class="text-secondary">大家都在听</small>
                  <p>广东都在听</p>
              </div>
              <div class="ml-auto d-flex align-self-end">
                  <b-button size="sm" target="" variant="outline-secondary" pill class="fs-12"><b-icon icon="play-fill"></b-icon>播放全部</b-button>
              </div>
          </b-col>
      </b-row>
      <b-row><b-col><fgd></fgd></b-col></b-row>
      <b-row>
          <b-col class="d-flex">
              <div>
                  <small class="text-secondary">排行榜</small>
                  <p>热歌风向标</p>
              </div>
              <div class="ml-auto d-flex align-self-end">
                  <b-button size="sm" target="" variant="outline-secondary" pill class="fs-12">查看更多</b-button>
              </div>
          </b-col>
      </b-row>
      <b-row><b-col><fgd></fgd></b-col></b-row>
       <b-row>
          <b-col class="d-flex">
              <div>
                  <small class="text-secondary">电台推荐</small>
                  <p>陌生人 送个故事给你</p>
              </div>
              <div class="ml-auto d-flex align-self-end">
                  <b-button size="sm" target="" variant="outline-secondary" pill class="fs-12">查看更多</b-button>
              </div>
          </b-col>
      </b-row>
      <b-row>
          <b-col>
              <fsr2></fsr2>
          </b-col>
      </b-row>
      <b-row>
          <b-col class="d-flex justify-content-center text-secondary mt-2 mb-2"><small>已经到底啦</small></b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import fc from '../components/find-carousel'
import fsr from '../components/find-swiper-recommend'
import fsr2 from '../components/find-scene-recommend'
import fyf from '../components/find-yuncun-feature'
import ft from '../components/find-tab'
import fgd from '../components/find-swiper-gd'
export default {
  components:{
      fc,
      fsr,
      fsr2,
      fyf,
      ft,
      fgd,
  },
  data() {
    return {
    };
  }
};
</script>


<style scoped>
.btn-sm, .btn-group-sm > .btn {
    padding: 0rem 0.5rem !important;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.2rem;
}
.fs-12 {
  font-size: 12px;
}
p {
  margin-top: 0;
  margin-bottom: 0rem !important;
}
.w-img-1 {
  width: 1rem;
}
</style>