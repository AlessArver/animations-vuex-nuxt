<template>
  <a-input :placeholder='placeholder' class='input' :class='className' v-model='dataValue'/>
</template>

<script>
  export default {
    props: {
      className: String || null,
      placeholder: String || null,
      myValue: String || null
    },
    data: () => ({
      dataValue: ''
    }),
    watch: {
      myValue(value) {
        this.dataValue = value
      }
    }
  }
</script>

<style lang='sass'>
  @import './Input.sass'
</style>
