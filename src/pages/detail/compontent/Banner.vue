<template>
  <div>
    <div class="banner" @click="handdleBannerClick">
      <img
        class="banner-img"
        :src="bannerImg"
        alt=""
      />
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe629;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <CommonGallery
      :imgs="gallaryImgs"
      v-show="showGallery"
      @close="handdleGalleryClose"
    ></CommonGallery>
  </div>
</template>

<script>
import CommonGallery from "./../../../common/gallery/Gallery";
export default {
  name: "DetailBanner",
  props:{
    sightName:String,
    bannerImg:String,
    gallaryImgs:Array
  },
  methods: {
    handdleBannerClick() {
      this.showGallery = true;
    },
    handdleGalleryClose() {
      this.showGallery = false;
    },
  },
  data() {
    return {
      showGallery: false
    };
  },
  components: {
    CommonGallery,
  },
};
</script>

<style lang="less" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0.2rem;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }
    .banner-number {
      height: 0.32rem;
      line-height: 0.32rem;
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;
    }
    .banner-icon {
      font-size: 0.24rem;
    }
  }
}
</style>