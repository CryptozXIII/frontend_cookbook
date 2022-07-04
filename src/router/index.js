import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import RecipeOfTheDay from '@/views/RecipeOfTheDay'
import MyRecipes from '@/views/MyRecipes'
import Search from '@/views/Search'
import Recipe from '@/views/Recipe'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
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
  },
  {
    path: '/recipe/:id',
    name: 'Recipe',
    component: Recipe
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
