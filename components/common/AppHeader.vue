<template>
  <header class="c-appHeader">
    <div class="c-appHeader__container">
      <h1 class="c-appHeader__logo">
        <NuxtLink to="/">
          <span>The Plaza</span>
        </NuxtLink>
      </h1>
      <div class="c-appHeader__counter">
        <span class="-paddingRight">0.00</span>
        <NuxtLink
          v-for="{component, path, count} in menuActions"
          :key="component"
          :to="path"
          class="c-appHeader__icon"
        >
          <component :is="component" />
          <span class="c-appHeader__iconBadge">{{ count }}</span>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import WishlistIcon from '@/assets/svg-icons/wishlist.svg'
import CartIcon from '@/assets/svg-icons/bag.svg'

@Component({ components: { WishlistIcon, CartIcon } })
export default class extends Vue {
  private readonly menuActions = [
    { path: '/', component: 'CartIcon', count: 0 },
    { path: '/', component: 'WishlistIcon', count: 0 },
  ]
}
</script>

<style lang="scss" scoped>
@use "assets/styles/abstracts/variables" as v;
@use "assets/styles/abstracts/mixins" as mx;

.c-appHeader {
  position: fixed;
  top: 0;

  width: 100%;
  height: 60px;

  text-transform: uppercase;

  background: linear-gradient(to right, v.$light-color 0%, v.$primary-color 0%, v.$primary-color-light 100%);
  @include mx.use-color(v.$light-color);

  &__container {
    @include mx.d-flex('space-between', center, false);

    height: inherit;
    padding: 0 20px;
  }

  &__logo {
    cursor: pointer;

    font-size: 20px;

    a {
      @include mx.use-color(v.$light-color);

      &:hover {
        text-decoration: none;
      }
    }
  }

  &__counter {
    @include mx.d-flex(center, center, false);
  }

  &__icon {
    @include mx.d-flex(center, center, false);

    padding-right: 10px;

    &:last-child {
      padding: 0;
    }
  }

  &__iconBadge {
    @include mx.d-flex(center, center, false);

    @include mx.use-color(v.$light-color);
    @include mx.use-bg-color(v.$bg-grey);

    position: relative;
    top: -5px;
    left: 1px;

    width: 23px;
    height: 23px;

    border-radius: 50%;

    font-size: 12px;
  }

  .-paddingRight {
    padding-right: 10px;
  }
}
</style>
