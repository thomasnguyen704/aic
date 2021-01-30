<template>
  <div class="my-5">
    <b-container fluid class="px-5">
      <p class="lead">Consultation Requests</p>
      <b-table 
        class="rowStyle text-capitalize"
        head-variant="light" 
        hover 
        responsive
        sort-by="submit_date"
        sort-desc
        :items="contacts" 
        :fields="fields"
      />
    </b-container>
  </div>

</template>

<script>
import {db} from '../db.js'

export default {
  name: 'Leads',
  data (){
    return {
      contacts: [],
      fields: [
        { key: 'first', sortable: true },
        { key: 'last', sortable: true },
        { key: 'phone', sortable: true },
        { key: 'email', sortable: true },
        { key: 'accident', sortable: true },
        { key: 'accident_date', sortable: true },
        { key: 'preferred_visit_date', sortable: true },
        { key: 'submit_date', sortable: true }
      ]
    }
  },
  created(){
    db.collection("contacts").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.contacts.push(doc.data());
      });
    });
  }
}
</script>

<style scoped>
  .rowStyle {
    font-size: .8rem;
  }
</style>