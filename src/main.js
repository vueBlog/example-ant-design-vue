import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './config/lazy_use'

import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/github.css'
import 'highlight.js/styles/vs2015.css'
hljs.registerLanguage('javascript', javascript)

Vue.config.productionTip = false
Vue.prototype.$hljs = hljs

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
