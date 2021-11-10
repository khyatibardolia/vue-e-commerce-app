<template>
  <button
    :class="['c-baseButton', fullWidth ? '-fullWidth' : '']"
    v-bind="$attrs"
  >
    <span class="c-baseButton__span">
      <BaseIcon
        v-if="icon"
        class="c-baseButton__icon"
        :name="icon"
        :size="20"
      />
      {{ btnLabel }}
    </span>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
@Prop({ type: String, default: '' }) private readonly btnLabel?: string
@Prop({ type: String, default: '' }) private readonly icon?: string
@Prop({ type: Boolean }) private readonly fullWidth?: string
}
</script>

<style lang="scss" scoped>
@use "assets/styles/abstracts/variables" as v;
@use "assets/styles/abstracts/mixins" as mx;

.c-baseButton {
  @include mx.use-bg-color(v.$light-color);

  margin: 0;
  padding: 13px;

  cursor: pointer;
  letter-spacing: 1.39px;
  text-transform: uppercase;

  border: 1px solid v.$disabled-color;
  border-radius: 100px;

  font-size: 15px;

  &:hover {
    @include mx.use-color(v.$light-color);

    border: 1px solid v.$primary-color;
    background: linear-gradient(to right, v.$light-color 0%, v.$primary-color 0%, v.$primary-color-light 100%);
  }

  &__span {
    @include mx.d-flex(center, center, false);
  }

  &__icon {
    margin-right: 10px;
  }

  &.-fullWidth {
    width: 100%;
  }
}
</style>
