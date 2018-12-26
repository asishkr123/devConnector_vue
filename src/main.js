import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store';
import setAuthToken from './utils/setAuthToken';
import Vuemoment from 'vue-moment';


Vue.use(Vuemoment);


if(localStorage.jwttoken){
  setAuthToken(localStorage.jwttoken);
  store.dispatch('getCurrentUser');

}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
