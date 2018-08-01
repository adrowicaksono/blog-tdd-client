<template>
  <div class="auth">
    <div class="container">
      <div class="row">
        <form class="col s12 l6">
          <div class="row">
            <div class="input-field col s6">
              <textarea id="icon_prefix2" class="materialize-textarea" v-model="registerName"></textarea>
              <label for="icon_prefix2">Name</label>
            </div>
          </div>
          
          <div class="row">
            <div class="input-field col s6">
              <textarea id="icon_prefix2" class="materialize-textarea" v-model="registerEmail"></textarea>
              <label for="icon_prefix2" >Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <textarea id="icon_prefix2" class="materialize-textarea" v-model="registerPassword"></textarea>
              <label for="icon_prefix2">Password</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <a class="waves-effect waves-light btn" v-on:click="register">register</a>
            </div>
          </div>
        </form>

        <form class="col s12 l6">
          <div class="row">
            <div class="input-field col s6">
              <textarea id="icon_prefix2" class="materialize-textarea" v-model="loginEmail"></textarea>
              <label for="icon_prefix2" >Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <textarea id="icon_prefix2" class="materialize-textarea" v-model="loginPassword"></textarea>
              <label for="icon_prefix2">Password</label>
            </div>
          </div>
          <div class="input-field col s6">
             <a class="waves-effect waves-light btn" v-on:click="login">login</a>
          </div>
        </form>
      </div>
   </div>
  </div>
</template>

<script>
import swal from 'sweetalert2'
import axios from "axios"
export default {
  data(){
    return{
      registerName    :'',
      registerEmail   :'',
      registerPassword:'',
      loginEmail     :'',
      loginPassword   :'',
    }
  },
  methods:{
    login(){
      if(!localStorage.getItem("token")){
        console.log("login", this.loginEmail, this.loginPassword)
        axios
        .post('http://35.198.243.67/auth', {
          email : this.loginEmail,
          password : this.loginPassword
        })
        .then(function(respon){
          console.log("berhasil login", respon.data.token)
          localStorage.setItem('token', respon.data.token)
          this.$router.replace('/home')
          this.loginEmail = ''
          this.loginPassword = ''
        })
      }else{
        swal({
                title: 'info!',
                text: "you have logged",
                type: 'info!',
                confirmButtonText: 'Cool'
              })
      }
    },
    register(){
      console.log("register", this.registerName, this.registerPassword, this.registerEmail)
      axios.post('http://35.198.243.67/users',{
        name: this.registerName,
        email : this.registerEmail,
        password : this.registerPassword,

      })
      .then(function(result){
        console.log("success register")
        console.log(result)
      })
      .catch(function(err){
        console.log(err.message)
      })
    }
  }
}
</script>
