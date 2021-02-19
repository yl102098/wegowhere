<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.itemTitle }}</p>
          <p class="item-desc">{{ item.itemDesc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "1001",
          imgUrl:
            "//p1.meituan.net/200.0/deal/145089d07d14933907ac2a36c1d6ea97206868.jpg@343_0_1080_1080a%7C267h_267w_2e_90Q",
          itemTitle: "邵汇大虾",
          itemDesc:
            "[人民医院]100元代金sdf手动阀手动阀阿斯蒂芬收到发生的券1张，全场通用",
        },
        {
          id: "1002",
          imgUrl:
            "//p1.meituan.net/200.0/deal/145089d07d14933907ac2a36c1d6ea97206868.jpg@343_0_1080_1080a%7C267h_267w_2e_90Q",
          itemTitle: "邵汇大虾",
          itemDesc:
            "[人民医院]100元代金sdf手动阀手动阀阿斯蒂芬收到发生的券1张，全场通用",
        },
        {
          id: "1003",
          imgUrl:
            "//p1.meituan.net/200.0/deal/145089d07d14933907ac2a36c1d6ea97206868.jpg@343_0_1080_1080a%7C267h_267w_2e_90Q",
          itemTitle: "邵汇大虾",
          itemDesc:
            "[人民医院]100元代金sdf手动阀手动阀阿斯蒂芬收到发生的券1张，全场通用",
        },
        {
          id: "1004",
          imgUrl:
            "//p1.meituan.net/200.0/deal/145089d07d14933907ac2a36c1d6ea97206868.jpg@343_0_1080_1080a%7C267h_267w_2e_90Q",
          itemTitle: "邵汇大虾",
          itemDesc:
            "[人民医院]100元代金sdf手动阀手动阀阿斯蒂芬收到发生的券1张，全场通用",
        },
        {
          id: "1005",
          imgUrl:
            "//p1.meituan.net/200.0/deal/145089d07d14933907ac2a36c1d6ea97206868.jpg@343_0_1080_1080a%7C267h_267w_2e_90Q",
          itemTitle: "邵汇大虾",
          itemDesc:
            "[人民医院]100元代金sdf手动阀手动阀阿斯蒂芬收到发生的券1张，全场通用",
        },
        {
          id: "1006",
          imgUrl:
            "//p1.meituan.net/200.0/deal/145089d07d14933907ac2a36c1d6ea97206868.jpg@343_0_1080_1080a%7C267h_267w_2e_90Q",
          itemTitle: "邵汇大虾",
          itemDesc:
            "[人民医院]100元代金sdf手动阀手动阀阿斯蒂芬收到发生的券1张，全场通用",
        },
        {
          id: "1007",
          imgUrl:
            "//p1.meituan.net/200.0/deal/145089d07d14933907ac2a36c1d6ea97206868.jpg@343_0_1080_1080a%7C267h_267w_2e_90Q",
          itemTitle: "邵汇大虾",
          itemDesc:
            "[人民医院]100元代金sdf手动阀手动阀阿斯蒂芬收到发生的券1张，全场通用",
        },
        {
          id: "1008",
          imgUrl:
            "//p1.meituan.net/200.0/deal/145089d07d14933907ac2a36c1d6ea97206868.jpg@343_0_1080_1080a%7C267h_267w_2e_90Q",
          itemTitle: "邵汇大虾",
          itemDesc:
            "[人民医院]100元代金sdf手动阀手动阀阿斯蒂芬收到发生的券1张，全场通用",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background-color: #eee;
  text-indent: 0.2rem; //缩进多少像素
}
.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 33.9%;
  .item-img {
  width: 100%;
}
}

.item-info {
  padding: 0.1rem;
  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-desc {
    line-height: 0.4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #ccc;
  }
}
</style>