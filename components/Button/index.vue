<template>
  <vs-button class="btn" :class="className">
    {{ text }}
  </vs-button>
</template>

<script>
export default {
  props: {
    className: String || undefined,
    text: String
  }
};
</script>

<style lang="sass">
@import './index.sass'
</style>
