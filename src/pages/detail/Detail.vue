<template>
  <div>
    <Banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></Banner>
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
import axios from 'axios'
export default {
  name: "Detail",
  components: {
    Banner,
    Header,
    List
  },
  data() {
    return {
      sightName:"",
      bannerImg:"",
      gallaryImgs:[],
      list:[]
    }
  },
  mounted(){
    axios.get('/api/detail.json?id='+this.$route.params.id)
    .then(res=>{
      res=res.data
      if(res.ret && res.data){
        const data = res.data
        console.log("data",data)
        this.sightName=data.sightName
        this.bannerImg=data.bannerImg
        this.gallaryImgs=data.gallaryImgs
        this.list=data.categoryList
      }
    })
  },
};
</script>

<style lang="less" scoped>
.content{
  height: 50rem;
}
</style>