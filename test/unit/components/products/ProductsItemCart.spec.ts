import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ProductsItemCard from '@/components/products/ProductsItemCard.vue'
import ProductModel from '@/interfaces/productModel'
import { store, fnInitializeStore } from '@/utils/initialize-test-store'

const localVue = createLocalVue()

localVue.use(Vuex)

const product: ProductModel = {
  uuid: 'd752296e-176f-413c-a61d-0b4931a54be8',
  cover_image_url: 'https://images.musement.com/cover/0002/37/thumb_136037_cover_header.jpeg?w=540',
  title: 'Title',
  description: 'Description',
  net_price: { value: 50, formatted_value: '€ 50.00' },
  retail_price: { value: 50, formatted_value: '€ 50.00' },
  discount: 0,
}

describe('ProductsItemCard.vue', () => {
  beforeEach(() => {
    // initialize store
    fnInitializeStore()
  })

  test('component props renders correctly', () => {
    const wrapper = shallowMount(ProductsItemCard,
      {
        store,
        localVue,
        propsData: { product },
        stubs: [ 'common-base-button' ],
      })

    expect(wrapper.vm.$props.product).toEqual(product)
    expect(wrapper.vm.$props.product.title).toEqual(product.title)
    expect(wrapper.vm.$props.product.description).toEqual(product.description)
    expect(wrapper.vm.$props.product.description).toEqual(product.description)
    expect(wrapper.vm.$props.product.cover_image_url).toEqual(product.cover_image_url)
    expect(wrapper.vm.$props.product.net_price).toMatchObject(product.net_price)
    expect(wrapper.vm.$props.product.retail_price).toMatchObject(product.retail_price)
    expect(wrapper.vm.$props.product.discount).toEqual(product.discount)

    expect(wrapper.attributes('class')).toEqual('c-productItems')
  })

  test('component state renders correctly', () => {
    const toggleWishlist:boolean = false

    const wrapper = shallowMount(ProductsItemCard,
      {
        store,
        localVue,
        propsData: { product },
        stubs: [ 'common-base-button' ],
      })

    expect(wrapper.vm.$data.toggleWishlist).toEqual(toggleWishlist)
  })

  test('Add the product to the cart', () => {
    const wrapper = shallowMount(ProductsItemCard,
      {
        store,
        localVue,
        propsData: { product },
        stubs: [ 'common-base-button' ],
      })

    // @ts-ignore
    wrapper.vm.handleCart()
    expect(store.getters['cart/isOnCart'](product.uuid)).toEqual(true)
  })

  test('Add the product to the wishlist, then remove it', () => {
    const wrapper = shallowMount(ProductsItemCard,
      {
        store,
        localVue,
        propsData: { product },
        stubs: [ 'common-base-button' ],
      })

    // @ts-ignore
    wrapper.vm.handleWishlist()
    expect(store.getters['wishlist/isOnWishlist'](product.uuid)).toEqual(true)
    // @ts-ignore
    wrapper.vm.handleWishlist()
    expect(store.getters['wishlist/isOnWishlist'](product.uuid)).toEqual(false)
  })
})
