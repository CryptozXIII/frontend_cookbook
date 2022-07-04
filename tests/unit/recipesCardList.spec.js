import RecipesCardList from '@/components/RecipesCardList'
import recipeCard from '@/components/RecipeCard'
import { mount } from '@vue/test-utils'

describe("testing Recipescardlist.vue", ()=>{
  it('should render a recipe card for each saved recipe',()=>{
    //when
    const wrapper = mount(RecipesCardList,{
      propsData:{
        recipes: [
          {
            "id": 4,
            "name": "Gnocchi in Walnusssoße und Salbei-Butter",
            "image": "https://assets.zuckerjagdwurst.com/arb4660tfg6s8sx6nt3dlspnax27/2220/1402/55/true/center/gnocchi-27.webp?animated=false",
            "summary": "Hä, warum kaufen wir uns eigentlich Gnocchi bisher immer in Ready&Go-Form und machen die nicht selbst? Wir Doofis. Das ist so einfach und es erfüllt einen mit so viel Freude, die kleinen Dinger über eine Gabel zu rollen, um so den typischen Gnocchi-Look zu zaubern. Das Geheimnis, veganer Gnocchi ist übrigens ganz einfach: Lasst das Ei weg, hält trotzdem. Wahrscheinlich nimmt man dadurch etwas mehr Mehl, aber grundsätzlich ist es wirklich erstaunlich unkompliziert. Teig, kochen und wer mag noch braten. Dazu könnt ihr im Gegensatz zur Supermarkt-Variante auch noch ein bisschen kreativ werden und Spinat, aber auch Kürbis, Rote Bete und und und darin verarbeiten.",
            "ingredients": [
              {
                "id": 63,
                "name": "pflanzliche Butter",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 73,
                "name": "Spinat",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 70,
                "name": "Mehl",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 62,
                "name": "Zimt",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 74,
                "name": "Pfeffer",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 71,
                "name": "pflanzliche Milch",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 72,
                "name": "Salbeiblätter",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 67,
                "name": "Schalotte",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 64,
                "name": "pflanzliche Sahne",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 66,
                "name": "Kartoffeln (mehligkochend)",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 69,
                "name": "Muskat",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 61,
                "name": "Walnüsse",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 65,
                "name": "Knoblauchzehe",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 68,
                "name": "Salz",
                "amount": 0.0,
                "unit": null
              }
            ],
            "steps": [
              {
                "id": 29,
                "number": 6,
                "step": "Alle Gnocchi fertig gekocht? Dann schneidet eine Knoblauchzehe in Scheiben und zerlasst pflanzliche Butter in einer großen Pfanne. Gebt die Knoblauchscheiben und ca. 5 Salbeiblätter dazu, und bratet nach und nach eure Gnocchi über mittlerer Hitze an. Das dauert pro Portion auch nur 2-3 Min. bis sie leicht geröstet sind. So geht ihr mit allen Gnocchi vor und könnt zwischendurch immer wieder neue Salbeiblätter dazugeben und die alten herausfischen."
              },
              {
                "id": 30,
                "number": 7,
                "step": "Serviert eure Gnocchi mit gehackten Walnüssen und der aufgewärmten Walnusssoße."
              },
              {
                "id": 27,
                "number": 5,
                "step": "In einem großen Topf bringt ihr gesalzenes Wasser zum Kochen. Nun gebt ihr die Gnocchi nach und nach dazu. Nehmt nicht alle auf einmal, damit sie genug Platz im Topf haben, sondern macht das ganze lieber portionsweise. Sobald die Gnocchi oben schwimmen, könnt ihr sie mit einer Schöpfkelle herausfischen und auf einem Teller beiseitestellen."
              },
              {
                "id": 26,
                "number": 2,
                "step": "Kartoffeln schälen, in gleichgroße Stücke schneiden und in einen Topf geben. Mit Wasser auffüllen, bis die Kartoffeln bedeckt sind und salzen. Anschließend das Wasser zum Kochen bringen, danach die Temperatur reduzieren und die Kartoffeln weich kochen, so dass ihr easy mit einer Gabel hineinpiksen könnt. Das Wasser abgießen und die Kartoffeln zu Püree stampfen. Mit Salz, Pfeffer und Muskat abschmecken. Halbiert euer Kartoffelpüree und teilt es auf zwei Schüsseln auf."
              },
              {
                "id": 28,
                "number": 4,
                "step": "Nun teilt ihr das Mehl gleichmäßig auf die Kartoffelpüree-Hälften auf und verknetet beide zu einem Teig. Es kann sein, dass ihr etwas mehr oder weniger Teig braucht, er sollte nicht mehr an euren Händen kleben und es sollte möglich sein, jeden Teig zu dünnen Rollen zu formen. Diese schneidet ihr in etwa 2-cm breite Stücke. Um die typische Gnocchi-Form zu erhalten, müsst ihr jedes Stückchen nur noch vorsichtig über die Rückseite einer Gabel rollen. Wenn euer Teig noch zu klebrig ist, gebt ihr noch etwas mehr Mehl dazu."
              },
              {
                "id": 24,
                "number": 1,
                "step": "Walnüsse ca. 30 Min. in warmem Wasser einweichen lassen. Anschließend in einen Standmixer geben zusammen mit pflanzlicher Milch und Sahne, sowie Knoblauch. Püriert das ganze so lang, bis eine cremige Soße entsteht. Wenn sie euch noch zu dickflüssig ist, könnt ihr noch mehr Milch oder Sahne dazugeben. Mit Salz, Pfeffer und Zimt abschmecken. Die Soße könnt ihr später zum Servieren in einem Topf nochmal erwärmen."
              },
              {
                "id": 25,
                "number": 3,
                "step": "Schalotte würfeln und in einer Pfanne mit etwas Öl ca. 2-3 Minuten anschwitzen. Anschließend zusammen mit Spinat in ein Standgefäß geben und pürieren. Die Spinatmischung gebt ihr zu einer Kartoffelpüree-Hälfte und vermengt das ganze zu einem schön grünen Teig."
              }
            ],
            "liked": true
          },
          {
            "id": 3,
            "name": "Tofu süß-sauer mit Reis",
            "image": "https://assets.zuckerjagdwurst.com/l0luiaj4bkj4bpodgx43k3w1nl0h/1110/701/55/true/center/tofusuesssauer-24.webp?animated=false",
            "summary": "Vielleicht habt ihr von Tofu süß-sauer noch nie gehört, aber Hähnchen süß-sauer kennt sicher jeder – selbst wenn ihr es nicht gegessen gehabt, dann doch immerhin vom Lesen der Speisekarte eures chinesischen Lieblingsrestaurants. Das wichtigste an diesem Gericht ist aber auch nicht die Wahl des Proteins, sondern die Soße. Und deswegen funktioniert dieses Gericht auch wunderbar ohne Tier, aber mit Tofu. Obwohl ich so gerne frittiere, habe ich mich entschieden, eine Abendessen-freundlichere Variante des Gericht zu kochen. Statt den Tofu mit Teig zu ummanteln und goldbraun zu frittieren, werden die Tofuwürfel einfach in Speisestärke gewälzt und in der Pfanne angebraten. Das Ummanteln funktioniert übrigens super einfach, wenn ihr Tofu und Stärke zusammen in eine Tupperdose packt, den Deckel schließt und kräftig schüttelt. Um euch Extra-Abwasch zu ersparen, haben wir auch nur eine Pfanne für das Rezept verwendet, doch wenn ihr parallel Gemüse und Tofu in zwei Pfannen anbratet, steht euer Essen sogar noch früher auf dem Tisch. Für die Soße gibt es viele Varianten, in den klassischen Rezepten werden zum Beispiel Ketchup oder auch Pflaumensoße verwendet. Bei uns landet Orangensaft in der Soße, der fruchtig und leicht säuerlich ist. Tomatenmark und Sojasauce sorgen für eine geschmackliche Tiefe und Ingwer und Chiliflocken für eine leichte Schärfe. Wir immer könnt ihr aber ganz nach eigenem Geschmack würzen, mehr Schärfe, Säure oder auch Süße dazugeben.",
            "ingredients": [
              {
                "id": 48,
                "name": "Sesam zum Servieren",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 55,
                "name": "Apfelessig",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 51,
                "name": "Paprikaschoten",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 39,
                "name": "Cashewnüsse zum Servieren",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 56,
                "name": "Wasser",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 45,
                "name": "Speisestärke",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 43,
                "name": "Sesamöl zum Braten",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 44,
                "name": "Sojasauce",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 58,
                "name": "Tofu",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 52,
                "name": "Salz",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 40,
                "name": "Orangensaft",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 50,
                "name": "Chiliflocken",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 59,
                "name": "Tomatenmark",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 42,
                "name": "Pfeffer",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 38,
                "name": "Zwiebeln",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 47,
                "name": "Ingwer",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 54,
                "name": "brauner Zucker",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 53,
                "name": "Frühlingszwiebeln",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 57,
                "name": "Reis",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 46,
                "name": "Walnüsse",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 49,
                "name": "Speisestärke",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 41,
                "name": "Sojasauce",
                "amount": 0.0,
                "unit": null
              },
              {
                "id": 60,
                "name": "Zucchini",
                "amount": 0.0,
                "unit": null
              }
            ],
            "steps": [
              {
                "id": 23,
                "number": 2,
                "step": "Paprika und Zucchini in mundgerechte Stücke schneiden. Zwiebel klein schneiden und die Frühlingszwiebeln in feine Ringe schneiden. Den Reis erst unter fließendem Wasser abspülen und danach mit ca. 375 ml Wasser in einen Topf geben, leicht salzen und einmal aufkochen lassen. Danach mit Deckel ca. 15 Minuten kochen lassen, bis der Reis gar ist."
              },
              {
                "id": 19,
                "number": 4,
                "step": "Nun die Zwiebel in die Pfanne geben und ca. 2-3 Minuten anschwitzen, bis sie glasig wird. Paprika und die Zucchini dazugeben, mit Salz und Pfeffer würzen und alles ca. 8-10 Minuten anbraten, bis das Gemüse weich, aber noch leicht knackig ist."
              },
              {
                "id": 17,
                "number": 6,
                "step": "In der Zwischenzeit die Soße vorbereiten: Apfelessig, Orangensaft, braunen Zucker, Tomatenmark und Sojasauce verrühren. Frischen Ingwer direkt in die Schüssel reiben und Chiliflocken dazugeben. Alles gut verrühren. Wasser mit Stärke separat anrühren und dann ebenfalls zur Soße geben."
              },
              {
                "id": 18,
                "number": 5,
                "step": "Parallel dazu ein paar Cashewkerne in einer fettfreien Pfanne rösten. Danach aus der Pfanne nehmen und klein hacken fürs Servieren später."
              },
              {
                "id": 22,
                "number": 8,
                "step": "Tofu süß-sauer mit Reis servieren und zum Schluss mit Frühlingszwiebeln, Sesam und gerösteten Cashewkernen bestreuen."
              },
              {
                "id": 21,
                "number": 3,
                "step": "Während der Reis kocht, Sesamöl in einer Pfanne erhitzen und zuerst den Tofu ca. 5 Minuten rundum anbraten, bis er gebräunt ist. Mit Sojasauce würzen und noch weitere 2-3 Minuten anbraten. Danach aus der Pfanne nehmen."
              },
              {
                "id": 20,
                "number": 1,
                "step": "Tofu rundum mit Küchenpapier trocken tupfen und danach in größere Würfel schneiden. In eine Schüssel mit Speisestärke geben und alles gut durchschwenken, bis die Tofuwürfel rundum ummantelt sind. Das funktioniert auch toll in einer verschließbaren Schüssel: beides reingeben, Deckel drauf und gut durchschütteln."
              },
              {
                "id": 16,
                "number": 7,
                "step": "In der Zwischenzeit die Soße vorbereiten: Apfelessig, Orangensaft, braunen Zucker, Tomatenmark und Sojasauce verrühren. Frischen Ingwer direkt in die Schüssel reiben und Chiliflocken dazugeben. Alles gut verrühren. Wasser mit Stärke separat anrühren und dann ebenfalls zur Soße geben."
              }
            ],
            "liked": true
          }
        ]
      }
    })

    //then
    const recipeCards = wrapper.findAllComponents(recipeCard)
    expect(recipeCards.length).toBe(2)
  })
})
