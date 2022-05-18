<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/">
      <img src="../assets/logo.png" height="50" />
    </router-link>
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/Comunidades">
            <button class="btn my-2 my-sm-0 boton_MEDDIT" type="submit">
              Comunidades
            </button>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/crearComunidad">
            <button class="btn my-2 my-sm-0 boton_MEDDIT" type="submit">
              Crear Comunidad
            </button>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/EditarComunidad">
            <button class="btn my-2 my-sm-0 boton_MEDDIT" type="submit">
              Editar Comunidad
            </button>
          </router-link>
        </li>
        
      </ul>
    </div>

    <form class="form-inline my-2 my-lg-0 ml-auto">
        <input
          class="form-control mr-sm-2"
          type="text"
          placeholder="Buscar Comunidad"
          aria-label="Buscar Comunidad"
          v-model="name"
        />
        <router-link :to="'/Comunidades/'+name">
        <button
          class="btn my-2 my-sm-0 float-lg-right boton_MEDDIT"
          type="submit"
        >
          Buscar 
        </button>
        </router-link>
      </form>
  </nav>
</template>

<script>
export default {
   data(){
     return{
       name:""
   }
}};
</script>

<style></style>