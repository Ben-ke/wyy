<template>
    <div class="top-move position-relative">
        <carousel></carousel>
        <recentlyplayed></recentlyplayed>
    </div>
</template>

<script>
import carousel from '../components/carousel'
import recentlyplayed from '../components/recently-played'
export default {
    components:{
        carousel,
        recentlyplayed
    }
}
</script>

<style lang="stylus" scoped>
.top-move{
    top: -25px;
    z-index: 9999;
    background: white;
    border-radius: 1.5rem;
}
</style>