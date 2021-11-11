<template>
  <nav class="c-pagination">
    <ul class="c-pagination__ul">
      <!--Prev Arrow-->
      <li class="c-pagination__item">
        <NuxtLink
          class="c-pagination__link"
          to="/"
        >
          <common-base-icon name="arrow-left" :size="20" />
        </NuxtLink>
      </li>
      <!-- Page Numbers -->
      <li v-for="n in 6" :key="n" class="c-pagination__item">
        <NuxtLink
          to="/"
          class="c-pagination__link"
          v-text="n"
        />
      </li>
      <!-- Next Arrow -->
      <li class="c-pagination__item">
        <NuxtLink
          to="/"
          class="c-pagination__link"
        >
          <common-base-icon name="arrow-right" :size="20" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ProductsPagination extends Vue {
}
</script>

<style lang="scss" scoped>
@use "assets/styles/abstracts/variables" as v;
@use "assets/styles/abstracts/mixins" as mx;

.c-pagination {
  padding: 10px;

  &__ul {
    display: flex;
    justify-content: center;

    margin: 0;
    padding: 0;

    list-style: none;
  }

  &__item {
    width: 20px;

    text-align: center;

    color: v.$body-color;

    font-size: 12px;
    @include mx.break-point('phone-md') {
      width: 30px;
    }
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20px;
    height: 20px;

    transition: color ease 300ms;
    text-decoration: none;

    color: v.$primary-color;
    @include mx.break-point('phone-md') {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
