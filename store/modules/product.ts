import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { SET_PRODUCTS } from '@/store/mutation-types'
import { $axios } from '@/store/utils/api'

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
  async getProducts () {
    const res = await $axios.$get('https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=0')

    console.log('called', res)
    this.context.commit(SET_PRODUCTS, res)
  }
}
