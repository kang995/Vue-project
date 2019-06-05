import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;
//引入main.scss文件  all in js理念
import "./stylesheets/main.scss"
//引入rem.js
import "./modules/rem"
//引入swiper的css样式
import "../node_modules/swiper/dist/css/swiper.min.css"
//引入全局指令
import "./modules/directive"
//引入axios
import axios from "axios"
Vue.prototype.$http = axios //vue组件中可以通过 this.$http获取到axios
//全局引入mint-ui
// import Mint from'mint-ui'
// Vue.use(Mint);
// import'mint-ui/lib/style.css'
//引入mint-ui相应的组件
import{
  Cell, 
  Button,
}from 'mint-ui';
Vue.component("mt-cell", Cell);
Vue.component("mt-button",Button);
new Vue({
  router,  //this.$route  this.$router路由的api方法
  store,   //this.$store 
  render: h => h(App)
}).$mount('#app')
