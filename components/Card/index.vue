<template>
  <vs-card :bordered="false" class="card" :class="className">
    <slot />
  </vs-card>
</template>

<script>
export default {
  props: {
    className: String
  }
};
</script>

<style lang="sass">
@import "./index.sass"
</style>
