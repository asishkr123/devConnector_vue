<template>
    <div class="index">
        <div class="layer">
        <h1 class="heading white-text">DEVCONNECTOR</h1>
        <h4 class="white-text">Help Others enjoy the world of computing</h4>
        <div class="button-layer">
        <router-link :to ="{name : 'Register'}"><div class="button btn waves-effect blue white-text lighten-2">Sign up</div></router-link>
        <router-link :to ="{name : 'Login'}"><div class=" button btn waves-effect white-text blue lighten-2">Login</div></router-link>
    </div>
    </div> 
    </div>  
</template>





<script>
export default {
    
}
</script>







<style scoped>
    .index{
        background-image: url('../img/showcase.jpg');
        height :   100vh;
        width :    100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        position : relative;
    } 
    .index:after{
        content : "";
        position : absolute;
        top :  0;
        left : 0;
        z-index : 100;    
        background: rgba(0, 0, 0,0.8);
        height :   100vh;
        width :    100vw;
    }
    .button {
        z-index: 500;
        margin  : 20px;

    }
    .layer{
        display : flex ;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index   :   250;
        margin-top :  -80px;
    }
    .button-layer{
        display : inline-block;

    }
    

</style>

 

