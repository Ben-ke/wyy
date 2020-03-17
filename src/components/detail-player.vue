<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <figure>
            <!--专辑banner-->
            <div class="d-flex">
              <div class="mr-auto">
                <b-icon icon="arrow-left" variant="secondary"></b-icon>
                <span>获取歌曲名</span>
              </div>
              <div class="ml-auto">
                <b-icon icon="box-arrow-up-right" variant="secondary"></b-icon>
              </div>
            </div>
            <!--专辑页面-->
            <div class="d-flex justify-content-center">
              <img :src="picUrl" alt class="img-fulid autoRotate" :class="{pause:isPause}" />
            </div>
            <div class="fixed-bottom">
              <div class="d-flex text-center">
                <p class="flex-fill"><b-icon icon="heart" variant="secondary"></b-icon></p>
                <p class="flex-fill"><b-icon icon="download" variant="secondary"></b-icon></p>
                <p class="flex-fill"><b-icon icon="columns-gutters" variant="secondary"></b-icon></p>
                <p class="flex-fill"><b-icon icon="chat" variant="secondary" class="commont"></b-icon></p>
                <p class="flex-fill"><b-icon
                  icon="three-dots-vertical"
                  class="rounded-circle text-dark border"
                  variant="light"
                ></b-icon></p>
              </div>
              <div>
                <audio :src="songUrl" autoplay controls @play="play" @pause="pause"></audio>
              </div>
            </div>
          </figure>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      musicList: [], //存储哥列表
      songUrl: "", //播放歌曲的url
      picUrl: "", //获取专辑信息
      isPause: false, //专辑是否暂停
      comments: [] //评论内容
    };
  },
  methods: {
    search() {
      axios
        .get("https://autumnfish.cn/search?keywords=${this.inputValue}")
        .then(res => (this.musicList = res.result.songs))
        .catch(function(error) {
          alert("出错了");
        });
    },
    playMusic(id, albumId) {
      //获取歌曲url
      axios
        .get("https://autumnfish.cn/song/url?id=${id}")
        .then(res => (this.songUrl = res.data[0].url))
        .catch(function(error) {
          alert("出错了2");
        });
      //获取专辑信息
      axios
        .get("https://autumnfish.cn/album?id=${albumId}")
        .then(res => (this.picUrl = res.album.blurPicUrl))
        .catch(function(error) {
          alert("出错了3");
        });
    },
    afterEnter(el) {
      el.style = "";
    },
    //专辑图片旋转事件
    play() {
      this.isPause = false;
    },
    pause() {
      this.isPause = true;
    }
  }
};
</script>

<style>
/* 动画 */
@keyframes autoRotate {
  to {
    transform: rotateZ(360deg);
  }
}

/* 动画播放样式 */
.autoRotate {
  /* 动画名,一直播放iteration(一直重复),匀速(timing)，时间2s(duration),状态(running) */
  animation-name: autoRotate;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 2s;
  animation-play-state: running;
}

/* 动画状态 */
.pause {
  animation-play-state: paused;
}
</style>