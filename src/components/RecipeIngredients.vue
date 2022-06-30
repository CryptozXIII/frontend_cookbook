<template>
  <div>
    <div class="instruction" v-for="instruction in instructions" :key="instruction.name">
          <h4 class="instruction-name">{{ instruction.name }}</h4>
      <ul v-for="step in instruction.steps" :key="step.name">
        <li v-for="ingredient in step.ingredients" :key="ingredient.id">
          {{ ingredient.name }}
        </li>
      </ul>
    </div>
  </div>
  <!-- <div class="container">
    <ul class="instruction" v-for="instruction in instructions" :key="instruction.name">
      <li>
        <h5 class="instruction-name">{{ instruction.name }}</h5>
        <ol>
          <li class="steps" v-for="step in instruction.steps" :key="step.name">
          <ul class="ingredients" v-for="ingredient in step.ingredients" :key="ingredient.id">
            <li>{{ ingredient.name }}</li>
          </ul>
          </li>
        </ol>
      </li>
    </ul>
  </div> -->
</template>

<script>
export default {
  data () {
    return {
      instructions: [
      ]
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    this.instructions = []
    fetch('http://localhost:8080/getRecipeInstructions/324694', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach((step) => {
        this.instructions.push(step)
      }))
      .catch(error => console.log('error', error))
    console.log(this.instructions)
  }
}

</script>

<style lang="scss" scoped>
</style>
