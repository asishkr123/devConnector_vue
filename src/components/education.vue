<template>
<div>
      <h4>Education Credentials</h4> 
       <table class="striped centered">
        <thead>
          <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Years</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="eduData in education" :key="eduData._id">
            <td>{{eduData.school}}</td>
            <td>{{eduData.degree}}</td>
            <td>{{ eduData.from | moment('YYYY/MM/DD')}} - {{eduData.to === null ? 'Now' : eduData.to| moment('YYYY/MM/DD')}} </td>
            <td><button @click="deleteEducation(eduData._id)" class= " btn grey lighten-4"><i class="material-icons blue-text">delete</i></button></td>
          </tr>
        </tbody>
      </table>            
</div>
</template>







<script>
export default {
    name : "Education",
    props : ['education'],
    methods : {
      deleteEducation(id){
        this.$store.dispatch('deleteEducation',id)
      }
    }
}
</script>







<style scoped>
   button{
     margin : 0;
     padding : 0;
   }
</style>
