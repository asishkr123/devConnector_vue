<template>
<div>
    <router-link :to="{name : 'Profiles'}"><button class="btn white-text blue waves-effect waves-light lighten-2">Go back</button></router-link>
    <div v-if="profileLoading" class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
      </div>
    </div>
  </div>
  <div v-else class="container">
     <div class="row">
       <div class="card blue lighten-4 white-text col s12">
      <div class="card-content content">
         <img class="circle" v-bind:src="getProfile.user.avatar" alt="photo"/>
         <h3 class= "center-align">{{getProfile.user.name.toUpperCase()}}</h3>
         <h5 class="center-align">{{getProfile.status}} at {{getProfile.company}}</h5>
      </div>
      </div>
     </div>
     <div class="row">
        <div class="card grey lighten-3 white-text col s12">
        <div class="card-content content">
          <h5 class="center-align blue-text lighten-2-text">{{getProfile.user.name}}'s  Bio</h5>
          <p class="black-text">{{getProfile.bio}}</p>
          <hr>
          <h5 class="center-align blue-text lighten-2-text">Skill Set</h5>
          <div class="skill black-text lighten-2-text" v-for="(skill,index) in getProfile.skills" :key="index" ><i class="material-icons green-text lighten-2-text">done</i>{{skill}}</div>
        </div>
        </div>
     </div>
     
  </div>
</div>
</template>






<script>
export default {
  name : "Profile",
  created(){
    this.$store.dispatch('getProfileByHandle',this.$route.params.handle)
  },
  computed : {
    profileLoading(){
     return   this.$store.getters.getProfileloading
    },
    getProfile(){
      return this.$store.getters.getProfile
    }
  }

}
</script>







<style scoped>
  .card .content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .skill{
    display: inline-block;
  }
</style>
