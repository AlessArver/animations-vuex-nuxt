<template>
  <div>
    <a-menu v-model='current' mode='horizontal' class='navbar'>
      <a-menu-item>
        <nuxt-link to='/'>
          Home
        </nuxt-link>
      </a-menu-item>
      <a-menu-item>
        <nuxt-link to='/about'>
          About
        </nuxt-link>
      </a-menu-item>
      <a-menu-item>
        <nuxt-link to='/hmm'>
          Hmmm
        </nuxt-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        current: ['mail']
      }
    }
  }
</script>

<style lang='sass'>
  @import './Navbar'
</style>
