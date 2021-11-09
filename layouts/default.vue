<template>
  <div class="l-default">
    <AppHeader />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'

@Component({
  components: { AppHeader, AppFooter },
})
export default class extends Vue {

}
</script>

<style lang="scss" scoped>
.l-default {
  padding: 0;
}
</style>
