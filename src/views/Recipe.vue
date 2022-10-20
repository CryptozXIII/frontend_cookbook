<template>
  <div class="container">
    <br />
    <br />
    <section>
      <section>
        <div class="container">
          <h2 class="recipe-name">{{ recipe.name }}</h2>
          <div>
            <br />
            <p class="summary" v-html="recipe.summary"></p>
          </div>
          <br />
        </div>
        <div class="row">
          <img
            width="1110"
            height="701"
            data-main-image=""
            sizes="(min-width: 1110px) 1110px, 100vw"
            decoding="async"
            :src="recipe.image"
            :alt="recipe.name"
            style="object-fit: cover; opacity: 1"
          />
        </div>
        <br />
        <div class="row text-lg-start">
          <div class="col-4">
            <h3>Zutaten</h3>
            <br />
            <div class="instruction">
              <ul v-for="ingredient in recipe.ingredients" :key="ingredient.id">
                <li v-if="ingredient.amount == 0">
                  {{ ingredient.unit }} {{ ingredient.name }}
                </li>
                <li v-else>
                  {{ ingredient.amount }} {{ ingredient.unit }}
                  {{ ingredient.name }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col-8">
            <h3>Zubereitung</h3>
            <br />
            <div class="container">
              <div class="row">
                <div>
                  <ol>
                    <li v-for="step in recipe.steps" :key="step.number">
                      <p>
                        {{ step.step }}
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Recipe",
  data() {
    return {
      recipe: {},
      sortedRecipe: {},
    };
  },
  computed: {
    orderSteps() {
      return _.orderBy(this.recipe.steps, "number", "asc");
    },
  },
  mounted() {
    this.recipeId = this.$route.params.id;
    console.log(this.recipeId);
    const endpoint =
      process.env.VUE_APP_BACKEND_BASE_URL +
      "/api/v1/getRecipe/" +
      this.recipeId;
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(endpoint, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        for (const key in result) {
          this.recipe[key] = result[key];
        }
      })
      .catch((error) => console.log("error", error));
  },
};
</script>

<style scoped>
.recipe_name {
  text-underline-position: under;
}
</style>
