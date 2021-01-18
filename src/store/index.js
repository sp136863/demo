import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const obj=new Vuex.Store({
  state:{
    cartList:[],
    usersList:[]
  },
  actions:{
    addCart(context,payload){
      const product=context.state.cartList.find(item=>item.id===payload.id)
      if(product){
        // product.count++
        // console.log(1);
        context.commit('pay1',product)
      }else{
        // payload.count=1
        // context.state.cartList.push(payload)
        // console.log(2);
        context.commit('pay2',payload)
      }
    },
    addUsers(context,payload){
      const users=context.state.usersList.find(item=>{
        item.userName===payload.userName
      })
      if(users){
      }else{
        context.state.usersList.push(payload)
      }
    }
  },
  mutations:{
   pay1(state,payload){
     payload.count++
    //  console.log(3);
   },
   pay2(state,payload){
     payload.count=1
     payload.checked=true
     state.cartList.push(payload)
   }
  },
  getters:{

  },
  modules:{

  }
})
export default obj