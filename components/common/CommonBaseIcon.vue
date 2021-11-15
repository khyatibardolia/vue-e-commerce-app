<template>
  <span v-bind="$attrs" class="c-baseIcon">
    <component
      :is="require(`@/assets/svg-icons/${name}.svg`).default"
      :aria-labelledby="name"
      :height="size"
      :view-box="viewBox"
      :fill="fillColor"
      :stroke="color"
    />
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: String, default: '' }) private readonly name!: string
  @Prop({ type: String, default: '' }) private readonly fillColor!: string
  @Prop({ type: String, default: '' }) private readonly color!: string
  @Prop({ type: String, default: '0 0 512 512' }) private readonly viewBox!: string
  @Prop({ type: [ Number, String ], default: 18 }) private readonly size!: string
}
</script>

<style lang="scss" scoped>
@use "assets/styles/abstracts/mixins" as mx;

.c-baseIcon {
  @include mx.d-flex();
}
</style>
