<template>
  <main class="l-appBody">
    <Products />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Products from './products/index.vue'

@Component({
  components: { Products },
})
export default class extends Vue {

}
</script>

<style lang="scss" scoped>
  .l-appBody {
    height: 100vh;
    margin: 80px 0 20px 0;
  }
</style>
