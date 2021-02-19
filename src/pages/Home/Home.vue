<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSwiper></HomeSwiper>
        <HomeIcons></HomeIcons>
        <Recomment></Recomment>
        <Weekend></Weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import Recomment from './components/Recommend'
import Weekend from './components/Weekend'
    export default {
      name:"Home",
      components:{
          HomeHeader,
          HomeSwiper,
          HomeIcons,
          Recomment,
          Weekend
      } 
    }
</script>

<style scoped>
    
</style>