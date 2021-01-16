<template>
  <div>
    <Navbar class="sticky-top" />
    <router-view />
    <Footer class="fixed-bottom" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
  article {
    min-height: 70vh;
    padding: 5em 0 5em 0;
  }
  .last {
    padding-bottom: 40vh;
  }
  .strong {
    font-weight: 800;
  }
</style>
