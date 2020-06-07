import Vue from 'vue';
import App from './App.vue';
import {MdButton,MdDrawer,MdCard} from 'vue-material/dist/components';
import VueResource from 'vue-resource';
import VueScrollReveal from 'vue-scroll-reveal';
import 'velocity-animate';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(MdButton);
Vue.use(MdDrawer);
Vue.use(MdCard);
Vue.use(VueResource);

Vue.use(VueScrollReveal,{
  duration:800,
  scale:1,
  distance:'50px'
});

(Vue as any).http.options.root = process.env.VUE_APP_API;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
