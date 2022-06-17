<template>
  <h1> Hier sind deine Lieblingsrezepte </h1>
  <recipe-card></recipe-card>
  <recipe-card></recipe-card>
  <recipe-card></recipe-card>
  <recipe-card></recipe-card>
</template>

<script>

import RecipeCard from '@/components/RecipeCard.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'MyRecipes',
  components: {
    'recipe-card': RecipeCard
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>
