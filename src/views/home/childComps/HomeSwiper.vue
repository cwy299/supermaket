<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>

</template>

<script>
  import Swiper from "../../../components/common/swiper/Swiper"
  import SwiperItem  from "../../../components/common/swiper/SwiperItem"
export default {
  name: "HomeSwiper",
  data(){
    return {
      isLoad:false
    }
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }

    }

  },
  components:{
    Swiper,SwiperItem
  },methods:{
    imgLoad(){
      if (!this.isLoad){
        //图片没加载
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }

    }
  }
}
</script>

<style scoped>

</style>
