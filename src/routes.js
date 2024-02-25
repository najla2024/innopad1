
import { createRouter,createWebHistory } from 'vue-router'
import login from'./components/login'
import navbar from'./components/navbar'
import home from'./views/home'
import contact from'./views/contact'




const router=createRouter({
    history:createWebHistory(),

         routes : [
   
    { 
        name:'login',
        component:login,
        path:'/login'
    },
       
    { 
        name:'navbar',
        component:navbar,
        path:'/navbar'
    },
    { 
        name:'home',
        component:home,
        path:'/home'
    },
    { 
        name:'contact',
        component:contact,
        path:'/contact'
    },
    
    
   

]
});
export default router;

