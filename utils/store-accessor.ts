/* This is the "store accessor":
It initializes all the modules using a Vuex plugin (see store/index.ts)
In here you import all your modules, call getModule on them to turn them
into the actual stores, and then re-export them. */

import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import product from '@/store/product'
import loader from '@/store/loader'
import cart from '@/store/cart'

/* Each store is the singleton instance of its module class
Use these -- they have methods for state/getters/mutations/actions
(result from getModule(...)) */

// eslint-disable-next-line import/no-mutable-exports
export let productModule: product
// eslint-disable-next-line import/no-mutable-exports
export let loaderModule: loader
// eslint-disable-next-line import/no-mutable-exports
export let cartModule: cart

// initializer plugin: sets up state/getters/mutations/actions for each store
export function initializeStores (store: Store<any>): void {
  productModule = getModule(product, store)
  loaderModule = getModule(loader, store)
  cartModule = getModule(cart, store)
}

/* for use in 'modules' store init (see store/index.ts), so each module
appears as an element of the root store's state. */
// (This is required!)
export const modules = {
  product,
  loader,
  cart,
}
