
<template>
<div id="wa">
    <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData" @click="clickFn" @imgError="imgError" :enablePullDownEvent="true" class="bg-light">
      <div class="img-info" slot-scope="props">
        <div class="p-2 bg-white">
          <p class="text-left text-truncate text-dark small">{{props.value.info}}</p>
          <div class="d-flex flex-row pt-2 pb-1">
                <img :src="props.value.avatar" class="img-fluid hw-1 position-relative"/>
                <p style="width:30%;" class="text-truncate small text-secondary">{{props.value.avatarname}}</p>
                <p class="text-secondary small ml-auto">{{props.value.link}}赞<b-icon icon="three-dots-vertical" size="md"></b-icon></p>
          </div>
        </div>
      </div>
    </vue-waterfall-easy>
    </div>
</template>


<script>
import vueWaterfallEasy from "vue-waterfall-easy";
import axios from "axios";

export default {
  data() {
    return {
      imgsArr: [],
      group: 0 // request param
    };
  },
  components: {
    vueWaterfallEasy
  },
  methods: {
    getData() {
      axios
        .get("../../src/data/data.json?group=" + this.group) // 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个惊呆json文件模拟
        .then(res => {
          this.imgsArr = this.imgsArr.concat(res.data);
          this.group++;
        });
    }
  },

  created() {
    this.getData();
  }
};
</script>

<style>
#wa .vue-waterfall-easy-container {
  position: fixed !important;
  overflow: hidden;
  margin:0 auto;
}
#wa .hw-1{
  width:1rem !important;
  top:2px;
  left:-3px;
  height:1rem !important;
}
#wa p{
  margin-top:0rem;
  margin-bottom:0rem !important;
}
#wa a:hover {
    text-decoration: none !important;
    background-color: transparent;
}
</style>