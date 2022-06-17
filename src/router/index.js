import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import AboutView from '@/views/AboutView'
import RecipeOfTheDay from '@/views/RecipeOfTheDay'
import MyRecipes from '@/views/MyRecipes'
import Search from '@/views/Search'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/recipe-of-the-day',
    name: 'RecipeOfTheDay',
    component: RecipeOfTheDay
  },
  {
    path: '/my-recipes',
    name: 'MyRecipes',
    component: MyRecipes
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
