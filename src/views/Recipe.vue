<template>
  <div class="container">

    <div class="row">
      <img width="1110" height="701" data-main-image="" sizes="(min-width: 1110px) 1110px, 100vw" decoding="async"
        src="../assets/buffalomeatballs-03.webp" alt="" style="object-fit: cover; opacity: 1;">
    </div>

    <section>
      <section>
        <RecipeSummary></RecipeSummary>
        <div class="row text-lg-start">
          <div class="col-4">
            <h3>Zutaten</h3>
            <RecipeIngredients></RecipeIngredients>
          </div>
          <div class="col-8">
            <h3>Zubereitung</h3>
            <RecipeInstructions></RecipeInstructions>
          </div>
        </div>
      </section>
    </section>
  </div>

</template>

<script>
import RecipeInstructions from '@/components/RecipeInstructions.vue'
import RecipeIngredients from '@/components/RecipeIngredients.vue'
import RecipeSummary from '@/components/RecipeSummary.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Recipe',
  data () {
    return {
    }
  },
  methods: {
  },
  components: { RecipeInstructions, RecipeIngredients, RecipeSummary }
}
</script>

<style lang="scss" scoped>
</style>
