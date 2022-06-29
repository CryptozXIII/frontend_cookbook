<template>
  <div class="container">
        <div>
          <p class="summary" v-html="summary.summary"></p>
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
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/recipeSummary/' + this.id
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => {
        for (const key in result) {
          this.summary[key] = result[key]
        }
      })
      .catch(error => console.log('error', error))

    console.log(this.summary)
  },
  props: {
    id: Number
  }
}
</script>

<style scoped>
.summary {
  font-size: medium;
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 6; /* number of lines to show */
           line-clamp: 6;
   -webkit-box-orient: vertical;
}

</style>
