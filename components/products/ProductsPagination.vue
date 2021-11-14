<template>
  <nav class="c-pagination">
    <ul class="c-pagination__ul">
      <!--Prev Arrow-->
      <li class="c-pagination__item">
        <NuxtLink
          class="c-pagination__link"
          :to="`/products/${prevPage}`"
        >
          <common-base-icon name="arrow-left" :size="20" />
        </NuxtLink>
      </li>
      <!-- Page Numbers -->
      <li v-for="n in pageNumbers" :key="n" class="c-pagination__item">
        <NuxtLink
          :to="`/products/${n}`"
          :class="['c-pagination__link',
                   Number(n) === Number($route.params.slug || 1) ? '-isActive' : '']"
          v-text="n"
        />
      </li>
      <!-- Next Arrow -->
      <li class="c-pagination__item">
        <NuxtLink
          :to="`/products/${nextPage}`"
          class="c-pagination__link"
        >
          <common-base-icon name="arrow-right" :size="20" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { productModule } from '@/utils/store-accessor'

@Component
export default class ProductsPagination extends Vue {
  private readonly productPerPage = 6;
  private pageNumbers: number = 0;

  getPageNumbers () {
    if (productModule.productsCount > 0) {
      this.pageNumbers = Math.floor(productModule.productsCount / this.productPerPage)
    }
  }

  get prevPage (): number {
    return Number(this.$route.params.slug) > 1 ? Number(this.$route.params.slug) - 1 : 1
  }

  get nextPage (): number {
    const currentPage = Number(this.$route.params.slug)

    return currentPage < this.pageNumbers
      ? currentPage + 1
      : this.pageNumbers
  }

  mounted () : void {
    this.getPageNumbers()
  }
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
    @include mx.use-color(v.$primary-color);

    @include mx.break-point('phone-md') {
      width: 30px;
      height: 30px;
    }

    &.-isActive {
      @include mx.use-color(v.$light-color);
      @include mx.use-bg-color(v.$primary-color);
    }
  }
}
</style>
