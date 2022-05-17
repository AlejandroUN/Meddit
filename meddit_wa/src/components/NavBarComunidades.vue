<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <img src="../assets/logo.png" height="50" />
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/Comunidades">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Comunidades
            </button>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/crearComunidad">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Crear Comunidad
            </button>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/EditarComunidad">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Editar Comunidad
            </button>
          </router-link>
        </li>
        
      </ul>
    </div>

    <form class="form-inline my-2 my-lg-0 ml-auto">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Buscar Comunidad"
          aria-label="Buscar Comunidad"
        />
        <button
          class="btn btn-outline-success my-2 my-sm-0 float-lg-right"
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

<style></style>