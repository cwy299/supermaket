<template>
	<tab-bar>
    <tab-bar-item path="/home" activateColor="green">
      <img slot="item-icon" src="~@/assets/images/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~@/assets/images/tabbar/homeactive.svg" alt="">
      <div slot="item-text">
        首页</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~@/assets/images/tabbar/shop.svg" alt="">
      <img slot="item-icon-active" src="~@/assets/images/tabbar/shopactive.svg" alt="">
      <div slot="item-text">
        购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/Category">
      <img slot="item-icon" src="~@/assets/images/tabbar/cate.svg" alt="">
      <img slot="item-icon-active" src="~@/assets/images/tabbar/cateactive.svg" alt="">
      <div slot="item-text">
        分类</div>
    </tab-bar-item>
    <tab-bar-item path="/Profile">
      <img slot="item-icon" src="~@/assets/images/tabbar/my.svg" alt="">
      <img slot="item-icon-active" src="~@/assets/images/tabbar/myactive.svg" alt="">
      <div slot="item-text">
        我的</div>
    </tab-bar-item>
	</tab-bar>
</template>

<script>
	import TabBar from "@/components/common/tabbar/tabbar.vue"
	import TabBarItem from "@/components/common/tabbar/TabBarItem.vue"
	export default {
		name: 'MainTabBar',
		components: {
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>
