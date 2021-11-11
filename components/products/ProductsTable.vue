<template>
  <div class="c-productsTable">
    <div v-if="products.length" class="c-productsTable__wrapper">
      <table class="c-productsTable__table">
        <thead>
          <tr>
            <th class="c-productsTable__th">
              Product
            </th>
            <th class="c-productsTable__th" />
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.uuid">
            <td class="c-productsTable__td">
              <figure class="c-productsTable__imgWrapper">
                <img :src="item.cover_image_url" alt="noimage" class="c-productsTable__img">
              </figure>
              <div class="c-productsTable__details">
                <div class="c-productsTable__title">
                  {{ item.title }}
                </div>
                <div class="c-productsTable__price">
                  1 x {{ item.retail_price.formatted_value }}
                </div>
              </div>
            </td>
            <td class="c-productsTable__td">
              <common-base-icon
                name="remove"
                :size="30"
                class="c-productsTable__removeIcon"
                @click.native="click(item)"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="c-productsTable__totalWrapper">
        <div class="c-productsTable__totalText">
          Cart SubTotal
        </div>
        <div class="c-productsTable__subTotal">
          {{ total }}
        </div>
      </div>
    </div>
    <div v-else class="c-productsTable__emptyCartWrapper">
      <div class="c-productsTable__emptyCart">
        Your Cart is empty
      </div>
      <common-base-button
        btn-label="Continue Shopping"
        @click.native="navigate"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'nuxt-property-decorator'
import ProductModel from '@/interfaces/productModel'

@Component
export default class extends Vue {
  @Prop({ type: Array, default: () => [] }) private readonly products!: Array<ProductModel>
  @Prop({ type: String, default: '' }) private readonly total!: number

  @Emit('handle-click')
  click (value: any) {
    return value
  }

  navigate () {
    this.$router.push('/products')
  }
}
</script>

<style lang="scss" scoped>
@use "assets/styles/abstracts/variables" as v;
@use "assets/styles/abstracts/mixins" as mx;

.c-productsTable {
  padding: 0;

  @include mx.break-point('desktop') {
    padding: 0 10rem;
  }

  &__wrapper {
    display: block;
    overflow: auto;

    width: 100%;
  }

  &__table {
    width: 100%;

    border-collapse: collapse;
  }

  &__imgWrapper {
    width: 350px;
    height: 150px;

    @include mx.break-point('tablet') {
      width: 200px;
    }
  }

  &__img {
    width: 200px;
    height: 100%;
  }

  &__th {
    @include mx.use-color(v.$light-color);
    @include mx.use-bg-color(v.$primary-color);

    padding: 8px;

    text-align: left;
    text-transform: uppercase;

    font-size: 18px;
    font-weight: 600;
  }

  &__td {
    width: 100px;
    padding: 8px;

    font-size: 16px;
    font-weight: 600;

    &:first-child {
      display: flex;
      overflow: hidden;

      width: auto;
    }

    &:not(:first-child) {
      text-align: center;
    }
  }

  &__details {
    // width: 400px;
  }

  &__title {
    padding-left: 15px;

    @include mx.use-color(v.$text-light);
  }

  &__price {
    padding-top: 15px;
    padding-left: 15px;

    @include mx.use-color(v.$disabled-color);
  }

  &__removeIcon {
    cursor: pointer;
  }

  &__totalWrapper {
    @include mx.d-flex('space-between', center, false);

    padding: 20px 15px 20px 15px;

    border-top: 1px solid v.$disabled-color;
  }

  &__totalText {
    text-transform: uppercase;

    font-size: 18px;
    @include mx.use-color(v.$disabled-color);
  }

  &__subTotal {
    font-size: 20px;

    @include mx.use-color(v.$text-light);
  }

  &__emptyCartWrapper {
    @include mx.d-flex(center, center, true);
  }

  &__emptyCart {
    padding: 20px;

    text-align: center;

    font-size: 20px;
  }
}
</style>
