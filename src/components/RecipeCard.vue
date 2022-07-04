<template>
  <div class="container-fluid">
    <div class="row">
      <div class="card mb-3 mx-auto" style="max-width: 800px;">
        <div class="row g-0">
          <div class="col-md-5">
            <img :src="recipe.image" class="img-fluid rounded-start" :alt="recipe.title">
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h5 class="card-title" v-html="recipe.name" @click="goToRecipe(recipe.id)"></h5>
              <p class="card-text" v-html="recipe.summary"></p>
              <!-- <div>
              </div> -->
              <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
               <div class="col-md-2">
                <like-button @click="likeRecipe(recipe)"></like-button>
                      <!-- <button id="like-button" type="button" class="btn btn-primary" @click="likeRecipe(recipe)">Save</button> -->
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LikeButton from '@/components/LikeButton.vue'

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
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/recipe/' + recipe.id
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

      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    }
  },
  components: {
    LikeButton
  }
}
</script>

<style scoped>
#like-button {
  font-size: 10px;
}
.card-text {
  font-size: small;
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 5;  /*number of lines to show*/
           line-clamp: 5;
   -webkit-box-orient: vertical;
}
.card-title:hover {
  text-decoration: underline;
}
.row>* {
  padding-left: 0%;
}

.card {
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border: 0;
}

</style>
