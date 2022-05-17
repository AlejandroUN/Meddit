<template>
  <div id="app">
    <NavBarComunidades />
  <div class="container col-xl-12 col-xxl-8 py-3">
    *ID: {{comunityById.id}}
    *Nombre: {{comunityById.name}}
    *Descripcion: {{comunityById.description}}
    *ID Creador: {{comunityById.creatorId}}
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
      
      comunityById:{query: gql`
      query($id:Int!){
  comunityById(id:$id){
    id
    name
    description
    creatorId
    }
  }
  
  `, 
  variables(){
      return{
          id:this.post,
      }
  }
  
  },

    
    },
  data(){
      return{
          post:this.$route.params.id,
          comunityById:[],
      }
  },
    
  
}
</script>