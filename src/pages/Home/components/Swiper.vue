<template>
  <div>
    <div class="wrapper">
      <swiper :options="swiperOption" v-if="showSwiper" >
        <swiper-slide v-for="item of list" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" alt="" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      轮播时左右的箭头
      <div class="swiper-button-next" slot="button-next"></div> -->
        <!-- <div class="swiper-scrollbar" slot="scrollbar"></div>  最下面的滚动条 -->
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props:{
    list:Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        // autoplay: {
        //   delay: 3000, // 自动切换的时间间隔（单位ms）
        // },
        autoplay:3000,
        disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
      },
    };
    
  },
  computed:{
      showSwiper(){
        return this.list.length
      }
    }
};
</script>

<style lang="less" scoped>
.wrapper {
  /deep/ .swiper-pagination-bullet-active {
    background: #fff;
  }
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  .swiper-img {
    width: 100%;
  }
}
</style>