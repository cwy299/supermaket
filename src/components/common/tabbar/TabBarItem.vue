<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name='item-icon'></slot></div>
      <div v-else><slot name='item-icon-active'></slot></div>
<!--      <div :class="{active:isActive}"> <slot name='item-text'></slot></div>-->
      <div :style="activeStyle"> <slot name='item-text'></slot></div>


    </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{  //组建父传子
    path:String,
    activateColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return {
      // isActive:true
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !==-1
    },
    activeStyle(){
      return this.isActive? {color:this.activateColor} :{}
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>

.tab-bar-item{
  flex: 1;
  text-align: center;
  line-height: 30px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  display: block;
  margin: auto;
  vertical-align:middle;
  border: 0;
}
.active{
  color:red;
}
</style>
