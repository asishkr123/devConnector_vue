<template>
<div class="container">
  <router-link :to="{name : 'Dashboard'}"><button class="btn blue lighten-2 waves-effect waves-light">Go Back</button></router-link>
  <div class="card">
   <div class="card-content">
     <div class="card-title">
       <h3 class ="center-align">Add your Education credentials here</h3>
       <h6 class = "center-align">*=required fields</h6>
     </div>
     <div class="row">
    <form class="col s12" @submit.prevent="addEducation" >
      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" v-model="school">
          <label for="first_name">*School</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" v-model="degree">
          <label for="last_name">*Degree or bootcamp</label>
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
        <div class="input-field col s6">
          <input id="current_job" type="text" v-model="fieldOfStudy">
          <label for="current_job">*Field of Study</label>
        </div>
         <div class="input-field col s6">
          <input id="program" type="text" v-model = "program">
          <label for="program">the program description you were in</label>
        </div>
       </div> 
       <div class="row">
            <button class="btn waves-effect waves-light col s4 blue lighten-2">Add education here</button>         
       </div>
    </form>   
  </div>  
  </div>  
</div>  
</div>
</template>








<script>
export default {
    name : "AddEducation",
    data(){
        return {
         school : "",
         degree : "",
         program : "",
         to : "",
         from :"",
         fieldOfStudy : ""
        }
    },
    methods : {
       addEducation(){
        const eduData = {
        school : this.school,
        degree     : this.degree,
        program : this.program,
        from :     this.from,
        to    :     this.to,
        fieldofstudy :  this.fieldOfStudy,
          }
        this.$store.dispatch('addEducation',eduData)  
      }
    }
}
</script>






<style scpoed>
   .form{
       display: flex;
       flex-direction: column;
       align-items: center;
   }
   button{
      margin :  30px;
   }
</style>
