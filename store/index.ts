import Vuex from 'vuex'
import product from '@/store/modules/product'

export function createStore () {
  // eslint-disable-next-line import/no-named-as-default-member
  return new Vuex.Store({
    modules: {
      product,
    },
  })
}

