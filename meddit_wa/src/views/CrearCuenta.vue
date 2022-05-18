<template>
  <div id="app">
 <NavBar />
  <div class="container col-xl-12 col-xxl-8 py-3">
    <div
      class="modal modal-signin position-static d-block bg margen2"
      tabindex="-1"
      role="dialog"
      id="modalSignin"
    >
      <div class="abajo">
        <main>
          <div class="row g-5 contenedor">
            <div class="col-md-7 col-lg-6 offset-md-3">
              <br />
              <br />
              <h4 class="mb-3">Crear cuenta</h4>
              <div class="row g-3">
                

                <div class="col-sm-12">
                  <label class="form-label">Nombre de Usuario </label>
                  <input
                    type="text"
                    class="form-control"
                    name="username"
                    v-model="user.username"
                    placeholder="Nombre de Usuario"
                  />
                </div>

                <div class="col-12">
                  <label class="form-label">Email </label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    v-model="user.email"
                    placeholder="you@example.com"
                  />
                </div>

                <div class="form-group col-12">
                  <label class="custom-label col-md-3 display" for="password"
                    >Contrase&ntilde;a</label
                  >
                  <input
                    class="form-control col-12 col-sm-10 col-md-7"
                    type="password"
                    name="password"
                    v-model="user.password"
                    placeholder="Contraseña"
                    minlength="8"
                    maxlength="20"
                    
                  />
                </div>

                <div class="form-group col-12">
                  <label class="custom-label col-md-6 display">
                    Confirmar Contrase&ntilde;a
                  </label>
                  <input
                    class="form-control col-12 col-sm-10 col-md-7"
                    type="password"
                    name="cpassword"
                    placeholder="Confirmar Contraseña"
                    v-model="cPassword"
                    required
                    :class="{
                      'is-invalid': cPassword !== '' && cPassword !== user.password,
                      'is-valid': cPassword !== '' && cPassword === user.password,
                    }"
                  />
                </div>
              </div>
              <button
                  class="mb-2 btn btn-sm rounded-4
                   floatr right boton_MEDDIT2"
                  type="submit"
                  v-on:click="createUser"
                >
                  Crear
                </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import gql from 'graphql-tag'
export default {
  name: 'App',
  components: { NavBar},
  data(){
    return{
      user:{
      email:"",
      password:"",
      username:""},
      
      cPassword:"",
    }
  },
  methods:{
      createUser(){
          
          this.$apollo.mutate({
            mutation:gql`mutation($user:RegisterInput!)
            {createUser(user:$user)}
                `,
            variables:{
                    user:this.user
                
            },

            
            

               
          });
          alert("Cuenta Creada");
          this.$router.push({ path: "/" });
      },
  },
  
  
  }
</script>

<style scoped>

.abajo {
  padding-bottom: 4% !important;
}
</style>
