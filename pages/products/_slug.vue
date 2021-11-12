<template>
  <div class="c-products">
    <div v-if="products.length" class="c-products__list">
      <div class="c-products__gridContainer">
        <div
          v-for="item in products"
          :key="item.uuid"
          class="c-products__gridItem"
        >
          <products-item-card :product="item" />
        </div>
      </div>
      <div class="c-products__pagination">
        <products-pagination />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'nuxt-property-decorator'
import { productModule } from '@/store'
import ProductModel from '@/interfaces/productModel'

@Component
export default class ProductsList extends Vue {
  private readonly pageLimit = 6
  private offset = 0

  get products (): Array<ProductModel> {
    return productModule.products
  }

  @Watch('$route')
  // call again the method if the route changes
  private onUrlChange () {
    this.getProducts()
  }

  async getProducts () {
    if (typeof this.$route.params.slug !== 'undefined') {
      this.offset = Number(this.$route.params.slug) * Number(this.pageLimit)
    } else {
      this.offset = 0
    }

    await productModule.getProducts(this.pageLimit, this.offset)
  }

  mounted () : void {
    this.getProducts()
  }
}
</script>

<style lang="scss" scoped>
@use "../../assets/styles/abstracts/variables" as v;
@use "../../assets/styles/abstracts/mixins" as mx;

.c-products {
  padding: 3rem 1.5rem;

  @include mx.break-point('desktop') {
    padding: 3rem 5rem;
  }

  &__gridContainer {
    display: grid;

    grid-template-columns: 100%;
    grid-auto-rows: auto;
    column-gap: 20px;
    row-gap: 20px;

    @include mx.break-point('tablet') {
      grid-template-columns: auto auto;
    }

    @include mx.break-point('desktop') {
      grid-template-columns: auto auto auto;
    }
  }

  &__gridItem {
    height: 100%;
  }

  &__pagination {
    @include mx.d-flex(center, center, false);

    padding-top: 2rem;
  }
}
</style>
