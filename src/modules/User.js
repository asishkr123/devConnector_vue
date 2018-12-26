import router from '../router';
import axios from  'axios';
// import SetAuthToken from '../utils/setAuthToken';
import setAuthToken from '../utils/setAuthToken';
import jwtdecode from 'jwt-decode';
import isEmpty from '../utils/is-empty';

export const UserModule = {
     state : {
         User : {},
         isAuthenticated : false
     },
     getters : {
        isUserAuthenticated(state){
            if(state.isAuthenticated){
                return true
            } else{
               return false
                
            }
        },
        getUser(state){
            return state.User;
        }
   },
     mutations : {
         setCurrentUser(state,payload){
             state.User = payload;
             console.log(state.User)
             state.isAuthenticated = !isEmpty(payload)
             console.log(state.isAuthenticated)
         },
         getCurrentUser(state){
            const user = localStorage.getItem('user');
            state.User = JSON.parse(user);
            state.isAuthenticated = !isEmpty(user);
         }
     },
     actions :   {
         registerUser(context,userData){
            axios.post(`/api/users/register`, userData)
             .then(res => {console.log(res);router.push('/login')} )
             .catch(err => {
                 console.log(err)
                 context.commit('setErrors',err.response.data)
             })
         },
         getCurrentUser(context){
           context.commit('getCurrentUser')
         },
         loginUser(context,userdata){
             axios.post('/api/users/login',userdata)
             .then(res => {
                  const {token} = res.data;
                  localStorage.setItem('jwttoken',token);
                  setAuthToken(token)
                  const decoded = jwtdecode(token);
                  context.commit('setCurrentUser',decoded);
                  localStorage.setItem('user',JSON.stringify(decoded));
                  router.push('/dashboard');

             }).catch(err => {
                    context.commit('setErrors',err.response.data)
             })
         },
         logoutUser(context){
             localStorage.removeItem('jwttoken');
             localStorage.removeItem('user');
             context.commit('setCurrentUser',{});
             context.commit('getCurrentProfile',{});
             router.push('/');
         }
     }
}