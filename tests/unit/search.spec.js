import Search from '@/views/Search'
import Searchbar from '@/components/Searchbar.vue'
import { mount } from '@vue/test-utils'


describe('testing search.vue', ()=>{
  it('should have a search bar component',  () => {


    //when
    const wrapper = mount(Search)

    //then
    const searchbar = wrapper.findComponent(Searchbar)
    expect(searchbar.exists()).toBeTruthy()
  })
})
