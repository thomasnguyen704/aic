<template>
  <div class="py-5">
    <b-container>
      <b-row>
        <b-col>
          <h2 class="mb-4">Get Your Free Appointment Consultation</h2>
          <NewForm />
        </b-col>
        <b-col>
          Address, phone and email contact info
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NewForm from '@/components/NewForm.vue'
export default {
  name: "Contact",
  components: {
    NewForm
  }
}
</script>

<style scoped>

</style>