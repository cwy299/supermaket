<template>
<div class="home">
  <nav-bar class="home-nav">
    <div slot="center">购物街</div> </nav-bar>
    <scroll class="content" ref="scroll"
            :probe-type="3" @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
     <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
     <recommend-view :recommends="recommends"></recommend-view>
     <feature-view></feature-view>
     <tab-control class="tab-control" ref="tabcontrol"
                  :class="{fixed:isTabfix}"
                  :titles="['流行','新款','精品']" @tabClick="tabClick"></tab-control>
     <GoodsList :goods="goods[currentType].list"></GoodsList>
   <ul>

     <li>aa13</li>
     <li>aa14</li>
     <li>aa15</li>
     <li>aa16</li>
     <li>aa17</li>
     <li>aa18</li>
     <li>aa19</li>
     <li>aa20</li>
     <li>aa21</li>
     <li>aa22</li>
     <li>aa23</li>
     <li>aa24</li>
     <li>aa25</li>
     <li>aa26</li>
     <li>aa27</li>
     <li>aa28</li>
     <li>aa29</li>
     <li>aa30</li>
     <li>aa13</li>
     <li>aa14</li>
     <li>aa15</li>
     <li>aa16</li>
     <li>aa17</li>
     <li>aa18</li>
     <li>aa19</li>
     <li>aa20</li>
     <li>aa21</li>
     <li>aa22</li>
     <li>aa23</li>
     <li>aa24</li>
     <li>aa25</li>
     <li>aa26</li>
     <li>aa27</li>
     <li>aa28</li>
     <li>aa29</li>
     <li>aa30</li>
     <li>aa13</li>
     <li>aa14</li>
     <li>aa15</li>
     <li>aa16</li>
     <li>aa17</li>
     <li>aa18</li>
     <li>aa19</li>
     <li>aa20</li>
     <li>aa21</li>
     <li>aa22</li>
     <li>aa23</li>
     <li>aa24</li>
     <li>aa25</li>
     <li>aa26</li>
     <li>aa27</li>
     <li>aa28</li>
     <li>aa29</li>
     <li>aa30</li>
   </ul>
    </scroll>
  <back-top @click.native="backClick" v-show="ishowBackTop"/>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import TabControl from "../../components/content/TabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/content/BackTop/BackTop";

  import HomeSwiper from "./childComps/HomeSwiper";
  import FeatureView from "./childComps/FeatureView";
  import RecommendView from "./childComps/RecommendView";

  import {getHomeMultidata,getHomeGoods} from "../../network/home"
  import BSsroll from 'better-scroll'
  import {debounce} from "../../common/until";

  export default {
  name: "Home",
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'news':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      ishowBackTop:false,
      tabOffsetTop:0,
      isTabfix:false,
      saveY:0,
      itemImgLister: null

    }
  },
  created() {
    //获得请求的数据
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('news')
    this.getHomeGoods('sell')

  },
    activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    },
    deactivated() {
    this.saveY = this.$refs.scroll.scroll.y
      //取消全局的事件监听
      this.$bus.$off('itemImgLoad',this.itemImgList)
    },
    mounted() {
    //获取tabControl的offsettop
    //图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh(),50)
    this.$bus.$on('itemImgLoad',()=>{
      // console.log('----事件总线');
      this.$refs.scroll.refresh()
    })
  },

  methods:{
    /*
    * 事件监听相关的方法
    * */
    swiperImageLoad(){
      //所有组件都有一个属性$el.用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabcontrol.$el.offsetTop;
    },
    tabClick(index){
      // console.log(index);
      switch (index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    //防抖函数，单位时间内还有请求的话，就不会执行定会器里的函数
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0);
    },
    contentScroll(position){
      // console.log(position);
       this.ishowBackTop = (-position.y) >500
      // 强制转换
      //决定tabControl是否吸顶
      this.isTabfix = (-position.y) > this.tabOffsetTop
    },
    loadMore(){
      // console.log('上拉加载更多');
      this.getHomeGoods(this.currentType)
    },

    /*
    * 网络请求相关的方法
    * */
    //封装请求成为一个方法，在created中以函数的方式调用

    getHomeMultidata(){
      getHomeMultidata().then(res =>{
        console.log(res);
        // this.result = res;    // 用一个变量指向数据
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1 //不写死page
      getHomeGoods(type,page).then(res =>{
        // console.log(res);
        // 将数组直接赋值到另一个数组 1遍历法 for（let n in nums） newnums.push(n) 2、newnums.push(...nums)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()
      })

  },
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList,
    Scroll,
    BackTop


  }

}
</script>

<style scoped>
.home{
  position: relative;
  padding-top: 44px;
}

.home-nav {
  background-color: deeppink;
  color: #fff;
  position: fixed;
  right: 0;
  left: 0;
  top:0;
  z-index: 9;}

.tab-control{
  position: sticky;
  top:44px
}
.content {
  height: calc(100vh - 98px);
  overflow: hidden;

}
.fixed{
  position: fixed;
  left: 0;
  right: 0;
  top:44px;
}



</style>
