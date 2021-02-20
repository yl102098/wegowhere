<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名" />
    </div>
    <div class="search-content" ref="search">
      <ul>
        <!-- <li class="search-item border-bottom">SSSS</li>
        <div class="search-item border-bottom">没找到匹配数据</div> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CitySearch",
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

  .search-content {
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
    .search-item {
      line-height: 0.62rem;
      padding-left: 0.2rem;
      color: #666;
      background: #fff;
    }
  }
}
</style>