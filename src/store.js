import Vue from 'vue';
import Vuex from 'vuex';
import {errorModule} from './modules/error';
import {UserModule} from './modules/User';
import {ProfileModule} from './modules/Profile';




Vue.use(Vuex);



export const store = new Vuex.Store({
      modules : {
          user : UserModule,
          error : errorModule,
          profile : ProfileModule
      }
})
