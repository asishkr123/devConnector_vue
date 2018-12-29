import axios from 'axios';
import router from '../router';



export const PostsModule = {
    state : {
        posts : [],
        post  :  {},
        loading  : true
    },
    getters : {
          getPosts(state){
              return state.posts
          },
          getPost(state){
              return state.post
          },
          getLikes : (state) => id => {
            const likedPost =  state.posts.filter(post => post.id === id);
            return likedPost.likes.length
          }
    },
    mutations : {
        setPosts(state,payload){
            state.posts  = payload
            state.loading = false;

        },
        addPost(state,payload){
            state.posts = [...state.posts,payload];
            state.loading = false;
        },
        deletePost(state,id){
           state.posts =  state.posts.filter(post => post._id !== id)

        },
        setPost(state,payload){
           state.post = payload;
           state.loading = false
        },
        setLoading(state){
            state.loading = true
        }
    },
    actions : {
        getPosts(context){
          context.commit('setLoading')  
          axios.get('/api/posts')
          .then((res) => {
              context.commit('setPosts',res.data)
          }).catch(err => console.log(err))
        },
        getPost(context,id){
            context.commit('setLoading')  
            axios.get(`/api/posts/${id}`)
            .then((res) => {
                context.commit('setPost',res.data)
            }).catch(err => {
                console.log(err);
                context.commit('setErrors',err.response.data)
            })
        },
        createPost(context,postData){
            context.commit('setLoading');
            axios.post('/api/posts',postData)
                .then(res => {
                    context.commit('addPost',res.data)
                }).catch(err => {
                    context.commit('setErrors',err.response.data)
                    console.log(err)
                })
        },
        createComment(context,{id,comment}){
            context.commit('setLoading');
            axios.post(`/api/posts/comment/${id}`,comment)
                .then(res => {
                    context.commit('setPost',res.data)
                }).catch(err => {
                    context.commit('setErrors',err.response.data)
                    console.log(err)
                })
        },
        deleteComment(context,{postId , commentId}){
            axios.delete(`/api/posts/comment/${postId}/${commentId}`)
                 .then(res => {
                     context.commit('setPost',res.data)
                 }).catch(err => {
                     context.commit('setErrors',err.response.data)
                     console.log(err)
                 })

        },
        deletePost(context,postId){
            axios.delete(`/api/posts/${postId}`)
                .then(() => {
                   context.commit('deletePost',postId);
                   router.push('/posts') 
                }).catch(err => {
                    console.log(err)
                    context.commit('setErrors',err.response.data)
                    
                })
        },
        addLike(context,id){
            axios.post(`/api/posts/like/${id}`)
                 .then(res=> {
                     context.commit('setPost',res.data)
                 }).catch(err => {
                     console.log(err)
                     context.commit('setErrors',err.response.d)
                 })
        },
        unlikePost(context,id){
            axios.post(`/api/posts/unlike/${id}`)
                 .then (res => {
                     context.commit('setPost',res.data)
                 }).catch(err => {
                     console.log(err)
                     context.commit('setErrors',err.response.data)
                 })
        }

    }
}