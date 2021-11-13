import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ProductsTable from '@/components/products/ProductsTable.vue'
import { fnInitializeStore, store } from '@/utils/initialize-test-store'
import ProductModel from '@/interfaces/productModel'
import { SET_CART_ITEMS, SET_WISHLIST_ITEMS } from '@/store/mutation-types'

const localVue = createLocalVue()

localVue.use(Vuex)

const products: Array<ProductModel> = [ {
  uuid: 'd752296e-176f-413c-a61d-0b4931a54be8',
  cover_image_url: 'https://images.musement.com/cover/0002/37/thumb_136037_cover_header.jpeg?w=540',
  title: 'Title',
  description: 'Description',
  net_price: { value: 50, formatted_value: '€ 50.00' },
  retail_price: { value: 50, formatted_value: '€ 50.00' },
  discount: 0,
} ]

describe('ProductsTable.vue', () => {
  beforeEach(() => {
    // initialize store
    fnInitializeStore()
  })

  test('component props renders correctly', () => {
    const total: string = ''
    const emptyBagText: string = ''

    const wrapper = shallowMount(ProductsTable,
      {
        stubs: [ 'common-base-button', 'common-base-icon' ],
        store,
        localVue,
        propsData: { products },
      })

    expect(wrapper.attributes('class')).toEqual('c-productsTable')
    expect(wrapper.vm.$props.products).toEqual(products)
    expect(wrapper.vm.$props.total).toEqual(total)
    expect(wrapper.vm.$props.emptyBagText).toEqual(emptyBagText)
  })

  test('Add item to cart, click on button to remove item and then clear the state', async () => {
    const wrapper = shallowMount(ProductsTable,
      {
        stubs: [ 'common-base-button', 'common-base-icon' ],
        store,
        localVue,
        propsData: { products },
      })

    store.commit(`cart/${SET_CART_ITEMS}`, products)

    const removeButton = wrapper.find('#removeItem')
    // @ts-ignore
    const spy = jest.spyOn(wrapper.vm, 'click')

    removeButton.trigger('click')
    await wrapper.vm.$nextTick()
    expect(spy).toHaveBeenCalled()

    store.commit(`cart/${SET_CART_ITEMS}`, [])
  })

  test('Add item to wishlist, click on button to remove item and then clear the state', async () => {
    const wrapper = shallowMount(ProductsTable,
      {
        stubs: [ 'common-base-button', 'common-base-icon' ],
        store,
        localVue,
        propsData: { products },
      })

    store.commit(`wishlist/${SET_WISHLIST_ITEMS}`, products)

    const removeButton = wrapper.find('#removeItem')
    // @ts-ignore
    const spy = jest.spyOn(wrapper.vm, 'click')

    removeButton.trigger('click')
    await wrapper.vm.$nextTick()
    expect(spy).toHaveBeenCalled()

    store.commit(`wishlist/${SET_WISHLIST_ITEMS}`, [])
  })
})
