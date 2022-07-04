import RecipesCardList from '@/components/RecipesCardList'
import recipeCard from '@/components/RecipeCard'
import { mount } from '@vue/test-utils'

describe("testing Recipescardlist.vue", ()=>{
  it('should render a recipe card for each saved recipe',()=>{
    //when
    const wrapper = mount(RecipesCardList,{
      propsData:{
        recipe: [
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
          }
        ]
      }
    })

    //then
    const recipeCards = wrapper.findAllComponents(recipeCard)
    expect(recipeCards.length).toBe(1)
  })
})
