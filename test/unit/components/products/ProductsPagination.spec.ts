import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ProductsPagination from '@/components/products/ProductsPagination.vue'
import { fnInitializeStore, store } from '@/utils/initialize-test-store'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)

describe('ProductsPagination.vue', () => {
  let router: any

  beforeEach(() => {
    // initialize store
    fnInitializeStore()
    // initialize router
    router = new VueRouter()
  })

  test('component renders correctly', () => {
    const productPerPage:number = 6

    const wrapper = shallowMount(ProductsPagination,
      {
        stubs: [ 'common-base-button', 'common-base-icon', 'NuxtLink' ],
        store,
        localVue,
        router,
      })

    expect(wrapper.attributes('class')).toEqual('c-pagination')
    expect(wrapper.vm.$data.productPerPage).toEqual(productPerPage)
  })

  test('set computed nextPage correctly to 3 when passing router.currentRoute.params.page = 2 ', () => {
    // Todo: for some reason it doesn't initiate router
    router.currentRoute.params.slug = 2

    const wrapper = shallowMount(ProductsPagination,
      {
        stubs: [ 'common-base-button', 'common-base-icon', 'NuxtLink' ],
        store,
        localVue,
        router,
      })

    // @ts-ignore
    expect(wrapper.vm.nextPage).toEqual(3)
  })

  test('set computed prevPage correctly to 1 when passing router.currentRoute.params.page = 2 ', () => {
    // Todo: for some reason it doesn't initiate router
    router.currentRoute.params.slug = 2

    const wrapper = shallowMount(ProductsPagination, {
      stubs: [ 'common-base-button', 'common-base-icon', 'NuxtLink' ],
      store,
      localVue,
      router,
    })

    // @ts-ignore
    expect(wrapper.vm.prevPage).toEqual(1)
  })
})
