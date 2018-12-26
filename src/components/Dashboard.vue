<template>
<div class="container">
  <div v-if ="loading" class="loader preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
        <div class="gap-patch">
    </div>
  </div>
  </div>
  </div> 
  <div v-else>
  <div class="container dashboard">
     <h3 class="align-center ">Dashboard</h3>
     <button @click="showButtons" class="mt button btn waves-effect waves-light white-text">{{createOrAdd}} Profile here</button>
     <div v-if = "show">
     <router-link :to="{name : 'AddProfile'}"><button  class="mt button btn waves-effect waves-light white-text">{{createOrAdd}} bio</button></router-link> 
     <router-link :to="{name : 'AddExperience'}"><button  class="mt button btn waves-effect waves-light white-text">Add Experience</button></router-link> 
     <router-link :to="{name : 'AddEducation'}"><button  class="mt button btn waves-effect waves-light white-text">Add Education</button></router-link> 
     </div>      
     <div v-if = "isProfileNull">
     <h3 class= " mt blue-text lighten-2-text center-align">Welcome {{$store.getters.getUser.name}}</h3>
     <div class = "mt blue-text lighen-2-text  center-align"> You dont Have a profile Yet ....</div>
     </div>
      <div v-else>
      <Education :education = "education"/>
      <Experience :experience = "experience"/>
      </div>
      <button @click="deleteAccount(id)" class="btn waves-effect waves-light lighten-2">Delete My Account</button>
</div>
</div>
</div>      
</template>



<script>
import Education from './education';
import Experience from './Experience';
export default {
   name : "Dashboard",
   components : {
      Education,
      Experience
   },
   methods : {
     showButtons(){
       this.show = true
     },
     deleteAccount(id){
       this.$store.dispatch('deleteAccount',id)
     },
   },
   data(){
     return {
        show : false
     }
   },
    created() {
     this.$store.dispatch('getCurrentProfile')
   },
   computed: {
      isProfileNull(){
        return  this.$store.getters.getProfile === null || Object.keys(this.$store.getters.getProfile).length === 0
      },
      loading(){
        return this.$store.getters.getProfileloading
      },
      createOrAdd(){
         return  this.$store.getters.getProfile === null || Object.keys(this.$store.getters.getProfile).length === 0 ? 'Add' : 'Edit'  
      },
      education(){
        return this.$store.getters.getEducation
      },
      experience(){
        return this.$store.getters.getExperience
      },
      id(){
        return this.$store.getters.getProfileID
      }

   },
}
</script>



<style scoped>
  .loader{
      margin-top: 30px;
      margin-left: 80px;
   }
   .dashboard{
     display : flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
   }
   .mt{
     margin-top : 30px;

   }
   .button{
     margin-left : 35px;
   }
</style>
