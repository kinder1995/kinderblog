// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import MyFooter from './components/footer.vue';
import MyHeader from './components/header.vue';
import MyAside from './components/aside.vue';
import router from './router';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

Vue.use(Element);

// 注册组件
Vue.component('my-footer',MyFooter);
Vue.component('my-header',MyHeader);
Vue.component('my-aside',MyAside);

Vue.config.productionTip = false

// 垮组件事件
Vue.prototype.eventBus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
