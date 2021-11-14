import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { SET_CART_ITEMS } from '@/store/mutation-types'
import ProductModel from '@/interfaces/productModel'
import { totalAmountFormatted } from '@/utils/fn-total-formatted'

@Module({
  name: 'cart',
  namespaced: true,
  stateFactory: true,
})
export default class loader extends VuexModule {
  public cart: Array<ProductModel> = [];

  @Mutation
  public [SET_CART_ITEMS] (payload: Array<ProductModel>) {
    this.cart = payload
  }

  @Action
  public setCartItems (payload: Array<ProductModel>) {
    this.context.commit(SET_CART_ITEMS, payload)
  }

  get isOnCart (): (value: string) => boolean {
    return (value: string) => this.cart.some(({ uuid }) => uuid === value)
  }

  get cartCount (): number {
    return this.cart.length
  }

  get totalPrice (): string {
    return totalAmountFormatted(this.cart)
  }
}
