<template>
  <div id="app">
    <NavBarComunidades />
  <div class="container mt-4">
    <form class="col-lg-6 offset-lg-3">
        <div class="row text-center">
            <h4>Crear Comunidad</h4>
        </div>
        <input
            class="form-control mt-4"
            type="text"
            v-model="comunity.name"
            placeholder="Ingresa el nombre de la comunidad"
        />
        <input
            class="form-control mt-4"
            type="text"
            v-model="comunity.description"
            placeholder="Ingresa la descripción de la comunidad"
        />
        <button
            class="btn btn-outline-primary offset-5 mt-4 justify-content-center"
            type="button"
            @click="addComunidad()"
        >
        Crear
        </button>
    </form>
  </div>
  </div>
</template>

<script>

import NavBarComunidades from '../components/NavBarComunidades.vue'
import gql from 'graphql-tag'


export default {
  name: 'App',
  components: {NavBarComunidades},
  data(){
      return{
        comunity:{
            name:"",
            description:"",
            creatorId:5
        }
      }
  },
  methods:{
      addComunidad(){
          
          this.$apollo.mutate({
            mutation:gql`
                mutation($comunity:ComunityInput!)
                    {createComunity(comunity:$comunity)
                        {
                        id
                        name
                        }
                    }
                `,
            variables:{
                    comunity:this.comunity
                
            },

            
            

               
          });
          alert("Comunidad creada");
      },
  },
}
</script>