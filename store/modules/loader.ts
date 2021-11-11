import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { SET_LOADER } from '@/store/mutation-types'

@Module({
  name: 'modules/loader',
  namespaced: true,
  stateFactory: true,
})
export default class loader extends VuexModule {
  public showLoader: boolean = false

  @Mutation
  public [SET_LOADER] (payload: boolean) {
    this.showLoader = payload
  }

  @Action
  public setLoader (payload: boolean) {
    this.context.commit(SET_LOADER, payload)
  }
}
