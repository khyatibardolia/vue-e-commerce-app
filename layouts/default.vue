<template>
  <div class="l-default">
    <common-app-header />
    <main class="l-default__main">
      <common-loader v-if="isLoading" />
      <Nuxt />
    </main>
    <common-app-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { loaderModule } from '@/store'

@Component
export default class extends Vue {
  get isLoading (): boolean {
    return loaderModule.showLoader
  }
}
</script>

<style lang="scss" scoped>
.l-default {
  &__main {
    margin-top: 60px;
  }
}
</style>
