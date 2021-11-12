import { shallowMount } from '@vue/test-utils'
import CommonBaseIcon from '~/components/common/CommonBaseIcon.vue'

describe('CommonBaseIcon.vue', () => {
  test('renders props correctly', () => {
    const wrapper = shallowMount(CommonBaseIcon)

    const name: string = ''
    const fillColor: string = ''
    const color: string = ''
    const viewBox: string = '0 0 512 512'
    const size: number = 18

    expect(wrapper.vm.$props.name).toEqual(name)
    expect(wrapper.vm.$props.fillColor).toEqual(fillColor)
    expect(wrapper.vm.$props.color).toEqual(color)
    expect(wrapper.vm.$props.viewBox).toEqual(viewBox)
    expect(wrapper.vm.$props.size).toEqual(size)
    expect(wrapper.attributes('class')).toEqual('c-baseIcon')
  })
})
