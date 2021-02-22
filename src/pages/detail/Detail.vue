<template>
  <div>
    <Banner></Banner>
    <Header></Header>
    <div class="content"></div>
  </div>
</template>

<script>
import Banner from "./compontent/Banner";
import Header from "./compontent/Header";
export default {
  name: "Detail",
  components: {
    Banner,
    Header,
  },
};
</script>

<style lang="less" scoped>
.content{
  height: 50rem;
}
</style>