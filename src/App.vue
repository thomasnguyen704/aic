<template>
  <div>
    <Navbar class="sticky-top" />
    <article>
      <router-view />
    </article>
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
    min-height: 100vh;
  }
  .last {
    padding-bottom: 40vh;
  }
  .strong {
    font-weight: 800;
  }
</style>
