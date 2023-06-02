<template>
<div class="detail-swiper">
  <swiper class="swiper">
    <swiper-item class="item" v-for="item in topImages">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</div>
</template>

<script>
 import swiper from "../../../components/common/swiper/Swiper";
 import swiperItem from "../../../components/common/swiper/SwiperItem";
export default {
  name: "detailSwiper",
  components: {},

  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }

    },
    components:{
      swiper,
      swiperItem
    }
  }
}
</script>

<style scoped>
.swiper{
  height: 300px;
  overflow: hidden;
}
</style>
