<template>
  <div class="goods">
<!--<h2>goodlist</h2>-->
    <goods-list-item v-for="item in goods" :key="none"/>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  }
}
</script>

<style scoped>

</style>
