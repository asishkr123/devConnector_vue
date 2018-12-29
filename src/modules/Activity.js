
import axios from 'axios';


export const ActivityModule = {
    state : {
        activity : {},
    },
    getters : {
        getActivityLog(state){
            console.log(state.activity)
           return state.activity.loggedActivity
        }
    },
    mutations : {
       setActivity(state,payload){
           state.activity = payload
       }
    },
    actions : {
          getActivity(context,id){
           axios.get(`/api/activity/${id}`).then(res => {
               context.commit('setActivity',res.data);
           }).catch(err => {
               console.log(err.response.data)
           })
          }
    }

}    