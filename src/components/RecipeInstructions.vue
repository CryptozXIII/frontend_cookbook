<template>
  <div class="container">
    <div class="row" v-for="instruction in instructions" :key="instruction.name">
      <ul>
        <li>
          <h5>{{ instruction.name }}</h5>
          <div>
            <ol>
              <li v-for="step in instruction.steps" :key="step.number">
                <p>
                  {{ step.step }}
                </p>
              </li>
            </ol>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeInstructions',
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

<style scoped>

</style>
