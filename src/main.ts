import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'
import 'virtual:windi.css'

Vue.use(VueRouter)

const router = new VueRouter({ routes })

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
