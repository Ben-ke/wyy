<template>
  <div id="lb">
    <b-container>
      <b-row>
        <b-col>
          <p class="text-dark"><router-link to="/find"><b-icon icon="arrow-left"></b-icon>云音乐歌手榜</router-link></p>
          <ul class="list-unstyled">
            <li v-for="(item,index) in leaderboards">
              <div class="d-flex mt-3 mb-3">
              <p class="align-self-center pl-2 pr-2">{{index+1}}</p>
              <img :src="item.picUrl" class="img-fluid rounded mr-2 ml-2" style="height:4.5rem;width:4.5rem;">
              <div class="ml-2">
              <p class="text-dark">{{item.name}}</p>
              <small class="text-secondary"><b-icon icon="brightness-high" variant="secondary"></b-icon>{{item.score}}</small>
              <p class="text-secondary small">{{item.topicPerson}}正在讨论</p>
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
export default {
  components:{
      axios
  },
  data() {
    return {
      leaderboards: []
    };
  },
  mounted: function() {
      this.getJsonInfo()
  },
  methods:{
      getJsonInfo:function(){
          var _this=this
          axios
            .get('https://autumnfish.cn/toplist/artist')
            .then(function(res){
                console.log(res)
                _this.leaderboards=res.data.list.artists
            })
            .catch(function(error){
                console.log(error)
            })
      }
  }//methods e


};
</script>

<style>
#lb p {
    margin-top: 0;
    margin-bottom: 0rem !important;
}
</style>