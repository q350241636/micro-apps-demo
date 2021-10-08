import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import reactApp from './pages/react'
import angularApp from './pages/angular'
import htmlApp from './pages/html'

// index.js
import microApp from '@micro-zoe/micro-app'

const routes = [
  {
    // 👇👇 非严格匹配，/my-page/* 都将匹配到 MyPage 组件
    path: '/apps/react', // vue-router@4.x path的写法为：'/my-page/:page*'
    name: 'react-app',
    component: reactApp,
  },
  {
    // 👇👇 非严格匹配，/my-page/* 都将匹配到 MyPage 组件
    path: '/apps/react/*', // vue-router@4.x path的写法为：'/my-page/:page*'
    name: 'react-app',
    component: reactApp,
  },
  {
    // 👇👇 非严格匹配，/my-page/* 都将匹配到 MyPage 组件
    path: '/apps/angular', // vue-router@4.x path的写法为：'/my-page/:page*'
    name: 'angular-app',
    component: angularApp,
  },
  {
    // 👇👇 非严格匹配，/my-page/* 都将匹配到 MyPage 组件
    path: '/apps/html', // vue-router@4.x path的写法为：'/my-page/:page*'
    name: 'html-app',
    component: htmlApp,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes, // (缩写) 相当于 routes: routes
})
Vue.use(VueRouter)
microApp.start()
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
