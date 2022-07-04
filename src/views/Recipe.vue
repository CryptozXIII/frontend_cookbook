<template>
  <div class="container">
 <br/>
  <br/>
    <section>
      <section>
       <div class="container">
         <h2 class="recipe-name">{{ recipe.name }}</h2>
        <div>
            <br/>
          <p class="summary" v-html="recipe.summary"></p>
        </div>
        <br/>
  </div>
  <div class="row">
      <img width="1110" height="701" data-main-image="" sizes="(min-width: 1110px) 1110px, 100vw" decoding="async"
        :src=recipe.image :alt=recipe.name style="object-fit: cover; opacity: 1;">
    </div>
        <br/>
        <div class="row text-lg-start">
          <div class="col-4">
            <h3>Zutaten</h3>
             <br/>
              <div class="instruction">
                <ul v-for="ingredient in recipe.ingredients" :key="ingredient.id">
                  <li v-if="ingredient.amount == 0">
                    {{ ingredient.unit }} {{ ingredient.name }}
                  </li>
                  <li v-else>
                    {{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.name }}
                  </li>
                </ul>
              </div>
          </div>
          <div class="col-8">
            <h3>Zubereitung</h3>
             <br/>
            <div class="container">
    <div class="row">
          <div>
            <ol>
              <li v-for="step in recipe.steps" :key="step.number">
                <p>
                  {{ step.step }}
                </p>
              </li>
            </ol>
          </div>
    </div>
  </div>
          </div>
        </div>
      </section>
    </section>
  </div>

