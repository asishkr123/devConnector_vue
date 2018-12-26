<template>
    <div class="container">
        <h3 class="center-align">Developers Profiles</h3>
        <div class="card" v-for="profile in getAllProfiles" :key="profile._id">
            <div class="card-content">
               <div class="row">
                   <div class="col s2">
                     <img class="circle " v-bind:src= "profile.user.avatar" alt="photo"/>
                   </div>
                   <div class="col s5 content">
                        <h3>{{profile.user.name.toUpperCase()}}</h3>
                        <p>{{profile.status}}</p>
                        <p>{{profile.location ? " " : profile.location}}</p>
                        <!-- <button><router-link :to="{name : 'Profile' , params : {handle : profile.handle}}">view Profile</router-link></button> -->
                       <router-link :to="{name : 'Profile' , params : {handle : profile.handle}}"> <button class="btn waves-effect white-text blue waves-light  lighten-2">View Profile</button></router-link>
                   </div>
                   <div class="col s4">
                        <ul class="collection with-header">
                         <li class="collection-header"><h4>Skills</h4></li>
                        <li class="collection-item" v-for=" (skill,index) in  profile.skills.slice(0,4)" :key="index"><i class="material-icons">done</i>{{skill}}</li>
                         </ul>
 
                   </div>
               </div>
            </div>
        </div>

    </div>   
</template>








<script>
export default {
    name : "Profiles",
    data(){
        return {

        }
    },
    created(){
       this.$store.dispatch('getProfiles');
    },
    methods : {

    },
    computed : {
        getAllProfiles(){
            return this.$store.getters.getAllProfiles
        },
        
    }

}
</script>








<style scoped>
  img{
      height : 100px;
      width   : 100px;
      margin-right: 25px;
  }
  .content{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
  }
  .content h3{
      margin-bottom: 25px;
  }
  .content p{
      margin-bottom: 28px;
      font-size: 2rem; 
  }
  .content button{
     margin-left : -3px;
  }
</style>
