<template>
  <vs-navbar v-model="current" class="navbar">
    <vs-navbar-item index="0">
      <nuxt-link to="/">
        Home
      </nuxt-link>
    </vs-navbar-item>
    <vs-navbar-item index="1">
      <nuxt-link to="/about">
        About
      </nuxt-link>
    </vs-navbar-item>
    <vs-navbar-item index="2">
      <nuxt-link to="/hmm">
        Hmmm
      </nuxt-link>
    </vs-navbar-item>
  </vs-navbar>
</template>

<script>
export default {
  data() {
    return {
      current: ["mail"]
    };
  }
};
</script>

<style lang="sass">
@import './Navbar'
</style>
