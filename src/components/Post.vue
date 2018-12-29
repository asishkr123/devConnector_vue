<template>
    <div class="container">
        <router-link :to = "{name : 'Posts'}"><button class="btn waves-effect waves-light lighten-2 blue">Go Back</button></router-link>
        <div class="card">
            <div class="card-content">
                <div class="row">
                 <img v-bind:src="getPost.avatar" class="col circle s2" alt="photo"/>
                <h5 class="col s10 black-text lighten-2-text center-align">{{getPost.text}}</h5>
                <div class="col s6">
                  <button @click="likePost($route.params.id)" class="btn waves-effect waves-light grey lighten-3 black-text "><i class="material-icons">thumb_up</i><span class="like">{{getPost.likes.length}}</span></button> 
                  <button @click="unlikePost($route.params.id)" class="btn waves-effect waves-light grey lighten-3 black-text"><i class="material-icons">thumb_down</i></button> 
                  <span class="col s4" v-if = "getPost.user === getUser.id">
                  <button class="btn waves-effect waves-light grey lighten-4 red-text lighten-2-text" @click="deletePost($route.params.id)"><i class="material-icons">delete_outline</i></button>                                      
                 </span>
                </div>
                
                </div>
                <div class="row">
                    <h4 class="col s12 center-align blue-text lighten-2">Add A Comment Here</h4>
                    <textarea placeholder="Reply To This Post Here" class="col s12 materialize-textarea" rows="20" cols="10" v-model="comment"></textarea>
                    <button @click="addComment" class="btn waves-effect waves-light blue lighten-2 white-text">Create Comment</button>
                </div>
                <div class="row">
                    <h4 class="col s12 center-align blue-text lighten-2-text">Comments</h4>
                    <div class="card col s12" v-for="comment in getPost.comments"  :key="comment._id">
                        <div class="card-content">
                           <p  class="center-align blue-text lighten-2-text ">{{comment.text}}</p>
                            <button @click="deleteComment({postId : getPost._id, commentId : comment._id })" class="btn waves-effect waves-light grey lighten-4 red-text "><i class="material-icons">delete_outline</i></button>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</template>







<script>
export default {
 name : 'Post',
 data(){
    return {
       comment : "",
    }
 },
 created(){
     this.$store.dispatch('getPost',this.$route.params.id)
 },
 methods : {
     addComment(){
         const newComment  = {
             text :  this.comment
         }
         this.$store.dispatch('createComment',{id : this.$route.params.id, comment : newComment});
         this.comment = "";
     },
     deleteComment({postId,commentId}){
     this.$store.dispatch('deleteComment' , {postId,commentId})
     },
      likePost(id){
        this.$store.dispatch('addLike',id);
      },
      unlikePost(id){
        this.$store.dispatch('unlikePost',id)
      },
      deletePost(id){
          console.log('clicked')
          console.log(id)
          this.$store.dispatch('deletePost',id)
      }

 },
 computed  : {
     getPost(){
        return  this.$store.getters.getPost
     },
     getUser(){
         return this.$store.getters.getUser
     }
 }   
}
</script>





<style scoped>

</style>
