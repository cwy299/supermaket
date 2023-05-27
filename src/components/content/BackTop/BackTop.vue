<template>
<div class="back-top">
  <img src="~@/assets/images/back-top.png" alt="">
</div>
</template>

<script>
import Scroll from "../../common/scroll/Scroll";

export default {
  name: "BackTop",

  methods:{

  }
}
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 10px;
  bottom: 50px;
}
.back-top img {
  width: 30px;
  height: 30px;
}
</style>
