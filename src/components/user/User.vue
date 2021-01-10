<template>
<div>
    <h1>The User Page</h1>
    <hr>
    <!-- <p>loggedId : {{ loggedId }}</p> -->
    <button v-on:click="navigateToHomeThroghMethod" class="btn btn-primary"> click here to got to Home </button>
    <hr>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    // data(){
    //     return{
    //         loggedId:this.$route.params.someId
    //     }
    // },
    // watch:{
    //     $route(to,from){
    //         console.log('from :'+from)
    //         this.loggedId = to.params.someId
    //     }
    // },
    methods:{
        navigateToHomeThroghMethod(){
            this.$router.push('/');
        }
    }
}
</script>