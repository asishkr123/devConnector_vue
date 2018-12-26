<template>

     <div class="container">
      <h3 class="center-align blue-text lighten-3-text">REGISTER HERE</h3>
     <div class="card">
        <div class="row">
       <form @submit.prevent = "registerUser">
       <div class="col s12">
           Enter Name
          <div class="input-field inline">
            <input id="email_inline" v-model="name">
            <div v-if="error">
            <span class="helper-text red-text" data-error="wrong">{{$store.state.error.error.name}}</span>
            </div>
          </div>
        </div>
        <div class="col s12">
           Enter the Email
          <div class="input-field inline">
            <input id="email_inline" v-model = "email">
          <div v-if="error">
           <span class="helper-text red-text" data-error="wrong">{{$store.state.error.error.email}}</span>
          </div>
          </div>
        </div>  
          <div class="col s12">
           Enter Password
          <div class="input-field inline">
            <input id="email_inline" v-model="password">
            <div v-if="error">
            <span class="helper-text red-text" data-error="wrong">{{$store.state.error.error.password}}</span>
            </div>
          </div>
        </div>
        <div class="col s12">
           Confirm Password
          <div class="input-field inline">
            <input id="email_inline" v-model="password2">
            <div v-if="error">
            <span class="helper-text red-text" data-error="wrong">{{$store.state.error.error.password2}}</span>
            </div>
          </div>
        </div>
        <button class="submit btn waves-effect blue white-text lighten-3">Submit</button>
      </form>  
  </div>  
  </div>  
  </div> 
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email : "",
      password : "",
      password2 : "",
      name :     ""     
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
    registerUser(){
      const newUser = {
        email : this.email,
        password : this.password,
        password2 : this.password2,
        name : this.name,
      }
      console.log(newUser)
      this.$store.dispatch('registerUser',newUser);
    }
  },
  computed: {
    error(){
      if(this.$store.state.error.error){
        return true
      }
      return false
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
   .container-center{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
   }
   .submit {
     margin-left: 30px;
     margin-bottom: 30px;
   }
   </style>
