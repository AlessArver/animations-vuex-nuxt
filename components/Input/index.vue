<template>
  <vs-input
    :placeholder="placeholder"
    class="input"
    :class="className"
    v-model="dataValue"
  />
</template>

<script>
export default {
  props: {
    className: String || null,
    placeholder: String || null,
    value: String || null
  },
  data: () => ({
    dataValue: ""
  }),
  watch: {
    value(value) {
      this.dataValue = value;
    }
  }
};
</script>

<style lang="sass">
@import './index.sass'
</style>
