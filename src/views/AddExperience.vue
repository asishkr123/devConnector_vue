<template>
<div class="container">
  <router-link :to="{name : 'Dashboard'}"><button class="btn blue lighten-2 waves-effect waves-light">Go Back</button></router-link>
  <div class="card">
   <div class="card-content">
     <div class="card-title">
       <h3 class ="center-align">Add your Experiences </h3>
       <h6 class = "center-align">*=required fields</h6>
     </div>
     <div class="row">
    <form class="col s12" @submit.prevent = "addExperience">
      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" v-model="company">
          <label for="first_name">*Company</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" v-model="job">
          <label for="last_name">*Job title</label>
        </div>
      </div>
       <div class="row">
        <div class="input-field col s12">
          <input id="first_name" type="text" v-model="location">
          <label for="first_name">*location</label>
        </div>
       </div> 
      <div class="row">
        <!-- <label for="from">from</label> -->
        <div class="input-field col s6">
          <input type="date" name = "from" v-model="from"> 
        </div>
        <!-- <label for="to">to</label> -->
        <div class="input-field col s6">
        <input type="date" name ="to" v-model="to"> 
        </div>
      </div>
       <div class="row">
         <div class="input-field col s12">
          <input id="program" type="text" v-model = "program">
          <label for="program">the program description you were in</label>
        </div>
       </div> 
      <div class="row">
       <button class="btn waves-effect waves-light col s4 blue lighten-2">Add experience here</button>   
       </div> 
    </form>   
  </div>  
  </div>  
</div>  
</div>
</template>





<script>
export default {
    name : "AddExperience",
    data(){
        return {
          company : "",
          job : "",
          location : "",
          from : "",
          to :  "",
          program : ""
        }
    },
    methods : {
      addExperience(){
        const expData = {
        company : this.company,
        title    : this.job,
        location : this.location,
        from :     this.from,
        to    :     this.to,
        program :  this.program,
          }
        this.$store.dispatch('addExperience',expData)  
      }
    }
}
</script>



<style scoped>
      
</style>

