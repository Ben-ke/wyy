<template>
  <div id="app">
    <hnav></hnav>
    <router-view></router-view>
    <fbplayer></fbplayer>
  </div>
</template>

<script>
import hnav from '../src/components/header-nav'
import fbplayer from '../src/components/fixed-bottom-play'
export default {
  name: 'app',
  components:{
    hnav,
    fbplayer
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
