<template>
  <div class="container-fluid">
    <div class="row">
        <div class="card mx-auto mt-3" style="width: 60rem; height: 15rem">
          <div class="row g-0">
            <div class="col-md-5">
              <img :alt="recipe.title" :src="recipe.image" class="img-fluid"/>
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <h5 class="card-title" v-html="recipe.name" @click="goToRecipe(recipe.id)"></h5>
                <p class="summary" style="font-size: small" v-html="recipe.summary"></p>
                  <div class="container">
                  <div class="row">
                    <div class="col">
                      <p class="card-text">
                      </p>
                    </div>
                    <div class="col-md-2">
                      <button id="like-button" type="button" class="btn btn-primary" @click="likeRecipe(recipe)">Save</button>
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
      recipeLiked: null,
      title: '',
      image: '',
      summary: {}
    }
  },
  // watch: {
  //   ingredients () {
  //     console.log(this.ingredients)
  //     this.updateCards()
  //     // this.setSummary()
  //   }
  // },
  methods: {
    goToRecipe (id) {
      this.$router.push('/recipe/' + id)
    },
    // updateCards () {
    //   // recipe By Name
    //   const requestOptions = {
    //     method: 'GET',
    //     redirect: 'follow'
    //   }

    //   fetch('http://localhost:8080/api/v1/recipeByName/tofu', requestOptions)
    //     .then(response => response.json())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error))
    // },
    likeRecipe (recipe) {
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const raw = JSON.stringify({
        name: recipe.name,
        summary: recipe.summary,
        image: recipe.image,
        steps: recipe.steps,
        ingredients: recipe.ingredients,
        liked: !recipe.liked
      })

      const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch('http://localhost:8080/api/v1/recipe/' + recipe.id, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    }
  }
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
   -webkit-line-clamp: 7;  /*number of lines to show*/
           line-clamp: 7;
   -webkit-box-orient: vertical;
}
.card-title:hover {
  text-decoration: underline;
}

</style>
