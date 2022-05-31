<template>
  <div class="home">
    <img alt="Patrick" src="../assets/Patrick.jpeg" width="250" height="300">
    <HelloWorld msg="Willkommen zu deinem persönlichem Kochbuch"/>
    <HelloWorld msg="Hier findest du deine Lieblingsrezepte an einem Platz"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
