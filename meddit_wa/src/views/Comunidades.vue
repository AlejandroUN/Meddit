<template>
  <div id="app">
    <NavBarComunidades />
  <div class="container col-xl-12 col-xxl-8 py-3 mx-auto">
    <div class="row mt-1 offset-md-1">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Acceder</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr v-for="category in allComunities" :key="category.id">
                        <td>{{category.id}}</td>
                        <td>{{category.name}}</td>
                        <td><router-link :to="'/Comunidad/'+category.id+'/Menu'"><button class="btn boton_MEDDIT2" type="button">Entrar</button></router-link></td>
                    </tr>
                </tbody>
            </table>
        </div>
  </div>
  </div>
</template>

<script>

import NavBarComunidades from '../components/NavBarComunidades.vue'
import gql from 'graphql-tag'
export default {
  name: 'App',
  components: { NavBarComunidades},
  apollo: {
      
      allComunities: gql`query {
        allComunities{
          id
          name
        }
      }`,
    
    },

    created(){
    if(localStorage.getItem('token')==null){

      this.$router.push({ path: "/" });
    }
  }
    
  
}
</script>