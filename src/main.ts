import Vue from 'vue';
import App from './App.vue';
import {MdButton,MdDrawer,MdContent,MdTabs} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(MdButton);
Vue.use(MdDrawer);
Vue.use(MdContent);
Vue.use(MdTabs);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
