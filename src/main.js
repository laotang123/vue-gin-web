import Vue from 'vue'
import App from './App.vue'
import router from '@/router';
// import ElementUI from 'element-ui';

//按需引入 element-ui
import {Row,Button} from "element-ui";

Vue.config.productionTip = false

// Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.use(Row)
Vue.use(Button)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
