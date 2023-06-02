<template>
  <div  class="goods-list-item" @click="itemLink">
    <img :src="goodsItem.show.img"  @load="itemImgLoad" alt="" key="">
    <div>
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props:{
    goodsItem:{
      type:Object,
      default(){
        return []
      }
    }
  },
  methods:{
    itemImgLoad(){
      this.$bus.$emit('itemImgLoad');
    //  事件总线 发射事件  在home监听
    },
    itemLink() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    //  push可以返回
    }
  }
}
</script>

<style scoped>

</style>
