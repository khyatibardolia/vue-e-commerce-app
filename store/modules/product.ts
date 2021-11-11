import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { SET_PRODUCTS } from '@/store/mutation-types'
import { $axios } from '@/store/utils/api'
import { loaderModule } from '@/store/store-accessor'

@Module({
  name: 'modules/product',
  namespaced: true,
  stateFactory: true,
})
export default class product extends VuexModule {
  // products: Products[] = []
   products = []

  @Mutation
   public [SET_PRODUCTS] (payload: Array<never>): void {
     this.products = payload
   }

  @Action
  public async getProducts () {
    loaderModule.setLoader(true)
    try {
      const res = await $axios.$get('/venues/164/activities?limit=6&offset=0')

      this.context.commit(SET_PRODUCTS, res)
    } catch (e) {
      console.log('error', e)
    } finally {
      loaderModule.setLoader(false)
    }
  }
}
