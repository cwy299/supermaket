<template>
  <div class="detailnavbar">
    <nav-bar>
      <div slot="left" @click="backClick">
        <img src="./src/assets/images/detail/check_active.png" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles"
             class="title-item"
             :class="{activate: index === currentIndex}" @click="titleClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components:{
    NavBar
  },
  data(){
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods:{
    titleClick(index){
      this.currentIndex = index
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
 .title {
   display: flex;
 }
 .title-item{
   flex: 1;
 }
 .activate{
   color: #ff8198;
 }
</style>
