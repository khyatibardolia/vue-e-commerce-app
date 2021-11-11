import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { SET_PRODUCTS } from '@/store/mutation-types'
import { $axios } from '@/store/utils/api'
import { loaderModule } from '@/store/store-accessor'
import ProductModel from '@/interfaces/productModel'

@Module({
  name: 'modules/product',
  namespaced: true,
  stateFactory: true,
})
export default class product extends VuexModule {
   products: Array<ProductModel> = []

  @Mutation
   public [SET_PRODUCTS] (payload: Array<ProductModel>): void {
     this.products = payload
   }

  @Action
  public async getProducts () {
    loaderModule.setLoader(true)
    try {
      const response: Array<ProductModel> = await $axios.$get('/venues/164/activities?limit=6&offset=0')

      this.context.commit(SET_PRODUCTS, response as Array<ProductModel>)
    } catch (e) {
      console.log('error', e)
    } finally {
      loaderModule.setLoader(false)
    }
  }
}
