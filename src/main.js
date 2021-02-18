import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,       //路由就是根据网址的不同，返回不同的内容给用户
  render: h => h(App)
}).$mount('#app')
