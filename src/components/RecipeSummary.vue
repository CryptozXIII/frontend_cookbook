<template>
  <div class="container">
    <h2 class="recipe-name"><span>{{ summary.title }}</span></h2>
        <div>
          <p v-html="summary.summary"></p>
        </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeInstructions',
  data () {
    return {
      summary: {}
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080/recipeSummary/324694', requestOptions)
      .then(response => response.json())
      .then(result => {
        for (const key in result) {
          this.summary[key] = result[key]
        }
      })
      .catch(error => console.log('error', error))

    console.log(this.summary)
  }
}
</script>

<style scoped>

</style>
