import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex);

// 2.创建Store对象
const Store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations:{
    addToCart(state, payload){
      // // payload新添加的商品
      // let oldProduct = null;
      // for(let item of state.cartList){
      //   if(item.iid === payload.iid){
      //     oldProduct = item
      //   }
      // }

      // // 2.判断oldProduct
      // if(oldProduct){
      //   oldProduct.count +=1 // 判断再次添加购物车时遍历cartList数组如存在iid相等，把item对像赋值给oldProduct判断表示已存在，再利用{}对象引用同一个地址的特性，改了oldProduct.count+=1 -> 就相当于改了引用的payload.count
      // }else{
      //   payload.count = 1 // 判断如果没有遍历到相同id的商品,初始count计数为1，并把商品添加至数组。
      //   state.cartList.push(payload)
      // }


      
      // 1.查找之前数组中是否有该商品
      let oldProduct = state.cartList.find(item => item.iid === payload.iid)
      // 2.判断oldProduct
      if(oldProduct){
        oldProduct.count +=1 // 利用{}对象引用同一个地址的特性，改了oldProduct.count+=1 -> 就相当于改了引用的payload.count
      }else{
        payload.count = 1 
        state.cartList.push(payload)
      }
      
    }
  }
})

// 3.挂载Vue实例上
export default Store