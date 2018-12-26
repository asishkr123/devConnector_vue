<template>
<div>
      <h4>Experience Credentials</h4> 
       <table class="striped">
        <thead>
          <tr>
              <th>Company</th>
              <th>title</th>
              <th>Years</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="expData in experience" :key="expData._id">
            <td>{{expData.company}}</td>
            <td>{{expData.title}}</td>
            <td>{{ expData.from | moment('YYYY/MM/DD')}} - {{expData.to === null ? 'Now' : expData.to| moment('YYYY/MM/DD')}} </td>
            <td><button @click="deleteExperience(expData._id)" class="btn grey lighten-4"><i class="material-icons blue-text">delete</i></button></td>
          </tr>
        </tbody>
      </table>            
</div>
</template>







<script>
export default {
    name : "Education",
    props : ['experience'],
    methods : {
      deleteExperience(id){
        this.$store.dispatch('deleteExperience',id)
      }
    }
    
}
</script>







<style>

</style>