<template>
   <div id="app" > 
<header>
 
  <navbar/>
</header>
 <!--<div id="nav">
    <router-link to ="/"> <i class="bi bi-code"></i>home</router-link>|
    <router-link to ="/"> home</router-link>|
 </div>
-->
  <login/> 
  <router-view/>
 
  </div>
    </template>
<script>
import login from'./components/login';
import navbar from'./components/navbar';
export default {
  name: 'App',
  components: {
    
    login,
    navbar,
    

  },
};
 
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  font-family: 'montserrat', sans-serif;
}
header{
  width: 100vw;
  background-color:antiquewhite;
  padding: 15px;
}
#nav{
  padding: 30px;
}
</style>
-->