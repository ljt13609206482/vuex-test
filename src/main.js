// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    products: [
      {name: '糖醋里脊', price: 20},
      {name: '水煮肉片', price: 40},
      {name: '大盘鸡', price: 60},
      {name: '干锅牛蛙', price: 80}
    ]
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
