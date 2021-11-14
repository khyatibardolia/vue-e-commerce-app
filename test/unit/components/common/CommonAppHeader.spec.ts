import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import CommonAppHeader from '@/components/common/CommonAppHeader.vue'
import ProductModel from '@/interfaces/productModel'
import { SET_CART_ITEMS, SET_WISHLIST_ITEMS } from '@/store/mutation-types'
import { store, fnInitializeStore } from '@/utils/initialize-test-store'

const localVue = createLocalVue()

localVue.use(Vuex)

// Product without discount
const product: ProductModel = {
  uuid: 'd752296e-176f-413c-a61d-0b4931a54be8',
  cover_image_url: 'https://images.musement.com/cover/0002/37/thumb_136037_cover_header.jpeg?w=540',
  title: 'Title',
  description: 'Description',
  net_price: { value: 50, formatted_value: '€ 50.00' },
  retail_price: { value: 50, formatted_value: '€ 50.00' },
  discount: 0,
}

describe('CommonAppHeader.vue', () => {
  beforeEach(() => {
    // initialize store
    fnInitializeStore()
  })

  test('This component is rendered correctly', () => {
    const wrapper = shallowMount(CommonAppHeader,
      {
        store,
        localVue,
        stubs: [ 'common-base-icon', 'NuxtLink' ],
      })

    expect(wrapper.attributes('class')).toEqual('c-appHeader')
  })

  test('If there are items on cart show the count', async () => {
    const wrapper = shallowMount(CommonAppHeader, {
      store,
      localVue,
      stubs: [ 'common-base-icon', 'NuxtLink' ],
    })
    // Add one product to the Cart Store

    await store.commit(`cart/${SET_CART_ITEMS}`, [ product ])
    expect(store.getters['cart/cartCount']).toEqual(1)
    // Clean the Cart Store
    await store.commit(`cart/${SET_CART_ITEMS}`, [])
    expect(store.getters['cart/cartCount']).toEqual(0)

    expect(wrapper.attributes('class')).toEqual('c-appHeader')
  })

  test('If there are items on wishlist show the count', async () => {
    const wrapper = shallowMount(CommonAppHeader, {
      store,
      localVue,
      stubs: [ 'common-base-icon', 'NuxtLink' ],
    })
    // Add one product to Wishlist

    await store.commit(`wishlist/${SET_WISHLIST_ITEMS}`, [ product ])
    expect(store.getters['wishlist/wishlistCount']).toEqual(1)
    // Clean the Wishlist Store
    await store.commit(`wishlist/${SET_WISHLIST_ITEMS}`, [])
    expect(store.getters['wishlist/wishlistCount']).toEqual(0)

    expect(wrapper.attributes('class')).toEqual('c-appHeader')
  })
})
