import Vuex, { Store } from 'vuex'
import { initializeStores, modules } from '@/utils/store-accessor'

const storeOptions = {
  modules,
}

const createStore = (storeOptions: any = {}): Store<{}> => new Vuex.Store({ ...storeOptions })

// eslint-disable-next-line import/no-mutable-exports
export let store: Store<{}>

// eslint-disable-next-line prefer-const
store = createStore(storeOptions)
const initializer = (store: Store<{}>) => initializeStores(store)

export function fnInitializeStore () {
  initializer(store)
}

export default { store, fnInitializeStore }
