<template>
  <div class="container col-xl-12 col-xxl-8 py-3">
    <div class="row align-items-center g-lg-5">
      <header class="font">
        <img class="float-md-start" src="../assets/logo.png" height="50" />

        <nav class="nav justify-content-center float-md-end">
          
          <a href="https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator" class="margen_izquierda"
            ><button
              class="w-100 btn btn-lg btn-primary color_fuente color2 margen_izquierda"
              type="submit"
            >
              Test MBTI
            </button></a>

          <a href="https://es.wikipedia.org/wiki/Modelo_de_los_cinco_grandes" class="margen_izquierda">
          <button
              class="w-100 btn btn-lg btn-primary color_fuente color2"
              type="submit"
            >
              Test Big Five
            </button></a>

          <router-link to="/contacta"
            ><button
              class="w-100 btn btn-lg btn-primary color_fuente color2"
              type="submit"
            >
              ¡Dónanos!
            </button></router-link
          >
        </nav>
      </header>

      <div class="col-lg-7 text-center text-lg-start">
        <div class="col-lg-10 fs-4 font">
          <p class="f_tamano">
            Dedún es una plataforma para relacionar personas según sus intereses
            y su psicología. Está llamada a ser la herramienta por defecto para
            conocer personas, sin importar cuáles sean los intereses que motiven
            al usuario en su búsqueda de otros usuarios: negocios, hobbies,
            sexo, aprendizaje, no importa: la esencia del negocio es la misma
            sin importar cuáles sean los matices que tengan, la esencia es
            <b>la mente</b>.
          </p>
        </div>
      </div>
      <div class="col-md-10 mx-auto col-lg-5 font">
        <form class="p-4 p-md-5 border rounded-3 bg-light">
          <router-link to="/IniciarSesion">
            <button class="w-100 btn btn-sm btn-primary color" type="submit">
              Iniciar Sesión
            </button>
          </router-link>
          <router-view />

          <hr class="my-4" />
          <router-link to="/crearCuenta">
            <button class="w-100 btn btn-sm btn-primary color" type="submit">
              Crear cuenta
            </button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>


.color {
  background-color: #f08240 !important;
  border-color: #f08240 !important;
}

.color:hover {
  background-color: #008b8f !important;
  border-color: #008b8f !important;
}

.pb {
  padding-bottom: 30px;
}

.f_tamano {
  font-size: 18px;
  text-align: justify;
}

.margen_izquierda{
  padding-right: 5px !important;
}
</style>
