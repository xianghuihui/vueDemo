// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//ElementUI
import Element from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import './style/theme.css'
import 'font-awesome/css/font-awesome.min.css'
import echarts from 'echarts'

Vue.config.productionTip = false

Vue.use(Element)
Vue.prototype.$echarts = echarts
Vue.prototype.axios = axios;
axios.defaults.timeout = 500000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = "/api";

//注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  if (to.path === '/login'||to.path === '/register') {
    next();
  } else {
    let token = sessionStorage.getItem('token');
    if (token === null || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
