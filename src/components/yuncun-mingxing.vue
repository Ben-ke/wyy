<template>
  <div id="find-ym" class="rounded pb-3 pl-3">
    <cube-page type="scroll-view" title="Scroll">
      <div slot="content" class="scroll-wrapper">
        <cube-scroll
          ref="scroll"
          :data="items"
          direction="horizontal"
          class="horizontal-scroll-list-wrap"
        >
          <ul class="list-wrapper list-unstyled">
            <li v-for="item in items" class="list-item text-center p-1" style="width:14rem;">
              <b-alert show dismissible fade variant="warning">
                <a :href="item.href">
                  <img :src="item.avatar" class="img-fluid rounded-circle" style="width:5rem;" />
                  <p class="text-dark pt-1 pb-1">{{item.nickname}}</p>
                  <p class="small text-secondary pb-1">{{item.fans}}粉丝</p>
                  <p class="small text-secondary pb-1 text-truncate">{{item.sintroduction}}</p>
                  <b-button size="sm" variant="primary" pill><b-icon icon="plus" variant="white"></b-icon>关注</b-button>
                  <!--ul>
                    <li v-for="bf in item.baseinfo">
                      <p>{{bf.nickname}}</p>
                      <p>{{bf.area}}</p>
                    </li>
                  </ul>
                  <p>{{item.influence[0]}}-{{item.influence[1]}}</p-->
                </a>
              </b-alert>
            </li>
          </ul>
        </cube-scroll>
      </div>
    </cube-page>
  </div>
</template>

<script type="text/ecmascript-6">
//import productsData from "../data/product-list-find.json";
//let _products = [];
//productsData.goods.forEach(item => {
// _products = _products.concat(item.products);
//});
//const _data =_products;

import Data from "../data/mingxing.json";
//let _data=[];
//Data.mingxing.forEach(item=>{
//    _data=_data.concat(item.baseinfo);
//});
//const _mxData=_data;

export default {
  data() {
    return {
      items: Data.mingxing
    };
  }
};
</script>


<style lang="stylus" rel="stylesheet/stylus">
#find-ym .cube-scroll-content {
  display: inline-block !important;
  width: 78rem !important;
}

#find-ym .cube-scroll-wrapper {
  width: 29rem !important;
}

#find-ym .list-wrapper {
  padding: 0px 0px;
  white-space: nowrap;
}

#find-ym .list-item {
  display: inline-block !important;
}

#find-ym ul {
  margin-top: 0;
  margin-bottom: 0rem !important;
}

#find-ym p {
  margin-top: 0;
  margin-bottom: 0rem !important;
}
#find-ym .alert-dismissible {
    padding-right: 1.5rem;
}
#find-ym .btn-sm, .btn-group-sm > .btn {
    padding: 0.05rem .9rem !important;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.2rem;
}
#find-ym .alert {
    position: relative;
    padding: 1.75rem 1.25rem !important;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
}

</style>