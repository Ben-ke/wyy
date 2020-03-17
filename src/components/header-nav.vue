<template>
  <div id="hn">
    <b-container>
      <b-row class="pt-1 pb-1 m-auto">
        <b-col>
          <div>
            <b-tabs no-nav-style no-key-nav>
              <template v-slot:tabs-start>
                <li
                  class="nav-item mr-auto d-flex justify-content-center align-content-center align-self-center position-relative"
                  style="top:-5px"
                >
                  <b-icon icon="justify" class="text-secondary h2" @click="showPopup"></b-icon>
                  <cube-popup
                    type="my-popup"
                    :position="position"
                    :mask-closable="true"
                    ref="myPopup"
                  >
                    <!--div class="scroll-list-wrap">
                      <cube-scroll ref="scroll" :data="items"
    :options="options"-->
                        <sidebar></sidebar>
                      <!--/cube-scroll>
                    </div-->
                  </cube-popup>
                </li>
              </template>
              <b-tab no-body>
                <template v-slot:title>
                  <router-link to="/my" class="text-secondary">
                    <p>我的</p>
                  </router-link>
                </template>
              </b-tab>
              <b-tab active title-link-class="text-secondary">
                <template v-slot:title>
                  <router-link to="/find" class="text-secondary">
                    <p>发现</p>
                  </router-link>
                </template>
              </b-tab>
              <b-tab no-body>
                <template v-slot:title>
                  <router-link to="yuncun" class="text-secondary">
                    <p>云村</p>
                  </router-link>
                </template>
              </b-tab>
              <b-tab no-body title-link-class="text-secondary">
                <template v-slot:title>
                  <router-link to="ycvideo" class="text-secondary">
                    <p>视频</p>
                  </router-link>
                </template>
              </b-tab>
              <template v-slot:tabs-end>
                <li
                  class="nav-item ml-auto d-flex justify-content-center align-self-center align-content-center position-relative"
                  style="top:-2px"
                >
                  <div>
                    <b-icon icon="search" class="text-secondary h4"></b-icon>
                  </div>
                </li>
              </template>
            </b-tabs>
          </div>
        </b-col>
        <!--b-col cols="2" class="text-right">
          <b-icon icon="three-dots-vertical" class="text-secondary"></b-icon>
        </b-col-->
      </b-row>
    </b-container>
  </div>
</template>


<script>
import sidebar from "../components/sidebar";
let cur = 0;
const positions = ["left"];
export default {
  components: {
    sidebar
  },
  data() {
    return {
      position: ""
    };
  },
  methods: {
    showPopup() {
      this.position = positions[cur++];
      if (cur === positions.length) {
        cur = 0;
      }
      const component = this.$refs.myPopup;
      component.show();
      setTimeout(() => {
        component.hide();
      }, 1000000);
    }
  }
};
</script>


<style lang="stylus" rel="stylesheet/stylus">



#hn .col {
  position: relative;
  width: 100%;
  padding-right: 0px !important;
  padding-left: 0px !important;
}
.popup-view {
  .content {
    > {
      div {
        margin: 10px 0;
      }
    }
  }
}

.cube-my-popup{
  z-index:99999999999 !important;
}

  .cube-popup-content {
    padding: 0px;
    color: #fff;
    background-color: #ffffff;
    width: 80% !important;
}
#__BVID__5 a {
  text-decoration: none;
  background-color: transparent;
}
#__BVID__5 .nav-link:hover, #__BVID__5 .nav-link:focus {
  text-decoration: none;
  font-size: 18px;
  position: relative;
  top: -1px;
  color: #333333 !important;
}

 .cube-extend-popup {
  .cube-extend-popup-content {
    padding: 20px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
  }
}
.scroll-list-wrap
  height:32rem;
</style>