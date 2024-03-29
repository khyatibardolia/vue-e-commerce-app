/* https://github.com/championswimmer/vuex-module-decorators#accessing-modules-with-nuxtjs */

import Vue from 'vue'
import Vuex, { Store } from 'vuex'
// Note: you shouldn't need to import store modules here.
import { initializeStores } from '@/utils/store-accessor'

Vue.use(Vuex)

// Initialize the modules using a Vuex plugin that runs when the root store is
// first initialized. This is vital to using static modules because the
// modules don't know the root store when they are loaded. Initializing them
// when the root store is created allows them to be hooked up properly.
const initializer = (store: Store<any>) => initializeStores(store)

export const plugins = [ initializer ]
export * from '@/utils/store-accessor'
