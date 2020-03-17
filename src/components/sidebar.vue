<template>
  <div id="sidebar">
    <b-container>
      <b-row class="bg-secondary">
        <b-col class="bg-dark ml-3 mr-3 mt-3 pt-2 pb-2">
            <div class="d-flex flex-wrap pl-2 pr-2 mb-3">
                <div class="text-white">
                    <p class="small">黑胶CVIP</p>
                    <small>已过期30天</small>
                </div>
                <div class="ml-auto">
                <b-button size="sm" variant="primary" pill class="pl-3 pr-3">会员中心</b-button>
                </div>
            </div>
                <div class="d-flex flex-wrap pl-2 pr-2 pb-4">
                <div class="text-white">
                    <p class="small">首月仅五元</p>
                    <small>新用户专属优惠，快来加入吧！</small>
                </div>
                <div class="ml-auto align-self-center">
                <b-icon icon="chevron-right" variant="white"></b-icon>
                </div>
            </div>
        </b-col>
      </b-row>
      <b-row style="top:-1.7rem" class="bg-white position-relative rounded-lt">
        <b-col>
            <div class="d-flex pt-4 ml-3 mr-3">
            <p>
            <img src="../img/鹿鹿.png" class="img-fluid" style="height:2.5rem;width:2.5rem"><span class="pl-2">网易云</span>
            </p>
            <p class="ml-auto align-self-center small"><b-button pill size="sm" variant="primary"><b-icon icon="check-box"></b-icon>签到</b-button></p>
            </div>
        </b-col>
      </b-row>
      <b-row class="pb-3">
          <b-col class="text-center">
              <b-icon icon="envelope" variant="primary" font-scale="2"></b-icon>
              <p class="small text-truncate text-secondary">我的消息</p>
          </b-col>
          <b-col class="text-center">
              <b-icon icon="people" variant="primary" font-scale="2"></b-icon>
              <p class="small text-truncate text-secondary">我的好友</p>
          </b-col>
          <b-col class="text-center">
              <b-icon icon="house" variant="primary" font-scale="2"></b-icon>
              <p class="small text-truncate text-secondary">个人主页</p>
          </b-col>
          <b-col class="text-center">
              <b-icon icon="tablet" variant="primary" font-scale="2"></b-icon>
              <p class="small text-truncate text-secondary">个性装扮</p>
          </b-col>
      </b-row>
      <b-row>
          <b-col>
              <ul class="list-unstyled">
                  <li v-for="item in items" class="pt-1 pb-1">
                      <b-button block variant="link" class="d-flex align-items-center align-self-center">
                          <span class="h5"><b-icon variant="dark" :icon="item.icon"></b-icon></span>
                          <span class="small text-dark">{{item.title}}</span>
                          <span v-show="item.type" class="text-secondary ml-auto small">{{item.subtitle}}</span>
                      </b-button>
                  </li>
              </ul>
          </b-col>
      </b-row>
      <b-row class="fixed-bottom bg-white m-auto">
          <b-col>
              <div>
                  <b-nav fill small class="pt-2 pb-2 text-dark">
                      <b-nav-item to="" link-classes="text-dark"><b-icon size="sm" icon="heart"></b-icon>夜间模式</b-nav-item>
                      <b-nav-item to="" link-classes="text-dark"><b-icon size="sm" icon="heart"></b-icon>设置</b-nav-item>
                      <b-nav-item to="" link-classes="text-dark"><b-icon size="sm" icon="heart"></b-icon>退出</b-nav-item>
                  </b-nav>
              </div>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
    data(){
        return{
            items:[
                {
                    icon:"brightness-high",
                    title:"创作者中心",
                    type:false,
                    subtitle:'888'
                },
                {
                    icon:"mic",
                    title:"听歌识曲",
                    type:true,
                    subtitle:'可识别其他app歌曲'
                },
                {
                    icon:"cursor",
                    title:"演出",
                    type:false,
                    subtitle:''
                },
                {
                    icon:"archive",
                    title:"商城",
                    type:true,
                    subtitle:'真无线降200'
                },
                {
                    icon:"music-player",
                    title:"附近的人",
                    type:false,
                    subtitle:'888'
                },
                {
                    icon:"controller",
                    title:"游戏推荐",
                    type:false,
                    subtitle:'888'
                },
                {
                    icon:"phone",
                    title:"口袋铃声",
                    type:false,
                    subtitle:'888'
                },
                {
                    icon:"document-text",
                    title:"我的订单",
                    type:false,
                    subtitle:'888'
                },
                {
                    icon:"alarm",
                    title:"定时停止播放",
                    type:false,
                    subtitle:'888'
                },
                {
                    icon:"heart",
                    title:"扫一扫",
                    type:false,
                    subtitle:'888'
                },
                {
                    icon:"alarm",
                    title:"音乐闹钟",
                    type:false,
                    subtitle:'888'
                },
                {
                    icon:"cloud",
                    title:"音乐云盘",
                    type:false,
                    subtitle:'888'
                },
                {
                    icon:"tablet-landscape",
                    title:"在线听歌免流量",
                    type:false,
                    subtitle:'888'
                },{
                    icon:"terminal",
                    title:"优惠券",
                    type:false,
                    subtitle:'888'
                },
                {
                    icon:"shield",
                    title:"青少年模式",
                    type:true,
                    subtitle:'未开启'
                }
            ]
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#sidebar p{
    margin-top:0rem;
    margin-bottom:0rem !important;
}
#sidebar .rounded-lt{
    border-top-left-radius: 1.25rem !important;
    border-top-right-radius: 1.25rem !important;
}
#sidebar .h5{
    margin-bottom:0rem !important;
}
</style>