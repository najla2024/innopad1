<template>
    <div>
        <h1>login</h1>
    <div class="register">
    <input type="text" v-model=" email" placeholder="Enter Email"/>
    <input type="password" v-model="password" placeholder="Enter Password"/>
    <button v-on:click="login" > login</button>
    <p> 
        <router-link to="/sign-up">sign up</router-link>
    </p>
    </div>
    </div>
</template>

<script>
export default {
    name:'login',
    
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
