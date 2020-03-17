<template>
    <div>
        <b-container>
            <b-row>
                <b-col>
                    <swiper :options="swiperOption">
                        <swiper-slide>
                            <figure>
                                <a href="#"><img src="http://p1.music.126.net/dUngzBPrrhjaozshGg9qcA==/109951164769063461.jpg?imageView&quality=89" alt="" class="img-fluid rounded"></a>
                            </figure>
                        </swiper-slide>
                        <swiper-slide>
                            <figure><a href="#"><img src="http://p1.music.126.net/NOZpYWRYjBeLc_sPBweybQ==/109951164770852221.jpg?imageView&quality=89" alt="" class="img-fluid rounded"></a></figure>
                        </swiper-slide>
                        <swiper-slide>
                            <figure><a href="#"><img src="http://p1.music.126.net/PG9qp_3oPMYPzoMd5mnNWw==/109951164770395279.jpg?imageView&quality=89" alt="" class="img-fluid rounded"></a></figure>
                        </swiper-slide>
                        <swiper-slide>
                            <figure><a href="#"><img src="http://p1.music.126.net/PKqmXzSoZ1YoWc4V4oOf8Q==/109951164770406900.jpg?imageView&quality=89" alt="" class="img-fluid rounded"></a></figure>
                        </swiper-slide>
                        <swiper-slide>
                            <figure><a href="#"><img src="http://p1.music.126.net/vsGRp6zuWgBNSKfvSeMRsA==/109951164770405215.jpg?imageView&quality=89" alt="" class="img-fluid rounded"></a></figure>
                        </swiper-slide>
                        <swiper-slide>
                            <figure><a href="#"><img src="http://p1.music.126.net/eJJNWFoAVdYul4iBPO1jXg==/109951164772150954.jpg?imageView&quality=89" alt="" class="img-fluid rounded"></a></figure>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          loop:true,
          autoplay:true,
          pagination: {
            el: '.swiper-pagination',
            clickable:true,
          }
        }
      }
    }
  }
</script>


<style scoped>
.swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 17px !important;
    left: 0;
    width: 100%;
}
</style>