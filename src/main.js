import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './LikeNumber.vue'
import test from './test.vue'

Vue.config.productionTip = false
Vue.component("LikeNumber", LikeNumber)
Vue.component("test", test)


new Vue({
  render: h => h(App),
}).$mount('#app')
