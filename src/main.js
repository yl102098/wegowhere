import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import less from 'less'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

Vue.use(less)
Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  router,       //路由就是根据网址的不同，返回不同的内容给用户
  render: h => h(App)
}).$mount('#app')
