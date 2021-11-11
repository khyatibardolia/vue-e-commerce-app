<template>
  <Products />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Products from './products/index.vue'

@Component({
  components: { Products },
})
export default class extends Vue {
  created () : void {
    this.$router.push('/products')
  }
}
</script>
