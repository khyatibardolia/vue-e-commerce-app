import createPersistedState from 'vuex-persistedstate'

interface MyWindow extends Window {
  onNuxtReady(obj: object): void
}
declare let window: MyWindow

export default ({ store }: any) => {
  window.onNuxtReady(() => {
    createPersistedState()(store)
  })
}
