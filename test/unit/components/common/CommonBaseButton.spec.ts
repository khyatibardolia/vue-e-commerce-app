import { shallowMount } from '@vue/test-utils'
import CommonBaseButton from '~/components/common/CommonBaseButton.vue'

describe('CommonBaseButton.vue', () => {
  test('render button props', () => {
    const wrapper = shallowMount(CommonBaseButton)

    const btnLabel: string = ''
    const icon: string = ''
    const fullWidth: boolean = false

    expect(wrapper.text()).toEqual(btnLabel)
    expect(wrapper.text()).toEqual(icon)
    expect(wrapper.vm.$props.fullWidth).toEqual(fullWidth)
    expect(wrapper.attributes('class')).toEqual('c-baseButton')
  })
})
