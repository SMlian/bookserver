import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';// 引用antd
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false;
// 将antd 挂载到vue实例上
Vue.use(Antd);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
