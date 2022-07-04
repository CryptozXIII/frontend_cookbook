import RecipesCardList from '@/components/RecipesCardList'
import recipeCard from '@/components/RecipeCard'

describe("testing Recipescardlist.vue", ()=>{
  it('should render a recipe card for each saved recipe',()=>{
    //when
    const wrapper = mount(RecipesCardList,{
      propsData:{
        recipe: [
          {
            id:1,
          }
        ]
      }

    })

    //then
    const recipeCards = wrapper.findAllComponents(recipeCard)
    expect(recipeCards.length).toBe(1)
  })
})
