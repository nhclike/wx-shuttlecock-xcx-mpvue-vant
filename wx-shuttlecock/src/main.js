import Vue from 'vue'
import App from './App'
import store from './store/index'
import flyioPlugin from './utils/apiUtil.js'

Vue.use(flyioPlugin); //使用组件库

Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue(App);
Vue.prototype.$store = store;
app.$mount();