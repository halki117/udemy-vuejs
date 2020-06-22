import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'
import test from './components/test.vue'

Vue.config.productionTip = false;
Vue.component("LikeNumber", LikeNumber);
Vue.component("test", test)
Vue.directive("border", {
  bind() {},
  inserted() {},
  update() {},
  componentUpdate() {},
  unbind() {},
});


new Vue({
  render: h => h(App),
}).$mount('#app')
