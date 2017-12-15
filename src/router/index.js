import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import App from '@/components/App'
import index from '@/views/index'
import Vueindex from '@/views/vue/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [
        {
          path: '/',
          name: 'Vueindex',
          component: Vueindex
        }, {
          path: '/vue-index',
          name: 'Vueindex',
          component: Vueindex
        }, {
          path: '/vuex-demo',
          name: 'App',
          component: App
        }
      ]
    },
  ]
})
