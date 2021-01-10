import Home from "./components/Home.vue";
import User from "./components/user/User.vue";
import UserStart from "./components/user/UserStart.vue";
import UserDetails from "./components/user/UserDetail.vue";
import UserEdit from "./components/user/UserEdit.vue";
import TheHeader from "./components/UI/TheHeader.vue"


export const routes = [
    { path :'',  name:'Home', components:{
        default:Home,
        'top-header':TheHeader 
    }  },
    // { path :'/user/:someId', component:User , name:'User'  },
    { path :'/user' , components:{
        default:User,
        'bottom-header':TheHeader
    } , children:[
        {path:'', component:UserStart, name:'UserStart'},
        {path:':someId', component:UserDetails, name:'UserDetails'},
        {path:':someId/edit', component:UserEdit, name:'UserEdit'},
    ] },
    {path:'/worng-data', redirect:'/' },
    {path:'*', redirect:'/'},
    
    

]