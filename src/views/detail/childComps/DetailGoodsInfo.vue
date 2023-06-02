<template>
  <div v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-text-wrap">
      <div class="text-top-style"></div>
      <div class="desc info-text-desc">{{detailInfo.desc}}</div>
      <div class="text-bot-style"></div>
    </div>
    <div class="img-list-wrap" v-for="item in detailInfo.detailImage">
      <div class="desc">{{item.key}}</div>
      <div v-for="(item, index) in item.list" :key="index">
        <img :src="item" alt="" class="img" @load="imgLoad">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      },
    }
  },
  data(){
    return {
      counter:0,
      imageLength:0
    }
  },
  methods: {
    imgLoad(){
      //所有图片加载完，最后进行一次回调
      if(++this.counter === this.imageLength){
        this.$emit('imgLoad')
      }

    }
  },
  watch:{
    //监听属性变化
    detailInfo(){
      this.imageLength = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>

<style scoped>

</style>
