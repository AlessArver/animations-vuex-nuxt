<template>
  <div class="app">
    <Navbar />
    <transition>
      <div class="app__wrapper">
        <Nuxt />
      </div>
    </transition>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar/Navbar";

export default {
  components: { Navbar }
};
</script>

<style lang="sass">
@import '~/assets/styles/index.sass'

.page-enter-active,
.page-leave-active
  transition: opacity 0.5s

.page-enter,
.page-leave-to
  opacity: 0
</style>
