<template>
  <div id="app">
    <NavBar />
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
                    
                    <tr v-for="category in allComunities" :key="category.id">
                        <td>{{category.id}}</td>
                        <td>{{category.name}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
  </div>
  </div>
</template>

<script>

import NavBar from '../components/NavBar.vue'
import gql from 'graphql-tag'
export default {
  name: 'App',
  components: { NavBar},
  apollo: {
      
      allComunities: gql`query {
  allComunities{
    id
    name
  }
}`,
    },
  
}
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

.margen_izquierda {
  padding-right: 5px !important;
}
</style>
