<template>
  <br />
  <h1>Favorite recipes</h1>
  <br />
  <div class="container-fluid">
    <div class="row">
      <RecipesCardList :recipes="this.recipes"></RecipesCardList>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import RecipesCardList from "@/components/RecipesCardList.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "MyRecipes",
  props: {
    ingredients: String,
  },
  data() {
    return {
      recipes: ref([]),
    };
  },
  mounted() {
    this.loadMyRecipes();
  },
  methods: {
    loadMyRecipes() {
      const endpoint =
        process.env.VUE_APP_BACKEND_BASE_URL + "/api/v1/likedRecipes/true";
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(endpoint, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          this.recipes = [];
          result.forEach((recipe) => {
            this.recipes.push(recipe);
          });
        })
        .catch((error) => console.log("error", error));
    },
    likeRecipe(recipe) {
      const endpoint =
        process.env.VUE_APP_BACKEND_BASE_URL +
        "/api/v1/like?id=" +
        recipe.id +
        "&liked=" +
        !recipe.liked;
      const requestOptions = {
        method: "POST",
        redirect: "follow",
      };

      fetch(endpoint, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .then(() => this.loadMyRecipes())
        .catch((error) => console.log("error", error));
      // this.loadMyRecipes();
    },
  },
  components: { RecipesCardList },
};
</script>

<style scoped>
#like-button {
  font-size: 10px;
}
</style>
