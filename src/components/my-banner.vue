<template>
    <div class="mybanner">
        <b-container fluid>
            <b-row align-h="start" class="text-left pb-1 pt-2"> 
                <b-col cols="3" align-self="center">
                    <img src="../img/10.png" class="img-fluid float-left mb-2 ml-2 mr-1">
                </b-col>
                <b-col cols="9" align-self="center">
                    <div><p class="text-white">网易云</p></div>
                    <div>
                        <b-badge href="#" variant="primary">黑椒cvip</b-badge>
                        <b-badge href="#" variant="secondary">Lv.8</b-badge>
                    </div>
                    <div class="fs-14 fr text-secondary">
                        <p>开通黑胶VIP ></p>
                    </div>
                </b-col>
            </b-row>
            <b-row class="pb-5 pt-2">
                <b-col>
                    <div class="text-white text-center fs-14">
                        <img src="../img/音乐.png" class="img-fluid img-w-2">
                        <p>本地音乐</p>
                    </div>
                </b-col>
                <b-col>
                    <div class="text-white text-center fs-14">
                        <img src="../img/下载.png" class="img-fluid img-w-2">
                        <p>下载管理</p>
                    </div>
                </b-col>
                <b-col>
                    <div class="text-white text-center fs-14">
                        <img src="../img/我的电台.png" class="img-fluid img-w-2">
                        <p>我的电台</p>
                    </div>
                </b-col>
                <b-col>
                    <div class="text-white text-center fs-14">
                        <img src="../img/收藏.png" class="img-fluid img-w-2">
                        <p>我的收藏</p>
                    </div>
                </b-col>
                <b-col>
                    <div class="text-white text-center fs-14">
                        <img src="../img/关注2.png" class="img-fluid img-w-2">
                        <p>关注新歌</p>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>


<style scoped>
p {
    margin-top: 0;
    margin-bottom: 0rem !important;
}
.fs-14{
    font-size:12px;
    white-space: nowrap;
}
.col{
    position: relative;
    width: 100%;
    padding-right: 5px !important;
    padding-left: 5px !important;
}
.img-fluid {
    max-width: 100%;
    height: auto;
}
.mybanner{
    background-color: #000000c7;
}
.img-w-2{
    width:1.5rem;
}
.fr{
    float: right;
    position: relative;
    top: -43px;
}
</style>