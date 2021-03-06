import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/style/index.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import enLocale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { enLocale })
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
