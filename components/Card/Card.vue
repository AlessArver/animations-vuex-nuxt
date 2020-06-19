<template>
  <a-card :bordered="false" class='card' :class='className'>
    <slot/>
  </a-card>
</template>

<script>
  export default {
    props: {
      className: String
    }
  }
</script>

<style lang='sass'>
  @import "./Card.sass"
</style>
