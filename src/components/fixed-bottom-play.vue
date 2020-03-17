<template>
    <div class="fixed-bottom bg-white border-top">
        <b-container>
            <b-row>
                <b-col class="d-flex justify-content-center pt-2 pb-2">
                     <audio :src="songUrl" autoplay controls @play="play" @pause="pause"></audio>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "", //输入的值
      musicList: [], //存储歌列表
      songUrl: "", //播放歌曲的url
      picUrl: "", //获取专辑信息
      isPause: false, //专辑是否暂停
    };
  }, //data end,
  methods: {
    // li标签过渡的事件
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
    },
    //搜索歌曲事件
    search() {
      //调用接口
      this.$http
        .get(`https://autumnfish.cn/search?keywords=${this.inputValue}`)
        .then(
          response => {
            console.log(response);
            //将结果添加到musicList中
            this.musicList = response.body.result.songs;
          },
          response => {
            // error callback
            alert("出错了");
          }
        );
    },
    // 双击播放歌曲事件,接收传过来的id
    playMusic(id, albumId) {
      //获取歌曲的url
      this.$http.get(`https://autumnfish.cn/song/url?id=${id}`).then(
        response => {
          // console.log(response);
          //将结果添加到musicList中
          this.songUrl = response.body.data[0].url;
        },
        response => {
          // error callback
          alert("出错了");
        }
      );
      // 获取专辑信息
      this.$http.get(`https://autumnfish.cn/album?id=${albumId}`).then(res => {
        this.picUrl = res.body.album.blurPicUrl;
      }),
        err => {};

      //获取评论内容接口
      this.$http
        .get(`https://autumnfish.cn/comment/music?id=${id}&limit=1`)
        .then(res => {
          console.log(res);
          this.comments = res.body.hotComments;
        }),
        err => {
          alert("信息错误");
        };
    },

    //钩子函数:动画执行完后去除了style属性,不去掉会卡顿
    afterEnter(el) {
      el.style = "";
    },
    // 专辑图片旋转事件
    play() {
      console.log("播放");
      this.isPause = false;
    },
    pause() {
      console.log("暂停");
      this.isPause = true;
    }
  }
}; //end
</script>

<style scoped>
.fixed-bottom {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99999999 !important;
}
</style>