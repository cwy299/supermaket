<template>
<div class="home">
  <nav-bar class="home-nav">
    <div slot="center">购物街</div> </nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
     <home-swiper :banners="banners"></home-swiper>
     <recommend-view :recommends="recommends"></recommend-view>
     <feature-view></feature-view>
     <tab-control class="tab-control"
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

    }
  },
  created() {
    //获得请求的数据
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('news')
    this.getHomeGoods('sell')

  },

  methods:{

    /*
    * 事件监听相关的方法
    * */
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
    backClick(){
      this.$refs.scroll.scrollTo(0,0);
    },
    contentScroll(position){
      // console.log(position);
      this.ishowBackTop = (-position.y) >1000

    },


    // 	//返回顶部
    // 	// this.$refs.scroll.scroll.scrollTo(0,0,500);
    //
    // },


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
      getHomeGoods('pop',page).then(res =>{
        // console.log(res);
        // 将数组直接赋值到另一个数组 1遍历法 for（let n in nums） newnums.push(n) 2、newnums.push(...nums)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
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



</style>
