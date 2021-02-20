<template>
  <ul class="list">
    <li class="item" v-for="(item, key) of cities" :key="key">
        {{ key }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object,
  },
};
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-direction: column; //纵向排列
  justify-content: center; //垂直居中
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0rem;
  width: 0.4rem;
  // background-color: #09f;
  .item {
    line-height: 0.44rem;
    text-align: center;
    color: #00bcd4;
  }
}
</style>