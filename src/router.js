import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue';
import Login from  './views/Login';
import Register from  './views/Register';
import AddEducation from  './views/AddEducation';
import AddExperience from  './views/AddExperience';
import AddProfile from  './views/AddProfile';
import Profiles   from './components/Profiles';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

import {store} from './store';

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path : "/register",
      name : "Register",
      component : Register
    },
    {
      path: '/Login',
      name: 'Login',
      component : Login
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path : "/dashboard",
      name : "Dashboard",
      component : Dashboard,
      secure : true
    },
    {
      path : "/add-education",
      name : "AddEducation",
      secure : true,
      component : AddEducation
    },
    {
      path : '/add-experience',
      name :  "AddExperience",
      secure : true,
      component : AddExperience
    },
    {
      path : "/add-profile",
      name :  "AddProfile",
      secure : true,
      component : AddProfile
    },
    {
      path :   "/profiles",
      name :  "Profiles",
      component : Profiles
    },
    {
      path :   "/profile/:handle",
      name :  "Profile",
      component : Profile
    }
    
  ]
})



router.beforeEach((to,from,next) => {
  router.options.routes.forEach((route) => {
    // If this is the current route and it's secure
    if (to.matched[0].path === route.path && route.secure) {
      // Verify that the user isn't logged in
    store.dispatch('getCurrentUser');
    if(!store.getters.isUserAuthenticated){
       next('/') 
      }            
    }
  });
  // Proceed as normal
  next();

})





export default router



