<template>
  <div class="container">

    <div class="row">
      <img width="1110" height="701" data-main-image="" sizes="(min-width: 1110px) 1110px, 100vw" decoding="async"
        :src=recipe.image :alt=recipe.name style="object-fit: cover; opacity: 1;">
    </div>

    <section>
      <section>
       <div class="container">
         <h2 class="recipe-name">{{ recipe.name }}</h2>
        <div>
          <p class="summary" v-html="recipe.summary"></p>
        </div>
  </div>
        <div class="row text-lg-start">
          <div class="col-4">
            <h3>Zutaten</h3>
              <div class="instruction">
                <ul v-for="ingredient in recipe.ingredients" :key="ingredient.id">
                  <li>
                    {{ ingredient.name }}
                  </li>
                </ul>
              </div>
          </div>
          <div class="col-8">
            <h3>Zubereitung</h3>
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
// import RecipeInstructions from '@/components/RecipeInstructions.vue'
// import RecipeIngredients from '@/components/RecipeIngredients.vue'
// import RecipeSummary from '@/components/RecipeSummary.vue'
// import RecipeCard from '@compnents/RecipeCard.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Recipe',
  computed: {
    setRecipeId () {
      // console.log(parseInt(this.$route.params.id))
      return parseInt(this.$route.params.id)
    }

  },
  data () {
    return {
      recipe: {},
      recipeId: ''
    }
  },
  methods: {
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    console.log(this.recipeId)

    fetch('http://localhost:8080/api/v1/getRecipe/3', requestOptions)
      .then(response => response.json())
      .then(result => {
        for (const key in result) {
          this.recipe[key] = result[key]
        }
      })
      .catch(error => console.log('error', error))
    console.log(this.recipe)
  }
}
</script>

<style lang="scss" scoped>
</style>
