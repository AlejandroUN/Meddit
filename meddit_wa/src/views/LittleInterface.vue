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
                <h4 class="mb-3">Videojuegos</h4>
                <button
                  class="btn boton_MEDDIT2"
                  type="button"
                  v-on:click="pedir"
                >
                  Pedir
                </button>
                <!--{{ lista }}-->
                <br />
                <br />

                <div class="container col-xl-12 col-xxl-8 py-3">
                  <div class="row mt-1">
                    <table class="table">
                      <thead class="thead-dark">
                        <tr>
                          <th scope="col">Titulo</th>
                          <th scope="col">Descripción</th>
                          <th scope="col">Portada</th>
                          <th scope="col">Puntuación</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="i in lista" :key="i.Id">
                          
                            <th scope="row">{{ i.title }}</th>
                            <td>{{ i.description }}</td>
                            <td><img v-bind:src="i.cover" height="100" /></td>
                            <td>{{ i.score }}</td>
                          
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
import NavBar from "../components/NavBar.vue";
import axios from "axios";
export default {
  name: "App",
  components: { NavBar },
  data() {
    return {
      lista: [],
    };
  },
  methods: {
    pedir() {
      axios
        .get("https://meddit-interface-3fafemp3rq-uc.a.run.app/videoGames")
        .then((response) => {
          this.lista = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
