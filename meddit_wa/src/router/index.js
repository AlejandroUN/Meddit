import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/TheHome.vue'
import iniciarSesion from '../views/iniciarSesion.vue'
import crearCuenta from '../views/CrearCuenta.vue'

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
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
  
export default router