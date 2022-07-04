<template>
  <h1> Hier sind deine Lieblingsrezepte </h1>
  <div class="container-fluid">
    <div class="row">
      <RecipesCardList :recipes="this.recipes"></RecipesCardList>
    </div>
  </div>
</template>

<script>
import RecipesCardList from '@/components/RecipesCardList.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'MyRecipes',
  props: {
    ingredients: String
  },
  data () {
    return {
      recipes: []
    }
  },
  // watch: {
  //   ingredients () {
  //     console.log(this.ingredients)
  //     this.updateCards()
  //   }
  // },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/likedRecipes/true'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then((result) => result.forEach((recipe) => {
        this.recipes.push(recipe)
      }))
      .catch(error => console.log('error', error))
  },
  methods: {
  },
  components: { RecipesCardList }
}
</script>

<style scoped>
#like-button {
  font-size: 10px;
}
</style>
