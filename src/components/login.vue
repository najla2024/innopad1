 <template>
    <div class="flex justify-center items-center mt-52">
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="identity-input mb-4">
            <label
              for="identity"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              Email</label
            >
            <input
              id="identity"
              class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Email"
              aria-describedby="emailHelp"
              v-model="email"
            />
            <span class="text-xs text-red-700" id="emailHelp"></span>
          </div>
  
          <div class="password-input mb-6">
            <label
              for="identity"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Password</label
            >
  
            <input
              aria-describedby="passwordHelp"
              v-model="password"
  
              class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*******"
            />
  
            <span class="text-xs text-red-700" id="passwordHelp"></span>
          </div>
  
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: "Login",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      login() {
        console.log("logging in");
      },
    },
  };
  </script>

  


<!--<template>
    <div class="contrainer">
        
    <form @submit.prevent="submit">
        <div class="register">
        <h1>login </h1>
        <br> 
    <input type="text" v-model=" email" placeholder="Enter Email"/>
    <input type="password" v-model="password" placeholder="Enter Password"/>
    <button class="bg-cyan-500 hover:bg-cyan-600" v-on:click="login" > login</button>
   
    </div>
     </form>
</div>
</template>

<script>
export default {
    name:'login',
    data ()
    {
        return{
            email :'',
            password:''
        }
    },
    methods:{
        login()
        {
    console.log('stop form')
        }
    }
    
};
</script>


 <style>
.register input{
    widows: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.register button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;

}

</style>
-->