import Vue from 'vue';
import App from './App.vue';
/* import data from './constants';
import myFunc from './utils';

myFunc(data.firstMessage);
myFunc(data.secondMessage); */
/* alert('Привет Vue'); */

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
