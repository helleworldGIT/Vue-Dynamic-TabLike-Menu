import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/articles',
    name: 'articles',
    component: function () {
      return import('../views/Articles.vue')
    }
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: function () {
      return import('../views/Gallery.vue')
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: function () {
      return import('../views/Contact.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
