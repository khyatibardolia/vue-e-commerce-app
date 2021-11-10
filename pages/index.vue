<template>
  <main class="l-appBody">
    <Products />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Products from './products/index.vue'

@Component({
  components: { Products },
})
export default class extends Vue {

}
</script>

<style lang="scss" scoped>
@use "assets/styles/abstracts/mixins" as mx;

.l-appBody {
  height: auto;
  margin: 80px 20px;

  @include mx.bp('tablet-wide') {
    height: 100vh;
  }
}
</style>
