import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/UserPage.vue'
import news1 from '../components/news1.vue'
import news2 from '../components/news2.vue'
import news3 from '../components/news3.vue'
import favorite from '../views/favorite.vue'

Vue.use(VueRouter)

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
    path: '/userPage',
    name: 'User',
    component: User
  },
  {
    path: '/userPage/news1',
    name: 'news1',
    component: news1
  },
  {
    path: '/news2',
    name: 'news2',
    component: news2
  },
  {
    path: '/news3',
    name: 'news',
    component: news3
  },
  {
    path: '/userPage/favorite',
    name: 'favorite',
    component: favorite
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
