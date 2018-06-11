import Vue from 'vue'
import VModal from 'vue-js-modal'
Vue.use(VModal)
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
