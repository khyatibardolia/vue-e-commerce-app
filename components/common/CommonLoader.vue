<template>
  <div class="c-loader">
    <div
      class="c-loader__wrapper"
    >
      <div class="c-loader__spinner" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {}
</script>

<style lang="scss" scoped>
  @use "assets/styles/abstracts/variables" as v;
  @use "assets/styles/abstracts/mixins" as mx;

  .c-loader {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: rgba(v.$secondary-color, 0.3);

    &__wrapper {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      width: 200px;
      height: 200px;
      margin: auto;
    }

    &__spinner {
      position: absolute;
      top: 20px;
      left: 20px;

      display: block;

      width: 160px;
      height: 160px;

      animation: loader 1s linear infinite;

      border-radius: 80px;
      box-shadow: 1px 1px 2px 0 rgba(v.$secondary-color, 0.2);
    }
    @-webkit-keyframes loader {
      0% {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }

      100% {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes loader {
      0% {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }

      100% {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
</style>
