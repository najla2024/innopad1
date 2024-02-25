<template>
    <div class="contrainer">
        
        <div class="register">
        <h1>login </h1>
        <br> 
    <input type="text" v-model=" email" placeholder="Enter Email"/>
    <input type="password" v-model="password" placeholder="Enter Password"/>
    <button class="bg-cyan-500 hover:bg-cyan-600" v-on:click="login" > login</button>
   
    </div>
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