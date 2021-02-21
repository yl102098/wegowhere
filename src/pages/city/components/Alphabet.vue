<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handdleTouchStart"
      @touchmove="handdleTouchMove"
      @touchend="handdleTouchEnd"
      @click="handdleLetterClick"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object,
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null,
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    },
  },
  methods: {
    handdleLetterClick(e) {
      console.log("e.target.innerText", e.target.innerText);
      this.$emit("change", e.target.innerText);
    },
    handdleTouchStart() {
      this.touchStatus = true;
    },
    handdleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 52;
          const index = Math.floor((touchY - this.startY - 22) / 22);
          console.log("index", index);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
    handdleTouchEnd() {
      this.touchStatus = false;
    },
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