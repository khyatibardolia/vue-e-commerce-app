import Vue from 'vue'
import BaseIcon from '@/components/common/BaseIcon.vue'
import BaseButton from '@/components/common/BaseButton.vue'

const components = { BaseIcon, BaseButton }

Object.entries(components).forEach(([ name, component ]) => {
  Vue.component(name, component)
})
