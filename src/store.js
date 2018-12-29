import Vue from 'vue';
import Vuex from 'vuex';
import {errorModule} from './modules/error';
import {UserModule} from './modules/User';
import {ProfileModule} from './modules/Profile';
import {PostsModule}    from './modules/Posts';
import  {ActivityModule} from './modules/Activity';



Vue.use(Vuex);



export const store = new Vuex.Store({
      modules : {
          user : UserModule,
          error : errorModule,
          profile : ProfileModule,
          posts :  PostsModule,
          activity : ActivityModule
      }
})
