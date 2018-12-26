<template>
<div class="container">
  <router-link :to="{name : 'Dashboard'}"><button class="btn blue lighten-2 waves-effect waves-light">Go Back</button></router-link>
  <div class="card">
   <div class="card-content">
     <div class="card-title">
       <h3 class ="center-align">Create here</h3>
       <h6 class = "center-align">*=required fields</h6>
     </div>
     <div class="row">
    <form class="col s12" @submit.prevent= "createProfile">
      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" v-model="handle_name">
          <label for="first_name">*Handle Name</label>
          <div v-if="errors"> <span class="helper-text red-text" data-error="wrong">{{$store.state.error.error.handle}}</span></div>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" v-model="company">
          <label for="last_name">Company</label>
          <div v-if="errors"> <span class="helper-text red-text" data-error="wrong">{{$store.state.error.error.company}}</span></div>
        </div>
      </div>
       <div class="row">
         <div class="input-field col s12">
           <input id="status" type="text" v-model="selectedOption">
          <label for="status">*Provide your Professional status</label>
          <div v-if="errors"> <span class="helper-text red-text" data-error="wrong">{{$store.state.error.error.status}}</span></div>
         </div>
      </div>  
       <div class="row">
        <div class="input-field col s6">
          <input id="website" type="text" v-model="website">
          <label for="website">website</label>
        </div>
         <div class="input-field col s6">
          <input id="location" type="text" v-model = "location">
          <label for="location">location</label>
        </div>
       </div> 
        <div class="row">
        <div class="input-field col s6">
          <input id="website" type="text" v-model="skills">
          <label for="website">*skills</label>
          <div v-if="errors"><span class="helper-text red-text" data-error="wrong">{{$store.state.error.error.skills}}</span></div>
        </div>
         <div class="input-field col s6">
          <input id="github" type="text" v-model = "github">
          <label for="github">Github Username</label>
        </div>
       </div>
        <div class="row">
        <div class="input-field col s12">
          <textarea placeholder="a short bio of yourself" type ="text" v-model ="bio" id="bio"/>
        </div>
        </div> 
       <div class="row">
            <button class="btn waves-effect waves-light col s4 blue lighten-2">Add Profile here</button>         
       </div>
    </form>   
  </div>  
  </div>  
</div>  
</div>
</template>








<script>
export default {
  name :  "AddProfile",
  computed : {
     errors(){
       if(this.$store.state.error.error){
         return true
       } else {
         return false
       }
     }
  },
  data(){
    return {
    github  : "",
    handle_name : "",
    bio  : "",
    company : "",
    location : "",
    website :   "",
    skills   :  "",
    options  :  [
      { label: '* Select Professional Status', value: 0 },
      { label: 'Developer', value: 'Developer' },
      { label: 'Junior Developer', value: 'Junior Developer' },
      { label: 'Senior Developer', value: 'Senior Developer' },
      { label: 'Manager', value: 'Manager' },
      { label: 'Student or Learning', value: 'Student or Learning' },
      { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
      { label: 'Intern', value: 'Intern' },
      { label: 'Other', value: 'Other' }
    ],
    selectedOption : ""
    }
  },
  methods : {
      createProfile(){
        const newProfile = {
          githubusername : this.github,
          handle :         this.handle_name,
          bio   :   this.bio,
          company : this.company,
          location : this.location,
          website :  this.website,
          skills :    this.skills,
          status :    this.selectedOption,
        }
        this.$store.dispatch('createProfile',newProfile);
      }
  },
    

}
</script>











<style>
   
</style>