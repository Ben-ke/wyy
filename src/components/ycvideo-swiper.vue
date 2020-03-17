<template>
  <cube-page type="tab-composite-view" title="tab-composite">
    <div slot="content">
      <cube-scroll
  ref="scroll"
  :data="items"
  direction="horizontal"
  class="horizontal-scroll-list-wrap border-bottom">
      <cube-tab-bar v-model="selectedLabel"
                    show-slider
                    :use-transition="disabled"
                    ref="tabNav"
                    :data="tabLabels">
      </cube-tab-bar>
      </cube-scroll>
      <div class="tab-slide-container bg-light">
        <cube-slide
          ref="slide"
          :loop="loop"
          :initial-index="initialIndex"
          :auto-play="autoPlay"
          :show-dots="showDots"
          :options="slideOptions"
          @scroll="scroll"
          @change="changePage"
        >
          <!-- 关注 -->
           <cube-slide-item>
            <cube-scroll :data="recommendData" :options="scrollOptions">
              <ul class="list-wrapper list-unstyled mt-2 mb-2 pb-2 pl-3 pr-3 bg-white">
                <li v-for="(item, index) in recommendData" class="list-item" :key="index">
                  <div>
                    <p class="position-absolute text-white bg-warning rounded-circle pl-2 pr-2" style="top:.8rem;right:2rem;z-index:999999">{{item.topic}}</p>
                    <b-embed type="video" aspect="16by9" controls :poster="item.poster" class="rounded">
                      <source :src="item.video" type="video/mp4">
                    </b-embed>
                    <p class="pt-2">{{item.title}}</p>
                    <div class="d-flex align-self-center">
                      <div>
                      <img :src="item.avatar" style="width:2rem;height:2rem;" class="img-fluid"><span class="pl-2">{{item.avatarname}}</span>
                      </div>
                      <div class="ml-auto">
                        <span class="pl-1 pr-1 h4"><b-icon icon="heart" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-1 h4"><b-icon icon="chat" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-3 h4"><b-icon icon="three-dots-vertical" font-scale="1" variant="secondary"></b-icon></span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
           <cube-slide-item>
            <cube-scroll :data="recommendData" :options="scrollOptions">
              <ul class="list-wrapper list-unstyled mt-2 mb-2 pb-2 pl-3 pr-3 bg-white">
                <li v-for="(item, index) in recommendData" class="list-item" :key="index">
                  <div>
                    <p class="position-absolute text-white bg-warning rounded-circle pl-2 pr-2" style="top:.8rem;right:2rem;z-index:999999">{{item.topic}}</p>
                    <b-embed type="video" aspect="16by9" controls :poster="item.poster" class="rounded">
                      <source :src="item.video" type="video/mp4">
                    </b-embed>
                    <p class="pt-2">{{item.title}}</p>
                    <div class="d-flex align-self-center">
                      <div>
                      <img :src="item.avatar" style="width:2rem;height:2rem;" class="img-fluid"><span class="pl-2">{{item.avatarname}}</span>
                      </div>
                      <div class="ml-auto">
                        <span class="pl-1 pr-1 h4"><b-icon icon="heart" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-1 h4"><b-icon icon="chat" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-3 h4"><b-icon icon="three-dots-vertical" font-scale="1" variant="secondary"></b-icon></span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
           <cube-slide-item>
            <cube-scroll :data="recommendData" :options="scrollOptions">
              <ul class="list-wrapper list-unstyled mt-2 mb-2 pb-2 pl-3 pr-3 bg-white">
                <li v-for="(item, index) in recommendData" class="list-item" :key="index">
                  <div>
                    <p class="position-absolute text-white bg-warning rounded-circle pl-2 pr-2" style="top:.8rem;right:2rem;z-index:999999">{{item.topic}}</p>
                    <b-embed type="video" aspect="16by9" controls :poster="item.poster" class="rounded">
                      <source :src="item.video" type="video/mp4">
                    </b-embed>
                    <p class="pt-2">{{item.title}}</p>
                    <div class="d-flex align-self-center">
                      <div>
                      <img :src="item.avatar" style="width:2rem;height:2rem;" class="img-fluid"><span class="pl-2">{{item.avatarname}}</span>
                      </div>
                      <div class="ml-auto">
                        <span class="pl-1 pr-1 h4"><b-icon icon="heart" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-1 h4"><b-icon icon="chat" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-3 h4"><b-icon icon="three-dots-vertical" font-scale="1" variant="secondary"></b-icon></span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
           <cube-slide-item>
            <cube-scroll :data="recommendData" :options="scrollOptions">
              <ul class="list-wrapper list-unstyled mt-2 mb-2 pb-2 pl-3 pr-3 bg-white">
                <li v-for="(item, index) in recommendData" class="list-item" :key="index">
                  <div>
                    <p class="position-absolute text-white bg-warning rounded-circle pl-2 pr-2" style="top:.8rem;right:2rem;z-index:999999">{{item.topic}}</p>
                    <b-embed type="video" aspect="16by9" controls :poster="item.poster" class="rounded">
                      <source :src="item.video" type="video/mp4">
                    </b-embed>
                    <p class="pt-2">{{item.title}}</p>
                    <div class="d-flex align-self-center">
                      <div>
                      <img :src="item.avatar" style="width:2rem;height:2rem;" class="img-fluid"><span class="pl-2">{{item.avatarname}}</span>
                      </div>
                      <div class="ml-auto">
                        <span class="pl-1 pr-1 h4"><b-icon icon="heart" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-1 h4"><b-icon icon="chat" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-3 h4"><b-icon icon="three-dots-vertical" font-scale="1" variant="secondary"></b-icon></span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
           <cube-slide-item>
            <cube-scroll :data="recommendData" :options="scrollOptions">
              <ul class="list-wrapper list-unstyled mt-2 mb-2 pb-2 pl-3 pr-3 bg-white">
                <li v-for="(item, index) in recommendData" class="list-item" :key="index">
                  <div>
                    <p class="position-absolute text-white bg-warning rounded-circle pl-2 pr-2" style="top:.8rem;right:2rem;z-index:999999">{{item.topic}}</p>
                    <b-embed type="video" aspect="16by9" controls :poster="item.poster" class="rounded">
                      <source :src="item.video" type="video/mp4">
                    </b-embed>
                    <p class="pt-2">{{item.title}}</p>
                    <div class="d-flex align-self-center">
                      <div>
                      <img :src="item.avatar" style="width:2rem;height:2rem;" class="img-fluid"><span class="pl-2">{{item.avatarname}}</span>
                      </div>
                      <div class="ml-auto">
                        <span class="pl-1 pr-1 h4"><b-icon icon="heart" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-1 h4"><b-icon icon="chat" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-3 h4"><b-icon icon="three-dots-vertical" font-scale="1" variant="secondary"></b-icon></span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
           <cube-slide-item>
            <cube-scroll :data="recommendData" :options="scrollOptions">
              <ul class="list-wrapper list-unstyled mt-2 mb-2 pb-2 pl-3 pr-3 bg-white">
                <li v-for="(item, index) in recommendData" class="list-item" :key="index">
                  <div>
                    <p class="position-absolute text-white bg-warning rounded-circle pl-2 pr-2" style="top:.8rem;right:2rem;z-index:999999">{{item.topic}}</p>
                    <b-embed type="video" aspect="16by9" controls :poster="item.poster" class="rounded">
                      <source :src="item.video" type="video/mp4">
                    </b-embed>
                    <p class="pt-2">{{item.title}}</p>
                    <div class="d-flex align-self-center">
                      <div>
                      <img :src="item.avatar" style="width:2rem;height:2rem;" class="img-fluid"><span class="pl-2">{{item.avatarname}}</span>
                      </div>
                      <div class="ml-auto">
                        <span class="pl-1 pr-1 h4"><b-icon icon="heart" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-1 h4"><b-icon icon="chat" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-3 h4"><b-icon icon="three-dots-vertical" font-scale="1" variant="secondary"></b-icon></span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
           <cube-slide-item>
            <cube-scroll :data="recommendData" :options="scrollOptions">
              <ul class="list-wrapper list-unstyled mt-2 mb-2 pb-2 pl-3 pr-3 bg-white">
                <li v-for="(item, index) in recommendData" class="list-item" :key="index">
                  <div>
                    <p class="position-absolute text-white bg-warning rounded-circle pl-2 pr-2" style="top:.8rem;right:2rem;z-index:999999">{{item.topic}}</p>
                    <b-embed type="video" aspect="16by9" controls :poster="item.poster" class="rounded">
                      <source :src="item.video" type="video/mp4">
                    </b-embed>
                    <p class="pt-2">{{item.title}}</p>
                    <div class="d-flex align-self-center">
                      <div>
                      <img :src="item.avatar" style="width:2rem;height:2rem;" class="img-fluid"><span class="pl-2">{{item.avatarname}}</span>
                      </div>
                      <div class="ml-auto">
                        <span class="pl-1 pr-1 h4"><b-icon icon="heart" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-1 h4"><b-icon icon="chat" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-3 h4"><b-icon icon="three-dots-vertical" font-scale="1" variant="secondary"></b-icon></span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
           <cube-slide-item>
            <cube-scroll :data="recommendData" :options="scrollOptions">
              <ul class="list-wrapper list-unstyled mt-2 mb-2 pb-2 pl-3 pr-3 bg-white">
                <li v-for="(item, index) in recommendData" class="list-item" :key="index">
                  <div>
                    <p class="position-absolute text-white bg-warning rounded-circle pl-2 pr-2" style="top:.8rem;right:2rem;z-index:999999">{{item.topic}}</p>
                    <b-embed type="video" aspect="16by9" controls :poster="item.poster" class="rounded">
                      <source :src="item.video" type="video/mp4">
                    </b-embed>
                    <p class="pt-2">{{item.title}}</p>
                    <div class="d-flex align-self-center">
                      <div>
                      <img :src="item.avatar" style="width:2rem;height:2rem;" class="img-fluid"><span class="pl-2">{{item.avatarname}}</span>
                      </div>
                      <div class="ml-auto">
                        <span class="pl-1 pr-1 h4"><b-icon icon="heart" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-1 h4"><b-icon icon="chat" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-3 h4"><b-icon icon="three-dots-vertical" font-scale="1" variant="secondary"></b-icon></span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
           <cube-slide-item>
            <cube-scroll :data="recommendData" :options="scrollOptions">
              <ul class="list-wrapper list-unstyled mt-2 mb-2 pb-2 pl-3 pr-3 bg-white">
                <li v-for="(item, index) in recommendData" class="list-item" :key="index">
                  <div>
                    <p class="position-absolute text-white bg-warning rounded-circle pl-2 pr-2" style="top:.8rem;right:2rem;z-index:999999">{{item.topic}}</p>
                    <b-embed type="video" aspect="16by9" controls :poster="item.poster" class="rounded">
                      <source :src="item.video" type="video/mp4">
                    </b-embed>
                    <p class="pt-2">{{item.title}}</p>
                    <div class="d-flex align-self-center">
                      <div>
                      <img :src="item.avatar" style="width:2rem;height:2rem;" class="img-fluid"><span class="pl-2">{{item.avatarname}}</span>
                      </div>
                      <div class="ml-auto">
                        <span class="pl-1 pr-1 h4"><b-icon icon="heart" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-1 h4"><b-icon icon="chat" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-3 h4"><b-icon icon="three-dots-vertical" font-scale="1" variant="secondary"></b-icon></span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
           <cube-slide-item>
            <cube-scroll :data="recommendData" :options="scrollOptions">
              <ul class="list-wrapper list-unstyled mt-2 mb-2 pb-2 pl-3 pr-3 bg-white">
                <li v-for="(item, index) in recommendData" class="list-item" :key="index">
                  <div>
                    <p class="position-absolute text-white bg-warning rounded-circle pl-2 pr-2" style="top:.8rem;right:2rem;z-index:999999">{{item.topic}}</p>
                    <b-embed type="video" aspect="16by9" controls :poster="item.poster" class="rounded">
                      <source :src="item.video" type="video/mp4">
                    </b-embed>
                    <p class="pt-2">{{item.title}}</p>
                    <div class="d-flex align-self-center">
                      <div>
                      <img :src="item.avatar" style="width:2rem;height:2rem;" class="img-fluid"><span class="pl-2">{{item.avatarname}}</span>
                      </div>
                      <div class="ml-auto">
                        <span class="pl-1 pr-1 h4"><b-icon icon="heart" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-1 h4"><b-icon icon="chat" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-3 h4"><b-icon icon="three-dots-vertical" font-scale="1" variant="secondary"></b-icon></span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
           <cube-slide-item>
            <cube-scroll :data="recommendData" :options="scrollOptions">
              <ul class="list-wrapper list-unstyled mt-2 mb-2 pb-2 pl-3 pr-3 bg-white">
                <li v-for="(item, index) in recommendData" class="list-item" :key="index">
                  <div>
                    <p class="position-absolute text-white bg-warning rounded-circle pl-2 pr-2" style="top:.8rem;right:2rem;z-index:999999">{{item.topic}}</p>
                    <b-embed type="video" aspect="16by9" controls :poster="item.poster" class="rounded">
                      <source :src="item.video" type="video/mp4">
                    </b-embed>
                    <p class="pt-2">{{item.title}}</p>
                    <div class="d-flex align-self-center">
                      <div>
                      <img :src="item.avatar" style="width:2rem;height:2rem;" class="img-fluid"><span class="pl-2">{{item.avatarname}}</span>
                      </div>
                      <div class="ml-auto">
                        <span class="pl-1 pr-1 h4"><b-icon icon="heart" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-1 h4"><b-icon icon="chat" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-3 h4"><b-icon icon="three-dots-vertical" font-scale="1" variant="secondary"></b-icon></span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
           <cube-slide-item>
            <cube-scroll :data="recommendData" :options="scrollOptions">
              <ul class="list-wrapper list-unstyled mt-2 mb-2 pb-2 pl-3 pr-3 bg-white">
                <li v-for="(item, index) in recommendData" class="list-item" :key="index">
                  <div>
                    <p class="position-absolute text-white bg-warning rounded-circle pl-2 pr-2" style="top:.8rem;right:2rem;z-index:999999">{{item.topic}}</p>
                    <b-embed type="video" aspect="16by9" controls :poster="item.poster" class="rounded">
                      <source :src="item.video" type="video/mp4">
                    </b-embed>
                    <p class="pt-2">{{item.title}}</p>
                    <div class="d-flex align-self-center">
                      <div>
                      <img :src="item.avatar" style="width:2rem;height:2rem;" class="img-fluid"><span class="pl-2">{{item.avatarname}}</span>
                      </div>
                      <div class="ml-auto">
                        <span class="pl-1 pr-1 h4"><b-icon icon="heart" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-1 h4"><b-icon icon="chat" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-3 h4"><b-icon icon="three-dots-vertical" font-scale="1" variant="secondary"></b-icon></span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
           <cube-slide-item>
            <cube-scroll :data="recommendData" :options="scrollOptions">
              <ul class="list-wrapper list-unstyled mt-2 mb-2 pb-2 pl-3 pr-3 bg-white">
                <li v-for="(item, index) in recommendData" class="list-item" :key="index">
                  <div>
                    <p class="position-absolute text-white bg-warning rounded-circle pl-2 pr-2" style="top:.8rem;right:2rem;z-index:999999">{{item.topic}}</p>
                    <b-embed type="video" aspect="16by9" controls :poster="item.poster" class="rounded">
                      <source :src="item.video" type="video/mp4">
                    </b-embed>
                    <p class="pt-2">{{item.title}}</p>
                    <div class="d-flex align-self-center">
                      <div>
                      <img :src="item.avatar" style="width:2rem;height:2rem;" class="img-fluid"><span class="pl-2">{{item.avatarname}}</span>
                      </div>
                      <div class="ml-auto">
                        <span class="pl-1 pr-1 h4"><b-icon icon="heart" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-1 h4"><b-icon icon="chat" font-scale="1" variant="secondary"></b-icon></span>
                        <span class="pl-1 pr-3 h4"><b-icon icon="three-dots-vertical" font-scale="1" variant="secondary"></b-icon></span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
        </cube-slide>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import { FOLLOWERS_DATA, RECOMMEND_DATA, HOT_DATA } from '../data/tab-bar'
  import { findIndex } from '../assets/common/helpers/util'
  export default {
    data () {
      return {
        selectedLabel: '推荐',
        disabled: false,
        tabLabels: [{
          label: '推荐'
        }, {
          label: '音乐画像'
        }, {
          label: '离别'
        },{
          label: '现场'
        }, {
          label: '翻唱'
        }, {
          label: '广场'
        },{
          label: '舞蹈'
        }, {
          label: '听BGM'
        }, {
          label: 'MV'
        },{
          label: '生活'
        }, {
          label: '游戏'
        }, {
          label: 'ACG音乐'
        }, {
          label: '最佳饭制'
        }],
        loop: false,
        autoPlay: false,
        showDots: false,
        slideOptions: {
          listenScroll: true,
          probeType: 3,
          /* lock y-direction when scrolling horizontally and  vertically at the same time */
          directionLockThreshold: 0
        },
        scrollOptions: {
          /* lock x-direction when scrolling horizontally and  vertically at the same time */
          directionLockThreshold: 0
        },
        followersData: FOLLOWERS_DATA,
        recommendData: RECOMMEND_DATA,
        hotData: HOT_DATA
      }
    },
    methods: {
      changePage (current) {
        this.selectedLabel = this.tabLabels[current].label
        console.log(current)
      },
      scroll (pos) {
        const x = Math.abs(pos.x)
        const tabItemWidth = this.$refs.tabNav.$el.clientWidth
        const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth
        const deltaX = x / slideScrollerWidth * tabItemWidth
        this.$refs.tabNav.setSliderTransform(deltaX)
      },
      resolveTitle (item) {
        return `${item.name}关注了问题 · ${item.postTime} 小时前`
      },
      resolveQuestionFollowers (item) {
        return `${item.answers} 赞同 · ${item.followers} 评论`
      }
    },
    computed: {
      initialIndex () {
        let index = 0
        index = findIndex(this.tabLabels, item => item.label === this.selectedLabel)
        return index
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  /* 覆盖样式 */
  .cube-page
    &.tab-composite-view
      > .wrapper
        > .content
          margin: 0
    .tab-slide-container
      position: fixed
      top: 74px
      left: 0
      right: 0
      bottom: 0
    .list-wrapper
      overflow: hidden
.horizontal-scroll-list-wrap
  .cube-scroll-content
    display: inline-block
    width:59rem
  .list-wrapper
    white-space: nowrap
  .list-item
    display: inline-block
.cube-tab-bar-slider {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 20px;
    background-color: #fff !important;
}
</style>