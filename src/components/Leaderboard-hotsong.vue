<template>
  <div id="lbc" >
    <b-container>
      <b-row>
        <b-col>
          <div class="bg-img p-2">
            <div class="d-flex align-items-center">
              <p class="mr-auto">
                <router-link to="/find" class="text-white">
                  <b-icon icon="arrow-left"></b-icon>云音乐热歌榜
                </router-link>
              </p>
              <div class="ml-auto h4">
                  <span class="pr-2 pl-2"><b-icon icon="search" variant="white"></b-icon></span>
                  <span class="pr-2 pl-2"><b-icon icon="three-dots-vertical" variant="white"></b-icon></span>
              </div>
            </div>
            <div class="pt-5 pb-5">
                <p class="display-4 text-white">热歌榜</p>
            </div>
            <div class="d-flex font-weight-light text-white small pb-3">
                  <div class="flex-fill text-center">
                      <p><b-icon icon="chat" font-scale="2"></b-icon></p>
                      <p>22.1万</p>
                  </div>
                  <div class="flex-fill text-center">
                      <p><b-icon icon="box-arrow-up-right" font-scale="2"></b-icon></p>
                      <p>36427</p>
                  </div>
                  <div class="flex-fill text-center">
                      <p><b-icon icon="download" font-scale="2"></b-icon></p>
                      <p>下载</p>
                  </div>
                  <div class="flex-fill text-center">
                      <p><b-icon icon="check-circle" font-scale="2"></b-icon></p>
                      <p>多选</p>
                  </div>
              </div>
          </div>
          <ul class="list-unstyled p-2">
            <li v-for="(item,index) in leaderboards" :key="item.id" @click="vm.playMusic()">
              <div class="d-flex mt-3 mb-3">
                <p class="align-self-center pl-2 pr-2">{{index+1}}</p>
                <div class="ml-2">
                  <p class="text-dark">{{item.name}}</p>
                  <p class="text-secondary small">{{item.ar[0].name}}-{{item.name}}-{{item.al.id}}</p>
                </div>
                <div class="ml-auto align-self-center">
                    <span class="mr-2 ml-2"><b-icon icon="play" class="border border-secondary rounded"></b-icon></span>
                    <span class="mr-2 ml-2"><b-icon icon="three-dots-vertical"></b-icon></span>
                </div>
              </div>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import {eventBus} from '../main'
export default {
  components: {
    axios
  },
  data() {
    return {
      leaderboards: []
    };
  },
  
  methods: {
    function() {
      axios
        .get("https://autumnfish.cn/top/list?idx=1")
        .then(function(res) {
          console.log(res);
          this.leaderboards=res.data.playlist.tracks
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  } //methods e
};
</script>

<style>
#lbc p {
  margin-top: 0;
  margin-bottom: 0rem !important;
}
.bg-img{
    background-image:url('../../src/img/6.png');
    background-repeat: no-repeat;
    background-size: cover;
}
#lbc .col{
    position: relative;
    width: 100%;
    padding-right: 0px !important;
    padding-left: 0px !important;
}
</style>