<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/">
      <img src="../assets/logo.png" height="50" />
    </router-link>
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/">
            <button class="btn my-2 my-sm-0 boton_MEDDIT" type="submit">
              Inicio
            </button>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/crearCuenta">
            <button class="btn my-2 my-sm-0 boton_MEDDIT" type="submit">
              Crear Cuenta
            </button>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/IniciarSesion">
            <button class="btn my-2 my-sm-0 boton_MEDDIT" type="submit">
              Acceder
            </button>
          </router-link>
        </li>
      </ul>
    </div>

    <form class="form-inline my-2 my-lg-0 ml-auto">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Buscar"
          aria-label="Buscar"
        />
        <button
          class="btn my-2 my-sm-0 float-lg-right boton_MEDDIT"
          type="submit"
        >
          Buscar
        </button>
      </form>
  </nav>
</template>

<script>
export default {};
</script>

<style>
  .boton_MEDDIT{
    color: white !important;
    background-color: #4b0082 !important;
    margin-left: 0.1cm !important;
  }

  .boton_MEDDIT:hover{
    color: #4b0082 !important;
    background-color: white !important;
    margin-left: 0.1cm !important;
  }

  .boton_MEDDIT2{
    color: white !important;
    background-color: #4b0082 !important;
    margin-left: 0.1cm !important;
  }
</style>
