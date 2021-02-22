<template>
  <div>
    <router-link tag="div" class="header-abs" to="/" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe66f;</div>
    </router-link>
    <div class="header-back" v-show="!showAbs" :style="opacityStyles">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe66f;</div>
      </router-link>
      经典详情
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyles: {
        opacity: 0,
      },
    };
  },
  methods: {
    handdleScroll() {
      //   console.log(document.documentElement.scrollTop)
      const top = document.documentElement.scrollTop;
      if (top > 50) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyles = { opacity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    },
  },
  activated() {
    window.addEventListener("scroll", this.handdleScroll);
  },
};
</script>

<style lang="less" scoped>
.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 0.4rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  .header-abs-back {
    color: #fff;
    font-size: 0.4rem;
  }
}
.header-back {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0.86rem;
  overflow: hidden;
  line-height: 0.86rem;
  text-align: center;
  color: #fff;
  background: #00bcd4;
  font-size: 0.32rem;
  .header-fixed-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    color: #fff;
  }
}
</style>