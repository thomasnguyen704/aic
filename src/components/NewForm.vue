<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="mb-5">
    <b-row>
      <b-col md="6">
        <b-form-group id="input-group-first" label="First Name" label-for="input-first">
          <b-form-input id="input-first" v-model="form.first" required />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group id="input-group-last" label="Last Name" label-for="input-last">
          <b-form-input id="input-last" v-model="form.last" required />
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="6">
        <b-form-group id="input-group-phone" label="Phone" label-for="input-phone">
          <b-form-input id="input-phone" v-model="form.phone" type="tel" required />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group id="input-group-email" label="Email Address" label-for="input-email">
          <b-form-input id="input-email" v-model="form.email" type="email" />
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="6">
        <b-form-group id="input-group-accident" label="Type of Accident or Injury" label-for="input-accident">
          <b-form-select id="input-accident" v-model="form.accident" :options="form.accident_options" required />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group id="input-group-accident_date" label="Date of Accident or Injury" label-for="input-accident_date">
          <b-form-datepicker id="input-accident_date" v-model="form.accident_date" type="date"/>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="6">
        <b-form-group id="input-group-preferred_visit_date" label="Preferred Visit Date" label-for="input-preferred_visit_date">
          <b-form-datepicker id="input-preferred_visit_date" v-model="form.preferred_visit_date" type="date"/>
        </b-form-group>
      </b-col>
      <b-col md="6"></b-col>
    </b-row>

    <div class="mt-5">
      <b-button class="mr-2" type="reset" variant="danger">Reset</b-button>
      <b-button type="submit" variant="primary">Submit</b-button>
    </div>
  </b-form>
</template>

<script>
export default {
  name: 'NewForm',
  data() {
    return {
      form: {
        first: '',
        last: '',
        email: '',
        phone: '',
        accident_type: '',
        accident_options: [
          { value: 'car', text: 'Car accident' },
          { value: 'truck', text: 'Truck accident' },
          { value: 'slip', text: 'Slip and fall' },
          { value: 'work', text: 'Work injury' },
          { value: 'back', text: 'Back pain' },
          { value: 'neck', text: 'Neck pain' },
          { value: 'other', text: 'Other' },
        ],
        accident_date: '',
        preferred_visit_date: ''
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
      this.form.first = ''
      this.form.last = ''
      this.form.email = ''
      this.form.phone = ''
      this.form.accident_type = ''
      this.form.accident_date = ''
      this.form.preferred_visit_date = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped></style>