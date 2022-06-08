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
                <h4 class="mb-3">Videojuego</h4>

                <div class="input-group mb-3">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="id"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    name="id"
                    v-model="id"
                    autocomplete="off"
                  />
                  <div class="input-group-append">
                    <button class="btn boton_MEDDIT2" type="button">
                      Go!
                    </button>
                  </div>
                </div>
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
                    <tr>
                      <th scope="row">{{titulo}}</th>
                      <td>{{descripcion}}</td>
                      <td><img v-bind:src="portada" height="100"></td>
                      <td>{{puntuacion}}</td>
                    </tr>
                  </tbody>
                </table>
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
export default {
  name: "App",
  components: { NavBar },
  data() {
    return {
      id: null,
      titulo: "Halo Combat Envolved Primer Generación JAJ salu2",
      descripcion: "Voy a escribir un montón de pendejadas aquí para ver como afecta el tamaño de la tabla el hacer esa mierda así, puta madre, que se acabe rápido esta mierda :cccccccc",
      portada: 'https://mspoweruser.com/wp-content/uploads/2017/05/Halo1.jpg',
      puntuacion: 3.2
    };
  },
};
</script>

<style></style>
