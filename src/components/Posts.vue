<template>
   <div class="container">
       <div class="card">
           <div class="card-content">
               <textarea cols="20" rows="20" v-model="post" class="materialize-textarea"></textarea>
               <button @click="addPost" class="btn waves-effect waves-light blue lighten-2 white-text lighten-2-text">Add Post</button>
           </div>
       </div>
       <div class="card">
          <div class="card-content">
            <div class="card-title"><h3 class="center-align blue-text lighten-2-text">All Posts</h3></div>  
           <div class="card" v-for = "post in allPosts" :key="post.id">
               <div class="card-content">
                   <div class="row">
                       <div class="col s3">
                           <img class="circle" v-bind:src="post.avatar" alt="photo"/>
                       </div>
                       <div class="col s7">
                           <h5 class="center-align">{{post.text}}</h5>
                           <div class="post-features">
                           <router-link :to="{name : 'Post' , params : {id : post._id}}"><button class="btn waves-effect waves-light blue lighten-2 white-text">Comments</button></router-link> 
                           </div>
                        </div>
                   </div>
               </div>
            </div>    
        </div> 
       </div>
   </div>

</template>






<script>
export default {
   name : "Posts",
   data(){
      return {
          post : "",
      }
   },
   methods :{
      addPost(){
          const newPost = {
              text : this.post
          }
          this.post = ""
          this.$store.dispatch('createPost',newPost)
      },
   },
   created(){
       this.$store.dispatch("getPosts")
   },
   computed : {
      allPosts(){
         return  this.$store.getters.getPosts;
      },
      errors(){
    return this.$store.getters.errors
      }
   } 
}
</script>








<style scoped>
  .post-features{
      margin-top: 50px;
      display : flex;
      justify-content: space-around;
      align-items: center
  }
</style>
