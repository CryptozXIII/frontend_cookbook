<template>
  <div class="home">
    <HelloWorld msg="Willkommen zu deinem persönlichem Kochbuch"/>
    <img alt="Food" src="../assets/flat-lay-batch-cooking-composition_23-2148765597.png" width="760" height="">


    <p><br>
      <br>
    </p>
    <p align="center"> Hier findest du deine Lieblingsrezepte an einem Platz<br>
      Gehe auf den Tab 'Search' und finde dort deine neuen Lieblingsgerichte! <br>
      Dort kannst du  Rezepte per klick speichern, die dann in 'my Recipes' angezeigt werden <br>
      Das 'Recipe of the Day' wechselt regelmäßig und sind nur für eine limitierte Zeit da. So sollen unsere Nutzer motiviert werden neues auszuprobieren :)
    </p>
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


<style scoped>
p{
  left: v-bind(p);
  font-size: 20px;
}
</style>

