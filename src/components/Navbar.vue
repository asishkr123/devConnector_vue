<template>
     <nav>
    <div class="nav-wrapper blue lighten-3">
      <div class="brand-logo">DevConnector</div>
        <router-link :to="{name : 'Profiles'}"><a class="developers">Developers</a></router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <div v-if="!isUserAuthenticated">
        <li><router-link :to="{name : 'Register'}">Register</router-link></li>
        <li><router-link :to="{name : 'Login'}">Login</router-link></li>
        </div>
        <div v-else>
          <li><router-link :to="{name : 'Activity' , params : {id : getUser.id}}">Activity</router-link></li>        
          <li><router-link :to="{name : 'Posts'}">Posts feed</router-link></li>        
          <li><router-link :to="{name : 'Dashboard'}">Dashboard</router-link></li>
          <li @click="logOutUser"><a href = " ">Logout</a></li>
        </div>
      </ul>
    </div>
  </nav>
</template>






<script>
export default {
     name  : "Navbar",
     data(){
       return {
          guestLinks : true
       }
     },
     methods : {
        logOutUser(){
          this.$store.dispatch('logoutUser')
        }
     },
  //     created(){
  //     this.$store.dispatch('getCurrentUser');
  //    // console.log(this.$store.getters.isUserAuthenticated)
  //     if(this.$store.getters.isUserAuthenticated){
  //       this.guestLinks = false;
  //   }
  // },
  computed : {
    isUserAuthenticated(){
      return  this.$store.getters.isUserAuthenticated
    },
    getUser(){
      return this.$store.getters.getUser
    }
  } 
}
</script>




<style>
   .brand-logo{
       margin-left : 25px;
   }
   .right{
       margin-right :  50px;
   }
   .developers{
     margin-left : 250px;
     text-align: center;
   }
</style>
