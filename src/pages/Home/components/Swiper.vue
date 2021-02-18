<template>
  <div>
    <div class="wrapper">
      <swiper :options="swiperOption" aria-autocomplete="">
        <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop:true
      },
      swiperList: [
        {
          id: 1001,
          imgUrl:
            "//imgs.qunarzz.com/vs_ceph_vcimg/f7813c9431796cc32ae7b7a78447342e.jpeg",
        },
        {
          id: 1002,
          imgUrl:
            "//imgs.qunarzz.com/vs_ceph_vcimg/569cae4ae98e9793f7341e85eed73c54.jpeg",
        },
        {
          id: 1003,
          imgUrl:
            "//imgs.qunarzz.com/vs_ceph_vcimg/f03f5ac90ae59d0d9c6332a2bfd9782e.jpeg",
        },
      ],
    };
  },
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