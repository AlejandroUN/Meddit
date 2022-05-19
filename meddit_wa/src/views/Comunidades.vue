<template>
  <div id="app">
    <NavBarComunidades />
  <div class="container col-xl-12 col-xxl-8 py-3">
    <div class="row mt-1">
            <table class="table table-boarded">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr v-for="category in allComunities" :key="category.id">
                        <td>{{category.id}}</td>
                        <td>{{category.name}}</td>
                        <td><router-link :to="'/Comunidad/'+category.id+'/Menu'"><button>Entrar</button></router-link></td>
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

    mounted(){
      
    }
    
  
}
</script>