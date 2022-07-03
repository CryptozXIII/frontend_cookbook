<template>
  <h1> Hier sind deine Lieblingsrezepte </h1>
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
                <!-- <p class="card-text" style="font-size: small" v-html="recipe.summary"></p> -->
                <CardSummary :id="recipe.id"></CardSummary>
                  <div class="container">
                  <div class="row">
                    <div class="col">
                      <p class="card-text">
                        <small class="text-muted">Likes: {{ recipe.likes }}</small>
                      </p>
                    </div>
                    <div class="col-md-2">
                      <button id="like-button" type="button" class="btn btn-primary" @click="removupdateCards()">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import CardSummary from '@/components/CardSummary.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'MyRecipes',
  props: {
    ingredients: String
  },
  data () {
    return {
      recipes: [
        // {
        //   id: 661447,
        //   title: 'Square Deviled Eggs',
        //   image: 'https://spoonacular.com/recipeImages/661447-312x231.jpg',
        //   missedIngredients: [
        //     {
        //       id: 1017,
        //       amount: 1.0,
        //       unit: 'serving',
        //       name: 'cream cheese',
        //       image: 'https://spoonacular.com/cdn/ingredients_100x100/cream-cheese.jpg',
        //       vegetarian: false,
        //       vegan: false
        //     },
        //     {
        //       id: 10151,
        //       amount: 1.0,
        //       unit: 'serving',
        //       name: 'ham',
        //       image: 'https://spoonacular.com/cdn/ingredients_100x100/ham-whole.jpg',
        //       vegetarian: false,
        //       vegan: false
        //     }
        //   ],
        //   usedIngredients: [
        //     {
        //       id: 1123,
        //       amount: 1.0,
        //       unit: 'serving',
        //       name: 'eggs',
        //       image: 'https://spoonacular.com/cdn/ingredients_100x100/egg.png',
        //       vegetarian: false,
        //       vegan: false
        //     }
        //   ],
        //   unusedIngredients: [],
        //   likes: 25,
        //   aggregateLikes: 0,
        //   vegan: false,
        //   vegetarian: false,
        //   summary: null,
        //   extendedIngredients: null,
        //   servings: 0,
        //   readyInMinutes: 0,
        //   dishTypes: null
        // }
      ],
      recipeId: '',
      recipeLiked: Boolean
    }
  },
  watch: {
    ingredients () {
      console.log(this.ingredients)
      this.updateCards()
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080/api/v1/recipe', requestOptions)
      .then(response => response.json())
      .then((result) => result.forEach((recipe) => {
        this.recipes.push(recipe)
      }))
      .catch(error => console.log('error', error))
  },
  methods: {
    updateCards () {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }

      fetch('http://localhost:8080/api/v1/recipe', requestOptions)
        .then(response => response.json())
        .then((result) => result.forEach((recipe) => {
          this.recipes.push(recipe)
        }))
        .catch(error => console.log('error', error))

      this.removeRecipe()
    },
    removeRecipe () {
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      }

      fetch('http://localhost:8080/api/v1/recipe/56', requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    }
  }
  // components: { CardSummary }
}
</script>

<style scoped>
#like-button {
  font-size: 10px;
}
</style>
