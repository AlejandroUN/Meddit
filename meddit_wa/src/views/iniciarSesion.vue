<template>

  <div class="container col-xl-12 col-xxl-8 py-3">
    <div class="row align-items-center g-lg-5">
      <header class=" font">
        <router-link to="/"
          ><img src="../assets/logo.png" height="50"
        /></router-link>
        <!--<img src="../assets/logo.png" height="50"/>-->
        <nav class="nav justify-content-center float-md-end right">
          <router-link to="/"
            ><button
              class="w-100 btn btn-lg btn-primary color_fuente color2"
              type="submit"
            >
              Inicio
            </button></router-link
          >

            
          
   

          <router-link to="/contacta"
            ><button
              class="btn btn-lg btn-primary color_fuente color2"
              type="submit"
            >
              ¡Dónanos!
            </button></router-link

          >
        </nav>
      </header>

      <div
        class="modal modal-signin position-static d-block py-5 bg iniciar_sesion_blue_container"
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
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  v-model="email"
                />
                <label for="floatingInput">Correo electronico</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  v-model="password"
                />
                <label for="floatingPassword">Contraseña</label>
              </div>

              <button
                class="mb-2 btn btn-sm rounded-4 btn-primary floatr right color"
                type="submit"
                v-on:click="login"
              >
                Entrar
              </button>
              <small class="text-muted"
                ><router-link to="/recuperarContrasena"
                  >¿Has olvidado tu contraseña?</router-link
                ></small
              >
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

</script>

<style>
.iniciar_sesion_blue_container{
  background-color: #008b8f !important;
}
.fondo3 {
  background-color: #faefe8 !important;
}
</style>
