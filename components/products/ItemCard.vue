<template>
  <div class="c-productItems">
    <div class="c-productItems__card">
      <img
        src=""
        alt="Avatar"
        class="c-productItems__img"
      >
      <div class="c-productItems__content">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
      <BaseButton btn-label="Add to cart" full-width />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
}
</script>

<style lang="scss" scoped>
@use "assets/styles/abstracts/variables" as v;
@use "assets/styles/abstracts/mixins" as mx;

.c-productItems {
  width: 100%;

  &__card {
    position: relative;

    padding: 10px;

    transition: 0.3s;

    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  }

  &__img {
    //position: absolute;
  }

  &__container {
    padding: 2px 16px;
  }
}
</style>
