<template>
  <b-form @submit="saveData" @reset="onReset" v-if="show" class="mb-5">
    <b-row>
      <b-col md="6">
        <b-form-group id="input-group-first" label="First Name" label-for="input-first">
          <b-form-input id="input-first" v-model="contact.first" required />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group id="input-group-last" label="Last Name" label-for="input-last">
          <b-form-input id="input-last" v-model="contact.last" required />
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="6">
        <b-form-group id="input-group-phone" label="Phone" label-for="input-phone">
          <b-form-input id="input-phone" v-model="contact.phone" type="tel" required />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group id="input-group-email" label="Email Address" label-for="input-email">
          <b-form-input id="input-email" v-model="contact.email" type="email" />
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="6">
        <b-form-group id="input-group-accident" label="Type of Accident or Injury" label-for="input-accident">
          <b-form-select id="input-accident" v-model="contact.accident" :options="accident_options" />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group id="input-group-accident_date" label="Date of Accident or Injury" label-for="input-accident_date">
          <b-form-input id="input-accident_date" v-model="contact.accident_date" type="date"/>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="6">
        <b-form-group id="input-group-preferred_visit_date" label="Preferred Visit Date" label-for="input-preferred_visit_date">
          <b-form-input id="input-preferred_visit_date" v-model="contact.preferred_visit_date" type="date"/>
        </b-form-group>
      </b-col>
      <b-col md="6"></b-col>
    </b-row>

    <div class="mt-5">
      <b-button class="mr-2" type="reset" variant="danger">Reset</b-button>
      <b-button 
        type="submit" 
        variant="primary"
      >
        Submit
      </b-button>
    </div>
  </b-form>
</template>

<script>
import {db} from '../db.js'

export default {
  name: 'NewForm',
  data() {
    return {
      contact: {
        first: null,
        last: null,
        email: null,
        phone: null,
        accident: null,
        accident_date: null,
        preferred_visit_date: null
      },
      accident_options: [
        { value: 'Car accident', text: 'Car accident' },
        { value: 'Truck accident', text: 'Truck accident' },
        { value: 'Slip and fall', text: 'Slip and fall' },
        { value: 'Work injury', text: 'Work injury' },
        { value: 'Back pain', text: 'Back pain' },
        { value: 'Neck pain', text: 'Neck pain' },
        { value: 'Other', text: 'Other' },
      ],
      show: true
    }
  },
  methods: {
    saveData(){
      db.collection("contacts").add(this.contact)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        alert("Thanks for sending us your contact information. We will be reaching out to you with more information about your free consulation. Your confirmation ID is " + docRef.id);
        this.reset();
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    },
    reset(){
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.contact));
    },
    onReset(event) {
      event.preventDefault();
      Object.assign(this.$data, this.$options.data.apply(this));
    }
  }
}
</script>

<style scoped></style>