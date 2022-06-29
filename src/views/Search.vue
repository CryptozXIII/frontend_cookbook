<template>
    <div class="search">
        <div class="row">
            <h1>look for recipes here</h1>
            <Searchbar @onEmitIngredients="messageSearchbar"></Searchbar>
        </div>
        <div class="row">
            <RecipeCard :ingredients="searchBarIngredients"></RecipeCard>
        </div>
    </div>
</template>

<script>
import Searchbar from '@/components/Searchbar'
import RecipeCard from '@/components/RecipeCard'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Search',
  components: {
    Searchbar,
    RecipeCard
  },
  data () {
    return {
      results: [],
      searchBarIngredients: ''
    }
  },
  methods: {
    messageSearchbar (message) {
      this.searchBarIngredients = message
    }
  }
}
</script>

<style scoped></style>
