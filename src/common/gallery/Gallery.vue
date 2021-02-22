<template>
  <div class="container" @click="handdleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="gallery-img" :src="item" alt="" />
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
  name: "commonGallery",
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods:{
      handdleGalleryClick(){
          this.$emit('close')
      }
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        observeParents:true,
        observer:true
      },
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  /deep/ swiper-pagination {
    overflow: inherit;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  .wrapper {
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 100%;
    .gallery-img {
      width: 100%;
    }
    .swiper-pagination {
      //   bottom: -1rem;
      color: #fff;
    }
  }
}
</style>