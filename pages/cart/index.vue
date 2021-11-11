<template>
  <div class="c-cart">
    <common-banner-title title="Shopping Cart" />
    <div class="c-cart__table">
      <products-table
        :products="products"
        :total="cartTotalAmt"
        empty-bag-text="Your Cart is empty"
        @handle-click="handleClick"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ProductModel from '@/interfaces/productModel'
import { cartModule } from '@/utils/store-accessor'

@Component
export default class extends Vue {
  get products (): Array<ProductModel> {
    return cartModule.cart
  }

  get cartTotalAmt (): string {
    return cartModule.totalPrice
  }

  handleClick (product: ProductModel) {
    // remove product from cart
    cartModule.setCartItems(cartModule.cart
      .filter((item: { uuid: string }) => item.uuid !== product.uuid))
  }
}
</script>

<style lang="scss" scoped>
@use "assets/styles/abstracts/variables" as v;
@use "assets/styles/abstracts/mixins" as mx;

.c-cart {
  &__table {
    padding: 3rem 1.5rem;

    @include mx.break-point('desktop') {
      padding: 3rem 5rem;
    }
  }
}
</style>
