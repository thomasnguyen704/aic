<template>
  <div class="py-5 bg-light">
    <b-container>
      <b-row>
        <b-col lg="6">
          <h3 class="pb-3">Referral</h3>
          <NewForm />
        </b-col>
        <b-col lg="6">
          <h3 class="pb-3">After an Auto accident you will get a call from the at fault party’s insurance company. Would you know what to say?</h3> 
          <p>Fill out the form to get an attorney referral today! Get a qualified Personal Injury Lawyer Now! Accident and Injury Center can refer you to some great attorneys who specialize in personal injury cases, and they won’t charge huge fees. That means less hassle and more money in your pocket. There is no obligation, just ask us and we will provide you a selection of great referarals!</p>
          <p>You need a quality Charlotte Personal Injury Attorney to protect your interests. The insurance company of the at fault party will try and offer you a meager settlement after they send one of their representatives to take pictures of the accident. The natural thing to do is take their offer. Don't! They represent their company’s interests not yours. We can help put you in contact with trusted legal professionals who will help fight for your just compensation.</p>
        </b-col>
      </b-row>
    </b-container>
    <div class="last"></div>
  </div>
</template>

<script>
import NewForm from '@/components/NewForm.vue'
export default {
  name: 'Ref',
  components: {
    NewForm
  }
}
</script>

<style scoped>

</style>