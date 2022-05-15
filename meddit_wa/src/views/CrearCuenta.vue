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
      <div class="modal-content rounded-5 shadow">
        <main class="fondo3 abajo">
          <div class="row g-5 contenedor">
            <div class="col-md-7 col-lg-6 offset-md-3">
              <br />
              <br />
              <h4 class="mb-3">Crear cuenta</h4>
              <div class="row g-3">
                <div class="col-sm-12">
                  <label class="form-label">Nombres y Apellidos</label>
                  <input
                    type="text"
                    class="form-control"
                    name="nombres"
                    v-model="nombres"
                    maxlength="50"
                    placeholder="Nombres y Apellidos"
                  />
                </div>

                <div class="col-12">
                  <label class="form-label">Nombre de Usuario </label>
                  <input
                    type="text"
                    class="form-control"
                    name="new_user"
                    v-model="new_user"
                    placeholder="Nombre de Usuario"
                  />
                </div>

                <div class="col-12">
                  <label class="form-label">Email </label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    v-model="email"
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
                    v-model="password"
                    placeholder="Contraseña"
                    minlength="8"
                    maxlength="20"
                    v-on:keypress="isImprimible(event)"
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
                    v-on:keypress="isImprimible(event)"
                    required
                    :class="{
                      'is-invalid': cPassword !== '' && cPassword !== password,
                      'is-valid': cPassword !== '' && cPassword === password,
                    }"
                  />
                </div>

                <div>
                  <form>
                    <div><label>Fecha de nacimiento:</label></div>
                    <div>
                      <input type="date" :max="today" v-model="born" />
                    </div>
                  </form>
                </div>

                <button
                  class="mb-2 btn btn-sm rounded-4 btn-primary floatr right color"
                  type="submit"
                  v-on:click="checked"
                >
                  Crear
                </button>
              </div>
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

export default {
  name: 'App',
  components: { NavBar},}
</script>

<style scoped>
.botoncito:hover {
  background-color: #008b8f !important;
  border-color: #008b8f !important;
}

* {
  font-family: AvGard;
}

.botoncito {
  background-color: #f08240;
  border-color: aliceblue;
}

.abajo {
  padding-bottom: 4% !important;
}
</style>
