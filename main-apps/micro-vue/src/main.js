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
    // ðð éä¸¥æ ¼å¹éï¼/my-page/* é½å°å¹éå° MyPage ç»ä»¶
    path: '/apps/react', // vue-router@4.x pathçåæ³ä¸ºï¼'/my-page/:page*'
    name: 'react-app',
    component: reactApp,
  },
  {
    // ðð éä¸¥æ ¼å¹éï¼/my-page/* é½å°å¹éå° MyPage ç»ä»¶
    path: '/apps/react/*', // vue-router@4.x pathçåæ³ä¸ºï¼'/my-page/:page*'
    name: 'react-app',
    component: reactApp,
  },
  {
    // ðð éä¸¥æ ¼å¹éï¼/my-page/* é½å°å¹éå° MyPage ç»ä»¶
    path: '/apps/angular', // vue-router@4.x pathçåæ³ä¸ºï¼'/my-page/:page*'
    name: 'angular-app',
    component: angularApp,
  },
  {
    // ðð éä¸¥æ ¼å¹éï¼/my-page/* é½å°å¹éå° MyPage ç»ä»¶
    path: '/apps/html', // vue-router@4.x pathçåæ³ä¸ºï¼'/my-page/:page*'
    name: 'html-app',
    component: htmlApp,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes, // (ç¼©å) ç¸å½äº routes: routes
})
Vue.use(VueRouter)
microApp.start()
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
