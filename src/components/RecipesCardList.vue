<template>
  <div class="row" v-for="recipe in recipes" :key="recipe.id">
    <recipe-card :recipe="recipe"></recipe-card>
  </div>
</template>

<script>
import RecipeCard from "@/components/RecipeCard.vue";
export default {
  components: {
    RecipeCard,
  },
  props: {
    recipes: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped></style>
