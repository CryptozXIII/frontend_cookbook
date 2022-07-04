<template>
  <div class="row">
    <input v-model="inputValue" @keyup.enter="emitIngredients" placeholder="Search Recipes" />
    <button type="button" class="btn btn-outline-secondary" @click="emitIngredients">Search</button>
  </div>
  <!-- <p>Ingredients: {{ inputValue }}</p> -->
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Searchbar',
  data () {
    return {
      inputValue: ''
    }
  },
  emits: ['onEmitIngredients'],
  methods: {
    emitIngredients () {
      this.$emit('onEmitIngredients', this.inputValue)
    }
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);

.row {
  width: auto;
  margin: auto;
}

input {
  margin: auto;
  display: block;
  width: 25rem;
}

button {
  margin: 10px;
  width: 5rem;
}

body {
  background: #f2f2f2;
  font-family: 'Open Sans', sans-serif;
}

.search {
  width: 100%;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid #00b4cc;
  border-right: none;
  padding: 5px;
  height: 50px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
}

.searchTerm:focus {
  color: #00b4cc;
}

.searchButton {
  width: 40px;
  height: 50px;
  border: 1px solid #00b4cc;
  background: #00b4cc;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

/*Resize the wrap to see the search bar change!*/
.wrap {
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

button {
  font-size: 13px;
  width: 75px;
  height: 30px;
}
</style>
