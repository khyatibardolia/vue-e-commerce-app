<template>
  <div class="c-products">
    <div class="c-products__list">
      <div class="c-products__gridContainer">
        <div
          v-for="item in products"
          :key="item.uuid"
          class="c-products__gridItem"
        >
          <ItemCard :product="item" />
        </div>
      </div>
    </div>
    <div class="c-products__pagination">
      pagination
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ItemCard from '@/components/products/ItemCard.vue'
import { productModule } from '@/store'
import ProductModel from "@/interfaces/productModel";

@Component({
  components: { ItemCard },
  layout: 'default',
})
export default class extends Vue {
  get products (): Array<ProductModel> {
    return productModule.products
  }

  mounted () : void {
    productModule.getProducts()
  }
}
</script>

<style lang="scss" scoped>
@use "assets/styles/abstracts/variables" as v;
@use "assets/styles/abstracts/mixins" as mx;

.c-products {
  padding: 0;

  @include mx.bp('desktop') {
    padding: 0 5rem;
  }

  &__gridContainer {
    display: grid;

    grid-template-columns: 100%;
    grid-auto-rows: auto;
    column-gap: 20px;
    row-gap: 20px;

    @include mx.bp('tablet') {
      grid-template-columns: auto auto;
    }

    @include mx.bp('desktop') {
      grid-template-columns: auto auto auto;
    }
  }

  &__gridItem {
    height: 100%;
  }
}
</style>
