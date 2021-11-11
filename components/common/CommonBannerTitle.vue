<template>
  <div class="c-commonBannerTitle">
    <span class="c-commonBannerTitle__span">{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: String, default: '' }) private readonly title!: string
}
</script>

<style lang="scss" scoped>
@use "assets/styles/abstracts/variables" as v;
@use "assets/styles/abstracts/mixins" as mx;

.c-commonBannerTitle {
  @include mx.use-bg-color(v.$bg-grey-light);
  @include mx.use-color(v.$primary-color);

  padding: 4rem;

  text-align: center;
  text-transform: capitalize;

  &__span {
    font-size: 30px;
    font-weight: 500;
  }
}
</style>
