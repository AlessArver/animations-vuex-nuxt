<template>
  <div class='app'>
    <Navbar/>
    <div class='app-wrapper'>
      <nuxt/>
    </div>
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar/Navbar'

  export default {
    components: { Navbar }
  }

</script>

<style lang='sass'>
  @import '~/assets/styles/index.sass'
</style>
