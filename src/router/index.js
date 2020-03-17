import Vue from 'vue'
import Router from 'vue-router'
import my from '@/page/my'
import find from '@/page/find'
import yuncun from '@/page/yuncun'
import ycvideo from '@/page/yuncun-video'
import sidebar from '@/components/sidebar'
import demo from '@/page/demo'
import leaderboard from '@/components/Leaderboard'
import leaderboardhotsong from '@/components/Leaderboard-hotsong'
import search from '@/components/search'
import todo from '@/components/todo'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path:'/find',
      name:'find',
      component:find,
    },
    {
      path:'/todo',
      name:'todo',
      component:todo,
    },
    {
      path:'/search',
      name:'search',
      component:search,
    },
    {
      path:'/leaderboard',
      name:'leaderboard',
      component:leaderboard,
    },
    {
      path:'/leaderboardhotsong',
      name:'leaderboardhotsong',
      component:leaderboardhotsong,
    },
    {
      path:'/demo',
      name:'demo',
      component:demo
    },
    {
      path:'/yuncun',
      name:'yuncun',
      component:yuncun
    },
    {
      path:'/ycvideo',
      name:'ycvideo',
      component:ycvideo,
    },
    {
      path:'/sidebar',
      name:'sidebar',
      component:sidebar,
    }
  ]
})
