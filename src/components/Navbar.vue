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
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </nav>
</div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
</style>