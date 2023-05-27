import Vue from 'vue'
import Router from 'vue-router'

const Cart = () => import('../views/cart/Cart')
const Home = () => import('../views/home/Home')
const Category = () =>import('../views/categroy/Categroy')
const Profile = () => import('../views/profile/Profile')

Vue.use(Router)

const  routes =[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/Profile',
    component:Profile
  }

]
export default new Router({
  routes,
  mode:'history'
})
