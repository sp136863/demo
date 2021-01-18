import Vue from 'vue'
import router from 'vue-router'
Vue.use(router)


import home from '../views/home'
import category from '../views/category'
import cart from '../views/cart'
import me from '../views/me'
import detail from '../views/detail'
import landing from '../views/home/children/landing.vue'
export default new router({
  mode:'history',
  routes:[{
    path:'/',
    name:'',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'',
    component:home
  },
  {
    path:'/category',
    name:'',
    component:category
  },
  {
    path:'/cart',
    name:'',
    component:cart
  },
  {
    path:'/me',
    name:'',
    component:me
  },
  {
    path:'/detail/:id',
    name:'',
    component:detail
  },
  {
    path:'/landing',
    name:'',
    component:landing
  }
]
})