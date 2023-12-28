// main.js
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import { createStore } from './store';
Vue.use(Vuex);

const store = createStore(); 
new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
