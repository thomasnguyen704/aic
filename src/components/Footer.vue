<template>
  <footer class="bg-dark text-white small pt-2 pb-1">
    <b-container>
      <b-row>
        <b-col lg="2">
          <p class="strong" lg="1">Locations</p>
        </b-col>
        <b-col lg="8" class="pb-2">
          <b-row>
            <b-col>
              <a href="https://maps.google.com/?q=5410 North Tryon St, Charlotte, NC 28213" target="_blank">
                <address> 
                  <span>5410 N. Tryon St. Charlotte, NC 28213</span>
                </address>
              </a>
              <a href="tel:704-372-7200" target="_blank">English 704-372-7200</a> <br/>
              <a href="tel:704-777-0904" target="_blank">Español 704-777-0904</a>
            </b-col>
            <b-col>
              <a href="https://maps.google.com/?q=2501 Beatties Ford Rd, Charlotte, NC 28216" target="_blank">
                <address>
                  <span>2501 Beatties Ford Rd. Charlotte, NC 28216</span>
                </address>
              </a>
              <a href="tel:704-393-8447" target="_blank">English 704-393-8447</a> <br/>
              <a href="tel:704-777-0905" target="_blank">Español 704-777-0905</a>
            </b-col>
          </b-row>
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