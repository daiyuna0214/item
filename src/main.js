import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.less'// 引入初始化样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'// 引入样式
Vue.use(ElementUI)// 注册

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
