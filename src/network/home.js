import {request} from "./request";

export  function getHomeMultidata(){
  return request({
    url:'/home/multidata'
    // 面向home请求数据的主题，返回一个promoise
  })
}

export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })

}
