<template>
  <div class="c-products">
    product list
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  layout: 'default',
})
export default class extends Vue {

}
</script>

<style lang="scss" scoped>
.c-products {
  padding: 0;
}
</style>
