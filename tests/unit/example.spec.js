import { mount, shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Search from '@/views/Search'
import Searchbar from '@/components/Searchbar'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})


