<template>
  <div>
    <Banner></Banner>
    <Header></Header>
    <div class="content">
      <List :list="list"></List>
    </div>
  </div>
</template>

<script>
import Banner from "./compontent/Banner";
import Header from "./compontent/Header";
import List from "./compontent/List";
export default {
  name: "Detail",
  components: {
    Banner,
    Header,
    List
  },
  data() {
    return {
      list:[
        {
          title:"成人票",
          children:[
            {
              title:"成人三馆联票",
              children:[
                {
                  title:"成人三馆联票--某一连锁店"
                }
              ]
            },
            {
              title:"成人五馆联票"
            }
          ]
        },
        {
          title:"儿童票"
        },
        {
          title:"学生票"
        },
        {
          title:"老人票"
        }
      ]
    }
  },
};
</script>

<style lang="less" scoped>
.content{
  height: 50rem;
}
</style>