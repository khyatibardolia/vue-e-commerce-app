<template>
  <div class="c-productItems">
    <div class="c-productItems__card">
      <figure class="c-productItems__imgWrapper">
        <img
          :src="product.cover_image_url"
          alt="Avatar"
          class="c-productItems__img"
        >
        <BaseButton icon="wishlist" class="c-productItems__wishlistBtn" />
      </figure>
      <div class="c-productItems__details">
        <h1 class="c-productItems__title">
          {{ product.title }}
        </h1>
        <p class="c-productItems__description">
          {{ product.description }}
        </p>
        <div class="c-productItems__price">
          <span class="c-productItems__price">{{ product.retail_price.formatted_value }}</span>
        </div>
        <BaseButton btn-label="Add to cart" full-width />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: Object, default: () => {} }) private readonly product?: string
}
</script>

<style lang="scss" scoped>
@use "assets/styles/abstracts/variables" as v;
@use "assets/styles/abstracts/mixins" as mx;

.c-productItems {
  width: 100%;
  height: 100%;

  &__card {
    position: relative;

    height: 100%;
    padding: 10px;

    transition: 0.3s;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  }

  &__imgWrapper {
    position: relative;

    padding: 20px;

    text-align: center;
  }

  &__img {
    max-width: 100%;
    height: auto;
  }

  &__wishlistBtn {
    position: absolute;
    top: 10px;
    right: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 35px;
    height: 35px;
  }

  &::v-deep .c-productItems__wishlistBtn {
    background: v.$light-color;

    .c-baseButton__icon {
      margin: 0;

      path {
        fill: v.$disabled-color;
      }
    }

    &:hover {
      .c-baseButton__icon {
        path {
          fill: v.$primary-color;
        }
      }
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;

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
    padding-bottom: 20px;

    letter-spacing: 2.33px;

    font-family: 'Lato-Bold', sans-serif;
    font-size: 14px;
  }
}
</style>
