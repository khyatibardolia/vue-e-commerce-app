import Vue from 'vue'
import BaseIcon from '@/components/common/BaseIcon.vue'

const components = { BaseIcon }

Object.entries(components).forEach(([ name, component ]) => {
  Vue.component(name, component)
})
