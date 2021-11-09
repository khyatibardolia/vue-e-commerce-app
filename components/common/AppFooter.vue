<template>
  <footer class="c-appFooter">
    <p class="c-appFooter__text">
      Copyright © {{ currentYear }} All rights reserved | The Plaza
    </p>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  private readonly currentYear = new Date().getFullYear();
}
</script>

<style lang="scss" scoped>
@use "assets/styles/abstracts/variables" as v;
@use "assets/styles/abstracts/mixins" as mx;

.c-appFooter {
  @include mx.use-color(v.$light-color);
  @include mx.use-bg-color(v.$bg-grey);

  width: 100%;
  padding: 22px;

  text-align: center;

  &__text {
    margin: 0;
  }
}
</style>
