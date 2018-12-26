<template>
  <div>
    <div class="container">
      <h3 class="blue-text center-align lighten-3">Login Here</h3>
      <div class="card">
        <form @submit.prevent="loginUser">
        <div class="row">
        <div class="col s12">
          Enter your email here
          <div class="input-field inline">
            <input id="email_inline" v-model = "email">
            <div v-if="error">
            <span class="helper-text red-text" data-error="wrong">{{$store.state.error.error.email}}</span>
            </div>
          </div>
        </div>
        </div>
        <div class="row">
        <div class="col s12">
          Enter your password here
          <div class="input-field inline">
            <input id="email_inline" v-model = "password">
            <div v-if="error">
            <span class="helper-text red-text" data-error="wrong">{{$store.state.error.error.password}}</span>
            </div>
          </div>
        </div>
        </div>
        <button class="login-button waves-effect waves-light btn blue lighten-2 white-text">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name : "Login",
  data(){
    return {
      email : "",
      password : ""
    }
  },
  created(){
    this.$store.dispatch('getCurrentUser');
    console.log(this.$store.getters.isUserAuthenticated)
    if(this.$store.getters.isUserAuthenticated){
      this.$router.push('/dashboard')
    }
  },
  methods : {
     loginUser(){
       const user = {
         email : this.email,
         password : this.password
       }
       console.log(user)
       this.$store.dispatch('loginUser',user)
     },
  },
  computed: {
    error(){
      if(this.$store.state.error.error){
        return true
      }
      return false
    }
  }
}
</script>



<style>
  .login-button{
    margin-left : 30px;
    margin-bottom :  30px;
  }
</style>