</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Recipe',
  data () {
    return {
      recipe: {
    // name: "Tofu süß-sauer mit Reis",
    // summary: "Vielleicht habt ihr von Tofu süß-sauer noch nie gehört, aber Hähnchen süß-sauer kennt sicher jeder – selbst wenn ihr es nicht gegessen gehabt, dann doch immerhin vom Lesen der Speisekarte eures chinesischen Lieblingsrestaurants. Das wichtigste an diesem Gericht ist aber auch nicht die Wahl des Proteins, sondern die Soße. Und deswegen funktioniert dieses Gericht auch wunderbar ohne Tier, aber mit Tofu. Obwohl ich so gerne frittiere, habe ich mich entschieden, eine Abendessen-freundlichere Variante des Gericht zu kochen. Statt den Tofu mit Teig zu ummanteln und goldbraun zu frittieren, werden die Tofuwürfel einfach in Speisestärke gewälzt und in der Pfanne angebraten. Das Ummanteln funktioniert übrigens super einfach, wenn ihr Tofu und Stärke zusammen in eine Tupperdose packt, den Deckel schließt und kräftig schüttelt. Um euch Extra-Abwasch zu ersparen, haben wir auch nur eine Pfanne für das Rezept verwendet, doch wenn ihr parallel Gemüse und Tofu in zwei Pfannen anbratet, steht euer Essen sogar noch früher auf dem Tisch. Für die Soße gibt es viele Varianten, in den klassischen Rezepten werden zum Beispiel Ketchup oder auch Pflaumensoße verwendet. Bei uns landet Orangensaft in der Soße, der fruchtig und leicht säuerlich ist. Tomatenmark und Sojasauce sorgen für eine geschmackliche Tiefe und Ingwer und Chiliflocken für eine leichte Schärfe. Wir immer könnt ihr aber ganz nach eigenem Geschmack würzen, mehr Schärfe, Säure oder auch Süße dazugeben.",
    // image:"https://assets.zuckerjagdwurst.com/l0luiaj4bkj4bpodgx43k3w1nl0h/1110/701/55/true/center/tofusuesssauer-24.webp?animated=false",
    // steps: [
    //     {
    //         number: 1,
    //         step: "Tofu rundum mit Küchenpapier trocken tupfen und danach in größere Würfel schneiden. In eine Schüssel mit Speisestärke geben und alles gut durchschwenken, bis die Tofuwürfel rundum ummantelt sind. Das funktioniert auch toll in einer verschließbaren Schüssel: beides reingeben, Deckel drauf und gut durchschütteln."
    //     },
    //     {
    //         number: 2,
    //         step: "Paprika und Zucchini in mundgerechte Stücke schneiden. Zwiebel klein schneiden und die Frühlingszwiebeln in feine Ringe schneiden. Den Reis erst unter fließendem Wasser abspülen und danach mit ca. 375 ml Wasser in einen Topf geben, leicht salzen und einmal aufkochen lassen. Danach mit Deckel ca. 15 Minuten kochen lassen, bis der Reis gar ist."
    //     },
    //     {
    //         number: 3,
    //         step: "Während der Reis kocht, Sesamöl in einer Pfanne erhitzen und zuerst den Tofu ca. 5 Minuten rundum anbraten, bis er gebräunt ist. Mit Sojasauce würzen und noch weitere 2-3 Minuten anbraten. Danach aus der Pfanne nehmen."
    //     },
    //     {
    //         number: 4,
    //         step: "Nun die Zwiebel in die Pfanne geben und ca. 2-3 Minuten anschwitzen, bis sie glasig wird. Paprika und die Zucchini dazugeben, mit Salz und Pfeffer würzen und alles ca. 8-10 Minuten anbraten, bis das Gemüse weich, aber noch leicht knackig ist."
    //     },
    //     {
    //         number: 5,
    //         step: "Parallel dazu ein paar Cashewkerne in einer fettfreien Pfanne rösten. Danach aus der Pfanne nehmen und klein hacken fürs Servieren später."
    //     },
    //     {
    //         number: 6,
    //         step: "In der Zwischenzeit die Soße vorbereiten: Apfelessig, Orangensaft, braunen Zucker, Tomatenmark und Sojasauce verrühren. Frischen Ingwer direkt in die Schüssel reiben und Chiliflocken dazugeben. Alles gut verrühren. Wasser mit Stärke separat anrühren und dann ebenfalls zur Soße geben."
    //     },
    //     {
    //         number: 7,
    //         step: "In der Zwischenzeit die Soße vorbereiten: Apfelessig, Orangensaft, braunen Zucker, Tomatenmark und Sojasauce verrühren. Frischen Ingwer direkt in die Schüssel reiben und Chiliflocken dazugeben. Alles gut verrühren. Wasser mit Stärke separat anrühren und dann ebenfalls zur Soße geben."
    //     },
    //     {
    //         number: 8,
    //         step: "Tofu süß-sauer mit Reis servieren und zum Schluss mit Frühlingszwiebeln, Sesam und gerösteten Cashewkernen bestreuen."
    //     }
    // ],
    // ingredients: [
    //     {
    //         name: "Tofu",
    //         amount: 400 ,
    //         unit: "g"
    //     },
    //      {
    //         name: "Speisestärke",
    //         amount: 2,
    //         unit: "EL"
    //     },
    //      {
    //         name: "Paprikaschoten",
    //         amount: 2,
    //         unit: ""
    //     },
    //      {
    //         name: "Zucchini",
    //         amount: 150 ,
    //         unit: "g"
    //     },
    //      {
    //         name: "Zwiebeln",
    //         amount: 2,
    //         unit: ""
    //     },
    //      {
    //         name: "Frühlingszwiebeln",
    //         amount: 2,
    //         unit: ""
    //     },
    //      {
    //         name: "Reis",
    //         amount: 150,
    //         unit: "g"
    //     },
    //      {
    //         name: "Walnüsse",
    //         amount: 150,
    //         unit: "g"
    //     },
    //      {
    //         name: "Wasser",
    //         amount: 375 ,
    //         unit: "ml"
    //     },
    //      {
    //         name: "Sojasauce",
    //         amount: 0.5,
    //         unit: "TL"
    //     },
    //      {
    //         name: "Sesamöl zum Braten",
    //         amount: null,
    //         unit: ""
    //     },
    //      {
    //         name: "Sesam zum Servieren",
    //         amount: null,
    //         unit: ""
    //     },
    //      {
    //         name: "Cashewnüsse zum Servieren",
    //         amount: null,
    //         unit: ""
    //     },
    //      {
    //         name: "Salz",
    //         amount: null,
    //         unit: ""
    //     }
    //     ,
    //      {
    //         name: "Pfeffer",
    //         amount: null,
    //         unit: ""
    //     },
    //      {
    //         name: "Apfelessig",
    //         amount: 100,
    //         unit: "ml"
    //     },
    //      {
    //         name: "Orangensaft",
    //         amount: 4,
    //         unit: "EL"
    //     },
    //      {
    //         name: "brauner Zucker",
    //         amount: 50 ,
    //         unit: "g"
    //     },
    //      {
    //         name: "Tomatenmar",
    //         amount: 2,
    //         unit: "EL "
    //     },
    //      {
    //         name: "Sojasauce",
    //         amount: 2,
    //         unit: "TL"
    //     },
    //      {
    //         name: "Ingwer",
    //         amount: 15 ,
    //         unit: "g"
    //     },
    //      {
    //         name: "Chiliflocken",
    //         amount: 1.5,
    //         unit: "EL"
    //     },
    //      {
    //         name: "Speisestärke",
    //         amount: 1.5,
    //         unit: 'EL'
    //     }
    // ],
    // liked :true
}
    }
  },
  computed: {
    orderSteps() {
      return _.orderBy(this.recipe.steps, 'number', 'desc')
    }
  },
  mounted () {
    this.recipeId = this.$route.params.id
    console.log(this.recipeId)
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/getRecipe/' + this.recipeId
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => {
        for (const key in result) {
          this.recipe[key] = result[key]
        }
      })
      .catch(error => console.log('error', error))
    console.log(this.recipe)
  }
}
</script>

<style scoped>
.recipe_name {
  text-underline-position: under;
}
</style>
