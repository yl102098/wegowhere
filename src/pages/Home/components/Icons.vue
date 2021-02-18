<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="" />
            <p class="title">{{ item.title }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
        swiperOption: {
        loop:true
      },
      iconList: [
        {
          id: 1001,
          imgUrl:
            "https://p0.meituan.net/codeman/050ce6754d32482c75273e292407f2b312356.png",
          title: "电风扇士大夫阿三大苏打",
        },
        {
          id: 1002,
          imgUrl:
            "//p0.meituan.net/codeman/e5277d18a450c1fe51c6cda9cff6a9e016621.png",
          title: "手动阀手动阀",
        },
        {
          id: 1003,
          imgUrl:
            "//p1.meituan.net/codeman/962b082a549e88f2939dbee2ac3d235613019.png",
          title: "抛吻鮈",
        },
        {
          id: 1004,
          imgUrl:
            "//p0.meituan.net/codeman/12ff749bd7fdf473abd59e2651a9ee1913684.png",
          title: "东与我",
        },
        {
          id: 1005,
          imgUrl:
            "//p0.meituan.net/codeman/0fe84029cc6cf6ccf12838ce6546734a16488.png",
          title: "士大夫",
        },
        {
          id: 1006,
          imgUrl:
            "//p0.meituan.net/codeman/2ae734d26259e6138ea61f2dcdac8fa115018.png",
          title: "小程序",
        },
        {
          id: 1007,
          imgUrl:
            "//p1.meituan.net/codeman/a7c360a9aeca1f972a1819465154c6b414043.png",
          title: "阿斯蒂芬",
        },
        {
          id: 1008,
          imgUrl:
            "//p1.meituan.net/codeman/13a0d1537d45b237a07b665eb5a7845e17141.png",
          title: "铁杆会员",
        },
        {
          id: 1009,
          imgUrl:
            "//p1.meituan.net/codeman/13a0d1537d45b237a07b665eb5a7845e17141.png",
          title: "铁杆会员",
        },
      ],
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