import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { SET_WISHLIST_ITEMS } from '@/store/mutation-types'
import ProductModel from '@/interfaces/productModel'

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

  get wishlistTotalAmount (): string {
    // eslint-disable-next-line camelcase
    const total = this.wishlist.map(({ retail_price }) => retail_price.value)

    return total.reduce((a, b) => a + b, 0).toFixed(2)
  }

  get wishlistTotalAmountFormatted (): string {
    return `€ ${this.wishlistTotalAmount}`
  }

  get totalPrice (): string {
    return Number(this.wishlistTotalAmount) > 0 ? this.wishlistTotalAmountFormatted : ''
  }
}
