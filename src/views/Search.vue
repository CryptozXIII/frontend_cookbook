<template>
  <div class="search">
    <br />
    <div class="row">
      <!-- <h1>Find Recipes</h1> -->
      <searchbar @onEmitIngredients="messageSearchbar"></searchbar>
    </div>
    <br />
    <div class="row">
      <RecipesCardList :recipes="this.recipes"></RecipesCardList>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Searchbar from "@/components/Searchbar";
import RecipesCardList from "@/components/RecipesCardList.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",
  components: {
    Searchbar,
    RecipesCardList,
  },
  data() {
    return {
      recipes: ref([]),
      recipeId: "",
      recipeLiked: Boolean,
      input: "",
    };
  },
  watch: {
    input() {
      console.log(this.input);
      this.updateCards();
    },
  },
  methods: {
    messageSearchbar(message) {
      this.input = message;
    },
    updateCards() {
      // recipe By Name
      const endpoint =
        process.env.VUE_APP_BACKEND_BASE_URL +
        "/api/v1/recipeByName/" +
        this.input;
      this.recipes = [];
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(endpoint, requestOptions)
        .then((response) => response.json())
        .then((result) =>
          result.forEach((recipe) => {
            this.recipes.push(recipe);
          })
        )
        .catch((error) => console.log("error", error));
    },
    loadRecipes() {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + "/api/v1/recipe";
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
      console.log("calling likeRecipe() from Search Component");
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
        .then(() => this.loadRecipes())
        .catch((error) => console.log("error", error));
      // this.loadRecipes();
    },
  },
  mounted() {
    this.loadRecipes();
  },
};
</script>

<style scoped></style>
