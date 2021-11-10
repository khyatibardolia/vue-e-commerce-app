<template>
  <component
    :is="component"
    class="c-baseIcon"
    :aria-labelledby="name"
    :height="size"
    :view-box="viewBox"
    :fill="fillColor"
    :stroke="color"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
@Prop({ type: String, default: '' }) private readonly name?: string
@Prop({ type: String, default: '' }) private readonly fillColor?: string
@Prop({ type: String, default: '' }) private readonly color?: string
@Prop({ type: String, default: '0 0 512 512' }) private readonly viewBox?: string
@Prop({ type: [ Number, String ], default: 18 }) private readonly size?: string

private component: any = null;

public getImage (name: string) {
  return name
    ? {
      component: import(`@/assets/svg-icons/${this.name}.svg`),
    }
    : null
}

created () : void {
  this.component = () => this.getImage(this.name || '')
}
}
</script>

<style lang="scss" scoped>
.c-baseIcon {
  svg {
    transition: all 0.5s ease;
  }
}
</style>
