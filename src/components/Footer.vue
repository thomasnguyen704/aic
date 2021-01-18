<template>
  <footer class="bg-secondary text-white pt-3 pb-1 small">
    <b-container>
      <b-row>
        <b-col lg="6">
          <b-row>
            <b-col>
              <span class="strong">North Charlotte</span>
              <address> 5410 North Tryon St <br/> Charlotte, NC 28213 </address>
            </b-col>
            <b-col>
              <span class="strong">Uptown Charlotte</span> <br/>
              <address> 2501 Beatties Ford Rd <br/> Charlotte, NC 28216 </address>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="6">
          <b-row>
            <b-col>
              <span class="strong">Phone</span>
              <p>
              English: (704) 372-7200 <br/>
              Español: (704) 777-0904
              </p>
            </b-col>
            <b-col>
              <span class="strong">Email</span>
              <p>info@accidentandinjurycharlotte.com</p>
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
</style>