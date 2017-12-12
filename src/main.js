// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import 'es6-promise'
import Vue from 'vue'
import iView from 'iview'
import Vuelidate from 'vuelidate'
import 'iview/dist/styles/iview.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import store from './store'

Vue.use(ElementUI)
Vue.use(iView);
Vue.use(Vuelidate)

Vue.component('icon', Icon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
