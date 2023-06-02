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
    },
    pullUpLoad:{
      type:Boolean,
      default: false,
    }
  },
  mounted() {
    //创建对象
    this.scroll = new BSsroll(this.$refs.wrapper,{
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    //监听滚动的位置
    if (this.probeType===2 || this.probeType ===3) {
      this.scroll.on('scroll',(position)=>{
        // console.log(position);
        this.$emit('scroll',position)

      })
    }

  //  监听上拉事件
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
      })
    }

  },
  methods:{
    scrollTo(x,y,time=300){
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>
