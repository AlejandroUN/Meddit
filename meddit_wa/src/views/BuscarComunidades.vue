<template>
  <div id="app">
    <NavBarComunidades />
    <div class="container col-xl-12 col-xxl-8 py-3">
      <div class="row mt-1">
        <table class="table table-boarded">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <div v-for="category in allComunities" :key="category.id">
              <tr v-if="category.name == nametoFind">
                <td>{{ category.id }}</td>
                <td>{{ category.name }}</td>
                <td>
                  <router-link :to="'/Comunidad/' + category.id + '/Menu'"
                    ><button>Entrar</button></router-link
                  >
                </td>
              </tr>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarComunidades from "../components/NavBarComunidades.vue";
import gql from "graphql-tag";
export default {
  name: "App",
  components: { NavBarComunidades },
  apollo: {
    allComunities: gql`
      query {
        allComunities {
          id
          name
        }
      }
    `,
  },
  data() {
    return {
      nametoFind: this.$route.params.name,
    };
  },

   created(){
    if(localStorage.getItem('token')==null){

      this.$router.push({ path: "/" });
    }
  }
    
  
}
</script>

