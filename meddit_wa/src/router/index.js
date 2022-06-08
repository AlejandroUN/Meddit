import { createRouter, createWebHistory } from 'vue-router'
import iniciarSesion from '../views/iniciarSesion.vue'
import crearCuenta from '../views/CrearCuenta.vue'
import Comunidades from '../views/Comunidades.vue'
import CrearComunidad from '../views/CrearComunidad.vue'
import EditarComunidad from '../views/EditarComunidad.vue'
import EditarComunidadId from '../views/EditarComunidadId.vue'
import ComunidadMenu from'../views/ComunidadMenu.vue'
import BuscarComunidades from '../views/BuscarComunidades.vue'
import LittleInterface from '../views/LittleInterface.vue'

const routes = [
    {
        path: '/',
        name: 'iniciarSesion',
        component: iniciarSesion
    },
    {
        path: '/crearCuenta',
        name: 'crearCuenta',
        component: crearCuenta
    },
    {
        path: '/Comunidades',
        name: 'Comunidades',
        component: Comunidades
    },
    {
        path:'/CrearComunidad',
        name: 'CrearComunidad',
        component: CrearComunidad
    },
    {
        path:'/EditarComunidad',
        name: 'EditarComunidad',
        component: EditarComunidad
    },
    {
        path:'/EditarComunidad/:id',
        name: 'EditarComunidadId',
        component: EditarComunidadId,
        props: true
    },
    {
        path:'/Comunidad/:id/Menu',
        name: 'ComunidadMenu',
        component:ComunidadMenu,
        props: true
    },
    {   
        path:'/Comunidades/:name',
        name: 'BuscarComunidades',
        component:BuscarComunidades,
        props: true

    },
    {
        path: '/littleinterface',
        name: 'LittleInterface',
        component: LittleInterface
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
  
export default router