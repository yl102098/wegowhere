<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="" />
            <p class="title">{{ item.desc }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props:{
    iconList:Array
  },
  data() {
    return {
        swiperOption: {
        // loop:true
      },
    };
  },
  computed:{
      pages () {
          const pages = []
        //   功能就是判断索引，如果是0--7就添加到pages【0】中，下取整index是8-15时，就添加到pages【1】中
          this.iconList.forEach((item,index)=>{
              const page = Math.floor(index/8)
              if(!pages[page]){
                  pages[page] = []
              }
              pages[page].push(item)
          })
          return pages
      }
  }
};
</script>

<style lang="less" scoped>
.icons {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  .icon {
      
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0px;
    padding-bottom: 25%;
    .icon-img {
      margin-top: .1rem;
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;
      .icon-img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
      .title {
        text-align: center;
        padding-top: 0.15rem;
        color: #333;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>