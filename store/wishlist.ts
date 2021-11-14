import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { SET_WISHLIST_ITEMS } from '@/store/mutation-types'
import ProductModel from '@/interfaces/productModel'
import { totalAmountFormatted } from '@/utils/fn-total-formatted'

@Module({
  name: 'wishlist',
  namespaced: true,
  stateFactory: true,
})
export default class loader extends VuexModule {
  public wishlist: Array<ProductModel> = [];

  @Mutation
  public [SET_WISHLIST_ITEMS] (payload: Array<ProductModel>): void {
    this.wishlist = payload
  }

  @Action
  public setWishlistItems (payload: Array<ProductModel>) {
    this.context.commit(SET_WISHLIST_ITEMS, payload)
  }

  get wishlistCount (): number {
    return this.wishlist.length
  }

  get isOnWishlist (): (value: string) => boolean {
    return (value: string) => this.wishlist.some(({ uuid }) => uuid === value)
  }

  get totalPrice (): string {
    return totalAmountFormatted(this.wishlist)
  }
}
