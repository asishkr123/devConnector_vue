


export const errorModule = {
     state : {
         error : ""
     },
     getters : {
         errors(state){
            return state.errors
         }
     },
     mutations : {
        setErrors(state,payload){
            state.error = payload
        }
     },
     actions : {
        getErrors(context,payload){
            context.commit('setErrors',payload)

        } 
     }
}

