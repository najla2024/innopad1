
  
<template>
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
           Innopad
          </a>
          <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
          <ul class="flex flex-col lg:flex-row list-none ml-auto">
            
            <li class="nav-item">
              <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                <i class="fab fa-twitter text-lg leading-lg text-white opacity-75" /><span class="ml-2">login</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                <i class="fab fa-pinterest text-lg leading-lg text-white opacity-75" /><span class="ml-2">signup</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  

 
  
  
 <!--<template>     
 <header class="flex justify-between items-center bg white shadow_md h-[80px] px-5 lg:px-24 relative z-10">
    <div class=" text-3xl font-extrabold text-blue-600 hover:text-blue-700 cursor-pointer">
        <router-link to="/"> <i class="bi bi-code"> innopad</i></router-link>
     </div>
        <nav class=" flex gap-4 md:gap-10 px-6 md:static absolute bg white shadow-md:shadow-none md:w-auto my-7 md:my-0 left-0 w-full" >
            <router-link to="/" class="text-slate-500 hover:text-slat-700 text-xl font-medium"> home</router-link>
            <router-link to="/ service" class="text-slate-500 hover:text-slat-700 text-xl font-medium"> service</router-link>
            <router-link to="/contact" class="text-slate-500 hover:text-slat-700 text-xl font-medium"> contact</router-link>
        </nav>
<div class="text-4xl text-black cursor-pointer md:hidden">
    <i class="bi bi-x"></i>
</div>
    </header>
</template>
-->
 
<script>
export default {
    name:'navbar'
}
</script>


