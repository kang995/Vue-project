import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import home from "./home"
import mine from "./mine"
import group from "./group"
import shoppingList from "./shoppingList"
import shoppingCar from "./shoppingCar"
import shoppingDetail from "./shoppingDetail"
export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
    home,mine,group,shoppingList,shoppingCar,shoppingDetail,
     {path:"/notfound",component:()=>import("@/views/Notfound/Notfound")},
     {path:"*",redirect:"/notfound"}//*匹配所有路由

    // {path:"/broadcast",component:()=>("@/views/Broadcast/Broadcast")},
    // {path:"/broadcast",component:()=>("@/views/Group/Group")},
    // {path:"/broadcast",component:()=>("@/views/Mine/Mine")}
  ]
})
