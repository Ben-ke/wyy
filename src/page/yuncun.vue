<template>
  <div id="yc">
    <b-container>
      <b-row>
        <b-col class="justify-content-center">
        <div id="yc-tab">
          <b-tabs no-body small no-nav-style lazy align="center" content-class="" active-nav-item-class="cr font-weight-bold" active-tab-class="bg-white" nav-class="bb">
            <b-tab active title-link-class="text-secondary">
              <template v-slot:title>
                <p>广场</p>
              </template>
              <!--div class="pt-3 pl-3 pb-3 pr-3" id="jubo">
                <a href="#" target>
                  <b-jumbotron text-variant="white" bg-variant="dark" container-fluid>
                    <template v-slot:lead>
                      <div>
                        <p class="fs-16">
                          云村热评墙
                          <b-icon icon="chevron-right"></b-icon>
                        </p>
                        <small class="fs-14">今日走心热评，哪句最触动你？</small>
                      </div>
                    </template>
                  </b-jumbotron>
                </a>
              </div-->
               <div class="">
                 <waterfall></waterfall>
               </div>
            </b-tab>
            <b-tab title-link-class="text-secondary">
              <template v-slot:title>
                <p>
                  关注
                  <b-badge variant="white" class="position-absolute crc" style="top:0rem;right:7.6rem">88</b-badge>
                </p>
              </template>
              <div>
              <div class="d-flex align-items-center p-3 border-bottom">
                <div class="mr-auto">
                  <p><b-icon icon="hash" variant="white" font-scale="2" class="rounded-circle bg-success"></b-icon><span class="pl-2 position-relative small text-secondary" style="top:-5px">关注话题</span></p>
                </div>
                <div class="ml-auto">
                  <b-icon icon="chevron-right" variant="secondary"></b-icon>
                </div>
              </div>
              <div class="d-flex justify-content-center pt-5 pb-5">
                <figure class="text-center">
                  <img src="../img/箱子.png" class="img-fluid" />
                  <figcaption>
                  <p>你关注的人比较少</p>  
                  <small class="text-secondary">快去多多关注感兴趣的人吧</small>
                  </figcaption>    
                </figure>
              </div>
              <div class="d-flex align-items-center p-3">
                <div class="mr-auto">
                  <p><b-icon icon="people" variant="white" font-scale="2" class="rounded-circle bg-success"></b-icon><span class="pl-2 position-relative small text-secondary" style="top:-5px">你可能感兴趣的人</span></p>
                </div>
                <div class="ml-auto">
                  <p class="small text-secondary">查看更多<b-icon icon="chevron-right" variant="secondary"></b-icon></p>
                </div>
              </div>
              <div>
                <ym></ym>
              </div>
              </div>
            </b-tab>
          </b-tabs>
        </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import waterfall from '../components/waterfall'
import ym from '../components/yuncun-mingxing'
export default {
    components:{
      waterfall,
      ym
    }
}
</script>

<style>
#yc .col{
    position: relative;
    width: 100%;
    padding-right: 0;
    padding-left: 0;
}
#yc-tab .cr {
  color: #fc0404 !important;
  border-bottom: 2px solid #fc0404;
  transition: transform 2s;
}
#yc-tab .crc {
  color: #fc0404 !important;
}
#yc-tab .nav-link {
  display: block;
  padding: 0.5rem 1.2rem !important;
}
#yc p {
  margin-top: 0;
  margin-bottom: 0rem !important;
}
#jubo .fs-16 {
  font-size: 16px !important;
}
#jubo .fs-14 {
  font-size: 14px !important;
}

#jubo a:hover {
  color: #fff !important;
  text-decoration: none !important;
  background-color: transparent;
}
#yc .bb{
    border-bottom:2px solid #eee;
}
#yc .jumbotron {
    padding: 2rem 1rem;
    margin-bottom: 0rem !important;
    background-color: #e9ecef;
    border-radius: 0.3rem;
}
</style>