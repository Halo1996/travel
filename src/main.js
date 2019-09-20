// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 根据设备宽度，设置 rem
import './libs/responsive'
// 引入 fastclick 解决移动端300毫秒延迟问题
import fastClick from 'fastclick'
// 引入 normalize.css 尽可能抹平浏览器默认样式的差异
import '@/assets/normalize.css'
// 公共样式
import '@/assets/common.css'
// 引入iconfont
import '@/assets/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

