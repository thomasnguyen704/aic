<template>
<div>
  <nav sticky>
    <b-navbar toggleable="lg" type="dark" variant="dark" class="small">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-navbar-brand to="/">Accident & Injury <span class="text-danger">Center</span></b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/service">Services</b-nav-item>
            <b-nav-item to="/new">New Patient</b-nav-item>
            <b-nav-item to="/ref">Attorney Referral</b-nav-item>
            <b-nav-item to="/contact">Contact</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto" id="rightNav">
            <b-nav-item href="https://www.facebook.com/accidentandinjurycharlotte" target="_blank">
              <i class="fa fa-facebook fa-2x" />
            </b-nav-item>
            <b-nav-item href="https://www.yelp.com/biz/accident-and-injury-center-charlotte-3?osq=accident+injury+center" target="_blank">
              <i class="fa fa-yelp fa-2x" />
            </b-nav-item>
            <b-nav-item>
              <b-button v-b-modal.modal-1 variant="outline-danger" class="mx-1 btn-sm">COVID-19 Notice</b-button>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </nav>

  <b-modal id="modal-1" size="lg" title="COVID-19 Notice" hide-footer centered>
    <p class="my-4 w-100">
      <b-img class="modal-img" src="https://www.dropbox.com/s/9uhisr78h07vtv5/covid.png?raw=1" fluid />
    </p>
  </b-modal>
</div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
</style>