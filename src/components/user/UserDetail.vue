<template>
<div class="container" >
    <h3 class="container" >Some User Details</h3>
    <p class="container" > loaded id : {{ this.$route.params.someId }}</p>
        <!-- <router-link tag = 'button' :to="'/user/' +this.$route.params.someId +'/edit'" class='btn btn-primary'>  edit user </router-link> -->
        <router-link tag = 'button' :to="{ name:'UserEdit' , params:{ someId:$route.params.someId } }" class='btn btn-primary'>  edit user </router-link>
        <router-link to='/wrong-data' tag="li" active-class="active" ><a> Redirecting to home </a></router-link> 
</div>
</template>

<script>
export default {
    name:'UserDetails'
}
</script>

<style scoped>

</style>