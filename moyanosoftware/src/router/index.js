import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/SIINET',
    name: 'siinet',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SIINET.vue')
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: () => import('../views/Nosotros.vue')
  },
  {
    path: '/ayuda',
    name: 'ayuda',
    component: () => import('../views/Ayuda.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/Contacto.vue')
  },
  {
    path: '/cotizar',
    name: 'cotizar',
    component: () => import('../views/Cotizar.vue')
  },
  {
    path: '/ERP',
    name: 'ERP',
    component: () => import('../views/ERP.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
