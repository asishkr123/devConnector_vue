import router from '../router';
import axios from 'axios';


 export const ProfileModule = {
     state : {
        profile  : null,
        profiles : null,
        profileLoading : true

     },
     mutations : {
        getCurrentProfile(state,payload){
            state.profile  = payload;
            state.profileLoading = false

        },
        getProfiles(state,payload){
            state.profiles = payload;
            state.profileLoading = false
        }
     },
     getters : {
        getProfile(state){
            console.log(state.profile)
            return state.profile
        },
        getProfileloading(state){
            return state.profileLoading
        },
        getEducation(state){
            return state.profile.education
        },
        getExperience(state){
            return state.profile.experience
        },
        getProfileID(state){
            return state.profile._id
        },
        getAllProfiles(state){
            return state.profiles
        }
     },
     actions : {
        getCurrentProfile(context){
           context.commit('setProfileLoading')
            axios.get('/api/profile')
            .then(res => {
              context.commit('getCurrentProfile',res.data)
            }).catch( () => {
                context.commit('getCurrentProfile',{})

            })
        },
        createProfile(context,profiledata){
            axios.post('/api/profile',profiledata)
                .then(() => {
                    router.push('/dashboard')
                }).catch(err => {
                    context.commit('setErrors', err.response.data)
                })
        },
        addEducation(context,eduData){
            axios.post('/api/profile/education',eduData)
               .then(() => {
                   router.push('/dashboard')
               }).catch(err => {
                   context.commit('setErrors',err.response.data)
               })
        },
        addExperience(context,eduData){
            axios.post('/api/profile/experience',eduData)
               .then(() => {
                   router.push('/dashboard')
               }).catch(err => {
                   context.commit('setErrors',err.response.data)
               })
        },
        deleteExperience(context,id){
            axios.delete(`/api/profile/experience/${id}`)
                 .then((res) => {
                    context.commit('getCurrentProfile',res.data)
                 }).catch(err => {
                     context.commit('setErrors',err.response.data)
                 })
        },
        deleteEducation(context,id){
            axios.delete(`/api/profile/education/${id}`)
                 .then((res) => {
                    context.commit('getCurrentProfile',res.data)
                 }).catch(err => {
                     context.commit('setErrors',err.response.data)
                 })
        },
        deleteAccount({commit,dispatch},id){
            if(window.confirm('Are you sure this cannot be undone')) {
                axios.delete('/api/profile',id)
                     .then(() => {
                       commit('getCurrentProfile',{})
                       dispatch('logoutUser')
                     }).catch(err => {
                         commit('setErrors',err.response.data)
                     })
            }
        },
        getProfiles({commit}){
            axios.get('/api/profile/all')
            .then((res) => {
                console.log(res.data)
                commit('getProfiles',res.data)
            }).catch(err => {
                commit('setErrors',err.response.data)
            })
        },
        getProfileByHandle({commit},handle){
            axios.get(`/api/profile/handle/${handle}`)
                 .then(res => {
                     console.log(res.data)
                     commit('getCurrentProfile',res.data)
                 }).catch(err => {
                     commit('setErrors' , err.response.data);
                 })

        },
        clearCurrentProfile(context){
             context.commit('getCurrentProfile',{});
        } 

     }

 } 