<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BSsroll from "better-scroll";

export default {
  name: "Scroll",
  data(){
    return {
      scroll:null
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    }
  },
  mounted() {
    //创建对象
    this.scroll = new BSsroll(this.$refs.wrapper,{
      click: true,
      probeType: this.probeType
    })
    //监听滚动的位置
    this.scroll.on('scroll',(position)=>{
      // console.log(position);
      this.$emit('scroll',position)

    })
  },
  methods:{
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time)
    }
  }
}
</script>

<style scoped>

</style>
