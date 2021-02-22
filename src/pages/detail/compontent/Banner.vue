<template>
  <div>
    <div class="banner" @click="handdleBannerClick">
      <img
        class="banner-img"
        src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
        alt=""
      />
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe629;</span>
          39
        </div>
      </div>
    </div>
    <CommonGallery
      :imgs="imgs"
      v-show="showGallery"
      @close="handdleGalleryClose"
    ></CommonGallery>
  </div>
</template>

<script>
import CommonGallery from "./../../../common/gallery/Gallery";
export default {
  name: "DetailBanner",
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
      showGallery: false,
      imgs: [
        "http://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/086174eabf6bd34955ce7b76fb8be567.jpg?width=800&height=800&top=0&color=#5191bb",
        "http://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/086174eabf6bd34955ce7b76fb8be567.jpg?width=800&height=800&top=0&color=#5191bb",
        "http://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/086174eabf6bd34955ce7b76fb8be567.jpg?width=800&height=800&top=0&color=#5191bb",
        "http://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/086174eabf6bd34955ce7b76fb8be567.jpg?width=800&height=800&top=0&color=#5191bb",
        "http://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/086174eabf6bd34955ce7b76fb8be567.jpg?width=800&height=800&top=0&color=#5191bb",
        "http://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/086174eabf6bd34955ce7b76fb8be567.jpg?width=800&height=800&top=0&color=#5191bb",
        "http://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/086174eabf6bd34955ce7b76fb8be567.jpg?width=800&height=800&top=0&color=#5191bb",
      ],
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