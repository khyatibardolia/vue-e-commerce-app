import { shallowMount } from '@vue/test-utils'
import CommonLoader from '~/components/common/CommonLoader.vue'

describe('CommonLoader.vue', () => {
  test('component renders correctly', () => {
    const wrapper = shallowMount(CommonLoader)

    expect(wrapper.attributes('class')).toEqual('c-loader')
  })
})
