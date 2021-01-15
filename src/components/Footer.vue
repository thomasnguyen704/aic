<template>
  <footer class="bg-secondary text-white py-4 small">
    <b-container>
      <b-row>
        <b-col lg="6">
          <b-row>
            <b-col>
              <span class="strong">North Charlotte</span>
              <address> 5410 North Tryon Street <br/> Charlotte, NC 28213 </address>
            </b-col>
            <b-col>
              <span class="strong">Uptown Charlotte</span> <br/>
              <address> 2501 Beatties Ford Rd <br/> Charlotte, NC 28216 </address>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="6">
          <span class="strong">Contact</span>
          <p>
            English: (704) 372-7200 <br/>
            Español: (704) 777-0904 <br/>
            Email: info@accidentandinjurycharlotte.com
          </p>
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