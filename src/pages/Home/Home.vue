<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSwiper :list="swiperList"></HomeSwiper>
        <HomeIcons :iconList="iconList"></HomeIcons>
        <Recomment :recommendList="recommendList"></Recomment>
        <Weekend :weekendList="weekendList"></Weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import Recomment from './components/Recommend'
import Weekend from './components/Weekend'

import axios from 'axios'
    export default {
      name:"Home",
      components:{
          HomeHeader,
          HomeSwiper,
          HomeIcons,
          Recomment,
          Weekend
      } ,
      data() {
          return {
              swiperList:[],
              iconList:[],
              recommendList:[],
              weekendList:[]
          }
      },
      methods:{
          getHomeInfo(){
              axios.get('/api/index.json')
              .then(this.getHomeInfoSucc)
          },
          getHomeInfoSucc(res){
              res = res.data
              if(res.ret && res.data){
                  this.swiperList=res.data.swiperList
                  this.iconList=res.data.iconList
                  this.recommendList=res.data.recommendList
                  this.weekendList=res.data.weekendList
              }
          }
      },
      mounted(){
          this.getHomeInfo()
      }
    }
</script>

<style scoped>
    
</style>