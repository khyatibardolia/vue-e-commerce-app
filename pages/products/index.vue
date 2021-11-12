<template>
  <ProductsList />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ProductsList from './_slug.vue'

@Component({
  layout: 'default',
  components: { ProductsList },
})
export default class Products extends Vue {
}
</script>
