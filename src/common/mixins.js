export const itemListenerMinxin ={
  mouted(){
//请求数据列表后刷新
    this.itemImgLister = ()=> {
      this.$refs.scroll.refresh();
    }
    this.$bus.$on('itemImgLoad',this.itemImgLister);
  }
}
