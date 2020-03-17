<template>
  <div id="app">
    <!-- 左边 -->
    <div id="left">
      <input type="text" value="请输入你要搜索的歌名" v-model="inputValue" @keyup.enter="search" />

      <!-- 给li添加过渡 ;v-on:after-enter="afterEnter":钩子函数-->
      <ul class="list-unstyled" v-on:after-enter="afterEnter">
        <!-- play(item.id):把id传过去 -->
        <li v-for="(item,index) in musicList" :key="item.id" @click="playMusic(item.id,item.album.id)"
        >{{item.name}}-----演唱者:{{item.artists[0].name}}</li>
      </ul>
    </div>
    <!-- 右边,播放 -->
    <div id="right">
      <audio :src="songUrl" autoplay controls @play="play" @pause="pause"></audio>
      <h3>精彩评论</h3>
      <div class="comment">
        <ul>
          <!-- 遍历数组时,需要动画时才用到key -->
          <li v-for="(item, index) in comments">
            <div class="left">
              <img :src="item.user.avatarUrl" class="img-fluid" alt />
            </div>
            <div class="right">
              <a href="#">{{item.user.nickname}}</a>
              <p>{{item.content}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <p>传值{{gedans}}</p>
    </div>
  </div>
</template>

<script>
import {eventBus} from '../main'
export default {
  data() {
    return {
      inputValue: "", //输入的值
      musicList: [], //存储歌列表
      songUrl: "", //播放歌曲的url
      picUrl: "", //获取专辑信息
      isPause: false, //专辑是否暂停
      comments: [], //评论内容
      gedans: ['sjsjsj','kkk']
    };
  }, //data end,
  created(){
    eventBus.$on("mal",(message)=>{
      console.log(message)
      this.gedans=message;
    })
  },
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