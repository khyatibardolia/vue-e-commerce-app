import { shallowMount } from '@vue/test-utils'
import CommonAppFooter from '~/components/common/CommonAppFooter.vue'

describe('CommonAppFooter.vue', () => {
  test('component renders correctly', () => {
    const wrapper = shallowMount(CommonAppFooter)

    const year: number = 2021

    expect(wrapper.vm.$data.currentYear).toEqual(year)
    expect(wrapper.attributes('class')).toEqual('c-appFooter')
  })
})
