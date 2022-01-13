import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts


Vue.use(BootstrapVue)

Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')