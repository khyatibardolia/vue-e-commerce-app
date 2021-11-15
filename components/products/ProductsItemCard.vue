<template>
  <div class="c-productItems">
    <div class="c-productItems__card">
      <figure class="c-productItems__imgWrapper">
        <img
          :src="product.cover_image_url"
          alt="Avatar"
          class="c-productItems__img"
        >
        <common-base-button
          id="addToWishlistBtn"
          icon="wishlist"
          :class="['c-productItems__wishlistBtn', isOnWishList ? '-isSelected' : '']"
          @click.native="handleWishlist"
        />
      </figure>
      <div class="c-productItems__details">
        <h1 class="c-productItems__title">
          {{ product.title }}
        </h1>
        <p class="c-productItems__description">
          {{ product.description }}
        </p>
      </div>
      <div class="c-productItems__price">
        <div class="c-productItems__price">
          <span class="c-productItems__priceStrike">
            {{ product.discount > 0 ? product.net_price && product.net_price.formatted_value : '' }}
          </span>
          <span>{{ product.retail_price.formatted_value }}</span>
        </div>
        <common-base-button
          id="addToCartBtn"
          :btn-label="!isOnCart ? 'Add to cart' : 'In Cart'"
          full-width
          :disable="isOnCart"
          :class="isOnCart ? '-disableBtn' : ''"
          @click.native="handleCart"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import ProductModel from '@/interfaces/productModel'
import { cartModule, wishListModule } from '@/store'

@Component
export default class extends Vue {
  @Prop({ type: Object, default: () => {} }) private readonly product: ProductModel | any

  get isOnCart (): boolean {
    const { uuid } = this.product

    return cartModule.isOnCart(uuid)
  }

  get isOnWishList (): boolean {
    const { uuid } = this.product

    return wishListModule.isOnWishlist(uuid)
  }

  handleCart () : void {
    // add item to cart
    cartModule.setCartItems([ ...cartModule.cart, { ...this.product } ])
  }

  handleWishlist () : void {
    // Use the store to check if the item is on the wishlist
    const isOnWishlist = this.isOnWishList

    wishListModule.setWishlistItems(
      isOnWishlist
        // If it is on wishlist remove it
        ? wishListModule.wishlist
          .filter((product: { uuid: string }) => product.uuid !== this.product.uuid)
        // If not add it to the Array of Objects
        : [ ...wishListModule.wishlist, { ...this.product } ],
    )
  }
}
</script>

<style lang="scss" scoped>
@use "assets/styles/abstracts/variables" as v;
@use "assets/styles/abstracts/mixins" as mx;

.c-productItems {
  width: 100%;
  height: 100%;

  &__card {
    @include mx.d-flex('space-between', center, true);

    height: 100%;
    padding: 10px;

    transition: 0.3s;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  }

  &__imgWrapper {
    @include mx.d-flex();

    position: relative;

    overflow: hidden;

    width: 100%;
    height: 250px;
    padding: 20px;

    text-align: center;
  }

  &__img {
    width: 100%;
    height: auto;

    object-fit: cover;
    object-position: 50% 50%;
  }

  &__wishlistBtn {
    @include mx.d-flex(center, center, false);

    position: absolute;
    top: 10px;
    right: 10px;

    width: 35px;
    height: 35px;
  }

  &::v-deep .c-productItems__wishlistBtn {
    &:hover {
      background: v.$light-color;
    }

    .c-baseButton__icon {
      margin: 0;

      path {
        fill: v.$disabled-color;
      }
    }

    &:hover,
    &.-isSelected {
      .c-baseButton__icon {
        path {
          fill: v.$primary-color;
        }
      }
    }
  }

  .-disableBtn {
    pointer-events: none;
    @include mx.use-bg-color(v.$disabled-color);
    @include mx.use-color(v.$light-color);
  }

  &__details {
    @include mx.d-flex(center, center, true);

    padding: 10px 20px 20px;

    text-align: center;
  }

  &__container {
    padding: 2px 16px;
  }

  &__title {
    padding-bottom: 10px;

    letter-spacing: 1.37px;
    text-transform: uppercase;

    font-family: 'Lato-Bold', sans-serif;
    font-size: 14px;
  }

  &__description {
    @include mx.use-color(v.$text-light);

    padding-bottom: 10px;

    letter-spacing: 0.43px;

    font-size: 12px;
    line-height: 19px;
  }

  &__price {
    width: 100%;
    padding-bottom: 20px;

    text-align: center;
    letter-spacing: 2.33px;

    font-family: 'Lato-Bold', sans-serif;
    font-size: 14px;
  }

  &__priceStrike {
    margin-right: 10px;

    text-decoration: line-through;
  }
}
</style>
