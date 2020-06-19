<template>
  <a-button :type='type' :html-type='htmlType' class='btn' :class='className'>
    {{text}}
  </a-button>
</template>

<script>
  export default {
    props: {
      className: String || undefined,
      type: String || undefined,
      htmlType: String || undefined,
      text: String
    }
  }
</script>

<style lang='sass'>
  @import './Button.sass'
</style>
