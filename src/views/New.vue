<template>
  <div class="py-5 container">
    <b-row>
      <b-col lg="6">
        <h3 class="mb-4">Get Your Free Appointment Consultation</h3>
        <NewForm />
        <hr class="mb-5" />
        <p>
          <a href="https://www.dropbox.com/s/aa011r7en3mphij/new_patient_en.pdf?raw=1" target="_blank">Click here to view or download our New Patient Registration Form.</a>
        </p>
      </b-col>
      <b-col lg="6">
        <h5>Learn What to Expect During Your Treatment at Accident Injury Center</h5>
        <p class="font-weight-light">Accident Injury Center of Charlotte is the leading accident injury chiropractor in the area. Our doctors specialize in treating patients with a wide range of injuries, including those who have suffered in car accidents. Our Chiropractors genuinely care about their patients and love helping them return to full health after any type of accident or injury. Do not hesitate if you are suffering, click on the button below and make an appointment today. One of our chiropractors are waiting to speak with you!</p>
        
        <div v-for="item in steps" :key="item.title">
          <h5>{{ item.title }}</h5>
          <p class="font-weight-light">{{ item.body }}</p>
        </div>
      </b-col>
    </b-row>
    <div class="last"></div>
  </div>

</template>

<script>
  import NewForm from '@/components/NewForm.vue'
  export default {
    name: 'New',
    components: {
      NewForm
    },
    data() {
      return {
        steps: [{
            title: 'Initial Consultation',
            body: 'The first time you come to our accident injury office, you will meet your chiropractic doctor and discuss your pain and the cause of your injuries. Your chiropractor will then officially diagnose you and prescribe a specialized treatment plan that is designed just for you and your individual injuries. Your chiropractic doctor will look at your spinal alignment to understand your body\'s mechanics and help determine the extent of your injuries. X-rays will need to be taken to get a better look at the spine, and an additional test, like an MRI, may be requested by the doctor, depending on the severity of your pain and injuries. If a car accident caused your injuries and pain, during your initial consultation, our office will contact the appropriate insurance companies to guarantee you will not be stuck with the bill for an accident and resulting injuries that you are not at fault for.',
            image: 'https://www.dropbox.com/s/1i7ncs9mg9i8whl/001.jpg?raw=1',
            imgAlt: 'Initial Consultation'
          },
          {
            title: 'During Your Treatment',
            body: 'If you decide to treat with us, your first official appointment will consist of different types of adjustments focused on relieving pain in your back, neck and other injured areas. Often times, you will be placed on the specially designed chiropractic table lying face down, and the doctor will perform manual and instrument assisted adjustments to your back, neck, and spine. These controlled forces will often produce a crack or popping noise. This sound is just the release of gas from between the joints and is completely normal and safe.',
            image: 'https://www.dropbox.com/s/q3z1je9iv2p6r55/002.jpg?raw=1',
            imgAlt: 'During Your Treatment'
          },
          {
            title: 'After Your Treatment',
            body: 'After treatment concludes, most patients feel immediate relief in the injured areas, but it is also normal to feel a slight soreness in the recently adjusted area. Many patients report that they not only feel pain relief, but also have more energy and feel more relaxed. Those that report a slight soreness in the treated area are experiencing a common reaction to muscles and joints being pulled in a direction they are not accustom to. This soreness is expected and is usually very mild and short lived Some patients do not report feeling any changes at all immediately after their treatment, however, changes are still occurring within the body. Restoring normal energy flow to each body part is an essential part of the healing process. This restoration effects neuromuscular performance and will ultimately help you return to full health!',
            image: 'https://www.dropbox.com/s/5hzl1nze56ek647/003.jpg?raw=1',
            imgAlt: 'After Your Treatment'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .card {
    min-height: 25vh !important;
  }
</style>