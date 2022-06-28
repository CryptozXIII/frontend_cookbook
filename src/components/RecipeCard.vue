<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Dynamische View -->
      <div v-for="recipe in recipes" :key="recipe.id" class="col">
        <div class="card mx-auto mt-3" style="width: 60rem; height: 15rem">
          <div class="row g-0">
            <div class="col-md-4">
              <img :alt="recipe.title" :src="recipe.image" class="img-fluid" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title" v-html="recipe.title"></h5>
                <p class="card-text" style="font-size: small" v-html="recipe.summary"></p>
                <p class="card-text">
                  <small class="text-muted">Likes: {{ recipe.likes }}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipesCard',
  props: {
    ingredients: String
  },
  data () {
    return {
      recipes: []
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(
      'http://localhost:8080/recipeByIngredients/' + this.ingredients,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.forEach((recipe) => {
          this.recipes.push(recipe)
        })
      )
      .catch((error) => console.log('error', error))

    console.log(this.recipes)
  }
  // methods: {
  //   updateCards () {
  //     const requestOptions = {
  //       method: 'GET',
  //       redirect: 'follow'
  //     }
  //
  //     fetch(
  //       'http://localhost:8080/recipeByIngredients/' + this.ingredients,
  //       requestOptions
  //     )
  //       .then((response) => response.json())
  //       .then((result) =>
  //         result.forEach((recipe) => {
  //           this.recipes.push(recipe)
  //         })
  //       )
  //       .catch((error) => console.log('error', error))
  //
  //     console.log(this.recipes)
  //   }
  // }
}
</script>

<style lang="scss" scoped></style>
