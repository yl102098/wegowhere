import Vue from 'vue'
import Home from './pages/Home/Home.vue'
import router from './router'
import fastclick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'


Vue.config.productionTip = false
fastclick.attach(document.body)

new Vue({
  router,       //路由就是根据网址的不同，返回不同的内容给用户
  render: h => h(Home)
}).$mount('#app')
