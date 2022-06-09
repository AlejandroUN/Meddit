<template>
  <div id="app">
    <NavBarComunidades />
  <div class="container mt-4">
    <form class="col-lg-6 offset-lg-3">
        <div class="row text-center">
            <h4>Editar Comunidad</h4>
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
            class="btn offset-5 mt-4 justify-content-center boton_MEDDIT2"
            type="button"
            v-on:click="editComunidad"
        >
        Editar
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
        idComunity:this.$route.params.id,
        comunity:{
            name:"",
            description:"",
            creatorId:localStorage.getItem('id'),
        }
      }
  },
  methods:{
      editComunidad(){
          
          this.$apollo.mutate({
            mutation:gql`
                mutation($id:Int!,$comunity:ComunityInput!){
                    updateComunity(id:$id,comunity:$comunity)
                    {
                      id
                      name
                      description
                    }
                    }
                `,
            variables:{
                    id:this.idComunity,
                    comunity:this.comunity
                
            },

            
            

               
          });
          alert("Comunidad editada");
          this.$router.push({ path: "/EditarComunidad" });

      },
  },
  created(){
    if(localStorage.getItem('id')==0){
      this.alert("No estas loggeado")
      this.$router.push({ path: "/" });
    }
  }
}
</script>