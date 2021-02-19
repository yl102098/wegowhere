<template>
  <div>
    <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe66f;</div>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe635;</span>
        输入城市/景点/游玩主题
      </div>
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  // props:['city']
  props:{
    city:String
  },
};
</script>	

// 1 rem  = html font-size  =50px
<style scoped lang="less">
.header {
  display: flex;
  line-height: 0.86rem;
  background-color: #00bcd4;
  color: #fff;
  .header-left {
    width: 0.64rem;
    float: left;
    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }
  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background: #fff;
    color: #ccc;
    border-radius: 0.1rem;
  }
  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
    .arrow-icon {
      margin-left: -0.08rem;
      font-size: 0.24rem;
    }
  }
}
</style>