<template>
  <div class="container-fluid">
    <div class="row">
        <div class="card mx-auto mt-3" style="width: 60rem; height: 15rem">
          <div class="row g-0">
            <div class="col-md-4">
              <img :alt="recipe.title" :src="recipe.image" class="img-fluid" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title" v-html="recipe.title"></h5>
                <p class="card-text" style="font-size: small" v-html="recipe.summary"></p>
                  <div class="container">
                  <div class="row">
                    <div class="col">
                      <p class="card-text">
                      </p>
                    </div>
                    <div class="col-md-2">
                      <button id="like-button" type="button" class="btn btn-primary" @click="setSummary(recipe.id), likeRecipe(recipe.title, recipe.image, this.summary)">Save</button>
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

export default {
  name: 'RecipesCard',
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      recipes: [],
      recipeId: '',
      recipeLiked: null,
      title: '',
      image: '',
      summary: {}
    }
  },
  watch: {
    ingredients () {
      console.log(this.ingredients)
      this.updateCards()
      // this.setSummary()
    }
  },
  methods: {
    setSummary (id) {
      // for (let i = 0; i < this.recipes.length; i++) {
      //   console.log(this.recipes[i].id)
      // }
      // console.log(id)
      // this.recipeId = id.toString()
      // console.log(this.recipeId)
      // const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/recipeSummary/' + this.recipeId
      // const requestOptions = {
      //   method: 'GET',
      //   redirect: 'follow'
      // }

      // fetch(endpoint, requestOptions)
      //   .then(response => response.json())
      //   .then(result => {
      //     for (const key in result) {
      //       this.summary[key] = result[key]
      //     }
      //   })
      //   .catch(error => console.log('error', error))

      // console.log(this.summary)
    },
    updateCards () {
      // const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/recipeByIngredients/' + this.ingredients
      // const requestOptions = {
      //   method: 'GET',
      //   redirect: 'follow'
      // }
      // this.recipes = []
      // fetch(endpoint, requestOptions)
      //   .then((response) => response.json())
      //   .then((result) => result.forEach((recipe) => {
      //     this.recipes.push(recipe)
      //   }))
      //   .catch((error) => console.log('error', error))
    },
    likeRecipe (recipeTitle, recipeImage, recipeSummary) {
      // this.setSummary()
    //   console.log(recipeTitle)
    //   console.log(recipeImage)
    //   console.log(recipeSummary)

      //   if (this.recipeLiked || (this.recipeLiked = null)) {
      //     const requestOptions = {
      //       method: 'DELETE',
      //       redirect: 'follow'
      //     }

      //     fetch('http://localhost:8080/api/v1/recipe/' + this.recipe.id, requestOptions)
      //       .catch(error => console.log('error', error))

      //     this.recipeLiked = false
      //   } else {
      //     const myHeaders = new Headers()
      //     myHeaders.append('Content-Type', 'application/json')

      //     const raw = JSON.stringify({
      //       title: recipeTitle,
      //       summary: recipeSummary.summary,
      //       image: recipeImage,
      //       steps: [
      //       ],
      //       extendedIngredients: [
      //       ]
      //     })

      //     const requestOptions = {
      //       method: 'POST',
      //       headers: myHeaders,
      //       body: raw,
      //       redirect: 'follow'
      //     }

      //     fetch('http://localhost:8080/api/v1/recipe', requestOptions)
      //       .catch(error => console.log('error', error))

    //     this.recipeLiked = true
    //   }
    }
  }
  // components: { CardSummary }
}
</script>

<style scoped>
#like-button {
  font-size: 10px;
}
.summary {
  font-size: medium;
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 6;  /*number of lines to show*/
           line-clamp: 6;
   -webkit-box-orient: vertical;
}

</style>
