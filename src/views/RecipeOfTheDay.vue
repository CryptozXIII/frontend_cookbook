<template>
  <div class="container">
    <br />
    <br />
    <section>
      <section>
        <div class="container">
          <h2 class="recipe-name">{{ recipe.name }}</h2>
          <div>
            <br />
            <p class="summary" v-html="recipe.summary"></p>
          </div>
          <br />
        </div>
        <div class="row">
          <img
            width="1110"
            height="701"
            data-main-image=""
            sizes="(min-width: 1110px) 1110px, 100vw"
            decoding="async"
            :src="recipe.image"
            :alt="recipe.name"
            style="object-fit: cover; opacity: 1"
          />
        </div>
        <br />
        <div class="row text-lg-start">
          <div class="col-4">
            <h3>Zutaten</h3>
            <br />
            <div class="instruction">
              <ul v-for="ingredient in recipe.ingredients" :key="ingredient.id">
                <li v-if="ingredient.amount == 0">
                  {{ ingredient.unit }} {{ ingredient.name }}
                </li>
                <li v-else>
                  {{ ingredient.amount }} {{ ingredient.unit }}
                  {{ ingredient.name }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col-8">
            <h3>Zubereitung</h3>
            <br />
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
  <!-- <div class="container">

    <div class="row">
      <img width="1110" height="701" data-main-image="" sizes="(min-width: 1110px) 1110px, 100vw" decoding="async"
        src="../assets/buffalomeatballs-03.webp" alt="" style="object-fit: cover; opacity: 1;">
    </div>

    <section>
      <section>
        <h2><span>Vegane Buffalo Meatballs mit
            Schnittlauch-Dip</span></h2>
        <div>
          <div>ca. 10 Bällchen</div>
          <div>45 Minuten</div>
        </div>

        <div>
          <p>Als ich noch nicht Veganerin war, spielten Fleischbällchen in meinem Leben eigentlich keine große Rolle.
            Mittlerweile sieht das anders aus und ich LIEBE vegane, herzhafte Bällchen in jeglichen Varianten. Auf
            unserem Blog sieht man sie deshalb auch in unterschiedlichsten Zusammensetzungen: auf Basis von
            Kidneybohnen,
            Gemüse,
            veganem
            Hack, aber auch bequemere Varianten wie gekaufte
            pflanzliche Bällchen oder solchen zum Anrühren aus einer
            Trockenmischung. In unserem Kochbuch
            dürfen sie natürlich auch nicht fehlen – dann werden wir sie aus Pilzen zubereiten.
          </p>
          <p>Und heute? Heute basieren unsere „Fleischbällchen” auf weißen Bohnen und Seitan und spielen die
            wohlverdiente Hauptrolle auf dem Teller. „Buffalo Meatballs“ sind ein beliebtes Gericht der amerikanischen
            Küche, man kennt den Begriff „Buffalo“ aber wohl eher von den berühmten „Buffalo Wings“. Beide vereint die
            Soße, die im Prinzip auf Essig, Butter und Cayenne-Chilischoten basiert. Einmal angerührt kann man in dieser
            Soße natürlich alles wenden – also auch vegane Bällchen. Die Soße ist praktischerweise in Nullkommanix
            fertig, weil alle Zutaten lediglich verrührt und erwärmt werden. Fast alle Rezepte verwenden „Frank’s Hot
            Sauce“ dafür, die man in den USA überall easypeasy bekommt. Da die wenigsten von uns sie zu Hause haben,
            habe ich mich dazu entschieden, das Rezept ohne sie zu machen. Ich stolperte bei meiner Recherche über
            dieses Rezept, auf dem jetzt auch dieses basiert. Ich fand es jedoch wirklich nicht
            scharf genug und habe deshalb etwas Tabasco dazugegeben. Wer es nicht scharf mag, kann sie aber auch
            weglassen.</p>
          <p>Die Soße ist also schnell zubereitet, so dass unsere pflanzlichen Bällchen wie versprochen die meiste
            Aufmerksamkeit bekommen. Sie werden gedämpft UND gebacken, wodurch sie innen zart und außen knusprig werden,
            bevor sie ab in ihr Bad aus scharfer Soße dürfen. Wer keinen Zerkleinerer hat, kann die Zutaten für die
            Bällchen auch grob mit einem Pürierstab verarbeiten – durch den Zerkleinerer wird die Masse aber herrlich
            stückig und nicht so glatt. Solltet ihr also einen Pürierstab verwenden, achtet gern darauf, dass ihr die
            Zutaten nicht komplett cremig verarbeitet.<br>Klassisch werden Buffalo Meatballs mit einem cremigen Dip und
            Staudensellerie- oder Möhrensticks serviert. Macht das aber ganz nach Geschmack – ich persönlich würde zum
            Beispiel aufgeschnittene Gurken bevorzugen.</p>
        </div>

        <div class="row text-lg-start">
          <div class="col-4">
            <h3>Zutaten</h3>
            <div>
              <div>
                <h4>Für die Bällchen:</h4>
                <ul>
                  <li>100 g weiße Bohnen aus der Dose
                    (abgetropft)</li>
                  <li>1 Zwiebel</li>
                  <li>1 Knoblauchzehe</li>
                  <li>50 g Walnüsse</li>
                  <li>1 TL Senf</li>
                  <li>1 EL Sojasoße</li>
                  <li>1 EL Tomatenmark</li>
                  <li>1 TL Rote-Bete-Saft (optional)
                  </li>
                  <li>1 EL Kichererbsenmehl</li>
                  <li>75 g Seitanfix</li>
                  <li>0.5 TL edelsüßes Paprikapulver
                  </li>
                  <li>0.5 TL getrockneter Majoran
                  </li>
                  <li>Salz</li>
                  <li>Pfeffer</li>
                </ul>
                <h4>Für die Soße:</h4>
                <ul>
                  <li>100 g Ketchup</li>
                  <li>2 EL Apfelessig</li>
                  <li>1 EL Ahornsirup</li>
                  <li>1 TL vegane Worcestershiresoße
                  </li>
                  <li>1 Prise Cayennepfeffer</li>
                  <li>0.5 TL Knoblauchpulver</li>
                  <li>0.5 TL Zwiebelpulver</li>
                  <li>2 EL vegane Butter</li>
                  <li>Tabasco nach Geschmack (oder
                    eine andere Hot Sauce)</li>
                  <li>Salz</li>
                  <li>Pfeffer</li>
                </ul>
                <h4>Für den Schnittlauch-Dip:</h4>
                <ul>
                  <li>200 g pflanzlicher Quark</li>
                  <li>150 g veganer Frischkäse</li>
                  <li>10 g Schnittlauch</li>
                  <li>0.5 TL Zwiebelpulver</li>
                  <li>0.25 TL Knoblauchpulver</li>
                  <li>0.5 Zitrone (Abrieb)</li>
                  <li>Salz</li>
                  <li>Pfeffer</li>
                </ul>
                <h4>Zum Servieren:</h4>
                <ul>
                  <li>Stangensellerie, Möhre oder
                    Gurke</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-8">
            <h3>Zubereitung</h3>
            <div>
              <div>
                <ol>
                  <li>
                    <p>Für die veganen Bällchen die weißen Bohnen, geschälte Zwiebel, Knoblauch und Walnüsse in einen
                      Zerkleinerer geben und so lange verarbeiten, bis alles zerkleinert, aber noch leicht stückig ist.
                      Senf, Sojasoße, Tomatenmark und (falls verwendet) Rote-Bete-Saft dazugeben und nochmal kurz weiter
                      verarbeiten, bis eine stückige Paste entsteht. Diese in eine große Schüssel geben.</p>
                  </li>
                  <li>
                    <p>In einer zweiten Schüssel Kichererbsenmehl, Seitanfix, Paprikapulver, getrockneten Majoran, Salz
                      und Pfeffer vermengen. Die Mischung zur großen Schüssel geben und alles vorsichtig verkneten, bis
                      ein Teig entsteht. Die Masse sollte sich formen lassen, nicht auseinanderfallen, aber auch kein
                      zäher, zu kompakter Teig sein.</p>
                  </li>
                  <li>
                    <p>Den Ofen auf 200°C (Umluft) vorheizen. Aus dem Teig ca. 8-10 Bällchen (jeweils ca. 30-35 g)
                      formen. Wasser in einem großen Topf erhitzen und die Bällchen ca. 7-8 Minuten über köchelndem
                      Wasser dämpfen. Danach auf ein mit Backpapier ausgelegtes Backblech (oder in eine eingefettete
                      Auflaufform) legen und ca. 15 Minuten backen, bis die Bällchen rundum gebräunt sind. Dabei
                      mehrmals wenden.</p>
                  </li>
                  <li>
                    <p>In der Zwischenzeit für den Dip veganen Quark und Frischkäse in einer Schüssel verrühren.
                      Schnittlauch fein hacken und dazugeben. Den Dip mit Zwiebel- und Knoblauchpulver, Zitronenabrieb,
                      Salz und Pfeffer abschmecken und bis zum Servieren in den Kühlschrank stellen.</p>
                  </li>
                  <li>
                    <p>Für die Soße Ketchup, Apfelessig, Ahornsirup, vegane Worcestershiresoße, Cayennepfeffer,
                      Knoblauch- und Zwiebelpulver in einer Schüssel verrühren und mit Salz und Pfeffer würzen. Danach
                      so viel Tabasco (oder eine andere Hot Sauce) dazugeben, bis die Soße für euren eigenen Geschmack
                      scharf genug ist. Wer nicht gern scharf ist, kann sie auch komplett weglassen.</p>
                  </li>
                  <li>
                    <p>Die Soße in eine Pfanne geben und kurz aufköcheln lassen. Jetzt die vegane Butter einrühren, die
                      Hitze auf kleine Stufe reduzieren und die veganen Bällchen in die Pfanne geben. Gut in der Soße
                      schwenken, bis sie komplett davon ummantelt sind.</p>
                  </li>
                  <li>
                    <p>Die veganen Buffalo Meatballs mit dem Schnittlauch-Dip und aufgeschnittenem Sellerie, Möhren oder
                      Gurken servieren.</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div> -->
</template>

<script setup>
import { ref, onMounted } from "vue";
const recipes = [];
const recipe = ref({});

onMounted(() => {
  loadRecipes();
});

async function loadRecipes() {
  const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + "/api/v1/recipe";
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  await fetch(endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      recipes.value = [];
      result.forEach((rec) => {
        recipes.push(rec);
      });
    })
    .catch((error) => console.log("error", error));
  randomRecipe();
}

function randomRecipe() {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  recipe.value = recipes[randomIndex];
}
</script>

<style scoped>
/* .recipe_name {
  text-underline-position: under;
} */
</style>
