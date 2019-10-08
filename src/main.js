// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 引入 fastclick 解决移动端300毫秒延迟问题
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
// 解决手机白屏问题
import 'babel-polyfill'
// 引入iconfont
import 'styles/iconfont.css'
// 轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

