<template>
  <div id="app">
   <NavBar />
  <div class="container col-xl-12 col-xxl-8 py-3">
    <div class="row align-items-center g-lg-5">
      <div
        class="modal modal-signin position-static d-block py-5 bg"
        tabindex="-1"
        role="dialog"
        id="modalSignin"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content rounded-5 shadow">
            <div class="modal-header p-5 pb-4 border-bottom-0 fondo3 font">
              <h2 class="fw-bold mb-0">Inicia tu sesión</h2>
            </div>
            <div class="modal-body p-5 pt-0 fondo3">
              <div class="form-floating mb-3">
                <label for="floatingInput">Correo electronico</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  v-model="user.email"
                />
                
              </div>
            

              <div class="form-floating mb-3">
                <label for="floatingPassword">Contraseña</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  v-model="user.password"
                />
                
              </div>
              
              <button
                class="mb-2 btn btn-sm rounded-4 floatr right boton_MEDDIT2"
                type="submit"
                v-on:click="loginUser()"
              >
                Entrar
              </button>
              {{var}}
              <!--<small class="text-muted"
                ><router-link to="/recuperarContrasena"
                  >¿Has olvidado tu contraseña?</router-link
                ></small
              >
              -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <!--

    <div id="app">
      
    </div>
    -->
</template>
<script>
import NavBar from '../components/NavBar.vue'
import gql from 'graphql-tag'
import { identifier, throwStatement } from '@babel/types';

export default {
  name: 'App',
  components: { NavBar},
  data(){
      return{
        var:0,
          user:{
            email:"",
            password:"",
          },
          
      }
  },
  methods:{

    loginUser(){
     
       
          this.$apollo.mutate({
            mutation:gql`mutation
            ($user:LoginInput!)
            {loginUser(user:$user) {
                  id
                }}
                `,
            variables:{
            
                user:this.user,
              
            },  
          }).then(r=>{
            alert(r.data.loginUser.id);
            this.var=r.data.loginUser.id;
            this.$store.dispatch('setToken', r.data.loginUser.id);
            this.$store.dispatch('setUser',this.user)
            if(this.var=!0){
              this.$router.push({ path: "/Comunidades" });
            }})
          .catch(e=>alert("Error al iniciar sesión, intente de nuevo"))
        
      
      
        
    }
  }
  }
</script>

<style>
.iniciar_sesion_blue_container {
  background-color: #008b8f !important;
}
.fondo3 {
  background-color: #bd84e6  !important;
}
</style>
