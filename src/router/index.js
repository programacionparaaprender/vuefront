import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetails from '../views/MovieDetails.vue'
import MovieApp from '../views/MovieApp.vue'
Vue.use(VueRouter)

let test = {
  template: `<h1>Test de Router Vue</h1>`
}

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
      path: '/test',
      name: 'test',
      component: test,
  },
  {
      path: '/pelicula/:id',
      name: 'pelicula',
      component: MovieDetails,
  },
  {
    path: '/',
    name: 'movie',
    component: MovieApp 
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
