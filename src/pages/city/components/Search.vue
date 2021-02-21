<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        class="search-input"
        type="text"
        placeholder="输入城市名"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handdleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <div class="search-item border-bottom" v-show="hasNoData">
          没找到匹配数据
        </div>
      </ul>
    </div>

    <!-- 
2.v-show  绑定keyword数据，有数据就显示，没有数据就隐藏
 -->
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: Object,
  },
  methods: {
    handdleCityClick(city) {
      this.$store.commit("changeCity", city);
      // this.$store.dispatch('changeCity',city);
      // 发送一个action，携带数据
      this.$router.push('/')
    },
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    },
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    },
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  },
};
</script>

<style lang="less" scoped>
.search {
  background: #00bcd4;
  height: 0.72rem;
  padding: 0 0.1rem;
  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    padding: 0 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}

.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;
  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    background: #fff;
  }
}
</style>