import Home from "./components/Home.vue";
import User from "./components/user/User.vue";

export const routes = [
    { path :'', component:Home , name:'Home'  },
    { path :'/user', component:User , name:'User'  },
    

]