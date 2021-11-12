import { shallowMount } from '@vue/test-utils'
import CommonBannerTitle from '~/components/common/CommonBannerTitle.vue'

describe('CommonBannerTitle.vue', () => {
  test('render props', () => {
    const wrapper = shallowMount(CommonBannerTitle)

    const title: string = ''

    expect(wrapper.text()).toEqual(title)
    expect(wrapper.attributes('class')).toEqual('c-commonBannerTitle')
  })
})
