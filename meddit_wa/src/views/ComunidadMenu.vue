<template>
  <div id="app">
    <NavBarComunidades />
    <div class="container col-xl-12 col-xxl-8 py-3">
      <h1>Welcome to our {{comunityById.id}} community!</h1>
      <h2>{{ comunityById.name }}</h2>
      <p>{{ comunityById.description }}</p>
      <p>Created by {{ comunityById.creatorId }}</p>
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
    comunityById: {
      query: gql`
        query ($id: Int!) {
          comunityById(id: $id) {
            id
            name
            description
            creatorId
          }
        }
      `,
      variables() {
        return {
          id: this.post,
        };
      },
    },
  },
  data() {
    return {
      post: this.$route.params.id,
      comunityById: [],
    };
  },
   created(){
    if(localStorage.getItem('token')==null){

      this.$router.push({ path: "/" });
    }
  }
};
</script>
