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
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import Recomment from "./components/Recommend";
import Weekend from "./components/Weekend";
import { mapState } from "vuex";
import axios from "axios";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    Recomment,
    Weekend,
  },
  data() {
    return {
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    };
  },
  computed: {
    ...mapState(["city"]),
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json?city=" + this.city).then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        this.swiperList = res.data.swiperList;
        this.iconList = res.data.iconList;
        this.recommendList = res.data.recommendList;
        this.weekendList = res.data.weekendList;
      }
    },
  },
  mounted() {
    console.log("mounted");
    this.lastCity = this.city;
    console.log("this.lastCity", this.lastCity);
    this.getHomeInfo();
  },
  activated() {
    console.log("activated");
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  },
};
</script>

<style scoped>
</style>