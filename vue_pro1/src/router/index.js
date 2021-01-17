import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Example from '../views/Example.vue'
import Example2 from '../views/Example2.vue'
import Example3 from '../views/Example3.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/example',
    name: 'Example',
    component: Example
  },
  {
    path: '/example2',
    name: 'Example2',
    component: Example2
  },
  {
    path: '/example3',
    name: 'Example3',
    component: Example3
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
