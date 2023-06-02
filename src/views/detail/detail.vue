<template>
<div id="detail">
  <detail-nav-bar class="top-nav"></detail-nav-bar>
  <scroll class="content" ref="scroll" :probeType="3"
  @scroll="contentScroll">
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detail-info="detailInfo" @imgLoad="goodsImgLoad"></detail-goods-info>
    <detail-param-info :param-info="paramInfo"></detail-param-info>
    <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
    <goods-list :goods="recommendInfo"></goods-list>
  </scroll>
</div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";
 import detailNavBar from "./childComps/DetailNavBar";
 import detailSwiper from "./childComps/detailswiper";
 import detailBaseInfo from "./childComps/detailBaseInfo";
 import detailShopInfo from "./childComps/detailShopInfo";
 import detailGoodsInfo from "./childComps/DetailGoodsInfo";
 import DetailParamInfo from "./childComps/DetailParamInfo";
 import DetailCommentInfo from "./childComps/DetailCommentInfo";

 import GoodsList from "../../components/content/goods/GoodsList";

 import {getDetail} from "../../network/Detail";
 import {Goods,Shop,Param,getRecommend} from "../../network/Detail";
 import {itemListenerMinxin} from "../../common/mixins";

export default {
  name: "detail",
  components:{
    Scroll,
    detailSwiper,
    detailBaseInfo,
    detailNavBar,
    detailShopInfo,
    detailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,

  },
  data(){
    return{
      iid:null,
      topImages:[],
      Goods:null,
      shop:{},
      detailInfo:{},
      themeTopY: [],
      paramInfo: {},
      commentInfo:[],
      recommendInfo:[]
    }
  },
  mixins:[itemListenerMinxin],
  created() {
    this.iid = this.$rote.params.iid
    const data = res.data.result;
    getDetail(this.iid).then(res => {
      this.topImages = data.itemInfo.topImages
      //获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo)
      //获取店铺对象信息
      this.shop = new Shop(data.shopInfo)
      //4.获取商家详情图片
      this.detailInfo = data.detailInfo
      //5.获取参数信息
      this.paramInfo = new Param(data.itemParams.info, data.itemParams.rule)
      //6.获取评论信息
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list
      }
      //请求推荐数据
      getRecommend().then(res => {
        this.recommendInfo = res.data.data.list
      })
    })
  },
   mounted() {

    },
   methods:{
     goodsImgLoad(){
       this.$refs.scroll.refresh();
       this.themeTopY = [];
       this.themeTopY.push(0);
       this.themeTopY.push(this.$refs.param.$el.offsetTop);
       this.themeTopY.push(this.$refs.comment.$el.offsetTop);
       this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
       this.themeTopY.push(Number.MAX_VALUE);
     }
   }
}
</script>


<style scoped>
.detail {
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 10;
}
.top-nav {
  background-color: #fff;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
