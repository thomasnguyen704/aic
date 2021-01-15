<template>
  <div>
    <div class="bg-light py-5">
      <b-container>
        <h3 class="font-weight-light">Get Your Free Appointment Consultation</h3>
        <b-form @submit="onSubmit" v-if="show">
          <b-form-group id="input-group-1" label="Email Address:" label-for="input-1" description="We'll never share your email with anyone else.">
            <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email" required />
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input id="input-2" v-model="form.name" placeholder="Enter name" required />
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-container>
    </div>

    <div class="py-5">
      <b-container>
        <h3 class="mb-4 font-weight-light">Learn What to Expect During Your Treatment at Accident Injury Center</h3>

        <p class="h5 mt-4">Initial Consultation</p>
        <p> The first time you come to our accident injury office, you will meet your chiropractic doctor and discuss
          your pain and the cause of your injuries. Your chiropractor will then officially diagnose you and prescribe
          a specialized treatment plan that is designed just for you and your individual injuries. Your chiropractic
          doctor will look at your spinal alignment to understand your body's mechanics and help determine the extent
          of your injuries. X-rays will need to be taken to get a better look at the spine, and an additional test,
          like an MRI, may be requested by the doctor, depending on the severity of your pain and injuries. If a car
          accident caused your injuries and pain, during your initial consultation, our office will contact the
          appropriate insurance companies to guarantee you will not be stuck with the bill for an accident and
          resulting injuries that you are not at fault for.</p>

        <p class="h5 mt-4">During Your Treatment</p>
        <p>If you decide to treat with us, your first official appointment will consist of different types of
          adjustments focused on relieving pain in your back, neck and other injured areas. Often times, you will be
          placed on the specially designed chiropractic table lying face down, and the doctor will perform manual and
          instrument assisted adjustments to your back, neck, and spine. These controlled forces will often produce a
          crack or popping noise. This sound is just the release of gas from between the joints and is completely
          normal and safe.</p>

        <p class="h5 mt-4">After Your Treatment</p>
        <p>After treatment concludes, most patients feel immediate relief in the injured areas, but it is also normal
          to feel a slight soreness in the recently adjusted area. Many patients report that they not only feel pain
          relief, but also have more energy and feel more relaxed. Those that report a slight soreness in the treated
          area are experiencing a common reaction to muscles and joints being pulled in a direction they are not
          accustom to. This soreness is expected and is usually very mild and short lived Some patients do not report
          feeling any changes at all immediately after their treatment, however, changes are still occurring within
          the body. Restoring normal energy flow to each body part is an essential part of the healing process. This
          restoration effects neuromuscular performance and will ultimately help you return to full health!</p>

        <p class="mt-4">Accident Injury Center of Charlotte is the leading accident injury chiropractor in the area.
          Our doctors specialize in treating patients with a wide range of injuries, including those who have suffered
          in car accidents. Our Chiropractors genuinely care about their patients and love helping them return to full
          health after any type of accident or injury. Do not hesitate if you are suffering, click on the button below
          and make an appointment today. One of our chiropractors are waiting to speak with you!</p>
      </b-container>
      <div class="last"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped>
</style>