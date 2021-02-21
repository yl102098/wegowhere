<template>
  <div>
    <Header></Header>
    <Search :cities="cities"></Search>
    <List :cities="cities" :hotCities="hotCities" :letter="letter"></List>
    <Alphabet
      :letter="letter"
      :cities="cities"
      @change="this.handdleLetterChange"
    ></Alphabet>
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
      letter: "",
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
    handdleLetterChange(letter) {
      console.log("letter", letter);
      this.letter = letter;
    },
  },

  mounted() {
    this.getCityInfo();
  },
};
</script>

<style lang="less" scoped>
</style>