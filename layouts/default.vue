<template>
  <div class="l-default">
    <AppHeader />
    <Loader v-if="isLoading" />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
import Loader from '@/components/common/Loader.vue'
import { loaderModule } from '@/store'

@Component({
  components: { Loader, AppHeader, AppFooter },
})
export default class extends Vue {
  get isLoading (): boolean {
    return loaderModule.showLoader
  }
}
</script>

<style lang="scss" scoped>
.l-default {
  padding: 0;
}
</style>
