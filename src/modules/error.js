


export const errorModule = {
     state : {
         error : ""
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

