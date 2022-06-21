<template>
    <div class="container-fluid">
        <div class="row">
            <!-- Dynamische View -->
            <div class="col" v-for="recipe in recipes" :key="recipe.id">
                <div class="card mx-auto mt-3" style="width: 1100px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img :alt="recipe.title" :src="require('@/assets/' + recipe.image)" class="img-fluid">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{{ recipe.title }}</h5>
                                <p class="card-text">{{ recipe.summary }}</p>
                                <p class="card-text"><small class="text-muted">Likes: {{ recipe.likes }}</small></p>
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
  data () {
    return {
      recipes: [
        // {
        //   id: 1,
        //   title: 'test',
        //   summary: 'dummary',
        //   likes: 2,
        //   image: 'buffalomeatballs-03.webp'
        // },
        // {
        //   id: 2,
        //   title: 'test2',
        //   summary: 'dummary2',
        //   likes: 22,
        //   image: 'buffalomeatballs-03.webp'
        // },
        // {
        //   id: 3,
        //   title: 'test3',
        //   summary: 'dummary3',
        //   likes: 23,
        //   image: 'buffalomeatballs-03.webp'
        // }
      ]
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080/recipeInformation/69', requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .then(result => result.forEach(recipe => {
        this.recipes.push(recipe)
      }))
      .catch(error => console.log('error', error))

    // fetch('http://localhost:8080/api/v1/recipe', requestOptions)
    //   .then(response => response.json())
    //   .then(result => console.log(result))
    //   .then(result => result.forEach(recipe => {
    //     this.recipes.push(recipe)
    //   }))
    //   .catch(error => console.log('error', error))
  }
}
</script>

<style lang="scss" scoped>
</style>
