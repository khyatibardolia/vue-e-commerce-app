import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { SET_PRODUCTS, SET_PRODUCTS_COUNT } from '@/store/mutation-types'
import { $axios } from '@/utils/api'
import { loaderModule } from '@/store/index'
import ProductModel from '@/interfaces/productModel'

@Module({
  name: 'product',
  namespaced: true,
  stateFactory: true,
})
export default class product extends VuexModule {
  products: Array<ProductModel> = []
  productsCount: number = 0

  @Mutation
  public [SET_PRODUCTS] (payload: Array<ProductModel>): void {
    this.products = payload
  }

  @Mutation
  public [SET_PRODUCTS_COUNT] (payload: number): void {
    this.productsCount = payload
  }

  @Action
  public async getProducts (pageLimit: number, offset: number) {
    loaderModule.setLoader(true)
    try {
      const response: Array<ProductModel> =
        await $axios.$get('/venues/164/activities?', {
          params: {
            limit: pageLimit,
            offset,
          },
        })

      this.context.commit(SET_PRODUCTS, response as Array<ProductModel>)
    } catch (e) {
      console.log('error', e)
    } finally {
      loaderModule.setLoader(false)
    }
  }

  @Action
  public async getProductsCount () {
    try {
      const response = await $axios.$get('/venues/164')

      this.context.commit(SET_PRODUCTS_COUNT, response.events_count ? response.events_count : 0)
    } catch (e) {
      console.log('error', e)
    }
  }
}
