<template>
  <div>
    <Header></Header>
    <Search></Search>
    <List :cities="cities" :hotCities="hotCities"></List>
    <Alphabet :cities="cities"></Alphabet>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/Header";
import Search from "./components/Search";
import List from "./components/List";
import Alphabet from "./components/Alphabet";
export default {
  name: "City",
  components: {
    Header,
    Search,
    List,
    Alphabet,
  },
  data() {
    return {
      cities: {},
      hotCities: [],
    };
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(this.handlegetCity);
    },
    handlegetCity(res) {
      // console.log(res)
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
  },

  mounted() {
    this.getCityInfo();
  },
};
</script>

<style lang="less" scoped>
</style>