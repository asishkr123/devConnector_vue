<template>
     <div class="container">
    <h3 class="blue-text lighten-2-text center-align">{{getuserName}}'s Activity Log</h3> 
      <div class="card green-text lighten-3-text center-align" v-for="activity in getActivityLog" :key="activity._id">
         <div class="card-content">
             <div class="row">
              <div class="col s4">   
             <img v-bind:src="getUserAvatar" alt="photo" class="circle">
              </div>
             <p class="col s8 center-align">{{activity.text}} {{activity.date | moment('calendar')}}</p>                
             </div>
         </div>
     </div>
     </div>
</template>






<script>
export default {
    name  : "Activity",
    created(){
        this.$store.dispatch('getActivity',this.$route.params.id)
    },
    computed : {
        getActivityLog(){
            console.log(this.$store.getters.getActivityLog)
            return this.$store.getters.getActivityLog
        },
        getuserName(){
            return this.$store.getters.getUserName;
        },
        getUserAvatar(){
            return this.$store.getters.getUserAvatar
        }
    },
}
</script>





<style scoped>
   img{
       height : 75px;
       width :  75px
   }
</style>


