
import login from'./components/login'

import { createRouter,createWebHistory } from 'vue-router'
 
const routes=[
   
    { 
        name:'login',
        component:login,
        path:'/login'
    },
    
]
    const router=createRouter({
history:createWebHistory(),
routes
    })
export default router

