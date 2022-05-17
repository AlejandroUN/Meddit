import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/TheHome.vue'
import iniciarSesion from '../views/iniciarSesion.vue'
import crearCuenta from '../views/CrearCuenta.vue'
import Comunidades from '../views/Comunidades.vue'
import CrearComunidad from '../views/CrearComunidad.vue'
import EditarComunidad from '../views/EditarComunidad.vue'
import EliminarComunidad from '../views/EliminarComunidad.vue'
import ComunidadMenu from'../views/ComunidadMenu.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/iniciarSesion',
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
        path:'/EliminarComunidad',
        name: 'EliminarComunidad',
        component: EliminarComunidad
    },
    {
        path:'/Comunidad/:id/Menu',
        name: 'ComunidadMenu',
        component:ComunidadMenu,
        props: true
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
  
export default router