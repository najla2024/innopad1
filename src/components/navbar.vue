
 <template>
    
  <header class="flex justify-between items-center bg white shadow_md h-[80px] px-5 lg:px-24 relative z-10">
<div class=" text-3xl font-extrabold text-blue-600 hover:text-blue-700 cursor-pointer">
 <router-link to="/"> <i class="bi bi-code"> innopad</i></router-link>
 </div>
        <nav class=" flex gap-4 md:gap-10 px-6 md:static absolute bg white shadow-md:shadow-none md:w-auto my-7 md:my-0 left-0 w-full" >
            <router-link to="/" class="text-slate-500 hover:text-slat-700 text-xl font-medium"> home</router-link>
            <router-link to="/ service" class="text-slate-500 hover:text-slat-700 text-xl font-medium"> service</router-link>
            <router-link to="/contact" class="text-slate-500 hover:text-slat-700 text-xl font-medium"> contact</router-link>
        </nav>
       
    </header>

</template>
<script>

export default {
    name:'navbar'
}
</script>


