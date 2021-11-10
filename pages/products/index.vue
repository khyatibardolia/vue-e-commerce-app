<template>
  <div class="c-products">
    <div class="c-products__list">
      <div class="c-products__gridContainer">
        <div
          v-for="n in 6"
          :key="n"
          class="c-products__gridItem"
        >
          <ItemCard />
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

@Component({
  components: { ItemCard },
  layout: 'default',
})
export default class extends Vue {

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
    position: relative;
  }
}
</style>
