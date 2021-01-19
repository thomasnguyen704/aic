<template>
  <footer class="bg-secondary text-white small py-2">
    <b-container>
      <p class="strong">Locations</p>
      <b-row>
        <b-col lg="7" class="pb-2">
          <b-row>
            <b-col>
              <a href="https://maps.google.com/?q=5410 North Tryon St, Charlotte, NC 28213" target="_blank">
                <address> 
                  <span>5410 N. Tryon St.</span> <br/> Charlotte, NC 28213
                </address>
              </a>
              <a href="tel:704-372-7200" target="_blank">English 704-372-7200</a> <br/>
              <a href="tel:704-777-0904" target="_blank">Español 704-777-0904</a>
            </b-col>
            <b-col>
              <a href="https://maps.google.com/?q=2501 Beatties Ford Rd, Charlotte, NC 28216" target="_blank">
                <address>
                  <span>2501 Beatties Ford Rd.</span> <br/> Charlotte, NC 28216
                </address>
              </a>
              <a href="tel:704-393-8447" target="_blank">English 704-393-8447</a> <br/>
              <a href="tel:704-777-0905" target="_blank">Español 704-777-0905</a>
            </b-col>
          </b-row>
        </b-col>

        <b-col lg="5">
          <span class="strong">Email </span><a href="mailto:info@accidentandinjurycharlotte.com" target="_blank">info@accidentandinjurycharlotte.com</a>
        </b-col>
      </b-row>

    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  footer {
    width: 100%;
    min-height: 10vh;
  }
  footer a {
    color: white;
  }
  address {
    margin: 0;
  }
  .strong{
    margin: 0;
  }
</style>