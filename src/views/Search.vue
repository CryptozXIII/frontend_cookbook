<template>
  <div class ="search">
  <h1>look for recipes here</h1>
  <Searchbar wrap/>
  </div>
</template>

<script>
import Searchbar from '@/components/Searchbar'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Search',
  components: { Searchbar },
  props: {
    msg: String
  },
  data () {}
}
</script>

<style scoped>

</style>
