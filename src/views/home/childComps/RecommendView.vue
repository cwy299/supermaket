<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props:{
    recommends:{
      type:Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    padding:10px 0;
    border-bottom: 5px solid #e9e9e9 ;
  }
  .recommend-item {
    flex:1;
    text-align: center;
  }
  .recommend-item img {
    width:90%
  }
</style>
